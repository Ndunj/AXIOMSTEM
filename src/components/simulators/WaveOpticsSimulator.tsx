import React, { useEffect, useRef, useState } from "react";
import { CheckCircle, Award, Sliders, Info } from "lucide-react";

interface WaveOpticsProps {
  wavelength: number; // 380 - 750 nm
  slitDistance: number; // 0.1 - 1.0 mm
  slitWidth: number; // 0.01 - 0.15 mm
  screenDistance: number; // 0.5 - 3.0 m
  onMetricUpdate?: (metrics: Record<string, number>) => void;
}

// Convert wavelength (nm) to RGB color
function nmToRGB(wavelength: number): string {
  let r = 0, g = 0, b = 0;
  if (wavelength >= 380 && wavelength < 440) {
    r = -(wavelength - 440) / (440 - 380);
    b = 1;
  } else if (wavelength >= 440 && wavelength < 490) {
    g = (wavelength - 440) / (490 - 440);
    b = 1;
  } else if (wavelength >= 490 && wavelength < 510) {
    g = 1;
    b = -(wavelength - 510) / (510 - 490);
  } else if (wavelength >= 510 && wavelength < 580) {
    r = (wavelength - 510) / (580 - 510);
    g = 1;
  } else if (wavelength >= 580 && wavelength < 645) {
    r = 1;
    g = -(wavelength - 645) / (645 - 580);
  } else if (wavelength >= 645 && wavelength <= 780) {
    r = 1;
  }
  return `rgb(${Math.round(r * 255)}, ${Math.round(g * 255)}, ${Math.round(b * 255)})`;
}

export const WaveOpticsSimulator: React.FC<WaveOpticsProps> = ({
  wavelength,
  slitDistance,
  slitWidth,
  screenDistance,
  onMetricUpdate,
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const graphCanvasRef = useRef<HTMLCanvasElement | null>(null);

  // Calculate first order fringe position y1 = (1 * lambda * L) / d
  // lambda in meters = wavelength * 1e-9
  // d in meters = slitDistance * 1e-3
  // L in meters = screenDistance
  const lambdaM = wavelength * 1e-9;
  const dM = slitDistance * 1e-3;
  const y1Mm = Number(((1 * lambdaM * screenDistance) / dM * 1000).toFixed(2));
  const isChallengeDone = Math.abs(y1Mm - 3.2) <= 0.1;

  useEffect(() => {
    if (onMetricUpdate) {
      onMetricUpdate({
        fringeY: y1Mm,
        wavelength,
        slitDistance,
      });
    }
  }, [y1Mm, wavelength, slitDistance, onMetricUpdate]);

  // Render optical wave diffraction & interference
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const width = canvas.width;
    const height = canvas.height;
    ctx.clearRect(0, 0, width, height);

    // Dark optical bench
    ctx.fillStyle = "#090d16";
    ctx.fillRect(0, 0, width, height);

    const laserColor = nmToRGB(wavelength);

    // 1. Incident Laser Beam
    const barrierX = width * 0.35;
    const centerY = height / 2;

    const beamGrad = ctx.createLinearGradient(0, centerY, barrierX, centerY);
    beamGrad.addColorStop(0, laserColor);
    beamGrad.addColorStop(1, laserColor);
    ctx.fillStyle = beamGrad;
    ctx.shadowColor = laserColor;
    ctx.shadowBlur = 10;
    ctx.fillRect(20, centerY - 14, barrierX - 20, 28);
    ctx.shadowBlur = 0;

    // Laser aperture emitter
    ctx.fillStyle = "#475569";
    ctx.fillRect(10, centerY - 24, 20, 48);
    ctx.fillStyle = "#94a3b8";
    ctx.fillRect(26, centerY - 18, 6, 36);

    // 2. Slit Barrier Plate
    ctx.fillStyle = "#334155";
    ctx.fillRect(barrierX, 10, 10, height - 20);

    // Slits gap
    const slitSpacingPx = slitDistance * 36;
    const slitWidthPx = Math.max(2, slitWidth * 40);
    const slit1Y = centerY - slitSpacingPx / 2;
    const slit2Y = centerY + slitSpacingPx / 2;

    ctx.clearRect(barrierX - 1, slit1Y - slitWidthPx / 2, 12, slitWidthPx);
    ctx.clearRect(barrierX - 1, slit2Y - slitWidthPx / 2, 12, slitWidthPx);

    // 3. Screen on Right
    const screenX = width - 40;
    ctx.fillStyle = "#1e293b";
    ctx.fillRect(screenX, 10, 24, height - 20);
    ctx.strokeStyle = "#475569";
    ctx.strokeRect(screenX, 10, 24, height - 20);

    // 4. Wave Propagation Ripples & Screen Interference Pattern
    const numSamples = height - 40;
    for (let py = 20; py < height - 20; py += 2) {
      const yRel = (py - centerY) * 0.0001; // meters approx
      const sinTheta = yRel / Math.sqrt(yRel * yRel + (screenDistance * 0.2) ** 2);

      // Beta = (pi * a * sin(theta)) / lambda (Diffraction envelope)
      // Alpha = (pi * d * sin(theta)) / lambda (Interference)
      const beta = (Math.PI * (slitWidth * 1e-3) * sinTheta) / lambdaM;
      const alpha = (Math.PI * dM * sinTheta) / lambdaM;

      const diffraction = beta === 0 ? 1 : Math.sin(beta) / beta;
      const interference = Math.cos(alpha);
      const intensity = Math.max(0, (diffraction * interference) ** 2);

      // Render intensity spot on screen
      ctx.fillStyle = laserColor;
      ctx.globalAlpha = Math.min(1, intensity * 1.2);
      ctx.fillRect(screenX + 2, py, 20, 2);
    }
    ctx.globalAlpha = 1.0;

    // Interference Wavefront Rays
    ctx.strokeStyle = laserColor;
    ctx.lineWidth = 1;
    ctx.globalAlpha = 0.15;
    for (let r = 0; r < 6; r++) {
      ctx.beginPath();
      ctx.arc(barrierX + 8, slit1Y, 30 + r * 28, -Math.PI / 3, Math.PI / 3);
      ctx.stroke();

      ctx.beginPath();
      ctx.arc(barrierX + 8, slit2Y, 30 + r * 28, -Math.PI / 3, Math.PI / 3);
      ctx.stroke();
    }
    ctx.globalAlpha = 1.0;

    // Labels
    ctx.fillStyle = "#94a3b8";
    ctx.font = "11px sans-serif";
    ctx.fillText("Tunable Laser Source", 20, centerY - 32);
    ctx.fillText(`Double Slit (d=${slitDistance}mm)`, barrierX - 40, height - 16);
    ctx.fillText("Observation Screen", screenX - 60, height - 16);
  }, [wavelength, slitDistance, slitWidth, screenDistance]);

  // Render Intensity Cross-Section Curve Graph
  useEffect(() => {
    const graphCanvas = graphCanvasRef.current;
    if (!graphCanvas) return;
    const gctx = graphCanvas.getContext("2d");
    if (!gctx) return;

    const gW = graphCanvas.width;
    const gH = graphCanvas.height;
    gctx.clearRect(0, 0, gW, gH);

    // Graph Background
    gctx.fillStyle = "#0b0f19";
    gctx.fillRect(0, 0, gW, gH);

    // Axis
    gctx.strokeStyle = "#334155";
    gctx.lineWidth = 1;
    gctx.beginPath();
    gctx.moveTo(30, gH - 20);
    gctx.lineTo(gW - 10, gH - 20);
    gctx.moveTo(30, 10);
    gctx.lineTo(30, gH - 20);
    gctx.stroke();

    const laserColor = nmToRGB(wavelength);

    // Plot Intensity I(y)
    gctx.strokeStyle = laserColor;
    gctx.lineWidth = 2.5;
    gctx.beginPath();

    const centerGraphX = gW / 2 + 10;
    const maxAmplitude = gH - 40;

    for (let x = 30; x < gW - 10; x++) {
      const yNorm = (x - centerGraphX) * 0.05; // Relative coordinate
      const sinTheta = (yNorm * 0.001) / screenDistance;
      const beta = (Math.PI * (slitWidth * 1e-3) * sinTheta) / lambdaM;
      const alpha = (Math.PI * dM * sinTheta) / lambdaM;

      const diffraction = beta === 0 ? 1 : Math.sin(beta) / beta;
      const interference = Math.cos(alpha);
      const intensity = Math.min(1, Math.max(0, (diffraction * interference) ** 2));

      const plotY = gH - 20 - intensity * maxAmplitude;
      if (x === 30) {
        gctx.moveTo(x, plotY);
      } else {
        gctx.lineTo(x, plotY);
      }
    }
    gctx.stroke();

    // Center bright fringe indicator
    gctx.fillStyle = "#94a3b8";
    gctx.font = "10px sans-serif";
    gctx.fillText("Relative Intensity I / I₀", 35, 20);
    gctx.fillText("m=0 (Central Max)", centerGraphX - 45, gH - 6);
  }, [wavelength, slitDistance, slitWidth, screenDistance, lambdaM, dM]);

  return (
    <div className="flex flex-col gap-4">
      {/* Simulation Stage */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
        <div className="lg:col-span-2 relative rounded-2xl overflow-hidden border border-slate-700 bg-slate-900 shadow-2xl">
          <canvas ref={canvasRef} width={600} height={360} className="w-full h-[320px] sm:h-[360px] block" />
          
          <div className="absolute top-4 left-4 bg-slate-900/80 backdrop-blur-md px-3 py-1.5 rounded-xl border border-slate-700 text-xs font-mono text-slate-200 flex items-center gap-2">
            <span className="w-3 h-3 rounded-full" style={{ backgroundColor: nmToRGB(wavelength) }}></span>
            <span>λ = {wavelength} nm</span>
          </div>

          <div className="absolute top-4 right-4">
            {isChallengeDone ? (
              <div className="flex items-center gap-1.5 bg-emerald-500/20 border border-emerald-500 text-emerald-300 px-3 py-1.5 rounded-xl text-xs font-semibold">
                <CheckCircle className="w-4 h-4 text-emerald-400" /> Challenge Met! (y₁ = 3.2mm)
              </div>
            ) : (
              <div className="flex items-center gap-1.5 bg-sky-500/20 border border-sky-500/40 text-sky-300 px-3 py-1.5 rounded-xl text-xs">
                <Award className="w-4 h-4 text-sky-400" /> Target: Calibrate y₁ = 3.2 mm (Current: {y1Mm}mm)
              </div>
            )}
          </div>
        </div>

        {/* Intensity Curve Plot */}
        <div className="relative rounded-2xl overflow-hidden border border-slate-700 bg-slate-900 p-3 flex flex-col justify-between">
          <div className="flex items-center justify-between pb-2 border-b border-slate-800">
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-300">
              Diffraction Intensity Profile
            </span>
            <span className="text-xs font-mono text-cyan-400">y₁ = {y1Mm} mm</span>
          </div>
          <canvas ref={graphCanvasRef} width={320} height={240} className="w-full h-[220px] rounded-xl" />
          <div className="text-[11px] text-slate-400 font-mono flex justify-between pt-1">
            <span>Fringe Spacing Formula:</span>
            <span className="text-sky-300">y = mλL / d</span>
          </div>
        </div>
      </div>

      {/* Real-time calculated telemetry */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        <div className="bg-slate-900/70 border border-slate-800 rounded-xl p-3">
          <span className="text-xs text-slate-400">1st Order Fringe (y₁)</span>
          <div className="text-xl font-bold font-mono text-cyan-400 mt-0.5">{y1Mm} mm</div>
        </div>
        <div className="bg-slate-900/70 border border-slate-800 rounded-xl p-3">
          <span className="text-xs text-slate-400">Wavelength (λ)</span>
          <div className="text-xl font-bold font-mono text-emerald-400 mt-0.5">{wavelength} nm</div>
        </div>
        <div className="bg-slate-900/70 border border-slate-800 rounded-xl p-3">
          <span className="text-xs text-slate-400">Slit Separation (d)</span>
          <div className="text-xl font-bold font-mono text-amber-400 mt-0.5">{slitDistance} mm</div>
        </div>
        <div className="bg-slate-900/70 border border-slate-800 rounded-xl p-3">
          <span className="text-xs text-slate-400">Screen Distance (L)</span>
          <div className="text-xl font-bold font-mono text-purple-400 mt-0.5">{screenDistance} m</div>
        </div>
      </div>
    </div>
  );
};
