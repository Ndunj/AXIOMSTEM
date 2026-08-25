import React from "react";
import { STEMDiscipline } from "../types";
import {
  Sparkles,
  ShieldCheck,
  Play,
  School,
  Star,
  Award,
  PlusCircle,
  BookOpen,
  Code2
} from "lucide-react";

interface HeroBannerProps {
  onTestDriveFeatured?: () => void;
  onExploreDiscipline: (d: STEMDiscipline) => void;
  onOpenQuoteModal: () => void;
  isCreatorMode?: boolean;
  onOpenUpload?: () => void;
  onOpenStandards?: () => void;
  hasSimulations?: boolean;
}

export const HeroBanner: React.FC<HeroBannerProps> = ({
  onTestDriveFeatured,
  onExploreDiscipline,
  onOpenQuoteModal,
  isCreatorMode,
  onOpenUpload,
  onOpenStandards,
  hasSimulations = false,
}) => {
  return (
    <div className="relative overflow-hidden pt-8 pb-12 sm:pt-12 sm:pb-16 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 border-b border-slate-800">
      {/* Background Radial Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-gradient-to-tr from-sky-500/10 via-indigo-500/15 to-purple-500/10 blur-3xl pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-3xl mx-auto">
          {/* Trust Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-700/80 text-xs text-slate-300 mb-5 shadow-inner">
            <img
              src="/axiom-stem-logo.png"
              alt="Axiom STEM"
              referrerPolicy="no-referrer"
              className="w-4 h-4 rounded-full object-contain"
              onError={(e) => {
                (e.currentTarget as HTMLElement).style.display = "none";
              }}
            />
            <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
            <span className="font-semibold text-white">
              {isCreatorMode
                ? "Creator Control Center: ndunj123@gmail.com"
                : "Interactive STEM Simulation Platform for Modern Classrooms"}
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.15]">
            Publish & License Your Interactive STEM{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-indigo-300 to-purple-400">
              HTML5 Simulations
            </span>
          </h1>

          {/* Subtitle */}
          <p className="mt-5 text-base sm:text-lg text-slate-300 leading-relaxed">
            {isCreatorMode ? (
              <>
                You have exclusive creator rights to upload standalone <strong>HTML, Canvas, WebGL, or hosted simulations</strong>, author custom curriculum standards, and license interactive models to schools.
              </>
            ) : (
              <>
                Equip your students with interactive laboratory inquiry across <strong>Physics, Mathematics, Chemistry, and Biology</strong>. Complete with live parameter controls and instant <strong>AI Lesson Plan generation</strong>.
              </>
            )}
          </p>

          {/* CTAs */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            {onOpenUpload && (
              <button
                onClick={onOpenUpload}
                className="flex items-center gap-2.5 px-6 py-3.5 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-slate-950 font-black text-sm shadow-xl shadow-emerald-500/25 cursor-pointer transition-all active:scale-95"
              >
                <PlusCircle className="w-5 h-5 text-slate-950" />
                <span>+ Upload .html Simulation</span>
              </button>
            )}

            {isCreatorMode && onOpenStandards && (
              <button
                onClick={onOpenStandards}
                className="flex items-center gap-2 px-5 py-3.5 rounded-2xl bg-slate-900 hover:bg-slate-800 text-amber-300 hover:text-amber-200 font-semibold text-sm border border-amber-500/30 cursor-pointer transition-all"
              >
                <BookOpen className="w-4 h-4 text-amber-400" />
                <span>Author Curriculum Standards</span>
              </button>
            )}

            {hasSimulations && onTestDriveFeatured && (
              <button
                onClick={onTestDriveFeatured}
                className="flex items-center gap-2.5 px-5 py-3.5 rounded-2xl bg-gradient-to-r from-sky-500 via-indigo-600 to-purple-600 hover:from-sky-400 hover:to-purple-500 text-white font-bold text-sm shadow-xl shadow-indigo-500/25 cursor-pointer transition-all active:scale-95"
              >
                <Play className="w-4 h-4 fill-current" /> Test Drive Simulation
              </button>
            )}

            <button
              onClick={onOpenQuoteModal}
              className="flex items-center gap-2 px-5 py-3.5 rounded-2xl bg-slate-800/90 hover:bg-slate-700 text-slate-200 hover:text-white font-semibold text-sm border border-slate-700 cursor-pointer transition-all"
            >
              <School className="w-4 h-4 text-amber-400" /> Request District PO / Quote
            </button>
          </div>

          {/* Trust Value Pillars */}
          <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-3 text-left">
            <div className="bg-slate-900/60 border border-slate-800/80 rounded-2xl p-3.5 flex items-start gap-2.5">
              <div className="p-2 rounded-xl bg-sky-500/10 text-sky-400">
                <Code2 className="w-4 h-4" />
              </div>
              <div>
                <div className="text-xs font-bold text-white">Zero-Plugin HTML5</div>
                <div className="text-[11px] text-slate-400">Pure Canvas, WebGL & DOM simulation runtime</div>
              </div>
            </div>

            <div className="bg-slate-900/60 border border-slate-800/80 rounded-2xl p-3.5 flex items-start gap-2.5">
              <div className="p-2 rounded-xl bg-amber-500/10 text-amber-400">
                <Award className="w-4 h-4" />
              </div>
              <div>
                <div className="text-xs font-bold text-white">Custom Standards</div>
                <div className="text-[11px] text-slate-400">Tag NGSS, AP, IB, or custom curriculum codes</div>
              </div>
            </div>

            <div className="bg-slate-900/60 border border-slate-800/80 rounded-2xl p-3.5 flex items-start gap-2.5">
              <div className="p-2 rounded-xl bg-emerald-500/10 text-emerald-400">
                <Sparkles className="w-4 h-4" />
              </div>
              <div>
                <div className="text-xs font-bold text-white">AI Lesson Builder</div>
                <div className="text-[11px] text-slate-400">Generates custom lab handouts in seconds</div>
              </div>
            </div>

            <div className="bg-slate-900/60 border border-slate-800/80 rounded-2xl p-3.5 flex items-start gap-2.5">
              <div className="p-2 rounded-xl bg-purple-500/10 text-purple-400">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <div>
                <div className="text-xs font-bold text-white">Creator Protected</div>
                <div className="text-[11px] text-slate-400">Only authorized author can upload & edit</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
