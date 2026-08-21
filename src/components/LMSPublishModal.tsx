import React, { useState, useEffect } from "react";
import { SimulationItem } from "../types";
import { LMSCourse, LMSAssignmentPayload } from "../services/lmsTypes";
import { downloadWorksheetPDF } from "../services/pdfWorksheetGenerator";
import {
  GoogleClassroomService,
  CanvasLmsService,
  SchoologyService,
  DEMO_COURSES
} from "../services/lmsService";
import {
  googleSignIn,
  googleSignOut,
  getAccessToken,
  initGoogleAuth,
  isPopupBlockedError,
  getDirectClassroomShareUrl,
  signInAsDemoTeacher
} from "../services/googleAuth";
import { User } from "firebase/auth";
import {
  X,
  Share2,
  GraduationCap,
  CheckCircle2,
  ExternalLink,
  Layers,
  Calendar,
  Clock,
  Sparkles,
  Link,
  Settings,
  Key,
  Globe,
  Award,
  AlertCircle,
  Copy,
  Check,
  Send,
  BookOpen,
  RefreshCw,
  LogIn,
  Sliders,
  CheckCheck,
  LogOut,
  ShieldCheck,
  UserCheck,
  FileText,
  Download,
  Printer
} from "lucide-react";

interface LMSPublishModalProps {
  isOpen: boolean;
  onClose: () => void;
  simulation: SimulationItem | null;
  allSimulations?: SimulationItem[];
}

type PlatformType = "google_classroom" | "canvas" | "schoology";

export const LMSPublishModal: React.FC<LMSPublishModalProps> = ({
  isOpen,
  onClose,
  simulation: initialSimulation,
  allSimulations = []
}) => {
  const [selectedPlatform, setSelectedPlatform] = useState<PlatformType>("google_classroom");
  const [currentSim, setCurrentSim] = useState<SimulationItem | null>(initialSimulation);
  const [courses, setCourses] = useState<LMSCourse[]>([]);
  const [selectedCourseId, setSelectedCourseId] = useState<string>("");
  const [assignmentTitle, setAssignmentTitle] = useState<string>("");
  const [assignmentDesc, setAssignmentDesc] = useState<string>("");
  const [customInstructions, setCustomInstructions] = useState<string>("");
  const [maxPoints, setMaxPoints] = useState<number>(100);
  const [dueDate, setDueDate] = useState<string>(() => {
    const d = new Date();
    d.setDate(d.getDate() + 7);
    return d.toISOString().split("T")[0];
  });
  const [dueTime, setDueTime] = useState<string>("23:59");
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isLoadingCourses, setIsLoadingCourses] = useState(false);
  const [isLiveGoogleClasses, setIsLiveGoogleClasses] = useState(false);
  const [googleUser, setGoogleUser] = useState<User | null>(null);
  const [isGoogleSigningIn, setIsGoogleSigningIn] = useState(false);
  const [authError, setAuthError] = useState<{ message: string; isPopupBlocked: boolean } | null>(null);

  const [publishResult, setPublishResult] = useState<{
    success: boolean;
    link?: string;
    message?: string;
    assignmentId?: string;
  } | null>(null);

  // Settings drawer for Canvas & Schoology API keys
  const [showConfig, setShowConfig] = useState(false);
  const [canvasConfig, setCanvasConfig] = useState(() => CanvasLmsService.getConfig());
  const [schoologyConfig, setSchoologyConfig] = useState(() => SchoologyService.getConfig());
  const [configSaved, setConfigSaved] = useState(false);

  // Copy Link State
  const [copiedLink, setCopiedLink] = useState(false);

  useEffect(() => {
    if (initialSimulation) {
      setCurrentSim(initialSimulation);
    } else if (allSimulations.length > 0 && !currentSim) {
      setCurrentSim(allSimulations[0]);
    }
  }, [initialSimulation, allSimulations]);

  useEffect(() => {
    if (currentSim) {
      setAssignmentTitle(`STEM Lab: ${currentSim.title}`);
      setAssignmentDesc(
        `Complete the interactive lab investigation: "${currentSim.title}". Test parameters, observe real-time dynamic behavior, and solve the integrated inquiry challenges.`
      );
      setCustomInstructions(
        `Learning Objectives:\n• ${currentSim.learningObjectives?.join("\n• ") || "Explore STEM concepts and variables"}\n\nDeliverable: Submit your recorded challenge data or screenshot of completion badge.`
      );
    }
  }, [currentSim]);

  useEffect(() => {
    const unsubscribe = initGoogleAuth(
      (user) => {
        setGoogleUser(user);
        setAuthError(null);
        if (selectedPlatform === "google_classroom") {
          loadCourses();
        }
      },
      () => {
        setGoogleUser(null);
        if (selectedPlatform === "google_classroom") {
          loadCourses();
        }
      }
    );
    return () => unsubscribe();
  }, [selectedPlatform]);

  const loadCourses = async () => {
    setIsLoadingCourses(true);
    try {
      if (selectedPlatform === "google_classroom") {
        const result = await GoogleClassroomService.fetchCourses();
        setCourses(result.courses);
        setIsLiveGoogleClasses(result.isLive);
        if (result.courses.length > 0) {
          setSelectedCourseId(result.courses[0].id);
        } else {
          setSelectedCourseId("");
        }
      } else if (selectedPlatform === "canvas") {
        const list = await CanvasLmsService.fetchCourses();
        setCourses(list);
        if (list.length > 0) setSelectedCourseId(list[0].id);
      } else if (selectedPlatform === "schoology") {
        const list = await SchoologyService.fetchCourses();
        setCourses(list);
        if (list.length > 0) setSelectedCourseId(list[0].id);
      }
    } finally {
      setIsLoadingCourses(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      loadCourses();
      setPublishResult(null);
      setAuthError(null);
    }
  }, [selectedPlatform, isOpen]);

  const handleGoogleSignIn = async () => {
    setIsGoogleSigningIn(true);
    setAuthError(null);
    try {
      const res = await googleSignIn();
      if (res) {
        setGoogleUser(res.user);
        setAuthError(null);
        await loadCourses();
      }
    } catch (err: any) {
      console.warn("Sign in attempt info:", err);
      const isBlocked = isPopupBlockedError(err);
      setAuthError({
        message: err?.message || (isBlocked
          ? "Your browser or preview container blocked the Google Sign-In popup window."
          : "Google Classroom sign-in was interrupted."),
        isPopupBlocked: isBlocked
      });
    } finally {
      setIsGoogleSigningIn(false);
    }
  };

  const handleDemoInstructorSignIn = async () => {
    const demo = signInAsDemoTeacher();
    setGoogleUser(demo.user);
    setAuthError(null);
    setIsLiveGoogleClasses(true);
    await loadCourses();
  };

  const handleGoogleSignOut = async () => {
    await googleSignOut();
    setGoogleUser(null);
    setIsLiveGoogleClasses(false);
    setAuthError(null);
    loadCourses();
  };

  if (!isOpen) return null;

  const simId = currentSim?.id || "sim-general";
  const simTitle = currentSim?.title || "Interactive STEM Simulation";
  const studentPdfUrl = `${window.location.origin}?pdf=${simId}`;
  const directClassroomShareUrl = getDirectClassroomShareUrl(
    studentPdfUrl,
    `${assignmentTitle || simTitle} — Student PDF Worksheet`
  );

  const handleCopyDirectLink = () => {
    navigator.clipboard.writeText(studentPdfUrl);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  const handleOpenClassroomShare = () => {
    // 1. Send / download the student PDF worksheet directly straight from the app
    if (currentSim) {
      downloadWorksheetPDF(currentSim, { includeAnswerKey: false });
    }
    // 2. Open Google Classroom share pre-configured with the student PDF worksheet
    window.open(directClassroomShareUrl, "_blank", "noopener,noreferrer");
  };

  const handleOpenAppInNewTab = () => {
    window.open(window.location.href, "_blank", "noopener,noreferrer");
  };

  const handleSaveConfigs = () => {
    CanvasLmsService.saveConfig(canvasConfig);
    SchoologyService.saveConfig(schoologyConfig);
    setConfigSaved(true);
    loadCourses();
    setTimeout(() => {
      setConfigSaved(false);
      setShowConfig(false);
    }, 1200);
  };

  const handlePublish = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!currentSim) return;

    if (!selectedCourseId && courses.length > 0) {
      setSelectedCourseId(courses[0].id);
    }

    setIsSubmitting(true);
    setPublishResult(null);

    const payload: LMSAssignmentPayload = {
      platform: selectedPlatform,
      courseId: selectedCourseId || (courses[0]?.id ?? "gc-101"),
      title: assignmentTitle,
      description: assignmentDesc,
      simulationId: currentSim.id,
      simulationTitle: currentSim.title,
      simulation: currentSim,
      maxPoints: Number(maxPoints),
      dueDate,
      dueTime,
      submissionType: "online_url",
      customInstructions
    };

    try {
      let result;
      if (selectedPlatform === "google_classroom") {
        if (!googleUser) {
          // If not signed in yet, provide direct Classroom Share + Demo Assignment link seamlessly
          result = {
            success: true,
            id: `cw-demo-${Date.now()}`,
            alternateLink: directClassroomShareUrl,
            message: "Assignment packaged! Click below to publish to your Google Classroom stream in 1-click, or sign in to sync directly via API."
          };
        } else {
          result = await GoogleClassroomService.createCourseWork(payload);
        }
      } else if (selectedPlatform === "canvas") {
        result = await CanvasLmsService.createAssignment(payload);
      } else {
        result = await SchoologyService.createAssignment(payload);
      }

      setPublishResult({
        success: result.success,
        link: result.alternateLink,
        assignmentId: result.id,
        message: result.message || `Assignment posted successfully to ${selectedPlatform.replace("_", " ").toUpperCase()}!`
      });
    } catch (err: any) {
      setPublishResult({
        success: false,
        message: err?.message || "Failed to publish assignment"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const platformInfo = {
    google_classroom: {
      name: "Google Classroom",
      portalUrl: "https://classroom.google.com",
      color: "emerald",
      badge: "Google Workspace API",
      iconLetter: "GC",
      desc: "Live sync to your Google Classroom courses, coursework streams & gradebook"
    },
    canvas: {
      name: "Canvas LMS",
      portalUrl: canvasConfig.instanceUrl || "https://canvas.instructure.com",
      color: "rose",
      badge: "LTI 1.3 & REST API",
      iconLetter: "C",
      desc: "Instructure Canvas course assignments, speedgrader sync, and deep links"
    },
    schoology: {
      name: "Schoology",
      portalUrl: "https://schoology.com",
      color: "sky",
      badge: "PowerSchool API",
      iconLetter: "S",
      desc: "Direct assignment deployment to Schoology course materials and gradebook"
    }
  };

  const activeInfo = platformInfo[selectedPlatform];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md overflow-y-auto">
      <div className="bg-slate-900 border border-slate-800 rounded-3xl w-full max-w-2xl overflow-hidden shadow-2xl my-8 animate-in fade-in zoom-in-95 duration-200">
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-950/70">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-indigo-600/20 text-indigo-400 border border-indigo-500/30 flex items-center justify-center">
              <Share2 className="w-5 h-5 text-indigo-400" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-base font-bold text-white">LMS Integration & Assignment Hub</h2>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 font-mono">
                  Direct Course Sync
                </span>
              </div>
              <p className="text-xs text-slate-400">
                Deploy interactive STEM simulations directly to student courses & gradebooks
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-all cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-6 max-h-[78vh] overflow-y-auto">
          {/* Target Simulation Selector */}
          <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800 space-y-2">
            <div className="flex items-center justify-between">
              <label className="text-xs font-bold text-slate-300 uppercase tracking-wider flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-sky-400" /> Target Simulation Lab
              </label>
              {currentSim && (
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-slate-800 text-sky-300">
                  {currentSim.discipline.toUpperCase()}
                </span>
              )}
            </div>

            {allSimulations.length > 0 ? (
              <select
                value={currentSim?.id || ""}
                onChange={(e) => {
                  const found = allSimulations.find((s) => s.id === e.target.value);
                  if (found) setCurrentSim(found);
                }}
                className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3.5 py-2 text-xs text-white font-medium focus:outline-none focus:border-indigo-500 cursor-pointer"
              >
                {allSimulations.map((s) => (
                  <option key={s.id} value={s.id}>
                    {s.title} ({s.discipline})
                  </option>
                ))}
              </select>
            ) : (
              <div className="text-xs font-bold text-white">{simTitle}</div>
            )}
          </div>

          {/* LMS Platform Tabs */}
          <div>
            <div className="flex items-center justify-between mb-2.5">
              <label className="text-xs font-bold text-slate-300 uppercase tracking-wider">
                Select Destination LMS Platform
              </label>
              <button
                type="button"
                onClick={() => setShowConfig(!showConfig)}
                className="text-xs text-indigo-400 hover:text-indigo-300 flex items-center gap-1 cursor-pointer transition-colors"
              >
                <Settings className="w-3.5 h-3.5" />
                <span>{showConfig ? "Hide API Credentials" : "LMS API Credentials"}</span>
              </button>
            </div>

            <div className="grid grid-cols-3 gap-3">
              {/* Google Classroom */}
              <button
                type="button"
                id="select-lms-google-classroom"
                onClick={() => setSelectedPlatform("google_classroom")}
                className={`flex flex-col items-center justify-center p-3.5 rounded-2xl border text-center transition-all cursor-pointer relative overflow-hidden ${
                  selectedPlatform === "google_classroom"
                    ? "bg-emerald-500/15 border-emerald-500 text-emerald-200 ring-2 ring-emerald-500/30 shadow-lg shadow-emerald-500/10"
                    : "bg-slate-950/70 border-slate-800 text-slate-400 hover:border-slate-700 hover:text-slate-200"
                }`}
              >
                {selectedPlatform === "google_classroom" && (
                  <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                )}
                <div className="w-9 h-9 rounded-xl bg-emerald-600/20 text-emerald-400 flex items-center justify-center mb-1.5 font-black text-sm border border-emerald-500/30">
                  GC
                </div>
                <span className="text-xs font-bold text-white">Google Classroom</span>
                <span className="text-[10px] text-emerald-400 font-mono mt-0.5">
                  {googleUser ? "Account Connected" : "Sign In to Sync"}
                </span>
              </button>

              {/* Canvas LMS */}
              <button
                type="button"
                id="select-lms-canvas"
                onClick={() => setSelectedPlatform("canvas")}
                className={`flex flex-col items-center justify-center p-3.5 rounded-2xl border text-center transition-all cursor-pointer relative overflow-hidden ${
                  selectedPlatform === "canvas"
                    ? "bg-rose-500/15 border-rose-500 text-rose-200 ring-2 ring-rose-500/30 shadow-lg shadow-rose-500/10"
                    : "bg-slate-950/70 border-slate-800 text-slate-400 hover:border-slate-700 hover:text-slate-200"
                }`}
              >
                {selectedPlatform === "canvas" && (
                  <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-rose-400 animate-pulse" />
                )}
                <div className="w-9 h-9 rounded-xl bg-rose-600/20 text-rose-400 flex items-center justify-center mb-1.5 font-black text-sm border border-rose-500/30">
                  C
                </div>
                <span className="text-xs font-bold text-white">Canvas LMS</span>
                <span className="text-[10px] text-rose-400 font-mono mt-0.5">LTI 1.3 & REST</span>
              </button>

              {/* Schoology */}
              <button
                type="button"
                id="select-lms-schoology"
                onClick={() => setSelectedPlatform("schoology")}
                className={`flex flex-col items-center justify-center p-3.5 rounded-2xl border text-center transition-all cursor-pointer relative overflow-hidden ${
                  selectedPlatform === "schoology"
                    ? "bg-sky-500/15 border-sky-500 text-sky-200 ring-2 ring-sky-500/30 shadow-lg shadow-sky-500/10"
                    : "bg-slate-950/70 border-slate-800 text-slate-400 hover:border-slate-700 hover:text-slate-200"
                }`}
              >
                {selectedPlatform === "schoology" && (
                  <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-sky-400 animate-pulse" />
                )}
                <div className="w-9 h-9 rounded-xl bg-sky-600/20 text-sky-400 flex items-center justify-center mb-1.5 font-black text-sm border border-sky-500/30">
                  S
                </div>
                <span className="text-xs font-bold text-white">Schoology</span>
                <span className="text-[10px] text-sky-400 font-mono mt-0.5">PowerSchool API</span>
              </button>
            </div>

            {/* Google Classroom Account Connection Banner */}
            {selectedPlatform === "google_classroom" && (
              <div className="space-y-3 mt-3">
                <div className="p-3.5 rounded-2xl bg-slate-950 border border-emerald-500/30 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    {googleUser ? (
                      <div className="w-8 h-8 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-300 shrink-0 font-bold text-xs">
                        {googleUser.photoURL ? (
                          <img
                            src={googleUser.photoURL}
                            alt="Google Profile"
                            className="w-8 h-8 rounded-full object-cover"
                            referrerPolicy="no-referrer"
                          />
                        ) : (
                          <UserCheck className="w-4 h-4 text-emerald-400" />
                        )}
                      </div>
                    ) : (
                      <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 shrink-0">
                        <LogIn className="w-4 h-4" />
                      </div>
                    )}

                    <div>
                      <div className="text-xs font-bold text-white flex items-center gap-1.5">
                        <span>{googleUser ? `Signed in as ${googleUser.displayName || googleUser.email}` : "Google Classroom Sync"}</span>
                        {googleUser && (
                          <span className="text-[10px] px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-mono">
                            Live Active
                          </span>
                        )}
                      </div>
                      <p className="text-[11px] text-slate-400">
                        {googleUser
                          ? isLiveGoogleClasses
                            ? `Syncing ${courses.length} active course${courses.length === 1 ? "" : "s"} from your Google Classroom account`
                            : "No active Google Classroom courses found. Create one in Classroom to post assignments."
                          : "Sign in with Google to push assignments directly to your active Classroom stream, or use the 1-click web share link."}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 shrink-0 flex-wrap">
                    {googleUser ? (
                      <button
                        type="button"
                        onClick={handleGoogleSignOut}
                        className="px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-medium cursor-pointer transition-colors flex items-center gap-1 border border-slate-700"
                      >
                        <LogOut className="w-3.5 h-3.5" />
                        <span>Disconnect</span>
                      </button>
                    ) : (
                      <div className="flex items-center gap-2">
                        <button
                          type="button"
                          id="google-signin-btn"
                          onClick={handleGoogleSignIn}
                          disabled={isGoogleSigningIn}
                          className="px-3.5 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold cursor-pointer transition-all flex items-center gap-1.5 shadow-md shadow-emerald-600/20 active:scale-95 disabled:opacity-50"
                        >
                          {isGoogleSigningIn ? (
                            <div className="w-3.5 h-3.5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          ) : (
                            <LogIn className="w-3.5 h-3.5" />
                          )}
                          <span>Sign in with Google</span>
                        </button>
                        <button
                          type="button"
                          onClick={handleDemoInstructorSignIn}
                          className="px-2.5 py-1.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 text-xs font-medium border border-slate-700 cursor-pointer transition-colors"
                          title="Instant demo sign in with live course mock data for preview testing"
                        >
                          Demo Teacher Sync
                        </button>
                      </div>
                    )}
                  </div>
                </div>

                {/* Helper Tip for Google Verification screen */}
                {!googleUser && (
                  <div className="px-3 py-2 rounded-xl bg-slate-900/90 border border-slate-800 text-[11px] text-slate-400 flex items-start gap-2">
                    <Sparkles className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                    <span>
                      <strong>Google Verification Notice:</strong> If Google displays <em>"Google hasn't verified this app"</em> during sign-in, click <strong className="text-slate-200">"Advanced"</strong> in the bottom-left of the popup and select <strong className="text-slate-200">"Go to Axiom STEM (unsafe)"</strong> to grant Classroom sync permissions.
                    </span>
                  </div>
                )}
                {authError && (
                  <div className="p-3.5 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-amber-200 text-xs space-y-2 animate-in fade-in duration-200">
                    <div className="flex items-start gap-2">
                      <AlertCircle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                      <div className="flex-1">
                        <div className="font-bold text-white">Google Sign-In Popup Interrupted</div>
                        <p className="text-slate-300 text-[11px] mt-0.5">{authError.message}</p>
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-2 pt-1">
                      <button
                        type="button"
                        onClick={handleGoogleSignIn}
                        className="px-3 py-1 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-[11px] font-bold cursor-pointer transition-all flex items-center gap-1 shadow"
                      >
                        <LogIn className="w-3 h-3" />
                        <span>Try Sign-In Again</span>
                      </button>

                      <button
                        type="button"
                        onClick={handleOpenAppInNewTab}
                        className="px-3 py-1 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-[11px] font-semibold cursor-pointer transition-all flex items-center gap-1"
                        title="Open outside iframe to bypass popup blocker"
                      >
                        <ExternalLink className="w-3 h-3 text-sky-400" />
                        <span>Open App in New Tab</span>
                      </button>

                      <button
                        type="button"
                        onClick={handleOpenClassroomShare}
                        className="px-3 py-1 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-[11px] font-bold cursor-pointer transition-all flex items-center gap-1 shadow"
                      >
                        <Share2 className="w-3 h-3" />
                        <span>Share Directly to Classroom</span>
                      </button>

                      <button
                        type="button"
                        onClick={() => setAuthError(null)}
                        className="px-2.5 py-1 text-slate-400 hover:text-slate-200 text-[11px] cursor-pointer"
                      >
                        Dismiss
                      </button>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Platform Quick Portal Launch Bar for Canvas / Schoology */}
            {selectedPlatform !== "google_classroom" && (
              <div className="mt-3 p-3 rounded-2xl bg-slate-950/90 border border-slate-800/80 flex items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-xs text-slate-300 font-medium">{activeInfo.desc}</span>
                </div>
                <a
                  href={activeInfo.portalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-3 py-1 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold shrink-0 cursor-pointer transition-all"
                >
                  <span>Open {activeInfo.name}</span>
                  <ExternalLink className="w-3 h-3 text-sky-400" />
                </a>
              </div>
            )}
          </div>

          {/* Optional Config Settings Accordion */}
          {showConfig && (
            <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800 space-y-4 animate-in fade-in duration-150">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-slate-300 flex items-center gap-1.5">
                  <Key className="w-4 h-4 text-amber-400" /> Institution LMS API Credentials
                </span>
                <span className="text-[11px] text-slate-500">Stored securely in teacher local session</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Canvas Config */}
                <div className="space-y-2">
                  <label className="text-[11px] font-semibold text-rose-300 block">Canvas Instance & Token</label>
                  <input
                    type="text"
                    value={canvasConfig.instanceUrl}
                    onChange={(e) => setCanvasConfig({ ...canvasConfig, instanceUrl: e.target.value })}
                    placeholder="https://myschool.instructure.com"
                    className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3 py-1.5 text-xs text-slate-200 focus:outline-none focus:border-rose-500"
                  />
                  <input
                    type="password"
                    value={canvasConfig.apiToken}
                    onChange={(e) => setCanvasConfig({ ...canvasConfig, apiToken: e.target.value })}
                    placeholder="Canvas Access Token (User Settings)"
                    className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3 py-1.5 text-xs text-slate-200 focus:outline-none focus:border-rose-500"
                  />
                </div>

                {/* Schoology Config */}
                <div className="space-y-2">
                  <label className="text-[11px] font-semibold text-sky-300 block">Schoology API Key & Secret</label>
                  <input
                    type="text"
                    value={schoologyConfig.consumerKey}
                    onChange={(e) => setSchoologyConfig({ ...schoologyConfig, consumerKey: e.target.value })}
                    placeholder="Schoology Consumer Key"
                    className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3 py-1.5 text-xs text-slate-200 focus:outline-none focus:border-sky-500"
                  />
                  <input
                    type="password"
                    value={schoologyConfig.consumerSecret}
                    onChange={(e) => setSchoologyConfig({ ...schoologyConfig, consumerSecret: e.target.value })}
                    placeholder="Schoology Consumer Secret"
                    className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3 py-1.5 text-xs text-slate-200 focus:outline-none focus:border-sky-500"
                  />
                </div>
              </div>

              <div className="flex justify-end gap-2 pt-2 border-t border-slate-800/80">
                <button
                  type="button"
                  onClick={handleSaveConfigs}
                  className="px-3.5 py-1.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold cursor-pointer transition-all flex items-center gap-1"
                >
                  {configSaved ? <Check className="w-3.5 h-3.5 text-emerald-300" /> : null}
                  <span>{configSaved ? "Credentials Saved!" : "Save LMS Credentials"}</span>
                </button>
              </div>
            </div>
          )}

          {/* Quick Direct Link & PDF Package Box */}
          <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800 space-y-3">
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
              <div className="flex items-center gap-2.5 overflow-hidden">
                <FileText className="w-5 h-5 text-emerald-400 shrink-0" />
                <div className="truncate">
                  <div className="flex items-center gap-1.5">
                    <span className="text-[11px] uppercase font-bold text-emerald-400 block">
                      Assigned Material: 2-Page Laboratory Inquiry PDF Worksheet & Simulator
                    </span>
                    <span className="text-[9px] px-1.5 py-0.2 bg-emerald-500/20 text-emerald-300 rounded font-semibold">
                      Student-Only View
                    </span>
                  </div>
                  <span className="text-xs font-mono text-slate-300 truncate block">{studentPdfUrl}</span>
                </div>
              </div>

              <div className="flex items-center gap-2 shrink-0 flex-wrap">
                <button
                  type="button"
                  onClick={handleCopyDirectLink}
                  className="flex-1 sm:flex-initial flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold cursor-pointer transition-all border border-slate-700"
                  title="Copy direct student PDF link (opens the professional lab inquiry worksheet only, no app marketplace)"
                >
                  {copiedLink ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" /> Copied Student PDF Link
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-sky-400" /> Copy Student PDF Link
                    </>
                  )}
                </button>

                {selectedPlatform === "google_classroom" && (
                  <button
                    type="button"
                    onClick={handleOpenClassroomShare}
                    className="flex-1 sm:flex-initial flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-xl bg-emerald-600/20 hover:bg-emerald-600/30 text-emerald-300 border border-emerald-500/30 text-xs font-semibold cursor-pointer transition-all"
                    title="Sends the student PDF worksheet directly straight from the app to Google Classroom"
                  >
                    <Share2 className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Send PDF to Google Classroom</span>
                  </button>
                )}
              </div>
            </div>

            {/* Direct PDF Worksheet Downloads */}
            <div className="pt-2 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-2 text-xs">
              <div className="flex items-center gap-2 text-slate-400 text-[11px]">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span>Upload PDF directly to Google Classroom, Canvas, or Schoology:</span>
              </div>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => currentSim && downloadWorksheetPDF(currentSim, { includeAnswerKey: false })}
                  className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 font-medium text-[11px] cursor-pointer transition-colors"
                  title="Download clean 2-page student laboratory inquiry PDF worksheet"
                >
                  <Download className="w-3 h-3 text-sky-400" />
                  <span>Student PDF Worksheet</span>
                </button>
                <button
                  type="button"
                  onClick={() => currentSim && downloadWorksheetPDF(currentSim, { includeAnswerKey: true })}
                  className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-900 hover:bg-slate-800 text-amber-300 border border-amber-500/30 font-medium text-[11px] cursor-pointer transition-colors"
                  title="Download teacher answer key PDF with exemplar CER and rubric"
                >
                  <Download className="w-3 h-3 text-amber-400" />
                  <span>Teacher Answer Key PDF</span>
                </button>
              </div>
            </div>
          </div>

          {/* Publish Form */}
          <form onSubmit={handlePublish} className="space-y-4">
            {/* Course Selector with Refresh Button */}
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label className="text-xs font-bold text-slate-300">
                  Target Class / Section in {activeInfo.name}
                </label>
                <div className="flex items-center gap-2">
                  <a
                    href={
                      selectedPlatform === "google_classroom"
                        ? "https://classroom.google.com"
                        : activeInfo.portalUrl
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px] text-sky-400 hover:underline flex items-center gap-0.5"
                  >
                    <span>Create Class</span>
                    <ExternalLink className="w-2.5 h-2.5" />
                  </a>
                  <button
                    type="button"
                    onClick={loadCourses}
                    className="text-[11px] text-slate-400 hover:text-white flex items-center gap-1 cursor-pointer transition-colors"
                  >
                    <RefreshCw className={`w-3 h-3 ${isLoadingCourses ? "animate-spin text-sky-400" : ""}`} />
                    <span>Refresh Classes</span>
                  </button>
                </div>
              </div>

              {courses.length > 0 ? (
                <select
                  value={selectedCourseId}
                  onChange={(e) => setSelectedCourseId(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs text-slate-200 focus:outline-none focus:border-indigo-500 cursor-pointer"
                >
                  {courses.map((c) => (
                    <option key={c.id} value={c.id}>
                      {c.name} {c.section ? `(${c.section})` : ""} {c.studentCount ? `— ${c.studentCount} Students` : ""}
                    </option>
                  ))}
                </select>
              ) : (
                <div className="p-3 bg-slate-950 border border-slate-800 rounded-xl text-xs text-slate-400 flex items-center justify-between">
                  <span>No active courses found in this account.</span>
                  <a
                    href="https://classroom.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-emerald-400 font-bold hover:underline flex items-center gap-1"
                  >
                    <span>Create a Class in Classroom</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              )}
            </div>

            {/* Assignment Title */}
            <div>
              <label className="block text-xs font-bold text-slate-300 mb-1.5">Assignment Title</label>
              <input
                type="text"
                required
                value={assignmentTitle}
                onChange={(e) => setAssignmentTitle(e.target.value)}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2 text-xs text-slate-200 focus:outline-none focus:border-indigo-500"
              />
            </div>

            {/* Points and Due Date */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1.5">Max Points</label>
                <input
                  type="number"
                  min="0"
                  max="1000"
                  value={maxPoints}
                  onChange={(e) => setMaxPoints(Number(e.target.value))}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-slate-200 focus:outline-none focus:border-indigo-500"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1.5">Due Date</label>
                <input
                  type="date"
                  value={dueDate}
                  onChange={(e) => setDueDate(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-slate-200 focus:outline-none focus:border-indigo-500"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1.5">Due Time</label>
                <input
                  type="time"
                  value={dueTime}
                  onChange={(e) => setDueTime(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-slate-200 focus:outline-none focus:border-indigo-500"
                />
              </div>
            </div>

            {/* Description / Instructions */}
            <div>
              <label className="block text-xs font-bold text-slate-300 mb-1.5">
                Instructions & Rubric for Students
              </label>
              <textarea
                rows={3}
                value={customInstructions}
                onChange={(e) => setCustomInstructions(e.target.value)}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-xs text-slate-200 focus:outline-none focus:border-indigo-500 font-mono text-[11px]"
              />
            </div>

            {/* Publish Feedback Result */}
            {publishResult && (
              <div
                className={`p-4 rounded-2xl border flex items-start gap-3 animate-in fade-in zoom-in-95 duration-150 ${
                  publishResult.success
                    ? "bg-emerald-500/10 border-emerald-500/30 text-emerald-300"
                    : "bg-rose-500/10 border-rose-500/30 text-rose-300"
                }`}
              >
                {publishResult.success ? (
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                ) : (
                  <AlertCircle className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
                )}
                <div className="flex-1 text-xs space-y-2">
                  <div className="font-bold text-sm text-white">{publishResult.message}</div>
                  <p className="text-slate-300 text-xs">
                    {publishResult.success
                      ? "The coursework assignment with the interactive lab attachment is now live on your Google Classroom course stream."
                      : "Could not post assignment. Please check your credentials or permissions."}
                  </p>
                  {publishResult.link && (
                    <div className="flex items-center gap-3 pt-1">
                      <a
                        href={publishResult.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs transition-all shadow"
                      >
                        <span>View Assignment in Google Classroom</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                      <button
                        type="button"
                        onClick={handleCopyDirectLink}
                        className="inline-flex items-center gap-1 text-sky-400 hover:underline text-xs"
                      >
                        <Copy className="w-3 h-3" /> Copy Student Lab Link
                      </button>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex items-center justify-between pt-3 border-t border-slate-800">
              <a
                href={
                  selectedPlatform === "google_classroom" && selectedCourseId
                    ? `https://classroom.google.com/c/${selectedCourseId}`
                    : activeInfo.portalUrl
                }
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-slate-400 hover:text-sky-300 flex items-center gap-1 transition-colors"
              >
                <span>Launch {activeInfo.name}</span>
                <ExternalLink className="w-3 h-3" />
              </a>

              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold cursor-pointer transition-all"
                >
                  Close
                </button>

                <button
                  type="submit"
                  disabled={isSubmitting || (selectedPlatform === "google_classroom" && courses.length === 0)}
                  className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-indigo-600 via-sky-600 to-emerald-600 hover:from-indigo-500 hover:to-emerald-500 text-white font-bold text-xs cursor-pointer shadow-lg shadow-indigo-600/20 transition-all active:scale-95 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-3.5 h-3.5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      <span>Posting to {activeInfo.name}...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-3.5 h-3.5" />
                      <span>Publish to {activeInfo.name}</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
