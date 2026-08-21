import { SimulationItem } from "../../types";
import { SimulationWorksheetData } from "./types";
import { MATH_WORKSHEETS } from "./mathWorksheets";
import { PHYSICS_WORKSHEETS } from "./physicsWorksheets";
import { CHEM_BIO_WORKSHEETS } from "./chemBioWorksheets";

export * from "./types";

const ALL_WORKSHEETS: Record<string, SimulationWorksheetData> = {
  ...MATH_WORKSHEETS,
  ...PHYSICS_WORKSHEETS,
  ...CHEM_BIO_WORKSHEETS,
};

/**
 * Returns strictly domain-pure, high-school and middle-school-aligned worksheet data for any simulation.
 * Ensures zero cross-contamination of terms:
 * - Math sims use pure mathematical/geometric/algebraic terms
 * - Physics sims use physical principles (speed, force, light, circuits)
 * - Chemistry sims use chemical/molecular terms
 * - Biology sims use biological/living systems terms
 * - No complex engineering questions or industrial jargon.
 */
export function getSimulationWorksheetData(simulation: SimulationItem): SimulationWorksheetData {
  if (ALL_WORKSHEETS[simulation.id]) {
    return ALL_WORKSHEETS[simulation.id];
  }

  // Pure Discipline-Specific Fallbacks calibrated for Middle & High School students
  const disc = simulation.discipline?.toLowerCase() || "physics";

  if (disc === "mathematics") {
    return {
      drivingQuestion: `How do the mathematical relationships, patterns, and geometric properties in ${simulation.title} create predictable rules and formulas?`,
      hypothesisPrompt: `Predict what will happen to the output or graph shape in ${simulation.title} when you adjust the main input variable or slider from low to high.`,
      tableHeaders: ["Trial", "Input Variable (x)", "Simulation Setting", "Measured Value / Reading", "Calculated Formula Value", "Pattern / Rule Observed", "Result Check"],
      tableRows: [
        ["1", "Low Input (x₁)", "Standard condition", "Measured value 1", "Calculated value 1", "Rule holds consistently", "Verified"],
        ["2", "Medium Input (x₂)", "Midpoint condition", "Measured value 2", "Calculated value 2", "Rule holds consistently", "Verified"],
        ["3", "High Input (x₃)", "Upper range condition", "Measured value 3", "Calculated value 3", "Rule holds consistently", "Verified"],
        ["4", "Special Boundary (x = 0)", "Origin / Zero mark", "Measured value 0", "Calculated value 0", "Zero condition holds", "Verified"],
        ["5", "Doubled Input (2×)", "Double setting", "Measured value 2×", "Calculated value 2×", "Direct relationship", "Verified"]
      ],
      criticalQuestions: [
        {
          prompt: "1. Explaining the Mathematical Rule or Formula",
          subtext: `Look at the pattern in your data table. Describe how the output changes as you increase the input value in ${simulation.title}. State the formula or rule in your own words.`,
          exemplarAnswer: `As the input increases, the output changes in direct proportion according to the mathematical relationship. Substituting values into the formula yields consistent results across all test trials.`
        },
        {
          prompt: "2. Finding Patterns and Special Points",
          subtext: "What happens at special points in the simulation (such as when an angle is 90°, a value is zero, or two lines intersect)?",
          exemplarAnswer: "At special points, specific geometric theorems or algebraic conditions apply (e.g. right angles form perpendicular lines, zero inputs indicate intercepts, and intersections represent simultaneous solutions)."
        },
        {
          prompt: "3. Comparing Simulation Measurements with Calculation",
          subtext: "How do your visual measurements or readings on the screen compare to the theoretical values calculated using the mathematical formula?",
          exemplarAnswer: "The simulation readings closely match the exact formula calculations, confirming that the mathematical model accurately describes the geometric and algebraic behavior."
        }
      ],
      realWorldScenario: {
        title: `Everyday Math in Action: ${simulation.title}`,
        scenario: `People use the mathematical concepts from ${simulation.title} every day in architecture, sports statistics, map reading, and digital art design.`,
        task: `Describe one practical way the mathematical principles in ${simulation.title} can be used to solve a problem in everyday life.`,
        exemplarAnswer: "By applying these geometric and algebraic relationships, we can measure inaccessible distances, analyze performance data, and create accurately scaled drawings and designs."
      }
    };
  }

  if (disc === "chemistry") {
    return {
      drivingQuestion: `How do molecules, temperature, and chemical properties explain what we observe in ${simulation.title}?`,
      hypothesisPrompt: `Predict what will happen to the atoms, molecules, or temperature in ${simulation.title} when you change the main control slider.`,
      tableHeaders: ["Trial", "Chemical Condition", "Reactant / Substance", "Temperature (°C)", "Observed Change in Sim", "Molecular Behavior", "Conclusion"],
      tableRows: [
        ["1", "Baseline Condition", "Standard sample", "20.0 °C (Room temp)", "Initial baseline state", "Molecules at normal speed", "Baseline state"],
        ["2", "Increased Amount", "2× Concentration", "20.0 °C", "Faster reaction / change", "More frequent collisions", "Concentration effect"],
        ["3", "Warmed Sample", "Standard sample", "50.0 °C (Warmed)", "Faster molecular motion", "Molecules move rapidly", "Temperature effect"],
        ["4", "Cold Sample", "Standard sample", "5.0 °C (Chilled)", "Slower molecular motion", "Molecules move slowly", "Temperature effect"],
        ["5", "Modified Structure", "Alternative molecule", "20.0 °C", "Different property shown", "Bonding changes behavior", "Structure-property link"]
      ],
      criticalQuestions: [
        {
          prompt: "1. What is Happening to the Molecules?",
          subtext: `Describe how the atoms or molecules are arranged and how they move during the changes you observed in ${simulation.title}.`,
          exemplarAnswer: `At the molecular level, particles are in constant motion. Heating adds kinetic energy, causing particles to move faster and collide more frequently, while cooling slows them down.`
        },
        {
          prompt: "2. The Effect of Temperature and Amount",
          subtext: "How did changing the temperature or the amount of substance change the speed or outcome of the simulation?",
          exemplarAnswer: "Higher temperature increases the kinetic energy and speed of the molecules. Increasing the amount provides more particles available for interaction, speeding up the process."
        },
        {
          prompt: "3. Classifying Physical vs. Chemical Changes",
          subtext: "Are the changes shown in this simulation physical changes (changing state or shape without making new substances) or chemical changes (forming new substances with different bonds)? Explain.",
          exemplarAnswer: "Physical changes alter state or appearance without rearranging chemical bonds, while chemical changes break and reform bonds to create new chemical substances."
        }
      ],
      realWorldScenario: {
        title: `Everyday Chemistry: ${simulation.title}`,
        scenario: `Chemical principles from ${simulation.title} happen all around us in cooking, cleaning products, and household materials.`,
        task: `Give an everyday example where the principles shown in ${simulation.title} are used in daily life.`,
        exemplarAnswer: "In everyday cooking and cleaning, temperature and concentration control how fast food cooks, how substances dissolve in water, and how household cleaners work."
      }
    };
  }

  if (disc === "biology") {
    return {
      drivingQuestion: `How do living organisms, cells, and environmental factors interact in ${simulation.title}?`,
      hypothesisPrompt: `Predict how changing an environmental factor (like light, temperature, or nutrients) will affect the biological growth or response in ${simulation.title}.`,
      tableHeaders: ["Trial", "Environmental Factor", "Test Condition", "Observed Biological Response", "Growth / Activity Rate", "Health Status", "Biological Explanation"],
      tableRows: [
        ["1", "Normal Baseline", "Standard conditions", "Healthy normal activity", "100% baseline rate", "Healthy / Optimal", "Ideal normal range"],
        ["2", "Increased Light / Nutrient", "Elevated resource", "Increased activity", "Higher activity rate", "Vigorous growth", "Resource stimulates growth"],
        ["3", "Low Resource Condition", "Diminished resource", "Reduced activity", "Lower activity rate", "Slowed growth", "Limited by resource deficiency"],
        ["4", "Cold Temperature Stress", "Cold condition", "Sluggish response", "Depressed rate", "Dormant / Slow", "Cold slows enzyme activity"],
        ["5", "Extreme Heat Stress", "High heat condition", "Stressed / Wilting", "Severely reduced rate", "Stressed", "Excess heat damages cells"]
      ],
      criticalQuestions: [
        {
          prompt: "1. Explaining the Biological Process",
          subtext: `Describe the main biological process taking place in ${simulation.title} and why it is essential for the organism's survival.`,
          exemplarAnswer: `The biological process allows organisms to produce energy, maintain balanced internal conditions (homeostasis), and respond adaptively to their environment for growth and survival.`
        },
        {
          prompt: "2. Identifying Needs and Limiting Factors",
          subtext: "What does the living organism need in order to grow or function at its best? What happened when one of those key factors was taken away or limited?",
          exemplarAnswer: "Organisms require optimal light, water, nutrients, and temperature. When a key factor is in short supply, it becomes a limiting factor that caps the organism's overall rate of growth."
        },
        {
          prompt: "3. Environmental Impact on Living Things",
          subtext: "How do seasonal changes or changes in weather affect how living organisms perform this biological process?",
          exemplarAnswer: "Seasonal changes in sunlight, rainfall, and temperature directly influence biological activity, causing plants and animals to adapt their growth and activity cycles throughout the year."
        }
      ],
      realWorldScenario: {
        title: `Everyday Biology: ${simulation.title}`,
        scenario: `Understanding the biological concepts in ${simulation.title} helps people care for gardens, understand human health, and protect nature.`,
        task: `Explain how a gardener or pet owner can apply what you learned in ${simulation.title} to keep plants or animals healthy.`,
        exemplarAnswer: "By providing the right balance of light, moisture, nutrients, and comfortable temperatures, gardeners and caretakers ensure organisms have the ideal conditions to thrive."
      }
    };
  }

  // Physics Default Fallback for Middle & High School
  return {
    drivingQuestion: `How do forces, motion, energy, and physical laws explain the behavior observed in ${simulation.title}?`,
    hypothesisPrompt: `Predict what will happen to the motion, reading, or energy in ${simulation.title} when you adjust the main slider or control setting.`,
    tableHeaders: ["Trial", "Test Parameter", "Input Setting", "Measured Output Reading", "Calculated Expected Value", "Energy / Force State", "Observation"],
    tableRows: [
      ["1", "Standard Setting", "Input value 1", "Output reading 1", "Calculated value 1", "Balanced / Normal", "Baseline behavior"],
      ["2", "Increased Setting (2×)", "Input value 2×", "Output reading 2×", "Calculated value 2×", "Increased force / energy", "Proportional increase"],
      ["3", "Decreased Setting (0.5×)", "Input value 0.5×", "Output reading 0.5×", "Calculated value 0.5×", "Decreased force / energy", "Proportional decrease"],
      ["4", "Zero Setting", "Input value = 0", "Output reading = 0", "Calculated value = 0", "Rest state", "Zero condition holds"],
      ["5", "Maximum Setting", "Upper limit input", "Peak output reading", "Calculated value", "Peak energy / motion", "Maximum response"]
    ],
    criticalQuestions: [
      {
        prompt: "1. Describing the Physical Relationship",
        subtext: `What happens to the output reading when you increase the input in ${simulation.title}? State the relationship in simple words (e.g. direct, inverse, or constant).`,
        exemplarAnswer: `Increasing the input produces a predictable change in the output according to the physical law. The relationship is direct and proportional across all test trials.`
      },
      {
        prompt: "2. Energy and Forces at Work",
        subtext: "What forces (like gravity, friction, or electric force) or types of energy (like kinetic or potential energy) are acting in this simulation?",
        exemplarAnswer: "The simulation illustrates fundamental forces (like gravity, push/pull, or electromagnetic forces) acting on the object, converting potential energy into kinetic energy while conserving total energy."
      },
      {
        prompt: "3. Comparing Lab Readings with Physics Formulas",
        subtext: "How do the measurements you recorded from the simulation compare to values calculated using the standard physics formula?",
        exemplarAnswer: "The virtual lab measurements match the theoretical calculations accurately, verifying that the physical law reliably predicts real-world behavior."
      }
    ],
    realWorldScenario: {
      title: `Everyday Physics: ${simulation.title}`,
      scenario: `The physical principles demonstrated in ${simulation.title} occur all around us in sports, transportation, playground equipment, and household devices.`,
      task: `Describe one everyday situation where you experience or use the physics shown in ${simulation.title}.`,
      exemplarAnswer: "We experience these physics principles when riding a bicycle, playing sports, using simple tools around the home, or observing natural motion in daily life."
    }
  };
}
