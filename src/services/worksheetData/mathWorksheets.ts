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
  }
};
