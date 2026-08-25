export type STEMDiscipline = "physics" | "mathematics" | "chemistry" | "biology";

export type GradeLevel = "Middle School (6-8)" | "High School (9-12)" | "AP / IB STEM" | "Undergraduate";

export type LicenseTier = "single" | "department" | "district";

export type UserRole = "teacher" | "creator" | "student" | "admin";

export interface UserProfile {
  uid: string;
  email: string;
  displayName: string;
  photoURL?: string;
  role: UserRole;
  schoolName?: string;
  district?: string;
  department?: string;
  savedFavorites?: string[];
  lemonSqueezyConfig?: LemonSqueezyStoreConfig;
  createdAt?: string;
  isDemo?: boolean;
}

export interface CurriculumStandard {
  id: string;
  code: string; // e.g. "HS-PS4-1", "AP-PHYS-1", "CUSTOM-BIO-01"
  title: string;
  category: "NGSS" | "AP" | "IB" | "Common Core" | "State Standards" | "Custom";
  discipline: STEMDiscipline;
  gradeLevel: GradeLevel;
  description: string;
  createdAt: string;
}

export interface SimulationChallenge {
  id: string;
  title: string;
  instruction: string;
  targetMetric: string;
  targetValue: number;
  tolerance: number;
  currentValueKey: string;
  rewardBadge: string;
}

export interface SimulationItem {
  id: string;
  title: string;
  tagline: string;
  discipline: STEMDiscipline;
  secondaryDisciplines?: STEMDiscipline[];
  gradeLevel: GradeLevel[];
  standards: string[]; // e.g. ["HS-PS2-1", "NGSS SEP-4", "AP Physics 1 Unit 2"]
  description: string;
  learningObjectives: string[];
  thumbnailGradient: string;
  badgeColor: string;
  iconName: string;
  rating: number;
  reviewCount: number;
  teacherCount: number;
  licenseType?: string; // e.g. "Academic STEM Classroom & Institutional License"
  licenseTerms?: string; // e.g. "Lifetime access, updates included, multi-seat classroom & LMS export"
  pricing: {
    singleTeacher: number;
    schoolDepartment: number;
    districtUnlimited: number;
  };
  features: string[];
  parameterDefaults: Record<string, number | boolean | string>;
  parameterControls: {
    key: string;
    label: string;
    min: number;
    max: number;
    step: number;
    unit?: string;
    description?: string;
  }[];
  sampleChallenges: SimulationChallenge[];
  previewFacts: string[];
  isHtmlApp?: boolean;
  htmlContent?: string;
  htmlUrl?: string;
  isCustomImport?: boolean;
  authorEmail?: string;
  authorName?: string;
  lemonSqueezyStoreId?: string; // Target Lemon Squeezy Store ID or Store Slug
  lemonSqueezyStoreName?: string; // e.g. "Dr. Sarah Lin (Stanford STEM Labs)"
  lemonSqueezyVariantId?: string; // Optional direct Lemon Squeezy Variant ID
  stripeAccountId?: string; // Backwards compatible alias
  stripeAccountName?: string;
  createdAt?: string;
  updatedAt?: string;
  lastModified?: string; // ISO 8601 timestamp tracking when the simulation was last edited or modified
}

export interface LemonSqueezyStoreConfig {
  storeId: string;
  storeName: string;
  storeUrl: string;
  accountEmail: string;
  country: string;
  currency: string;
  status: "connected" | "pending_verification" | "active" | "unlinked";
  merchantOfRecord: boolean; // Lemon Squeezy handles global tax, VAT, and invoicing as MoR
  payoutsEnabled: boolean;
  payoutSchedule: "bi_weekly" | "monthly" | "manual";
  bankAccountLast4?: string;
  defaultRevenueSharePercent: number; // e.g. 90%
  totalGrossVolume: number;
  availableBalance: number;
  pendingBalance: number;
  lastPayoutDate?: string;
  lastPayoutAmount?: number;
  dashboardUrl?: string;
  apiKeySet?: boolean;
}

export interface LemonSqueezyPayoutTransaction {
  id: string;
  orderId: string;
  date: string;
  simulationTitle: string;
  licenseTier: LicenseTier;
  grossAmount: number;
  merchantFee: number; // Lemon Squeezy processing & MoR tax handling fee
  netPayout: number;
  currency: string;
  buyerEmail: string;
  buyerSchool: string;
  lemonCheckoutId: string;
  licenseKeyGenerated?: string;
  status: "succeeded" | "pending" | "paid_out";
}

// Aliases for compatibility
export type StripeAccountConfig = LemonSqueezyStoreConfig;
export type StripePayoutTransaction = LemonSqueezyPayoutTransaction;

export interface CartItem {
  simulation: SimulationItem;
  licenseTier: LicenseTier;
  selectedQuantity: number;
}

export interface TeacherPurchasedSimulation {
  simulationId: string;
  purchaseDate: string;
  licenseTier: LicenseTier;
  licenseKey: string;
  classroomPin: string;
  activeStudents: number;
  assignedClasses: string[];
}

export interface SimulationUsageMetrics {
  simulationId: string;
  timesPlayed: number;
  studentsEngaged: number;
  totalTimeMinutes: number;
  avgSessionMinutes: number;
  completionRate: number;
  lastPlayedDate: string;
  weeklyTrend: number[];
  periodBreakdown?: {
    periodName: string;
    studentCount: number;
    timesPlayed: number;
    avgScore: number;
  }[];
}

export interface LessonPlanData {
  title: string;
  discipline: string;
  gradeLevel: string;
  estimatedTime: string;
  ngssStandard: string;
  learningObjectives: string[];
  essentialQuestions: string[];
  pacingGuide: {
    phase: string;
    action: string;
  }[];
  differentiatedInstruction: {
    support: string;
    extension: string;
  };
  studentLabQuestions: string[];
}

export interface SchoolQuote {
  quoteNumber: string;
  schoolName: string;
  district: string;
  contactEmail: string;
  planType: string;
  seatCount: number;
  simulationsIncluded: number;
  subtotal: number;
  taxExempt: boolean;
  totalDue: number;
  validUntil: string;
  status: string;
  procurementNotes: string;
}
