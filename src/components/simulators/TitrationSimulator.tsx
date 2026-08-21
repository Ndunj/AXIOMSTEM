import React, { useEffect, useRef, useState } from "react";
import { Droplet, RotateCcw, Award, CheckCircle, Info } from "lucide-react";

interface TitrationProps {
  titrantVolumeAdded: number; // 0 - 50 mL
  acidConcentration: number; // 0.05 - 0.5 M
  acidVolume: number; // 10 - 50 mL
  onMetricUpdate?: (metrics: Record<string, number>) => void;
}

export const TitrationSimulator: React.FC<TitrationProps> = ({
  titrantVolumeAdded: initialTitrant,
  acidConcentration,
  acidVolume,
  onMetricUpdate,
}) => {
  const [volAdded, setVolAdded] = useState(initialTitrant);
  const [isDripping, setIsDripping] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // Titration parameters: Acetic acid (pKa = 4.76) with 0.1M NaOH
  const titrantMolarity = 0.1;
  const pKa = 4.76;
  const equivalenceVolume = (acidConcentration * acidVolume) / titrantMolarity; // mL

  // Calculate pH based on buffer / equivalence / excess base regimes
  const calculatePH = (v: number): number => {
    const molesAcidInitial = (acidConcentration * acidVolume) / 1000;
    const molesBaseAdded = (titrantMolarity * v) / 1000;
    const totalVolume = (acidVolume + v) / 1000;

    if (v === 0) {
      // Pure weak acid: pH = 0.5 * (pKa - log10(C_acid))
      return Math.max(1.0, 0.5 * (pKa - Math.log10(acidConcentration)));
    } else if (v < equivalenceVolume - 0.01) {
      // Buffer Region: Henderson-Hasselbalch pH = pKa + log10([A-] / [HA])
      const molesA_minus = molesBaseAdded;
      const molesHA_rem = molesAcidInitial - molesBaseAdded;
      const ratio = molesA_minus / Math.max(1e-7, molesHA_rem);
      return Math.min(7.0, Math.max(2.0, pKa + Math.log10(ratio)));
    } else if (Math.abs(v - equivalenceVolume) <= 0.01) {
      // Equivalence point: Basic salt hydrolysis pH = 7 + 0.5*(pKa + log10(C_salt))
      const cSalt = molesAcidInitial / totalVolume;
      return 7.0 + 0.5 * (pKa + Math.log10(cSalt));
    } else {
      // Excess Strong Base
      const excessMolesBase = molesBaseAdded - molesAcidInitial;
      const concOH = excessMolesBase / totalVolume;
      const pOH = -Math.log10(Math.max(1e-14, concOH));
      return Math.min(13.8, 14 - pOH);
    }
  };

  const currentPH = Number(calculatePH(volAdded).toFixed(2));
  const equivPH = Number((7.0 + 0.5 * (pKa + Math.log10((acidConcentration * acidVolume) / (acidVolume + equivalenceVolume)))).toFixed(2));

  useEffect(() => {
    if (onMetricUpdate) {
      onMetricUpdate({
        equivalencePH: currentPH,
        titrantVolume: volAdded,
        equivalenceVolume: Number(equivalenceVolume.toFixed(1)),
      });
    }
  }, [currentPH, volAdded, equivalenceVolume, onMetricUpdate]);

  // Handle continuous dripping
  useEffect(() => {
    let timer: any;
    if (isDripping && volAdded < 50) {
      timer = setInterval(() => {
        setVolAdded((prev) => Math.min(50, Number((prev + 0.25).toFixed(2))));
      }, 80);
    }
    return () => clearInterval(timer);
  }, [isDripping, volAdded]);

  // Determine solution color based on Phenolphthalein indicator (Transition range: 8.2 - 10.0)
  const getBeakerColor = (ph: number) => {
    if (ph < 8.2) return "rgba(240, 249, 255, 0.25)"; // Clear water
    if (ph >= 10.0) return "rgba(236, 72, 153, 0.85)"; // Vivid Pink Fuchsia
    const intensity = (ph - 8.2) / (10.0 - 8.2);
    return `rgba(236, 72, 153, ${0.2 + intensity * 0.65})`;
  };

  // Draw Titration Curve Graph
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const width = canvas.width;
    const height = canvas.height;
    ctx.clearRect(0, 0, width, height);

    ctx.fillStyle = "#0c111e";
    ctx.fillRect(0, 0, width, height);

    // Coordinate mappings
    const padL = 40;
    const padR = 20;
    const padT = 20;
    const padB = 30;

    const graphW = width - padL - padR;
    const graphH = height - padT - padB;

    // Grid lines & Axis
    ctx.strokeStyle = "#1e293b";
    ctx.lineWidth = 1;

    // Y Axis labels (pH 0 to 14)
    for (let ph = 0; ph <= 14; ph += 2) {
      const y = padT + graphH - (ph / 14) * graphH;
      ctx.beginPath();
      ctx.moveTo(padL, y);
      ctx.lineTo(padL + graphW, y);
      ctx.stroke();

      ctx.fillStyle = "#64748b";
      ctx.font = "10px sans-serif";
      ctx.fillText(`${ph}`, 18, y + 3);
    }

    // X Axis labels (0 to 50 mL)
    for (let v = 0; v <= 50; v += 10) {
      const x = padL + (v / 50) * graphW;
      ctx.beginPath();
      ctx.moveTo(x, padT);
      ctx.lineTo(x, padT + graphH);
      ctx.stroke();

      ctx.fillStyle = "#64748b";
      ctx.font = "10px sans-serif";
      ctx.fillText(`${v}mL`, x - 12, padT + graphH + 18);
    }

    // Phenolphthalein transition zone highlight (pH 8.2 - 10)
    const phenY1 = padT + graphH - (10 / 14) * graphH;
    const phenY2 = padT + graphH - (8.2 / 14) * graphH;
    ctx.fillStyle = "rgba(236, 72, 153, 0.08)";
    ctx.fillRect(padL, phenY1, graphW, phenY2 - phenY1);

    // Sigmoidal pH Curve line
    ctx.strokeStyle = "#38bdf8";
    ctx.lineWidth = 2.5;
    ctx.beginPath();

    for (let v = 0; v <= 50; v += 0.2) {
      const ph = calculatePH(v);
      const px = padL + (v / 50) * graphW;
      const py = padT + graphH - (ph / 14) * graphH;

      if (v === 0) ctx.moveTo(px, py);
      else ctx.lineTo(px, py);
    }
    ctx.stroke();

    // Equivalence Point Vertical Guideline
    const eqX = padL + (equivalenceVolume / 50) * graphW;
    ctx.strokeStyle = "#f59e0b";
    ctx.lineWidth = 1.5;
    ctx.setLineDash([4, 2]);
    ctx.beginPath();
    ctx.moveTo(eqX, padT);
    ctx.lineTo(eqX, padT + graphH);
    ctx.stroke();
    ctx.setLineDash([]);

    // Current State Dot
    const curX = padL + (volAdded / 50) * graphW;
    const curY = padT + graphH - (currentPH / 14) * graphH;

    ctx.fillStyle = currentPH >= 8.2 ? "#ec4899" : "#38bdf8";
    ctx.beginPath();
    ctx.arc(curX, curY, 6, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = "#ffffff";
    ctx.lineWidth = 2;
    ctx.stroke();

    // Label on curve
    ctx.fillStyle = "#f8fafc";
    ctx.font = "bold 11px monospace";
    ctx.fillText(`pH ${currentPH}`, curX + 10, curY - 6);
  }, [volAdded, currentPH, equivalenceVolume, acidConcentration, acidVolume]);

  const isChallengeDone = Math.abs(currentPH - equivPH) <= 0.15 && Math.abs(volAdded - equivalenceVolume) <= 0.5;

  return (
    <div className="flex flex-col gap-4">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-3">
        {/* Visual Lab Apparatus Stage */}
        <div className="lg:col-span-5 relative rounded-2xl overflow-hidden border border-slate-700 bg-slate-900 p-4 flex flex-col items-center justify-between shadow-2xl min-h-[340px]">
          {/* Digital Burette Reading */}
          <div className="w-full flex items-center justify-between px-2 text-xs font-mono text-slate-300">
            <span>Digital Burette (0.1M NaOH)</span>
            <span className="text-amber-400 font-bold">{volAdded.toFixed(1)} / 50 mL</span>
          </div>

          {/* Burette Glass & Dropper Animation */}
          <div className="relative flex flex-col items-center mt-2">
            <div className="w-8 h-32 border-2 border-slate-500 rounded-t-md bg-slate-800/80 relative overflow-hidden">
              {/* Liquid Level */}
              <div
                className="w-full bg-sky-400/40 absolute bottom-0 transition-all duration-100"
                style={{ height: `${Math.max(5, ((50 - volAdded) / 50) * 100)}%` }}
              />
            </div>
            {/* Valve Tap */}
            <div className="w-3 h-6 bg-slate-600 border border-slate-400"></div>
            {/* Droplet */}
            {isDripping && (
              <div className="w-2 h-3 bg-sky-300 rounded-full animate-bounce mt-1"></div>
            )}
          </div>

          {/* Reaction Beaker */}
          <div className="relative w-36 h-28 border-2 border-t-0 border-slate-400 rounded-b-2xl overflow-hidden mt-2 bg-slate-800/30 flex items-end">
            <div
              className="w-full transition-all duration-300 flex items-center justify-center text-xs font-bold font-mono text-slate-800"
              style={{
                height: `${Math.min(90, 40 + (volAdded / 50) * 45)}%`,
                backgroundColor: getBeakerColor(currentPH),
              }}
            >
              {currentPH >= 8.2 ? "Phenolphthalein Pink" : "Colorless Acid"}
            </div>
          </div>

          {/* Burette Dispenser Buttons */}
          <div className="flex items-center gap-2 pt-3 w-full">
            <button
              onClick={() => setVolAdded((prev) => Math.min(50, Number((prev + 0.5).toFixed(2))))}
              className="flex-1 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium border border-slate-700 cursor-pointer flex items-center justify-center gap-1"
            >
              <Droplet className="w-3 h-3" /> +0.5 mL
            </button>

            <button
              onClick={() => setIsDripping(!isDripping)}
              className={`flex-1 py-2 rounded-xl text-xs font-semibold border transition-all cursor-pointer ${
                isDripping
                  ? "bg-rose-500/20 border-rose-500 text-rose-300"
                  : "bg-emerald-500/20 border-emerald-500 text-emerald-300"
              }`}
            >
              {isDripping ? "Stop Drip" : "Auto Drip"}
            </button>

            <button
              onClick={() => {
                setVolAdded(0);
                setIsDripping(false);
              }}
              className="p-2 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-xl cursor-pointer"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Real-time Titration Curve Plot */}
        <div className="lg:col-span-7 relative rounded-2xl overflow-hidden border border-slate-700 bg-slate-900 p-4 flex flex-col justify-between shadow-2xl">
          <div className="flex items-center justify-between pb-2 border-b border-slate-800">
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-300">
              Titration pH Curve & Equivalence Point
            </span>
            <span className="text-xs font-mono text-amber-400">V_equiv = {equivalenceVolume.toFixed(1)} mL</span>
          </div>

          <canvas ref={canvasRef} width={460} height={240} className="w-full h-[230px] rounded-xl" />

          {/* Challenge Status */}
          <div className="pt-2">
            {isChallengeDone ? (
              <div className="flex items-center gap-1.5 bg-emerald-500/20 border border-emerald-500 text-emerald-300 px-3 py-1.5 rounded-xl text-xs font-semibold">
                <CheckCircle className="w-4 h-4 text-emerald-400" /> Equivalence Reached! pH = {currentPH}
              </div>
            ) : (
              <div className="flex items-center gap-1.5 bg-sky-500/20 border border-sky-500/40 text-sky-300 px-3 py-1.5 rounded-xl text-xs">
                <Award className="w-4 h-4 text-sky-400" /> Target: Neutralize at Equivalence pH ≈ {equivPH}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Telemetry Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        <div className="bg-slate-900/70 border border-slate-800 rounded-xl p-3">
          <span className="text-xs text-slate-400">Current pH</span>
          <div className="text-xl font-bold font-mono text-pink-400 mt-0.5">{currentPH}</div>
        </div>
        <div className="bg-slate-900/70 border border-slate-800 rounded-xl p-3">
          <span className="text-xs text-slate-400">Titrant Dispensed</span>
          <div className="text-xl font-bold font-mono text-amber-400 mt-0.5">{volAdded.toFixed(1)} mL</div>
        </div>
        <div className="bg-slate-900/70 border border-slate-800 rounded-xl p-3">
          <span className="text-xs text-slate-400">Equivalence Target</span>
          <div className="text-xl font-bold font-mono text-emerald-400 mt-0.5">{equivalenceVolume.toFixed(1)} mL</div>
        </div>
        <div className="bg-slate-900/70 border border-slate-800 rounded-xl p-3">
          <span className="text-xs text-slate-400">Chemical State</span>
          <div className="text-xs font-mono text-slate-300 mt-1">
            {volAdded < equivalenceVolume ? "Buffer Zone (HA + A⁻)" : "Excess Hydroxide [OH⁻]"}
          </div>
        </div>
      </div>
    </div>
  );
};
