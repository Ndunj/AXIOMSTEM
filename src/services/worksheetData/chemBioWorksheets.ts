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
  },

  "sim-high-precision-acid-base-titration": {
    drivingQuestion: "How do volumetric acid-base titrations and chemical indicators enable high-precision determination of unknown sample molarities using stoichiometric equivalence (CaVa = CbVb)?",
    hypothesisPrompt: "If standard 0.10M sodium hydroxide (NaOH) is delivered dropwise into an unknown acid sample with phenolphthalein, predict how the pH and solution color will change as the delivered volume reaches and exceeds the equivalence point.",
    tableHeaders: ["Trial", "Reaction System", "Analyte Volume (Va)", "Indicator Used", "Equivalence Vol (Vb)", "Endpoint Color Change", "Calculated Acid Conc (Ca)"],
    tableRows: [
      ["1", "Unknown Acid + 0.10M NaOH", "25.0 cm³", "Phenolphthalein", "25.00 cm³", "Colorless → Persistent Faint Pink", "0.1000 M"],
      ["2", "Unknown HCl + 0.10M NaOH", "25.0 cm³", "Phenolphthalein", "22.50 cm³", "Colorless → Persistent Faint Pink", "0.0900 M"],
      ["3", "Unknown CH₃COOH + 0.10M NaOH", "25.0 cm³", "Phenolphthalein", "30.00 cm³", "Colorless → Vibrant Pink", "0.1200 M"],
      ["4", "Unknown NH₃ + 0.12M HCl", "25.0 cm³", "Methyl Orange", "18.75 cm³", "Yellow/Orange → Red/Pink", "0.0900 M"],
      ["5", "Unknown Acid (Micro-trial)", "10.0 cm³", "Bromothymol Blue", "10.00 cm³", "Yellow → Emerald Green (pH 7.0)", "0.1000 M"],
      ["6", "Over-Titration Analysis", "25.0 cm³", "Phenolphthalein", "35.00 cm³ (Overshot)", "Dark Magenta (Excess OH⁻)", "Overestimated (Error)"]
    ],
    criticalQuestions: [
      {
        prompt: "1. Equivalence Point vs. Experimental Endpoint",
        subtext: "Explain the fundamental difference between the theoretical equivalence point and the experimental endpoint observed in the laboratory.",
        exemplarAnswer: "The equivalence point is the exact stoichiometric point where moles of H⁺ ions equal moles of OH⁻ ions. The endpoint is the physical point where the indicator changes color. A well-chosen indicator has an endpoint pH range matching the equivalence point pH."
      },
      {
        prompt: "2. Deriving Concentration using CaVa = CbVb",
        subtext: "If 25.0 cm³ of unknown HCl sample is neutralized by 22.50 cm³ of 0.10 M NaOH titrant, calculate the molarity (Ca) of the acid sample step-by-step.",
        exemplarAnswer: "Using Ca = (Cb × Vb) / Va = (0.10 M × 22.50 cm³) / 25.0 cm³ = 2.25 / 25.0 = 0.0900 M."
      },
      {
        prompt: "3. Indicator Selection & Salt Hydrolysis",
        subtext: "Why is phenolphthalein suitable for a weak acid (CH₃COOH) titrated with a strong base (NaOH), while methyl orange is preferable for a weak base (NH₃) titrated with a strong acid (HCl)?",
        exemplarAnswer: "Neutralizing a weak acid with a strong base yields a basic salt solution (pH > 7) due to acetate ion hydrolysis, matching phenolphthalein's transition range (pH 8.2–10.0). Neutralizing a weak base with a strong acid yields an acidic salt solution (pH < 7), matching methyl orange's acidic transition range (pH 3.1–4.4)."
      }
    ],
    realWorldScenario: {
      title: "Quality Control in Food Science & Pharmaceutical Purity",
      scenario: "Commercial vinegar must contain between 4% and 5% acetic acid (CH₃COOH) by mass to meet FDA food safety standards. A food chemist performs a precision titration on a 25.0 cm³ vinegar sample using 0.10M standard NaOH.",
      task: "Explain why laboratory titrations are critical for quality control in pharmaceuticals and food manufacturing, and why dropwise flow control is essential near the endpoint.",
      exemplarAnswer: "Titration provides highly reproducible, quantitative verification of active ingredient concentrations. Dropwise delivery near the endpoint prevents overshooting the equivalence point, ensuring accurate dosage validation without costly chemical waste."
    }
  },

  "sim-galvanic-cell-nernst": {
    drivingQuestion: "How do spontaneous oxidation-reduction half-reactions and ion concentration gradients govern electric potential (voltage) across galvanic cells according to the Nernst Equation?",
    hypothesisPrompt: "If the concentration of the dissolved metal ion at the cathode (reduction) is increased from 0.01 M to 2.00 M while holding the anode constant, predict whether the measured cell potential (Ecell) will increase, decrease, or remain unchanged relative to the standard cell potential (E°cell).",
    tableHeaders: ["Trial", "Anode Half-Cell (Oxidation)", "Cathode Half-Cell (Reduction)", "[Anode Ion] (M)", "[Cathode Ion] (M)", "Temp (K)", "E°cell (V)", "Reaction Quotient (Q)", "Operating Ecell (V)", "Electron Flow Direction"],
    tableRows: [
      ["1", "Zn²⁺ / Zn (E° = -0.76 V)", "Cu²⁺ / Cu (E° = +0.34 V)", "1.00 M", "1.00 M", "298 K", "+1.10 V", "1.000", "+1.100 V", "Left (Zn) → Right (Cu)"],
      ["2", "Zn²⁺ / Zn (E° = -0.76 V)", "Cu²⁺ / Cu (E° = +0.34 V)", "0.01 M", "2.00 M", "298 K", "+1.10 V", "0.005", "+1.168 V (Increased)", "Left (Zn) → Right (Cu)"],
      ["3", "Zn²⁺ / Zn (E° = -0.76 V)", "Cu²⁺ / Cu (E° = +0.34 V)", "2.00 M", "0.01 M", "298 K", "+1.10 V", "200.000", "+1.032 V (Decreased)", "Left (Zn) → Right (Cu)"],
      ["4", "Mg²⁺ / Mg (E° = -2.37 V)", "Ag⁺ / Ag (E° = +0.80 V)", "1.00 M", "1.00 M", "298 K", "+3.17 V", "1.000", "+3.170 V", "Left (Mg) → Right (Ag)"],
      ["5", "Fe²⁺ / Fe (E° = -0.44 V)", "Ni²⁺ / Ni (E° = -0.25 V)", "1.00 M", "1.00 M", "350 K", "+0.19 V", "1.000", "+0.190 V", "Left (Fe) → Right (Ni)"],
      ["6", "Cu Concentration Cell", "Cu²⁺ / Cu (Dilute, 0.001 M)", "Cu²⁺ / Cu (Conc, 1.50 M)", "0.001 M", "1.500 M", "298 K", "0.00 V", "0.00067", "+0.094 V", "Dilute Anode → Concentrated Cathode"]
    ],
    criticalQuestions: [
      {
        prompt: "1. Distinguishing Standard (E°cell) vs. Operating (Ecell) Potential",
        subtext: "Why does the standard cell potential E°cell remain exactly +1.10 V across Trials 1, 2, and 3 regardless of concentration changes, while the operating voltage Ecell changes significantly?",
        exemplarAnswer: "By thermodynamic definition, standard potential E°cell is measured strictly under standard-state reference conditions where all ion concentrations are exactly 1.0 M (at 298.15 K, 1 atm). Because standard state explicitly locks concentrations at 1.0 M, E°cell is a thermodynamic constant for a given electrode pair. The actual operating potential Ecell shifts according to the Nernst equation Ecell = E°cell - (RT/nF)ln(Q) as ion concentrations depart from 1.0 M."
      },
      {
        prompt: "2. The Function of the Salt Bridge in Maintaining Electrical Neutrality",
        subtext: "What would happen to the electron flow and cell voltage if the KNO₃ salt bridge were removed from the galvanic cell? Explain the roles of NO₃⁻ anions and K⁺ cations during continuous cell operation.",
        exemplarAnswer: "Without the salt bridge, electron flow stops almost instantly and voltage drops to 0 V because positive charge accumulates in the anode beaker (due to Zn → Zn²⁺ + 2e⁻) and negative charge accumulates in the cathode beaker (as Cu²⁺ + 2e⁻ → Cu). The salt bridge maintains electrical neutrality by delivering NO₃⁻ anions into the anode half-cell to neutralize newly generated cations, while K⁺ cations migrate into the cathode half-cell to replace consumed copper ions."
      },
      {
        prompt: "3. Concentration Cells & Le Chatelier's Principle in Electrochemistry",
        subtext: "Examine Trial 6 where both electrodes are made of copper (E°cell = 0.00 V). How can a battery produce electrical voltage when both half-cells use the exact same chemical couple?",
        exemplarAnswer: "A concentration cell generates potential entirely from the entropy/concentration gradient between dilute (0.001 M) and concentrated (1.50 M) solutions. According to Le Chatelier's principle and the Nernst equation, the spontaneous process drives the dilute side to oxidize (increasing [Cu²⁺]) and the concentrated side to reduce (decreasing [Cu²⁺]) until concentrations equalize at equilibrium (Q = 1, Ecell = 0 V)."
      }
    ],
    realWorldScenario: {
      title: "Lithium-Ion Battery Degradation & Electric Vehicle (EV) Range",
      scenario: "Automotive engineers monitor individual cell voltages across electric vehicle battery packs. As a battery discharges during a long drive, internal reactant concentrations decrease while product concentrations accumulate.",
      task: "Using the Nernst equation, explain why an EV battery pack's output voltage gradually declines during discharge and why cold winter temperatures (T < 273 K) reduce available cell power output.",
      exemplarAnswer: "During discharge, the reaction quotient Q = [products]/[reactants] continuously increases, causing the (RT/nF)ln(Q) subtraction term in the Nernst equation to grow larger and lowering operating voltage Ecell until equilibrium (Ecell = 0 V, dead battery) is reached. In freezing winter weather, low temperatures reduce ionic diffusion rates through the electrolyte and increase internal resistance, causing significant voltage sag under heavy acceleration loads."
    }
  },

  "sim-le-chatelier-haber": {
    drivingQuestion: "How do temperature, pressure (volume), and concentration disturbances shift dynamic chemical equilibrium in the exothermic Haber synthesis of ammonia?",
    hypothesisPrompt: "If the temperature of the reaction vessel is increased from 350 K to 650 K, predict whether the equilibrium constant Kc and equilibrium yield of ammonia (NH₃) will increase, decrease, or remain constant.",
    tableHeaders: ["Trial", "Condition / Disturbance", "Temp (K)", "Volume (L)", "n(N₂) (mol)", "n(H₂) (mol)", "n(NH₃) (mol)", "Kc(T)", "Qc", "Equilibrium Shift Direction"],
    tableRows: [
      ["1", "Initial Baseline Equilibrium", "450 K", "2.5 L", "2.00 mol", "4.00 mol", "2.00 mol", "0.500", "0.500", "At Equilibrium (Q = K)"],
      ["2", "Temperature Increase (Heat Added)", "650 K", "2.5 L", "2.00 mol", "4.00 mol", "2.00 mol", "0.082", "0.500", "Shifts Left (Reverse ← absorbs heat)"],
      ["3", "Compression / Pressure Spike", "450 K", "1.0 L", "2.00 mol", "4.00 mol", "2.00 mol", "0.500", "0.080", "Shifts Right (Forward → fewer gas moles)"],
      ["4", "Reactant Injection (+3.0 mol H₂)", "450 K", "2.5 L", "2.00 mol", "7.00 mol", "2.00 mol", "0.500", "0.093", "Shifts Right (Forward → consumes H₂)"],
      ["5", "Continuous Product Removal (-1.5 mol NH₃)", "450 K", "2.5 L", "2.00 mol", "4.00 mol", "0.50 mol", "0.500", "0.031", "Shifts Right (Forward → replenishes NH₃)"],
      ["6", "Expansion / Depressurization", "450 K", "5.0 L", "2.00 mol", "4.00 mol", "2.00 mol", "0.500", "2.000", "Shifts Left (Reverse ← toward 4 gas moles)"]
    ],
    criticalQuestions: [
      {
        prompt: "1. Reaction Quotient (Qc) vs Equilibrium Constant (Kc)",
        subtext: "Explain mathematically why compressing the container from 2.5 L to 1.0 L causes Qc to drop below Kc, driving the forward synthesis of ammonia.",
        exemplarAnswer: "The expression for Qc is ([NH₃]²)/([N₂][H₂]³) = (n_NH₃² × V²)/(n_N₂ × n_H₂³). Because volume V appears squared in the numerator and cubed in the denominator (net V⁻² dependence), decreasing volume from 2.5 L to 1.0 L reduces the numerical value of Qc by a factor of (1.0/2.5)² = 0.16. Since Qc < Kc, the forward reaction accelerates to consume reactants and produce ammonia until Qc equals Kc."
      },
      {
        prompt: "2. Temperature Effects & The Van 't Hoff Relationship",
        subtext: "Why does increasing temperature decrease the equilibrium constant Kc for the Haber process (ΔH < 0), whereas changing concentration or pressure leaves Kc unchanged?",
        exemplarAnswer: "The synthesis of ammonia is exothermic (ΔH = -92.2 kJ/mol), releasing heat as a product. According to the van 't Hoff equation, the equilibrium constant Kc is purely a thermodynamic function of temperature. Adding thermal energy drives the endothermic reverse reaction to absorb heat, decreasing the ratio of products to reactants at equilibrium and lowering Kc. Concentration and volume changes alter instantaneous Qc but do not change the fundamental thermodynamic constant Kc."
      },
      {
        prompt: "3. Industrial Compromise in Chemical Engineering",
        subtext: "If low temperatures favor higher theoretical equilibrium yields of ammonia, why do commercial Haber-Bosch chemical plants operate at elevated temperatures (~400–450°C / 700 K)?",
        exemplarAnswer: "This represents the fundamental chemical engineering trade-off between thermodynamics and kinetics. While low temperatures maximize equilibrium conversion of reactants into ammonia (thermodynamics), the activation energy barrier for breaking the strong nitrogen triple bond (N≡N) is so high that the reaction rate is prohibitively slow at low temperatures (kinetics). Operating at ~450°C in the presence of an iron-based catalyst allows the reaction to achieve an economically viable reaction rate."
      }
    ],
    realWorldScenario: {
      title: "Global Agricultural Fertilizer Production (Haber-Bosch Process)",
      scenario: "The Haber-Bosch process synthesizes over 150 million metric tons of ammonia annually, providing nitrogen fertilizer that sustains approximately 50% of the world's current food supply.",
      task: "Using Le Châtelier's principle and chemical kinetics, describe how modern industrial ammonia synthesis loops continuously cycle unreacted N₂ and H₂ gases while condensing liquid NH₃ out of the reactor to maximize product yield.",
      exemplarAnswer: "Industrial synthesis reactors operate at high pressures (150–250 atm) to shift the equilibrium toward the smaller volume of product gas (4 moles → 2 moles). As the gas mixture leaves the catalyst bed, it is cooled to liquefy ammonia (boiling point -33°C), which is continuously drained from the loop. By constantly removing NH₃(l), Qc is maintained below Kc, driving continuous forward reaction while recycling unconverted N₂ and H₂ gases back through the reactor loop with minimal waste."
    }
  },

  "sim-vsepr-3d-geometry": {
    drivingQuestion: "How do the number of bonding electron pairs and non-bonding lone pairs determine the 3D molecular geometry, bond angles, and orbital hybridization of chemical compounds?",
    hypothesisPrompt: "If you substitute bonding pairs with non-bonding lone pairs around a central atom with steric number 4 (moving from CH₄ to NH₃ to H₂O), predict what will happen to the bond angles between the bonded atoms. Why do lone pairs exert stronger electrostatic repulsion than bonding pairs?",
    tableHeaders: ["Molecule", "Central Atom", "Steric Number (SN)", "Bonding Pairs", "Lone Pairs", "Electron Geometry", "Molecular Geometry", "Hybridization", "Ideal vs. Actual Bond Angle"],
    tableRows: [
      ["CO₂", "Carbon (C)", "2", "2", "0", "Linear", "Linear", "sp", "180° (Linear)"],
      ["CH₄", "Carbon (C)", "4", "4", "0", "Tetrahedral", "Tetrahedral", "sp³", "109.5° (Ideal Tetrahedral)"],
      ["NH₃", "Nitrogen (N)", "4", "3", "1", "Tetrahedral", "Trigonal Pyramidal", "sp³", "107° (Compressed by 1 lone pair)"],
      ["H₂O", "Oxygen (O)", "4", "2", "2", "Tetrahedral", "Bent", "sp³", "104.5° (Compressed by 2 lone pairs)"],
      ["PCl₅", "Phosphorus (P)", "5", "5", "0", "Trigonal Bipyramidal", "Trigonal Bipyramidal", "sp³d", "90° (Ax-Eq), 120° (Eq-Eq)"],
      ["SF₄", "Sulfur (S)", "5", "4", "1", "Trigonal Bipyramidal", "See-saw", "sp³d", "102°, 173° (Lone pair in equatorial site)"],
      ["XeF₂", "Xenon (Xe)", "5", "2", "3", "Trigonal Bipyramidal", "Linear", "sp³d", "180° (All 3 lone pairs equatorial)"],
      ["SF₆", "Sulfur (S)", "6", "6", "0", "Octahedral", "Octahedral", "sp³d²", "90° (All orthogonal)"],
      ["XeF₄", "Xenon (Xe)", "6", "4", "2", "Octahedral", "Square Planar", "sp³d²", "90° (Lone pairs 180° opposite)"]
    ],
    criticalQuestions: [
      {
        prompt: "1. Electron Domain Geometry vs. Molecular Geometry",
        subtext: "Explain why methane (CH₄), ammonia (NH₃), and water (H₂O) all share the same tetrahedral electron domain geometry, but possess three completely different molecular shapes (tetrahedral, trigonal pyramidal, and bent).",
        exemplarAnswer: "All three molecules have a steric number of 4 (4 electron domains around the central atom), causing electron clouds to adopt a tetrahedral electron geometry to minimize electrostatic repulsion. However, molecular geometry describes ONLY the spatial arrangement of the bonded nuclei. Because lone pairs are invisible in the final molecular skeleton, NH₃ with 1 lone pair is trigonal pyramidal, and H₂O with 2 lone pairs is bent."
      },
      {
        prompt: "2. The Repulsion Hierarchy and Lone Pair Angle Compression",
        subtext: "According to VSEPR theory, why do non-bonding lone pairs exert greater repulsive force than bonding pairs? How does this explain the progressive decrease in bond angles from 109.5° in CH₄ to 107° in NH₃ and 104.5° in H₂O?",
        exemplarAnswer: "Bonding electron pairs are held tightly between two positively charged nuclei, localizing their charge density. In contrast, non-bonding lone pairs are attracted to only one central nucleus, allowing their electron clouds to expand and occupy a larger angular volume. Because Lone Pair-Bonding Pair repulsion is stronger than Bonding Pair-Bonding Pair repulsion, the lone pairs push the bonded hydrogen atoms closer together, compressing the bond angle by ~2.5° per lone pair."
      },
      {
        prompt: "3. Equatorial Site Preference in Trigonal Bipyramidal Systems (SF₄ and XeF₂)",
        subtext: "In a 5-coordinate trigonal bipyramidal system like SF₄ (1 lone pair) or XeF₂ (3 lone pairs), why do lone pairs exclusively occupy equatorial positions (120° apart) rather than axial positions (90° apart)?",
        exemplarAnswer: "Repulsion at 90° is much more severe than repulsion at 120°. An axial lone pair would experience three harsh 90° repulsive interactions with equatorial domains. An equatorial lone pair experiences only two 90° interactions with axial domains and two mild 120° interactions. Placing lone pairs in the equatorial plane minimizes high-energy 90° repulsions, creating a See-saw shape for SF₄ and a symmetrical Linear shape for XeF₂."
      }
    ],
    realWorldScenario: {
      title: "Pharmaceutical Drug Design & Enzyme-Receptor Binding Pocket Docking",
      scenario: "Medicinal chemists design targeted inhibitor drugs (such as HIV protease inhibitors or cancer therapeutics) whose biological activity depends strictly on the 3D molecular geometry and bond angle orientations of pharmacophore functional groups fitting into specific enzyme binding pockets.",
      task: "Explain how VSEPR molecular geometry and lone pairs dictate the 3D shape, dipole moments, and hydrogen-bonding capabilities of pharmaceutical molecules interacting with protein active sites.",
      exemplarAnswer: "The 3D shape determined by VSEPR geometry governs whether a drug molecule can physically dock into a complementary lock-and-key enzyme cavity. Furthermore, non-bonding lone pairs (such as those on carbonyl oxygens or amine nitrogens) serve as directional hydrogen bond acceptors with defined vector angles, while bond polarities dictate overall dipole moments. If a molecule's VSEPR geometry creates steric clashes or misaligns lone pair hydrogen-bonding vectors, the drug will fail to bind to its biological target."
    }
  }
};
