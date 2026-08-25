import React, { useState, useRef, useEffect } from "react";
import { STEMDiscipline, UserProfile } from "../types";
import {
  Atom,
  ShoppingCart,
  BookOpen,
  FileCheck2,
  Search,
  Sparkles,
  GraduationCap,
  Layers,
  ChevronDown,
  Code2,
  ShieldCheck,
  Lock,
  Unlock,
  PlusCircle,
  FolderDown,
  Share2,
  LogIn,
  LogOut,
  User as UserIcon,
  School,
  Settings,
  RefreshCw,
  CreditCard,
  DollarSign
} from "lucide-react";

interface HeaderProps {
  selectedDiscipline: STEMDiscipline | "all";
  onSelectDiscipline: (d: STEMDiscipline | "all") => void;
  searchQuery: string;
  onSearchChange: (q: string) => void;
  cartCount: number;
  onOpenCart: () => void;
  onOpenTeacherDashboard: () => void;
  onOpenQuoteModal: () => void;
  onOpenHtmlImporter?: () => void;
  onOpenStandardsManager?: () => void;
  onOpenLMSHub?: () => void;
  onOpenLemonSqueezyHub?: () => void;
  onOpenStripeHub?: () => void;
  activeView: "marketplace" | "dashboard";
  isCreatorMode: boolean;
  onToggleCreatorMode: () => void;
  onExportBackup?: () => void;
  currentUser?: UserProfile | null;
  onOpenAuthModal: () => void;
  onSignOut: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  selectedDiscipline,
  onSelectDiscipline,
  searchQuery,
  onSearchChange,
  cartCount,
  onOpenCart,
  onOpenTeacherDashboard,
  onOpenQuoteModal,
  onOpenHtmlImporter,
  onOpenStandardsManager,
  onOpenLMSHub,
  onOpenLemonSqueezyHub,
  onOpenStripeHub,
  activeView,
  isCreatorMode,
  onToggleCreatorMode,
  onExportBackup,
  currentUser,
  onOpenAuthModal,
  onSignOut,
}) => {
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const profileMenuRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (profileMenuRef.current && !profileMenuRef.current.contains(event.target as Node)) {
        setIsProfileMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const getRoleBadge = (role?: string) => {
    switch (role) {
      case "creator":
        return { label: "Creator / Author", bg: "bg-amber-500/20 text-amber-300 border-amber-500/30" };
      case "admin":
        return { label: "District Admin", bg: "bg-emerald-500/20 text-emerald-300 border-emerald-500/30" };
      case "student":
        return { label: "Student", bg: "bg-sky-500/20 text-sky-300 border-sky-500/30" };
      case "teacher":
      default:
        return { label: "STEM Educator", bg: "bg-indigo-500/20 text-indigo-300 border-indigo-500/30" };
    }
  };

  const badgeInfo = getRoleBadge(currentUser?.role);

  return (
    <header className="sticky top-0 z-40 bg-slate-950/90 backdrop-blur-xl border-b border-slate-800">
      {/* Creator Control & Grant Status Bar */}
      <div className="bg-gradient-to-r from-slate-950 via-indigo-950/80 to-slate-950 px-4 py-1.5 text-xs text-indigo-200 border-b border-indigo-900/40 flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          {currentUser ? (
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-[11px] font-semibold text-slate-300">
                Signed in: <strong className="text-white">{currentUser.displayName}</strong> ({badgeInfo.label})
              </span>
              {currentUser.schoolName && (
                <span className="text-[10px] text-slate-400 hidden sm:inline">&bull; {currentUser.schoolName}</span>
              )}
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <span className="text-slate-400 text-[11px] flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <strong>STEM Grants:</strong> 100% Tax-Exempt School POs &amp;
              </span>
              {onOpenLMSHub && (
                <button
                  onClick={onOpenLMSHub}
                  className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-300 hover:text-white bg-emerald-500/20 hover:bg-emerald-500/30 border border-emerald-500/40 px-2 py-0.5 rounded-md cursor-pointer transition-all"
                  title="Open Google Classroom, Canvas, & Schoology Hub"
                >
                  <Share2 className="w-3 h-3 text-emerald-400" />
                  <span>Google Classroom, Canvas &amp; Schoology Hub</span>
                </button>
              )}
            </div>
          )}
        </div>

        <div className="flex items-center gap-3">
          {(onOpenLemonSqueezyHub || onOpenStripeHub) && (
            <button
              id="header-lemon-hub-btn"
              onClick={onOpenLemonSqueezyHub || onOpenStripeHub}
              className="text-[11px] font-semibold text-amber-300 hover:text-white flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-amber-500/15 hover:bg-amber-500/25 border border-amber-500/30 cursor-pointer transition-all"
              title="Manage Lemon Squeezy Store, Merchant of Record settings & Creator Payouts"
            >
              <Sparkles className="w-3 h-3 text-amber-400" />
              <span>Lemon Squeezy Store &amp; Payouts</span>
            </button>
          )}

          {isCreatorMode && onExportBackup && (
            <button
              onClick={onExportBackup}
              className="text-[11px] text-slate-300 hover:text-white flex items-center gap-1 cursor-pointer transition-colors"
              title="Backup simulation library and standards as JSON"
            >
              <FolderDown className="w-3 h-3 text-indigo-400" />
              <span>Export JSON Backup</span>
            </button>
          )}

          {/* Mode Switcher Toggle */}
          <button
            onClick={onToggleCreatorMode}
            className={`text-[11px] font-semibold px-2.5 py-0.5 rounded-md border flex items-center gap-1.5 transition-all cursor-pointer ${
              isCreatorMode
                ? "bg-amber-500/20 text-amber-300 border-amber-500/30 hover:bg-amber-500/30"
                : "bg-slate-900 text-slate-400 border-slate-800 hover:text-slate-200"
            }`}
          >
            {isCreatorMode ? <Unlock className="w-3 h-3 text-amber-400" /> : <Lock className="w-3 h-3" />}
            <span>{isCreatorMode ? "Creator Mode Active" : "Unlock Creator Mode"}</span>
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5">
        <div className="flex items-center justify-between gap-4">
          {/* Brand Logo & Name */}
          <div
            onClick={() => onSelectDiscipline("all")}
            className="flex items-center gap-3 cursor-pointer group shrink-0"
          >
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-sky-500 via-indigo-600 to-purple-600 p-0.5 shadow-lg shadow-sky-500/20 group-hover:scale-105 transition-all overflow-hidden">
              <div className="w-full h-full bg-slate-950 rounded-[14px] flex items-center justify-center overflow-hidden">
                <img
                  src="/axiom-stem-logo.png"
                  alt="AXIOM STEM Logo"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-contain p-0.5 group-hover:scale-110 transition-transform duration-500"
                  onError={(e) => {
                    // Fallback to icon if image load fails
                    (e.currentTarget as HTMLElement).style.display = "none";
                  }}
                />
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-lg sm:text-xl font-black tracking-tight text-white font-mono">
                  AXIOM<span className="text-sky-400">STEM</span>
                </span>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                  {isCreatorMode ? "CREATOR" : "MARKETPLACE"}
                </span>
              </div>
              <p className="text-[11px] text-slate-400 hidden sm:block">Interactive Simulation Platform</p>
            </div>
          </div>

          {/* Search Bar */}
          <div className="hidden md:flex flex-1 max-w-md relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder="Search simulations, standards (e.g. HS-PS4-1, AP Physics)..."
              className="w-full bg-slate-900 border border-slate-800 rounded-xl pl-10 pr-4 py-2 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition-all"
            />
          </div>

          {/* Navigation Actions */}
          <div className="flex items-center gap-2.5">
            {/* Standards Manager (Creator Only) */}
            {isCreatorMode && onOpenStandardsManager && (
              <button
                id="standards-manager-btn"
                onClick={onOpenStandardsManager}
                className="hidden sm:flex items-center gap-1.5 px-3 py-2 rounded-xl bg-amber-500/10 hover:bg-amber-500/20 text-amber-300 border border-amber-500/30 text-xs font-semibold cursor-pointer transition-all"
              >
                <BookOpen className="w-3.5 h-3.5 text-amber-400" />
                <span>Standards Studio</span>
              </button>
            )}

            {/* HTML Upload Button */}
            {onOpenHtmlImporter && (
              <button
                id="integrate-html-btn"
                onClick={() => {
                  if (!isCreatorMode) onToggleCreatorMode();
                  onOpenHtmlImporter();
                }}
                className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-gradient-to-r from-emerald-500 via-teal-500 to-sky-500 hover:from-emerald-400 hover:to-sky-400 text-slate-950 text-xs font-bold cursor-pointer shadow-md shadow-emerald-500/20 transition-all active:scale-95"
                title="Upload and author standalone HTML/Canvas simulation"
              >
                <PlusCircle className="w-3.5 h-3.5 text-slate-950" />
                <span>+ Upload .html App</span>
              </button>
            )}

            {/* School PO Quote CTA */}
            <button
              id="request-quote-btn"
              onClick={onOpenQuoteModal}
              className="hidden lg:flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 text-xs font-medium cursor-pointer transition-all"
            >
              <FileCheck2 className="w-3.5 h-3.5 text-amber-400" /> School PO Quote
            </button>

            {/* LMS Integration Hub Switcher */}
            {onOpenLMSHub && (
              <button
                id="lms-hub-header-btn"
                onClick={onOpenLMSHub}
                className="hidden sm:flex items-center gap-1.5 px-3 py-2 rounded-xl bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-xs font-semibold cursor-pointer transition-all"
                title="Google Classroom, Canvas LMS, and Schoology Integration Hub"
              >
                <Share2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>LMS Hub</span>
              </button>
            )}

            {/* Teacher Dashboard Switcher */}
            <button
              id="teacher-portal-btn"
              onClick={onOpenTeacherDashboard}
              className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-medium border cursor-pointer transition-all ${
                activeView === "dashboard"
                  ? "bg-indigo-600 text-white border-indigo-500 shadow-md shadow-indigo-500/25"
                  : "bg-slate-900 hover:bg-slate-800 text-slate-200 border-slate-800"
              }`}
            >
              <GraduationCap className="w-4 h-4 text-sky-400" />
              <span>Teacher Library</span>
            </button>

            {/* Shopping Cart Drawer Trigger */}
            <button
              id="open-cart-btn"
              onClick={onOpenCart}
              className="relative flex items-center gap-2 px-3.5 py-2 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-slate-950 font-bold text-xs cursor-pointer shadow-lg shadow-emerald-500/20 transition-all active:scale-95"
            >
              <ShoppingCart className="w-4 h-4 text-slate-950" />
              <span>Cart</span>
              {cartCount > 0 && (
                <span className="bg-slate-950 text-emerald-400 text-[10px] font-black px-1.5 py-0.5 rounded-full">
                  {cartCount}
                </span>
              )}
            </button>

            {/* USER LOGIN / PROFILE BUTTON */}
            {currentUser ? (
              <div className="relative" ref={profileMenuRef}>
                <button
                  id="user-profile-btn"
                  onClick={() => setIsProfileMenuOpen((prev) => !prev)}
                  className="flex items-center gap-2 p-1.5 pr-2.5 rounded-2xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-xs font-semibold text-white transition-all cursor-pointer shadow-md group"
                >
                  {currentUser.photoURL ? (
                    <img
                      src={currentUser.photoURL}
                      alt={currentUser.displayName}
                      className="w-7 h-7 rounded-xl object-cover border border-indigo-500/40"
                    />
                  ) : (
                    <div className="w-7 h-7 rounded-xl bg-gradient-to-tr from-sky-500 to-indigo-600 flex items-center justify-center text-white font-black text-xs">
                      {currentUser.displayName.charAt(0).toUpperCase()}
                    </div>
                  )}
                  <span className="hidden xl:inline max-w-[100px] truncate">{currentUser.displayName.split(" ")[0]}</span>
                  <ChevronDown className="w-3.5 h-3.5 text-slate-400 group-hover:text-white transition-transform" />
                </button>

                {/* Dropdown Menu */}
                {isProfileMenuOpen && (
                  <div className="absolute right-0 mt-2 w-64 bg-slate-900 border border-slate-800 rounded-3xl shadow-2xl p-2 z-50 animate-in fade-in duration-150 space-y-1">
                    {/* User Card Header */}
                    <div className="p-3 bg-slate-950/80 rounded-2xl border border-slate-800/80 space-y-1">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-white truncate block max-w-[160px]">
                          {currentUser.displayName}
                        </span>
                        <span className={`text-[9px] font-bold px-1.5 py-0.5 rounded-md border ${badgeInfo.bg}`}>
                          {badgeInfo.label}
                        </span>
                      </div>
                      <p className="text-[11px] text-slate-400 truncate">{currentUser.email}</p>
                      {currentUser.schoolName && (
                        <p className="text-[10px] text-indigo-300 flex items-center gap-1 pt-1 truncate">
                          <School className="w-3 h-3 shrink-0" />
                          <span>{currentUser.schoolName}</span>
                        </p>
                      )}
                    </div>

                    {/* Menu Actions */}
                    <button
                      onClick={() => {
                        setIsProfileMenuOpen(false);
                        onOpenTeacherDashboard();
                      }}
                      className="w-full px-3 py-2 text-left rounded-xl hover:bg-slate-800 text-xs font-medium text-slate-300 hover:text-white flex items-center gap-2 transition-colors cursor-pointer"
                    >
                      <GraduationCap className="w-4 h-4 text-sky-400" />
                      <span>My Teacher Library</span>
                    </button>

                    {onOpenLMSHub && (
                      <button
                        onClick={() => {
                          setIsProfileMenuOpen(false);
                          onOpenLMSHub();
                        }}
                        className="w-full px-3 py-2 text-left rounded-xl hover:bg-slate-800 text-xs font-medium text-slate-300 hover:text-white flex items-center gap-2 transition-colors cursor-pointer"
                      >
                        <Share2 className="w-4 h-4 text-emerald-400" />
                        <span>Google Classroom &amp; LMS</span>
                      </button>
                    )}

                    {(onOpenLemonSqueezyHub || onOpenStripeHub) && (
                      <button
                        onClick={() => {
                          setIsProfileMenuOpen(false);
                          if (onOpenLemonSqueezyHub) onOpenLemonSqueezyHub();
                          else if (onOpenStripeHub) onOpenStripeHub();
                        }}
                        className="w-full px-3 py-2 text-left rounded-xl hover:bg-slate-800 text-xs font-medium text-amber-300 hover:text-white flex items-center gap-2 transition-colors cursor-pointer"
                      >
                        <Sparkles className="w-4 h-4 text-amber-400" />
                        <span>Lemon Squeezy Store &amp; Payouts</span>
                      </button>
                    )}

                    <button
                      onClick={() => {
                        setIsProfileMenuOpen(false);
                        onToggleCreatorMode();
                      }}
                      className="w-full px-3 py-2 text-left rounded-xl hover:bg-slate-800 text-xs font-medium text-slate-300 hover:text-white flex items-center gap-2 transition-colors cursor-pointer"
                    >
                      <ShieldCheck className="w-4 h-4 text-amber-400" />
                      <span>{isCreatorMode ? "Exit Creator Mode" : "Switch to Creator Mode"}</span>
                    </button>

                    <button
                      onClick={() => {
                        setIsProfileMenuOpen(false);
                        onOpenAuthModal();
                      }}
                      className="w-full px-3 py-2 text-left rounded-xl hover:bg-slate-800 text-xs font-medium text-slate-300 hover:text-white flex items-center gap-2 transition-colors cursor-pointer"
                    >
                      <RefreshCw className="w-4 h-4 text-indigo-400" />
                      <span>Switch Account / Demo Role</span>
                    </button>

                    <div className="h-px bg-slate-800 my-1" />

                    <button
                      onClick={() => {
                        setIsProfileMenuOpen(false);
                        onSignOut();
                      }}
                      className="w-full px-3 py-2 text-left rounded-xl hover:bg-rose-500/15 text-xs font-semibold text-rose-400 hover:text-rose-300 flex items-center gap-2 transition-colors cursor-pointer"
                    >
                      <LogOut className="w-4 h-4 text-rose-400" />
                      <span>Sign Out</span>
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <button
                id="header-signin-btn"
                onClick={onOpenAuthModal}
                className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs cursor-pointer shadow-md shadow-indigo-600/25 transition-all active:scale-95"
                title="Sign in or create free educator account"
              >
                <LogIn className="w-3.5 h-3.5" />
                <span>Sign In</span>
              </button>
            )}
          </div>
        </div>

        {/* Mobile Search Bar */}
        <div className="mt-3 md:hidden">
          <div className="relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder="Search simulations, standards..."
              className="w-full bg-slate-900 border border-slate-800 rounded-xl pl-9 pr-3 py-2 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-sky-500"
            />
          </div>
        </div>
      </div>
    </header>
  );
};


