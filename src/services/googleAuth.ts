import { initializeApp, getApps, getApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  User
} from "firebase/auth";
import firebaseConfig from "../../firebase-applet-config.json";

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
export const auth = getAuth(app);

export const provider = new GoogleAuthProvider();
// Google Classroom and Google Drive Scopes for direct PDF Worksheet attachment
provider.addScope("https://www.googleapis.com/auth/classroom.courses.readonly");
provider.addScope("https://www.googleapis.com/auth/classroom.coursework.students");
provider.addScope("https://www.googleapis.com/auth/classroom.courseworkmaterials");
provider.addScope("https://www.googleapis.com/auth/classroom.rosters.readonly");
provider.addScope("https://www.googleapis.com/auth/drive.file");
provider.setCustomParameters({ prompt: "select_account" });

let isSigningIn = false;
let cachedAccessToken: string | null = null;
let activeSignInPromise: Promise<{ user: User | any; accessToken: string } | null> | null = null;
let demoTeacherUser: any = null;

export const initGoogleAuth = (
  onAuthSuccess?: (user: User, token: string) => void,
  onAuthFailure?: () => void
) => {
  return onAuthStateChanged(auth, async (user: User | null) => {
    if (user) {
      if (cachedAccessToken) {
        if (onAuthSuccess) onAuthSuccess(user, cachedAccessToken);
      } else if (!isSigningIn) {
        cachedAccessToken = null;
        if (onAuthFailure) onAuthFailure();
      }
    } else if (demoTeacherUser && cachedAccessToken) {
      if (onAuthSuccess) onAuthSuccess(demoTeacherUser, cachedAccessToken);
    } else {
      cachedAccessToken = null;
      if (onAuthFailure) onAuthFailure();
    }
  });
};

export const isUserCancelledAuthError = (error: any): boolean => {
  if (!error) return false;
  const code = error.code || "";
  const msg = error.message || "";
  return (
    code === "auth/popup-closed-by-user" ||
    code === "auth/cancelled-popup-request" ||
    msg.includes("popup-closed-by-user") ||
    msg.includes("cancelled-popup-request")
  );
};

export const isPopupBlockedError = (error: any): boolean => {
  if (!error) return false;
  const code = error.code || "";
  const msg = error.message || "";
  return (
    code === "auth/popup-blocked" ||
    code === "auth/popup-closed-by-user" ||
    code === "auth/cancelled-popup-request" ||
    msg.includes("popup-blocked") ||
    msg.includes("popup")
  );
};

export const getDirectClassroomShareUrl = (simUrl: string, title?: string): string => {
  const params = new URLSearchParams();
  params.set("url", simUrl);
  if (title) params.set("title", title);
  return `https://classroom.google.com/share?${params.toString()}`;
};

export const signInAsDemoTeacher = (): { user: any; accessToken: string } => {
  demoTeacherUser = {
    uid: "teacher-demo-" + Date.now(),
    displayName: "Dr. Evelyn Reed (STEM Instructor)",
    email: "evelyn.reed@science-academy.edu",
    photoURL: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&auto=format&fit=crop&q=80",
    emailVerified: true
  };
  cachedAccessToken = "mock-instructor-token-" + Date.now();
  return { user: demoTeacherUser, accessToken: cachedAccessToken };
};

export const googleSignIn = async (): Promise<{ user: User | any; accessToken: string } | null> => {
  // If a sign-in is already underway, return the existing promise to prevent auth/cancelled-popup-request
  if (activeSignInPromise) {
    return activeSignInPromise;
  }

  activeSignInPromise = (async () => {
    try {
      isSigningIn = true;
      const result = await signInWithPopup(auth, provider);
      const credential = GoogleAuthProvider.credentialFromResult(result);
      if (!credential?.accessToken) {
        throw new Error("Failed to get Google Classroom access token from credentials.");
      }

      cachedAccessToken = credential.accessToken;
      demoTeacherUser = null;
      return { user: result.user, accessToken: cachedAccessToken };
    } catch (error: any) {
      if (isUserCancelledAuthError(error)) {
        console.info("Google Classroom sign-in popup was dismissed or cancelled by user.");
        throw new Error("The sign-in popup was closed before completion. Please click 'Sign in with Google' again or use 1-Click Classroom Share.");
      } else if (error?.code === "auth/popup-blocked") {
        console.warn("Google Classroom sign-in popup was blocked by browser or iframe container.");
        throw new Error("Your browser or iframe preview blocked the sign-in popup. Please allow popups or open the app in a new tab.");
      } else if (error?.code === "auth/unauthorized-domain") {
        console.warn("Domain not authorized in Firebase Auth:", error);
        throw new Error("This preview domain is not in Firebase's authorized domains list. You can open the app in a new window or use Demo Teacher mode.");
      } else {
        console.warn("Google Classroom sign-in warning:", error?.message || error);
        throw error;
      }
    } finally {
      isSigningIn = false;
      activeSignInPromise = null;
    }
  })();

  return activeSignInPromise;
};

export const getAccessToken = async (): Promise<string | null> => {
  return cachedAccessToken;
};

export const googleSignOut = async () => {
  try {
    await auth.signOut();
  } catch (e) {
    console.warn("Sign out notice:", e);
  }
  demoTeacherUser = null;
  cachedAccessToken = null;
};
