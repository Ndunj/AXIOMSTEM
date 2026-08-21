import React, { useState, useEffect } from "react";
import { SimulationItem } from "../types";
import { HtmlAppSimulator } from "./simulators/HtmlAppSimulator";
import {
  getSimulationWorksheetData,
  getDisciplinePhrasing,
  downloadWorksheetPDF,
  StudentWorksheetAnswers,
} from "../services/pdfWorksheetGenerator";
import {
  FileText,
  Download,
  Printer,
  CheckCircle2,
  Sparkles,
  HelpCircle,
  Award,
  Layers,
  ChevronRight,
  Maximize2,
  Minimize2,
  Copy,
  Check,
  RotateCcw,
  Send,
  ExternalLink,
  BookOpen,
  ArrowLeft,
  Share2,
  Plus,
  Trash2,
  CheckCheck
} from "lucide-react";

interface StudentWorksheetViewProps {
  simulation: SimulationItem;
  onReturnToCatalog?: () => void;
}

export const StudentWorksheetView: React.FC<StudentWorksheetViewProps> = ({
  simulation,
  onReturnToCatalog,
}) => {
  const worksheetData = getSimulationWorksheetData(simulation);
  const phrasing = getDisciplinePhrasing(simulation.discipline || "physics");

  // View Layout Mode: split (default on desktop), sim-only, worksheet-only
  const [viewMode, setViewMode] = useState<"split" | "sim" | "worksheet">("split");

  // Student Identity
  const [studentName, setStudentName] = useState(() => {
    return localStorage.getItem("axiom_student_name") || "";
  });
  const [period, setPeriod] = useState(() => {
    return localStorage.getItem("axiom_student_period") || "";
  });

  // Storage key for student responses
  const storageKey = `axiom_student_answers_${simulation.id}`;

  // Form State
  const [hypothesis, setHypothesis] = useState("");
  const [tableRows, setTableRows] = useState<string[][]>(() => {
    return worksheetData.tableRows.map((row) =>
      row.map((cell, idx) => (idx <= 1 ? cell : ""))
    );
  });
  const [criticalAnswers, setCriticalAnswers] = useState<Record<number, string>>({});
  const [claim, setClaim] = useState("");
  const [evidence, setEvidence] = useState("");
  const [reasoning, setReasoning] = useState("");
  const [realWorldAnswer, setRealWorldAnswer] = useState("");

  const [isSaved, setIsSaved] = useState(true);
  const [showSubmitModal, setShowSubmitModal] = useState(false);
  const [copiedSummary, setCopiedSummary] = useState(false);
  const [downloadSuccess, setDownloadSuccess] = useState<string | null>(null);

  // Load saved responses on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem(storageKey);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed.hypothesis !== undefined) setHypothesis(parsed.hypothesis);
        if (parsed.tableRows !== undefined) setTableRows(parsed.tableRows);
        if (parsed.criticalAnswers !== undefined) setCriticalAnswers(parsed.criticalAnswers);
        if (parsed.claim !== undefined) setClaim(parsed.claim);
        if (parsed.evidence !== undefined) setEvidence(parsed.evidence);
        if (parsed.reasoning !== undefined) setReasoning(parsed.reasoning);
        if (parsed.realWorldAnswer !== undefined) setRealWorldAnswer(parsed.realWorldAnswer);
      }
    } catch (e) {
      console.error("Failed to load saved student worksheet answers:", e);
    }
  }, [storageKey]);

  // Auto-save responses to localStorage
  useEffect(() => {
    const dataToSave = {
      hypothesis,
      tableRows,
      criticalAnswers,
      claim,
      evidence,
      reasoning,
      realWorldAnswer,
      lastSaved: new Date().toISOString(),
    };
    try {
      localStorage.setItem(storageKey, JSON.stringify(dataToSave));
      if (studentName) localStorage.setItem("axiom_student_name", studentName);
      if (period) localStorage.setItem("axiom_student_period", period);
      setIsSaved(true);
    } catch (e) {
      console.error("Auto-save error:", e);
    }
  }, [
    hypothesis,
    tableRows,
    criticalAnswers,
    claim,
    evidence,
    reasoning,
    realWorldAnswer,
    studentName,
    period,
    storageKey,
  ]);

  // Handle table cell updates
  const handleTableCellChange = (rowIdx: number, colIdx: number, val: string) => {
    setIsSaved(false);
    setTableRows((prev) => {
      const next = prev.map((r, rI) => {
        if (rI !== rowIdx) return r;
        const newRow = [...r];
        newRow[colIdx] = val;
        return newRow;
      });
      return next;
    });
  };

  const handleAddTableRow = () => {
    setIsSaved(false);
    const newRow = new Array(worksheetData.tableHeaders.length).fill("");
    newRow[0] = `Trial ${tableRows.length + 1} (Custom)`;
    setTableRows((prev) => [...prev, newRow]);
  };

  const handleRemoveTableRow = (idx: number) => {
    setIsSaved(false);
    setTableRows((prev) => prev.filter((_, rI) => rI !== idx));
  };

  const handleResetTable = () => {
    if (confirm("Reset the data table rows to initial template?")) {
      setIsSaved(false);
      setTableRows(
        worksheetData.tableRows.map((row) =>
          row.map((cell, idx) => (idx <= 1 ? cell : ""))
        )
      );
    }
  };

  const handleCriticalAnswerChange = (qIndex: number, val: string) => {
    setIsSaved(false);
    setCriticalAnswers((prev) => ({
      ...prev,
      [qIndex]: val,
    }));
  };

  // Download PDF with student's own typed answers
  const handleDownloadStudentPDF = () => {
    const answers: StudentWorksheetAnswers = {
      hypothesis,
      tableRows,
      criticalAnswers,
      claim,
      evidence,
      reasoning,
      realWorldAnswer,
    };

    downloadWorksheetPDF(simulation, {
      includeAnswerKey: false,
      studentName: studentName || "Student",
      period: period || "Period 1",
      studentAnswers: answers,
      gradeLevel: simulation.gradeLevel?.[0] || "High School (9-12)",
    });

    setDownloadSuccess("Your completed Lab Inquiry Worksheet PDF has been downloaded!");
    setTimeout(() => setDownloadSuccess(null), 4000);
  };

  // Download clean blank worksheet PDF
  const handleDownloadBlankPDF = () => {
    downloadWorksheetPDF(simulation, {
      includeAnswerKey: false,
      studentName: "",
      period: "",
      gradeLevel: simulation.gradeLevel?.[0] || "High School (9-12)",
    });
    setDownloadSuccess("Blank Student Worksheet PDF downloaded.");
    setTimeout(() => setDownloadSuccess(null), 4000);
  };

  // Compile formatted Markdown summary for LMS turn-in
  const generateFormattedSubmission = () => {
    return `# STEM Lab Inquiry Worksheet: ${simulation.title}
**Student Name:** ${studentName || "Not specified"}
**Class / Period:** ${period || "Not specified"}
**Date:** ${new Date().toLocaleDateString()}
**Discipline:** ${simulation.discipline.toUpperCase()}

---

## Central Driving Question
> ${worksheetData.drivingQuestion}

---

## Phase 1: Prediction & Hypothesis
**Prompt:** ${worksheetData.hypothesisPrompt}
**Student Response:**
${hypothesis || "_[No hypothesis recorded]_"}

---

## Phase 2: Experimental Data Collection
${worksheetData.tableHeaders.join(" | ")}
${worksheetData.tableHeaders.map(() => "---").join(" | ")}
${tableRows.map((row) => row.join(" | ")).join("\n")}

---

## Phase 3: Critical Thinking & Data Analysis
${worksheetData.criticalQuestions
  .map(
    (q, i) => `### Question ${i + 1}: ${q.prompt}
*Guidance:* ${q.subtext}
**Student Analysis:**
${criticalAnswers[i] || "_[No response recorded]_"}`
  )
  .join("\n\n")}

---

## Phase 4: Claim-Evidence-Reasoning (CER) Synthesis
- **CLAIM:** ${claim || "_[No claim recorded]_"}
- **EVIDENCE:** ${evidence || "_[No evidence cited]_"}
- **REASONING:** ${reasoning || "_[No reasoning provided]_"}

---

## Phase 5: Real-World Scenario Application
**Scenario:** ${worksheetData.realWorldScenario.scenario}
**Task:** ${worksheetData.realWorldScenario.task}
**Student Solution:**
${realWorldAnswer || "_[No solution recorded]_"}
`;
  };

  const handleCopySubmission = () => {
    navigator.clipboard.writeText(generateFormattedSubmission());
    setCopiedSummary(true);
    setTimeout(() => setCopiedSummary(false), 3000);
  };

  const handleClearAll = () => {
    if (
      confirm(
        "Are you sure you want to clear all your worksheet responses? This cannot be undone."
      )
    ) {
      setHypothesis("");
      setTableRows(
        worksheetData.tableRows.map((row) =>
          row.map((cell, idx) => (idx <= 1 ? cell : ""))
        )
      );
      setCriticalAnswers({});
      setClaim("");
      setEvidence("");
      setReasoning("");
      setRealWorldAnswer("");
      localStorage.removeItem(storageKey);
    }
  };

  // Calculate completion percentage
  const completedSteps = [
    Boolean(hypothesis.trim()),
    tableRows.some((r) => r.slice(2).some((c) => Boolean(c.trim()))),
    Object.values(criticalAnswers).some((a) => typeof a === "string" && Boolean(a.trim())),
    Boolean(claim.trim() && evidence.trim() && reasoning.trim()),
    Boolean(realWorldAnswer.trim()),
  ].filter(Boolean).length;

  const totalSteps = 5;
  const progressPercent = Math.round((completedSteps / totalSteps) * 100);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-sky-500 selection:text-slate-950">
      {/* Top Student Navigation Bar */}
      <header className="sticky top-0 z-40 bg-slate-950/95 backdrop-blur-md border-b border-slate-800 px-4 sm:px-6 py-3 shrink-0 shadow-lg">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
          {/* Title & Metadata */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-sky-500/20 to-indigo-500/20 text-sky-400 border border-sky-500/30 flex items-center justify-center shadow-inner shrink-0">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span
                  className={`text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider border ${simulation.badgeColor}`}
                >
                  {simulation.discipline}
                </span>
                <span className="text-[11px] text-slate-400 font-medium hidden sm:inline">
                  Student Lab Inquiry Worksheet
                </span>
              </div>
              <h1 className="text-base sm:text-lg font-bold text-white tracking-tight truncate max-w-sm sm:max-w-md">
                {simulation.title}
              </h1>
            </div>
          </div>

          {/* Student Info Inputs & Action Bar */}
          <div className="flex flex-wrap items-center gap-2.5 w-full md:w-auto justify-end">
            <div className="flex items-center gap-1.5 bg-slate-900 border border-slate-800 rounded-xl px-2.5 py-1">
              <span className="text-[10px] uppercase font-semibold text-slate-400">Name:</span>
              <input
                type="text"
                value={studentName}
                onChange={(e) => setStudentName(e.target.value)}
                placeholder="Your Name"
                className="bg-transparent text-xs text-slate-200 placeholder:text-slate-500 focus:outline-none w-24 sm:w-32"
              />
            </div>

            <div className="flex items-center gap-1.5 bg-slate-900 border border-slate-800 rounded-xl px-2.5 py-1">
              <span className="text-[10px] uppercase font-semibold text-slate-400">Period:</span>
              <input
                type="text"
                value={period}
                onChange={(e) => setPeriod(e.target.value)}
                placeholder="Per 1"
                className="bg-transparent text-xs text-slate-200 placeholder:text-slate-500 focus:outline-none w-14 sm:w-16"
              />
            </div>

            {/* Auto-save badge */}
            <div className="hidden lg:flex items-center gap-1 text-[11px] text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 rounded-xl px-2.5 py-1">
              <CheckCheck className="w-3.5 h-3.5" />
              <span>Auto-saved</span>
            </div>

            {/* Layout Mode Switcher */}
            <div className="flex items-center bg-slate-900 border border-slate-800 rounded-xl p-0.5">
              <button
                type="button"
                onClick={() => setViewMode("split")}
                className={`px-2.5 py-1 rounded-lg text-xs font-semibold cursor-pointer transition-all ${
                  viewMode === "split"
                    ? "bg-sky-600 text-white shadow"
                    : "text-slate-400 hover:text-slate-200"
                }`}
                title="View simulation and worksheet side-by-side"
              >
                Split View
              </button>
              <button
                type="button"
                onClick={() => setViewMode("sim")}
                className={`px-2.5 py-1 rounded-lg text-xs font-semibold cursor-pointer transition-all ${
                  viewMode === "sim"
                    ? "bg-sky-600 text-white shadow"
                    : "text-slate-400 hover:text-slate-200"
                }`}
                title="Full-screen simulation view"
              >
                Lab Only
              </button>
              <button
                type="button"
                onClick={() => setViewMode("worksheet")}
                className={`px-2.5 py-1 rounded-lg text-xs font-semibold cursor-pointer transition-all ${
                  viewMode === "worksheet"
                    ? "bg-sky-600 text-white shadow"
                    : "text-slate-400 hover:text-slate-200"
                }`}
                title="Worksheet only (distraction-free writing view)"
              >
                Worksheet Only
              </button>
            </div>

            {/* Turn In / Submit Button */}
            <button
              type="button"
              onClick={() => setShowSubmitModal(true)}
              className="flex items-center gap-1.5 px-3.5 py-1.5 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white text-xs font-bold rounded-xl shadow-md shadow-emerald-600/20 cursor-pointer transition-all active:scale-95"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Turn In / Export</span>
            </button>
          </div>
        </div>
      </header>

      {/* Success Banner */}
      {downloadSuccess && (
        <div className="bg-emerald-600 text-white text-xs font-semibold py-2 px-4 text-center sticky top-[57px] z-30 flex items-center justify-center gap-2 shadow-md animate-in slide-in-from-top duration-200">
          <CheckCircle2 className="w-4 h-4" />
          <span>{downloadSuccess}</span>
        </div>
      )}

      {/* Main Workspace Area */}
      <main className="flex-1 max-w-7xl mx-auto w-full p-3 sm:p-6 flex flex-col gap-6">
        {/* Progress & Alignment Strip */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-xl bg-indigo-500/20 text-indigo-400 border border-indigo-500/30 flex items-center justify-center font-bold text-xs shrink-0">
              {progressPercent}%
            </div>
            <div>
              <div className="text-xs font-bold text-white flex items-center gap-2">
                <span>Inquiry Worksheet Progress: {completedSteps} of {totalSteps} Phases Completed</span>
              </div>
              <div className="w-36 sm:w-48 bg-slate-800 h-1.5 rounded-full mt-1 overflow-hidden">
                <div
                  className="bg-gradient-to-r from-sky-500 to-emerald-400 h-full rounded-full transition-all duration-300"
                  style={{ width: `${progressPercent}%` }}
                />
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2 text-xs">
            <button
              type="button"
              onClick={handleDownloadStudentPDF}
              className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 rounded-xl font-medium cursor-pointer transition-all"
              title="Download your completed worksheet as a formatted vector PDF"
            >
              <Download className="w-3.5 h-3.5 text-sky-400" />
              <span>Download My PDF</span>
            </button>

            <button
              type="button"
              onClick={handleDownloadBlankPDF}
              className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-800/80 hover:bg-slate-700 text-slate-400 hover:text-slate-200 border border-slate-800 rounded-xl font-medium cursor-pointer transition-all"
              title="Download a blank printable copy of this worksheet"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Blank PDF</span>
            </button>

            <button
              type="button"
              onClick={handleClearAll}
              className="px-2.5 py-1.5 text-slate-500 hover:text-rose-400 hover:bg-rose-500/10 rounded-xl transition-colors cursor-pointer text-xs"
              title="Clear all recorded responses"
            >
              <RotateCcw className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* WORKSPACE LAYOUT */}
        <div
          className={`grid gap-6 ${
            viewMode === "split"
              ? "grid-cols-1 lg:grid-cols-12"
              : "grid-cols-1"
          }`}
        >
          {/* COLUMN 1: INTERACTIVE SIMULATION LAB */}
          {(viewMode === "split" || viewMode === "sim") && (
            <div
              className={`space-y-4 ${
                viewMode === "split" ? "lg:col-span-6 xl:col-span-7" : "w-full"
              }`}
            >
              <div className="bg-slate-900 border border-slate-800 rounded-3xl p-4 sm:p-5 shadow-xl space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                    <h2 className="text-sm font-bold text-white">
                      Interactive Virtual Laboratory Stage
                    </h2>
                  </div>
                  <span className="text-[11px] text-slate-400 hidden sm:inline">
                    Use sliders and controls to collect experimental trial data
                  </span>
                </div>

                {/* HTML Simulation Stage */}
                <HtmlAppSimulator
                  htmlContent={simulation.htmlContent}
                  htmlUrl={simulation.htmlUrl}
                  title={simulation.title}
                />

                {/* Quick Lab Guidance Tip */}
                <div className="p-3.5 rounded-2xl bg-sky-950/40 border border-sky-500/20 text-xs text-sky-200 flex items-start gap-2.5">
                  <Sparkles className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-sky-300">Lab Tip: </span>
                    Test different parameter combinations, observe how the system responds, and record your exact readings in the Phase 2 table.
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* COLUMN 2: FILLABLE DIGITAL LAB WORKSHEET */}
          {(viewMode === "split" || viewMode === "worksheet") && (
            <div
              className={`space-y-6 ${
                viewMode === "split" ? "lg:col-span-6 xl:col-span-5" : "max-w-4xl mx-auto w-full"
              }`}
            >
              {/* DRIVING INQUIRY QUESTION */}
              <div className="bg-gradient-to-br from-indigo-950/60 via-slate-900 to-slate-900 border border-indigo-500/30 rounded-3xl p-5 sm:p-6 shadow-xl space-y-3">
                <div className="flex items-center gap-2 text-xs font-bold text-indigo-300 uppercase tracking-wider">
                  <Sparkles className="w-4 h-4 text-indigo-400" />
                  <span>Central Driving Phenomenon & Inquiry Question</span>
                </div>
                <blockquote className="text-sm sm:text-base font-semibold text-slate-100 italic border-l-2 border-indigo-400 pl-3 leading-relaxed">
                  "{worksheetData.drivingQuestion}"
                </blockquote>
                <div className="flex flex-wrap items-center gap-2 text-[11px] text-slate-400 pt-1">
                  <span className="font-semibold text-slate-300">Target Standard:</span>
                  <span>{simulation.standards?.[0] || "NGSS / State Science Standard"}</span>
                </div>
              </div>

              {/* PHASE 1: PREDICTION & HYPOTHESIS */}
              <div className="bg-slate-900 border border-slate-800 rounded-3xl p-5 sm:p-6 shadow-xl space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-7 h-7 rounded-xl bg-sky-500/20 text-sky-400 border border-sky-500/30 flex items-center justify-center font-bold text-xs">
                    1
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white">{phrasing.phase1Title}</h3>
                    <p className="text-xs text-slate-400">Before adjusting controls, record your initial prediction</p>
                  </div>
                </div>

                <div className="text-xs text-slate-300 bg-slate-950 p-3.5 rounded-2xl border border-slate-800 leading-relaxed">
                  {worksheetData.hypothesisPrompt}
                </div>

                <div className="space-y-1.5">
                  <label className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block">
                    Your Hypothesis / Prediction:
                  </label>
                  <textarea
                    rows={3}
                    value={hypothesis}
                    onChange={(e) => {
                      setIsSaved(false);
                      setHypothesis(e.target.value);
                    }}
                    placeholder="If [manipulated variable] increases/changes, then [responding variable] will... because..."
                    className="w-full bg-slate-950 border border-slate-800 rounded-2xl p-3 text-xs text-slate-200 placeholder:text-slate-600 focus:outline-none focus:border-sky-500 transition-colors resize-y leading-relaxed"
                  />
                </div>
              </div>

              {/* PHASE 2: DATA COLLECTION TABLE */}
              <div className="bg-slate-900 border border-slate-800 rounded-3xl p-5 sm:p-6 shadow-xl space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-7 h-7 rounded-xl bg-sky-500/20 text-sky-400 border border-sky-500/30 flex items-center justify-center font-bold text-xs">
                      2
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-white">{phrasing.phase2Title}</h3>
                      <p className="text-xs text-slate-400">Record observations and measured values from your trials</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5">
                    <button
                      type="button"
                      onClick={handleAddTableRow}
                      className="flex items-center gap-1 px-2.5 py-1 bg-slate-800 hover:bg-slate-700 text-sky-400 border border-slate-700 rounded-xl text-xs font-semibold cursor-pointer transition-colors"
                      title="Add another trial row"
                    >
                      <Plus className="w-3.5 h-3.5" />
                      <span>Add Trial</span>
                    </button>
                    <button
                      type="button"
                      onClick={handleResetTable}
                      className="p-1 text-slate-500 hover:text-slate-300 rounded-lg cursor-pointer transition-colors"
                      title="Reset table structure"
                    >
                      <RotateCcw className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                <p className="text-xs text-slate-300">{phrasing.phase2Subtitle}</p>

                {/* Interactive Data Table */}
                <div className="overflow-x-auto rounded-2xl border border-slate-800 bg-slate-950">
                  <table className="w-full text-left border-collapse text-xs">
                    <thead>
                      <tr className="bg-slate-900/90 border-b border-slate-800 text-slate-300">
                        {worksheetData.tableHeaders.map((header, hIdx) => (
                          <th key={hIdx} className="p-2.5 font-bold whitespace-nowrap">
                            {header}
                          </th>
                        ))}
                        <th className="p-2.5 w-8"></th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-850">
                      {tableRows.map((row, rIdx) => (
                        <tr key={rIdx} className="hover:bg-slate-900/40 transition-colors">
                          {row.map((cell, cIdx) => (
                            <td key={cIdx} className="p-2">
                              <input
                                type="text"
                                value={cell}
                                onChange={(e) =>
                                  handleTableCellChange(rIdx, cIdx, e.target.value)
                                }
                                placeholder={cIdx <= 1 ? "Condition" : "Reading..."}
                                className="w-full bg-slate-900/70 border border-slate-800 rounded-lg px-2 py-1 text-xs text-slate-200 placeholder:text-slate-600 focus:outline-none focus:border-sky-500 transition-colors"
                              />
                            </td>
                          ))}
                          <td className="p-2 text-center">
                            {tableRows.length > 2 && (
                              <button
                                type="button"
                                onClick={() => handleRemoveTableRow(rIdx)}
                                className="text-slate-600 hover:text-rose-400 p-1 rounded transition-colors cursor-pointer"
                                title="Delete row"
                              >
                                <Trash2 className="w-3 h-3" />
                              </button>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* PHASE 3: CRITICAL THINKING & DATA ANALYSIS */}
              <div className="bg-slate-900 border border-slate-800 rounded-3xl p-5 sm:p-6 shadow-xl space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-7 h-7 rounded-xl bg-sky-500/20 text-sky-400 border border-sky-500/30 flex items-center justify-center font-bold text-xs">
                    3
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white">{phrasing.phase3Title}</h3>
                    <p className="text-xs text-slate-400">Analyze patterns, proportionalities, and mathematical relationships</p>
                  </div>
                </div>

                <div className="space-y-4">
                  {worksheetData.criticalQuestions.map((q, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-2xl bg-slate-950 border border-slate-800/90 space-y-2.5"
                    >
                      <div className="flex items-start gap-2">
                        <span className="text-xs font-bold text-sky-400 shrink-0 mt-0.5">
                          Q{idx + 1}.
                        </span>
                        <div>
                          <div className="text-xs font-bold text-slate-100">{q.prompt}</div>
                          <p className="text-[11px] text-slate-400 mt-0.5">{q.subtext}</p>
                        </div>
                      </div>

                      <textarea
                        rows={3}
                        value={criticalAnswers[idx] || ""}
                        onChange={(e) => handleCriticalAnswerChange(idx, e.target.value)}
                        placeholder="Explain your answer citing observations or calculated patterns..."
                        className="w-full bg-slate-900 border border-slate-800 rounded-xl p-2.5 text-xs text-slate-200 placeholder:text-slate-600 focus:outline-none focus:border-sky-500 transition-colors resize-y leading-relaxed"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* PHASE 4: CLAIM-EVIDENCE-REASONING (CER) SYNTHESIS */}
              <div className="bg-slate-900 border border-slate-800 rounded-3xl p-5 sm:p-6 shadow-xl space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-7 h-7 rounded-xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center font-bold text-xs">
                    4
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white">{phrasing.phase4Title}</h3>
                    <p className="text-xs text-slate-400">Synthesize your final conclusion using scientific CER argumentation</p>
                  </div>
                </div>

                {/* 1. CLAIM */}
                <div className="space-y-1.5 p-3.5 rounded-2xl bg-slate-950 border border-slate-800">
                  <div className="flex items-center justify-between">
                    <label className="text-xs font-bold text-sky-400">
                      {phrasing.claimTitle}
                    </label>
                    <span className="text-[10px] text-slate-400">Direct conclusion</span>
                  </div>
                  <p className="text-[11px] text-slate-400">{phrasing.claimSubtext}</p>
                  <textarea
                    rows={2}
                    value={claim}
                    onChange={(e) => {
                      setIsSaved(false);
                      setClaim(e.target.value);
                    }}
                    placeholder="State a concise, definitive answer to the driving question..."
                    className="w-full bg-slate-900 border border-slate-800 rounded-xl p-2.5 text-xs text-slate-200 placeholder:text-slate-600 focus:outline-none focus:border-sky-500 transition-colors resize-y"
                  />
                </div>

                {/* 2. EVIDENCE */}
                <div className="space-y-1.5 p-3.5 rounded-2xl bg-slate-950 border border-slate-800">
                  <div className="flex items-center justify-between">
                    <label className="text-xs font-bold text-emerald-400">
                      {phrasing.evidenceTitle}
                    </label>
                    <span className="text-[10px] text-slate-400">Specific data & units</span>
                  </div>
                  <p className="text-[11px] text-slate-400">{phrasing.evidenceSubtext}</p>
                  <textarea
                    rows={2}
                    value={evidence}
                    onChange={(e) => {
                      setIsSaved(false);
                      setEvidence(e.target.value);
                    }}
                    placeholder="In Trial 1 with X=..., the measured Y was... whereas in Trial 3..."
                    className="w-full bg-slate-900 border border-slate-800 rounded-xl p-2.5 text-xs text-slate-200 placeholder:text-slate-600 focus:outline-none focus:border-emerald-500 transition-colors resize-y"
                  />
                </div>

                {/* 3. REASONING */}
                <div className="space-y-1.5 p-3.5 rounded-2xl bg-slate-950 border border-slate-800">
                  <div className="flex items-center justify-between">
                    <label className="text-xs font-bold text-indigo-400">
                      {phrasing.reasoningTitle}
                    </label>
                    <span className="text-[10px] text-slate-400">Scientific principle</span>
                  </div>
                  <p className="text-[11px] text-slate-400">{phrasing.reasoningSubtext}</p>
                  <textarea
                    rows={3}
                    value={reasoning}
                    onChange={(e) => {
                      setIsSaved(false);
                      setReasoning(e.target.value);
                    }}
                    placeholder="This happens because [scientific/mathematical principle] dictates that..."
                    className="w-full bg-slate-900 border border-slate-800 rounded-xl p-2.5 text-xs text-slate-200 placeholder:text-slate-600 focus:outline-none focus:border-indigo-500 transition-colors resize-y"
                  />
                </div>
              </div>

              {/* PHASE 5: REAL WORLD APPLICATION & CHALLENGE */}
              {worksheetData.realWorldScenario && (
                <div className="bg-slate-900 border border-slate-800 rounded-3xl p-5 sm:p-6 shadow-xl space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-7 h-7 rounded-xl bg-amber-500/20 text-amber-400 border border-amber-500/30 flex items-center justify-center font-bold text-xs">
                      5
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-white">Real-World STEM Application & Engineering Scenario</h3>
                      <p className="text-xs text-slate-400">Apply your findings to real-world industrial and biological systems</p>
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-2">
                    <p className="text-xs text-slate-300 leading-relaxed font-medium">
                      {worksheetData.realWorldScenario.scenario}
                    </p>
                    <div className="text-xs font-bold text-amber-300 pt-1">
                      Challenge: {worksheetData.realWorldScenario.task}
                    </div>
                  </div>

                  <textarea
                    rows={3}
                    value={realWorldAnswer}
                    onChange={(e) => {
                      setIsSaved(false);
                      setRealWorldAnswer(e.target.value);
                    }}
                    placeholder="Describe your engineering recommendation or real-world solution..."
                    className="w-full bg-slate-950 border border-slate-800 rounded-2xl p-3 text-xs text-slate-200 placeholder:text-slate-600 focus:outline-none focus:border-amber-500 transition-colors resize-y"
                  />
                </div>
              )}

              {/* Final Turn In Callout Banner */}
              <div className="bg-gradient-to-r from-emerald-950/60 via-slate-900 to-teal-950/60 border border-emerald-500/30 rounded-3xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xl">
                <div className="space-y-1 text-center sm:text-left">
                  <div className="text-sm font-bold text-white">Ready to turn in your investigation?</div>
                  <p className="text-xs text-slate-300">
                    Export your completed PDF or copy your structured responses to paste into Google Classroom / LMS.
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => setShowSubmitModal(true)}
                  className="w-full sm:w-auto px-5 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold rounded-xl shadow-lg shadow-emerald-600/30 cursor-pointer transition-all active:scale-95 flex items-center justify-center gap-2 shrink-0"
                >
                  <Send className="w-4 h-4" />
                  <span>Turn In Assignment</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </main>

      {/* SUBMISSION / EXPORT MODAL */}
      {showSubmitModal && (
        <div className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
          <div className="bg-slate-900 border border-slate-800 rounded-3xl w-full max-w-2xl overflow-hidden shadow-2xl space-y-0 animate-in zoom-in-95 duration-150">
            {/* Header */}
            <div className="px-6 py-4 bg-slate-950 border-b border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center">
                  <Send className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white">Turn In Lab Worksheet</h3>
                  <p className="text-xs text-slate-400">
                    {simulation.title} • {studentName || "Student"} ({period || "Period 1"})
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setShowSubmitModal(false)}
                className="p-1.5 text-slate-400 hover:text-white rounded-lg cursor-pointer"
              >
                ✕
              </button>
            </div>

            {/* Body */}
            <div className="p-6 space-y-5 text-xs text-slate-300">
              {/* Option 1: PDF Export */}
              <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-white font-bold">
                    <Download className="w-4 h-4 text-sky-400" />
                    <span>Option 1: Download Completed PDF (Recommended)</span>
                  </div>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-sky-500/20 text-sky-300 border border-sky-500/30 font-semibold">
                    Includes all typed data & CER
                  </span>
                </div>
                <p className="text-slate-400 leading-relaxed">
                  Download a publication-ready, 2-page PDF document populated with your name, date, experimental table readings, critical analysis, and CER argumentation. Attach this file to your Google Classroom or LMS submission.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    handleDownloadStudentPDF();
                  }}
                  className="w-full px-4 py-2.5 bg-sky-600 hover:bg-sky-500 text-white font-bold rounded-xl transition-all cursor-pointer flex items-center justify-center gap-2 shadow-md shadow-sky-600/20"
                >
                  <Download className="w-4 h-4" />
                  <span>Download Completed Lab PDF</span>
                </button>
              </div>

              {/* Option 2: Copy Text for Classroom/LMS Text Submission */}
              <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-white font-bold">
                    <Copy className="w-4 h-4 text-emerald-400" />
                    <span>Option 2: Copy Formatted Text Summary</span>
                  </div>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 font-semibold">
                    1-Click Clipboard
                  </span>
                </div>
                <p className="text-slate-400 leading-relaxed">
                  If your teacher requested text entry, copy the formatted text summary to your clipboard and paste directly into the Google Classroom or Canvas comment/submission box.
                </p>
                <button
                  type="button"
                  onClick={handleCopySubmission}
                  className="w-full px-4 py-2.5 bg-slate-800 hover:bg-slate-700 text-emerald-300 border border-emerald-500/30 font-bold rounded-xl transition-all cursor-pointer flex items-center justify-center gap-2"
                >
                  {copiedSummary ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  <span>{copiedSummary ? "Copied to Clipboard!" : "Copy Formatted Text Summary"}</span>
                </button>
              </div>

              {/* Submission Checklist */}
              <div className="p-3.5 rounded-2xl bg-slate-950/80 border border-slate-800/80 space-y-2 text-[11px] text-slate-400">
                <span className="font-bold text-slate-200 block uppercase tracking-wider">
                  Submission Checklist:
                </span>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className={`w-3.5 h-3.5 ${hypothesis ? "text-emerald-400" : "text-slate-600"}`} />
                  <span>Phase 1 Hypothesis formulated</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className={`w-3.5 h-3.5 ${tableRows.some((r) => r[2]) ? "text-emerald-400" : "text-slate-600"}`} />
                  <span>Phase 2 Virtual trial data recorded</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className={`w-3.5 h-3.5 ${claim && evidence && reasoning ? "text-emerald-400" : "text-slate-600"}`} />
                  <span>Phase 4 Claim-Evidence-Reasoning completed</span>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="px-6 py-3 bg-slate-950 border-t border-slate-800 flex justify-end">
              <button
                type="button"
                onClick={() => setShowSubmitModal(false)}
                className="px-4 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-xl font-semibold cursor-pointer transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Footer with subtle teacher return link */}
      <footer className="mt-auto border-t border-slate-900 bg-slate-950 px-4 py-4 text-center text-xs text-slate-500">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <span>
            Axiom STEM Interactive Laboratory Curriculum • Assigned Student Worksheet Mode
          </span>
          {onReturnToCatalog && (
            <button
              type="button"
              onClick={onReturnToCatalog}
              className="text-slate-400 hover:text-sky-400 transition-colors cursor-pointer text-[11px] underline"
            >
              Educator? Return to Full Catalog
            </button>
          )}
        </div>
      </footer>
    </div>
  );
};
