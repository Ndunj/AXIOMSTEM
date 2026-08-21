import React, { useState } from "react";
import { SimulationItem, LicenseTier } from "../types";
import { HtmlAppSimulator } from "./simulators/HtmlAppSimulator";
import {
  X,
  Maximize2,
  Minimize2,
  Sparkles,
  Award,
  ShoppingCart,
  BookOpen,
  Send,
  CheckCircle2,
  FileText,
  SidebarClose,
  SidebarOpen,
  Check,
  Share2
} from "lucide-react";

interface InteractivePlayerProps {
  simulation: SimulationItem;
  onClose: () => void;
  onAddToCart: (sim: SimulationItem, tier: LicenseTier) => void;
  onOpenLessonPlanner: (sim: SimulationItem) => void;
  onOpenWorksheet?: (sim: SimulationItem) => void;
  onOpenLMSPublish?: (sim: SimulationItem) => void;
  isLicensed?: boolean;
  onAttemptPopOut?: () => void;
}

export const InteractivePlayer: React.FC<InteractivePlayerProps> = ({
  simulation,
  onClose,
  onAddToCart,
  onOpenLessonPlanner,
  onOpenWorksheet,
  onOpenLMSPublish,
  isLicensed = false,
  onAttemptPopOut,
}) => {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showSidebar, setShowSidebar] = useState(true);
  const [activeTab, setActiveTab] = useState<"ai-tutor" | "challenges" | "standards">("ai-tutor");

  // AI Socratic Lab Tutor State
  const [tutorQuery, setTutorQuery] = useState("");
  const [tutorChat, setTutorChat] = useState<Array<{ sender: "user" | "ai"; text: string }>>([
    {
      sender: "ai",
      text: `Hello! I'm your Socratic STEM Lab Assistant for "${simulation.title}". As you interact with the simulation's controls, what patterns or physical laws are you observing? Ask me any conceptual inquiry!`,
    },
  ]);
  const [isTutorLoading, setIsTutorLoading] = useState(false);

  const handleSendTutorMessage = async () => {
    if (!tutorQuery.trim() || isTutorLoading) return;
    const query = tutorQuery;
    setTutorQuery("");
    setTutorChat((prev) => [...prev, { sender: "user", text: query }]);
    setIsTutorLoading(true);

    try {
      const res = await fetch("/api/ai/lab-tutor", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          simulationTitle: simulation.title,
          userQuery: query,
          discipline: simulation.discipline,
        }),
      });
      const data = await res.json();
      setTutorChat((prev) => [
        ...prev,
        {
          sender: "ai",
          text: data.reply || "Consider testing what happens when you modify extreme values in the simulation. What direct or inverse relationships emerge?",
        },
      ]);
    } catch {
      setTutorChat((prev) => [
        ...prev,
        {
          sender: "ai",
          text: "What hypothesis are you testing in this lab run? Try predicting the outcome before adjusting the controls!",
        },
      ]);
    } finally {
      setIsTutorLoading(false);
    }
  };

  return (
    <div
      className={`fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-2 sm:p-4 overflow-y-auto ${
        isFullscreen ? "p-0" : ""
      }`}
    >
      <div
        className={`bg-slate-900 border border-slate-700/80 rounded-3xl w-full flex flex-col overflow-hidden shadow-2xl transition-all ${
          isFullscreen ? "h-screen rounded-none" : "max-w-7xl max-h-[94vh]"
        }`}
      >
        {/* Header Bar */}
        <div className="flex items-center justify-between px-5 py-3.5 bg-slate-950/90 border-b border-slate-800 shrink-0">
          <div className="flex items-center gap-3">
            <span
              className={`text-xs font-semibold px-2.5 py-1 rounded-lg uppercase tracking-wider border ${simulation.badgeColor}`}
            >
              {simulation.discipline}
            </span>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-base sm:text-lg font-bold text-slate-100">{simulation.title}</h2>
                <span className="hidden md:inline-flex text-[10px] font-semibold px-2 py-0.5 rounded-md bg-indigo-500/10 text-indigo-300 border border-indigo-500/20">
                  {simulation.licenseType || "Academic STEM License"}
                </span>
              </div>
              <p className="text-xs text-slate-400 hidden sm:block">{simulation.tagline}</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setShowSidebar((prev) => !prev)}
              className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700 rounded-xl text-xs font-medium cursor-pointer transition-all"
              title={showSidebar ? "Expand Simulation (Hide Guide)" : "Show Lesson Guide & AI Tutor"}
            >
              {showSidebar ? (
                <>
                  <SidebarClose className="w-3.5 h-3.5 text-sky-400" />
                  <span className="hidden sm:inline">Wide Stage</span>
                </>
              ) : (
                <>
                  <SidebarOpen className="w-3.5 h-3.5 text-sky-400" />
                  <span className="hidden sm:inline">Show Lab Guide</span>
                </>
              )}
            </button>

            {onOpenWorksheet && (
              <button
                onClick={() => onOpenWorksheet(simulation)}
                className="flex items-center gap-1.5 px-3 py-1.5 bg-sky-500/10 hover:bg-sky-500/20 text-sky-300 border border-sky-500/30 rounded-xl text-xs font-medium cursor-pointer transition-all"
                title="Download formatted Student Inquiry Worksheet & Teacher Key PDF"
              >
                <FileText className="w-3.5 h-3.5 text-sky-400" />
                <span className="hidden sm:inline">PDF Worksheet</span>
              </button>
            )}

            {onOpenLMSPublish && (
              <button
                onClick={() => onOpenLMSPublish(simulation)}
                className="flex items-center gap-1.5 px-3 py-1.5 bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 rounded-xl text-xs font-medium cursor-pointer transition-all"
                title="Post assignment to Google Classroom, Canvas, or Schoology"
              >
                <Share2 className="w-3.5 h-3.5 text-emerald-400" />
                <span className="hidden sm:inline">LMS Post</span>
              </button>
            )}

            <button
              onClick={() => onOpenLessonPlanner(simulation)}
              className="flex items-center gap-1.5 px-3 py-1.5 bg-indigo-600/30 hover:bg-indigo-600/50 text-indigo-300 border border-indigo-500/40 rounded-xl text-xs font-medium cursor-pointer transition-all"
            >
              <FileText className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">AI Lesson Plan</span>
            </button>

            <button
              onClick={() => onAddToCart(simulation, "single")}
              className="flex items-center gap-1.5 px-3.5 py-1.5 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold rounded-xl text-xs cursor-pointer shadow-md shadow-emerald-500/20 transition-all active:scale-95"
            >
              <ShoppingCart className="w-3.5 h-3.5" /> Buy for Class (${simulation.pricing.singleTeacher})
            </button>

            <button
              onClick={() => setIsFullscreen(!isFullscreen)}
              className="p-2 text-slate-400 hover:text-slate-200 hover:bg-slate-800 rounded-xl cursor-pointer"
              title={isFullscreen ? "Exit Fullscreen" : "Enter Fullscreen"}
            >
              {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
            </button>

            <button
              onClick={onClose}
              className="p-2 text-slate-400 hover:text-rose-400 hover:bg-slate-800 rounded-xl cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Main Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 flex-1 overflow-y-auto min-h-0">
          {/* Main Stage: Live Interactive Simulation Engine */}
          <div
            className={`${
              showSidebar ? "lg:col-span-8" : "lg:col-span-12"
            } p-3 sm:p-4 overflow-y-auto flex flex-col justify-start border-b lg:border-b-0 ${
              showSidebar ? "lg:border-r" : ""
            } border-slate-800 bg-slate-950/40 transition-all`}
          >
            <HtmlAppSimulator
              htmlContent={simulation.htmlContent}
              htmlUrl={simulation.htmlUrl}
              title={simulation.title}
              isLicensed={isLicensed}
              onAttemptPopOut={onAttemptPopOut}
            />
          </div>

          {/* Right Inquiry Companion Sidebar */}
          {showSidebar && (
            <div className="lg:col-span-4 p-4 flex flex-col bg-slate-900/60 overflow-y-auto border-l border-slate-800/50">
              {/* Companion Navigation Tabs */}
              <div className="grid grid-cols-3 gap-1 p-1 bg-slate-950 rounded-xl border border-slate-800 text-xs mb-4">
                <button
                  onClick={() => setActiveTab("ai-tutor")}
                  className={`py-1.5 rounded-lg font-medium cursor-pointer transition-all flex items-center justify-center gap-1.5 ${
                    activeTab === "ai-tutor"
                      ? "bg-indigo-600/30 text-indigo-300 border border-indigo-500/40 shadow-sm"
                      : "text-slate-400 hover:text-slate-200"
                  }`}
                >
                  <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
                  <span>AI Tutor</span>
                </button>
                <button
                  onClick={() => setActiveTab("challenges")}
                  className={`py-1.5 rounded-lg font-medium cursor-pointer transition-all flex items-center justify-center gap-1.5 ${
                    activeTab === "challenges"
                      ? "bg-slate-800 text-slate-100 shadow-sm border border-slate-700"
                      : "text-slate-400 hover:text-slate-200"
                  }`}
                >
                  <Award className="w-3.5 h-3.5 text-amber-400" />
                  <span>Lab Goals</span>
                </button>
                <button
                  onClick={() => setActiveTab("standards")}
                  className={`py-1.5 rounded-lg font-medium cursor-pointer transition-all flex items-center justify-center gap-1.5 ${
                    activeTab === "standards"
                      ? "bg-slate-800 text-slate-100 shadow-sm border border-slate-700"
                      : "text-slate-400 hover:text-slate-200"
                  }`}
                >
                  <BookOpen className="w-3.5 h-3.5 text-sky-400" />
                  <span>Standards</span>
                </button>
              </div>

              {/* TAB 1: SOCRATIC AI LAB TUTOR */}
              {activeTab === "ai-tutor" && (
                <div className="flex flex-col h-[480px] justify-between">
                  <div className="space-y-3 overflow-y-auto pr-1 flex-1 mb-3">
                    {tutorChat.map((msg, i) => (
                      <div
                        key={i}
                        className={`p-3 rounded-2xl text-xs leading-relaxed ${
                          msg.sender === "ai"
                            ? "bg-indigo-950/40 border border-indigo-500/30 text-indigo-100 mr-2"
                            : "bg-slate-800 text-slate-100 ml-3"
                        }`}
                      >
                        <div className="font-semibold text-[10px] uppercase text-indigo-400 mb-1 flex items-center gap-1">
                          <Sparkles className="w-3 h-3" />
                          <span>{msg.sender === "ai" ? "Socrates-STEM AI" : "Student / Educator"}</span>
                        </div>
                        {msg.text}
                      </div>
                    ))}
                    {isTutorLoading && (
                      <div className="p-3 rounded-2xl bg-indigo-950/40 border border-indigo-500/30 text-xs text-indigo-300 animate-pulse">
                        Formulating Socratic laboratory inquiry...
                      </div>
                    )}
                  </div>

                  <div className="flex items-center gap-2 pt-2 border-t border-slate-800">
                    <input
                      type="text"
                      value={tutorQuery}
                      onChange={(e) => setTutorQuery(e.target.value)}
                      onKeyDown={(e) => e.key === "Enter" && handleSendTutorMessage()}
                      placeholder="Ask AI lab assistant a question..."
                      className="flex-1 bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-slate-200 focus:outline-none focus:border-indigo-500"
                    />
                    <button
                      onClick={handleSendTutorMessage}
                      disabled={isTutorLoading || !tutorQuery.trim()}
                      className="p-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl cursor-pointer disabled:opacity-50 transition-colors"
                    >
                      <Send className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}

              {/* TAB 2: GUIDED STUDENT CHALLENGES */}
              {activeTab === "challenges" && (
                <div className="flex flex-col gap-3">
                  <div className="text-xs text-slate-400">
                    Target student inquiry investigations for this lab:
                  </div>

                  {simulation.sampleChallenges.map((ch) => (
                    <div
                      key={ch.id}
                      className="bg-slate-950/70 border border-slate-800 rounded-2xl p-4 flex flex-col gap-2.5 shadow-sm"
                    >
                      <div className="flex items-center gap-2">
                        <Award className="w-4 h-4 text-amber-400 shrink-0" />
                        <h4 className="text-xs font-bold text-slate-200">{ch.title}</h4>
                      </div>
                      <p className="text-xs text-slate-300 leading-relaxed">{ch.instruction}</p>
                      <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 pt-2 border-t border-slate-800/80">
                        <span>Target: {ch.targetMetric}</span>
                        <span className="text-emerald-400 font-semibold">{ch.rewardBadge}</span>
                      </div>
                    </div>
                  ))}

                  {onOpenWorksheet && (
                    <div className="p-3 bg-gradient-to-r from-sky-950/40 to-indigo-950/40 border border-sky-500/30 rounded-2xl flex items-center justify-between gap-2 shadow-sm">
                      <div className="flex items-center gap-2.5">
                        <FileText className="w-4 h-4 text-sky-400 shrink-0" />
                        <div>
                          <div className="text-xs font-bold text-white">Download Lab Worksheet (PDF)</div>
                          <div className="text-[10px] text-slate-400">Critical thinking prompts & data tables</div>
                        </div>
                      </div>
                      <button
                        onClick={() => onOpenWorksheet(simulation)}
                        className="px-3 py-1.5 rounded-xl bg-sky-600 hover:bg-sky-500 text-white text-xs font-bold cursor-pointer transition-all shadow"
                      >
                        Open PDF
                      </button>
                    </div>
                  )}

                  <div className="p-3 bg-slate-950/40 border border-slate-800 rounded-xl text-[11px] text-slate-400 space-y-1">
                    <div className="font-semibold text-slate-300">Self-Contained Controls</div>
                    <div>All knobs, dials, sliders, and parameter buttons are integrated directly within the simulation view on the left.</div>
                  </div>
                </div>
              )}

              {/* TAB 3: CURRICULUM & NGSS STANDARDS */}
              {activeTab === "standards" && (
                <div className="flex flex-col gap-3 text-xs">
                  <div>
                    <h4 className="font-semibold text-slate-200 mb-1.5">Target Curriculum Standards:</h4>
                    <div className="flex flex-wrap gap-1.5">
                      {simulation.standards.map((st) => (
                        <span key={st} className="px-2.5 py-1 rounded-md bg-slate-800 text-sky-300 font-mono text-[11px] border border-slate-700">
                          {st}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-2 border-t border-slate-800">
                    <h4 className="font-semibold text-slate-200 mb-1.5">Core Learning Objectives:</h4>
                    <ul className="space-y-1.5 text-slate-300">
                      {simulation.learningObjectives.map((obj, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 mt-0.5 shrink-0" />
                          <span>{obj}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-2 border-t border-slate-800">
                    <h4 className="font-semibold text-slate-200 mb-1.5">Key Scientific Takeaways:</h4>
                    <ul className="space-y-1.5 text-slate-300">
                      {simulation.previewFacts.map((fact, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <Check className="w-3.5 h-3.5 text-sky-400 mt-0.5 shrink-0" />
                          <span>{fact}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-2 border-t border-slate-800 space-y-2">
                    <div className="flex items-center justify-between">
                      <h4 className="font-semibold text-slate-200">Institutional License Types:</h4>
                      <span className="text-[10px] text-indigo-300 font-mono">Academic STEM</span>
                    </div>
                    <div className="space-y-1.5 text-[11px]">
                      <div className="p-2 rounded-xl bg-slate-950/70 border border-slate-800 flex items-center justify-between">
                        <div>
                          <span className="font-bold text-white block">Single Teacher License</span>
                          <span className="text-[10px] text-slate-400">1 Teacher • Up to 150 student accounts</span>
                        </div>
                        <button
                          onClick={() => onAddToCart(simulation, "single")}
                          className="px-2.5 py-1 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-[10px] transition-colors"
                        >
                          ${simulation.pricing?.singleTeacher || 19}
                        </button>
                      </div>

                      <div className="p-2 rounded-xl bg-slate-950/70 border border-slate-800 flex items-center justify-between">
                        <div>
                          <span className="font-bold text-white block">School Department License</span>
                          <span className="text-[10px] text-slate-400">5 Teachers • 500 student accounts</span>
                        </div>
                        <button
                          onClick={() => onAddToCart(simulation, "department")}
                          className="px-2.5 py-1 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-[10px] transition-colors"
                        >
                          ${simulation.pricing?.schoolDepartment || 200}
                        </button>
                      </div>

                      <div className="p-2 rounded-xl bg-slate-950/70 border border-slate-800 flex items-center justify-between">
                        <div>
                          <span className="font-bold text-white block">District Unlimited License</span>
                          <span className="text-[10px] text-slate-400">Unlimited campus LMS &amp; grade passback</span>
                        </div>
                        <button
                          onClick={() => onAddToCart(simulation, "district")}
                          className="px-2.5 py-1 rounded-lg bg-purple-500 hover:bg-purple-400 text-slate-950 font-bold text-[10px] transition-colors"
                        >
                          ${simulation.pricing?.districtUnlimited || 400}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
