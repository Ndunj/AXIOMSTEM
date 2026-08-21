import React, { useEffect, useRef, useState } from "react";
import { Flame, Snowflake, Zap, RotateCcw, Award, CheckCircle } from "lucide-react";

interface KineticsProps {
  temperature: number; // 200 - 600 K
  reactantCount: number; // 10 - 80 particles
  activationEnergy: number; // 20 - 90 kJ/mol
  onMetricUpdate?: (metrics: Record<string, number>) => void;
}

interface Particle {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  type: "A" | "B" | "C" | "D"; // A, B are reactants; C, D are products
  radius: number;
}

export const ChemicalKineticsSimulator: React.FC<KineticsProps> = ({
  temperature,
  reactantCount,
  activationEnergy,
  onMetricUpdate,
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const maxwellCanvasRef = useRef<HTMLCanvasElement | null>(null);

  const [particles, setParticles] = useState<Particle[]>([]);
  const [stats, setStats] = useState({
    reactants: reactantCount,
    products: 0,
    conversionPercent: 0,
    totalCollisions: 0,
    effectiveCollisions: 0,
    reactionRate: 0,
  });

  const [hasCatalyst, setHasCatalyst] = useState(false);
  const particlesRef = useRef<Particle[]>([]);
  const animRef = useRef<number>(0);
  const collisionCounterRef = useRef({ total: 0, effective: 0 });

  const effectiveEa = hasCatalyst ? Math.max(15, activationEnergy - 25) : activationEnergy;

  // Initialize particles
  const initParticles = () => {
    const newParticles: Particle[] = [];
    const count = reactantCount;
    const speedScale = Math.sqrt(temperature / 300) * 2.2;

    for (let i = 0; i < count; i++) {
      const angle = Math.random() * Math.PI * 2;
      const speed = (0.5 + Math.random()) * speedScale;
      newParticles.push({
        id: i,
        x: 40 + Math.random() * 400,
        y: 40 + Math.random() * 260,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        type: i % 2 === 0 ? "A" : "B",
        radius: 7,
      });
    }

    particlesRef.current = newParticles;
    setParticles(newParticles);
    collisionCounterRef.current = { total: 0, effective: 0 };
    setStats({
      reactants: count,
      products: 0,
      conversionPercent: 0,
      totalCollisions: 0,
      effectiveCollisions: 0,
      reactionRate: 0,
    });
  };

  useEffect(() => {
    initParticles();
  }, [reactantCount]);

  // Main animation loop
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const width = canvas.width;
    const height = canvas.height;

    const step = () => {
      ctx.clearRect(0, 0, width, height);

      // Chamber background
      ctx.fillStyle = "#0c1222";
      ctx.fillRect(0, 0, width, height);

      // Boundary box
      ctx.strokeStyle = hasCatalyst ? "#10b981" : "#334155";
      ctx.lineWidth = 3;
      ctx.strokeRect(10, 10, width - 20, height - 20);

      if (hasCatalyst) {
        // Catalyst active mesh grid
        ctx.strokeStyle = "rgba(16, 185, 129, 0.15)";
        ctx.lineWidth = 1;
        for (let x = 20; x < width - 20; x += 20) {
          ctx.beginPath();
          ctx.moveTo(x, 10);
          ctx.lineTo(x, height - 10);
          ctx.stroke();
        }
      }

      const pList = particlesRef.current;
      const speedMultiplier = Math.sqrt(temperature / 300);

      // Move particles and bounce off walls
      for (let i = 0; i < pList.length; i++) {
        const p = pList[i];
        p.x += p.vx * speedMultiplier;
        p.y += p.vy * speedMultiplier;

        if (p.x - p.radius < 10) {
          p.x = 10 + p.radius;
          p.vx = -p.vx;
        } else if (p.x + p.radius > width - 10) {
          p.x = width - 10 - p.radius;
          p.vx = -p.vx;
        }

        if (p.y - p.radius < 10) {
          p.y = 10 + p.radius;
          p.vy = -p.vy;
        } else if (p.y + p.radius > height - 10) {
          p.y = height - 10 - p.radius;
          p.vy = -p.vy;
        }
      }

      // Check particle-to-particle collisions
      for (let i = 0; i < pList.length; i++) {
        for (let j = i + 1; j < pList.length; j++) {
          const p1 = pList[i];
          const p2 = pList[j];

          const dx = p2.x - p1.x;
          const dy = p2.y - p1.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < p1.radius + p2.radius) {
            // Elastic collision bounce
            const angle = Math.atan2(dy, dx);
            const sin = Math.sin(angle);
            const cos = Math.cos(angle);

            // Swap velocities along collision normal
            const vx1 = p1.vx * cos + p1.vy * sin;
            const vy1 = p1.vy * cos - p1.vx * sin;
            const vx2 = p2.vx * cos + p2.vy * sin;
            const vy2 = p2.vy * cos - p2.vx * sin;

            p1.vx = vx2 * cos - vy1 * sin;
            p1.vy = vy1 * cos + vx2 * sin;
            p2.vx = vx1 * cos - vy2 * sin;
            p2.vy = vy2 * cos + vx1 * sin;

            collisionCounterRef.current.total += 1;

            // Check if reaction occurs: A + B -> C + D
            const isReactantPair = (p1.type === "A" && p2.type === "B") || (p1.type === "B" && p2.type === "A");

            if (isReactantPair) {
              // Collision kinetic energy
              const relSpeed = Math.sqrt((p1.vx - p2.vx) ** 2 + (p1.vy - p2.vy) ** 2);
              const collisionEnergy = (0.5 * relSpeed * relSpeed * temperature) / 20;

              if (collisionEnergy >= effectiveEa) {
                p1.type = "C";
                p2.type = "D";
                collisionCounterRef.current.effective += 1;

                // Reaction burst flash
                ctx.fillStyle = "rgba(245, 158, 11, 0.4)";
                ctx.beginPath();
                ctx.arc(p1.x, p1.y, 18, 0, Math.PI * 2);
                ctx.fill();
              }
            }
          }
        }
      }

      // Draw all particles
      for (const p of pList) {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);

        if (p.type === "A") {
          ctx.fillStyle = "#38bdf8"; // Sky Blue
        } else if (p.type === "B") {
          ctx.fillStyle = "#f43f5e"; // Rose Red
        } else if (p.type === "C") {
          ctx.fillStyle = "#10b981"; // Emerald Green Product
        } else {
          ctx.fillStyle = "#a855f7"; // Purple Product
        }

        ctx.fill();
        ctx.strokeStyle = "#ffffff";
        ctx.lineWidth = 1;
        ctx.stroke();

        // Label particle type
        ctx.fillStyle = "#ffffff";
        ctx.font = "bold 8px sans-serif";
        ctx.textAlign = "center";
        ctx.fillText(p.type, p.x, p.y + 3);
      }

      // Update reaction statistics
      let reactants = 0;
      let products = 0;
      for (const p of pList) {
        if (p.type === "A" || p.type === "B") reactants++;
        else products++;
      }

      const conversion = pList.length > 0 ? Number(((products / pList.length) * 100).toFixed(1)) : 0;
      const rate = Number(
        (
          (collisionCounterRef.current.effective / Math.max(1, collisionCounterRef.current.total)) *
          (temperature / 300) *
          10
        ).toFixed(2)
      );

      setStats({
        reactants,
        products,
        conversionPercent: conversion,
        totalCollisions: collisionCounterRef.current.total,
        effectiveCollisions: collisionCounterRef.current.effective,
        reactionRate: rate,
      });

      if (onMetricUpdate) {
        onMetricUpdate({
          yieldPercent: conversion,
          temperature,
          activationEnergy: effectiveEa,
        });
      }

      animRef.current = requestAnimationFrame(step);
    };

    animRef.current = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animRef.current);
  }, [temperature, effectiveEa, hasCatalyst, onMetricUpdate]);

  // Render Maxwell-Boltzmann Kinetic Energy Distribution
  useEffect(() => {
    const mbCanvas = maxwellCanvasRef.current;
    if (!mbCanvas) return;
    const mbCtx = mbCanvas.getContext("2d");
    if (!mbCtx) return;

    const mW = mbCanvas.width;
    const mH = mbCanvas.height;
    mbCtx.clearRect(0, 0, mW, mH);

    mbCtx.fillStyle = "#090e1a";
    mbCtx.fillRect(0, 0, mW, mH);

    // Axis
    mbCtx.strokeStyle = "#334155";
    mbCtx.lineWidth = 1;
    mbCtx.beginPath();
    mbCtx.moveTo(25, mH - 20);
    mbCtx.lineTo(mW - 10, mH - 20);
    mbCtx.moveTo(25, 10);
    mbCtx.lineTo(25, mH - 20);
    mbCtx.stroke();

    // Maxwell-Boltzmann Curve: f(E) ~ sqrt(E) * exp(-E / kT)
    const kT = (temperature / 300) * 35;
    mbCtx.strokeStyle = "#38bdf8";
    mbCtx.lineWidth = 2.5;
    mbCtx.beginPath();

    const eaPx = 25 + (effectiveEa / 100) * (mW - 40);

    for (let x = 25; x < mW - 10; x++) {
      const E = ((x - 25) / (mW - 40)) * 100;
      const prob = Math.sqrt(E) * Math.exp(-E / kT);
      const scaledY = mH - 20 - prob * 14 * (300 / temperature);

      if (x === 25) mbCtx.moveTo(x, Math.max(10, scaledY));
      else mbCtx.lineTo(x, Math.max(10, scaledY));
    }
    mbCtx.stroke();

    // Shaded Area for E >= Ea (Molecules with sufficient reaction energy)
    mbCtx.fillStyle = "rgba(16, 185, 129, 0.3)";
    mbCtx.beginPath();
    mbCtx.moveTo(eaPx, mH - 20);
    for (let x = Math.floor(eaPx); x < mW - 10; x++) {
      const E = ((x - 25) / (mW - 40)) * 100;
      const prob = Math.sqrt(E) * Math.exp(-E / kT);
      const scaledY = mH - 20 - prob * 14 * (300 / temperature);
      mbCtx.lineTo(x, Math.max(10, scaledY));
    }
    mbCtx.lineTo(mW - 10, mH - 20);
    mbCtx.closePath();
    mbCtx.fill();

    // Activation Energy Ea Barrier Line
    mbCtx.strokeStyle = hasCatalyst ? "#10b981" : "#f43f5e";
    mbCtx.lineWidth = 2;
    mbCtx.setLineDash([4, 2]);
    mbCtx.beginPath();
    mbCtx.moveTo(eaPx, 10);
    mbCtx.lineTo(eaPx, mH - 20);
    mbCtx.stroke();
    mbCtx.setLineDash([]);

    // Labels
    mbCtx.fillStyle = hasCatalyst ? "#10b981" : "#f43f5e";
    mbCtx.font = "bold 9px sans-serif";
    mbCtx.fillText(`Ea = ${effectiveEa} kJ/mol`, Math.max(30, eaPx - 35), 20);

    mbCtx.fillStyle = "#94a3b8";
    mbCtx.font = "9px sans-serif";
    mbCtx.fillText("Energy (E) →", mW - 60, mH - 6);
  }, [temperature, effectiveEa, hasCatalyst]);

  const isChallengeWon = stats.conversionPercent >= 90;

  return (
    <div className="flex flex-col gap-4">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
        {/* Molecular Chamber Stage */}
        <div className="lg:col-span-2 relative rounded-2xl overflow-hidden border border-slate-700 bg-slate-900 shadow-2xl">
          <canvas ref={canvasRef} width={560} height={340} className="w-full h-[300px] sm:h-[340px] block" />

          {/* Particle Legend */}
          <div className="absolute top-3 left-3 flex flex-wrap gap-2 text-xs font-mono bg-slate-900/85 backdrop-blur-md px-3 py-1.5 rounded-xl border border-slate-700 text-slate-200">
            <span className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-sky-400"></span> Reactant A
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-500"></span> Reactant B
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400"></span> Product C + D
            </span>
          </div>

          {/* Challenge Status */}
          <div className="absolute top-3 right-3">
            {isChallengeWon ? (
              <div className="flex items-center gap-1.5 bg-emerald-500/20 border border-emerald-500 text-emerald-300 px-3 py-1.5 rounded-xl text-xs font-semibold">
                <CheckCircle className="w-4 h-4 text-emerald-400" /> 90%+ Yield Achieved!
              </div>
            ) : (
              <div className="flex items-center gap-1.5 bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 px-3 py-1.5 rounded-xl text-xs">
                <Award className="w-4 h-4 text-emerald-400" /> Target: ≥90% Yield (Current: {stats.conversionPercent}%)
              </div>
            )}
          </div>
        </div>

        {/* Maxwell-Boltzmann Distribution Graph */}
        <div className="relative rounded-2xl overflow-hidden border border-slate-700 bg-slate-900 p-3 flex flex-col justify-between">
          <div className="flex items-center justify-between pb-2 border-b border-slate-800">
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-300">
              Maxwell-Boltzmann Energy (E)
            </span>
            <span className="text-xs font-mono text-emerald-400">{temperature} K</span>
          </div>

          <canvas ref={maxwellCanvasRef} width={300} height={200} className="w-full h-[190px] rounded-xl" />

          {/* Catalyst Action Button */}
          <div className="pt-2">
            <button
              onClick={() => setHasCatalyst(!hasCatalyst)}
              className={`w-full flex items-center justify-center gap-2 py-2 px-3 rounded-xl text-xs font-semibold border transition-all cursor-pointer ${
                hasCatalyst
                  ? "bg-emerald-500/20 border-emerald-500 text-emerald-300"
                  : "bg-slate-800 hover:bg-slate-700 border-slate-700 text-slate-300"
              }`}
            >
              <Zap className="w-3.5 h-3.5" />
              {hasCatalyst ? "Catalyst Active (Lowered Ea by 25 kJ)" : "+ Add Platinum Catalyst"}
            </button>
          </div>
        </div>
      </div>

      {/* Real-time reaction statistics */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        <div className="bg-slate-900/70 border border-slate-800 rounded-xl p-3">
          <span className="text-xs text-slate-400">Reaction Yield</span>
          <div className="text-xl font-bold font-mono text-emerald-400 mt-0.5">{stats.conversionPercent}%</div>
        </div>
        <div className="bg-slate-900/70 border border-slate-800 rounded-xl p-3">
          <span className="text-xs text-slate-400">Effective Collisions (E ≥ Ea)</span>
          <div className="text-xl font-bold font-mono text-amber-400 mt-0.5">{stats.effectiveCollisions}</div>
        </div>
        <div className="bg-slate-900/70 border border-slate-800 rounded-xl p-3">
          <span className="text-xs text-slate-400">Instant Reaction Rate</span>
          <div className="text-xl font-bold font-mono text-sky-400 mt-0.5">{stats.reactionRate} mol/s</div>
        </div>
        <div className="bg-slate-900/70 border border-slate-800 rounded-xl p-3 flex items-center justify-between">
          <div>
            <span className="text-xs text-slate-400">System Reset</span>
            <div className="text-xs text-slate-500">Re-inject reactants</div>
          </div>
          <button
            onClick={initParticles}
            className="p-2 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-lg cursor-pointer transition-all"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
