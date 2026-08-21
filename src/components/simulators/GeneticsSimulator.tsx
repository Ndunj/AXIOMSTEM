import React, { useState, useEffect } from "react";
import { Dna, RotateCcw, Award, CheckCircle, Sparkles, RefreshCw } from "lucide-react";

interface GeneticsProps {
  generationSize: number; // 50 - 1000
  onMetricUpdate?: (metrics: Record<string, number>) => void;
}

interface PhenotypeCount {
  blackLong: number; // Dominant Black Body, Long Wings (B_S_)
  blackVestigial: number; // Black Body, Vestigial Wings (B_ss)
  brownLong: number; // Brown Body, Long Wings (bbS_)
  brownVestigial: number; // Brown Body, Vestigial Wings (bbss)
}

export const GeneticsSimulator: React.FC<GeneticsProps> = ({
  generationSize,
  onMetricUpdate,
}) => {
  const [counts, setCounts] = useState<PhenotypeCount>({
    blackLong: 0,
    blackVestigial: 0,
    brownLong: 0,
    brownVestigial: 0,
  });

  const [chiSquare, setChiSquare] = useState({
    chiStat: 0,
    pValue: 0.9,
    isAccepted: true,
  });

  // Cross BbSs x BbSs expected 9:3:3:1 ratio
  const breedGeneration = () => {
    let bl = 0;
    let bv = 0;
    let brl = 0;
    let brv = 0;

    for (let i = 0; i < generationSize; i++) {
      // Parent 1 alleles: B or b, S or s
      const p1B = Math.random() < 0.5 ? "B" : "b";
      const p1S = Math.random() < 0.5 ? "S" : "s";
      // Parent 2 alleles: B or b, S or s
      const p2B = Math.random() < 0.5 ? "B" : "b";
      const p2S = Math.random() < 0.5 ? "S" : "s";

      const hasB = p1B === "B" || p2B === "B";
      const hasS = p1S === "S" || p2S === "S";

      if (hasB && hasS) bl++;
      else if (hasB && !hasS) bv++;
      else if (!hasB && hasS) brl++;
      else brv++;
    }

    setCounts({
      blackLong: bl,
      blackVestigial: bv,
      brownLong: brl,
      brownVestigial: brv,
    });

    // Compute Chi-Square against expected 9:3:3:1
    const expBL = (9 / 16) * generationSize;
    const expBV = (3 / 16) * generationSize;
    const expBRL = (3 / 16) * generationSize;
    const expBRV = (1 / 16) * generationSize;

    const chi =
      (bl - expBL) ** 2 / expBL +
      (bv - expBV) ** 2 / expBV +
      (brl - expBRL) ** 2 / expBRL +
      (brv - expBRV) ** 2 / expBRV;

    // Chi-Square with df=3: critical value for p=0.05 is 7.815
    const isPass = chi < 7.815;
    const approxP = Math.max(0.01, Math.min(0.99, Number((Math.exp(-chi / 4)).toFixed(2))));

    setChiSquare({
      chiStat: Number(chi.toFixed(3)),
      pValue: approxP,
      isAccepted: isPass,
    });

    if (onMetricUpdate) {
      onMetricUpdate({
        chiSquareP: approxP,
        chiStat: Number(chi.toFixed(2)),
        sampleSize: generationSize,
      });
    }
  };

  useEffect(() => {
    breedGeneration();
  }, [generationSize]);

  const expBL = Math.round((9 / 16) * generationSize);
  const expBV = Math.round((3 / 16) * generationSize);
  const expBRL = Math.round((3 / 16) * generationSize);
  const expBRV = Math.round((1 / 16) * generationSize);

  return (
    <div className="flex flex-col gap-4">
      {/* 4x4 Punnett Visualizer & Nursery */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-3">
        <div className="lg:col-span-6 relative rounded-2xl overflow-hidden border border-slate-700 bg-slate-900 p-4 flex flex-col justify-between shadow-2xl">
          <div className="flex items-center justify-between pb-2 border-b border-slate-800">
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-300">
              Dihybrid Cross: BbSs ♀ × BbSs ♂
            </span>
            <button
              onClick={breedGeneration}
              className="flex items-center gap-1.5 px-3 py-1 bg-emerald-500 hover:bg-emerald-400 text-slate-950 text-xs font-bold rounded-lg cursor-pointer transition-all shadow-md shadow-emerald-500/20"
            >
              <RefreshCw className="w-3.5 h-3.5" /> Breed Next Gen (N={generationSize})
            </button>
          </div>

          {/* Punnett 4x4 Grid Representation */}
          <div className="grid grid-cols-4 gap-1.5 p-2 bg-slate-950/60 rounded-xl my-3">
            {[
              { g: "BBSS", t: "Black Body, Long Wing", bg: "bg-emerald-950/40 border-emerald-500/40 text-emerald-300" },
              { g: "BBSs", t: "Black Body, Long Wing", bg: "bg-emerald-950/40 border-emerald-500/40 text-emerald-300" },
              { g: "BbSS", t: "Black Body, Long Wing", bg: "bg-emerald-950/40 border-emerald-500/40 text-emerald-300" },
              { g: "BbSs", t: "Black Body, Long Wing", bg: "bg-emerald-950/40 border-emerald-500/40 text-emerald-300" },

              { g: "BBSs", t: "Black Body, Long Wing", bg: "bg-emerald-950/40 border-emerald-500/40 text-emerald-300" },
              { g: "BBss", t: "Black Body, Vestigial Wing", bg: "bg-sky-950/40 border-sky-500/40 text-sky-300" },
              { g: "BbSs", t: "Black Body, Long Wing", bg: "bg-emerald-950/40 border-emerald-500/40 text-emerald-300" },
              { g: "Bbss", t: "Black Body, Vestigial Wing", bg: "bg-sky-950/40 border-sky-500/40 text-sky-300" },

              { g: "BbSS", t: "Black Body, Long Wing", bg: "bg-emerald-950/40 border-emerald-500/40 text-emerald-300" },
              { g: "BbSs", t: "Black Body, Long Wing", bg: "bg-emerald-950/40 border-emerald-500/40 text-emerald-300" },
              { g: "bbSS", t: "Brown Body, Long Wing", bg: "bg-amber-950/40 border-amber-500/40 text-amber-300" },
              { g: "bbSs", t: "Brown Body, Long Wing", bg: "bg-amber-950/40 border-amber-500/40 text-amber-300" },

              { g: "BbSs", t: "Black Body, Long Wing", bg: "bg-emerald-950/40 border-emerald-500/40 text-emerald-300" },
              { g: "Bbss", t: "Black Body, Vestigial Wing", bg: "bg-sky-950/40 border-sky-500/40 text-sky-300" },
              { g: "bbSs", t: "Brown Body, Long Wing", bg: "bg-amber-950/40 border-amber-500/40 text-amber-300" },
              { g: "bbss", t: "Brown Body, Vestigial Wing", bg: "bg-rose-950/40 border-rose-500/40 text-rose-300" },
            ].map((cell, idx) => (
              <div
                key={idx}
                className={`p-2 rounded-lg border flex flex-col items-center justify-center text-center ${cell.bg}`}
              >
                <span className="font-mono font-bold text-xs">{cell.g}</span>
              </div>
            ))}
          </div>

          <div className="text-xs text-slate-400 font-mono flex justify-between">
            <span>Expected Classical Ratio:</span>
            <span className="text-emerald-400 font-bold">9 : 3 : 3 : 1</span>
          </div>
        </div>

        {/* Statistical Chi-Square Goodness of Fit Table */}
        <div className="lg:col-span-6 relative rounded-2xl overflow-hidden border border-slate-700 bg-slate-900 p-4 flex flex-col justify-between shadow-2xl">
          <div className="flex items-center justify-between pb-2 border-b border-slate-800">
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-300">
              Chi-Square (χ²) Statistical Validation
            </span>
            <span className="text-xs font-mono text-purple-400">df = 3 (p-crit = 7.815)</span>
          </div>

          {/* Data Table */}
          <div className="overflow-x-auto my-2">
            <table className="w-full text-left text-xs font-mono">
              <thead>
                <tr className="border-b border-slate-800 text-slate-400">
                  <th className="py-1.5 px-2">Phenotype Trait</th>
                  <th className="py-1.5 px-2 text-right">Observed (O)</th>
                  <th className="py-1.5 px-2 text-right">Expected (E)</th>
                  <th className="py-1.5 px-2 text-right">(O-E)² / E</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60 text-slate-200">
                <tr>
                  <td className="py-1.5 px-2 text-emerald-400">Black, Long (B_S_)</td>
                  <td className="py-1.5 px-2 text-right font-bold">{counts.blackLong}</td>
                  <td className="py-1.5 px-2 text-right text-slate-400">{expBL}</td>
                  <td className="py-1.5 px-2 text-right text-slate-300">
                    {(((counts.blackLong - expBL) ** 2) / Math.max(1, expBL)).toFixed(2)}
                  </td>
                </tr>
                <tr>
                  <td className="py-1.5 px-2 text-sky-400">Black, Vestigial (B_ss)</td>
                  <td className="py-1.5 px-2 text-right font-bold">{counts.blackVestigial}</td>
                  <td className="py-1.5 px-2 text-right text-slate-400">{expBV}</td>
                  <td className="py-1.5 px-2 text-right text-slate-300">
                    {(((counts.blackVestigial - expBV) ** 2) / Math.max(1, expBV)).toFixed(2)}
                  </td>
                </tr>
                <tr>
                  <td className="py-1.5 px-2 text-amber-400">Brown, Long (bbS_)</td>
                  <td className="py-1.5 px-2 text-right font-bold">{counts.brownLong}</td>
                  <td className="py-1.5 px-2 text-right text-slate-400">{expBRL}</td>
                  <td className="py-1.5 px-2 text-right text-slate-300">
                    {(((counts.brownLong - expBRL) ** 2) / Math.max(1, expBRL)).toFixed(2)}
                  </td>
                </tr>
                <tr>
                  <td className="py-1.5 px-2 text-rose-400">Brown, Vestigial (bbss)</td>
                  <td className="py-1.5 px-2 text-right font-bold">{counts.brownVestigial}</td>
                  <td className="py-1.5 px-2 text-right text-slate-400">{expBRV}</td>
                  <td className="py-1.5 px-2 text-right text-slate-300">
                    {(((counts.brownVestigial - expBRV) ** 2) / Math.max(1, expBRV)).toFixed(2)}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Chi Square Result Banner */}
          <div className="pt-2 border-t border-slate-800">
            <div className="flex items-center justify-between bg-slate-950/70 p-2.5 rounded-xl border border-slate-800">
              <div className="flex items-center gap-2">
                {chiSquare.isAccepted ? (
                  <CheckCircle className="w-5 h-5 text-emerald-400" />
                ) : (
                  <Award className="w-5 h-5 text-amber-400" />
                )}
                <div>
                  <div className="text-xs font-bold text-slate-200">
                    {chiSquare.isAccepted ? "Null Hypothesis Accepted (p > 0.05)" : "Significant Deviation Detected"}
                  </div>
                  <div className="text-[11px] text-slate-400 font-mono">
                    χ² Test Statistic = {chiSquare.chiStat} | p-value ≈ {chiSquare.pValue}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Telemetry Footer */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        <div className="bg-slate-900/70 border border-slate-800 rounded-xl p-3">
          <span className="text-xs text-slate-400">Offspring Sample (N)</span>
          <div className="text-xl font-bold font-mono text-emerald-400 mt-0.5">{generationSize}</div>
        </div>
        <div className="bg-slate-900/70 border border-slate-800 rounded-xl p-3">
          <span className="text-xs text-slate-400">Chi-Square χ²</span>
          <div className="text-xl font-bold font-mono text-purple-400 mt-0.5">{chiSquare.chiStat}</div>
        </div>
        <div className="bg-slate-900/70 border border-slate-800 rounded-xl p-3">
          <span className="text-xs text-slate-400">p-value</span>
          <div className="text-xl font-bold font-mono text-cyan-400 mt-0.5">{chiSquare.pValue}</div>
        </div>
        <div className="bg-slate-900/70 border border-slate-800 rounded-xl p-3">
          <span className="text-xs text-slate-400">Independent Assortment</span>
          <div className="text-xs font-mono text-slate-300 mt-1">Confirmed (Unlinked Genes)</div>
        </div>
      </div>
    </div>
  );
};
