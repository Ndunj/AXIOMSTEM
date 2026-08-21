export interface LMSCourse {
  id: string;
  name: string;
  section?: string;
  enrollmentCode?: string;
  platform: "google_classroom" | "canvas" | "schoology";
  studentCount: number;
  alternateLink?: string;
}

export interface LMSAssignmentPayload {
  platform: "google_classroom" | "canvas" | "schoology";
  courseId: string;
  title: string;
  description: string;
  simulationId: string;
  simulationTitle: string;
  simulation?: any;
  maxPoints: number;
  dueDate?: string; // YYYY-MM-DD
  dueTime?: string; // HH:MM
  submissionType: "online_url" | "interactive_grade" | "external_tool_lti";
  customInstructions?: string;
}

export interface LMSPublishResult {
  success: boolean;
  id?: string;
  alternateLink?: string;
  message?: string;
}

export interface CanvasConfig {
  instanceUrl: string; // e.g. https://canvas.instructure.com or school.instructure.com
  apiToken: string;
  courseId?: string;
}

export interface SchoologyConfig {
  domain: string; // e.g. https://api.schoology.com/v1 or schoology.com
  consumerKey: string;
  consumerSecret: string;
  sectionId?: string;
}
