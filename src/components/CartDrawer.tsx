import React from "react";
import { CartItem, LicenseTier } from "../types";
import {
  X,
  Trash2,
  ShoppingCart,
  ShieldCheck,
  CreditCard,
  FileCheck,
  ArrowRight,
  School,
  Sparkles
} from "lucide-react";

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onRemoveItem: (id: string) => void;
  onUpdateTier: (id: string, tier: LicenseTier) => void;
  onProceedCheckout: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  cartItems,
  onRemoveItem,
  onUpdateTier,
  onProceedCheckout,
}) => {
  if (!isOpen) return null;

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

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-slate-950/80 backdrop-blur-sm">
      <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-slate-900 border-l border-slate-800 flex flex-col justify-between shadow-2xl">
          {/* Header */}
          <div className="p-5 border-b border-slate-800 flex items-center justify-between bg-slate-950">
            <div className="flex items-center gap-2">
              <ShoppingCart className="w-5 h-5 text-emerald-400" />
              <h2 className="text-base font-bold text-white">Classroom License Cart</h2>
              <span className="text-xs bg-slate-800 text-slate-300 px-2 py-0.5 rounded-full font-mono">
                {cartItems.length}
              </span>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-slate-200 rounded-lg cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Cart Item List */}
          <div className="p-5 overflow-y-auto flex-1 space-y-4">
            {cartItems.length === 0 ? (
              <div className="py-20 text-center space-y-3 text-slate-400">
                <ShoppingCart className="w-12 h-12 stroke-1 mx-auto text-slate-600" />
                <p className="text-sm">Your simulation cart is currently empty.</p>
                <p className="text-xs text-slate-500 max-w-xs mx-auto">
                  Explore Physics, Mathematics, Chemistry, and Biology simulations to add to your classroom bundle.
                </p>
              </div>
            ) : (
              cartItems.map((item) => {
                const currentPrice =
                  item.licenseTier === "single"
                    ? item.simulation.pricing.singleTeacher
                    : item.licenseTier === "department"
                    ? item.simulation.pricing.schoolDepartment
                    : item.simulation.pricing.districtUnlimited;

                return (
                  <div
                    key={item.simulation.id}
                    className="bg-slate-950/70 p-3.5 rounded-2xl border border-slate-800 space-y-3"
                  >
                    <div className="flex justify-between items-start gap-2">
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <span
                            className={`text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider border ${
                              item.simulation.badgeColor || "bg-sky-500/10 text-sky-400 border-sky-500/20"
                            }`}
                          >
                            {item.simulation.discipline}
                          </span>
                        </div>
                        <h4 className="text-xs font-bold text-white line-clamp-1 mt-0.5">{item.simulation.title}</h4>
                        <p className="text-[10px] text-slate-400 truncate mt-0.5">{item.simulation.tagline}</p>
                      </div>
                      <button
                        onClick={() => onRemoveItem(item.simulation.id)}
                        className="text-slate-500 hover:text-rose-400 p-1 cursor-pointer transition-colors shrink-0"
                        title="Remove from cart"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>

                    {/* Tier Switcher inside Cart */}
                    <div className="flex items-center justify-between gap-2 pt-1">
                      <select
                        value={item.licenseTier}
                        onChange={(e) => onUpdateTier(item.simulation.id, e.target.value as LicenseTier)}
                        className="bg-slate-900 border border-slate-700 text-xs text-slate-200 rounded-lg px-2 py-1.5 focus:outline-none focus:border-sky-500"
                      >
                        <option value="single">Single Teacher (${item.simulation.pricing?.singleTeacher || 19})</option>
                        <option value="department">School Dept Pass (${item.simulation.pricing?.schoolDepartment || 200})</option>
                        <option value="district">District Multi-Seat (${item.simulation.pricing?.districtUnlimited || 400})</option>
                      </select>

                      <div className="text-right font-mono font-bold text-white text-base">
                        ${currentPrice}
                      </div>
                    </div>

                    <div className="text-[11px] text-slate-400 flex items-center justify-between pt-1">
                      <span>Includes AI Lesson Plan & LMS Key</span>
                      <span className="text-emerald-400 font-semibold">100% Tax-Exempt</span>
                    </div>
                  </div>
                );
              })
            )}
          </div>

          {/* Checkout Footer */}
          {cartItems.length > 0 && (
            <div className="p-5 border-t border-slate-800 bg-slate-950/90 space-y-4">
              <div className="space-y-1.5 text-xs text-slate-400">
                <div className="flex justify-between">
                  <span>Simulations Included</span>
                  <span className="text-slate-200 font-mono">{cartItems.length} items</span>
                </div>
                <div className="flex justify-between">
                  <span>Educational Sales Tax</span>
                  <span className="text-emerald-400 font-mono">$0.00 (Tax-Exempt)</span>
                </div>
                <div className="flex justify-between text-base font-bold text-white pt-2 border-t border-slate-800">
                  <span>Total Due</span>
                  <span className="text-emerald-400 font-mono">${subtotal}</span>
                </div>
              </div>

              <div className="space-y-2">
                <button
                  id="checkout-btn"
                  onClick={onProceedCheckout}
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-slate-950 font-black text-sm cursor-pointer shadow-lg shadow-emerald-500/20 transition-all active:scale-95"
                >
                  <span>Proceed to School Checkout</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <div className="flex items-center justify-center gap-2 text-[11px] text-slate-400 text-center">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Official School POs, Credit Cards & Grant Funding Accepted</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
