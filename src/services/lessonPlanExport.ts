import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import {
  Document,
  Packer,
  Paragraph,
  TextRun,
  Table,
  TableRow,
  TableCell,
  HeadingLevel,
  AlignmentType,
  BorderStyle,
  WidthType,
  ShadingType,
  Header,
  Footer,
  PageNumber,
  NumberFormat,
} from "docx";
import { LessonPlanData, SimulationItem } from "../types";

// Discipline Color Palettes for PDF Styling
interface DisciplineTheme {
  primary: [number, number, number];
  accent: [number, number, number];
  light: [number, number, number];
  border: [number, number, number];
  textLight: [number, number, number];
  name: string;
}

const THEMES: Record<string, DisciplineTheme> = {
  physics: {
    primary: [15, 23, 42], // Slate 900
    accent: [2, 132, 199], // Sky 600
    light: [240, 249, 255], // Sky 50
    border: [186, 230, 253], // Sky 200
    textLight: [3, 105, 161], // Sky 700
    name: "Physics & Physical Science",
  },
  chemistry: {
    primary: [6, 78, 59], // Emerald 900
    accent: [13, 148, 136], // Teal 600
    light: [240, 253, 250], // Teal 50
    border: [153, 246, 228], // Teal 200
    textLight: [15, 118, 110], // Teal 700
    name: "Chemistry & Molecular Sciences",
  },
  mathematics: {
    primary: [49, 46, 129], // Indigo 900
    accent: [99, 102, 241], // Indigo 500
    light: [245, 243, 255], // Indigo 50
    border: [199, 210, 254], // Indigo 200
    textLight: [67, 56, 202], // Indigo 700
    name: "Mathematics & Geometry",
  },
  biology: {
    primary: [20, 83, 45], // Green 900
    accent: [22, 163, 74], // Green 600
    light: [240, 253, 244], // Green 50
    border: [187, 247, 208], // Green 200
    textLight: [21, 128, 61], // Green 700
    name: "Biology & Life Sciences",
  },
};

const DOCX_THEME_HEX: Record<string, { primary: string; accent: string; light: string; border: string }> = {
  physics: { primary: "0F172A", accent: "0284C7", light: "F0F9FF", border: "BAE6FD" },
  chemistry: { primary: "064E3B", accent: "0D9488", light: "F0FDFA", border: "99F6E4" },
  mathematics: { primary: "312E81", accent: "6366F1", light: "F5F3FF", border: "C7D2FE" },
  biology: { primary: "14532D", accent: "16A34A", light: "F0FDF4", border: "BBF7D0" },
};

function sanitizeFilename(name: string): string {
  return name.replace(/[^a-zA-Z0-9_-]/g, "_").replace(/_+/g, "_");
}

function triggerDownload(blob: Blob, filename: string) {
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  setTimeout(() => URL.revokeObjectURL(url), 2000);
}

// ============================================================================
// 1. WORD DOCUMENT (.DOCX) EXPORT GENERATOR
// ============================================================================
export async function downloadLessonPlanDocx(plan: LessonPlanData, simulation?: SimulationItem): Promise<void> {
  const discKey = (plan.discipline || simulation?.discipline || "physics").toLowerCase();
  const theme = DOCX_THEME_HEX[discKey] || DOCX_THEME_HEX.physics;

  const cellBorderNone = {
    top: { style: BorderStyle.NONE, size: 0, color: "auto" },
    bottom: { style: BorderStyle.NONE, size: 0, color: "auto" },
    left: { style: BorderStyle.NONE, size: 0, color: "auto" },
    right: { style: BorderStyle.NONE, size: 0, color: "auto" },
  };

  const tableBorderThin = {
    top: { style: BorderStyle.SINGLE, size: 4, color: theme.border },
    bottom: { style: BorderStyle.SINGLE, size: 4, color: theme.border },
    left: { style: BorderStyle.SINGLE, size: 4, color: theme.border },
    right: { style: BorderStyle.SINGLE, size: 4, color: theme.border },
    insideHorizontal: { style: BorderStyle.SINGLE, size: 4, color: theme.border },
    insideVertical: { style: BorderStyle.SINGLE, size: 4, color: theme.border },
  };

  // Header Box Table
  const metaHeaderTable = new Table({
    width: { size: 100, type: WidthType.PERCENTAGE },
    borders: cellBorderNone,
    rows: [
      createRowHeaderMeta("DISCIPLINE", plan.discipline.toUpperCase(), "ESTIMATED DURATION", plan.estimatedTime),
      createRowHeaderMeta("GRADE LEVEL", plan.gradeLevel, "STANDARD ALIGNMENT", plan.ngssStandard),
    ],
  });

  // Pacing Guide Table
  const pacingRows = [
    new TableRow({
      tableHeader: true,
      children: [
        new TableCell({
          width: { size: 28, type: WidthType.PERCENTAGE },
          shading: { type: ShadingType.CLEAR, fill: theme.primary },
          children: [
            new Paragraph({
              children: [new TextRun({ text: "Phase / Time Window", bold: true, color: "FFFFFF", size: 20 })],
            }),
          ],
        }),
        new TableCell({
          width: { size: 72, type: WidthType.PERCENTAGE },
          shading: { type: ShadingType.CLEAR, fill: theme.primary },
          children: [
            new Paragraph({
              children: [new TextRun({ text: "Instructional Actions & Student Lab Activities", bold: true, color: "FFFFFF", size: 20 })],
            }),
          ],
        }),
      ],
    }),
    ...plan.pacingGuide.map(
      (step, idx) =>
        new TableRow({
          children: [
            new TableCell({
              width: { size: 28, type: WidthType.PERCENTAGE },
              shading: { type: ShadingType.CLEAR, fill: idx % 2 === 0 ? theme.light : "FFFFFF" },
              children: [
                new Paragraph({
                  children: [new TextRun({ text: step.phase, bold: true, color: theme.accent, size: 20 })],
                }),
              ],
            }),
            new TableCell({
              width: { size: 72, type: WidthType.PERCENTAGE },
              shading: { type: ShadingType.CLEAR, fill: idx % 2 === 0 ? theme.light : "FFFFFF" },
              children: [
                new Paragraph({
                  children: [new TextRun({ text: step.action, size: 20, color: "1E293B" })],
                }),
              ],
            }),
          ],
        })
    ),
  ];

  const pacingTable = new Table({
    width: { size: 100, type: WidthType.PERCENTAGE },
    borders: tableBorderThin,
    rows: pacingRows,
  });

  // Differentiated Instruction Table
  const diffTable = new Table({
    width: { size: 100, type: WidthType.PERCENTAGE },
    borders: tableBorderThin,
    rows: [
      new TableRow({
        children: [
          new TableCell({
            width: { size: 50, type: WidthType.PERCENTAGE },
            shading: { type: ShadingType.CLEAR, fill: "FFFBEB" }, // Amber 50
            children: [
              new Paragraph({
                children: [new TextRun({ text: "Scaffolded Support Strategies", bold: true, color: "B45309", size: 20 })],
                spacing: { after: 120 },
              }),
              new Paragraph({
                children: [new TextRun({ text: plan.differentiatedInstruction.support, size: 19, color: "334155" })],
              }),
            ],
          }),
          new TableCell({
            width: { size: 50, type: WidthType.PERCENTAGE },
            shading: { type: ShadingType.CLEAR, fill: "FAF5FF" }, // Purple 50
            children: [
              new Paragraph({
                children: [new TextRun({ text: "Honors / Gifted STEM Extension", bold: true, color: "7E22CE", size: 20 })],
                spacing: { after: 120 },
              }),
              new Paragraph({
                children: [new TextRun({ text: plan.differentiatedInstruction.extension, size: 19, color: "334155" })],
              }),
            ],
          }),
        ],
      }),
    ],
  });

  const doc = new Document({
    sections: [
      {
        properties: {
          page: {
            margin: { top: 1000, bottom: 1000, left: 1000, right: 1000 },
          },
        },
        headers: {
          default: new Header({
            children: [
              new Paragraph({
                alignment: AlignmentType.RIGHT,
                children: [
                  new TextRun({
                    text: `Axiom STEM Curriculum | ${plan.title}`,
                    italics: true,
                    color: "94A3B8",
                    size: 16,
                  }),
                ],
              }),
            ],
          }),
        },
        footers: {
          default: new Footer({
            children: [
              new Paragraph({
                alignment: AlignmentType.CENTER,
                children: [
                  new TextRun({ text: "Page ", color: "94A3B8", size: 16 }),
                  new TextRun({
                    children: [PageNumber.CURRENT],
                    color: "94A3B8",
                    size: 16,
                  }),
                  new TextRun({ text: " of ", color: "94A3B8", size: 16 }),
                  new TextRun({
                    children: [PageNumber.TOTAL_PAGES],
                    color: "94A3B8",
                    size: 16,
                  }),
                  new TextRun({ text: "  •  Aligned with NGSS & State STEM Standards", color: "94A3B8", size: 16 }),
                ],
              }),
            ],
          }),
        },
        children: [
          // Title
          new Paragraph({
            text: plan.title,
            heading: HeadingLevel.TITLE,
            alignment: AlignmentType.LEFT,
            spacing: { after: 140 },
          }),

          // Metadata Table
          metaHeaderTable,
          new Paragraph({ text: "", spacing: { after: 200 } }),

          // 1. Objectives
          new Paragraph({
            heading: HeadingLevel.HEADING_1,
            children: [
              new TextRun({ text: "1. Measurable Learning Objectives (SWBAT)", bold: true, color: theme.primary }),
            ],
            spacing: { before: 200, after: 120 },
          }),
          ...plan.learningObjectives.map(
            (obj) =>
              new Paragraph({
                bullet: { level: 0 },
                children: [
                  new TextRun({ text: " [ ] ", color: theme.accent, bold: true }),
                  new TextRun({ text: obj, color: "1E293B", size: 21 }),
                ],
                spacing: { after: 80 },
              })
          ),

          // 2. Essential Questions
          new Paragraph({
            heading: HeadingLevel.HEADING_1,
            children: [
              new TextRun({ text: "2. Essential Driving Inquiry Questions", bold: true, color: theme.primary }),
            ],
            spacing: { before: 260, after: 120 },
          }),
          ...plan.essentialQuestions.map(
            (q, i) =>
              new Paragraph({
                bullet: { level: 0 },
                children: [
                  new TextRun({ text: `Question ${i + 1}: `, bold: true, color: theme.accent }),
                  new TextRun({ text: `"${q}"`, italics: true, color: "334155", size: 21 }),
                ],
                spacing: { after: 80 },
              })
          ),

          // 3. Pacing Guide
          new Paragraph({
            heading: HeadingLevel.HEADING_1,
            children: [
              new TextRun({ text: "3. Instructional Pacing & Lab Framework", bold: true, color: theme.primary }),
            ],
            spacing: { before: 260, after: 140 },
          }),
          pacingTable,

          // 4. Lab Prompts
          new Paragraph({
            heading: HeadingLevel.HEADING_1,
            children: [
              new TextRun({ text: "4. Student Lab Worksheet Prompts", bold: true, color: theme.primary }),
            ],
            spacing: { before: 260, after: 120 },
          }),
          ...plan.studentLabQuestions.map(
            (prompt, i) =>
              new Paragraph({
                children: [
                  new TextRun({ text: `Lab Prompt #${i + 1}: `, bold: true, color: theme.accent }),
                  new TextRun({ text: prompt, color: "1E293B", size: 21 }),
                ],
                spacing: { after: 100 },
              })
          ),

          // 5. Differentiation
          new Paragraph({
            heading: HeadingLevel.HEADING_1,
            children: [
              new TextRun({ text: "5. Differentiated Instruction & Extension", bold: true, color: theme.primary }),
            ],
            spacing: { before: 260, after: 140 },
          }),
          diffTable,

          // Footer Note
          new Paragraph({
            children: [
              new TextRun({
                text: "Generated by Axiom STEM Lesson Architect. Seamlessly pair with the live simulation and student worksheet view.",
                italics: true,
                color: "64748B",
                size: 18,
              }),
            ],
            spacing: { before: 300, after: 100 },
            alignment: AlignmentType.CENTER,
          }),
        ],
      },
    ],
  });

  const blob = await Packer.toBlob(doc);
  const filename = `${sanitizeFilename(plan.title)}_Lesson_Plan.docx`;
  triggerDownload(blob, filename);
}

function createRowHeaderMeta(label1: string, val1: string, label2: string, val2: string): TableRow {
  return new TableRow({
    children: [
      new TableCell({
        width: { size: 22, type: WidthType.PERCENTAGE },
        children: [new Paragraph({ children: [new TextRun({ text: label1, bold: true, size: 18, color: "64748B" })] })],
      }),
      new TableCell({
        width: { size: 28, type: WidthType.PERCENTAGE },
        children: [new Paragraph({ children: [new TextRun({ text: val1, bold: true, size: 19, color: "0F172A" })] })],
      }),
      new TableCell({
        width: { size: 22, type: WidthType.PERCENTAGE },
        children: [new Paragraph({ children: [new TextRun({ text: label2, bold: true, size: 18, color: "64748B" })] })],
      }),
      new TableCell({
        width: { size: 28, type: WidthType.PERCENTAGE },
        children: [new Paragraph({ children: [new TextRun({ text: val2, bold: true, size: 19, color: "0284C7" })] })],
      }),
    ],
  });
}

// ============================================================================
// 2. PDF LESSON PLAN GENERATOR (PDF EXPORT)
// ============================================================================
export function downloadLessonPlanPdf(plan: LessonPlanData, simulation?: SimulationItem): void {
  const doc = new jsPDF({
    orientation: "portrait",
    unit: "mm",
    format: "a4",
  });

  const discKey = (plan.discipline || simulation?.discipline || "physics").toLowerCase();
  const theme = THEMES[discKey] || THEMES.physics;

  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  const margin = 14;
  const contentWidth = pageWidth - margin * 2;
  let y = margin;

  // Header Banner
  doc.setFillColor(...theme.primary);
  doc.roundedRect(margin, y, contentWidth, 24, 2, 2, "F");

  doc.setTextColor(255, 255, 255);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(14);
  doc.text("AXIOM STEM CURRICULUM & LESSON PLAN", margin + 6, y + 9);

  doc.setFontSize(8.5);
  doc.setFont("helvetica", "normal");
  doc.setTextColor(226, 232, 240);
  doc.text(
    `DISCIPLINE: ${plan.discipline.toUpperCase()}   |   GRADE: ${plan.gradeLevel}   |   DURATION: ${plan.estimatedTime}`,
    margin + 6,
    y + 17
  );

  y += 30;

  // Title
  doc.setTextColor(15, 23, 42);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(15);
  const titleLines = doc.splitTextToSize(plan.title, contentWidth);
  doc.text(titleLines, margin, y);
  y += titleLines.length * 6 + 2;

  // Standard Alignment Badge Box
  doc.setFillColor(...theme.light);
  doc.setDrawColor(...theme.border);
  doc.setLineWidth(0.3);
  doc.roundedRect(margin, y, contentWidth, 8, 1.5, 1.5, "FD");

  doc.setTextColor(...theme.textLight);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(8.5);
  doc.text(`Aligned Standard: ${plan.ngssStandard}`, margin + 4, y + 5.5);
  y += 13;

  // SECTION 1: Learning Objectives (SWBAT)
  drawSectionHeader(doc, "1. Measurable Learning Objectives (SWBAT)", theme, margin, y, contentWidth);
  y += 7;

  doc.setFont("helvetica", "normal");
  doc.setFontSize(9);
  doc.setTextColor(30, 41, 59);

  plan.learningObjectives.forEach((obj) => {
    const lines = doc.splitTextToSize(`•  ${obj}`, contentWidth - 4);
    if (y + lines.length * 4.5 > pageHeight - 20) {
      doc.addPage();
      y = margin;
    }
    doc.text(lines, margin + 2, y);
    y += lines.length * 4.5 + 1.5;
  });

  y += 4;

  // SECTION 2: Essential Driving Inquiry Questions
  drawSectionHeader(doc, "2. Essential Driving Inquiry Questions", theme, margin, y, contentWidth);
  y += 7;

  plan.essentialQuestions.forEach((q, i) => {
    const qText = `Q${i + 1}: "${q}"`;
    const lines = doc.splitTextToSize(qText, contentWidth - 4);
    if (y + lines.length * 4.5 > pageHeight - 20) {
      doc.addPage();
      y = margin;
    }
    doc.setFont("helvetica", "italic");
    doc.setTextColor(51, 65, 85);
    doc.text(lines, margin + 2, y);
    y += lines.length * 4.5 + 2;
  });

  y += 4;

  // SECTION 3: Instructional Pacing Guide (Table)
  drawSectionHeader(doc, "3. Instructional Pacing Guide & Lab Framework", theme, margin, y, contentWidth);
  y += 6;

  const tableBody = plan.pacingGuide.map((step) => [step.phase, step.action]);

  autoTable(doc, {
    startY: y,
    margin: { left: margin, right: margin },
    head: [["Phase / Time Window", "Teacher Guidance & Student Lab Action"]],
    body: tableBody,
    theme: "grid",
    headStyles: {
      fillColor: theme.primary,
      textColor: [255, 255, 255],
      fontStyle: "bold",
      fontSize: 8.5,
    },
    columnStyles: {
      0: { cellWidth: 46, fontStyle: "bold", textColor: theme.textLight },
      1: { cellWidth: "auto", textColor: [30, 41, 59] },
    },
    styles: {
      fontSize: 8,
      cellPadding: 3,
      lineColor: theme.border,
      lineWidth: 0.2,
    },
    alternateRowStyles: {
      fillColor: theme.light,
    },
  });

  y = (doc as any).lastAutoTable.finalY + 8;

  // Check page break for Section 4
  if (y > pageHeight - 50) {
    doc.addPage();
    y = margin;
  }

  // SECTION 4: Student Lab Prompts
  drawSectionHeader(doc, "4. Student Lab Worksheet Prompts", theme, margin, y, contentWidth);
  y += 7;

  plan.studentLabQuestions.forEach((prompt, i) => {
    const pText = `Prompt #${i + 1}: ${prompt}`;
    const lines = doc.splitTextToSize(pText, contentWidth - 4);
    if (y + lines.length * 4.5 > pageHeight - 20) {
      doc.addPage();
      y = margin;
    }
    doc.setFont("helvetica", "normal");
    doc.setTextColor(30, 41, 59);
    doc.text(lines, margin + 2, y);
    y += lines.length * 4.5 + 2;
  });

  y += 4;

  // Check page break for Section 5
  if (y > pageHeight - 45) {
    doc.addPage();
    y = margin;
  }

  // SECTION 5: Differentiated Support & Extension
  drawSectionHeader(doc, "5. Differentiated Instruction & Extension", theme, margin, y, contentWidth);
  y += 7;

  const halfWidth = (contentWidth - 4) / 2;

  // Support Box
  doc.setFillColor(254, 243, 199); // Amber 100
  doc.setDrawColor(252, 211, 77); // Amber 300
  doc.roundedRect(margin, y, halfWidth, 26, 1.5, 1.5, "FD");

  doc.setTextColor(146, 64, 14); // Amber 800
  doc.setFont("helvetica", "bold");
  doc.setFontSize(8);
  doc.text("Scaffolded Support Strategies:", margin + 3, y + 4.5);

  doc.setFont("helvetica", "normal");
  doc.setTextColor(51, 65, 85);
  doc.setFontSize(7.5);
  const supportLines = doc.splitTextToSize(plan.differentiatedInstruction.support, halfWidth - 6);
  doc.text(supportLines.slice(0, 4), margin + 3, y + 9);

  // Extension Box
  doc.setFillColor(243, 232, 255); // Purple 100
  doc.setDrawColor(216, 180, 254); // Purple 300
  doc.roundedRect(margin + halfWidth + 4, y, halfWidth, 26, 1.5, 1.5, "FD");

  doc.setTextColor(107, 33, 168); // Purple 800
  doc.setFont("helvetica", "bold");
  doc.setFontSize(8);
  doc.text("Honors / Gifted Extension:", margin + halfWidth + 7, y + 4.5);

  doc.setFont("helvetica", "normal");
  doc.setTextColor(51, 65, 85);
  doc.setFontSize(7.5);
  const extLines = doc.splitTextToSize(plan.differentiatedInstruction.extension, halfWidth - 6);
  doc.text(extLines.slice(0, 4), margin + halfWidth + 7, y + 9);

  // Page Numbers on all pages
  const totalPages = (doc.internal as any).getNumberOfPages();
  for (let i = 1; i <= totalPages; i++) {
    doc.setPage(i);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(7.5);
    doc.setTextColor(148, 163, 184);
    doc.text(
      `Axiom STEM Curriculum  •  ${plan.title}  •  Page ${i} of ${totalPages}`,
      pageWidth / 2,
      pageHeight - 6,
      { align: "center" }
    );
  }

  const filename = `${sanitizeFilename(plan.title)}_Lesson_Plan.pdf`;
  doc.save(filename);
}

function drawSectionHeader(
  doc: jsPDF,
  title: string,
  theme: DisciplineTheme,
  x: number,
  y: number,
  width: number
) {
  doc.setFillColor(...theme.light);
  doc.setDrawColor(...theme.border);
  doc.setLineWidth(0.2);
  doc.rect(x, y - 4, width, 6, "F");

  doc.setFont("helvetica", "bold");
  doc.setFontSize(9.5);
  doc.setTextColor(...theme.textLight);
  doc.text(title, x + 2, y);
}
