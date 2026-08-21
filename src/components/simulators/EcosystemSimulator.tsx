import React, { useEffect, useRef, useState } from "react";
import { Play, Pause, RotateCcw, CloudDrizzle, Sun, ShieldAlert, Award, CheckCircle } from "lucide-react";

interface EcosystemProps {
  preyBirthRate: number; // 0.02 - 0.20
  predationRate: number; // 0.0005 - 0.006
  predatorMortality: number; // 0.01 - 0.15
  carryingCapacity: number; // 100 - 500
  onMetricUpdate?: (metrics: Record<string, number>) => void;
}

export const EcosystemSimulator: React.FC<EcosystemProps> = ({
  preyBirthRate,
  predationRate,
  predatorMortality,
  carryingCapacity,
  onMetricUpdate,
}) => {
  const [isRunning, setIsRunning] = useState(true);
  const [month, setMonth] = useState(0);
  const [preyCount, setPreyCount] = useState(120);
  const [predatorCount, setPredatorCount] = useState(20);

  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const phaseCanvasRef = useRef<HTMLCanvasElement | null>(null);

  const timeSeriesRef = useRef<{ month: number; prey: number; predator: number }[]>([
    { month: 0, prey: 120, predator: 20 },
  ]);

  const stateRef = useRef({
    prey: 120,
    predator: 20,
    month: 0,
  });

  const resetEcosystem = () => {
    stateRef.current = { prey: 120, predator: 20, month: 0 };
    setPreyCount(120);
    setPredatorCount(20);
    setMonth(0);
    timeSeriesRef.current = [{ month: 0, prey: 120, predator: 20 }];
  };

  // Environmental Shock: Drought (Cuts carrying capacity in half temporarily)
  const triggerDrought = () => {
    stateRef.current.prey = Math.max(10, stateRef.current.prey * 0.4);
    setPreyCount(stateRef.current.prey);
  };

  // Environmental Shock: Winter Freeze
  const triggerWinter = () => {
    stateRef.current.predator = Math.max(5, stateRef.current.predator * 0.5);
    setPredatorCount(stateRef.current.predator);
  };

  // Numerical Lotka-Volterra integration step
  useEffect(() => {
    let timer: any;
    if (isRunning) {
      timer = setInterval(() => {
        const s = stateRef.current;
        const dt = 0.5; // Monthly step

        // Lotka-Volterra with logistic carrying capacity K:
        // dPrey/dt = alpha * Prey * (1 - Prey/K) - beta * Prey * Predator
        // dPredator/dt = delta * beta * Prey * Predator - gamma * Predator
        const alpha = preyBirthRate;
        const beta = predationRate;
        const gamma = predatorMortality;
        const delta = 0.08; // Conversion efficiency

        const dPrey = (alpha * s.prey * (1 - s.prey / carryingCapacity) - beta * s.prey * s.predator) * dt;
        const dPred = (delta * beta * s.prey * s.predator - gamma * s.predator) * dt;

        s.prey = Math.max(0, s.prey + dPrey);
        s.predator = Math.max(0, s.predator + dPred);
        s.month += 1;

        setPreyCount(Number(s.prey.toFixed(0)));
        setPredatorCount(Number(s.predator.toFixed(0)));
        setMonth(s.month);

        timeSeriesRef.current.push({
          month: s.month,
          prey: s.prey,
          predator: s.predator,
        });

        if (timeSeriesRef.current.length > 80) {
          timeSeriesRef.current.shift();
        }

        if (onMetricUpdate) {
          onMetricUpdate({
            stabilityScore: s.prey > 5 && s.predator > 2 ? 100 : 0,
            preyCount: Math.round(s.prey),
            predatorCount: Math.round(s.predator),
            month: s.month,
          });
        }
      }, 100);
    }
    return () => clearInterval(timer);
  }, [isRunning, preyBirthRate, predationRate, predatorMortality, carryingCapacity, onMetricUpdate]);

  // Draw Dual Population Time-Series Graph
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const width = canvas.width;
    const height = canvas.height;
    ctx.clearRect(0, 0, width, height);

    ctx.fillStyle = "#0c1322";
    ctx.fillRect(0, 0, width, height);

    const padL = 35;
    const padB = 25;
    const gW = width - padL - 15;
    const gH = height - padB - 15;

    // Grid
    ctx.strokeStyle = "#1e293b";
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(padL, 10);
    ctx.lineTo(padL, height - padB);
    ctx.lineTo(width - 15, height - padB);
    ctx.stroke();

    const maxPop = Math.max(200, carryingCapacity, ...timeSeriesRef.current.map((d) => Math.max(d.prey, d.predator * 4)));

    // Plot Prey Curve (Emerald)
    ctx.strokeStyle = "#10b981";
    ctx.lineWidth = 2.5;
    ctx.beginPath();
    timeSeriesRef.current.forEach((pt, i) => {
      const x = padL + (i / Math.max(1, timeSeriesRef.current.length - 1)) * gW;
      const y = height - padB - (pt.prey / maxPop) * gH;
      if (i === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    });
    ctx.stroke();

    // Plot Predator Curve (Rose - multiplied scale for visibility)
    ctx.strokeStyle = "#f43f5e";
    ctx.lineWidth = 2.5;
    ctx.beginPath();
    timeSeriesRef.current.forEach((pt, i) => {
      const x = padL + (i / Math.max(1, timeSeriesRef.current.length - 1)) * gW;
      const y = height - padB - ((pt.predator * 4) / maxPop) * gH;
      if (i === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    });
    ctx.stroke();

    // Carrying Capacity guideline (Dashed Amber)
    const kY = height - padB - (carryingCapacity / maxPop) * gH;
    ctx.strokeStyle = "rgba(245, 158, 11, 0.5)";
    ctx.setLineDash([4, 2]);
    ctx.beginPath();
    ctx.moveTo(padL, kY);
    ctx.lineTo(width - 15, kY);
    ctx.stroke();
    ctx.setLineDash([]);

    ctx.fillStyle = "#f59e0b";
    ctx.font = "9px sans-serif";
    ctx.fillText(`Carrying Capacity K = ${carryingCapacity}`, padL + 10, kY - 4);
  }, [month, carryingCapacity]);

  // Draw Phase-Plane Portrait (Prey vs Predator)
  useEffect(() => {
    const pCanvas = phaseCanvasRef.current;
    if (!pCanvas) return;
    const pCtx = pCanvas.getContext("2d");
    if (!pCtx) return;

    const pW = pCanvas.width;
    const pH = pCanvas.height;
    pCtx.clearRect(0, 0, pW, pH);

    pCtx.fillStyle = "#090f1d";
    pCtx.fillRect(0, 0, pW, pH);

    // Axis
    pCtx.strokeStyle = "#334155";
    pCtx.lineWidth = 1;
    pCtx.beginPath();
    pCtx.moveTo(25, pH - 20);
    pCtx.lineTo(pW - 10, pH - 20);
    pCtx.moveTo(25, 10);
    pCtx.lineTo(25, pH - 20);
    pCtx.stroke();

    // Orbital Loop Path
    pCtx.strokeStyle = "#38bdf8";
    pCtx.lineWidth = 2;
    pCtx.beginPath();

    const maxPrey = Math.max(250, carryingCapacity);
    const maxPred = 60;

    timeSeriesRef.current.forEach((pt, i) => {
      const x = 25 + (pt.prey / maxPrey) * (pW - 40);
      const y = pH - 20 - (pt.predator / maxPred) * (pH - 35);
      if (i === 0) pCtx.moveTo(x, y);
      else pCtx.lineTo(x, y);
    });
    pCtx.stroke();

    // Current State Dot
    const curX = 25 + (stateRef.current.prey / maxPrey) * (pW - 40);
    const curY = pH - 20 - (stateRef.current.predator / maxPred) * (pH - 35);
    pCtx.fillStyle = "#f59e0b";
    pCtx.beginPath();
    pCtx.arc(curX, curY, 5, 0, Math.PI * 2);
    pCtx.fill();

    pCtx.fillStyle = "#94a3b8";
    pCtx.font = "9px sans-serif";
    pCtx.fillText("Prey Population (x) →", pW - 100, pH - 6);
    pCtx.fillText("Predator (y) ↑", 30, 20);
  }, [month, carryingCapacity]);

  const isEcosystemAlive = preyCount > 5 && predatorCount > 2;

  return (
    <div className="flex flex-col gap-4">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
        {/* Time-Series Population Stage */}
        <div className="lg:col-span-2 relative rounded-2xl overflow-hidden border border-slate-700 bg-slate-900 shadow-2xl p-3 flex flex-col justify-between min-h-[340px]">
          <div className="flex items-center justify-between pb-2 border-b border-slate-800">
            <div className="flex items-center gap-3">
              <span className="flex items-center gap-1.5 text-xs font-semibold text-emerald-400">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400"></span> Prey (Rabbits): {preyCount}
              </span>
              <span className="flex items-center gap-1.5 text-xs font-semibold text-rose-400">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-400"></span> Predators (Foxes): {predatorCount}
              </span>
            </div>
            <span className="text-xs font-mono text-slate-400">Month: {month}</span>
          </div>

          <canvas ref={canvasRef} width={520} height={230} className="w-full h-[220px] rounded-xl" />

          {/* Environmental Shock Buttons */}
          <div className="flex items-center justify-between pt-2 border-t border-slate-800/80">
            <div className="flex items-center gap-2">
              <button
                onClick={() => setIsRunning(!isRunning)}
                className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium border border-slate-700 cursor-pointer"
              >
                {isRunning ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
                {isRunning ? "Pause Time" : "Resume"}
              </button>

              <button
                onClick={triggerDrought}
                className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 text-xs font-medium border border-amber-500/40 cursor-pointer"
              >
                <Sun className="w-3 h-3" /> Drought Shock
              </button>

              <button
                onClick={triggerWinter}
                className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-sky-500/20 hover:bg-sky-500/30 text-sky-300 text-xs font-medium border border-sky-500/40 cursor-pointer"
              >
                <CloudDrizzle className="w-3 h-3" /> Harsh Winter
              </button>
            </div>

            <button
              onClick={resetEcosystem}
              className="p-1.5 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-lg cursor-pointer"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Phase-Plane Portrait */}
        <div className="relative rounded-2xl overflow-hidden border border-slate-700 bg-slate-900 p-3 flex flex-col justify-between shadow-2xl">
          <div className="flex items-center justify-between pb-2 border-b border-slate-800">
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-300">
              Phase Plane Portrait (dx/dt vs dy/dt)
            </span>
          </div>

          <canvas ref={phaseCanvasRef} width={280} height={200} className="w-full h-[190px] rounded-xl" />

          {/* Challenge Status */}
          <div className="pt-2">
            {isEcosystemAlive ? (
              <div className="flex items-center gap-1.5 bg-emerald-500/20 border border-emerald-500 text-emerald-300 px-3 py-1.5 rounded-xl text-xs font-semibold">
                <CheckCircle className="w-4 h-4 text-emerald-400" /> Stable Equilibrium Active
              </div>
            ) : (
              <div className="flex items-center gap-1.5 bg-rose-500/20 border border-rose-500 text-rose-300 px-3 py-1.5 rounded-xl text-xs font-semibold">
                <ShieldAlert className="w-4 h-4 text-rose-400" /> Extinction Event Occurred!
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Telemetry Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        <div className="bg-slate-900/70 border border-slate-800 rounded-xl p-3">
          <span className="text-xs text-slate-400">Prey Birth Rate (α)</span>
          <div className="text-xl font-bold font-mono text-emerald-400 mt-0.5">{preyBirthRate} /mo</div>
        </div>
        <div className="bg-slate-900/70 border border-slate-800 rounded-xl p-3">
          <span className="text-xs text-slate-400">Hunting Efficiency (β)</span>
          <div className="text-xl font-bold font-mono text-rose-400 mt-0.5">{predationRate}</div>
        </div>
        <div className="bg-slate-900/70 border border-slate-800 rounded-xl p-3">
          <span className="text-xs text-slate-400">Grassland Capacity (K)</span>
          <div className="text-xl font-bold font-mono text-amber-400 mt-0.5">{carryingCapacity} prey</div>
        </div>
        <div className="bg-slate-900/70 border border-slate-800 rounded-xl p-3">
          <span className="text-xs text-slate-400">Ecosystem Health</span>
          <div className="text-xs font-mono text-slate-300 mt-1">
            {isEcosystemAlive ? "Self-Regulating Predator-Prey Loop" : "Collapsed Trophic Pyramid"}
          </div>
        </div>
      </div>
    </div>
  );
};
