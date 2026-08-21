import React, { useState } from "react";
import { SimulationItem, LicenseTier } from "../types";
import {
  Play,
  ShoppingCart,
  FileText,
  Star,
  Users,
  CheckCircle2,
  Sparkles,
  Edit2,
  Trash2,
  Code2,
  Share2,
  ShieldCheck,
  Clock,
  Calendar
} from "lucide-react";

interface SimulationCardProps {
  simulation: SimulationItem;
  onTestDrive: (sim: SimulationItem) => void;
  onAddToCart: (sim: SimulationItem, tier: LicenseTier) => void;
  onOpenLessonPlanner: (sim: SimulationItem) => void;
  onOpenWorksheet?: (sim: SimulationItem) => void;
  onOpenLMSPublish?: (sim: SimulationItem) => void;
  isCreatorMode?: boolean;
  isLicensed?: boolean;
  onEditSimulation?: (sim: SimulationItem) => void;
  onDeleteSimulation?: (simId: string) => void;
}

export const SimulationCard: React.FC<SimulationCardProps> = ({
  simulation,
  onTestDrive,
  onAddToCart,
  onOpenLessonPlanner,
  onOpenWorksheet,
  onOpenLMSPublish,
  isCreatorMode,
  isLicensed = false,
  onEditSimulation,
  onDeleteSimulation,
}) => {
  const [selectedTier, setSelectedTier] = useState<LicenseTier>("single");

  const tierPrices = {
    single: { price: simulation.pricing?.singleTeacher || 19, label: "1 Teacher (150 Students)" },
    department: { price: simulation.pricing?.schoolDepartment || 200, label: "School Dept (5 Teachers / Unlimited)" },
    district: { price: simulation.pricing?.districtUnlimited || 400, label: "District Unlimited LMS" },
  };

  const formatLastModified = (sim: SimulationItem) => {
    const ts = sim.lastModified || sim.updatedAt || sim.createdAt;
    if (!ts) return "Recently";
    try {
      const d = new Date(ts);
      if (isNaN(d.getTime())) return ts;
      return d.toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
        hour: "numeric",
        minute: "2-digit",
      });
    } catch {
      return ts;
    }
  };

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden hover:border-slate-700 transition-all duration-300 flex flex-col justify-between shadow-lg group hover:shadow-2xl hover:shadow-indigo-500/10 relative">
      {/* Visual Header / Thumbnail Stage */}
      <div className="relative p-5 pb-4 bg-gradient-to-b from-slate-950 to-slate-900 border-b border-slate-800/80">
        {/* Top Badges & Creator Controls */}
        <div className="flex items-center justify-between gap-2 mb-3">
          <div className="flex items-center gap-1.5">
            <span
              className={`text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider border ${
                simulation.badgeColor || "bg-sky-500/10 text-sky-400 border-sky-500/20"
              }`}
            >
              {simulation.discipline}
            </span>
            {isLicensed ? (
              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 flex items-center gap-1">
                <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                Licensed
              </span>
            ) : (
              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 flex items-center gap-1">
                Interactive Lab
              </span>
            )}
          </div>

          {isCreatorMode ? (
            <div className="flex items-center gap-1.5">
              <span
                className="text-[10px] font-medium text-slate-400 bg-slate-950/80 px-2 py-0.5 rounded-lg border border-slate-800 flex items-center gap-1"
                title={`Last Modified: ${formatLastModified(simulation)}`}
              >
                <Clock className="w-3 h-3 text-sky-400" />
                <span className="font-mono text-slate-300">Mod: {formatLastModified(simulation)}</span>
              </span>

              {onEditSimulation && (
                <button
                  onClick={() => onEditSimulation(simulation)}
                  className="p-1.5 rounded-lg bg-slate-800 hover:bg-indigo-600 text-slate-300 hover:text-white transition-colors"
                  title="Edit Simulation & Standards"
                >
                  <Edit2 className="w-3.5 h-3.5" />
                </button>
              )}
              {onDeleteSimulation && (
                <button
                  onClick={() => {
                    if (confirm(`Delete "${simulation.title}" from your library?`)) {
                      onDeleteSimulation(simulation.id);
                    }
                  }}
                  className="p-1.5 rounded-lg bg-slate-800 hover:bg-rose-600 text-slate-300 hover:text-white transition-colors"
                  title="Delete Simulation"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          ) : (
            <div className="flex items-center gap-1 text-xs text-amber-400 bg-slate-950/80 px-2.5 py-1 rounded-full border border-slate-800 font-mono">
              <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              <span className="font-bold">{simulation.rating || 5.0}</span>
              <span className="text-slate-500 text-[10px]">({simulation.reviewCount || 1})</span>
            </div>
          )}
        </div>

        {/* Title & Tagline */}
        <h3 className="text-lg font-bold text-white group-hover:text-sky-300 transition-colors leading-snug line-clamp-2">
          {simulation.title}
        </h3>
        <p className="text-xs text-slate-400 mt-1.5 leading-relaxed line-clamp-2">{simulation.tagline}</p>

        {/* Creator Management Meta Strip */}
        {isCreatorMode && (
          <div className="mt-3 p-2 rounded-xl bg-slate-950/90 border border-sky-500/20 flex items-center justify-between text-[11px]">
            <div className="flex items-center gap-1.5 text-slate-300">
              <Clock className="w-3.5 h-3.5 text-sky-400 shrink-0" />
              <span className="text-slate-400">Last Modified:</span>
              <span className="font-mono font-bold text-sky-300">{formatLastModified(simulation)}</span>
            </div>
            <span className="text-[10px] font-mono text-emerald-400 px-1.5 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20">
              {simulation.isCustomImport ? "Custom HTML" : "Catalog App"}
            </span>
          </div>
        )}

        {/* Curriculum Standards Tags & License Type */}
        <div className="flex flex-wrap items-center gap-1.5 mt-3">
          <span
            className="text-[10px] font-semibold px-2 py-0.5 rounded-md bg-indigo-500/10 text-indigo-300 border border-indigo-500/20 flex items-center gap-1 shrink-0"
            title="Classroom & Institutional License"
          >
            <ShieldCheck className="w-3 h-3 text-indigo-400" />
            <span className="truncate max-w-[160px]">{simulation.licenseType || "Academic STEM License"}</span>
          </span>
          {simulation.standards && simulation.standards.slice(0, 2).map((st) => (
            <span
              key={st}
              className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-amber-500/10 text-amber-300 border border-amber-500/20"
            >
              {st}
            </span>
          ))}
          {simulation.gradeLevel && simulation.gradeLevel.slice(0, 1).map((gl) => (
            <span
              key={gl}
              className="text-[10px] px-2 py-0.5 rounded-md bg-slate-800/90 text-slate-300 border border-slate-700/60"
            >
              {gl}
            </span>
          ))}
        </div>
      </div>

      {/* Feature Highlights */}
      <div className="p-5 pt-4 flex-1 flex flex-col justify-between space-y-4">
        <ul className="space-y-2 text-xs text-slate-300">
          {(simulation.learningObjectives && simulation.learningObjectives.length > 0
            ? simulation.learningObjectives.slice(0, 2)
            : ["Interactive real-time parameter exploration", "Instant AI-aligned laboratory inquiry"]
          ).map((obj, i) => (
            <li key={i} className="flex items-start gap-2 leading-relaxed">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
              <span className="line-clamp-2">{obj}</span>
            </li>
          ))}
        </ul>

        {/* Educator Proof / Action */}
        <div className="flex items-center justify-between text-[11px] text-slate-400 pt-3 border-t border-slate-800/80">
          <span className="flex items-center gap-1 text-slate-300">
            <Users className="w-3.5 h-3.5 text-indigo-400" /> {simulation.teacherCount || 1}+ Classrooms
          </span>
          <div className="flex flex-wrap items-center gap-2">
            {onOpenWorksheet && (
              <button
                onClick={() => onOpenWorksheet(simulation)}
                className="flex items-center gap-1 text-sky-400 hover:text-sky-300 font-semibold cursor-pointer transition-colors"
                title="Download formatted Student Worksheet & Teacher Key PDF"
              >
                <FileText className="w-3 h-3" /> PDF Lab
              </button>
            )}
            {onOpenLMSPublish && (
              <button
                onClick={() => onOpenLMSPublish(simulation)}
                className="flex items-center gap-1 text-emerald-400 hover:text-emerald-300 font-semibold cursor-pointer transition-colors"
                title="Post interactive assignment to Google Classroom, Canvas, or Schoology"
              >
                <Share2 className="w-3 h-3" /> LMS Post
              </button>
            )}
            <button
              onClick={() => onOpenLessonPlanner(simulation)}
              className="flex items-center gap-1 text-indigo-400 hover:text-indigo-300 font-semibold cursor-pointer transition-colors"
            >
              <Sparkles className="w-3 h-3" /> Lesson Plan
            </button>
          </div>
        </div>

        {/* License Tier Selector */}
        <div className="bg-slate-950/80 p-3 rounded-2xl border border-slate-800/90 space-y-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">License Type:</span>
              <span className="text-[10px] font-semibold text-indigo-300 bg-indigo-500/10 px-2 py-0.5 rounded-full border border-indigo-500/20">
                {selectedTier === "single"
                  ? "Single Teacher"
                  : selectedTier === "department"
                  ? "School Department"
                  : "District Unlimited"}
              </span>
            </div>
            <div className="text-right font-mono">
              <span className="text-xl font-black text-emerald-400">
                ${tierPrices[selectedTier].price}
              </span>
              <span className="text-[10px] text-slate-400 ml-1">one-time</span>
            </div>
          </div>

          {/* 3-Tier License Type Switcher */}
          <div className="grid grid-cols-3 gap-1 text-xs font-medium">
            <button
              onClick={() => setSelectedTier("single")}
              className={`py-1.5 px-1 rounded-xl text-[10px] cursor-pointer transition-all border text-center flex flex-col items-center justify-center ${
                selectedTier === "single"
                  ? "bg-slate-800 text-white border-sky-500/60 shadow-sm font-bold ring-1 ring-sky-500/30"
                  : "bg-slate-900/60 text-slate-400 border-slate-800 hover:text-slate-200"
              }`}
            >
              <span>Teacher</span>
              <span className="font-mono text-emerald-400 font-bold text-[11px]">${simulation.pricing?.singleTeacher || 19}</span>
            </button>
            <button
              onClick={() => setSelectedTier("department")}
              className={`py-1.5 px-1 rounded-xl text-[10px] cursor-pointer transition-all border text-center flex flex-col items-center justify-center ${
                selectedTier === "department"
                  ? "bg-slate-800 text-white border-amber-500/60 shadow-sm font-bold ring-1 ring-amber-500/30"
                  : "bg-slate-900/60 text-slate-400 border-slate-800 hover:text-slate-200"
              }`}
            >
              <span>School Dept</span>
              <span className="font-mono text-emerald-400 font-bold text-[11px]">${simulation.pricing?.schoolDepartment || 200}</span>
            </button>
            <button
              onClick={() => setSelectedTier("district")}
              className={`py-1.5 px-1 rounded-xl text-[10px] cursor-pointer transition-all border text-center flex flex-col items-center justify-center ${
                selectedTier === "district"
                  ? "bg-slate-800 text-white border-purple-500/60 shadow-sm font-bold ring-1 ring-purple-500/30"
                  : "bg-slate-900/60 text-slate-400 border-slate-800 hover:text-slate-200"
              }`}
            >
              <span>District</span>
              <span className="font-mono text-emerald-400 font-bold text-[11px]">${simulation.pricing?.districtUnlimited || 400}</span>
            </button>
          </div>

          <div className="text-[10px] text-slate-400 flex items-center justify-between pt-0.5">
            <span className="truncate">
              {selectedTier === "single"
                ? "✓ 1 Teacher • 150 Student Accounts"
                : selectedTier === "department"
                ? "✓ 5 Teachers • 500 Student Accounts"
                : "✓ District-wide Unlimited LMS & SIS"}
            </span>
            <span className="text-slate-500 font-mono shrink-0 ml-1">LTI 1.3</span>
          </div>
        </div>

        {/* Action Buttons: Test Drive & Buy */}
        <div className="grid grid-cols-2 gap-2 pt-1">
          <button
            onClick={() => onTestDrive(simulation)}
            className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-100 text-xs font-semibold border border-slate-700 cursor-pointer transition-all active:scale-95 shadow"
          >
            <Play className="w-3.5 h-3.5 fill-current text-sky-400" /> Test Drive Live
          </button>

          <button
            onClick={() => onAddToCart(simulation, selectedTier)}
            className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-slate-950 text-xs font-bold cursor-pointer transition-all active:scale-95 shadow-md shadow-emerald-500/20"
          >
            <ShoppingCart className="w-3.5 h-3.5 text-slate-950" /> Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};
