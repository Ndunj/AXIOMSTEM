import { SimulationWorksheetData } from "./types";

export const PHYSICS_WORKSHEETS: Record<string, SimulationWorksheetData> = {
  "sim-quantum-em-spectrum": {
    drivingQuestion: "How do wavelength, frequency, and photon energy change across the different regions of the electromagnetic spectrum?",
    hypothesisPrompt: "If you shorten the wavelength of an electromagnetic wave (for example, going from red light to blue light or ultraviolet), predict what will happen to its frequency and its photon energy.",
    tableHeaders: ["Trial", "EM Spectrum Region", "Wavelength (λ)", "Frequency (Hz)", "Photon Energy (eV)", "Relative Energy Level", "Everyday Use / Example"],
    tableRows: [
      ["1", "Radio Waves", "1.00 m (Long)", "3.00 × 10⁸ Hz", "0.0000012 eV", "Very Low Energy", "AM/FM Radio, Wi-Fi router"],
      ["2", "Microwaves", "1.0 cm", "3.00 × 10¹⁰ Hz", "0.00012 eV", "Low Energy", "Microwave oven, radar"],
      ["3", "Infrared (IR)", "10.0 µm", "3.00 × 10¹³ Hz", "0.12 eV", "Medium-Low (Heat)", "TV remote control, heat lamp"],
      ["4", "Visible Light (Red)", "700 nm", "4.30 × 10¹⁴ Hz", "1.77 eV", "Visible (Medium)", "Red traffic light, laser pointer"],
      ["5", "Visible Light (Violet)", "400 nm", "7.50 × 10¹⁴ Hz", "3.10 eV", "Visible (Higher)", "Violet rainbow color"],
      ["6", "Ultraviolet (UV)", "100 nm", "3.00 × 10¹⁵ Hz", "12.4 eV", "High Energy", "Sunlight causing sunburn / Blacklight"],
      ["7", "X-Rays", "0.1 nm (Very Short)", "3.00 × 10¹⁸ Hz", "12,400 eV", "Very High Energy", "Doctor dental & bone X-ray images"]
    ],
    criticalQuestions: [
      {
        prompt: "1. Wavelength vs. Frequency Relationship",
        subtext: "Look at your data table as you move from Radio waves to X-rays. As wavelength becomes shorter, what happens to the frequency of the wave? Why do shorter waves have higher frequencies?",
        exemplarAnswer: "As wavelength gets shorter, frequency gets higher (inverse relationship). Because all electromagnetic waves travel at the same speed of light (c = 3 × 10⁸ m/s), shorter waves must vibrate more times each second to travel the same distance."
      },
      {
        prompt: "2. Photon Energy & Color Comparison",
        subtext: "Compare Red light (700 nm, 1.77 eV) and Violet light (400 nm, 3.10 eV). Which color of visible light carries more energy per photon? How does this explain why ultraviolet rays cause sunburns while red light does not?",
        exemplarAnswer: "Violet light has shorter wavelength and higher frequency, so it carries more energy per photon than red light. Ultraviolet (UV) light carries even higher energy photons (12.4 eV), which have enough energy to damage skin cells and cause sunburns."
      },
      {
        prompt: "3. Speed of Light Invariance",
        subtext: "Do radio waves travel faster than, slower than, or at the same speed as visible light in empty space (vacuum)? Explain using the speed of light c = 3.00 × 10⁸ m/s.",
        exemplarAnswer: "All electromagnetic waves (from radio waves to visible light to X-rays) travel at the exact same speed in empty space: the speed of light, c = 300,000,000 meters per second."
      }
    ],
    realWorldScenario: {
      title: "Why We Wear Sunscreen and Sunglasses",
      scenario: "On a bright summer day at the beach, people put on SPF 30 sunscreen and wear sunglasses that block UV rays.",
      task: "Based on what you learned about photon energy and wavelength, explain why sunscreen is needed for UV light but not for visible sunlight or radio waves.",
      exemplarAnswer: "Ultraviolet (UV) waves have much shorter wavelengths and higher photon energy than visible light or radio waves. Sunscreen contains molecules that absorb or reflect these high-energy UV photons, preventing them from damaging skin cells."
    }
  },

  "sim-electric-circuit": {
    drivingQuestion: "How do voltage (V), electric current (I), and resistance (R) work together according to Ohm's Law (V = I × R) in simple circuits?",
    hypothesisPrompt: "If you double the voltage of the battery from 6V to 12V while keeping the resistor constant, predict what will happen to the electric current reading on the ammeter.",
    tableHeaders: ["Trial", "Battery Voltage (V)", "Resistor 1 (Ω)", "Resistor 2 (Ω)", "Total Resistance (Ω)", "Measured Current (A)", "Calculated Power (P = V × I)", "Bulb Brightness"],
    tableRows: [
      ["1", "6.0 V", "10.0 Ω", "None", "10.0 Ω", "0.60 A", "3.6 W", "Medium Brightness"],
      ["2", "12.0 V", "10.0 Ω", "None", "10.0 Ω", "1.20 A", "14.4 W", "Very Bright (Current doubled)"],
      ["3", "12.0 V", "20.0 Ω", "None", "20.0 Ω", "0.60 A", "7.2 W", "Medium (More resistance = less current)"],
      ["4", "12.0 V", "10.0 Ω (Series)", "10.0 Ω", "20.0 Ω (Series sum)", "0.60 A", "7.2 W (Split evenly)", "Dim (Shared voltage)"],
      ["5", "12.0 V", "10.0 Ω (Parallel)", "10.0 Ω", "5.0 Ω (Parallel half)", "2.40 A", "28.8 W", "Both Very Bright (Full 12V each)"]
    ],
    criticalQuestions: [
      {
        prompt: "1. Testing Ohm's Law (V = I × R)",
        subtext: "Using Trial 2 (V = 12.0 V, R = 10.0 Ω), calculate current using I = V ÷ R. Does your calculated answer match the 1.20 A reading on the simulation ammeter?",
        exemplarAnswer: "I = V ÷ R = 12.0 V ÷ 10.0 Ω = 1.20 A. Yes, it matches the simulation ammeter reading perfectly."
      },
      {
        prompt: "2. Resistance and Current Flow",
        subtext: "Compare Trial 2 and Trial 3 where voltage is held constant at 12V. What happened to the current when resistance was increased from 10 Ω to 20 Ω? What does an electrical resistor do to the flow of electrons?",
        exemplarAnswer: "When resistance doubled from 10 Ω to 20 Ω, the current was cut in half from 1.20 A to 0.60 A. A resistor opposes and slows down the flow of electric charges (electrons) in the wire."
      },
      {
        prompt: "3. Series vs. Parallel Circuits",
        subtext: "In Trial 4 (Series), total resistance was 20 Ω. In Trial 5 (Parallel), total resistance dropped to 5 Ω. Why does adding a second path in parallel make it easier for current to flow?",
        exemplarAnswer: "In parallel, adding another branch creates an extra pathway for electric charges to travel, just like opening a second lane on a highway, which reduces the total resistance and allows more total current to flow from the battery."
      }
    ],
    realWorldScenario: {
      title: "Flashlight Batteries & Light Dimmer Switches",
      scenario: "A handheld flashlight uses a sliding dimmer switch (variable resistor) to adjust how bright the beam shines.",
      task: "Explain how turning the dial to add more resistance makes the flashlight bulb dimmer.",
      exemplarAnswer: "Increasing resistance reduces the electric current flowing through the light bulb filament (I = V ÷ R). With less current, the power dissipated by the bulb decreases (P = V × I), making the bulb shine dimmer."
    }
  },

  "sim-interactive-electric-circuits": {
    drivingQuestion: "What is the difference between connecting light bulbs in series versus in parallel?",
    hypothesisPrompt: "If you have two identical light bulbs connected in series and one bulb is unscrewed, predict what will happen to the other bulb. What happens if the bulbs are wired in parallel instead?",
    tableHeaders: ["Trial", "Circuit Layout", "Battery Voltage", "Total Current Drawn", "Voltage Across Each Bulb", "Bulb 1 State", "Bulb 2 State", "If Bulb 1 is Removed"],
    tableRows: [
      ["1", "Single Bulb", "12.0 V", "1.00 A", "12.0 V", "Bright (Full power)", "None", "Circuit turns off"],
      ["2", "Series (2 Bulbs)", "12.0 V", "0.50 A", "6.0 V each (Shared)", "Dim (Half voltage)", "Dim (Half voltage)", "Both turn OFF (Broken loop)"],
      ["3", "Parallel (2 Bulbs)", "12.0 V", "2.00 A", "12.0 V each (Full)", "Bright (Full 12V)", "Bright (Full 12V)", "Bulb 2 stays ON and BRIGHT"],
      ["4", "Parallel (3 Bulbs)", "12.0 V", "3.00 A", "12.0 V each (Full)", "Bright", "Bright", "Other 2 stay ON"],
      ["5", "Short Circuit (No resistor)", "12.0 V", "Huge Surge (> 20 A)", "0.0 V across load", "Dangerous current flow", "Fuse blows / Breaker trips", "Protective safety shutdown"]
    ],
    criticalQuestions: [
      {
        prompt: "1. Why Are Parallel Bulbs Brighter Than Series Bulbs?",
        subtext: "In Trial 2 (Series), each bulb only gets 6V of the 12V battery. In Trial 3 (Parallel), each bulb gets the full 12V. Explain why parallel bulbs shine much brighter.",
        exemplarAnswer: "In series, the bulbs must share the battery voltage (12V ÷ 2 = 6V each), so each bulb gets less energy. In parallel, each bulb is connected directly across the full 12V battery, receiving maximum voltage and current to shine brightly."
      },
      {
        prompt: "2. Independent Operation in Parallel",
        subtext: "If you remove Bulb 1 in a parallel circuit, why does Bulb 2 stay lit? Why are the lights and appliances in your house wired in parallel rather than series?",
        exemplarAnswer: "In parallel, each bulb has its own independent closed loop connected to the power source. Household lights are wired in parallel so that turning off a lamp in one room doesn't shut off the lights, refrigerator, and TV in the rest of the house."
      },
      {
        prompt: "3. What is a Short Circuit and Why is it Dangerous?",
        subtext: "Look at Trial 5 where a wire bypasses the bulbs. Why did the current surge to dangerous levels? What safety device protects homes from short circuits?",
        exemplarAnswer: "A short circuit creates a path of near-zero resistance, causing huge currents to surge through the wires (I = V ÷ R). This creates extreme heat and can cause fires. Circuit breakers and fuses protect homes by automatically cutting power when current gets too high."
      }
    ],
    realWorldScenario: {
      title: "Holiday String Lights: Old vs. Modern Design",
      scenario: "On older holiday tree light strings, if a single tiny bulb burned out, the entire string went dark. On modern holiday lights, all the other bulbs stay lit.",
      task: "Identify which wiring style (series or parallel) was used in the old holiday lights and which is used in modern lights, explaining why.",
      exemplarAnswer: "Old light strings were wired in series, so a burned-out bulb broke the single circuit loop and turned off every light. Modern light strings use parallel wiring (or parallel branches with shunt bulbs) so current can continue flowing through the rest of the string."
    }
  },

  "sim-motion-projectile": {
    drivingQuestion: "How do launch speed, launch angle, and gravity determine how high, how far, and how long a projectile flies through the air?",
    hypothesisPrompt: "If you launch a ball at the same speed (20 m/s), predict which angle (30°, 45°, 60°, or 90°) will make it travel the furthest horizontal distance before hitting the ground.",
    tableHeaders: ["Trial", "Launch Angle", "Launch Speed (v₀)", "Flight Time (seconds)", "Maximum Height (m)", "Total Horizontal Distance (m)", "Trajectory Shape"],
    tableRows: [
      ["1", "15.0° (Low angle)", "20.0 m/s", "1.06 s", "1.38 m (Very low)", "20.4 m", "Flat shallow curve"],
      ["2", "30.0°", "20.0 m/s", "2.04 s", "5.10 m", "35.3 m", "Smooth arc"],
      ["3", "45.0° (Optimal)", "20.0 m/s", "2.89 s", "10.20 m", "40.8 m (Maximum Range)", "Balanced high arc"],
      ["4", "60.0°", "20.0 m/s", "3.53 s", "15.30 m", "35.3 m (Same as 30°!)", "Tall steep arc"],
      ["5", "75.0°", "20.0 m/s", "3.94 s", "19.02 m", "20.4 m (Same as 15°!)", "Very tall narrow arc"],
      ["6", "90.0° (Straight Up)", "20.0 m/s", "4.08 s", "20.41 m (Highest point)", "0.0 m (Lands on launcher)", "Straight up and down"]
    ],
    criticalQuestions: [
      {
        prompt: "1. The 45° Maximum Distance Rule",
        subtext: "Look at the horizontal distance column in your table. Which launch angle achieved the greatest total distance? Why is 45° the best compromise between forward speed and time in the air?",
        exemplarAnswer: "45° gives the maximum horizontal distance (40.8 m). Low angles have high forward speed but hit the ground too quickly, while high angles stay in the air a long time but have very little forward speed. 45° provides the perfect balance of both."
      },
      {
        prompt: "2. Complementary Angles Pattern",
        subtext: "Notice that 30° and 60° (which add up to 90°) both traveled 35.3 m. Also 15° and 75° (which add to 90°) both traveled 20.4 m. What rule can you state about any two launch angles that add up to 90°?",
        exemplarAnswer: "Any two complementary angles (angles that add up to 90°, like 30° and 60°, or 20° and 70°) will land at the exact same horizontal distance, though the higher angle flies higher and stays in the air longer."
      },
      {
        prompt: "3. What Gravity Does to the Ball",
        subtext: "Throughout the ball's flight, what is happening to its horizontal speed versus its vertical speed? (Hint: Does gravity pull sideways or straight down?)",
        exemplarAnswer: "Gravity only pulls straight downward (at 9.8 m/s²), slowing the ball down as it rises and speeding it up as it falls. Gravity does not pull sideways, so horizontal velocity stays constant throughout the flight (ignoring air resistance)."
      }
    ],
    realWorldScenario: {
      title: "Kicking a Soccer Ball or Shooting a Basketball",
      scenario: "A soccer player is taking a free kick to pass the ball across the field to an open teammate 40 meters away.",
      task: "Based on your virtual lab, what angle should the soccer player kick the ball to get the maximum distance across the field?",
      exemplarAnswer: "The soccer player should aim for a launch angle close to 45° (or slightly lower around 35°-40° to account for air resistance) to get the farthest kick across the field with maximum distance."
    }
  },

  "sim-archimedes-buoyancy": {
    drivingQuestion: "Why do some objects float while others sink in liquids, and how does the buoyant force equal the weight of displaced water?",
    hypothesisPrompt: "If you place a block of wood (density = 650 kg/m³) into water (density = 1000 kg/m³), predict whether it will float or sink, and estimate what percentage of the block will sit below the water surface.",
    tableHeaders: ["Trial", "Object Material", "Object Density (kg/m³)", "Liquid Type", "Liquid Density (kg/m³)", "Percentage Submerged", "Buoyant Force (N)", "Floats or Sinks?"],
    tableRows: [
      ["1", "Wood Block", "650 kg/m³", "Freshwater", "1,000 kg/m³", "65.0 % submerged", "6.37 N", "Floats (Positive Buoyancy)"],
      ["2", "Wood Block", "650 kg/m³", "Saltwater (Denser)", "1,200 kg/m³", "54.2 % submerged", "6.37 N", "Floats higher in denser water"],
      ["3", "Plastic Cylinder", "1,000 kg/m³", "Freshwater", "1,000 kg/m³", "100.0 % submerged", "9.81 N", "Neutral Buoyancy (Hovers underwater)"],
      ["4", "Solid Aluminum Cube", "2,700 kg/m³", "Freshwater", "1,000 kg/m³", "100.0 % (Bottom)", "9.81 N (Weight = 26.5 N)", "Sinks (Object is denser than water)"],
      ["5", "Hollow Aluminum Boat", "450 kg/m³ (Average)", "Freshwater", "1,000 kg/m³", "45.0 % submerged", "26.5 N", "Floats (Hollow shape reduces average density)"]
    ],
    criticalQuestions: [
      {
        prompt: "1. The Density Rule for Floating and Sinking",
        subtext: "Compare the object's density to the liquid's density in Trials 1, 3, and 4. What simple rule determines whether an object will float, sink, or hover neutrally in a fluid?",
        exemplarAnswer: "If the object's density is less than the liquid's density, it floats. If its density is greater than the liquid's density, it sinks. If both densities are equal, it hovers neutrally at any depth."
      },
      {
        prompt: "2. Archimedes' Principle Explained",
        subtext: "Archimedes' Principle states that the upward buoyant force on an object equals the weight of the fluid displaced by the object. When you lower an object into a full beaker of water, what does the overflow water tell you?",
        exemplarAnswer: "The weight of the overflowing displaced water equals the upward buoyant force pushing up on the object."
      },
      {
        prompt: "3. Why Do Steel Ships Float?",
        subtext: "Solid steel has a density of 7,800 kg/m³ (much heavier than water), yet giant cargo ships made of steel float easily. Look at Trial 5 to explain how shape makes a difference.",
        exemplarAnswer: "A ship is shaped like a hollow bowl containing huge volumes of empty air. The combined average density of the steel hull plus all the air inside is much less than the density of water, creating enough buoyant force to float."
      }
    ],
    realWorldScenario: {
      title: "Life Jackets and Swimming in the Ocean",
      scenario: "Swimmers notice that it is much easier to float in the salty ocean (density ≈ 1,025 kg/m³) or the Great Salt Lake than in a freshwater swimming pool.",
      task: "Explain why salty water makes you float higher, and how wearing a foam life jacket keeps you safely on top of the water.",
      exemplarAnswer: "Saltwater is denser than freshwater, so displacing a smaller volume of it produces enough upward buoyant force to balance your body weight, making you float higher. A foam life jacket adds very low density volume, lowering your overall average density so you float effortlessly."
    }
  },

  "sim-refraction-refractive-index": {
    drivingQuestion: "Why does light bend (refract) when passing between air, water, and glass, and how do lenses focus light?",
    hypothesisPrompt: "When a beam of light passes from air (low density, fast speed) into glass or water (high density, slower speed), predict whether the light ray will bend toward the normal line (90° perpendicular) or away from it.",
    tableHeaders: ["Trial", "Starting Material (Medium 1)", "Entering Material (Medium 2)", "Angle of Incidence (θ₁)", "Angle of Refraction (θ₂)", "Speed of Light in Material", "What the Ray Does"],
    tableRows: [
      ["1", "Air (n = 1.00)", "Water (n = 1.33)", "30.0°", "22.1°", "2.25 × 10⁸ m/s", "Bends toward the normal"],
      ["2", "Air (n = 1.00)", "Glass (n = 1.50)", "30.0°", "19.5°", "2.00 × 10⁸ m/s", "Bends even more toward normal"],
      ["3", "Air (n = 1.00)", "Diamond (n = 2.42)", "30.0°", "11.9°", "1.24 × 10⁸ m/s", "Bends sharply (High refractive index)"],
      ["4", "Glass (n = 1.50)", "Air (n = 1.00)", "30.0°", "48.6°", "3.00 × 10⁸ m/s", "Bends away from normal (Speeds up)"],
      ["5", "Glass (n = 1.50)", "Air (n = 1.00)", "45.0° (Steep angle)", "No light escapes", "Reflected internally", "Total Internal Reflection (TIR)"]
    ],
    criticalQuestions: [
      {
        prompt: "1. Why Does Light Bend? (Speed of Light Change)",
        subtext: "Look at the speed of light column in your table. What happens to the speed of light when it goes from air into glass? Why does this speed change cause the ray to bend at an angle?",
        exemplarAnswer: "Light slows down when entering glass (from 3.0 × 10⁸ m/s to 2.0 × 10⁸ m/s). When entering at an angle, one side of the light wave slows down before the other side, pivoting the direction of the wave toward the normal line (just like a car wheel hitting mud)."
      },
      {
        prompt: "2. Comparing Water, Glass, and Diamond",
        subtext: "Which material has the highest refractive index (n) and slows light down the most? Compare the bending angle of water (22.1°), glass (19.5°), and diamond (11.9°) for an incoming 30° beam.",
        exemplarAnswer: "Diamond has the highest refractive index (n = 2.42) and slowest light speed (1.24 × 10⁸ m/s). It bends the light ray the most (down to 11.9°), which is why diamonds sparkle with intense brilliance."
      },
      {
        prompt: "3. Total Internal Reflection (TIR)",
        subtext: "In Trial 5, light inside glass tried to exit into air at a steep angle of 45°, but instead bounced back inside like a perfect mirror. What is this phenomenon called, and how does it keep light inside fiber-optic cables?",
        exemplarAnswer: "This is called Total Internal Reflection (TIR). When light traveling in a denser medium hits the boundary at an angle greater than the critical angle, 100% of the light reflects back inside, allowing fiber-optic internet cables to carry light signals over long distances without leaking."
      }
    ],
    realWorldScenario: {
      title: "Looking at a Straw in a Glass of Water & Eyeglasses",
      scenario: "When you place a straight drinking straw into a clear glass of water, the straw appears bent or broken at the water's surface.",
      task: "Explain why the straw looks disconnected using refraction of light.",
      exemplarAnswer: "Light rays coming from the submerged part of the straw bend (refract) as they leave the water into the air before reaching your eyes. Your brain assumes light travels in a straight line, making the underwater part of the straw look shifted or bent."
    }
  },

  "sim-simple-harmonic-motion": {
    drivingQuestion: "What factors (pendulum length, mass, gravity, or pull-back angle) determine how fast a pendulum or spring swings back and forth?",
    hypothesisPrompt: "If you double the mass of a swinging pendulum bob (for example, from 100 grams to 200 grams) without changing the string length, predict what will happen to the time it takes for one full swing (the period T).",
    tableHeaders: ["Trial", "Oscillator Type", "String Length (L) / Spring (k)", "Bob Mass (m)", "Swing Angle / Stretch", "Time for 1 Full Swing (Period T)", "Observation / Rule"],
    tableRows: [
      ["1", "Simple Pendulum", "Length L = 0.50 m", "Mass = 100 g", "Small angle (10°)", "Period T = 1.42 seconds", "Baseline swing time"],
      ["2", "Simple Pendulum", "Length L = 1.00 m (Longer)", "Mass = 100 g", "Small angle (10°)", "Period T = 2.01 seconds", "Longer string = Slower swing"],
      ["3", "Simple Pendulum", "Length L = 1.00 m", "Mass = 300 g (3× heavier)", "Small angle (10°)", "Period T = 2.01 seconds", "Mass has NO effect on pendulum period!"],
      ["4", "Simple Pendulum", "Length L = 1.00 m", "Mass = 100 g", "Bigger pull (20°)", "Period T = 2.02 seconds", "Angle has almost no effect (for small swings)"],
      ["5", "Mass on a Spring", "Spring stiffness k = 20 N/m", "Mass = 100 g", "Pull = 10 cm", "Period T = 0.44 seconds", "Spring bounces rapidly"],
      ["6", "Mass on a Spring", "Spring stiffness k = 20 N/m", "Mass = 400 g (4× mass)", "Pull = 10 cm", "Period T = 0.89 seconds (Doubled!)", "Heavier mass makes a spring slower"]
    ],
    criticalQuestions: [
      {
        prompt: "1. Does Mass Affect a Pendulum's Period?",
        subtext: "Look closely at Trial 2 and Trial 3 in your table. When the mass of the pendulum was tripled from 100 g to 300 g, what happened to the period? Why does a heavier pendulum swing at the exact same rate?",
        exemplarAnswer: "The period did not change at all (remained 2.01 s). Although gravity pulls with more force on a heavier mass, the heavier mass also has more inertia (resistance to acceleration) in exact proportion, so mass cancels out."
      },
      {
        prompt: "2. How Does String Length Change the Swing?",
        subtext: "Compare Trial 1 (0.50 m string, T = 1.42 s) with Trial 2 (1.00 m string, T = 2.01 s). What must you do to a pendulum string to make the clock swing slower or faster?",
        exemplarAnswer: "Making the string longer increases the period, making the pendulum swing slower. Making the string shorter decreases the period, making the pendulum swing faster."
      },
      {
        prompt: "3. Kinetic Energy vs. Potential Energy in a Swing",
        subtext: "During one complete swing of a pendulum, where is its Gravitational Potential Energy at its maximum? Where is its Kinetic Energy (speed) at its maximum?",
        exemplarAnswer: "Potential energy is at its maximum at the highest points of the swing (the two ends where it momentarily stops). Kinetic energy (speed) is at its maximum at the very bottom of the swing (the equilibrium point)."
      }
    ],
    realWorldScenario: {
      title: "Playground Swings & Grandfather Clocks",
      scenario: "Two friends, one weighing 40 kg and one weighing 80 kg, are sitting on identical side-by-side playground swings.",
      task: "If they both pull back to the same height and let go at the same time, explain why they will swing back and forth together in sync regardless of their weights.",
      exemplarAnswer: "The period of a pendulum depends only on the length of the swing chains and gravity (T = 2π√(L/g)). Because swing length is identical, both friends will swing at the exact same frequency regardless of their body weights."
    }
  },

  "sim-communication-satellite-orbit": {
    drivingQuestion: "How do gravity and speed keep satellites orbiting Earth, and why do higher satellites take longer to complete an orbit?",
    hypothesisPrompt: "If a satellite is moved to a higher orbit further away from Earth, predict what will happen to its speed and the time it takes to complete one full orbit (the orbital period).",
    tableHeaders: ["Trial", "Orbit Name", "Altitude Above Earth", "Speed (km/h)", "Time for 1 Orbit (Period)", "Earth Gravity Felt", "Everyday Function / Satellite"],
    tableRows: [
      ["1", "Low Earth Orbit (LEO)", "400 km (Close)", "27,600 km/h (Very fast)", "92 minutes (1.5 hours)", "8.7 m/s² (89% of surface)", "International Space Station (ISS)"],
      ["2", "Internet Satellite Orbit", "550 km", "27,300 km/h", "96 minutes", "8.3 m/s²", "Starlink Internet constellation"],
      ["3", "Medium Earth Orbit (MEO)", "20,200 km", "13,900 km/h", "12 hours", "0.56 m/s²", "GPS Navigation Satellites"],
      ["4", "Geostationary Orbit (GEO)", "35,786 km (High)", "11,050 km/h", "24 hours (Matches Earth!)", "0.22 m/s²", "Satellite TV & Weather Radar"],
      ["5", "The Moon's Orbit", "384,400 km (Far)", "3,670 km/h", "27.3 days", "0.0026 m/s²", "Earth's natural moon"]
    ],
    criticalQuestions: [
      {
        prompt: "1. Why Do Satellites Stay in Orbit Without Falling?",
        subtext: "A satellite in Low Earth Orbit travels sideways at 27,600 km/h. Explain why gravity doesn't pull it straight down to crash into Earth.",
        exemplarAnswer: "The satellite is in continuous free fall toward Earth, but its forward speed is so fast that as it falls, the curved surface of the Earth curves away beneath it at the exact same rate. It constantly falls around the Earth in a circle."
      },
      {
        prompt: "2. Why Do Higher Orbits Move Slower?",
        subtext: "Look at the speed column as altitude increases from 400 km (27,600 km/h) to 35,786 km (11,050 km/h). Why does a higher satellite travel at a slower speed?",
        exemplarAnswer: "Gravity becomes weaker the further you move away from Earth's center. Because Earth's gravitational pull is weaker at high altitudes, the satellite requires less centripetal speed to stay in a stable circular orbit."
      },
      {
        prompt: "3. What is a Geostationary Orbit?",
        subtext: "In Trial 4, the satellite takes exactly 24 hours to complete one orbit. Since the Earth also spins once every 24 hours, what does this satellite look like to an observer standing on the ground?",
        exemplarAnswer: "Because the satellite orbits at the exact same rate Earth rotates, it stays permanently fixed above the same spot on Earth's equator. This is why satellite TV dishes on house roofs can stay pointed in one fixed direction."
      }
    ],
    realWorldScenario: {
      title: "How GPS on Smartphones Knows Where You Are",
      scenario: "A fleet of 24 GPS satellites orbit Earth at an altitude of 20,200 km, each circling the Earth twice every day.",
      task: "Explain why having satellites in medium orbit (12-hour period) allows your phone's map app to see multiple satellites in the sky at any time of day.",
      exemplarAnswer: "By orbiting at 20,200 km with a 12-hour period, the constellation of GPS satellites covers the entire globe so that at least 4 satellites are visible in the sky above you at any moment, allowing your phone to triangulate your exact location."
    }
  },

  "sim-atomic-electron-excitation": {
    drivingQuestion: "How do electrons jumping between energy levels in an atom absorb and emit light of specific colors?",
    hypothesisPrompt: "When an electron in an excited atom falls from a higher energy level (like n = 3) down to a lower energy level (like n = 2), predict whether the atom will absorb a photon of light or emit a flash of light.",
    tableHeaders: ["Trial", "Electron Jump (Transition)", "Starting Level", "Ending Level", "Energy Released (eV)", "Color of Emitted Light", "Wavelength (nm)"],
    tableRows: [
      ["1", "Lyman Alpha", "Level n = 2", "Level n = 1 (Ground)", "10.20 eV (Large jump)", "Ultraviolet (Invisible to human eyes)", "121.6 nm"],
      ["2", "Balmer Alpha (Red line)", "Level n = 3", "Level n = 2", "1.89 eV", "Glowing Bright Red", "656.3 nm"],
      ["3", "Balmer Beta (Cyan line)", "Level n = 4", "Level n = 2", "2.55 eV", "Glowing Cyan / Blue-Green", "486.1 nm"],
      ["4", "Balmer Gamma (Violet line)", "Level n = 5", "Level n = 2", "2.86 eV", "Glowing Deep Violet", "434.0 nm"],
      ["5", "Paschen Alpha", "Level n = 4", "Level n = 3", "0.66 eV (Small jump)", "Infrared (Invisible Heat)", "1,875 nm"],
      ["6", "Absorption Jump", "Level n = 2", "Level n = 3", "1.89 eV absorbed", "Absorbs Red photon (Dark line)", "656.3 nm absorbed"]
    ],
    criticalQuestions: [
      {
        prompt: "1. Electron Jumping and Light Emission",
        subtext: "What happens inside an atom when an electron drops from a high energy orbit to a lower energy orbit? What determines the exact color (wavelength) of the light emitted?",
        exemplarAnswer: "When an electron drops to a lower energy level, it releases the excess energy as a photon (packet of light). The energy difference between the two levels (ΔE) determines the exact color and wavelength of the emitted photon (E = hc/λ)."
      },
      {
        prompt: "2. Comparing Red Light vs. Violet Light Jumps",
        subtext: "Look at Trial 2 (n=3 to n=2, Red, 1.89 eV) and Trial 4 (n=5 to n=2, Violet, 2.86 eV). Which electron jump involves a larger energy difference? Why does the bigger jump produce a violet photon?",
        exemplarAnswer: "The jump from n=5 to n=2 releases more energy (2.86 eV). Higher energy photons have higher frequencies and shorter wavelengths, which corresponds to the violet end of the visible rainbow."
      },
      {
        prompt: "3. Atomic Line Spectra as 'Chemical Fingerprints'",
        subtext: "Why does each chemical element (like Hydrogen, Neon, or Sodium) produce its own unique set of colored spectral lines rather than a continuous white rainbow?",
        exemplarAnswer: "Each chemical element has a unique number of protons and a unique set of electron energy levels. Because the energy gaps are specific to that element, the emitted photons create a unique 'color barcode' or fingerprint."
      }
    ],
    realWorldScenario: {
      title: "Neon Signs and Colorful Fireworks",
      scenario: "Nighttime neon signs glow with bright orange-red light, while 4th of July fireworks burst with vivid green, red, and blue colors in the sky.",
      task: "Explain how electricity or heat energizes electrons in atoms to create the glowing colors of neon signs and fireworks.",
      exemplarAnswer: "Electricity in a neon tube (or heat in fireworks) knocks electrons into higher energy levels. When these electrons fall back down to lower levels, they release their energy as photons of specific colors (e.g. neon gas glows red-orange, strontium glows red, and copper glows blue)."
    }
  },

  "sim-cro-oscilloscope": {
    drivingQuestion: "How does an oscilloscope show electrical waves and allow us to measure voltage, wave height (amplitude), and frequency?",
    hypothesisPrompt: "If you adjust the Volts/Div knob on an oscilloscope from 1 V/div to 5 V/div, predict what will happen to the height of the wave displayed on the screen grid.",
    tableHeaders: ["Trial", "Input Wave Type", "Volts/Div Knob Setting", "Vertical Grid Height (Div)", "Peak Voltage (V)", "Time/Div Knob Setting", "Horizontal Width for 1 Cycle", "Calculated Frequency (Hz)"],
    tableRows: [
      ["1", "Wall Outlet AC Wave", "5.0 V/div", "6.8 divisions", "34.0 V peak-to-peak", "5.0 ms/div", "4.0 divisions", "50 Hz (Standard AC)"],
      ["2", "Music Audio Sine Tone", "1.0 V/div", "4.0 divisions", "4.0 V peak-to-peak", "0.5 ms/div", "2.0 divisions", "1,000 Hz (1 kHz tone)"],
      ["3", "Computer Clock Pulse", "2.0 V/div", "2.5 divisions", "5.0 V (Digital on/off)", "0.1 ms/div", "1.0 division", "10,000 Hz (10 kHz)"],
      ["4", "Low Bass Note", "1.0 V/div", "6.0 divisions", "6.0 V peak-to-peak", "5.0 ms/div", "2.0 divisions", "100 Hz (Bass hum)"],
      ["5", "ECG Heartbeat Signal", "0.5 V/div", "3.0 divisions (Spike)", "1.5 V peak", "200 ms/div", "4.0 divisions", "75 Beats per Minute"]
    ],
    criticalQuestions: [
      {
        prompt: "1. Measuring Voltage Using the Vertical Grid",
        subtext: "In Trial 2, the wave is 4.0 grid divisions tall, and the Volts/Div dial is set to 1.0 V/div. Explain how you calculate the peak-to-peak voltage (Height × Volts/Div).",
        exemplarAnswer: "Peak-to-peak voltage = (Vertical divisions) × (Volts/Div setting) = 4.0 divisions × 1.0 V/div = 4.0 Volts."
      },
      {
        prompt: "2. Measuring Wave Period and Frequency",
        subtext: "In Trial 2, one full wave cycle takes 2.0 horizontal divisions on a timebase setting of 0.5 ms/div (0.0005 s/div). Calculate the period T = (2.0 × 0.0005 s) and the frequency f = 1 ÷ T.",
        exemplarAnswer: "Period T = 2.0 div × 0.5 ms/div = 1.0 ms = 0.001 seconds. Frequency f = 1 ÷ 0.001 s = 1,000 Hz."
      },
      {
        prompt: "3. What Happens When You Change the Knobs?",
        subtext: "If you turn the Time/Div knob to zoom in horizontally, does the real electrical signal change its actual frequency, or are you just changing how it is displayed on the screen?",
        exemplarAnswer: "Changing the oscilloscope knobs does not change the actual electrical signal; it only changes the magnification (zoom) on the screen so you can see the waveform clearly."
      }
    ],
    realWorldScenario: {
      title: "Hospital Heart Monitors & Guitar Tuners",
      scenario: "In a hospital emergency room, a patient's heart monitor (ECG) displays a rhythmic wave with a sharp peak every 0.8 seconds.",
      task: "Calculate the patient's heart rate in beats per minute (BPM) from the wave period.",
      exemplarAnswer: "Heart rate = 60 seconds ÷ 0.8 seconds per beat = 75 beats per minute (BPM)."
    }
  },

  "sim-plane-mirror-image": {
    drivingQuestion: "How do flat (plane) mirrors form virtual images that are upright, the same size, and the same distance behind the mirror?",
    hypothesisPrompt: "If you stand 1.5 meters in front of a flat bathroom mirror, predict how far behind the mirror your reflection will appear to be, and determine whether your image is right-side up or upside down.",
    tableHeaders: ["Trial", "Object in Front of Mirror", "Distance in Front (d_o)", "Distance of Image Behind Mirror (d_i)", "Total Distance (You to Image)", "Image Size / Height", "Left-Right Inversion (Lateral)"],
    tableRows: [
      ["1", "Student Standing", "1.0 m in front", "1.0 m behind mirror", "2.0 m total", "Same size (1.0× magnification)", "Left and Right reversed"],
      ["2", "Student Steps Back", "2.5 m in front", "2.5 m behind mirror", "5.0 m total", "Same size (1.0× magnification)", "Left and Right reversed"],
      ["3", "Printed Letter 'F'", "0.5 m in front", "0.5 m behind mirror", "1.0 m total", "Same height as card", "Flipped horizontally ('Ⅎ')"],
      ["4", "Printed Word 'AMBULANCE'", "1.0 m in front", "1.0 m behind mirror", "2.0 m total", "Same size", "Reversed text"],
      ["5", "Periscope (Two 45° Mirrors)", "Looking over a wall", "Rays bent twice", "Line of sight redirected", "Upright image", "Double reflection (Un-reversed!)"]
    ],
    criticalQuestions: [
      {
        prompt: "1. The Law of Reflection",
        subtext: "State the Law of Reflection. If a ray of light hits a flat mirror at an angle of incidence of 35° to the normal line, at what angle of reflection will it bounce off?",
        exemplarAnswer: "The Law of Reflection states that the angle of incidence equals the angle of reflection (θ_i = θ_r). The light ray will bounce off at an angle of exactly 35°."
      },
      {
        prompt: "2. Object Distance vs. Image Distance",
        subtext: "Look at Trials 1 and 2. What is the relationship between how far you stand in front of the mirror (d_o) and how far your image appears behind the mirror (d_i)?",
        exemplarAnswer: "The distance of the image behind the mirror is always exactly equal to the distance of the object in front of the mirror (d_i = d_o)."
      },
      {
        prompt: "3. What is a Virtual Image?",
        subtext: "Why is an image in a plane mirror called a 'virtual image'? If you hold a sheet of paper behind the mirror where the image looks like it is, will an image show up on the paper?",
        exemplarAnswer: "It is called a virtual image because light rays do not actually meet behind the glass; they only appear to come from behind the mirror when extended by our eyes. A virtual image cannot be projected onto a physical sheet of paper."
      }
    ],
    realWorldScenario: {
      title: "Why 'AMBULANCE' is Printed Backwards on Emergency Vehicles",
      scenario: "Emergency response vehicles have the word 'AMBULANCE' printed backwards ('ƎƆИA⅃UBMA') on their front hoods.",
      task: "Explain how plane mirror lateral inversion allows drivers ahead to read the word correctly in their rearview mirrors.",
      exemplarAnswer: "When a driver looks in their flat rearview mirror, the plane mirror laterally inverts (flips left-to-right) the backwards lettering on the ambulance hood, making the word appear normal and easily readable ('AMBULANCE') so drivers can safely pull over."
    }
  },

  "sim-lunar-phases-orbit": {
    drivingQuestion: "Why does the Moon appear to change its shape (phases) over the course of a 29.5-day month as it orbits Earth?",
    hypothesisPrompt: "At any given moment, what fraction of the Moon's spherical surface is illuminated by sunlight? Why do people on Earth see different shapes (like crescents and full moons)?",
    tableHeaders: ["Phase Name", "Moon Position in Orbit", "Sun-Earth-Moon Alignment Angle", "Illuminated Fraction Seen from Earth", "Moonrise Time", "Moonset Time", "Ocean Tide Type"],
    tableRows: [
      ["New Moon", "Between Sun and Earth", "0° (In line with Sun)", "0.0 % (Dark disk facing Earth)", "06:00 AM (Sunrise)", "06:00 PM (Sunset)", "Spring Tide (Higher high tides)"],
      ["Waxing Crescent", "Moving East of Sun", "45° angle", "25.0 % (Silver crescent on right)", "09:00 AM", "09:00 PM", "Moderate Tide"],
      ["First Quarter (Half Moon)", "Quarter way around orbit", "90° (Right angle to Sun)", "50.0 % (Right half lit)", "12:00 PM (Noon)", "12:00 AM (Midnight)", "Neap Tide (Lower tide range)"],
      ["Waxing Gibbous", "More than half lit", "135° angle", "75.0 % (Bulging disk)", "03:00 PM", "03:00 AM", "Moderate Tide"],
      ["Full Moon", "Opposite the Sun", "180° (Earth between Sun & Moon)", "100.0 % (Fully illuminated disk)", "06:00 PM (Sunset)", "06:00 AM (Sunrise)", "Spring Tide (Highest tidal range)"],
      ["Third Quarter (Last Quarter)", "Three-quarters around orbit", "270° angle", "50.0 % (Left half lit)", "12:00 AM (Midnight)", "12:00 PM (Noon)", "Neap Tide (Lower tide range)"]
    ],
    criticalQuestions: [
      {
        prompt: "1. Half the Moon is Always Lit",
        subtext: "Explain why exactly 50% (half) of the Moon is always lit by sunlight at all times, just like the daytime half of Earth. Why don't we always see a full moon?",
        exemplarAnswer: "The Sun continuously shines on half of the Moon's spherical surface. As the Moon orbits Earth, we see different portions of its sunlit half, creating the changing phases from our viewpoint on Earth."
      },
      {
        prompt: "2. Waxing vs. Waning",
        subtext: "What is the difference between 'Waxing' and 'Waning'? In the Northern Hemisphere, which side of the Moon is illuminated during Waxing phases (growing bigger)?",
        exemplarAnswer: "'Waxing' means the visible illuminated part is growing larger each night (lit on the right side in the Northern Hemisphere). 'Waning' means the visible illuminated part is shrinking smaller (lit on the left side)."
      },
      {
        prompt: "3. Moon Phases and Ocean Tides",
        subtext: "Look at the table during New Moon and Full Moon. Why do we get stronger 'Spring Tides' (extra high high-tides) when the Sun, Earth, and Moon are aligned in a straight line?",
        exemplarAnswer: "During New Moon and Full Moon, the gravitational pulls of both the Moon and the Sun pull along the same straight line, combining their forces to create maximum ocean tidal bulges."
      }
    ],
    realWorldScenario: {
      title: "Planning a Stargazing Night",
      scenario: "An astronomy club wants to organize a telescope stargazing night to look at faint deep-space galaxies and shooting stars.",
      task: "Which moon phase (Full Moon or New Moon) should the club choose for the darkest sky, and why?",
      exemplarAnswer: "The club should choose the New Moon phase. During New Moon, the sunlit side of the Moon faces away from Earth and the Moon sets with the Sun, making the night sky completely dark and ideal for seeing faint stars and galaxies."
    }
  },

  "sim-principle-of-moments": {
    drivingQuestion: "How do weights and distances from a pivot (Torque = Force × Distance) allow a seesaw or lever to balance perfectly in equilibrium?",
    hypothesisPrompt: "If a 40 N weight is placed 20 cm to the left of a seesaw pivot, predict where an 80 N weight (twice as heavy) must be placed on the right side to keep the seesaw balanced horizontally.",
    tableHeaders: ["Trial", "Left Weight (F₁)", "Left Distance (d₁)", "Left Turning Effect (Torque τ₁)", "Right Weight (F₂)", "Right Distance (d₂)", "Right Turning Effect (Torque τ₂)", "Is It Balanced?"],
    tableRows: [
      ["1", "40.0 N", "0.30 m (30 cm)", "12.0 N·m (Counter-Clockwise)", "80.0 N", "0.15 m (15 cm)", "12.0 N·m (Clockwise)", "BALANCED (Equilibrium)"],
      ["2", "60.0 N", "0.40 m", "24.0 N·m", "30.0 N", "0.80 m (Twice as far)", "24.0 N·m", "BALANCED (Equilibrium)"],
      ["3", "100.0 N", "0.20 m", "20.0 N·m", "50.0 N", "0.60 m", "30.0 N·m (Right is bigger)", "UNBALANCED (Tips to the Right)"],
      ["4", "Two weights on Left (20N + 30N)", "0.5m & 0.2m", "16.0 N·m (10 + 6)", "40.0 N", "0.40 m", "16.0 N·m", "BALANCED (Sum of moments)"],
      ["5", "Heavy box", "0.10 m (Close to pivot)", "10.0 N·m", "Small 10 N push", "1.00 m (Far from pivot)", "10.0 N·m", "BALANCED (Small force lifts heavy load)"]
    ],
    criticalQuestions: [
      {
        prompt: "1. The Principle of Moments Formula",
        subtext: "State the Principle of Moments. In Trial 1, show that Left Force × Left Distance = Right Force × Right Distance (F₁ × d₁ = F₂ × d₂).",
        exemplarAnswer: "The Principle of Moments states that for an object in balance, total Clockwise Moments = total Counter-Clockwise Moments. In Trial 1: (40 N × 0.30 m) = 12.0 N·m, and (80 N × 0.15 m) = 12.0 N·m. Since 12.0 = 12.0, the beam balances."
      },
      {
        prompt: "2. Balancing Different Weights on a Seesaw",
        subtext: "If an adult weighing 600 N sits 1.0 meter from the pivot of a playground seesaw, how far from the pivot must a 200 N child sit to balance the adult?",
        exemplarAnswer: "Clockwise Moment = Counter-Clockwise Moment: 600 N × 1.0 m = 200 N × d₂ ⇒ 600 = 200 × d₂ ⇒ d₂ = 600 ÷ 200 = 3.0 meters. The child must sit 3.0 meters from the pivot."
      },
      {
        prompt: "3. Why Do Longer Levers Make Work Easier?",
        subtext: "Look at Trial 5 where a small 10 N force balanced a 100 N box. Why does applying a force further away from the pivot (large distance) make it easier to lift heavy objects?",
        exemplarAnswer: "Because Torque = Force × Distance, having a long distance from the pivot multiplies your turning effect (torque). This allows a small effort force to overcome a very heavy load (mechanical advantage)."
      }
    ],
    realWorldScenario: {
      title: "Opening a Paint Can with a Screwdriver",
      scenario: "To pry open the tight metal lid of a paint can, a painter uses a long screwdriver as a lever rather than trying to pull the lid with their fingers.",
      task: "Explain how using a long screwdriver demonstrates the Principle of Moments to easily pop the lid open.",
      exemplarAnswer: "The screwdriver acts as a first-class lever with the rim of the can as the fulcrum (pivot). Because the handle (effort arm) is much longer than the tip under the lid (load arm), pressing down on the handle produces a large upward lifting torque on the tight lid with very little hand effort."
    }
  },

  "sim-wheel-and-axle": {
    drivingQuestion: "How does a wheel and axle (like a doorknob, screwdriver, or bicycle pedal) multiply force to make turning easier?",
    hypothesisPrompt: "If the radius of a large wheel is 4 times bigger than the radius of its central axle, predict how much less effort force you will need to turn the wheel compared to turning the axle directly.",
    tableHeaders: ["Trial", "Wheel Radius (R)", "Axle Radius (r)", "Radius Ratio (R ÷ r)", "Load Lifted (Weight)", "Effort Force Needed", "Mechanical Advantage", "How It Feels"],
    tableRows: [
      ["1", "10.0 cm", "5.0 cm", "2 to 1 ratio", "50.0 N", "25.0 N (Half the load)", "2.0× force multiplier", "Noticeably easier to turn"],
      ["2", "20.0 cm", "5.0 cm", "4 to 1 ratio", "50.0 N", "12.5 N (Quarter load)", "4.0× force multiplier", "Very easy to turn"],
      ["3", "30.0 cm (Big Wheel)", "5.0 cm", "6 to 1 ratio", "50.0 N", "8.3 N", "6.0× force multiplier", "Extremely easy"],
      ["4", "40.0 cm", "4.0 cm", "10 to 1 ratio", "100.0 N", "10.0 N (1/10th force!)", "10.0× force multiplier", "Lifts heavy load effortlessly"],
      ["5", "10.0 cm (Same size)", "10.0 cm", "1 to 1 ratio", "50.0 N", "50.0 N (Full load)", "1.0× (No multiplier)", "Direct heavy turning"]
    ],
    criticalQuestions: [
      {
        prompt: "1. Calculating Mechanical Advantage (Ideal MA = R ÷ r)",
        subtext: "Using Trial 2 where the wheel radius R = 20.0 cm and axle radius r = 5.0 cm, calculate the Ideal Mechanical Advantage (R ÷ r). If you want to lift a 100 N bucket from a well, how much effort force do you need to apply to the wheel handle?",
        exemplarAnswer: "Ideal MA = 20.0 cm ÷ 5.0 cm = 4.0. To lift a 100 N load: Effort Force = Load ÷ MA = 100 N ÷ 4.0 = 25.0 N."
      },
      {
        prompt: "2. The Trade-Off: Force vs. Distance",
        subtext: "A simple machine cannot create free energy. When you turn the large wheel to lift the axle by 10 cm in Trial 2 (MA = 4), how far must your hands move around the outer wheel? (Hint: Multiply 10 cm by the ratio 4).",
        exemplarAnswer: "Your hands must move 4 × 10 cm = 40 cm around the outer wheel. You trade moving a longer distance in exchange for using 4 times less muscular force."
      },
      {
        prompt: "3. Examples of Wheels and Axles Around You",
        subtext: "Why is a screwdriver handle made thick rather than as thin as the metal shaft? Why would it be difficult to turn a round metal door spindle if the doorknob was removed?",
        exemplarAnswer: "The thick handle has a larger radius than the metal shaft, acting as a wheel and axle that multiplies your hand's twisting force (torque). Without a doorknob, you would have to grip the tiny axle directly with no mechanical advantage."
      }
    ],
    realWorldScenario: {
      title: "Riding a Bicycle: Pedals and Gears",
      scenario: "When you pedal a bicycle, your feet turn the pedal cranks (wheel) which rotate the front sprocket and chain (axle).",
      task: "Explain why shifting to a lower gear with a larger rear wheel cog makes it much easier to pedal up a steep hill.",
      exemplarAnswer: "A larger rear cog increases the effective radius ratio (mechanical advantage), reducing the effort force your legs need to push on the pedals to climb the hill, while requiring you to pedal more revolutions."
    }
  },

  "sim-bridge-circuits": {
    drivingQuestion: "How does a Wheatstone bridge balance four resistors to measure an unknown electrical resistance with high precision?",
    hypothesisPrompt: "In a bridge circuit with two parallel branches (R₁/R₂ on the left and R₃/R_x on the right), predict what reading the central meter (galvanometer) will show when the ratio of R₁/R₂ exactly equals R₃/R_x.",
    tableHeaders: ["Trial", "Resistor R₁", "Resistor R₂", "Left Ratio (R₁ ÷ R₂)", "Known Resistor R₃", "Unknown Resistor (R_x)", "Right Ratio (R₃ ÷ R_x)", "Meter Reading (Galvanometer)"],
    tableRows: [
      ["1", "100.0 Ω", "100.0 Ω", "1.00", "50.0 Ω", "50.0 Ω", "1.00", "0.00 mA (Balanced / Null)"],
      ["2", "100.0 Ω", "200.0 Ω", "0.50", "50.0 Ω", "100.0 Ω", "0.50", "0.00 mA (Balanced / Null)"],
      ["3", "100.0 Ω", "500.0 Ω", "0.20", "20.0 Ω", "100.0 Ω", "0.20", "0.00 mA (Balanced / Null)"],
      ["4", "100.0 Ω", "100.0 Ω", "1.00", "50.0 Ω", "80.0 Ω", "0.625", "+2.5 mA (Unbalanced deflection)"],
      ["5", "100.0 Ω", "300.0 Ω", "0.333", "40.0 Ω", "120.0 Ω (Solved)", "0.333", "0.00 mA (Balanced / Null)"]
    ],
    criticalQuestions: [
      {
        prompt: "1. The Bridge Balance Formula",
        subtext: "When the central meter reads zero current (0.00 mA), the bridge is balanced: R₁ ÷ R₂ = R₃ ÷ R_x. In Trial 5, given R₁ = 100 Ω, R₂ = 300 Ω, and R₃ = 40 Ω, show how to calculate the unknown resistor R_x.",
        exemplarAnswer: "R₁ / R₂ = R₃ / R_x ⇒ 100 / 300 = 40 / R_x ⇒ 1 / 3 = 40 / R_x. Cross-multiplying: R_x = 3 × 40 = 120 Ω."
      },
      {
        prompt: "2. Why Use a Balanced 'Null' Measurement?",
        subtext: "Why is finding the zero point on a meter (null measurement) more accurate than trying to read a moving needle value on a standard handheld meter?",
        exemplarAnswer: "At balance, zero current flows through the central detector. This eliminates errors caused by meter internal resistance, wire resistance, and minor battery voltage drops, giving high precision."
      },
      {
        prompt: "3. What Happens When the Bridge is Unbalanced?",
        subtext: "Look at Trial 4 where R_x was 80 Ω instead of 50 Ω. Why did current flow through the meter? In which direction will the needle point if R_x is too small versus too big?",
        exemplarAnswer: "When the ratios are unequal, the voltage at the left node does not equal the voltage at the right node. This voltage difference pushes current through the meter, deflecting the needle left or right depending on which side has higher potential."
      }
    ],
    realWorldScenario: {
      title: "Digital Bathroom Scales & Kitchen Scales",
      scenario: "When you step on a digital bathroom scale, tiny resistance strips (strain gauges) bend under your weight, changing their electrical resistance slightly.",
      task: "Explain how a bridge circuit detects these tiny resistance changes to accurately display your body weight in kilograms.",
      exemplarAnswer: "The scale connects the strain gauges in a Wheatstone bridge. When your weight bends the sensor, its resistance changes by a fraction of an ohm, unbalancing the bridge and producing a small voltage signal that a computer chip converts directly into your weight."
    }
  },

  "sim-micrometer-screw-gauge": {
    drivingQuestion: "How does a micrometer screw gauge measure tiny thicknesses (like a sheet of paper or wire) with precision down to 0.01 millimeters?",
    hypothesisPrompt: "A micrometer has a main sleeve scale marked in 0.5 mm steps and a rotating thimble with 50 circular divisions. If one full turn of the thimble moves the spindle 0.50 mm, predict the thickness measured by each single mark on the thimble.",
    tableHeaders: ["Trial", "Object Measured", "Main Sleeve Scale (mm)", "Thimble Circular Reading", "Thimble Value (Marks × 0.01 mm)", "Total Reading (Main + Thimble)", "Zero Error Correction", "True Thickness"],
    tableRows: [
      ["1", "Single Sheet of Paper", "0.00 mm", "10 marks", "0.10 mm", "0.100 mm", "0.00 mm (No error)", "0.100 mm (0.1 mm)"],
      ["2", "Copper Wire", "1.00 mm", "24 marks", "0.24 mm", "1.240 mm", "0.00 mm", "1.240 mm"],
      ["3", "Metal Coin (Quarter)", "1.50 mm", "25 marks", "0.25 mm", "1.750 mm", "+0.02 mm (Positive error)", "1.730 mm (Subtract error)"],
      ["4", "Glass Microscope Slide", "1.00 mm", "15 marks", "0.15 mm", "1.150 mm", "-0.01 mm (Negative error)", "1.160 mm (Add error)"],
      ["5", "Strand of Human Hair", "0.00 mm", "07 marks", "0.07 mm", "0.070 mm", "0.00 mm", "0.070 mm (70 µm)"]
    ],
    criticalQuestions: [
      {
        prompt: "1. Calculating the Least Count (Precision)",
        subtext: "The Least Count is the smallest measurement the tool can read: Least Count = Pitch ÷ Number of Thimble Divisions = 0.50 mm ÷ 50. Calculate the Least Count in millimeters.",
        exemplarAnswer: "Least Count = 0.50 mm ÷ 50 = 0.01 mm (which equals 10 micrometers)."
      },
      {
        prompt: "2. How to Read a Micrometer Step-by-Step",
        subtext: "In Trial 2, the main sleeve reads 1.00 mm and the thimble line lines up with 24. Explain how to combine these to get the raw reading of 1.24 mm.",
        exemplarAnswer: "Read the exposed line on the main sleeve (1.00 mm). Multiply the thimble reading by 0.01 mm (24 × 0.01 mm = 0.24 mm). Add them together: 1.00 mm + 0.24 mm = 1.24 mm."
      },
      {
        prompt: "3. Handling Zero Error and Using the Ratchet",
        subtext: "Why should you always turn the friction ratchet knob at the end until it clicks (instead of twisting the main barrel tightly)? What is a zero error and why must it be corrected?",
        exemplarAnswer: "The ratchet clicks to apply the exact same gentle pressure every time, preventing you from crushing the object or bending the screw. A zero error happens if the zero mark does not line up when the jaws are closed empty, and it must be subtracted or added to get true measurements."
      }
    ],
    realWorldScenario: {
      title: "Measuring Wire Thickness and Coins",
      scenario: "An electrician needs to check if a spool of copper wire is 14-gauge (diameter 1.63 mm) or 12-gauge (diameter 2.05 mm).",
      task: "If the micrometer main sleeve shows 2.00 mm and the thimble lines up at 5 divisions, calculate the wire diameter and determine which gauge it is.",
      exemplarAnswer: "Diameter = 2.00 mm + (5 × 0.01 mm) = 2.00 + 0.05 = 2.05 mm. The wire is 12-gauge wire."
    }
  },

  "sim-land-sea-breeze": {
    drivingQuestion: "Why does the wind blow from the sea to the land during a sunny afternoon, but reverses to blow from the land to the sea at night?",
    hypothesisPrompt: "Water heats up and cools down much slower than dry sand. Predict which will be warmer at 2:00 PM on a sunny day (the beach sand or the ocean water), and predict which way the cool breeze will blow.",
    tableHeaders: ["Time of Day", "Sunlight Level", "Beach Sand Temp (°C)", "Ocean Water Temp (°C)", "Where is Air Warmer?", "Air Movement (Convection)", "Wind Breeze Direction"],
    tableRows: [
      ["8:00 AM (Morning)", "Low Morning Sun", "18.0 °C", "18.0 °C", "Equal temperatures", "Air is still", "Calm (No breeze)"],
      ["1:00 PM (Afternoon)", "Strong Overhead Sun", "32.0 °C (Hot!)", "20.0 °C (Cooler)", "Air over Sand is much warmer", "Warm air rises over land, cool sea air rushes in", "SEA BREEZE (Blowing from Sea → Land)"],
      ["5:00 PM (Late Afternoon)", "Low Sun", "24.0 °C", "21.0 °C", "Sand is still slightly warmer", "Gentle onshore airflow", "Light Sea Breeze"],
      ["8:00 PM (Evening)", "Sunset / Twilight", "20.0 °C", "20.0 °C", "Equal temperatures", "Air is still", "Calm Transition"],
      ["2:00 AM (Nighttime)", "No Sunlight (Dark)", "14.0 °C (Cold!)", "19.0 °C (Stays warm)", "Air over Water is now warmer!", "Warm air rises over ocean, cool land air flows out", "LAND BREEZE (Blowing from Land → Sea)"]
    ],
    criticalQuestions: [
      {
        prompt: "1. Why Does Sand Heat Up Faster Than Water?",
        subtext: "Water has a very high Specific Heat Capacity (c = 4,184 J/kg·°C), while dry sand has a low heat capacity (c = 830 J/kg·°C). Explain why sand gets scorching hot on a sunny afternoon while ocean water stays cool.",
        exemplarAnswer: "Because sand has a low heat capacity, it takes very little heat energy to raise its temperature, so it heats up quickly in the sun. Water has a high heat capacity, absorbing huge amounts of solar heat with only a small rise in temperature."
      },
      {
        prompt: "2. Explaining the Daytime Sea Breeze",
        subtext: "Describe the circular convection current that forms during the day: (1) What happens to air over the hot land? (2) Why does cool air from over the ocean blow inland toward the beach?",
        exemplarAnswer: "The hot sand heats the air above it, causing the warm air to expand, become less dense, and rise. Cool, denser air over the ocean moves inland to replace the rising warm air, creating a refreshing onshore Sea Breeze."
      },
      {
        prompt: "3. Why Does the Wind Reverse at Night? (Land Breeze)",
        subtext: "Look at the 2:00 AM row in your table. At night, the sand cools down quickly to 14°C while the ocean stays warm at 19°C. Explain why the wind reverses and blows out to sea.",
        exemplarAnswer: "At night, the land cools down rapidly while the ocean retains its warmth. Warm air now rises over the ocean, and cool air from the land flows offshore toward the water, creating an offshore Land Breeze."
      }
    ],
    realWorldScenario: {
      title: "Enjoying an Afternoon at the Beach",
      scenario: "Families visiting coastal beach towns notice that around 1:00 PM to 3:00 PM every sunny day, a cool, steady breeze starts blowing in from the ocean.",
      task: "Explain to a visitor why the beach stays pleasant and cool in the afternoon compared to inland cities just 20 miles away.",
      exemplarAnswer: "Inland cities have pavement and buildings that trap heat with no ocean nearby to create a breeze. At the beach, the temperature difference between the hot sand and cold ocean creates a natural air-conditioning effect (the Sea Breeze), continuously blowing cool ocean air onto the shore."
    }
  },

  "sim-hydraulic-press-lift": {
    drivingQuestion: "How does Pascal's Principle allow a small input force on a narrow piston to lift an enormous automobile or crush heavy materials on a wide piston?",
    hypothesisPrompt: "If you increase the radius of the output cylinder (r2) while keeping the input effort force (F1) and small radius (r1) constant, predict what will happen to the output lifting force (F2) and the distance the load moves per stroke.",
    tableHeaders: ["Trial", "Input Force (F1)", "Radius r1 (cm)", "Radius r2 (cm)", "Area Ratio (A2 / A1)", "Fluid Pressure (N/m²)", "Output Force (F2)", "Lift / Stroke Result"],
    tableRows: [
      ["1 (Baseline)", "150 N", "3.0 cm", "8.0 cm", "7.11×", "53,052 N/m²", "1,066 N", "Small Load Lifted (7.1:1 stroke ratio)"],
      ["2 (Increased F1)", "300 N", "3.0 cm", "8.0 cm", "7.11×", "106,103 N/m²", "2,133 N", "Double output force at same stroke ratio"],
      ["3 (Wide Lift Piston)", "150 N", "2.0 cm", "10.0 cm", "25.00×", "119,366 N/m²", "3,750 N", "High multiplication (25:1 stroke ratio)"],
      ["4 (Narrow Input Piston)", "200 N", "1.5 cm", "12.0 cm", "64.00×", "282,942 N/m²", "12,800 N", "Massive force multiplication (> 12 kN)"],
      ["5 (Heavy Car Lift)", "400 N", "1.5 cm", "15.0 cm", "100.00×", "565,884 N/m²", "40,000 N", "Easily lifts & crushes 25,000 N small car!"]
    ],
    criticalQuestions: [
      {
        prompt: "1. Pascal's Principle and Pressure Transmission",
        subtext: "Pascal's Principle states that pressure applied to an enclosed fluid is transmitted equally in all directions (P = F1 ÷ A1 = F2 ÷ A2). Explain why the pressure measured under the small piston is identical to the pressure under the large piston.",
        exemplarAnswer: "Because liquids like hydraulic oil and water are virtually incompressible and enclosed in a rigid chamber, any external force applied to the fluid distributes pressure equally throughout all molecules in the system, maintaining uniform pressure P1 = P2 across every square meter."
      },
      {
        prompt: "2. Force Multiplication vs. Distance Tradeoff (Conservation of Energy)",
        subtext: "In Trial 5, a modest 400 N effort produces a massive 40,000 N output (100× force multiplication). According to the conservation of work (Work = Force × Distance), why does the mechanic have to pump the small piston multiple times through a long distance to raise the heavy car just a few centimeters?",
        exemplarAnswer: "Work input must equal work output (F1 × d1 = F2 × d2). Gaining a 100-fold increase in output force requires the input piston to travel 100 times the total distance of the output piston. Multi-stroke pumping with check valves lets the operator add distance incrementally without needing a giant single stroke."
      },
      {
        prompt: "3. Effect of Fluid Viscosity and Type",
        subtext: "Compare using standard hydraulic oil versus thick, viscous molasses in the simulation. How does fluid viscosity affect the flow rate, pumping speed, and practical efficiency of hydraulic machinery?",
        exemplarAnswer: "Highly viscous fluids like molasses generate significant internal fluid friction, slowing down stroke cycles and increasing resistance, whereas hydraulic oils provide optimal non-compressibility, lubrication, low friction, and fast response times."
      }
    ],
    realWorldScenario: {
      title: "Automotive Crash Safety & Crumple Zones",
      scenario: "Automotive engineers intentionally design vehicle front and rear crumple zones to deform plastically during a highway collision (approximating an inelastic collision rather than an elastic bounce).",
      task: "Using impulse (J = F_avg × Δt), momentum change (Δp), and kinetic energy dissipation, explain why a controlled inelastic crumple collision is significantly safer for vehicle occupants than a perfectly elastic collision.",
      exemplarAnswer: "In an elastic collision, the vehicle bounces backward, resulting in nearly double the momentum change (Δp = m(v_final - v_initial) ≈ 2mv) and subjecting passengers to extreme whiplash accelerations. Crumple zones undergo controlled inelastic deformation, dissipating huge amounts of kinetic energy as structural deformation work while extending the duration of impact (Δt), thereby drastically reducing the peak average impact force (F_avg = Δp / Δt) experienced by the human body."
    }
  },

  "sim-double-pendulum-chaos": {
    drivingQuestion: "How do coupled non-linear differential equations and conservation of mechanical energy govern deterministic chaos in a double physical pendulum?",
    hypothesisPrompt: "If the initial release angle or upper mass of a double pendulum is altered by an infinitesimally small perturbation, predict whether the subsequent long-term trajectory will remain predictable or diverge exponentially.",
    tableHeaders: ["Trial", "Gravity (g)", "Upper Mass (m₁)", "Lower Mass (m₂)", "Upper Length (l₁)", "Lower Length (l₂)", "Initial Angles (θ₁, θ₂)", "Observed Dynamics", "Phase Trail Character", "Trajectory Predictability"],
    tableRows: [
      ["1", "9.81 m/s²", "10 kg", "10 kg", "140 px", "140 px", "90°, 90°", "Coupled chaotic flips with rapid whipping", "Complex dense multi-loop rainbow attractor", "Chaotic / Diverges after ~3 swings"],
      ["2", "9.81 m/s²", "40 kg", "2 kg", "140 px", "140 px", "90°, 90°", "Dominant upper harmonic driver with chaotic tail", "Symmetric inner envelope with chaotic outer tips", "Semi-periodic driver with chaotic tip"],
      ["3", "9.81 m/s²", "5 kg", "35 kg", "140 px", "140 px", "90°, 90°", "Heavy lower mass destabilizes primary pivot", "Erratic jerky wide orbital excursions", "Highly chaotic from first swing"],
      ["4", "0.00 m/s²", "10 kg", "10 kg", "140 px", "140 px", "90°, 90°", "Zero gravity constant angular momentum drift", "Smooth circular/elliptical orbital loops", "Completely deterministic & predictable"],
      ["5", "18.00 m/s²", "10 kg", "10 kg", "100 px", "160 px", "45°, 45°", "High-gravity fast whipping and sudden inversions", "Dense high-frequency trajectory lattice", "Extreme sensitivity / rapid divergence"]
    ],
    criticalQuestions: [
      {
        prompt: "1. The Butterfly Effect & Lyapunov Exponents in Coupled Oscillators",
        subtext: "Explain why two identical double pendulums released from release angles differing by only 0.001° will follow nearly identical paths for several cycles before rapidly diverging into completely different trajectories.",
        exemplarAnswer: "The double pendulum is governed by non-linear coupled differential equations where the phase space trajectories have positive Lyapunov exponents. Tiny differences (perturbations) in initial conditions grow exponentially over time rather than linearly. While deterministic (exact physics with zero randomness), the system's exponential sensitivity renders long-term predictive calculation impossible without infinite numerical precision."
      },
      {
        prompt: "2. Energy Exchange and Whipping Mechanics",
        subtext: "Observe the velocity of the lower mass (m₂) when the upper mass (m₁) momentarily comes to rest. How does conservation of total mechanical energy explain the sudden whipping motion of the lower arm?",
        exemplarAnswer: "Total mechanical energy E = T + V (kinetic + gravitational potential energy) is conserved in the frictionless system. When the upper mass m₁ slows or halts near the bottom of its swing, its kinetic energy and angular momentum are transferred through the coupled pivot into the lower arm l₂. Because m₂ receives the transferred energy while possessing a smaller moment of inertia, it must accelerate dramatically, executing rapid high-velocity whips and full 360° loops."
      },
      {
        prompt: "3. Runge-Kutta 4th Order (RK4) Numerical Integration",
        subtext: "Why is an advanced numerical method like 4th-order Runge-Kutta (RK4) required to simulate a double pendulum rather than simple Euler integration?",
        exemplarAnswer: "Standard Euler integration introduces cumulative O(dt) energy drift errors that rapidly cause the pendulum to falsely gain or lose artificial energy, causing the simulation to explode. RK4 evaluates derivatives at four intermediate trial sub-steps per time increment (O(dt⁴) local error), providing the numerical stability and energy-conservation fidelity necessary to track non-linear chaotic dynamics."
      }
    ],
    realWorldScenario: {
      title: "Atmospheric Weather Forecasting & Chaos Theory",
      scenario: "In 1961, meteorologist Edward Lorenz discovered that rounding atmospheric computer simulation parameters from 0.506127 to 0.506 produced radically divergent weather forecasts within days (founding modern Chaos Theory).",
      task: "Using your observations of the double pendulum's sensitive dependence on initial conditions, explain why long-range 14-day weather forecasts inherently experience high uncertainty despite modern supercomputing models.",
      exemplarAnswer: "The Earth's atmosphere is a turbulent, coupled fluid dynamical system governed by non-linear Navier-Stokes differential equations, analogous to a vast network of interconnected non-linear pendulums. Because sensor networks cannot measure temperature, pressure, and wind speed with infinite continuous precision at every cubic meter of the planet, tiny unmeasured microscopic discrepancies grow exponentially over time, creating a fundamental predictability horizon of roughly 10 to 14 days."
    }
  },

  "sim-lissajous-curves": {
    drivingQuestion: "How do orthogonal simple harmonic oscillations combine parametrically to generate Lissajous figures, and how do frequency ratios and phase shifts dictate geometric symmetry?",
    hypothesisPrompt: "If you maintain equal horizontal and vertical frequencies (a:b = 1:1) while smoothly shifting the phase difference δ from 0° to 90° to 180°, predict the geometric transformation of the resulting trajectory. What happens when the frequency ratio is changed to 1:2 or 3:2?",
    tableHeaders: ["Trial / Pattern", "Frequency a (X)", "Frequency b (Y)", "Ratio (a:b)", "Phase Shift (δ)", "Amplitude (A, B)", "Observed Shape", "Lobe / Intersection Count", "Symmetry & Closed Loop"],
    tableRows: [
      ["1:1 Linear (In-Phase)", "1 Hz", "1 Hz", "1:1", "0°", "1.0, 1.0", "Diagonal straight line (y = x)", "0 intersections, endpoints at (±1, ±1)", "Symmetric across 45° axis"],
      ["1:1 Ellipse", "1 Hz", "1 Hz", "1:1", "45°", "1.0, 1.0", "Tilted ellipse", "Smooth closed orbital loop", "Reflective diagonal symmetry"],
      ["1:1 Circle (Quadrature)", "1 Hz", "1 Hz", "1:1", "90°", "1.0, 1.0", "Perfect circle of radius 1.0", "x² + y² = 1 (cos² + sin² = 1)", "Full rotational continuous symmetry"],
      ["1:1 Linear (Out-of-Phase)", "1 Hz", "1 Hz", "1:1", "180°", "1.0, 1.0", "Diagonal line (y = -x)", "Reversed slope line", "Symmetric across -45° axis"],
      ["1:2 Parabola / Figure-8", "1 Hz", "2 Hz", "1:2", "90°", "1.0, 1.0", "Figure-8 / Parabolic loop", "1 central self-intersection node, 2 vertical lobes", "Vertical axis reflection"],
      ["3:2 Knot Pattern", "3 Hz", "2 Hz", "3:2", "90°", "1.0, 1.0", "3-lobed harmonic weave / knot", "3 horizontal lobes, 2 vertical lobes", "Bilateral symmetry"],
      ["3:4 Complex Pattern", "3 Hz", "4 Hz", "3:4", "90°", "1.0, 1.0", "Dense multi-crossing harmonic grid", "3 horizontal lobes, 4 vertical lobes", "Complex multi-axis grid symmetry"]
    ],
    criticalQuestions: [
      {
        prompt: "1. Parametric Equations & Pythagorean Identity for the Circle",
        subtext: "When a = 1, b = 1, and δ = 90° (π/2 rad), x(t) = sin(t + π/2) = cos(t) and y(t) = sin(t). Prove mathematically why the resulting curve is a circle of radius 1.0.",
        exemplarAnswer: "By the fundamental Pythagorean trigonometric identity, x(t)² + y(t)² = cos²(t) + sin²(t) = 1. This matches the Cartesian equation for a circle centered at the origin with radius r = 1. The point rotates counterclockwise at a constant angular frequency ω = 1 rad/s."
      },
      {
        prompt: "2. Counting Lobes to Determine Frequency Ratios (Oscilloscope XY Mode)",
        subtext: "In electrical engineering and acoustics, an oscilloscope in XY mode displays an unknown input signal on the Y-axis against a calibrated reference signal on the X-axis. How can you determine the exact frequency ratio a:b by counting the tangencies (peaks) along the horizontal and vertical boundaries?",
        exemplarAnswer: "The ratio of frequencies is equal to the ratio of tangencies: (Frequency a / Frequency b) = (Number of vertical tangency peaks / Number of horizontal tangency peaks). For example, a curve tangent to the top horizontal boundary 2 times and the right vertical boundary 3 times has a frequency ratio of 3:2."
      },
      {
        prompt: "3. Rational vs. Irrational Frequency Ratios & Space-Filling Curves",
        subtext: "What would happen to the Lissajous trajectory if the ratio a:b was an irrational number (like √2 : 1 or π : 1) instead of an integer ratio? Would the curve ever close upon itself?",
        exemplarAnswer: "If the frequency ratio is irrational, the period of the horizontal oscillation is incommensurable with the period of the vertical oscillation. The curve will never repeat or form a closed loop; instead, over infinite time, the trajectory will densely fill the entire rectangular boundary [-A, A] × [-B, B] without ever self-closing (forming a quasi-periodic dense ergodic orbit)."
      }
    ],
    realWorldScenario: {
      title: "Audio Synthesizer Phase Alignment & Oscilloscope Diagnostics",
      scenario: "Audio mastering engineers and radar technicians feed dual stereo audio signals or RF carrier signals into an oscilloscope in XY mode (goniometer / Lissajous vector scope) to check phase coherence and harmonic distortion before broadcasting.",
      task: "Explain how viewing a Lissajous figure allows an audio engineer to instantly detect whether stereo left and right channels are perfectly in-phase (mono-compatible), 90° stereo-widened, or 180° out-of-phase (causing total phase cancellation in mono speakers).",
      exemplarAnswer: "If both stereo channels are identical (mono), the Lissajous display collapses into a crisp 45° diagonal line (δ = 0°). A healthy wide stereo image creates an elliptical cloud (δ ≈ 90°). However, if the display shows a negative diagonal line (δ = 180°), the channels are in direct phase opposition—when summed into a single mono speaker (like on phones or club sound systems), the two signals will destructively interfere and completely cancel each other out."
    }
  }
};

