import React, { useState } from "react";
import { SimulationItem, TeacherPurchasedSimulation, UserProfile } from "../types";
import { UsageAnalyticsTab } from "./UsageAnalyticsTab";
import {
  GraduationCap,
  Play,
  Copy,
  Check,
  FileText,
  Users,
  Share2,
  Sparkles,
  BarChart3,
  Calendar,
  Layers,
  ArrowUpRight,
  Search,
  BookOpen,
  LogIn,
  Activity,
  TrendingUp,
  User as UserIcon,
  CreditCard,
  DollarSign,
  Clock
} from "lucide-react";

interface TeacherDashboardProps {
  purchasedList: TeacherPurchasedSimulation[];
  allSimulations: SimulationItem[];
  onLaunchSimulation: (sim: SimulationItem) => void;
  onOpenLessonPlanner: (sim: SimulationItem) => void;
  onOpenWorksheet?: (sim: SimulationItem) => void;
  onOpenLMSPublish?: (sim: SimulationItem) => void;
  onOpenLemonSqueezyHub?: () => void;
  onOpenStripeHub?: () => void;
  onBackToMarketplace: () => void;
  currentUser?: UserProfile | null;
  onOpenAuthModal?: () => void;
}

export const TeacherDashboard: React.FC<TeacherDashboardProps> = ({
  purchasedList,
  allSimulations,
  onLaunchSimulation,
  onOpenLessonPlanner,
  onOpenWorksheet,
  onOpenLMSPublish,
  onOpenLemonSqueezyHub,
  onOpenStripeHub,
  onBackToMarketplace,
  currentUser,
  onOpenAuthModal,
}) => {
  const [activeTab, setActiveTab] = useState<"licensed" | "analytics">("licensed");
  const [copiedPin, setCopiedPin] = useState<string | null>(null);

  const copyPin = (pin: string) => {
    navigator.clipboard.writeText(pin);
    setCopiedPin(pin);
    setTimeout(() => setCopiedPin(null), 2000);
  };

  const getSimDetails = (simId: string): SimulationItem | null => {
    return allSimulations.find((s) => s.id === simId) || null;
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-slate-900 border border-slate-800 p-6 rounded-3xl">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-indigo-600/20 text-indigo-400 border border-indigo-500/30 flex items-center justify-center shrink-0">
            {currentUser?.photoURL ? (
              <img src={currentUser.photoURL} alt={currentUser.displayName} className="w-full h-full rounded-2xl object-cover" />
            ) : (
              <GraduationCap className="w-6 h-6 text-indigo-400" />
            )}
          </div>
          <div>
            <div className="flex items-center gap-2 flex-wrap">
              <h1 className="text-xl font-bold text-white">
                {currentUser ? `${currentUser.displayName}'s Lab Portal` : "Teacher STEM Laboratory Portal"}
              </h1>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 font-mono">
                {purchasedList.length} Active Licenses
              </span>
              {currentUser?.role && (
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 capitalize">
                  {currentUser.role}
                </span>
              )}
            </div>
            <p className="text-xs text-slate-400 mt-0.5">
              {currentUser?.schoolName || "Oakridge STEM High School"} &bull; {currentUser?.department || "Science Dept"} &bull; {currentUser?.email || "450 Active Students"}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 flex-wrap">
          {(onOpenLemonSqueezyHub || onOpenStripeHub) && (
            <button
              onClick={onOpenLemonSqueezyHub || onOpenStripeHub}
              className="flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl bg-amber-500/10 hover:bg-amber-500/20 text-amber-300 border border-amber-500/30 text-xs font-semibold cursor-pointer transition-all shadow-sm"
              title="Manage Lemon Squeezy Store & Creator Payouts"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>Lemon Squeezy Store &amp; Payouts</span>
            </button>
          )}

          {!currentUser && onOpenAuthModal && (
            <button
              onClick={onOpenAuthModal}
              className="flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold cursor-pointer transition-all shadow-md shadow-indigo-600/25"
            >
              <LogIn className="w-3.5 h-3.5" />
              <span>Sign In / Switch Profile</span>
            </button>
          )}

          <button
            onClick={onBackToMarketplace}
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold border border-slate-700 cursor-pointer transition-all"
          >
            <span>Browse Simulation Marketplace</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Classroom Analytics Overview Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
        <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-4">
          <span className="text-xs text-slate-400">Active Student Lab Seats</span>
          <div className="text-2xl font-black font-mono text-emerald-400 mt-1">450 / 500</div>
          <div className="text-[11px] text-slate-500 mt-1">90% Capacity used across 4 periods</div>
        </div>

        <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-4">
          <span className="text-xs text-slate-400">Total Student Lab Runs</span>
          <div className="text-2xl font-black font-mono text-sky-400 mt-1">1,842</div>
          <div className="text-[11px] text-slate-500 mt-1">+340 runs this week</div>
        </div>

        <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-4">
          <span className="text-xs text-slate-400">Inquiry Goals Completed</span>
          <div className="text-2xl font-black font-mono text-purple-400 mt-1">87.4%</div>
          <div className="text-[11px] text-slate-500 mt-1">Auto-graded student challenges</div>
        </div>

        <div
          onClick={() => {
            if (onOpenLMSPublish && purchasedList.length > 0) {
              const firstSim = getSimDetails(purchasedList[0].simulationId);
              if (firstSim) onOpenLMSPublish(firstSim);
            } else if (onOpenLMSPublish && allSimulations.length > 0) {
              onOpenLMSPublish(allSimulations[0]);
            }
          }}
          className={`bg-slate-900/80 border border-slate-800 rounded-2xl p-4 transition-all ${
            onOpenLMSPublish ? "cursor-pointer hover:border-emerald-500/50 hover:bg-emerald-950/20 group" : ""
          }`}
        >
          <div className="flex items-center justify-between">
            <span className="text-xs text-slate-400">LMS Integration Status</span>
            <span className="text-[10px] text-emerald-400 font-bold opacity-0 group-hover:opacity-100 transition-opacity">
              Manage LMS →
            </span>
          </div>
          <div className="text-2xl font-black font-mono text-emerald-400 mt-1 flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>Sync Active</span>
          </div>
          <div className="text-[11px] text-slate-400 mt-1">Google Classroom, Canvas &amp; Schoology</div>
        </div>
      </div>

      {/* Tab Navigation: Licensed Labs vs Usage Analytics */}
      <div className="flex items-center justify-between border-b border-slate-800 pb-3 flex-wrap gap-3">
        <div className="flex items-center gap-2 p-1 bg-slate-900 rounded-2xl border border-slate-800">
          <button
            onClick={() => setActiveTab("licensed")}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              activeTab === "licensed"
                ? "bg-indigo-600 text-white shadow-md shadow-indigo-600/25"
                : "text-slate-400 hover:text-slate-200"
            }`}
          >
            <Layers className="w-4 h-4" />
            <span>Licensed Labs ({purchasedList.length})</span>
          </button>

          <button
            onClick={() => setActiveTab("analytics")}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              activeTab === "analytics"
                ? "bg-indigo-600 text-white shadow-md shadow-indigo-600/25"
                : "text-slate-400 hover:text-slate-200"
            }`}
          >
            <BarChart3 className="w-4 h-4 text-sky-400" />
            <span>Usage Analytics</span>
            <span className="text-[10px] px-1.5 py-0.5 rounded-md bg-emerald-500/20 text-emerald-300 font-mono font-bold">
              Live
            </span>
          </button>
        </div>

        {activeTab === "licensed" ? (
          <span className="text-xs text-slate-400">Project or share PIN with students</span>
        ) : (
          <span className="text-xs text-slate-400">Real-time student run metrics and engagement stats</span>
        )}
      </div>

      {/* TAB CONTENT 1: LICENSED SIMULATION LABS */}
      {activeTab === "licensed" && (
        <div className="space-y-4">
          {purchasedList.length === 0 ? (
            <div className="p-8 rounded-3xl bg-slate-900/50 border border-slate-800 text-center max-w-lg mx-auto space-y-3">
              <GraduationCap className="w-10 h-10 text-slate-600 mx-auto" />
              <h3 className="text-base font-bold text-white">No Active Simulation Licenses Yet</h3>
              <p className="text-xs text-slate-400">
                Browse the marketplace to license STEM simulations or test drive your uploaded simulations.
              </p>
              <button
                onClick={onBackToMarketplace}
                className="mt-2 px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs cursor-pointer shadow transition-all"
              >
                Browse Marketplace
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {purchasedList.map((item, idx) => {
                const sim = getSimDetails(item.simulationId);
                if (!sim) return null;
                return (
                  <div
                    key={idx}
                    className="bg-slate-900 border border-slate-800 rounded-3xl p-5 flex flex-col justify-between space-y-4 hover:border-slate-700 transition-all shadow-md"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <div className="flex items-center gap-1.5 flex-wrap">
                          <span
                            className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider border ${
                              sim.badgeColor || "bg-sky-500/10 text-sky-400 border-sky-500/20"
                            }`}
                          >
                            {sim.discipline}
                          </span>
                          <span className="text-[10px] font-semibold px-2 py-0.5 rounded-md bg-indigo-500/10 text-indigo-300 border border-indigo-500/20 font-mono">
                            {item.licenseTier === "single"
                              ? "Single Teacher License (150 Seats)"
                              : item.licenseTier === "department"
                              ? "School Department License (500 Seats)"
                              : "District Unlimited License"}
                          </span>
                        </div>
                        <span className="text-[11px] text-slate-400 font-mono shrink-0">Added: {item.purchaseDate}</span>
                      </div>

                      <h3 className="text-base font-bold text-white line-clamp-1">{sim.title}</h3>
                      <p className="text-xs text-slate-400 mt-1 line-clamp-2">{sim.tagline}</p>

                      <div className="flex items-center gap-1.5 text-[10px] text-slate-400 mt-2 font-mono">
                        <Clock className="w-3 h-3 text-sky-400 shrink-0" />
                        <span>Last Modified:</span>
                        <span className="text-slate-300">
                          {(() => {
                            const ts = sim.lastModified || sim.updatedAt || sim.createdAt;
                            if (!ts) return "Recently";
                            try {
                              const d = new Date(ts);
                              if (isNaN(d.getTime())) return ts;
                              return d.toLocaleDateString("en-US", {
                                month: "short",
                                day: "numeric",
                                year: "numeric",
                              });
                            } catch {
                              return ts;
                            }
                          })()}
                        </span>
                      </div>
                    </div>

                    {/* Whiteboard Student Access PIN Box */}
                    <div className="bg-slate-950 p-3.5 rounded-2xl border border-slate-800 flex items-center justify-between">
                      <div>
                        <span className="text-[10px] uppercase font-semibold text-slate-400 block">
                          Student Access PIN
                        </span>
                        <span className="font-mono text-xl font-black text-amber-400 tracking-wider">
                          {item.classroomPin}
                        </span>
                      </div>
                      <button
                        onClick={() => copyPin(item.classroomPin)}
                        className="flex items-center gap-1 px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold cursor-pointer transition-all"
                      >
                        {copiedPin === item.classroomPin ? (
                          <>
                            <Check className="w-3.5 h-3.5 text-emerald-400" /> Copied
                          </>
                        ) : (
                          <>
                            <Copy className="w-3.5 h-3.5" /> Copy
                          </>
                        )}
                      </button>
                    </div>

                    {/* Quick Action Buttons */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-1">
                      <button
                        onClick={() => onLaunchSimulation(sim)}
                        className="flex items-center justify-center gap-1 py-2 px-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-[11px] cursor-pointer shadow-md shadow-indigo-600/20 transition-all active:scale-95"
                      >
                        <Play className="w-3 h-3 fill-current" /> Launch
                      </button>

                      {onOpenWorksheet && (
                        <button
                          onClick={() => onOpenWorksheet(sim)}
                          className="flex items-center justify-center gap-1 py-2 px-2 rounded-xl bg-sky-500/10 hover:bg-sky-500/20 text-sky-300 text-[11px] font-semibold border border-sky-500/30 cursor-pointer transition-all"
                          title="Download formatted Student Worksheet & Teacher Key PDF"
                        >
                          <FileText className="w-3 h-3 text-sky-400" /> PDF Lab
                        </button>
                      )}

                      <button
                        onClick={() => onOpenLessonPlanner(sim)}
                        className="flex items-center justify-center gap-1 py-2 px-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-[11px] font-semibold border border-slate-700 cursor-pointer transition-all"
                      >
                        <Sparkles className="w-3 h-3 text-purple-400" /> Plan
                      </button>

                      {onOpenLMSPublish && (
                        <button
                          onClick={() => onOpenLMSPublish(sim)}
                          className="flex items-center justify-center gap-1 py-2 px-2 rounded-xl bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-300 text-[11px] font-semibold border border-emerald-500/30 cursor-pointer transition-all"
                          title="Publish assignment to Google Classroom, Canvas, or Schoology"
                        >
                          <Share2 className="w-3 h-3 text-emerald-400" /> LMS Post
                        </button>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      )}

      {/* TAB CONTENT 2: USAGE ANALYTICS DASHBOARD */}
      {activeTab === "analytics" && (
        <UsageAnalyticsTab
          purchasedList={purchasedList}
          allSimulations={allSimulations}
          onLaunchSimulation={onLaunchSimulation}
          onOpenLessonPlanner={onOpenLessonPlanner}
          onOpenWorksheet={onOpenWorksheet}
          onOpenLMSPublish={onOpenLMSPublish}
          onBackToMarketplace={onBackToMarketplace}
        />
      )}
    </div>
  );
};

