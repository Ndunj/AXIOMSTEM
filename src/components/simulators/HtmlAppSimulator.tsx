import React, { useRef, useState, useEffect } from "react";
import { Maximize2, Minimize2, RotateCcw, ExternalLink, ShieldCheck, Lock } from "lucide-react";

interface HtmlAppSimulatorProps {
  htmlContent?: string;
  htmlUrl?: string;
  params?: Record<string, number | boolean | string>;
  title: string;
  isLicensed?: boolean;
  onAttemptPopOut?: () => void;
}

export const HtmlAppSimulator: React.FC<HtmlAppSimulatorProps> = ({
  htmlContent,
  htmlUrl,
  title,
  isLicensed = false,
  onAttemptPopOut,
}) => {
  const iframeRef = useRef<HTMLIFrameElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [iframeKey, setIframeKey] = useState(0);

  // Fullscreen toggle handler
  const toggleFullscreen = () => {
    if (!containerRef.current) return;
    if (!document.fullscreenElement) {
      containerRef.current.requestFullscreen().then(() => setIsFullscreen(true)).catch(() => {});
    } else {
      document.exitFullscreen().then(() => setIsFullscreen(false)).catch(() => {});
    }
  };

  useEffect(() => {
    const handleFsChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener("fullscreenchange", handleFsChange);
    return () => document.removeEventListener("fullscreenchange", handleFsChange);
  }, []);

  const handlePopOutClick = (e: React.MouseEvent) => {
    if (!isLicensed) {
      e.preventDefault();
      if (onAttemptPopOut) {
        onAttemptPopOut();
      }
    }
  };

  return (
    <div
      ref={containerRef}
      onContextMenu={(e) => {
        if (!isLicensed) {
          e.preventDefault();
        }
      }}
      className={`relative flex flex-col w-full rounded-2xl overflow-hidden border border-slate-800 bg-slate-950 ${
        isFullscreen ? "h-screen p-0 bg-slate-950" : "h-[620px] sm:h-[680px]"
      }`}
    >
      {/* Top Simulation Navigation & Runtime Bar */}
      <div className="flex items-center justify-between px-4 py-2 bg-slate-900/95 border-b border-slate-800 text-xs text-slate-300 shrink-0">
        <div className="flex items-center gap-2">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="font-mono text-[11px] text-slate-400 hidden sm:inline">Interactive Lab App</span>
          <span className="text-slate-600 hidden sm:inline">|</span>
          <span className="font-semibold text-slate-200 truncate max-w-[220px] sm:max-w-md">{title}</span>
        </div>

        <div className="flex items-center gap-2">
          {isLicensed ? (
            <div className="hidden md:flex items-center gap-1 px-2.5 py-0.5 rounded-lg bg-emerald-500/10 text-[10px] text-emerald-300 border border-emerald-500/30">
              <ShieldCheck className="w-3 h-3 text-emerald-400" />
              <span>Full License Active</span>
            </div>
          ) : (
            <div className="hidden md:flex items-center gap-1 px-2.5 py-0.5 rounded-lg bg-amber-500/10 text-[10px] text-amber-300 border border-amber-500/30">
              <Lock className="w-3 h-3 text-amber-400" />
              <span>Sandbox Test-Drive</span>
            </div>
          )}

          <button
            onClick={() => setIframeKey((k) => k + 1)}
            className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700 text-xs transition-colors cursor-pointer"
            title="Reload simulation"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset Lab</span>
          </button>

          {htmlUrl && (
            isLicensed ? (
              <a
                href={htmlUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700 text-xs transition-colors"
                title="Open full simulation in new browser tab"
              >
                <ExternalLink className="w-3.5 h-3.5 text-sky-400" />
                <span className="hidden sm:inline">Pop Out</span>
              </a>
            ) : (
              <button
                type="button"
                onClick={handlePopOutClick}
                className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-slate-800/80 hover:bg-slate-800 text-slate-400 hover:text-amber-300 border border-slate-700 text-xs transition-colors cursor-pointer"
                title="Opening in new tab is locked (Requires License)"
              >
                <Lock className="w-3.5 h-3.5 text-amber-400" />
                <span className="hidden sm:inline">Pop Out</span>
              </button>
            )
          )}

          <button
            onClick={toggleFullscreen}
            className="flex items-center gap-1 p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700 transition-colors cursor-pointer"
            title={isFullscreen ? "Exit Fullscreen" : "Enter Fullscreen"}
          >
            {isFullscreen ? <Minimize2 className="w-3.5 h-3.5" /> : <Maximize2 className="w-3.5 h-3.5" />}
          </button>
        </div>
      </div>

      {/* Main Interactive Stage */}
      <div className="relative flex-1 w-full h-full bg-slate-950 select-none">
        <iframe
          key={iframeKey}
          ref={iframeRef}
          src={htmlUrl || undefined}
          srcDoc={htmlContent || undefined}
          title={title}
          className="w-full h-full border-0 bg-slate-950"
          sandbox="allow-scripts allow-same-origin allow-forms allow-modals"
          allow="accelerometer; autoplay; camera; encrypted-media; gyroscope; microphone"
        />
      </div>
    </div>
  );
};
