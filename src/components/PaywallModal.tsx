import React from "react";
import { SimulationItem, LicenseTier } from "../types";
import {
  Lock,
  X,
  ShoppingCart,
  CheckCircle2,
  Share2,
  ExternalLink,
  Copy,
  Sparkles,
  ShieldAlert,
  ArrowRight,
  GraduationCap
} from "lucide-react";

interface PaywallModalProps {
  isOpen: boolean;
  onClose: () => void;
  simulation: SimulationItem | null;
  featureAttempted: "lms" | "popout" | "copy" | "worksheet" | "source";
  onAddToCartAndCheckout: (sim: SimulationItem, tier: LicenseTier) => void;
  onTestDrive?: (sim: SimulationItem) => void;
}

export const PaywallModal: React.FC<PaywallModalProps> = ({
  isOpen,
  onClose,
  simulation,
  featureAttempted,
  onAddToCartAndCheckout,
  onTestDrive,
}) => {
  if (!isOpen || !simulation) return null;

  const getFeatureDetails = () => {
    switch (featureAttempted) {
      case "lms":
        return {
          title: "LMS Publishing Requires an Active License",
          icon: <Share2 className="w-6 h-6 text-emerald-400" />,
          badge: "LMS Export Locked",
          desc: `Posting "${simulation.title}" directly to Google Classroom, Canvas, or Schoology with student roster sync and grade passback is a licensed feature.`,
          bullet: "Instant 1-click assignment creation with interactive student launch links"
        };
      case "popout":
        return {
          title: "External Tab / Standalone Launch Restricted",
          icon: <ExternalLink className="w-6 h-6 text-sky-400" />,
          badge: "Standalone Tab Locked",
          desc: `Opening "${simulation.title}" as an unwatermarked standalone application in an external browser tab requires a classroom or department license.`,
          bullet: "Full-screen standalone distraction-free laboratory access without sandbox limits"
        };
      case "copy":
      case "source":
        return {
          title: "Simulation Source & Embed Code Protected",
          icon: <Copy className="w-6 h-6 text-amber-400" />,
          badge: "Copyright Protected",
          desc: `Exporting or copying the underlying HTML source code, offline bundles, or persistent embed tokens for "${simulation.title}" is restricted to licensed educators and verified creators.`,
          bullet: "Offline ZIP deployment, self-hosted web servers, and district intranet packages"
        };
      case "worksheet":
      default:
        return {
          title: "LMS Classroom Distribution Restricted",
          icon: <GraduationCap className="w-6 h-6 text-indigo-400" />,
          badge: "License Required",
          desc: `Distributing "${simulation.title}" to student LMS courses and accessing unwatermarked teacher answer keys requires an active license.`,
          bullet: "Complete aligned teacher key, scoring rubric, and unwatermarked student worksheets"
        };
    }
  };

  const details = getFeatureDetails();

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-3 sm:p-4 overflow-y-auto animate-in fade-in duration-200">
      <div className="bg-slate-900 border border-slate-700/80 rounded-3xl w-full max-w-lg overflow-hidden shadow-2xl flex flex-col relative">
        {/* Top Pattern Header */}
        <div className="p-6 bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950/40 border-b border-slate-800 relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-3 mb-3">
            <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center shrink-0">
              <Lock className="w-6 h-6 text-amber-400" />
            </div>
            <div>
              <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30 uppercase">
                {details.badge}
              </span>
              <h2 className="text-lg font-bold text-white mt-1 leading-snug">{details.title}</h2>
            </div>
          </div>

          <p className="text-xs text-slate-300 leading-relaxed">{details.desc}</p>
        </div>

        {/* Value Proposition Body */}
        <div className="p-6 space-y-5">
          <div className="bg-slate-950/80 border border-slate-800/80 rounded-2xl p-4 space-y-3">
            <div className="flex items-center justify-between text-xs font-semibold text-slate-300 border-b border-slate-800 pb-2">
              <span>Simulation Target:</span>
              <span className="text-white font-bold truncate max-w-[220px]">{simulation.title}</span>
            </div>

            <div className="space-y-2 text-xs text-slate-300">
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>{details.bullet}</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>Curriculum-aligned NGSS, AP &amp; STEM standards verification</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>Student PIN classroom codes &amp; automated assignment links</span>
              </div>
            </div>
          </div>

          {/* Pricing Options */}
          <div className="grid grid-cols-2 gap-3">
            <button
              onClick={() => {
                onAddToCartAndCheckout(simulation, "single");
                onClose();
              }}
              className="p-3.5 rounded-2xl bg-gradient-to-b from-slate-800 to-slate-850 hover:from-slate-750 hover:to-slate-800 border border-sky-500/30 hover:border-sky-400 text-left transition-all group cursor-pointer"
            >
              <div className="flex items-center justify-between mb-1">
                <span className="text-[11px] font-bold text-sky-400 uppercase">Single Teacher</span>
                <span className="text-base font-black text-white font-mono">
                  ${simulation.pricing?.singleTeacher || 19}
                </span>
              </div>
              <p className="text-[10px] text-slate-400">1 Educator &bull; 150 Students &bull; Lifetime</p>
              <div className="mt-2.5 flex items-center gap-1 text-[11px] font-bold text-sky-300 group-hover:text-white">
                <span>Unlock License</span>
                <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
              </div>
            </button>

            <button
              onClick={() => {
                onAddToCartAndCheckout(simulation, "department");
                onClose();
              }}
              className="p-3.5 rounded-2xl bg-gradient-to-b from-slate-800 to-slate-850 hover:from-slate-750 hover:to-slate-800 border border-emerald-500/30 hover:border-emerald-400 text-left transition-all group cursor-pointer"
            >
              <div className="flex items-center justify-between mb-1">
                <span className="text-[11px] font-bold text-emerald-400 uppercase">School Dept</span>
                <span className="text-base font-black text-white font-mono">
                  ${simulation.pricing?.schoolDepartment || 200}
                </span>
              </div>
              <p className="text-[10px] text-slate-400">5 Teachers &bull; Unlimited Students</p>
              <div className="mt-2.5 flex items-center gap-1 text-[11px] font-bold text-emerald-300 group-hover:text-white">
                <span>Unlock Dept</span>
                <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
              </div>
            </button>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center justify-between gap-3 pt-2">
            {onTestDrive && (
              <button
                onClick={() => {
                  onClose();
                  onTestDrive(simulation);
                }}
                className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white text-xs font-semibold border border-slate-700 cursor-pointer transition-colors"
              >
                Test Drive in Sandbox
              </button>
            )}

            <button
              onClick={() => {
                onAddToCartAndCheckout(simulation, "single");
                onClose();
              }}
              className="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-slate-950 text-xs font-black cursor-pointer shadow-lg shadow-emerald-500/20 transition-all active:scale-95"
            >
              <ShoppingCart className="w-4 h-4 text-slate-950" />
              <span>Purchase License to Unlock (${simulation.pricing?.singleTeacher || 19})</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
