import React, { useState } from "react";
import { X, FileCheck, Building, Printer, CheckCircle, Download, Send, Sparkles } from "lucide-react";

interface QuoteModalProps {
  onClose: () => void;
}

export const QuoteRequestModal: React.FC<QuoteModalProps> = ({ onClose }) => {
  const [districtName, setDistrictName] = useState("San Jose Unified School District");
  const [contactName, setContactName] = useState("Dr. Marcus Vance");
  const [email, setEmail] = useState("m.vance@sjusd.org");
  const [teacherCount, setTeacherCount] = useState(12);
  const [disciplines, setDisciplines] = useState<string[]>(["Physics", "Chemistry", "Biology", "Mathematics"]);
  const [isGenerated, setIsGenerated] = useState(false);
  const [quoteData, setQuoteData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleGenerateQuote = async () => {
    setIsLoading(true);
    try {
      const res = await fetch("/api/quotes/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          schoolName: districtName,
          contactName,
          email,
          teacherCount,
          disciplines,
          notes: "Includes all 4 STEM disciplines with AI Lesson Planner & Canvas LTI integration.",
        }),
      });
      const data = await res.json();
      setQuoteData(data.quote);
      setIsGenerated(true);
    } catch (e) {
      console.error(e);
    } finally {
      setIsLoading(false);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      <div className="bg-slate-900 border border-slate-700/80 rounded-3xl w-full max-w-2xl overflow-hidden shadow-2xl flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-slate-950 border-b border-slate-800">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center">
              <FileCheck className="w-4 h-4" />
            </div>
            <div>
              <h2 className="text-base font-bold text-white">District Purchase Order (PO) Quotation</h2>
              <p className="text-xs text-slate-400">Formal quote with Vendor Tax ID & Sole Source Justification</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-slate-200 hover:bg-slate-800 rounded-xl cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        {!isGenerated ? (
          <div className="p-6 space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block mb-1">
                  School District or High School
                </label>
                <input
                  type="text"
                  value={districtName}
                  onChange={(e) => setDistrictName(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-slate-200 focus:outline-none focus:border-amber-500"
                />
              </div>

              <div>
                <label className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block mb-1">
                  Department Head / Lead Contact
                </label>
                <input
                  type="text"
                  value={contactName}
                  onChange={(e) => setContactName(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-slate-200 focus:outline-none focus:border-amber-500"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block mb-1">
                  Official Email for Quote Delivery
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-slate-200 focus:outline-none focus:border-amber-500"
                />
              </div>

              <div>
                <label className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block mb-1">
                  Number of STEM Educators
                </label>
                <input
                  type="number"
                  min={1}
                  max={200}
                  value={teacherCount}
                  onChange={(e) => setTeacherCount(Number(e.target.value))}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-slate-200 focus:outline-none focus:border-amber-500"
                />
              </div>
            </div>

            <div className="p-4 bg-slate-950/70 rounded-2xl border border-slate-800 text-xs text-slate-300 space-y-2">
              <div className="font-bold text-amber-400">Included District Procurement Benefits:</div>
              <ul className="list-disc pl-4 space-y-1 text-slate-400 text-[11px]">
                <li>Vendor W-9, SAM.gov UEI & Tax Exemption pre-populated</li>
                <li>Net-30 payment terms standard on all school purchase orders</li>
                <li>Enterprise LTI 1.3 integration for Canvas, Google Classroom & Schoology</li>
                <li>Unlimited student logins with FERPA / COPPA compliant zero-PII storage</li>
              </ul>
            </div>

            <button
              onClick={handleGenerateQuote}
              disabled={isLoading}
              className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-slate-950 font-black text-xs shadow-lg shadow-amber-500/20 disabled:opacity-50 cursor-pointer transition-all active:scale-95 flex items-center justify-center gap-2"
            >
              {isLoading ? "Generating District Quote Document..." : "Generate Official Net-30 Quote"}
            </button>
          </div>
        ) : (
          <div className="p-6 space-y-5 overflow-y-auto print:text-black">
            {/* Quote Certificate */}
            <div className="bg-slate-950 p-5 rounded-2xl border border-slate-800 space-y-4 font-mono text-xs text-slate-300">
              <div className="flex justify-between items-start border-b border-slate-800 pb-3">
                <div>
                  <div className="text-base font-bold text-white">AXIOM STEM LEARNING INC.</div>
                  <div className="text-[11px] text-slate-400">Tax ID / EIN: 84-2938102 • DUNS: 08-392-1049</div>
                  <div className="text-[11px] text-slate-400">SAM.gov UEI: JEK492048NM1</div>
                </div>
                <div className="text-right">
                  <div className="text-amber-400 font-bold text-sm">{quoteData.quoteId}</div>
                  <div className="text-[11px] text-slate-400">Valid: {quoteData.validUntil}</div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2 text-[11px]">
                <div>
                  <span className="text-slate-500 block">ISSUED TO:</span>
                  <span className="font-bold text-slate-200">{quoteData.schoolName}</span>
                  <span className="block text-slate-400">Attn: {quoteData.contactName}</span>
                </div>
                <div className="text-right">
                  <span className="text-slate-500 block">PAYMENT TERMS:</span>
                  <span className="font-bold text-emerald-400">Net 30 via School PO</span>
                </div>
              </div>

              <div className="border-t border-b border-slate-800 py-2 space-y-1">
                <div className="flex justify-between font-bold text-slate-200">
                  <span>District STEM Multi-Discipline Package ({quoteData.teacherCount} Teachers)</span>
                  <span>${quoteData.totalAmount}</span>
                </div>
                <div className="text-[10px] text-slate-500">
                  Includes Physics, Chemistry, Biology & Mathematics + AI Lesson Builder + Canvas LTI
                </div>
              </div>

              <div className="flex justify-between items-baseline pt-1">
                <span className="font-bold text-white">Total Amount Due:</span>
                <span className="text-xl font-black text-amber-400">${quoteData.totalAmount} USD</span>
              </div>
            </div>

            <div className="flex gap-2">
              <button
                onClick={handlePrint}
                className="flex-1 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold border border-slate-700 flex items-center justify-center gap-2 cursor-pointer"
              >
                <Printer className="w-4 h-4" /> Print / Save Formal PDF
              </button>

              <button
                onClick={onClose}
                className="px-5 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-bold cursor-pointer"
              >
                Done
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
