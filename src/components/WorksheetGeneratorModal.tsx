import React, { useState } from "react";
import { SimulationItem } from "../types";
import {
  X,
  FileText,
  Download,
  Printer,
  CheckCircle2,
  HelpCircle,
  Award,
  Sparkles,
  BookOpen,
  Eye,
  KeyRound,
  GraduationCap,
  Layers,
  ChevronRight,
  Share2,
  Copy,
  Check,
  Link
} from "lucide-react";
import {
  downloadWorksheetPDF,
  getSimulationWorksheetData,
  getDisciplinePhrasing,
} from "../services/pdfWorksheetGenerator";

interface WorksheetModalProps {
  simulation: SimulationItem;
  onClose: () => void;
  onOpenLMSPublish?: (sim: SimulationItem) => void;
}

export const WorksheetGeneratorModal: React.FC<WorksheetModalProps> = ({
  simulation,
  onClose,
  onOpenLMSPublish,
}) => {
  const [includeAnswerKey, setIncludeAnswerKey] = useState(false);
  const [gradeLevel, setGradeLevel] = useState(
    simulation.gradeLevel?.[0] || "High School (9-12)"
  );
  const [isDownloading, setIsDownloading] = useState(false);
  const [downloadSuccess, setDownloadSuccess] = useState<string | null>(null);
  const [copiedStudentLink, setCopiedStudentLink] = useState(false);

  const studentPdfUrl = `${window.location.origin}?pdf=${simulation.id}`;

  const handleCopyStudentLink = () => {
    navigator.clipboard.writeText(studentPdfUrl);
    setCopiedStudentLink(true);
    setDownloadSuccess("Student PDF Link copied to clipboard! Students will only see this professional PDF worksheet, not the app site.");
    setTimeout(() => {
      setCopiedStudentLink(false);
      setDownloadSuccess(null);
    }, 4000);
  };

  const worksheetData = getSimulationWorksheetData(simulation);
  const phrasing = getDisciplinePhrasing(simulation.discipline || "physics");

  const handleDownload = (isKey: boolean) => {
    setIsDownloading(true);
    try {
      downloadWorksheetPDF(simulation, {
        includeAnswerKey: isKey,
        gradeLevel,
      });
      setDownloadSuccess(
        isKey
          ? "Teacher Answer Key & Scoring Guide PDF downloaded successfully!"
          : "Student Lab Inquiry Worksheet PDF downloaded successfully!"
      );
      setTimeout(() => setDownloadSuccess(null), 4000);
    } catch (err) {
      console.error("PDF generation failed:", err);
      alert("Failed to generate PDF. Please try again.");
    } finally {
      setIsDownloading(false);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      <div className="bg-slate-900 border border-slate-700/80 rounded-3xl w-full max-w-5xl max-h-[94vh] flex flex-col overflow-hidden shadow-2xl">
        {/* Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 bg-slate-950 border-b border-slate-800 shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-sky-500/20 to-indigo-500/20 text-sky-400 border border-sky-500/30 flex items-center justify-center shadow-inner">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-base sm:text-lg font-bold text-white">
                  Laboratory Worksheet & Critical Thinking Guide
                </h2>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-sky-500/20 text-sky-300 border border-sky-500/30">
                  Vector PDF Export
                </span>
              </div>
              <p className="text-xs text-slate-400">
                Rigorous inquiry, structured data tables, and CER synthesis for{" "}
                <span className="text-slate-200 font-semibold">{simulation.title}</span>
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => handleDownload(false)}
              disabled={isDownloading}
              className="flex items-center gap-1.5 px-3.5 py-1.5 bg-gradient-to-r from-sky-600 to-indigo-600 hover:from-sky-500 hover:to-indigo-500 text-white rounded-xl text-xs font-bold shadow-md shadow-sky-600/20 cursor-pointer transition-all active:scale-95 disabled:opacity-50"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download Student PDF</span>
            </button>

            <button
              onClick={() => handleDownload(true)}
              disabled={isDownloading}
              className="flex items-center gap-1.5 px-3 py-1.5 bg-emerald-600/20 hover:bg-emerald-600/30 text-emerald-300 border border-emerald-500/30 rounded-xl text-xs font-semibold cursor-pointer transition-all active:scale-95"
              title="Download teacher answer key with exemplar calculations and scoring rubric"
            >
              <KeyRound className="w-3.5 h-3.5 text-emerald-400" />
              <span className="hidden sm:inline">Teacher Key PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-2 text-slate-400 hover:text-rose-400 hover:bg-slate-800 rounded-xl cursor-pointer transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Configuration & Quick Toggle Bar */}
        <div className="px-6 py-3 bg-slate-950/60 border-b border-slate-800/80 flex flex-wrap items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <span className="text-slate-400 font-semibold uppercase tracking-wider text-[10px]">
                Grade Alignment:
              </span>
              <select
                value={gradeLevel}
                onChange={(e) => setGradeLevel(e.target.value)}
                className="bg-slate-900 border border-slate-800 rounded-lg px-2.5 py-1 text-slate-200 focus:outline-none focus:border-sky-500 text-xs"
              >
                <option value="Middle School (6-8)">Middle School (6-8)</option>
                <option value="High School (9-12)">High School (9-12)</option>
                <option value="AP / IB STEM">AP / IB STEM</option>
                <option value="Undergraduate">Undergraduate</option>
              </select>
            </div>

            <div className="flex items-center gap-1.5 bg-slate-900 p-1 rounded-xl border border-slate-800">
              <button
                type="button"
                onClick={() => setIncludeAnswerKey(false)}
                className={`px-3 py-1 rounded-lg font-medium transition-all flex items-center gap-1.5 cursor-pointer ${
                  !includeAnswerKey
                    ? "bg-sky-600 text-white shadow-sm font-bold"
                    : "text-slate-400 hover:text-slate-200"
                }`}
              >
                <Eye className="w-3 h-3" />
                <span>Student Worksheet</span>
              </button>
              <button
                type="button"
                onClick={() => setIncludeAnswerKey(true)}
                className={`px-3 py-1 rounded-lg font-medium transition-all flex items-center gap-1.5 cursor-pointer ${
                  includeAnswerKey
                    ? "bg-emerald-600 text-white shadow-sm font-bold"
                    : "text-slate-400 hover:text-slate-200"
                }`}
              >
                <KeyRound className="w-3 h-3" />
                <span>Teacher Answer Key</span>
              </button>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyStudentLink}
              className="flex items-center gap-1 px-3 py-1 rounded-lg bg-sky-600/20 hover:bg-sky-600/30 text-sky-300 border border-sky-500/30 font-semibold cursor-pointer transition-colors"
              title="Copy direct student PDF link (opens professional PDF worksheet only, no app site)"
            >
              {copiedStudentLink ? (
                <>
                  <Check className="w-3 h-3 text-emerald-400" />
                  <span>Copied Student PDF Link</span>
                </>
              ) : (
                <>
                  <Link className="w-3 h-3 text-sky-400" />
                  <span>Copy Student PDF Link</span>
                </>
              )}
            </button>
            {onOpenLMSPublish && (
              <button
                onClick={() => onOpenLMSPublish(simulation)}
                className="flex items-center gap-1 px-3 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-emerald-300 border border-slate-700 font-semibold cursor-pointer transition-colors"
              >
                <Share2 className="w-3 h-3" />
                <span>Attach to LMS Assignment</span>
              </button>
            )}
            <button
              onClick={handlePrint}
              className="flex items-center gap-1 px-3 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700 font-medium cursor-pointer transition-colors"
            >
              <Printer className="w-3 h-3" />
              <span>Print</span>
            </button>
          </div>
        </div>

        {/* Download Success Notification */}
        {downloadSuccess && (
          <div className="bg-emerald-500/20 border-b border-emerald-500/30 px-6 py-2 text-xs text-emerald-300 flex items-center gap-2 animate-in fade-in duration-200">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>{downloadSuccess}</span>
          </div>
        )}

        {/* Live Document Preview Panel */}
        <div className="flex-1 overflow-y-auto p-6 bg-slate-950/40 space-y-6">
          {/* Document Sheet Simulation */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 max-w-4xl mx-auto shadow-xl space-y-6">
            {/* Sheet Banner */}
            <div className="border-b border-slate-800 pb-5">
              <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-slate-400 mb-2 font-mono">
                <span className="flex items-center gap-1">
                  <GraduationCap className="w-3.5 h-3.5 text-sky-400" />
                  AXIOM STEM LABORATORY CURRICULUM
                </span>
                <span
                  className={`px-2.5 py-0.5 rounded-full font-bold uppercase text-[10px] border ${
                    includeAnswerKey
                      ? "bg-emerald-500/10 text-emerald-300 border-emerald-500/30"
                      : "bg-sky-500/10 text-sky-300 border-sky-500/30"
                  }`}
                >
                  {includeAnswerKey ? "Teacher Key & Scoring Guide" : "Student Investigation Worksheet"}
                </span>
              </div>

              <h1 className="text-2xl font-black text-white">{simulation.title}</h1>
              <p className="text-xs text-slate-400 mt-1">{simulation.tagline}</p>

              <div className="flex flex-wrap gap-1.5 mt-3">
                {simulation.standards?.map((st) => (
                  <span
                    key={st}
                    className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-sky-300 border border-slate-700"
                  >
                    {st}
                  </span>
                ))}
              </div>
            </div>

            {/* Student Metadata Fields Mock */}
            <div className="p-4 bg-slate-950/60 rounded-xl border border-slate-800 grid grid-cols-2 sm:grid-cols-4 gap-3 text-sm text-slate-400">
              <div>
                <span className="font-semibold text-slate-300 block text-xs uppercase tracking-wider">
                  Student Name:
                </span>
                <span className="font-mono text-slate-500 text-sm">____________________</span>
              </div>
              <div>
                <span className="font-semibold text-slate-300 block text-xs uppercase tracking-wider">Date:</span>
                <span className="font-mono text-slate-500 text-sm">______________</span>
              </div>
              <div>
                <span className="font-semibold text-slate-300 block text-xs uppercase tracking-wider">
                  Class / Period:
                </span>
                <span className="font-mono text-slate-500 text-sm">__________</span>
              </div>
              <div>
                <span className="font-semibold text-slate-300 block text-xs uppercase tracking-wider">
                  Total Score:
                </span>
                <span className="font-bold text-sky-400 font-mono text-sm">______ / 100 PTS</span>
              </div>
            </div>

            {/* Driving Phenomenon Callout */}
            <div className="p-4.5 rounded-xl bg-sky-950/30 border border-sky-500/30 space-y-1.5">
              <div className="font-bold text-sky-300 uppercase tracking-wider text-xs flex items-center gap-1.5">
                <HelpCircle className="w-4 h-4 text-sky-400" /> Central Driving Phenomenon & Inquiry
                Question:
              </div>
              <p className="text-slate-100 italic font-serif leading-relaxed text-base">
                "{worksheetData.drivingQuestion}"
              </p>
            </div>

            {/* PHASE 1: PRE-LAB HYPOTHESIS / CONJECTURE */}
            <div className="space-y-2.5">
              <div className="flex items-center gap-2.5 text-base font-bold text-white">
                <span className="w-6.5 h-6.5 rounded-lg bg-sky-600 text-white flex items-center justify-center text-xs font-bold">
                  1
                </span>
                <span>{phrasing.phase1Title}</span>
              </div>
              <p className="text-sm text-slate-300 pl-9 leading-relaxed">
                {worksheetData.hypothesisPrompt}
              </p>
              <div className="pl-9 pt-1">
                {includeAnswerKey ? (
                  <div className="p-3.5 rounded-xl bg-emerald-950/30 border border-emerald-500/30 text-sm space-y-1 text-emerald-200">
                    <span className="font-bold uppercase text-xs text-emerald-400">
                      Exemplar Response & Criteria:
                    </span>
                    <p className="text-slate-200 text-sm leading-relaxed">
                      Student states a clear, mathematically/scientifically sound hypothesis or conjecture with structural reasoning and expected relationships.
                    </p>
                  </div>
                ) : (
                  <div className="space-y-2 border border-dashed border-slate-800 rounded-xl p-3.5 bg-slate-950/30">
                    <div className="h-4 border-b border-slate-800" />
                    <div className="h-4 border-b border-slate-800" />
                  </div>
                )}
              </div>
            </div>

            {/* PHASE 2: QUANTITATIVE / INVARIANT DATA COLLECTION TABLE */}
            <div className="space-y-3">
              <div className="flex items-center gap-2.5 text-base font-bold text-white">
                <span className="w-6.5 h-6.5 rounded-lg bg-sky-600 text-white flex items-center justify-center text-xs font-bold">
                  2
                </span>
                <span>{phrasing.phase2Title}</span>
              </div>
              <p className="text-sm text-slate-400 pl-9 leading-relaxed">
                {phrasing.phase2Subtitle}
              </p>
              <div className="overflow-x-auto rounded-xl border border-slate-800">
                <table className="w-full text-left text-sm border-collapse">
                  <thead>
                    <tr className="bg-slate-950 text-slate-300 border-b border-slate-800 font-mono text-xs">
                      {worksheetData.tableHeaders.map((h, i) => (
                        <th key={i} className="p-3 font-bold">
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800/60 font-mono text-xs">
                    {worksheetData.tableRows.map((row, rIdx) => (
                      <tr key={rIdx} className="hover:bg-slate-800/30">
                        {row.map((cell, cIdx) => (
                          <td key={cIdx} className="p-3 text-slate-200 font-medium">
                            {includeAnswerKey || cIdx <= 1 ? (
                              cell
                            ) : (
                              <span className="text-slate-600 italic">...</span>
                            )}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* PHASE 3: CRITICAL THINKING & DEDUCTIVE ANALYSIS */}
            <div className="space-y-4">
              <div className="flex items-center gap-2.5 text-base font-bold text-white">
                <span className="w-6.5 h-6.5 rounded-lg bg-sky-600 text-white flex items-center justify-center text-xs font-bold">
                  3
                </span>
                <span>{phrasing.phase3Title}</span>
              </div>

              <div className="space-y-3 pl-9">
                {worksheetData.criticalQuestions.map((q, qIdx) => (
                  <div key={qIdx} className="p-4 rounded-xl bg-slate-950/60 border border-slate-800 space-y-2">
                    <h4 className="text-sm font-bold text-slate-100">{q.prompt}</h4>
                    <p className="text-sm text-slate-300 leading-relaxed">{q.subtext}</p>
                    {includeAnswerKey && q.exemplarAnswer && (
                      <div className="mt-2.5 p-3 rounded-lg bg-emerald-950/30 border border-emerald-500/20 text-sm text-emerald-200 space-y-1">
                        <span className="font-bold text-xs uppercase text-emerald-400">
                          Exemplar Model Answer:
                        </span>
                        <p className="text-slate-200 text-sm leading-relaxed">{q.exemplarAnswer}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* PHASE 4: SYNTHESIS CONCLUSION */}
            <div className="space-y-3">
              <div className="flex items-center gap-2.5 text-base font-bold text-white">
                <span className="w-6.5 h-6.5 rounded-lg bg-sky-600 text-white flex items-center justify-center text-xs font-bold">
                  4
                </span>
                <span>{phrasing.phase4Title}</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 pl-9">
                <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800 space-y-1.5">
                  <span className="text-sm font-bold text-sky-400 uppercase tracking-wider block">
                    {phrasing.claimTitle}
                  </span>
                  <p className="text-xs text-slate-300">
                    {phrasing.claimSubtext}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800 space-y-1.5">
                  <span className="text-sm font-bold text-sky-400 uppercase tracking-wider block">
                    {phrasing.evidenceTitle}
                  </span>
                  <p className="text-xs text-slate-300">
                    {phrasing.evidenceSubtext}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800 space-y-1.5">
                  <span className="text-sm font-bold text-sky-400 uppercase tracking-wider block">
                    {phrasing.reasoningTitle}
                  </span>
                  <p className="text-xs text-slate-300">
                    {phrasing.reasoningSubtext}
                  </p>
                </div>
              </div>
            </div>

            {/* PHASE 5: REAL-WORLD APPLICATION & ASSESSMENT RUBRIC */}
            <div className="p-4.5 rounded-xl bg-slate-950/70 border border-slate-800 space-y-2">
              <div className="text-sm font-bold text-indigo-300 uppercase tracking-wider flex items-center gap-1.5">
                <Award className="w-4 h-4 text-amber-400" />
                <span>Everyday STEM Connection: {worksheetData.realWorldScenario.title}</span>
              </div>
              <p className="text-sm text-slate-300 leading-relaxed">
                {worksheetData.realWorldScenario.scenario} {worksheetData.realWorldScenario.task}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
