import React, { useState, useMemo, useEffect } from "react";
import { SimulationItem, CartItem, LicenseTier, STEMDiscipline, TeacherPurchasedSimulation, CurriculumStandard, UserProfile } from "./types";
import { DEFAULT_STANDARDS, STEM_SIMULATIONS } from "./data/simulations";
import { Header } from "./components/Header";
import { HeroBanner } from "./components/HeroBanner";
import { SubjectFilterBar } from "./components/SubjectFilterBar";
import { SimulationCard } from "./components/SimulationCard";
import { InteractivePlayer } from "./components/InteractivePlayer";
import { LessonPlanGeneratorModal } from "./components/LessonPlanGeneratorModal";
import { CartDrawer } from "./components/CartDrawer";
import { CheckoutModal } from "./components/CheckoutModal";
import { TeacherDashboard } from "./components/TeacherDashboard";
import { QuoteRequestModal } from "./components/QuoteRequestModal";
import { WhyTeachersLoveSection } from "./components/WhyTeachersLoveSection";
import { HtmlAppImporterModal } from "./components/HtmlAppImporterModal";
import { StandardsManagerModal } from "./components/StandardsManagerModal";
import { LMSPublishModal } from "./components/LMSPublishModal";
import { WorksheetGeneratorModal } from "./components/WorksheetGeneratorModal";
import { StudentWorksheetView } from "./components/StudentWorksheetView";
import { AuthModal } from "./components/AuthModal";
import { AppAuthGate } from "./components/AppAuthGate";
import { PaywallModal } from "./components/PaywallModal";
import { LemonSqueezyAccountModal } from "./components/LemonSqueezyAccountModal";
import { StripeAccountModal } from "./components/StripeAccountModal";
import { recordSimulationPlay } from "./services/analyticsService";
import {
  getSavedUserProfile,
  subscribeToAuthChanges,
  logOutUser
} from "./services/authService";
import {
  Atom,
  Code2,
  PlusCircle,
  Sparkles,
  BookOpen,
  ShieldCheck,
  Upload,
  Lock,
  Unlock,
  FolderDown,
  Layers,
  FileCode,
  RotateCcw,
  Share2,
  LogIn,
  CreditCard,
  DollarSign
} from "lucide-react";

export default function App() {
  const [activeView, setActiveView] = useState<"marketplace" | "dashboard">("marketplace");
  const [selectedDiscipline, setSelectedDiscipline] = useState<STEMDiscipline | "all">("all");
  const [selectedGrade, setSelectedGrade] = useState<string>("all");
  const [sortBy, setSortBy] = useState<string>("popular");
  const [searchQuery, setSearchQuery] = useState("");

  // Master Creator Mode state
  const [isCreatorMode, setIsCreatorMode] = useState<boolean>(true);

  // Authentication State
  const [currentUser, setCurrentUser] = useState<UserProfile | null>(() => getSavedUserProfile());
  const [isAuthModalOpen, setIsAuthModalOpen] = useState<boolean>(false);
  const [authModalTab, setAuthModalTab] = useState<"signin" | "signup">("signin");

  // Subscribe to Firebase Auth and local session changes
  useEffect(() => {
    const unsubscribe = subscribeToAuthChanges((user) => {
      setCurrentUser(user);
      if (user?.role === "creator" || user?.email?.toLowerCase().includes("ndunj123@gmail.com")) {
        setIsCreatorMode(true);
      }
    });
    return () => unsubscribe();
  }, []);

  const handleAuthSuccess = (user: UserProfile) => {
    setCurrentUser(user);
    if (user.role === "creator" || user.email.toLowerCase().includes("ndunj123@gmail.com")) {
      setIsCreatorMode(true);
    }
  };

  const handleSignOut = async () => {
    await logOutUser();
    setCurrentUser(null);
  };

  // Check URL query parameters for direct student worksheet link (Google Classroom / Canvas / Schoology / 1-Click share)
  const [studentWorksheetSimId, setStudentWorksheetSimId] = useState<string | null>(() => {
    try {
      const params = new URLSearchParams(window.location.search);
      return params.get("worksheet") || params.get("pdf") || params.get("lab") || null;
    } catch {
      return null;
    }
  });

  // Modals and Drawers
  const [activeSimForPlayer, setActiveSimForPlayer] = useState<SimulationItem | null>(null);
  const [activeSimForLessonPlan, setActiveSimForLessonPlan] = useState<SimulationItem | null>(null);
  const [activeSimForWorksheet, setActiveSimForWorksheet] = useState<SimulationItem | null>(null);
  const [isWorksheetModalOpen, setIsWorksheetModalOpen] = useState(false);
  const [activeSimForLMS, setActiveSimForLMS] = useState<SimulationItem | null>(null);
  const [isLMSModalOpen, setIsLMSModalOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [isHtmlImporterOpen, setIsHtmlImporterOpen] = useState(false);
  const [isStandardsModalOpen, setIsStandardsModalOpen] = useState(false);
  const [isLemonSqueezyModalOpen, setIsLemonSqueezyModalOpen] = useState(false);
  const [editingSim, setEditingSim] = useState<SimulationItem | null>(null);

  // Paywall & Feature Protection Modal
  const [isPaywallOpen, setIsPaywallOpen] = useState<boolean>(false);
  const [paywallSim, setPaywallSim] = useState<SimulationItem | null>(null);
  const [paywallFeature, setPaywallFeature] = useState<"lms" | "popout" | "copy" | "worksheet" | "source">("lms");

  // Creator's Standards Repository
  const [standards, setStandards] = useState<CurriculumStandard[]>(() => {
    try {
      const saved = localStorage.getItem("axiom_curriculum_standards");
      return saved ? JSON.parse(saved) : DEFAULT_STANDARDS;
    } catch {
      return DEFAULT_STANDARDS;
    }
  });

  // Save standards to localStorage
  useEffect(() => {
    try {
      localStorage.setItem("axiom_curriculum_standards", JSON.stringify(standards));
    } catch (e) {
      console.error("Failed to persist standards:", e);
    }
  }, [standards]);

  // Creator's Uploaded Simulations Repository (guarantees all STEM apps including Quantum EM Spectrum, Wheel & Axle, Bridge Circuits, Quadratic Graph, 3D IUPAC Chemistry, 3D Conic Calculus, Land & Sea Breeze, Electric Circuits, and Micrometer Screw Gauge are always loaded)
  const [customSimulations, setCustomSimulations] = useState<SimulationItem[]>(() => {
    try {
      const saved = localStorage.getItem("axiom_custom_simulations_v13");
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          // Keep user-added custom creations, and ensure all STEM_SIMULATIONS are present
          const customUserAdded = parsed.filter(
            (p: SimulationItem) => !STEM_SIMULATIONS.some((stem) => stem.id === p.id)
          );
          return [...STEM_SIMULATIONS, ...customUserAdded];
        }
      }
      return STEM_SIMULATIONS;
    } catch {
      return STEM_SIMULATIONS;
    }
  });

  // Save simulations to localStorage
  useEffect(() => {
    try {
      localStorage.setItem("axiom_custom_simulations_v13", JSON.stringify(customSimulations));
      localStorage.setItem("axiom_custom_simulations", JSON.stringify(customSimulations));
    } catch (e) {
      console.error("Failed to persist simulations:", e);
    }
  }, [customSimulations]);

  // Cart Items State
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  // Teacher's Purchased Licenses
  const [purchasedLicenses, setPurchasedLicenses] = useState<TeacherPurchasedSimulation[]>(() => {
    try {
      const saved = localStorage.getItem("axiom_purchased_licenses");
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) return parsed;
      }
      return [
        {
          simulationId: "sim-elec-circuit-builder",
          licenseTier: "schoolDepartment",
          purchaseDate: "2026-08-10",
          classroomPin: "ELEC-9021",
          activeStudents: 48,
          assignedClasses: ["Period 1 Honors Physics", "Period 4 General Science"]
        },
        {
          simulationId: "sim-micrometer-screw-gauge",
          licenseTier: "singleTeacher",
          purchaseDate: "2026-08-12",
          classroomPin: "MICR-4412",
          activeStudents: 32,
          assignedClasses: ["Period 2 AP Physics Lab"]
        },
        {
          simulationId: "sim-3d-iupac-chemistry",
          licenseTier: "districtUnlimited",
          purchaseDate: "2026-08-14",
          classroomPin: "CHEM-7834",
          activeStudents: 65,
          assignedClasses: ["Period 3 Chemistry", "Period 5 AP Chem"]
        },
        {
          simulationId: "sim-quantum-em-spectrum",
          licenseTier: "singleTeacher",
          purchaseDate: "2026-08-16",
          classroomPin: "QUAN-5520",
          activeStudents: 28,
          assignedClasses: ["Period 1 Honors Physics"]
        }
      ];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem("axiom_purchased_licenses", JSON.stringify(purchasedLicenses));
    } catch (e) {
      console.error("Failed to persist licenses:", e);
    }
  }, [purchasedLicenses]);

  // Discipline Counts
  const counts = useMemo(() => {
    const map: Record<string, number> = {
      all: customSimulations.length,
      physics: 0,
      chemistry: 0,
      biology: 0,
      mathematics: 0,
    };
    customSimulations.forEach((sim) => {
      if (map[sim.discipline] !== undefined) {
        map[sim.discipline]++;
      }
    });
    return map;
  }, [customSimulations]);

  // Filtered and Sorted Simulations
  const filteredSimulations = useMemo(() => {
    return customSimulations
      .filter((sim) => {
        // Discipline match
        if (selectedDiscipline !== "all" && sim.discipline !== selectedDiscipline) {
          return false;
        }
        // Grade level match
        if (selectedGrade !== "all") {
          const match = sim.gradeLevel?.some((g) => g.toLowerCase().includes(selectedGrade.toLowerCase()));
          if (!match) return false;
        }
        // Search query match
        if (searchQuery.trim()) {
          const q = searchQuery.toLowerCase();
          const matchesTitle = sim.title.toLowerCase().includes(q);
          const matchesTagline = sim.tagline.toLowerCase().includes(q);
          const matchesStandards = sim.standards?.some((s) => s.toLowerCase().includes(q));
          if (!matchesTitle && !matchesTagline && !matchesStandards) return false;
        }
        return true;
      })
      .sort((a, b) => {
        if (sortBy === "last-modified") {
          const timeA = new Date(a.lastModified || a.updatedAt || a.createdAt || 0).getTime();
          const timeB = new Date(b.lastModified || b.updatedAt || b.createdAt || 0).getTime();
          return timeB - timeA;
        }
        if (sortBy === "rating") return (b.rating || 5) - (a.rating || 5);
        if (sortBy === "price-asc") return (a.pricing?.singleTeacher || 0) - (b.pricing?.singleTeacher || 0);
        return (b.reviewCount || 0) - (a.reviewCount || 0); // Popular
      });
  }, [customSimulations, selectedDiscipline, selectedGrade, searchQuery, sortBy]);

  // Import / Save simulation handler
  const handleSaveSimulation = (simData: SimulationItem) => {
    if (editingSim) {
      setCustomSimulations((prev) =>
        prev.map((s) => (s.id === editingSim.id ? simData : s))
      );
    } else {
      setCustomSimulations((prev) => [simData, ...prev]);
    }
    setEditingSim(null);
    setIsHtmlImporterOpen(false);
    setActiveSimForPlayer(simData);
  };

  // Delete simulation handler
  const handleDeleteSimulation = (simId: string) => {
    setCustomSimulations((prev) => prev.filter((s) => s.id !== simId));
    setCartItems((prev) => prev.filter((c) => c.simulation.id !== simId));
  };

  // Standards Management Handlers
  const handleSaveStandard = (standard: CurriculumStandard) => {
    setStandards((prev) => {
      const idx = prev.findIndex((s) => s.id === standard.id);
      if (idx >= 0) {
        const next = [...prev];
        next[idx] = standard;
        return next;
      }
      return [standard, ...prev];
    });
  };

  const handleDeleteStandard = (standardId: string) => {
    setStandards((prev) => prev.filter((s) => s.id !== standardId));
  };

  // Restore / Sync the 19 Core Netlify Apps
  const handleSyncDefaultApps = () => {
    setCustomSimulations(STEM_SIMULATIONS);
    try {
      localStorage.setItem("axiom_custom_simulations", JSON.stringify(STEM_SIMULATIONS));
    } catch (e) {
      console.error(e);
    }
  };

  // Export JSON Backup
  const handleExportBackup = () => {
    const backupData = {
      version: "1.0",
      creatorEmail: "ndunj123@gmail.com",
      exportDate: new Date().toISOString(),
      simulations: customSimulations,
      standards: standards,
    };
    const blob = new Blob([JSON.stringify(backupData, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `axiom-stem-library-backup-${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  // Cart actions
  const handleAddToCart = (sim: SimulationItem, tier: LicenseTier) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.simulation.id === sim.id);
      if (existing) {
        return prev.map((item) =>
          item.simulation.id === sim.id ? { ...item, licenseTier: tier } : item
        );
      }
      return [...prev, { simulation: sim, selectedQuantity: 1, licenseTier: tier }];
    });
    setIsCartOpen(true);
  };

  const handleRemoveFromCart = (id: string) => {
    setCartItems((prev) => prev.filter((item) => item.simulation.id !== id));
  };

  const handleUpdateCartTier = (id: string, tier: LicenseTier) => {
    setCartItems((prev) =>
      prev.map((item) => (item.simulation.id === id ? { ...item, licenseTier: tier } : item))
    );
  };

  const handleCheckoutSuccess = (newPurchases: TeacherPurchasedSimulation[]) => {
    setPurchasedLicenses((prev) => [...prev, ...newPurchases]);
    setCartItems([]);
    setIsCheckoutOpen(false);
    setActiveView("dashboard");
  };

  // Check if a simulation is purchased or authorized for full features
  const isSimLicensed = (simId: string): boolean => {
    if (isCreatorMode && (currentUser?.role === "creator" || currentUser?.email?.toLowerCase().includes("ndunj123@gmail.com"))) {
      return true;
    }
    return purchasedLicenses.some((lic) => lic.simulationId === simId);
  };

  // Intercept LMS Assignment Publishing for unlicensed simulations
  const handleOpenLMSPublish = (sim: SimulationItem) => {
    if (!isSimLicensed(sim.id)) {
      setPaywallSim(sim);
      setPaywallFeature("lms");
      setIsPaywallOpen(true);
      return;
    }
    setActiveSimForLMS(sim);
    setIsLMSModalOpen(true);
  };

  // Intercept opening in external tab / pop-out for unlicensed simulations
  const handleAttemptPopOut = (sim: SimulationItem) => {
    if (!isSimLicensed(sim.id)) {
      setPaywallSim(sim);
      setPaywallFeature("popout");
      setIsPaywallOpen(true);
    }
  };

  // Launch simulation player and track usage analytics
  const handleLaunchSimulation = (sim: SimulationItem) => {
    recordSimulationPlay(sim.id);
    setActiveSimForPlayer(sim);
  };

  // Direct Student Worksheet View (for Google Classroom / Canvas / Schoology / 1-Click share link)
  // Shows ONLY the dedicated Laboratory Inquiry Worksheet & simulator, completely free of any marketplace UI
  if (studentWorksheetSimId) {
    const targetSim =
      customSimulations.find((s) => s.id === studentWorksheetSimId) ||
      STEM_SIMULATIONS.find((s) => s.id === studentWorksheetSimId) ||
      customSimulations[0] ||
      STEM_SIMULATIONS[0];

    return (
      <StudentWorksheetView
        simulation={targetSim}
        onReturnToCatalog={() => {
          setStudentWorksheetSimId(null);
          try {
            const url = new URL(window.location.href);
            url.searchParams.delete("worksheet");
            url.searchParams.delete("pdf");
            url.searchParams.delete("lab");
            window.history.replaceState({}, "", url.pathname);
          } catch {}
        }}
      />
    );
  }

  // App-Wide Access Gate: user must log in first to view the entire marketplace and platform
  if (!currentUser) {
    return <AppAuthGate onAuthSuccess={handleAuthSuccess} />;
  }

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-sky-500 selection:text-slate-950">
      {/* Universal Header */}
      <Header
        selectedDiscipline={selectedDiscipline}
        onSelectDiscipline={(d) => {
          setSelectedDiscipline(d);
          setActiveView("marketplace");
        }}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        cartCount={cartItems.length}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenTeacherDashboard={() => setActiveView("dashboard")}
        onOpenQuoteModal={() => setIsQuoteModalOpen(true)}
        onOpenHtmlImporter={() => {
          setEditingSim(null);
          setIsHtmlImporterOpen(true);
        }}
        onOpenStandardsManager={() => setIsStandardsModalOpen(true)}
        onOpenLMSHub={() => {
          if (!activeSimForLMS && customSimulations.length > 0) {
            setActiveSimForLMS(customSimulations[0]);
          }
          setIsLMSModalOpen(true);
        }}
        onOpenLemonSqueezyHub={() => setIsLemonSqueezyModalOpen(true)}
        onOpenStripeHub={() => setIsLemonSqueezyModalOpen(true)}
        activeView={activeView}
        isCreatorMode={isCreatorMode}
        onToggleCreatorMode={() => setIsCreatorMode((prev) => !prev)}
        onExportBackup={handleExportBackup}
        currentUser={currentUser}
        onOpenAuthModal={() => {
          setAuthModalTab("signin");
          setIsAuthModalOpen(true);
        }}
        onSignOut={handleSignOut}
      />

      {/* VIEW 1: SIMULATION MARKETPLACE & CREATOR WORKSPACE */}
      {activeView === "marketplace" ? (
        <main className="flex-1 flex flex-col">
          {/* Hero Banner with Value Proposition & Creator Actions */}
          <HeroBanner
            onTestDriveFeatured={
              customSimulations.length > 0
                ? () => setActiveSimForPlayer(customSimulations[0])
                : undefined
            }
            onExploreDiscipline={(d) => setSelectedDiscipline(d)}
            onOpenQuoteModal={() => setIsQuoteModalOpen(true)}
            isCreatorMode={isCreatorMode}
            onOpenUpload={() => {
              setEditingSim(null);
              setIsHtmlImporterOpen(true);
            }}
            onOpenStandards={() => setIsStandardsModalOpen(true)}
            hasSimulations={customSimulations.length > 0}
          />

          {/* Catalog & Filter Section */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 w-full space-y-8">
            {/* Creator Studio Action Banner */}
            {isCreatorMode ? (
              <div className="bg-gradient-to-r from-slate-900 via-indigo-950/70 to-slate-900 border border-indigo-500/30 rounded-3xl p-6 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 shadow-xl">
                <div className="flex items-start gap-4">
                  <div className="p-3.5 rounded-2xl bg-amber-500/15 border border-amber-500/30 text-amber-400 shrink-0">
                    <ShieldCheck className="w-7 h-7" />
                  </div>
                  <div className="space-y-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="text-base font-bold text-white">
                        Creator Studio Hub (Author: ndunj123@gmail.com)
                      </h3>
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-300 border border-emerald-500/30">
                        {customSimulations.length} Published Sim{customSimulations.length === 1 ? "" : "s"}
                      </span>
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-500/15 text-amber-300 border border-amber-500/30">
                        {standards.length} Curriculum Standards
                      </span>
                    </div>
                    <p className="text-xs text-slate-300 max-w-2xl leading-relaxed">
                      Manage and publish your standalone STEM simulations and Netlify apps. Each lab runs with its own native interactive controls, custom curriculum standards, and school licensing tiers.
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-2.5 w-full lg:w-auto shrink-0">
                  <button
                    onClick={handleSyncDefaultApps}
                    className="flex-1 lg:flex-none px-3.5 py-2.5 bg-slate-800/90 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700 font-medium text-xs rounded-xl transition-all cursor-pointer flex items-center justify-center gap-1.5"
                    title="Reload the 19 core Netlify simulation apps into your library"
                  >
                    <RotateCcw className="w-3.5 h-3.5 text-sky-400" />
                    <span>Sync 19 Labs</span>
                  </button>

                  <button
                    onClick={() => setIsStandardsModalOpen(true)}
                    className="flex-1 lg:flex-none px-3.5 py-2.5 bg-slate-800 hover:bg-slate-700 text-amber-300 hover:text-amber-200 border border-amber-500/30 font-semibold text-xs rounded-xl transition-all cursor-pointer flex items-center justify-center gap-1.5"
                  >
                    <BookOpen className="w-4 h-4 text-amber-400" />
                    <span>Manage Standards</span>
                  </button>

                  <button
                    id="banner-lemon-payouts-btn"
                    onClick={() => setIsLemonSqueezyModalOpen(true)}
                    className="flex-1 lg:flex-none px-3.5 py-2.5 bg-slate-800 hover:bg-slate-700 text-amber-300 hover:text-amber-200 border border-amber-500/30 font-semibold text-xs rounded-xl transition-all cursor-pointer flex items-center justify-center gap-1.5"
                    title="Manage Lemon Squeezy Store, MoR compliance & creator payouts"
                  >
                    <Sparkles className="w-4 h-4 text-amber-400" />
                    <span>Lemon Squeezy Store &amp; Payouts</span>
                  </button>

                  <button
                    onClick={() => {
                      setEditingSim(null);
                      setIsHtmlImporterOpen(true);
                    }}
                    className="flex-1 lg:flex-none px-5 py-2.5 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-slate-950 font-black text-xs rounded-xl shadow-lg shadow-emerald-500/20 transition-all cursor-pointer flex items-center justify-center gap-2"
                  >
                    <PlusCircle className="w-4 h-4 text-slate-950" />
                    <span>+ Upload HTML Simulation</span>
                  </button>
                </div>
              </div>
            ) : null}

            {/* Catalog Section Header */}
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-slate-800 pb-4">
              <div>
                <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight capitalize">
                  {selectedDiscipline === "all" ? "Curriculum Simulation Library" : `${selectedDiscipline} Interactive Labs`}
                </h2>
                <p className="text-xs sm:text-sm text-slate-400 mt-1">
                  {customSimulations.length === 0
                    ? "Your simulation catalog is currently waiting for your first HTML upload."
                    : `Showing ${filteredSimulations.length} standard-aligned interactive simulation models`}
                </p>
              </div>

              <div className="flex items-center gap-2 text-xs text-slate-400">
                <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                <span>Zero-Plugin HTML5 Runtime (Chromebook, Mac, PC, iPad)</span>
              </div>
            </div>

            {/* Subject and Sorting Filter Bar */}
            {customSimulations.length > 0 && (
              <SubjectFilterBar
                selectedDiscipline={selectedDiscipline}
                onSelectDiscipline={setSelectedDiscipline}
                selectedGrade={selectedGrade}
                onSelectGrade={setSelectedGrade}
                sortBy={sortBy}
                onSelectSort={setSortBy}
                counts={counts}
              />
            )}

            {/* Empty State vs Simulation Grid */}
            {customSimulations.length === 0 ? (
              <div className="py-16 px-6 text-center space-y-5 bg-gradient-to-b from-slate-900/90 to-slate-950 rounded-3xl border border-slate-800 max-w-3xl mx-auto shadow-2xl">
                <div className="w-16 h-16 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 flex items-center justify-center mx-auto shadow-inner">
                  <FileCode className="w-8 h-8 text-sky-400" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-black text-white">Your Simulation Library is Ready for Upload</h3>
                  <p className="text-xs text-slate-300 max-w-lg mx-auto leading-relaxed">
                    All default sample simulations have been removed. You are the exclusive creator authorized to upload your own HTML/Canvas/JS simulations and define curriculum standards.
                  </p>
                </div>

                <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                  <button
                    onClick={() => {
                      setEditingSim(null);
                      setIsHtmlImporterOpen(true);
                    }}
                    className="px-6 py-3.5 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-slate-950 font-black text-sm rounded-2xl shadow-xl shadow-emerald-500/20 transition-all cursor-pointer flex items-center gap-2 active:scale-95"
                  >
                    <PlusCircle className="w-5 h-5 text-slate-950" />
                    <span>Upload Your First HTML App</span>
                  </button>

                  <button
                    onClick={() => setIsStandardsModalOpen(true)}
                    className="px-5 py-3.5 bg-slate-800 hover:bg-slate-700 text-amber-300 font-semibold text-sm rounded-2xl border border-slate-700 transition-all cursor-pointer flex items-center gap-2"
                  >
                    <BookOpen className="w-4 h-4 text-amber-400" />
                    <span>Manage Standards Hub ({standards.length})</span>
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-left pt-6 border-t border-slate-800/80">
                  <div className="p-3 bg-slate-950/60 rounded-xl border border-slate-800/60">
                    <div className="text-xs font-bold text-white">1. Direct HTML Files</div>
                    <div className="text-[11px] text-slate-400 mt-1">Upload .html / Canvas apps with zero plugins</div>
                  </div>
                  <div className="p-3 bg-slate-950/60 rounded-xl border border-slate-800/60">
                    <div className="text-xs font-bold text-white">2. Dynamic Sliders</div>
                    <div className="text-[11px] text-slate-400 mt-1">Bind custom parameters via simple postMessage</div>
                  </div>
                  <div className="p-3 bg-slate-950/60 rounded-xl border border-slate-800/60">
                    <div className="text-xs font-bold text-white">3. Standards & Licenses</div>
                    <div className="text-[11px] text-slate-400 mt-1">Tag NGSS/AP standards and issue school licenses</div>
                  </div>
                </div>
              </div>
            ) : filteredSimulations.length === 0 ? (
              <div className="py-16 text-center space-y-3 bg-slate-900/50 rounded-3xl border border-slate-800">
                <Atom className="w-10 h-10 stroke-1 mx-auto text-slate-600" />
                <h3 className="text-base font-bold text-slate-200">No simulations matched your active filters</h3>
                <p className="text-xs text-slate-400 max-w-sm mx-auto">
                  Try clearing your search query or selecting "All Disciplines" to view your uploaded library.
                </p>
                <button
                  onClick={() => {
                    setSelectedDiscipline("all");
                    setSelectedGrade("all");
                    setSearchQuery("");
                  }}
                  className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold rounded-xl border border-slate-700 cursor-pointer"
                >
                  Reset All Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredSimulations.map((sim) => (
                  <SimulationCard
                    key={sim.id}
                    simulation={sim}
                    onTestDrive={handleLaunchSimulation}
                    onAddToCart={handleAddToCart}
                    onOpenLessonPlanner={(s) => setActiveSimForLessonPlan(s)}
                    onOpenWorksheet={(s) => {
                      setActiveSimForWorksheet(s);
                      setIsWorksheetModalOpen(true);
                    }}
                    onOpenLMSPublish={handleOpenLMSPublish}
                    isCreatorMode={isCreatorMode}
                    isLicensed={isSimLicensed(sim.id)}
                    onEditSimulation={(s) => {
                      setEditingSim(s);
                      setIsHtmlImporterOpen(true);
                    }}
                    onDeleteSimulation={handleDeleteSimulation}
                  />
                ))}
              </div>
            )}
          </div>

          {/* Social Proof & Research Evidence Section */}
          <WhyTeachersLoveSection />
        </main>
      ) : (
        /* VIEW 2: TEACHER DASHBOARD & STUDENT ACCESS PORTAL */
        <TeacherDashboard
          purchasedList={purchasedLicenses}
          allSimulations={customSimulations}
          onLaunchSimulation={handleLaunchSimulation}
          onOpenLessonPlanner={(s) => setActiveSimForLessonPlan(s)}
          onOpenWorksheet={(s) => {
            setActiveSimForWorksheet(s);
            setIsWorksheetModalOpen(true);
          }}
          onOpenLMSPublish={handleOpenLMSPublish}
          onOpenLemonSqueezyHub={() => setIsLemonSqueezyModalOpen(true)}
          onOpenStripeHub={() => setIsLemonSqueezyModalOpen(true)}
          onBackToMarketplace={() => setActiveView("marketplace")}
          currentUser={currentUser}
          onOpenAuthModal={() => {
            setAuthModalTab("signin");
            setIsAuthModalOpen(true);
          }}
        />
      )}

      {/* MODAL 0: CREATOR STUDIO HTML APP IMPORTER & AUTHORING SUITE */}
      {isHtmlImporterOpen && (
        <HtmlAppImporterModal
          onClose={() => {
            setIsHtmlImporterOpen(false);
            setEditingSim(null);
          }}
          onImportSuccess={handleSaveSimulation}
          editingSimulation={editingSim}
          availableStandards={standards}
          onOpenStandardsManager={() => setIsStandardsModalOpen(true)}
        />
      )}

      {/* MODAL 0.5: STANDARDS MANAGER STUDIO */}
      {isStandardsModalOpen && (
        <StandardsManagerModal
          standards={standards}
          simulations={customSimulations}
          onSaveStandard={handleSaveStandard}
          onDeleteStandard={handleDeleteStandard}
          onClose={() => setIsStandardsModalOpen(false)}
        />
      )}

      {/* MODAL 0.8: LMS DIRECT INTEGRATION & ASSIGNMENT PUBLISHER */}
      {isLMSModalOpen && (
        <LMSPublishModal
          isOpen={isLMSModalOpen}
          onClose={() => {
            setIsLMSModalOpen(false);
            setActiveSimForLMS(null);
          }}
          simulation={activeSimForLMS || (customSimulations.length > 0 ? customSimulations[0] : null)}
          allSimulations={customSimulations}
        />
      )}

      {/* MODAL 0.9: DOWNLOADABLE PDF LAB WORKSHEET & TEACHER KEY GENERATOR */}
      {isWorksheetModalOpen && activeSimForWorksheet && (
        <WorksheetGeneratorModal
          simulation={activeSimForWorksheet}
          onClose={() => {
            setIsWorksheetModalOpen(false);
            setActiveSimForWorksheet(null);
          }}
          onOpenLMSPublish={handleOpenLMSPublish}
        />
      )}

      {/* MODAL 1: INTERACTIVE SIMULATION PLAYER & LAB SANDBOX */}
      {activeSimForPlayer && (
        <InteractivePlayer
          simulation={activeSimForPlayer}
          onClose={() => setActiveSimForPlayer(null)}
          onAddToCart={handleAddToCart}
          onOpenLessonPlanner={(s) => setActiveSimForLessonPlan(s)}
          onOpenWorksheet={(s) => {
            setActiveSimForWorksheet(s);
            setIsWorksheetModalOpen(true);
          }}
          onOpenLMSPublish={handleOpenLMSPublish}
          isLicensed={isSimLicensed(activeSimForPlayer.id)}
          onAttemptPopOut={() => handleAttemptPopOut(activeSimForPlayer)}
        />
      )}

      {/* MODAL 2: AI LESSON PLAN & LAB WORKSHEET GENERATOR */}
      {activeSimForLessonPlan && (
        <LessonPlanGeneratorModal
          simulation={activeSimForLessonPlan}
          onClose={() => setActiveSimForLessonPlan(null)}
          onOpenWorksheet={(s) => {
            setActiveSimForWorksheet(s);
            setIsWorksheetModalOpen(true);
          }}
        />
      )}

      {/* MODAL 3: SHOPPING CART DRAWER */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onRemoveItem={handleRemoveFromCart}
        onUpdateTier={handleUpdateCartTier}
        onProceedCheckout={() => {
          setIsCartOpen(false);
          setIsCheckoutOpen(true);
        }}
      />

      {/* MODAL 4: CHECKOUT & LICENSE ISSUANCE */}
      {isCheckoutOpen && (
        <CheckoutModal
          cartItems={cartItems}
          onClose={() => setIsCheckoutOpen(false)}
          onSuccess={handleCheckoutSuccess}
        />
      )}

      {/* MODAL 5: DISTRICT PURCHASE ORDER QUOTATION */}
      {isQuoteModalOpen && <QuoteRequestModal onClose={() => setIsQuoteModalOpen(false)} />}

      {/* MODAL 6: AUTHENTICATION & LOGIN/SIGNUP MODAL */}
      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
        onAuthSuccess={handleAuthSuccess}
        initialTab={authModalTab}
      />

      {/* MODAL 7: PAYWALL & LICENSE PURCHASE PROMPT */}
      <PaywallModal
        isOpen={isPaywallOpen}
        onClose={() => {
          setIsPaywallOpen(false);
          setPaywallSim(null);
        }}
        simulation={paywallSim}
        featureAttempted={paywallFeature}
        onAddToCartAndCheckout={(sim, tier) => {
          handleAddToCart(sim, tier);
          setIsCartOpen(false);
          setIsCheckoutOpen(true);
        }}
        onTestDrive={(sim) => {
          handleLaunchSimulation(sim);
        }}
      />

      {/* MODAL 8: LEMON SQUEEZY CREATOR STORE & PAYOUTS HUB */}
      {isLemonSqueezyModalOpen && (
        <LemonSqueezyAccountModal
          currentUser={currentUser}
          onClose={() => setIsLemonSqueezyModalOpen(false)}
        />
      )}

      {/* World-Class Footer */}
      <footer className="bg-slate-950 border-t border-slate-800/80 py-12 text-xs text-slate-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="space-y-3">
              <div className="flex items-center gap-2.5">
                <img
                  src="/axiom-stem-logo.png"
                  alt="AXIOM STEM Logo"
                  referrerPolicy="no-referrer"
                  className="w-7 h-7 rounded-lg object-cover shadow-sm border border-slate-700/50"
                />
                <span className="text-base font-black text-white font-mono">
                  AXIOM<span className="text-sky-400">STEM</span>
                </span>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                  CREATOR STUDIO
                </span>
              </div>
              <p className="text-slate-400 leading-relaxed text-xs">
                Interactive simulation platform for STEM educators and content authors. Standalone HTML5 simulation hosting with NGSS & AP alignment.
              </p>
              <div className="text-[11px] text-emerald-400 font-medium">
                ✓ Tax-Exempt School POs • Lemon Squeezy MoR &amp; Global Compliance
              </div>
            </div>

            <div>
              <h4 className="font-bold text-white uppercase tracking-wider mb-3">Disciplines</h4>
              <ul className="space-y-2 text-slate-400">
                <li>
                  <button onClick={() => { setSelectedDiscipline("physics"); setActiveView("marketplace"); }} className="hover:text-white cursor-pointer">
                    Physics & Mechanics
                  </button>
                </li>
                <li>
                  <button onClick={() => { setSelectedDiscipline("chemistry"); setActiveView("marketplace"); }} className="hover:text-white cursor-pointer">
                    Chemistry & Reaction Dynamics
                  </button>
                </li>
                <li>
                  <button onClick={() => { setSelectedDiscipline("biology"); setActiveView("marketplace"); }} className="hover:text-white cursor-pointer">
                    Biology & Genetics
                  </button>
                </li>
                <li>
                  <button onClick={() => { setSelectedDiscipline("mathematics"); setActiveView("marketplace"); }} className="hover:text-white cursor-pointer">
                    Mathematics & Computational Modeling
                  </button>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-white uppercase tracking-wider mb-3">Creator & Teacher Tools</h4>
              <ul className="space-y-2 text-slate-400">
                <li>
                  <button
                    onClick={() => {
                      setAuthModalTab("signin");
                      setIsAuthModalOpen(true);
                    }}
                    className="hover:text-white cursor-pointer text-indigo-400 flex items-center gap-1 font-semibold"
                  >
                    <LogIn className="w-3.5 h-3.5" />
                    <span>Educator Sign In / Register</span>
                  </button>
                </li>
                <li>
                  <button onClick={() => setIsHtmlImporterOpen(true)} className="hover:text-white cursor-pointer text-emerald-400">
                    + Upload HTML Simulation
                  </button>
                </li>
                <li>
                  <button onClick={() => setIsLemonSqueezyModalOpen(true)} className="hover:text-white cursor-pointer text-amber-300 flex items-center gap-1">
                    <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                    <span>Lemon Squeezy Store &amp; Payouts</span>
                  </button>
                </li>
                <li>
                  <button onClick={() => setIsStandardsModalOpen(true)} className="hover:text-white cursor-pointer text-amber-300">
                    Standards Management Studio
                  </button>
                </li>
                <li>
                  <button onClick={() => setActiveView("dashboard")} className="hover:text-white cursor-pointer">
                    Teacher Library & Student PINs
                  </button>
                </li>
                <li>
                  <button onClick={() => setIsQuoteModalOpen(true)} className="hover:text-white cursor-pointer">
                    District Quote Generator
                  </button>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-white uppercase tracking-wider mb-3">Compliance & Privacy</h4>
              <ul className="space-y-2 text-slate-400">
                <li>FERPA & COPPA Certified (Zero PII collected)</li>
                <li>LTI 1.3 Canvas / Google Classroom Ready</li>
                <li>Accessibility: WCAG 2.1 AA Compliant</li>
                <li>State & Federal STEM Grant Eligible</li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
            <div>© 2026 Axiom STEM Learning Inc. All rights reserved. Platform Author: ndunj123@gmail.com</div>
            <div className="flex gap-4">
              <span>Privacy Policy</span>
              <span>Terms of Service</span>
              <span>School Procurement Agreement</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
