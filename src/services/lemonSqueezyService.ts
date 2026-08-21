import { LemonSqueezyStoreConfig, LemonSqueezyPayoutTransaction, CartItem } from "../types";

const LEMON_STORE_STORAGE_KEY = "axiom_lemonsqueezy_store_config";
const LEMON_TRANSACTIONS_STORAGE_KEY = "axiom_lemonsqueezy_transactions";

export interface LemonSqueezyConfigResponse {
  configured: boolean;
  storeId: string | null;
  storeUrl: string | null;
  mode: "live" | "test_simulator";
  merchantOfRecord: boolean;
  defaultRevenueSharePercent: number;
  supportedPaymentMethods: string[];
}

export interface CreateLemonCheckoutResponse {
  success: boolean;
  isLiveLemonSqueezy: boolean;
  isSimulated?: boolean;
  checkoutId: string;
  checkoutUrl: string;
  totalAmountCents: number;
  sellerStoreId: string;
  sellerName?: string;
  licenseKey?: string;
  error?: string;
}

export interface LemonPayoutResponse {
  success: boolean;
  isLiveLemonSqueezy: boolean;
  isSimulated?: boolean;
  payoutId: string;
  amountPaid: number;
  destinationStore: string;
  status: string;
  estimatedArrival: string;
  timestamp?: string;
  error?: string;
}

// Default initial creator Lemon Squeezy Store configuration
const DEFAULT_LEMON_CONFIG: LemonSqueezyStoreConfig = {
  storeId: "store_axiom_stem_faculty",
  storeName: "Dr. Elena Rostova & Axiom STEM Faculty",
  storeUrl: "https://axiomstem.lemonsqueezy.com",
  accountEmail: "creator.stem@axiomlabs.edu",
  country: "US",
  currency: "usd",
  status: "connected",
  merchantOfRecord: true,
  payoutsEnabled: true,
  payoutSchedule: "bi_weekly",
  bankAccountLast4: "4242",
  defaultRevenueSharePercent: 90, // 90% goes to author, 10% platform
  totalGrossVolume: 4380,
  availableBalance: 920,
  pendingBalance: 240,
  lastPayoutDate: new Date(Date.now() - 4 * 24 * 60 * 60 * 1000).toLocaleDateString(),
  lastPayoutAmount: 1350,
  dashboardUrl: "https://app.lemonsqueezy.com/dashboard",
  apiKeySet: false,
};

const DEFAULT_TRANSACTIONS: LemonSqueezyPayoutTransaction[] = [
  {
    id: "tx_ls_98231",
    orderId: "ls_ord_884910",
    date: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toLocaleDateString(),
    simulationTitle: "Projectile Motion & Ballistics Lab",
    licenseTier: "department",
    grossAmount: 200,
    merchantFee: 15,
    netPayout: 185,
    currency: "USD",
    buyerEmail: "physics.dept@sjusd.org",
    buyerSchool: "Lincoln High STEM Academy",
    lemonCheckoutId: "ls_chk_99214",
    licenseKeyGenerated: "STEM-PROJ-8849-DEPT",
    status: "succeeded",
  },
  {
    id: "tx_ls_98230",
    orderId: "ls_ord_884909",
    date: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toLocaleDateString(),
    simulationTitle: "Acid-Base Titration & pH Curve",
    licenseTier: "district",
    grossAmount: 400,
    merchantFee: 30,
    netPayout: 370,
    currency: "USD",
    buyerEmail: "curriculum@fremontusd.edu",
    buyerSchool: "Fremont Unified District",
    lemonCheckoutId: "ls_chk_99213",
    licenseKeyGenerated: "STEM-TITR-5532-DIST",
    status: "succeeded",
  },
  {
    id: "tx_ls_98229",
    orderId: "ls_ord_884908",
    date: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toLocaleDateString(),
    simulationTitle: "Gravitational Orbit & Kepler's Laws",
    licenseTier: "single",
    grossAmount: 19,
    merchantFee: 1.5,
    netPayout: 17.5,
    currency: "USD",
    buyerEmail: "astronomy.teacher@oaklandtech.org",
    buyerSchool: "Oakland Technical High",
    lemonCheckoutId: "ls_chk_99212",
    licenseKeyGenerated: "STEM-ORBT-1104-SGL",
    status: "succeeded",
  },
];

export function getSavedLemonConfig(): LemonSqueezyStoreConfig {
  try {
    const raw = localStorage.getItem(LEMON_STORE_STORAGE_KEY);
    if (raw) {
      return JSON.parse(raw);
    }
  } catch (e) {
    console.error("Error reading saved Lemon Squeezy config:", e);
  }
  return DEFAULT_LEMON_CONFIG;
}

export function saveLemonConfig(config: LemonSqueezyStoreConfig): void {
  try {
    localStorage.setItem(LEMON_STORE_STORAGE_KEY, JSON.stringify(config));
  } catch (e) {
    console.error("Error saving Lemon Squeezy config:", e);
  }
}

export function getSavedTransactions(): LemonSqueezyPayoutTransaction[] {
  try {
    const raw = localStorage.getItem(LEMON_TRANSACTIONS_STORAGE_KEY);
    if (raw) {
      return JSON.parse(raw);
    }
  } catch (e) {
    console.error("Error reading Lemon Squeezy transactions:", e);
  }
  return DEFAULT_TRANSACTIONS;
}

export function saveTransactions(transactions: LemonSqueezyPayoutTransaction[]): void {
  try {
    localStorage.setItem(LEMON_TRANSACTIONS_STORAGE_KEY, JSON.stringify(transactions));
  } catch (e) {
    console.error("Error saving Lemon Squeezy transactions:", e);
  }
}

// Fetch backend Lemon Squeezy configuration status
export async function fetchLemonSqueezyConfig(): Promise<LemonSqueezyConfigResponse> {
  try {
    const res = await fetch("/api/lemonsqueezy/config");
    if (res.ok) {
      return await res.json();
    }
  } catch (e) {
    console.warn("Failed to fetch /api/lemonsqueezy/config:", e);
  }
  return {
    configured: false,
    storeId: null,
    storeUrl: "https://axiomstem.lemonsqueezy.com",
    mode: "test_simulator",
    merchantOfRecord: true,
    defaultRevenueSharePercent: 90,
    supportedPaymentMethods: ["Credit Card", "Apple Pay", "Google Pay", "PayPal", "Bank Transfer"],
  };
}

// Create a Lemon Squeezy checkout session for the buyer
export async function createLemonCheckoutSession(params: {
  cartItems: CartItem[];
  buyerEmail: string;
  schoolName: string;
  district?: string;
  poNumber?: string;
  sellerStoreId?: string;
}): Promise<CreateLemonCheckoutResponse> {
  try {
    const res = await fetch("/api/lemonsqueezy/create-checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(params),
    });

    if (res.ok) {
      return await res.json();
    }
    const errData = await res.json().catch(() => ({}));
    throw new Error(errData.error || `HTTP ${res.status}`);
  } catch (error: any) {
    console.error("createLemonCheckoutSession error:", error);
    const mockTotal = params.cartItems.reduce((acc, it) => {
      const p =
        it.licenseTier === "single"
          ? it.simulation.pricing.singleTeacher
          : it.licenseTier === "department"
          ? it.simulation.pricing.schoolDepartment
          : it.simulation.pricing.districtUnlimited;
      return acc + p * it.selectedQuantity;
    }, 0);

    const fallbackCheckoutId = `ls_chk_${Date.now()}`;
    const generatedKey = `STEM-LS-${Math.floor(1000 + Math.random() * 9000)}-${(params.cartItems[0]?.licenseTier || "SGL").toUpperCase()}`;

    return {
      success: true,
      isLiveLemonSqueezy: false,
      isSimulated: true,
      checkoutId: fallbackCheckoutId,
      checkoutUrl: `https://axiomstem.lemonsqueezy.com/checkout/buy/${fallbackCheckoutId}`,
      totalAmountCents: mockTotal * 100,
      sellerStoreId: params.sellerStoreId || "store_axiom_stem_faculty",
      sellerName: "Axiom STEM Publishing Network",
      licenseKey: generatedKey,
    };
  }
}

// Request or connect creator Lemon Squeezy Store
export async function connectLemonSqueezyStore(params: {
  accountEmail: string;
  storeName: string;
  storeId?: string;
  storeUrl?: string;
  country?: string;
}): Promise<{
  success: boolean;
  storeId: string;
  dashboardUrl?: string;
  isLiveLemonSqueezy: boolean;
}> {
  try {
    const res = await fetch("/api/lemonsqueezy/store/connect", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(params),
    });

    if (res.ok) {
      const data = await res.json();
      const current = getSavedLemonConfig();
      const updated: LemonSqueezyStoreConfig = {
        ...current,
        storeId: data.storeId || params.storeId || current.storeId,
        storeName: params.storeName,
        storeUrl: params.storeUrl || current.storeUrl,
        accountEmail: params.accountEmail,
        status: "connected",
        merchantOfRecord: true,
        payoutsEnabled: true,
      };
      saveLemonConfig(updated);
      return data;
    }
  } catch (e) {
    console.error("connectLemonSqueezyStore error:", e);
  }

  // Fallback simulator
  const fakeStoreId = params.storeId?.trim() || `store_${Math.random().toString(36).substring(2, 9)}`;
  const current = getSavedLemonConfig();
  const updated: LemonSqueezyStoreConfig = {
    ...current,
    storeId: fakeStoreId,
    storeName: params.storeName,
    storeUrl: params.storeUrl || `https://${fakeStoreId}.lemonsqueezy.com`,
    accountEmail: params.accountEmail,
    status: "connected",
    merchantOfRecord: true,
    payoutsEnabled: true,
  };
  saveLemonConfig(updated);

  return {
    success: true,
    storeId: fakeStoreId,
    dashboardUrl: "https://app.lemonsqueezy.com/dashboard",
    isLiveLemonSqueezy: false,
  };
}

// Execute Creator Payout / Lemon Squeezy Bi-Weekly Transfer
export async function executeCreatorPayout(
  storeId: string,
  amount: number,
  note?: string
): Promise<LemonPayoutResponse> {
  try {
    const res = await fetch("/api/lemonsqueezy/creator-payout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ storeId, amount, note }),
    });

    if (res.ok) {
      const data = await res.json();
      const current = getSavedLemonConfig();
      const updated: LemonSqueezyStoreConfig = {
        ...current,
        availableBalance: Math.max(0, current.availableBalance - amount),
        lastPayoutDate: new Date().toLocaleDateString(),
        lastPayoutAmount: amount,
      };
      saveLemonConfig(updated);
      return data;
    }
  } catch (e) {
    console.error("executeCreatorPayout error:", e);
  }

  // Fallback
  const current = getSavedLemonConfig();
  const updated: LemonSqueezyStoreConfig = {
    ...current,
    availableBalance: Math.max(0, current.availableBalance - amount),
    lastPayoutDate: new Date().toLocaleDateString(),
    lastPayoutAmount: amount,
  };
  saveLemonConfig(updated);

  return {
    success: true,
    isLiveLemonSqueezy: false,
    isSimulated: true,
    payoutId: `ls_po_${Math.random().toString(36).substring(2, 12)}`,
    amountPaid: amount,
    destinationStore: storeId,
    status: "paid",
    estimatedArrival: "Lemon Squeezy Merchant of Record Direct Deposit Sent",
    timestamp: new Date().toISOString(),
  };
}

// Record a new purchase into creator payout transactions
export function recordSaleForCreator(
  simulationTitle: string,
  licenseTier: "single" | "department" | "district",
  grossAmount: number,
  buyerEmail: string,
  buyerSchool: string,
  sellerStoreId?: string
): void {
  const merchantFee = Math.round(grossAmount * 0.05 * 100) / 100; // 5% Lemon Squeezy MoR & platform fee
  const netPayout = Math.round((grossAmount - merchantFee) * 100) / 100;
  const licenseKey = `LS-STEM-${Math.floor(1000 + Math.random() * 9000)}-${licenseTier.toUpperCase()}`;

  const newTx: LemonSqueezyPayoutTransaction = {
    id: `tx_ls_${Math.floor(100000 + Math.random() * 900000)}`,
    orderId: `ls_ord_${Math.floor(800000 + Math.random() * 100000)}`,
    date: new Date().toLocaleDateString(),
    simulationTitle,
    licenseTier,
    grossAmount,
    merchantFee,
    netPayout,
    currency: "USD",
    buyerEmail: buyerEmail || "educator@school.edu",
    buyerSchool: buyerSchool || "Partner STEM Academy",
    lemonCheckoutId: `ls_chk_${Math.random().toString(36).substring(2, 10)}`,
    licenseKeyGenerated: licenseKey,
    status: "succeeded",
  };

  const txs = getSavedTransactions();
  saveTransactions([newTx, ...txs]);

  // Update creator balances
  const config = getSavedLemonConfig();
  const updatedConfig: LemonSqueezyStoreConfig = {
    ...config,
    totalGrossVolume: config.totalGrossVolume + grossAmount,
    availableBalance: config.availableBalance + netPayout,
  };
  saveLemonConfig(updatedConfig);
}

// Compatibility helpers for backward compatibility
export const getSavedStripeConfig = getSavedLemonConfig;
export const saveStripeConfig = saveLemonConfig;
export const createStripeCheckoutSession = createLemonCheckoutSession;
export const connectStripeAccount = (params: any) =>
  connectLemonSqueezyStore({
    accountEmail: params.accountEmail,
    storeName: params.accountHolderName,
    country: params.country,
  });
export const fetchStripeConfig = fetchLemonSqueezyConfig;
