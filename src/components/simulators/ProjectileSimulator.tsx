import React, { useEffect, useRef, useState } from "react";
import { Play, RotateCcw, Award, CheckCircle, Download, Sliders, Shield, Zap } from "lucide-react";

interface ProjectileProps {
  velocity?: number;
  angle?: number;
  gravity?: number;
  airResistance?: number;
  mass?: number;
  initialHeight?: number;
  onMetricUpdate?: (metrics: Record<string, number>) => void;
}

export const ProjectileSimulator: React.FC<ProjectileProps> = ({
  velocity: propVelocity = 35,
  angle: propAngle = 45,
  gravity: propGravity = 9.81,
  airResistance: propAirResistance = 0.002,
  mass: propMass = 2.0,
  initialHeight: propInitialHeight = 15,
  onMetricUpdate,
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  // Interactive Lab Parameters (Decoupled Initial Height and Velocity)
  const [velocity, setVelocity] = useState(propVelocity);
  const [angle, setAngle] = useState(propAngle);
  const [initialHeight, setInitialHeight] = useState(propInitialHeight);
  const [gravity, setGravity] = useState(propGravity);
  const [airResistance, setAirResistance] = useState(propAirResistance);
  const [mass, setMass] = useState(propMass);

  const [history, setHistory] = useState<{ x: number; y: number }[]>([]);
  const [allTrajectories, setAllTrajectories] = useState<Array<{ path: { x: number; y: number }[]; color: string; label: string }>>([]);

  const [currentMetrics, setCurrentMetrics] = useState({
    launchHeight: propInitialHeight,
    distance: 0,
    maxHeight: propInitialHeight,
    flightTime: 0,
    finalVelocity: 0,
    currentVx: 0,
    currentVy: 0,
    kineticEnergy: 0,
    potentialEnergy: 0,
    totalEnergy: 0,
  });

  const stateRef = useRef({
    x: 0,
    y: propInitialHeight,
    vx: 0,
    vy: 0,
    t: 0,
    maxH: propInitialHeight,
    path: [] as { x: number; y: number }[],
    animId: 0,
    isComplete: false,
  });

  const targetX = 140; // Target distance in meters for challenge

  const resetSimulation = () => {
    cancelAnimationFrame(stateRef.current.animId);
    const rad = (angle * Math.PI) / 180;
    const v0x = velocity * Math.cos(rad);
    const v0y = velocity * Math.sin(rad);

    // Initial launch height is firmly anchored at initialHeight and NEVER reduced by velocity
    stateRef.current = {
      x: 0,
      y: initialHeight,
      vx: v0x,
      vy: v0y,
      t: 0,
      maxH: initialHeight,
      path: [{ x: 0, y: initialHeight }],
      animId: 0,
      isComplete: false,
    };

    setHistory([{ x: 0, y: initialHeight }]);
    setIsPlaying(false);
    updateDisplayMetrics(0, initialHeight, v0x, v0y);
  };

  const updateDisplayMetrics = (x: number, y: number, vx: number, vy: number) => {
    const vTotal = Math.sqrt(vx * vx + vy * vy);
    const ke = 0.5 * mass * vTotal * vTotal;
    const pe = mass * gravity * Math.max(0, y);
    const maxH = Math.max(stateRef.current.maxH, y);
    stateRef.current.maxH = maxH;

    const metrics = {
      launchHeight: Number(initialHeight.toFixed(1)),
      distance: Number(x.toFixed(1)),
      maxHeight: Number(maxH.toFixed(1)),
      flightTime: Number(stateRef.current.t.toFixed(2)),
      finalVelocity: Number(vTotal.toFixed(1)),
      currentVx: Number(vx.toFixed(1)),
      currentVy: Number(vy.toFixed(1)),
      kineticEnergy: Number(ke.toFixed(0)),
      potentialEnergy: Number(pe.toFixed(0)),
      totalEnergy: Number((ke + pe).toFixed(0)),
    };

    setCurrentMetrics(metrics);
    if (onMetricUpdate) {
      onMetricUpdate(metrics);
    }
  };

  const launch = () => {
    cancelAnimationFrame(stateRef.current.animId);
    setIsPlaying(true);

    const rad = (angle * Math.PI) / 180;
    const v0x = velocity * Math.cos(rad);
    const v0y = velocity * Math.sin(rad);

    // Ensure starting coordinates strictly preserve initialHeight
    stateRef.current = {
      x: 0,
      y: initialHeight,
      vx: v0x,
      vy: v0y,
      t: 0,
      maxH: initialHeight,
      path: [{ x: 0, y: initialHeight }],
      animId: 0,
      isComplete: false,
    };

    const dt = 0.025; // 25ms simulation step

    const step = () => {
      const s = stateRef.current;
      if (s.isComplete) return;

      // Compute aerodynamic drag: F_drag = -0.5 * rho * Cd * A * v^2 -> approximated as -k * v * v
      const vMag = Math.sqrt(s.vx * s.vx + s.vy * s.vy);
      const dragFx = -airResistance * vMag * s.vx;
      const dragFy = -airResistance * vMag * s.vy;

      // Accelerations: a_x = F_drag_x / m, a_y = -g + F_drag_y / m
      const ax = dragFx / mass;
      const ay = -gravity + dragFy / mass;

      // Euler-Cromer integration
      s.vx += ax * dt;
      s.vy += ay * dt;
      s.x += s.vx * dt;
      s.y += s.vy * dt;
      s.t += dt;

      // Touchdown condition (landing on ground y <= 0)
      if (s.y <= 0 && s.t > 0.04) {
        s.y = 0;
        s.isComplete = true;
        setIsPlaying(false);
      }

      s.path.push({ x: s.x, y: s.y });
      setHistory([...s.path]);
      updateDisplayMetrics(s.x, s.y, s.vx, s.vy);

      if (s.isComplete) {
        // Save to trajectory history
        const label = `v₀=${velocity}m/s, θ=${angle}°, h₀=${initialHeight}m`;
        const colors = ["#38bdf8", "#a855f7", "#ec4899", "#f59e0b", "#10b981"];
        const chosenColor = colors[allTrajectories.length % colors.length];
        setAllTrajectories((prev) => [...prev.slice(-3), { path: s.path, color: chosenColor, label }]);
      } else {
        s.animId = requestAnimationFrame(step);
      }
    };

    stateRef.current.animId = requestAnimationFrame(step);
  };

  // Re-sync when parameter sliders change
  useEffect(() => {
    if (!isPlaying) {
      resetSimulation();
    }
  }, [velocity, angle, initialHeight, gravity, airResistance, mass]);

  // Canvas Rendering
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const width = canvas.width;
    const height = canvas.height;

    // Clear background
    ctx.clearRect(0, 0, width, height);

    // Sky gradient
    const groundH = 45;
    const skyGrad = ctx.createLinearGradient(0, 0, 0, height - groundH);
    skyGrad.addColorStop(0, "#090d16");
    skyGrad.addColorStop(0.6, "#0f172a");
    skyGrad.addColorStop(1, "#1e293b");
    ctx.fillStyle = skyGrad;
    ctx.fillRect(0, 0, width, height - groundH);

    // Ground baseline
    ctx.fillStyle = "#1e293b";
    ctx.fillRect(0, height - groundH, width, groundH);
    ctx.fillStyle = "#10b981";
    ctx.fillRect(0, height - groundH, width, 4);

    // Stable Coordinate Scaling (200m range horizontally, 100m vertically)
    const originX = 50;
    const originY = height - groundH;
    const scaleX = (width - 90) / 220;
    const scaleY = (height - 90) / 95;

    // Grid lines & Axis Marks
    ctx.strokeStyle = "rgba(255, 255, 255, 0.06)";
    ctx.lineWidth = 1;
    for (let m = 20; m <= 220; m += 20) {
      const gx = originX + m * scaleX;
      ctx.beginPath();
      ctx.moveTo(gx, 0);
      ctx.lineTo(gx, originY);
      ctx.stroke();

      ctx.fillStyle = "#64748b";
      ctx.font = "10px monospace";
      ctx.fillText(`${m}m`, gx - 10, originY + 16);
    }

    for (let h = 10; h <= 90; h += 10) {
      const gy = originY - h * scaleY;
      ctx.beginPath();
      ctx.moveTo(originX, gy);
      ctx.lineTo(width, gy);
      ctx.stroke();

      ctx.fillStyle = "#64748b";
      ctx.font = "10px monospace";
      ctx.fillText(`${h}m`, 12, gy + 4);
    }

    // Launch Platform / Cliff at x = 0 with height = initialHeight
    const platformWidth = 36;
    const platformTopY = originY - initialHeight * scaleY;

    // Platform structure
    ctx.fillStyle = "#334155";
    ctx.fillRect(originX - platformWidth, platformTopY, platformWidth, initialHeight * scaleY);
    ctx.strokeStyle = "#64748b";
    ctx.lineWidth = 2;
    ctx.strokeRect(originX - platformWidth, platformTopY, platformWidth, initialHeight * scaleY);

    // Platform Top Surface
    ctx.fillStyle = "#38bdf8";
    ctx.fillRect(originX - platformWidth - 2, platformTopY - 2, platformWidth + 4, 4);

    // Platform Height Indicator Dimension line
    if (initialHeight > 0) {
      ctx.strokeStyle = "rgba(56, 189, 248, 0.6)";
      ctx.lineWidth = 1.5;
      ctx.setLineDash([3, 3]);
      ctx.beginPath();
      ctx.moveTo(originX - platformWidth - 10, originY);
      ctx.lineTo(originX - platformWidth - 10, platformTopY);
      ctx.stroke();
      ctx.setLineDash([]);

      ctx.fillStyle = "#38bdf8";
      ctx.font = "bold 10px monospace";
      ctx.fillText(`h₀=${initialHeight}m`, originX - platformWidth - 44, (originY + platformTopY) / 2 + 3);
    }

    // Target Outpost Marker (at targetX = 140m)
    const targetPx = originX + targetX * scaleX;
    ctx.fillStyle = "rgba(239, 68, 68, 0.25)";
    ctx.fillRect(targetPx - 16, originY - 14, 32, 14);
    ctx.strokeStyle = "#ef4444";
    ctx.lineWidth = 2;
    ctx.strokeRect(targetPx - 16, originY - 14, 32, 14);
    ctx.fillStyle = "#f87171";
    ctx.font = "bold 10px sans-serif";
    ctx.fillText("TARGET (140m)", targetPx - 34, originY - 20);

    // Prior Trajectory Ghost Paths
    allTrajectories.forEach((traj) => {
      ctx.strokeStyle = traj.color;
      ctx.globalAlpha = 0.35;
      ctx.lineWidth = 2;
      ctx.setLineDash([4, 4]);
      ctx.beginPath();
      ctx.moveTo(originX, originY - traj.path[0].y * scaleY);
      traj.path.forEach((pt) => {
        ctx.lineTo(originX + pt.x * scaleX, originY - pt.y * scaleY);
      });
      ctx.stroke();
      ctx.setLineDash([]);
      ctx.globalAlpha = 1.0;
    });

    // Active Trajectory Path
    if (history.length > 1) {
      ctx.strokeStyle = "#38bdf8";
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.moveTo(originX, originY - history[0].y * scaleY);
      for (const p of history) {
        ctx.lineTo(originX + p.x * scaleX, originY - p.y * scaleY);
      }
      ctx.stroke();
    }

    // Current Projectile Position
    const curX = stateRef.current.x;
    const curY = stateRef.current.y;
    const projPx = originX + curX * scaleX;
    const projPy = originY - curY * scaleY;

    // Cannon / Launcher Pivot (Mounted on top of platform at y = initialHeight)
    const cannonRad = (angle * Math.PI) / 180;
    ctx.save();
    ctx.translate(originX, platformTopY);
    ctx.rotate(-cannonRad);
    ctx.fillStyle = "#94a3b8";
    ctx.fillRect(0, -6, 28, 12);
    ctx.strokeStyle = "#e2e8f0";
    ctx.lineWidth = 2;
    ctx.strokeRect(0, -6, 28, 12);
    ctx.restore();

    // Launcher Base Pivot
    ctx.fillStyle = "#64748b";
    ctx.beginPath();
    ctx.arc(originX, platformTopY, 10, 0, Math.PI * 2);
    ctx.fill();

    // Projectile Payload Sphere
    ctx.fillStyle = "#f59e0b";
    ctx.beginPath();
    ctx.arc(projPx, projPy, 7, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = "#ffffff";
    ctx.lineWidth = 2;
    ctx.stroke();

    // Live Velocity Vectors during flight
    if (isPlaying) {
      const vxLen = stateRef.current.vx * 0.75;
      const vyLen = -stateRef.current.vy * 0.75;

      // Vx Vector (Emerald)
      ctx.strokeStyle = "#10b981";
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(projPx, projPy);
      ctx.lineTo(projPx + vxLen, projPy);
      ctx.stroke();

      // Vy Vector (Amber)
      ctx.strokeStyle = "#f59e0b";
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(projPx, projPy);
      ctx.lineTo(projPx, projPy + vyLen);
      ctx.stroke();

      // V-Resultant (Sky Blue)
      ctx.strokeStyle = "#38bdf8";
      ctx.lineWidth = 2.5;
      ctx.beginPath();
      ctx.moveTo(projPx, projPy);
      ctx.lineTo(projPx + vxLen, projPy + vyLen);
      ctx.stroke();
    }
  }, [history, angle, isPlaying, velocity, gravity, airResistance, mass, initialHeight, allTrajectories]);

  useEffect(() => {
    return () => cancelAnimationFrame(stateRef.current.animId);
  }, []);

  const isTargetHit = Math.abs(currentMetrics.distance - targetX) <= 4;

  const exportCSV = () => {
    let csv = "Time_s,Distance_X_m,Height_Y_m,Vx_ms,Vy_ms\n";
    history.forEach((pt, i) => {
      csv += `${(i * 0.025).toFixed(3)},${pt.x.toFixed(2)},${pt.y.toFixed(2)}\n`;
    });
    const blob = new Blob([csv], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `projectile_telemetry_${velocity}ms_${angle}deg_h${initialHeight}m.csv`;
    a.click();
  };

  return (
    <div className="flex flex-col gap-4">
      {/* Simulation Stage */}
      <div className="relative rounded-2xl overflow-hidden border border-slate-700 bg-slate-900 shadow-2xl">
        <canvas
          ref={canvasRef}
          width={820}
          height={390}
          className="w-full h-[320px] sm:h-[390px] block"
        />

        {/* Live Vector Overlay Legend */}
        <div className="absolute top-3 left-3 flex flex-wrap items-center gap-2 text-xs font-mono bg-slate-900/90 backdrop-blur-md px-3 py-1.5 rounded-xl border border-slate-700 text-slate-200">
          <span className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-sky-400"></span> Resultant (v)
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400"></span> Vx
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-amber-400"></span> Vy
          </span>
          <span className="text-slate-500">|</span>
          <span className="text-sky-300 font-semibold">Launch Height (h₀): {initialHeight}m</span>
        </div>

        {/* Challenge Target Indicator */}
        <div className="absolute top-3 right-3 flex items-center gap-2">
          {isTargetHit ? (
            <div className="flex items-center gap-1.5 bg-emerald-500/20 border border-emerald-500 text-emerald-300 px-3 py-1.5 rounded-xl text-xs font-semibold animate-pulse">
              <CheckCircle className="w-4 h-4 text-emerald-400" /> Direct Target Strike! (140m ± 4m)
            </div>
          ) : (
            <div className="flex items-center gap-1.5 bg-rose-500/20 border border-rose-500/40 text-rose-300 px-3 py-1.5 rounded-xl text-xs">
              <Award className="w-4 h-4 text-rose-400" /> Hit Target (140m)
            </div>
          )}
        </div>
      </div>

      {/* Real-Time Telemetry Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5">
        {/* Launch Platform Height (Independent) */}
        <div className="bg-slate-900/80 border border-slate-800 rounded-xl p-3 flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <span className="text-[11px] text-sky-400 uppercase tracking-wider font-semibold">Launch Height (h₀)</span>
            <Shield className="w-3.5 h-3.5 text-sky-400" />
          </div>
          <div className="flex items-baseline gap-1 mt-1">
            <span className="text-xl font-bold font-mono text-sky-300">{currentMetrics.launchHeight}</span>
            <span className="text-xs text-slate-400">meters</span>
          </div>
          <span className="text-[10px] text-slate-400">Constant initial elevation</span>
        </div>

        {/* Max Apex Height */}
        <div className="bg-slate-900/80 border border-slate-800 rounded-xl p-3 flex flex-col justify-between">
          <span className="text-[11px] text-emerald-400 uppercase tracking-wider font-semibold">Max Height (Apex)</span>
          <div className="flex items-baseline gap-1 mt-1">
            <span className="text-xl font-bold font-mono text-emerald-300">{currentMetrics.maxHeight}</span>
            <span className="text-xs text-slate-400">meters</span>
          </div>
          <span className="text-[10px] text-slate-400">h₀ + Δy_apex</span>
        </div>

        {/* Horizontal Range */}
        <div className="bg-slate-900/80 border border-slate-800 rounded-xl p-3 flex flex-col justify-between">
          <span className="text-[11px] text-amber-400 uppercase tracking-wider font-semibold">Horizontal Range</span>
          <div className="flex items-baseline gap-1 mt-1">
            <span className="text-xl font-bold font-mono text-amber-300">{currentMetrics.distance}</span>
            <span className="text-xs text-slate-400">meters</span>
          </div>
          <span className="text-[10px] text-slate-400">Landing displacement</span>
        </div>

        {/* Total Flight Time */}
        <div className="bg-slate-900/80 border border-slate-800 rounded-xl p-3 flex flex-col justify-between">
          <span className="text-[11px] text-purple-400 uppercase tracking-wider font-semibold">Flight Time</span>
          <div className="flex items-baseline gap-1 mt-1">
            <span className="text-xl font-bold font-mono text-purple-300">{currentMetrics.flightTime}</span>
            <span className="text-xs text-slate-400">seconds</span>
          </div>
          <span className="text-[10px] text-slate-400">Air time to ground</span>
        </div>

        {/* Mechanical Energy */}
        <div className="bg-slate-900/80 border border-slate-800 rounded-xl p-3 flex flex-col justify-between col-span-2 sm:col-span-1">
          <span className="text-[11px] text-rose-400 uppercase tracking-wider font-semibold">Mechanical Energy</span>
          <div className="flex items-center gap-1.5 mt-1">
            <div className="flex-1 bg-slate-800 h-2.5 rounded-full overflow-hidden flex">
              <div
                className="bg-amber-400 h-full transition-all duration-75"
                style={{
                  width: `${
                    (currentMetrics.kineticEnergy / Math.max(1, currentMetrics.totalEnergy)) * 100
                  }%`,
                }}
                title={`KE: ${currentMetrics.kineticEnergy}J`}
              />
              <div
                className="bg-sky-400 h-full transition-all duration-75"
                style={{
                  width: `${
                    (currentMetrics.potentialEnergy / Math.max(1, currentMetrics.totalEnergy)) * 100
                  }%`,
                }}
                title={`PE: ${currentMetrics.potentialEnergy}J`}
              />
            </div>
            <span className="text-xs font-mono text-slate-200 font-bold">{currentMetrics.totalEnergy}J</span>
          </div>
          <span className="text-[10px] text-slate-400">KE (amber) / PE (sky)</span>
        </div>
      </div>

      {/* Interactive Parameter Control Knobs */}
      <div className="bg-slate-900/70 border border-slate-800 rounded-2xl p-4 flex flex-col gap-3">
        <div className="flex items-center justify-between text-xs text-slate-300 border-b border-slate-800 pb-2">
          <div className="flex items-center gap-2 font-semibold text-slate-100">
            <Sliders className="w-4 h-4 text-sky-400" />
            <span>Telemetry Laboratory Controls</span>
          </div>
          <span className="text-[11px] text-emerald-400 font-mono">Independent Variable Protection Active</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Initial Velocity */}
          <div className="flex flex-col gap-1.5">
            <div className="flex justify-between text-xs">
              <span className="text-slate-300 font-medium">Initial Velocity (v₀)</span>
              <span className="text-sky-400 font-mono font-bold">{velocity} m/s</span>
            </div>
            <input
              type="range"
              min="5"
              max="60"
              step="1"
              value={velocity}
              disabled={isPlaying}
              onChange={(e) => setVelocity(Number(e.target.value))}
              className="w-full accent-sky-400 cursor-pointer disabled:opacity-50"
            />
            <span className="text-[10px] text-slate-400">Adjusts launch speed without affecting platform height</span>
          </div>

          {/* Launch Platform Height */}
          <div className="flex flex-col gap-1.5">
            <div className="flex justify-between text-xs">
              <span className="text-slate-300 font-medium">Launch Platform Height (h₀)</span>
              <span className="text-sky-400 font-mono font-bold">{initialHeight} m</span>
            </div>
            <input
              type="range"
              min="0"
              max="50"
              step="1"
              value={initialHeight}
              disabled={isPlaying}
              onChange={(e) => setInitialHeight(Number(e.target.value))}
              className="w-full accent-indigo-400 cursor-pointer disabled:opacity-50"
            />
            <span className="text-[10px] text-slate-400">Independent launch elevation from ground level</span>
          </div>

          {/* Launch Angle */}
          <div className="flex flex-col gap-1.5">
            <div className="flex justify-between text-xs">
              <span className="text-slate-300 font-medium">Launch Angle (θ)</span>
              <span className="text-amber-400 font-mono font-bold">{angle}°</span>
            </div>
            <input
              type="range"
              min="0"
              max="90"
              step="1"
              value={angle}
              disabled={isPlaying}
              onChange={(e) => setAngle(Number(e.target.value))}
              className="w-full accent-amber-400 cursor-pointer disabled:opacity-50"
            />
            <span className="text-[10px] text-slate-400">Inclination angle above horizontal</span>
          </div>

          {/* Gravity Field */}
          <div className="flex flex-col gap-1.5">
            <div className="flex justify-between text-xs">
              <span className="text-slate-300 font-medium">Gravitational Field (g)</span>
              <span className="text-purple-400 font-mono font-bold">{gravity} m/s²</span>
            </div>
            <div className="flex gap-1.5">
              <input
                type="range"
                min="1.6"
                max="25"
                step="0.1"
                value={gravity}
                disabled={isPlaying}
                onChange={(e) => setGravity(Number(e.target.value))}
                className="flex-1 accent-purple-400 cursor-pointer disabled:opacity-50"
              />
              <button
                onClick={() => setGravity(9.81)}
                className="px-2 py-0.5 rounded bg-slate-800 text-[10px] text-slate-300 hover:text-white border border-slate-700"
              >
                Earth (9.81)
              </button>
            </div>
          </div>

          {/* Air Drag Coefficient */}
          <div className="flex flex-col gap-1.5">
            <div className="flex justify-between text-xs">
              <span className="text-slate-300 font-medium">Air Resistance Drag (k)</span>
              <span className="text-rose-400 font-mono font-bold">{airResistance}</span>
            </div>
            <input
              type="range"
              min="0"
              max="0.01"
              step="0.001"
              value={airResistance}
              disabled={isPlaying}
              onChange={(e) => setAirResistance(Number(e.target.value))}
              className="w-full accent-rose-400 cursor-pointer disabled:opacity-50"
            />
          </div>

          {/* Projectile Mass */}
          <div className="flex flex-col gap-1.5">
            <div className="flex justify-between text-xs">
              <span className="text-slate-300 font-medium">Projectile Mass (m)</span>
              <span className="text-emerald-400 font-mono font-bold">{mass} kg</span>
            </div>
            <input
              type="range"
              min="0.5"
              max="10"
              step="0.5"
              value={mass}
              disabled={isPlaying}
              onChange={(e) => setMass(Number(e.target.value))}
              className="w-full accent-emerald-400 cursor-pointer disabled:opacity-50"
            />
          </div>
        </div>
      </div>

      {/* Button Toolbars */}
      <div className="flex items-center justify-between gap-3 pt-1">
        <div className="flex items-center gap-2">
          <button
            id="launch-projectile-btn"
            onClick={launch}
            disabled={isPlaying}
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-sky-500 to-indigo-600 hover:from-sky-400 hover:to-indigo-500 text-white font-semibold text-sm shadow-lg shadow-sky-500/20 disabled:opacity-50 cursor-pointer transition-all active:scale-95"
          >
            <Play className="w-4 h-4 fill-current" /> {isPlaying ? "Trajectory in Flight..." : "Launch Trajectory"}
          </button>

          <button
            id="reset-projectile-btn"
            onClick={resetSimulation}
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-sm font-medium border border-slate-700 cursor-pointer transition-all active:scale-95"
          >
            <RotateCcw className="w-4 h-4" /> Reset Lab
          </button>
        </div>

        <button
          onClick={exportCSV}
          className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-medium border border-slate-700 cursor-pointer transition-all"
        >
          <Download className="w-3.5 h-3.5" /> Export Telemetry (CSV)
        </button>
      </div>
    </div>
  );
};
