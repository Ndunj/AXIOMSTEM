import React, { useState, useEffect } from "react";
import { SimulationItem, LessonPlanData } from "../types";
import {
  X,
  Sparkles,
  Printer,
  Download,
  BookOpen,
  CheckCircle2,
  Clock,
  Award,
  Layers,
  HelpCircle,
  FileCheck2,
  RefreshCw,
  FileText,
  KeyRound
} from "lucide-react";
import { downloadWorksheetPDF } from "../services/pdfWorksheetGenerator";

interface LessonPlanModalProps {
  simulation: SimulationItem;
  onClose: () => void;
  onOpenWorksheet?: (sim: SimulationItem) => void;
}

export const LessonPlanGeneratorModal: React.FC<LessonPlanModalProps> = ({
  simulation,
  onClose,
  onOpenWorksheet,
}) => {
  const [gradeLevel, setGradeLevel] = useState(simulation.gradeLevel[0] || "High School (9-12)");
  const [duration, setDuration] = useState(45);
  const [teacherNotes, setTeacherNotes] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [lessonPlan, setLessonPlan] = useState<LessonPlanData | null>(null);

  const generatePlan = async () => {
    setIsLoading(true);
    try {
      const res = await fetch("/api/ai/lesson-plan", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          simulationTitle: simulation.title,
          discipline: simulation.discipline,
          gradeLevel,
          targetStandards: simulation.standards.join(", "),
          durationMinutes: duration,
          teacherNotes,
        }),
      });
      const data = await res.json();
      if (data.lessonPlan) {
        setLessonPlan(data.lessonPlan);
      }
    } catch (e) {
      console.error("Lesson plan generation error:", e);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    generatePlan();
  }, [simulation]);

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      <div className="bg-slate-900 border border-slate-700/80 rounded-3xl w-full max-w-4xl max-h-[92vh] flex flex-col overflow-hidden shadow-2xl">
        {/* Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 bg-slate-950 border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-indigo-600/20 text-indigo-400 border border-indigo-500/30 flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-indigo-400" />
            </div>
            <div>
              <h2 className="text-base sm:text-lg font-bold text-white">AI STEM Curriculum & Lab Plan Builder</h2>
              <p className="text-xs text-slate-400">Aligned with NGSS & AP standards for {simulation.title}</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => downloadWorksheetPDF(simulation, { gradeLevel, includeAnswerKey: false })}
              className="flex items-center gap-1.5 px-3 py-1.5 bg-sky-600 hover:bg-sky-500 text-white rounded-xl text-xs font-bold shadow-md shadow-sky-600/20 cursor-pointer transition-all active:scale-95"
              title="Download paired Student Lab Worksheet PDF"
            >
              <FileText className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Student PDF Worksheet</span>
            </button>

            <button
              onClick={() => downloadWorksheetPDF(simulation, { gradeLevel, includeAnswerKey: true })}
              className="flex items-center gap-1.5 px-3 py-1.5 bg-emerald-600/20 hover:bg-emerald-600/30 text-emerald-300 border border-emerald-500/30 rounded-xl text-xs font-semibold cursor-pointer transition-all active:scale-95"
              title="Download Teacher Answer Key PDF"
            >
              <KeyRound className="w-3.5 h-3.5 text-emerald-400" />
              <span className="hidden sm:inline">Teacher Key</span>
            </button>

            {lessonPlan && (
              <button
                onClick={handlePrint}
                className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-xl text-xs font-medium border border-slate-700 cursor-pointer transition-all"
              >
                <Printer className="w-3.5 h-3.5" /> Print Plan
              </button>
            )}
            <button
              onClick={onClose}
              className="p-2 text-slate-400 hover:text-rose-400 hover:bg-slate-800 rounded-xl cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Configuration Bar */}
        <div className="p-4 bg-slate-950/50 border-b border-slate-800/80 grid grid-cols-1 sm:grid-cols-4 gap-3">
          <div>
            <label className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block mb-1">
              Target Grade Level
            </label>
            <select
              value={gradeLevel}
              onChange={(e) => setGradeLevel(e.target.value as any)}
              className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3 py-1.5 text-xs text-slate-200 focus:outline-none focus:border-indigo-500"
            >
              <option value="Middle School (6-8)">Middle School (6-8)</option>
              <option value="High School (9-12)">High School (9-12)</option>
              <option value="AP / IB STEM">AP / IB STEM</option>
              <option value="Undergraduate">Undergraduate</option>
            </select>
          </div>

          <div>
            <label className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block mb-1">
              Class Period Duration
            </label>
            <select
              value={duration}
              onChange={(e) => setDuration(Number(e.target.value))}
              className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3 py-1.5 text-xs text-slate-200 focus:outline-none focus:border-indigo-500"
            >
              <option value={30}>30 Minutes (Short Block)</option>
              <option value={45}>45 Minutes (Standard Period)</option>
              <option value={60}>60 Minutes (Extended Period)</option>
              <option value={90}>90 Minutes (Block Lab)</option>
            </select>
          </div>

          <div className="sm:col-span-2 flex items-end">
            <button
              onClick={generatePlan}
              disabled={isLoading}
              className="w-full flex items-center justify-center gap-2 py-2 px-4 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white text-xs font-bold shadow-md shadow-indigo-500/20 disabled:opacity-50 cursor-pointer transition-all"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${isLoading ? "animate-spin" : ""}`} />
              {isLoading ? "Generating Lesson Plan..." : "Regenerate Custom Plan"}
            </button>
          </div>
        </div>

        {/* Printable Lesson Plan Content */}
        <div className="p-6 overflow-y-auto flex-1 space-y-6 text-slate-200 print:text-black print:bg-white">
          {isLoading ? (
            <div className="py-16 text-center space-y-3">
              <div className="w-12 h-12 rounded-full border-4 border-indigo-500/30 border-t-indigo-500 animate-spin mx-auto" />
              <h3 className="text-base font-bold text-slate-200">Synthesizing Pedagogical Framework...</h3>
              <p className="text-xs text-slate-400 max-w-sm mx-auto">
                Aligning state NGSS standards, inquiry challenges, pacing guides, and differentiated worksheets with Gemini AI.
              </p>
            </div>
          ) : lessonPlan ? (
            <div className="space-y-6">
              {/* Document Title Header */}
              <div className="border-b border-slate-800 pb-4">
                <div className="flex items-center justify-between text-xs text-slate-400 font-mono mb-1">
                  <span>DISCIPLINE: {lessonPlan.discipline.toUpperCase()}</span>
                  <span>ESTIMATED TIME: {lessonPlan.estimatedTime}</span>
                </div>
                <h1 className="text-2xl font-black text-white">{lessonPlan.title}</h1>
                <div className="mt-2 inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-slate-800 text-sky-300 font-mono text-xs border border-slate-700">
                  <Award className="w-3.5 h-3.5 text-amber-400" />
                  <span>Standard Alignment: {lessonPlan.ngssStandard}</span>
                </div>
              </div>

              {/* Learning Objectives */}
              <div className="bg-slate-950/60 p-4 rounded-2xl border border-slate-800">
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-1.5">
                  <BookOpen className="w-4 h-4 text-sky-400" /> Measurable Learning Objectives (SWBAT)
                </h3>
                <ul className="space-y-2 text-xs">
                  {lessonPlan.learningObjectives.map((obj, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 mt-0.5 shrink-0" />
                      <span>{obj}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Essential Driving Questions */}
              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2 flex items-center gap-1.5">
                  <HelpCircle className="w-4 h-4 text-purple-400" /> Essential Driving Inquiry Questions
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {lessonPlan.essentialQuestions.map((q, i) => (
                    <div key={i} className="p-3.5 rounded-xl bg-slate-950/40 border border-slate-800/80 text-xs italic text-slate-300">
                      "{q}"
                    </div>
                  ))}
                </div>
              </div>

              {/* Pacing Guide */}
              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-amber-400" /> Instructional Pacing Guide
                </h3>
                <div className="space-y-2.5">
                  {lessonPlan.pacingGuide.map((step, idx) => (
                    <div key={idx} className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800 text-xs flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-4">
                      <span className="font-bold text-sky-400 sm:w-56 shrink-0">{step.phase}</span>
                      <span className="text-slate-300 leading-relaxed">{step.action}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Student Guided Inquiry Questions */}
              <div className="bg-slate-950/70 p-4 rounded-2xl border border-slate-800">
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-1.5">
                  <FileCheck2 className="w-4 h-4 text-emerald-400" /> Student Lab Worksheet Prompts
                </h3>
                <div className="space-y-3">
                  {lessonPlan.studentLabQuestions.map((prompt, i) => (
                    <div key={i} className="text-xs border-l-2 border-emerald-500 pl-3 py-0.5">
                      <span className="font-bold text-emerald-400">Prompt #{i + 1}: </span>
                      <span className="text-slate-300">{prompt}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Differentiated Support & Extension */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="p-4 rounded-2xl bg-slate-950/60 border border-slate-800">
                  <h4 className="font-bold text-amber-400 mb-1.5">Scaffolded Support Strategies:</h4>
                  <p className="text-slate-300 leading-relaxed">{lessonPlan.differentiatedInstruction.support}</p>
                </div>
                <div className="p-4 rounded-2xl bg-slate-950/60 border border-slate-800">
                  <h4 className="font-bold text-purple-400 mb-1.5">Honors / Gifted Extension:</h4>
                  <p className="text-slate-300 leading-relaxed">{lessonPlan.differentiatedInstruction.extension}</p>
                </div>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};
