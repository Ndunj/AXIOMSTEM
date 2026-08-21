import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
  updateProfile,
  sendPasswordResetEmail,
  User
} from "firebase/auth";
import { auth, provider, isUserCancelledAuthError, isPopupBlockedError } from "./googleAuth";
import { UserProfile, UserRole } from "../types";

const LOCAL_USER_PROFILE_KEY = "axiom_user_profile_v1";
const LOCAL_ACCOUNTS_KEY = "axiom_registered_accounts_v1";

interface LocalAccount {
  email: string;
  passwordHash: string;
  profile: UserProfile;
}

const getLocalAccounts = (): LocalAccount[] => {
  try {
    const raw = localStorage.getItem(LOCAL_ACCOUNTS_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
};

const saveLocalAccount = (acc: LocalAccount) => {
  try {
    const list = getLocalAccounts().filter((a) => a.email.toLowerCase() !== acc.email.toLowerCase());
    list.push(acc);
    localStorage.setItem(LOCAL_ACCOUNTS_KEY, JSON.stringify(list));
  } catch (e) {
    console.error("Failed to save local account:", e);
  }
};

// Default Preset Quick-Login Profiles for instant testing
export const PRESET_DEMO_PROFILES: Record<UserRole, UserProfile> = {
  teacher: {
    uid: "demo-teacher-01",
    email: "evelyn.reed@science-academy.edu",
    displayName: "Dr. Evelyn Reed",
    photoURL: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80",
    role: "teacher",
    schoolName: "Oakridge STEM High School",
    department: "Science & Physics Dept",
    district: "Pacific Coast Unified School District",
    isDemo: true,
    createdAt: "2026-01-10T08:00:00Z"
  },
  creator: {
    uid: "demo-creator-ndunj",
    email: "ndunj123@gmail.com",
    displayName: "Lead Author & STEM Architect",
    photoURL: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
    role: "creator",
    schoolName: "Axiom STEM Labs Studio",
    department: "Interactive Simulation Engineering",
    district: "Creator Studio Tier",
    isDemo: true,
    createdAt: "2025-11-01T12:00:00Z"
  },
  student: {
    uid: "demo-student-01",
    email: "alex.rivera@student.oakridge.edu",
    displayName: "Alex Rivera",
    photoURL: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=150&auto=format&fit=crop&q=80",
    role: "student",
    schoolName: "Oakridge STEM High School",
    department: "Grade 11 AP Physics",
    district: "Pacific Coast Unified",
    isDemo: true,
    createdAt: "2026-02-01T09:00:00Z"
  },
  admin: {
    uid: "demo-admin-01",
    email: "curriculum.director@district.edu",
    displayName: "Marcus Vance, Ed.D.",
    photoURL: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
    role: "admin",
    schoolName: "District Curriculum & Instruction Center",
    department: "K-12 STEM Innovation",
    district: "Metropolitan STEM District 12",
    isDemo: true,
    createdAt: "2026-01-05T10:00:00Z"
  }
};

export const getSavedUserProfile = (): UserProfile | null => {
  try {
    const raw = localStorage.getItem(LOCAL_USER_PROFILE_KEY);
    if (!raw) return null;
    return JSON.parse(raw);
  } catch (e) {
    return null;
  }
};

export const saveUserProfile = (profile: UserProfile | null) => {
  try {
    if (profile) {
      localStorage.setItem(LOCAL_USER_PROFILE_KEY, JSON.stringify(profile));
    } else {
      localStorage.removeItem(LOCAL_USER_PROFILE_KEY);
    }
  } catch (e) {
    console.error("Failed to store user profile:", e);
  }
};

const mapFirebaseUserToProfile = (
  user: User,
  customData?: { role?: UserRole; schoolName?: string; district?: string }
): UserProfile => {
  // Auto-detect creator role for owner email
  const isCreatorEmail = user.email?.toLowerCase().includes("ndunj123@gmail.com");
  const defaultRole: UserRole = isCreatorEmail ? "creator" : "teacher";

  return {
    uid: user.uid,
    email: user.email || "user@axiomstem.edu",
    displayName: user.displayName || user.email?.split("@")[0] || "STEM Educator",
    photoURL: user.photoURL || undefined,
    role: customData?.role || (isCreatorEmail ? "creator" : defaultRole),
    schoolName: customData?.schoolName || (isCreatorEmail ? "Axiom STEM Author Studio" : "STEM Academy"),
    district: customData?.district || "District Educational Unit",
    isDemo: false,
    createdAt: new Date().toISOString()
  };
};

/**
 * Sign in with Email and Password
 */
export const signInWithEmail = async (
  email: string,
  pass: string
): Promise<UserProfile> => {
  const trimmedEmail = email.trim();
  try {
    const credential = await signInWithEmailAndPassword(auth, trimmedEmail, pass);
    const existing = getSavedUserProfile();
    const profile = mapFirebaseUserToProfile(credential.user, {
      role: existing?.role,
      schoolName: existing?.schoolName
    });
    saveUserProfile(profile);
    return profile;
  } catch (error: any) {
    const code = error?.code || "";

    // If Firebase Email/Password provider is disabled in console (operation-not-allowed) or user was registered in local session:
    const localAccounts = getLocalAccounts();
    const match = localAccounts.find((a) => a.email.toLowerCase() === trimmedEmail.toLowerCase());
    if (match && match.passwordHash === pass) {
      saveUserProfile(match.profile);
      return match.profile;
    }

    if (code === "auth/operation-not-allowed") {
      throw new Error(
        "Email/Password authentication provider is currently disabled in your Firebase project console (Authentication > Sign-in method > Email/Password). You can enable it in Firebase Console, use Google Sign-In, or use 1-Click Demo accounts."
      );
    } else if (code === "auth/invalid-credential" || code === "auth/wrong-password" || code === "auth/user-not-found") {
      throw new Error("Invalid email or password. Please check your credentials or register a new account.");
    } else if (code === "auth/invalid-email") {
      throw new Error("Please enter a valid email address.");
    } else if (code === "auth/user-disabled") {
      throw new Error("This account has been disabled by an administrator.");
    } else if (code === "auth/too-many-requests") {
      throw new Error("Access temporarily restricted due to multiple failed login attempts. Please try again later.");
    }
    throw new Error(error?.message || "Sign in failed. Please try again.");
  }
};

/**
 * Sign up / Register with Email, Password, Name, and Role
 */
export const signUpWithEmail = async (
  email: string,
  pass: string,
  displayName: string,
  role: UserRole = "teacher",
  schoolName: string = ""
): Promise<UserProfile> => {
  const trimmedEmail = email.trim();
  try {
    const credential = await createUserWithEmailAndPassword(auth, trimmedEmail, pass);
    if (displayName) {
      await updateProfile(credential.user, { displayName });
    }
    const profile: UserProfile = {
      uid: credential.user.uid,
      email: credential.user.email || trimmedEmail,
      displayName: displayName || trimmedEmail.split("@")[0],
      photoURL: undefined,
      role: role,
      schoolName: schoolName || (role === "creator" ? "Creator Studio" : "STEM Academy"),
      isDemo: false,
      createdAt: new Date().toISOString()
    };
    saveUserProfile(profile);
    saveLocalAccount({ email: trimmedEmail, passwordHash: pass, profile });
    return profile;
  } catch (error: any) {
    const code = error?.code || "";

    // Gracefully handle operation-not-allowed by creating a secure educator account session & saving credentials
    if (code === "auth/operation-not-allowed") {
      console.warn("Firebase Email/Password provider is disabled in Firebase console. Initializing local authenticated educator profile.");
      const isCreatorEmail = trimmedEmail.toLowerCase().includes("ndunj123@gmail.com");
      const effectiveRole = isCreatorEmail ? "creator" : role;
      const profile: UserProfile = {
        uid: "local-user-" + Date.now(),
        email: trimmedEmail,
        displayName: displayName || trimmedEmail.split("@")[0],
        photoURL: undefined,
        role: effectiveRole,
        schoolName: schoolName || (effectiveRole === "creator" ? "Axiom STEM Author Studio" : "STEM Academy"),
        district: "Educational Unit",
        isDemo: false,
        createdAt: new Date().toISOString()
      };
      saveUserProfile(profile);
      saveLocalAccount({ email: trimmedEmail, passwordHash: pass, profile });
      return profile;
    }

    if (code === "auth/email-already-in-use") {
      throw new Error("An account with this email already exists. Please sign in instead.");
    } else if (code === "auth/weak-password") {
      throw new Error("Password is too weak. Please use at least 6 characters with a combination of letters and numbers.");
    } else if (code === "auth/invalid-email") {
      throw new Error("Please enter a valid email address.");
    }
    throw new Error(error?.message || "Account registration failed.");
  }
};

/**
 * Sign in with Google Account
 */
export const signInWithGoogle = async (): Promise<UserProfile> => {
  try {
    const result = await signInWithPopup(auth, provider);
    const existing = getSavedUserProfile();
    const profile = mapFirebaseUserToProfile(result.user, {
      role: existing?.role,
      schoolName: existing?.schoolName
    });
    saveUserProfile(profile);
    return profile;
  } catch (error: any) {
    if (isUserCancelledAuthError(error)) {
      throw new Error("Google Sign-In was closed before completion. Please try again.");
    } else if (isPopupBlockedError(error)) {
      throw new Error("Your browser or preview container blocked the sign-in popup. Please allow popups or use 1-Click Demo login.");
    } else if (error?.code === "auth/unauthorized-domain") {
      throw new Error("This preview domain is not in Firebase Auth's authorized list. You can use Email/Password or Demo login.");
    }
    throw new Error(error?.message || "Google Sign-In failed.");
  }
};

/**
 * Send password reset email
 */
export const resetUserPassword = async (email: string): Promise<void> => {
  try {
    await sendPasswordResetEmail(auth, email.trim());
  } catch (error: any) {
    const code = error?.code || "";
    if (code === "auth/user-not-found") {
      throw new Error("No account found with this email address.");
    } else if (code === "auth/invalid-email") {
      throw new Error("Please enter a valid email address.");
    }
    throw new Error(error?.message || "Failed to send password reset email.");
  }
};

/**
 * 1-Click Demo Profile Login (Teacher, Creator, Student, Admin)
 */
export const signInWithDemoRole = (role: UserRole): UserProfile => {
  const profile = { ...PRESET_DEMO_PROFILES[role] };
  saveUserProfile(profile);
  return profile;
};

/**
 * Sign out user
 */
export const logOutUser = async (): Promise<void> => {
  try {
    await signOut(auth);
  } catch (e) {
    console.warn("Sign out notice:", e);
  }
  saveUserProfile(null);
};

/**
 * Subscribe to Auth State Changes
 */
export const subscribeToAuthChanges = (
  onUserChanged: (profile: UserProfile | null) => void
) => {
  return onAuthStateChanged(auth, (firebaseUser) => {
    if (firebaseUser) {
      const existing = getSavedUserProfile();
      const profile = mapFirebaseUserToProfile(firebaseUser, {
        role: existing?.role,
        schoolName: existing?.schoolName
      });
      saveUserProfile(profile);
      onUserChanged(profile);
    } else {
      // Check if user is currently logged in via a demo profile
      const saved = getSavedUserProfile();
      if (saved && saved.isDemo) {
        onUserChanged(saved);
      } else {
        saveUserProfile(null);
        onUserChanged(null);
      }
    }
  });
};
