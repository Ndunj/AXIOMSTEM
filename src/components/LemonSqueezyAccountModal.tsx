import React, { useState, useEffect } from "react";
import { LemonSqueezyStoreConfig, LemonSqueezyPayoutTransaction, UserProfile } from "../types";
import {
  getSavedLemonConfig,
  saveLemonConfig,
  getSavedTransactions,
  executeCreatorPayout,
  connectLemonSqueezyStore,
  fetchLemonSqueezyConfig,
  LemonSqueezyConfigResponse
} from "../services/lemonSqueezyService";
import confetti from "canvas-confetti";
import {
  X,
  CreditCard,
  Building2,
  DollarSign,
  TrendingUp,
  ShieldCheck,
  CheckCircle2,
  ArrowUpRight,
  RefreshCw,
  ExternalLink,
  Lock,
  Copy,
  Check,
  Send,
  Sparkles,
  AlertCircle,
  HelpCircle,
  Clock,
  Landmark,
  Wallet,
  Receipt,
  FileCheck2,
  Key,
  Globe2
} from "lucide-react";

interface LemonSqueezyAccountModalProps {
  currentUser?: UserProfile | null;
  onClose: () => void;
}

export const LemonSqueezyAccountModal: React.FC<LemonSqueezyAccountModalProps> = ({
  currentUser,
  onClose,
}) => {
  const [config, setConfig] = useState<LemonSqueezyStoreConfig>(() => getSavedLemonConfig());
  const [transactions, setTransactions] = useState<LemonSqueezyPayoutTransaction[]>(() => getSavedTransactions());
  const [serverInfo, setServerInfo] = useState<LemonSqueezyConfigResponse | null>(null);

  // Edit / Connect Store Form State
  const [isEditing, setIsEditing] = useState(false);
  const [storeName, setStoreName] = useState(config.storeName);
  const [accountEmail, setAccountEmail] = useState(config.accountEmail);
  const [customStoreId, setCustomStoreId] = useState(config.storeId);
  const [storeUrl, setStoreUrl] = useState(config.storeUrl);
  const [country, setCountry] = useState(config.country || "US");
  const [payoutSchedule, setPayoutSchedule] = useState(config.payoutSchedule || "bi_weekly");
  const [revenueShare, setRevenueShare] = useState(config.defaultRevenueSharePercent || 90);

  // Payout withdrawal modal/action
  const [isPayoutModalOpen, setIsPayoutModalOpen] = useState(false);
  const [payoutAmount, setPayoutAmount] = useState<string>(String(config.availableBalance));
  const [isProcessingPayout, setIsProcessingPayout] = useState(false);
  const [payoutSuccessMsg, setPayoutSuccessMsg] = useState<string | null>(null);

  const [copiedId, setCopiedId] = useState(false);
  const [isConnecting, setIsConnecting] = useState(false);

  useEffect(() => {
    fetchLemonSqueezyConfig().then((info) => {
      setServerInfo(info);
    });
  }, []);

  const handleCopyStoreId = () => {
    navigator.clipboard.writeText(config.storeId);
    setCopiedId(true);
    setTimeout(() => setCopiedId(false), 2000);
  };

  const handleSaveStoreSettings = (e: React.FormEvent) => {
    e.preventDefault();
    const updated: LemonSqueezyStoreConfig = {
      ...config,
      storeId: customStoreId.trim() || `store_${Math.random().toString(36).substring(2, 9)}`,
      storeName: storeName.trim() || "STEM Educator / Creator",
      storeUrl: storeUrl.trim() || `https://${customStoreId || "store"}.lemonsqueezy.com`,
      accountEmail: accountEmail.trim() || currentUser?.email || "author@school.edu",
      country,
      payoutSchedule: payoutSchedule as any,
      defaultRevenueSharePercent: Number(revenueShare) || 90,
      status: "connected",
      merchantOfRecord: true,
      payoutsEnabled: true,
    };
    setConfig(updated);
    saveLemonConfig(updated);
    setIsEditing(false);
  };

  const handleConnectWithLemonSqueezy = async () => {
    setIsConnecting(true);
    try {
      const result = await connectLemonSqueezyStore({
        accountEmail: accountEmail || currentUser?.email || "author@axiomlabs.edu",
        storeName: storeName || currentUser?.displayName || "Dr. STEM Author",
        storeId: customStoreId,
        storeUrl,
        country,
      });

      const updated = getSavedLemonConfig();
      setConfig(updated);
      setIsEditing(false);

      if (result.dashboardUrl && result.isLiveLemonSqueezy) {
        window.open(result.dashboardUrl, "_blank");
      }
    } finally {
      setIsConnecting(false);
    }
  };

  const handleExecuteWithdrawal = async () => {
    const amount = Number(payoutAmount);
    if (!amount || amount <= 0 || amount > config.availableBalance) return;

    setIsProcessingPayout(true);
    try {
      const res = await executeCreatorPayout(
        config.storeId,
        amount,
        "Axiom STEM simulation licensing sales instant payout"
      );

      setIsProcessingPayout(false);
      setIsPayoutModalOpen(false);
      setPayoutSuccessMsg(`Successfully queued $${amount.toFixed(2)} payout via Lemon Squeezy Merchant of Record!`);
      
      const updated = getSavedLemonConfig();
      setConfig(updated);

      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
        });
      } catch (_) {}

      setTimeout(() => setPayoutSuccessMsg(null), 6000);
    } catch (e) {
      setIsProcessingPayout(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl bg-slate-900 border border-amber-500/30 rounded-3xl shadow-2xl overflow-hidden my-8 text-slate-100 flex flex-col max-h-[92vh]">
        {/* Header */}
        <div className="px-6 py-5 bg-gradient-to-r from-amber-950/60 via-slate-900 to-slate-950 border-b border-amber-500/20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400 shadow-inner">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-lg font-bold text-white tracking-tight">
                  Lemon Squeezy Store &amp; Creator Payouts
                </h2>
                <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30 flex items-center gap-1">
                  <ShieldCheck className="w-3 h-3 text-amber-400" />
                  Merchant of Record
                </span>
                {serverInfo?.mode === "live" ? (
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                    Live API Connected
                  </span>
                ) : (
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-slate-800 text-slate-300 border border-slate-700">
                    Simulator / Test Mode
                  </span>
                )}
              </div>
              <p className="text-xs text-slate-400 mt-0.5">
                Global tax compliance, automated student licenses, and direct teacher-to-creator earnings
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white rounded-xl hover:bg-slate-800/80 transition-colors cursor-pointer"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Success Banner */}
        {payoutSuccessMsg && (
          <div className="mx-6 mt-4 p-3.5 bg-emerald-500/15 border border-emerald-500/40 rounded-2xl flex items-center justify-between text-xs text-emerald-200 animate-in slide-in-from-top-2">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>{payoutSuccessMsg}</span>
            </div>
            <button
              onClick={() => setPayoutSuccessMsg(null)}
              className="text-emerald-400 hover:text-emerald-200 font-bold"
            >
              Dismiss
            </button>
          </div>
        )}

        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {/* Top Metric Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Available Balance */}
            <div className="bg-slate-950/70 border border-amber-500/30 rounded-2xl p-4 relative overflow-hidden group">
              <div className="flex items-center justify-between text-xs text-slate-400 mb-1">
                <span className="font-semibold text-amber-300">Available Balance</span>
                <Wallet className="w-4 h-4 text-amber-400" />
              </div>
              <div className="text-2xl font-black text-white tracking-tight">
                ${config.availableBalance.toFixed(2)}
              </div>
              <div className="mt-2 flex items-center justify-between">
                <span className="text-[11px] text-slate-400">Ready for payout</span>
                <button
                  onClick={() => {
                    setPayoutAmount(String(config.availableBalance));
                    setIsPayoutModalOpen(true);
                  }}
                  disabled={config.availableBalance <= 0}
                  className="px-2.5 py-1 bg-amber-500 hover:bg-amber-400 disabled:opacity-40 disabled:hover:bg-amber-500 text-slate-950 text-[11px] font-bold rounded-lg transition-all cursor-pointer shadow-sm flex items-center gap-1"
                >
                  <Send className="w-3 h-3" />
                  <span>Withdraw</span>
                </button>
              </div>
            </div>

            {/* Total Gross Volume */}
            <div className="bg-slate-950/70 border border-slate-800 rounded-2xl p-4">
              <div className="flex items-center justify-between text-xs text-slate-400 mb-1">
                <span>Total Simulation Volume</span>
                <TrendingUp className="w-4 h-4 text-sky-400" />
              </div>
              <div className="text-2xl font-black text-white tracking-tight">
                ${config.totalGrossVolume.toFixed(2)}
              </div>
              <div className="mt-2 text-[11px] text-sky-400 font-medium">
                Lifetime School Licenses Sold
              </div>
            </div>

            {/* MoR Revenue Share */}
            <div className="bg-slate-950/70 border border-slate-800 rounded-2xl p-4">
              <div className="flex items-center justify-between text-xs text-slate-400 mb-1">
                <span>Creator Revenue Share</span>
                <DollarSign className="w-4 h-4 text-emerald-400" />
              </div>
              <div className="text-2xl font-black text-emerald-300 tracking-tight">
                {config.defaultRevenueSharePercent}%
              </div>
              <div className="mt-2 text-[11px] text-slate-400">
                Lemon Squeezy MoR takes ~5% fee + tax
              </div>
            </div>

            {/* Connected Store */}
            <div className="bg-slate-950/70 border border-slate-800 rounded-2xl p-4 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between text-xs text-slate-400 mb-1">
                  <span>Store Status</span>
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                </div>
                <div className="text-sm font-bold text-white truncate" title={config.storeName}>
                  {config.storeName}
                </div>
                <div className="text-[11px] text-amber-300/80 font-mono mt-0.5 truncate">
                  {config.storeId}
                </div>
              </div>
              <div className="mt-2 flex items-center justify-between">
                <button
                  onClick={handleCopyStoreId}
                  className="text-[10px] text-slate-400 hover:text-white flex items-center gap-1 cursor-pointer transition-colors"
                >
                  {copiedId ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                  <span>{copiedId ? "Copied!" : "Copy Store ID"}</span>
                </button>
                <button
                  onClick={() => setIsEditing(!isEditing)}
                  className="text-[11px] font-semibold text-amber-400 hover:underline cursor-pointer"
                >
                  {isEditing ? "Cancel" : "Edit Store"}
                </button>
              </div>
            </div>
          </div>

          {/* Merchant of Record Benefits Explainer Banner */}
          <div className="p-4 rounded-2xl bg-gradient-to-r from-amber-950/40 via-slate-950 to-slate-950 border border-amber-500/20 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-amber-400" />
                <h3 className="text-xs font-bold text-amber-200">
                  Why Lemon Squeezy? (Merchant of Record Protection)
                </h3>
              </div>
              <p className="text-[11px] text-slate-300 leading-relaxed max-w-2xl">
                Lemon Squeezy automatically calculates, collects, and remits global sales tax, VAT, and GST in 135+ countries. You never have to register for international tax IDs or handle chargebacks—you simply receive net royalties.
              </p>
            </div>
            <div className="flex items-center gap-2 shrink-0">
              <a
                href="https://app.lemonsqueezy.com"
                target="_blank"
                rel="noreferrer"
                className="px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium border border-slate-700 flex items-center gap-1.5 transition-colors"
              >
                <span>Lemon Squeezy Hub</span>
                <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
              </a>
            </div>
          </div>

          {/* Edit Store Settings Panel (Collapsible) */}
          {isEditing && (
            <div className="bg-slate-950 border border-amber-500/40 rounded-2xl p-5 space-y-4 animate-in slide-in-from-top-2">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <h3 className="text-sm font-bold text-white flex items-center gap-2">
                  <Building2 className="w-4 h-4 text-amber-400" />
                  <span>Configure Lemon Squeezy Store Details</span>
                </h3>
                <span className="text-[11px] text-slate-400">
                  Syncs with your Lemon Squeezy API &amp; Webhooks
                </span>
              </div>

              <form onSubmit={handleSaveStoreSettings} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-[11px] font-bold text-slate-300 uppercase tracking-wider block mb-1">
                      Store Name / Creator Studio
                    </label>
                    <input
                      type="text"
                      value={storeName}
                      onChange={(e) => setStoreName(e.target.value)}
                      required
                      placeholder="e.g. Dr. Elena Rostova STEM Labs"
                      className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3.5 py-2 text-xs text-white focus:outline-none focus:border-amber-500"
                    />
                  </div>

                  <div>
                    <label className="text-[11px] font-bold text-slate-300 uppercase tracking-wider block mb-1">
                      Store ID or Slug
                    </label>
                    <input
                      type="text"
                      value={customStoreId}
                      onChange={(e) => setCustomStoreId(e.target.value)}
                      placeholder="e.g. store_axiom_1234 or 12345"
                      className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3.5 py-2 text-xs text-amber-300 font-mono focus:outline-none focus:border-amber-500"
                    />
                  </div>

                  <div>
                    <label className="text-[11px] font-bold text-slate-300 uppercase tracking-wider block mb-1">
                      Payout Contact Email
                    </label>
                    <input
                      type="email"
                      value={accountEmail}
                      onChange={(e) => setAccountEmail(e.target.value)}
                      required
                      placeholder="creator@school.edu"
                      className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3.5 py-2 text-xs text-white focus:outline-none focus:border-amber-500"
                    />
                  </div>

                  <div>
                    <label className="text-[11px] font-bold text-slate-300 uppercase tracking-wider block mb-1">
                      Storefront Domain / Subdomain
                    </label>
                    <input
                      type="text"
                      value={storeUrl}
                      onChange={(e) => setStoreUrl(e.target.value)}
                      placeholder="https://yourstore.lemonsqueezy.com"
                      className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3.5 py-2 text-xs text-white focus:outline-none focus:border-amber-500"
                    />
                  </div>

                  <div>
                    <label className="text-[11px] font-bold text-slate-300 uppercase tracking-wider block mb-1">
                      Payout Schedule
                    </label>
                    <select
                      value={payoutSchedule}
                      onChange={(e) => setPayoutSchedule(e.target.value as any)}
                      className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3.5 py-2 text-xs text-white focus:outline-none focus:border-amber-500"
                    >
                      <option value="bi_weekly">Bi-Weekly (Standard Lemon Squeezy)</option>
                      <option value="monthly">Monthly (1st of each month)</option>
                      <option value="manual">Manual Request On-Demand</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-[11px] font-bold text-slate-300 uppercase tracking-wider block mb-1">
                      Creator Royalty Share (%)
                    </label>
                    <input
                      type="number"
                      min="50"
                      max="100"
                      value={revenueShare}
                      onChange={(e) => setRevenueShare(Number(e.target.value))}
                      className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3.5 py-2 text-xs text-white focus:outline-none focus:border-amber-500"
                    />
                  </div>
                </div>

                <div className="flex items-center justify-end gap-3 pt-2">
                  <button
                    type="button"
                    onClick={handleConnectWithLemonSqueezy}
                    disabled={isConnecting}
                    className="px-4 py-2 bg-amber-600/30 hover:bg-amber-600/40 text-amber-200 border border-amber-500/40 text-xs font-semibold rounded-xl transition-all cursor-pointer flex items-center gap-1.5"
                  >
                    <RefreshCw className={`w-3.5 h-3.5 ${isConnecting ? "animate-spin" : ""}`} />
                    <span>Auto-Sync with Lemon Squeezy API</span>
                  </button>

                  <button
                    type="submit"
                    className="px-5 py-2 bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-bold rounded-xl transition-all cursor-pointer shadow-md"
                  >
                    Save Store Settings
                  </button>
                </div>
              </form>
            </div>
          )}

          {/* Transactions & Payouts Ledger */}
          <div className="bg-slate-950/70 border border-slate-800 rounded-2xl p-5 space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-sm font-bold text-white flex items-center gap-2">
                  <Receipt className="w-4 h-4 text-amber-400" />
                  <span>Direct Simulation Licensing Royalties &amp; Transfers</span>
                </h3>
                <p className="text-xs text-slate-400 mt-0.5">
                  Real-time sales processed through Lemon Squeezy Merchant of Record
                </p>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-[11px] text-slate-400 font-medium">
                  {transactions.length} Transactions Recorded
                </span>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs text-slate-300">
                <thead>
                  <tr className="border-b border-slate-800 text-[11px] text-slate-400 font-bold uppercase tracking-wider">
                    <th className="pb-3 pr-4">Date &amp; Simulation</th>
                    <th className="pb-3 px-4">License Tier</th>
                    <th className="pb-3 px-4">Buyer / School</th>
                    <th className="pb-3 px-4 text-right">Gross Volume</th>
                    <th className="pb-3 px-4 text-right">MoR Fee (~5%)</th>
                    <th className="pb-3 px-4 text-right">Net Royalty</th>
                    <th className="pb-3 pl-4 text-center">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/60">
                  {transactions.map((tx) => (
                    <tr key={tx.id} className="hover:bg-slate-900/60 transition-colors">
                      <td className="py-3 pr-4">
                        <div className="font-semibold text-white">{tx.simulationTitle}</div>
                        <div className="text-[10px] text-slate-500 font-mono flex items-center gap-1.5 mt-0.5">
                          <span>{tx.date}</span>
                          <span>•</span>
                          <span className="text-amber-400">{tx.orderId}</span>
                        </div>
                      </td>
                      <td className="py-3 px-4">
                        <span className="inline-block px-2 py-0.5 rounded-full text-[10px] font-bold bg-slate-800 text-slate-200 border border-slate-700">
                          {tx.licenseTier === "single"
                            ? "Single Teacher"
                            : tx.licenseTier === "department"
                            ? "School Dept"
                            : "District Unlimited"}
                        </span>
                      </td>
                      <td className="py-3 px-4">
                        <div className="text-slate-200">{tx.buyerSchool}</div>
                        <div className="text-[10px] text-slate-400">{tx.buyerEmail}</div>
                      </td>
                      <td className="py-3 px-4 text-right font-medium text-slate-300">
                        ${tx.grossAmount.toFixed(2)}
                      </td>
                      <td className="py-3 px-4 text-right text-slate-400">
                        -${tx.merchantFee.toFixed(2)}
                      </td>
                      <td className="py-3 px-4 text-right font-bold text-emerald-400">
                        +${tx.netPayout.toFixed(2)}
                      </td>
                      <td className="py-3 pl-4 text-center">
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-500/10 text-emerald-300 border border-emerald-500/20">
                          <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                          <span>Credited</span>
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 bg-slate-950 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1.5 text-amber-300">
              <Globe2 className="w-3.5 h-3.5" />
              <span>Multi-Currency Payouts (USD, EUR, GBP, CAD, AUD)</span>
            </span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold cursor-pointer transition-colors"
            >
              Done
            </button>
          </div>
        </div>
      </div>

      {/* Payout Withdrawal Modal */}
      {isPayoutModalOpen && (
        <div className="fixed inset-0 z-60 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in">
          <div className="bg-slate-900 border border-amber-500/40 rounded-2xl max-w-md w-full p-6 space-y-4 shadow-2xl">
            <div className="flex items-center justify-between">
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <Landmark className="w-4 h-4 text-amber-400" />
                <span>Request Lemon Squeezy Payout</span>
              </h3>
              <button
                onClick={() => setIsPayoutModalOpen(false)}
                className="text-slate-400 hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 space-y-1 text-xs">
              <div className="flex justify-between text-slate-400">
                <span>Available Royalty Balance:</span>
                <span className="font-bold text-white">${config.availableBalance.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-slate-400">
                <span>Destination Bank / PayPal:</span>
                <span className="text-amber-300 font-mono">•••• {config.bankAccountLast4 || "4242"} ({config.accountEmail})</span>
              </div>
              <div className="flex justify-between text-slate-400">
                <span>Processing Entity:</span>
                <span className="text-slate-200">Lemon Squeezy Payments Inc.</span>
              </div>
            </div>

            <div>
              <label className="text-[11px] font-bold text-slate-300 uppercase tracking-wider block mb-1">
                Payout Amount (USD)
              </label>
              <div className="relative">
                <span className="absolute left-3 top-2.5 text-slate-400 text-sm">$</span>
                <input
                  type="number"
                  min="1"
                  max={config.availableBalance}
                  value={payoutAmount}
                  onChange={(e) => setPayoutAmount(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-7 pr-3 py-2 text-sm text-white focus:outline-none focus:border-amber-500"
                />
              </div>
            </div>

            <div className="flex justify-end gap-2 pt-2">
              <button
                type="button"
                onClick={() => setIsPayoutModalOpen(false)}
                className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleExecuteWithdrawal}
                disabled={isProcessingPayout || Number(payoutAmount) <= 0 || Number(payoutAmount) > config.availableBalance}
                className="px-5 py-2 bg-amber-500 hover:bg-amber-400 disabled:opacity-40 text-slate-950 text-xs font-bold rounded-xl flex items-center gap-1.5 cursor-pointer shadow-md"
              >
                {isProcessingPayout ? (
                  <>
                    <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                    <span>Processing Transfer...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-3.5 h-3.5" />
                    <span>Confirm &amp; Send Payout</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// Aliases for compatibility
export const StripeAccountModal = LemonSqueezyAccountModal;
