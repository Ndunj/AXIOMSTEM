import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import { SimulationItem } from "../types";
import {
  getSimulationWorksheetData,
  SimulationWorksheetData,
  WorksheetCriticalQuestion,
  WorksheetRealWorldScenario,
} from "./worksheetData";

export { getSimulationWorksheetData };
export type { SimulationWorksheetData, WorksheetCriticalQuestion, WorksheetRealWorldScenario };

export interface StudentWorksheetAnswers {
  hypothesis?: string;
  tableRows?: string[][];
  criticalAnswers?: Record<number, string>;
  claim?: string;
  evidence?: string;
  reasoning?: string;
  realWorldAnswer?: string;
}

export interface WorksheetOptions {
  includeAnswerKey?: boolean;
  gradeLevel?: string;
  studentName?: string;
  period?: string;
  teacherName?: string;
  customNotes?: string;
  studentAnswers?: StudentWorksheetAnswers;
}

interface DisciplineTheme {
  primary: [number, number, number];    // RGB for main headers / banners
  accent: [number, number, number];     // RGB for badges / subheadings
  light: [number, number, number];      // RGB for table headers / callout boxes
  border: [number, number, number];     // RGB for box borders
  name: string;
  disciplineKey: string;
}

const THEMES: Record<string, DisciplineTheme> = {
  physics: {
    primary: [15, 23, 42],     // Slate 900
    accent: [2, 132, 199],     // Sky 600
    light: [240, 249, 255],    // Sky 50
    border: [186, 230, 253],   // Sky 200
    name: "Physics & Physical Science",
    disciplineKey: "physics",
  },
  chemistry: {
    primary: [6, 78, 59],      // Emerald 900
    accent: [13, 148, 136],    // Teal 600
    light: [240, 253, 250],    // Teal 50
    border: [153, 246, 228],   // Teal 200
    name: "Chemistry & Physical Science",
    disciplineKey: "chemistry",
  },
  mathematics: {
    primary: [49, 46, 129],    // Indigo 900
    accent: [99, 102, 241],    // Indigo 500
    light: [245, 243, 255],    // Indigo 50
    border: [199, 210, 254],   // Indigo 200
    name: "Mathematics & Geometry",
    disciplineKey: "mathematics",
  },
  biology: {
    primary: [20, 83, 45],     // Green 900
    accent: [22, 163, 74],     // Green 600
    light: [240, 253, 244],    // Green 50
    border: [187, 247, 208],   // Green 200
    name: "Biology & Life Sciences",
    disciplineKey: "biology",
  },
};

export interface DisciplinePhrasing {
  phase1Title: string;
  phase2Title: string;
  phase2Subtitle: string;
  phase3Title: string;
  phase4Title: string;
  claimTitle: string;
  claimSubtext: string;
  evidenceTitle: string;
  evidenceSubtext: string;
  reasoningTitle: string;
  reasoningSubtext: string;
  reasoningExemplar: string;
  rubricCategory1: string;
  rubricCat1Exemplary: string;
  rubricCategory2: string;
  rubricCategory3: string;
  rubricCat3Exemplary: string;
  rubricCategory4: string;
}

export function getDisciplinePhrasing(discipline: string): DisciplinePhrasing {
  const d = discipline.toLowerCase();
  if (d === "mathematics") {
    return {
      phase1Title: "PHASE 1: Mathematical Prediction & Hypothesis",
      phase2Title: "PHASE 2: Structured Investigation & Data Collection Trials",
      phase2Subtitle: "Use the interactive simulation controls to test the following trials. Record all measured readings and calculated values below:",
      phase3Title: "PHASE 3: Critical Thinking, Pattern Analysis & Problem Solving",
      phase4Title: "PHASE 4: Claim-Evidence-Reasoning (CER) Mathematical Synthesis",
      claimTitle: "1. CLAIM (Mathematical Statement)",
      claimSubtext: "State the mathematical rule, relationship, or theorem discovered:",
      evidenceTitle: "2. EVIDENCE (Calculations / Data)",
      evidenceSubtext: "Cite 2+ specific numbers, measurements, or coordinates from your trials:",
      reasoningTitle: "3. REASONING (Mathematical Rule)",
      reasoningSubtext: "Explain how the geometric properties, algebra, or theorems support your claim:",
      reasoningExemplar: "Grounded in circle theorems, algebra rules, trigonometry ratios, or coordinate geometry.",
      rubricCategory1: "Prediction & Hypothesis",
      rubricCat1Exemplary: "Clear, testable, grounded in math rules",
      rubricCategory2: "Data Collection & Measurement Precision",
      rubricCategory3: "Problem Solving & Analysis",
      rubricCat3Exemplary: "Accurate calculations & clear explanations",
      rubricCategory4: "Mathematical Synthesis (CER)",
    };
  }
  if (d === "chemistry") {
    return {
      phase1Title: "PHASE 1: Chemical Prediction & Molecular Hypothesis",
      phase2Title: "PHASE 2: Structured Virtual Lab Investigation & Data Collection",
      phase2Subtitle: "Adjust temperature, concentrations, and molecular models. Record all measured data and observations below:",
      phase3Title: "PHASE 3: Critical Thinking, Molecular Structure & Reaction Analysis",
      phase4Title: "PHASE 4: Claim-Evidence-Reasoning (CER) Chemistry Synthesis",
      claimTitle: "1. CLAIM (Chemical Statement)",
      claimSubtext: "State a clear finding regarding molecular behavior, phase change, or naming rule:",
      evidenceTitle: "2. EVIDENCE (Lab Data & Observations)",
      evidenceSubtext: "Cite 2+ specific temperatures, times, or formula observations with units:",
      reasoningTitle: "3. REASONING (Chemical Principle)",
      reasoningSubtext: "Explain using kinetic theory, chemical bonding, IUPAC naming rules, or state changes:",
      reasoningExemplar: "Grounded in molecular behavior, latent heat, chemical bonds, or IUPAC rules.",
      rubricCategory1: "Chemical Hypothesis & Prediction",
      rubricCat1Exemplary: "Clear, testable, grounded in chemistry concepts",
      rubricCategory2: "Data Collection & Lab Accuracy",
      rubricCategory3: "Molecular & Chemical Analysis",
      rubricCat3Exemplary: "Clear scientific reasoning & concept mastery",
      rubricCategory4: "Chemistry Synthesis (CER)",
    };
  }
  if (d === "biology") {
    return {
      phase1Title: "PHASE 1: Biological Prediction & Hypothesis",
      phase2Title: "PHASE 2: Structured Biological Investigation & Data Collection",
      phase2Subtitle: "Adjust environmental variables and observe living system responses. Record all measurements below:",
      phase3Title: "PHASE 3: Critical Thinking, Biological Systems & Data Analysis",
      phase4Title: "PHASE 4: Claim-Evidence-Reasoning (CER) Biology Synthesis",
      claimTitle: "1. CLAIM (Biological Statement)",
      claimSubtext: "State a clear conclusion about plant growth, photosynthesis, or cycle stages:",
      evidenceTitle: "2. EVIDENCE (Measurements & Observations)",
      evidenceSubtext: "Cite 2+ specific growth rates, bubble counts, or temperature values with units:",
      reasoningTitle: "3. REASONING (Biological Principle)",
      reasoningSubtext: "Explain how photosynthesis, water cycles, or environmental factors support your claim:",
      reasoningExemplar: "Grounded in photosynthesis, plant biology, the water cycle, or ecosystems.",
      rubricCategory1: "Biological Hypothesis & Prediction",
      rubricCat1Exemplary: "Clear, testable, grounded in life science concepts",
      rubricCategory2: "Observation & Data Precision",
      rubricCategory3: "Biological Analysis & Understanding",
      rubricCat3Exemplary: "Clear explanations of biological processes",
      rubricCategory4: "Biology Synthesis (CER)",
    };
  }
  return {
    phase1Title: "PHASE 1: Prior Knowledge & Physics Hypothesis",
    phase2Title: "PHASE 2: Structured Virtual Lab Investigation & Data Collection",
    phase2Subtitle: "Use the simulation sliders and controls to run the trials below. Record all measured readings and observations:",
    phase3Title: "PHASE 3: Critical Thinking, Proportional Reasoning & Physics Analysis",
    phase4Title: "PHASE 4: Claim-Evidence-Reasoning (CER) Physics Synthesis",
    claimTitle: "1. CLAIM (Physics Statement)",
    claimSubtext: "State a direct answer to the driving physics question based on your trials:",
    evidenceTitle: "2. EVIDENCE (Data & Measurements)",
    evidenceSubtext: "Cite 2+ specific numbers and units recorded from your Phase 2 trials:",
    reasoningTitle: "3. REASONING (Physics Principle)",
    reasoningSubtext: "Explain how physical laws (like Ohm's Law, gravity, reflection, or moments) justify your claim:",
    reasoningExemplar: "Grounded in conservation of energy, Ohm's law, forces, wave properties, or reflection.",
    rubricCategory1: "Physics Hypothesis & Prediction",
    rubricCat1Exemplary: "Clear, testable, grounded in physics laws",
    rubricCategory2: "Data Collection & Unit Accuracy",
    rubricCategory3: "Physics Law & Proportional Reasoning",
    rubricCat3Exemplary: "Clear conceptual and mathematical explanations",
    rubricCategory4: "Physics Synthesis (CER)",
  };
}

export function generateWorksheetPDF(
  simulation: SimulationItem,
  options: WorksheetOptions = {}
): jsPDF {
  const doc = new jsPDF({
    orientation: "portrait",
    unit: "mm",
    format: "a4",
  });

  const disc = (simulation.discipline || "physics").toLowerCase();
  const theme = THEMES[disc] || THEMES.physics;
  const phrasing = getDisciplinePhrasing(disc);
  const data = getSimulationWorksheetData(simulation);

  const isKey = !!options.includeAnswerKey;
  const grade = options.gradeLevel || simulation.gradeLevel?.[0] || "High School (9-12)";

  const pageWidth = 210;
  const pageHeight = 297;
  const margin = 12;
  const contentWidth = pageWidth - margin * 2;

  // -------------------------------------------------------------
  // PAGE 1: HEADER, METADATA, PRE-LAB, AND DATA COLLECTION TABLE
  // -------------------------------------------------------------

  // Top Color Accent Bar
  doc.setFillColor(theme.primary[0], theme.primary[1], theme.primary[2]);
  doc.rect(0, 0, pageWidth, 6, "F");

  doc.setFillColor(theme.accent[0], theme.accent[1], theme.accent[2]);
  doc.rect(0, 6, pageWidth, 1.5, "F");

  // Institution / Program Header
  doc.setFont("helvetica", "bold");
  doc.setFontSize(9);
  doc.setTextColor(theme.accent[0], theme.accent[1], theme.accent[2]);
  doc.text("AXIOM STEM LABORATORY CURRICULUM", margin, 13.5);

  doc.setFont("helvetica", "normal");
  doc.setFontSize(8.5);
  doc.setTextColor(100, 116, 139);
  doc.text(`Grade Level: ${grade}  •  Discipline: ${theme.name}`, margin + 70, 13.5);

  // Document Badge (Teacher Key vs Student Sheet)
  if (isKey) {
    doc.setFillColor(220, 38, 38); // Red 600
    doc.roundedRect(pageWidth - margin - 52, 8.5, 52, 7.5, 1.5, 1.5, "F");
    doc.setTextColor(255, 255, 255);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(8);
    doc.text("TEACHER KEY & SCORING", pageWidth - margin - 26, 13.5, { align: "center" });
  } else {
    doc.setFillColor(theme.primary[0], theme.primary[1], theme.primary[2]);
    doc.roundedRect(pageWidth - margin - 52, 8.5, 52, 7.5, 1.5, 1.5, "F");
    doc.setTextColor(255, 255, 255);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(8);
    doc.text("STUDENT LAB INQUIRY", pageWidth - margin - 26, 13.5, { align: "center" });
  }

  // Simulation Title
  doc.setFont("helvetica", "bold");
  doc.setFontSize(16);
  doc.setTextColor(theme.primary[0], theme.primary[1], theme.primary[2]);
  doc.text(simulation.title.toUpperCase(), margin, 23);

  // Subtitle / Tagline & Standards
  doc.setFont("helvetica", "normal");
  doc.setFontSize(9.5);
  doc.setTextColor(71, 85, 105);
  doc.text(simulation.tagline, margin, 28.5);

  const standardsStr = simulation.standards && simulation.standards.length > 0
    ? `Standards: ${simulation.standards.slice(0, 3).join(", ")}`
    : `Curriculum: Next Generation High-School STEM Standards`;
  doc.setFontSize(8.5);
  doc.setTextColor(100, 116, 139);
  doc.text(standardsStr, margin, 33);

  // Student Metadata Box (Name, Date, Period, Score)
  doc.setFillColor(248, 250, 252); // Slate 50
  doc.setDrawColor(226, 232, 240); // Slate 200
  doc.setLineWidth(0.3);
  doc.roundedRect(margin, 36, contentWidth, 12, 1.5, 1.5, "FD");

  doc.setFont("helvetica", "bold");
  doc.setFontSize(8.5);
  doc.setTextColor(51, 65, 85);
  doc.text("STUDENT NAME:", margin + 3, 41.5);
  doc.text("DATE:", margin + 68, 41.5);
  doc.text("CLASS / PERIOD:", margin + 112, 41.5);
  doc.text("TOTAL SCORE:", margin + 150, 41.5);

  doc.setFont("helvetica", "normal");
  doc.setFontSize(9);
  doc.setTextColor(148, 163, 184);
  doc.text(options.studentName || "________________________", margin + 28, 41.5);
  doc.text("____________", margin + 78, 41.5);
  doc.text(options.period || "_________", margin + 135, 41.5);
  doc.setTextColor(theme.accent[0], theme.accent[1], theme.accent[2]);
  doc.setFont("helvetica", "bold");
  doc.text("_____ / 100 PTS", margin + 171, 41.5);

  let y = 52;

  // Central Driving Phenomenon Callout Box
  doc.setFillColor(theme.light[0], theme.light[1], theme.light[2]);
  doc.setDrawColor(theme.border[0], theme.border[1], theme.border[2]);
  doc.setLineWidth(0.4);

  doc.setFont("helvetica", "italic");
  doc.setFontSize(9.5);
  const dqLines = doc.splitTextToSize(`"${data.drivingQuestion}"`, contentWidth - 6);
  const dqBoxHeight = Math.max(16, 8 + dqLines.length * 4.5);
  doc.roundedRect(margin, y, contentWidth, dqBoxHeight, 1.5, 1.5, "FD");

  doc.setFont("helvetica", "bold");
  doc.setFontSize(8.5);
  doc.setTextColor(theme.accent[0], theme.accent[1], theme.accent[2]);
  doc.text("CENTRAL DRIVING PHENOMENON & INQUIRY QUESTION:", margin + 3, y + 4.8);

  doc.setFont("helvetica", "italic");
  doc.setFontSize(9.5);
  doc.setTextColor(15, 23, 42);
  doc.text(dqLines, margin + 3, y + 10);

  y += dqBoxHeight + 4;

  // SECTION 1: PRE-LAB HYPOTHESIS & PRIOR KNOWLEDGE
  doc.setFillColor(theme.primary[0], theme.primary[1], theme.primary[2]);
  doc.roundedRect(margin, y, 7.5, 7.5, 1.5, 1.5, "F");
  doc.setTextColor(255, 255, 255);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(8.5);
  doc.text("1", margin + 3.75, y + 5.2, { align: "center" });

  doc.setTextColor(theme.primary[0], theme.primary[1], theme.primary[2]);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(11);
  doc.text(phrasing.phase1Title, margin + 11, y + 5.5);
  y += 9;

  doc.setFont("helvetica", "normal");
  doc.setFontSize(9);
  doc.setTextColor(71, 85, 105);
  const hypLines = doc.splitTextToSize(data.hypothesisPrompt, contentWidth);
  doc.text(hypLines, margin, y);
  y += hypLines.length * 4 + 2;

  // Answer lines / Exemplar Box / Student Hypothesis
  if (isKey) {
    doc.setFillColor(theme.light[0], theme.light[1], theme.light[2]);
    doc.setDrawColor(theme.border[0], theme.border[1], theme.border[2]);
    doc.setLineWidth(0.3);
    
    const exemplarText = "Student states a clear, mathematically/physically sound conjecture with direct proportionality or structural mechanism.";
    doc.setFont("helvetica", "normal");
    doc.setFontSize(9);
    const exLines = doc.splitTextToSize(exemplarText, contentWidth - 6);
    const boxH = Math.max(16, 7 + exLines.length * 4.5);
    
    doc.roundedRect(margin, y, contentWidth, boxH, 1.5, 1.5, "FD");
    doc.setTextColor(theme.accent[0], theme.accent[1], theme.accent[2]);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(8.5);
    doc.text("TEACHER SCORING GUIDE & EXEMPLARY CONJECTURE:", margin + 3, y + 5);
    
    doc.setTextColor(15, 23, 42);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(9);
    doc.text(exLines, margin + 3, y + 10);
    y += boxH + 4;
  } else if (options.studentAnswers?.hypothesis) {
    doc.setFillColor(248, 250, 252);
    doc.setDrawColor(theme.border[0], theme.border[1], theme.border[2]);
    doc.setLineWidth(0.3);
    
    doc.setFont("helvetica", "normal");
    doc.setFontSize(9);
    const stLines = doc.splitTextToSize(options.studentAnswers.hypothesis, contentWidth - 6);
    const boxH = Math.max(16, 7 + stLines.length * 4.5);

    doc.roundedRect(margin, y, contentWidth, boxH, 1.5, 1.5, "FD");
    doc.setTextColor(theme.accent[0], theme.accent[1], theme.accent[2]);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(8.5);
    doc.text("STUDENT RECORDED HYPOTHESIS:", margin + 3, y + 5);
    
    doc.setTextColor(15, 23, 42);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(9);
    doc.text(stLines, margin + 3, y + 10);
    y += boxH + 4;
  } else {
    doc.setDrawColor(203, 213, 225); // Slate 300 dotted
    doc.setLineDashPattern([1, 1], 0);
    for (let i = 0; i < 3; i++) {
      doc.line(margin, y + 4 + i * 5.5, margin + contentWidth, y + 4 + i * 5.5);
    }
    doc.setLineDashPattern([], 0);
    y += 20;
  }

  // SECTION 2: VIRTUAL DATA COLLECTION & EXPERIMENTAL RUNS
  doc.setFillColor(theme.primary[0], theme.primary[1], theme.primary[2]);
  doc.roundedRect(margin, y, 7.5, 7.5, 1.5, 1.5, "F");
  doc.setTextColor(255, 255, 255);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(8.5);
  doc.text("2", margin + 3.75, y + 5.2, { align: "center" });

  doc.setTextColor(theme.primary[0], theme.primary[1], theme.primary[2]);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(11);
  doc.text(phrasing.phase2Title, margin + 11, y + 5.5);
  y += 9;

  doc.setFont("helvetica", "normal");
  doc.setFontSize(9);
  doc.setTextColor(71, 85, 105);
  doc.text(phrasing.phase2Subtitle, margin, y);
  y += 4.5;

  // AutoTable for Data Collection
  const tableData = isKey
    ? data.tableRows
    : options.studentAnswers?.tableRows && options.studentAnswers.tableRows.length > 0
    ? options.studentAnswers.tableRows
    : data.tableRows.map((row) =>
        row.map((cell, cIdx) => (cIdx === 0 || cIdx === 1 ? cell : ""))
      );

  autoTable(doc, {
    startY: y,
    margin: { left: margin, right: margin },
    head: [data.tableHeaders],
    body: tableData,
    headStyles: {
      fillColor: theme.primary,
      textColor: [255, 255, 255],
      fontStyle: "bold",
      fontSize: 8.5,
      cellPadding: 2.5,
    },
    bodyStyles: {
      textColor: [15, 23, 42],
      fontSize: 8,
      cellPadding: 2.2,
      lineColor: [226, 232, 240],
      lineWidth: 0.2,
    },
    alternateRowStyles: {
      fillColor: [248, 250, 252],
    },
    theme: "grid",
  });

  // Footer for Page 1
  doc.setFont("helvetica", "normal");
  doc.setFontSize(8);
  doc.setTextColor(148, 163, 184);
  doc.text(
    `Axiom STEM Interactive Curriculum • ${simulation.title} • Page 1 of 2`,
    pageWidth / 2,
    pageHeight - 7,
    { align: "center" }
  );

  // -------------------------------------------------------------
  // PAGE 2: CRITICAL THINKING, CER CONCLUSION, RUBRIC & REAL WORLD
  // -------------------------------------------------------------
  doc.addPage();

  // Page 2 Top Header Band (Slim)
  doc.setFillColor(theme.primary[0], theme.primary[1], theme.primary[2]);
  doc.rect(0, 0, pageWidth, 12, "F");
  doc.setFillColor(theme.accent[0], theme.accent[1], theme.accent[2]);
  doc.rect(0, 12, pageWidth, 1.5, "F");

  doc.setTextColor(255, 255, 255);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(9);
  doc.text(`${simulation.title.toUpperCase()} — CRITICAL ANALYSIS & PROOF`, margin, 7.5);

  doc.setFont("helvetica", "normal");
  doc.setFontSize(8.5);
  doc.setTextColor(203, 213, 225);
  doc.text("PHASES 3 & 4: ANALYSIS, SYNTHESIS, & EVALUATION", pageWidth - margin - 85, 7.5);

  y = 18;

  // SECTION 3: DEEP CRITICAL THINKING & MATHEMATICAL MODELING
  doc.setFillColor(theme.primary[0], theme.primary[1], theme.primary[2]);
  doc.roundedRect(margin, y, 7.5, 7.5, 1.5, 1.5, "F");
  doc.setTextColor(255, 255, 255);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(8.5);
  doc.text("3", margin + 3.75, y + 5.2, { align: "center" });

  doc.setTextColor(theme.primary[0], theme.primary[1], theme.primary[2]);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(11);
  doc.text(phrasing.phase3Title, margin + 11, y + 5.5);
  y += 9;

  // Render each Critical Thinking Question
  data.criticalQuestions.forEach((q, qIdx) => {
    doc.setFont("helvetica", "bold");
    doc.setFontSize(9.5);
    doc.setTextColor(theme.primary[0], theme.primary[1], theme.primary[2]);
    doc.text(q.prompt, margin, y);
    y += 4.5;

    doc.setFont("helvetica", "normal");
    doc.setFontSize(8.5);
    doc.setTextColor(71, 85, 105);
    const subLines = doc.splitTextToSize(q.subtext, contentWidth);
    doc.text(subLines, margin, y);
    y += subLines.length * 3.8 + 1.5;

    if (isKey && q.exemplarAnswer) {
      doc.setFillColor(theme.light[0], theme.light[1], theme.light[2]);
      doc.setDrawColor(theme.border[0], theme.border[1], theme.border[2]);
      doc.setLineWidth(0.3);
      
      doc.setFont("helvetica", "normal");
      doc.setFontSize(9);
      const ansLines = doc.splitTextToSize(q.exemplarAnswer, contentWidth - 6);
      const qBoxH = Math.max(14, 6.5 + ansLines.length * 4.2);

      doc.roundedRect(margin, y, contentWidth, qBoxH, 1.5, 1.5, "FD");
      doc.setTextColor(theme.accent[0], theme.accent[1], theme.accent[2]);
      doc.setFont("helvetica", "bold");
      doc.setFontSize(8.5);
      doc.text("EXEMPLAR MODEL RESPONSE:", margin + 3, y + 4.5);
      
      doc.setTextColor(15, 23, 42);
      doc.setFont("helvetica", "normal");
      doc.setFontSize(9);
      doc.text(ansLines, margin + 3, y + 9);
      y += qBoxH + 3.5;
    } else if (options.studentAnswers?.criticalAnswers?.[qIdx]) {
      doc.setFillColor(248, 250, 252);
      doc.setDrawColor(theme.border[0], theme.border[1], theme.border[2]);
      doc.setLineWidth(0.3);
      
      doc.setFont("helvetica", "normal");
      doc.setFontSize(9);
      const ansLines = doc.splitTextToSize(options.studentAnswers.criticalAnswers[qIdx], contentWidth - 6);
      const qBoxH = Math.max(14, 6.5 + ansLines.length * 4.2);

      doc.roundedRect(margin, y, contentWidth, qBoxH, 1.5, 1.5, "FD");
      doc.setTextColor(theme.accent[0], theme.accent[1], theme.accent[2]);
      doc.setFont("helvetica", "bold");
      doc.setFontSize(8.5);
      doc.text("STUDENT ANALYSIS:", margin + 3, y + 4.5);
      
      doc.setTextColor(15, 23, 42);
      doc.setFont("helvetica", "normal");
      doc.setFontSize(9);
      doc.text(ansLines, margin + 3, y + 9);
      y += qBoxH + 3.5;
    } else {
      doc.setDrawColor(203, 213, 225);
      doc.setLineDashPattern([1, 1], 0);
      for (let l = 0; l < 2; l++) {
        doc.line(margin, y + 4 + l * 4.8, margin + contentWidth, y + 4 + l * 4.8);
      }
      doc.setLineDashPattern([], 0);
      y += 13;
    }
  });

  // SECTION 4: CER SYNTHESIS CONCLUSION
  doc.setFillColor(theme.primary[0], theme.primary[1], theme.primary[2]);
  doc.roundedRect(margin, y, 7.5, 7.5, 1.5, 1.5, "F");
  doc.setTextColor(255, 255, 255);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(8.5);
  doc.text("4", margin + 3.75, y + 5.2, { align: "center" });

  doc.setTextColor(theme.primary[0], theme.primary[1], theme.primary[2]);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(11);
  doc.text(phrasing.phase4Title, margin + 11, y + 5.5);
  y += 8.5;

  // 3-Part CER Grid
  const cerBoxWidth = (contentWidth - 6) / 3;
  const cerBoxHeight = 30;

  // Claim Box
  doc.setFillColor(248, 250, 252);
  doc.setDrawColor(theme.border[0], theme.border[1], theme.border[2]);
  doc.setLineWidth(0.4);
  doc.roundedRect(margin, y, cerBoxWidth, cerBoxHeight, 1.5, 1.5, "FD");

  doc.setFont("helvetica", "bold");
  doc.setFontSize(8.5);
  doc.setTextColor(theme.accent[0], theme.accent[1], theme.accent[2]);
  doc.text(phrasing.claimTitle, margin + 2.5, y + 4.8);

  doc.setFont("helvetica", "normal");
  doc.setFontSize(7.5);
  doc.setTextColor(100, 116, 139);
  doc.text(phrasing.claimSubtext, margin + 2.5, y + 8.5, {
    maxWidth: cerBoxWidth - 5,
  });

  if (isKey) {
    doc.setFont("helvetica", "italic");
    doc.setFontSize(8.5);
    doc.setTextColor(15, 23, 42);
    doc.text("Clear quantitative claim linking input parameter to observed response.", margin + 2.5, y + 17, {
      maxWidth: cerBoxWidth - 5,
    });
  } else if (options.studentAnswers?.claim) {
    doc.setFont("helvetica", "normal");
    doc.setFontSize(8.5);
    doc.setTextColor(15, 23, 42);
    doc.text(options.studentAnswers.claim, margin + 2.5, y + 16, {
      maxWidth: cerBoxWidth - 5,
    });
  } else {
    doc.setDrawColor(203, 213, 225);
    doc.setLineDashPattern([1, 1], 0);
    doc.line(margin + 2.5, y + 19, margin + cerBoxWidth - 2.5, y + 19);
    doc.line(margin + 2.5, y + 25, margin + cerBoxWidth - 2.5, y + 25);
    doc.setLineDashPattern([], 0);
  }

  // Evidence Box
  const evidX = margin + cerBoxWidth + 3;
  doc.setFillColor(248, 250, 252);
  doc.roundedRect(evidX, y, cerBoxWidth, cerBoxHeight, 1.5, 1.5, "FD");

  doc.setFont("helvetica", "bold");
  doc.setFontSize(8.5);
  doc.setTextColor(theme.accent[0], theme.accent[1], theme.accent[2]);
  doc.text(phrasing.evidenceTitle, evidX + 2.5, y + 4.8);

  doc.setFont("helvetica", "normal");
  doc.setFontSize(7.5);
  doc.setTextColor(100, 116, 139);
  doc.text(phrasing.evidenceSubtext, evidX + 2.5, y + 8.5, {
    maxWidth: cerBoxWidth - 5,
  });

  if (isKey) {
    doc.setFont("helvetica", "italic");
    doc.setFontSize(8.5);
    doc.setTextColor(15, 23, 42);
    doc.text("Includes exact units, coordinates, and calculated invariants.", evidX + 2.5, y + 17, {
      maxWidth: cerBoxWidth - 5,
    });
  } else if (options.studentAnswers?.evidence) {
    doc.setFont("helvetica", "normal");
    doc.setFontSize(8.5);
    doc.setTextColor(15, 23, 42);
    doc.text(options.studentAnswers.evidence, evidX + 2.5, y + 16, {
      maxWidth: cerBoxWidth - 5,
    });
  } else {
    doc.setDrawColor(203, 213, 225);
    doc.setLineDashPattern([1, 1], 0);
    doc.line(evidX + 2.5, y + 19, evidX + cerBoxWidth - 2.5, y + 19);
    doc.line(evidX + 2.5, y + 25, evidX + cerBoxWidth - 2.5, y + 25);
    doc.setLineDashPattern([], 0);
  }

  // Reasoning Box
  const reasX = evidX + cerBoxWidth + 3;
  doc.setFillColor(248, 250, 252);
  doc.roundedRect(reasX, y, cerBoxWidth, cerBoxHeight, 1.5, 1.5, "FD");

  doc.setFont("helvetica", "bold");
  doc.setFontSize(8.5);
  doc.setTextColor(theme.accent[0], theme.accent[1], theme.accent[2]);
  doc.text(phrasing.reasoningTitle, reasX + 2.5, y + 4.8);

  doc.setFont("helvetica", "normal");
  doc.setFontSize(7.5);
  doc.setTextColor(100, 116, 139);
  doc.text(phrasing.reasoningSubtext, reasX + 2.5, y + 8.5, {
    maxWidth: cerBoxWidth - 5,
  });

  if (isKey) {
    doc.setFont("helvetica", "italic");
    doc.setFontSize(8.5);
    doc.setTextColor(15, 23, 42);
    doc.text(phrasing.reasoningExemplar, reasX + 2.5, y + 17, {
      maxWidth: cerBoxWidth - 5,
    });
  } else if (options.studentAnswers?.reasoning) {
    doc.setFont("helvetica", "normal");
    doc.setFontSize(8.5);
    doc.setTextColor(15, 23, 42);
    doc.text(options.studentAnswers.reasoning, reasX + 2.5, y + 16, {
      maxWidth: cerBoxWidth - 5,
    });
  } else {
    doc.setDrawColor(203, 213, 225);
    doc.setLineDashPattern([1, 1], 0);
    doc.line(reasX + 2.5, y + 19, reasX + cerBoxWidth - 2.5, y + 19);
    doc.line(reasX + 2.5, y + 25, reasX + cerBoxWidth - 2.5, y + 25);
    doc.setLineDashPattern([], 0);
  }

  y += cerBoxHeight + 4;

  // SECTION 5: REAL-WORLD APPLICATION / RUBRIC SUMMARY
  doc.setFillColor(theme.light[0], theme.light[1], theme.light[2]);
  doc.setDrawColor(theme.border[0], theme.border[1], theme.border[2]);
  doc.setLineWidth(0.4);

  doc.setFont("helvetica", "normal");
  doc.setFontSize(8.5);
  const rwLines = doc.splitTextToSize(`${data.realWorldScenario.scenario} — ${data.realWorldScenario.task}`, contentWidth - 6);
  const rwBoxH = Math.max(22, 12 + rwLines.length * 4);

  doc.roundedRect(margin, y, contentWidth, rwBoxH, 2, 2, "FD");

  doc.setFont("helvetica", "bold");
  doc.setFontSize(9.5);
  doc.setTextColor(theme.primary[0], theme.primary[1], theme.primary[2]);
  doc.text(`EVERYDAY STEM IN ACTION: ${data.realWorldScenario.title.toUpperCase()}`, margin + 3, y + 5);

  doc.setFont("helvetica", "normal");
  doc.setFontSize(8.5);
  doc.setTextColor(51, 65, 85);
  doc.text(rwLines, margin + 3, y + 9.5);

  if (isKey && data.realWorldScenario.exemplarAnswer) {
    doc.setFont("helvetica", "italic");
    doc.setFontSize(9);
    doc.setTextColor(theme.accent[0], theme.accent[1], theme.accent[2]);
    doc.text(`Exemplar: ${data.realWorldScenario.exemplarAnswer}`, margin + 3, y + rwBoxH - 3, {
      maxWidth: contentWidth - 6,
    });
  } else if (options.studentAnswers?.realWorldAnswer) {
    doc.setFont("helvetica", "normal");
    doc.setFontSize(9);
    doc.setTextColor(15, 23, 42);
    doc.text(`Student Solution: ${options.studentAnswers.realWorldAnswer}`, margin + 3, y + rwBoxH - 3, {
      maxWidth: contentWidth - 6,
    });
  }

  y += rwBoxH + 4;

  // Teacher Assessment Rubric
  autoTable(doc, {
    startY: y,
    margin: { left: margin, right: margin },
    head: [["Assessment Category", "Exemplary (4)", "Proficient (3)", "Developing (2)", "Score"]],
    body: [
      [
        phrasing.rubricCategory1,
        phrasing.rubricCat1Exemplary,
        "Identifies variables & conditions accurately",
        "Vague or incomplete conjecture",
        "___ / 20",
      ],
      [
        phrasing.rubricCategory2,
        "Complete trials with exact units & metrics",
        "Minor rounding / measurement omissions",
        "Incomplete data collection",
        "___ / 30",
      ],
      [
        phrasing.rubricCategory3,
        phrasing.rubricCat3Exemplary,
        "Answers analysis questions accurately",
        "Surface-level explanations",
        "___ / 30",
      ],
      [
        phrasing.rubricCategory4,
        "Comprehensive Claim, Data & Analytical Reasoning",
        "Claim with limited evidence",
        "Unsupported assertions",
        "___ / 20",
      ],
    ],
    headStyles: {
      fillColor: theme.primary,
      textColor: [255, 255, 255],
      fontStyle: "bold",
      fontSize: 8,
      cellPadding: 1.8,
    },
    bodyStyles: {
      textColor: [15, 23, 42],
      fontSize: 7.5,
      cellPadding: 1.8,
      lineColor: [226, 232, 240],
      lineWidth: 0.2,
    },
    alternateRowStyles: {
      fillColor: [248, 250, 252],
    },
    theme: "grid",
  });

  // Footer for Page 2
  doc.setFont("helvetica", "normal");
  doc.setFontSize(8);
  doc.setTextColor(148, 163, 184);
  doc.text(
    `Axiom STEM Interactive Curriculum • ${simulation.title} • Page 2 of 2`,
    pageWidth / 2,
    pageHeight - 7,
    { align: "center" }
  );

  return doc;
}

export function generateWorksheetBlob(
  simulation: SimulationItem,
  options: WorksheetOptions = {}
): Blob {
  const doc = generateWorksheetPDF(simulation, options);
  return doc.output("blob");
}

export function generateWorksheetDataUri(
  simulation: SimulationItem,
  options: WorksheetOptions = {}
): string {
  const doc = generateWorksheetPDF(simulation, options);
  return doc.output("dataurlstring");
}

export function downloadWorksheetPDF(
  simulation: SimulationItem,
  options: WorksheetOptions = {}
): void {
  const doc = generateWorksheetPDF(simulation, options);
  const safeName = simulation.title.replace(/[^a-zA-Z0-9]/g, "_").toLowerCase();
  const filename = options.includeAnswerKey
    ? `${safeName}_teacher_answer_key.pdf`
    : `${safeName}_student_lab_worksheet.pdf`;
  doc.save(filename);
}
