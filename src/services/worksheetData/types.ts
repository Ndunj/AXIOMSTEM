export interface WorksheetCriticalQuestion {
  prompt: string;
  subtext: string;
  exemplarAnswer?: string;
}

export interface WorksheetRealWorldScenario {
  title: string;
  scenario: string;
  task: string;
  exemplarAnswer?: string;
}

export interface SimulationWorksheetData {
  drivingQuestion: string;
  hypothesisPrompt: string;
  tableHeaders: string[];
  tableRows: string[][];
  criticalQuestions: WorksheetCriticalQuestion[];
  realWorldScenario: WorksheetRealWorldScenario;
}
