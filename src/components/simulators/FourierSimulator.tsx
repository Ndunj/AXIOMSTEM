import React, { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX, RotateCcw, Award, CheckCircle, Activity } from "lucide-react";

interface FourierProps {
  fundamentalFreq: number; // 110 - 880 Hz
  harmonicCount: number; // 1 - 25
  damping: number; // 0 - 1.0
  onMetricUpdate?: (metrics: Record<string, number>) => void;
}

export const FourierSimulator: React.FC<FourierProps> = ({
  fundamentalFreq,
  harmonicCount,
  damping,
  onMetricUpdate,
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [waveformType, setWaveformType] = useState<"square" | "sawtooth" | "triangle">("square");

  const audioCtxRef = useRef<AudioContext | null>(null);
  const oscillatorsRef = useRef<{ osc: OscillatorNode; gain: GainNode }[]>([]);
  const animRef = useRef<number>(0);
  const timeRef = useRef<number>(0);
  const waveHistoryRef = useRef<number[]>([]);

  // Stop audio synthesis
  const stopAudio = () => {
    oscillatorsRef.current.forEach(({ osc, gain }) => {
      try {
        gain.gain.setValueAtTime(0, audioCtxRef.current?.currentTime || 0);
        osc.stop();
        osc.disconnect();
      } catch (e) {}
    });
    oscillatorsRef.current = [];
    setIsPlayingAudio(false);
  };

  // Start Web Audio API harmonic additive synthesis
  const toggleAudio = () => {
    if (isPlayingAudio) {
      stopAudio();
      return;
    }

    try {
      const AudioCtxClass = window.AudioContext || (window as any).webkitAudioContext;
      const ctx = new AudioCtxClass();
      audioCtxRef.current = ctx;

      const masterGain = ctx.createGain();
      masterGain.gain.setValueAtTime(0.15, ctx.currentTime);
      masterGain.connect(ctx.destination);

      const oscs: { osc: OscillatorNode; gain: GainNode }[] = [];

      for (let n = 1; n <= harmonicCount; n++) {
        let amp = 0;
        if (waveformType === "square") {
          if (n % 2 !== 0) amp = 4 / (Math.PI * n);
        } else if (waveformType === "sawtooth") {
          amp = (2 / (Math.PI * n)) * (n % 2 === 0 ? -1 : 1);
        } else if (waveformType === "triangle") {
          if (n % 2 !== 0) amp = (8 / (Math.PI * Math.PI * n * n)) * (((n - 1) / 2) % 2 === 0 ? 1 : -1);
        }

        amp *= Math.exp(-damping * (n - 1));

        if (Math.abs(amp) > 0.001) {
          const osc = ctx.createOscillator();
          const gain = ctx.createGain();
          osc.type = "sine";
          osc.frequency.setValueAtTime(fundamentalFreq * n, ctx.currentTime);
          gain.gain.setValueAtTime(Math.abs(amp) * 0.4, ctx.currentTime);
          osc.connect(gain);
          gain.connect(masterGain);
          osc.start();
          oscs.push({ osc, gain });
        }
      }

      oscillatorsRef.current = oscs;
      setIsPlayingAudio(true);
    } catch (e) {
      console.warn("Audio Context init error", e);
    }
  };

  useEffect(() => {
    return () => {
      stopAudio();
      cancelAnimationFrame(animRef.current);
    };
  }, []);

  // Animate Rotating Epicycles & Wave Trace
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const width = canvas.width;
    const height = canvas.height;

    const step = () => {
      ctx.clearRect(0, 0, width, height);

      // Dark canvas
      ctx.fillStyle = "#0c1222";
      ctx.fillRect(0, 0, width, height);

      const epicycleCenterX = 150;
      const centerY = height / 2;
      const waveStartX = 320;

      let prevX = epicycleCenterX;
      let prevY = centerY;

      // Draw Epicycle Circles and Rotating Vectors
      for (let n = 1; n <= harmonicCount; n++) {
        let amp = 0;
        if (waveformType === "square") {
          if (n % 2 !== 0) amp = (4 / (Math.PI * n)) * 60;
        } else if (waveformType === "sawtooth") {
          amp = ((2 / (Math.PI * n)) * 60) * (n % 2 === 0 ? -1 : 1);
        } else if (waveformType === "triangle") {
          if (n % 2 !== 0) amp = (8 / (Math.PI * Math.PI * n * n)) * 70;
        }

        amp *= Math.exp(-damping * (n - 1) * 0.15);

        if (Math.abs(amp) > 0.5) {
          const radius = Math.abs(amp);
          const angle = n * timeRef.current;
          const nextX = prevX + radius * Math.cos(angle);
          const nextY = prevY + radius * Math.sin(angle);

          // Epicycle Circle
          ctx.strokeStyle = "rgba(148, 163, 184, 0.18)";
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.arc(prevX, prevY, radius, 0, Math.PI * 2);
          ctx.stroke();

          // Phasor Vector Arrow
          ctx.strokeStyle = n === 1 ? "#38bdf8" : "#c084fc";
          ctx.lineWidth = 1.5;
          ctx.beginPath();
          ctx.moveTo(prevX, prevY);
          ctx.lineTo(nextX, nextY);
          ctx.stroke();

          prevX = nextX;
          prevY = nextY;
        }
      }

      // Add to Wave History
      waveHistoryRef.current.unshift(prevY);
      if (waveHistoryRef.current.length > width - waveStartX) {
        waveHistoryRef.current.pop();
      }

      // Connecting line from final phasor tip to wave start
      ctx.strokeStyle = "rgba(56, 189, 248, 0.4)";
      ctx.setLineDash([3, 2]);
      ctx.beginPath();
      ctx.moveTo(prevX, prevY);
      ctx.lineTo(waveStartX, prevY);
      ctx.stroke();
      ctx.setLineDash([]);

      // Draw Time-Domain Waveform Output
      ctx.strokeStyle = "#38bdf8";
      ctx.lineWidth = 2.5;
      ctx.beginPath();

      for (let i = 0; i < waveHistoryRef.current.length; i++) {
        const x = waveStartX + i;
        const y = waveHistoryRef.current[i];
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.stroke();

      // Horizontal Baseline & Labels
      ctx.strokeStyle = "rgba(255, 255, 255, 0.1)";
      ctx.beginPath();
      ctx.moveTo(waveStartX, centerY);
      ctx.lineTo(width - 20, centerY);
      ctx.stroke();

      ctx.fillStyle = "#94a3b8";
      ctx.font = "10px sans-serif";
      ctx.fillText("Rotating Phasors (Epicycles)", 30, 24);
      ctx.fillText("Synthesized Time Waveform f(t)", waveStartX + 20, 24);

      timeRef.current += 0.035;
      animRef.current = requestAnimationFrame(step);
    };

    animRef.current = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animRef.current);
  }, [harmonicCount, waveformType, damping]);

  const isClarinetMatch = harmonicCount >= 7 && waveformType === "square";

  useEffect(() => {
    if (onMetricUpdate) {
      onMetricUpdate({
        harmonicPurity: isClarinetMatch ? 98 : 72,
        harmonicCount,
        fundamentalFreq,
      });
    }
  }, [isClarinetMatch, harmonicCount, fundamentalFreq, onMetricUpdate]);

  return (
    <div className="flex flex-col gap-4">
      <div className="relative rounded-2xl overflow-hidden border border-slate-700 bg-slate-900 shadow-2xl">
        <canvas ref={canvasRef} width={800} height={320} className="w-full h-[300px] sm:h-[320px] block" />

        {/* Waveform Selector */}
        <div className="absolute top-4 left-4 flex items-center gap-1.5 bg-slate-900/85 backdrop-blur-md p-1 rounded-xl border border-slate-700">
          {(["square", "sawtooth", "triangle"] as const).map((type) => (
            <button
              key={type}
              onClick={() => setWaveformType(type)}
              className={`px-3 py-1 text-xs font-medium rounded-lg capitalize cursor-pointer transition-all ${
                waveformType === type
                  ? "bg-purple-600 text-white shadow-md shadow-purple-600/30 font-semibold"
                  : "text-slate-400 hover:text-slate-200"
              }`}
            >
              {type} Wave
            </button>
          ))}
        </div>

        {/* Challenge Indicator */}
        <div className="absolute top-4 right-4">
          {isClarinetMatch ? (
            <div className="flex items-center gap-1.5 bg-emerald-500/20 border border-emerald-500 text-emerald-300 px-3 py-1.5 rounded-xl text-xs font-semibold">
              <CheckCircle className="w-4 h-4 text-emerald-400" /> Clarinet Odd Harmonics Reconstructed!
            </div>
          ) : (
            <div className="flex items-center gap-1.5 bg-purple-500/20 border border-purple-500/40 text-purple-300 px-3 py-1.5 rounded-xl text-xs">
              <Award className="w-4 h-4 text-purple-400" /> Challenge: N ≥ 7 Odd Harmonics (Clarinet)
            </div>
          )}
        </div>
      </div>

      {/* Control Toolbars */}
      <div className="flex items-center justify-between gap-3 pt-1">
        <div className="flex items-center gap-2">
          <button
            onClick={toggleAudio}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm cursor-pointer transition-all active:scale-95 ${
              isPlayingAudio
                ? "bg-rose-600 hover:bg-rose-500 text-white shadow-lg shadow-rose-600/30 animate-pulse"
                : "bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-500 hover:to-purple-500 text-white shadow-lg shadow-purple-600/30"
            }`}
          >
            {isPlayingAudio ? (
              <>
                <VolumeX className="w-4 h-4" /> Mute Audio Synth
              </>
            ) : (
              <>
                <Volume2 className="w-4 h-4" /> Listen to Audio Harmonic Tone ({fundamentalFreq}Hz)
              </>
            )}
          </button>
        </div>

        <div className="flex items-center gap-4 text-xs font-mono text-slate-300">
          <span>
            Fourier Sum: <strong className="text-purple-400">N = {harmonicCount} terms</strong>
          </span>
          <span>
            Frequency: <strong className="text-sky-400">{fundamentalFreq} Hz</strong>
          </span>
        </div>
      </div>
    </div>
  );
};
