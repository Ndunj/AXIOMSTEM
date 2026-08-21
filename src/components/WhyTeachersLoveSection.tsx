import React from "react";
import { educatorTestimonials } from "../data/simulations";
import {
  Star,
  Sparkles,
} from "lucide-react";

export const WhyTeachersLoveSection: React.FC = () => {
  return (
    <section className="py-16 border-t border-slate-800/80 bg-slate-950/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5" /> Proven Pedagogical Impact
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
            Why STEM Department Chairs & Teachers Choose Axiom
          </h2>
          <p className="text-sm text-slate-400">
            Real feedback from verified educators transforming science and math classrooms across the country.
          </p>
        </div>

        {/* Empirical Outcomes Data Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="bg-slate-900/80 border border-slate-800 rounded-3xl p-6 text-center space-y-2">
            <div className="text-3xl sm:text-4xl font-black font-mono text-sky-400">+34%</div>
            <div className="text-sm font-bold text-white">Higher AP Exam Scores</div>
            <p className="text-xs text-slate-400">
              Students who manipulate independent variables in real-time show deeper conceptual mastery on free-response sections.
            </p>
          </div>

          <div className="bg-slate-900/80 border border-slate-800 rounded-3xl p-6 text-center space-y-2">
            <div className="text-3xl sm:text-4xl font-black font-mono text-emerald-400">100%</div>
            <div className="text-sm font-bold text-white">Zero Lab Hazard & Zero Breakage</div>
            <p className="text-xs text-slate-400">
              Perform complex titration and explosive kinetics simulations safely with unlimited re-trials and zero chemical consumable costs.
            </p>
          </div>

          <div className="bg-slate-900/80 border border-slate-800 rounded-3xl p-6 text-center space-y-2">
            <div className="text-3xl sm:text-4xl font-black font-mono text-purple-400">15 min</div>
            <div className="text-sm font-bold text-white">Saved per Lesson Prep</div>
            <p className="text-xs text-slate-400">
              Built-in Gemini AI Lesson Plan Generator outputs standard-aligned lab handouts, essential questions, and rubrics instantly.
            </p>
          </div>
        </div>

        {/* Verified Educator Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
          {educatorTestimonials.map((t, idx) => (
            <div
              key={idx}
              className="bg-slate-900 border border-slate-800 rounded-3xl p-6 flex flex-col justify-between space-y-4 hover:border-slate-700 transition-all shadow-lg"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    {t.verifiedBadge}
                  </span>
                </div>

                <p className="text-xs text-slate-300 italic leading-relaxed">"{t.quote}"</p>
              </div>

              <div className="flex items-center gap-3 pt-3 border-t border-slate-800">
                <img
                  src={t.avatar}
                  alt={t.name}
                  referrerPolicy="no-referrer"
                  className="w-10 h-10 rounded-full object-cover border border-slate-700"
                />
                <div>
                  <div className="text-xs font-bold text-white">{t.name}</div>
                  <div className="text-[11px] text-slate-400">{t.role}</div>
                  <div className="text-[10px] text-slate-500">{t.school}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
