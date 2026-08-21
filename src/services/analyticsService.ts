import { SimulationUsageMetrics, SimulationItem, TeacherPurchasedSimulation } from "../types";

const STORAGE_KEY = "axiom_sim_usage_analytics_v1";

// Helper to generate deterministic mock metrics for initial state
function generateInitialMetric(simId: string, index: number): SimulationUsageMetrics {
  // Hash simId for consistent values
  let hash = 0;
  for (let i = 0; i < simId.length; i++) {
    hash = (hash << 5) - hash + simId.charCodeAt(i);
    hash |= 0;
  }
  const positiveHash = Math.abs(hash);

  const baseTimesPlayed = 60 + (positiveHash % 240) + index * 35;
  const baseStudents = 35 + (positiveHash % 85) + index * 12;
  const avgMins = 18 + (positiveHash % 16);
  const completion = 78 + (positiveHash % 20);

  const dayOffsets = [5, 4, 3, 2, 1, 0];
  const weekly = [
    Math.round(baseTimesPlayed * 0.12),
    Math.round(baseTimesPlayed * 0.18),
    Math.round(baseTimesPlayed * 0.15),
    Math.round(baseTimesPlayed * 0.22),
    Math.round(baseTimesPlayed * 0.19),
    Math.round(baseTimesPlayed * 0.08),
    Math.round(baseTimesPlayed * 0.06),
  ];

  const now = new Date();
  const lastActiveDate = new Date(now.getTime() - ((positiveHash % 48) * 3600000));

  return {
    simulationId: simId,
    timesPlayed: baseTimesPlayed,
    studentsEngaged: baseStudents,
    totalTimeMinutes: Math.round(baseTimesPlayed * avgMins),
    avgSessionMinutes: avgMins,
    completionRate: completion,
    lastPlayedDate: lastActiveDate.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      hour: "numeric",
      minute: "2-digit",
    }),
    weeklyTrend: weekly,
    periodBreakdown: [
      {
        periodName: "Period 1 (Honors)",
        studentCount: Math.round(baseStudents * 0.32),
        timesPlayed: Math.round(baseTimesPlayed * 0.34),
        avgScore: 88 + (positiveHash % 10),
      },
      {
        periodName: "Period 3 (General STEM)",
        studentCount: Math.round(baseStudents * 0.38),
        timesPlayed: Math.round(baseTimesPlayed * 0.36),
        avgScore: 82 + (positiveHash % 12),
      },
      {
        periodName: "Period 5 (AP/Adv Lab)",
        studentCount: Math.round(baseStudents * 0.30),
        timesPlayed: Math.round(baseTimesPlayed * 0.30),
        avgScore: 92 + (positiveHash % 7),
      },
    ],
  };
}

export function loadAllUsageMetrics(allSimulations: SimulationItem[]): Record<string, SimulationUsageMetrics> {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    const existing: Record<string, SimulationUsageMetrics> = raw ? JSON.parse(raw) : {};

    let hasNew = false;
    allSimulations.forEach((sim, idx) => {
      if (!existing[sim.id]) {
        existing[sim.id] = generateInitialMetric(sim.id, idx);
        hasNew = true;
      }
    });

    if (hasNew) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(existing));
    }

    return existing;
  } catch (e) {
    console.error("Error loading usage analytics:", e);
    const fallback: Record<string, SimulationUsageMetrics> = {};
    allSimulations.forEach((sim, idx) => {
      fallback[sim.id] = generateInitialMetric(sim.id, idx);
    });
    return fallback;
  }
}

export function recordSimulationPlay(simId: string): void {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    const metrics: Record<string, SimulationUsageMetrics> = raw ? JSON.parse(raw) : {};

    if (metrics[simId]) {
      metrics[simId].timesPlayed += 1;
      metrics[simId].totalTimeMinutes += metrics[simId].avgSessionMinutes || 20;
      metrics[simId].lastPlayedDate = "Just now";
      if (metrics[simId].weeklyTrend && metrics[simId].weeklyTrend.length > 0) {
        metrics[simId].weeklyTrend[metrics[simId].weeklyTrend.length - 1] += 1;
      }
    } else {
      metrics[simId] = {
        simulationId: simId,
        timesPlayed: 1,
        studentsEngaged: 1,
        totalTimeMinutes: 20,
        avgSessionMinutes: 20,
        completionRate: 85,
        lastPlayedDate: "Just now",
        weeklyTrend: [0, 0, 0, 0, 0, 0, 1],
      };
    }

    localStorage.setItem(STORAGE_KEY, JSON.stringify(metrics));
  } catch (e) {
    console.error("Error recording simulation play:", e);
  }
}

export function exportUsageReportCSV(
  metricsList: {
    title: string;
    discipline: string;
    licenseTier: string;
    classroomPin: string;
    timesPlayed: number;
    studentsEngaged: number;
    avgSessionMinutes: number;
    completionRate: number;
    lastPlayedDate: string;
  }[]
): void {
  const headers = [
    "Simulation Title",
    "Discipline",
    "License Tier",
    "Classroom PIN",
    "Times Played (Runs)",
    "Students Engaged",
    "Avg Session (Mins)",
    "Inquiry Completion Rate (%)",
    "Last Active",
  ];

  const rows = metricsList.map((m) => [
    `"${m.title.replace(/"/g, '""')}"`,
    `"${m.discipline}"`,
    `"${m.licenseTier}"`,
    `"${m.classroomPin}"`,
    m.timesPlayed,
    m.studentsEngaged,
    m.avgSessionMinutes,
    `${m.completionRate}%`,
    `"${m.lastPlayedDate}"`,
  ]);

  const csvContent = "data:text/csv;charset=utf-8," + [headers.join(","), ...rows.map((r) => r.join(","))].join("\n");
  const encodedUri = encodeURI(csvContent);
  const link = document.createElement("a");
  link.setAttribute("href", encodedUri);
  link.setAttribute("download", `axiom-stem-usage-analytics-${new Date().toISOString().slice(0, 10)}.csv`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
