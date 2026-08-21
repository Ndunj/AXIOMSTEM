import { SimulationWorksheetData } from "./types";

export const CHEM_BIO_WORKSHEETS: Record<string, SimulationWorksheetData> = {
  "sim-iupac-3d-chemistry": {
    drivingQuestion: "How do the number of carbon atoms and functional groups (like alcohols, acids, or double bonds) determine the 3D shape and scientific IUPAC names of organic molecules?",
    hypothesisPrompt: "If you add a single carbon atom to an alkane chain (for example, going from propane with 3 carbons to butane with 4 carbons), predict what happens to the molecular formula and the 3D chain structure.",
    tableHeaders: ["Trial", "Chemical Formula", "Number of Carbons (Prefix)", "Main Functional Group", "IUPAC Chemical Name", "Everyday Example / Use", "3D Shape Around Carbon"],
    tableRows: [
      ["1", "CH₄", "1 Carbon (Meth-)", "Alkane (All single bonds)", "Methane", "Natural gas for stove cooking", "Tetrahedral (Pyramid shape)"],
      ["2", "CH₃-CH₃", "2 Carbons (Eth-)", "Alkane (All single bonds)", "Ethane", "Fuel component", "Tetrahedral bonded carbons"],
      ["3", "CH₃-CH₂-CH₃", "3 Carbons (Prop-)", "Alkane (All single bonds)", "Propane", "Barbecue grill gas cylinder", "Zig-zag carbon chain"],
      ["4", "CH₃-CH₂-OH", "2 Carbons (Eth-)", "Alcohol (-OH group)", "Ethanol", "Hand sanitizer / Biofuel", "Bent at oxygen (-OH)"],
      ["5", "CH₃-COOH", "2 Carbons (Eth-)", "Carboxylic Acid (-COOH)", "Ethanoic acid (Acetic acid)", "Household vinegar", "Planar around C=O double bond"],
      ["6", "CH₃-C(=O)-CH₃", "3 Carbons (Prop-)", "Ketone (C=O carbonyl)", "Propan-2-one (Acetone)", "Nail polish remover", "Trigonal planar at C=O"]
    ],
    criticalQuestions: [
      {
        prompt: "1. Counting the Longest Carbon Chain",
        subtext: "In IUPAC naming, prefixes tell how many carbons are in the longest continuous chain: 1 = Meth-, 2 = Eth-, 3 = Prop-, 4 = But-, 5 = Pent-. Name an alkane with a straight chain of 5 carbon atoms (C₅H₁₂).",
        exemplarAnswer: "5 carbons uses the prefix 'Pent-' with the alkane ending '-ane'. The name is Pentane."
      },
      {
        prompt: "2. Identifying Functional Groups",
        subtext: "Look at Trial 4 (Ethanol) and Trial 5 (Ethanoic acid). What special group of atoms makes an alcohol (-OH) different from a carboxylic acid (-COOH)? How does the name ending change?",
        exemplarAnswer: "An alcohol contains a hydroxyl group (-OH) and ends in '-ol' (like ethanol). A carboxylic acid contains a carboxyl group (-COOH, which has both a C=O double bond and an -OH) and ends in '-oic acid' (like ethanoic acid)."
      },
      {
        prompt: "3. 3D Tetrahedral Bonding Around Carbon",
        subtext: "In the 3D molecular viewer, notice that carbon forms 4 single covalent bonds arranged in a 3D tripod shape (tetrahedral). Why aren't the bonds flat like on a 2D sheet of paper?",
        exemplarAnswer: "Electrons in chemical bonds are negatively charged and repel each other. To get as far apart as possible in 3D space, the 4 electron pairs point toward the corners of a tetrahedron with angles of about 109.5°."
      }
    ],
    realWorldScenario: {
      title: "Household Chemistry & Everyday Ingredients",
      scenario: "Many bottles under a kitchen sink or in a medicine cabinet have IUPAC scientific names on their ingredient labels.",
      task: "Match the following household items with their IUPAC names: (a) Vinegar, (b) Rubbing alcohol, and (c) Nail polish remover.",
      exemplarAnswer: "(a) Vinegar contains ethanoic acid (acetic acid), (b) Rubbing alcohol is propan-2-ol (isopropanol), and (c) Nail polish remover contains propan-2-one (acetone)."
    }
  },

  "sim-boiling-water-phase-change": {
    drivingQuestion: "What happens to the temperature and water molecules when liquid water is heated until it boils and turns into steam?",
    hypothesisPrompt: "When a pot of water reaches its boiling point at 100°C, predict whether the temperature will keep rising if you turn the stove burner higher, or if it will stay at 100°C. Where does the added heat energy go?",
    tableHeaders: ["Stage of Heating", "Time (seconds)", "Water Temperature (°C)", "State of Matter", "What the Molecules Are Doing", "Heat Energy Role"],
    tableRows: [
      ["1. Cold Water", "0 s", "20.0 °C", "Liquid water", "Molecules sliding past each other at room temperature", "Starting baseline"],
      ["2. Warm Water", "120 s", "60.0 °C", "Liquid water", "Molecules moving faster and bumping into each other", "Heat increases water temperature"],
      ["3. Boiling Begins", "240 s", "100.0 °C", "Hot liquid (bubbles forming)", "Vapor bubbles start forming at the bottom", "Reaching boiling point"],
      ["4. Active Boiling Plateau", "400 s", "100.0 °C", "Liquid + Steam mixture", "Heat breaks attractions between water molecules", "Temperature stays at 100°C (Latent Heat)"],
      ["5. Complete Steam", "800 s", "100.0 °C (Steam)", "Water vapor (Gas)", "Molecules completely free and bouncing far apart", "All liquid turned to gas"],
      ["6. Superheated Steam", "900 s", "115.0 °C", "Hot gas (Steam)", "Gas molecules moving at very high speeds in air", "Heat increases steam temperature"]
    ],
    criticalQuestions: [
      {
        prompt: "1. The Boiling Temperature Plateau",
        subtext: "Look at Stages 3, 4, and 5 in the table. Why does the thermometer stay stuck at 100°C even though heat from the burner is constantly being added?",
        exemplarAnswer: "During a phase change, the added heat energy (called latent heat) is used to overcome and break the attractive forces holding water molecules together in the liquid, rather than making the molecules move faster to raise the temperature."
      },
      {
        prompt: "2. Liquid vs. Gas at the Molecular Level",
        subtext: "Describe the difference in how water molecules move and how close they are to each other in liquid water versus steam (water vapor).",
        exemplarAnswer: "In liquid water, molecules are packed close together, touching and sliding past one another. In steam (gas), molecules are spread very far apart and fly around rapidly with lots of empty space between them."
      },
      {
        prompt: "3. Evaporation vs. Boiling",
        subtext: "Explain the difference between water evaporating slowly from a puddle on a sidewalk versus water boiling in a pot on a stove.",
        exemplarAnswer: "Evaporation happens only at the surface of a liquid at any temperature. Boiling happens throughout the entire liquid at a specific temperature (100°C for water), forming vapor bubbles that rise from the bottom."
      }
    ],
    realWorldScenario: {
      title: "Cooking Pasta & Why Sweating Cools Us Down",
      scenario: "When you exercise on a warm day, your body produces sweat (water droplets) on your skin.",
      task: "Explain how sweat evaporating off your skin uses the concept of latent heat to cool your body down.",
      exemplarAnswer: "As sweat droplets turn from liquid into water vapor, they absorb large amounts of heat energy (latent heat of vaporization) directly from your warm skin, cooling your body and keeping your temperature stable."
    }
  },

  "sim-photosynthesis-plant-growth": {
    drivingQuestion: "How do light intensity, carbon dioxide (CO₂), and temperature affect the rate of photosynthesis and plant growth?",
    hypothesisPrompt: "If you move a green plant from a dim corner of a room to a bright, sunny windowsill, predict what will happen to the number of oxygen bubbles it produces and its rate of growth.",
    tableHeaders: ["Trial", "Light Level (Brightness)", "CO₂ Level (Carbon Dioxide)", "Temperature (°C)", "Oxygen Bubbles / Minute", "Plant Growth Status", "Limiting Factor"],
    tableRows: [
      ["1", "Very Dim Light (50 units)", "Normal (400 ppm)", "22.0 °C", "3 bubbles / min", "Very slow growth", "Light is too dim (Not enough light)"],
      ["2", "Medium Light (200 units)", "Normal (400 ppm)", "22.0 °C", "12 bubbles / min", "Moderate healthy growth", "Light is increasing photosynthesis"],
      ["3", "Bright Light (600 units)", "Normal (400 ppm)", "22.0 °C", "25 bubbles / min", "Fast, vigorous growth", "Maximum light level for normal CO₂"],
      ["4", "Very Bright Light (1000 units)", "Normal (400 ppm)", "22.0 °C", "26 bubbles / min", "Growth stays steady (Plateau)", "CO₂ is now the limiting factor"],
      ["5", "Very Bright Light (1000 units)", "High CO₂ (1200 ppm)", "22.0 °C", "42 bubbles / min", "Maximum rapid growth", "All conditions optimal"],
      ["6", "Very Bright Light (1000 units)", "High CO₂ (1200 ppm)", "45.0 °C (Overheating)", "6 bubbles / min", "Plant wilts / Stressed", "Too hot (Heat damages plant cells)"]
    ],
    criticalQuestions: [
      {
        prompt: "1. The Photosynthesis Word Equation",
        subtext: "Plants use sunlight to turn carbon dioxide and water into glucose (food) and oxygen gas: Carbon Dioxide + Water + Sunlight → Glucose + Oxygen. What gas do plants take in from the air, and what gas do they release into the air?",
        exemplarAnswer: "Plants take in carbon dioxide (CO₂) from the air and water (H₂O) from the soil, and they release oxygen (O₂) into the air as a byproduct while making glucose sugar for energy."
      },
      {
        prompt: "2. Identifying a Limiting Factor",
        subtext: "Compare Trial 3 and Trial 4. When light was made even brighter, why did the rate of oxygen bubbles barely increase from 25 to 26? What happened when we gave the plant more CO₂ in Trial 5?",
        exemplarAnswer: "The plant had plenty of light, but it ran out of enough carbon dioxide to make more sugar (CO₂ was the limiting factor). Adding more CO₂ in Trial 5 allowed the plant to jump to 42 bubbles per minute."
      },
      {
        prompt: "3. The Effect of Extreme Temperature",
        subtext: "In Trial 6, the temperature was raised to 45°C (113°F). Why did the plant's photosynthesis rate drop drastically from 42 down to 6 bubbles per minute?",
        exemplarAnswer: "Extreme heat damages and breaks down (denatures) the plant's enzymes and causes the plant to close its leaf pores (stomata) to prevent drying out, which stops photosynthesis."
      }
    ],
    realWorldScenario: {
      title: "Caring for Houseplants and Garden Crops",
      scenario: "A student wants their tomato plant in a home garden to grow large, healthy tomatoes during the summer.",
      task: "Based on your virtual lab trials, list the three key environmental conditions the student should provide for their tomato plant.",
      exemplarAnswer: "1. Place the plant in full sunlight (bright light). 2. Ensure good airflow for carbon dioxide. 3. Keep the temperature in a warm, comfortable range (around 20°C to 25°C) with regular watering so the plant does not overheat."
    }
  },

  "sim-water-cycle-simulation": {
    drivingQuestion: "How do evaporation, condensation, precipitation, and groundwater flow continuously recycle Earth's water supply?",
    hypothesisPrompt: "When sunlight warms an ocean or lake, predict what phase change happens to the liquid water, and explain how that water vapor eventually forms clouds high in the sky.",
    tableHeaders: ["Water Cycle Stage", "What Powers It", "What Happens to the Water", "State of Matter Change", "Where It Moves", "Everyday Example"],
    tableRows: [
      ["1. Evaporation", "Heat from the Sun", "Liquid water warms and turns into invisible vapor", "Liquid → Gas (Vapor)", "Rises upward into the air", "Puddle drying up in the sun"],
      ["2. Transpiration", "Sun + Plant roots", "Plants release water vapor through tiny leaf pores", "Liquid (in plant) → Gas (Vapor)", "Rises from leaves into air", "Forests creating humid air"],
      ["3. Condensation", "Cool air at high altitudes", "Water vapor cools and forms tiny water droplets", "Gas (Vapor) → Liquid droplets", "Gathers together to form clouds", "Dew on grass / Foggy bathroom mirror"],
      ["4. Precipitation", "Gravity", "Droplets in clouds grow heavy and fall to Earth", "Liquid / Solid falling", "Falls as rain, snow, or hail", "Rainstorm watering a garden"],
      ["5. Surface Runoff", "Gravity", "Water flows across ground into streams and rivers", "Liquid flowing", "Moves downhill toward oceans", "Water flowing into street storm drains"],
      ["6. Infiltration / Groundwater", "Gravity & soil porosity", "Water soaks deep into soil and underground rocks", "Liquid underground", "Stored in aquifers / feeds wells", "Clear water pumped from a water well"]
    ],
    criticalQuestions: [
      {
        prompt: "1. Evaporation vs. Condensation",
        subtext: "Explain how evaporation and condensation are opposites. Which one requires heat to be added, and which one occurs when water vapor cools down?",
        exemplarAnswer: "Evaporation turns liquid water into gas when heat is added (warming). Condensation turns water vapor back into liquid droplets when water vapor cools down high in the atmosphere."
      },
      {
        prompt: "2. The Role of the Sun and Gravity",
        subtext: "What main source of energy drives water upward into the atmosphere (evaporation)? What force pulls water back down to Earth (rain and river flow)?",
        exemplarAnswer: "The Sun's heat energy drives water upward through evaporation and transpiration. The force of Gravity pulls water back down to Earth as rain/snow and causes rivers to flow downhill to the sea."
      },
      {
        prompt: "3. Conservation of Water on Earth",
        subtext: "Does Earth ever lose its water to outer space, or is the total amount of water on Earth always the same? Explain why the water you drink today is the same water dinosaurs drank millions of years ago.",
        exemplarAnswer: "Earth is a closed system held by gravity; water is never lost. It is constantly recycled through evaporation, condensation, and precipitation. The water molecules on Earth today have been cycling through clouds, oceans, and living things for billions of years."
      }
    ],
    realWorldScenario: {
      title: "Why Morning Dew Forms on Grass",
      scenario: "On a clear morning, you notice tiny water droplets covering the grass in your front yard even though it did not rain overnight.",
      task: "Explain using the water cycle how overnight cooling causes condensation on grass blades.",
      exemplarAnswer: "During the cool night, the ground and grass blades cool down. The invisible water vapor in the air touching the cold grass cools to its dew point and condenses from a gas into liquid water droplets (dew)."
    }
  }
};
