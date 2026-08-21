import React from "react";
import { STEMDiscipline } from "../types";

interface FilterBarProps {
  selectedDiscipline: STEMDiscipline | "all";
  onSelectDiscipline: (d: STEMDiscipline | "all") => void;
  selectedGrade: string;
  onSelectGrade: (g: string) => void;
  sortBy: string;
  onSelectSort: (s: string) => void;
  counts: Record<string, number>;
}

export const SubjectFilterBar: React.FC<FilterBarProps> = ({
  selectedDiscipline,
  onSelectDiscipline,
  selectedGrade,
  onSelectGrade,
  sortBy,
  onSelectSort,
  counts,
}) => {
  const disciplines: Array<{ id: STEMDiscipline | "all"; label: string; icon: string }> = [
    { id: "all", label: "All Disciplines", icon: "🌐" },
    { id: "physics", label: "Physics", icon: "⚡" },
    { id: "chemistry", label: "Chemistry", icon: "🧪" },
    { id: "biology", label: "Biology", icon: "🧬" },
    { id: "mathematics", label: "Mathematics", icon: "📐" },
  ];

  return (
    <div className="space-y-4">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        {/* Discipline Pills */}
        <div className="flex flex-wrap items-center gap-2">
          {disciplines.map((d) => {
            const count = counts[d.id] || 0;
            const isSelected = selectedDiscipline === d.id;

            return (
              <button
                key={d.id}
                onClick={() => onSelectDiscipline(d.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-2xl text-xs font-bold cursor-pointer transition-all border ${
                  isSelected
                    ? "bg-slate-100 text-slate-950 border-white shadow-lg shadow-white/10 scale-102"
                    : "bg-slate-900/80 hover:bg-slate-800 text-slate-300 border-slate-800"
                }`}
              >
                <span>{d.icon}</span>
                <span>{d.label}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.5 rounded-full font-mono ${
                    isSelected ? "bg-slate-300 text-slate-950" : "bg-slate-800 text-slate-400"
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Filter dropdowns */}
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5 bg-slate-900 border border-slate-800 rounded-xl px-3 py-1.5 text-xs text-slate-300">
            <span className="text-slate-500">Grade:</span>
            <select
              value={selectedGrade}
              onChange={(e) => onSelectGrade(e.target.value)}
              className="bg-transparent text-slate-200 focus:outline-none cursor-pointer font-medium"
            >
              <option value="all">All Grades (6-14)</option>
              <option value="Middle School">Middle School (6-8)</option>
              <option value="High School">High School (9-12)</option>
              <option value="AP / IB">AP / IB Advanced</option>
            </select>
          </div>

          <div className="flex items-center gap-1.5 bg-slate-900 border border-slate-800 rounded-xl px-3 py-1.5 text-xs text-slate-300">
            <span className="text-slate-500">Sort:</span>
            <select
              value={sortBy}
              onChange={(e) => onSelectSort(e.target.value)}
              className="bg-transparent text-slate-200 focus:outline-none cursor-pointer font-medium"
            >
              <option value="last-modified">Recently Modified</option>
              <option value="popular">Most Popular</option>
              <option value="rating">Highest Rated</option>
              <option value="price-asc">Price: Low to High</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};
