import React, { useState } from "react";
import { CurriculumStandard, STEMDiscipline, GradeLevel, SimulationItem } from "../types";
import {
  X,
  Plus,
  BookOpen,
  CheckCircle2,
  Trash2,
  Edit2,
  Search,
  Filter,
  Layers,
  Award,
  Sparkles,
  ArrowRight,
  ShieldCheck
} from "lucide-react";

interface StandardsManagerModalProps {
  standards: CurriculumStandard[];
  simulations: SimulationItem[];
  onSaveStandard: (standard: CurriculumStandard) => void;
  onDeleteStandard: (standardId: string) => void;
  onClose: () => void;
}

export const StandardsManagerModal: React.FC<StandardsManagerModalProps> = ({
  standards,
  simulations,
  onSaveStandard,
  onDeleteStandard,
  onClose,
}) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedDiscipline, setSelectedDiscipline] = useState<string>("all");

  // Form State for creating/editing
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState<string | null>(null);
  const [code, setCode] = useState("");
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState<CurriculumStandard["category"]>("NGSS");
  const [discipline, setDiscipline] = useState<STEMDiscipline>("physics");
  const [gradeLevel, setGradeLevel] = useState<GradeLevel>("High School (9-12)");
  const [description, setDescription] = useState("");
  const [formError, setFormError] = useState("");

  const handleOpenCreate = () => {
    setEditId(null);
    setCode("");
    setTitle("");
    setCategory("NGSS");
    setDiscipline("physics");
    setGradeLevel("High School (9-12)");
    setDescription("");
    setFormError("");
    setIsEditing(true);
  };

  const handleOpenEdit = (std: CurriculumStandard) => {
    setEditId(std.id);
    setCode(std.code);
    setTitle(std.title);
    setCategory(std.category);
    setDiscipline(std.discipline);
    setGradeLevel(std.gradeLevel);
    setDescription(std.description);
    setFormError("");
    setIsEditing(true);
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (!code.trim()) {
      setFormError("Standard code is required (e.g., HS-PS4-1, AP Physics 1 Unit 2)");
      return;
    }
    if (!title.trim()) {
      setFormError("Standard title / description is required");
      return;
    }

    const newStandard: CurriculumStandard = {
      id: editId || `std-custom-${Date.now()}`,
      code: code.trim().toUpperCase(),
      title: title.trim(),
      category,
      discipline,
      gradeLevel,
      description: description.trim(),
      createdAt: new Date().toISOString().split("T")[0],
    };

    onSaveStandard(newStandard);
    setIsEditing(false);
    setEditId(null);
  };

  // Filtered list of standards
  const filteredStandards = standards.filter((std) => {
    const matchesSearch =
      std.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
      std.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      std.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "all" || std.category === selectedCategory;
    const matchesDiscipline = selectedDiscipline === "all" || std.discipline === selectedDiscipline;
    return matchesSearch && matchesCategory && matchesDiscipline;
  });

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      <div className="bg-slate-900 border border-slate-700/80 rounded-3xl w-full max-w-5xl overflow-hidden shadow-2xl flex flex-col max-h-[92vh]">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-slate-950/90 border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-400">
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-lg font-bold text-white">Curriculum Standards Authoring Studio</h2>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20 flex items-center gap-1">
                  <ShieldCheck className="w-3 h-3" /> Master Creator Only
                </span>
              </div>
              <p className="text-xs text-slate-400">
                Author, index, and manage educational standards (NGSS, AP, IB, State) to tag on your uploaded simulations.
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white rounded-xl hover:bg-slate-800/80 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body content */}
        <div className="p-6 overflow-y-auto flex-1 space-y-6">
          {/* Top Bar: Search, Filters, and New Standard CTA */}
          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3">
            <div className="flex-1 flex flex-wrap items-center gap-2.5">
              <div className="relative flex-1 min-w-[200px]">
                <Search className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search standard codes, titles, or descriptions..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-4 py-2 bg-slate-950 border border-slate-800 rounded-xl text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-amber-500/50"
                />
              </div>

              {/* Category Filter */}
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="bg-slate-950 border border-slate-800 rounded-xl text-xs text-slate-300 px-3 py-2 focus:outline-none focus:border-amber-500/50 cursor-pointer"
              >
                <option value="all">All Categories</option>
                <option value="NGSS">NGSS (Next Gen)</option>
                <option value="AP">AP / Advanced Placement</option>
                <option value="IB">IB Diploma</option>
                <option value="Common Core">Common Core</option>
                <option value="State Standards">State Standards</option>
                <option value="Custom">Custom Framework</option>
              </select>

              {/* Discipline Filter */}
              <select
                value={selectedDiscipline}
                onChange={(e) => setSelectedDiscipline(e.target.value)}
                className="bg-slate-950 border border-slate-800 rounded-xl text-xs text-slate-300 px-3 py-2 focus:outline-none focus:border-amber-500/50 cursor-pointer capitalize"
              >
                <option value="all">All Disciplines</option>
                <option value="physics">Physics</option>
                <option value="chemistry">Chemistry</option>
                <option value="biology">Biology</option>
                <option value="mathematics">Mathematics</option>
              </select>
            </div>

            <button
              onClick={handleOpenCreate}
              className="px-4 py-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold text-xs rounded-xl shadow-lg shadow-amber-500/20 transition-all flex items-center justify-center gap-1.5 cursor-pointer shrink-0"
            >
              <Plus className="w-4 h-4" />
              <span>+ Create Standard</span>
            </button>
          </div>

          {/* Form Modal / Drawer when creating/editing */}
          {isEditing && (
            <div className="bg-slate-950 border border-amber-500/30 rounded-2xl p-5 space-y-4 shadow-xl">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <div className="flex items-center gap-2">
                  <span className="p-1.5 rounded-lg bg-amber-500/20 text-amber-300">
                    <Sparkles className="w-4 h-4" />
                  </span>
                  <h3 className="text-sm font-bold text-white">
                    {editId ? "Edit Curriculum Standard" : "Author New Curriculum Standard"}
                  </h3>
                </div>
                <button
                  onClick={() => setIsEditing(false)}
                  className="text-xs text-slate-400 hover:text-white px-2 py-1 rounded-lg hover:bg-slate-800"
                >
                  Cancel
                </button>
              </div>

              {formError && (
                <div className="text-xs text-rose-400 bg-rose-500/10 border border-rose-500/20 p-2.5 rounded-xl">
                  {formError}
                </div>
              )}

              <form onSubmit={handleSave} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div>
                    <label className="text-[11px] font-semibold text-slate-300 block mb-1">
                      Standard Code *
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. HS-PS4-1 or AP-PHYS-2"
                      value={code}
                      onChange={(e) => setCode(e.target.value)}
                      className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white uppercase focus:outline-none focus:border-amber-500/50"
                    />
                  </div>

                  <div>
                    <label className="text-[11px] font-semibold text-slate-300 block mb-1">
                      Category Framework
                    </label>
                    <select
                      value={category}
                      onChange={(e) => setCategory(e.target.value as any)}
                      className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-amber-500/50"
                    >
                      <option value="NGSS">NGSS (Next Generation Science)</option>
                      <option value="AP">AP (Advanced Placement)</option>
                      <option value="IB">IB (International Baccalaureate)</option>
                      <option value="Common Core">Common Core Math</option>
                      <option value="State Standards">State Specific (TEKS, NY Regents, etc.)</option>
                      <option value="Custom">Custom Curriculum Standard</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-[11px] font-semibold text-slate-300 block mb-1">
                      STEM Discipline
                    </label>
                    <select
                      value={discipline}
                      onChange={(e) => setDiscipline(e.target.value as any)}
                      className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white capitalize focus:outline-none focus:border-amber-500/50"
                    >
                      <option value="physics">Physics</option>
                      <option value="chemistry">Chemistry</option>
                      <option value="biology">Biology</option>
                      <option value="mathematics">Mathematics</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="text-[11px] font-semibold text-slate-300 block mb-1">
                      Standard Title / Topic Name *
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Wave Superposition and Frequency Calculations"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                      className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-amber-500/50"
                    />
                  </div>

                  <div>
                    <label className="text-[11px] font-semibold text-slate-300 block mb-1">
                      Grade Level Target
                    </label>
                    <select
                      value={gradeLevel}
                      onChange={(e) => setGradeLevel(e.target.value as any)}
                      className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-amber-500/50"
                    >
                      <option value="Middle School (6-8)">Middle School (6-8)</option>
                      <option value="High School (9-12)">High School (9-12)</option>
                      <option value="AP / IB STEM">AP / IB STEM</option>
                      <option value="Undergraduate">Undergraduate / College Prep</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-[11px] font-semibold text-slate-300 block mb-1">
                    Full Standard Description & Evidence Statement
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Describe what students are expected to know, calculate, or demonstrate using interactive simulations aligned to this standard..."
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-amber-500/50"
                  />
                </div>

                <div className="flex items-center justify-end gap-2 pt-2">
                  <button
                    type="button"
                    onClick={() => setIsEditing(false)}
                    className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold rounded-xl"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-5 py-2 bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-bold rounded-xl shadow-md transition-all cursor-pointer"
                  >
                    {editId ? "Update Standard" : "Save Standard"}
                  </button>
                </div>
              </form>
            </div>
          )}

          {/* Standards List Table / Grid */}
          <div className="space-y-3">
            <div className="flex items-center justify-between text-xs text-slate-400 px-1">
              <span>Showing {filteredStandards.length} Standards</span>
              <span className="text-[11px]">Used across {simulations.length} uploaded simulations</span>
            </div>

            {filteredStandards.length === 0 ? (
              <div className="bg-slate-950/60 border border-dashed border-slate-800 rounded-2xl p-8 text-center space-y-3">
                <BookOpen className="w-8 h-8 text-slate-600 mx-auto" />
                <h4 className="text-sm font-semibold text-slate-300">No standards found</h4>
                <p className="text-xs text-slate-500 max-w-sm mx-auto">
                  No standards match your filter criteria. Author a new standard above to tag your custom HTML simulations.
                </p>
                <button
                  onClick={handleOpenCreate}
                  className="px-4 py-2 bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 border border-amber-500/30 text-xs font-bold rounded-xl inline-flex items-center gap-1.5"
                >
                  <Plus className="w-4 h-4" />
                  <span>Create First Standard</span>
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {filteredStandards.map((std) => {
                  // Count matching simulations
                  const matchingSims = simulations.filter(
                    (s) =>
                      s.standards.includes(std.code) ||
                      s.standards.some((codeStr) => codeStr.toLowerCase().includes(std.code.toLowerCase()))
                  );

                  return (
                    <div
                      key={std.id}
                      className="bg-slate-950 border border-slate-800 hover:border-slate-700 rounded-2xl p-4 flex flex-col justify-between gap-3 transition-all group"
                    >
                      <div className="space-y-2">
                        <div className="flex items-start justify-between gap-2">
                          <div className="flex items-center gap-2">
                            <span className="font-mono text-xs font-black text-amber-400 px-2 py-0.5 rounded-lg bg-amber-500/10 border border-amber-500/20">
                              {std.code}
                            </span>
                            <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-800 text-slate-300 border border-slate-700">
                              {std.category}
                            </span>
                          </div>

                          <div className="flex items-center gap-1 opacity-80 group-hover:opacity-100 transition-opacity">
                            <button
                              onClick={() => handleOpenEdit(std)}
                              className="p-1.5 text-slate-400 hover:text-amber-400 rounded-lg hover:bg-slate-900 transition-colors"
                              title="Edit Standard"
                            >
                              <Edit2 className="w-3.5 h-3.5" />
                            </button>
                            <button
                              onClick={() => {
                                if (confirm(`Are you sure you want to delete standard ${std.code}?`)) {
                                  onDeleteStandard(std.id);
                                }
                              }}
                              className="p-1.5 text-slate-400 hover:text-rose-400 rounded-lg hover:bg-slate-900 transition-colors"
                              title="Delete Standard"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        </div>

                        <div>
                          <h4 className="text-sm font-bold text-white">{std.title}</h4>
                          <p className="text-xs text-slate-400 mt-1 line-clamp-2 leading-relaxed">
                            {std.description || "No extended description provided."}
                          </p>
                        </div>
                      </div>

                      <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400">
                        <div className="flex items-center gap-2 capitalize">
                          <span className="text-slate-300 font-medium">{std.discipline}</span>
                          <span>•</span>
                          <span>{std.gradeLevel}</span>
                        </div>
                        <span className="text-amber-400/90 font-mono text-[10px]">
                          {matchingSims.length} {matchingSims.length === 1 ? "simulation" : "simulations"} linked
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-3.5 bg-slate-950 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
          <span>Standards automatically sync with Gemini AI lesson plan prompts and catalog filters.</span>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white font-semibold text-xs rounded-xl"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
};
