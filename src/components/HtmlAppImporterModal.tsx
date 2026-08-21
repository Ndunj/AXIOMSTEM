import React, { useState, useEffect } from "react";
import { SimulationItem, STEMDiscipline, GradeLevel, CurriculumStandard } from "../types";
import { HtmlAppSimulator } from "./simulators/HtmlAppSimulator";
import {
  X,
  Code2,
  Upload,
  Globe,
  Plus,
  Trash2,
  Sparkles,
  CheckCircle2,
  Sliders,
  BookOpen,
  Copy,
  Check,
  Play,
  Layers,
  FileCode,
  DollarSign,
  ShieldCheck,
  Tag
} from "lucide-react";

interface HtmlAppImporterModalProps {
  onClose: () => void;
  onImportSuccess: (newSim: SimulationItem) => void;
  editingSimulation?: SimulationItem | null;
  availableStandards?: CurriculumStandard[];
  onOpenStandardsManager?: () => void;
}

export const HtmlAppImporterModal: React.FC<HtmlAppImporterModalProps> = ({
  onClose,
  onImportSuccess,
  editingSimulation,
  availableStandards = [],
  onOpenStandardsManager,
}) => {
  const [importMode, setImportMode] = useState<"file" | "code" | "url" | "guide">("file");

  // Metadata form state
  const [title, setTitle] = useState(editingSimulation?.title || "");
  const [tagline, setTagline] = useState(editingSimulation?.tagline || "");
  const [discipline, setDiscipline] = useState<STEMDiscipline>(editingSimulation?.discipline || "physics");
  const [selectedGrades, setSelectedGrades] = useState<GradeLevel[]>(
    editingSimulation?.gradeLevel || ["High School (9-12)", "AP / IB STEM"]
  );
  const [standardsList, setStandardsList] = useState<string[]>(
    editingSimulation?.standards || []
  );
  const [newStandardInput, setNewStandardInput] = useState("");
  const [description, setDescription] = useState(
    editingSimulation?.description || ""
  );
  const [learningObjectivesStr, setLearningObjectivesStr] = useState(
    editingSimulation?.learningObjectives?.join("\n") || ""
  );

  // Pricing & Licensing
  const [licenseType, setLicenseType] = useState(
    editingSimulation?.licenseType || "Academic STEM Classroom & Institutional License"
  );
  const [storeId, setStoreId] = useState(
    editingSimulation?.lemonSqueezyStoreId || editingSimulation?.stripeAccountId || "store_stem_faculty_101"
  );
  const [storeName, setStoreName] = useState(
    editingSimulation?.lemonSqueezyStoreName || editingSimulation?.stripeAccountName || "Dr. Elena Rostova & Axiom STEM Faculty"
  );
  const [priceSingle, setPriceSingle] = useState(editingSimulation?.pricing?.singleTeacher || 19);
  const [priceDept, setPriceDept] = useState(editingSimulation?.pricing?.schoolDepartment || 200);
  const [priceDistrict, setPriceDistrict] = useState(editingSimulation?.pricing?.districtUnlimited || 400);

  // HTML Content / URL
  const [htmlCode, setHtmlCode] = useState(
    editingSimulation?.htmlContent ||
      `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    body {
      background: #020617;
      color: #38bdf8;
      font-family: system-ui, sans-serif;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 100vh;
      margin: 0;
      overflow: hidden;
    }
    canvas {
      border: 1px solid #1e293b;
      background: #0f172a;
      border-radius: 12px;
      width: 92%;
      height: 72%;
    }
    .info {
      font-family: monospace;
      font-size: 13px;
      margin-top: 12px;
      color: #94a3b8;
    }
  </style>
</head>
<body>
  <canvas id="simCanvas"></canvas>
  <div class="info">Frequency: <span id="fVal">2.0</span> Hz | Amplitude: <span id="aVal">30</span> px</div>

  <script>
    const canvas = document.getElementById('simCanvas');
    const ctx = canvas.getContext('2d');
    let frequency = 2.0;
    let amplitude = 30;
    let time = 0;

    function resize() {
      canvas.width = canvas.clientWidth;
      canvas.height = canvas.clientHeight;
    }
    window.addEventListener('resize', resize);
    resize();

    // Listen to Axiom Slider Events
    window.addEventListener('message', (e) => {
      if (e.data && e.data.type === 'AXIOM_SET_PARAMS') {
        if (e.data.params.frequency !== undefined) frequency = Number(e.data.params.frequency);
        if (e.data.params.amplitude !== undefined) amplitude = Number(e.data.params.amplitude);
        document.getElementById('fVal').innerText = frequency.toFixed(1);
        document.getElementById('aVal').innerText = amplitude;
      }
    });

    function render() {
      time += 0.05;
      ctx.fillStyle = '#0f172a';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw Wave
      ctx.strokeStyle = '#38bdf8';
      ctx.lineWidth = 3;
      ctx.beginPath();
      const midY = canvas.height / 2;
      for (let x = 0; x < canvas.width; x++) {
        const y = midY + Math.sin(x * 0.02 * frequency + time) * amplitude;
        if (x === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.stroke();
      requestAnimationFrame(render);
    }
    render();
  </script>
</body>
</html>`
  );

  const [externalUrl, setExternalUrl] = useState(editingSimulation?.htmlUrl || "");
  const [uploadedFileName, setUploadedFileName] = useState<string | null>(null);
  const [uploadedFileSize, setUploadedFileSize] = useState<string | null>(null);
  const [uploadedLineCount, setUploadedLineCount] = useState<number | null>(null);
  const [uploadFeedback, setUploadFeedback] = useState<string | null>(null);

  // Custom Parameter Sliders
  const [controls, setControls] = useState<
    Array<{ key: string; label: string; min: number; max: number; step: number; unit: string; defaultValue: number }>
  >(() => {
    if (editingSimulation && editingSimulation.parameterControls) {
      return editingSimulation.parameterControls.map((c) => ({
        key: c.key,
        label: c.label,
        min: c.min,
        max: c.max,
        step: c.step,
        unit: c.unit || "",
        defaultValue: Number(editingSimulation.parameterDefaults?.[c.key] ?? c.min),
      }));
    }
    return [
      { key: "frequency", label: "Wave Frequency", min: 0.5, max: 10, step: 0.5, unit: "Hz", defaultValue: 2.0 },
      { key: "amplitude", label: "Wave Amplitude", min: 5, max: 80, step: 5, unit: "px", defaultValue: 30 },
    ];
  });

  const [testParams, setTestParams] = useState<Record<string, number>>(() => {
    if (editingSimulation && editingSimulation.parameterDefaults) {
      const res: Record<string, number> = {};
      Object.entries(editingSimulation.parameterDefaults).forEach(([k, v]) => {
        res[k] = Number(v);
      });
      return res;
    }
    return { frequency: 2.0, amplitude: 30 };
  });

  const [copiedSnippet, setCopiedSnippet] = useState(false);
  const [activePreviewTab, setActivePreviewTab] = useState<"config" | "preview">("config");
  const [isDragOver, setIsDragOver] = useState(false);

  // Handle raw file upload
  const processHtmlFile = (file: File) => {
    setUploadedFileName(file.name);
    const sizeKb = (file.size / 1024).toFixed(1);
    setUploadedFileSize(`${sizeKb} KB`);

    const reader = new FileReader();
    reader.onload = (evt) => {
      const content = evt.target?.result as string;
      if (content) {
        setHtmlCode(content);
        const lineCount = content.split("\n").length;
        setUploadedLineCount(lineCount);
        setUploadFeedback(`Successfully parsed "${file.name}" (${sizeKb} KB, ${lineCount} lines). Ready to preview or publish.`);

        // Auto-extract title from <title> tag if title is not yet set
        const titleMatch = content.match(/<title[^>]*>([^<]+)<\/title>/i);
        if (titleMatch && titleMatch[1] && (!title || title.trim() === "")) {
          setTitle(titleMatch[1].trim());
        } else if (!title || title.trim() === "") {
          const cleanName = file.name
            .replace(/\.[^/.]+$/, "")
            .replace(/[-_]/g, " ")
            .replace(/\b\w/g, (c) => c.toUpperCase());
          setTitle(cleanName);
        }
      }
    };
    reader.readAsText(file);
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) processHtmlFile(file);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
    const file = e.dataTransfer.files?.[0];
    if (file) {
      processHtmlFile(file);
    }
  };

  const handleAddControl = () => {
    const newKey = `param_${controls.length + 1}`;
    setControls((prev) => [
      ...prev,
      { key: newKey, label: `Custom Parameter ${controls.length + 1}`, min: 1, max: 100, step: 1, unit: "", defaultValue: 50 },
    ]);
    setTestParams((prev) => ({ ...prev, [newKey]: 50 }));
  };

  const handleRemoveControl = (index: number) => {
    const toRemove = controls[index];
    setControls((prev) => prev.filter((_, i) => i !== index));
    setTestParams((prev) => {
      const copy = { ...prev };
      delete copy[toRemove.key];
      return copy;
    });
  };

  const handleControlChange = (index: number, field: string, value: any) => {
    setControls((prev) =>
      prev.map((c, i) => {
        if (i !== index) return c;
        const updated = { ...c, [field]: value };
        if (field === "defaultValue" || field === "key") {
          setTestParams((p) => ({ ...p, [updated.key]: Number(updated.defaultValue) }));
        }
        return updated;
      })
    );
  };

  const handleAddStandardTag = (standardCode: string) => {
    const trimmed = standardCode.trim().toUpperCase();
    if (trimmed && !standardsList.includes(trimmed)) {
      setStandardsList([...standardsList, trimmed]);
    }
    setNewStandardInput("");
  };

  const handleRemoveStandardTag = (standardCode: string) => {
    setStandardsList(standardsList.filter((s) => s !== standardCode));
  };

  const handleCopyCodeSnippet = () => {
    const snippet = `// Add this listener inside your HTML app's <script> tag:
window.addEventListener('message', function(event) {
  if (event.data && event.data.type === 'AXIOM_SET_PARAMS') {
    const params = event.data.params;
    console.log('Received parameter update from Axiom:', params);
    
    // Update your simulation variables here:
    // myVariable = params.myParamKey;
  }
});`;
    navigator.clipboard.writeText(snippet);
    setCopiedSnippet(true);
    setTimeout(() => setCopiedSnippet(false), 2000);
  };

  // Submit and save to simulations library
  const handleSaveSimulation = () => {
    if (!title.trim()) {
      alert("Please enter a simulation title.");
      return;
    }

    const paramDefaults: Record<string, number> = {};
    controls.forEach((c) => {
      paramDefaults[c.key] = Number(c.defaultValue);
    });

    const simId = editingSimulation ? editingSimulation.id : `app-sim-${Date.now()}`;

    const newSim: SimulationItem = {
      id: simId,
      title: title.trim(),
      tagline: tagline.trim() || "Interactive STEM Simulation",
      discipline,
      gradeLevel: selectedGrades.length > 0 ? selectedGrades : ["High School (9-12)"],
      standards: standardsList.length > 0 ? standardsList : ["CUSTOM-STEM-01"],
      description: description.trim() || "Interactive model allowing real-time parameter testing and scientific inquiry.",
      learningObjectives: learningObjectivesStr
        .split("\n")
        .map((s) => s.trim())
        .filter(Boolean),
      thumbnailGradient:
        discipline === "physics"
          ? "from-sky-600 to-indigo-800"
          : discipline === "chemistry"
          ? "from-emerald-600 to-teal-800"
          : discipline === "biology"
          ? "from-green-600 to-lime-800"
          : "from-purple-600 to-indigo-800",
      badgeColor:
        discipline === "physics"
          ? "bg-sky-500/10 text-sky-400 border-sky-500/20"
          : discipline === "chemistry"
          ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/20"
          : discipline === "biology"
          ? "bg-green-500/10 text-green-400 border-green-500/20"
          : "bg-purple-500/10 text-purple-400 border-purple-500/20",
      iconName: "Code",
      rating: editingSimulation?.rating || 5.0,
      reviewCount: editingSimulation?.reviewCount || 1,
      teacherCount: editingSimulation?.teacherCount || 1,
      licenseType: licenseType || "Academic STEM Classroom & Institutional License",
      pricing: {
        singleTeacher: Number(priceSingle) || 19,
        schoolDepartment: Number(priceDept) || 200,
        districtUnlimited: Number(priceDistrict) || 400,
      },
      features: [
        "Creator-Uploaded Standalone HTML5/Canvas/WebGL App",
        "Axiom PostMessage Real-Time Parameter Bridge",
        "Socratic AI Lab Tutor Integration",
        "Instant Gemini 3.7 AI Lesson Plan & Worksheet Generation",
      ],
      parameterDefaults: paramDefaults,
      parameterControls: controls.map((c) => ({
        key: c.key,
        label: c.label,
        min: Number(c.min),
        max: Number(c.max),
        step: Number(c.step),
        unit: c.unit,
      })),
      sampleChallenges: [
        {
          id: `c-${simId}-1`,
          title: "Parameter Inquiry & Exploration",
          instruction: "Manipulate the controls and record observations on how the system responds.",
          targetMetric: controls[0]?.label || "Primary Parameter",
          targetValue: Number(controls[0]?.defaultValue || 50),
          tolerance: 5,
          currentValueKey: controls[0]?.key || "param_1",
          rewardBadge: "Master Investigator",
        },
      ],
      previewFacts: [
        "Zero-install sandbox running securely in modern web browsers.",
        "Equipped with live student inquiry prompts & teacher standards alignment.",
      ],
      isHtmlApp: true,
      htmlContent: importMode === "url" ? undefined : htmlCode,
      htmlUrl: importMode === "url" ? externalUrl : undefined,
      isCustomImport: true,
      authorEmail: "ndunj123@gmail.com",
      authorName: storeName.trim() || "Master Creator",
      lemonSqueezyStoreId: storeId.trim() || "store_stem_faculty_101",
      lemonSqueezyStoreName: storeName.trim() || "Dr. Elena Rostova & Axiom STEM Faculty",
      stripeAccountId: storeId.trim() || "store_stem_faculty_101",
      stripeAccountName: storeName.trim() || "Dr. Elena Rostova & Axiom STEM Faculty",
      createdAt: editingSimulation?.createdAt || new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      lastModified: new Date().toISOString(),
    };

    onImportSuccess(newSim);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/85 backdrop-blur-md animate-in fade-in duration-200 overflow-y-auto">
      <div className="bg-slate-900 border border-slate-700/80 rounded-3xl w-full max-w-5xl max-h-[92vh] flex flex-col shadow-2xl overflow-hidden">
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-slate-950/90 border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400">
              <Code2 className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-base sm:text-lg font-bold text-white">
                  {editingSimulation ? `Edit Simulation: ${editingSimulation.title}` : "Upload & Author HTML Simulation"}
                </h2>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex items-center gap-1">
                  <ShieldCheck className="w-3 h-3" /> Creator Studio
                </span>
              </div>
              <p className="text-xs text-slate-400">
                Upload raw HTML files or code, connect live parameter sliders, and assign educational standards.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <div className="hidden sm:flex bg-slate-950 p-1 rounded-xl border border-slate-800">
              <button
                onClick={() => setActivePreviewTab("config")}
                className={`px-3 py-1 text-xs font-semibold rounded-lg transition-all ${
                  activePreviewTab === "config" ? "bg-indigo-600 text-white" : "text-slate-400 hover:text-white"
                }`}
              >
                Configuration
              </button>
              <button
                onClick={() => setActivePreviewTab("preview")}
                className={`px-3 py-1 text-xs font-semibold rounded-lg transition-all flex items-center gap-1.5 ${
                  activePreviewTab === "preview" ? "bg-indigo-600 text-white" : "text-slate-400 hover:text-white"
                }`}
              >
                <Play className="w-3 h-3" /> Live Sandbox
              </button>
            </div>

            <button
              onClick={onClose}
              className="p-2 text-slate-400 hover:text-white rounded-xl hover:bg-slate-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto flex-1 space-y-6">
          {activePreviewTab === "config" ? (
            <div className="space-y-6">
              {/* Step 1: Upload Source / Mode Selection */}
              <div className="space-y-3">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-300 flex items-center gap-2">
                  <span>1. App Source (Raw HTML / JS / URL)</span>
                </label>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  <button
                    type="button"
                    onClick={() => setImportMode("file")}
                    className={`p-3 rounded-2xl border text-left transition-all ${
                      importMode === "file"
                        ? "bg-indigo-950/60 border-indigo-500 text-white shadow-md shadow-indigo-500/10"
                        : "bg-slate-950/60 border-slate-800 text-slate-400 hover:border-slate-700"
                    }`}
                  >
                    <Upload className="w-4 h-4 text-indigo-400 mb-1.5" />
                    <div className="text-xs font-bold">Upload .html File</div>
                    <div className="text-[10px] text-slate-500 mt-0.5">Drag & drop raw HTML</div>
                  </button>

                  <button
                    type="button"
                    onClick={() => setImportMode("code")}
                    className={`p-3 rounded-2xl border text-left transition-all ${
                      importMode === "code"
                        ? "bg-indigo-950/60 border-indigo-500 text-white shadow-md shadow-indigo-500/10"
                        : "bg-slate-950/60 border-slate-800 text-slate-400 hover:border-slate-700"
                    }`}
                  >
                    <Code2 className="w-4 h-4 text-sky-400 mb-1.5" />
                    <div className="text-xs font-bold">Paste Raw Code</div>
                    <div className="text-[10px] text-slate-500 mt-0.5">HTML, JS, CSS in one</div>
                  </button>

                  <button
                    type="button"
                    onClick={() => setImportMode("url")}
                    className={`p-3 rounded-2xl border text-left transition-all ${
                      importMode === "url"
                        ? "bg-indigo-950/60 border-indigo-500 text-white shadow-md shadow-indigo-500/10"
                        : "bg-slate-950/60 border-slate-800 text-slate-400 hover:border-slate-700"
                    }`}
                  >
                    <Globe className="w-4 h-4 text-emerald-400 mb-1.5" />
                    <div className="text-xs font-bold">Hosted Web URL</div>
                    <div className="text-[10px] text-slate-500 mt-0.5">Embed iframe simulation</div>
                  </button>

                  <button
                    type="button"
                    onClick={() => setImportMode("guide")}
                    className={`p-3 rounded-2xl border text-left transition-all ${
                      importMode === "guide"
                        ? "bg-indigo-950/60 border-indigo-500 text-white shadow-md shadow-indigo-500/10"
                        : "bg-slate-950/60 border-slate-800 text-slate-400 hover:border-slate-700"
                    }`}
                  >
                    <Sliders className="w-4 h-4 text-amber-400 mb-1.5" />
                    <div className="text-xs font-bold">PostMessage API</div>
                    <div className="text-[10px] text-slate-500 mt-0.5">Slider binding instructions</div>
                  </button>
                </div>

                {/* Import Mode Inputs */}
                {importMode === "file" && (
                  <div className="space-y-3">
                    <div
                      onDragOver={(e) => {
                        e.preventDefault();
                        setIsDragOver(true);
                      }}
                      onDragLeave={() => setIsDragOver(false)}
                      onDrop={handleDrop}
                      className={`border-2 border-dashed rounded-2xl p-6 text-center space-y-3 transition-all ${
                        isDragOver
                          ? "border-indigo-400 bg-indigo-950/40 ring-4 ring-indigo-500/20"
                          : "border-slate-800 bg-slate-950/60 hover:border-slate-700"
                      }`}
                    >
                      <div className="p-3 bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 rounded-2xl w-14 h-14 flex items-center justify-center mx-auto shadow-inner">
                        <Upload className="w-7 h-7" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-white">Drag & drop your .html / .htm simulation file here</h4>
                        <p className="text-xs text-slate-400 mt-1">Supports all standalone HTML5, Canvas, Three.js, SVG, Phaser, and WebGL apps</p>
                      </div>
                      <div className="flex flex-wrap items-center justify-center gap-2 pt-1">
                        <label className="px-4 py-2.5 bg-gradient-to-r from-indigo-600 to-sky-600 hover:from-indigo-500 hover:to-sky-500 text-white text-xs font-bold rounded-xl cursor-pointer inline-flex items-center gap-2 shadow-lg shadow-indigo-500/25 active:scale-95 transition-all">
                          <FileCode className="w-4 h-4" />
                          <span>Choose .html File from Computer</span>
                          <input
                            type="file"
                            accept=".html,.htm,.txt,text/html"
                            onChange={handleFileUpload}
                            className="hidden"
                          />
                        </label>
                      </div>
                      <div className="text-[11px] text-slate-500">
                        Accepted formats: <code className="text-slate-400 font-mono">.html</code>, <code className="text-slate-400 font-mono">.htm</code> (single-file bundle with inline scripts & styles)
                      </div>
                    </div>

                    {/* Uploaded File Confirmation Status */}
                    {uploadedFileName && (
                      <div className="bg-emerald-950/40 border border-emerald-500/30 rounded-2xl p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 animate-in fade-in duration-200">
                        <div className="flex items-center gap-3">
                          <div className="p-2 rounded-xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                            <CheckCircle2 className="w-5 h-5" />
                          </div>
                          <div>
                            <div className="text-xs font-bold text-white flex items-center gap-2">
                              <span>{uploadedFileName}</span>
                              <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-emerald-500/20 text-emerald-300">
                                {uploadedFileSize || "Ready"}
                              </span>
                              {uploadedLineCount && (
                                <span className="text-[10px] text-slate-400 font-mono hidden sm:inline">
                                  ({uploadedLineCount} lines)
                                </span>
                              )}
                            </div>
                            <p className="text-[11px] text-emerald-300/90 mt-0.5">
                              {uploadFeedback || "File loaded and ready for live sandboxed preview and publishing."}
                            </p>
                          </div>
                        </div>

                        <div className="flex items-center gap-2 self-end sm:self-center">
                          <button
                            type="button"
                            onClick={() => setActivePreviewTab("preview")}
                            className="px-3 py-1.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold flex items-center gap-1.5 transition-all shadow-md"
                          >
                            <Play className="w-3.5 h-3.5" /> Test Live Sandbox
                          </button>
                          <button
                            type="button"
                            onClick={() => setImportMode("code")}
                            className="px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold flex items-center gap-1.5 border border-slate-700 transition-all"
                          >
                            <Code2 className="w-3.5 h-3.5" /> View Code
                          </button>
                        </div>
                      </div>
                    )}

                    {/* Multi-file notice / Help Tip */}
                    <div className="bg-slate-950/70 border border-slate-800/80 rounded-xl p-3 text-[11px] text-slate-400 flex items-start gap-2.5">
                      <Sparkles className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-slate-200">Tip for multi-file apps:</strong> If your HTML app links to external local folders of assets (e.g. <code className="text-slate-300 font-mono">./sound.mp3</code> or <code className="text-slate-300 font-mono">./texture.png</code>), either inline them as Base64/CDN links or use the <button type="button" onClick={() => setImportMode("url")} className="text-sky-400 hover:underline font-semibold">Hosted Web URL tab</button> to embed your hosted site (e.g. on Netlify or Vercel).
                      </div>
                    </div>
                  </div>
                )}

                {importMode === "code" && (
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-[11px] text-slate-400">
                      <span>Paste your complete standalone HTML code below (including styles & scripts):</span>
                      <button
                        type="button"
                        onClick={handleCopyCodeSnippet}
                        className="text-indigo-400 hover:text-indigo-300 flex items-center gap-1"
                      >
                        {copiedSnippet ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                        <span>{copiedSnippet ? "Copied Slider Listener!" : "Copy PostMessage Listener"}</span>
                      </button>
                    </div>
                    <textarea
                      rows={9}
                      value={htmlCode}
                      onChange={(e) => setHtmlCode(e.target.value)}
                      className="w-full bg-slate-950 border border-slate-800 rounded-2xl p-4 font-mono text-xs text-slate-300 focus:outline-none focus:border-indigo-500/50 leading-relaxed"
                      placeholder="<!DOCTYPE html><html><body><canvas id='sim'></canvas>...</body></html>"
                    />
                  </div>
                )}

                {importMode === "url" && (
                  <div className="space-y-2">
                    <label className="text-xs text-slate-400 block">External Hosted URL:</label>
                    <div className="relative">
                      <Globe className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <input
                        type="url"
                        value={externalUrl}
                        onChange={(e) => setExternalUrl(e.target.value)}
                        placeholder="https://your-domain.com/simulations/optics-lab.html"
                        className="w-full pl-9 pr-4 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-xs text-white placeholder:text-slate-600 focus:outline-none focus:border-indigo-500/50"
                      />
                    </div>
                  </div>
                )}

                {importMode === "guide" && (
                  <div className="bg-slate-950 border border-indigo-500/30 rounded-2xl p-4 space-y-3">
                    <div className="flex items-center justify-between">
                      <h4 className="text-xs font-bold text-indigo-300 flex items-center gap-1.5">
                        <Sparkles className="w-4 h-4 text-indigo-400" /> Connecting Sliders to your JavaScript
                      </h4>
                      <button
                        type="button"
                        onClick={handleCopyCodeSnippet}
                        className="px-3 py-1 rounded-lg bg-indigo-500/20 text-indigo-300 hover:bg-indigo-500/30 text-xs font-semibold flex items-center gap-1"
                      >
                        {copiedSnippet ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                        <span>Copy Code</span>
                      </button>
                    </div>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      Whenever students or teachers move a slider in Axiom, it sends a window message with parameter keys. Insert this code into your HTML app:
                    </p>
                    <pre className="bg-slate-900 border border-slate-800 p-3 rounded-xl font-mono text-[11px] text-sky-300 overflow-x-auto">
{`window.addEventListener('message', function(event) {
  if (event.data && event.data.type === 'AXIOM_SET_PARAMS') {
    const params = event.data.params;
    // Access parameter keys matching your configured sliders:
    // if (params.frequency !== undefined) myFrequency = Number(params.frequency);
  }
});`}
                    </pre>
                  </div>
                )}
              </div>

              {/* Step 2: Metadata & Curriculum Standards */}
              <div className="space-y-4 pt-4 border-t border-slate-800">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-300 flex items-center justify-between">
                  <span>2. Simulation Metadata & Curriculum Standards</span>
                  {onOpenStandardsManager && (
                    <button
                      type="button"
                      onClick={onOpenStandardsManager}
                      className="text-[11px] text-amber-400 hover:text-amber-300 font-semibold flex items-center gap-1"
                    >
                      <BookOpen className="w-3.5 h-3.5" /> Manage Standards Hub
                    </button>
                  )}
                </label>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="sm:col-span-2">
                    <label className="text-[11px] font-semibold text-slate-300 block mb-1">Title *</label>
                    <input
                      type="text"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                      placeholder="e.g. Double Slit Wave Interference Lab"
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-indigo-500/50"
                    />
                  </div>

                  <div>
                    <label className="text-[11px] font-semibold text-slate-300 block mb-1">STEM Discipline</label>
                    <select
                      value={discipline}
                      onChange={(e) => setDiscipline(e.target.value as any)}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white capitalize focus:outline-none focus:border-indigo-500/50"
                    >
                      <option value="physics">Physics</option>
                      <option value="chemistry">Chemistry</option>
                      <option value="biology">Biology</option>
                      <option value="mathematics">Mathematics</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-[11px] font-semibold text-slate-300 block mb-1">Tagline (One sentence summary)</label>
                  <input
                    type="text"
                    value={tagline}
                    onChange={(e) => setTagline(e.target.value)}
                    placeholder="e.g. Real-time wavelength superposition, slit geometries & node dynamics"
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-indigo-500/50"
                  />
                </div>

                {/* Standards Tagging Section */}
                <div className="space-y-2 bg-slate-950/80 border border-slate-800 rounded-2xl p-4">
                  <div className="flex items-center justify-between">
                    <label className="text-[11px] font-semibold text-slate-300 flex items-center gap-1.5">
                      <Tag className="w-3.5 h-3.5 text-amber-400" />
                      <span>Curriculum Standards Alignment (NGSS, AP, IB, State)</span>
                    </label>
                    <span className="text-[10px] text-slate-500">Piped to Gemini AI Lesson Plans</span>
                  </div>

                  {/* Active tags */}
                  <div className="flex flex-wrap gap-1.5 min-h-[32px] p-2 bg-slate-900 border border-slate-800 rounded-xl">
                    {standardsList.length === 0 ? (
                      <span className="text-[11px] text-slate-500 italic">No standards tagged yet. Click quick tags below or type a standard code.</span>
                    ) : (
                      standardsList.map((stdCode) => (
                        <span
                          key={stdCode}
                          className="inline-flex items-center gap-1 text-[11px] font-mono font-bold bg-amber-500/10 text-amber-300 border border-amber-500/20 px-2 py-0.5 rounded-lg"
                        >
                          {stdCode}
                          <button
                            type="button"
                            onClick={() => handleRemoveStandardTag(stdCode)}
                            className="hover:text-rose-400 ml-0.5"
                          >
                            ×
                          </button>
                        </span>
                      ))
                    )}
                  </div>

                  {/* Quick-add available standards */}
                  {availableStandards.length > 0 && (
                    <div className="pt-2 border-t border-slate-800/80 space-y-1.5">
                      <div className="text-[10px] text-slate-400 font-semibold uppercase">1-Click Add From Standards Studio:</div>
                      <div className="flex flex-wrap gap-1.5">
                        {availableStandards.map((std) => {
                          const isAlreadyAdded = standardsList.includes(std.code);
                          return (
                            <button
                              key={std.id}
                              type="button"
                              onClick={() => handleAddStandardTag(std.code)}
                              disabled={isAlreadyAdded}
                              className={`text-[10px] px-2 py-1 rounded-lg font-mono font-bold border transition-all flex items-center gap-1 ${
                                isAlreadyAdded
                                  ? "bg-slate-800/60 text-slate-500 border-slate-700 cursor-not-allowed"
                                  : "bg-slate-900 hover:bg-amber-500/20 text-slate-300 hover:text-amber-300 border-slate-700 cursor-pointer"
                              }`}
                            >
                              <span>{std.code}</span>
                              <span className="text-[9px] opacity-70 font-sans">({std.category})</span>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  )}

                  {/* Manual standard code input */}
                  <div className="flex items-center gap-2 pt-1">
                    <input
                      type="text"
                      value={newStandardInput}
                      onChange={(e) => setNewStandardInput(e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === "Enter") {
                          e.preventDefault();
                          handleAddStandardTag(newStandardInput);
                        }
                      }}
                      placeholder="Add custom standard code (e.g. HS-PS2-1, AP-PHYS-1)..."
                      className="flex-1 bg-slate-900 border border-slate-800 rounded-xl px-3 py-1.5 text-xs text-white focus:outline-none focus:border-amber-500/50"
                    />
                    <button
                      type="button"
                      onClick={() => handleAddStandardTag(newStandardInput)}
                      className="px-3 py-1.5 bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 border border-amber-500/30 text-xs font-bold rounded-xl"
                    >
                      + Add
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="text-[11px] font-semibold text-slate-300 block mb-1">Description</label>
                    <textarea
                      rows={3}
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      placeholder="Explain the physical principles and core learning takeaways..."
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-indigo-500/50"
                    />
                  </div>

                  <div>
                    <label className="text-[11px] font-semibold text-slate-300 block mb-1">
                      Learning Objectives (1 per line)
                    </label>
                    <textarea
                      rows={3}
                      value={learningObjectivesStr}
                      onChange={(e) => setLearningObjectivesStr(e.target.value)}
                      placeholder="Quantify relationship between frequency and wavelength&#10;Observe nodal interference patterns&#10;Verify wave equation"
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-indigo-500/50"
                    />
                  </div>
                </div>
              </div>

              {/* Step 3: Parameter Slider Knobs */}
              <div className="space-y-3 pt-4 border-t border-slate-800">
                <div className="flex items-center justify-between">
                  <div>
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-300 flex items-center gap-2">
                      <span>3. Parameter Slider Controls (PostMessage Binding)</span>
                    </label>
                    <p className="text-[11px] text-slate-500 mt-0.5">
                      Sliders built here automatically transmit real-time variable updates to your HTML applet.
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={handleAddControl}
                    className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-white rounded-xl text-xs font-bold flex items-center gap-1"
                  >
                    <Plus className="w-3.5 h-3.5" /> Add Slider
                  </button>
                </div>

                <div className="space-y-2.5">
                  {controls.map((ctrl, index) => (
                    <div
                      key={index}
                      className="bg-slate-950 border border-slate-800 rounded-2xl p-3 grid grid-cols-1 sm:grid-cols-6 gap-2.5 items-center"
                    >
                      <div className="sm:col-span-2">
                        <label className="text-[10px] text-slate-500 uppercase font-mono">JS Param Key</label>
                        <input
                          type="text"
                          value={ctrl.key}
                          onChange={(e) => handleControlChange(index, "key", e.target.value)}
                          placeholder="frequency"
                          className="w-full bg-slate-900 border border-slate-800 rounded-lg px-2.5 py-1 text-xs text-sky-400 font-mono"
                        />
                      </div>

                      <div className="sm:col-span-2">
                        <label className="text-[10px] text-slate-500 uppercase">Label</label>
                        <input
                          type="text"
                          value={ctrl.label}
                          onChange={(e) => handleControlChange(index, "label", e.target.value)}
                          placeholder="Wave Frequency"
                          className="w-full bg-slate-900 border border-slate-800 rounded-lg px-2.5 py-1 text-xs text-white"
                        />
                      </div>

                      <div className="grid grid-cols-3 gap-1">
                        <div>
                          <label className="text-[9px] text-slate-500">Min</label>
                          <input
                            type="number"
                            value={ctrl.min}
                            onChange={(e) => handleControlChange(index, "min", Number(e.target.value))}
                            className="w-full bg-slate-900 border border-slate-800 rounded-lg px-1.5 py-1 text-xs text-white"
                          />
                        </div>
                        <div>
                          <label className="text-[9px] text-slate-500">Max</label>
                          <input
                            type="number"
                            value={ctrl.max}
                            onChange={(e) => handleControlChange(index, "max", Number(e.target.value))}
                            className="w-full bg-slate-900 border border-slate-800 rounded-lg px-1.5 py-1 text-xs text-white"
                          />
                        </div>
                        <div>
                          <label className="text-[9px] text-slate-500">Step</label>
                          <input
                            type="number"
                            value={ctrl.step}
                            onChange={(e) => handleControlChange(index, "step", Number(e.target.value))}
                            className="w-full bg-slate-900 border border-slate-800 rounded-lg px-1.5 py-1 text-xs text-white"
                          />
                        </div>
                      </div>

                      <div className="flex items-center gap-1.5">
                        <div className="flex-1">
                          <label className="text-[9px] text-slate-500">Unit</label>
                          <input
                            type="text"
                            value={ctrl.unit}
                            onChange={(e) => handleControlChange(index, "unit", e.target.value)}
                            placeholder="Hz"
                            className="w-full bg-slate-900 border border-slate-800 rounded-lg px-1.5 py-1 text-xs text-white"
                          />
                        </div>
                        <button
                          type="button"
                          onClick={() => handleRemoveControl(index)}
                          className="mt-3 p-1.5 text-slate-500 hover:text-rose-400 rounded-lg hover:bg-slate-900"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Step 4: License Type & Pricing Tiers */}
              <div className="space-y-3 pt-4 border-t border-slate-800">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-300 flex items-center gap-2">
                    <DollarSign className="w-4 h-4 text-emerald-400" />
                    <span>4. License Type &amp; Institutional Pricing</span>
                  </label>
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] text-slate-400">License Model:</span>
                    <select
                      value={licenseType}
                      onChange={(e) => setLicenseType(e.target.value)}
                      className="bg-slate-950 border border-slate-700 text-xs text-indigo-300 font-semibold rounded-xl px-2.5 py-1 focus:outline-none focus:border-indigo-500"
                    >
                      <option value="Academic STEM Classroom & Institutional License">Academic STEM Classroom & Institutional License</option>
                      <option value="Open Educational STEM Resource (OER License)">Open Educational STEM Resource (OER License)</option>
                      <option value="District Enterprise STEM Laboratory License">District Enterprise STEM Laboratory License</option>
                      <option value="Custom Educator-Authored Model License">Custom Educator-Authored Model License</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="bg-slate-950 border border-slate-800 rounded-2xl p-3 space-y-1">
                    <div className="text-xs font-bold text-white">Single Teacher License</div>
                    <div className="text-[10px] text-slate-500">1 teacher, up to 180 students</div>
                    <div className="relative mt-2">
                      <span className="text-slate-500 absolute left-3 top-1/2 -translate-y-1/2 text-xs">$</span>
                      <input
                        type="number"
                        value={priceSingle}
                        onChange={(e) => setPriceSingle(Number(e.target.value))}
                        className="w-full pl-7 pr-3 py-1.5 bg-slate-900 border border-slate-800 rounded-xl text-xs text-emerald-400 font-bold"
                      />
                    </div>
                  </div>

                  <div className="bg-slate-950 border border-slate-800 rounded-2xl p-3 space-y-1">
                    <div className="text-xs font-bold text-white">School Department License</div>
                    <div className="text-[10px] text-slate-500">Up to 10 STEM teachers</div>
                    <div className="relative mt-2">
                      <span className="text-slate-500 absolute left-3 top-1/2 -translate-y-1/2 text-xs">$</span>
                      <input
                        type="number"
                        value={priceDept}
                        onChange={(e) => setPriceDept(Number(e.target.value))}
                        className="w-full pl-7 pr-3 py-1.5 bg-slate-900 border border-slate-800 rounded-xl text-xs text-emerald-400 font-bold"
                      />
                    </div>
                  </div>

                  <div className="bg-slate-950 border border-slate-800 rounded-2xl p-3 space-y-1">
                    <div className="text-xs font-bold text-white">District Unlimited License</div>
                    <div className="text-[10px] text-slate-500">District-wide unlimited access</div>
                    <div className="relative mt-2">
                      <span className="text-slate-500 absolute left-3 top-1/2 -translate-y-1/2 text-xs">$</span>
                      <input
                        type="number"
                        value={priceDistrict}
                        onChange={(e) => setPriceDistrict(Number(e.target.value))}
                        className="w-full pl-7 pr-3 py-1.5 bg-slate-900 border border-slate-800 rounded-xl text-xs text-emerald-400 font-bold"
                      />
                    </div>
                  </div>
                </div>

                {/* Creator Lemon Squeezy Payout Destination Account */}
                <div className="bg-slate-950/80 border border-amber-500/30 rounded-2xl p-4 space-y-2.5">
                  <div className="flex items-center justify-between">
                    <label className="text-xs font-bold text-amber-300 flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-amber-400" />
                      <span>Lemon Squeezy Store (Merchant of Record &amp; Payouts)</span>
                    </label>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-300 border border-emerald-500/20">
                      90% Creator Net Revenue Share
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                    <div>
                      <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1">
                        Author / Store Legal Brand Name
                      </label>
                      <input
                        type="text"
                        value={storeName}
                        onChange={(e) => setStoreName(e.target.value)}
                        placeholder="e.g. Dr. Elena Rostova"
                        className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-amber-500"
                      />
                    </div>

                    <div>
                      <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1">
                        Lemon Squeezy Store ID / Slug
                      </label>
                      <input
                        type="text"
                        value={storeId}
                        onChange={(e) => setStoreId(e.target.value)}
                        placeholder="store_stem_faculty_101"
                        className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3 py-2 text-xs text-amber-300 font-mono focus:outline-none focus:border-amber-500"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            /* Live Sandbox Test Tab */
            <div className="space-y-4">
              <div className="flex items-center justify-between bg-slate-950 border border-slate-800 px-4 py-2.5 rounded-2xl">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-xs font-bold text-white">Live Real-Time Sandboxed Runtime</span>
                </div>
                <div className="text-xs text-slate-400">
                  Move the sliders below to verify your HTML app receives the postMessage events
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                <div className="lg:col-span-2 h-[420px] rounded-2xl overflow-hidden border border-slate-800 bg-slate-950">
                  <HtmlAppSimulator
                    htmlContent={importMode === "url" ? undefined : htmlCode}
                    htmlUrl={importMode === "url" ? externalUrl : undefined}
                    params={testParams}
                    title={title || "Preview Simulation"}
                  />
                </div>

                <div className="bg-slate-950 border border-slate-800 rounded-2xl p-4 space-y-4">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300">Live Slider Knobs</h4>
                  <div className="space-y-3.5">
                    {controls.map((c) => (
                      <div key={c.key} className="space-y-1">
                        <div className="flex justify-between text-xs">
                          <span className="text-slate-300 font-medium">{c.label}</span>
                          <span className="text-sky-400 font-mono">
                            {testParams[c.key] ?? c.defaultValue} {c.unit}
                          </span>
                        </div>
                        <input
                          type="range"
                          min={c.min}
                          max={c.max}
                          step={c.step}
                          value={testParams[c.key] ?? c.defaultValue}
                          onChange={(e) =>
                            setTestParams((prev) => ({
                              ...prev,
                              [c.key]: Number(e.target.value),
                            }))
                          }
                          className="w-full accent-sky-500 cursor-pointer h-1.5 bg-slate-800 rounded-lg"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 bg-slate-950 border-t border-slate-800 flex items-center justify-between">
          <div className="text-xs text-slate-500">
            Author: <span className="text-slate-300 font-medium">ndunj123@gmail.com</span> (Master Creator)
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold rounded-xl transition-all"
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={handleSaveSimulation}
              className="px-6 py-2 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-slate-950 text-xs font-black rounded-xl shadow-lg shadow-emerald-500/20 transition-all cursor-pointer flex items-center gap-1.5"
            >
              <CheckCircle2 className="w-4 h-4" />
              <span>{editingSimulation ? "Save Changes" : "Publish to Library"}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
