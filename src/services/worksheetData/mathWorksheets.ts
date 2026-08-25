import { SimulationWorksheetData } from "./types";

export const MATH_WORKSHEETS: Record<string, SimulationWorksheetData> = {
  "sim-circle-geometry-theorems": {
    drivingQuestion: "How do angle properties in a circle (angles at the center, in a semicircle, and in cyclic quadrilaterals) create predictable geometric rules?",
    hypothesisPrompt: "If you drag a point along the circumference of a circle while keeping the base arc fixed, predict what will happen to the size of the inscribed angle. What do you think is the relationship between the angle at the center and the angle at the circumference?",
    tableHeaders: ["Trial", "Circle Property Tested", "Base Arc Size", "Angle at Center (∠BOC)", "Angle at Circumference (∠BAC)", "Ratio (Center ÷ Circumference)", "Observation / Rule"],
    tableRows: [
      ["1", "Angle at Center vs Circumference", "Arc = 60°", "60.0°", "30.0°", "2.0", "Center angle is 2× the circumference angle"],
      ["2", "Angle at Center vs Circumference", "Arc = 110°", "110.0°", "55.0°", "2.0", "Center angle is 2× the circumference angle"],
      ["3", "Angle in a Semicircle (Diameter)", "Arc = 180° (Diameter)", "180.0°", "90.0°", "2.0", "Angle in a semicircle is always a right angle (90°)"],
      ["4", "Angles in the Same Segment", "Arc = 70°", "70.0°", "∠1 = 35.0°, ∠2 = 35.0°", "1.0", "Angles subtended by the same arc are equal"],
      ["5", "Cyclic Quadrilateral (Opposite Angles)", "Full Circle", "N/A", "∠A = 80.0°, ∠C = 100.0°", "Sum = 180°", "Opposite angles add up to 180° (Supplementary)"],
      ["6", "Tangent to a Radius", "Point of contact P", "N/A", "∠OPT = 90.0°", "N/A", "A tangent line is perpendicular (90°) to the radius at the contact point"]
    ],
    criticalQuestions: [
      {
        prompt: "1. The Inscribed Angle Rule (Center vs. Circumference)",
        subtext: "Look at Trials 1 and 2 in your data table. What mathematical pattern do you notice when comparing the angle at the center to the angle at the circumference for the same arc? If an angle at the center is 130°, what is the angle at the circumference?",
        exemplarAnswer: "The angle at the center is always twice the angle at the circumference (or the angle at the circumference is half the angle at the center). If the central angle is 130°, the angle at the circumference is 130° ÷ 2 = 65°."
      },
      {
        prompt: "2. Angle in a Semicircle (Thales' Rule)",
        subtext: "In Trial 3, the line passing through the center is a diameter (180°). What is the measure of the inscribed triangle's angle touching the circumference? Why does this make any triangle drawn inside a semicircle a right-angled triangle?",
        exemplarAnswer: "The angle at the circumference is 180° ÷ 2 = 90°. Since a diameter creates a straight line (180° central angle), any inscribed angle subtended by the diameter is exactly 90°, making it a right triangle."
      },
      {
        prompt: "3. Opposite Angles of a Cyclic Quadrilateral",
        subtext: "In Trial 5, a four-sided polygon (quadrilateral) has all 4 corners touching the circle. If one angle is 75°, calculate the measure of the opposite angle across the circle.",
        exemplarAnswer: "Opposite angles of a cyclic quadrilateral always sum to 180°. If one angle is 75°, the opposite angle is 180° - 75° = 105°."
      }
    ],
    realWorldScenario: {
      title: "Ferris Wheel Geometry & Pizza Slices",
      scenario: "A giant Ferris wheel has 12 evenly spaced passenger gondolas around its circular rim, dividing the circle into 12 equal arcs.",
      task: "Calculate the central angle between two adjacent gondolas, and determine the inscribed angle an observer on the bottom of the rim sees between two top gondolas.",
      exemplarAnswer: "Central angle for one slice = 360° ÷ 12 = 30°. By the inscribed angle rule, an angle viewed from anywhere on the opposite circumference is half the central angle: 30° ÷ 2 = 15°."
    }
  },

  "sim-cumulative-frequency-ogive": {
    drivingQuestion: "How does a cumulative frequency graph (ogive curve) help us find the median, quartiles, and percentiles of a group of scores?",
    hypothesisPrompt: "If you plot student test scores as an S-shaped cumulative curve, predict where the median (50% mark) and the upper/lower quartiles will be located on the vertical frequency axis.",
    tableHeaders: ["Score Interval", "Frequency (Students)", "Cumulative Frequency (Running Total)", "Upper Class Boundary", "Percentile Rank (%)", "Statistical Landmark", "Value Found on Graph"],
    tableRows: [
      ["0 to 20", "4", "4", "20", "5.0 %", "Bottom range", "Score = 18"],
      ["20 to 40", "12", "16", "40", "20.0 %", "Approaching Q₁", "Score = 38"],
      ["40 to 60", "28", "44", "60", "55.0 %", "Median Q₂ (50% mark)", "Median Q₂ = 57"],
      ["60 to 80", "24", "68", "80", "85.0 %", "Upper Quartile Q₃ (75%)", "Upper Quartile Q₃ = 72"],
      ["80 to 100", "12", "80", "100", "100.0 %", "Top 100% of class", "Max Score = 100"]
    ],
    criticalQuestions: [
      {
        prompt: "1. Finding the Median (Q₂) from the Graph",
        subtext: "There are 80 students in total. Explain how to find the median score using the vertical cumulative frequency axis. (Hint: What is half of 80?)",
        exemplarAnswer: "Find 50% of the total 80 students: 80 ÷ 2 = 40. Locate 40 on the vertical cumulative frequency axis, move horizontally to hit the curve, and look straight down to read the score on the horizontal axis (Median ≈ 57)."
      },
      {
        prompt: "2. Calculating the Interquartile Range (IQR)",
        subtext: "Using Lower Quartile Q₁ (at 25% = 20 students, score ≈ 44) and Upper Quartile Q₃ (at 75% = 60 students, score ≈ 72), calculate the Interquartile Range (IQR = Q₃ - Q₁). What does the IQR tell us about the middle 50% of students?",
        exemplarAnswer: "IQR = Q₃ - Q₁ = 72 - 44 = 28. The IQR measures the spread or range of the middle 50% of the scores, showing how spread out typical student performances are without being affected by extreme high or low outliers."
      },
      {
        prompt: "3. Estimating Percentiles",
        subtext: "To get an 'A' grade, a student needs to be in the top 10% of the class (the 90th percentile, which is 0.90 × 80 = 72 students). Use the table to estimate the minimum score needed for an A.",
        exemplarAnswer: "Looking at the 72-student mark (between 68 and 80 cumulative frequency), the score is approximately 84. A student needs a score of around 84 or higher to be in the top 10%."
      }
    ],
    realWorldScenario: {
      title: "Class Test Score Analysis",
      scenario: "A school principal wants to find out if a standardized math exam was fair for 80 high school students.",
      task: "Explain why using the median and quartiles from an ogive curve gives a clearer picture of typical student performance than just looking at the single highest and lowest scores.",
      exemplarAnswer: "Extreme scores (like one student getting 100% or one getting 5%) don't reflect the majority of the class. The median shows the true middle score, and the quartiles show where the middle half of the class performed, giving a fair view of overall understanding."
    }
  },

  "sim-quadratic-graph-gradient": {
    drivingQuestion: "How do the numbers a, b, and c in y = ax² + bx + c change the shape, peak/valley (vertex), and slope of a parabola graph?",
    hypothesisPrompt: "If you change the slider for 'a' from a positive number (+1) to a negative number (-1), predict what will happen to the curve: Will it open upward like a smile (U-shape) or downward like a hill (∩-shape)? What happens to the vertex?",
    tableHeaders: ["Trial", "Equation", "Values of (a, b, c)", "Graph Direction (Opens Up or Down)", "Vertex / Turning Point (x, y)", "Type of Turning Point", "Y-Intercept (where x=0)", "X-Intercepts (Roots)"],
    tableRows: [
      ["1", "y = x² - 4x + 3", "a=1, b=-4, c=3", "Opens Up (U-shape)", "(2.0, -1.0)", "Minimum (Lowest point)", "(0, 3)", "x = 1.0 and x = 3.0"],
      ["2", "y = -x² + 4x - 3", "a=-1, b=4, c=-3", "Opens Down (∩-shape)", "(2.0, +1.0)", "Maximum (Highest point)", "(0, -3)", "x = 1.0 and x = 3.0"],
      ["3", "y = x² - 6x + 9", "a=1, b=-6, c=9", "Opens Up (U-shape)", "(3.0, 0.0)", "Minimum on x-axis", "(0, 9)", "x = 3.0 (One repeated root)"],
      ["4", "y = 2x² - 8", "a=2, b=0, c=-8", "Opens Up (Narrow U-shape)", "(0.0, -8.0)", "Minimum on y-axis", "(0, -8)", "x = -2.0 and x = +2.0"],
      ["5", "y = -0.5x² + 2", "a=-0.5, b=0, c=2", "Opens Down (Wide ∩-shape)", "(0.0, +2.0)", "Maximum", "(0, 2)", "x = -2.0 and x = +2.0"]
    ],
    criticalQuestions: [
      {
        prompt: "1. The Effect of Coefficient 'a'",
        subtext: "Compare Trial 1 (a = +1) with Trial 2 (a = -1). What does the sign of 'a' (positive vs negative) tell you about whether the turning point is a minimum (valley) or maximum (peak)? What happens if 'a' is a bigger number like 3?",
        exemplarAnswer: "When 'a' is positive, the parabola opens upward and the vertex is a minimum (lowest point). When 'a' is negative, it opens downward and the vertex is a maximum (highest point). Making 'a' bigger makes the parabola narrower and steeper."
      },
      {
        prompt: "2. The Y-Intercept and Coefficient 'c'",
        subtext: "Look at the constant number 'c' in all the equations. Where does the graph always cross the vertical y-axis? Explain why setting x = 0 gives y = c.",
        exemplarAnswer: "The graph crosses the y-axis at (0, c). When x = 0, both ax² and bx become 0, leaving y = 0 + 0 + c = c. So 'c' is always the y-intercept."
      },
      {
        prompt: "3. Finding the Vertex Line of Symmetry",
        subtext: "The line of symmetry runs straight down the middle of the parabola at x = -b / (2a). For Trial 1 (y = x² - 4x + 3), calculate x = -(-4) / (2 × 1). Does this match the x-coordinate of the vertex in your simulation?",
        exemplarAnswer: "x = 4 / 2 = 2.0. Yes, this matches the vertex at x = 2.0. Substituting x = 2 gives y = (2)² - 4(2) + 3 = 4 - 8 + 3 = -1, matching the vertex (2, -1)."
      }
    ],
    realWorldScenario: {
      title: "Drinking Fountain Water Stream",
      scenario: "Water shooting out of a drinking fountain nozzle forms a curved parabola before falling into the drain.",
      task: "If the water stream reaches its maximum height at x = 1.5 feet and lands in the drain 3.0 feet away, explain why the highest point is located exactly halfway between the start and landing points.",
      exemplarAnswer: "Parabolas are perfectly symmetrical. The highest point (vertex) always sits on the line of symmetry, which is exactly halfway between the two x-intercepts (the nozzle at x = 0 and the drain at x = 3.0 feet)."
    }
  },

  "sim-bearings-and-distances": {
    drivingQuestion: "How do 3-figure compass bearings (measured clockwise from North 000° to 360°) and triangle geometry help us navigate between locations?",
    hypothesisPrompt: "If you walk 5 km on a bearing of 090° (due East) and then turn and walk 5 km on a bearing of 180° (due South), predict what compass direction and bearing you need to walk to get straight back to where you started.",
    tableHeaders: ["Trip Leg", "Starting Point", "Ending Point", "Distance (km)", "Compass Bearing (Clockwise from North)", "Compass Direction (e.g. NE, SSW)", "Back-Bearing (Return Direction)"],
    tableRows: [
      ["Leg 1", "Camp (Origin)", "Lookout Point A", "10.0 km", "060°", "East-North-East (ENE)", "240° (060° + 180°)"],
      ["Leg 2", "Lookout Point A", "Lake B", "15.0 km", "150°", "South-South-East (SSE)", "330° (150° + 180°)"],
      ["Direct Path", "Camp (Origin)", "Lake B (Direct)", "18.0 km", "116°", "East-South-East (ESE)", "296° (116° + 180°)"],
      ["Leg 3", "Lake B", "Cabin C", "12.0 km", "250°", "West-South-West (WSW)", "070° (250° - 180°)"],
      ["Return Leg", "Cabin C", "Camp (Origin)", "13.0 km", "338°", "North-North-West (NNW)", "158° (338° - 180°)"]
    ],
    criticalQuestions: [
      {
        prompt: "1. Understanding 3-Figure Bearings",
        subtext: "Bearings are always measured starting from North (000°) turning clockwise, written with 3 digits (e.g. 045°). What are the 3-figure bearings for: (a) Due North, (b) Due East, (c) Due South, and (d) Due West?",
        exemplarAnswer: "(a) Due North = 000° (or 360°), (b) Due East = 090°, (c) Due South = 180°, (d) Due West = 270°."
      },
      {
        prompt: "2. The Back-Bearing (Return Direction) Rule",
        subtext: "If you hike from Point A to Point B on a bearing of 075°, what bearing must you follow to hike directly back from B to A? Explain the simple rule: add 180° if the bearing is less than 180°, or subtract 180° if it is more than 180°.",
        exemplarAnswer: "Since 075° is less than 180°, add 180°: Back-bearing = 075° + 180° = 255°. This is because turning around to go back is a 180° half-circle turn."
      },
      {
        prompt: "3. Right Triangle Navigation Check",
        subtext: "If a boat sails 6 km due North (000°) and then 8 km due East (090°), use the Pythagorean theorem (a² + b² = c²) to calculate its straight-line distance from the starting harbor.",
        exemplarAnswer: "Distance = √(6² + 8²) = √(36 + 64) = √100 = 10.0 km."
      }
    ],
    realWorldScenario: {
      title: "Hiking Orienteering with a Map and Compass",
      scenario: "A group of scouts at a summer camp are navigating through a forest to find a hidden checkpoint 4 km away on a bearing of 045° (North-East).",
      task: "Explain how using a compass bearing keeps the hikers walking in a straight line toward the target even when thick trees block their view.",
      exemplarAnswer: "By holding the compass level and aligning the direction-of-travel arrow with 045° on the rotating bezel, the hikers can sight a distinctive distant tree or landmark along that exact heading and walk toward it, ensuring they stay on the correct line of travel."
    }
  },

  "sim-angle-elevation-depression": {
    drivingQuestion: "How do right triangles and tangent ratios (tan θ = opposite / adjacent) allow us to measure the heights of tall objects from the ground?",
    hypothesisPrompt: "If you stand 20 meters away from a tall tree and look up at the top with a clinometer at an angle of 45°, predict the height of the tree compared to your distance. (Hint: What is tan(45°)?)",
    tableHeaders: ["Trial", "Object Measured", "Distance from Base (d)", "Angle of Elevation (θ)", "tan(θ) Value", "Height Above Eye Level (d × tan θ)", "Observer Eye Height (h₀)", "Total Calculated Height (H)"],
    tableRows: [
      ["1", "School Flagpole", "15.0 m", "38.5°", "0.795", "11.93 m", "1.60 m", "13.53 m"],
      ["2", "Gymnasium Wall", "20.0 m", "45.0°", "1.000", "20.00 m", "1.60 m", "21.60 m"],
      ["3", "Library Clock Tower", "30.0 m", "52.0°", "1.280", "38.40 m", "1.65 m", "40.05 m"],
      ["4", "Tall Pine Tree", "25.0 m", "30.0°", "0.577", "14.43 m", "1.50 m", "15.93 m"],
      ["5", "Hilltop View (Angle of Depression)", "40.0 m (horizontal)", "25.0°", "0.466", "18.64 m (below eye)", "1.50 m", "Cliff Height = 20.14 m"]
    ],
    criticalQuestions: [
      {
        prompt: "1. The Tangent Ratio Formula",
        subtext: "In a right triangle, tan(θ) = Opposite / Adjacent = (Height above eye) / Distance. Using Trial 2 (d = 20.0 m, θ = 45°), explain why the height above eye level is exactly equal to the distance when the angle is 45°.",
        exemplarAnswer: "tan(45°) = 1.0. When tan(θ) = 1, Opposite ÷ Adjacent = 1, meaning Opposite = Adjacent. Therefore, the height above eye level is equal to the horizontal distance (20.0 m)."
      },
      {
        prompt: "2. Why Must We Add Eye Height?",
        subtext: "The clinometer is held at eye level (for example, h₀ = 1.6 meters above the ground). Why must you add 1.6 m to the calculated triangle height to find the true total height of the tree?",
        exemplarAnswer: "The right triangle created by your sightline starts at your eyes, not at the ground. Adding the observer's eye height accounts for the distance between the ground and your eye level."
      },
      {
        prompt: "3. Angle of Elevation vs. Angle of Depression",
        subtext: "If a lifeguard sitting on an elevated tower looks down at a swimmer at an angle of depression of 20°, explain why the swimmer looking up at the lifeguard sees an angle of elevation of exactly 20°.",
        exemplarAnswer: "The horizontal line from the lifeguard's eyes and the horizontal water surface are parallel. The line of sight is a transversal cutting across them. Because alternate interior angles between parallel lines are equal, the angle of depression equals the angle of elevation (20°)."
      }
    ],
    realWorldScenario: {
      title: "Measuring a Tall Tree Without Climbing It",
      scenario: "A park ranger needs to check if a tall redwood tree is in danger of falling onto a nearby park trail.",
      task: "If the ranger stands 30 meters from the base of the tree, sights the top at an angle of elevation of 40°, and has an eye height of 1.7 meters, calculate the total tree height. (Use tan(40°) ≈ 0.839).",
      exemplarAnswer: "Height above eye = distance × tan(40°) = 30 m × 0.839 = 25.17 m. Total tree height = 25.17 m + 1.7 m = 26.87 meters."
    }
  },

  "sim-longitude-and-latitude": {
    drivingQuestion: "How do lines of latitude (parallels) and longitude (meridians) create a global grid for finding locations, measuring distances, and telling time around the world?",
    hypothesisPrompt: "Earth rotates 360° in 24 hours. Predict how many degrees of longitude correspond to a 1-hour time difference between two cities. What line of latitude divides the Earth into the Northern and Southern hemispheres?",
    tableHeaders: ["Location / City", "Latitude (North / South)", "Longitude (East / West)", "Hemisphere", "Distance from Equator (Approx)", "Time Difference from Prime Meridian (UTC 0°)"],
    tableRows: [
      ["London, UK", "51.5° N", "0.0° (Prime Meridian)", "Northern / Eastern", "5,720 km", "0 hours (UTC+0)"],
      ["Accra, Ghana", "5.6° N", "0.0° (Prime Meridian)", "Northern / Eastern", "620 km", "0 hours (UTC+0)"],
      ["New York, USA", "40.7° N", "74.0° W", "Northern / Western", "4,520 km", "-5 hours (UTC-5)"],
      ["Tokyo, Japan", "35.7° N", "139.7° E", "Northern / Eastern", "3,960 km", "+9 hours (UTC+9)"],
      ["Sydney, Australia", "33.9° S", "151.2° E", "Southern / Eastern", "3,760 km", "+10 hours (UTC+10)"],
      ["Equator (0° Lat)", "0.0°", "Any", "Equatorial", "0 km", "Varies by longitude"]
    ],
    criticalQuestions: [
      {
        prompt: "1. Latitude vs. Longitude Differences",
        subtext: "Explain the difference between lines of latitude (parallels) and lines of longitude (meridians). Which ones run East-West, and which ones run North-South?",
        exemplarAnswer: "Lines of latitude run East-West around the globe and measure distance North or South of the Equator (0°). Lines of longitude run North-South from the North Pole to the South Pole and measure distance East or West of the Prime Meridian (0°)."
      },
      {
        prompt: "2. Calculating Time Zones from Longitude",
        subtext: "Since the Earth rotates 360° in 24 hours, calculate how many degrees of longitude equal 1 hour of time difference (360° ÷ 24). If City A is at 15° E and City B is at 45° E, how many hours apart are they?",
        exemplarAnswer: "360° ÷ 24 hours = 15° per hour. The difference between 45° E and 15° E is 30°. Since 30° ÷ 15° = 2 hours, City B is 2 hours ahead of City A."
      },
      {
        prompt: "3. Equator and Prime Meridian Landmarks",
        subtext: "What is the latitude of the Equator? What is the longitude of the Prime Meridian in Greenwich, London? What happens to latitude as you reach the North Pole?",
        exemplarAnswer: "The Equator is at 0° latitude. The Prime Meridian is at 0° longitude. As you travel from the Equator toward the North Pole, latitude increases from 0° up to 90° N at the North Pole."
      }
    ],
    realWorldScenario: {
      title: "Calling Family Across Global Time Zones",
      scenario: "A student in Los Angeles, California (120° W longitude, UTC-8) wants to video call their grandparents in London (0° longitude, UTC+0).",
      task: "If it is 4:00 PM on Tuesday in Los Angeles, calculate what time and day it is in London.",
      exemplarAnswer: "London is 8 hours ahead of Los Angeles. 4:00 PM + 8 hours = 12:00 Midnight (start of Wednesday) in London."
    }
  },

  "sim-3d-conic-integral-calculus": {
    drivingQuestion: "How does slicing a 3D solid (like a cone or sphere) into thin circular disks help us understand and calculate its total volume?",
    hypothesisPrompt: "If you approximate the volume of a 3D cone by stacking 10 thick circular disks versus stacking 100 thin circular disks, predict which estimate will be closer to the exact smooth volume and why.",
    tableHeaders: ["Trial", "3D Shape", "Base Radius (r)", "Height (h)", "Number of Slices (Disks)", "Approximated Disk Volume", "Exact Formula Volume", "Accuracy / Observation"],
    tableRows: [
      ["1", "Cylinder", "r = 3 units", "h = 5 units", "10 slices", "V ≈ 141.4", "V = πr²h ≈ 141.37", "Exact match (straight sides)"],
      ["2", "Cone", "r = 3 units", "h = 6 units", "5 slices", "V ≈ 63.2", "V = 1/3 πr²h ≈ 56.55", "Overestimate (steps stick out)"],
      ["3", "Cone", "r = 3 units", "h = 6 units", "50 slices", "V ≈ 57.1", "V = 1/3 πr²h ≈ 56.55", "Very close (< 1% error)"],
      ["4", "Sphere (Ball)", "Radius R = 3 units", "Diameter = 6", "10 slices", "V ≈ 118.2", "V = 4/3 πR³ ≈ 113.10", "Approaching smooth sphere"],
      ["5", "Sphere (Ball)", "Radius R = 3 units", "Diameter = 6", "100 slices", "V ≈ 113.6", "V = 4/3 πR³ ≈ 113.10", "Extremely accurate"]
    ],
    criticalQuestions: [
      {
        prompt: "1. The Volume of a Cone vs. a Cylinder",
        subtext: "Look at the formulas for a cylinder (V = πr²h) and a cone (V = 1/3 πr²h) with the same base radius and height. How many full cones of water would it take to fill the cylinder?",
        exemplarAnswer: "Because a cone is exactly 1/3 the volume of a cylinder with the same radius and height, it takes exactly 3 full cones of water to fill the cylinder."
      },
      {
        prompt: "2. Why Do More Slices Give a Better Answer?",
        subtext: "In Trials 2 and 3, what happened to the volume approximation when we increased the number of slices from 5 to 50? Explain why thinner slices reduce the error.",
        exemplarAnswer: "With fewer thick slices, the square edges of the disks stick out past the sloped edge of the cone, creating extra volume. As slices get thinner and more numerous, the jagged stepped edges shrink and match the smooth curved surface of the cone."
      },
      {
        prompt: "3. Calculating the Volume of a Sphere",
        subtext: "Using the formula V = 4/3 π R³, calculate the volume of a basketball with radius R = 12 cm. (Use π ≈ 3.14).",
        exemplarAnswer: "V = (4/3) × 3.14 × (12)³ = (4/3) × 3.14 × 1728 = 4 × 3.14 × 576 ≈ 7,234.56 cm³."
      }
    ],
    realWorldScenario: {
      title: "Measuring Ice Cream Cones and Soda Cans",
      scenario: "An ice cream shop wants to calculate how much ice cream fits inside a waffle cone of radius r = 3 cm and height h = 10 cm.",
      task: "Calculate the volume of the cone using V = 1/3 π r² h, and compare it to a cylindrical cup of the same dimensions.",
      exemplarAnswer: "Cone volume = 1/3 × 3.14 × (3)² × 10 = 1/3 × 3.14 × 9 × 10 = 3 × 3.14 × 10 = 94.2 cm³. A cylindrical cup with the same base and height holds 3 times as much: 94.2 × 3 = 282.6 cm³."
    }
  },

  "sim-set-theory-venn-diagrams": {
    drivingQuestion: "How do Venn diagrams and set operations (Union, Intersection, Set Difference, and Complement) help us organize, categorize, and solve logical counting problems?",
    hypothesisPrompt: "If Set A has 5 elements and Set B has 4 elements with 2 elements shared in both, predict the total number of unique elements in the union (A ∪ B) and test the inclusion-exclusion formula |A ∪ B| = |A| + |B| - |A ∩ B|.",
    tableHeaders: ["Trial", "Scenario / Operation", "Universal Set (U)", "Set Definitions (A, B, C)", "Set Operation Evaluated", "Resulting Set Elements", "Cardinality |Result|", "Formula Check / Rule"],
    tableRows: [
      ["1", "Standard Overlap (2 Sets)", "U = {1..10}", "A={1,2,3,4,5}, B={4,5,6,7}", "Union: A ∪ B", "{1, 2, 3, 4, 5, 6, 7}", "7", "|A∪B| = 5 + 4 - 2 = 7"],
      ["2", "Intersection (2 Sets)", "U = {1..10}", "A={1,2,3,4,5}, B={4,5,6,7}", "Intersection: A ∩ B", "{4, 5}", "2", "Shared elements common to both"],
      ["3", "Set Difference (A - B)", "U = {1..10}", "A={1,2,3,4,5}, B={4,5,6,7}", "Difference: A - B", "{1, 2, 3}", "3", "Elements in A but not in B"],
      ["4", "Complement of A (A')", "U = {1..10}", "A={1,2,3,4,5}, B={4,5,6,7}", "Complement: A'", "{6, 7, 8, 9, 10}", "5", "|A'| = |U| - |A| = 10 - 5 = 5"],
      ["5", "Disjoint Sets", "U = {1..8}", "A={1,2,3}, B={4,5,6}", "Intersection: A ∩ B", "∅ (Empty set)", "0", "Mutually exclusive (no overlap)"],
      ["6", "Triple Intersection (3 Sets)", "U = {1..10}", "A={1..5}, B={4..7}, C={5,6,8,9}", "A ∩ B ∩ C", "{5}", "1", "Element 5 is in all 3 sets"]
    ],
    criticalQuestions: [
      {
        prompt: "1. The Principle of Inclusion-Exclusion (2 Sets)",
        subtext: "Look at Trials 1 and 2 in your data table. Set A has 5 elements (|A|=5) and Set B has 4 elements (|B|=4). Why is the union |A ∪ B| equal to 7 rather than 5 + 4 = 9? State the inclusion-exclusion formula.",
        exemplarAnswer: "The elements 4 and 5 belong to both sets (the intersection A ∩ B, cardinality 2). If we simply add |A| + |B|, these shared elements would be counted twice. Subtracting the overlap gives |A ∪ B| = |A| + |B| - |A ∩ B| = 5 + 4 - 2 = 7."
      },
      {
        prompt: "2. Distinguishing Set Difference (A - B) from Complement (A')",
        subtext: "Explain the difference between finding the set difference A - B and finding the complement A'. Which universal elements are included in each?",
        exemplarAnswer: "A - B includes only elements that belong to Set A and are removed if they appear in B (elements {1, 2, 3}). The complement A' includes all elements in the entire Universal Set U that do not belong to A ({6, 7, 8, 9, 10})."
      },
      {
        prompt: "3. Analyzing 3-Set Overlaps",
        subtext: "In a class survey of 30 students, 15 play soccer, 12 play basketball, and 10 swim. If 2 students play all three sports, explain how a 3-circle Venn diagram prevents double-counting.",
        exemplarAnswer: "A 3-set Venn diagram partitions the universe into 8 mutually exclusive regions (3 exclusive sets, 3 pairwise overlaps, 1 triple overlap, and 1 exterior region). Starting with the center triple intersection allows each region's exact count to be determined without double-counting students who participate in multiple activities."
      }
    ],
    realWorldScenario: {
      title: "School Club & Sports Survey",
      scenario: "A high school counselor surveys 100 students about their after-school activities: 45 join the Science Club (S), 40 join the Music Band (M), and 20 are in both clubs.",
      task: "Using set operations, calculate how many students are in at least one club (S ∪ M) and how many students are not enrolled in either club (S ∪ M)'.",
      exemplarAnswer: "Students in at least one club: |S ∪ M| = |S| + |M| - |S ∩ M| = 45 + 40 - 20 = 65 students. Students not enrolled in either club: |(S ∪ M)'| = |U| - |S ∪ M| = 100 - 65 = 35 students."
    }
  },

  "sim-geometric-transformations-rotation": {
    drivingQuestion: "How do rigid motions (rotations, reflections, translations) and non-rigid transformations (dilations) change the coordinates, side lengths, and orientation of 2D geometric shapes?",
    hypothesisPrompt: "If a triangle with vertices at (2,2), (6,2), and (4,6) is rotated 90° counterclockwise about the origin (0,0), predict the new coordinates of its vertices. Which transformations preserve side lengths and angles (isometries), and which change size?",
    tableHeaders: ["Trial", "Transformation Type", "Parameters / Center", "Pre-Image Point A", "Image Point A'", "Pre-Image Point B", "Image Point B'", "Algebraic Mapping Rule"],
    tableRows: [
      ["1 (Rotation 90° CCW)", "Rotation", "θ = 90°, Center (0,0)", "(2.0, 2.0)", "(-2.0, 2.0)", "(6.0, 2.0)", "(-2.0, 6.0)", "(x, y) → (-y, x)"],
      ["2 (Rotation 180°)", "Rotation", "θ = 180°, Center (0,0)", "(2.0, 2.0)", "(-2.0, -2.0)", "(6.0, 2.0)", "(-6.0, -2.0)", "(x, y) → (-x, -y)"],
      ["3 (Translation)", "Translation", "Δx = +3, Δy = +2", "(2.0, 2.0)", "(5.0, 4.0)", "(6.0, 2.0)", "(9.0, 4.0)", "(x, y) → (x + 3, y + 2)"],
      ["4 (Reflection X-Axis)", "Reflection", "Line y = 0 (X-axis)", "(2.0, 2.0)", "(2.0, -2.0)", "(6.0, 2.0)", "(6.0, -2.0)", "(x, y) → (x, -y)"],
      ["5 (Reflection y = x)", "Reflection", "Line y = x", "(2.0, 2.0)", "(2.0, 2.0)", "(6.0, 2.0)", "(2.0, 6.0)", "(x, y) → (y, x)"],
      ["6 (Dilation Scale 2×)", "Dilation", "k = 2.0, Center (0,0)", "(2.0, 2.0)", "(4.0, 4.0)", "(6.0, 2.0)", "(12.0, 4.0)", "(x, y) → (2x, 2y)"]
    ],
    criticalQuestions: [
      {
        prompt: "1. Rigid Motions and Congruence (Isometries)",
        subtext: "Compare Trials 1 through 5 (rotations, translations, reflections) with Trial 6 (dilation). Why are rotations, translations, and reflections classified as rigid motions (isometries), and how does the image triangle compare to the pre-image in congruence and angle measures?",
        exemplarAnswer: "Rigid motions (isometries) preserve both Euclidean distance between points and interior angle measures. Therefore, the image triangle produced by rotations, translations, and reflections is strictly congruent (identical size and shape) to the pre-image. In contrast, dilations scale distances by factor k, preserving angles and shape to produce similar, but not congruent, figures."
      },
      {
        prompt: "2. Algebraic Rules for Rotations About the Origin",
        subtext: "Analyze the coordinate changes in Trial 1 (90° CCW rotation) and Trial 2 (180° rotation). If a vertex is located at (x, y) = (5, -3), determine its new coordinates after a 90° CCW rotation and after a 270° CCW (or 90° CW) rotation.",
        exemplarAnswer: "For a 90° CCW rotation, the rule is (x, y) → (-y, x), which transforms (5, -3) to (-(-3), 5) = (3, 5). For a 270° CCW (or 90° CW) rotation, the rule is (x, y) → (y, -x), which transforms (5, -3) to (-3, -5)."
      },
      {
        prompt: "3. Effect of Moving the Center of Rotation / Dilation",
        subtext: "In the simulation, drag the yellow pivot marker from (0,0) to (2,2). How does rotating or dilating a polygon about one of its own vertices compare to rotating or dilating about the coordinate origin?",
        exemplarAnswer: "When the center of rotation or dilation is placed directly on vertex A (2,2), point A remains completely invariant (fixed in place at (2,2)), while all other vertices swing or scale around point A as the pivot anchor."
      }
    ],
    realWorldScenario: {
      title: "Video Game Computer Graphics & Robotic Arm Kinematics",
      scenario: "A 2D video game engine renders a spaceship polygon that needs to rotate 90° when turning and translate forward by Δx = 10 units. Meanwhile, a robotic manufacturing arm rotates its gripper tool around an elbow joint pivot (x₀, y₀).",
      task: "Explain how transformation matrices and coordinate rules allow game engines and robot controllers to compute the exact positions of vertices in real time.",
      exemplarAnswer: "Graphics engines and robotic kinematics software represent polygon vertices as coordinate vectors and multiply them by 2D transformation matrices (or apply affine translation/rotation formulas). By shifting the origin to the elbow joint (x - x₀, y - y₀), applying trigonometric rotation [cos θ, -sin θ; sin θ, cos θ], and shifting back, the controller computes the real-time position of every vertex instantaneously."
    }
  },

  "sim-advanced-multi-step-geometric-transformation": {
    drivingQuestion: "How do composite (multi-step) geometric transformations modify shapes sequentially, and why does the order of transformation operations often yield completely different final images?",
    hypothesisPrompt: "If you apply a reflection over the Y-axis followed by a 90° counterclockwise rotation about the origin, predict the final coordinates of a triangle. Will performing the rotation first and the reflection second result in the same image (are geometric compositions commutative)?",
    tableHeaders: ["Pipeline Stage", "Step Description", "Transformation Type", "Rule Applied", "Point A (2,2)", "Point B (6,2)", "Point C (4,6)", "Congruence Status"],
    tableRows: [
      ["Initial", "Pre-Image", "Baseline", "(x, y)", "(2.0, 2.0)", "(6.0, 2.0)", "(4.0, 6.0)", "Original Object"],
      ["Step 1", "Reflection over Y-Axis", "Reflection", "(x, y) → (-x, y)", "(-2.0, 2.0)", "(-6.0, 2.0)", "(-4.0, 6.0)", "Congruent (Orientation Reversed)"],
      ["Step 2 (Final)", "Rotation 90° CCW about (0,0)", "Rotation", "(x, y) → (-y, x)", "(-2.0, -2.0)", "(-2.0, -6.0)", "(-6.0, -4.0)", "Congruent (Preserves Lengths)"],
      ["Alternative 1", "Rotation 90° CCW first", "Rotation", "(x, y) → (-y, x)", "(-2.0, 2.0)", "(-2.0, 6.0)", "(-6.0, 4.0)", "Congruent Intermediate"],
      ["Alternative 2", "Then Reflection over Y-Axis", "Reflection", "(x, y) → (-x, y)", "(2.0, 2.0)", "(2.0, 6.0)", "(6.0, 4.0)", "Different Final Position! (Non-commutative)"],
      ["Glide Preset", "Reflect X-Axis + Trans (+4, 0)", "Glide Reflection", "(x, y) → (x + 4, -y)", "(6.0, -2.0)", "(10.0, -2.0)", "(8.0, -6.0)", "Congruent (Glide Reflection)"]
    ],
    criticalQuestions: [
      {
        prompt: "1. Non-Commutative Nature of Geometric Compositions",
        subtext: "Analyze the difference between the Step 1 → Step 2 pipeline (Reflect Y then Rotate 90°) versus Alternative 1 → Alternative 2 (Rotate 90° then Reflect Y). Explain algebraically why matrix multiplication and transformation composition are generally non-commutative (T₁ ∘ T₂ ≠ T₂ ∘ T₁).",
        exemplarAnswer: "Composing transformations is equivalent to matrix multiplication. Because matrix multiplication is non-commutative (A × B ≠ B × A), applying reflection R followed by rotation S modifies the coordinates differently than applying rotation S followed by reflection R. In the first case, (x, y) becomes (-x, y) then (-y, -x); in the second case, (x, y) becomes (-y, x) then (y, x), producing two distinct quadrants."
      },
      {
        prompt: "2. Structure and Geometry of a Glide Reflection",
        subtext: "Click the 'Glide Reflection' preset in the pipeline. How is a glide reflection defined, and why can it not be simplified into a single pure rotation, translation, or reflection alone?",
        exemplarAnswer: "A glide reflection is the composite of a reflection across a line L and a translation parallel to line L. Because the orientation is flipped (opposite isometry) and no invariant fixed point exists on the line unless distance is zero, it represents an irreducible distinct class of 2D Euclidean isometries that cannot be reduced to a pure translation or pure rotation."
      },
      {
        prompt: "3. Intermediate Stages and Phantom Geometry",
        subtext: "Observe the purple phantom shapes displayed between steps. Why is tracking intermediate states valuable when diagnosing multi-joint robotic movements or multi-pass CAD transformations?",
        exemplarAnswer: "Intermediate states allow engineers and animators to verify clearance envelopes, collision paths, and boundary conditions during motion execution, preventing robotic arms or virtual components from intersecting obstacles during transition phases."
      }
    ],
    realWorldScenario: {
      title: "Automated CNC Milling and Footstep Animation Sequences",
      scenario: "A digital character animator needs to generate a realistic walking sequence (footprint tracks) along a curved path using glide reflections, while a CNC 5-axis milling machine must reposition a workpiece through sequential rotations and translations.",
      task: "Using composite transformation notation, explain how chaining discrete transformation steps in a precise pipeline ensures repeatable positioning without spatial error accumulation.",
      exemplarAnswer: "By defining a pipeline where each step is represented by an affine matrix T_total = T_n × ... × T_2 × T_1, the CNC controller or animation engine computes vertex paths deterministically. For walking footprints, each step is a glide reflection (alternating foot mirror + forward translation). Chaining transformation matrices allows the software to execute complex multi-axis motion smoothly and with mathematical precision."
    }
  },

  "sim-unit-circle-trigonometry": {
    drivingQuestion: "How does counterclockwise rotation on the unit circle define trigonometric functions (cosine, sine, tangent), radian measurements, harmonic wave oscillations, and electromagnetic phasors?",
    hypothesisPrompt: "If you rotate a radius vector around a unit circle (R = 1) from 0° to 360°, predict how the horizontal projection (x), vertical projection (y), and slope ratio (y/x) will vary across the four quadrants. What happens to tan θ as θ approaches 90° and 270°?",
    tableHeaders: ["Trial / Angle (θ)", "Radians (rad)", "Quadrant", "Cosine (x = cos θ)", "Sine (y = sin θ)", "Tangent (y/x = tan θ)", "Harmonic Wave Height", "Real Phasor E(t)"],
    tableRows: [
      ["0°", "0.000 rad (0.00π)", "Positive X-Axis", "1.0000", "0.0000", "0.0000", "0.0000 (Node)", "+1.0000 (Peak)"],
      ["30°", "0.524 rad (0.17π)", "Quadrant I", "0.8660 (√3/2)", "0.5000 (1/2)", "0.5774 (1/√3)", "+0.5000", "+0.8660"],
      ["45°", "0.785 rad (0.25π)", "Quadrant I", "0.7071 (√2/2)", "0.7071 (√2/2)", "1.0000", "+0.7071", "+0.7071"],
      ["90°", "1.571 rad (0.50π)", "Positive Y-Axis", "0.0000", "1.0000", "Undefined (÷0)", "+1.0000 (Crest)", "0.0000 (Node)"],
      ["135°", "2.356 rad (0.75π)", "Quadrant II", "-0.7071", "+0.7071", "-1.0000", "+0.7071", "-0.7071"],
      ["180°", "3.142 rad (1.00π)", "Negative X-Axis", "-1.0000", "0.0000", "0.0000", "0.0000 (Node)", "-1.0000 (Trough)"],
      ["270°", "4.712 rad (1.50π)", "Negative Y-Axis", "0.0000", "-1.0000", "Undefined (÷0)", "-1.0000 (Trough)", "0.0000 (Node)"],
      ["360°", "6.283 rad (2.00π)", "Full Circle Cycle", "1.0000", "0.0000", "0.0000", "0.0000 (Cycle Complete)", "+1.0000 (Peak)"]
    ],
    criticalQuestions: [
      {
        prompt: "1. Geometric Meaning of Cosine and Sine on the Unit Circle",
        subtext: "On a circle with radius R = 1 centered at (0,0), explain why any point on the perimeter has coordinates (x, y) = (cos θ, sin θ). Why does the Pythagorean Theorem directly yield the identity cos²(θ) + sin²(θ) = 1?",
        exemplarAnswer: "In a right triangle with hypotenuse equal to the radius R = 1, cos θ = adjacent / hypotenuse = x / 1 = x, and sin θ = opposite / hypotenuse = y / 1 = y. Applying the Pythagorean theorem x² + y² = R² to the coordinates on the unit circle directly proves the fundamental Pythagorean trigonometric identity cos²(θ) + sin²(θ) = 1 for all real angles θ."
      },
      {
        prompt: "2. Asymptotic Discontinuities of the Tangent Function",
        subtext: "Observe the behavior of the tangent value as the angle moves from 89.0° to 90.0° and then to 91.0°. Why is tan(90°) undefined geometrically and algebraically?",
        exemplarAnswer: "Algebraically, tan θ = sin θ / cos θ. At 90°, cos(90°) = 0, which results in division by zero (1 / 0), creating a vertical asymptote where tan θ approaches +∞ from the left and -∞ from the right. Geometrically, the terminal ray is vertical (parallel to the vertical tangent line x = 1), so it never intersects the tangent line."
      },
      {
        prompt: "3. Physical Translation: Connecting Circular Motion to Harmonic Waves & Phasors",
        subtext: "Switch between the 'Wave Plot' and 'EM Phasor' view modes in the simulation. How does the vertical position on the unit circle generate a sinusoidal wave, and how does the horizontal projection model real physical quantities in electrical circuits and electromagnetic waves?",
        exemplarAnswer: "In the Wave Plot mode, mapping the vertical coordinate y = sin(θ) continuously against linear angle progression unwraps circular rotation into a transverse sine wave, illustrating simple harmonic motion. In EM Phasor mode, the real-axis horizontal projection x = cos(θ) models physical measurable quantities like alternating voltage V(t) = V₀ cos(ωt) or electric field oscillations E(t) = E₀ cos(ωt) in electromagnetic radiation."
      }
    ],
    realWorldScenario: {
      title: "AC Electrical Grid Transmission & Wireless Signal Phasors",
      scenario: "Electrical power engineers model alternating current (AC) grid voltage V(t) = V_peak cos(ωt + φ) as a rotating 60 Hz phasor, while wireless communication transmitters resolve transmitted radio waves into In-phase (I = A cos θ) and Quadrature (Q = A sin θ) components on an IQ constellation diagram.",
      task: "Explain how the unit circle's Cartesian projections (x = cos θ, y = sin θ) provide the foundational mathematical framework for signal processing, modulation, and electrical impedance analysis.",
      exemplarAnswer: "By modeling periodic electrical signals as rotating vectors on the complex plane (Euler's formula e^(iθ) = cos θ + i sin θ), engineers can perform vector addition of voltages, calculate phase angles φ, determine real power (P = VI cos φ), and encode digital data into phase and amplitude constellations (such as QAM modulation in 5G WiFi) without solving complex differential equations in the time domain."
    }
  },

  "sim-lissajous-curves": {
    drivingQuestion: "How do parametric trigonometric equations x(t) = A·sin(a·t + δ) and y(t) = B·sin(b·t) generate Lissajous curves, and how do frequency ratios and phase shifts determine algebraic closed orbits and Chebyshev polynomials?",
    hypothesisPrompt: "If you adjust the horizontal and vertical frequency values from a:b = 1:1 to 1:2 and 3:2 while varying the phase angle δ from 0° to 90°, predict how the number of horizontal and vertical intersections and line symmetry will change.",
    tableHeaders: ["Parametric Preset", "Freq a (x)", "Freq b (y)", "Ratio (a:b)", "Phase Shift (δ)", "Parametric Form x(t), y(t)", "Cartesian Algebraic Form", "Symmetry & Intersections"],
    tableRows: [
      ["Linear Degenerate", "1", "1", "1:1", "0° (0 rad)", "x = sin(t), y = sin(t)", "y = x (Straight Line)", "Line segment along diagonal y=x, [-1, 1]"],
      ["Orthogonal Circle", "1", "1", "1:1", "90° (π/2 rad)", "x = cos(t), y = sin(t)", "x² + y² = 1 (Unit Circle)", "Rotational continuous symmetry around origin"],
      ["Tilted Ellipse", "1", "1", "1:1", "45° (π/4 rad)", "x = sin(t + π/4), y = sin(t)", "x² - √2 xy + y² = 1/2", "Elliptical closed orbit with 45° tilt"],
      ["Parabolic Curve", "1", "2", "1:2", "0° (0 rad)", "x = sin(t), y = sin(2t)", "y² = 4x²(1 - x²)", "Figure-8 lemniscate with origin self-crossing"],
      ["Chebyshev Parabola", "1", "2", "1:2", "90° (π/2 rad)", "x = cos(t), y = cos(2t)", "y = 2x² - 1 (T₂(x))", "Open parabolic arc spanning x ∈ [-1, 1]"],
      ["Knot Harmonic 3:2", "3", "2", "3:2", "90° (π/2 rad)", "x = cos(3t), y = sin(2t)", "Degree 6 Algebraic Curve", "3 horizontal lobes, 2 vertical lobes"],
      ["Complex Grid 3:4", "3", "4", "3:4", "90° (π/2 rad)", "x = cos(3t), y = sin(4t)", "Degree 12 Algebraic Curve", "3 horizontal lobes, 4 vertical lobes"]
    ],
    criticalQuestions: [
      {
        prompt: "1. Eliminating Parameter t to Derive Cartesian Equations",
        subtext: "When a = 1, b = 2, and δ = 90°, x(t) = cos(t) and y(t) = cos(2t). Use the trigonometric double-angle identity cos(2t) = 2cos²(t) - 1 to eliminate the parameter t and write the curve as a direct Cartesian polynomial y = f(x).",
        exemplarAnswer: "Using the double-angle identity y(t) = cos(2t) = 2cos²(t) - 1. Since x(t) = cos(t), substituting x gives y = 2x² - 1 for domain x ∈ [-1, 1]. This is the second-degree Chebyshev polynomial T₂(x), tracing a parabolic curve back and forth across the interval."
      },
      {
        prompt: "2. Frequency Ratios, Tangencies, and Periodicity",
        subtext: "Explain why any rational frequency ratio a/b = p/q (where p and q are coprime positive integers) produces a periodic, closed algebraic curve with fundamental period T = 2π / gcd(a, b). How do the values p and q relate to the number of vertical and horizontal boundary tangencies?",
        exemplarAnswer: "Because both sin(at) and sin(bt) are periodic functions, if a/b is a rational number p/q, the least common multiple period T = 2π / gcd(a,b) guarantees that the point (x(t), y(t)) returns precisely to its initial position after time T. The curve touches the vertical boundaries x = ±A exactly 'a' times per period and touches the horizontal boundaries y = ±B exactly 'b' times per period."
      },
      {
        prompt: "3. Topological Knots and 3D Lissajous Projections",
        subtext: "In higher mathematics, when a third harmonic oscillation z(t) = C sin(c·t + γ) is added along a perpendicular z-axis, the resulting 3D curve can form non-intersecting Lissajous knots. Why are Lissajous figures fundamental to topology, Fourier analysis, and signal synthesis?",
        exemplarAnswer: "Lissajous curves provide visual realizations of Fourier basis projections (superposition of orthogonal sine and cosine modes). In knot theory, 3D Lissajous curves form billiard knots inside rectangular prisms. In signal analysis, they represent the geometric trajectory of complex vector spaces and orthogonal harmonic decompositions."
      }
    ],
    realWorldScenario: {
      title: "Computer Graphics Parametric Rendering & Laser Light Shows",
      scenario: "Digital animators and laser light show projectors use two galvanometers (mirror motors driven by sinusoidal voltage signals) to steer a single laser beam onto auditorium screens to draw smooth geometric patterns without sharp discontinuities.",
      task: "Explain how programming specific frequency ratios and phase shifts allows laser technicians to render complex symmetric figures, rosettes, and logos in real time using pure trigonometric equations.",
      exemplarAnswer: "A laser galvanometer deflects the beam along X and Y axes using precise analog voltages V_x(t) and V_y(t). By supplying sinusoidal signals with synchronized frequency ratios (e.g. 3:2 or 5:4) and controlled phase offsets δ, the single moving laser dot traces out continuous, seamless closed Lissajous curves fast enough (above human persistence of vision ~60 Hz) that the human eye perceives a glowing, solid geometric logo or animated pattern."
    }
  },

  "sim-statistical-data-lab": {
    drivingQuestion: "How do measures of central tendency and dispersion quantify the distribution of empirical datasets, and how do formula substitutions reveal the mathematical mechanics of variance and standard deviation?",
    hypothesisPrompt: "If you introduce a significant positive outlier (e.g., changing a single value in a dataset from 15 to 95), predict which statistical metrics (Mean, Median, Mode, Range, Variance, Standard Deviation) will change drastically and which will remain resistant.",
    tableHeaders: ["Dataset / Trial", "Sample Size (n)", "Data Type", "Mean (μ)", "Median", "Mode", "Variance (σ²)", "Std Dev (σ)", "Range", "Distribution Shape"],
    tableRows: [
      ["Baseline Discrete [2, 4, 6, 8, 10, 12, 14, 16]", "8", "Discrete", "9.00", "9.00", "No Mode", "21.00", "4.58", "14.00", "Uniform / Symmetric"],
      ["Right-Skewed with Outlier [2, 4, 6, 8, 10, 12, 14, 80]", "8", "Discrete", "17.00", "9.00", "No Mode", "591.25", "24.32", "78.00", "Heavily Right-Skewed"],
      ["Bimodal Clustering [5, 5, 5, 6, 18, 19, 20, 20]", "8", "Discrete", "12.25", "12.00", "5, 20 (freq 3/2)", "47.44", "6.89", "15.00", "Bimodal Dual-Peak"],
      ["Zero-Variance Identical [12, 12, 12, 12, 12, 12, 12, 12]", "8", "Discrete", "12.00", "12.00", "12 (freq 8)", "0.00", "0.00", "0.00", "Degenerate / Single Point"],
      ["Continuous Random Sample (n = 15, Range [10-50])", "15", "Continuous", "31.42", "30.15", "No Mode", "142.80", "11.95", "38.20", "Continuous Binned Spread"]
    ],
    criticalQuestions: [
      {
        prompt: "1. Resistant vs. Non-Resistant Statistical Measures",
        subtext: "Compare how the Mean (μ) and Median responded when the outlier (80) was introduced in Trial 2. Why is the median considered a 'resistant' (robust) statistic while the mean and standard deviation are non-resistant?",
        exemplarAnswer: "The Mean increased from 9.00 to 17.00 (+88.9%) and the Variance exploded from 21.00 to 591.25 because the arithmetic mean incorporates the magnitude of every data point into its sum Σx_i, and variance squares the extreme deviation (80 - 17)² = 3969. In contrast, the Median remained exactly 9.00 because it only depends on the ordinal rank position of the middle values, ignoring the magnitude of extreme boundary values."
      },
      {
        prompt: "2. The Mathematical Mechanics of Variance: Why We Square Deviations",
        subtext: "In the dynamic formula card for Variance σ² = Σ(x_i - μ)² / n, why do we square each difference (x_i - μ) before summing, instead of just taking the simple sum of deviations Σ(x_i - μ)?",
        exemplarAnswer: "By the fundamental definition of the mean, the sum of signed deviations Σ(x_i - μ) is always identically equal to zero because positive deviations above the mean exactly cancel negative deviations below the mean. Squaring deviations eliminates negative signs, ensuring all discrepancies contribute positively, while also heavily penalizing larger deviations proportionally to distance from the center."
      },
      {
        prompt: "3. Discrete Bar Chart vs. Binned Histogram & Frequency Polygon",
        subtext: "Explain the conceptual differences between the Bar Graph (showing frequencies of exact discrete values) versus the Histogram and Frequency Polygon (grouping values into continuous interval bins).",
        exemplarAnswer: "A categorical bar chart plots distinct, separate category bars with gaps, representing counts of exact identical values. A histogram groups adjacent continuous measurements into contiguous numerical bins (classes) without gaps between bars, displaying empirical probability density. A frequency polygon connects the class midpoints with linear segments, forming a continuous approximation of the underlying probability distribution curve."
      }
    ],
    realWorldScenario: {
      title: "Clinical Trial Blood Pressure Efficacy & Outlier Detection",
      scenario: "Biostatisticians evaluating a new antihypertensive drug measure the reduction in systolic blood pressure across a test cohort of patients. If a single patient experiences an anomalous measurement due to sensor misplacement or non-compliance, it can severely distort the reported clinical efficacy.",
      task: "Explain why FDA biostatistical guidelines require reporting both Mean/Standard Deviation and Median/Interquartile Range (IQR), and how dynamic formulas and box-plot histograms identify whether drug efficacy is uniformly distributed or driven by outliers.",
      exemplarAnswer: "Reporting both sets of statistics reveals skewness: if the mean reduction differs substantially from the median, or if the standard deviation is inflated relative to the IQR, the distribution is skewed or contaminated by outliers. Histograms and frequency polygons visually uncover whether the treatment benefits the entire cohort or if a few extreme responders are artificially inflating the sample mean."
    }
  }
};
