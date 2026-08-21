import React, { useState, useEffect } from "react";
import { CartItem, TeacherPurchasedSimulation } from "../types";
import {
  createLemonCheckoutSession,
  recordSaleForCreator,
  getSavedLemonConfig,
  fetchLemonSqueezyConfig,
  LemonSqueezyConfigResponse
} from "../services/lemonSqueezyService";
import confetti from "canvas-confetti";
import {
  X,
  CreditCard,
  Building,
  CheckCircle,
  FileCheck2,
  Lock,
  Copy,
  Sparkles,
  ArrowRight,
  GraduationCap,
  ShieldCheck,
  ExternalLink,
  Check,
  Smartphone,
  Wallet,
  Globe2,
  Layers
} from "lucide-react";

interface CheckoutModalProps {
  cartItems: CartItem[];
  onClose: () => void;
  onSuccess: (purchased: TeacherPurchasedSimulation[]) => void;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({
  cartItems,
  onClose,
  onSuccess,
}) => {
  const [paymentMethod, setPaymentMethod] = useState<"lemon_card" | "lemon_hosted" | "po">("lemon_card");
  const [schoolName, setSchoolName] = useState("Lincoln High STEM Academy");
  const [district, setDistrict] = useState("San Jose Unified School District");
  const [teacherEmail, setTeacherEmail] = useState("science.lead@sjusd.edu");
  const [poNumber, setPoNumber] = useState("PO-2026-STEM-884");

  // Card Details Form State
  const [cardNumber, setCardNumber] = useState("•••• •••• •••• 4242");
  const [cardExp, setCardExp] = useState("12/28");
  const [cardCvc, setCardCvc] = useState("•••");
  const [cardZip, setCardZip] = useState("95126");
  const [cardholderName, setCardholderName] = useState("Dr. Sarah Lin");

  const [isProcessing, setIsProcessing] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);
  const [issuedLicenses, setIssuedLicenses] = useState<TeacherPurchasedSimulation[]>([]);
  const [copiedKey, setCopiedKey] = useState<string | null>(null);
  const [serverConfig, setServerConfig] = useState<LemonSqueezyConfigResponse | null>(null);

  // Determine recipient Lemon Squeezy Store from cart items or creator setting
  const creatorLemonConfig = getSavedLemonConfig();
  const recipientStoreId =
    cartItems[0]?.simulation?.lemonSqueezyStoreId ||
    cartItems[0]?.simulation?.stripeAccountId ||
    creatorLemonConfig.storeId ||
    "store_axiom_stem_faculty";
  const recipientAuthorName =
    cartItems[0]?.simulation?.lemonSqueezyStoreName ||
    cartItems[0]?.simulation?.authorName ||
    creatorLemonConfig.storeName ||
    "Axiom STEM Publishing Faculty";

  useEffect(() => {
    fetchLemonSqueezyConfig().then(setServerConfig);
  }, []);

  const calculateSubtotal = () => {
    return cartItems.reduce((acc, item) => {
      const price =
        item.licenseTier === "single"
          ? item.simulation.pricing.singleTeacher
          : item.licenseTier === "department"
          ? item.simulation.pricing.schoolDepartment
          : item.simulation.pricing.districtUnlimited;
      return acc + price * item.selectedQuantity;
    }, 0);
  };

  const subtotal = calculateSubtotal();

  const handleCompleteOrder = async () => {
    setIsProcessing(true);

    try {
      // 1. Call Lemon Squeezy Checkout Session API
      const lemonRes = await createLemonCheckoutSession({
        cartItems,
        buyerEmail: teacherEmail,
        schoolName,
        district,
        poNumber: paymentMethod === "po" ? poNumber : undefined,
        sellerStoreId: recipientStoreId,
      });

      // 2. Record transactions in creator Lemon Squeezy payout ledger
      cartItems.forEach((item) => {
        const itemPrice =
          item.licenseTier === "single"
            ? item.simulation.pricing.singleTeacher
            : item.licenseTier === "department"
            ? item.simulation.pricing.schoolDepartment
            : item.simulation.pricing.districtUnlimited;

        recordSaleForCreator(
          item.simulation.title,
          item.licenseTier,
          itemPrice * item.selectedQuantity,
          teacherEmail,
          schoolName,
          recipientStoreId
        );
      });

      // 3. Create new classroom license & PIN records
      const newLicenses: TeacherPurchasedSimulation[] = cartItems.map((item) => ({
        simulationId: item.simulation.id,
        purchaseDate: new Date().toLocaleDateString(),
        licenseTier: item.licenseTier,
        licenseKey: `LS-STEM-${item.simulation.discipline.toUpperCase().slice(0, 3)}-${Math.floor(
          100000 + Math.random() * 900000
        )}`,
        classroomPin: `${Math.floor(100000 + Math.random() * 900000)}`,
        activeStudents: item.licenseTier === "single" ? 150 : item.licenseTier === "department" ? 500 : 2500,
        assignedClasses: ["Period 2: AP Physics", "Period 4: Honors Chemistry"],
      }));

      setIssuedLicenses(newLicenses);
      setIsProcessing(false);
      setIsCompleted(true);

      // Confetti celebration effect
      try {
        confetti({
          particleCount: 120,
          spread: 80,
          origin: { y: 0.6 },
        });
      } catch (e) {}

      onSuccess(newLicenses);
    } catch (e) {
      console.error("Lemon Squeezy order completion error:", e);
      setIsProcessing(false);
    }
  };

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(id);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      <div className="bg-slate-900 border border-amber-500/30 rounded-3xl w-full max-w-2xl max-h-[92vh] overflow-hidden shadow-2xl flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-slate-950 border-b border-slate-800 shrink-0">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-amber-500 via-amber-400 to-emerald-400 p-0.5 text-slate-950 flex items-center justify-center font-bold">
              <Sparkles className="w-4 h-4 text-slate-950" />
            </div>
            <div>
              <h2 className="text-base font-bold text-white">
                {isCompleted ? "Classroom Activation Confirmed!" : "Lemon Squeezy Checkout & School Licensing"}
              </h2>
              <p className="text-xs text-slate-400">
                {isCompleted ? "Your LMS integration keys and PIN are active" : "Merchant of Record Tax-Compliance & Instant License Delivery"}
              </p>
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
        {!isCompleted ? (
          <div className="p-6 space-y-5 overflow-y-auto flex-1">
            {/* Lemon Squeezy MoR & Recipient Seller Indicator */}
            <div className="p-3.5 rounded-2xl bg-amber-950/30 border border-amber-500/30 flex items-center justify-between gap-3 text-xs">
              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-xl bg-amber-500/20 text-amber-300 flex items-center justify-center font-bold">
                  <ShieldCheck className="w-4 h-4 text-amber-400" />
                </div>
                <div>
                  <div className="text-white font-semibold flex items-center gap-1.5">
                    <span>Creator Store:</span>
                    <strong className="text-amber-200">{recipientAuthorName}</strong>
                  </div>
                  <div className="text-[10px] text-slate-400 font-mono">
                    Lemon Squeezy Store: <span className="text-amber-300">{recipientStoreId}</span> (Merchant of Record Direct Royalty)
                  </div>
                </div>
              </div>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30 hidden sm:inline">
                MoR Tax Compliant
              </span>
            </div>

            {/* Payment Method Selector */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
              <button
                type="button"
                onClick={() => setPaymentMethod("lemon_card")}
                className={`p-3 rounded-2xl border flex flex-col justify-between text-left cursor-pointer transition-all ${
                  paymentMethod === "lemon_card"
                    ? "bg-slate-800 border-amber-500 text-white shadow-md shadow-amber-500/15 ring-1 ring-amber-500/40"
                    : "bg-slate-950/60 border-slate-800 text-slate-400 hover:text-slate-200"
                }`}
              >
                <div className="flex items-center justify-between w-full mb-1">
                  <CreditCard className="w-4 h-4 text-amber-400" />
                  <span className="text-[9px] font-bold text-emerald-400 uppercase">Instant</span>
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-200">Card / Apple &amp; Google Pay</div>
                  <div className="text-[10px] text-slate-400">Direct debit &amp; credit checkout</div>
                </div>
              </button>

              <button
                type="button"
                onClick={() => setPaymentMethod("lemon_hosted")}
                className={`p-3 rounded-2xl border flex flex-col justify-between text-left cursor-pointer transition-all ${
                  paymentMethod === "lemon_hosted"
                    ? "bg-slate-800 border-amber-500 text-white shadow-md shadow-amber-500/15 ring-1 ring-amber-500/40"
                    : "bg-slate-950/60 border-slate-800 text-slate-400 hover:text-slate-200"
                }`}
              >
                <div className="flex items-center justify-between w-full mb-1">
                  <ExternalLink className="w-4 h-4 text-amber-400" />
                  <span className="text-[9px] font-bold text-sky-400 uppercase">LemonSqueezy</span>
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-200">Hosted Lemon Checkout</div>
                  <div className="text-[10px] text-slate-400">Official hosted checkout page</div>
                </div>
              </button>

              <button
                type="button"
                onClick={() => setPaymentMethod("po")}
                className={`p-3 rounded-2xl border flex flex-col justify-between text-left cursor-pointer transition-all ${
                  paymentMethod === "po"
                    ? "bg-slate-800 border-amber-500 text-white shadow-md shadow-amber-500/15 ring-1 ring-amber-500/40"
                    : "bg-slate-950/60 border-slate-800 text-slate-400 hover:text-slate-200"
                }`}
              >
                <div className="flex items-center justify-between w-full mb-1">
                  <Building className="w-4 h-4 text-amber-400" />
                  <span className="text-[9px] font-bold text-amber-400 uppercase">Net 30</span>
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-200">District Purchase Order</div>
                  <div className="text-[10px] text-slate-400">Official invoice PO #</div>
                </div>
              </button>
            </div>

            {/* School & Educator Details Form */}
            <div className="space-y-3 bg-slate-950/50 p-4 rounded-2xl border border-slate-800">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1">
                    School / Institution Name
                  </label>
                  <input
                    type="text"
                    value={schoolName}
                    onChange={(e) => setSchoolName(e.target.value)}
                    className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3 py-2 text-xs text-slate-200 focus:outline-none focus:border-amber-500"
                  />
                </div>

                <div>
                  <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1">
                    School District / Academy
                  </label>
                  <input
                    type="text"
                    value={district}
                    onChange={(e) => setDistrict(e.target.value)}
                    className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3 py-2 text-xs text-slate-200 focus:outline-none focus:border-amber-500"
                  />
                </div>
              </div>

              <div>
                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1">
                  Educator Delivery Email (License Keys &amp; Invoices Sent Here)
                </label>
                <input
                  type="email"
                  value={teacherEmail}
                  onChange={(e) => setTeacherEmail(e.target.value)}
                  className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3 py-2 text-xs text-slate-200 focus:outline-none focus:border-amber-500"
                />
              </div>

              {/* In-app Card Element */}
              {paymentMethod === "lemon_card" && (
                <div className="pt-2 border-t border-slate-800/80 space-y-2.5">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                      <Lock className="w-3 h-3 text-emerald-400" />
                      <span>Lemon Squeezy 256-Bit Encrypted Card Details</span>
                    </span>
                    <span className="text-[10px] text-slate-500">PCI-DSS Level 1 &amp; MoR</span>
                  </div>

                  <div className="space-y-2">
                    <div>
                      <input
                        type="text"
                        placeholder="Cardholder Full Name"
                        value={cardholderName}
                        onChange={(e) => setCardholderName(e.target.value)}
                        className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3 py-2 text-xs text-slate-200 focus:outline-none focus:border-amber-500"
                      />
                    </div>

                    <div className="grid grid-cols-3 gap-2">
                      <div className="col-span-2">
                        <input
                          type="text"
                          placeholder="Card Number (4242 ••••)"
                          value={cardNumber}
                          onChange={(e) => setCardNumber(e.target.value)}
                          className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3 py-2 text-xs text-slate-200 font-mono focus:outline-none focus:border-amber-500"
                        />
                      </div>
                      <div className="flex gap-1.5">
                        <input
                          type="text"
                          placeholder="MM/YY"
                          value={cardExp}
                          onChange={(e) => setCardExp(e.target.value)}
                          className="w-1/2 bg-slate-900 border border-slate-800 rounded-xl px-2 py-2 text-xs text-center text-slate-200 font-mono focus:outline-none focus:border-amber-500"
                        />
                        <input
                          type="text"
                          placeholder="CVC"
                          value={cardCvc}
                          onChange={(e) => setCardCvc(e.target.value)}
                          className="w-1/2 bg-slate-900 border border-slate-800 rounded-xl px-2 py-2 text-xs text-center text-slate-200 font-mono focus:outline-none focus:border-amber-500"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {paymentMethod === "po" && (
                <div>
                  <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1">
                    Purchase Order (PO) Number
                  </label>
                  <input
                    type="text"
                    value={poNumber}
                    onChange={(e) => setPoNumber(e.target.value)}
                    className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3 py-2 text-xs text-slate-200 focus:outline-none focus:border-amber-500 font-mono"
                  />
                </div>
              )}
            </div>

            {/* Order Summary Line */}
            <div className="bg-slate-950/70 p-4 rounded-2xl border border-slate-800 flex items-center justify-between">
              <div>
                <div className="text-xs text-slate-400">Total for {cartItems.length} Simulation Licenses</div>
                <div className="text-sm font-bold text-white">Full Classroom PINs + LMS LTI Master Keys</div>
              </div>
              <div className="text-2xl font-black font-mono text-amber-400">${subtotal}</div>
            </div>

            {/* Submit Button */}
            <button
              onClick={handleCompleteOrder}
              disabled={isProcessing}
              className="w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-2xl bg-gradient-to-r from-amber-500 via-amber-400 to-emerald-500 hover:from-amber-400 hover:to-emerald-400 text-slate-950 font-bold text-sm shadow-xl shadow-amber-500/20 disabled:opacity-50 cursor-pointer transition-all active:scale-95"
            >
              {isProcessing ? (
                <span>Authorizing via Lemon Squeezy...</span>
              ) : (
                <>
                  <Lock className="w-4 h-4" />
                  <span>
                    {paymentMethod === "lemon_hosted"
                      ? `Proceed to Lemon Squeezy Checkout ($${subtotal})`
                      : `Authorize & Complete Order ($${subtotal})`}
                  </span>
                </>
              )}
            </button>
          </div>
        ) : (
          /* Success Screen with License Keys & Student PIN */
          <div className="p-6 space-y-5 overflow-y-auto flex-1">
            <div className="text-center space-y-2 py-2">
              <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center mx-auto animate-bounce">
                <CheckCircle className="w-8 h-8 text-emerald-400" />
              </div>
              <h3 className="text-xl font-bold text-white">Payment Received! Congratulations, {schoolName}!</h3>
              <p className="text-xs text-slate-300 max-w-md mx-auto">
                Your order of <strong className="text-emerald-400 font-mono">${subtotal}</strong> has been processed via Lemon Squeezy MoR and royalties credited to{" "}
                <strong className="text-white">{recipientAuthorName}</strong> ({recipientStoreId}).
              </p>
            </div>

            {/* Issued Licenses List */}
            <div className="space-y-3">
              {issuedLicenses.map((lic, i) => (
                <div
                  key={i}
                  className="bg-slate-950/80 p-4 rounded-2xl border border-slate-800 space-y-2"
                >
                  <div className="flex justify-between items-center text-xs">
                    <span className="font-bold text-white font-mono">{lic.simulationId}</span>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                      ACTIVE ({lic.activeStudents} Seats)
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1 text-xs">
                    <div className="bg-slate-900 p-2.5 rounded-xl border border-slate-800 flex items-center justify-between">
                      <div>
                        <span className="text-[10px] text-slate-400 block">Classroom Student PIN</span>
                        <span className="font-mono font-bold text-amber-400 text-sm tracking-wider">
                          {lic.classroomPin}
                        </span>
                      </div>
                      <button
                        onClick={() => copyToClipboard(lic.classroomPin, `pin-${i}`)}
                        className="p-1.5 hover:bg-slate-800 rounded-lg text-slate-400 hover:text-white cursor-pointer"
                      >
                        {copiedKey === `pin-${i}` ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                      </button>
                    </div>

                    <div className="bg-slate-900 p-2.5 rounded-xl border border-slate-800 flex items-center justify-between">
                      <div>
                        <span className="text-[10px] text-slate-400 block">Lemon Squeezy License / LTI Key</span>
                        <span className="font-mono font-bold text-amber-300 text-xs">{lic.licenseKey}</span>
                      </div>
                      <button
                        onClick={() => copyToClipboard(lic.licenseKey, `key-${i}`)}
                        className="p-1.5 hover:bg-slate-800 rounded-lg text-slate-400 hover:text-white cursor-pointer"
                      >
                        {copiedKey === `key-${i}` ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <button
              onClick={onClose}
              className="w-full py-3 rounded-2xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs cursor-pointer transition-all flex items-center justify-center gap-2"
            >
              <GraduationCap className="w-4 h-4" />
              <span>Go to Teacher Library</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};


