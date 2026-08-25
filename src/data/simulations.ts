import { SimulationItem, CurriculumStandard } from "../types";

// The 19 creator-authored STEM Simulation Apps
export const STEM_SIMULATIONS: SimulationItem[] = [
  {
    id: "sim-solar-eclipse-orbital-dynamics",
    title: "3D Solar Eclipse & Orbital Dynamics",
    tagline: "Interactive 3D celestial mechanics modeling total, partial, and annular solar eclipses, umbra vs. penumbra shadows, and lunar inclination",
    discipline: "physics",
    gradeLevel: ["Middle School (6-8)", "High School (9-12)", "AP / IB STEM", "Undergraduate"],
    standards: ["MS-ESS1-1", "MS-ESS1-2", "HS-ESS1-4", "NGSS SEP-2", "NGSS SEP-5"],
    description: "A precision 3D WebGL orbital dynamics laboratory and solar eclipse simulation. Illustrates the celestial mechanics of Earth revolving anticlockwise around the Sun, Moon orbiting Earth, directional sunlight rays, umbra and penumbra shadow cone geometry, and real-time eclipse alignment controls with live tracking annotations.",
    learningObjectives: [
      "Understand the geometric alignment required between the Sun, Moon, and Earth to produce total, partial, and annular solar eclipses",
      "Differentiate between the dark inner umbra shadow core and the lighter outer penumbra zone during eclipse totality",
      "Analyze planetary orbital mechanics including anticlockwise revolution and lunar orbital inclination relative to the ecliptic plane",
      "Practice safe solar observation principles and identify the Sun's atmospheric corona revealed during total solar eclipses"
    ],
    thumbnailGradient: "from-amber-600 via-stone-800 to-indigo-950",
    badgeColor: "bg-amber-500/10 text-amber-300 border-amber-500/20",
    iconName: "Sun",
    rating: 4.97,
    reviewCount: 68,
    teacherCount: 242,
    licenseType: "Academic STEM Classroom & Institutional License",
    pricing: {
      singleTeacher: 19,
      schoolDepartment: 200,
      districtUnlimited: 400
    },
    features: [
      "Interactive 3D WebGL celestial mechanics simulation featuring procedural Earth, Moon, and Sun textures",
      "Dynamic volumetric golden sunlight ray field connecting the solar core to the Earth-Moon system",
      "One-click 'Align Eclipse' control to instantly configure total eclipse syzygy alignment",
      "Real-time orbit speed adjustments, pause/resume mechanics, and 360-degree OrbitControls camera navigation",
      "Comprehensive educational HUD detailing eclipse classifications (Total, Partial, Annular, Hybrid) and viewing safety"
    ],
    parameterDefaults: {
      speed: 0.002
    },
    parameterControls: [
      {
        key: "speed",
        label: "Orbit Speed",
        min: 0,
        max: 0.01,
        step: 0.0005,
        unit: "rad/s",
        description: "Rate of Earth revolution and lunar orbital progression"
      }
    ],
    sampleChallenges: [
      {
        id: "ch-eclipse-1",
        title: "Achieve Syzygy Alignment",
        instruction: "Use the 'Align Eclipse' control or orbit speed adjustments to align the Moon directly between the Earth and Sun, observing the umbra shadow cast onto Earth's surface.",
        targetMetric: "Eclipse Syzygy Alignment",
        targetValue: 1,
        tolerance: 0,
        currentValueKey: "syzygy_aligned",
        rewardBadge: "Eclipse Master"
      },
      {
        id: "ch-eclipse-2",
        title: "Examine Umbra vs. Penumbra Geometry",
        instruction: "Inspect the shadow dynamics and explain why observers in the umbra witness totality while those in the penumbra witness a partial eclipse.",
        targetMetric: "Shadow Zone Analysis",
        targetValue: 1,
        tolerance: 0,
        currentValueKey: "shadow_analyzed",
        rewardBadge: "Shadow Dynamicist"
      }
    ],
    previewFacts: [
      "A total solar eclipse is only visible along a narrow path on Earth called the 'path of totality', usually only about 100 to 160 km wide.",
      "Because the Moon's orbit is tilted about 5 degrees relative to Earth's orbit around the Sun, solar eclipses happen only 2 to 5 times per year instead of every month."
    ],
    isHtmlApp: true,
    htmlUrl: "/simulations/solar-eclipse-orbital-dynamics.html"
  },
  {
    id: "sim-saturn-moons-educational-simulation",
    title: "Saturn & Moons Educational Simulation",
    tagline: "Interactive 3D planetary astronomy simulation modeling Saturn's multi-layered ring system, 7 major orbiting moons, asteroids, and dynamic comets",
    discipline: "physics",
    gradeLevel: ["Middle School (6-8)", "High School (9-12)", "AP / IB STEM", "Undergraduate"],
    standards: ["MS-ESS1-1", "MS-ESS1-2", "HS-ESS1-4", "NGSS SEP-2", "NGSS SEP-5"],
    description: "An interactive 3D WebGL astronomy laboratory and celestial mechanics simulation of Saturn and its surrounding orbital environment. Features Saturn's multi-colored concentric ring system with distinct boundaries, real-time orbital progression for 7 major natural satellites (Mimas, Enceladus, Tethys, Dione, Rhea, Titan, Iapetus), atmospheric banding lines, a pulsating solar core with golden radial glow, traveling deep-space asteroids, and dynamic comets.",
    learningObjectives: [
      "Explore the multi-layered architecture of Saturn's ring system composed of water ice, rocky debris, and dust particles",
      "Examine orbital periods, relative velocities, and distances of Saturn's 7 primary moons including Titan and Enceladus",
      "Analyze gas giant atmospheric features and fine equatorial banding patterns formed by high-speed planetary winds",
      "Investigate celestial mechanics, roving asteroid trajectories, and hyperbolic comet passages in the outer Solar System"
    ],
    thumbnailGradient: "from-amber-500 via-yellow-600 to-slate-950",
    badgeColor: "bg-amber-500/10 text-amber-300 border-amber-500/20",
    iconName: "Globe",
    rating: 4.98,
    reviewCount: 76,
    teacherCount: 295,
    licenseType: "Academic STEM Classroom & Institutional License",
    pricing: {
      singleTeacher: 19,
      schoolDepartment: 200,
      districtUnlimited: 400
    },
    features: [
      "Precision 3D WebGL Sun-Saturn planetary engine with 3,500-star deep-space background",
      "Multi-colored concentric ring system featuring 5 distinct physical optical layers and sharp white outlines",
      "7 real-time orbital moons (Mimas, Enceladus, Tethys, Dione, Rhea, Titan, Iapetus) with individual circular orbit paths and labels",
      "Dynamic deep-space objects including orbiting irregular dodecahedron asteroids and traversing comets with luminous particle tails",
      "Interactive information HUD detailing Saturnian density, atmospheric wind banding, and planetary ring physics"
    ],
    parameterDefaults: {
      orbitSpeed: 1.0
    },
    parameterControls: [
      {
        key: "orbitSpeed",
        label: "Orbit Speed",
        min: 0.1,
        max: 3.0,
        step: 0.1,
        unit: "x",
        description: "Orbital speed multiplier for planetary revolution and lunar motion"
      }
    ],
    sampleChallenges: [
      {
        id: "ch-saturn-1",
        title: "Track Titan's Outer Orbit",
        instruction: "Use orbital controls to follow Titan (the largest moon) and compare its orbital velocity with inner moons like Mimas and Enceladus.",
        targetMetric: "Moon Orbital Hierarchy",
        targetValue: 1,
        tolerance: 0,
        currentValueKey: "titan_orbit",
        rewardBadge: "Saturnian Astronomer"
      },
      {
        id: "ch-saturn-2",
        title: "Analyze Ring System Thickness",
        instruction: "Inspect the multi-colored concentric ring boundaries and observe how the optical density varies across inner and outer ring layers.",
        targetMetric: "Ring Structure Analysis",
        targetValue: 1,
        tolerance: 0,
        currentValueKey: "ring_analysis",
        rewardBadge: "Ring Dynamicist"
      }
    ],
    previewFacts: [
      "Saturn is the least dense planet in the Solar System—with an average density of ~0.687 g/cm³, it is less dense than water.",
      "Saturn's rings span up to 282,000 kilometers across, yet their average vertical thickness is only about 10 to 100 meters."
    ],
    isHtmlApp: true,
    htmlUrl: "/simulations/saturn-moons-educational-simulation.html"
  },
  {
    id: "sim-keplers-laws-3d",
    title: "3D Kepler's Laws Simulation",
    tagline: "Interactive 3D orbital dynamics demonstrating elliptical orbits, equal-time swept area sectors, and harmonic period ratios (T² ∝ a³)",
    discipline: "physics",
    gradeLevel: ["Middle School (6-8)", "High School (9-12)", "AP / IB STEM", "Undergraduate"],
    standards: ["HS-PS2-4", "HS-ESS1-4", "AP Physics 1: Gravitation & Circular Motion", "NGSS SEP-2", "NGSS SEP-5"],
    description: "A precision 3D orbital mechanics laboratory demonstrating Kepler's Three Laws of Planetary Motion. Solves Kepler's equation numerically (M = E - e sin E) in real-time, features elliptical trajectory modeling with variable semi-major axis (a) and eccentricity (e), live equal-time swept sector area calculations (2nd Law), instantaneous orbital velocity vectors, and real-time harmonic ratio validation (T²/a³).",
    learningObjectives: [
      "Verify Kepler's First Law by modifying orbital scale (a) and eccentricity (e) to observe elliptical geometry around the primary focus",
      "Demonstrate Kepler's Second Law through real-time discrete equal-time sector sweeps and instantaneous velocity variations between perihelion and aphelion",
      "Confirm Kepler's Third Law (Harmonic Law) by validating the constant ratio between period squared and semi-major axis cubed (T²/a³)"
    ],
    thumbnailGradient: "from-blue-600 via-sky-600 to-indigo-950",
    badgeColor: "bg-sky-500/10 text-sky-300 border-sky-500/20",
    iconName: "Orbit",
    rating: 4.99,
    reviewCount: 88,
    teacherCount: 340,
    licenseType: "Academic STEM Classroom & Institutional License",
    pricing: {
      singleTeacher: 19,
      schoolDepartment: 200,
      districtUnlimited: 400
    },
    features: [
      "Precision 3D WebGL orbital dynamics solver (Newton-Raphson Kepler equation solver)",
      "Interactive elliptical orbit geometry with adjustable semi-major axis (a = 50-140 AU) and eccentricity (e = 0.0-0.75)",
      "Equal-time sector area visualizer dynamically rendering swept fan triangles and live AU² area readouts",
      "Instantaneous velocity vector arrow scaling dynamically with vis-viva orbital speed",
      "Live telemetry deck tracking distance (r), velocity (v), period (T), and T²/a³ ratio consistency"
    ],
    parameterDefaults: {
      semimajor: 75,
      eccentricity: 0.5,
      speed: 1.0,
      showSweeps: 1,
      showVectors: 1
    },
    parameterControls: [
      {
        key: "semimajor",
        label: "Orbital Scale (a)",
        min: 50,
        max: 140,
        step: 1,
        unit: " AU",
        description: "Semi-major axis of the planet's elliptical orbit"
      },
      {
        key: "eccentricity",
        label: "Eccentricity (e)",
        min: 0,
        max: 0.75,
        step: 0.01,
        unit: "",
        description: "Orbital eccentricity (0 = circle, >0 = ellipse)"
      },
      {
        key: "speed",
        label: "Orbital Speed",
        min: 0.1,
        max: 5.0,
        step: 0.1,
        unit: "x",
        description: "Simulation time warp multiplier"
      }
    ],
    sampleChallenges: [
      {
        id: "ch-kepler-1",
        title: "Test Perihelion Velocity Boost",
        instruction: "Set eccentricity to 0.65 and observe the instantaneous velocity vector expand as the planet whips around perihelion versus aphelion.",
        targetMetric: "Eccentricity Velocity Contrast",
        targetValue: 1,
        tolerance: 0,
        currentValueKey: "eccentricity",
        rewardBadge: "Orbital Dynamicist"
      },
      {
        id: "ch-kepler-2",
        title: "Verify Harmonic Constant",
        instruction: "Change orbital scale (a) across multiple values and verify that T²/a³ remains constant.",
        targetMetric: "Harmonic Invariance",
        targetValue: 1,
        tolerance: 0.05,
        currentValueKey: "ratio",
        rewardBadge: "Kepler Scholar"
      }
    ],
    previewFacts: [
      "Kepler's Second Law implies that angular momentum is conserved in any central force field: the planet sweeps out equal areas in equal time intervals.",
      "Kepler's Third Law (T² ∝ a³) was published in Harmonices Mundi (1619) and laid the mathematical foundation for Newton's Universal Law of Gravitation."
    ],
    isHtmlApp: true,
    htmlUrl: "/simulations/keplers-laws-3d.html"
  },
  {
    id: "sim-spacetime-curvature-embedding",
    title: "Spacetime Embedding Diagram & Interactive Explanations",
    tagline: "General relativity spacetime curvature well, Schwarzschild event horizon, and geodesic orbital trajectories",
    discipline: "physics",
    gradeLevel: ["Middle School (6-8)", "High School (9-12)", "AP / IB STEM", "Undergraduate"],
    standards: ["HS-PS2-4", "HS-ESS1-1", "AP Physics C: Gravitation", "NGSS SEP-2", "NGSS SEP-5"],
    description: "An interactive 3D WebGL general relativity simulator displaying a 2D polar spatial embedding of curved 4D spacetime around a central gravitational mass. Features dynamic mass well depth adjustments, real-time geodesic particle orbits with Newtonian/relativistic gravitational acceleration, escape velocity and event horizon boundary markers, and interactive conceptual guides on singularities and geodesics.",
    learningObjectives: [
      "Visualize how mass warps surrounding spacetime geometry using a smooth polar radial embedding funnel",
      "Observe geodesic trajectories and test particle orbits governed by warped spacetime curvature rather than classical pulling forces",
      "Identify the event horizon boundary radius where escape velocity equals light speed (v_esc = c) and analyze particle trapping dynamics"
    ],
    thumbnailGradient: "from-sky-600 via-indigo-900 to-slate-950",
    badgeColor: "bg-sky-500/10 text-sky-300 border-sky-500/20",
    iconName: "Globe",
    rating: 4.98,
    reviewCount: 64,
    teacherCount: 290,
    licenseType: "Academic STEM Classroom & Institutional License",
    pricing: {
      singleTeacher: 19,
      schoolDepartment: 200,
      districtUnlimited: 400
    },
    features: [
      "Interactive 3D WebGL spacetime mesh with real-time radial dip and gravitational well depth controls",
      "Dynamic test particle launcher simulating stable geodesic orbits and sub-horizon capture states",
      "Visual Schwarzschild black hole sphere and luminous cyan event horizon ring (v_esc = c)",
      "Educational modal and callouts explaining spacetime grids, geodesic paths, and gravitational singularities",
      "Intuitive OrbitControls with dampening and responsive viewport resizing"
    ],
    parameterDefaults: {
      massWellDepth: 18
    },
    parameterControls: [
      {
        key: "massWellDepth",
        label: "Gravitational Mass Well (Depth)",
        min: 6,
        max: 32,
        step: 1,
        unit: "",
        description: "Depth factor of spacetime warping around the central mass"
      }
    ],
    sampleChallenges: [
      {
        id: "ch-spacetime-1",
        title: "Trap Particles Past Horizon",
        instruction: "Increase the mass well depth to observe orbital degradation and particles crossing the cyan event horizon into the trapped red state.",
        targetMetric: "Trapped Particle State",
        targetValue: 1,
        tolerance: 0,
        currentValueKey: "trapped_state",
        rewardBadge: "Relativity Pioneer"
      },
      {
        id: "ch-spacetime-2",
        title: "Maintain Stable Outer Geodesic",
        instruction: "Launch test particles at lower mass well depths to sustain stable green geodesic orbits outside the event horizon.",
        targetMetric: "Orbital Stability",
        targetValue: 1,
        tolerance: 0,
        currentValueKey: "stable_orbit",
        rewardBadge: "Geodesic Navigator"
      }
    ],
    previewFacts: [
      "According to General Relativity, gravity is not a physical pulling force; it is the curvature of spacetime caused by mass-energy density.",
      "The event horizon marks the boundary where the spacetime fabric dips so steeply that the escape velocity exceeds the speed of light."
    ],
    isHtmlApp: true,
    htmlUrl: "/simulations/spacetime-curvature-embedding.html"
  },
  {
    id: "sim-jupiter-dynamics-libration-vectors",
    title: "Jupiter Dynamics & Libration Vectors",
    tagline: "Orbital mechanics with instantaneous velocity and gravitational force vector overlays across Jupiter, Galilean moons, and Trojan swarms",
    discipline: "physics",
    gradeLevel: ["Middle School (6-8)", "High School (9-12)", "AP / IB STEM", "Undergraduate"],
    standards: ["HS-PS2-1", "HS-PS2-4", "HS-ESS1-4", "AP Physics 1: Kinematics & Gravitation", "NGSS SEP-5"],
    description: "An advanced 3D WebGL orbital dynamics laboratory modeling vector mechanics in the Jovian planetary and Lagrangian system. Features real-time vector overlays including tangential velocity arrows (v) and centripetal gravitational force arrows (F_g) for Jupiter, its 4 Galilean moons (Io, Europa, Ganymede, Callisto), and sample asteroids in the L4 Greek and L5 Trojan camps undergoing libration.",
    learningObjectives: [
      "Analyze the relationship between tangential orbital velocity vectors (v) and centripetal gravitational force vectors (Fg) in circular and perturbed orbital motion",
      "Observe Kepler's Third Law and speed differentials across Jupiter's Galilean moons (Io, Europa, Ganymede, Callisto)",
      "Examine how Coriolis and gravitational force balances drive libration oscillations in L4 and L5 Lagrangian asteroid clusters"
    ],
    thumbnailGradient: "from-cyan-500 via-sky-600 to-slate-950",
    badgeColor: "bg-cyan-500/10 text-cyan-300 border-cyan-500/20",
    iconName: "Compass",
    rating: 4.99,
    reviewCount: 76,
    teacherCount: 310,
    licenseType: "Academic STEM Classroom & Institutional License",
    pricing: {
      singleTeacher: 19,
      schoolDepartment: 200,
      districtUnlimited: 400
    },
    features: [
      "Dynamic 3D WebGL orbital simulation with 12,000-star field and interactive OrbitControls",
      "Toggleable real-time vector overlays: Green velocity vectors (v) and Red gravitational force vectors (Fg)",
      "Galilean moon dynamics with Keplerian velocity gradients and directional centripetal arrows",
      "Lagrangian L4 (Greek) and L5 (Trojan) asteroid swarms featuring per-body libration oscillations and vector tracking",
      "High-contrast HUD labels, expanded astronomical text sprites, and collapsible educational controls panel"
    ],
    parameterDefaults: {
      moonVectors: 1,
      jupiterVectors: 1,
      trojanVectors: 1
    },
    parameterControls: [
      {
        key: "moonVectors",
        label: "Galilean Moon Vectors",
        min: 0,
        max: 1,
        step: 1,
        unit: "",
        description: "Toggle velocity and force arrows on Galilean moons"
      },
      {
        key: "jupiterVectors",
        label: "Jupiter Orbital Vectors",
        min: 0,
        max: 1,
        step: 1,
        unit: "",
        description: "Toggle velocity and force arrows on Jupiter"
      },
      {
        key: "trojanVectors",
        label: "Trojan Swarm Vectors",
        min: 0,
        max: 1,
        step: 1,
        unit: "",
        description: "Toggle velocity and force arrows on sample Trojan asteroids"
      }
    ],
    sampleChallenges: [
      {
        id: "ch-jup-vec-1",
        title: "Observe Vector Orthogonality",
        instruction: "Examine the angle between Jupiter's velocity vector (green) and gravitational force vector (red) to confirm circular orbit perpendicularity (90°).",
        targetMetric: "Orthogonality Angle",
        targetValue: 90,
        tolerance: 2,
        currentValueKey: "angle",
        rewardBadge: "Kinematics Master"
      },
      {
        id: "ch-jup-vec-2",
        title: "Compare Moon Velocities",
        instruction: "Inspect the velocity arrows of Io versus Callisto to verify Keplerian speed decay with increasing orbital distance.",
        targetMetric: "Velocity Differential",
        targetValue: 1,
        tolerance: 0,
        currentValueKey: "keplerian_ratio",
        rewardBadge: "Keplerian Orbitalist"
      }
    ],
    previewFacts: [
      "In circular orbits, the net gravitational force vector points directly toward the central body and is always perpendicular to the instantaneous velocity vector.",
      "Trojan asteroids undergo libration along kidney-shaped orbits around the L4 and L5 equilibrium points with period cycles lasting over a century."
    ],
    isHtmlApp: true,
    htmlUrl: "/simulations/jupiter-dynamics-libration-vectors.html"
  },
  {
    id: "sim-chemistry-workbench",
    title: "Comprehensive Chemistry Workbench",
    tagline: "Orbital configurations (spdf & Bohr), variable valency compound builder with feasibility rules, polyatomic ions, and reaction balancer",
    discipline: "chemistry",
    gradeLevel: ["Middle School (6-8)", "High School (9-12)", "AP / IB STEM", "Undergraduate"],
    standards: ["HS-PS1-1", "HS-PS1-2", "HS-PS1-7", "NGSS SEP-2", "NGSS SEP-5"],
    description: "A comprehensive chemistry laboratory and interactive workbench covering element exploration (atomic numbers, K/L/M/N shells, spdf subshell configurations, live animated 3D-styled Bohr orbital canvas), compound synthesizer with valency criss-cross calculations and real-world chemical feasibility analysis, polyatomic ions database, valency vs. oxidation state comparison tool, and interactive chemical equation balancer with live atom tallies.",
    learningObjectives: [
      "Examine atomic structures, subshell electron configurations (spdf), valence electrons, and orbital shell dynamics for elements Z=1 to 82",
      "Apply the criss-cross method to synthesize ionic and covalent compounds while evaluating real-world chemical stability and feasibility",
      "Distinguish structural valency (combining capacity) from formal oxidation states across varied molecular species",
      "Balance complex chemical equations and verify the Law of Conservation of Mass through real-time atom tallies"
    ],
    thumbnailGradient: "from-blue-600 via-teal-600 to-indigo-900",
    badgeColor: "bg-teal-500/10 text-teal-300 border-teal-500/20",
    iconName: "Atom",
    rating: 4.99,
    reviewCount: 92,
    teacherCount: 380,
    licenseType: "Academic STEM Classroom & Institutional License",
    pricing: {
      singleTeacher: 19,
      schoolDepartment: 200,
      districtUnlimited: 400
    },
    features: [
      "Element Explorer with periodic data, spdf subshell electron configurations, and animated Bohr orbit canvas",
      "Compound Builder featuring criss-cross ratio simplifier and thermodynamic real-world feasibility checker",
      "Polyatomic Ions Reference with structural descriptions, formal charges, and bonding mechanisms",
      "Valency vs. Oxidation State interactive comparative module with detailed contextual explanations",
      "Chemical Equation Balancer with multi-species coefficient steppers and real-time atom count validation"
    ],
    parameterDefaults: {
      activeTab: "explorer"
    },
    parameterControls: [
      {
        key: "activeTab",
        label: "Workbench Module",
        min: 0,
        max: 4,
        step: 1,
        unit: "",
        description: "Active laboratory workbench module"
      }
    ],
    sampleChallenges: [
      {
        id: "ch-chem-balance-1",
        title: "Balance Iron Oxidation",
        instruction: "Use the equation balancer to find integer coefficients that balance the synthesis of Iron (III) oxide: Fe + O2 -> Fe2O3.",
        targetMetric: "Conservation State",
        targetValue: 1,
        tolerance: 0,
        currentValueKey: "balanced",
        rewardBadge: "Stoichiometry Specialist"
      },
      {
        id: "ch-chem-synth-2",
        title: "Synthesize Stable Hydroxide Salt",
        instruction: "Use the Compound Builder to synthesize a stable real-world metal hydroxide compound with verified feasibility.",
        targetMetric: "Feasibility",
        targetValue: 1,
        tolerance: 0,
        currentValueKey: "feasible",
        rewardBadge: "Synthesis Chemist"
      }
    ],
    previewFacts: [
      "Valency represents an atom's combining capacity (number of bonds formed), whereas oxidation state is the hypothetical formal charge if all bonds were purely ionic.",
      "The criss-cross method simplifies chemical formula subscripts by finding the greatest common divisor between cation and anion valencies."
    ],
    isHtmlApp: true,
    htmlUrl: "/simulations/comprehensive-chemistry-workbench.html"
  },
  {
    id: "sim-jupiter-trojan-asteroids",
    title: "Jupiter & Trojan Asteroids Dynamics",
    tagline: "Explore the L4 Greek and L5 Trojan Lagrange equilibrium swarms, Jupiter's orbital dynamics, and Galilean moons in interactive 3D WebGL",
    discipline: "physics",
    gradeLevel: ["Middle School (6-8)", "High School (9-12)", "AP / IB STEM"],
    standards: ["MS-ESS1-2", "HS-ESS1-4", "HS-PS2-4", "NGSS SEP-2"],
    description: "An interactive 3D WebGL orbital dynamics laboratory modeling the Sun-Jupiter-Lagrange system. Features realistic pitted asteroid swarms trapped in the L4 (Greek Camp, 60° leading) and L5 (Trojan Camp, 60° trailing) stable gravitational Lagrange pockets undergoing libration, alongside Jupiter's 4 Galilean natural satellites (Io, Europa, Ganymede, Callisto) orbiting with physically proportional speeds and distances.",
    learningObjectives: [
      "Understand the gravitational and centrifugal force balance at the L4 and L5 triangular Lagrange equilibrium points in a restricted three-body celestial system",
      "Observe asteroid swarm libration oscillations around stable equilibrium orbits",
      "Examine Jupiter's orbital mechanics and the orbital velocities of the 4 Galilean moons (Io, Europa, Ganymede, and Callisto)"
    ],
    thumbnailGradient: "from-amber-600 via-sky-600 to-indigo-950",
    badgeColor: "bg-amber-500/10 text-amber-300 border-amber-500/20",
    iconName: "Globe",
    rating: 4.97,
    reviewCount: 68,
    teacherCount: 295,
    licenseType: "Academic STEM Classroom & Institutional License",
    pricing: {
      singleTeacher: 19,
      schoolDepartment: 200,
      districtUnlimited: 400
    },
    features: [
      "Interactive 3D WebGL celestial canvas with orbit controls and realistic starfield",
      "Dynamic L4 Greek and L5 Trojan asteroid swarms with per-asteroid libration and procedural rock deformation",
      "Jupiter planetary globe with Galilean moons (Io, Europa, Ganymede, Callisto) orbiting along its equatorial plane",
      "Lagrange equilibrium point spatial markers, orbital path lines, and dynamic text billboard sprites",
      "Interactive information drawer with astronomical details, celestial body guides, and visual color legend"
    ],
    parameterDefaults: {
      orbitSpeed: 1,
      librationAmplitude: 1,
      numAsteroids: 170
    },
    parameterControls: [
      {
        key: "orbitSpeed",
        label: "Orbital Time Rate",
        min: 0.2,
        max: 3.0,
        step: 0.1,
        unit: "x",
        description: "Simulation orbital progression speed multiplier"
      },
      {
        key: "librationAmplitude",
        label: "Libration Amplitude",
        min: 0.2,
        max: 2.0,
        step: 0.1,
        unit: "x",
        description: "Asteroid oscillation excursion around L4/L5 centers"
      }
    ],
    sampleChallenges: [
      {
        id: "ch-trojan-1",
        title: "Identify the L4 Greek Camp",
        instruction: "Rotate the 3D orbital view to identify the asteroid swarm leading Jupiter by 60° in its orbital direction.",
        targetMetric: "Lead Angle",
        targetValue: 60,
        tolerance: 5,
        currentValueKey: "angle",
        rewardBadge: "Lagrangian Navigator"
      }
    ],
    previewFacts: [
      "The L4 and L5 Lagrange points are stable equilibrium locations formed by the balance of the Sun's gravity, Jupiter's gravity, and orbital centrifugal force.",
      "Jupiter has more than 10,000 cataloged Trojan asteroids named after mythological figures from the Trojan War."
    ],
    isHtmlApp: true,
    htmlUrl: "/simulations/jupiter-trojan-asteroids.html"
  },
  {
    id: "sim-ac-circuit-analyzer",
    title: "AC Circuit Interactive Simulation & Waveform Analyzer",
    tagline: "Dynamic RLC reactance calculations, static vector phasor diagrams, live electron drift loops, and dual sinusoidal waveforms",
    discipline: "physics",
    gradeLevel: ["High School (9-12)", "AP / IB STEM", "Undergraduate"],
    standards: ["HS-PS2-5", "HS-PS3-5", "AP Physics C: E&M", "NGSS SEP-5"],
    description: "A comprehensive AC circuit interactive simulation and laboratory for analyzing pure R, L, C, and compound RL, RC, and RLC networks. Features real-time electron drift circuit animation, static vector phasor diagram with phase angle arcs, dual sinusoidal voltage and current waveform oscilloscope with RMS dashed overlays, comprehensive live readouts (v(t), i(t), p(t), Vrms, Irms, XL, XC, Z, ϕ), and dynamic step-by-step mathematical substitution panels.",
    learningObjectives: [
      "Analyze how resistance (R), inductive reactance (XL = 2πfL), and capacitive reactance (XC = 1/(2πfC)) govern total circuit impedance (Z = √(R² + (XL-XC)²))",
      "Observe phase angle shifts (ϕ = atan((XL-XC)/R)) between sinusoidal voltage and current waveforms across Pure R, Pure L, Pure C, RL, RC, and RLC modes",
      "Correlate vector phasor representations with instantaneous sinusoidal waveforms, peak values, and RMS effective values"
    ],
    thumbnailGradient: "from-sky-500 via-indigo-600 to-rose-600",
    badgeColor: "bg-sky-500/10 text-sky-300 border-sky-500/20",
    iconName: "Activity",
    rating: 4.98,
    reviewCount: 84,
    teacherCount: 340,
    licenseType: "Academic STEM Classroom & Institutional License",
    pricing: {
      singleTeacher: 19,
      schoolDepartment: 200,
      districtUnlimited: 400
    },
    features: [
      "7 interactive circuit topologies: Pure R, Pure L, Pure C, Pure LC, RL, RC, and series RLC",
      "Dynamic schematic with live voltmeter probes and real-time electron drift particle visualization",
      "Interactive vector phasor diagram illustrating voltage components (VR, VL, VC, Vtotal) and phase angle ϕ",
      "Dual-channel waveform oscilloscope with moving signal particles, leading endpoints, and RMS overlay guides",
      "Dynamic step-by-step formula substitutions and comprehensive live electrodynamics calculation readouts"
    ],
    parameterDefaults: {
      resistance: 50,
      inductance: 100,
      capacitance: 10,
      frequency: 50,
      vrms: 100
    },
    parameterControls: [
      {
        key: "resistance",
        label: "Resistance (R)",
        min: 0,
        max: 100,
        step: 1,
        unit: "Ω",
        description: "Circuit series resistance"
      },
      {
        key: "inductance",
        label: "Inductance (L)",
        min: 10,
        max: 200,
        step: 5,
        unit: "mH",
        description: "Inductor coil inductance"
      },
      {
        key: "capacitance",
        label: "Capacitance (C)",
        min: 1,
        max: 50,
        step: 1,
        unit: "µF",
        description: "Capacitor plate capacitance"
      },
      {
        key: "frequency",
        label: "Frequency (f)",
        min: 10,
        max: 200,
        step: 1,
        unit: "Hz",
        description: "AC source frequency"
      },
      {
        key: "vrms",
        label: "RMS Voltage (Vrms)",
        min: 10,
        max: 240,
        step: 5,
        unit: "V",
        description: "AC source root-mean-square voltage"
      }
    ],
    sampleChallenges: [
      {
        id: "ch-ac-res-1",
        title: "Achieve Resonant State (XL = XC)",
        instruction: "Adjust frequency (f), inductance (L), and capacitance (C) until inductive reactance XL equals capacitive reactance XC, minimizing net impedance Z.",
        targetMetric: "Phase Angle (ϕ)",
        targetValue: 0,
        tolerance: 1,
        currentValueKey: "phi",
        rewardBadge: "Resonance Master"
      },
      {
        id: "ch-ac-lead-2",
        title: "Create Inductive Leading Phase (+45°)",
        instruction: "Configure an RL or RLC circuit where inductive reactance exceeds resistance such that the phase angle ϕ reaches +45°.",
        targetMetric: "Phase Angle (ϕ)",
        targetValue: 45,
        tolerance: 2,
        currentValueKey: "phi",
        rewardBadge: "Inductive Specialist"
      }
    ],
    previewFacts: [
      "In pure inductive circuits, voltage leads current by 90° (+π/2 rad); in pure capacitive circuits, voltage lags current by 90° (-π/2 rad).",
      "At resonance (XL = XC), total impedance equals pure resistance (Z = R), maximizing current flow and bringing voltage and current perfectly in phase."
    ],
    isHtmlApp: true,
    htmlUrl: "/simulations/ac-circuit-lab.html"
  },
  {
    id: "sim-ac-generator-induction",
    title: "A.C. Generator & Electromagnetic Induction Simulator",
    tagline: "Explore Faraday's law, rotating surface-wound armature cores, slip ring commutators, and real-time AC voltage waveforms",
    discipline: "physics",
    gradeLevel: ["High School (9-12)", "AP / IB STEM", "Undergraduate"],
    standards: ["HS-PS2-5", "HS-PS3-5", "AP Physics 2 (Unit 14)", "NGSS SEP-2"],
    description: "An interactive electromagnetic induction simulator illustrating the working mechanics of an alternating current (A.C.) generator. Features rotating soft-iron armature cores with progressive copper winding loops, permanent magnetic poles (N/S), magnetic flux density controls (B), coil turn variations (N), slip ring and carbon brush commutators with flowing electron particles, dynamic load bulb glow, and a real-time oscilloscope AC voltage waveform monitor.",
    learningObjectives: [
      "Analyze how changing magnetic flux through a rotating coil induces an alternating electromotive force (EMF = NBAω sin(ωt))",
      "Investigate the relationship between magnetic field strength (B), number of turns (N), rotation frequency, and peak output voltage",
      "Trace the function of slip rings and carbon brushes in extracting alternating current without tangling lead wires"
    ],
    thumbnailGradient: "from-cyan-600 via-blue-700 to-slate-950",
    badgeColor: "bg-cyan-500/10 text-cyan-300 border-cyan-500/20",
    iconName: "Zap",
    rating: 4.9,
    reviewCount: 52,
    teacherCount: 210,
    licenseType: "Academic STEM Classroom & Institutional License",
    pricing: {
      singleTeacher: 19,
      schoolDepartment: 200,
      districtUnlimited: 400
    },
    features: [
      "Isometric 2.5D projection of rotating armature core with magnetic field lines and vector callouts",
      "Dynamic electron drift particle visualization flowing through closed slip-ring external circuit",
      "Interactive Physics Explanation Modal covering Faraday's Law, Lenz's Law, induced EMF equations, and surface winding",
      "Synchronized real-time oscilloscope measuring instantaneous AC voltage (V) and magnetic flux (mWb)",
      "Interactive sliders for magnetic field strength (0.2 - 2.0 T) and armature coil turns (10 - 300 turns)"
    ],
    parameterDefaults: {
      bField: 1.0,
      coilTurns: 100
    },
    parameterControls: [
      {
        key: "bField",
        label: "Magnetic Field (B)",
        min: 0.2,
        max: 2.0,
        step: 0.1,
        unit: "T",
        description: "Permanent magnet flux density"
      },
      {
        key: "coilTurns",
        label: "Coil Turns (N)",
        min: 10,
        max: 300,
        step: 10,
        unit: "turns",
        description: "Number of armature surface wire windings"
      }
    ],
    sampleChallenges: [
      {
        id: "ch-ac-gen-1",
        title: "Maximize Peak Induced EMF",
        instruction: "Adjust magnetic flux density and coil winding density to produce an induced EMF greater than 20V.",
        targetMetric: "Peak EMF",
        targetValue: 20,
        tolerance: 2,
        currentValueKey: "peakEmf",
        rewardBadge: "Induction Pro"
      }
    ],
    previewFacts: [
      "Faraday's Law of Induction states that the magnitude of induced EMF is directly proportional to the rate of change of magnetic flux.",
      "In an AC generator, slip rings maintain continuous electrical contact with stationary brushes, producing sinusoidal alternating output."
    ],
    isHtmlApp: true,
    htmlContent: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>AC Generator Interactive Simulation</title>
  <style>
    :root {
      --bg-color: #0f172a;
      --card-bg: #1e293b;
      --text-main: #f8fafc;
      --text-muted: #94a3b8;
      --accent-blue: #38bdf8;
      --accent-red: #ef4444;
      --accent-green: #22c55e;
      --accent-yellow: #eab308;
      --border-color: #334155;
    }

    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
      font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
    }

    body {
      background-color: var(--bg-color);
      color: var(--text-main);
      display: flex;
      flex-direction: column;
      align-items: center;
      min-height: 100vh;
      padding: 20px;
    }

    header {
      text-align: center;
      margin-bottom: 20px;
    }

    header h1 {
      font-size: 1.8rem;
      color: var(--accent-blue);
      margin-bottom: 6px;
    }

    header p {
      color: var(--text-muted);
      font-size: 0.95rem;
    }

    .container {
      display: flex;
      flex-direction: column;
      gap: 20px;
      width: 100%;
      max-width: 1000px;
    }

    .canvas-card {
      background: var(--card-bg);
      border: 1px solid var(--border-color);
      border-radius: 12px;
      padding: 16px;
      display: flex;
      flex-direction: column;
      align-items: center;
      box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.3);
    }

    canvas {
      background-color: #0b0f19;
      border-radius: 8px;
      width: 100%;
      height: auto;
      max-width: 960px;
    }

    .controls-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 16px;
      width: 100%;
      background: var(--card-bg);
      border: 1px solid var(--border-color);
      border-radius: 12px;
      padding: 20px;
    }

    .control-group {
      display: flex;
      flex-direction: column;
      gap: 8px;
    }

    .control-group label {
      font-size: 0.9rem;
      color: var(--text-muted);
      display: flex;
      justify-content: space-between;
    }

    .control-group label span.val {
      color: var(--accent-blue);
      font-weight: 600;
    }

    input[type="range"] {
      width: 100%;
      accent-color: var(--accent-blue);
      cursor: pointer;
    }

    .btn-group {
      display: flex;
      gap: 10px;
      align-items: flex-end;
      grid-column: span 2;
    }

    @media (max-width: 640px) {
      .btn-group {
        grid-column: span 1;
        flex-direction: column;
      }
    }

    button {
      flex: 1;
      padding: 10px 14px;
      border: none;
      border-radius: 6px;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.2s ease;
      font-size: 0.88rem;
    }

    .btn-primary {
      background-color: var(--accent-blue);
      color: #0f172a;
    }

    .btn-primary:hover {
      background-color: #7dd3fc;
    }

    .btn-secondary {
      background-color: #475569;
      color: #fff;
    }

    .btn-secondary:hover {
      background-color: #64748b;
    }

    .btn-info {
      background-color: var(--accent-yellow);
      color: #0f172a;
    }

    .btn-info:hover {
      background-color: #fde047;
    }

    .status-panel {
      display: flex;
      justify-content: space-around;
      width: 100%;
      background: #111827;
      padding: 12px;
      border-radius: 8px;
      margin-top: 12px;
      font-size: 0.9rem;
      flex-wrap: wrap;
      gap: 10px;
    }

    .status-item span {
      font-weight: bold;
      color: var(--accent-blue);
    }

    /* Modal Styles */
    .modal-overlay {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(15, 23, 42, 0.85);
      backdrop-filter: blur(4px);
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 1000;
      opacity: 0;
      pointer-events: none;
      transition: opacity 0.3s ease;
      padding: 20px;
    }

    .modal-overlay.active {
      opacity: 1;
      pointer-events: auto;
    }

    .modal-content {
      background: var(--card-bg);
      border: 1px solid var(--border-color);
      border-radius: 12px;
      max-width: 700px;
      width: 100%;
      max-height: 85vh;
      overflow-y: auto;
      padding: 24px;
      box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.5);
      position: relative;
    }

    .modal-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid var(--border-color);
      padding-bottom: 12px;
      margin-bottom: 16px;
    }

    .modal-header h2 {
      color: var(--accent-blue);
      font-size: 1.4rem;
    }

    .close-btn {
      background: transparent;
      border: none;
      color: var(--text-muted);
      font-size: 1.5rem;
      cursor: pointer;
      line-height: 1;
      padding: 0 4px;
    }

    .close-btn:hover {
      color: var(--text-main);
    }

    .physics-body {
      font-size: 0.95rem;
      line-height: 1.6;
      color: var(--text-main);
      display: flex;
      flex-direction: column;
      gap: 16px;
    }

    .physics-body p {
      color: #cbd5e1;
    }

    .physics-section-title {
      font-weight: bold;
      color: var(--accent-blue);
      margin-top: 8px;
    }

    .physics-body ul {
      list-style-type: disc;
      padding-left: 20px;
      display: flex;
      flex-direction: column;
      gap: 8px;
    }

    .equation-box {
      background: #0b0f19;
      border-left: 4px solid var(--accent-blue);
      padding: 12px 16px;
      border-radius: 0 6px 6px 0;
      font-family: 'Courier New', Courier, monospace;
      color: #7dd3fc;
    }
  </style>
</head>
<body>

  <header>
    <h1>A.C. Generator Interactive Simulator</h1>
    <p>Electromagnetic Induction in a Surface-Wound Armature Core</p>
  </header>

  <div class="container">
    <div class="canvas-card">
      <canvas id="simCanvas" width="960" height="540"></canvas>
      <div class="status-panel">
        <div class="status-item">Computed Speed (&omega;): <span id="statSpeed">0.0 Hz</span></div>
        <div class="status-item">Armature Angle (&theta;): <span id="statAngle">0°</span></div>
        <div class="status-item">Instantaneous Flux (&Phi;): <span id="statFlux">0.00 mWb</span></div>
        <div class="status-item">Induced EMF (E): <span id="statEMF">0.00 V</span></div>
      </div>
    </div>

    <div class="controls-grid">
      <div class="control-group">
        <label>Magnetic Field (B): <span class="val" id="bVal">1.0 T</span></label>
        <input type="range" id="bSlider" min="0.2" max="2.0" step="0.1" value="1.0">
      </div>

      <div class="control-group">
        <label>Coil Turns (N): <span class="val" id="nVal">100</span></label>
        <input type="range" id="nSlider" min="10" max="300" step="10" value="100">
      </div>

      <div class="btn-group">
        <button id="playBtn" class="btn-primary">Pause</button>
        <button id="resetBtn" class="btn-secondary">Reset</button>
        <button id="physicsBtn" class="btn-info">Physics Explanation</button>
      </div>
    </div>
  </div>

  <!-- Physics Explanation Modal -->
  <div class="modal-overlay" id="physicsModal">
    <div class="modal-content">
      <div class="modal-header">
        <h2>Physics of the AC Generator</h2>
        <button class="close-btn" id="closeModal">&times;</button>
      </div>
      <div class="physics-body">
        <p>An AC generator converts mechanical energy into electrical energy using the principles of electromagnetic induction.</p>

        <div class="physics-section-title">Faraday's Law of Induction</div>
        <p>When the armature rotates within a uniform magnetic field (B), the magnetic flux (&Phi;) passing through the armature coil changes continuously with time:</p>
        <div class="equation-box">
          &Phi;(t) = B &times; A &times; cos(&theta;)
        </div>
        <p>Where <b>B</b> is the magnetic field strength, <b>A</b> is the coil area, and <b>&theta; = &omega;t</b> is the angle between the normal to the coil and the magnetic field lines.</p>

        <div class="physics-section-title">Induced Electromotive Force (EMF)</div>
        <p>According to Faraday's Law, the induced EMF (E) is directly proportional to the rate of change of magnetic flux:</p>
        <div class="equation-box">
          E(t) = -N &times; (d&Phi; / dt) = N &times; B &times; A &times; &omega; &times; sin(&omega;t)
        </div>
        <ul>
          <li><b>N (Number of Turns):</b> Increasing the turns increases the total surface Conductor area cut by magnetic flux, scaling the output voltage proportionally.</li>
          <li><b>B (Magnetic Field Strength):</b> Stronger magnet poles increase the flux density cut per rotation.</li>
          <li><b>&omega; (Angular Velocity):</b> Faster rotation increases the frequency and maximum amplitude (E_max = N B A &omega;) of the generated alternating current.</li>
        </ul>

        <div class="physics-section-title">Lenz's Law & Direction of Current</div>
        <p>The direction of induced current opposes the motion creating it. Fleming's Right-Hand Rule determines the direction of current along sides AB and CD as the coil rotates through horizontal and vertical positions.</p>

        <div class="physics-section-title">Surface-Wound Armature Alignment</div>
        <p>In this model, copper conductors are wound continuously parallel to edge AB over the cylindrical armature drum, emerging from side AD and wrapping around to side BC. This layout maximizes flux linkage along the effective cutting edges during rotation.</p>

        <div class="physics-section-title">Slip Rings & Alternating Current (AC)</div>
        <p>Unlike a DC generator which uses a split-ring commutator, an AC generator uses continuous <b>Slip Rings (R1, R2)</b> and carbon brushes. As the coil rotates past 180°, the direction of current relative to the external circuit reverses, producing a sinusoidal AC waveform.</p>
      </div>
    </div>
  </div>

  <script>
    const canvas = document.getElementById('simCanvas');
    const ctx = canvas.getContext('2d');

    // Controls & Indicators
    const bSlider = document.getElementById('bSlider');
    const nSlider = document.getElementById('nSlider');
    const bVal = document.getElementById('bVal');
    const nVal = document.getElementById('nVal');
    const playBtn = document.getElementById('playBtn');
    const resetBtn = document.getElementById('resetBtn');
    const physicsBtn = document.getElementById('physicsBtn');
    const physicsModal = document.getElementById('physicsModal');
    const closeModal = document.getElementById('closeModal');

    const statSpeed = document.getElementById('statSpeed');
    const statAngle = document.getElementById('statAngle');
    const statFlux = document.getElementById('statFlux');
    const statEMF = document.getElementById('statEMF');

    // Modal Control
    physicsBtn.addEventListener('click', () => {
      physicsModal.classList.add('active');
    });

    closeModal.addEventListener('click', () => {
      physicsModal.classList.remove('active');
    });

    physicsModal.addEventListener('click', (e) => {
      if (e.target === physicsModal) {
        physicsModal.classList.remove('active');
      }
    });

    // Simulation Parameters
    let isRunning = true;
    let theta = 0; // Rotation angle in radians
    let externalCircuitPhase = 0; // Dynamic current flow phase
    let lastTime = performance.now();

    const coilWidth = 140;
    const coilHeight = 180;
    const coilArea = 0.02; // Square meters
    
    // Waveform history buffer
    const waveHistory = [];
    const maxWavePoints = 140;

    // Projection constants
    const centerX = 340;
    const centerY = 240;

    function getParams() {
      const B = parseFloat(bSlider.value);
      const N = parseInt(nSlider.value);
      const freq = B * (N / 100) * 1.5; 
      return { freq, B, N };
    }

    function updateLabels() {
      const p = getParams();
      bVal.textContent = p.B.toFixed(1) + ' T';
      nVal.textContent = p.N;
      statSpeed.textContent = p.freq.toFixed(2) + ' Hz';
    }

    bSlider.addEventListener('input', updateLabels);
    nSlider.addEventListener('input', updateLabels);

    playBtn.addEventListener('click', () => {
      isRunning = !isRunning;
      playBtn.textContent = isRunning ? 'Pause' : 'Play';
      if (isRunning) {
        lastTime = performance.now();
        requestAnimationFrame(animate);
      }
    });

    resetBtn.addEventListener('click', () => {
      theta = 0;
      externalCircuitPhase = 0;
      waveHistory.length = 0;
      if (!isRunning) {
        draw();
      }
    });

    function drawCallout(startX, startY, endX, endY, text, align = 'left') {
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.6)';
      ctx.lineWidth = 1.5;
      
      ctx.beginPath();
      ctx.moveTo(startX, startY);
      ctx.lineTo(endX, endY);
      ctx.stroke();

      ctx.fillStyle = '#38bdf8';
      ctx.beginPath();
      ctx.arc(startX, startY, 3, 0, Math.PI * 2);
      ctx.fill();

      ctx.font = 'bold 12px sans-serif';
      const textWidth = ctx.measureText(text).width;
      const padding = 4;
      const boxWidth = textWidth + padding * 2;
      const boxHeight = 18;

      let boxX = endX;
      if (align === 'right') boxX = endX - boxWidth;
      else if (align === 'center') boxX = endX - boxWidth / 2;

      const boxY = endY - boxHeight / 2;

      ctx.fillStyle = 'rgba(15, 23, 42, 0.85)';
      ctx.strokeStyle = 'rgba(56, 189, 248, 0.5)';
      ctx.lineWidth = 1;
      ctx.fillRect(boxX, boxY, boxWidth, boxHeight);
      ctx.strokeRect(boxX, boxY, boxWidth, boxHeight);

      ctx.fillStyle = '#f8fafc';
      ctx.textAlign = 'left';
      ctx.textBaseline = 'middle';
      ctx.fillText(text, boxX + padding, endY);
    }

    function project(x, y, z) {
      const angle = 0.4;
      const px = x + z * Math.cos(angle) * 0.5;
      const py = y - z * Math.sin(angle) * 0.5;
      return { x: centerX + px, y: centerY + py };
    }

    function drawMagnetPoles() {
      // North Pole (Left - Red)
      ctx.fillStyle = '#dc2626';
      ctx.beginPath();
      let p1 = project(-240, -110, -80);
      let p2 = project(-110, -110, -80);
      let p3 = project(-110, 110, -80);
      let p4 = project(-240, 110, -80);
      ctx.moveTo(p1.x, p1.y); ctx.lineTo(p2.x, p2.y); ctx.lineTo(p3.x, p3.y); ctx.lineTo(p4.x, p4.y);
      ctx.closePath();
      ctx.fill();

      ctx.fillStyle = '#ef4444';
      ctx.fillRect(centerX - 220, centerY - 100, 100, 200);
      ctx.fillStyle = '#ffffff';
      ctx.font = 'bold 28px sans-serif';
      ctx.textAlign = 'left';
      ctx.textBaseline = 'alphabetic';
      ctx.fillText('N', centerX - 180, centerY + 10);

      // South Pole (Right - Blue)
      ctx.fillStyle = '#2563eb';
      ctx.beginPath();
      p1 = project(110, -110, -80);
      p2 = project(240, -110, -80);
      p3 = project(240, 110, -80);
      p4 = project(110, 110, -80);
      ctx.moveTo(p1.x, p1.y); ctx.lineTo(p2.x, p2.y); ctx.lineTo(p3.x, p3.y); ctx.lineTo(p4.x, p4.y);
      ctx.closePath();
      ctx.fill();

      ctx.fillStyle = '#3b82f6';
      ctx.fillRect(centerX + 120, centerY - 100, 100, 200);
      ctx.fillStyle = '#ffffff';
      ctx.font = 'bold 28px sans-serif';
      ctx.fillText('S', centerX + 160, centerY + 10);

      drawCallout(centerX - 170, centerY - 100, centerX - 210, centerY - 130, 'North Magnet Pole', 'right');
      drawCallout(centerX + 170, centerY - 100, centerX + 210, centerY - 130, 'South Magnet Pole', 'left');
    }

    function drawFieldLines(B) {
      ctx.strokeStyle = 'rgba(56, 189, 248, 0.3)';
      ctx.lineWidth = 1.5;
      ctx.setLineDash([6, 6]);

      // Grid line density increases with B
      const yStep = Math.max(15, Math.floor(45 / B));
      const zStep = Math.max(20, Math.floor(50 / B));

      for (let y = -75; y <= 75; y += yStep) {
        for (let z = -45; z <= 45; z += zStep) {
          const start = project(-120, y, z);
          const end = project(120, y, z);
          ctx.beginPath();
          ctx.moveTo(start.x, start.y);
          ctx.lineTo(end.x, end.y);
          ctx.stroke();
        }
      }
      ctx.setLineDash([]);

      const midFieldLine = project(0, -75, 0);
      drawCallout(midFieldLine.x, midFieldLine.y, midFieldLine.x, midFieldLine.y - 45, 'Magnetic Field / Flux Line (B)', 'center');
    }

    function drawArmature(currentEMF, N) {
      const halfW = coilWidth / 2;
      const halfH = coilHeight / 2;

      const cosT = Math.cos(theta);
      const sinT = Math.sin(theta);

      // Base armature corners
      const rawA = { x: -halfW * cosT, y: -halfH, z: halfW * sinT };
      const rawB = { x: halfW * cosT, y: -halfH, z: -halfW * sinT };
      const rawC = { x: halfW * cosT, y: halfH, z: -halfW * sinT };
      const rawD = { x: -halfW * cosT, y: halfH, z: halfW * sinT };

      const A = project(rawA.x, rawA.y, rawA.z);
      const B = project(rawB.x, rawB.y, rawB.z);
      const C = project(rawC.x, rawC.y, rawC.z);
      const D = project(rawD.x, rawD.y, rawD.z);

      // Soft Iron Core Body
      ctx.fillStyle = 'rgba(100, 116, 139, 0.4)';
      ctx.beginPath();
      ctx.moveTo(A.x, A.y); ctx.lineTo(B.x, B.y); ctx.lineTo(C.x, C.y); ctx.lineTo(D.x, D.y);
      ctx.closePath();
      ctx.fill();

      // Continuous surface winding loop parallel to AB (emerging from edge AD, wrapping over to BC)
      const numTurns = Math.min(Math.max(Math.floor((N / 300) * 36), 6), 36);
      const wireWidth = Math.max(1.5, 30 / numTurns);
      
      ctx.lineWidth = wireWidth;

      for (let i = 0; i < numTurns; i++) {
        // Distribute turns progressively to cover the whole armature surface as N increases
        const frac1 = i / numTurns;
        const frac2 = (i + 0.85) / numTurns;

        // Points on edge AD (left side)
        const startX_AD = rawA.x + frac1 * (rawD.x - rawA.x);
        const startY_AD = rawA.y + frac1 * (rawD.y - rawA.y);
        const startZ_AD = rawA.z + frac1 * (rawD.z - rawA.z);

        // Points on edge BC (right side)
        const endX_BC = rawB.x + frac1 * (rawC.x - rawB.x);
        const endY_BC = rawB.y + frac1 * (rawC.y - rawB.y);
        const endZ_BC = rawB.z + frac1 * (rawC.z - rawB.z);

        // Next re-entry point on edge AD for continuous winding appearance
        const nextX_AD = rawA.x + frac2 * (rawD.x - rawA.x);
        const nextY_AD = rawA.y + frac2 * (rawD.y - rawA.y);
        const nextZ_AD = rawA.z + frac2 * (rawD.z - rawA.z);

        const pStartAD = project(startX_AD, startY_AD, startZ_AD);
        const pEndBC = project(endX_BC, endY_BC, endZ_BC);
        const pNextAD = project(nextX_AD, nextY_AD, nextZ_AD);

        // Curvature outwards at the edges to show winding loop wrapping behind/around
        const ctrlX_BC = pEndBC.x + 10 * cosT;
        const ctrlY_BC = pEndBC.y + 6;
        const ctrlX_AD = pNextAD.x - 10 * cosT;
        const ctrlY_AD = pNextAD.y - 6;

        ctx.strokeStyle = i % 2 === 0 ? '#f59e0b' : '#d97706';
        ctx.beginPath();
        // Conductor running parallel to AB across the core surface
        ctx.moveTo(pStartAD.x, pStartAD.y);
        ctx.lineTo(pEndBC.x, pEndBC.y);

        // Wound curve going into edge BC
        ctx.quadraticCurveTo(ctrlX_BC, ctrlY_BC, (pEndBC.x + ctrlX_BC) / 2, (pEndBC.y + ctrlY_BC) / 2);

        // Loop wrapping back and emerging up out of edge AD
        ctx.quadraticCurveTo(ctrlX_AD, ctrlY_AD, pNextAD.x, pNextAD.y);
        ctx.stroke();
      }

      // Outer Frame Highlight Line
      ctx.strokeStyle = '#b45309';
      ctx.lineWidth = 2.5;
      ctx.beginPath();
      ctx.moveTo(A.x, A.y); ctx.lineTo(B.x, B.y); ctx.lineTo(C.x, C.y); ctx.lineTo(D.x, D.y);
      ctx.closePath();
      ctx.stroke();

      // Armature Corner Labels A, B, C, D
      ctx.fillStyle = '#f8fafc';
      ctx.font = 'bold 14px sans-serif';
      ctx.fillText('A', A.x - 12, A.y - 8);
      ctx.fillText('B', B.x + 8, B.y - 8);
      ctx.fillText('C', C.x + 8, C.y + 16);
      ctx.fillText('D', D.x - 12, D.y + 16);

      // Current Direction Arrows along Main Sides
      if (Math.abs(currentEMF) > 0.05) {
        const dir = currentEMF > 0 ? 1 : -1;
        drawArrowOnLine(A, B, dir);
        drawArrowOnLine(B, C, dir);
        drawArrowOnLine(C, D, dir);
        drawArrowOnLine(D, A, dir);
      }

      drawCommutatorSystem(C, D, currentEMF);
    }

    function drawArrowOnLine(p1, p2, dir) {
      const midX = (p1.x + p2.x) / 2;
      const midY = (p1.y + p2.y) / 2;
      const angle = Math.atan2(p2.y - p1.y, p2.x - p1.x) + (dir < 0 ? Math.PI : 0);

      ctx.fillStyle = '#22c55e';
      ctx.save();
      ctx.translate(midX, midY);
      ctx.rotate(angle);
      ctx.beginPath();
      ctx.moveTo(0, -5);
      ctx.lineTo(10, 0);
      ctx.lineTo(0, 5);
      ctx.closePath();
      ctx.fill();
      ctx.restore();
    }

    function drawCommutatorSystem(C, D, currentEMF) {
      const shaftY1 = centerY + 90;
      const shaftY2 = centerY + 180;

      // Central Shaft
      ctx.strokeStyle = '#64748b';
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.moveTo(centerX, centerY - 130);
      ctx.lineTo(centerX, shaftY2 + 20);
      ctx.stroke();

      const r1Y = shaftY1 + 20;
      const r2Y = shaftY1 + 50;

      // Wire Leads to Slip Rings
      ctx.strokeStyle = '#f59e0b';
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.moveTo(D.x, D.y);
      ctx.lineTo(centerX - 10, r1Y);
      ctx.moveTo(C.x, C.y);
      ctx.lineTo(centerX + 10, r2Y);
      ctx.stroke();

      // Slip Ring R1
      ctx.fillStyle = '#d97706';
      ctx.beginPath();
      ctx.ellipse(centerX, r1Y, 18, 8, 0, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();

      // Slip Ring R2
      ctx.beginPath();
      ctx.ellipse(centerX, r2Y, 18, 8, 0, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();

      // Carbon Brushes B1 & B2
      ctx.fillStyle = '#334155';
      ctx.fillRect(centerX - 32, r1Y - 4, 14, 8); // B1
      ctx.fillRect(centerX + 18, r2Y - 4, 14, 8); // B2

      ctx.fillStyle = '#94a3b8';
      ctx.font = '12px sans-serif';
      ctx.fillText('B1', centerX - 48, r1Y + 3);
      ctx.fillText('R1', centerX - 12, r1Y - 10);
      ctx.fillText('B2', centerX + 36, r2Y + 3);
      ctx.fillText('R2', centerX - 12, r2Y + 20);

      drawCallout(centerX - 25, r1Y, centerX - 110, r1Y + 20, 'Carbon Brush B1', 'right');
      drawCallout(centerX + 25, r2Y, centerX + 110, r2Y - 20, 'Carbon Brush B2', 'left');

      // Fully Closed External Circuit Track Waypoints
      const circuitPath = [
        { x: centerX - 32, y: r1Y },
        { x: centerX - 80, y: r1Y },
        { x: centerX - 80, y: shaftY2 },
        { x: centerX - 16, y: shaftY2 },
        { x: centerX + 16, y: shaftY2 },
        { x: centerX + 80, y: shaftY2 },
        { x: centerX + 80, y: r2Y },
        { x: centerX + 32, y: r2Y }
      ];

      // Draw External Circuit Wires
      ctx.strokeStyle = '#94a3b8';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(circuitPath[0].x, circuitPath[0].y);
      for (let i = 1; i < circuitPath.length; i++) {
        ctx.lineTo(circuitPath[i].x, circuitPath[i].y);
      }
      ctx.stroke();

      // Electron Flow Particles confined strictly inside the external circuit
      if (Math.abs(currentEMF) > 0.05) {
        ctx.fillStyle = '#38bdf8';
        const particleDir = currentEMF > 0 ? 1 : -1;
        const numParticles = 10;

        const segmentLengths = [];
        let totalPathLength = 0;

        for (let i = 0; i < circuitPath.length - 1; i++) {
          const dx = circuitPath[i + 1].x - circuitPath[i].x;
          const dy = circuitPath[i + 1].y - circuitPath[i].y;
          const len = Math.hypot(dx, dy);
          segmentLengths.push(len);
          totalPathLength += len;
        }

        for (let i = 0; i < numParticles; i++) {
          const spacing = totalPathLength / numParticles;
          let distance = (externalCircuitPhase * particleDir + i * spacing) % totalPathLength;
          if (distance < 0) distance += totalPathLength;

          let ptX = circuitPath[0].x;
          let ptY = circuitPath[0].y;
          let accum = 0;

          for (let j = 0; j < segmentLengths.length; j++) {
            const segLen = segmentLengths[j];
            if (accum + segLen >= distance) {
              const segDist = distance - accum;
              const ratio = segDist / segLen;
              ptX = circuitPath[j].x + ratio * (circuitPath[j + 1].x - circuitPath[j].x);
              ptY = circuitPath[j].y + ratio * (circuitPath[j + 1].y - circuitPath[j].y);
              break;
            }
            accum += segLen;
          }

          ctx.beginPath();
          ctx.arc(ptX, ptY, 3.5, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      // Output Load Bulb
      const glow = Math.min(Math.abs(currentEMF) / 100, 1);
      ctx.fillStyle = \`rgba(250, 204, 21, \${glow})\`;
      ctx.strokeStyle = '#facc15';
      ctx.beginPath();
      ctx.arc(centerX, shaftY2, 16, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();

      ctx.fillStyle = '#000000';
      ctx.font = '10px sans-serif';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText('LOAD', centerX, shaftY2);
      ctx.textAlign = 'left';
      ctx.textBaseline = 'alphabetic';
    }

    function drawOscilloscope(currentEMF) {
      const graphX = 650;
      const graphY = 40;
      const graphW = 280;
      const graphH = 460;

      ctx.save();

      // Background & border
      ctx.fillStyle = '#030712';
      ctx.fillRect(graphX, graphY, graphW, graphH);
      ctx.strokeStyle = '#1f2937';
      ctx.lineWidth = 1;
      ctx.strokeRect(graphX, graphY, graphW, graphH);

      // Grid Lines
      ctx.strokeStyle = '#111827';
      ctx.beginPath();
      for (let x = graphX; x <= graphX + graphW; x += 30) {
        ctx.moveTo(x, graphY); ctx.lineTo(x, graphY + graphH);
      }
      const midGraphY = graphY + graphH / 2;
      for (let y = graphY; y <= graphY + graphH; y += 30) {
        ctx.moveTo(graphX, y); ctx.lineTo(graphX + graphW, y);
      }
      ctx.stroke();

      // Center baseline
      ctx.strokeStyle = '#4b5563';
      ctx.beginPath();
      ctx.moveTo(graphX, midGraphY);
      ctx.lineTo(graphX + graphW, midGraphY);
      ctx.stroke();

      ctx.fillStyle = '#38bdf8';
      ctx.font = 'bold 13px sans-serif';
      ctx.fillText('Output Voltage Waveform (AC)', graphX + 12, graphY + 22);

      // Canvas Clipping Region for the waveform area
      ctx.beginPath();
      ctx.rect(graphX + 2, graphY + 30, graphW - 4, graphH - 34);
      ctx.clip();

      if (waveHistory.length > 1) {
        ctx.strokeStyle = '#22c55e';
        ctx.lineWidth = 2;
        ctx.beginPath();

        const fixedScaleY = 1.2;

        for (let i = 0; i < waveHistory.length; i++) {
          const ptX = graphX + graphW - (waveHistory.length - 1 - i) * 2;
          const ptY = midGraphY - waveHistory[i] * fixedScaleY;

          if (i === 0) ctx.moveTo(ptX, ptY);
          else ctx.lineTo(ptX, ptY);
        }
        ctx.stroke();

        const lastVal = waveHistory[waveHistory.length - 1];
        const dotY = midGraphY - lastVal * fixedScaleY;
        ctx.fillStyle = '#ef4444';
        ctx.beginPath();
        ctx.arc(graphX + graphW - 2, dotY, 4, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.restore();
    }

    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const p = getParams();
      const omega = 2 * Math.PI * p.freq;
      
      const maxEMF = p.N * p.B * coilArea * omega;
      const currentEMF = maxEMF * Math.sin(theta);
      const flux = p.B * coilArea * Math.cos(theta);

      waveHistory.push(currentEMF);
      if (waveHistory.length > maxWavePoints) {
        waveHistory.shift();
      }

      drawFieldLines(p.B);
      drawMagnetPoles();
      drawArmature(currentEMF, p.N);
      drawOscilloscope(currentEMF);

      let deg = Math.round((theta * (180 / Math.PI)) % 360);
      if (deg < 0) deg += 360;
      statAngle.textContent = deg + '°';
      statFlux.textContent = (flux * 1000).toFixed(2) + ' mWb';
      statEMF.textContent = currentEMF.toFixed(2) + ' V';
    }

    function animate(currentTime) {
      if (!isRunning) return;

      const dt = (currentTime - lastTime) / 1000;
      lastTime = currentTime;

      const p = getParams();
      const omega = 2 * Math.PI * p.freq;

      theta += omega * dt;
      externalCircuitPhase += Math.abs(p.freq) * 120 * dt;

      updateLabels();
      draw();
      requestAnimationFrame(animate);
    }

    updateLabels();
    draw();
    requestAnimationFrame(animate);
  </script>
</body>
</html>`,
    authorName: "Dr. Elena Rostova & Axiom STEM Faculty",
    lemonSqueezyStoreId: "store_stem_faculty_101",
    lemonSqueezyStoreName: "Dr. Elena Rostova & Axiom STEM Faculty",
    createdAt: "2026-08-21T13:30:00.000Z",
    updatedAt: "2026-08-21T13:40:00.000Z",
    lastModified: "2026-08-21T13:40:00.000Z"
  },
  {
    id: "sim-quantum-em-spectrum",
    title: "Quantum EM Spectrum & Energy Simulator",
    tagline: "Explore wave-particle duality, frequency scaling, photon wavelength metrics, and Planck energy quantization (E = hν)",
    discipline: "physics",
    gradeLevel: ["High School (9-12)", "AP / IB STEM", "Undergraduate"],
    standards: ["HS-PS4-1", "HS-PS4-3", "AP Physics 2 (Unit 14)", "NGSS SEP-5"],
    description: "Investigate electromagnetic wave properties and quantum energy quantization across the entire spectrum. Adjust wavelength logarithmically, observe color shifting in the visible range, calculate frequency and photon energy in Joules and electron-volts (eV), and toggle quantum photon particle duality packets.",
    learningObjectives: [
      "Relate wavelength, frequency, and photon energy through c = λν and E = hν",
      "Analyze how changing photon wavelength shifts light through the visible spectrum into ultraviolet, X-rays, and infrared",
      "Investigate wave-particle duality by toggling quantum photon particle packets onto the continuous sine wave"
    ],
    thumbnailGradient: "from-cyan-600 via-indigo-600 to-pink-600",
    badgeColor: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
    iconName: "Activity",
    rating: 5.0,
    reviewCount: 42,
    teacherCount: 156,
    licenseType: "Academic STEM Classroom & Institutional License",
    pricing: {
      singleTeacher: 19,
      schoolDepartment: 200,
      districtUnlimited: 400
    },
    features: [
      "Continuous dynamic wave canvas with real-time frequency phase animation",
      "Interactive full-range EM spectrum slider with gamma, X-ray, UV, visible, IR, microwave, and radio presets",
      "Live calculated physical metrics (wavelength, frequency in Hz, and photon energy in J and eV)",
      "Quantum photon particle packet duality visualizer toggle"
    ],
    parameterDefaults: {},
    parameterControls: [],
    sampleChallenges: [
      {
        id: "ch-em-1",
        title: "Identify Visible Green Light",
        instruction: "Adjust the wavelength slider to locate green visible light at approximately 520 nm (~2.38 eV).",
        targetMetric: "Wavelength",
        targetValue: 520,
        tolerance: 15,
        currentValueKey: "wavelength",
        rewardBadge: "Spectral Analyst"
      },
      {
        id: "ch-em-2",
        title: "High-Energy Gamma Transition",
        instruction: "Configure the EM wave into the Gamma Ray regime with photon energy exceeding 100 keV.",
        targetMetric: "Energy (eV)",
        targetValue: 100000,
        tolerance: 50000,
        currentValueKey: "energyEv",
        rewardBadge: "Quantum Master"
      }
    ],
    previewFacts: [
      "Higher frequency electromagnetic waves carry higher photon energy according to E = hν (Planck's relation)",
      "Visible light represents only a tiny fraction of the electromagnetic spectrum between ~380 nm and ~750 nm"
    ],
    isHtmlApp: true,
    htmlContent: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Quantum EM Spectrum & Energy Simulator</title>
    <style>
        :root {
            --bg-color: #0b0f19;
            --card-bg: #161e2e;
            --accent-cyan: #00f2fe;
            --accent-pink: #ff007f;
            --accent-purple: #7b2cbf;
            --text-main: #f1f5f9;
            --text-muted: #94a3b8;
            --border-color: #2a364f;
        }

        * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
            font-family: 'Segoe UI', system-ui, -apple-system, sans-serif;
        }

        body {
            background-color: var(--bg-color);
            color: var(--text-main);
            display: flex;
            flex-direction: column;
            min-height: 100vh;
            padding: 20px;
        }

        header {
            text-align: center;
            margin-bottom: 20px;
        }

        header h1 {
            font-size: 2.2rem;
            background: linear-gradient(135deg, var(--accent-cyan), var(--accent-pink));
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            margin-bottom: 5px;
        }

        header p {
            color: var(--text-muted);
            font-size: 0.95rem;
        }

        .dashboard {
            display: grid;
            grid-template-columns: 1fr 340px;
            gap: 20px;
            max-width: 1400px;
            margin: 0 auto;
            width: 100%;
        }

        @media (max-width: 1024px) {
            .dashboard {
                grid-template-columns: 1fr;
            }
        }

        .simulation-container {
            display: flex;
            flex-direction: column;
            gap: 20px;
        }

        .canvas-card {
            background-color: var(--card-bg);
            border: 1px solid var(--border-color);
            border-radius: 12px;
            padding: 15px;
            box-shadow: 0 10px 25px rgba(0,0,0,0.5);
            position: relative;
            overflow: hidden;
        }

        canvas {
            width: 100%;
            height: 320px;
            background-color: #05070d;
            border-radius: 8px;
            display: block;
        }

        .spectrum-bar-container {
            margin-top: 10px;
            background: var(--card-bg);
            border: 1px solid var(--border-color);
            border-radius: 12px;
            padding: 15px;
        }

        .spectrum-bar {
            height: 30px;
            border-radius: 6px;
            background: linear-gradient(to right, 
                #400080 0%,   /* Gamma/X-Ray */
                #0000ff 20%,  /* UV */
                #00ffff 35%,  /* Visible Cyan */
                #00ff00 45%,  /* Visible Green */
                #ffff00 55%,  /* Visible Yellow */
                #ff0000 70%,  /* Infrared */
                #800000 85%,  /* Microwave */
                #200000 100%  /* Radio */
            );
            position: relative;
            cursor: pointer;
            box-shadow: 0 0 15px rgba(0, 242, 254, 0.2);
        }

        .spectrum-indicator {
            position: absolute;
            top: -5px;
            width: 4px;
            height: 40px;
            background: #ffffff;
            border: 1px solid #000;
            box-shadow: 0 0 10px #ffffff;
            transform: translateX(-50%);
            pointer-events: none;
            transition: left 0.1s ease-out;
        }

        .spectrum-labels {
            display: flex;
            justify-content: space-between;
            margin-top: 8px;
            font-size: 0.75rem;
            color: var(--text-muted);
        }

        .control-panel {
            background: var(--card-bg);
            border: 1px solid var(--border-color);
            border-radius: 12px;
            padding: 20px;
            display: flex;
            flex-direction: column;
            gap: 20px;
        }

        .panel-section h3 {
            font-size: 1.1rem;
            color: var(--accent-cyan);
            margin-bottom: 12px;
            border-bottom: 1px solid var(--border-color);
            padding-bottom: 5px;
        }

        .control-group {
            margin-bottom: 15px;
        }

        .control-group label {
            display: flex;
            justify-content: space-between;
            font-size: 0.85rem;
            margin-bottom: 6px;
            color: var(--text-main);
        }

        input[type="range"] {
            width: 100%;
            height: 6px;
            background: #2a364f;
            border-radius: 3px;
            outline: none;
            -webkit-appearance: none;
        }

        input[type="range"]::-webkit-slider-thumb {
            -webkit-appearance: none;
            width: 16px;
            height: 16px;
            border-radius: 50%;
            background: var(--accent-cyan);
            cursor: pointer;
            box-shadow: 0 0 8px var(--accent-cyan);
        }

        .preset-buttons {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 8px;
        }

        .btn {
            background: #1e293b;
            border: 1px solid var(--border-color);
            color: var(--text-main);
            padding: 8px 12px;
            border-radius: 6px;
            cursor: pointer;
            font-size: 0.8rem;
            transition: all 0.2s ease;
        }

        .btn:hover {
            background: var(--accent-purple);
            border-color: var(--accent-purple);
        }

        .metrics-grid {
            display: grid;
            grid-template-columns: 1fr;
            gap: 10px;
        }

        .metric-card {
            background: #0f172a;
            border: 1px solid var(--border-color);
            border-radius: 8px;
            padding: 10px 14px;
        }

        .metric-card .title {
            font-size: 0.75rem;
            color: var(--text-muted);
            text-transform: uppercase;
            letter-spacing: 0.5px;
        }

        .metric-card .value {
            font-size: 1.2rem;
            font-weight: bold;
            color: var(--accent-cyan);
            margin-top: 2px;
        }

        .metric-card .value.energy {
            color: var(--accent-pink);
        }

        .toggle-group {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-top: 10px;
        }

        /* Switch styles */
        .switch {
            position: relative;
            display: inline-block;
            width: 44px;
            height: 22px;
        }
        .switch input { opacity: 0; width: 0; height: 0; }
        .slider {
            position: absolute; cursor: pointer; top: 0; left: 0; right: 0; bottom: 0;
            background-color: #2a364f; transition: .4s; border-radius: 22px;
        }
        .slider:before {
            position: absolute; content: ""; height: 16px; width: 16px; left: 3px; bottom: 3px;
            background-color: white; transition: .4s; border-radius: 50%;
        }
        input:checked + .slider { background-color: var(--accent-pink); }
        input:checked + .slider:before { transform: translateX(22px); }
    </style>
</head>
<body>

    <header>
        <h1>Quantum Electromagnetic Wave & Energy Simulator</h1>
        <p>Explore wave-particle duality, frequency scaling, and Planck energy quantization</p>
    </header>

    <div class="dashboard">
        <!-- Main Simulation Visualizer -->
        <div class="simulation-container">
            <div class="canvas-card">
                <canvas id="waveCanvas"></canvas>
            </div>

            <!-- Spectrum Bar Track -->
            <div class="spectrum-bar-container">
                <div class="spectrum-bar" id="spectrumTrack">
                    <div class="spectrum-indicator" id="spectrumIndicator"></div>
                </div>
                <div class="spectrum-labels">
                    <span>Gamma Rays</span>
                    <span>X-Rays</span>
                    <span>UV</span>
                    <span>Visible</span>
                    <span>Infrared</span>
                    <span>Microwave</span>
                    <span>Radio</span>
                </div>
            </div>
        </div>

        <!-- Interactive Controls & Calculated Metrics -->
        <div class="control-panel">
            <div class="panel-section">
                <h3>Calculated Physical Metrics</h3>
                <div class="metrics-grid">
                    <div class="metric-card">
                        <div class="title">Wavelength (&lambda;)</div>
                        <div class="value" id="dispWavelength">500 nm</div>
                    </div>
                    <div class="metric-card">
                        <div class="title">Frequency (&nu;)</div>
                        <div class="value" id="dispFrequency">5.99 &times; 10<sup>14</sup> Hz</div>
                    </div>
                    <div class="metric-card">
                        <div class="title">Photon Energy (E = h&nu;)</div>
                        <div class="value energy" id="dispEnergy">3.97 &times; 10<sup>-19</sup> J</div>
                        <div style="font-size: 0.8rem; color: #cbd5e1; margin-top:2px;" id="dispEv">(2.48 eV)</div>
                    </div>
                </div>
            </div>

            <div class="panel-section">
                <h3>Controls</h3>
                <div class="control-group">
                    <label for="logWavelengthSlider">Log Wavelength Scale <span id="logVal"></span></label>
                    <input type="range" id="logWavelengthSlider" min="-12" max="1" step="0.01" value="-6.3">
                </div>
                <div class="control-group">
                    <label for="amplitudeSlider">Wave Amplitude</label>
                    <input type="range" id="amplitudeSlider" min="10" max="80" value="40">
                </div>
                <div class="toggle-group">
                    <span style="font-size: 0.9rem;">Show Photons (Particles)</span>
                    <label class="switch">
                        <input type="checkbox" id="toggleParticles" checked>
                        <span class="slider"></span>
                    </label>
                </div>
            </div>

            <div class="panel-section">
                <h3>EM Spectrum Presets</h3>
                <div class="preset-buttons">
                    <button class="btn" onclick="setPreset(-11)">Gamma Ray</button>
                    <button class="btn" onclick="setPreset(-9)">X-Ray</button>
                    <button class="btn" onclick="setPreset(-7.2)">Ultraviolet</button>
                    <button class="btn" onclick="setPreset(-6.3)">Visible Light</button>
                    <button class="btn" onclick="setPreset(-5)">Infrared</button>
                    <button class="btn" onclick="setPreset(-2)">Microwave</button>
                    <button class="btn" onclick="setPreset(0.5)">Radio Wave</button>
                </div>
            </div>
        </div>
    </div>

    <script>
        // Physical Constants
        const c = 2.99792458e8;       // Speed of light (m/s)
        const h = 6.62607015e-34;    // Planck's constant (J*s)
        const eV_conversion = 1.602176634e-19; // Joules per eV

        // Canvas Setup
        const canvas = document.getElementById('waveCanvas');
        const ctx = canvas.getContext('2d');
        
        function resizeCanvas() {
            canvas.width = canvas.clientWidth;
            canvas.height = canvas.clientHeight;
        }
        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();

        // UI Element References
        const logSlider = document.getElementById('logWavelengthSlider');
        const ampSlider = document.getElementById('amplitudeSlider');
        const particlesToggle = document.getElementById('toggleParticles');
        const dispWavelength = document.getElementById('dispWavelength');
        const dispFrequency = document.getElementById('dispFrequency');
        const dispEnergy = document.getElementById('dispEnergy');
        const dispEv = document.getElementById('dispEv');
        const spectrumIndicator = document.getElementById('spectrumIndicator');
        const spectrumTrack = document.getElementById('spectrumTrack');

        // Animation State variables
        let phase = 0;
        let particles = [];
        const numParticles = 40;

        // Initialize particles
        for(let i = 0; i < numParticles; i++) {
            particles.push({
                x: Math.random(),
                offset: (Math.random() - 0.5) * 20
            });
        }

        // Convert Log Wavelength Exponent to RGB Color for Aesthetics
        function getSpectrumColor(logWavelength) {
            // Visible Range is approx log10(380nm) = -6.42 to log10(750nm) = -6.12
            if (logWavelength < -9) return '#a855f7'; // Gamma - Deep Violet/Purple
            if (logWavelength < -7) return '#3b82f6'; // X-Ray / UV - Blue
            if (logWavelength >= -6.42 && logWavelength <= -6.12) {
                // Approximate Visible Spectrum Mapping
                let lambda = Math.pow(10, logWavelength) * 1e9; // nanometers
                return wavelengthToRgb(lambda);
            }
            if (logWavelength < -6.12 && logWavelength >= -7) return '#8b5cf6'; // Violet
            if (logWavelength < -3) return '#ef4444'; // Infrared - Red
            if (logWavelength < -1) return '#f97316'; // Microwave - Orange
            return '#eab308'; // Radio - Yellow
        }

        // Standard approximation formula for visible spectrum color
        function wavelengthToRgb(wavelength) {
            let r, g, b;
            if (wavelength >= 380 && wavelength < 440) {
                r = -(wavelength - 440) / (440 - 380); g = 0; b = 1;
            } else if (wavelength >= 440 && wavelength < 490) {
                r = 0; g = (wavelength - 440) / (490 - 440); b = 1;
            } else if (wavelength >= 490 && wavelength < 510) {
                r = 0; g = 1; b = -(wavelength - 510) / (510 - 490);
            } else if (wavelength >= 510 && wavelength < 580) {
                r = (wavelength - 510) / (580 - 510); g = 1; b = 0;
            } else if (wavelength >= 580 && wavelength < 645) {
                r = 1; g = -(wavelength - 645) / (645 - 580); b = 0;
            } else if (wavelength >= 645 && wavelength <= 780) {
                r = 1; g = 0; b = 0;
            } else {
                r = 0.5; g = 0.5; b = 0.5;
            }
            return \`rgb(\${Math.floor(r * 255)}, \${Math.floor(g * 255)}, \${Math.floor(b * 255)})\`;
        }

        // Metric Formatting Helper
        function formatScientific(num, unit) {
            if (num >= 0.01 && num <= 1000) return \`\${num.toFixed(2)} \${unit}\`;
            const exponent = Math.floor(Math.log10(num));
            const mantissa = (num / Math.pow(10, exponent)).toFixed(2);
            return \`\${mantissa} &times; 10<sup>\${exponent}</sup> \${unit}\`;
        }

        function formatWavelength(lambda) {
            if (lambda < 1e-9) return \`\${(lambda * 1e12).toFixed(2)} pm\`;
            if (lambda < 1e-6) return \`\${(lambda * 1e9).toFixed(2)} nm\`;
            if (lambda < 1e-3) return \`\${(lambda * 1e6).toFixed(2)} &mu;m\`;
            if (lambda < 1) return \`\${(lambda * 1e2).toFixed(2)} cm\`;
            return \`\${lambda.toFixed(2)} m\`;
        }

        function setPreset(logVal) {
            logSlider.value = logVal;
            update();
        }

        function updateMetrics() {
            const logWavelength = parseFloat(logSlider.value);
            const wavelength = Math.pow(10, logWavelength); // meters
            const frequency = c / wavelength;              // Hz
            const energyJ = h * frequency;                  // Joules
            const energyEV = energyJ / eV_conversion;        // eV

            // UI Updates
            dispWavelength.innerHTML = formatWavelength(wavelength);
            dispFrequency.innerHTML = formatScientific(frequency, 'Hz');
            dispEnergy.innerHTML = formatScientific(energyJ, 'J');
            dispEv.textContent = \`(\${energyEV < 0.01 ? energyEV.toExponential(2) : energyEV.toLocaleString(undefined, {maximumFractionDigits:2})} eV)\`;

            // Spectrum Indicator Position (-12 to 1 range mapped to 0% - 100%)
            const percent = ((logWavelength - (-12)) / (1 - (-12))) * 100;
            spectrumIndicator.style.left = \`\${Math.min(Math.max(percent, 0), 100)}%\`;
        }

        function draw() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            const logWavelength = parseFloat(logSlider.value);
            const amplitude = parseFloat(ampSlider.value);
            const waveColor = getSpectrumColor(logWavelength);

            // Calculate visual spatial frequency on screen
            // Map log wavelength (-12 to 1) to screen wavelength pixels
            const visualWavelength = 40 + ((logWavelength - (-12)) / 13) * (canvas.width / 1.5);
            const k = (2 * Math.PI) / visualWavelength; // Angular wave number for rendering

            const centerY = canvas.height / 2;

            // Draw Center Axis
            ctx.beginPath();
            ctx.strokeStyle = '#1e293b';
            ctx.lineWidth = 1;
            ctx.setLineDash([5, 5]);
            ctx.moveTo(0, centerY);
            ctx.lineTo(canvas.width, centerY);
            ctx.stroke();
            ctx.setLineDash([]);

            // Draw Main Sine Wave
            ctx.beginPath();
            ctx.lineWidth = 4;
            ctx.strokeStyle = waveColor;
            ctx.shadowColor = waveColor;
            ctx.shadowBlur = 15;

            for (let x = 0; x < canvas.width; x++) {
                const y = centerY + Math.sin(k * x - phase) * amplitude;
                if (x === 0) ctx.moveTo(x, y);
                else ctx.lineTo(x, y);
            }
            ctx.stroke();
            ctx.shadowBlur = 0; // Reset blur for performance

            // Render Quantum Photons (Particle Overlay)
            if (particlesToggle.checked) {
                particles.forEach(p => {
                    const px = (p.x * canvas.width + phase * 20) % canvas.width;
                    const py = centerY + Math.sin(k * px - phase) * amplitude + p.offset;

                    ctx.beginPath();
                    ctx.arc(px, py, 3, 0, Math.PI * 2);
                    ctx.fillStyle = '#ffffff';
                    ctx.shadowColor = waveColor;
                    ctx.shadowBlur = 8;
                    ctx.fill();
                    ctx.shadowBlur = 0;
                });
            }

            // Animation dynamic phase velocity scaling with frequency
            const freqSpeed = ((logWavelength - (-12)) / 13); 
            phase += 0.05 + (1 - freqSpeed) * 0.15; // Higher frequency = faster visual animation

            requestAnimationFrame(draw);
        }

        function update() {
            updateMetrics();
        }

        // Event Listeners
        logSlider.addEventListener('input', update);
        spectrumTrack.addEventListener('click', (e) => {
            const rect = spectrumTrack.getBoundingClientRect();
            const clickPos = (e.clientX - rect.left) / rect.width;
            const logVal = -12 + clickPos * (1 - (-12));
            logSlider.value = logVal;
            update();
        });

        // Initialize
        update();
        draw();
    </script>
</body>
</html>`,
    isCustomImport: true,
    authorEmail: "ndunj123@gmail.com",
    authorName: "Axiom Creator",
    createdAt: "2026-08-16"
  },
  {
    id: "sim-electric-circuit",
    title: "Electric Circuit Simulator",
    tagline: "DC circuit builder with resistors, batteries, switches, current flow & voltage drop analysis",
    discipline: "physics",
    gradeLevel: ["Middle School (6-8)", "High School (9-12)", "AP / IB STEM"],
    standards: ["HS-PS3-3", "AP Physics 2 (Unit 9)", "NGSS SEP-5"],
    description: "Construct interactive series and parallel DC circuits. Measure real-time current, potential difference across components, equivalent resistance, and power dissipation with embedded circuit controls.",
    learningObjectives: [
      "Verify Ohm's law (V = IR) across varying resistor networks",
      "Analyze Kirchhoff's current and voltage laws in complex multi-loop circuits",
      "Investigate how internal battery resistance influences terminal voltage"
    ],
    thumbnailGradient: "from-amber-600 via-yellow-500 to-orange-600",
    badgeColor: "bg-amber-500/10 text-amber-400 border-amber-500/20",
    iconName: "Zap",
    rating: 5.0,
    reviewCount: 48,
    teacherCount: 142,
    licenseType: "Academic STEM Classroom & Institutional License",
    pricing: {
      singleTeacher: 19,
      schoolDepartment: 200,
      districtUnlimited: 400
    },
    features: [
      "Zero-plugin interactive HTML5 circuit board",
      "Live ammeters and voltmeters",
      "Series and parallel branch switching",
      "Custom component parameter adjustments"
    ],
    parameterDefaults: {},
    parameterControls: [],
    sampleChallenges: [
      {
        id: "ch-circ-1",
        title: "Balanced Parallel Resistance",
        instruction: "Construct a circuit where total equivalent resistance equals exactly 10 Ohms using available resistors.",
        targetMetric: "R_eq",
        targetValue: 10,
        tolerance: 0.1,
        currentValueKey: "Req",
        rewardBadge: "Circuit Master"
      }
    ],
    previewFacts: [
      "Current splits inversely proportional to resistance in parallel branches",
      "Total power equals sum of power consumed in individual loads"
    ],
    isHtmlApp: true,
    htmlUrl: "https://electric-circuit-simulator.netlify.app/",
    isCustomImport: true,
    authorEmail: "ndunj123@gmail.com",
    authorName: "Axiom Creator",
    createdAt: "2026-08-15"
  },
  {
    id: "sim-atomic-electron-excitation",
    title: "Atomic Electron Excitation & Bohr Energy Levels",
    tagline: "Photon absorption, emission spectra, energy transitions, and quantum level jumps",
    discipline: "chemistry",
    gradeLevel: ["High School (9-12)", "AP / IB STEM", "Undergraduate"],
    standards: ["HS-PS4-3", "HS-PS1-1", "AP Chemistry (Unit 1)"],
    description: "Explore quantum transitions in atomic electron shells. Excite ground-state electrons with discrete photon wavelengths, visualize absorption/emission spectra, and calculate delta energy (E = hf).",
    learningObjectives: [
      "Relate incident photon frequency and wavelength to discrete orbital transition energies",
      "Identify the relationship between atomic emission lines and electron relaxation",
      "Understand quantization of angular momentum and Bohr energy states"
    ],
    thumbnailGradient: "from-indigo-600 via-purple-600 to-pink-600",
    badgeColor: "bg-purple-500/10 text-purple-400 border-purple-500/20",
    iconName: "Atom",
    rating: 4.9,
    reviewCount: 39,
    teacherCount: 118,
    licenseType: "Academic STEM Classroom & Institutional License",
    pricing: {
      singleTeacher: 19,
      schoolDepartment: 200,
      districtUnlimited: 400
    },
    features: [
      "Visual Bohr orbital electron animations",
      "Spectral line emission wavelength chart",
      "Photon energy absorption tuning",
      "Real-time quantum state readouts"
    ],
    parameterDefaults: {},
    parameterControls: [],
    sampleChallenges: [
      {
        id: "ch-atom-1",
        title: "Balmer Series Emission",
        instruction: "Induce a transition that produces visible blue photon emission at 486 nm.",
        targetMetric: "Wavelength",
        targetValue: 486,
        tolerance: 5,
        currentValueKey: "wavelength",
        rewardBadge: "Quantum Pioneer"
      }
    ],
    previewFacts: [
      "Electrons only absorb photons whose energy exactly matches the energy gap between orbitals",
      "The Balmer series corresponds to electron transitions down to principal quantum number n=2"
    ],
    isHtmlApp: true,
    htmlUrl: "https://atomic-electron-excitation-simulator.netlify.app/",
    isCustomImport: true,
    authorEmail: "ndunj123@gmail.com",
    authorName: "Axiom Creator",
    createdAt: "2026-08-15"
  },
  {
    id: "sim-simple-harmonic-motion",
    title: "Simple Harmonic Motion (SHM) Lab",
    tagline: "Oscillating mass-spring systems, pendulums, restorative forces, and phase space analysis",
    discipline: "physics",
    gradeLevel: ["High School (9-12)", "AP / IB STEM"],
    standards: ["HS-PS4-1", "AP Physics 1 (Unit 6)", "NGSS SEP-4"],
    description: "Investigate kinematic periodicity in mass-spring oscillators and pendulums. Observe real-time kinetic vs potential energy transformations, dampening effects, and calculate angular frequency.",
    learningObjectives: [
      "Verify that period T = 2π√(m/k) for spring-mass oscillators",
      "Track continuous conservation of mechanical energy between kinetic and elastic potential forms",
      "Analyze displacement, velocity, and acceleration sinusoidal phase relationships"
    ],
    thumbnailGradient: "from-sky-600 via-blue-600 to-indigo-600",
    badgeColor: "bg-sky-500/10 text-sky-400 border-sky-500/20",
    iconName: "Activity",
    rating: 5.0,
    reviewCount: 52,
    teacherCount: 165,
    licenseType: "Academic STEM Classroom & Institutional License",
    pricing: {
      singleTeacher: 19,
      schoolDepartment: 200,
      districtUnlimited: 400
    },
    features: [
      "Dynamic real-time oscillator canvas",
      "Live phase graphs (displacement, velocity, acceleration)",
      "Energy conservation bar charts",
      "Adjustable mass, spring constant, and damping"
    ],
    parameterDefaults: {},
    parameterControls: [],
    sampleChallenges: [
      {
        id: "ch-shm-1",
        title: "Exact 2.0-Second Period",
        instruction: "Configure spring constant and mass to achieve an oscillation period of exactly 2.0 seconds.",
        targetMetric: "Period (T)",
        targetValue: 2.0,
        tolerance: 0.05,
        currentValueKey: "period",
        rewardBadge: "Resonance Master"
      }
    ],
    previewFacts: [
      "In simple harmonic motion, maximum velocity occurs at the equilibrium position where net force is zero",
      "Acceleration is always directed toward equilibrium and is proportional to displacement"
    ],
    isHtmlApp: true,
    htmlUrl: "https://salemhills-simulated-shm.netlify.app/",
    isCustomImport: true,
    authorEmail: "ndunj123@gmail.com",
    authorName: "Axiom Creator",
    createdAt: "2026-08-15"
  },
  {
    id: "sim-archimedes-buoyancy",
    title: "Archimedes Principle, Flotation & Buoyancy",
    tagline: "Fluid displacement, buoyant force, density ratios, and submerged mass balance",
    discipline: "physics",
    gradeLevel: ["Middle School (6-8)", "High School (9-12)", "AP / IB STEM"],
    standards: ["MS-PS1-2", "HS-PS1-5", "AP Physics 2 (Unit 1)"],
    description: "Immerse objects of diverse densities in variable fluid media. Observe buoyant upward force, displaced liquid volume, apparent weight, and sinking versus floating equilibrium conditions.",
    learningObjectives: [
      "Demonstrate that buoyant force equals the weight of the fluid displaced (Fb = ρ * V * g)",
      "Predict floating, sinking, or neutral buoyancy from object vs fluid density ratios",
      "Measure apparent weight changes on submerged scales"
    ],
    thumbnailGradient: "from-teal-600 via-cyan-600 to-blue-600",
    badgeColor: "bg-teal-500/10 text-teal-400 border-teal-500/20",
    iconName: "Waves",
    rating: 4.9,
    reviewCount: 34,
    teacherCount: 104,
    licenseType: "Academic STEM Classroom & Institutional License",
    pricing: {
      singleTeacher: 19,
      schoolDepartment: 200,
      districtUnlimited: 400
    },
    features: [
      "Interactive fluid tank with volume displacement graduation",
      "Real-time spring scale weight readout",
      "Adjustable fluid density (water, oil, mercury, custom)",
      "Floating stability and neutral buoyancy demonstrations"
    ],
    parameterDefaults: {},
    parameterControls: [],
    sampleChallenges: [
      {
        id: "ch-buoy-1",
        title: "Neutral Buoyancy Equilibrium",
        instruction: "Adjust object mass and volume so the object remains completely suspended mid-tank without sinking to bottom.",
        targetMetric: "Net Force",
        targetValue: 0,
        tolerance: 0.1,
        currentValueKey: "netForce",
        rewardBadge: "Hydrostatic Expert"
      }
    ],
    previewFacts: [
      "An object floats when its average density is less than the density of the surrounding fluid",
      "Apparent weight in fluid equals actual dry weight minus the buoyant force"
    ],
    isHtmlApp: true,
    htmlUrl: "https://archimedes-floatation-buoyancy.netlify.app/",
    isCustomImport: true,
    authorEmail: "ndunj123@gmail.com",
    authorName: "Axiom Creator",
    createdAt: "2026-08-15"
  },
  {
    id: "sim-refraction-refractive-index",
    title: "Refraction & Snell's Law Optics Lab",
    tagline: "Light wave propagation across media boundaries, critical angles, and total internal reflection",
    discipline: "physics",
    gradeLevel: ["High School (9-12)", "AP / IB STEM"],
    standards: ["HS-PS4-2", "AP Physics 2 (Unit 10)", "NGSS SEP-5"],
    description: "Direct laser light rays through glass prisms, water, and optical media. Measure incident and refracted angles, verify Snell's Law (n1*sinθ1 = n2*sinθ2), and explore total internal reflection.",
    learningObjectives: [
      "Apply Snell's Law to calculate refractive indices and bending angles",
      "Determine the critical angle for total internal reflection between dense and rare media",
      "Observe light speed changes as photons enter materials of higher optical density"
    ],
    thumbnailGradient: "from-blue-600 via-indigo-500 to-purple-600",
    badgeColor: "bg-blue-500/10 text-blue-400 border-blue-500/20",
    iconName: "Compass",
    rating: 5.0,
    reviewCount: 43,
    teacherCount: 130,
    licenseType: "Academic STEM Classroom & Institutional License",
    pricing: {
      singleTeacher: 19,
      schoolDepartment: 200,
      districtUnlimited: 400
    },
    features: [
      "Interactive 360-degree laser angle emitter",
      "Precision protractor overlay and normal axis",
      "Variable media (Air, Water, Glass, Diamond, Mystery)",
      "Total internal reflection critical angle indicator"
    ],
    parameterDefaults: {},
    parameterControls: [],
    sampleChallenges: [
      {
        id: "ch-refr-1",
        title: "Find the Mystery Index",
        instruction: "Measure incident and refracted angles to determine the refractive index of the unknown material.",
        targetMetric: "Refractive Index (n)",
        targetValue: 1.52,
        tolerance: 0.02,
        currentValueKey: "refractiveIndex",
        rewardBadge: "Optics Master"
      }
    ],
    previewFacts: [
      "Light bends toward the normal line when passing into an optically denser medium",
      "Total internal reflection only occurs when light travels from a higher to a lower index medium"
    ],
    isHtmlApp: true,
    htmlUrl: "https://refraction-refractive-index-simulator.netlify.app/",
    isCustomImport: true,
    authorEmail: "ndunj123@gmail.com",
    authorName: "Axiom Creator",
    createdAt: "2026-08-15"
  },
  {
    id: "sim-motion-projectile",
    title: "Kinematics: 2D Projectile Motion Lab",
    tagline: "Launch angles, initial velocities, air drag, parabolic trajectories, and range calculation",
    discipline: "physics",
    gradeLevel: ["High School (9-12)", "AP / IB STEM"],
    standards: ["HS-PS2-1", "AP Physics 1 (Unit 1)", "NGSS SEP-5"],
    description: "Launch cannon projectiles across customizable gravitational fields. Decompose 2D velocity vectors into independent horizontal (vx) and vertical (vy) components, with real-time flight time and apex metrics.",
    learningObjectives: [
      "Demonstrate independence of horizontal motion (constant velocity) and vertical motion (constant acceleration g)",
      "Verify that 45 degrees provides maximum range in vacuum conditions",
      "Analyze effects of air resistance on terminal velocity and trajectory asymmetry"
    ],
    thumbnailGradient: "from-orange-600 via-red-600 to-pink-600",
    badgeColor: "bg-rose-500/10 text-rose-400 border-rose-500/20",
    iconName: "Target",
    rating: 5.0,
    reviewCount: 65,
    teacherCount: 190,
    licenseType: "Academic STEM Classroom & Institutional License",
    pricing: {
      singleTeacher: 19,
      schoolDepartment: 200,
      districtUnlimited: 400
    },
    features: [
      "Real-time parabolic trajectory trace with vector overlays",
      "Adjustable launch height, angle, velocity, and gravity",
      "Interactive landing target with bulls-eye accuracy score",
      "Flight time, max height, and range readouts"
    ],
    parameterDefaults: {},
    parameterControls: [],
    sampleChallenges: [
      {
        id: "ch-proj-1",
        title: "Direct Target Strike",
        instruction: "Hit a target positioned 45 meters away with a launch height of 5 meters on the first attempt.",
        targetMetric: "Target Distance",
        targetValue: 45,
        tolerance: 0.5,
        currentValueKey: "distance",
        rewardBadge: "Marksman Physicist"
      }
    ],
    previewFacts: [
      "Complementary launch angles (e.g. 30° and 60°) produce identical horizontal range in a vacuum",
      "At the apex of flight, the vertical velocity component is momentary zero"
    ],
    isHtmlApp: true,
    htmlUrl: "https://motion-of-a-projectile.netlify.app/",
    htmlContent: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Kinematics: 2D Dynamic Projectile Motion Telemetry Lab</title>
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; user-select: none; }
    body {
      background: #020617;
      color: #f8fafc;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      padding: 12px;
      gap: 12px;
      overflow-x: hidden;
    }
    .header-bar {
      display: flex;
      justify-content: space-between;
      align-items: center;
      background: #0f172a;
      border: 1px solid #1e293b;
      padding: 10px 16px;
      border-radius: 12px;
    }
    .title-group h1 { font-size: 15px; font-weight: 700; color: #38bdf8; display: flex; align-items: center; gap: 8px; }
    .badge { font-size: 11px; padding: 3px 8px; border-radius: 6px; background: rgba(56, 189, 248, 0.15); color: #38bdf8; border: 1px solid rgba(56, 189, 248, 0.3); }
    .stage-container {
      position: relative;
      background: #090d16;
      border: 1px solid #1e293b;
      border-radius: 16px;
      overflow: hidden;
      box-shadow: 0 10px 30px rgba(0,0,0,0.5);
    }
    canvas { width: 100%; height: 360px; display: block; }
    .vector-legend {
      position: absolute;
      top: 12px;
      left: 12px;
      background: rgba(15, 23, 42, 0.88);
      backdrop-filter: blur(8px);
      border: 1px solid #334155;
      border-radius: 10px;
      padding: 6px 12px;
      font-size: 11px;
      font-family: monospace;
      display: flex;
      gap: 12px;
      align-items: center;
      color: #cbd5e1;
    }
    .dot { width: 8px; height: 8px; border-radius: 50%; display: inline-block; }
    .telemetry-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(130px, 1fr));
      gap: 10px;
    }
    .metric-card {
      background: #0f172a;
      border: 1px solid #1e293b;
      border-radius: 12px;
      padding: 10px 12px;
      display: flex;
      flex-direction: column;
      gap: 4px;
    }
    .metric-card.highlight { border-color: rgba(56, 189, 248, 0.4); background: rgba(56, 189, 248, 0.05); }
    .metric-label { font-size: 10px; text-transform: uppercase; letter-spacing: 0.5px; color: #94a3b8; font-weight: 600; }
    .metric-value { font-size: 20px; font-weight: 700; font-family: monospace; color: #38bdf8; }
    .metric-unit { font-size: 11px; color: #64748b; font-weight: normal; margin-left: 3px; }
    .controls-panel {
      background: #0f172a;
      border: 1px solid #1e293b;
      border-radius: 14px;
      padding: 14px 16px;
      display: flex;
      flex-direction: column;
      gap: 12px;
    }
    .controls-title { font-size: 12px; font-weight: 700; color: #cbd5e1; display: flex; justify-content: space-between; align-items: center; }
    .controls-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 14px;
    }
    .control-row { display: flex; flex-direction: column; gap: 6px; }
    .control-header { display: flex; justify-content: space-between; font-size: 11px; color: #94a3b8; }
    .control-header span.val { font-family: monospace; font-weight: 700; color: #f8fafc; }
    input[type=range] {
      width: 100%;
      height: 6px;
      background: #1e293b;
      border-radius: 4px;
      outline: none;
      -webkit-appearance: none;
      cursor: pointer;
    }
    input[type=range]::-webkit-slider-thumb {
      -webkit-appearance: none;
      width: 16px;
      height: 16px;
      border-radius: 50%;
      background: #38bdf8;
      cursor: pointer;
      box-shadow: 0 0 10px rgba(56, 189, 248, 0.6);
    }
    .btn-toolbar {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 10px;
    }
    .btn-group { display: flex; gap: 8px; }
    button {
      padding: 8px 16px;
      border-radius: 10px;
      font-size: 12px;
      font-weight: 600;
      cursor: pointer;
      border: 1px solid transparent;
      transition: all 0.15s ease;
      display: flex;
      align-items: center;
      gap: 6px;
    }
    .btn-primary { background: #38bdf8; color: #090d16; }
    .btn-primary:hover { background: #7dd3fc; }
    .btn-secondary { background: #1e293b; color: #e2e8f0; border-color: #334155; }
    .btn-secondary:hover { background: #334155; }
    button:disabled { opacity: 0.5; cursor: not-allowed; }
  </style>
</head>
<body>

  <div class="header-bar">
    <div class="title-group">
      <h1>Kinematics: 2D Dynamic Projectile Motion Telemetry</h1>
    </div>
    <div class="badge">Independent Elevation Stabilized</div>
  </div>

  <div class="stage-container">
    <canvas id="simCanvas"></canvas>
    <div class="vector-legend">
      <span><span class="dot" style="background:#38bdf8"></span> Resultant v</span>
      <span><span class="dot" style="background:#10b981"></span> vx (Horizontal)</span>
      <span><span class="dot" style="background:#f59e0b"></span> vy (Vertical)</span>
    </div>
  </div>

  <div class="telemetry-grid">
    <div class="metric-card highlight">
      <span class="metric-label">Launch Height (h₀)</span>
      <div class="metric-value" style="color:#38bdf8"><span id="mH0">15.0</span><span class="metric-unit">m</span></div>
    </div>
    <div class="metric-card">
      <span class="metric-label">Max Apex Height</span>
      <div class="metric-value" style="color:#10b981"><span id="mMaxH">15.0</span><span class="metric-unit">m</span></div>
    </div>
    <div class="metric-card">
      <span class="metric-label">Horizontal Range</span>
      <div class="metric-value" style="color:#f59e0b"><span id="mRange">0.0</span><span class="metric-unit">m</span></div>
    </div>
    <div class="metric-card">
      <span class="metric-label">Flight Air Time</span>
      <div class="metric-value" style="color:#c084fc"><span id="mTime">0.00</span><span class="metric-unit">s</span></div>
    </div>
    <div class="metric-card">
      <span class="metric-label">Total Mech Energy</span>
      <div class="metric-value" style="color:#f43f5e"><span id="mEnergy">0</span><span class="metric-unit">J</span></div>
    </div>
  </div>

  <div class="controls-panel">
    <div class="controls-title">
      <span>Independent Laboratory Parameter Controls</span>
      <span style="color:#10b981;font-family:monospace;font-size:10px;">h₀ decoupled from v₀</span>
    </div>
    <div class="controls-grid">
      <div class="control-row">
        <div class="control-header">
          <span>Initial Velocity (v₀)</span>
          <span class="val" id="valV0">35 m/s</span>
        </div>
        <input type="range" id="sliderV0" min="5" max="65" step="1" value="35">
      </div>

      <div class="control-row">
        <div class="control-header">
          <span>Launch Platform Height (h₀)</span>
          <span class="val" id="valH0">15 m</span>
        </div>
        <input type="range" id="sliderH0" min="0" max="60" step="1" value="15">
      </div>

      <div class="control-row">
        <div class="control-header">
          <span>Launch Angle (θ)</span>
          <span class="val" id="valAngle">45°</span>
        </div>
        <input type="range" id="sliderAngle" min="0" max="90" step="1" value="45">
      </div>

      <div class="control-row">
        <div class="control-header">
          <span>Gravitational Field (g)</span>
          <span class="val" id="valG">9.81 m/s²</span>
        </div>
        <input type="range" id="sliderG" min="1.6" max="25" step="0.1" value="9.81">
      </div>

      <div class="control-row">
        <div class="control-header">
          <span>Air Resistance (k)</span>
          <span class="val" id="valK">0.002</span>
        </div>
        <input type="range" id="sliderK" min="0" max="0.01" step="0.001" value="0.002">
      </div>

      <div class="control-row">
        <div class="control-header">
          <span>Projectile Mass (m)</span>
          <span class="val" id="valM">2.0 kg</span>
        </div>
        <input type="range" id="sliderM" min="0.5" max="10" step="0.5" value="2.0">
      </div>
    </div>
  </div>

  <div class="btn-toolbar">
    <div class="btn-group">
      <button class="btn-primary" id="btnLaunch">▶ Launch Trajectory</button>
      <button class="btn-secondary" id="btnReset">↺ Reset Lab</button>
    </div>
  </div>

  <script>
    const canvas = document.getElementById('simCanvas');
    const ctx = canvas.getContext('2d');

    // Controls
    const sliderV0 = document.getElementById('sliderV0');
    const sliderH0 = document.getElementById('sliderH0');
    const sliderAngle = document.getElementById('sliderAngle');
    const sliderG = document.getElementById('sliderG');
    const sliderK = document.getElementById('sliderK');
    const sliderM = document.getElementById('sliderM');

    // Displays
    const valV0 = document.getElementById('valV0');
    const valH0 = document.getElementById('valH0');
    const valAngle = document.getElementById('valAngle');
    const valG = document.getElementById('valG');
    const valK = document.getElementById('valK');
    const valM = document.getElementById('valM');

    const mH0 = document.getElementById('mH0');
    const mMaxH = document.getElementById('mMaxH');
    const mRange = document.getElementById('mRange');
    const mTime = document.getElementById('mTime');
    const mEnergy = document.getElementById('mEnergy');

    const btnLaunch = document.getElementById('btnLaunch');
    const btnReset = document.getElementById('btnReset');

    let state = {
      x: 0,
      y: 15,
      vx: 0,
      vy: 0,
      t: 0,
      maxH: 15,
      path: [],
      isPlaying: false,
      isComplete: false,
      animId: null
    };

    let ghostPaths = [];

    function resize() {
      canvas.width = canvas.clientWidth * window.devicePixelRatio;
      canvas.height = canvas.clientHeight * window.devicePixelRatio;
      draw();
    }
    window.addEventListener('resize', resize);

    function getParams() {
      return {
        v0: parseFloat(sliderV0.value),
        h0: parseFloat(sliderH0.value),
        angle: parseFloat(sliderAngle.value),
        g: parseFloat(sliderG.value),
        k: parseFloat(sliderK.value),
        m: parseFloat(sliderM.value)
      };
    }

    function updateParamLabels() {
      const p = getParams();
      valV0.innerText = p.v0 + ' m/s';
      valH0.innerText = p.h0 + ' m';
      valAngle.innerText = p.angle + '°';
      valG.innerText = p.g.toFixed(2) + ' m/s²';
      valK.innerText = p.k.toFixed(3);
      valM.innerText = p.m.toFixed(1) + ' kg';
      mH0.innerText = p.h0.toFixed(1);
    }

    function reset() {
      if (state.animId) cancelAnimationFrame(state.animId);
      const p = getParams();
      const rad = p.angle * Math.PI / 180;
      const v0x = p.v0 * Math.cos(rad);
      const v0y = p.v0 * Math.sin(rad);

      // Explicitly set initial y to launch platform height h0 regardless of velocity
      state.x = 0;
      state.y = p.h0;
      state.vx = v0x;
      state.vy = v0y;
      state.t = 0;
      state.maxH = p.h0;
      state.path = [{ x: 0, y: p.h0 }];
      state.isPlaying = false;
      state.isComplete = false;

      updateTelemetry(0, p.h0, v0x, v0y);
      draw();
    }

    function updateTelemetry(x, y, vx, vy) {
      const p = getParams();
      const vMag = Math.sqrt(vx * vx + vy * vy);
      const ke = 0.5 * p.m * vMag * vMag;
      const pe = p.m * p.g * Math.max(0, y);
      state.maxH = Math.max(state.maxH, y);

      mH0.innerText = p.h0.toFixed(1);
      mMaxH.innerText = state.maxH.toFixed(1);
      mRange.innerText = x.toFixed(1);
      mTime.innerText = state.t.toFixed(2);
      mEnergy.innerText = Math.round(ke + pe);
    }

    function launch() {
      if (state.animId) cancelAnimationFrame(state.animId);
      const p = getParams();
      const rad = p.angle * Math.PI / 180;

      state.x = 0;
      state.y = p.h0;
      state.vx = p.v0 * Math.cos(rad);
      state.vy = p.v0 * Math.sin(rad);
      state.t = 0;
      state.maxH = p.h0;
      state.path = [{ x: 0, y: p.h0 }];
      state.isPlaying = true;
      state.isComplete = false;

      btnLaunch.innerText = "▶ In Flight...";
      btnLaunch.disabled = true;

      const dt = 0.025;

      function step() {
        if (state.isComplete) return;

        const vMag = Math.sqrt(state.vx * state.vx + state.vy * state.vy);
        const dragFx = -p.k * vMag * state.vx;
        const dragFy = -p.k * vMag * state.vy;

        const ax = dragFx / p.m;
        const ay = -p.g + dragFy / p.m;

        state.vx += ax * dt;
        state.vy += ay * dt;
        state.x += state.vx * dt;
        state.y += state.vy * dt;
        state.t += dt;

        if (state.y <= 0 && state.t > 0.04) {
          state.y = 0;
          state.isComplete = true;
          state.isPlaying = false;
          btnLaunch.innerText = "▶ Launch Trajectory";
          btnLaunch.disabled = false;
          ghostPaths.push([...state.path]);
          if (ghostPaths.length > 3) ghostPaths.shift();
        }

        state.path.push({ x: state.x, y: state.y });
        updateTelemetry(state.x, state.y, state.vx, state.vy);
        draw();

        if (!state.isComplete) {
          state.animId = requestAnimationFrame(step);
        }
      }

      state.animId = requestAnimationFrame(step);
    }

    function draw() {
      const w = canvas.width;
      const h = canvas.height;
      const dpr = window.devicePixelRatio || 1;

      ctx.clearRect(0, 0, w, h);

      const groundH = 45 * dpr;
      const originX = 55 * dpr;
      const originY = h - groundH;
      const scaleX = (w - 100 * dpr) / 220;
      const scaleY = (h - 100 * dpr) / 100;

      // Sky
      const skyGrad = ctx.createLinearGradient(0, 0, 0, h - groundH);
      skyGrad.addColorStop(0, '#090d16');
      skyGrad.addColorStop(1, '#1e293b');
      ctx.fillStyle = skyGrad;
      ctx.fillRect(0, 0, w, h - groundH);

      // Ground
      ctx.fillStyle = '#1e293b';
      ctx.fillRect(0, h - groundH, w, groundH);
      ctx.fillStyle = '#10b981';
      ctx.fillRect(0, h - groundH, w, 4 * dpr);

      // Grid
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.06)';
      ctx.lineWidth = 1 * dpr;
      for (let m = 20; m <= 220; m += 20) {
        const gx = originX + m * scaleX;
        ctx.beginPath();
        ctx.moveTo(gx, 0);
        ctx.lineTo(gx, originY);
        ctx.stroke();

        ctx.fillStyle = '#64748b';
        ctx.font = (10 * dpr) + 'px monospace';
        ctx.fillText(m + 'm', gx - 8 * dpr, originY + 16 * dpr);
      }

      for (let y = 10; y <= 90; y += 10) {
        const gy = originY - y * scaleY;
        ctx.beginPath();
        ctx.moveTo(originX, gy);
        ctx.lineTo(w, gy);
        ctx.stroke();

        ctx.fillStyle = '#64748b';
        ctx.font = (10 * dpr) + 'px monospace';
        ctx.fillText(y + 'm', 10 * dpr, gy + 4 * dpr);
      }

      const p = getParams();
      const platformW = 34 * dpr;
      const platformTopY = originY - p.h0 * scaleY;

      // Launch Platform (firmly fixed at h0)
      ctx.fillStyle = '#334155';
      ctx.fillRect(originX - platformW, platformTopY, platformW, p.h0 * scaleY);
      ctx.strokeStyle = '#64748b';
      ctx.lineWidth = 2 * dpr;
      ctx.strokeRect(originX - platformW, platformTopY, platformW, p.h0 * scaleY);

      ctx.fillStyle = '#38bdf8';
      ctx.fillRect(originX - platformW - 2 * dpr, platformTopY - 2 * dpr, platformW + 4 * dpr, 4 * dpr);

      // Height dimension indicator
      if (p.h0 > 0) {
        ctx.strokeStyle = 'rgba(56, 189, 248, 0.6)';
        ctx.lineWidth = 1.5 * dpr;
        ctx.setLineDash([3 * dpr, 3 * dpr]);
        ctx.beginPath();
        ctx.moveTo(originX - platformW - 8 * dpr, originY);
        ctx.lineTo(originX - platformW - 8 * dpr, platformTopY);
        ctx.stroke();
        ctx.setLineDash([]);
      }

      // Ghost paths
      ghostPaths.forEach((path, idx) => {
        ctx.strokeStyle = 'rgba(56, 189, 248, 0.25)';
        ctx.lineWidth = 1.5 * dpr;
        ctx.setLineDash([4 * dpr, 4 * dpr]);
        ctx.beginPath();
        ctx.moveTo(originX, originY - path[0].y * scaleY);
        path.forEach(pt => ctx.lineTo(originX + pt.x * scaleX, originY - pt.y * scaleY));
        ctx.stroke();
        ctx.setLineDash([]);
      });

      // Active Path
      if (state.path.length > 1) {
        ctx.strokeStyle = '#38bdf8';
        ctx.lineWidth = 3 * dpr;
        ctx.beginPath();
        ctx.moveTo(originX, originY - state.path[0].y * scaleY);
        for (const pt of state.path) {
          ctx.lineTo(originX + pt.x * scaleX, originY - pt.y * scaleY);
        }
        ctx.stroke();
      }

      // Projectile Coordinates
      const projPx = originX + state.x * scaleX;
      const projPy = originY - state.y * scaleY;

      // Cannon
      const rad = p.angle * Math.PI / 180;
      ctx.save();
      ctx.translate(originX, platformTopY);
      ctx.rotate(-rad);
      ctx.fillStyle = '#94a3b8';
      ctx.fillRect(0, -5 * dpr, 26 * dpr, 10 * dpr);
      ctx.strokeStyle = '#e2e8f0';
      ctx.lineWidth = 2 * dpr;
      ctx.strokeRect(0, -5 * dpr, 26 * dpr, 10 * dpr);
      ctx.restore();

      ctx.fillStyle = '#64748b';
      ctx.beginPath();
      ctx.arc(originX, platformTopY, 8 * dpr, 0, Math.PI * 2);
      ctx.fill();

      // Projectile Ball
      ctx.fillStyle = '#f59e0b';
      ctx.beginPath();
      ctx.arc(projPx, projPy, 6 * dpr, 0, Math.PI * 2);
      ctx.fill();
      ctx.strokeStyle = '#ffffff';
      ctx.lineWidth = 2 * dpr;
      ctx.stroke();

      // Live Vectors
      if (state.isPlaying) {
        const vxLen = state.vx * 0.7 * dpr;
        const vyLen = -state.vy * 0.7 * dpr;

        ctx.strokeStyle = '#10b981';
        ctx.lineWidth = 2 * dpr;
        ctx.beginPath();
        ctx.moveTo(projPx, projPy);
        ctx.lineTo(projPx + vxLen, projPy);
        ctx.stroke();

        ctx.strokeStyle = '#f59e0b';
        ctx.beginPath();
        ctx.moveTo(projPx, projPy);
        ctx.lineTo(projPx, projPy + vyLen);
        ctx.stroke();

        ctx.strokeStyle = '#38bdf8';
        ctx.lineWidth = 2.5 * dpr;
        ctx.beginPath();
        ctx.moveTo(projPx, projPy);
        ctx.lineTo(projPx + vxLen, projPy + vyLen);
        ctx.stroke();
      }
    }

    [sliderV0, sliderH0, sliderAngle, sliderG, sliderK, sliderM].forEach(slider => {
      slider.addEventListener('input', () => {
        updateParamLabels();
        if (!state.isPlaying) reset();
      });
    });

    btnLaunch.addEventListener('click', launch);
    btnReset.addEventListener('click', reset);

    updateParamLabels();
    resize();
    reset();
  </script>
</body>
</html>`,
    isCustomImport: true,
    authorEmail: "ndunj123@gmail.com",
    authorName: "Axiom Creator",
    createdAt: "2026-08-15"
  },
  {
    id: "sim-photosynthesis-plant-growth",
    title: "Photosynthesis & Cellular Energy Dynamics",
    tagline: "Light intensity, CO2 concentration, stomatal conductance, and biomass accumulation",
    discipline: "biology",
    gradeLevel: ["Middle School (6-8)", "High School (9-12)", "AP / IB STEM"],
    standards: ["HS-LS1-5", "HS-LS2-3", "AP Biology (Unit 3)"],
    description: "Simulate photochemical light reactions and the Calvin cycle in plant cells. Adjust photon lux, ambient carbon dioxide ppm, temperature, and water availability to optimize glucose production rates.",
    learningObjectives: [
      "Model how limiting factors (light, CO2, temperature) govern photosynthetic rate curves",
      "Connect photon absorption by chlorophyll to oxygen bubble evolution and ATP synthesis",
      "Understand enzyme denaturation at supra-optimal temperature thresholds"
    ],
    thumbnailGradient: "from-emerald-600 via-green-500 to-teal-600",
    badgeColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
    iconName: "Leaf",
    rating: 4.9,
    reviewCount: 41,
    teacherCount: 122,
    licenseType: "Academic STEM Classroom & Institutional License",
    pricing: {
      singleTeacher: 19,
      schoolDepartment: 200,
      districtUnlimited: 400
    },
    features: [
      "Animated chloroplast and cellular respiration stage",
      "Live O2 production bubble counter and glucose output meter",
      "Limiting factor rate curve grapher",
      "Multi-variable environmental control suite"
    ],
    parameterDefaults: {},
    parameterControls: [],
    sampleChallenges: [
      {
        id: "ch-photo-1",
        title: "Maximum Carbon Fixation",
        instruction: "Achieve the peak oxygen production rate by identifying optimal light and CO2 saturation points.",
        targetMetric: "O2 Rate (bubbles/min)",
        targetValue: 80,
        tolerance: 2,
        currentValueKey: "o2Rate",
        rewardBadge: "Botanical Biochemist"
      }
    ],
    previewFacts: [
      "Photosynthesis converts solar energy into chemical energy stored in glucose bonds: 6CO2 + 6H2O -> C6H12O6 + 6O2",
      "Rate of photosynthesis plateaus once light or carbon dioxide saturation limits RuBisCO enzyme turnover"
    ],
    isHtmlApp: true,
    htmlUrl: "https://photosynthesis-plantgrowth-simulator.netlify.app/",
    isCustomImport: true,
    authorEmail: "ndunj123@gmail.com",
    authorName: "Axiom Creator",
    createdAt: "2026-08-15"
  },
  {
    id: "sim-communication-satellite-orbit",
    title: "Orbital Mechanics & Satellite Communications",
    tagline: "Geostationary orbits, Kepler's laws, signal latency, gravitational potential wells",
    discipline: "physics",
    gradeLevel: ["High School (9-12)", "AP / IB STEM"],
    standards: ["HS-ESS1-4", "HS-PS2-4", "AP Physics 1 (Unit 3)"],
    description: "Launch and synchronize communication satellites into Earth orbits. Calculate orbital periods using Kepler's Third Law (T^2 ∝ r^3), maintain geostationary synchronization, and calculate signal transmission latency.",
    learningObjectives: [
      "Calculate orbital velocity v = √(GM/r) for circular orbits at arbitrary altitudes",
      "Explain why geostationary satellites must orbit at ~35,786 km above the equator",
      "Analyze gravitational force variations as a function of inverse-square radial distance"
    ],
    thumbnailGradient: "from-blue-700 via-indigo-800 to-slate-900",
    badgeColor: "bg-indigo-500/10 text-indigo-400 border-indigo-500/20",
    iconName: "Globe",
    rating: 5.0,
    reviewCount: 38,
    teacherCount: 112,
    licenseType: "Academic STEM Classroom & Institutional License",
    pricing: {
      singleTeacher: 19,
      schoolDepartment: 200,
      districtUnlimited: 400
    },
    features: [
      "Dynamic 2D orbital gravity simulation canvas",
      "Real-time radio link transmission latency display",
      "Earth rotation synchronization indicator",
      "Escape velocity and orbital decay visualizations"
    ],
    parameterDefaults: {},
    parameterControls: [],
    sampleChallenges: [
      {
        id: "ch-orbit-1",
        title: "Lock Geostationary Orbit",
        instruction: "Position the satellite so its orbital period precisely matches Earth's 24-hour rotational period.",
        targetMetric: "Period (hours)",
        targetValue: 24,
        tolerance: 0.1,
        currentValueKey: "periodHours",
        rewardBadge: "Aerospace Navigator"
      }
    ],
    previewFacts: [
      "Satellites in lower orbits travel faster and complete revolutions in shorter times than higher orbit satellites",
      "Geostationary satellites remain fixed relative to a ground station, eliminating satellite tracking dish needs"
    ],
    isHtmlApp: true,
    htmlUrl: "https://communication-satelite-in-orbit.netlify.app/",
    isCustomImport: true,
    authorEmail: "ndunj123@gmail.com",
    authorName: "Axiom Creator",
    createdAt: "2026-08-15"
  },
  {
    id: "sim-cro-oscilloscope",
    title: "Cathode Ray Oscilloscope (CRO) & Signal Lab",
    tagline: "Time-base generators, volts/div calibration, electron beam deflection, and AC waveform analysis",
    discipline: "physics",
    gradeLevel: ["High School (9-12)", "AP / IB STEM", "Undergraduate"],
    standards: ["HS-PS4-5", "AP Physics 2 (Unit 9)", "NGSS SEP-3"],
    description: "Master laboratory test equipment with an authentic virtual dual-trace oscilloscope. Adjust Time/Div and Volts/Div dials, calibrate triggered sweep speeds, and measure sinusoidal, square, and triangular signal frequencies.",
    learningObjectives: [
      "Interpret graticule divisions to calculate AC peak-to-peak voltage and frequency",
      "Explain electrostatic electron beam deflection via X and Y deflection plates",
      "Measure phase shift between two synchronized sinusoidal signals"
    ],
    thumbnailGradient: "from-emerald-700 via-teal-800 to-slate-900",
    badgeColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
    iconName: "Activity",
    rating: 5.0,
    reviewCount: 46,
    teacherCount: 135,
    licenseType: "Academic STEM Classroom & Institutional License",
    pricing: {
      singleTeacher: 19,
      schoolDepartment: 200,
      districtUnlimited: 400
    },
    features: [
      "Interactive phosphorus CRT screen with graticule grid",
      "Authentic Time/Div and Volts/Div selector controls",
      "Dual-channel signal generator with waveform selectors",
      "X-Y Lissajous figure mode for phase angle measurement"
    ],
    parameterDefaults: {},
    parameterControls: [],
    sampleChallenges: [
      {
        id: "ch-cro-1",
        title: "Measure Unknown Signal Frequency",
        instruction: "Calibrate Time/Div to determine the frequency of the input sinusoidal test tone.",
        targetMetric: "Frequency (Hz)",
        targetValue: 250,
        tolerance: 5,
        currentValueKey: "measuredFreq",
        rewardBadge: "Signal Analyst"
      }
    ],
    previewFacts: [
      "The CRO visualizes electrical voltage fluctuations as a function of time",
      "Signal period T is determined by multiplying horizontal divisions per cycle by the Time/Div setting"
    ],
    isHtmlApp: true,
    htmlUrl: "https://cathode-ray-oscilloscope-simulator.netlify.app/",
    isCustomImport: true,
    authorEmail: "ndunj123@gmail.com",
    authorName: "Axiom Creator",
    createdAt: "2026-08-15"
  },
  {
    id: "sim-cumulative-frequency-ogive",
    title: "Cumulative Frequency & Ogive Curve Analyzer",
    tagline: "Percentile estimation, quartiles, median calculation, and statistical distribution modeling",
    discipline: "mathematics",
    gradeLevel: ["High School (9-12)", "AP / IB STEM"],
    standards: ["CCSS.MATH.HSS.ID.A.1", "AP Statistics (Unit 1)", "NGSS SEP-4"],
    description: "Construct interactive cumulative frequency distribution tables and smooth S-shaped Ogive curves. Interactively locate medians (Q2), lower quartiles (Q1), upper quartiles (Q3), and interquartile ranges (IQR).",
    learningObjectives: [
      "Plot cumulative frequency against upper class boundaries",
      "Extract median and quartile statistics from visual ogive projections",
      "Calculate 90th percentile thresholds and assess data skewness"
    ],
    thumbnailGradient: "from-indigo-600 via-purple-700 to-slate-900",
    badgeColor: "bg-indigo-500/10 text-indigo-400 border-indigo-500/20",
    iconName: "BarChart3",
    rating: 4.8,
    reviewCount: 31,
    teacherCount: 95,
    licenseType: "Academic STEM Classroom & Institutional License",
    pricing: {
      singleTeacher: 19,
      schoolDepartment: 200,
      districtUnlimited: 400
    },
    features: [
      "Interactive data frequency table editor",
      "Dynamic smooth Ogive curve plotting with grid snaps",
      "Interactive Q1, Median, Q3, and percentile locator lines",
      "Instant box-and-whisker plot cross-comparison"
    ],
    parameterDefaults: {},
    parameterControls: [],
    sampleChallenges: [
      {
        id: "ch-ogive-1",
        title: "Determine Interquartile Range (IQR)",
        instruction: "Use the Ogive projections to find Q3 and Q1, then calculate the precise IQR for the student test scores dataset.",
        targetMetric: "IQR Value",
        targetValue: 24,
        tolerance: 1,
        currentValueKey: "iqr",
        rewardBadge: "Data Statistician"
      }
    ],
    previewFacts: [
      "An ogive curve always slopes upward from left to right because cumulative frequencies never decrease",
      "The median represents the 50th percentile (N/2 value on the vertical cumulative frequency axis)"
    ],
    isHtmlApp: true,
    htmlUrl: "https://cumulative-frequency-ogive-simulator.netlify.app/",
    isCustomImport: true,
    authorEmail: "ndunj123@gmail.com",
    authorName: "Axiom Creator",
    createdAt: "2026-08-15"
  },
  {
    id: "sim-plane-mirror-image",
    title: "Plane Mirror Reflection & Geometric Optics",
    tagline: "Law of reflection, ray diagrams, virtual image formation, and lateral inversion",
    discipline: "physics",
    gradeLevel: ["Middle School (6-8)", "High School (9-12)"],
    standards: ["MS-PS4-2", "HS-PS4-2", "NGSS SEP-2"],
    description: "Investigate light reflection on flat mirrors. Trace incident and reflected rays with dynamic angle readouts, construct virtual image positions behind the mirror plane, and explore field of view boundaries.",
    learningObjectives: [
      "Verify that angle of incidence equals angle of reflection (θi = θr)",
      "Understand why plane mirror images are virtual, upright, identical size, and equidistant behind the mirror",
      "Construct multi-ray optical diagrams demonstrating the observer's field of view"
    ],
    thumbnailGradient: "from-sky-600 via-cyan-500 to-blue-700",
    badgeColor: "bg-sky-500/10 text-sky-400 border-sky-500/20",
    iconName: "Compass",
    rating: 4.9,
    reviewCount: 36,
    teacherCount: 108,
    licenseType: "Academic STEM Classroom & Institutional License",
    pricing: {
      singleTeacher: 19,
      schoolDepartment: 200,
      districtUnlimited: 400
    },
    features: [
      "Movable light source, object, and observer eye positions",
      "Real-time ray tracing with virtual extension lines",
      "Protractor and angle readout overlays",
      "Multiple mirror configurations and periscope models"
    ],
    parameterDefaults: {},
    parameterControls: [],
    sampleChallenges: [
      {
        id: "ch-mirror-1",
        title: "Periscope Target Alignment",
        instruction: "Position two parallel plane mirrors at 45 degree angles to transmit the beam to the observer eye.",
        targetMetric: "Ray Alignment",
        targetValue: 100,
        tolerance: 1,
        currentValueKey: "alignment",
        rewardBadge: "Reflection Virtuoso"
      }
    ],
    previewFacts: [
      "Image distance behind a plane mirror always equals object distance in front of the mirror",
      "Virtual images cannot be projected onto a physical screen because light rays only appear to diverge from them"
    ],
    isHtmlApp: true,
    htmlUrl: "https://plane-mirror-image-simulator.netlify.app/",
    isCustomImport: true,
    authorEmail: "ndunj123@gmail.com",
    authorName: "Axiom Creator",
    createdAt: "2026-08-15"
  },
  {
    id: "sim-lunar-phases-orbit",
    title: "Lunar Phases & Celestial Mechanics",
    tagline: "Sun-Earth-Moon geometry, synchronous rotation, waxing/waning cycles, and solar illumination",
    discipline: "physics",
    gradeLevel: ["Middle School (6-8)", "High School (9-12)"],
    standards: ["MS-ESS1-1", "HS-ESS1-4", "NGSS SEP-2"],
    description: "Explore the 29.5-day synodic lunar month from dual synchronized perspectives: top-down space view of the Moon orbiting Earth, and the terrestrial view seen by observers on Earth.",
    learningObjectives: [
      "Identify the 8 primary lunar phases (New Moon, Waxing Crescent, First Quarter, Waxing Gibbous, Full Moon, Waning Gibbous, Third Quarter, Waning Crescent)",
      "Explain why half the Moon is always illuminated by the Sun regardless of visible phase",
      "Demonstrate tidal locking and synchronous rotation of the Moon"
    ],
    thumbnailGradient: "from-slate-800 via-indigo-950 to-slate-900",
    badgeColor: "bg-purple-500/10 text-purple-400 border-purple-500/20",
    iconName: "Moon",
    rating: 5.0,
    reviewCount: 50,
    teacherCount: 155,
    licenseType: "Academic STEM Classroom & Institutional License",
    pricing: {
      singleTeacher: 19,
      schoolDepartment: 200,
      districtUnlimited: 400
    },
    features: [
      "Dual synchronized views (Top-Down Orbital + Earth Ground Perspective)",
      "Day/night illumination terminator boundary rendering",
      "Interactive 29.5-day timeline scrub slider",
      "Solar and lunar eclipse alignment indicators"
    ],
    parameterDefaults: {},
    parameterControls: [],
    sampleChallenges: [
      {
        id: "ch-moon-1",
        title: "Identify Waxing Gibbous Phase",
        instruction: "Rotate the Moon to the orbital position where approximately 75% of the visible disk is illuminated and growing.",
        targetMetric: "Illumination %",
        targetValue: 75,
        tolerance: 5,
        currentValueKey: "illuminationPercent",
        rewardBadge: "Astronomer"
      }
    ],
    previewFacts: [
      "Moon phases are caused by changing geometry of Sun-Earth-Moon, NOT by Earth's shadow",
      "The Moon rotates on its axis at the exact same rate it orbits Earth (~27.3 days), keeping one face toward us"
    ],
    isHtmlApp: true,
    htmlUrl: "https://lunar-phases-simulator.netlify.app/",
    isCustomImport: true,
    authorEmail: "ndunj123@gmail.com",
    authorName: "Axiom Creator",
    createdAt: "2026-08-15"
  },
  {
    id: "sim-principle-of-moments",
    title: "Principle of Moments & Rotational Equilibrium",
    tagline: "Torque balance, center of gravity, fulcrum placement, and clockwise vs counterclockwise moments",
    discipline: "physics",
    gradeLevel: ["Middle School (6-8)", "High School (9-12)", "AP / IB STEM"],
    standards: ["HS-PS2-1", "AP Physics 1 (Unit 7)", "NGSS SEP-5"],
    description: "Experiment with balance beams and seesaws. Place variable masses at graduated distances from the central fulcrum to demonstrate that for rotational equilibrium, Clockwise Moments = Counterclockwise Moments (Στ = 0).",
    learningObjectives: [
      "Calculate torque τ = F * d (perpendicular force multiplied by lever arm distance)",
      "Apply the principle of moments to solve for unknown weights and distances",
      "Identify conditions for translational (ΣF = 0) and rotational (Στ = 0) static equilibrium"
    ],
    thumbnailGradient: "from-amber-600 via-orange-600 to-red-600",
    badgeColor: "bg-amber-500/10 text-amber-400 border-amber-500/20",
    iconName: "Sliders",
    rating: 4.9,
    reviewCount: 44,
    teacherCount: 132,
    licenseType: "Academic STEM Classroom & Institutional License",
    pricing: {
      singleTeacher: 19,
      schoolDepartment: 200,
      districtUnlimited: 400
    },
    features: [
      "Interactive balance beam with snap-to-peg distance marks",
      "Real-time torque calculation bar graphs",
      "Unknown mystery mass solver mode",
      "Off-center fulcrum and multiple weight stacking support"
    ],
    parameterDefaults: {},
    parameterControls: [],
    sampleChallenges: [
      {
        id: "ch-mom-1",
        title: "Balance the Seesaw",
        instruction: "A 40 kg mass is placed 2 meters left of fulcrum. Place a 20 kg mass on the right side to achieve static balance.",
        targetMetric: "Net Torque (Nm)",
        targetValue: 0,
        tolerance: 0.1,
        currentValueKey: "netTorque",
        rewardBadge: "Equilibrium Master"
      }
    ],
    previewFacts: [
      "A smaller force can balance a much larger force if placed further away from the pivot point",
      "Torque is the rotational equivalent of linear force"
    ],
    isHtmlApp: true,
    htmlUrl: "https://principle-of-moments-simulator.netlify.app/",
    isCustomImport: true,
    authorEmail: "ndunj123@gmail.com",
    authorName: "Axiom Creator",
    createdAt: "2026-08-15"
  },
  {
    id: "sim-boiling-water-phase-change",
    title: "Phase Change & Boiling Thermodynamics",
    tagline: "Heat capacity, latent heat of vaporization, molecular kinetic theory, and heating curves",
    discipline: "chemistry",
    gradeLevel: ["Middle School (6-8)", "High School (9-12)"],
    standards: ["MS-PS1-4", "HS-PS3-2", "HS-PS1-4"],
    description: "Apply thermal energy to water and observe molecular phase transitions from solid ice to liquid water and gaseous steam. Track the characteristic temperature plateau during latent heat absorption.",
    learningObjectives: [
      "Interpret heating curves showing temperature plateaus at melting (0°C) and boiling (100°C) points",
      "Distinguish between sensible heat (temperature change) and latent heat (breaking intermolecular hydrogen bonds)",
      "Connect macroscopic phase states with microscopic particle kinetic energy and freedom of motion"
    ],
    thumbnailGradient: "from-rose-600 via-red-600 to-amber-600",
    badgeColor: "bg-rose-500/10 text-rose-400 border-rose-500/20",
    iconName: "Flame",
    rating: 4.8,
    reviewCount: 33,
    teacherCount: 98,
    licenseType: "Academic STEM Classroom & Institutional License",
    pricing: {
      singleTeacher: 19,
      schoolDepartment: 200,
      districtUnlimited: 400
    },
    features: [
      "Microscopic particle motion simulation container",
      "Real-time heating curve chart with phase plateau markers",
      "Adjustable Bunsen burner power and ambient pressure",
      "Enthalpy of fusion and vaporization calculation gauges"
    ],
    parameterDefaults: {},
    parameterControls: [],
    sampleChallenges: [
      {
        id: "ch-boil-1",
        title: "Observe Latent Heat Plateau",
        instruction: "Heat water to 100°C and demonstrate that temperature remains constant while liquid boils into vapor.",
        targetMetric: "Temperature (°C)",
        targetValue: 100,
        tolerance: 0.5,
        currentValueKey: "temp",
        rewardBadge: "Thermal Physicist"
      }
    ],
    previewFacts: [
      "During a phase change, added thermal energy goes into breaking intermolecular bonds rather than increasing kinetic temperature",
      "Water's high latent heat of vaporization (2260 J/g) makes it an effective cooling agent"
    ],
    isHtmlApp: true,
    htmlUrl: "https://salemhills-boiling-water-simulation.netlify.app/",
    isCustomImport: true,
    authorEmail: "ndunj123@gmail.com",
    authorName: "Axiom Creator",
    createdAt: "2026-08-15"
  },
  {
    id: "sim-water-cycle-simulation",
    title: "Global Hydrologic Cycle & Atmosphere System",
    tagline: "Evapotranspiration, condensation, precipitation, groundwater percolation, and climate feedback",
    discipline: "biology",
    gradeLevel: ["Middle School (6-8)", "High School (9-12)"],
    standards: ["MS-ESS2-4", "HS-ESS2-5", "HS-LS2-3"],
    description: "Follow water molecules across atmospheric, terrestrial, and oceanic reservoirs. Simulate how solar radiation drives ocean evaporation, cloud condensation over mountains, surface runoff, and aquifer recharge.",
    learningObjectives: [
      "Model major water cycle fluxes: evaporation, transpiration, condensation, precipitation, infiltration, and runoff",
      "Evaluate how deforestation, urbanization, and temperature shifts alter regional precipitation patterns",
      "Understand conservation of global water mass across phases"
    ],
    thumbnailGradient: "from-cyan-600 via-blue-600 to-indigo-700",
    badgeColor: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
    iconName: "CloudRain",
    rating: 4.9,
    reviewCount: 42,
    teacherCount: 125,
    licenseType: "Academic STEM Classroom & Institutional License",
    pricing: {
      singleTeacher: 19,
      schoolDepartment: 200,
      districtUnlimited: 400
    },
    features: [
      "Interactive landscape cross-section (Ocean, Forest, Mountain, Aquifer)",
      "Solar radiation and wind temperature adjusters",
      "Individual animated water molecule tracker",
      "Groundwater table and reservoir volume monitors"
    ],
    parameterDefaults: {},
    parameterControls: [],
    sampleChallenges: [
      {
        id: "ch-water-1",
        title: "Trigger Mountain Cloudburst",
        instruction: "Increase ocean evaporation and adjust wind vectors to generate orographic rainfall over the mountain range.",
        targetMetric: "Precipitation Rate",
        targetValue: 50,
        tolerance: 5,
        currentValueKey: "rainRate",
        rewardBadge: "Hydro-Meteorologist"
      }
    ],
    previewFacts: [
      "Over 96% of Earth's water is stored in the oceans, with only ~2.5% as freshwater",
      "Plants contribute substantial atmospheric moisture through stomatal transpiration"
    ],
    isHtmlApp: true,
    htmlUrl: "https://salemhills-water-cycle-simulation.netlify.app/",
    isCustomImport: true,
    authorEmail: "ndunj123@gmail.com",
    authorName: "Axiom Creator",
    createdAt: "2026-08-15"
  },
  {
    id: "sim-bearings-and-distances",
    title: "Three-Figure Bearings & Distance Navigation",
    tagline: "Compass rose orientation, trigonometry, sine & cosine rules in real-world spatial navigation",
    discipline: "mathematics",
    gradeLevel: ["High School (9-12)", "AP / IB STEM"],
    standards: ["CCSS.MATH.HSG.SRT.C.8", "IGCSE Math (0580)", "NGSS SEP-5"],
    description: "Navigate ships and aircraft across open charts using three-figure bearings (000° to 360° measured clockwise from North). Apply the Law of Sines and Cosines to solve multi-leg navigation problems.",
    learningObjectives: [
      "Measure and plot standard three-figure bearings from True North reference lines",
      "Calculate back bearings (reverse headings by adding/subtracting 180°)",
      "Use trigonometry to determine final displacement vector and distance from port"
    ],
    thumbnailGradient: "from-amber-700 via-yellow-600 to-stone-800",
    badgeColor: "bg-amber-500/10 text-amber-400 border-amber-500/20",
    iconName: "Compass",
    rating: 4.9,
    reviewCount: 37,
    teacherCount: 114,
    licenseType: "Academic STEM Classroom & Institutional License",
    pricing: {
      singleTeacher: 19,
      schoolDepartment: 200,
      districtUnlimited: 400
    },
    features: [
      "Interactive 360-degree compass rose with north-line references",
      "Multi-waypoint ship flight path plotting",
      "Dynamic triangle angle and distance measurement tools",
      "Real-world nautical charting challenges"
    ],
    parameterDefaults: {},
    parameterControls: [],
    sampleChallenges: [
      {
        id: "ch-bear-1",
        title: "Safe Harbor Navigation",
        instruction: "Plot a course on bearing 065° for 40 km, then 145° for 30 km to reach the safe harbor coordinates.",
        targetMetric: "Final Error (km)",
        targetValue: 0,
        tolerance: 0.5,
        currentValueKey: "errorDist",
        rewardBadge: "Master Navigator"
      }
    ],
    previewFacts: [
      "Bearings are always written with three digits (e.g. 045° instead of 45°) to prevent misinterpretation in radio comms",
      "The back bearing of heading θ is (θ + 180°) if θ < 180°, and (θ - 180°) if θ ≥ 180°"
    ],
    isHtmlApp: true,
    htmlUrl: "https://bearings-and-distances-simulator.netlify.app/",
    isCustomImport: true,
    authorEmail: "ndunj123@gmail.com",
    authorName: "Axiom Creator",
    createdAt: "2026-08-15"
  },
  {
    id: "sim-angle-elevation-depression",
    title: "Angles of Elevation & Depression Lab",
    tagline: "Line of sight, clinometer measurements, right-triangle trigonometric height calculations",
    discipline: "mathematics",
    gradeLevel: ["Middle School (6-8)", "High School (9-12)"],
    standards: ["CCSS.MATH.HSG.SRT.C.6", "CCSS.MATH.HSG.SRT.C.8"],
    description: "Measure inaccessible heights (lighthouses, mountain peaks, towers) using clinometer angles of elevation and depression. Apply tan(θ) = Opposite/Adjacent right-triangle ratios with observer eye-level compensation.",
    learningObjectives: [
      "Distinguish between angle of elevation (looking up from horizontal) and angle of depression (looking down)",
      "Calculate unknown vertical heights using tangent trigonometric ratios",
      "Account for observer instrument height in indirect land surveying measurements"
    ],
    thumbnailGradient: "from-indigo-600 via-blue-600 to-teal-600",
    badgeColor: "bg-indigo-500/10 text-indigo-400 border-indigo-500/20",
    iconName: "Triangle",
    rating: 4.8,
    reviewCount: 35,
    teacherCount: 102,
    licenseType: "Academic STEM Classroom & Institutional License",
    pricing: {
      singleTeacher: 19,
      schoolDepartment: 200,
      districtUnlimited: 400
    },
    features: [
      "Interactive clinometer angle sight line",
      "Real-time right-triangle ratio readout (sin, cos, tan)",
      "Observer distance and height adjustment sliders",
      "Interactive skyscraper and cliff measurement scenarios"
    ],
    parameterDefaults: {},
    parameterControls: [],
    sampleChallenges: [
      {
        id: "ch-elev-1",
        title: "Calculate Tower Height",
        instruction: "From a distance of 50 meters, use an angle of elevation of 35° with 1.7m eye height to find total tower height.",
        targetMetric: "Calculated Height (m)",
        targetValue: 36.7,
        tolerance: 0.3,
        currentValueKey: "calcHeight",
        rewardBadge: "Surveying Engineer"
      }
    ],
    previewFacts: [
      "The angle of depression from observer A to target B equals the angle of elevation from B to A (alternate interior angles)",
      "Tangent ratio tan(θ) = opposite/adjacent is the primary trigonometric function for height surveying"
    ],
    isHtmlApp: true,
    htmlUrl: "https://angle-elevation-depression-simulator.netlify.app/",
    isCustomImport: true,
    authorEmail: "ndunj123@gmail.com",
    authorName: "Axiom Creator",
    createdAt: "2026-08-15"
  },
  {
    id: "sim-circle-geometry-theorems",
    title: "Circle Geometry & Inscribed Angles Lab",
    tagline: "Subtended central vs inscribed angles, cyclic quadrilaterals, chord properties, tangent theorems",
    discipline: "mathematics",
    gradeLevel: ["High School (9-12)", "AP / IB STEM"],
    standards: ["CCSS.MATH.HSG.C.A.2", "CCSS.MATH.HSG.C.A.3"],
    description: "Drag vertices dynamically around circle circumferences to verify geometric theorems: angle at center is twice angle at circumference, angles in same segment are equal, angle in semicircle is 90°, and cyclic quadrilateral opposite angles sum to 180°.",
    learningObjectives: [
      "Prove and visualize that an inscribed angle is half the central angle subtending the same arc",
      "Verify that opposite angles in any cyclic quadrilateral sum to 180 degrees",
      "Demonstrate perpendicularity of tangents to radii at the point of contact"
    ],
    thumbnailGradient: "from-violet-600 via-purple-600 to-indigo-700",
    badgeColor: "bg-purple-500/10 text-purple-400 border-purple-500/20",
    iconName: "Circle",
    rating: 5.0,
    reviewCount: 40,
    teacherCount: 120,
    licenseType: "Academic STEM Classroom & Institutional License",
    pricing: {
      singleTeacher: 19,
      schoolDepartment: 200,
      districtUnlimited: 400
    },
    features: [
      "Smooth draggable point geometry canvas",
      "Real-time angle degree readouts and arc color matching",
      "Theorem mode toggles (Central Angle, Semicircle, Cyclic Quad, Tangent)",
      "Interactive geometric proof walkthroughs"
    ],
    parameterDefaults: {},
    parameterControls: [],
    sampleChallenges: [
      {
        id: "ch-circg-1",
        title: "Demonstrate Thales Theorem",
        instruction: "Drag an inscribed vertex across the circumference where the chord is a diameter to confirm the angle is strictly 90°.",
        targetMetric: "Inscribed Angle (°)",
        targetValue: 90,
        tolerance: 0.1,
        currentValueKey: "inscribedAngle",
        rewardBadge: "Euclidean Geometer"
      }
    ],
    previewFacts: [
      "An angle subtended by a diameter at any point on the circumference is always a right angle (90°)",
      "Angles in the same segment of a circle subtended by the same chord are equal"
    ],
    isHtmlApp: true,
    htmlUrl: "https://circle-geometry-lab-simulator.netlify.app/",
    isCustomImport: true,
    authorEmail: "ndunj123@gmail.com",
    authorName: "Axiom Creator",
    createdAt: "2026-08-15"
  },
  {
    id: "sim-longitude-and-latitude",
    title: "Latitude, Longitude & Spherical Coordinates",
    tagline: "Prime Meridian, Equator, great circle distances, nautical miles, and earth grid mapping",
    discipline: "mathematics",
    gradeLevel: ["Middle School (6-8)", "High School (9-12)"],
    standards: ["CCSS.MATH.HSG.GPE.B.7", "HS-ESS2-2", "NGSS SEP-5"],
    description: "Explore Earth's 3D geographic coordinate system. Pinpoint latitude (parallels 0° to 90° N/S) and longitude (meridians 0° to 180° E/W), calculate arc lengths along parallels, and determine Great Circle navigation distances.",
    learningObjectives: [
      "Read and locate precise global coordinates in degrees and minutes",
      "Explain time zone variations from Earth's 15° per hour rotation rate",
      "Calculate distances along great circles using spherical trigonometry"
    ],
    thumbnailGradient: "from-teal-600 via-emerald-600 to-blue-700",
    badgeColor: "bg-teal-500/10 text-teal-400 border-teal-500/20",
    iconName: "Globe",
    rating: 4.9,
    reviewCount: 36,
    teacherCount: 110,
    licenseType: "Academic STEM Classroom & Institutional License",
    pricing: {
      singleTeacher: 19,
      schoolDepartment: 200,
      districtUnlimited: 400
    },
    features: [
      "Interactive 3D/2D Earth globe with grid overlay lines",
      "Latitude parallel and Longitude meridian locator pins",
      "Great Circle shortest distance flight path calculator",
      "Solar noon and global time zone calculator"
    ],
    parameterDefaults: {},
    parameterControls: [],
    sampleChallenges: [
      {
        id: "ch-lat-1",
        title: "Find Great Circle Distance",
        instruction: "Plot coordinates between London (51.5°N, 0.1°W) and New York (40.7°N, 74.0°W) to calculate the shortest flight path.",
        targetMetric: "Distance (km)",
        targetValue: 5585,
        tolerance: 25,
        currentValueKey: "distKm",
        rewardBadge: "Global Cartographer"
      }
    ],
    previewFacts: [
      "One minute of latitude (1') along a meridian equals exactly one nautical mile (1.852 km)",
      "The shortest distance between any two points on a sphere is along the Great Circle arc"
    ],
    isHtmlApp: true,
    htmlUrl: "https://longitude-and-latitude-simulator.netlify.app/",
    isCustomImport: true,
    authorEmail: "ndunj123@gmail.com",
    authorName: "Axiom Creator",
    createdAt: "2026-08-15"
  },
  {
    id: "sim-wheel-and-axle",
    title: "Wheel & Axle: 3D Simple Machine Physics Lab",
    tagline: "Mechanical Advantage (MA), Velocity Ratio (VR), Efficiency (η), Load Forces, and 3D Dynamic Winding Ropes",
    discipline: "physics",
    gradeLevel: ["Middle School (6-8)", "High School (9-12)", "AP / IB STEM"],
    standards: ["HS-PS3-3", "MS-PS3-5", "AP Physics 1 (Rotational Dynamics)"],
    description: "Investigate simple machines in full 3D. Control wheel and axle radii, adjust load mass, pull the rope to wind the coiled cables dynamically, and calculate Mechanical Advantage, Velocity Ratio (VR = R/r), Load Force (L = mg), and system Efficiency (η).",
    learningObjectives: [
      "Determine Velocity Ratio as the ratio of wheel radius to axle radius (VR = R/r)",
      "Calculate Mechanical Advantage (MA = Load / Effort) and mechanical efficiency η = (MA / VR) × 100%",
      "Analyze rotational work, dynamic torque balance, and rope displacement in 3D perspective views"
    ],
    thumbnailGradient: "from-sky-600 via-blue-700 to-indigo-900",
    badgeColor: "bg-sky-500/10 text-sky-400 border-sky-500/20",
    iconName: "Settings",
    rating: 5.0,
    reviewCount: 42,
    teacherCount: 128,
    licenseType: "Academic STEM Classroom & Institutional License",
    pricing: {
      singleTeacher: 19,
      schoolDepartment: 200,
      districtUnlimited: 400
    },
    features: [
      "Real-time Three.js 3D WebGL interactive physics engine",
      "Dynamic helical rope coiling and unwinding animations",
      "Live formulas for Load Force, VR, MA, and Efficiency",
      "Multi-angle viewpoint controls (Isometric, Side, Front, Top)"
    ],
    parameterDefaults: {
      wheelRadius: 2.0,
      axleRadius: 0.5,
      loadMass: 50,
      appliedEffort: 25,
      pullDistance: 0.0
    },
    parameterControls: [
      {
        key: "wheelRadius",
        label: "Wheel Radius (R)",
        min: 1.0,
        max: 4.0,
        step: 0.1,
        unit: "m",
        description: "Radius of the outer effort wheel"
      },
      {
        key: "axleRadius",
        label: "Axle Radius (r)",
        min: 0.2,
        max: 1.0,
        step: 0.05,
        unit: "m",
        description: "Radius of the inner lifting axle cylinder"
      },
      {
        key: "loadMass",
        label: "Load Mass",
        min: 5,
        max: 200,
        step: 5,
        unit: "kg",
        description: "Mass of the suspended load cylinder"
      },
      {
        key: "appliedEffort",
        label: "Applied Effort",
        min: 1,
        max: 200,
        step: 1,
        unit: "N",
        description: "Effort force applied on the wheel rope"
      }
    ],
    sampleChallenges: [
      {
        id: "ch-wheel-1",
        title: "Maximize Velocity Ratio",
        instruction: "Configure the wheel and axle dimensions to achieve a Velocity Ratio (VR) of exactly 8.0.",
        targetMetric: "Velocity Ratio",
        targetValue: 8.0,
        tolerance: 0.05,
        currentValueKey: "vr",
        rewardBadge: "Mechanical Advantage Master"
      }
    ],
    previewFacts: [
      "The wheel and axle is a class of simple machine acting as a continuous lever rotating around a common fulcrum",
      "Because the wheel and axle rotate through the same angle in the same time, the distance moved by effort exceeds distance moved by load by factor R/r"
    ],
    isHtmlApp: true,
    htmlContent: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Wheel & Axle Interactive Physics Simulation</title>
  <style>
    body {
      margin: 0;
      padding: 0;
      overflow: hidden;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
      background-color: #18181c;
      color: #ffffff;
    }
    #canvas-container {
      width: 100vw;
      height: 100vh;
      display: block;
    }

    /* Floating UI Panels */
    .glass-panel {
      position: absolute;
      background: rgba(20, 20, 25, 0.88);
      border: 1px solid rgba(255, 255, 255, 0.15);
      border-radius: 10px;
      padding: 14px 16px;
      backdrop-filter: blur(10px);
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
      max-height: 92vh;
      overflow-y: auto;
      z-index: 10;
    }

    #overlay-panel {
      top: 12px;
      left: 12px;
      width: 310px;
    }

    #controls-panel {
      top: 12px;
      right: 12px;
      width: 290px;
    }

    h2 {
      margin-top: 0;
      font-size: 0.95rem;
      color: #4da6ff;
      border-bottom: 1px solid rgba(255, 255, 255, 0.1);
      padding-bottom: 6px;
      margin-bottom: 10px;
    }

    /* Metric Layout */
    .metric {
      margin-bottom: 10px;
      background: rgba(255, 255, 255, 0.03);
      padding: 6px 8px;
      border-radius: 6px;
      border-left: 3px solid #4da6ff;
    }
    .metric label {
      display: block;
      font-size: 0.72rem;
      color: #aaaaaa;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      margin-bottom: 2px;
    }
    .metric .formula {
      font-size: 0.75rem;
      color: #88ccff;
      font-family: 'Courier New', Courier, monospace;
      margin-bottom: 3px;
    }
    .metric .calc-step {
      font-size: 0.8rem;
      color: #e0e0e0;
      font-family: 'Courier New', Courier, monospace;
    }
    .metric .final-val {
      font-weight: bold;
      color: #ffffff;
    }

    /* Slider Group Layout */
    .slider-group {
      margin-bottom: 10px;
    }
    .slider-group label {
      display: flex;
      justify-content: space-between;
      font-size: 0.78rem;
      color: #dddddd;
      margin-bottom: 3px;
    }
    .slider-group label span {
      color: #4da6ff;
      font-weight: bold;
    }
    .slider-group input[type="range"] {
      width: 100%;
      height: 5px;
      border-radius: 3px;
      background: #3a3a45;
      outline: none;
      -webkit-appearance: none;
    }
    .slider-group input[type="range"]::-webkit-slider-thumb {
      -webkit-appearance: none;
      width: 14px;
      height: 14px;
      border-radius: 50%;
      background: #4da6ff;
      cursor: pointer;
      box-shadow: 0 0 8px rgba(77, 166, 255, 0.6);
    }
    .slider-group input[type="range"]::-moz-range-thumb {
      width: 14px;
      height: 14px;
      border-radius: 50%;
      background: #4da6ff;
      cursor: pointer;
      border: none;
    }

    @media (max-width: 768px) {
      .glass-panel {
        width: 46% !important;
        font-size: 0.8rem;
        padding: 8px;
      }
      #overlay-panel { left: 6px; top: 6px; }
      #controls-panel { right: 6px; top: 6px; }
    }

    /* Callout Badges with Straight Pointing Leader Lines */
    .callout-badge {
      position: absolute;
      transform: translate(-50%, -50%);
      padding: 6px 12px;
      border-radius: 8px;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
      box-shadow: 0 4px 18px rgba(0, 0, 0, 0.65);
      pointer-events: none;
      user-select: none;
      backdrop-filter: blur(8px);
      z-index: 6;
      white-space: nowrap;
      text-align: center;
      transition: opacity 0.15s ease;
    }
    .badge-title {
      font-size: 11px;
      font-weight: 800;
      letter-spacing: 0.5px;
      line-height: 1.2;
    }
    .badge-sub {
      font-size: 9px;
      font-weight: 600;
      opacity: 0.9;
      margin-top: 1px;
      letter-spacing: 0.3px;
    }
    .badge-wheel {
      background: rgba(14, 165, 233, 0.25);
      border: 1.5px solid #38bdf8;
      color: #e0f2fe;
    }
    .badge-axle {
      background: rgba(245, 158, 11, 0.25);
      border: 1.5px solid #fbbf24;
      color: #fef3c7;
    }
    .badge-radius-w {
      background: rgba(99, 102, 241, 0.28);
      border: 1.5px solid #818cf8;
      color: #e0e7ff;
    }
    .badge-radius-a {
      background: rgba(16, 185, 129, 0.28);
      border: 1.5px solid #34d399;
      color: #d1fae5;
    }
  </style>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/three@0.128.0/examples/js/controls/OrbitControls.js"></script>
</head>
<body>

  <div id="canvas-container"></div>

  <!-- SVG Pointing Lines Overlay -->
  <svg id="labels-svg" style="position:absolute; top:0; left:0; width:100%; height:100%; pointer-events:none; z-index:5;">
    <defs>
      <marker id="marker-wheel" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
        <polygon points="0 0, 6 3, 0 6" fill="#38bdf8" />
      </marker>
      <marker id="marker-axle" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
        <polygon points="0 0, 6 3, 0 6" fill="#fbbf24" />
      </marker>
      <marker id="marker-rw" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
        <polygon points="0 0, 6 3, 0 6" fill="#818cf8" />
      </marker>
      <marker id="marker-ra" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
        <polygon points="0 0, 6 3, 0 6" fill="#34d399" />
      </marker>
    </defs>

    <!-- Pointing Straight Lines -->
    <line id="line-wheel" stroke="#38bdf8" stroke-width="2" marker-end="url(#marker-wheel)" />
    <circle id="dot-wheel" r="3.5" fill="#38bdf8" />

    <line id="line-axle" stroke="#fbbf24" stroke-width="2" marker-end="url(#marker-axle)" />
    <circle id="dot-axle" r="3.5" fill="#fbbf24" />

    <line id="line-rw" stroke="#818cf8" stroke-width="2" stroke-dasharray="4 2" marker-end="url(#marker-rw)" />
    <circle id="dot-rw" r="3.5" fill="#818cf8" />

    <line id="line-ra" stroke="#34d399" stroke-width="2" stroke-dasharray="4 2" marker-end="url(#marker-ra)" />
    <circle id="dot-ra" r="3.5" fill="#34d399" />
  </svg>

  <!-- Pointing Labels Callout Badges -->
  <div id="badge-wheel" class="callout-badge badge-wheel">
    <div class="badge-title">WHEEL</div>
    <div class="badge-sub">Effort Cylinder</div>
  </div>

  <div id="badge-axle" class="callout-badge badge-axle">
    <div class="badge-title">AXLE</div>
    <div class="badge-sub">Load Shaft</div>
  </div>

  <div id="badge-rw" class="callout-badge badge-radius-w">
    <div class="badge-title">Wheel Radius (R)</div>
    <div class="badge-sub">R = <span id="callout-rw">2.0 m</span></div>
  </div>

  <div id="badge-ra" class="callout-badge badge-radius-a">
    <div class="badge-title">Axle Radius (r)</div>
    <div class="badge-sub">r = <span id="callout-ra">0.50 m</span></div>
  </div>

  <div id="overlay-panel" class="glass-panel">
    <h2>Dynamic Analytics</h2>

    <div class="metric">
      <label>Load Force (L)</label>
      <div class="formula">L = Mass &times; g</div>
      <div class="calc-step"><span id="calc-load">50 &times; 9.81</span> = <span id="val-load" class="final-val">490.5 N</span></div>
    </div>

    <div class="metric">
      <label>Velocity Ratio (VR)</label>
      <div class="formula">VR = (Radius, R of wheel) / (radius, r of axle)</div>
      <div class="calc-step"><span id="calc-vr">2.0 / 0.5</span> = <span id="val-vr" class="final-val">4.00</span></div>
    </div>

    <div class="metric">
      <label>Mechanical Advantage (MA)</label>
      <div class="formula">MA = Load Force / Applied Effort</div>
      <div class="calc-step"><span id="calc-ma">490.5 / 25</span> = <span id="val-ma" class="final-val">19.62</span></div>
    </div>

    <div class="metric">
      <label>Efficiency (&eta;)</label>
      <div class="formula">&eta; = (MA / VR) &times; 100%</div>
      <div class="calc-step"><span id="calc-eff">(19.62 / 4.00) &times; 100</span> = <span id="val-eff" class="final-val">490.5%</span></div>
    </div>
  </div>

  <div id="controls-panel" class="glass-panel">
    <h2>Simulation Controls</h2>

    <div class="slider-group" style="padding-bottom: 6px; border-bottom: 1px solid rgba(255,255,255,0.1); margin-bottom: 8px;">
      <label style="cursor:pointer; display:flex; align-items:center; gap:8px; font-size:0.75rem;">
        <input type="checkbox" id="toggle-labels" checked style="width:auto; cursor:pointer;">
        <span>Show Labels &amp; Radii Lines</span>
      </label>
    </div>
    
    <div class="slider-group">
      <label>Pull the rope: <span id="disp-pull">0.0 m</span></label>
      <input type="range" id="slider-pull" min="0" max="5" value="0" step="0.05">
    </div>

    <div class="slider-group">
      <label>Radius, R of wheel: <span id="disp-rw">2.0 m</span></label>
      <input type="range" id="slider-rw" min="1.0" max="4.0" value="2.0" step="0.1">
    </div>

    <div class="slider-group">
      <label>radius, r of axle: <span id="disp-ra">0.5 m</span></label>
      <input type="range" id="slider-ra" min="0.2" max="1.0" value="0.5" step="0.05">
    </div>

    <div class="slider-group">
      <label>Load Mass: <span id="disp-mass">50 kg</span></label>
      <input type="range" id="slider-mass" min="5" max="200" value="50" step="5">
    </div>

    <div class="slider-group">
      <label>Applied Effort: <span id="disp-effort">25 N</span></label>
      <input type="range" id="slider-effort" min="1" max="200" value="25" step="1">
    </div>

    <div class="slider-group">
      <label>Viewpoint: <span id="disp-view">Isometric</span></label>
      <input type="range" id="slider-view" min="0" max="3" value="0" step="1">
    </div>
  </div>

  <script>
    const params = {
      wheelRadius: 2.0,
      axleRadius: 0.5,
      loadMass: 50,
      appliedEffort: 25,
      pullDistance: 0.0,
      viewpointIndex: 0,
      showLabels: true
    };

    const g = 9.81;
    const INITIAL_LOAD_Y = -3.5;
    const INITIAL_EFFORT_Y = -1.5;

    const container = document.getElementById('canvas-container');
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x18181c);

    const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 100);
    camera.position.set(5, 3, 7);

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.shadowMap.enabled = true;
    container.appendChild(renderer.domElement);

    const controls = new THREE.OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
    scene.add(ambientLight);

    const dirLight = new THREE.DirectionalLight(0xffffff, 0.8);
    dirLight.position.set(5, 10, 7);
    dirLight.castShadow = true;
    scene.add(dirLight);

    const grid = new THREE.GridHelper(20, 20, 0x444444, 0x222222);
    grid.position.y = -5;
    scene.add(grid);

    const axleMat = new THREE.MeshStandardMaterial({ color: 0x777788, roughness: 0.4, metalness: 0.6 });
    const wheelMat = new THREE.MeshStandardMaterial({ color: 0x888899, roughness: 0.5, metalness: 0.3 });
    const spokeMat = new THREE.MeshBasicMaterial({ color: 0xffffff });
    const ropeMat = new THREE.MeshStandardMaterial({ color: 0xc2a47c, roughness: 0.8 });
    const loadMat = new THREE.MeshStandardMaterial({ color: 0xaa3333, roughness: 0.5 });
    const effortHandleMat = new THREE.MeshStandardMaterial({ color: 0x3388ff, roughness: 0.4 });

    const rotatingGroup = new THREE.Group();
    scene.add(rotatingGroup);

    const axleGeo = new THREE.CylinderGeometry(params.axleRadius, params.axleRadius, 4, 32);
    const axle = new THREE.Mesh(axleGeo, axleMat);
    axle.rotation.z = Math.PI / 2;
    axle.castShadow = true;
    rotatingGroup.add(axle);

    const wheelGeo = new THREE.CylinderGeometry(params.wheelRadius, params.wheelRadius, 0.4, 32);
    const wheel = new THREE.Mesh(wheelGeo, wheelMat);
    wheel.rotation.z = Math.PI / 2;
    wheel.position.x = 0.8;
    wheel.castShadow = true;
    rotatingGroup.add(wheel);

    const spokesGroup = new THREE.Group();
    for (let i = 0; i < 4; i++) {
      const spokeGeo = new THREE.BoxGeometry(0.04, 0.42, 0.04);
      const spoke = new THREE.Mesh(spokeGeo, spokeMat);
      spoke.position.x = 1.01;
      spoke.rotation.x = (i * Math.PI) / 4;
      spokesGroup.add(spoke);
    }
    rotatingGroup.add(spokesGroup);

    let axleCoilMesh, wheelCoilMesh;
    let axleDropRopeMesh, wheelDropRopeMesh;

    const loadGroup = new THREE.Group();
    const loadMesh = new THREE.Mesh(new THREE.CylinderGeometry(0.35, 0.28, 0.6, 16), loadMat);
    loadMesh.castShadow = true;
    loadGroup.add(loadMesh);

    const effortHandleMesh = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.08, 0.4, 12), effortHandleMat);
    effortHandleMesh.rotation.z = Math.PI / 2;

    scene.add(loadGroup);
    scene.add(effortHandleMesh);

    // 3D Physical Radial Dimension Lines on Wheel and Axle
    const dimGroup = new THREE.Group();
    rotatingGroup.add(dimGroup);

    // 1. Wheel Radius 3D Dimension Indicator (Cyan)
    const wheelDimGroup = new THREE.Group();
    wheelDimGroup.position.set(1.02, 0, 0);

    const wheelHubDot = new THREE.Mesh(
      new THREE.SphereGeometry(0.05, 16, 16),
      new THREE.MeshBasicMaterial({ color: 0x38bdf8 })
    );
    wheelDimGroup.add(wheelHubDot);

    const wheelRadRodGeo = new THREE.CylinderGeometry(0.02, 0.02, 1, 16);
    const wheelRadRodMat = new THREE.MeshBasicMaterial({ color: 0x38bdf8 });
    const wheelRadRod = new THREE.Mesh(wheelRadRodGeo, wheelRadRodMat);
    wheelDimGroup.add(wheelRadRod);

    const wheelArrowMesh = new THREE.Mesh(
      new THREE.ConeGeometry(0.07, 0.18, 16),
      new THREE.MeshBasicMaterial({ color: 0x38bdf8 })
    );
    wheelDimGroup.add(wheelArrowMesh);
    dimGroup.add(wheelDimGroup);

    // 2. Axle Radius 3D Dimension Indicator (Amber)
    const axleDimGroup = new THREE.Group();
    axleDimGroup.position.set(-1.52, 0, 0);

    const axleHubDot = new THREE.Mesh(
      new THREE.SphereGeometry(0.04, 16, 16),
      new THREE.MeshBasicMaterial({ color: 0xfbbf24 })
    );
    axleDimGroup.add(axleHubDot);

    const axleRadRodGeo = new THREE.CylinderGeometry(0.015, 0.015, 1, 16);
    const axleRadRodMat = new THREE.MeshBasicMaterial({ color: 0xfbbf24 });
    const axleRadRod = new THREE.Mesh(axleRadRodGeo, axleRadRodMat);
    axleDimGroup.add(axleRadRod);

    const axleArrowMesh = new THREE.Mesh(
      new THREE.ConeGeometry(0.05, 0.14, 16),
      new THREE.MeshBasicMaterial({ color: 0xfbbf24 })
    );
    axleDimGroup.add(axleArrowMesh);
    dimGroup.add(axleDimGroup);

    function createHelixGeometry(radius, turns, width, xOffset, startAngle) {
      const pathPoints = [];
      const samples = Math.max(10, Math.ceil(turns * 40));
      for (let i = 0; i <= samples; i++) {
        const t = i / samples;
        const angle = startAngle + (t * turns * Math.PI * 2);
        const x = xOffset + (t - 0.5) * width;
        const y = radius * Math.cos(angle);
        const z = radius * Math.sin(angle);
        pathPoints.push(new THREE.Vector3(x, y, z));
      }
      return new THREE.CatmullRomCurve3(pathPoints);
    }

    function updateRopeSystem() {
      const rotationAngle = params.pullDistance / params.wheelRadius;
      rotatingGroup.rotation.x = rotationAngle;

      if (axleCoilMesh) rotatingGroup.remove(axleCoilMesh);
      if (wheelCoilMesh) rotatingGroup.remove(wheelCoilMesh);
      if (axleDropRopeMesh) scene.remove(axleDropRopeMesh);
      if (wheelDropRopeMesh) scene.remove(wheelDropRopeMesh);

      const baseAxleTurns = 3;
      const currentAxleTurns = baseAxleTurns + (rotationAngle / (Math.PI * 2));
      
      const axleCurve = createHelixGeometry(params.axleRadius + 0.02, currentAxleTurns, 0.6, -0.5, 0);
      const axleCoilGeo = new THREE.TubeGeometry(axleCurve, Math.ceil(currentAxleTurns * 30), 0.035, 8, false);
      axleCoilMesh = new THREE.Mesh(axleCoilGeo, ropeMat);
      rotatingGroup.add(axleCoilMesh);

      const loadLiftDistance = rotationAngle * params.axleRadius;
      const currentLoadY = INITIAL_LOAD_Y + loadLiftDistance;

      const axleTangentZ = params.axleRadius + 0.02;
      const axleRopePoints = [
        new THREE.Vector3(-0.5, 0, axleTangentZ),
        new THREE.Vector3(-0.5, currentLoadY + 0.3, axleTangentZ)
      ];
      const axleDropGeo = new THREE.TubeGeometry(new THREE.CatmullRomCurve3(axleRopePoints), 10, 0.035, 8, false);
      axleDropRopeMesh = new THREE.Mesh(axleDropGeo, ropeMat);
      scene.add(axleDropRopeMesh);

      loadGroup.position.set(-0.5, currentLoadY, axleTangentZ);

      const baseWheelTurns = 6;
      const currentWheelTurns = Math.max(0.5, baseWheelTurns - (rotationAngle / (Math.PI * 2)));

      const wheelCurve = createHelixGeometry(params.wheelRadius + 0.02, currentWheelTurns, 0.3, 0.8, Math.PI);
      const wheelCoilGeo = new THREE.TubeGeometry(wheelCurve, Math.ceil(currentWheelTurns * 30), 0.035, 8, false);
      wheelCoilMesh = new THREE.Mesh(wheelCoilGeo, ropeMat);
      rotatingGroup.add(wheelCoilMesh);

      const currentEffortY = INITIAL_EFFORT_Y - params.pullDistance;
      const wheelTangentZ = -(params.wheelRadius + 0.02);

      const wheelRopePoints = [
        new THREE.Vector3(0.8, 0, wheelTangentZ),
        new THREE.Vector3(0.8, currentEffortY, wheelTangentZ)
      ];
      const wheelDropGeo = new THREE.TubeGeometry(new THREE.CatmullRomCurve3(wheelRopePoints), 10, 0.035, 8, false);
      wheelDropRopeMesh = new THREE.Mesh(wheelDropGeo, ropeMat);
      scene.add(wheelDropRopeMesh);

      effortHandleMesh.position.set(0.8, currentEffortY, wheelTangentZ);
    }

    function updateLoadMassSize() {
      const scaleFactor = Math.pow(params.loadMass / 50, 1 / 3); 
      loadMesh.scale.set(scaleFactor, scaleFactor, scaleFactor);
    }

    function updateCalculations() {
      const R_w = params.wheelRadius;
      const R_a = params.axleRadius;

      const VR = R_w / R_a;
      const loadForce = params.loadMass * g;
      const MA = params.appliedEffort > 0 ? loadForce / params.appliedEffort : 0;
      const efficiency = VR > 0 ? (MA / VR) * 100 : 0;

      document.getElementById('calc-load').innerText = params.loadMass + ' × 9.81';
      document.getElementById('val-load').innerText = loadForce.toFixed(1) + ' N';

      document.getElementById('calc-vr').innerText = R_w.toFixed(1) + ' / ' + R_a.toFixed(2);
      document.getElementById('val-vr').innerText = VR.toFixed(2);

      document.getElementById('calc-ma').innerText = loadForce.toFixed(1) + ' / ' + params.appliedEffort;
      document.getElementById('val-ma').innerText = MA.toFixed(2);

      document.getElementById('calc-eff').innerText = '(' + MA.toFixed(2) + ' / ' + VR.toFixed(2) + ') × 100';
      document.getElementById('val-eff').innerText = efficiency.toFixed(1) + '%';
    }

    function updateDimensions() {
      wheel.scale.set(params.wheelRadius / 2.0, 1, params.wheelRadius / 2.0);
      axle.scale.set(params.axleRadius / 0.5, 1, params.axleRadius / 0.5);
      spokesGroup.scale.set(1, params.wheelRadius / 0.21, params.wheelRadius / 0.21);

      // Scale 3D Radial Dimension indicators
      wheelRadRod.scale.set(1, params.wheelRadius, 1);
      wheelRadRod.position.set(0, params.wheelRadius / 2, 0);
      wheelArrowMesh.position.set(0, params.wheelRadius - 0.08, 0);

      axleRadRod.scale.set(1, params.axleRadius, 1);
      axleRadRod.position.set(0, params.axleRadius / 2, 0);
      axleArrowMesh.position.set(0, params.axleRadius - 0.06, 0);

      const elRw = document.getElementById('callout-rw');
      if (elRw) elRw.innerText = params.wheelRadius.toFixed(1) + ' m';
      const elRa = document.getElementById('callout-ra');
      if (elRa) elRa.innerText = params.axleRadius.toFixed(2) + ' m';

      updateLoadMassSize();
      updateRopeSystem();
      updateCalculations();
    }

    // Dynamic Screen-Space Callouts with Straight Pointing Leader Lines
    function updateCalloutPositions() {
      const svg = document.getElementById('labels-svg');
      const badgeW = document.getElementById('badge-wheel');
      const badgeA = document.getElementById('badge-axle');
      const badgeRw = document.getElementById('badge-rw');
      const badgeRa = document.getElementById('badge-ra');

      if (!params.showLabels) {
        if (svg) svg.style.display = 'none';
        if (badgeW) badgeW.style.display = 'none';
        if (badgeA) badgeA.style.display = 'none';
        if (badgeRw) badgeRw.style.display = 'none';
        if (badgeRa) badgeRa.style.display = 'none';
        dimGroup.visible = false;
        return;
      }

      dimGroup.visible = true;
      if (svg) svg.style.display = 'block';

      const w = window.innerWidth;
      const h = window.innerHeight;

      // Calculate 4 key 3D anchor points in world space
      rotatingGroup.updateMatrixWorld(true);

      const targetW = new THREE.Vector3(0.8, params.wheelRadius, 0).applyMatrix4(rotatingGroup.matrixWorld);
      const targetA = new THREE.Vector3(-1.0, params.axleRadius, 0).applyMatrix4(rotatingGroup.matrixWorld);
      const targetRw = new THREE.Vector3(1.02, params.wheelRadius, 0).applyMatrix4(rotatingGroup.matrixWorld);
      const targetRa = new THREE.Vector3(-1.52, params.axleRadius, 0).applyMatrix4(rotatingGroup.matrixWorld);

      function projectToScreen(worldVec) {
        const v = worldVec.clone().project(camera);
        return {
          x: (v.x * 0.5 + 0.5) * w,
          y: (-(v.y * 0.5) + 0.5) * h,
          visible: v.z < 1.0
        };
      }

      const pW = projectToScreen(targetW);
      const pA = projectToScreen(targetA);
      const pRw = projectToScreen(targetRw);
      const pRa = projectToScreen(targetRa);

      function positionCallout(badgeEl, lineId, dotId, pScreen, offsetX, offsetY) {
        if (!badgeEl) return;
        const line = document.getElementById(lineId);
        const dot = document.getElementById(dotId);

        if (!pScreen.visible || pScreen.x < -100 || pScreen.x > w + 100 || pScreen.y < -100 || pScreen.y > h + 100) {
          badgeEl.style.display = 'none';
          if (line) line.style.display = 'none';
          if (dot) dot.style.display = 'none';
          return;
        }

        badgeEl.style.display = 'block';
        if (line) line.style.display = 'inline';
        if (dot) dot.style.display = 'inline';

        const bx = Math.max(140, Math.min(w - 140, pScreen.x + offsetX));
        const by = Math.max(60, Math.min(h - 60, pScreen.y + offsetY));

        badgeEl.style.left = bx + 'px';
        badgeEl.style.top = by + 'px';

        // Connect straight leader line from badge center to 3D feature contact point
        if (line) {
          line.setAttribute('x1', bx);
          line.setAttribute('y1', by);
          line.setAttribute('x2', pScreen.x);
          line.setAttribute('y2', pScreen.y);
        }
        if (dot) {
          dot.setAttribute('cx', pScreen.x);
          dot.setAttribute('cy', pScreen.y);
        }
      }

      positionCallout(badgeW, 'line-wheel', 'dot-wheel', pW, 115, -85);
      positionCallout(badgeA, 'line-axle', 'dot-axle', pA, -115, -75);
      positionCallout(badgeRw, 'line-rw', 'dot-rw', pRw, 125, 75);
      positionCallout(badgeRa, 'line-ra', 'dot-ra', pRa, -125, 75);
    }

    document.getElementById('toggle-labels').addEventListener('change', (e) => {
      params.showLabels = e.target.checked;
      updateCalloutPositions();
    });

    document.getElementById('slider-pull').addEventListener('input', (e) => {
      params.pullDistance = parseFloat(e.target.value);
      document.getElementById('disp-pull').innerText = params.pullDistance.toFixed(2) + ' m';
      updateRopeSystem();
    });

    document.getElementById('slider-rw').addEventListener('input', (e) => {
      params.wheelRadius = parseFloat(e.target.value);
      document.getElementById('disp-rw').innerText = params.wheelRadius.toFixed(1) + ' m';
      updateDimensions();
    });

    document.getElementById('slider-ra').addEventListener('input', (e) => {
      params.axleRadius = parseFloat(e.target.value);
      document.getElementById('disp-ra').innerText = params.axleRadius.toFixed(2) + ' m';
      updateDimensions();
    });

    document.getElementById('slider-mass').addEventListener('input', (e) => {
      params.loadMass = parseFloat(e.target.value);
      document.getElementById('disp-mass').innerText = params.loadMass + ' kg';
      updateLoadMassSize();
      updateCalculations();
    });

    document.getElementById('slider-effort').addEventListener('input', (e) => {
      params.appliedEffort = parseFloat(e.target.value);
      document.getElementById('disp-effort').innerText = params.appliedEffort + ' N';
      updateCalculations();
    });

    const views = ['Isometric', 'Side View', 'Front View', 'Top View'];
    document.getElementById('slider-view').addEventListener('input', (e) => {
      const idx = parseInt(e.target.value);
      params.viewpointIndex = idx;
      document.getElementById('disp-view').innerText = views[idx];

      switch (idx) {
        case 0:
          camera.position.set(5, 3, 7);
          break;
        case 1:
          camera.position.set(8, 0, 0);
          break;
        case 2:
          camera.position.set(0, 0, 8);
          break;
        case 3:
          camera.position.set(0, 8, 0.01);
          break;
      }
      controls.target.set(0, 0, 0);
      controls.update();
    });

    function animate() {
      requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);
      updateCalloutPositions();
    }

    window.addEventListener('resize', () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    });

    updateDimensions();
    animate();
  </script>
</body>
</html>`,
    isCustomImport: true,
    authorEmail: "ndunj123@gmail.com",
    authorName: "Axiom Creator",
    createdAt: "2026-08-15"
  },
  {
    id: "sim-bridge-circuits",
    title: "Bridge Circuit Visualizer & Meter Bridge Lab",
    tagline: "Wheatstone Bridge Balance Ratio, Meter Bridge Null Point Detection & Dynamic PDF Lab Worksheets",
    discipline: "physics",
    gradeLevel: ["High School (9-12)", "AP / IB STEM", "Undergraduate"],
    standards: ["HS-PS3-3", "AP Physics 2 (Unit 9)", "IB Physics Option B (Engineering Physics)"],
    description: "Explore DC circuit bridge theory and resistance measurements. Model Wheatstone Bridge balance ratios (P/Q = R/S), investigate the Meter Bridge slide-wire null deflection points with interactive galvanometer needle physics, and generate randomized student laboratory PDF worksheets with dynamic problem sets.",
    learningObjectives: [
      "Analyze bridge balance conditions (P/Q = R/S) and determine unknown resistance when galvanometer current Ig = 0",
      "Simulate the Meter Bridge slide-wire experiment and calculate unknown resistance X = R × (100 - l) / l",
      "Observe current vector flows and directional galvanometer needle deflection angles based on potential differences",
      "Generate and export dynamic printable laboratory worksheets with randomized circuit parameters and post-lab questions"
    ],
    thumbnailGradient: "from-cyan-600 via-sky-700 to-indigo-900",
    badgeColor: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
    iconName: "Zap",
    rating: 5.0,
    reviewCount: 38,
    teacherCount: 115,
    licenseType: "Academic STEM Classroom & Institutional License",
    pricing: {
      singleTeacher: 19,
      schoolDepartment: 200,
      districtUnlimited: 400
    },
    features: [
      "Dual-mode interactive simulation: Wheatstone Bridge and Meter Bridge slide-wire",
      "Real-time animated electron current flow and galvanometer needle physics",
      "Dynamic client-side PDF worksheet generator with randomized student trials",
      "Interactive resistor sliders with instant balance ratio calculations"
    ],
    parameterDefaults: {
      resistorP: 100,
      resistorQ: 100,
      resistorR: 50,
      jockeyLength: 30
    },
    parameterControls: [
      {
        key: "resistorP",
        label: "Resistor P",
        min: 10,
        max: 500,
        step: 10,
        unit: "Ω",
        description: "Ratio arm resistor P"
      },
      {
        key: "resistorQ",
        label: "Resistor Q",
        min: 10,
        max: 500,
        step: 10,
        unit: "Ω",
        description: "Ratio arm resistor Q"
      },
      {
        key: "resistorR",
        label: "Variable Resistor R",
        min: 1,
        max: 500,
        step: 1,
        unit: "Ω",
        description: "Balancing resistance box"
      },
      {
        key: "jockeyLength",
        label: "Jockey Position (l)",
        min: 1,
        max: 99,
        step: 0.5,
        unit: "cm",
        description: "Meter bridge slide contact point"
      }
    ],
    sampleChallenges: [
      {
        id: "ch-bridge-1",
        title: "Achieve Wheatstone Balance",
        instruction: "Adjust Variable Resistor R until Galvanometer Current Ig reaches 0.00 mA.",
        targetMetric: "Galvanometer Current",
        targetValue: 0.0,
        tolerance: 0.05,
        currentValueKey: "ig",
        rewardBadge: "Bridge Master"
      }
    ],
    previewFacts: [
      "Sir Charles Wheatstone popularized the bridge circuit invented by Samuel Hunter Christie in 1833 for high-precision resistance measurements.",
      "At balance point, no current flows through the galvanometer because the electric potential across the bridge terminals is equal (Vb = Vd)."
    ],
    isHtmlApp: true,
    htmlContent: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bridge Circuit Visualizer & Lab Simulator</title>
    <!-- jsPDF Library for Client-Side PDF Generation -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js"></script>
    <style>
        :root {
            --bg-main: #0f172a;
            --card-bg: #1e293b;
            --accent-blue: #38bdf8;
            --accent-green: #22c55e;
            --accent-red: #ef4444;
            --accent-amber: #f59e0b;
            --text-light: #f8fafc;
            --text-dim: #94a3b8;
            --border-color: #334155;
        }

        * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
            font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
        }

        body {
            background-color: var(--bg-main);
            color: var(--text-light);
            display: flex;
            flex-direction: column;
            align-items: center;
            min-height: 100vh;
            padding: 20px;
        }

        header {
            text-align: center;
            margin-bottom: 20px;
        }

        h1 {
            color: var(--accent-blue);
            font-size: 1.8rem;
            margin-bottom: 6px;
        }

        p.subtitle {
            color: var(--text-dim);
            font-size: 0.95rem;
        }

        .tab-navigation {
            display: flex;
            gap: 12px;
            margin-bottom: 20px;
        }

        .tab-btn {
            background-color: var(--card-bg);
            color: var(--text-dim);
            border: 1px solid var(--border-color);
            padding: 10px 20px;
            border-radius: 8px;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.2s ease;
        }

        .tab-btn.active {
            background-color: var(--accent-blue);
            color: var(--bg-main);
            border-color: var(--accent-blue);
        }

        .sim-container {
            display: none;
            grid-template-columns: 1fr 340px;
            gap: 20px;
            width: 100%;
            max-width: 1050px;
        }

        .sim-container.active {
            display: grid;
        }

        @media (max-width: 820px) {
            .sim-container {
                grid-template-columns: 1fr;
            }
        }

        .canvas-card {
            background-color: var(--card-bg);
            border: 1px solid var(--border-color);
            border-radius: 12px;
            padding: 16px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            position: relative;
            min-height: 420px;
        }

        canvas {
            background-color: #0b1120;
            border-radius: 8px;
            width: 100%;
            height: auto;
            max-width: 650px;
        }

        .control-card {
            background-color: var(--card-bg);
            border: 1px solid var(--border-color);
            border-radius: 12px;
            padding: 20px;
            display: flex;
            flex-direction: column;
            gap: 16px;
        }

        .pdf-btn {
            background-color: #0284c7;
            color: #ffffff;
            border: none;
            padding: 12px 16px;
            border-radius: 8px;
            font-weight: bold;
            font-size: 0.95rem;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 8px;
            transition: background-color 0.2s ease, transform 0.1s ease;
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.2);
        }

        .pdf-btn:hover {
            background-color: #0369a1;
        }

        .pdf-btn:active {
            transform: scale(0.98);
        }

        .control-group {
            display: flex;
            flex-direction: column;
            gap: 6px;
        }

        .control-header {
            display: flex;
            justify-content: space-between;
            font-size: 0.9rem;
            color: var(--text-light);
        }

        .control-header span.val {
            color: var(--accent-blue);
            font-weight: bold;
        }

        input[type="range"] {
            accent-color: var(--accent-blue);
            cursor: pointer;
        }

        .status-badge {
            padding: 10px;
            border-radius: 8px;
            text-align: center;
            font-weight: bold;
            font-size: 0.95rem;
            transition: background-color 0.3s;
        }

        .status-badge.balanced {
            background-color: rgba(34, 197, 94, 0.2);
            border: 1px solid var(--accent-green);
            color: var(--accent-green);
        }

        .status-badge.unbalanced {
            background-color: rgba(239, 68, 68, 0.2);
            border: 1px solid var(--accent-red);
            color: var(--accent-red);
        }

        .formula-box {
            background-color: rgba(15, 23, 42, 0.6);
            border-left: 4px solid var(--accent-amber);
            padding: 12px;
            border-radius: 4px;
            font-size: 0.85rem;
            line-height: 1.5;
        }

        .math-eq {
            color: var(--accent-amber);
            font-weight: bold;
            font-family: monospace;
            font-size: 0.95rem;
        }
    </style>
</head>
<body>

    <header>
        <h1>Bridge Circuit Interactive Simulator</h1>
        <p class="subtitle">Explore Wheatstone Bridge theory and the Meter Bridge lab experiment</p>
    </header>

    <div class="tab-navigation">
        <button class="tab-btn active" onclick="switchTab('wheatstone')">1. Wheatstone Bridge</button>
        <button class="tab-btn" onclick="switchTab('meter')">2. Meter Bridge Lab</button>
    </div>

    <!-- WHEATSTONE BRIDGE SIMULATION -->
    <div id="wheatstone-sim" class="sim-container active">
        <div class="canvas-card">
            <canvas id="wheatstoneCanvas" width="600" height="400"></canvas>
        </div>

        <div class="control-card">
            <button class="pdf-btn" onclick="generatePDFWorksheet()">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                    <polyline points="7 10 12 15 17 10"></polyline>
                    <line x1="12" y1="15" x2="12" y2="3"></line>
                </svg>
                Download Unique Worksheet (PDF)
            </button>

            <div id="ws-status" class="status-badge unbalanced">Unbalanced (Current Flowing)</div>

            <div class="control-group">
                <div class="control-header">Resistor P: <span id="ws-p-val" class="val">100 Ω</span></div>
                <input type="range" id="ws-p" min="10" max="500" value="100">
            </div>

            <div class="control-group">
                <div class="control-header">Resistor Q: <span id="ws-q-val" class="val">100 Ω</span></div>
                <input type="range" id="ws-q" min="10" max="500" value="100">
            </div>

            <div class="control-group">
                <div class="control-header">Variable Resistor R: <span id="ws-r-val" class="val">50 Ω</span></div>
                <input type="range" id="ws-r" min="1" max="500" value="50">
            </div>

            <div class="formula-box">
                <div class="math-eq">Balance Ratio: P/Q = R/S → S = R × (Q/P)</div>
                <div>Ratio P/Q = <span id="ws-pq-ratio">1.00</span></div>
                <div>Galvanometer Current (I<sub>g</sub>): <span id="ws-ig-val">--</span></div>
                <div style="margin-top: 8px; font-weight: bold; font-size: 0.95rem;">
                    Unknown Resistor (S) = <span id="ws-calc-s" style="color: var(--text-dim);">??? (Find Balance)</span>
                </div>
            </div>
        </div>
    </div>

    <!-- METER BRIDGE SIMULATION -->
    <div id="meter-sim" class="sim-container">
        <div class="canvas-card">
            <canvas id="meterCanvas" width="600" height="400"></canvas>
        </div>

        <div class="control-card">
            <button class="pdf-btn" onclick="generatePDFWorksheet()">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                    <polyline points="7 10 12 15 17 10"></polyline>
                    <line x1="12" y1="15" x2="12" y2="3"></line>
                </svg>
                Download Unique Worksheet (PDF)
            </button>

            <div id="mb-status" class="status-badge unbalanced">Galvanometer Deflected</div>

            <div class="control-group">
                <div class="control-header">Resistance Box (R): <span id="mb-r-val" class="val">10 Ω</span></div>
                <input type="range" id="mb-r" min="1" max="50" value="10">
            </div>

            <div class="control-group">
                <div class="control-header">Jockey Position (l): <span id="mb-l-val" class="val">30.0 cm</span></div>
                <input type="range" id="mb-l" min="1" max="99" value="30" step="0.5">
            </div>

            <div class="formula-box">
                <div class="math-eq">Formula: X = R × (100 - l) / l</div>
                <div>Known R = <span id="mb-disp-r">10</span> Ω</div>
                <div>Balancing Length (l) = <span id="mb-disp-l">30</span> cm</div>
                <div>Remaining Length (100-l) = <span id="mb-disp-rem">70</span> cm</div>
                <div style="margin-top: 8px; font-weight: bold; font-size: 0.95rem;">
                    Calculated Unknown (X) = <span id="mb-calc-x" style="color: var(--text-dim);">??? (Find Null Point)</span>
                </div>
            </div>
        </div>
    </div>

    <script>
        let currentTab = 'wheatstone';
        let animOffset = 0;

        function switchTab(tab) {
            currentTab = tab;
            document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
            document.querySelectorAll('.sim-container').forEach(c => c.classList.remove('active'));
            
            if (tab === 'wheatstone') {
                document.querySelectorAll('.tab-btn')[0].classList.add('active');
                document.getElementById('wheatstone-sim').classList.add('active');
            } else {
                document.querySelectorAll('.tab-btn')[1].classList.add('active');
                document.getElementById('meter-sim').classList.add('active');
            }
        }

        // --- RESISTOR SYMBOL HELPER ---
        function drawResistorSymbol(ctx, x1, y1, x2, y2, isVariable, label, valueText, color) {
            ctx.save();
            ctx.strokeStyle = color;
            ctx.fillStyle = color;
            ctx.lineWidth = 2.5;

            const midX = (x1 + x2) / 2;
            const midY = (y1 + y2) / 2;
            const dx = x2 - x1;
            const dy = y2 - y1;
            const distance = Math.sqrt(dx * dx + dy * dy);
            const angle = Math.atan2(dy, dx);

            ctx.translate(midX, midY);
            ctx.rotate(angle);

            const width = 40;

            // Leading wire
            ctx.beginPath();
            ctx.moveTo(-distance / 2, 0);
            ctx.lineTo(-width / 2, 0);

            // Zigzag
            const steps = 6;
            const stepWidth = width / steps;
            let currX = -width / 2;
            
            for (let i = 0; i < steps; i++) {
                currX += stepWidth;
                let zigY = (i % 2 === 0) ? -10 : 10;
                if (i === steps - 1) zigY = 0;
                ctx.lineTo(currX, zigY);
            }

            // Trailing wire
            ctx.lineTo(distance / 2, 0);
            ctx.stroke();

            // Variable Resistor Arrow
            if (isVariable) {
                ctx.beginPath();
                ctx.moveTo(-18, 16);
                ctx.lineTo(18, -16);
                ctx.stroke();

                ctx.beginPath();
                ctx.moveTo(18, -16);
                ctx.lineTo(10, -16);
                ctx.lineTo(18, -8);
                ctx.closePath();
                ctx.fill();
            }

            // Text Labels
            ctx.rotate(-angle);
            ctx.font = 'bold 13px sans-serif';
            ctx.textAlign = 'center';
            ctx.fillText(label, 0, -22);
            ctx.font = '12px monospace';
            ctx.fillText(valueText, 0, 28);

            ctx.restore();
        }

        // --- LINEAR & WELL-SPACED CURRENT FLOW HELPER ---
        function drawLinearCurrentFlow(ctx, pathPoints, offset, dotColor = '#38bdf8', reverse = false) {
            ctx.save();
            ctx.fillStyle = dotColor;
            ctx.shadowBlur = 4;
            ctx.shadowColor = dotColor;

            let totalLength = 0;
            const segmentLengths = [];
            for (let i = 0; i < pathPoints.length - 1; i++) {
                const dx = pathPoints[i+1].x - pathPoints[i].x;
                const dy = pathPoints[i+1].y - pathPoints[i].y;
                const len = Math.sqrt(dx * dx + dy * dy);
                segmentLengths.push(len);
                totalLength += len;
            }

            const spacing = 42; 
            const flowOffset = reverse ? -offset : offset;

            for (let d = (flowOffset % spacing + spacing) % spacing; d < totalLength; d += spacing) {
                let currentDistance = 0;
                for (let i = 0; i < segmentLengths.length; i++) {
                    if (currentDistance + segmentLengths[i] >= d) {
                        const distInSegment = d - currentDistance;
                        const ratio = distInSegment / segmentLengths[i];
                        const x = pathPoints[i].x + ratio * (pathPoints[i+1].x - pathPoints[i].x);
                        const y = pathPoints[i].y + ratio * (pathPoints[i+1].y - pathPoints[i].y);

                        ctx.beginPath();
                        ctx.arc(x, y, 3, 0, Math.PI * 2);
                        ctx.fill();
                        break;
                    }
                    currentDistance += segmentLengths[i];
                }
            }
            ctx.restore();
        }

        // --- GALVANOMETER DIAL WITH GRADUATION MARKS & ARROWHEAD NEEDLE ---
        function drawGalvanometerDial(ctx, cx, cy, radius, isBalanced, angle) {
            ctx.save();

            // Dial Outer Frame
            ctx.fillStyle = '#1e293b';
            ctx.strokeStyle = isBalanced ? '#22c55e' : '#ef4444';
            ctx.lineWidth = 3;
            ctx.beginPath();
            ctx.arc(cx, cy, radius, 0, Math.PI * 2);
            ctx.fill();
            ctx.stroke();

            // Graduation Marks
            ctx.strokeStyle = '#94a3b8';
            ctx.lineWidth = 1;
            const totalTicks = 7;
            const minAngle = -Math.PI * 0.75;
            const maxAngle = -Math.PI * 0.25;
            
            for (let i = 0; i < totalTicks; i++) {
                const tickAngle = minAngle + (i / (totalTicks - 1)) * (maxAngle - minAngle);
                const innerR = radius - 6;
                const outerR = radius - 2;

                const x1 = cx + innerR * Math.cos(tickAngle);
                const y1 = cy + innerR * Math.sin(tickAngle);
                const x2 = cx + outerR * Math.cos(tickAngle);
                const y2 = cy + outerR * Math.sin(tickAngle);

                ctx.beginPath();
                ctx.moveTo(x1, y1);
                ctx.lineTo(x2, y2);
                ctx.stroke();
            }

            // Central Pivot
            ctx.fillStyle = '#f8fafc';
            ctx.beginPath();
            ctx.arc(cx, cy, 2.5, 0, Math.PI * 2);
            ctx.fill();

            // Needle
            const needleLength = radius - 7;
            const tipX = cx + needleLength * Math.cos(angle);
            const tipY = cy + needleLength * Math.sin(angle);

            ctx.strokeStyle = '#f8fafc';
            ctx.lineWidth = 1.8;
            ctx.beginPath();
            ctx.moveTo(cx, cy);
            ctx.lineTo(tipX, tipY);
            ctx.stroke();

            // Arrow Head
            const headLength = 6;
            const headAngle = 0.45;

            ctx.fillStyle = '#f8fafc';
            ctx.beginPath();
            ctx.moveTo(tipX, tipY);
            ctx.lineTo(
                tipX - headLength * Math.cos(angle - headAngle),
                tipY - headLength * Math.sin(angle - headAngle)
            );
            ctx.lineTo(
                tipX - headLength * Math.cos(angle + headAngle),
                tipY - headLength * Math.sin(angle + headAngle)
            );
            ctx.closePath();
            ctx.fill();

            // Label
            ctx.fillStyle = '#f8fafc';
            ctx.font = 'bold 11px sans-serif';
            ctx.textAlign = 'center';
            ctx.fillText('G', cx, cy + (radius > 22 ? 16 : 13));

            ctx.restore();
        }

        // --- WHEATSTONE BRIDGE RENDER & LOGIC ---
        const wsCanvas = document.getElementById('wheatstoneCanvas');
        const wsCtx = wsCanvas.getContext('2d');
        const ACTUAL_UNKNOWN_S = 150;

        function renderWheatstone() {
            const P = parseFloat(document.getElementById('ws-p').value);
            const Q = parseFloat(document.getElementById('ws-q').value);
            const R = parseFloat(document.getElementById('ws-r').value);
            const S_hidden = ACTUAL_UNKNOWN_S; 

            document.getElementById('ws-p-val').textContent = P + ' Ω';
            document.getElementById('ws-q-val').textContent = Q + ' Ω';
            document.getElementById('ws-r-val').textContent = R + ' Ω';

            const pq = (P / Q).toFixed(2);
            document.getElementById('ws-pq-ratio').textContent = pq;

            const V = 9;
            const Vb = V * (Q / (P + Q));
            const Vd = V * (S_hidden / (R + S_hidden));
            const V_diff = Vb - Vd;
            
            const isBalanced = Math.abs(V_diff) < 0.05;
            const statusEl = document.getElementById('ws-status');
            const calcSEl = document.getElementById('ws-calc-s');
            const calculated_S = (R * Q / P).toFixed(1);

            if (isBalanced) {
                statusEl.textContent = "Balanced! (Ig = 0.00 mA)";
                statusEl.className = "status-badge balanced";
                document.getElementById('ws-ig-val').textContent = "0.00 mA";
                calcSEl.textContent = calculated_S + " Ω";
                calcSEl.style.color = "var(--accent-green)";
            } else {
                statusEl.textContent = "Unbalanced (Current Flowing)";
                statusEl.className = "status-badge unbalanced";
                document.getElementById('ws-ig-val').textContent = (V_diff * 10).toFixed(2) + " mA";
                calcSEl.textContent = "??? (Find Balance)";
                calcSEl.style.color = "var(--text-dim)";
            }

            wsCtx.clearRect(0, 0, wsCanvas.width, wsCanvas.height);

            const center = { x: 300, y: 190 };
            const top = { x: 300, y: 70 };
            const bottom = { x: 300, y: 310 };
            const left = { x: 150, y: 190 };
            const right = { x: 450, y: 190 };

            // Wires
            wsCtx.strokeStyle = '#64748b';
            wsCtx.lineWidth = 2;
            wsCtx.beginPath();
            wsCtx.moveTo(left.x, left.y);
            wsCtx.lineTo(70, left.y);
            wsCtx.lineTo(70, 360);
            wsCtx.lineTo(right.x, 360);
            wsCtx.lineTo(right.x, right.y);
            wsCtx.stroke();

            // DC Source
            wsCtx.strokeStyle = '#f59e0b';
            wsCtx.lineWidth = 3;
            wsCtx.beginPath();
            wsCtx.moveTo(250, 348);
            wsCtx.lineTo(250, 372);
            wsCtx.stroke();
            wsCtx.lineWidth = 5;
            wsCtx.beginPath();
            wsCtx.moveTo(265, 354);
            wsCtx.lineTo(265, 366);
            wsCtx.stroke();

            wsCtx.fillStyle = '#f59e0b';
            wsCtx.font = 'bold 12px sans-serif';
            wsCtx.fillText('DC Source (+ 9V -)', 230, 338);

            // Bridge Branch Wire
            wsCtx.strokeStyle = isBalanced ? '#22c55e' : '#ef4444';
            wsCtx.lineWidth = 2;
            wsCtx.beginPath();
            wsCtx.moveTo(top.x, top.y);
            wsCtx.lineTo(bottom.x, bottom.y);
            wsCtx.stroke();

            // Resistors
            drawResistorSymbol(wsCtx, left.x, left.y, top.x, top.y, false, "Resistor P", P + " Ω", "#38bdf8");
            drawResistorSymbol(wsCtx, top.x, top.y, right.x, right.y, false, "Resistor Q", Q + " Ω", "#38bdf8");
            drawResistorSymbol(wsCtx, left.x, left.y, bottom.x, bottom.y, true, "Variable R", R + " Ω", "#22c55e");
            drawResistorSymbol(wsCtx, bottom.x, bottom.y, right.x, right.y, false, "Unknown S", isBalanced ? calculated_S + " Ω" : "S (Unknown)", isBalanced ? "#22c55e" : "#ef4444");

            // Currents
            const pathBatteryOut = [{x: 250, y: 360}, {x: 70, y: 360}, {x: 70, y: left.y}, {x: left.x, y: left.y}];
            const pathBatteryIn  = [{x: right.x, y: right.y}, {x: right.x, y: 360}, {x: 265, y: 360}];
            
            const pathP = [{x: left.x, y: left.y}, {x: top.x, y: top.y}];
            const pathQ = [{x: top.x, y: top.y}, {x: right.x, y: right.y}];
            const pathR = [{x: left.x, y: left.y}, {x: bottom.x, y: bottom.y}];
            const pathS = [{x: bottom.x, y: bottom.y}, {x: right.x, y: right.y}];

            drawLinearCurrentFlow(wsCtx, pathBatteryOut, animOffset, '#38bdf8');
            drawLinearCurrentFlow(wsCtx, pathBatteryIn, animOffset, '#38bdf8');

            drawLinearCurrentFlow(wsCtx, pathP, animOffset, '#38bdf8');
            drawLinearCurrentFlow(wsCtx, pathQ, animOffset, '#38bdf8');
            drawLinearCurrentFlow(wsCtx, pathR, animOffset, '#22c55e');
            drawLinearCurrentFlow(wsCtx, pathS, animOffset, isBalanced ? '#22c55e' : '#ef4444');

            if (!isBalanced) {
                const pathGalv = [{x: top.x, y: top.y}, {x: bottom.x, y: bottom.y}];
                drawLinearCurrentFlow(wsCtx, pathGalv, animOffset, '#ef4444', V_diff < 0);
            }

            // Galvanometer
            let angle = -Math.PI / 2;
            if (!isBalanced) {
                angle += Math.max(-0.8, Math.min(0.8, V_diff * 0.5));
            }
            drawGalvanometerDial(wsCtx, center.x, center.y, 25, isBalanced, angle);
        }

        // --- METER BRIDGE RENDER & LOGIC ---
        const mbCanvas = document.getElementById('meterCanvas');
        const mbCtx = mbCanvas.getContext('2d');
        const ACTUAL_UNKNOWN_X = 15;

        function renderMeterBridge() {
            const R = parseFloat(document.getElementById('mb-r').value);
            const l = parseFloat(document.getElementById('mb-l').value);

            document.getElementById('mb-r-val').textContent = R + ' Ω';
            document.getElementById('mb-l-val').textContent = l.toFixed(1) + ' cm';

            const ideal_l = (100 * R) / (R + ACTUAL_UNKNOWN_X);
            const error = Math.abs(l - ideal_l);
            const isBalanced = error < 0.8;
            const calc_X = (R * (100 - l) / l).toFixed(1);

            document.getElementById('mb-disp-r').textContent = R;
            document.getElementById('mb-disp-l').textContent = l;
            document.getElementById('mb-disp-rem').textContent = (100 - l).toFixed(1);

            const statusEl = document.getElementById('mb-status');
            const calcXEl = document.getElementById('mb-calc-x');

            if (isBalanced) {
                statusEl.textContent = "Balanced! Null point reached near " + l.toFixed(1) + " cm";
                statusEl.className = "status-badge balanced";
                calcXEl.textContent = calc_X + " Ω";
                calcXEl.style.color = "var(--accent-green)";
            } else {
                statusEl.textContent = "Galvanometer Deflected (Adjust Jockey)";
                statusEl.className = "status-badge unbalanced";
                calcXEl.textContent = "??? (Find Null Point)";
                calcXEl.style.color = "var(--text-dim)";
            }

            mbCtx.clearRect(0, 0, mbCanvas.width, mbCanvas.height);

            const wireStart = { x: 80, y: 260 };
            const wireEnd = { x: 520, y: 260 };
            const wireLengthPx = wireEnd.x - wireStart.x;

            // Wooden Board
            mbCtx.fillStyle = '#334155';
            mbCtx.fillRect(60, 240, 480, 50);

            // Ruler
            mbCtx.fillStyle = '#f59e0b';
            mbCtx.fillRect(wireStart.x, 270, wireLengthPx, 12);

            mbCtx.strokeStyle = '#0f172a';
            mbCtx.lineWidth = 1;
            for(let i = 0; i <= 10; i++) {
                let x = wireStart.x + (i / 10) * wireLengthPx;
                mbCtx.beginPath();
                mbCtx.moveTo(x, 270);
                mbCtx.lineTo(x, 278);
                mbCtx.stroke();
            }

            // Wire
            mbCtx.strokeStyle = '#38bdf8';
            mbCtx.lineWidth = 3;
            mbCtx.beginPath();
            mbCtx.moveTo(wireStart.x, wireStart.y);
            mbCtx.lineTo(wireEnd.x, wireEnd.y);
            mbCtx.stroke();

            // Strips
            mbCtx.strokeStyle = '#94a3b8';
            mbCtx.lineWidth = 8;
            mbCtx.beginPath();
            mbCtx.moveTo(wireStart.x, wireStart.y);
            mbCtx.lineTo(wireStart.x, 140);
            mbCtx.lineTo(170, 140);
            mbCtx.moveTo(230, 140);
            mbCtx.lineTo(370, 140);
            mbCtx.moveTo(430, 140);
            mbCtx.lineTo(wireEnd.x, 140);
            mbCtx.lineTo(wireEnd.x, wireStart.y);
            mbCtx.stroke();

            // Resistors
            drawResistorSymbol(mbCtx, 170, 140, 230, 140, true, "Resistance Box (R)", R + " Ω", "#22c55e");
            drawResistorSymbol(mbCtx, 370, 140, 430, 140, false, "Unknown (X)", isBalanced ? calc_X + " Ω" : "X (Unknown)", isBalanced ? "#22c55e" : "#ef4444");

            // Jockey Position
            const jockeyX = wireStart.x + (l / 100) * wireLengthPx;

            mbCtx.strokeStyle = isBalanced ? '#22c55e' : '#ef4444';
            mbCtx.lineWidth = 2;
            mbCtx.beginPath();
            mbCtx.moveTo(300, 140);
            mbCtx.lineTo(300, 190);
            mbCtx.lineTo(jockeyX, 190);
            mbCtx.lineTo(jockeyX, wireStart.y);
            mbCtx.stroke();

            // Currents
            const wirePath = [{x: wireStart.x, y: wireStart.y}, {x: wireEnd.x, y: wireEnd.y}];
            drawLinearCurrentFlow(mbCtx, wirePath, animOffset, '#38bdf8');

            if (!isBalanced) {
                const galvPath = [
                    {x: 300, y: 140}, {x: 300, y: 190}, {x: jockeyX, y: 190}, {x: jockeyX, y: wireStart.y}
                ];
                drawLinearCurrentFlow(mbCtx, galvPath, animOffset, '#ef4444', (l - ideal_l) < 0);
            }

            // Galvanometer Dial
            let angle = -Math.PI / 2;
            if (!isBalanced) {
                angle += Math.max(-0.7, Math.min(0.7, (l - ideal_l) * 0.05));
            }
            drawGalvanometerDial(mbCtx, 300, 190, 20, isBalanced, angle);

            // Jockey Pointer Head
            mbCtx.fillStyle = '#f8fafc';
            mbCtx.beginPath();
            mbCtx.moveTo(jockeyX, wireStart.y);
            mbCtx.lineTo(jockeyX - 6, wireStart.y - 12);
            mbCtx.lineTo(jockeyX + 6, wireStart.y - 12);
            mbCtx.closePath();
            mbCtx.fill();
        }

        // --- DYNAMIC DATA GENERATOR FUNCTIONS ---
        function getRandomInt(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }

        function getRandomFloat(min, max, decimals = 1) {
            const str = (Math.random() * (max - min) + min).toFixed(decimals);
            return parseFloat(str);
        }

        // Pool of post-lab conceptual questions
        const questionPool = [
            "Why is the Meter Bridge experiment most sensitive and accurate when the null point is near 50 cm?",
            "Explain why end resistance occurs at the copper strips in a Meter Bridge and how it affects measurements.",
            "What would happen to the galvanometer deflection if the battery terminals were reversed?",
            "Why should current not be passed continuously through the wire during the experiment?",
            "If the radius of the Meter Bridge wire is doubled, how does it affect the position of the null point?",
            "How does temperature variation affect the accuracy of resistance values in this lab setup?",
            "Differentiate between the sensitivity of a galvanometer and that of a Wheatstone Bridge circuit."
        ];

        // Shuffle array helper
        function shuffleArray(array) {
            let arr = [...array];
            for (let i = arr.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [arr[i], arr[j]] = [arr[j], arr[i]];
            }
            return arr;
        }

        // --- DYNAMIC PDF LAB WORKSHEET GENERATOR ---
        function generatePDFWorksheet() {
            const { jsPDF } = window.jspdf;
            const doc = new jsPDF('p', 'mm', 'a4');

            // Generate a unique Worksheet Variant ID on each load/click
            const variantID = 'WS-' + getRandomInt(1000, 9999);

            // Dynamic Target Values for this specific session
            const targetUnknownS = getRandomInt(40, 220); // Dynamic target S
            const targetUnknownX = getRandomFloat(8.0, 35.0, 1); // Dynamic target X

            // Select 3 random questions from the pool
            const selectedQuestions = shuffleArray(questionPool).slice(0, 3);

            // --- HEADER BANNER ---
            doc.setFillColor(15, 23, 42); // Theme Navy
            doc.rect(0, 0, 210, 32, 'F');

            doc.setTextColor(255, 255, 255);
            doc.setFont('helvetica', 'bold');
            doc.setFontSize(18);
            doc.text('PHYSICS LAB WORKSHEET', 14, 18);

            doc.setFontSize(9);
            doc.setFont('helvetica', 'normal');
            doc.setTextColor(56, 189, 248); // Accent Blue
            doc.text('Variant Code: ' + variantID, 150, 18);

            doc.setTextColor(203, 213, 225);
            doc.text('Bridge Circuits & Resistance Measurement Experiments', 14, 25);

            // --- STUDENT METADATA BOX ---
            doc.setDrawColor(203, 213, 225);
            doc.setFillColor(248, 250, 252);
            doc.roundedRect(14, 38, 182, 22, 2, 2, 'FD');

            doc.setTextColor(51, 65, 85);
            doc.setFontSize(10);
            doc.setFont('helvetica', 'bold');
            doc.text('Student Name:', 18, 46);
            doc.text('Date:', 130, 46);
            doc.text('Class / Section:', 18, 54);
            doc.text('Instructor:', 130, 54);

            doc.setFont('helvetica', 'normal');
            doc.line(46, 47, 120, 47);
            doc.line(142, 47, 190, 47);
            doc.line(48, 55, 120, 55);
            doc.line(152, 55, 190, 55);

            // --- PART 1: OBJECTIVES & THEORY ---
            let y = 68;
            doc.setFont('helvetica', 'bold');
            doc.setFontSize(11);
            doc.setTextColor(15, 23, 42);
            doc.text('1. Objectives & Assigned Target Values', 14, y);

            y += 6;
            doc.setFont('helvetica', 'normal');
            doc.setFontSize(9);
            doc.setTextColor(51, 65, 85);
            
            doc.text('• Assigned Unknown S (Wheatstone): Determine value near target ~' + targetUnknownS + ' Ω.', 16, y);
            y += 5;
            doc.text('• Assigned Unknown X (Meter Bridge): Determine value near target ~' + targetUnknownX + ' Ω.', 16, y);
            y += 5;
            doc.text('• Balance Condition Equations: (P / Q) = (R / S)   and   X = R × (100 - l) / l', 16, y);

            // --- PART 2: WHEATSTONE BRIDGE DATA TABLE ---
            y += 9;
            doc.setFont('helvetica', 'bold');
            doc.setFontSize(11);
            doc.setTextColor(15, 23, 42);
            doc.text('2. Experiment A: Wheatstone Bridge Data Table', 14, y);

            y += 5;
            doc.setFillColor(30, 41, 59);
            doc.rect(14, y, 182, 7, 'F');
            doc.setTextColor(255, 255, 255);
            doc.setFontSize(8.5);
            doc.text('Trial #', 18, y + 5);
            doc.text('Resistor P (Ω)', 42, y + 5);
            doc.text('Resistor Q (Ω)', 78, y + 5);
            doc.text('Variable R (Ω)', 114, y + 5);
            doc.text('Calculated S (Ω)', 150, y + 5);

            y += 7;
            // Generate 3 randomized target trials for Wheatstone
            for (let i = 1; i <= 3; i++) {
                const pVal = getRandomInt(1, 4) * 50; // 50, 100, 150, 200
                const qVal = getRandomInt(1, 4) * 50;

                doc.setFillColor(i % 2 === 0 ? 241 : 255, i % 2 === 0 ? 245 : 255, i % 2 === 0 ? 249 : 255);
                doc.rect(14, y, 182, 7, 'F');
                doc.setDrawColor(226, 232, 240);
                doc.rect(14, y, 182, 7, 'S');

                doc.setTextColor(51, 65, 85);
                doc.text('Trial ' + i, 18, y + 5);
                doc.text('' + pVal, 42, y + 5);
                doc.text('' + qVal, 78, y + 5);
                doc.text('[ _____ ]', 114, y + 5);
                doc.text('[ _____ ]', 150, y + 5);
                y += 7;
            }

            // --- PART 3: METER BRIDGE DATA TABLE ---
            y += 8;
            doc.setFont('helvetica', 'bold');
            doc.setFontSize(11);
            doc.setTextColor(15, 23, 42);
            doc.text('3. Experiment B: Meter Bridge Null Point Data Table', 14, y);

            y += 5;
            doc.setFillColor(30, 41, 59);
            doc.rect(14, y, 182, 7, 'F');
            doc.setTextColor(255, 255, 255);
            doc.setFontSize(8.5);
            doc.text('Trial #', 18, y + 5);
            doc.text('Known Box R (Ω)', 38, y + 5);
            doc.text('Null Length l (cm)', 75, y + 5);
            doc.text('(100 - l) (cm)', 115, y + 5);
            doc.text('Unknown X (Ω)', 152, y + 5);

            y += 7;
            // Generate 3 randomized target trials for Meter Bridge
            for (let i = 1; i <= 3; i++) {
                const rVal = getRandomInt(1, 4) * 10; // 10, 20, 30, 40

                doc.setFillColor(i % 2 === 0 ? 241 : 255, i % 2 === 0 ? 245 : 255, i % 2 === 0 ? 249 : 255);
                doc.rect(14, y, 182, 7, 'F');
                doc.setDrawColor(226, 232, 240);
                doc.rect(14, y, 182, 7, 'S');

                doc.setTextColor(51, 65, 85);
                doc.text('Trial ' + i, 18, y + 5);
                doc.text('' + rVal, 38, y + 5);
                doc.text('[ _____ ]', 75, y + 5);
                doc.text('[ _____ ]', 115, y + 5);
                doc.text('[ _____ ]', 152, y + 5);
                y += 7;
            }

            // --- PART 4: DYNAMIC POST-LAB QUESTIONS ---
            y += 9;
            doc.setFont('helvetica', 'bold');
            doc.setFontSize(11);
            doc.setTextColor(15, 23, 42);
            doc.text('4. Conceptual & Post-Lab Questions', 14, y);

            y += 6;
            doc.setFontSize(9);

            selectedQuestions.forEach((qText, index) => {
                doc.setFont('helvetica', 'bold');
                doc.setTextColor(15, 23, 42);
                doc.text('Q' + (index + 1) + '. ' + qText, 14, y);
                y += 10;
            });

            // --- FOOTER ---
            doc.setFontSize(8);
            doc.setFont('helvetica', 'italic');
            doc.setTextColor(148, 163, 184);
            doc.text('Generated automatically by Interactive Bridge Visualizer | Sheet ID: ' + variantID, 14, 285);

            // Save with unique name
            doc.save('Bridge_Circuit_Worksheet_' + variantID + '.pdf');
        }

        // Animation Loop
        function animate() {
            animOffset += 0.8;
            if (currentTab === 'wheatstone') {
                renderWheatstone();
            } else {
                renderMeterBridge();
            }
            requestAnimationFrame(animate);
        }

        animate();
    </script>
</body>
</html>`,
    isCustomImport: true,
    authorEmail: "ndunj123@gmail.com",
    authorName: "Axiom Creator",
    createdAt: "2026-08-15"
  },
  {
    id: "sim-quadratic-graph-gradient",
    title: "Quadratic Graph & Gradient Explorer",
    tagline: "Step-by-Step Plotting, Vertex (Max/Min) Turn Points & Right-Angled Triangle Tangent Gradients",
    discipline: "mathematics",
    gradeLevel: ["Middle School (6-8)", "High School (9-12)", "AP / IB STEM"],
    standards: ["CCSS.MATH.HSA.REI.B.4", "CCSS.MATH.HSF.IF.B.4", "CCSS.MATH.HSF.IF.C.7.A"],
    description: "Master quadratic functions y = ax² + bx + c with interactive step-by-step point substitution, smooth curve tracing, automated axis of symmetry and vertex (max/min) calculations, right-angled triangle tangent gradient measurements (Rise/Run = Δy/Δx), and coordinate reader projections.",
    learningObjectives: [
      "Calculate and plot coordinate tables for quadratic functions with step-by-step substitution",
      "Identify vertex coordinates (-b/2a, f(-b/2a)) and classify global maxima vs minima based on leading coefficient a",
      "Determine tangent line gradients using the geometric right-angled triangle method (m = Δy/Δx = Rise/Run)",
      "Explore curve behavior, axes of symmetry, and roots across randomized quadratic functions"
    ],
    thumbnailGradient: "from-purple-600 via-indigo-700 to-blue-900",
    badgeColor: "bg-purple-500/10 text-purple-400 border-purple-500/20",
    iconName: "TrendingUp",
    rating: 5.0,
    reviewCount: 36,
    teacherCount: 142,
    licenseType: "Academic STEM Classroom & Institutional License",
    pricing: {
      singleTeacher: 19,
      schoolDepartment: 200,
      districtUnlimited: 400
    },
    features: [
      "Step-by-step algebraic substitution table and coordinate point plotting",
      "Interactive tangent gradient calculator with right-angled triangle (Rise / Run) derivation",
      "Automatic vertex locator, axis of symmetry, and optimal value detector",
      "Trace speed control and interactive (x, y) coordinate reader projection line"
    ],
    parameterDefaults: {
      coeffA: 1,
      coeffB: -2,
      coeffC: -3,
      tangentX: 1.0
    },
    parameterControls: [
      {
        key: "coeffA",
        label: "Leading Coefficient (a)",
        min: -2,
        max: 2,
        step: 1,
        unit: "",
        description: "Quadratic curvature coefficient"
      },
      {
        key: "coeffB",
        label: "Linear Coefficient (b)",
        min: -5,
        max: 5,
        step: 1,
        unit: "",
        description: "Linear term coefficient"
      },
      {
        key: "coeffC",
        label: "Constant Term (c)",
        min: -8,
        max: 8,
        step: 1,
        unit: "",
        description: "Y-intercept value"
      },
      {
        key: "tangentX",
        label: "Tangent Point (x)",
        min: -4,
        max: 4,
        step: 0.1,
        unit: "",
        description: "Position along the curve to evaluate gradient"
      }
    ],
    sampleChallenges: [
      {
        id: "ch-quad-1",
        title: "Find the Stationary Turning Point",
        instruction: "Position the gradient slider at the curve's vertex. Verify that the tangent slope equals 0.00.",
        targetMetric: "Gradient",
        targetValue: 0.0,
        tolerance: 0.05,
        currentValueKey: "m",
        rewardBadge: "Calculus Apprentice"
      }
    ],
    previewFacts: [
      "The derivative of y = ax² + bx + c is dy/dx = 2ax + b, which equals zero exactly at the turning vertex x = -b/(2a).",
      "The right-angled triangle method measures the average rate of change (Rise / Run) over an interval, providing intuitive geometric foundation for differential calculus."
    ],
    isHtmlApp: true,
    htmlContent: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Interactive Quadratic Graph & Gradient Explorer</title>
    <style>
        :root {
            --bg-color: #0f172a;
            --card-bg: #1e293b;
            --accent-blue: #38bdf8;
            --accent-green: #4ade80;
            --accent-purple: #c084fc;
            --accent-pink: #f472b6;
            --accent-amber: #fbbf24;
            --text-main: #f8fafc;
            --text-muted: #94a3b8;
            --grid-line: #334155;
            --axis-line: #64748b;
        }

        * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
            font-family: 'Segoe UI', system-ui, -apple-system, sans-serif;
        }

        body {
            background-color: var(--bg-color);
            color: var(--text-main);
            min-height: 100vh;
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 20px;
        }

        header {
            text-align: center;
            margin-bottom: 20px;
        }

        h1 {
            font-size: 1.8rem;
            color: var(--accent-blue);
            margin-bottom: 6px;
        }

        p.subtitle {
            color: var(--text-muted);
            font-size: 0.95rem;
        }

        .container {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 20px;
            max-width: 1250px;
            width: 100%;
        }

        @media (max-width: 950px) {
            .container {
                grid-template-columns: 1fr;
            }
        }

        .panel {
            background-color: var(--card-bg);
            border-radius: 12px;
            padding: 20px;
            box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.3);
            display: flex;
            flex-direction: column;
            gap: 16px;
        }

        .equation-box {
            background-color: #0f172a;
            border: 1px solid var(--accent-blue);
            border-radius: 8px;
            padding: 12px;
            text-align: center;
            font-size: 1.4rem;
            font-weight: bold;
            color: var(--accent-amber);
            letter-spacing: 0.5px;
        }

        .controls-group {
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
        }

        button {
            background-color: #334155;
            color: var(--text-main);
            border: none;
            padding: 10px 14px;
            border-radius: 6px;
            cursor: pointer;
            font-weight: 600;
            transition: all 0.2s ease;
            flex: 1;
            min-width: 130px;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            gap: 6px;
        }

        button:hover:not(:disabled) {
            background-color: #475569;
            transform: translateY(-1px);
        }

        button:disabled {
            opacity: 0.4;
            cursor: not-allowed;
            filter: grayscale(80%);
        }

        button.primary {
            background-color: var(--accent-blue);
            color: #0f172a;
        }

        button.primary:hover:not(:disabled) {
            background-color: #7dd3fc;
        }

        button.success {
            background-color: var(--accent-green);
            color: #0f172a;
        }

        button.success:hover:not(:disabled) {
            background-color: #86efac;
        }

        .table-container {
            overflow-x: auto;
        }

        table {
            width: 100%;
            border-collapse: collapse;
            text-align: center;
            background-color: #0f172a;
            border-radius: 8px;
            overflow: hidden;
        }

        th, td {
            padding: 8px 6px;
            border: 1px solid var(--grid-line);
            font-size: 0.9rem;
        }

        th {
            background-color: #1e293b;
            color: var(--accent-blue);
        }

        td.calculated {
            color: var(--accent-green);
            font-weight: bold;
        }

        .feature-card {
            background-color: #0f172a;
            border-radius: 8px;
            padding: 12px;
            display: flex;
            flex-direction: column;
            gap: 8px;
            border: 1px solid var(--grid-line);
        }

        .feature-card.calc-card {
            border-color: var(--accent-green);
        }

        .feature-card.vertex-card {
            border-color: var(--accent-amber);
        }

        .feature-card.gradient-card {
            border-color: var(--accent-purple);
        }

        .feature-card.reader-card {
            border-color: var(--accent-pink);
        }

        .feature-title {
            font-weight: bold;
            font-size: 0.9rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .slider-control {
            display: flex;
            align-items: center;
            gap: 12px;
        }

        input[type=range] {
            flex: 1;
            cursor: pointer;
        }

        #speedSlider { accent-color: var(--accent-purple); }
        #xReaderSlider { accent-color: var(--accent-pink); }
        #gradientSlider { accent-color: var(--accent-purple); }

        .canvas-container {
            position: relative;
            width: 100%;
            aspect-ratio: 1;
            background-color: #0f172a;
            border-radius: 8px;
            overflow: hidden;
            border: 1px solid var(--grid-line);
        }

        canvas {
            width: 100%;
            height: 100%;
            display: block;
        }

        .math-box {
            font-family: 'Courier New', Courier, monospace;
            font-size: 0.88rem;
            background-color: #1a2332;
            padding: 8px 10px;
            border-radius: 6px;
            color: #e2e8f0;
            line-height: 1.5;
        }

        .fraction-line {
            display: inline-flex;
            align-items: center;
            gap: 6px;
            flex-wrap: wrap;
            margin-top: 6px;
        }

        .frac {
            display: inline-flex;
            flex-direction: column;
            text-align: center;
            vertical-align: middle;
            padding: 0 4px;
        }

        .num {
            border-bottom: 1px solid #e2e8f0;
            padding-bottom: 1px;
        }

        .den {
            padding-top: 1px;
        }

        .toggle-label {
            font-size: 0.85rem;
            color: var(--text-muted);
            display: flex;
            align-items: center;
            gap: 6px;
            cursor: pointer;
        }
    </style>
</head>
<body>

    <header>
        <h1>Quadratic Graph & Gradient Explorer</h1>
        <p class="subtitle">Step-by-step plotting, turn-point (vertex) calculator, and right-angled triangle gradient finder</p>
    </header>

    <div class="container">
        <!-- Left Panel: Calculations & Tools -->
        <div class="panel">
            <div id="equation" class="equation-box">y = x² - 2x - 3</div>

            <div class="controls-group">
                <button class="primary" onclick="generateRandomFunction()">🎲 New Random Graph</button>
                <button id="calcNextBtn" onclick="calculateNextYValue()">⚡ Calculate Next y</button>
            </div>

            <div class="table-container">
                <table id="valuesTable">
                    <thead><tr id="xRow"><th>x</th></tr></thead>
                    <tbody><tr id="yRow"><th>y</th></tr></tbody>
                </table>
            </div>

            <div class="controls-group">
                <button class="success" id="plotBtn" onclick="plotNextPoint()">📍 Plot Point (<span id="plottedCount">0</span>/<span id="totalCount">7</span>)</button>
                <button class="success" id="curveBtn" onclick="drawCurveAnimation()" disabled>📈 Join Points (Curve)</button>
            </div>

            <!-- Dynamic Max/Min Value Card -->
            <div class="feature-card vertex-card">
                <div class="feature-title" style="color:var(--accent-amber);">
                    <span>📌 Maximum / Minimum Value (Vertex)</span>
                    <label class="toggle-label">
                        <input type="checkbox" id="showVertexCheck" checked onchange="drawGraph()"> Show on Graph
                    </label>
                </div>
                <div id="vertexDisplay" class="math-box">
                    Calculating vertex...
                </div>
            </div>

            <!-- Right-Angled Triangle Gradient Card -->
            <div class="feature-card gradient-card">
                <div class="feature-title" style="color:var(--accent-purple);">
                    <span>📐 Tangent Gradient (Right-Angled Triangle Method)</span>
                    <label class="toggle-label">
                        <input type="checkbox" id="showGradientCheck" checked onchange="drawGraph()"> Show Triangle
                    </label>
                </div>
                <div class="slider-control">
                    <span style="font-size:0.85rem; color:var(--text-muted);" id="gradMinX">-4</span>
                    <input type="range" id="gradientSlider" min="-4" max="4" step="0.1" value="1" oninput="updateGradient()">
                    <span style="font-size:0.85rem; color:var(--text-muted);" id="gradMaxX">4</span>
                </div>
                <div id="gradientDisplay" class="math-box">
                    Move slider to calculate gradient at any point on the curve.
                </div>
            </div>

            <!-- Trace Speed Control -->
            <div class="feature-card" style="border-color: var(--accent-blue);">
                <div class="feature-title" style="color:var(--accent-blue);">
                    <span>⏱️ Curve Trace Speed</span>
                    <span style="font-size:0.85rem;" id="speedDisplay">Very Slow</span>
                </div>
                <div class="slider-control">
                    <span style="font-size:0.85rem; color:var(--text-muted);">Slow</span>
                    <input type="range" id="speedSlider" min="0.001" max="0.025" step="0.001" value="0.004" oninput="updateSpeedLabel()">
                    <span style="font-size:0.85rem; color:var(--text-muted);">Fast</span>
                </div>
            </div>

            <!-- Interactive Graph Reader Section -->
            <div class="feature-card reader-card">
                <div class="feature-title" style="color:var(--accent-pink);">
                    <span>🔎 Interactive Graph Reader</span>
                    <span id="readerCoords">x = 0.0, y = 0.0</span>
                </div>
                <div class="slider-control">
                    <span style="font-size:0.85rem; color:var(--text-muted);" id="minXLabel">-4</span>
                    <input type="range" id="xReaderSlider" min="-4" max="4" step="0.1" value="0" oninput="updateReader()">
                    <span style="font-size:0.85rem; color:var(--text-muted);" id="maxXLabel">4</span>
                </div>
            </div>
        </div>

        <!-- Right Panel: Calculation Display + Canvas Plot Area -->
        <div class="panel">
            <!-- Dynamic Substitution Card (Top Right, above graph paper) -->
            <div class="feature-card calc-card">
                <div class="feature-title" style="color:var(--accent-green);">
                    <span>🧮 Step-by-Step Substitution</span>
                </div>
                <div id="calcDisplay" class="math-box">
                    Click 'Calculate Next y' to step through substitution.
                </div>
            </div>

            <!-- Graph Canvas Container -->
            <div class="canvas-container">
                <canvas id="graphCanvas"></canvas>
            </div>
        </div>
    </div>

    <script>
        let a = 1, b = -2, c = -3;
        let xValues = [-2, -1, 0, 1, 2, 3, 4];
        let yValues = [];
        let currentCalcIndex = 0;
        let plottedPointCount = 0;
        let curveDrawn = false;
        let curveProgress = 0;
        let animationFrameId = null;

        const canvas = document.getElementById('graphCanvas');
        const ctx = canvas.getContext('2d');

        function resizeCanvas() {
            const rect = canvas.parentElement.getBoundingClientRect();
            canvas.width = rect.width * window.devicePixelRatio;
            canvas.height = rect.height * window.devicePixelRatio;
            drawGraph();
        }

        window.addEventListener('resize', resizeCanvas);

        function generateRandomFunction() {
            const aChoices = [1, -1, 2, -2];
            a = aChoices[Math.floor(Math.random() * aChoices.length)];
            b = Math.floor(Math.random() * 7) - 3;
            c = Math.floor(Math.random() * 9) - 4;

            const vertexX = -b / (2 * a);
            const startX = Math.round(vertexX) - 3;
            xValues = [];
            for (let i = 0; i < 7; i++) {
                xValues.push(startX + i);
            }

            updateEquationDisplay();
            resetState();
        }

        function updateEquationDisplay() {
            let eq = "y = ";
            if (a === 1) eq += "x²";
            else if (a === -1) eq += "-x²";
            else eq += a + "x²";

            if (b > 0) eq += " + " + (b === 1 ? "" : b) + "x";
            else if (b < 0) eq += " - " + (Math.abs(b) === 1 ? "" : Math.abs(b)) + "x";

            if (c > 0) eq += " + " + c;
            else if (c < 0) eq += " - " + Math.abs(c);

            document.getElementById('equation').innerText = eq;
        }

        function resetState() {
            if (animationFrameId) cancelAnimationFrame(animationFrameId);

            yValues = new Array(xValues.length).fill(null);
            currentCalcIndex = 0;
            plottedPointCount = 0;
            curveDrawn = false;
            curveProgress = 0;

            document.getElementById('totalCount').innerText = xValues.length;
            document.getElementById('plottedCount').innerText = 0;
            document.getElementById('calcNextBtn').disabled = false;
            document.getElementById('plotBtn').disabled = false;
            document.getElementById('curveBtn').disabled = true;

            const minX = xValues[0];
            const maxX = xValues[xValues.length - 1];

            const readerSlider = document.getElementById('xReaderSlider');
            readerSlider.min = minX;
            readerSlider.max = maxX;
            readerSlider.value = 0;

            const gradientSlider = document.getElementById('gradientSlider');
            gradientSlider.min = minX;
            gradientSlider.max = maxX;
            gradientSlider.value = (minX + maxX) / 2;

            document.getElementById('minXLabel').innerText = minX;
            document.getElementById('maxXLabel').innerText = maxX;
            document.getElementById('gradMinX').innerText = minX;
            document.getElementById('gradMaxX').innerText = maxX;

            updateCalcDisplay();
            renderTable();
            calculateVertexData();
            updateGradient();
            updateReader();
            drawGraph();
        }

        function renderTable() {
            const xRow = document.getElementById('xRow');
            const yRow = document.getElementById('yRow');

            xRow.innerHTML = '<th>x</th>' + xValues.map(function(x) { return '<th>' + x + '</th>'; }).join('');
            yRow.innerHTML = '<th>y</th>' + yValues.map(function(y, idx) {
                if (y === null) return '<td>?</td>';
                const isCalculated = idx === currentCalcIndex - 1;
                return '<td class="' + (isCalculated ? 'calculated' : '') + '">' + y + '</td>';
            }).join('');
        }

        function updateCalcDisplay() {
            const calcDisplay = document.getElementById('calcDisplay');
            if (currentCalcIndex === 0) {
                calcDisplay.innerHTML = '<span style="color:var(--text-muted); font-style:italic;">Click \\\'Calculate Next y\\\' to view substitution.</span>';
                return;
            }

            const lastX = xValues[currentCalcIndex - 1];
            const lastY = yValues[currentCalcIndex - 1];

            let subText = 'When x = ' + lastX + ':<br>y = ';
            if (a === 1) subText += '(' + lastX + ')²';
            else if (a === -1) subText += '-(' + lastX + ')²';
            else subText += a + '(' + lastX + ')²';

            if (b > 0) subText += ' + ' + b + '(' + lastX + ')';
            else if (b < 0) subText += ' - ' + Math.abs(b) + '(' + lastX + ')';

            if (c > 0) subText += ' + ' + c;
            else if (c < 0) subText += ' - ' + Math.abs(c);

            subText += '<br>= <strong style="color:var(--accent-green); font-size:1rem;">' + lastY + '</strong>';
            calcDisplay.innerHTML = subText;
        }

        function calculateNextYValue() {
            if (currentCalcIndex >= xValues.length) return;

            const x = xValues[currentCalcIndex];
            const y = a * x * x + b * x + c;
            yValues[currentCalcIndex] = y;

            currentCalcIndex++;
            updateCalcDisplay();
            renderTable();

            if (currentCalcIndex >= xValues.length) {
                document.getElementById('calcNextBtn').disabled = true;
            }
            drawGraph();
        }

        function plotNextPoint() {
            if (plottedPointCount >= currentCalcIndex) {
                if (currentCalcIndex < xValues.length) calculateNextYValue();
            }

            if (plottedPointCount < currentCalcIndex) {
                plottedPointCount++;
                document.getElementById('plottedCount').innerText = plottedPointCount;
                drawGraph();
            }

            if (plottedPointCount >= xValues.length) {
                document.getElementById('plotBtn').disabled = true;
            }

            if (plottedPointCount >= 2) {
                document.getElementById('curveBtn').disabled = false;
            }
        }

        function drawCurveAnimation() {
            if (plottedPointCount < 2) return;

            curveDrawn = true;
            curveProgress = 0;

            if (animationFrameId) cancelAnimationFrame(animationFrameId);

            function animate() {
                const speed = parseFloat(document.getElementById('speedSlider').value);
                curveProgress += speed;
                drawGraph();

                if (curveProgress < 1) animationFrameId = requestAnimationFrame(animate);
            }
            animate();
        }

        function updateSpeedLabel() {
            const val = parseFloat(document.getElementById('speedSlider').value);
            const label = document.getElementById('speedDisplay');
            if (val <= 0.005) label.innerText = "Very Slow";
            else if (val <= 0.012) label.innerText = "Slow";
            else if (val <= 0.018) label.innerText = "Normal";
            else label.innerText = "Fast";
        }

        function calculateVertexData() {
            const vx = -b / (2 * a);
            const vy = a * vx * vx + b * vx + c;
            const isMin = a > 0;

            const typeStr = isMin ? "MINIMUM (∪ Shape)" : "MAXIMUM (∩ Shape)";
            const colorStr = isMin ? "var(--accent-green)" : "var(--accent-pink)";

            let html = '<strong>Type:</strong> <span style="color:' + colorStr + '">' + typeStr + '</span><br>';
            html += '<strong>Axis of Symmetry:</strong> x = ' + vx.toFixed(2) + '<br>';
            html += '<strong>Optimal Value:</strong> y = ' + vy.toFixed(2) + ' at x = ' + vx.toFixed(2);

            document.getElementById('vertexDisplay').innerHTML = html;
            return { x: vx, y: vy, isMin: isMin };
        }

        function updateGradient() {
            const x = parseFloat(document.getElementById('gradientSlider').value);
            const y = a * x * x + b * x + c;
            const m = 2 * a * x + b;

            const run = 1.0;
            const x1_tri = x - run / 2;
            const x2_tri = x + run / 2;
            const y1_tri = y - (m * run) / 2;
            const y2_tri = y + (m * run) / 2;

            const rise = y2_tri - y1_tri;

            let html = '<strong>At Point P (Tangent x = <span style="color:var(--accent-amber);">' + x.toFixed(2) + '</span>):</strong><br>';
            html += '• Lower Point (<em>x</em><sub>1</sub>, <em>y</em><sub>1</sub>) = (' + x1_tri.toFixed(2) + ', ' + y1_tri.toFixed(2) + ')<br>';
            html += '• Upper Point (<em>x</em><sub>2</sub>, <em>y</em><sub>2</sub>) = (' + x2_tri.toFixed(2) + ', ' + y2_tri.toFixed(2) + ')<br>';
            html += '• Vertical Change (&Delta;<em>y</em>) = <em>y</em><sub>2</sub> &minus; <em>y</em><sub>1</sub> = ' + y2_tri.toFixed(2) + ' &minus; (' + y1_tri.toFixed(2) + ') = <strong>' + rise.toFixed(2) + '</strong><br>';
            html += '• Horizontal Change (&Delta;<em>x</em>) = <em>x</em><sub>2</sub> &minus; <em>x</em><sub>1</sub> = ' + x2_tri.toFixed(2) + ' &minus; (' + x1_tri.toFixed(2) + ') = <strong>' + run.toFixed(2) + '</strong><br>';

            html += '<div class="fraction-line"><strong>Gradient (<em>m</em>)</strong> = <div class="frac"><span class="num">Vertical Change (Rise)</span><span class="den">Horizontal Change (Run)</span></div> = <div class="frac"><span class="num"><em>y</em><sub>2</sub> &minus; <em>y</em><sub>1</sub></span><span class="den"><em>x</em><sub>2</sub> &minus; <em>x</em><sub>1</sub></span></div> = <div class="frac"><span class="num">' + rise.toFixed(2) + '</span><span class="den">' + run.toFixed(2) + '</span></div> = <strong style="color:var(--accent-purple); font-size: 1rem;">' + m.toFixed(2) + '</strong></div>';

            document.getElementById('gradientDisplay').innerHTML = html;
            drawGraph();
        }

        function updateReader() {
            const x = parseFloat(document.getElementById('xReaderSlider').value);
            const y = a * x * x + b * x + c;
            document.getElementById('readerCoords').innerText = 'x = ' + x.toFixed(1) + ', y = ' + y.toFixed(1);
            drawGraph();
        }

        function drawGraph() {
            const w = canvas.width;
            const h = canvas.height;
            ctx.clearRect(0, 0, w, h);

            const allCalculatedY = yValues.filter(function(v) { return v !== null; });
            const vx = -b / (2 * a);
            const vy = a * vx * vx + b * vx + c;

            let minY = Math.min(-5, ...allCalculatedY, vy - 2);
            let maxY = Math.max(5, ...allCalculatedY, vy + 2);
            let minX = xValues[0] - 1;
            let maxX = xValues[xValues.length - 1] + 1;

            const padding = 55 * window.devicePixelRatio;
            const toCanvasX = function(x) { return padding + ((x - minX) / (maxX - minX)) * (w - 2 * padding); };
            const toCanvasY = function(y) { return h - padding - ((y - minY) / (maxY - minY)) * (h - 2 * padding); };

            let eqText = "Function: y = ";
            if (a === 1) eqText += "x²";
            else if (a === -1) eqText += "-x²";
            else eqText += a + "x²";
            if (b > 0) eqText += " + " + (b === 1 ? "" : b) + "x";
            else if (b < 0) eqText += " - " + (Math.abs(b) === 1 ? "" : Math.abs(b)) + "x";
            if (c > 0) eqText += " + " + c;
            else if (c < 0) eqText += " - " + Math.abs(c);

            ctx.fillStyle = '#fbbf24';
            ctx.font = 'bold ' + (14 * window.devicePixelRatio) + 'px sans-serif';
            ctx.textAlign = 'left';
            ctx.fillText(eqText, padding, 24 * window.devicePixelRatio);

            ctx.lineWidth = 1 * window.devicePixelRatio;
            ctx.strokeStyle = '#334155';
            ctx.fillStyle = '#94a3b8';
            ctx.font = (11 * window.devicePixelRatio) + 'px sans-serif';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';

            for (let x = Math.ceil(minX); x <= Math.floor(maxX); x++) {
                const cx = toCanvasX(x);
                ctx.beginPath();
                ctx.moveTo(cx, 0);
                ctx.lineTo(cx, h);
                ctx.stroke();

                if (x !== 0) {
                    const cyZero = toCanvasY(0);
                    const labelY = Math.min(Math.max(cyZero + 15, 15), h - 15);
                    ctx.fillText(x, cx, labelY);
                }
            }

            for (let y = Math.ceil(minY); y <= Math.floor(maxY); y++) {
                const cy = toCanvasY(y);
                ctx.beginPath();
                ctx.moveTo(0, cy);
                ctx.lineTo(w, cy);
                ctx.stroke();

                if (y !== 0) {
                    const cxZero = toCanvasX(0);
                    const labelX = Math.min(Math.max(cxZero - 15, 15), w - 15);
                    ctx.fillText(y, labelX, cy);
                }
            }

            ctx.lineWidth = 2.5 * window.devicePixelRatio;
            ctx.strokeStyle = '#94a3b8';
            ctx.fillStyle = '#f8fafc';

            const yZero = toCanvasY(0);
            const xZero = toCanvasX(0);

            ctx.beginPath();
            ctx.moveTo(0, yZero);
            ctx.lineTo(w - 15 * window.devicePixelRatio, yZero);
            ctx.stroke();

            ctx.beginPath();
            ctx.moveTo(w - 15 * window.devicePixelRatio, yZero - 6 * window.devicePixelRatio);
            ctx.lineTo(w - 2 * window.devicePixelRatio, yZero);
            ctx.lineTo(w - 15 * window.devicePixelRatio, yZero + 6 * window.devicePixelRatio);
            ctx.fill();

            ctx.font = 'bold ' + (16 * window.devicePixelRatio) + 'px sans-serif';
            ctx.textAlign = 'right';
            ctx.fillText('x', w - 5 * window.devicePixelRatio, yZero - 18 * window.devicePixelRatio);

            ctx.beginPath();
            ctx.moveTo(xZero, h);
            ctx.lineTo(xZero, 15 * window.devicePixelRatio);
            ctx.stroke();

            ctx.beginPath();
            ctx.moveTo(xZero - 6 * window.devicePixelRatio, 15 * window.devicePixelRatio);
            ctx.lineTo(xZero, 2 * window.devicePixelRatio);
            ctx.lineTo(xZero + 6 * window.devicePixelRatio, 15 * window.devicePixelRatio);
            ctx.fill();

            ctx.textAlign = 'left';
            ctx.fillText('y', xZero + 12 * window.devicePixelRatio, 15 * window.devicePixelRatio);

            if (curveDrawn && plottedPointCount >= 2) {
                ctx.lineWidth = 3 * window.devicePixelRatio;
                ctx.strokeStyle = '#38bdf8';
                ctx.beginPath();

                const firstPlottedX = xValues[0];
                const lastPlottedX = xValues[plottedPointCount - 1];
                const activeSpanX = lastPlottedX - firstPlottedX;

                const totalSteps = 300;
                const endStep = Math.floor(totalSteps * Math.min(curveProgress, 1));

                for (let i = 0; i <= endStep; i++) {
                    const t = i / totalSteps;
                    const curX = firstPlottedX + t * activeSpanX;
                    const curY = a * curX * curX + b * curX + c;

                    const cx = toCanvasX(curX);
                    const cy = toCanvasY(curY);

                    if (i === 0) ctx.moveTo(cx, cy);
                    else ctx.lineTo(cx, cy);
                }
                ctx.stroke();
            }

            for (let idx = 0; idx < plottedPointCount; idx++) {
                const x = xValues[idx];
                const y = yValues[idx];
                if (y === null) continue;

                const cx = toCanvasX(x);
                const cy = toCanvasY(y);

                ctx.fillStyle = '#4ade80';
                ctx.beginPath();
                ctx.arc(cx, cy, 6.5 * window.devicePixelRatio, 0, Math.PI * 2);
                ctx.fill();

                ctx.fillStyle = '#0f172a';
                ctx.beginPath();
                ctx.arc(cx, cy, 2.5 * window.devicePixelRatio, 0, Math.PI * 2);
                ctx.fill();
            }

            if (document.getElementById('showVertexCheck').checked) {
                const vcx = toCanvasX(vx);
                const vcy = toCanvasY(vy);

                ctx.lineWidth = 1.5 * window.devicePixelRatio;
                ctx.strokeStyle = '#fbbf24';
                ctx.setLineDash([5 * window.devicePixelRatio, 4 * window.devicePixelRatio]);

                ctx.beginPath();
                ctx.moveTo(vcx, 0);
                ctx.lineTo(vcx, h);
                ctx.stroke();
                ctx.setLineDash([]);

                ctx.fillStyle = '#fbbf24';
                ctx.beginPath();
                ctx.arc(vcx, vcy, 7 * window.devicePixelRatio, 0, Math.PI * 2);
                ctx.fill();

                ctx.font = 'bold ' + (11 * window.devicePixelRatio) + 'px sans-serif';
                ctx.fillStyle = '#fbbf24';
                ctx.textAlign = vx > 0 ? 'right' : 'left';
                ctx.fillText((a > 0 ? 'Min' : 'Max') + ' (' + vx.toFixed(1) + ', ' + vy.toFixed(1) + ')', vcx + (vx > 0 ? -10 : 10) * window.devicePixelRatio, vcy - 10 * window.devicePixelRatio);
            }

            if (document.getElementById('showGradientCheck').checked) {
                const gx = parseFloat(document.getElementById('gradientSlider').value);
                const gy = a * gx * gx + b * gx + c;
                const m = 2 * a * gx + b;

                const run = 1.0;
                const x1_tri = gx - run / 2;
                const x2_tri = gx + run / 2;
                const y1_tri = gy - (m * run) / 2;
                const y2_tri = gy + (m * run) / 2;

                const p1x = toCanvasX(x1_tri);
                const p1y = toCanvasY(y1_tri);
                const p2x = toCanvasX(x2_tri);
                const p2y = toCanvasY(y2_tri);
                const cornerX = p2x;
                const cornerY = p1y;

                ctx.lineWidth = 2 * window.devicePixelRatio;
                ctx.strokeStyle = '#c084fc';
                ctx.beginPath();
                const tangLen = 2.0;
                ctx.moveTo(toCanvasX(gx - tangLen), toCanvasY(gy - m * tangLen));
                ctx.lineTo(toCanvasX(gx + tangLen), toCanvasY(gy + m * tangLen));
                ctx.stroke();

                ctx.lineWidth = 2 * window.devicePixelRatio;
                ctx.strokeStyle = '#c084fc';
                ctx.fillStyle = 'rgba(192, 132, 252, 0.15)';

                ctx.beginPath();
                ctx.moveTo(p1x, p1y);
                ctx.lineTo(cornerX, cornerY);
                ctx.lineTo(p2x, p2y);
                ctx.closePath();
                ctx.fill();
                ctx.stroke();

                ctx.fillStyle = '#c084fc';
                ctx.beginPath();
                ctx.arc(toCanvasX(gx), toCanvasY(gy), 5.5 * window.devicePixelRatio, 0, Math.PI * 2);
                ctx.fill();
            }

            const readX = parseFloat(document.getElementById('xReaderSlider').value);
            const readY = a * readX * readX + b * readX + c;

            const rx = toCanvasX(readX);
            const ry = toCanvasY(readY);

            ctx.lineWidth = 1.5 * window.devicePixelRatio;
            ctx.strokeStyle = '#f472b6';
            ctx.setLineDash([5 * window.devicePixelRatio, 4 * window.devicePixelRatio]);

            ctx.beginPath();
            ctx.moveTo(rx, yZero);
            ctx.lineTo(rx, ry);
            ctx.stroke();

            ctx.beginPath();
            ctx.moveTo(rx, ry);
            ctx.lineTo(xZero, ry);
            ctx.stroke();

            ctx.setLineDash([]);

            ctx.fillStyle = '#f472b6';
            ctx.beginPath();
            ctx.arc(rx, ry, 5 * window.devicePixelRatio, 0, Math.PI * 2);
            ctx.fill();
        }

        setTimeout(function() {
            updateEquationDisplay();
            resizeCanvas();
            resetState();
        }, 100);
    </script>
</body>
</html>`,
    isCustomImport: true,
    authorEmail: "ndunj123@gmail.com",
    authorName: "Axiom Creator",
    createdAt: "2026-08-16"
  },
  {
    id: "sim-iupac-3d-chemistry",
    title: "3D IUPAC Organic Chemistry Molecular Lab",
    tagline: "Interactive 3D Molecular Builder, Systematic IUPAC Naming & Functional Group Valence Engine",
    discipline: "chemistry",
    gradeLevel: ["High School (9-12)", "AP / IB STEM", "Undergraduate"],
    standards: ["HS-PS1-1", "HS-PS1-2", "AP Chemistry (Unit 2)", "IB Chemistry Topic 10 (Organic Chemistry)"],
    description: "Construct and visualize 3D organic molecules with real-time systematic IUPAC nomenclature parsing. Features dynamic chain length adjustment (1-10 carbons), single/double/triple bonds with Cis (Z) and Trans (E) stereochemistry, extensive functional group substituents (alkyls, carboxylic acids, ethers, esters, halogens, amines, alcohols, carbonyls), multiple representation modes (Ball & Stick, Condensed, Skeletal), and 3D orbital-style rotation.",
    learningObjectives: [
      "Master IUPAC nomenclature rules including lowest locant numbering, alphabetical prefix ordering, and principal functional group suffix prioritization",
      "Model 3D molecular conformations and compare Ball & Stick, Condensed, and Skeletal visual representations",
      "Investigate geometric isomerism (Cis/Z vs Trans/E) across carbon-carbon double bonds",
      "Validate octet rule constraints and carbon tetravalency across substituted hydrocarbon structures"
    ],
    thumbnailGradient: "from-emerald-600 via-teal-700 to-cyan-900",
    badgeColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
    iconName: "Atom",
    rating: 5.0,
    reviewCount: 42,
    teacherCount: 168,
    licenseType: "Academic STEM Classroom & Institutional License",
    pricing: {
      singleTeacher: 19,
      schoolDepartment: 200,
      districtUnlimited: 400
    },
    features: [
      "Real-time IUPAC nomenclature engine with prefix, root, and suffix component breakdown",
      "Interactive 3D Ball & Stick, Condensed, and Skeletal molecular rendering with smooth rotation",
      "Cis/Trans (E/Z) stereochemistry modeling for alkenes and alkynes",
      "Carbon tetravalence enforcement with automatic octet collision alerts and locant optimization"
    ],
    parameterDefaults: {
      chainLength: 4,
      viewMode: "structural"
    },
    parameterControls: [
      {
        key: "chainLength",
        label: "Parent Chain Carbons",
        min: 1,
        max: 10,
        step: 1,
        unit: "carbons",
        description: "Number of carbons in the primary alkane/alkene chain"
      }
    ],
    sampleChallenges: [
      {
        id: "ch-iupac-1",
        title: "Synthesize (trans)-But-2-enoic acid",
        instruction: "Build a 4-carbon chain with a C2=C3 trans double bond and a C1 Carboxylic Acid (-COOH) group.",
        targetMetric: "Molecular Name Match",
        targetValue: 1.0,
        tolerance: 0.0,
        currentValueKey: "valid",
        rewardBadge: "Organic Chemist"
      }
    ],
    previewFacts: [
      "IUPAC (International Union of Pure and Applied Chemistry) rules establish a standardized naming protocol ensuring every chemical structure corresponds to exactly one unique name.",
      "Carbon always forms four covalent bonds in stable organic molecules due to sp3, sp2, or sp hybridization of its valence orbitals."
    ],
    isHtmlApp: true,
    htmlContent: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>3D IUPAC Chemistry Simulator (Large Atom Display)</title>
    <style>
        :root {
            --bg-color: #030712;
            --card-bg: #0f172a;
            --border-color: #1e293b;
            --accent-blue: #38bdf8;
            --text-main: #f8fafc;
            --text-muted: #94a3b8;
        }

        * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
        }

        body {
            background-color: var(--bg-color);
            color: var(--text-main);
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
            padding: 20px;
        }

        .container {
            width: 100%;
            max-width: 1250px;
            background-color: var(--card-bg);
            border: 2px solid #334155;
            border-radius: 14px;
            box-shadow: 0 15px 35px rgba(0,0,0,0.8);
            overflow: hidden;
            display: flex;
            flex-direction: column;
            gap: 16px;
            padding: 24px;
        }

        header {
            text-align: center;
            border-bottom: 2px solid var(--border-color);
            padding-bottom: 16px;
        }

        h1 {
            font-size: 1.6rem;
            color: #ffffff;
            margin-bottom: 6px;
            letter-spacing: 0.5px;
        }

        .iupac-display {
            font-size: 2.2rem;
            font-weight: 800;
            letter-spacing: 0.8px;
            margin: 8px 0;
            color: #38bdf8;
            text-shadow: 0 0 12px rgba(56, 189, 248, 0.3);
            min-height: 48px;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .iupac-display.error {
            color: #f87171;
            text-shadow: 0 0 12px rgba(239, 68, 68, 0.4);
            font-size: 1.2rem;
        }

        .iupac-breakdown {
            font-size: 0.95rem;
            color: var(--text-muted);
            display: flex;
            justify-content: center;
            gap: 8px;
            flex-wrap: wrap;
            min-height: 30px;
        }

        .breakdown-tag {
            padding: 4px 10px;
            border-radius: 6px;
            font-weight: 700;
            font-size: 0.85rem;
            border: 1px solid transparent;
        }

        .tag-prefix { background: rgba(244, 63, 94, 0.2); color: #fb7185; border-color: #f43f5e; }
        .tag-root { background: rgba(56, 189, 248, 0.2); color: #38bdf8; border-color: #0284c7; }
        .tag-suffix { background: rgba(34, 197, 94, 0.2); color: #4ade80; border-color: #16a34a; }
        .tag-stereo { background: rgba(217, 119, 6, 0.2); color: #fbbf24; border-color: #d97706; }

        .canvas-container {
            position: relative;
            background: #020617;
            border: 2px solid #334155;
            border-radius: 10px;
            width: 100%;
            height: 480px;
            cursor: grab;
            overflow: hidden;
        }

        .canvas-container:active {
            cursor: grabbing;
        }

        .canvas-hint {
            position: absolute;
            top: 10px;
            right: 12px;
            background: rgba(15, 23, 42, 0.85);
            border: 1px solid #475569;
            color: #f1f5f9;
            padding: 6px 12px;
            border-radius: 20px;
            font-size: 0.8rem;
            font-weight: 600;
            pointer-events: none;
            display: flex;
            align-items: center;
            gap: 6px;
        }

        canvas {
            width: 100%;
            height: 100%;
            display: block;
        }

        .controls-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
            gap: 16px;
            background: rgba(3, 7, 18, 0.6);
            padding: 18px;
            border-radius: 10px;
            border: 1px solid var(--border-color);
        }

        .control-group {
            display: flex;
            flex-direction: column;
            gap: 8px;
        }

        label {
            font-size: 0.85rem;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 0.8px;
            color: #cbd5e1;
        }

        .slider-row {
            display: flex;
            align-items: center;
            gap: 12px;
        }

        input[type="range"] {
            flex: 1;
            accent-color: var(--accent-blue);
            cursor: pointer;
        }

        .btn-group {
            display: flex;
            gap: 6px;
            flex-wrap: wrap;
        }

        button {
            background: #1e293b;
            border: 1px solid #475569;
            color: #ffffff;
            padding: 8px 14px;
            border-radius: 6px;
            cursor: pointer;
            font-size: 0.85rem;
            font-weight: 600;
            transition: all 0.2s ease;
        }

        button:hover {
            border-color: var(--accent-blue);
            color: var(--accent-blue);
        }

        button.active {
            background: #0284c7;
            color: #ffffff;
            border-color: #38bdf8;
            font-weight: 800;
            box-shadow: 0 0 10px rgba(56, 189, 248, 0.4);
        }

        .bond-selectors, .substituent-selectors {
            display: flex;
            gap: 8px;
            overflow-x: auto;
            padding-bottom: 8px;
            scroll-behavior: smooth;
        }

        .bond-selectors::-webkit-scrollbar, .substituent-selectors::-webkit-scrollbar {
            height: 6px;
        }

        .bond-selectors::-webkit-scrollbar-thumb, .substituent-selectors::-webkit-scrollbar-thumb {
            background: #334155;
            border-radius: 4px;
        }

        .bond-card, .sub-card {
            background: #1e293b;
            border: 1px solid #475569;
            border-radius: 6px;
            padding: 8px 10px;
            min-width: 175px;
            flex-shrink: 0;
            text-align: center;
            font-size: 0.8rem;
            font-weight: 600;
        }

        .bond-card select, .sub-card select {
            width: 100%;
            margin-top: 4px;
            background: #090d16;
            color: #ffffff;
            border: 1px solid #475569;
            border-radius: 4px;
            padding: 5px;
            font-weight: bold;
            cursor: pointer;
        }

        .legend {
            display: flex;
            justify-content: center;
            gap: 14px;
            flex-wrap: wrap;
            font-size: 0.8rem;
            font-weight: 600;
            color: #cbd5e1;
            border-top: 2px solid var(--border-color);
            padding-top: 14px;
        }

        .legend-item {
            display: flex;
            align-items: center;
            gap: 6px;
        }

        .dot {
            width: 12px;
            height: 12px;
            border-radius: 50%;
            border: 1px solid #ffffff;
        }

        .dot-c { background: #10b981; }
        .dot-h { background: #ffffff; }
        .dot-alkyl { background: #f43f5e; }
        .dot-o { background: #ef4444; }
        .dot-halo { background: #a855f7; }
        .dot-n { background: #3b82f6; }
    </style>
</head>
<body>

<div class="container">
    <header>
        <h1>3D IUPAC Chemistry Simulator</h1>
        <div class="iupac-display" id="iupac-name">Loading...</div>
        <div class="iupac-breakdown" id="iupac-breakdown">--</div>
    </header>

    <div class="canvas-container" id="canvas-wrapper">
        <div class="canvas-hint">🌐 Drag to rotate | Scroll to scale</div>
        <canvas id="moleculeCanvas"></canvas>
    </div>

    <div class="controls-grid">
        <div class="control-group">
            <label>Parent Chain (<span id="chain-len-val">4</span> Carbons)</label>
            <div class="slider-row">
                <input type="range" id="chain-length" min="1" max="10" value="4">
            </div>
        </div>

        <div class="control-group">
            <label>3D View Rotation</label>
            <div class="slider-row">
                <span style="font-size:0.75rem; width:15px;">Y:</span>
                <input type="range" id="rot-y-slider" min="0" max="360" value="0">
            </div>
            <div class="slider-row">
                <span style="font-size:0.75rem; width:15px;">X:</span>
                <input type="range" id="rot-x-slider" min="0" max="360" value="0">
                <button id="reset-rot-btn">Reset</button>
            </div>
        </div>

        <div class="control-group">
            <label>Style Mode</label>
            <div class="btn-group" id="view-mode-btns">
                <button data-mode="structural" class="active">Ball & Stick</button>
                <button data-mode="condensed">Condensed</button>
                <button data-mode="skeletal">Skeletal</button>
            </div>
        </div>

        <div class="control-group" style="grid-column: 1 / -1;">
            <label>Bonds & Cis/Trans Geometry</label>
            <div class="bond-selectors" id="bond-selectors-container"></div>
        </div>

        <div class="control-group" style="grid-column: 1 / -1;">
            <label>Substituents & Functional Groups (Alkyls, Acids, Ethers, Esters, Halogens)</label>
            <div class="substituent-selectors" id="sub-selectors-container"></div>
        </div>
    </div>

    <div class="legend">
        <div class="legend-item"><div class="dot dot-c"></div> Carbon (C)</div>
        <div class="legend-item"><div class="dot dot-h"></div> Hydrogen (H)</div>
        <div class="legend-item"><div class="dot dot-o"></div> Oxygen (O)</div>
        <div class="legend-item"><div class="dot dot-alkyl"></div> Alkyl Chains</div>
        <div class="legend-item"><div class="dot dot-halo"></div> Halogens</div>
        <div class="legend-item"><div class="dot dot-n"></div> Nitrogen (N)</div>
    </div>
</div>

<script>
const canvas = document.getElementById('moleculeCanvas');
const ctx = canvas.getContext('2d');
const wrapper = document.getElementById('canvas-wrapper');

const GROUPS = {
    'NONE':   { name: 'None', label: '', color: '#000000', valence: 0, priority: 0 },
    'CH3':    { name: 'Methyl (-CH₃)', label: '-CH₃', color: '#f43f5e', valence: 1, priority: 1, type: 'prefix', prefixName: 'methyl' },
    'C2H5':   { name: 'Ethyl (-C₂H₅)', label: '-C₂H₅', color: '#fb7185', valence: 1, priority: 1, type: 'prefix', prefixName: 'ethyl' },
    'C3H7':   { name: 'Propyl (-C₃H₇)', label: '-C₃H₇', color: '#f472b6', valence: 1, priority: 1, type: 'prefix', prefixName: 'propyl' },
    'C4H9':   { name: 'Butyl (-C₄H₉)', label: '-C₄H₉', color: '#fda4af', valence: 1, priority: 1, type: 'prefix', prefixName: 'butyl' },
    'C5H11':  { name: 'Pentyl (-C₅H₁₁)', label: '-C₅H₁₁', color: '#fecdd3', valence: 1, priority: 1, type: 'prefix', prefixName: 'pentyl' },
    'COOH':   { name: 'Carboxylic Acid (-COOH)', label: 'COOH', color: '#e11d48', valence: 1, priority: 10, type: 'suffix', suffixName: 'oic acid', prefixName: 'carboxy' },
    'OCH3':   { name: 'Methoxy (-OCH₃)', label: '-OCH₃', color: '#d97706', valence: 1, priority: 2, type: 'prefix', prefixName: 'methoxy' },
    'OC2H5':  { name: 'Ethoxy (-OC₂H₅)', label: '-OC₂H₅', color: '#f59e0b', valence: 1, priority: 2, type: 'prefix', prefixName: 'ethoxy' },
    'OPh':    { name: 'Phenoxy (-OC₆H₅)', label: '-OPh', color: '#b45309', valence: 1, priority: 2, type: 'prefix', prefixName: 'phenoxy' },
    'COOCH3':  { name: 'Carbomethoxy (-COOCH₃)', label: 'COOCH₃', color: '#10b981', valence: 1, priority: 9, type: 'prefix', prefixName: 'methoxycarbonyl' },
    'COOC2H5': { name: 'Carboethoxy (-COOC₂H₅)', label: 'COOC₂H₅', color: '#059669', valence: 1, priority: 9, type: 'prefix', prefixName: 'ethoxycarbonyl' },
    'F':      { name: 'Fluoro (-F)', label: 'F', color: '#06b6d4', valence: 1, priority: 1, type: 'prefix', prefixName: 'fluoro' },
    'CL':     { name: 'Chloro (-Cl)', label: 'Cl', color: '#22c55e', valence: 1, priority: 1, type: 'prefix', prefixName: 'chloro' },
    'BR':     { name: 'Bromo (-Br)', label: 'Br', color: '#b45309', valence: 1, priority: 1, type: 'prefix', prefixName: 'bromo' },
    'I':      { name: 'Iodo (-I)', label: 'I', color: '#a855f7', valence: 1, priority: 1, type: 'prefix', prefixName: 'iodo' },
    'OH':     { name: 'Hydroxyl (-OH)', label: 'OH', color: '#ef4444', valence: 1, priority: 5, type: 'suffix', suffixName: 'ol', prefixName: 'hydroxy' },
    'NH2':    { name: 'Amino (-NH₂)', label: 'NH₂', color: '#3b82f6', valence: 1, priority: 4, type: 'suffix', suffixName: 'amine', prefixName: 'amino' },
    'OXO':    { name: 'Carbonyl (=O)', label: '=O', color: '#f43f5e', valence: 2, priority: 6, type: 'suffix', suffixName: 'one', prefixName: 'oxo' }
};

const ROOTS = ["", "meth", "eth", "prop", "but", "pent", "hex", "hept", "oct", "non", "dec"];
const MULTIPLIERS = ["", "", "di", "tri", "tetra", "penta", "hexa", "hepta", "octa"];

let chainLength = 4;
let bondStates = Array.from({ length: 9 }, function() { return { order: 1, geom: 'trans' }; });
let substituents = Array.from({ length: 10 }, function() { return { g1: 'NONE', g2: 'NONE' }; });
let viewMode = 'structural'; 

let angleX = 0.2;
let angleY = 0.3;
let isDragging = false;
let prevMouse = { x: 0, y: 0 };

function resizeCanvas() {
    canvas.width = wrapper.clientWidth;
    canvas.height = wrapper.clientHeight;
    draw();
}
window.addEventListener('resize', resizeCanvas);

wrapper.addEventListener('mousedown', function(e) {
    isDragging = true;
    prevMouse = { x: e.clientX, y: e.clientY };
});

window.addEventListener('mousemove', function(e) {
    if (!isDragging) return;
    angleY += (e.clientX - prevMouse.x) * 0.008;
    angleX += (e.clientY - prevMouse.y) * 0.008;
    syncRotationSliders();
    prevMouse = { x: e.clientX, y: e.clientY };
    draw();
});

window.addEventListener('mouseup', function() { isDragging = false; });

document.getElementById('rot-y-slider').addEventListener('input', function(e) {
    angleY = (parseInt(e.target.value) * Math.PI) / 180;
    draw();
});

document.getElementById('rot-x-slider').addEventListener('input', function(e) {
    angleX = (parseInt(e.target.value) * Math.PI) / 180;
    draw();
});

document.getElementById('reset-rot-btn').addEventListener('click', function() {
    angleX = 0.2; angleY = 0.3;
    syncRotationSliders();
    draw();
});

function syncRotationSliders() {
    let degY = Math.round(((angleY % (Math.PI * 2)) * 180) / Math.PI);
    let degX = Math.round(((angleX % (Math.PI * 2)) * 180) / Math.PI);
    if (degY < 0) degY += 360;
    if (degX < 0) degX += 360;
    document.getElementById('rot-y-slider').value = degY;
    document.getElementById('rot-x-slider').value = degX;
}

document.getElementById('chain-length').addEventListener('input', function(e) {
    chainLength = parseInt(e.target.value);
    document.getElementById('chain-len-val').innerText = chainLength;
    updateControlUI();
    draw();
});

document.querySelectorAll('#view-mode-btns button').forEach(function(btn) {
    btn.addEventListener('click', function() {
        document.querySelectorAll('#view-mode-btns button').forEach(function(b) { b.classList.remove('active'); });
        btn.classList.add('active');
        viewMode = btn.dataset.mode;
        draw();
    });
});

function updateControlUI() {
    const bContainer = document.getElementById('bond-selectors-container');
    bContainer.innerHTML = '';
    for (let i = 0; i < chainLength - 1; i++) {
        const div = document.createElement('div');
        div.className = 'bond-card';
        div.innerHTML = '<div>C' + (i+1) + ' - C' + (i+2) + '</div>' +
            '<select data-bond-idx="' + i + '" class="bond-order">' +
                '<option value="1" ' + (bondStates[i].order === 1 ? 'selected' : '') + '>Single (-)</option>' +
                '<option value="2" ' + (bondStates[i].order === 2 ? 'selected' : '') + '>Double (=)</option>' +
                '<option value="3" ' + (bondStates[i].order === 3 ? 'selected' : '') + '>Triple (≡)</option>' +
            '</select>' +
            (bondStates[i].order === 2 ? (
            '<select data-bond-idx="' + i + '" class="bond-geom">' +
                '<option value="trans" ' + (bondStates[i].geom === 'trans' ? 'selected' : '') + '>Trans (E)</option>' +
                '<option value="cis" ' + (bondStates[i].geom === 'cis' ? 'selected' : '') + '>Cis (Z)</option>' +
            '</select>') : '');
        bContainer.appendChild(div);
    }

    const sContainer = document.getElementById('sub-selectors-container');
    sContainer.innerHTML = '';
    for (let i = 0; i < chainLength; i++) {
        const div = document.createElement('div');
        div.className = 'sub-card';
        let opts = Object.keys(GROUPS).map(function(k) { return '<option value="' + k + '">' + GROUPS[k].name + '</option>'; }).join('');

        div.innerHTML = '<div>C' + (i+1) + ' Group A</div>' +
            '<select data-sub-idx="' + i + '" data-sub-pos="g1">' + opts + '</select>' +
            '<div style="margin-top:4px;">C' + (i+1) + ' Group B</div>' +
            '<select data-sub-idx="' + i + '" data-sub-pos="g2">' + opts + '</select>';
        
        div.querySelectorAll('select')[0].value = substituents[i].g1;
        div.querySelectorAll('select')[1].value = substituents[i].g2;
        sContainer.appendChild(div);
    }

    bContainer.querySelectorAll('.bond-order').forEach(function(sel) {
        sel.addEventListener('change', function(e) {
            bondStates[parseInt(e.target.dataset.bondIdx)].order = parseInt(e.target.value);
            updateControlUI();
            draw();
        });
    });

    bContainer.querySelectorAll('.bond-geom').forEach(function(sel) {
        sel.addEventListener('change', function(e) {
            bondStates[parseInt(e.target.dataset.bondIdx)].geom = e.target.value;
            draw();
        });
    });

    sContainer.querySelectorAll('select').forEach(function(sel) {
        sel.addEventListener('change', function(e) {
            let idx = parseInt(e.target.dataset.subIdx);
            let pos = e.target.dataset.subPos;
            substituents[idx][pos] = e.target.value;
            draw();
        });
    });
}

function validateValence() {
    let carbonBonds = new Array(chainLength).fill(0);

    for (let i = 0; i < chainLength; i++) {
        if (i > 0) carbonBonds[i] += bondStates[i - 1].order;
        if (i < chainLength - 1) carbonBonds[i] += bondStates[i].order;
        
        carbonBonds[i] += GROUPS[substituents[i].g1].valence;
        carbonBonds[i] += GROUPS[substituents[i].g2].valence;
    }

    for (let i = 0; i < chainLength; i++) {
        if (carbonBonds[i] > 4) {
            return { valid: false, errorCarbon: i + 1, count: carbonBonds[i] };
        }
    }
    return { valid: true, carbonBonds: carbonBonds };
}

function evaluateIUPAC() {
    const valenceCheck = validateValence();
    if (!valenceCheck.valid) {
        return { 
            valid: false, 
            errorMessage: '⚠️ Invalid Structure: C' + valenceCheck.errorCarbon + ' has ' + valenceCheck.count + ' bonds (Max: 4)' 
        };
    }

    let sumForward = 0;
    let sumReverse = 0;

    for (let i = 0; i < chainLength; i++) {
        let fLoc = i + 1;
        let rLoc = chainLength - i;

        let gKeys = [substituents[i].g1, substituents[i].g2];
        gKeys.forEach(function(k) {
            if (k !== 'NONE') {
                let weight = GROUPS[k].priority * 10;
                sumForward += fLoc * weight;
                sumReverse += rLoc * weight;
            }
        });
    }

    let useReversed = sumReverse < sumForward;

    let effBonds = useReversed ? bondStates.slice(0, chainLength - 1).reverse() : bondStates.slice(0, chainLength - 1);
    let effSubs = useReversed ? substituents.slice(0, chainLength).reverse() : substituents.slice(0, chainLength);

    let stereoPrefixes = [];
    for (let i = 0; i < effBonds.length; i++) {
        if (effBonds[i].order === 2 && chainLength > 3) {
            stereoPrefixes.push(effBonds[i].geom);
        }
    }

    let maxPriority = 0;
    let principalGroupKey = null;

    for (let i = 0; i < chainLength; i++) {
        [effSubs[i].g1, effSubs[i].g2].forEach(function(k) {
            if (k !== 'NONE' && GROUPS[k].type === 'suffix') {
                if (GROUPS[k].priority > maxPriority) {
                    maxPriority = GROUPS[k].priority;
                    principalGroupKey = k;
                }
            }
        });
    }

    let prefixMap = {};
    let suffixLocants = [];

    for (let i = 0; i < chainLength; i++) {
        let loc = i + 1;
        let keys = [effSubs[i].g1, effSubs[i].g2];

        keys.forEach(function(k) {
            if (k === 'NONE') return;

            if (principalGroupKey && k === principalGroupKey) {
                suffixLocants.push(loc);
            } else {
                let pName = GROUPS[k].prefixName || GROUPS[k].name;
                if (!prefixMap[pName]) prefixMap[pName] = [];
                prefixMap[pName].push(loc);
            }
        });
    }

    let sortedPrefixNames = Object.keys(prefixMap).sort();
    let prefixParts = [];

    sortedPrefixNames.forEach(function(pName) {
        let locs = prefixMap[pName].sort(function(a, b) { return a - b; });
        let mult = MULTIPLIERS[locs.length] || "";
        prefixParts.push(locs.join(",") + "-" + mult + pName);
    });

    let prefixStr = prefixParts.length > 0 ? prefixParts.join("-") + "-" : "";

    let root = ROOTS[chainLength];
    let enes = [], ynes = [];
    for (let i = 0; i < effBonds.length; i++) {
        if (effBonds[i].order === 2) enes.push(i + 1);
        if (effBonds[i].order === 3) ynes.push(i + 1);
    }

    let saturationStr = "ane";
    if (enes.length > 0 || ynes.length > 0) {
        if (enes.length > 0 && ynes.length === 0) {
            let mult = MULTIPLIERS[enes.length] || "";
            saturationStr = "-" + enes.join(",") + "-" + mult + "ene";
            if (enes.length > 1) root += "a";
        } else if (ynes.length > 0 && enes.length === 0) {
            let mult = MULTIPLIERS[ynes.length] || "";
            saturationStr = "-" + ynes.join(",") + "-" + mult + "yne";
            if (ynes.length > 1) root += "a";
        }
    }

    let suffixStr = "";
    if (principalGroupKey) {
        let pGroup = GROUPS[principalGroupKey];
        let sLocs = suffixLocants.sort(function(a, b) { return a - b; });
        let mult = MULTIPLIERS[sLocs.length] || "";

        if (principalGroupKey === 'COOH') {
            if (saturationStr.endsWith("e")) saturationStr = saturationStr.slice(0, -1);
            suffixStr = (sLocs.length > 1 ? '-' + sLocs.join(",") + '-' + mult : '') + 'oic acid';
        } else {
            let firstChar = pGroup.suffixName.charAt(0);
            let isVowel = ['a', 'e', 'i', 'o', 'u'].includes(firstChar);

            if (isVowel && mult === "" && saturationStr.endsWith("e")) {
                saturationStr = saturationStr.slice(0, -1);
            }

            if (sLocs.length === 1 && chainLength <= 2 && principalGroupKey === 'OH') {
                suffixStr = pGroup.suffixName;
            } else {
                suffixStr = '-' + sLocs.join(",") + '-' + mult + pGroup.suffixName;
            }
        }
    }

    let fullSuffix = saturationStr + suffixStr;
    let stereoTag = stereoPrefixes.length > 0 ? '(' + stereoPrefixes.join(",") + ') - ' : "";
    let fullName = stereoTag + prefixStr + root + fullSuffix;
    fullName = fullName.charAt(0).toUpperCase() + fullName.slice(1);

    return { 
        valid: true, 
        fullName: fullName, 
        prefix: prefixStr, 
        root: root, 
        suffix: fullSuffix, 
        stereoTag: stereoTag,
        useReversed: useReversed, 
        carbonBonds: valenceCheck.carbonBonds 
    };
}

function updateIUPACDisplay(info) {
    const nameEl = document.getElementById('iupac-name');
    const breakdownEl = document.getElementById('iupac-breakdown');

    if (!info.valid) {
        nameEl.className = "iupac-display error";
        nameEl.innerHTML = info.errorMessage;
        breakdownEl.innerHTML = '<span style="color:#f87171; font-weight:bold;">Geometry / Valence collision detected.</span>';
    } else {
        nameEl.className = "iupac-display";
        nameEl.innerHTML = info.fullName;
        
        let breakdownHTML = [];
        if (info.stereoTag) breakdownHTML.push('<span class="breakdown-tag tag-stereo">Stereo: ' + info.stereoTag + '</span>');
        if (info.prefix) breakdownHTML.push('<span class="breakdown-tag tag-prefix">Prefix: ' + info.prefix + '</span>');
        breakdownHTML.push('<span class="breakdown-tag tag-root">Root: ' + info.root + '</span>');
        breakdownHTML.push('<span class="breakdown-tag tag-suffix">Suffix: ' + info.suffix + '</span>');
        breakdownEl.innerHTML = breakdownHTML.join(' + ');
    }
}

function project3D(x, y, z, cx, cy, dynamicScaleFactor) {
    let cosY = Math.cos(angleY), sinY = Math.sin(angleY);
    let x1 = x * cosY + z * sinY;
    let z1 = -x * sinY + z * cosY;

    let cosX = Math.cos(angleX), sinX = Math.sin(angleX);
    let y2 = y * cosX - z1 * sinX;
    let z2 = y * sinX + z1 * cosX;

    const fov = 600;
    const scale = (fov / (fov + z2 + 200)) * dynamicScaleFactor;

    return { px: cx + x1 * scale, py: cy + y2 * scale, scale: scale, z: z2 };
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    const info = evaluateIUPAC();
    updateIUPACDisplay(info);

    const cx = canvas.width / 2;
    const cy = canvas.height / 2;
    
    const dynamicScaleFactor = Math.max(0.5, 1 - (chainLength - 4) * 0.07);
    const bondLen = 95; 

    let drawList = [];
    let backbone3D = [];
    const startX = -((chainLength - 1) * bondLen) / 2;

    let currentY = 0;
    for (let i = 0; i < chainLength; i++) {
        let x = startX + i * bondLen;
        
        if (i > 0 && bondStates[i - 1].order === 2 && bondStates[i - 1].geom === 'cis') {
            currentY = currentY; 
        } else {
            currentY = (i % 2 === 0 ? -35 : 35);
        }

        let z = (i % 2 === 0 ? 25 : -25);
        if (viewMode === 'condensed') { currentY = 0; z = 0; }
        backbone3D.push({ x: x, y: currentY, z: z, index: i });
    }

    for (let i = 0; i < chainLength; i++) {
        let node = backbone3D[i];
        let proj = project3D(node.x, node.y, node.z, cx, cy, dynamicScaleFactor);

        drawList.push({ type: 'carbon', z: proj.z, proj: proj, index: i });

        if (i < chainLength - 1) {
            let nextNode = backbone3D[i + 1];
            let nextProj = project3D(nextNode.x, nextNode.y, nextNode.z, cx, cy, dynamicScaleFactor);
            drawList.push({
                type: 'bond', z: (proj.z + nextProj.z) / 2, p1: proj, p2: nextProj, order: bondStates[i].order
            });
        }

        let subKeys = [substituents[i].g1, substituents[i].g2];
        let directions = [
            { dy: (i % 2 === 0 ? -85 : 85), dz: (i % 2 === 0 ? -70 : 70) },
            { dy: (i % 2 === 0 ? 85 : -85), dz: (i % 2 === 0 ? 70 : -70) }
        ];

        subKeys.forEach(function(gKey, k) {
            if (gKey !== 'NONE') {
                let group = GROUPS[gKey];
                let subProj = project3D(node.x, node.y + directions[k].dy, node.z + directions[k].dz, cx, cy, dynamicScaleFactor);

                drawList.push({
                    type: 'sub_bond', z: (proj.z + subProj.z) / 2, p1: proj, p2: subProj, color: group.color, isDouble: group.valence === 2
                });

                drawList.push({
                    type: 'group_atom', z: subProj.z, proj: subProj, group: group
                });
            }
        });

        if (viewMode === 'structural' && info.valid) {
            let hCount = Math.max(0, 4 - info.carbonBonds[i]);
            let hAngles = [{ dy: 0, dz: 75 }, { dy: 0, dz: -75 }, { dy: 75, dz: 0 }, { dy: -75, dz: 0 }];

            let drawnH = 0;
            for (let angle of hAngles) {
                if (drawnH >= hCount) break;

                let hProj = project3D(node.x, node.y + angle.dy, node.z + angle.dz, cx, cy, dynamicScaleFactor);
                drawList.push({ type: 'h_bond', z: (proj.z + hProj.z) / 2, p1: proj, p2: hProj });
                drawList.push({ type: 'hydrogen', z: hProj.z, proj: hProj });
                drawnH++;
            }
        }
    }

    drawList.sort(function(a, b) { return b.z - a.z; });

    for (let item of drawList) {
        if (item.type === 'bond') {
            draw3DBond(item.p1, item.p2, item.order);
        } else if (item.type === 'sub_bond' || item.type === 'h_bond') {
            ctx.strokeStyle = item.type === 'sub_bond' ? item.color : '#64748b';
            ctx.lineWidth = 4.5 * ((item.p1.scale + item.p2.scale) / 2);
            ctx.beginPath();
            if (item.isDouble) {
                ctx.moveTo(item.p1.px - 3, item.p1.py - 3);
                ctx.lineTo(item.p2.px - 3, item.p2.py - 3);
                ctx.moveTo(item.p1.px + 3, item.p1.py + 3);
                ctx.lineTo(item.p2.px + 3, item.p2.py + 3);
            } else {
                ctx.moveTo(item.p1.px, item.p1.py);
                ctx.lineTo(item.p2.px, item.p2.py);
            }
            ctx.stroke();
        } else if (item.type === 'carbon') {
            if (viewMode === 'structural') {
                let color = (!info.valid && info.carbonBonds && info.carbonBonds[item.index] > 4) ? '#ef4444' : '#10b981';
                drawSphere(item.proj.px, item.proj.py, 45 * item.proj.scale, color, 'C');
            } else if (viewMode === 'condensed') {
                let hCount = info.valid ? Math.max(0, 4 - info.carbonBonds[item.index]) : 0;
                let label = 'C' + (hCount > 0 ? ('H' + (hCount > 1 ? hCount : '')) : '');
                ctx.fillStyle = '#020617';
                ctx.fillRect(item.proj.px - 45 * item.proj.scale, item.proj.py - 25 * item.proj.scale, 90 * item.proj.scale, 50 * item.proj.scale);
                ctx.fillStyle = '#38bdf8';
                ctx.font = 'bold ' + Math.round(28 * item.proj.scale) + 'px sans-serif';
                ctx.textAlign = 'center';
                ctx.textBaseline = 'middle';
                ctx.fillText(label, item.proj.px, item.proj.py);
            } else if (viewMode === 'skeletal') {
                ctx.fillStyle = '#38bdf8';
                ctx.beginPath();
                ctx.arc(item.proj.px, item.proj.py, 14 * item.proj.scale, 0, Math.PI * 2);
                ctx.fill();
            }

            let numLoc = info.useReversed ? chainLength - item.index : item.index + 1;
            ctx.fillStyle = '#f59e0b';
            ctx.font = 'bold ' + Math.round(20 * item.proj.scale) + 'px sans-serif';
            ctx.textAlign = 'center';
            ctx.fillText(numLoc, item.proj.px, item.proj.py - 55 * item.proj.scale);

        } else if (item.type === 'group_atom') {
            drawSphere(item.proj.px, item.proj.py, 40 * item.proj.scale, item.group.color, item.group.label);
        } else if (item.type === 'hydrogen') {
            drawSphere(item.proj.px, item.proj.py, 26 * item.proj.scale, '#ffffff', 'H', '#000000');
        }
    }
}

function drawSphere(x, y, radius, color, text, textColor) {
    if (!textColor) textColor = '#ffffff';
    if (radius <= 0) return;
    const grad = ctx.createRadialGradient(x - radius/3, y - radius/3, radius/5, x, y, radius);
    grad.addColorStop(0, color);
    grad.addColorStop(1, '#000000');

    ctx.fillStyle = grad;
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = textColor;
    ctx.font = 'bold ' + Math.max(10, Math.round(radius * 0.45)) + 'px sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(text, x, y);
}

function draw3DBond(p1, p2, order) {
    const dx = p2.px - p1.px;
    const dy = p2.py - p1.py;
    const len = Math.hypot(dx, dy);
    if (len === 0) return;

    const nx = -dy / len;
    const ny = dx / len;
    const avgScale = (p1.scale + p2.scale) / 2;
    const offset = 8 * avgScale;

    ctx.strokeStyle = '#ffffff';
    ctx.lineWidth = 5.5 * avgScale;

    if (order === 1) {
        ctx.beginPath();
        ctx.moveTo(p1.px, p1.py);
        ctx.lineTo(p2.px, p2.py);
        ctx.stroke();
    } else if (order === 2) {
        ctx.beginPath();
        ctx.moveTo(p1.px + nx * offset, p1.py + ny * offset);
        ctx.lineTo(p2.px + nx * offset, p2.py + ny * offset);
        ctx.moveTo(p1.px - nx * offset, p1.py - ny * offset);
        ctx.lineTo(p2.px - nx * offset, p2.py - ny * offset);
        ctx.stroke();
    } else if (order === 3) {
        ctx.beginPath();
        ctx.moveTo(p1.px, p1.py);
        ctx.lineTo(p2.px, p2.py);
        ctx.moveTo(p1.px + nx * (offset * 1.3), p1.py + ny * (offset * 1.3));
        ctx.lineTo(p2.px + nx * (offset * 1.3), p2.py + ny * (offset * 1.3));
        ctx.moveTo(p1.px - nx * (offset * 1.3), p1.py - ny * (offset * 1.3));
        ctx.lineTo(p2.px - nx * (offset * 1.3), p2.py - ny * (offset * 1.3));
        ctx.stroke();
    }
}

updateControlUI();
syncRotationSliders();
resizeCanvas();
</script>
</body>
</html>`,
    isCustomImport: true,
    authorEmail: "ndunj123@gmail.com",
    authorName: "Axiom Creator",
    createdAt: "2026-08-16"
  },
  {
    id: "sim-3d-conic-integral-calculus",
    title: "Dynamic Integral Calculus on 3D Conic Sections",
    tagline: "3D Solid of Revolution Riemann Sums, Definite Integrals & Conic Volume Solver",
    discipline: "mathematics",
    gradeLevel: ["High School (9-12)", "AP / IB STEM", "Undergraduate"],
    standards: ["AP Calculus (Unit 8)", "CCSS.MATH.HSG.GMD.A.1", "IB Math Analysis & Approaches HL"],
    description: "Investigate volumes of solids of revolution using disk integration (Riemann sums) across 3D conic geometries including paraboloids, ellipsoids, hyperboloids, and circular cones. Compare numerical discrete disk slicing (N Riemann disks) against exact analytical definite integrals with interactive bound limits, cross-sectional area profile charting, and live LaTeX formula derivation.",
    learningObjectives: [
      "Model 3D solids of revolution generated by revolving conic curves around the X or Z axes",
      "Calculate exact volumes of paraboloids, ellipsoids, hyperboloids, and cones using definite disk integrals V = ∫ π[r(t)]² dt",
      "Analyze convergence of discrete cylindrical Riemann sum approximations as disk count N increases",
      "Interpret 2D cross-sectional function profiles r(t) and their geometric relation to 3D surface volumes"
    ],
    thumbnailGradient: "from-indigo-600 via-purple-700 to-sky-900",
    badgeColor: "bg-purple-500/10 text-purple-400 border-purple-500/20",
    iconName: "Shapes",
    rating: 5.0,
    reviewCount: 38,
    teacherCount: 194,
    licenseType: "Academic STEM Classroom & Institutional License",
    pricing: {
      singleTeacher: 19,
      schoolDepartment: 200,
      districtUnlimited: 400
    },
    features: [
      "Interactive 3D Three.js rendering with orbital camera controls and live axis labeling",
      "Definite integral computation with step-by-step LaTeX formula derivation and discretization error readouts",
      "Dynamic bounds controls [t1, t2] with collision validation and automatic variable adjustment",
      "Interactive 2D cross-sectional profile chart with shaded integral area and limit markers"
    ],
    parameterDefaults: {
      conicType: "paraboloid",
      slices: 15,
      t1: 0.0,
      t2: 4.0,
      a: 2.0,
      b: 2.0
    },
    parameterControls: [
      {
        key: "slices",
        label: "Riemann Disks (N)",
        min: 4,
        max: 50,
        step: 1,
        unit: "disks",
        description: "Number of discrete cylindrical slices used in numerical approximation"
      },
      {
        key: "t1",
        label: "Lower Bound (t1)",
        min: -5,
        max: 5,
        step: 0.2,
        unit: "units",
        description: "Starting coordinate along the revolution axis"
      },
      {
        key: "t2",
        label: "Upper Bound (t2)",
        min: -5,
        max: 5,
        step: 0.2,
        unit: "units",
        description: "Ending coordinate along the revolution axis"
      }
    ],
    sampleChallenges: [
      {
        id: "ch-conic-1",
        title: "Minimize Riemann Discretization Error",
        instruction: "Set up a Paraboloid from t1=0.0 to t2=4.0 with semi-axis A=2.0 and increase Riemann slices until error is below 2%.",
        targetMetric: "Discretization Error",
        targetValue: 2.0,
        tolerance: 0.5,
        currentValueKey: "error",
        rewardBadge: "Calculus Master"
      }
    ],
    previewFacts: [
      "The disk method is a specific case of Cavalieri's principle applied to circular cross-sections perpendicular to an axis of revolution.",
      "As the number of Riemann slices N approaches infinity (and slice thickness dt approaches 0), the Riemann sum converges exactly to the Riemann integral."
    ],
    isHtmlApp: true,
    htmlContent: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Dynamic Integral Calculus on 3D Conic Sections</title>
  <!-- KaTeX for math rendering -->
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.8/dist/katex.min.css">
  <script src="https://cdn.jsdelivr.net/npm/katex@0.16.8/dist/katex.min.js"></script>
  <!-- Three.js and OrbitControls -->
  <script src="https://cdn.jsdelivr.net/npm/three@0.128.0/build/three.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/three@0.128.0/examples/js/controls/OrbitControls.js"></script>

  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
      background: #090d16;
      color: #f8fafc;
      display: flex;
      height: 100vh;
      overflow: hidden;
    }
    #main-container {
      flex: 1;
      display: flex;
      flex-direction: column;
      height: 100%;
      position: relative;
    }
    #viewport {
      flex: 1;
      position: relative;
      background: #090d16;
    }
    #chart-container {
      height: 200px;
      background: #0f172a;
      border-top: 2px solid #334155;
      padding: 10px 16px;
      display: flex;
      flex-direction: column;
      gap: 6px;
    }
    #chart-title {
      font-size: 0.85rem;
      font-weight: 600;
      color: #38bdf8;
      display: flex;
      justify-content: space-between;
    }
    #canvas-2d {
      width: 100%;
      height: 145px;
      background: #020617;
      border-radius: 6px;
      border: 1px solid #1e293b;
    }
    
    #sidebar {
      width: 540px;
      background: #1e293b;
      border-left: 1px solid #334155;
      padding: 20px;
      display: flex;
      flex-direction: column;
      gap: 14px;
      overflow-y: auto;
    }
    h2 { font-size: 1.1rem; color: #38bdf8; border-bottom: 1px solid #334155; padding-bottom: 6px; }
    .control-group {
      display: flex;
      flex-direction: column;
      gap: 4px;
    }
    label { font-size: 0.8rem; color: #94a3b8; display: flex; justify-content: space-between; }
    select, input[type="range"] {
      width: 100%;
      background: #0f172a;
      color: #fff;
      border: 1px solid #475569;
      padding: 6px 8px;
      border-radius: 6px;
    }
    input[type="range"] { padding: 0; cursor: pointer; }
    .toggle-group {
      display: flex;
      align-items: center;
      gap: 10px;
      font-size: 0.85rem;
    }
    .toggle-group input { width: auto; cursor: pointer; }
    button {
      background: #0284c7;
      color: white;
      border: none;
      padding: 10px;
      border-radius: 6px;
      font-weight: 600;
      cursor: pointer;
      transition: background 0.2s, transform 0.1s;
    }
    button:hover { background: #0369a1; }
    button:active { transform: scale(0.98); }

    .btn-explain {
      background: #8b5cf6;
    }
    .btn-explain:hover {
      background: #7c3aed;
    }

    /* High-Visibility Expanded Math Display Panel */
    .math-card {
      background: #020617;
      border: 2px solid #38bdf8;
      box-shadow: 0 0 15px rgba(56, 189, 248, 0.15);
      border-radius: 8px;
      padding: 14px;
      display: flex;
      flex-direction: column;
      gap: 10px;
    }
    .math-card-header {
      font-size: 0.85rem;
      font-weight: 700;
      color: #38bdf8;
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }
    #math-formula-box {
      background: #0f172a;
      border: 1px solid #334155;
      padding: 12px;
      border-radius: 6px;
      min-height: 60px;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      overflow-x: auto;
      width: 100%;
    }
    
    .katex-display {
      margin: 0 !important;
      padding: 4px 0;
      width: 100%;
    }

    .readout-box {
      background: rgba(2, 132, 199, 0.12);
      border-left: 4px solid #38bdf8;
      padding: 10px;
      border-radius: 4px;
      font-size: 0.85rem;
      line-height: 1.5;
    }

    /* Overlay Modal for Mathematical Explanation */
    .modal-backdrop {
      position: absolute;
      top: 0; left: 0; right: 0; bottom: 0;
      background: rgba(2, 6, 23, 0.85);
      backdrop-filter: blur(4px);
      z-index: 1000;
      display: none;
      align-items: center;
      justify-content: center;
      padding: 20px;
    }
    .modal-content {
      background: #0f172a;
      border: 2px solid #8b5cf6;
      box-shadow: 0 0 25px rgba(139, 92, 246, 0.3);
      border-radius: 12px;
      max-width: 800px;
      width: 100%;
      max-height: 85vh;
      display: flex;
      flex-direction: column;
      overflow: hidden;
    }
    .modal-header {
      background: #1e293b;
      padding: 14px 20px;
      border-bottom: 1px solid #334155;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .modal-header h3 {
      color: #a78bfa;
      font-size: 1.1rem;
    }
    .modal-close {
      background: transparent;
      border: none;
      color: #94a3b8;
      font-size: 1.5rem;
      cursor: pointer;
      padding: 0 6px;
    }
    .modal-close:hover { color: #fff; }
    .modal-body {
      padding: 20px;
      overflow-y: auto;
      font-size: 0.9rem;
      line-height: 1.6;
      color: #cbd5e1;
      display: flex;
      flex-direction: column;
      gap: 16px;
    }
    .modal-body h4 {
      color: #38bdf8;
      border-bottom: 1px solid #334155;
      padding-bottom: 4px;
      margin-top: 6px;
    }
    .var-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
      gap: 10px;
    }
    .var-card {
      background: #1e293b;
      border: 1px solid #334155;
      padding: 10px;
      border-radius: 6px;
    }
    .var-card strong {
      color: #f43f5e;
    }

    /* 3D Label Overlays */
    .overlay-label {
      position: absolute;
      color: #38bdf8;
      font-size: 11px;
      font-weight: bold;
      background: rgba(15, 23, 42, 0.9);
      padding: 3px 8px;
      border-radius: 4px;
      border: 1px solid #38bdf8;
      pointer-events: none;
      transform: translate(-50%, -100%);
      white-space: nowrap;
      box-shadow: 0 2px 6px rgba(0,0,0,0.5);
    }
  </style>
</head>
<body>

  <div id="main-container">
    <div id="viewport">
      <div id="label-h" class="overlay-label">Bounds Span</div>
      <div id="label-a" class="overlay-label">Semi-axis a</div>
    </div>
    
    <div id="chart-container">
      <div id="chart-title">
        <span>2D Cross-Section Function r(t) & Accumulated Definite Integral Area</span>
        <span id="chart-limits-text" style="color: #38bdf8;">Bounds: [0.0, 4.0]</span>
      </div>
      <canvas id="canvas-2d"></canvas>
    </div>

    <!-- Student Explanation Modal -->
    <div id="explanation-modal" class="modal-backdrop">
      <div class="modal-content">
        <div class="modal-header">
          <h3>📘 Student Integration Guide: Dynamic Variable Breakdown</h3>
          <button class="modal-close" id="btn-close-modal">&times;</button>
        </div>
        <div class="modal-body" id="modal-body-text">
          <!-- Dynamic Content Generated Here -->
        </div>
      </div>
    </div>
  </div>

  <div id="sidebar">
    <h2>Conic Integration Controls</h2>

    <div style="display: flex; gap: 8px;">
      <button id="btn-random" style="flex:1;">🎲 Random Conic</button>
      <button id="btn-explain" class="btn-explain" style="flex:1.2;">📘 Explain Integration</button>
    </div>

    <div class="control-group">
      <label for="conic-type">Conic Geometry</label>
      <select id="conic-type">
        <option value="paraboloid">Paraboloid of Revolution</option>
        <option value="ellipsoid">Ellipsoid</option>
        <option value="hyperboloid">Hyperboloid (One Sheet)</option>
        <option value="cone">Circular Cone</option>
      </select>
    </div>

    <div class="control-group">
      <label for="axis-rotation">Axis of Revolution</label>
      <select id="axis-rotation">
        <option value="x" selected>X-Axis (Horizontal)</option>
        <option value="z">Z-Axis (Vertical)</option>
      </select>
    </div>

    <div class="control-group">
      <label>Slices (N Riemann Disks): <span id="val-slices">15</span></label>
      <input type="range" id="param-slices" min="4" max="50" value="15">
    </div>

    <!-- Upper & Lower Integration Bounds Controls -->
    <div class="control-group">
      <label>Lower Bound (t₁): <span id="val-t1">0.0</span></label>
      <input type="range" id="param-t1" min="-5" max="5" step="0.2" value="0.0">
    </div>

    <div class="control-group">
      <label>Upper Bound (t₂): <span id="val-t2">4.0</span></label>
      <input type="range" id="param-t2" min="-5" max="5" step="0.2" value="4.0">
    </div>

    <div class="control-group">
      <label>Semi-axis A (Radius Scale): <span id="val-a">2.0</span></label>
      <input type="range" id="param-a" min="0.5" max="3" step="0.1" value="2.0">
    </div>

    <div class="control-group">
      <label>Semi-axis B: <span id="val-b">2.0</span></label>
      <input type="range" id="param-b" min="0.5" max="3" step="0.1" value="2.0">
    </div>

    <div class="toggle-group">
      <input type="checkbox" id="toggle-slices" checked>
      <label for="toggle-slices" style="color:white;">Show Integration Slices</label>
    </div>

    <div class="toggle-group">
      <input type="checkbox" id="toggle-wireframe" checked>
      <label for="toggle-wireframe" style="color:white;">Show Wireframe Mesh</label>
    </div>

    <div class="toggle-group">
      <input type="checkbox" id="toggle-rotate" checked>
      <label for="toggle-rotate" style="color:white;">Spin Object Around Center</label>
    </div>

    <!-- Clean KaTeX Mathematical Integration Panel -->
    <div class="math-card">
      <div class="math-card-header">📐 Definite Integration Formula</div>
      <div id="math-formula-box"></div>
      <div class="readout-box" id="readout-box"></div>
    </div>
  </div>

  <script>
    // --- State Variables ---
    let type = 'paraboloid';
    let rotAxis = 'x';
    let N = 15;
    let t1 = 0.0;
    let t2 = 4.0;
    let a = 2.0;
    let b = 2.0;
    let showSlices = true;
    let showWireframe = true;
    let autoRotate = true;

    // Conic Section Palette
    const conicColors = {
      paraboloid: 0x38bdf8,
      ellipsoid: 0x10b981,
      hyperboloid: 0xf59e0b,
      cone: 0xec4899
    };

    // --- Three.js Setup ---
    const viewport = document.getElementById('viewport');
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x090d16);

    const camera = new THREE.PerspectiveCamera(45, viewport.clientWidth / viewport.clientHeight, 0.1, 1000);
    camera.position.set(9, 7, 12);

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(viewport.clientWidth, viewport.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    viewport.appendChild(renderer.domElement);

    const controls = new THREE.OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;

    // Lighting
    scene.add(new THREE.AmbientLight(0xffffff, 0.6));
    const dirLight = new THREE.DirectionalLight(0xffffff, 0.9);
    dirLight.position.set(10, 20, 10);
    scene.add(dirLight);

    // Static Coordinate Axes
    scene.add(new THREE.AxesHelper(6));

    // Centered Geometry Group
    const conicMeshGroup = new THREE.Group();
    const surfaceGroup = new THREE.Group();
    const slicesGroup = new THREE.Group();
    conicMeshGroup.add(surfaceGroup);
    conicMeshGroup.add(slicesGroup);
    scene.add(conicMeshGroup);

    // --- Radius Function r(t) ---
    function getRadius(t, type, a, b) {
      switch (type) {
        case 'paraboloid':
          return t >= 0 ? a * Math.sqrt(t) : 0;
        case 'ellipsoid': {
          const c = 3.0;
          const radTerm = 1 - (t * t) / (c * c);
          return radTerm > 0 ? a * Math.sqrt(radTerm) : 0;
        }
        case 'hyperboloid': {
          const c = 2.0;
          return a * Math.sqrt(1 + (t * t) / (c * c));
        }
        case 'cone':
          return t >= 0 ? 0.6 * a * t : 0;
      }
    }

    function getExactVolume(type, a, b, lower, upper) {
      const pi = Math.PI;
      switch (type) {
        case 'paraboloid': {
          const l = Math.max(0, lower);
          const u = Math.max(0, upper);
          return 0.5 * pi * a * b * (u * u - l * l);
        }
        case 'ellipsoid': {
          const c = 3.0;
          const l = Math.max(-c, Math.min(c, lower));
          const u = Math.max(-c, Math.min(c, upper));
          const evalInt = (t) => t - (t * t * t) / (3 * c * c);
          return pi * a * b * (evalInt(u) - evalInt(l));
        }
        case 'hyperboloid': {
          const c = 2.0;
          const evalInt = (t) => t + (t * t * t) / (3 * c * c);
          return pi * a * b * (evalInt(upper) - evalInt(lower));
        }
        case 'cone': {
          const l = Math.max(0, lower);
          const u = Math.max(0, upper);
          const k = 0.6 * 0.6;
          return (1 / 3) * pi * a * b * k * (Math.pow(u, 3) - Math.pow(l, 3));
        }
      }
    }

    // --- Build 3D Conic Geometry ---
    function rebuildScene() {
      while (surfaceGroup.children.length) surfaceGroup.remove(surfaceGroup.children[0]);
      while (slicesGroup.children.length) slicesGroup.remove(slicesGroup.children[0]);

      conicMeshGroup.rotation.set(0, 0, 0);

      const tMin = t1;
      const tMax = t2;
      const tCenter = (tMin + tMax) / 2;
      const baseColor = conicColors[type] || 0x38bdf8;

      // Surface Wireframe Mesh
      if (showWireframe) {
        const segR = 32, segT = 32;
        const geom = new THREE.BufferGeometry();
        const positions = [];
        const indices = [];

        for (let i = 0; i <= segT; i++) {
          const t = tMin + (i / segT) * (tMax - tMin);
          const rX = getRadius(t, type, a, b);
          const rY = getRadius(t, type, b, a);

          for (let j = 0; j <= segR; j++) {
            const theta = (j / segR) * Math.PI * 2;
            const x = rX * Math.cos(theta);
            const y = rY * Math.sin(theta);
            const z = t - tCenter;

            if (rotAxis === 'x') {
              positions.push(z, x, y);
            } else {
              positions.push(x, z, y);
            }
          }
        }

        for (let i = 0; i < segT; i++) {
          for (let j = 0; j < segR; j++) {
            const first = i * (segR + 1) + j;
            const second = first + segR + 1;
            indices.push(first, second, first + 1);
            indices.push(second, second + 1, first + 1);
          }
        }

        geom.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
        geom.setIndex(indices);
        geom.computeVertexNormals();

        const mat = new THREE.MeshPhongMaterial({
          color: baseColor,
          wireframe: true,
          transparent: true,
          opacity: 0.55,
          side: THREE.DoubleSide
        });
        surfaceGroup.add(new THREE.Mesh(geom, mat));
      }

      // Integration Disks
      let riemannSum = 0;
      const dt = (tMax - tMin) / N;

      for (let i = 0; i < N; i++) {
        const tMid = tMin + (i + 0.5) * dt;
        const rX = getRadius(tMid, type, a, b);
        const rY = getRadius(tMid, type, b, a);

        if (rX <= 0 || rY <= 0) continue;

        const sliceArea = Math.PI * rX * rY;
        riemannSum += sliceArea * dt;

        if (showSlices) {
          const diskGeom = new THREE.CylinderGeometry(1, 1, dt, 24);
          diskGeom.scale(rX, 1, rY);

          if (rotAxis === 'x') {
            diskGeom.rotateZ(-Math.PI / 2);
          }

          const diskMat = new THREE.MeshPhongMaterial({
            color: baseColor,
            transparent: true,
            opacity: 0.65,
            shininess: 80,
            side: THREE.DoubleSide
          });

          const diskMesh = new THREE.Mesh(diskGeom, diskMat);
          const zLoc = tMid - tCenter;

          if (rotAxis === 'x') {
            diskMesh.position.set(zLoc, 0, 0);
          } else {
            diskMesh.position.set(0, zLoc, 0);
          }
          slicesGroup.add(diskMesh);
        }
      }

      updateMathUI(riemannSum, tMin, tMax);
      draw2DProfileChart(tMin, tMax, baseColor);
    }

    // --- Clean Math & Formula Display ---
    function updateMathUI(riemannSum, tMin, tMax) {
      const exactVol = getExactVolume(type, a, b, tMin, tMax);
      const v = rotAxis === 'x' ? 'x' : 'z';
      
      const b1 = tMin.toFixed(1);
      const b2 = tMax.toFixed(1);
      const aVal = a.toFixed(1);

      let formulaStr = "";

      switch (type) {
        case 'paraboloid': {
          const coeff = (Math.PI * a * a).toFixed(2);
          const coeffHalf = (0.5 * Math.PI * a * a).toFixed(2);
          formulaStr = "V = \\\\int_{" + b1 + "}^{" + b2 + "} \\\\pi \\\\left(" + aVal + "\\\\sqrt{" + v + "}\\\\right)^2 d" + v + " = " + coeff + " \\\\left[ \\\\frac{" + v + "^2}{2} \\\\right]_{" + b1 + "}^{" + b2 + "} = " + coeffHalf + " \\\\left( (" + b2 + ")^2 - (" + b1 + ")^2 \\\\right)";
          break;
        }
        case 'ellipsoid': {
          const coeff = (Math.PI * a * a).toFixed(2);
          formulaStr = "V = \\\\int_{" + b1 + "}^{" + b2 + "} \\\\pi \\\\cdot " + aVal + "^2 \\\\left(1 - \\\\frac{" + v + "^2}{9}\\\\right) d" + v + " = " + coeff + " \\\\left[ " + v + " - \\\\frac{" + v + "^3}{27} \\\\right]_{" + b1 + "}^{" + b2 + "}";
          break;
        }
        case 'hyperboloid': {
          const coeff = (Math.PI * a * a).toFixed(2);
          formulaStr = "V = \\\\int_{" + b1 + "}^{" + b2 + "} \\\\pi \\\\cdot " + aVal + "^2 \\\\left(1 + \\\\frac{" + v + "^2}{4}\\\\right) d" + v + " = " + coeff + " \\\\left[ " + v + " + \\\\frac{" + v + "^3}{12} \\\\right]_{" + b1 + "}^{" + b2 + "}";
          break;
        }
        case 'cone': {
          const slope = (0.6 * a).toFixed(2);
          const coeff = (Math.PI * slope * slope).toFixed(2);
          const coeffThird = (coeff / 3).toFixed(2);
          formulaStr = "V = \\\\int_{" + b1 + "}^{" + b2 + "} \\\\pi \\\\left(" + slope + v + "\\\\right)^2 d" + v + " = " + coeffThird + " \\\\left[ " + v + "^3 \\\\right]_{" + b1 + "}^{" + b2 + "} = " + coeffThird + " \\\\left( (" + b2 + ")^3 - (" + b1 + ")^3 \\\\right)";
          break;
        }
      }

      katex.render(formulaStr, document.getElementById('math-formula-box'), { 
        displayMode: true, 
        throwOnError: false 
      });

      const err = exactVol !== 0 ? Math.abs((riemannSum - exactVol) / exactVol) * 100 : 0;
      document.getElementById('readout-box').innerHTML = 
        '<strong>Integration Variable:</strong> d' + v + ' along ' + v.toUpperCase() + '-axis<br>' +
        '<strong>Analytical Exact Volume:</strong> <span style="color:#38bdf8; font-weight:bold;">' + exactVol.toFixed(4) + ' u³</span><br>' +
        '<strong>Riemann Numerical Sum (N=' + N + '):</strong> ' + riemannSum.toFixed(4) + ' u³<br>' +
        '<strong>Discretization Error:</strong> ' + err.toFixed(2) + '%';

      document.getElementById('chart-limits-text').innerText = 
        'Integral Bounds [' + v + '₁ = ' + b1 + ', ' + v + '₂ = ' + b2 + ']';
    }

    // --- Generate Explanation Content for Students ---
    function openExplanationModal() {
      const v = rotAxis === 'x' ? 'x' : 'z';
      const exactVol = getExactVolume(type, a, b, t1, t2);
      const dt = (t2 - t1) / N;

      let typeTitle = type.charAt(0).toUpperCase() + type.slice(1);
      
      let html = 
        '<p>This interactive simulation computes the 3D volume of a solid of revolution using <strong>Disk Integration (Riemann Sums)</strong>.</p>' +
        '<h4>1. Current Variable Values</h4>' +
        '<div class="var-grid">' +
          '<div class="var-card"><strong>Integration Axis (' + v + '):</strong> Rotated around ' + v.toUpperCase() + '-axis</div>' +
          '<div class="var-card"><strong>Lower Bound (' + v + '₁):</strong> ' + t1.toFixed(2) + '</div>' +
          '<div class="var-card"><strong>Upper Bound (' + v + '₂):</strong> ' + t2.toFixed(2) + '</div>' +
          '<div class="var-card"><strong>Integration Span (Δt):</strong> ' + (t2 - t1).toFixed(2) + ' units</div>' +
          '<div class="var-card"><strong>Semi-axis A (a):</strong> ' + a.toFixed(1) + ' units</div>' +
          '<div class="var-card"><strong>Semi-axis B (b):</strong> ' + b.toFixed(1) + ' units</div>' +
          '<div class="var-card"><strong>Riemann Disks (N):</strong> ' + N + ' slices</div>' +
          '<div class="var-card"><strong>Disk Thickness (d' + v + ' / Δ' + v + '):</strong> ' + dt.toFixed(3) + ' units</div>' +
        '</div>' +
        '<h4>2. How the Definite Integral is Formed</h4>' +
        '<p>When revolving a function <em>r(' + v + ')</em> around an axis, each thin slice forms a circular or elliptical disk of cross-sectional area <strong>A(' + v + ') = π · r(' + v + ')²</strong>. Summing an infinite number of these infinitely thin disks between ' + v + '₁ and ' + v + '₂ gives the total volume:</p>' +
        '<div style="background:#020617; padding:10px; border-radius:6px; border:1px solid #334155; text-align:center;">' +
          '<em>V = ∫<sub>' + v + '₁</sub><sup>' + v + '₂</sup> A(' + v + ') d' + v + ' = ∫<sub>' + t1.toFixed(1) + '</sub><sup>' + t2.toFixed(1) + '</sup> π [r(' + v + ')]^2 d' + v + '</em>' +
        '</div>' +
        '<h4>3. Detailed Step-by-Step Calculation for ' + typeTitle + '</h4>';

      switch(type) {
        case 'paraboloid':
          html += 
            '<p><strong>Radius Function:</strong> r(' + v + ') = ' + a.toFixed(1) + '√' + v + '</p>' +
            '<p><strong>Step 1 (Square Radius):</strong> [r(' + v + ')]² = ' + (a*a).toFixed(2) + v + '</p>' +
            '<p><strong>Step 2 (Set Up Integral):</strong> V = π ∫<sub>' + t1.toFixed(1) + '</sub><sup>' + t2.toFixed(1) + '</sup> ' + (a*a).toFixed(2) + v + ' d' + v + ' = ' + (Math.PI * a * a).toFixed(2) + ' [ ' + v + '²/2 ]<sub>' + t1.toFixed(1) + '</sub><sup>' + t2.toFixed(1) + '</sup></p>' +
            '<p><strong>Step 3 (Evaluate Limits):</strong> V = <strong>' + exactVol.toFixed(4) + ' u³</strong></p>';
          break;
        case 'ellipsoid':
          html += 
            '<p><strong>Radius Function:</strong> r(' + v + ') = ' + a.toFixed(1) + ' · √(1 - ' + v + '² / 9)</p>' +
            '<p><strong>Step 1 (Square Radius):</strong> [r(' + v + ')]² = ' + (a*a).toFixed(2) + ' · (1 - ' + v + '² / 9)</p>' +
            '<p><strong>Step 2 (Set Up Integral):</strong> V = ' + (Math.PI * a * a).toFixed(2) + ' ∫<sub>' + t1.toFixed(1) + '</sub><sup>' + t2.toFixed(1) + '</sup> (1 - ' + v + '² / 9) d' + v + '</p>' +
            '<p><strong>Step 3 (Evaluate Limits):</strong> Volume = <strong>' + exactVol.toFixed(4) + ' u³</strong></p>';
          break;
        case 'hyperboloid':
          html += 
            '<p><strong>Radius Function:</strong> r(' + v + ') = ' + a.toFixed(1) + ' · √(1 + ' + v + '² / 4)</p>' +
            '<p><strong>Step 1 (Square Radius):</strong> [r(' + v + ')]² = ' + (a*a).toFixed(2) + ' · (1 + ' + v + '² / 4)</p>' +
            '<p><strong>Step 2 (Set Up Integral):</strong> V = ' + (Math.PI * a * a).toFixed(2) + ' ∫<sub>' + t1.toFixed(1) + '</sub><sup>' + t2.toFixed(1) + '</sup> (1 + ' + v + '² / 4) d' + v + '</p>' +
            '<p><strong>Step 3 (Evaluate Limits):</strong> Volume = <strong>' + exactVol.toFixed(4) + ' u³</strong></p>';
          break;
        case 'cone':
          const slope = 0.6 * a;
          html += 
            '<p><strong>Radius Function:</strong> r(' + v + ') = ' + slope.toFixed(2) + v + '</p>' +
            '<p><strong>Step 1 (Square Radius):</strong> [r(' + v + ')]² = ' + (slope*slope).toFixed(4) + v + '²</p>' +
            '<p><strong>Step 2 (Set Up Integral):</strong> V = π ∫<sub>' + t1.toFixed(1) + '</sub><sup>' + t2.toFixed(1) + '</sup> ' + (slope*slope).toFixed(4) + v + '² d' + v + '</p>' +
            '<p><strong>Step 3 (Evaluate Limits):</strong> Volume = <strong>' + exactVol.toFixed(4) + ' u³</strong></p>';
          break;
      }

      html += 
        '<h4>4. Numerical Riemann Approximation</h4>' +
        '<p>Instead of continuous integration, the computer calculates <strong>N = ' + N + '</strong> discrete cylindrical disks of thickness <strong>Δ' + v + ' = ' + dt.toFixed(3) + '</strong>. As you increase N, the discrete sum converges toward the exact analytical volume.</p>';

      document.getElementById('modal-body-text').innerHTML = html;
      document.getElementById('explanation-modal').style.display = 'flex';
    }

    // --- Render 2D Cross Section Area Chart ---
    function draw2DProfileChart(tMin, tMax, colorHex) {
      const canvas = document.getElementById('canvas-2d');
      const ctx = canvas.getContext('2d');
      
      canvas.width = canvas.clientWidth;
      canvas.height = canvas.clientHeight;

      const w = canvas.width;
      const ch = canvas.height;
      ctx.clearRect(0, 0, w, ch);

      const padL = 45, padR = 25, padT = 15, padB = 25;
      const plotW = w - padL - padR;
      const plotH = ch - padT - padB;

      const axisMargin = 0.5;
      const xDomainMin = tMin - axisMargin;
      const xDomainMax = tMax + axisMargin;
      const rMax = Math.max(getRadius(tMax, type, a, b), getRadius(tMin, type, a, b), a) * 1.25 || 1;

      const mapX = (t) => padL + ((t - xDomainMin) / (xDomainMax - xDomainMin)) * plotW;
      const mapY = (r) => padT + plotH - (r / rMax) * plotH;

      const hexStr = '#' + colorHex.toString(16).padStart(6, '0');

      // Base Grid Lines
      ctx.strokeStyle = '#1e293b';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(padL, mapY(0));
      ctx.lineTo(w - padR, mapY(0));
      ctx.stroke();

      // Shaded Integration Area under r(t)
      ctx.fillStyle = hexStr + '55';
      ctx.beginPath();
      ctx.moveTo(mapX(tMin), mapY(0));

      const steps = 120;
      for (let i = 0; i <= steps; i++) {
        const t = tMin + (i / steps) * (tMax - tMin);
        const r = getRadius(t, type, a, b);
        ctx.lineTo(mapX(t), mapY(r));
      }

      ctx.lineTo(mapX(tMax), mapY(0));
      ctx.closePath();
      ctx.fill();

      // Function curve r(t)
      ctx.strokeStyle = hexStr;
      ctx.lineWidth = 2.5;
      ctx.beginPath();
      for (let i = 0; i <= steps; i++) {
        const t = xDomainMin + (i / steps) * (xDomainMax - xDomainMin);
        const r = getRadius(t, type, a, b);
        if (i === 0) ctx.moveTo(mapX(t), mapY(r));
        else ctx.lineTo(mapX(t), mapY(r));
      }
      ctx.stroke();

      // Lower/Upper Limits Lines
      ctx.setLineDash([4, 4]);
      ctx.strokeStyle = '#f43f5e';
      ctx.lineWidth = 2;

      ctx.beginPath();
      ctx.moveTo(mapX(tMin), mapY(0));
      ctx.lineTo(mapX(tMin), mapY(getRadius(tMin, type, a, b)));
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(mapX(tMax), mapY(0));
      ctx.lineTo(mapX(tMax), mapY(getRadius(tMax, type, a, b)));
      ctx.stroke();
      ctx.setLineDash([]);

      // Axis Labels
      ctx.fillStyle = '#f8fafc';
      ctx.font = '11px sans-serif';
      const varName = rotAxis === 'x' ? 'x' : 'z';
      ctx.fillText('t₁ = ' + tMin.toFixed(1), mapX(tMin) - 15, ch - 8);
      ctx.fillText('t₂ = ' + tMax.toFixed(1), mapX(tMax) - 15, ch - 8);
      ctx.fillText('r(' + varName + ')', 8, mapY(rMax * 0.85));
    }

    // --- On-Mesh HTML Overlay Labels ---
    function updateOverlayLabels() {
      const span = Math.abs(t2 - t1);
      const posH = rotAxis === 'x' ? new THREE.Vector3(span / 2, 0, 0) : new THREE.Vector3(0, span / 2, 0);
      const posA = rotAxis === 'x' ? new THREE.Vector3(0, a, 0) : new THREE.Vector3(a, 0, 0);

      posH.applyMatrix4(conicMeshGroup.matrixWorld);
      posA.applyMatrix4(conicMeshGroup.matrixWorld);

      posH.project(camera);
      posA.project(camera);

      const hw = viewport.clientWidth / 2;
      const hh = viewport.clientHeight / 2;

      const lblH = document.getElementById('label-h');
      const lblA = document.getElementById('label-a');

      lblH.style.left = (posH.x * hw + hw) + 'px';
      lblH.style.top = (-posH.y * hh + hh) + 'px';
      lblH.innerText = 'Bounds Span Δt = ' + span.toFixed(1);

      lblA.style.left = (posA.x * hw + hw) + 'px';
      lblA.style.top = (-posA.y * hh + hh) + 'px';
      lblA.innerText = 'Semi-axis a = ' + a.toFixed(1);
    }

    // --- Event Handlers & Bound Validation ---
    document.getElementById('conic-type').addEventListener('change', (e) => { type = e.target.value; rebuildScene(); });
    document.getElementById('axis-rotation').addEventListener('change', (e) => { rotAxis = e.target.value; rebuildScene(); });
    document.getElementById('param-slices').addEventListener('input', (e) => { 
      N = parseInt(e.target.value); 
      document.getElementById('val-slices').innerText = N;
      rebuildScene(); 
    });

    document.getElementById('param-t1').addEventListener('input', (e) => { 
      t1 = parseFloat(e.target.value);
      if (t1 >= t2) {
        t2 = parseFloat((t1 + 0.2).toFixed(1));
        document.getElementById('param-t2').value = t2;
        document.getElementById('val-t2').innerText = t2.toFixed(1);
      }
      document.getElementById('val-t1').innerText = t1.toFixed(1);
      rebuildScene(); 
    });

    document.getElementById('param-t2').addEventListener('input', (e) => { 
      t2 = parseFloat(e.target.value);
      if (t2 <= t1) {
        t1 = parseFloat((t2 - 0.2).toFixed(1));
        document.getElementById('param-t1').value = t1;
        document.getElementById('val-t1').innerText = t1.toFixed(1);
      }
      document.getElementById('val-t2').innerText = t2.toFixed(1);
      rebuildScene(); 
    });

    document.getElementById('param-a').addEventListener('input', (e) => { 
      a = parseFloat(e.target.value); 
      document.getElementById('val-a').innerText = a.toFixed(1);
      rebuildScene(); 
    });
    document.getElementById('param-b').addEventListener('input', (e) => { 
      b = parseFloat(e.target.value); 
      document.getElementById('val-b').innerText = b.toFixed(1);
      rebuildScene(); 
    });
    document.getElementById('toggle-slices').addEventListener('change', (e) => { showSlices = e.target.checked; rebuildScene(); });
    document.getElementById('toggle-wireframe').addEventListener('change', (e) => { showWireframe = e.target.checked; rebuildScene(); });
    document.getElementById('toggle-rotate').addEventListener('change', (e) => { autoRotate = e.target.checked; });

    document.getElementById('btn-explain').addEventListener('click', openExplanationModal);
    document.getElementById('btn-close-modal').addEventListener('click', () => {
      document.getElementById('explanation-modal').style.display = 'none';
    });

    document.getElementById('btn-random').addEventListener('click', () => {
      const types = ['paraboloid', 'ellipsoid', 'hyperboloid', 'cone'];
      type = types[Math.floor(Math.random() * types.length)];
      rotAxis = Math.random() > 0.5 ? 'x' : 'z';
      N = Math.floor(Math.random() * 25) + 10;
      
      t1 = parseFloat((Math.random() * 2 - (type === 'paraboloid' || type === 'cone' ? 0 : 3)).toFixed(1));
      t2 = parseFloat((t1 + Math.random() * 3 + 1).toFixed(1));
      
      a = parseFloat((Math.random() * 2 + 0.8).toFixed(1));
      b = parseFloat((Math.random() * 2 + 0.8).toFixed(1));

      document.getElementById('conic-type').value = type;
      document.getElementById('axis-rotation').value = rotAxis;
      document.getElementById('param-slices').value = N;
      document.getElementById('val-slices').innerText = N;
      document.getElementById('param-t1').value = t1;
      document.getElementById('val-t1').innerText = t1.toFixed(1);
      document.getElementById('param-t2').value = t2;
      document.getElementById('val-t2').innerText = t2.toFixed(1);
      document.getElementById('param-a').value = a;
      document.getElementById('val-a').innerText = a;
      document.getElementById('param-b').value = b;
      document.getElementById('val-b').innerText = b;

      rebuildScene();
    });

    window.addEventListener('resize', () => {
      camera.aspect = viewport.clientWidth / viewport.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(viewport.clientWidth, viewport.clientHeight);
      rebuildScene();
    });

    function animate() {
      requestAnimationFrame(animate);
      if (autoRotate) {
        if (rotAxis === 'x') {
          conicMeshGroup.rotation.x += 0.008;
        } else {
          conicMeshGroup.rotation.y += 0.008;
        }
      }
      controls.update();
      conicMeshGroup.updateMatrixWorld();
      updateOverlayLabels();
      renderer.render(scene, camera);
    }

    rebuildScene();
    animate();
  </script>
</body>
</html>`,
    isCustomImport: true,
    authorEmail: "ndunj123@gmail.com",
    authorName: "Axiom Creator",
    createdAt: "2026-08-16"
  },
  {
    id: "sim-land-sea-breeze",
    title: "Land and Sea Breeze Thermodynamics Simulator",
    tagline: "Atmospheric Convection Cells, Specific Heat Capacity & Differential Surface Heating",
    discipline: "physics",
    gradeLevel: ["Middle School (6-8)", "High School (9-12)", "AP / IB STEM"],
    standards: ["MS-ESS2-6", "HS-ESS2-4", "HS-PS3-4", "IB Environmental Systems & Societies"],
    description: "Model atmospheric convection loops and coastal diurnal wind shifts driven by differential heat capacities between terrestrial land (~800 J/kg·K) and maritime water (~4184 J/kg·K). Explore daytime sea breezes (onshore wind, thermal updrafts over land, low pressure) versus nighttime land breezes (offshore wind, ocean updrafts, high pressure) with live particle streamlines, temperature telemetry, and pressure cells.",
    learningObjectives: [
      "Explain how differences in specific heat capacity between land and sea drive differential heating and cooling cycles",
      "Model how surface thermal updrafts generate localized low-pressure zones and convective circulation loops",
      "Differentiate between daytime onshore Sea Breezes and nighttime offshore Land Breezes",
      "Quantify the relationship between temperature differential (ΔT) and surface wind velocity"
    ],
    thumbnailGradient: "from-amber-600 via-sky-600 to-emerald-800",
    badgeColor: "bg-amber-500/10 text-amber-400 border-amber-500/20",
    iconName: "Wind",
    rating: 5.0,
    reviewCount: 47,
    teacherCount: 215,
    licenseType: "Academic STEM Classroom & Institutional License",
    pricing: {
      singleTeacher: 19,
      schoolDepartment: 200,
      districtUnlimited: 400
    },
    features: [
      "Diurnal mode toggle with Day (Golden Sun, Sea Breeze) and Night (Full Moon, Land Breeze) atmospheric setups",
      "Independent land (10°C to 45°C) and sea (10°C to 35°C) temperature sliders with real-time ΔT calculations",
      "Continuous thermodynamic convection streamlines with thermal updraft waves over warmer surfaces",
      "Live High (H) and Low (L) pressure cell indicators with comprehensive scientific explanation modal"
    ],
    parameterDefaults: {
      mode: "day",
      landTemp: 32,
      seaTemp: 22
    },
    parameterControls: [
      {
        key: "landTemp",
        label: "Land Surface Temp",
        min: 10,
        max: 45,
        step: 1,
        unit: "°C",
        description: "Temperature of the coastal terrestrial land surface"
      },
      {
        key: "seaTemp",
        label: "Sea Surface Temp",
        min: 10,
        max: 35,
        step: 1,
        unit: "°C",
        description: "Temperature of the ocean surface water"
      }
    ],
    sampleChallenges: [
      {
        id: "ch-breeze-1",
        title: "Generate a Strong Onshore Sea Breeze",
        instruction: "Switch to Daytime mode and increase Land Temp to 40°C while keeping Sea Temp at 20°C to achieve a ΔT of +20°C.",
        targetMetric: "Temperature Differential (ΔT)",
        targetValue: 20.0,
        tolerance: 0.0,
        currentValueKey: "deltaT",
        rewardBadge: "Meteorologist"
      }
    ],
    previewFacts: [
      "Water has a specific heat capacity of approximately 4,184 J/(kg·K), more than five times greater than dry sand or soil (~800 J/(kg·K)).",
      "Sea breezes frequently penetrate inland up to 30 to 50 km, providing significant natural temperature moderation in coastal cities."
    ],
    isHtmlApp: true,
    htmlContent: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Land and Sea Breeze Simulation</title>
    <style>
        :root {
            --bg-color: #0f172a;
            --panel-bg: #1e293b;
            --accent-color: #f59e0b;
            --text-color: #f8fafc;
            --text-dim: #94a3b8;
            --border-color: #334155;
        }

        * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
        }

        body {
            background-color: var(--bg-color);
            color: var(--text-color);
            min-height: 100vh;
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 20px;
        }

        header {
            text-align: center;
            margin-bottom: 20px;
        }

        h1 {
            font-size: 1.8rem;
            margin-bottom: 6px;
            color: var(--accent-color);
        }

        p.subtitle {
            color: var(--text-dim);
            font-size: 0.95rem;
        }

        .container {
            display: flex;
            flex-direction: column;
            gap: 20px;
            width: 100%;
            max-width: 1000px;
        }

        @media (min-width: 850px) {
            .container {
                flex-direction: row;
            }
        }

        .canvas-wrapper {
            flex: 1 1 65%;
            position: relative;
            background-color: #000;
            border-radius: 12px;
            overflow: hidden;
            box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.5);
            border: 1px solid var(--border-color);
        }

        canvas {
            display: block;
            width: 100%;
            height: auto;
        }

        .controls-panel {
            flex: 1 1 35%;
            background-color: var(--panel-bg);
            border-radius: 12px;
            padding: 20px;
            border: 1px solid var(--border-color);
            display: flex;
            flex-direction: column;
            gap: 16px;
        }

        .panel-section {
            display: flex;
            flex-direction: column;
            gap: 8px;
        }

        .panel-section h3 {
            font-size: 0.9rem;
            text-transform: uppercase;
            letter-spacing: 0.05em;
            color: var(--text-dim);
            border-bottom: 1px solid var(--border-color);
            padding-bottom: 4px;
        }

        .btn-group {
            display: flex;
            gap: 8px;
        }

        button {
            flex: 1;
            padding: 10px 14px;
            background-color: #334155;
            color: var(--text-color);
            border: 1px solid var(--border-color);
            border-radius: 6px;
            cursor: pointer;
            font-weight: 600;
            font-size: 0.85rem;
            transition: all 0.2s ease;
        }

        button:hover {
            background-color: #475569;
        }

        button.active {
            background-color: var(--accent-color);
            color: #0f172a;
            border-color: var(--accent-color);
        }

        .btn-info {
            background-color: #0284c7;
            border-color: #38bdf8;
            color: #ffffff;
            margin-top: 4px;
        }

        .btn-info:hover {
            background-color: #0369a1;
        }

        .control-group {
            display: flex;
            flex-direction: column;
            gap: 4px;
        }

        .control-label {
            display: flex;
            justify-content: space-between;
            font-size: 0.85rem;
        }

        input[type="range"] {
            width: 100%;
            accent-color: var(--accent-color);
        }

        .telemetry-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 8px;
        }

        .telemetry-card {
            background-color: rgba(15, 23, 42, 0.6);
            padding: 10px;
            border-radius: 6px;
            border: 1px solid var(--border-color);
        }

        .telemetry-card .label {
            font-size: 0.75rem;
            color: var(--text-dim);
        }

        .telemetry-card .value {
            font-size: 1.1rem;
            font-weight: bold;
            color: var(--accent-color);
            margin-top: 2px;
        }

        .legend {
            display: flex;
            align-items: center;
            justify-content: space-between;
            font-size: 0.8rem;
            color: var(--text-dim);
            padding-top: 4px;
        }

        .legend-item {
            display: flex;
            align-items: center;
            gap: 6px;
        }

        .dot {
            width: 10px;
            height: 10px;
            border-radius: 50%;
        }

        /* Modal Styles */
        .modal-overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100vw;
            height: 100vh;
            background-color: rgba(15, 23, 42, 0.85);
            backdrop-filter: blur(4px);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 100;
            opacity: 0;
            pointer-events: none;
            transition: opacity 0.3s ease;
        }

        .modal-overlay.open {
            opacity: 1;
            pointer-events: auto;
        }

        .modal-content {
            background-color: var(--panel-bg);
            border: 1px solid var(--border-color);
            border-radius: 12px;
            width: 90%;
            max-width: 650px;
            max-height: 85vh;
            overflow-y: auto;
            padding: 24px;
            box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.5);
            position: relative;
        }

        .modal-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            border-bottom: 1px solid var(--border-color);
            padding-bottom: 12px;
            margin-bottom: 16px;
        }

        .modal-header h2 {
            font-size: 1.3rem;
            color: var(--accent-color);
        }

        .close-btn {
            background: none;
            border: none;
            color: var(--text-dim);
            font-size: 1.5rem;
            cursor: pointer;
            line-height: 1;
            padding: 0 4px;
            flex: initial;
        }

        .close-btn:hover {
            color: var(--text-color);
            background: none;
        }

        .modal-body {
            font-size: 0.92rem;
            line-height: 1.6;
            color: #cbd5e1;
            display: flex;
            flex-direction: column;
            gap: 14px;
        }

        .modal-body h4 {
            color: #f1f5f9;
            font-size: 1rem;
            margin-top: 6px;
        }

        .modal-body ul {
            padding-left: 20px;
        }

        .modal-body li {
            margin-bottom: 6px;
        }

        .highlight-box {
            background-color: rgba(15, 23, 42, 0.6);
            border-left: 4px solid var(--accent-color);
            padding: 10px 14px;
            border-radius: 4px;
            font-size: 0.88rem;
        }
    </style>
</head>
<body>

    <header>
        <h1>Land and Sea Breeze Simulator</h1>
        <p class="subtitle">Thermodynamic convection dynamics driven by differential surface heating</p>
    </header>

    <div class="container">
        <div class="canvas-wrapper">
            <canvas id="simCanvas" width="600" height="420"></canvas>
        </div>

        <div class="controls-panel">
            <div class="panel-section">
                <h3>Diurnal Mode</h3>
                <div class="btn-group">
                    <button id="btnDay" class="active">Daytime (Sea Breeze)</button>
                    <button id="btnNight">Nighttime (Land Breeze)</button>
                </div>
            </div>

            <div class="panel-section">
                <h3>Surface Temperatures</h3>
                <div class="control-group">
                    <div class="control-label">
                        <span>Land Temp</span>
                        <span id="landTempDisplay">32 °C</span>
                    </div>
                    <input type="range" id="landTempSlider" min="10" max="45" value="32">
                </div>
                <div class="control-group">
                    <div class="control-label">
                        <span>Sea Temp</span>
                        <span id="seaTempDisplay">22 °C</span>
                    </div>
                    <input type="range" id="seaTempSlider" min="10" max="35" value="22">
                </div>
            </div>

            <div class="panel-section">
                <h3>Telemetry</h3>
                <div class="telemetry-grid">
                    <div class="telemetry-card">
                        <div class="label">Temp Delta (ΔT)</div>
                        <div class="value" id="tempDeltaValue">+10 °C</div>
                    </div>
                    <div class="telemetry-card">
                        <div class="label">Breeze Speed</div>
                        <div class="value" id="breezeSpeedValue">4.2 m/s</div>
                    </div>
                    <div class="telemetry-card">
                        <div class="label">Surface Wind</div>
                        <div class="value" id="windDirValue">Onshore</div>
                    </div>
                    <div class="telemetry-card">
                        <div class="label">Cell Type</div>
                        <div class="value" id="cellTypeValue">Sea Breeze</div>
                    </div>
                </div>
            </div>

            <button id="btnExplain" class="btn-info">📖 Explain Science & Physics</button>

            <div class="legend">
                <div class="legend-item"><span class="dot" style="background:#ef4444;"></span> Warm Air Stream</div>
                <div class="legend-item"><span class="dot" style="background:#3b82f6;"></span> Cool Air Stream</div>
                <div class="legend-item"><span class="dot" style="background:#f59e0b;"></span> Golden Sun</div>
            </div>
        </div>
    </div>

    <div id="infoModal" class="modal-overlay">
        <div class="modal-content">
            <div class="modal-header">
                <h2>Understanding Land & Sea Breezes</h2>
                <button id="btnCloseModal" class="close-btn">&times;</button>
            </div>
            <div class="modal-body">
                <div class="highlight-box">
                    <strong>Core Principle:</strong> Land and sea breezes are localized atmospheric circulation systems caused by the difference in <em>specific heat capacity</em> between land and water.
                </div>

                <h4>1. Specific Heat Capacity Difference</h4>
                <p>
                    Land has a lower specific heat capacity than water (~800 J/kg·K vs. ~4184 J/kg·K). This means land heats up rapidly during the day when exposed to solar radiation, but cools down just as quickly at night. Water absorbs and releases thermal energy much more slowly, keeping sea temperatures relatively stable day and night.
                </p>

                <h4>2. Daytime: Sea Breeze (Onshore Wind)</h4>
                <ul>
                    <li><strong>Heating Phase:</strong> Sun heats the land faster than the sea.</li>
                    <li><strong>Pressure Gradient:</strong> Air over land warms, expands, becomes less dense, and rises (thermal updraft). This creates a <strong>Low Pressure (L)</strong> area at ground level over land.</li>
                    <li><strong>Convection Loop:</strong> Cooler, denser air over the water (High Pressure, H) blows onshore toward the land to replace the rising air, creating a refreshing <strong>Sea Breeze</strong>.</li>
                </ul>

                <h4>3. Nighttime: Land Breeze (Offshore Wind)</h4>
                <ul>
                    <li><strong>Cooling Phase:</strong> At night, land radiates heat quickly into space and becomes cooler than the sea.</li>
                    <li><strong>Pressure Inversion:</strong> The air over the warmer sea expands and rises, creating a <strong>Low Pressure (L)</strong> zone over the ocean.</li>
                    <li><strong>Convection Inversion:</strong> Denser, cooler air from the land (High Pressure, H) flows offshore toward the ocean, creating a <strong>Land Breeze</strong>.</li>
                </ul>

                <h4>4. Pressure Badges & Circulation Cells</h4>
                <p>
                    Air always flows along surface pressure gradients from <strong>High Pressure (H)</strong> to <strong>Low Pressure (L)</strong>. Upper-atmosphere return currents complete the convection loop, keeping atmospheric pressure balanced.
                </p>
            </div>
        </div>
    </div>

    <script>
        const canvas = document.getElementById('simCanvas');
        const ctx = canvas.getContext('2d');

        let mode = 'day';
        let landTemp = 32;
        let seaTemp = 22;
        let streamOffset = 0;
        let cloudOffset = 0;

        const stars = Array.from({ length: 65 }, function() {
            return {
                x: Math.random() * 600,
                y: Math.random() * 220,
                radius: 0.8 + Math.random() * 1.5,
                phase: Math.random() * Math.PI * 2,
                speed: 0.03 + Math.random() * 0.05
            };
        });

        const rocks = Array.from({ length: 14 }, function() {
            return {
                x: 310 + Math.random() * 260,
                yOffset: Math.random() * 15,
                width: 8 + Math.random() * 14,
                height: 5 + Math.random() * 8,
                color: Math.random() > 0.5 ? '#475569' : '#334155'
            };
        });

        const sandGrains = Array.from({ length: 120 }, function() {
            return {
                x: 270 + Math.random() * 320,
                y: 330 + Math.random() * 70,
                size: 1 + Math.random() * 2,
                color: Math.random() > 0.5 ? '#fde047' : '#ca8a04'
            };
        });

        const btnDay = document.getElementById('btnDay');
        const btnNight = document.getElementById('btnNight');
        const landTempSlider = document.getElementById('landTempSlider');
        const seaTempSlider = document.getElementById('seaTempSlider');
        const landTempDisplay = document.getElementById('landTempDisplay');
        const seaTempDisplay = document.getElementById('seaTempDisplay');
        const tempDeltaValue = document.getElementById('tempDeltaValue');
        const breezeSpeedValue = document.getElementById('breezeSpeedValue');
        const windDirValue = document.getElementById('windDirValue');
        const cellTypeValue = document.getElementById('cellTypeValue');

        const btnExplain = document.getElementById('btnExplain');
        const btnCloseModal = document.getElementById('btnCloseModal');
        const infoModal = document.getElementById('infoModal');

        function drawGlowingGoldenSun(sunX, sunY) {
            const time = Date.now() * 0.002;

            ctx.save();

            const haloRadius = 80 + Math.sin(time * 1.5) * 6;
            const haloGrad = ctx.createRadialGradient(sunX, sunY, 10, sunX, sunY, haloRadius);
            haloGrad.addColorStop(0, 'rgba(255, 215, 0, 0.6)');
            haloGrad.addColorStop(0.4, 'rgba(245, 158, 11, 0.3)');
            haloGrad.addColorStop(1, 'rgba(217, 119, 6, 0)');

            ctx.fillStyle = haloGrad;
            ctx.beginPath();
            ctx.arc(sunX, sunY, haloRadius, 0, Math.PI * 2);
            ctx.fill();

            const rayCount = 12;
            ctx.globalCompositeOperation = 'screen';
            for (let i = 0; i < rayCount; i++) {
                const angle = (i * Math.PI * 2 / rayCount) + (time * 0.05);
                const rayLen = 140 + Math.sin(time * 3 + i) * 18;

                const x1 = sunX + Math.cos(angle - 0.06) * 12;
                const y1 = sunY + Math.sin(angle - 0.06) * 12;
                const x2 = sunX + Math.cos(angle + 0.06) * 12;
                const y2 = sunY + Math.sin(angle + 0.06) * 12;
                const x3 = sunX + Math.cos(angle) * rayLen;
                const y3 = sunY + Math.sin(angle) * rayLen;

                const rayGrad = ctx.createLinearGradient(sunX, sunY, x3, y3);
                rayGrad.addColorStop(0, 'rgba(255, 223, 0, 0.45)');
                rayGrad.addColorStop(0.5, 'rgba(245, 158, 11, 0.15)');
                rayGrad.addColorStop(1, 'rgba(217, 119, 6, 0)');

                ctx.beginPath();
                ctx.moveTo(x1, y1);
                ctx.lineTo(x2, y2);
                ctx.lineTo(x3, y3);
                ctx.closePath();
                ctx.fillStyle = rayGrad;
                ctx.fill();
            }
            ctx.globalCompositeOperation = 'source-over';

            const coreGrad = ctx.createRadialGradient(sunX - 5, sunY - 5, 2, sunX, sunY, 24);
            coreGrad.addColorStop(0, '#fef08a');
            coreGrad.addColorStop(0.35, '#f59e0b');
            coreGrad.addColorStop(0.85, '#d97706');
            coreGrad.addColorStop(1, '#b45309');

            ctx.beginPath();
            ctx.arc(sunX, sunY, 24, 0, Math.PI * 2);
            ctx.fillStyle = coreGrad;
            ctx.shadowColor = '#f59e0b';
            ctx.shadowBlur = 20;
            ctx.fill();
            ctx.shadowBlur = 0;

            ctx.font = 'bold 12px sans-serif';
            ctx.fillStyle = '#fef08a';
            ctx.textAlign = 'center';
            ctx.fillText('SUN', sunX, sunY + 42);

            ctx.restore();
        }

        function drawFullMoon(moonX, moonY) {
            ctx.save();

            const auraGrad = ctx.createRadialGradient(moonX, moonY, 15, moonX, moonY, 60);
            auraGrad.addColorStop(0, 'rgba(241, 245, 249, 0.5)');
            auraGrad.addColorStop(0.5, 'rgba(203, 213, 225, 0.2)');
            auraGrad.addColorStop(1, 'rgba(148, 163, 184, 0)');

            ctx.fillStyle = auraGrad;
            ctx.beginPath();
            ctx.arc(moonX, moonY, 60, 0, Math.PI * 2);
            ctx.fill();

            const moonGrad = ctx.createRadialGradient(moonX - 6, moonY - 6, 3, moonX, moonY, 22);
            moonGrad.addColorStop(0, '#ffffff');
            moonGrad.addColorStop(0.7, '#e2e8f0');
            moonGrad.addColorStop(1, '#cbd5e1');

            ctx.beginPath();
            ctx.arc(moonX, moonY, 22, 0, Math.PI * 2);
            ctx.fillStyle = moonGrad;
            ctx.shadowColor = '#e2e8f0';
            ctx.shadowBlur = 18;
            ctx.fill();
            ctx.shadowBlur = 0;

            const craters = [
                { x: -7, y: -5, r: 4 },
                { x: 6, y: 7, r: 5 },
                { x: -5, y: 9, r: 3 },
                { x: 8, y: -6, r: 3.5 },
                { x: 1, y: 2, r: 2.5 }
            ];

            ctx.fillStyle = 'rgba(148, 163, 184, 0.35)';
            craters.forEach(function(c) {
                ctx.beginPath();
                ctx.arc(moonX + c.x, moonY + c.y, c.r, 0, Math.PI * 2);
                ctx.fill();
            });

            ctx.font = 'bold 12px sans-serif';
            ctx.fillStyle = '#f1f5f9';
            ctx.textAlign = 'center';
            ctx.fillText('FULL MOON', moonX, moonY + 42);

            ctx.restore();
        }

        function drawConvolutedClouds() {
            ctx.save();
            cloudOffset += 0.25;

            const cloudGroups = [
                {
                    baseX: 70, baseY: 65, scale: 0.9,
                    puffs: [
                        { dx: 0, dy: 0, r: 22 },
                        { dx: 18, dy: -12, r: 28 },
                        { dx: 42, dy: -8, r: 24 },
                        { dx: 62, dy: 4, r: 18 },
                        { dx: 30, dy: 10, r: 20 },
                        { dx: -15, dy: 8, r: 16 }
                    ]
                },
                {
                    baseX: 250, baseY: 85, scale: 1.15,
                    puffs: [
                        { dx: 0, dy: 0, r: 26 },
                        { dx: 22, dy: -16, r: 32 },
                        { dx: 50, dy: -10, r: 28 },
                        { dx: 75, dy: 6, r: 22 },
                        { dx: 35, dy: 12, r: 24 },
                        { dx: -18, dy: 10, r: 18 }
                    ]
                },
                {
                    baseX: 410, baseY: 55, scale: 0.8,
                    puffs: [
                        { dx: 0, dy: 0, r: 20 },
                        { dx: 16, dy: -10, r: 25 },
                        { dx: 38, dy: -6, r: 22 },
                        { dx: 55, dy: 5, r: 16 },
                        { dx: 25, dy: 8, r: 18 }
                    ]
                }
            ];

            cloudGroups.forEach(function(cloud) {
                const currentX = ((cloud.baseX + cloudOffset) % 720) - 100;
                const scale = cloud.scale;

                ctx.fillStyle = 'rgba(186, 230, 253, 0.45)';
                cloud.puffs.forEach(function(p) {
                    ctx.beginPath();
                    ctx.arc(currentX + (p.dx * scale), cloud.baseY + ((p.dy + 4) * scale), p.r * scale, 0, Math.PI * 2);
                    ctx.fill();
                });

                const cloudGrad = ctx.createLinearGradient(0, cloud.baseY - 30, 0, cloud.baseY + 20);
                cloudGrad.addColorStop(0, '#ffffff');
                cloudGrad.addColorStop(0.85, '#f0f9ff');
                cloudGrad.addColorStop(1, '#e0f2fe');

                ctx.fillStyle = cloudGrad;
                cloud.puffs.forEach(function(p) {
                    ctx.beginPath();
                    ctx.arc(currentX + (p.dx * scale), cloud.baseY + (p.dy * scale), p.r * scale, 0, Math.PI * 2);
                    ctx.fill();
                });
            });

            ctx.restore();
        }

        function drawTwinklingStars() {
            ctx.save();
            const time = Date.now() * 0.001;
            stars.forEach(function(star) {
                const alpha = 0.3 + 0.7 * (0.5 + 0.5 * Math.sin(time * star.speed * 20 + star.phase));
                ctx.fillStyle = 'rgba(255, 255, 255, ' + alpha + ')';
                ctx.beginPath();
                ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
                ctx.fill();
            });
            ctx.restore();
        }

        function drawArrowhead(x, y, angle, color) {
            ctx.save();
            ctx.translate(x, y);
            ctx.rotate(angle);
            ctx.fillStyle = color;
            ctx.beginPath();
            ctx.moveTo(0, 0);
            ctx.lineTo(-12, -6);
            ctx.lineTo(-10, 0);
            ctx.lineTo(-12, 6);
            ctx.closePath();
            ctx.fill();
            ctx.restore();
        }

        function drawRealisticSea(W, H) {
            const time = Date.now() * 0.003;
            const seaLevel = H - 80;

            const waterGrad = ctx.createLinearGradient(0, seaLevel, 0, H);
            waterGrad.addColorStop(0, '#0284c7');
            waterGrad.addColorStop(0.5, '#0369a1');
            waterGrad.addColorStop(1, '#0c4a6e');
            ctx.fillStyle = waterGrad;
            ctx.fillRect(0, seaLevel, W / 2 + 10, 80);

            for (let layer = 0; layer < 3; layer++) {
                ctx.beginPath();
                ctx.moveTo(0, H);
                const offset = layer * 4;
                for (let x = 0; x <= W / 2 + 15; x += 5) {
                    const waveY = seaLevel + Math.sin(x * 0.04 + time * (2 + layer) + layer) * (4 - layer) + offset;
                    ctx.lineTo(x, waveY);
                }
                ctx.lineTo(W / 2 + 15, H);
                ctx.closePath();
                ctx.fillStyle = 'rgba(56, 189, 248, ' + (0.15 + layer * 0.1) + ')';
                ctx.fill();
            }

            ctx.strokeStyle = 'rgba(255, 255, 255, 0.6)';
            ctx.lineWidth = 2;
            ctx.beginPath();
            for (let x = W / 2 - 40; x <= W / 2 + 10; x += 2) {
                const foamY = seaLevel + Math.sin(x * 0.1 + time * 4) * 2;
                ctx.lineTo(x, foamY);
            }
            ctx.stroke();
        }

        function drawRealisticLand(W, H) {
            ctx.save();
            const seaLevel = H - 80;

            const sandGrad = ctx.createLinearGradient(W / 2 - 20, seaLevel, W / 2 + 60, H);
            sandGrad.addColorStop(0, '#eab308');
            sandGrad.addColorStop(0.5, '#ca8a04');
            sandGrad.addColorStop(1, '#854d0e');

            ctx.beginPath();
            ctx.moveTo(W / 2 - 20, H);
            ctx.quadraticCurveTo(W / 2, seaLevel + 10, W / 2 + 50, seaLevel - 5);
            ctx.lineTo(W / 2 + 50, H);
            ctx.closePath();
            ctx.fillStyle = sandGrad;
            ctx.fill();

            const landGrad = ctx.createLinearGradient(W / 2, seaLevel - 20, W, H);
            if (mode === 'day') {
                landGrad.addColorStop(0, '#15803d');
                landGrad.addColorStop(0.4, '#166534');
                landGrad.addColorStop(1, '#14532d');
            } else {
                landGrad.addColorStop(0, '#14532d');
                landGrad.addColorStop(0.5, '#052e16');
                landGrad.addColorStop(1, '#022c22');
            }

            ctx.beginPath();
            ctx.moveTo(W / 2 + 40, H);
            ctx.lineTo(W / 2 + 40, seaLevel - 5);
            ctx.bezierCurveTo(W / 2 + 90, seaLevel - 25, W / 2 + 140, seaLevel + 5, W / 2 + 190, seaLevel - 15);
            ctx.bezierCurveTo(W / 2 + 230, seaLevel - 30, W / 2 + 270, seaLevel - 5, W, seaLevel - 18);
            ctx.lineTo(W, H);
            ctx.closePath();
            ctx.fillStyle = landGrad;
            ctx.fill();

            sandGrains.forEach(function(g) {
                ctx.fillStyle = g.color;
                ctx.fillRect(g.x, g.y, g.size, g.size);
            });

            rocks.forEach(function(r) {
                ctx.fillStyle = r.color;
                ctx.beginPath();
                const rockY = seaLevel - 8 + r.yOffset;
                ctx.ellipse(r.x, rockY, r.width / 2, r.height / 2, 0, 0, Math.PI * 2);
                ctx.fill();
            });

            ctx.restore();
        }

        function drawRisingThermalCurrents(landTemp, seaTemp) {
            const time = Date.now() * 0.004;

            ctx.save();

            let targetCenterX = 0;
            let drawThermals = false;

            if (landTemp > seaTemp) {
                drawThermals = true;
                const heatIntensity = Math.min((landTemp - seaTemp) / 15, 1);
                ctx.lineWidth = 3.5;
                ctx.strokeStyle = 'rgba(239, 68, 68, ' + (0.7 * heatIntensity) + ')';

                for (let x = 360; x <= 540; x += 30) {
                    ctx.beginPath();
                    const baseY = 310;
                    for (let y = 0; y < 85; y += 4) {
                        const waveX = x + Math.sin((y * 0.08) - time * 3) * 9;
                        const currentY = baseY - y;
                        if (y === 0) ctx.moveTo(waveX, currentY);
                        else ctx.lineTo(waveX, currentY);
                    }
                    ctx.stroke();
                }
                targetCenterX = 450;
            } 
            else if (seaTemp > landTemp) {
                drawThermals = true;
                const heatIntensity = Math.min((seaTemp - landTemp) / 15, 1);
                ctx.lineWidth = 3.5;
                ctx.strokeStyle = 'rgba(239, 68, 68, ' + (0.7 * heatIntensity) + ')';

                for (let x = 80; x <= 220; x += 30) {
                    ctx.beginPath();
                    const baseY = 310;
                    for (let y = 0; y < 85; y += 4) {
                        const waveX = x + Math.sin((y * 0.08) - time * 3) * 9;
                        const currentY = baseY - y;
                        if (y === 0) ctx.moveTo(waveX, currentY);
                        else ctx.lineTo(waveX, currentY);
                    }
                    ctx.stroke();
                }
                targetCenterX = 150;
            }

            if (drawThermals) {
                const labelY = 250;
                
                ctx.font = 'bold 13px sans-serif';
                const textWidth = ctx.measureText('rising hot air').width;
                ctx.fillStyle = 'rgba(15, 23, 42, 0.85)';
                ctx.strokeStyle = '#ef4444';
                ctx.lineWidth = 1.5;
                
                ctx.beginPath();
                if (ctx.roundRect) {
                    ctx.roundRect(targetCenterX - textWidth / 2 - 8, labelY - 14, textWidth + 16, 22, 6);
                } else {
                    ctx.rect(targetCenterX - textWidth / 2 - 8, labelY - 14, textWidth + 16, 22);
                }
                ctx.fill();
                ctx.stroke();

                ctx.fillStyle = '#fef08a';
                ctx.textAlign = 'center';
                ctx.fillText('rising hot air', targetCenterX, labelY + 1);
            }

            ctx.restore();
        }

        function drawBackground() {
            const W = canvas.width;
            const H = canvas.height;

            const skyGrad = ctx.createLinearGradient(0, 0, 0, H - 80);
            if (mode === 'day') {
                skyGrad.addColorStop(0, '#0284c7');
                skyGrad.addColorStop(0.6, '#38bdf8');
                skyGrad.addColorStop(1, '#bae6fd');
            } else {
                skyGrad.addColorStop(0, '#020617');
                skyGrad.addColorStop(0.5, '#0f172a');
                skyGrad.addColorStop(1, '#1e1b4b');
            }
            ctx.fillStyle = skyGrad;
            ctx.fillRect(0, 0, W, H - 80);

            if (mode === 'night') drawTwinklingStars();
            if (mode === 'day') drawConvolutedClouds();

            if (mode === 'day') {
                drawGlowingGoldenSun(500, 48);
            } else {
                drawFullMoon(100, 48);
            }

            drawRealisticSea(W, H);
            drawRealisticLand(W, H);

            ctx.strokeStyle = 'rgba(254, 240, 138, 0.4)';
            ctx.lineWidth = 1.5;
            ctx.setLineDash([4, 4]);
            ctx.beginPath();
            ctx.moveTo(W / 2, H - 80);
            ctx.lineTo(W / 2, H);
            ctx.stroke();
            ctx.setLineDash([]);

            ctx.font = 'bold 14px sans-serif';
            ctx.fillStyle = '#ffffff';
            ctx.textAlign = 'left';
            ctx.fillText('SEA', 70, H - 25);
            ctx.fillText('LAND', W - 120, H - 25);
        }

        function drawContinuousBreezeStreamlines(deltaT) {
            const absDelta = Math.abs(deltaT);
            if (absDelta < 0.5) return;

            const speed = (0.5 + absDelta * 0.25);
            streamOffset = (streamOffset + speed) % 60;

            ctx.save();
            ctx.lineCap = 'round';
            ctx.lineJoin = 'round';

            const streamCount = 5;
            for (let i = 0; i < streamCount; i++) {
                const margin = i * 14;
                const path = new Path2D();

                const xSea = 110 + margin;
                const xLand = 490 - margin;
                const ySurface = 290 - (i * 12);
                const yUpper = 125 + (i * 12);

                if (deltaT > 0) {
                    path.moveTo(xSea, ySurface);
                    path.lineTo(xLand, ySurface);
                    path.quadraticCurveTo(xLand + 40, ySurface, xLand + 40, ySurface - 50);
                    path.lineTo(xLand + 40, yUpper + 50);
                    path.quadraticCurveTo(xLand + 40, yUpper, xLand, yUpper);
                    path.lineTo(xSea, yUpper);
                    path.quadraticCurveTo(xSea - 40, yUpper, xSea - 40, yUpper + 50);
                    path.lineTo(xSea - 40, ySurface - 50);
                    path.quadraticCurveTo(xSea - 40, ySurface, xSea, ySurface);
                } else {
                    path.moveTo(xLand, ySurface);
                    path.lineTo(xSea, ySurface);
                    path.quadraticCurveTo(xSea - 40, ySurface, xSea - 40, ySurface - 50);
                    path.lineTo(xSea - 40, yUpper + 50);
                    path.quadraticCurveTo(xSea - 40, yUpper, xSea, yUpper);
                    path.lineTo(xLand, yUpper);
                    path.quadraticCurveTo(xLand + 40, yUpper, xLand + 40, yUpper + 50);
                    path.lineTo(xLand + 40, ySurface - 50);
                    path.quadraticCurveTo(xLand + 40, ySurface, xLand, ySurface);
                }

                const streamGrad = ctx.createLinearGradient(100, 0, 500, 0);
                if (deltaT > 0) {
                    streamGrad.addColorStop(0.1, '#3b82f6');
                    streamGrad.addColorStop(0.5, '#60a5fa');
                    streamGrad.addColorStop(0.9, '#ef4444');
                } else {
                    streamGrad.addColorStop(0.1, '#ef4444');
                    streamGrad.addColorStop(0.5, '#60a5fa');
                    streamGrad.addColorStop(0.9, '#3b82f6');
                }

                ctx.lineWidth = 6;
                ctx.strokeStyle = streamGrad;
                ctx.globalAlpha = 0.25;
                ctx.stroke(path);

                ctx.lineWidth = 4;
                ctx.globalAlpha = 0.85;
                ctx.setLineDash([25, 35]);
                ctx.lineDashOffset = -streamOffset - (i * 12);
                ctx.stroke(path);
                ctx.setLineDash([]);
            }

            const arrowY = 290;
            if (deltaT > 0) {
                drawArrowhead(320, arrowY, 0, '#3b82f6');
                drawArrowhead(200, arrowY, 0, '#3b82f6');
                drawArrowhead(420, arrowY, 0, '#ef4444');
            } else {
                drawArrowhead(280, arrowY, Math.PI, '#3b82f6');
                drawArrowhead(400, arrowY, Math.PI, '#3b82f6');
                drawArrowhead(180, arrowY, Math.PI, '#ef4444');
            }

            ctx.restore();
        }

        function drawPressureIndicators(deltaT) {
            const W = canvas.width;
            const H = canvas.height;

            ctx.font = 'bold 18px sans-serif';
            ctx.textAlign = 'center';

            if (deltaT > 0) {
                drawBadge(W * 0.25, H - 95, 'H', '#3b82f6');
                drawBadge(W * 0.75, H - 95, 'L', '#ef4444');
                drawBadge(W * 0.25, 115, 'L', '#ef4444');
                drawBadge(W * 0.75, 115, 'H', '#3b82f6');
            } else if (deltaT < 0) {
                drawBadge(W * 0.25, H - 95, 'L', '#ef4444');
                drawBadge(W * 0.75, H - 95, 'H', '#3b82f6');
                drawBadge(W * 0.25, 115, 'H', '#3b82f6');
                drawBadge(W * 0.75, 115, 'L', '#ef4444');
            }
        }

        function drawBadge(x, y, text, color) {
            ctx.beginPath();
            ctx.arc(x, y - 5, 13, 0, Math.PI * 2);
            ctx.fillStyle = 'rgba(15, 23, 42, 0.85)';
            ctx.fill();
            ctx.strokeStyle = color;
            ctx.lineWidth = 2;
            ctx.stroke();

            ctx.fillStyle = color;
            ctx.fillText(text, x, y);
        }

        function updateTelemetry() {
            const deltaT = landTemp - seaTemp;
            const absDelta = Math.abs(deltaT);
            const speed = (absDelta * 0.42).toFixed(1);

            tempDeltaValue.innerText = (deltaT > 0 ? '+' : '') + deltaT + ' °C';
            breezeSpeedValue.innerText = speed + ' m/s';

            if (deltaT > 0) {
                windDirValue.innerText = 'Onshore (Sea → Land)';
                cellTypeValue.innerText = 'Sea Breeze';
                tempDeltaValue.style.color = '#ef4444';
            } else if (deltaT < 0) {
                windDirValue.innerText = 'Offshore (Land → Sea)';
                cellTypeValue.innerText = 'Land Breeze';
                tempDeltaValue.style.color = '#38bdf8';
            } else {
                windDirValue.innerText = 'Calm';
                cellTypeValue.innerText = 'Neutral';
                tempDeltaValue.style.color = '#94a3b8';
            }

            landTempDisplay.innerText = landTemp + ' °C';
            seaTempDisplay.innerText = seaTemp + ' °C';
        }

        function mainLoop() {
            const deltaT = landTemp - seaTemp;

            ctx.clearRect(0, 0, canvas.width, canvas.height);
            drawBackground();
            drawRisingThermalCurrents(landTemp, seaTemp);
            drawContinuousBreezeStreamlines(deltaT);
            drawPressureIndicators(deltaT);
            updateTelemetry();

            requestAnimationFrame(mainLoop);
        }

        btnDay.addEventListener('click', function() {
            mode = 'day';
            btnDay.classList.add('active');
            btnNight.classList.remove('active');
            landTemp = 32;
            seaTemp = 22;
            landTempSlider.value = landTemp;
            seaTempSlider.value = seaTemp;
        });

        btnNight.addEventListener('click', function() {
            mode = 'night';
            btnNight.classList.add('active');
            btnDay.classList.remove('active');
            landTemp = 14;
            seaTemp = 20;
            landTempSlider.value = landTemp;
            seaTempSlider.value = seaTemp;
        });

        landTempSlider.addEventListener('input', function(e) {
            landTemp = parseInt(e.target.value);
        });

        seaTempSlider.addEventListener('input', function(e) {
            seaTemp = parseInt(e.target.value);
        });

        btnExplain.addEventListener('click', function() {
            infoModal.classList.add('open');
        });

        btnCloseModal.addEventListener('click', function() {
            infoModal.classList.remove('open');
        });

        infoModal.addEventListener('click', function(e) {
            if (e.target === infoModal) {
                infoModal.classList.remove('open');
            }
        });

        mainLoop();
    </script>
</body>
</html>`,
    isCustomImport: true,
    authorEmail: "ndunj123@gmail.com",
    authorName: "Axiom Creator",
    createdAt: "2026-08-16"
  },
  {
    id: "sim-interactive-electric-circuits",
    title: "Interactive Electric Circuit Laboratory",
    tagline: "Series & Parallel Resistor Networks, DC Multi-Cell Stacks, Analog Meters & Bulb Power",
    discipline: "physics",
    gradeLevel: ["Middle School (6-8)", "High School (9-12)", "AP / IB STEM"],
    standards: ["HS-PS3-3", "HS-PS3-5", "AP Physics 2 (Unit 9)", "MS-PS3-3", "IB Physics (Topic 5)"],
    description: "Explore DC electricity, Ohm's Law (V = IR), equivalent resistance rules, Kirchhoff's current and voltage laws, and electrical power dissipation (P = I²R). Configure resistor networks in series or parallel, group DC chemical cells in series or parallel, observe real-time needle deflection on analog Voltmeters, Ammeters, and Galvanometers, and watch real-time electron drift and tungsten filament incandescence.",
    learningObjectives: [
      "Calculate equivalent resistance for series (Req = R1 + R2 + ...) and parallel (1/Req = 1/R1 + 1/R2 + ...) topologies",
      "Investigate how cell grouping (series vs. parallel) affects total electromotive force (EMF) and terminal voltage",
      "Analyze current division in parallel branches and voltage drops across individual series resistors",
      "Measure power dissipation and filament brightness of a resistive light bulb load with animated electron flow"
    ],
    thumbnailGradient: "from-sky-600 via-blue-700 to-indigo-900",
    badgeColor: "bg-sky-500/10 text-sky-400 border-sky-500/20",
    iconName: "Zap",
    rating: 5.0,
    reviewCount: 62,
    teacherCount: 310,
    licenseType: "Academic STEM Classroom & Institutional License",
    pricing: {
      singleTeacher: 19,
      schoolDepartment: 200,
      districtUnlimited: 400
    },
    features: [
      "Resistor network topology toggling between Series and Parallel with 1 to 4 customizable resistors (1Ω to 100Ω)",
      "DC Power Source cell stacking with Series (additive voltage) and Parallel grouping, plus per-cell voltage tuning (1.5V to 12V)",
      "Realistic incandescent light bulb load with dynamic tungsten filament glow aura and power dissipation calculations",
      "Precision analog instrumentation (Voltmeter, Ammeter, and Center-Zero Galvanometer) with calibrated dial graduations and moving needles",
      "Live animated electron drift speed proportional to total loop current (Itotal)"
    ],
    parameterDefaults: {
      resTopology: "series",
      cellTopology: "series",
      numCells: 2,
      vCell: 6.0,
      numRes: 2,
      r1: 10,
      r2: 20,
      rLoad: 10
    },
    parameterControls: [
      {
        key: "vCell",
        label: "Voltage per Cell",
        min: 1.5,
        max: 12,
        step: 0.5,
        unit: "V",
        description: "Electromotive force of each individual DC chemical cell"
      },
      {
        key: "r1",
        label: "Resistor 1 (R₁)",
        min: 1,
        max: 100,
        step: 1,
        unit: "Ω",
        description: "Resistance of the primary resistor in the network"
      },
      {
        key: "rLoad",
        label: "Bulb Filament Resistance",
        min: 1,
        max: 50,
        step: 1,
        unit: "Ω",
        description: "Internal resistive load of the incandescent lamp"
      }
    ],
    sampleChallenges: [
      {
        id: "ch-circ-1",
        title: "Achieve 1.0 Amp Total Current",
        instruction: "Adjust the cell voltage and resistor values in series or parallel to obtain exactly 1.00 A of total circuit current.",
        targetMetric: "Total Current (I_total)",
        targetValue: 1.0,
        tolerance: 0.05,
        currentValueKey: "Itotal",
        rewardBadge: "Circuit Master"
      }
    ],
    previewFacts: [
      "In a series circuit, current is identical everywhere while total voltage is divided among components. In a parallel circuit, voltage is identical across every branch while total current divides among paths.",
      "Tungsten filament lamps glow because electrical resistance converts electron kinetic energy into thermal energy and blackbody photon radiation (incandescence)."
    ],
    isHtmlApp: true,
    htmlContent: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Interactive Electric Circuit Simulation</title>
    <style>
        :root {
            --bg-main: #0f172a;
            --panel-bg: #1e293b;
            --panel-border: #334155;
            --accent-blue: #38bdf8;
            --accent-green: #22c55e;
            --accent-amber: #f59e0b;
            --accent-red: #ef4444;
            --text-light: #f8fafc;
            --text-muted: #94a3b8;
        }

        * { box-sizing: border-box; margin: 0; padding: 0; }

        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background-color: var(--bg-main);
            color: var(--text-light);
            display: flex;
            flex-direction: column;
            align-items: center;
            min-height: 100vh;
            padding: 20px;
        }

        h1 {
            font-size: 24px;
            font-weight: 700;
            margin-bottom: 20px;
            color: var(--accent-blue);
            text-shadow: 0 0 10px rgba(56, 189, 248, 0.2);
        }

        .main-layout {
            display: flex;
            flex-direction: row;
            gap: 20px;
            width: 100%;
            max-width: 1350px;
            justify-content: center;
        }

        @media (max-width: 900px) {
            .main-layout {
                flex-direction: column;
            }
            .control-panel {
                max-width: 100% !important;
            }
        }

        /* CONTROL PANEL */
        .control-panel {
            flex: 1;
            max-width: 380px;
            background-color: var(--panel-bg);
            border: 1px solid var(--panel-border);
            border-radius: 12px;
            padding: 18px;
            box-shadow: 0 10px 25px rgba(0,0,0,0.5);
            display: flex;
            flex-direction: column;
            gap: 14px;
        }

        .panel-section {
            background: rgba(15, 23, 42, 0.6);
            padding: 12px;
            border-radius: 8px;
            border: 1px solid rgba(255, 255, 255, 0.05);
        }

        .panel-title {
            font-size: 13px;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 0.8px;
            color: var(--accent-blue);
            margin-bottom: 10px;
        }

        .control-group {
            display: flex;
            flex-direction: column;
            gap: 5px;
            margin-bottom: 8px;
        }

        .control-group:last-child { margin-bottom: 0; }

        label {
            font-size: 12px;
            color: var(--text-muted);
            display: flex;
            justify-content: space-between;
        }

        .val-tag {
            color: var(--accent-amber);
            font-weight: bold;
        }

        input[type="range"] {
            width: 100%;
            accent-color: var(--accent-blue);
            cursor: pointer;
        }

        .btn-group {
            display: flex;
            gap: 8px;
        }

        .btn-group button {
            flex: 1;
            padding: 6px 10px;
            border-radius: 6px;
            border: 1px solid var(--panel-border);
            background-color: var(--bg-main);
            color: var(--text-light);
            font-size: 12px;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.2s;
        }

        button.active {
            background-color: var(--accent-blue);
            color: #000;
            border-color: var(--accent-blue);
        }

        /* WORKSPACE & CANVAS */
        .workspace {
            flex: 2;
            display: flex;
            flex-direction: column;
            gap: 15px;
        }

        .canvas-container {
            position: relative;
            background-color: var(--panel-bg);
            border: 1px solid var(--panel-border);
            border-radius: 12px;
            box-shadow: 0 10px 25px rgba(0,0,0,0.5);
            overflow: hidden;
            height: 520px;
        }

        canvas {
            width: 100%;
            height: 100%;
            display: block;
        }

        /* SUMMARY BAR */
        .summary-bar {
            background: var(--panel-bg);
            border: 1px solid var(--panel-border);
            border-radius: 12px;
            padding: 12px 20px;
            display: flex;
            justify-content: space-around;
            align-items: center;
        }

        .summary-item {
            display: flex;
            flex-direction: column;
            align-items: center;
        }

        .summary-label { font-size: 11px; color: var(--text-muted); text-transform: uppercase; }
        .summary-value { font-size: 16px; font-weight: bold; color: var(--accent-blue); margin-top: 2px; }
    </style>
</head>
<body>

    <h1>Interactive Electric Circuit Simulation</h1>

    <div class="main-layout">
        <!-- LEFT: CONTROLS -->
        <div class="control-panel">
            
            <!-- RESISTOR TOPOLOGY -->
            <div class="panel-section">
                <div class="panel-title">Resistor Network Topology</div>
                <div class="btn-group">
                    <button id="btnSeries" class="active" onclick="setResistorTopology('series')">Series</button>
                    <button id="btnParallel" onclick="setResistorTopology('parallel')">Parallel</button>
                </div>
            </div>

            <!-- CELL SOURCE CONFIGURATION -->
            <div class="panel-section">
                <div class="panel-title">DC Power Source (Cells)</div>
                
                <div class="control-group">
                    <label>Cell Grouping: </label>
                    <div class="btn-group">
                        <button id="btnCellSeries" class="active" onclick="setCellTopology('series')">Cells in Series</button>
                        <button id="btnCellParallel" onclick="setCellTopology('parallel')">Cells in Parallel</button>
                    </div>
                </div>

                <div class="control-group" style="margin-top: 8px;">
                    <label>Number of Cells: <span id="numCellsVal" class="val-tag">2</span></label>
                    <input type="range" id="numCellsSlider" min="1" max="4" value="2" step="1" oninput="updateParams()">
                </div>

                <div class="control-group">
                    <label>Voltage per Cell (e): <span id="vCellVal" class="val-tag">6 V</span></label>
                    <input type="range" id="vCellSlider" min="1.5" max="12" value="6" step="0.5" oninput="updateParams()">
                </div>
            </div>

            <!-- RESISTORS CONFIGURATION -->
            <div class="panel-section">
                <div class="panel-title">Resistors Network</div>
                
                <div class="control-group">
                    <label>Number of Resistors: <span id="numResVal" class="val-tag">2</span></label>
                    <input type="range" id="numResSlider" min="1" max="4" value="2" step="1" oninput="updateParams()">
                </div>

                <div class="control-group" id="r1Group">
                    <label>Resistor 1 (R₁): <span id="r1Val" class="val-tag">10 Ω</span></label>
                    <input type="range" id="r1Slider" min="1" max="100" value="10" step="1" oninput="updateParams()">
                </div>

                <div class="control-group" id="r2Group">
                    <label>Resistor 2 (R₂): <span id="r2Val" class="val-tag">20 Ω</span></label>
                    <input type="range" id="r2Slider" min="1" max="100" value="20" step="1" oninput="updateParams()">
                </div>

                <div class="control-group" id="r3Group" style="display: none;">
                    <label>Resistor 3 (R₃): <span id="r3Val" class="val-tag">30 Ω</span></label>
                    <input type="range" id="r3Slider" min="1" max="100" value="30" step="1" oninput="updateParams()">
                </div>

                <div class="control-group" id="r4Group" style="display: none;">
                    <label>Resistor 4 (R₄): <span id="r4Val" class="val-tag">40 Ω</span></label>
                    <input type="range" id="r4Slider" min="1" max="100" value="40" step="1" oninput="updateParams()">
                </div>
            </div>

            <!-- LIGHT BULB LOAD -->
            <div class="panel-section">
                <div class="panel-title">Light Bulb Resistance (R_L)</div>
                <div class="control-group">
                    <label>Bulb Filament Resistance: <span id="loadVal" class="val-tag">10 Ω</span></label>
                    <input type="range" id="loadSlider" min="1" max="50" value="10" step="1" oninput="updateParams()">
                </div>
            </div>

        </div>

        <!-- RIGHT: WORKSPACE -->
        <div class="workspace">
            <!-- CANVAS -->
            <div class="canvas-container">
                <canvas id="circuitCanvas"></canvas>
            </div>

            <!-- SUMMARY BAR -->
            <div class="summary-bar">
                <div class="summary-item">
                    <span class="summary-label">Total Voltage (V_total)</span>
                    <span id="vTotalDisplay" class="summary-value">12.00 V</span>
                </div>
                <div class="summary-item">
                    <span class="summary-label">Total Resistance (R_eq)</span>
                    <span id="reqDisplay" class="summary-value">40.00 Ω</span>
                </div>
                <div class="summary-item">
                    <span class="summary-label">Total Current (I_total)</span>
                    <span id="itagDisplay" class="summary-value">0.30 A</span>
                </div>
                <div class="summary-item">
                    <span class="summary-label">Bulb Power (P_bulb)</span>
                    <span id="pDisplay" class="summary-value">0.90 W</span>
                </div>
            </div>
        </div>
    </div>

    <script>
        const canvas = document.getElementById('circuitCanvas');
        const ctx = canvas.getContext('2d');

        function resizeCanvas() {
            canvas.width = canvas.parentElement.clientWidth;
            canvas.height = canvas.parentElement.clientHeight;
        }
        window.addEventListener('resize', resizeCanvas);

        // CIRCUIT STATE
        let resTopology = 'series'; // 'series' or 'parallel'
        let cellTopology = 'series'; // 'series' or 'parallel'
        
        let numCells = 2;
        let vCell = 6.0;
        let Vtotal = 12.0;

        let numRes = 2;
        let R1 = 10, R2 = 20, R3 = 30, R4 = 40;
        let R_load = 10;

        let Req = 0, Itotal = 0;
        let I1 = 0, I2 = 0, I3 = 0, I4 = 0;
        let V1 = 0, V2 = 0, V3 = 0, V4 = 0;

        // ANIMATED ELECTRONS
        let electrons = [];
        const NUM_ELECTRONS = 50;
        for (let i = 0; i < NUM_ELECTRONS; i++) {
            electrons.push({ progress: Math.random(), branch: Math.floor(Math.random() * 4) });
        }

        // CONTROL ELEMENTS
        const numCellsSlider = document.getElementById('numCellsSlider');
        const vCellSlider = document.getElementById('vCellSlider');
        const numResSlider = document.getElementById('numResSlider');
        const r1Slider = document.getElementById('r1Slider');
        const r2Slider = document.getElementById('r2Slider');
        const r3Slider = document.getElementById('r3Slider');
        const r4Slider = document.getElementById('r4Slider');
        const loadSlider = document.getElementById('loadSlider');

        function setResistorTopology(type) {
            resTopology = type;
            document.getElementById('btnSeries').classList.toggle('active', type === 'series');
            document.getElementById('btnParallel').classList.toggle('active', type === 'parallel');
            updateParams();
        }

        function setCellTopology(type) {
            cellTopology = type;
            document.getElementById('btnCellSeries').classList.toggle('active', type === 'series');
            document.getElementById('btnCellParallel').classList.toggle('active', type === 'parallel');
            updateParams();
        }

        function updateParams() {
            numCells = parseInt(numCellsSlider.value);
            vCell = parseFloat(vCellSlider.value);
            
            // Calculate Total Voltage based on cell arrangement
            if (cellTopology === 'series') {
                Vtotal = numCells * vCell;
            } else {
                Vtotal = vCell; // Cells in parallel keep same voltage
            }

            numRes = parseInt(numResSlider.value);
            R1 = parseFloat(r1Slider.value);
            R2 = parseFloat(r2Slider.value);
            R3 = parseFloat(r3Slider.value);
            R4 = parseFloat(r4Slider.value);
            R_load = parseFloat(loadSlider.value);

            document.getElementById('numCellsVal').textContent = numCells;
            document.getElementById('vCellVal').textContent = \`\${vCell.toFixed(1)} V\`;
            document.getElementById('numResVal').textContent = numRes;
            document.getElementById('r1Val').textContent = \`\${R1} Ω\`;
            document.getElementById('r2Val').textContent = \`\${R2} Ω\`;
            document.getElementById('r3Val').textContent = \`\${R3} Ω\`;
            document.getElementById('r4Val').textContent = \`\${R4} Ω\`;
            document.getElementById('loadVal').textContent = \`\${R_load} Ω\`;

            document.getElementById('r2Group').style.display = numRes >= 2 ? 'flex' : 'none';
            document.getElementById('r3Group').style.display = numRes >= 3 ? 'flex' : 'none';
            document.getElementById('r4Group').style.display = numRes >= 4 ? 'flex' : 'none';

            // RESISTOR NETWORK CALCULATIONS
            if (resTopology === 'series') {
                let rSum = 0;
                if (numRes >= 1) rSum += R1;
                if (numRes >= 2) rSum += R2;
                if (numRes >= 3) rSum += R3;
                if (numRes >= 4) rSum += R4;

                Req = rSum + R_load;
                Itotal = Vtotal / Req;

                I1 = numRes >= 1 ? Itotal : 0;
                I2 = numRes >= 2 ? Itotal : 0;
                I3 = numRes >= 3 ? Itotal : 0;
                I4 = numRes >= 4 ? Itotal : 0;

                V1 = I1 * R1; V2 = I2 * R2; V3 = I3 * R3; V4 = I4 * R4;
            } else {
                let invR = (1 / R1) + (numRes >= 2 ? (1 / R2) : 0) + (numRes >= 3 ? (1 / R3) : 0) + (numRes >= 4 ? (1 / R4) : 0);
                let R_parallel_comb = 1 / invR;

                Req = R_parallel_comb + R_load;
                Itotal = Vtotal / Req;

                let V_parallel_bank = Itotal * R_parallel_comb;

                V1 = V_parallel_bank;
                V2 = numRes >= 2 ? V_parallel_bank : 0;
                V3 = numRes >= 3 ? V_parallel_bank : 0;
                V4 = numRes >= 4 ? V_parallel_bank : 0;

                I1 = V_parallel_bank / R1;
                I2 = numRes >= 2 ? V_parallel_bank / R2 : 0;
                I3 = numRes >= 3 ? V_parallel_bank / R3 : 0;
                I4 = numRes >= 4 ? V_parallel_bank / R4 : 0;
            }

            let bulbPower = (Itotal * Itotal) * R_load;

            document.getElementById('vTotalDisplay').textContent = \`\${Vtotal.toFixed(2)} V\`;
            document.getElementById('reqDisplay').textContent = \`\${Req.toFixed(2)} Ω\`;
            document.getElementById('itagDisplay').textContent = \`\${Itotal.toFixed(2)} A\`;
            document.getElementById('pDisplay').textContent = \`\${bulbPower.toFixed(2)} W\`;
        }

        // DRAW ANALOG METER WITH DIAL GRADUATIONS AND MOVING POINTER
        function drawAnalogInstrument(x, y, type, val, maxVal, labelStr, color) {
            ctx.save();
            ctx.translate(x, y);

            let radius = 26;

            // Instrument Housing
            ctx.beginPath();
            ctx.arc(0, 0, radius, 0, Math.PI * 2);
            ctx.fillStyle = '#1e293b';
            ctx.fill();
            ctx.strokeStyle = color;
            ctx.lineWidth = 2.5;
            ctx.stroke();

            // Dial Arc
            ctx.beginPath();
            ctx.arc(0, 2, 18, Math.PI * 0.8, Math.PI * 2.2);
            ctx.strokeStyle = '#475569';
            ctx.lineWidth = 1.5;
            ctx.stroke();

            // Graduated Scale Marks
            let startAngle = Math.PI * 0.8;
            let endAngle = Math.PI * 2.2;
            let ticks = 5;

            for (let i = 0; i <= ticks; i++) {
                let angle = startAngle + (i / ticks) * (endAngle - startAngle);
                let innerR = 15;
                let outerR = 18;

                let x1 = innerR * Math.cos(angle);
                let y1 = innerR * Math.sin(angle) + 2;
                let x2 = outerR * Math.cos(angle);
                let y2 = outerR * Math.sin(angle) + 2;

                ctx.beginPath();
                ctx.moveTo(x1, y1);
                ctx.lineTo(x2, y2);
                ctx.strokeStyle = '#94a3b8';
                ctx.lineWidth = 1;
                ctx.stroke();
            }

            // Pointer Needle Deflection Calculation
            let fraction = 0;
            var needleAngle = 0;
            if (type === 'G') {
                // Galvanometer (Center Zero)
                fraction = Math.min(Math.max(val / maxVal, -1.0), 1.0);
                needleAngle = Math.PI * 1.5 + (fraction * (Math.PI * 0.6));
            } else {
                // Voltmeter / Ammeter
                fraction = Math.min(Math.max(val / maxVal, 0.0), 1.0);
                needleAngle = Math.PI * 0.8 + (fraction * (Math.PI * 1.4));
            }

            // Needle
            ctx.beginPath();
            ctx.moveTo(0, 2);
            ctx.lineTo(16 * Math.cos(needleAngle), 2 + 16 * Math.sin(needleAngle));
            ctx.strokeStyle = color;
            ctx.lineWidth = 2;
            ctx.stroke();

            // Pivot
            ctx.beginPath();
            ctx.arc(0, 2, 3, 0, Math.PI * 2);
            ctx.fillStyle = '#cbd5e1';
            ctx.fill();

            // Instrument Label
            ctx.fillStyle = '#f8fafc';
            ctx.font = 'bold 10px sans-serif';
            ctx.textAlign = 'center';
            ctx.fillText(labelStr, 0, -12);

            // Readout Value below instrument
            ctx.fillStyle = color;
            ctx.font = 'bold 9px monospace';
            let formattedVal = (type === 'G') ? \`\${(val * 1000).toFixed(0)}mA\` : \`\${val.toFixed(1)}\${type}\`;
            ctx.fillText(formattedVal, 0, 22);

            ctx.restore();
        }

        // REALISTIC LIGHT BULB WITH FINE TUNGSTEN FILAMENT
        function drawRealisticBulb(x, y, current, loadR) {
            ctx.save();
            ctx.translate(x, y);

            // Brightness factor from power (I^2 * R)
            let power = (current * current) * loadR;
            let maxPowerRef = 15.0; // Reference full power scale
            let glowRatio = Math.min(power / maxPowerRef, 1.0);

            // Dynamic Radiating Glow Aura
            if (glowRatio > 0.02) {
                let auraRadius = 25 + glowRatio * 35;
                let glowGrad = ctx.createRadialGradient(0, -5, 2, 0, -5, auraRadius);
                glowGrad.addColorStop(0, \`rgba(254, 240, 138, \${0.9 * glowRatio})\`);
                glowGrad.addColorStop(0.4, \`rgba(245, 158, 11, \${0.5 * glowRatio})\`);
                glowGrad.addColorStop(1, 'rgba(245, 158, 11, 0)');
                ctx.beginPath();
                ctx.arc(0, -5, auraRadius, 0, Math.PI * 2);
                ctx.fillStyle = glowGrad;
                ctx.fill();
            }

            // Glass Envelope
            ctx.beginPath();
            ctx.arc(0, -8, 20, Math.PI * 0.75, Math.PI * 0.25, false);
            ctx.bezierCurveTo(12, 10, 8, 15, 8, 20);
            ctx.lineTo(-8, 20);
            ctx.bezierCurveTo(-8, 15, -12, 10, -20, -8);
            ctx.fillStyle = \`rgba(254, 240, 138, \${0.1 + glowRatio * 0.5})\`;
            ctx.fill();
            ctx.strokeStyle = '#94a3b8';
            ctx.lineWidth = 1.5;
            ctx.stroke();

            // Screw Base / Cap
            ctx.fillStyle = '#64748b';
            ctx.fillRect(-7, 20, 14, 8);
            ctx.fillStyle = '#475569';
            ctx.fillRect(-5, 28, 10, 4);

            // Internal Support Lead Wires
            ctx.strokeStyle = '#cbd5e1';
            ctx.lineWidth = 1.2;
            ctx.beginPath();
            ctx.moveTo(-5, 18); ctx.lineTo(-4, -2);
            ctx.moveTo(5, 18); ctx.lineTo(4, -2);
            ctx.stroke();

            // Realistic Coiled Tungsten Filament
            ctx.beginPath();
            let filX = -4;
            ctx.moveTo(filX, -2);
            for (let i = 0; i <= 6; i++) {
                let fx = -4 + (i * 1.33);
                let fy = -2 + (i % 2 === 0 ? -4 : 0);
                ctx.lineTo(fx, fy);
            }
            ctx.lineTo(4, -2);

            // Filament Color Glow based on current
            if (glowRatio > 0.02) {
                ctx.strokeStyle = \`rgb(255, \${Math.floor(200 + glowRatio * 55)}, \${Math.floor(150 * glowRatio)})\`;
                ctx.shadowColor = '#fef08a';
                ctx.shadowBlur = 10 * glowRatio;
            } else {
                ctx.strokeStyle = '#64748b';
                ctx.shadowBlur = 0;
            }
            ctx.lineWidth = 1.8;
            ctx.stroke();

            ctx.shadowBlur = 0; // reset shadow

            // Label
            ctx.fillStyle = '#f8fafc';
            ctx.font = 'bold 11px sans-serif';
            ctx.textAlign = 'center';
            ctx.fillText(\`Bulb (\${R_load}Ω)\`, 0, 42);

            ctx.restore();
        }

        // BATTERY PACK DRAWING ON CIRCUIT PATH
        function drawBatteryPack(x, y, isVertical) {
            ctx.save();
            ctx.translate(x, y);

            ctx.fillStyle = '#1e293b';
            ctx.strokeStyle = '#38bdf8';
            ctx.lineWidth = 2;

            if (cellTopology === 'series') {
                // Series Cells
                let boxH = 20 + numCells * 22;
                ctx.fillRect(-35, -boxH / 2, 70, boxH);
                ctx.strokeRect(-35, -boxH / 2, 70, boxH);

                for (let i = 0; i < numCells; i++) {
                    let cy = -boxH / 2 + 20 + i * 22;
                    // Long + Plate
                    ctx.strokeStyle = '#22c55e'; ctx.lineWidth = 2.5;
                    ctx.beginPath(); ctx.moveTo(-18, cy - 5); ctx.lineTo(18, cy - 5); ctx.stroke();
                    // Short - Plate
                    ctx.strokeStyle = '#ef4444'; ctx.lineWidth = 3.5;
                    ctx.beginPath(); ctx.moveTo(-10, cy + 5); ctx.lineTo(10, cy + 5); ctx.stroke();
                }
            } else {
                // Parallel Cells
                let boxH = 75;
                ctx.fillRect(-45, -boxH / 2, 90, boxH);
                ctx.strokeRect(-45, -boxH / 2, 90, boxH);

                let cellStep = 70 / (numCells + 1);
                for (let i = 1; i <= numCells; i++) {
                    let cx = -45 + i * cellStep;
                    // Long + Plate
                    ctx.strokeStyle = '#22c55e'; ctx.lineWidth = 2.5;
                    ctx.beginPath(); ctx.moveTo(cx, -15); ctx.lineTo(cx, 0); ctx.stroke();
                    // Short - Plate
                    ctx.strokeStyle = '#ef4444'; ctx.lineWidth = 3.5;
                    ctx.beginPath(); ctx.moveTo(cx, 8); ctx.lineTo(cx, 18); ctx.stroke();
                }
            }

            // Voltage Value Tag printed right on circuit body
            ctx.fillStyle = '#22c55e';
            ctx.font = 'bold 12px sans-serif';
            ctx.textAlign = 'center';
            ctx.fillText(\`\${Vtotal.toFixed(1)} V\`, 0, cellTopology === 'series' ? 0 : -25);
            
            ctx.fillStyle = '#94a3b8';
            ctx.font = '10px sans-serif';
            ctx.fillText(\`(\${numCells} \${cellTopology === 'series' ? 'Series' : 'Parallel'} Cells)\`, 0, cellTopology === 'series' ? 14 : 28);

            ctx.restore();
        }

        function drawResistorSymbol(x, y, label, valStr, isVertical) {
            ctx.save();
            ctx.translate(x, y);
            if (isVertical) ctx.rotate(Math.PI / 2);

            ctx.strokeStyle = '#f59e0b';
            ctx.lineWidth = 3;
            ctx.beginPath();
            ctx.moveTo(-28, 0);
            ctx.lineTo(-20, -9);
            ctx.lineTo(-10, 9);
            ctx.lineTo(0, -9);
            ctx.lineTo(10, 9);
            ctx.lineTo(20, -9);
            ctx.lineTo(28, 0);
            ctx.stroke();

            ctx.fillStyle = '#f8fafc';
            ctx.font = 'bold 12px sans-serif';
            ctx.textAlign = 'center';
            ctx.fillText(label, 0, isVertical ? -20 : -18);
            ctx.fillStyle = '#38bdf8';
            ctx.font = '11px sans-serif';
            ctx.fillText(valStr, 0, isVertical ? 28 : 22);

            ctx.restore();
        }

        // MAIN CANVAS RENDER
        function drawCircuit() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            const w = canvas.width;
            const h = canvas.height;
            const padX = 90;
            const padY = 65;

            const left = padX;
            const right = w - padX;
            const top = padY;
            const bottom = h - padY;

            ctx.lineWidth = 4;
            ctx.strokeStyle = '#cbd5e1';

            // --- LEFT VERTICAL WIRE WITH BATTERY PACK ---
            ctx.beginPath();
            ctx.moveTo(left, top);
            ctx.lineTo(left, h / 2 - 55);
            ctx.moveTo(left, h / 2 + 55);
            ctx.lineTo(left, bottom);
            ctx.stroke();

            drawBatteryPack(left, h / 2, true);

            // --- VOLTMETER IN PARALLEL ACROSS POWER SOURCE ---
            ctx.strokeStyle = '#ef4444';
            ctx.lineWidth = 2;
            ctx.setLineDash([4, 4]);
            ctx.beginPath();
            ctx.moveTo(left, top + 15); ctx.lineTo(left - 50, top + 15); ctx.lineTo(left - 50, bottom - 15); ctx.lineTo(left, bottom - 15);
            ctx.stroke();
            ctx.setLineDash([]);
            drawAnalogInstrument(left - 50, h / 2, 'V', Vtotal, 50, 'Voltmeter', '#ef4444');

            // --- BOTTOM WIRE: GALVANOMETER, AMMETER & BULB ---
            let wireY = bottom;
            let sectionW = (right - left) / 3;

            // Wire 1
            ctx.strokeStyle = '#cbd5e1'; ctx.lineWidth = 4;
            ctx.beginPath(); ctx.moveTo(left, wireY); ctx.lineTo(left + sectionW * 0.7 - 26, wireY); ctx.stroke();

            // Galvanometer (G)
            let gX = left + sectionW * 0.7;
            drawAnalogInstrument(gX, wireY, 'G', Itotal, 0.5, 'Galvanometer', '#f59e0b');

            // Wire 2
            ctx.beginPath(); ctx.moveTo(gX + 26, wireY); ctx.lineTo(left + sectionW * 1.5 - 26, wireY); ctx.stroke();

            // Ammeter (A)
            let aX = left + sectionW * 1.5;
            drawAnalogInstrument(aX, wireY, 'A', Itotal, 5.0, 'Ammeter', '#38bdf8');

            // Wire 3
            ctx.beginPath(); ctx.moveTo(aX + 26, wireY); ctx.lineTo(left + sectionW * 2.3 - 20, wireY); ctx.stroke();

            // Light Bulb Load
            let bulbX = left + sectionW * 2.3;
            drawRealisticBulb(bulbX, wireY, Itotal, R_load);

            // Wire 4
            ctx.beginPath(); ctx.moveTo(bulbX + 20, wireY); ctx.lineTo(right, wireY); ctx.stroke();

            // --- RESISTORS NETWORK ---
            if (resTopology === 'series') {
                drawSeriesResistors(left, right, top);
            } else {
                drawParallelResistors(left, right, top, bottom);
            }

            // --- ANIMATED ELECTRONS ---
            animateElectrons(left, right, top, bottom);
        }

        function drawSeriesResistors(left, right, top) {
            ctx.strokeStyle = '#cbd5e1';
            ctx.lineWidth = 4;
            ctx.beginPath();
            ctx.moveTo(left, top);

            let step = (right - left) / (numRes + 1);
            let rList = [
                { name: 'R₁', val: \`\${R1}Ω\`, v: V1 },
                { name: 'R₂', val: \`\${R2}Ω\`, v: V2 },
                { name: 'R₃', val: \`\${R3}Ω\`, v: V3 },
                { name: 'R₄', val: \`\${R4}Ω\`, v: V4 }
            ];

            for (let i = 1; i <= numRes; i++) {
                let rx = left + step * i;
                ctx.lineTo(rx - 28, top);
                ctx.stroke();

                drawResistorSymbol(rx, top, rList[i - 1].name, \`\${rList[i - 1].val} (\${rList[i - 1].v.toFixed(1)}V)\`, false);

                ctx.beginPath();
                ctx.moveTo(rx + 28, top);
            }

            ctx.lineTo(right, top);
            ctx.lineTo(right, canvas.height - 65);
            ctx.stroke();
        }

        function drawParallelResistors(left, right, top, bottom) {
            ctx.strokeStyle = '#cbd5e1';
            ctx.lineWidth = 4;

            let count = numRes;
            let availableHeight = bottom - top - 40;
            let branchStep = availableHeight / (count - 1 || 1);

            let rList = [
                { name: 'R₁', val: \`\${R1}Ω\`, current: I1 },
                { name: 'R₂', val: \`\${R2}Ω\`, current: I2 },
                { name: 'R₃', val: \`\${R3}Ω\`, current: I3 },
                { name: 'R₄', val: \`\${R4}Ω\`, current: I4 }
            ];

            ctx.beginPath();
            ctx.moveTo(left, top);
            ctx.lineTo(right, top);
            ctx.moveTo(right, top);
            ctx.lineTo(right, bottom);
            ctx.stroke();

            for (let i = 0; i < count; i++) {
                let branchY = top + (count === 1 ? availableHeight / 2 : i * branchStep);
                let midX = (left + right) / 2;

                ctx.beginPath();
                ctx.moveTo(left + 60, top);
                ctx.lineTo(left + 60, branchY);
                ctx.lineTo(midX - 30, branchY);
                ctx.stroke();

                drawResistorSymbol(midX, branchY, rList[i].name, \`\${rList[i].val} (\${rList[i].current.toFixed(2)}A)\`, false);

                ctx.beginPath();
                ctx.moveTo(midX + 30, branchY);
                ctx.lineTo(right - 60, branchY);
                ctx.lineTo(right - 60, top);
                ctx.stroke();

                // Node Dots
                ctx.fillStyle = '#38bdf8';
                ctx.beginPath();
                ctx.arc(left + 60, top, 4, 0, Math.PI * 2);
                ctx.arc(right - 60, top, 4, 0, Math.PI * 2);
                ctx.fill();
            }
        }

        function animateElectrons(left, right, top, bottom) {
            let speed = (Itotal / 4.0) * 0.008;
            if (speed <= 0) return;

            ctx.fillStyle = '#fef08a';

            electrons.forEach(function(e) {
                e.progress = (e.progress + speed) % 1.0;
                let pos = (resTopology === 'series') ? 
                    getSeriesPosition(e.progress, left, right, top, bottom) : 
                    getParallelPosition(e.progress, e.branch, left, right, top, bottom);

                ctx.beginPath();
                ctx.arc(pos.x, pos.y, 3.5, 0, Math.PI * 2);
                ctx.fill();
            });
        }

        function getSeriesPosition(p, left, right, top, bottom) {
            let totalLen = (right - left) * 2 + (bottom - top) * 2;
            let d = p * totalLen;

            if (d < (right - left)) return { x: left + d, y: top };
            d -= (right - left);
            if (d < (bottom - top)) return { x: right, y: top + d };
            d -= (bottom - top);
            if (d < (right - left)) return { x: right - d, y: bottom };
            d -= (right - left);
            return { x: left, y: bottom - d };
        }

        function getParallelPosition(p, branchIndex, left, right, top, bottom) {
            let count = numRes;
            let activeBranch = branchIndex % count;
            let availableHeight = bottom - top - 40;
            let branchStep = availableHeight / (count - 1 || 1);
            let branchY = top + (count === 1 ? availableHeight / 2 : activeBranch * branchStep);

            if (p < 0.2) {
                return { x: left + (p / 0.2) * 60, y: top };
            } else if (p < 0.35) {
                let subP = (p - 0.2) / 0.15;
                return { x: left + 60, y: top + subP * (branchY - top) };
            } else if (p < 0.65) {
                let subP = (p - 0.35) / 0.3;
                return { x: (left + 60) + subP * (right - 120 - left), y: branchY };
            } else if (p < 0.8) {
                let subP = (p - 0.65) / 0.15;
                return { x: right - 60, y: branchY - subP * (branchY - top) };
            } else if (p < 0.9) {
                let subP = (p - 0.8) / 0.1;
                return { x: (right - 60) + subP * 60, y: top };
            } else {
                let subP = (p - 0.9) / 0.1;
                if (subP < 0.4) {
                    return { x: right, y: top + (subP / 0.4) * (bottom - top) };
                } else if (subP < 0.8) {
                    return { x: right - ((subP - 0.4) / 0.4) * (right - left), y: bottom };
                } else {
                    return { x: left, y: bottom - ((subP - 0.8) / 0.2) * (bottom - top) };
                }
            }
        }

        function loop() {
            drawCircuit();
            requestAnimationFrame(loop);
        }

        resizeCanvas();
        updateParams();
        loop();
    </script>
</body>
</html>`,
    isCustomImport: true,
    authorEmail: "ndunj123@gmail.com",
    authorName: "Axiom Creator",
    createdAt: "2026-08-16"
  },
  {
    id: "sim-micrometer-screw-gauge",
    title: "Micrometer Screw Gauge Teaching Simulator",
    tagline: "Precision Metrology, Main Scale (Sleeve) & 0.01mm Circular Thimble Vernier Reading",
    discipline: "physics",
    gradeLevel: ["Middle School (6-8)", "High School (9-12)", "AP / IB STEM"],
    standards: ["HS-PS1-2", "IB Physics (Topic 1: Measurement & Uncertainties)", "CCSS.MATH.HSN.Q.A.1", "MS-ETS1-4"],
    description: "Master precise physical metrology and dimensional measurement using an interactive micrometer screw gauge. Measure thicknesses down to 0.01 mm (10 micrometers) by combining the Sleeve Main Scale Reading (MSR with 0.5 mm subdivisions) and Circular Thimble Scale Reading (CSR). Features interactive anvil/spindle gap rendering, object measurement display, answer hiding for formative student quizzes, and graduated pitch calibrations.",
    learningObjectives: [
      "Interpret linear Main Scale Readings (MSR) on the sleeve barrel including 1.0 mm and 0.5 mm pitch marks",
      "Read the 50-division circular Thimble Scale (CSR) with 0.01 mm least count precision",
      "Calculate total thickness (Total = MSR + CSR × 0.01 mm) for physical specimens clamped in the spindle gap",
      "Practice formative self-assessment using the interactive hide/show answer classroom mode"
    ],
    thumbnailGradient: "from-slate-700 via-blue-700 to-indigo-950",
    badgeColor: "bg-blue-500/10 text-blue-400 border-blue-500/20",
    iconName: "Ruler",
    rating: 5.0,
    reviewCount: 54,
    teacherCount: 285,
    licenseType: "Academic STEM Classroom & Institutional License",
    pricing: {
      singleTeacher: 19,
      schoolDepartment: 200,
      districtUnlimited: 400
    },
    features: [
      "Interactive mechanical micrometer with C-frame, anvil, moving spindle, datum line sleeve, and knurled thimble",
      "Dual-range controls for Main Sleeve Scale (0 to 25 mm at 0.5 mm steps) and Circular Thimble Scale (0 to 49 divisions)",
      "Dynamic clamped specimen thickness visualization with real-time gap scaling",
      "Formative classroom assessment mode with Toggle/Hide Answer button and instant reset",
      "MSR, CSR, and Total Reading telemetry cards with least-count breakdown"
    ],
    parameterDefaults: {
      mainScale: 7.0,
      thimbleDivs: 38
    },
    parameterControls: [
      {
        key: "mainScale",
        label: "Main Scale (Sleeve)",
        min: 0,
        max: 25,
        step: 0.5,
        unit: "mm",
        description: "Coarse measurement reading along the horizontal datum sleeve"
      },
      {
        key: "thimbleDivs",
        label: "Thimble Scale (0.01 mm/div)",
        min: 0,
        max: 49,
        step: 1,
        unit: "div",
        description: "Fine circular scale divisions on the rotating bevel thimble"
      }
    ],
    sampleChallenges: [
      {
        id: "ch-micro-1",
        title: "Measure 12.84 mm Thickness",
        instruction: "Set the Main Scale to 12.50 mm and adjust the Circular Thimble Scale to 34 divisions to measure a specimen of exactly 12.84 mm.",
        targetMetric: "Total Reading",
        targetValue: 12.84,
        tolerance: 0.005,
        currentValueKey: "totalMm",
        rewardBadge: "Metrologist"
      }
    ],
    previewFacts: [
      "A standard micrometer screw gauge has a thread pitch of 0.5 mm and 50 circular divisions on the thimble, providing a precision (least count) of 0.5 mm / 50 = 0.01 mm (10 µm).",
      "Micrometers were invented in the 17th century by William Gascoigne as an enhancement to the astronomical telescope, later adapted for benchtop machining by Palmer and Brown & Sharpe."
    ],
    isHtmlApp: true,
    htmlContent: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Micrometer Screw Gauge Teaching Simulation</title>
    <style>
        :root {
            --bg-color: #f8fafc;
            --card-bg: #ffffff;
            --primary: #2563eb;
            --primary-hover: #1d4ed8;
            --text-dark: #0f172a;
            --text-muted: #64748b;
            --metal-dark: #334155;
            --metal-light: #94a3b8;
            --thimble-bg: #cbd5e1;
            --accent-red: #dc2626;
        }

        * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
            font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
        }

        body {
            background-color: var(--bg-color);
            color: var(--text-dark);
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
            padding: 20px;
        }

        .container {
            background-color: var(--card-bg);
            border-radius: 12px;
            box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1);
            width: 100%;
            max-width: 900px;
            padding: 24px;
            display: flex;
            flex-direction: column;
            gap: 20px;
        }

        header {
            text-align: center;
            border-bottom: 2px solid #f1f5f9;
            padding-bottom: 12px;
        }

        header h1 {
            font-size: 1.5rem;
            color: var(--text-dark);
        }

        header p {
            font-size: 0.9rem;
            color: var(--text-muted);
        }

        .canvas-container {
            width: 100%;
            background: #ffffff;
            border: 1px solid #e2e8f0;
            border-radius: 8px;
            overflow: hidden;
            display: flex;
            justify-content: center;
            align-items: center;
            position: relative;
        }

        canvas {
            width: 100%;
            max-width: 800px;
            height: auto;
        }

        .controls {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 16px;
            background-color: #f8fafc;
            padding: 16px;
            border-radius: 8px;
            border: 1px solid #e2e8f0;
        }

        .control-group {
            display: flex;
            flex-direction: column;
            gap: 6px;
        }

        .control-group label {
            font-size: 0.875rem;
            font-weight: 600;
            display: flex;
            justify-content: space-between;
        }

        input[type="range"] {
            width: 100%;
            height: 6px;
            border-radius: 3px;
            background: #cbd5e1;
            outline: none;
            accent-color: var(--primary);
            cursor: pointer;
        }

        .button-group {
            display: flex;
            gap: 12px;
            justify-content: center;
            margin-top: 4px;
        }

        .btn {
            padding: 8px 16px;
            border-radius: 6px;
            border: none;
            font-weight: 600;
            font-size: 0.875rem;
            cursor: pointer;
            transition: all 0.2s;
        }

        .btn-primary {
            background-color: var(--primary);
            color: white;
        }

        .btn-primary:hover {
            background-color: var(--primary-hover);
        }

        .btn-secondary {
            background-color: #e2e8f0;
            color: var(--text-dark);
        }

        .btn-secondary:hover {
            background-color: #cbd5e1;
        }

        .readout {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
            gap: 12px;
            text-align: center;
        }

        .readout-card {
            background: #f1f5f9;
            padding: 12px;
            border-radius: 8px;
            border: 1px solid #e2e8f0;
        }

        .readout-card.total {
            background: #eff6ff;
            border-color: #bfdbfe;
        }

        .readout-card .title {
            font-size: 0.75rem;
            text-transform: uppercase;
            font-weight: 700;
            color: var(--text-muted);
            margin-bottom: 4px;
        }

        .readout-card .value {
            font-size: 1.25rem;
            font-weight: 700;
            color: var(--text-dark);
        }

        .readout-card.total .value {
            color: var(--primary);
        }

        .hidden-value {
            filter: blur(5px);
            user-select: none;
        }
    </style>
</head>
<body>

<div class="container">
    <header>
        <h1>Micrometer Screw Gauge Interactive Simulator</h1>
        <p>Interactive instructional tool for teaching main scale and thimble readings</p>
    </header>

    <div class="canvas-container">
        <canvas id="micrometerCanvas" width="800" height="300"></canvas>
    </div>

    <div class="controls">
        <div class="control-group">
            <label for="mainScaleInput">
                <span>Main Scale (Sleeve)</span>
                <span id="mainScaleVal">7.00 mm</span>
            </label>
            <input type="range" id="mainScaleInput" min="0" max="25" step="0.5" value="7">
        </div>

        <div class="control-group">
            <label for="thimbleInput">
                <span>Thimble Scale (0.01 mm / div)</span>
                <span id="thimbleVal">38 div (0.38 mm)</span>
            </label>
            <input type="range" id="thimbleInput" min="0" max="49" step="1" value="38">
        </div>
    </div>

    <div class="button-group">
        <button class="btn btn-secondary" id="toggleAnswerBtn">Hide Answer</button>
        <button class="btn btn-primary" id="resetBtn">Reset to Default</button>
    </div>

    <div class="readout">
        <div class="readout-card">
            <div class="title">Main Scale Reading (MSR)</div>
            <div class="value" id="msrDisplay">7.00 mm</div>
        </div>
        <div class="readout-card">
            <div class="title">Circular Scale Reading (CSR)</div>
            <div class="value" id="csrDisplay">0.38 mm</div>
        </div>
        <div class="readout-card total">
            <div class="title">Total Reading</div>
            <div class="value" id="totalDisplay">7.38 mm</div>
        </div>
    </div>
</div>

<script>
    const canvas = document.getElementById('micrometerCanvas');
    const ctx = canvas.getContext('2d');

    const mainScaleInput = document.getElementById('mainScaleInput');
    const thimbleInput = document.getElementById('thimbleInput');
    const mainScaleVal = document.getElementById('mainScaleVal');
    const thimbleVal = document.getElementById('thimbleVal');

    const msrDisplay = document.getElementById('msrDisplay');
    const csrDisplay = document.getElementById('csrDisplay');
    const totalDisplay = document.getElementById('totalDisplay');

    const toggleAnswerBtn = document.getElementById('toggleAnswerBtn');
    const resetBtn = document.getElementById('resetBtn');

    let showAnswer = true;

    function drawMicrometer() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        const msr = parseFloat(mainScaleInput.value);
        const csr = parseInt(thimbleInput.value, 10);
        const totalMm = msr + (csr * 0.01);

        // Scale factors
        const pxPerMm = 14; 
        const originX = 120;
        const originY = 150;

        // 1. Draw Frame
        ctx.fillStyle = '#334155';
        ctx.beginPath();
        ctx.arc(originX, originY, 90, 0.4 * Math.PI, 1.6 * Math.PI, false);
        ctx.lineTo(originX + 100, originY - 90);
        ctx.lineTo(originX + 100, originY + 90);
        ctx.closePath();
        ctx.fill();

        // Inner frame cutout
        ctx.fillStyle = '#ffffff';
        ctx.beginPath();
        ctx.arc(originX + 20, originY, 65, 0.4 * Math.PI, 1.6 * Math.PI, false);
        ctx.lineTo(originX + 80, originY - 65);
        ctx.lineTo(originX + 80, originY + 65);
        ctx.closePath();
        ctx.fill();

        // 2. Anvil (Left)
        ctx.fillStyle = '#64748b';
        ctx.fillRect(originX - 90, originY - 15, 20, 30);

        // 3. Spindle (Gap based on measurement)
        const gapPx = totalMm * pxPerMm;
        const sleeveStartX = originX - 5;
        
        ctx.fillStyle = '#94a3b8';
        ctx.fillRect(sleeveStartX - gapPx - 10, originY - 12, gapPx + 10, 24);

        // Object measured in gap (if gap > 0)
        if (totalMm > 0) {
            ctx.fillStyle = 'rgba(220, 38, 38, 0.2)';
            ctx.strokeStyle = '#dc2626';
            ctx.lineWidth = 1;
            ctx.fillRect(originX - 70, originY - 20, gapPx, 40);
            ctx.strokeRect(originX - 70, originY - 20, gapPx, 40);
        }

        // 4. Sleeve / Main Scale Barrel
        const sleeveWidth = 25 * pxPerMm + 60;
        ctx.fillStyle = '#cbd5e1';
        ctx.fillRect(sleeveStartX, originY - 22, sleeveWidth, 44);
        ctx.strokeStyle = '#475569';
        ctx.lineWidth = 1;
        ctx.strokeRect(sleeveStartX, originY - 22, sleeveWidth, 44);

        // Main Datum Line
        ctx.beginPath();
        ctx.strokeStyle = '#0f172a';
        ctx.lineWidth = 1.5;
        ctx.moveTo(sleeveStartX, originY);
        ctx.lineTo(sleeveStartX + sleeveWidth - 10, originY);
        ctx.stroke();

        // Sleeve Graduation Marks
        ctx.fillStyle = '#0f172a';
        ctx.font = '10px sans-serif';
        ctx.textAlign = 'center';

        for (let i = 0; i <= 25; i++) {
            const x = sleeveStartX + (i * pxPerMm);

            // Upper marks (1mm)
            ctx.beginPath();
            ctx.moveTo(x, originY);
            ctx.lineTo(x, originY - 12);
            ctx.stroke();

            if (i % 5 === 0) {
                ctx.fillText(i.toString(), x, originY - 15);
            }

            // Lower marks (0.5mm)
            if (i < 25) {
                const xHalf = x + (pxPerMm / 2);
                ctx.beginPath();
                ctx.moveTo(xHalf, originY);
                ctx.lineTo(xHalf, originY + 10);
                ctx.stroke();
            }
        }

        // 5. Thimble Position (Moves right with total mm)
        const thimbleX = sleeveStartX + (totalMm * pxPerMm);
        const thimbleWidth = 110;
        const thimbleRadius = 32;

        // Thimble Bevel (Conical Part)
        ctx.fillStyle = '#94a3b8';
        ctx.beginPath();
        ctx.moveTo(thimbleX, originY - thimbleRadius);
        ctx.lineTo(thimbleX + 25, originY - thimbleRadius - 5);
        ctx.lineTo(thimbleX + 25, originY + thimbleRadius + 5);
        ctx.lineTo(thimbleX, originY + thimbleRadius);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();

        // Thimble Handle
        ctx.fillStyle = '#64748b';
        ctx.fillRect(thimbleX + 25, originY - thimbleRadius - 5, thimbleWidth, (thimbleRadius + 5) * 2);
        ctx.strokeRect(thimbleX + 25, originY - thimbleRadius - 5, thimbleWidth, (thimbleRadius + 5) * 2);

        // Thimble Knurling Grip Effect
        ctx.strokeStyle = '#475569';
        ctx.lineWidth = 1;
        for (let k = thimbleX + 35; k < thimbleX + 25 + thimbleWidth - 10; k += 6) {
            ctx.beginPath();
            ctx.moveTo(k, originY - thimbleRadius - 4);
            ctx.lineTo(k, originY + thimbleRadius + 4);
            ctx.stroke();
        }

        // 6. Thimble Circular Scale Divisions
        ctx.strokeStyle = '#0f172a';
        ctx.fillStyle = '#0f172a';
        ctx.font = '10px sans-serif';
        ctx.textAlign = 'right';

        // Draw divisions on the bevel edge
        const pxPerDiv = 3.2; // Vertical distance per division on thimble
        for (let d = -10; d <= 10; d++) {
            let divNum = (csr + d) % 50;
            if (divNum < 0) divNum += 50;

            const yPos = originY - (d * pxPerDiv);

            // Keep within visual bounds of the bevel
            if (yPos >= originY - thimbleRadius + 2 && yPos <= originY + thimbleRadius - 2) {
                const isMajor = divNum % 5 === 0;
                const lineLen = isMajor ? 12 : 7;

                ctx.beginPath();
                ctx.moveTo(thimbleX, yPos);
                ctx.lineTo(thimbleX + lineLen, yPos);
                ctx.stroke();

                if (isMajor) {
                    ctx.fillText(divNum.toString(), thimbleX + 22, yPos + 3);
                }
            }
        }
    }

    function updateValues() {
        const msr = parseFloat(mainScaleInput.value);
        const csr = parseInt(thimbleInput.value, 10);
        const totalMm = msr + (csr * 0.01);

        mainScaleVal.textContent = msr.toFixed(2) + ' mm';
        thimbleVal.textContent = \`\${csr} div (\${(csr * 0.01).toFixed(2)} mm)\`;

        msrDisplay.textContent = msr.toFixed(2) + ' mm';
        csrDisplay.textContent = (csr * 0.01).toFixed(2) + ' mm';
        totalDisplay.textContent = totalMm.toFixed(2) + ' mm';

        drawMicrometer();
    }

    // Toggle Answer Visibility
    toggleAnswerBtn.addEventListener('click', () => {
        showAnswer = !showAnswer;
        if (showAnswer) {
            totalDisplay.classList.remove('hidden-value');
            toggleAnswerBtn.textContent = 'Hide Answer';
        } else {
            totalDisplay.classList.add('hidden-value');
            toggleAnswerBtn.textContent = 'Show Answer';
        }
    });

    // Reset Controls
    resetBtn.addEventListener('click', () => {
        mainScaleInput.value = 7.0;
        thimbleInput.value = 38;
        showAnswer = true;
        totalDisplay.classList.remove('hidden-value');
        toggleAnswerBtn.textContent = 'Hide Answer';
        updateValues();
    });

    mainScaleInput.addEventListener('input', updateValues);
    thimbleInput.addEventListener('input', updateValues);

    // Initial render
    updateValues();
</script>

</body>
</html>`,
    isCustomImport: true,
    authorEmail: "ndunj123@gmail.com",
    authorName: "Axiom Creator",
    createdAt: "2026-08-16"
  },
  {
    id: "sim-set-theory-venn-diagrams",
    title: "Set Theory & Venn Diagram Visualizer",
    tagline: "Explore 2-set and 3-set Venn diagrams, boolean set operations (union, intersection, difference, complement), and cardinality",
    discipline: "mathematics",
    gradeLevel: ["Middle School (6-8)", "High School (9-12)", "AP / IB STEM"],
    standards: ["CCSS.MATH.HSS.CP.A.1", "CCSS.MATH.HSS.CP.B.7", "NGSS SEP-4"],
    description: "Interact with 2-set and 3-set Venn diagrams in real time. Configure Universal set (U), Set A, Set B, and Set C elements, execute set operations (A ∪ B, A ∩ B, A - B, B - A, A', B', and triple sets A ∪ B ∪ C, A ∩ B ∩ C, A - (B ∪ C)), inspect individual atomic regions with locked highlighting, and calculate exact cardinalities.",
    learningObjectives: [
      "Define universal sets, subsets, disjoint sets, and calculate the cardinality |S| of arbitrary set combinations",
      "Visualize and evaluate union (∪), intersection (∩), set difference (-), and absolute complement (') operations",
      "Analyze 2-set and 3-set overlapping atomic regions and relate them to symbolic set notations and real-world classification models"
    ],
    thumbnailGradient: "from-pink-600 via-indigo-600 to-blue-600",
    badgeColor: "bg-pink-500/10 text-pink-400 border-pink-500/20",
    iconName: "Layers",
    rating: 5.0,
    reviewCount: 38,
    teacherCount: 142,
    licenseType: "Academic STEM Classroom & Institutional License",
    pricing: {
      singleTeacher: 19,
      schoolDepartment: 200,
      districtUnlimited: 400
    },
    features: [
      "Dynamic 2-set and 3-set interactive Venn diagram canvas with SVG mask and clip-path region isolation",
      "Full suite of Boolean set operations (Union, Intersection, Set Difference, and Complement)",
      "Interactive atomic region inspector with click-to-lock and hover feedback",
      "Cardinality calculator and preset configurations (Disjoint, Subsets, Standard Overlap, and Random Generator)"
    ],
    parameterDefaults: {
      setCount: 3,
      operation: "ABC_UNION"
    },
    parameterControls: [],
    sampleChallenges: [
      {
        id: "ch-set-1",
        title: "Disjoint Sets & Empty Intersection",
        instruction: "Select the Disjoint Sets preset and verify that the intersection A ∩ B yields the empty set ∅ with cardinality 0.",
        targetMetric: "Cardinality",
        targetValue: 0,
        tolerance: 0,
        currentValueKey: "cardinality",
        rewardBadge: "Logic Architect"
      },
      {
        id: "ch-set-2",
        title: "Triple Intersection Mastery",
        instruction: "In 3-set mode, find the elements belonging exclusively to the triple intersection A ∩ B ∩ C.",
        targetMetric: "Triple Intersection",
        targetValue: 1,
        tolerance: 0,
        currentValueKey: "tripleIntersection",
        rewardBadge: "Venn Champion"
      }
    ],
    previewFacts: [
      "John Venn introduced Venn diagrams in 1880 to represent categorical propositions in formal logic and probability theory.",
      "De Morgan's Laws state that (A ∪ B)' = A' ∩ B' and (A ∩ B)' = A' ∪ B', which are easily verified using Venn diagrams."
    ],
    isHtmlApp: true,
    htmlContent: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Set Theory & Venn Diagram Visualizer</title>
    <style>
        :root {
            --bg-gradient: linear-gradient(135deg, #0f172a 0%, #1e1b4b 50%, #311042 100%);
            --card-bg: rgba(255, 255, 255, 0.95);
            --card-glass: rgba(255, 255, 255, 0.08);
            --text-dark: #0f172a;
            --text-light: #f8fafc;
            --text-muted: #94a3b8;
            --border-light: rgba(255, 255, 255, 0.15);
            
            /* Radiant Palette */
            --color-a: #ec4899;      /* Hot Pink */
            --color-b: #3b82f6;      /* Electric Blue */
            --color-c: #8b5cf6;      /* Vibrant Purple */
            --accent-green: #10b981; /* Emerald Green */
            --accent-amber: #f59e0b; /* Golden Amber */
            --highlight: #6366f1;    /* Indigo Highlight */
        }

        * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
            font-family: 'Inter', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        }

        body {
            background: var(--bg-gradient);
            color: var(--text-light);
            min-height: 100vh;
            padding: 32px 24px;
            max-width: 1440px;
            margin: 0 auto;
        }

        header {
            background: rgba(255, 255, 255, 0.05);
            backdrop-filter: blur(16px);
            -webkit-backdrop-filter: blur(16px);
            border: 1px solid var(--border-light);
            border-radius: 20px;
            padding: 24px 36px;
            margin-bottom: 28px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
        }

        header h1 {
            font-size: 2rem;
            font-weight: 800;
            background: linear-gradient(90deg, #38bdf8, #a78bfa, #f472b6);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            letter-spacing: -0.5px;
        }

        header .subtitle {
            font-size: 0.95rem;
            color: var(--text-muted);
            margin-top: 4px;
        }

        .badge {
            background: linear-gradient(135deg, #6366f1, #a855f7);
            padding: 6px 16px;
            border-radius: 30px;
            font-size: 0.8rem;
            font-weight: 700;
            letter-spacing: 0.5px;
            box-shadow: 0 0 15px rgba(168, 85, 247, 0.4);
        }

        .container {
            display: grid;
            grid-template-columns: 400px 1fr;
            gap: 28px;
        }

        @media (max-width: 1024px) {
            .container {
                grid-template-columns: 1fr;
            }
        }

        .panel {
            background: var(--card-bg);
            border-radius: 24px;
            padding: 28px;
            color: var(--text-dark);
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.25);
            backdrop-filter: blur(10px);
        }

        .panel-header {
            font-size: 1.15rem;
            font-weight: 800;
            color: var(--text-dark);
            margin-bottom: 20px;
            padding-bottom: 10px;
            border-bottom: 2px solid #e2e8f0;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .mode-toggle {
            display: flex;
            background: #f1f5f9;
            padding: 5px;
            border-radius: 14px;
            gap: 6px;
            margin-bottom: 20px;
        }

        .mode-toggle button {
            flex: 1;
            padding: 10px;
            border: none;
            border-radius: 10px;
            font-weight: 700;
            font-size: 0.85rem;
            color: #64748b;
            background: transparent;
            cursor: pointer;
            transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .mode-toggle button.active {
            background: #ffffff;
            color: var(--highlight);
            box-shadow: 0 4px 12px rgba(99, 102, 241, 0.2);
        }

        .form-group {
            margin-bottom: 18px;
        }

        label {
            display: flex;
            align-items: center;
            gap: 8px;
            font-weight: 700;
            font-size: 0.8rem;
            margin-bottom: 8px;
            color: #475569;
            text-transform: uppercase;
            letter-spacing: 0.5px;
        }

        .dot-a { width: 10px; height: 10px; border-radius: 50%; background: var(--color-a); display: inline-block; }
        .dot-b { width: 10px; height: 10px; border-radius: 50%; background: var(--color-b); display: inline-block; }
        .dot-c { width: 10px; height: 10px; border-radius: 50%; background: var(--color-c); display: inline-block; }

        input[type="text"], select {
            width: 100%;
            padding: 12px 16px;
            border: 2px solid #e2e8f0;
            border-radius: 12px;
            font-size: 0.95rem;
            font-weight: 600;
            background-color: #f8fafc;
            color: var(--text-dark);
            outline: none;
            transition: all 0.2s;
        }

        input[type="text"]:focus, select:focus {
            border-color: var(--highlight);
            background-color: #ffffff;
            box-shadow: 0 0 0 4px rgba(99, 102, 241, 0.15);
        }

        .btn-group {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 10px;
            margin-top: 12px;
        }

        .btn-group button {
            padding: 11px 14px;
            background: #f1f5f9;
            border: 2px solid #e2e8f0;
            border-radius: 12px;
            cursor: pointer;
            font-weight: 700;
            font-size: 0.85rem;
            color: #475569;
            transition: all 0.2s ease;
        }

        .btn-group button:hover {
            background: #e2e8f0;
            color: var(--text-dark);
        }

        .btn-group button.active {
            background: linear-gradient(135deg, #6366f1, #4f46e5);
            color: #ffffff;
            border-color: #4f46e5;
            box-shadow: 0 6px 16px rgba(79, 70, 229, 0.3);
        }

        .btn-random {
            width: 100%;
            margin-top: 16px;
            background: linear-gradient(135deg, #10b981, #059669);
            color: #ffffff;
            border: none;
            border-radius: 12px;
            padding: 14px;
            font-weight: 800;
            font-size: 0.95rem;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 10px;
            box-shadow: 0 8px 20px rgba(16, 185, 129, 0.3);
            transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .btn-random:hover {
            transform: translateY(-2px);
            box-shadow: 0 12px 24px rgba(16, 185, 129, 0.4);
        }

        .venn-container {
            position: relative;
            width: 100%;
            height: 480px;
            background: linear-gradient(180deg, #ffffff 0%, #f8fafc 100%);
            border: 2px solid #e2e8f0;
            border-radius: 20px;
            overflow: hidden;
            box-shadow: inset 0 2px 8px rgba(0, 0, 0, 0.04);
        }

        svg {
            width: 100%;
            height: 100%;
        }

        .atomic-region {
            fill: #f1f5f9;
            fill-opacity: 0.2;
            stroke: transparent;
            cursor: pointer;
            transition: all 0.25s ease;
        }

        .atomic-region.op-active {
            fill: url(#activeGradient);
            fill-opacity: 0.65;
        }

        .atomic-region:hover {
            fill: #f59e0b !important;
            fill-opacity: 0.75 !important;
            filter: drop-shadow(0 0 12px rgba(245, 158, 11, 0.5));
        }

        .atomic-region.locked {
            fill: #f59e0b !important;
            fill-opacity: 0.85 !important;
            stroke: #d97706 !important;
            stroke-width: 3px !important;
            stroke-dasharray: 6,4;
        }

        .circle-stroke-a { fill: none; stroke: var(--color-a); stroke-width: 3.5; pointer-events: none; }
        .circle-stroke-b { fill: none; stroke: var(--color-b); stroke-width: 3.5; pointer-events: none; }
        .circle-stroke-c { fill: none; stroke: var(--color-c); stroke-width: 3.5; pointer-events: none; }

        .circle-label {
            font-weight: 800;
            font-size: 1.15rem;
            pointer-events: none;
        }

        .element-text {
            font-size: 0.85rem;
            fill: #1e293b;
            font-weight: 800;
            pointer-events: none;
            text-shadow: 0 1px 2px rgba(255, 255, 255, 0.8);
        }

        .inspector-card {
            background: linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%);
            border: 2px solid #86efac;
            border-left: 8px solid var(--accent-green);
            border-radius: 16px;
            padding: 18px 22px;
            margin-top: 20px;
            transition: all 0.3s ease;
        }

        .inspector-card.locked-card {
            background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%);
            border-color: #fcd34d;
            border-left-color: var(--accent-amber);
        }

        .inspector-card h4 {
            color: #14532d;
            font-size: 1rem;
            font-weight: 800;
            margin-bottom: 8px;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .inspector-card.locked-card h4 {
            color: #78350f;
        }

        .inspector-card p {
            color: #166534;
            font-size: 0.9rem;
            line-height: 1.5;
            font-weight: 500;
        }

        .inspector-card.locked-card p {
            color: #92400e;
        }

        .region-tag {
            background: #bbf7d0;
            color: #14532d;
            font-size: 0.75rem;
            padding: 4px 10px;
            border-radius: 20px;
            font-family: monospace;
            font-weight: 800;
        }

        .locked-card .region-tag {
            background: #fde68a;
            color: #78350f;
        }

        .results-grid {
            display: grid;
            grid-template-columns: 1fr 180px;
            gap: 16px;
            margin-top: 20px;
        }

        .result-box {
            background: #f8fafc;
            border: 2px solid #e2e8f0;
            border-radius: 16px;
            padding: 16px;
        }

        .result-title {
            font-size: 0.75rem;
            font-weight: 800;
            color: var(--highlight);
            margin-bottom: 6px;
            text-transform: uppercase;
            letter-spacing: 0.5px;
        }

        .result-value {
            font-size: 1.25rem;
            font-weight: 800;
            color: var(--text-dark);
            word-break: break-all;
        }
    </style>
</head>
<body>

    <header>
        <div>
            <h1>Set Theory Visualizer</h1>
            <div class="subtitle">Interactive Venn Diagrams & Standard Set Operations</div>
        </div>
        <div class="badge">PRO SIMULATOR</div>
    </header>

    <div class="container">
        <!-- Controls Panel -->
        <div class="panel">
            <div class="panel-header">Configuration</div>

            <div class="mode-toggle">
                <button id="btn-2sets" onclick="setSetCount(2)">2 Sets (A, B)</button>
                <button id="btn-3sets" class="active" onclick="setSetCount(3)">3 Sets (A, B, C)</button>
            </div>

            <div class="form-group">
                <label for="preset-select">Presets & Scenarios</label>
                <select id="preset-select" onchange="applyPreset(this.value)">
                    <option value="custom">Custom Input</option>
                    <option value="intersecting" selected>Standard Overlapping Sets</option>
                    <option value="disjoint">Disjoint Sets (No Overlap)</option>
                    <option value="subset">Subset (A ⊆ B)</option>
                </select>
            </div>

            <div class="form-group">
                <label>Universal Set (U)</label>
                <input type="text" id="input-U" value="1, 2, 3, 4, 5, 6, 7, 8, 9, 10" oninput="updateSimulation()">
            </div>

            <div class="form-group">
                <label><span class="dot-a"></span> Set A</label>
                <input type="text" id="input-A" value="1, 2, 3, 4, 5" oninput="updateSimulation()">
            </div>

            <div class="form-group">
                <label><span class="dot-b"></span> Set B</label>
                <input type="text" id="input-B" value="4, 5, 6, 7" oninput="updateSimulation()">
            </div>

            <div class="form-group" id="group-C">
                <label><span class="dot-c"></span> Set C</label>
                <input type="text" id="input-C" value="5, 6, 8, 9" oninput="updateSimulation()">
            </div>

            <button class="btn-random" onclick="generateRandomSets()">
                ✨ Generate Random Sets
            </button>

            <div class="panel-header" style="margin-top: 24px;">Set Operations</div>

            <div class="btn-group" id="op-buttons-2" style="display: none;">
                <button onclick="setOperation('A_UNION_B')" id="op-A_UNION_B">A ∪ B</button>
                <button onclick="setOperation('A_INTER_B')" id="op-A_INTER_B">A ∩ B</button>
                <button onclick="setOperation('A_DIFF_B')" id="op-A_DIFF_B">A - B</button>
                <button onclick="setOperation('B_DIFF_A')" id="op-B_DIFF_A">B - A</button>
                <button onclick="setOperation('A_COMP')" id="op-A_COMP">A' (Aᶜ)</button>
                <button onclick="setOperation('B_COMP')" id="op-B_COMP">B' (Bᶜ)</button>
                <button onclick="setOperation('NONE')" id="op-NONE">Clear</button>
            </div>

            <div class="btn-group" id="op-buttons-3">
                <button onclick="setOperation('ABC_UNION')" id="op-ABC_UNION" class="active">A ∪ B ∪ C</button>
                <button onclick="setOperation('ABC_INTER')" id="op-ABC_INTER">A ∩ B ∩ C</button>
                <button onclick="setOperation('A_ONLY')" id="op-A_ONLY">A - (B ∪ C)</button>
                <button onclick="setOperation('NONE')" id="op-NONE-3">Clear</button>
            </div>
        </div>

        <!-- Visualization Panel -->
        <div class="panel">
            <div class="panel-header">
                Interactive Canvas
                <span style="font-size: 0.8rem; font-weight: 600; color: #64748b;">Hover or click regions to inspect</span>
            </div>

            <div class="venn-container">
                <svg id="venn-svg" viewBox="0 0 600 420">
                    <defs>
                        <!-- Radiant Active Region Gradient -->
                        <linearGradient id="activeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stop-color="#6366f1" />
                            <stop offset="100%" stop-color="#a855f7" />
                        </linearGradient>

                        <!-- 2-Set Geometry -->
                        <circle id="c2A" cx="230" cy="210" r="120" />
                        <circle id="c2B" cx="370" cy="210" r="120" />

                        <!-- 3-Set Geometry (r=90) -->
                        <circle id="c3A" cx="260" cy="180" r="90" />
                        <circle id="c3B" cx="340" cy="180" r="90" />
                        <circle id="c3C" cx="300" cy="240" r="90" />

                        <!-- Clip Paths -->
                        <clipPath id="clipA"><use href="#c3A" /></clipPath>
                        <clipPath id="clipB"><use href="#c3B" /></clipPath>
                        <clipPath id="clipC"><use href="#c3C" /></clipPath>

                        <!-- Outer Subtraction Masks -->
                        <mask id="maskNotA"><rect width="600" height="420" fill="white"/><use href="#c3A" fill="black"/></mask>
                        <mask id="maskNotB"><rect width="600" height="420" fill="white"/><use href="#c3B" fill="black"/></mask>
                        <mask id="maskNotC"><rect width="600" height="420" fill="white"/><use href="#c3C" fill="black"/></mask>
                        
                        <mask id="maskNotBC">
                            <rect width="600" height="420" fill="white"/>
                            <use href="#c3B" fill="black"/>
                            <use href="#c3C" fill="black"/>
                        </mask>
                        <mask id="maskNotAC">
                            <rect width="600" height="420" fill="white"/>
                            <use href="#c3A" fill="black"/>
                            <use href="#c3C" fill="black"/>
                        </mask>
                        <mask id="maskNotAB">
                            <rect width="600" height="420" fill="white"/>
                            <use href="#c3A" fill="black"/>
                            <use href="#c3B" fill="black"/>
                        </mask>
                        <mask id="maskNotABC">
                            <rect width="600" height="420" fill="white"/>
                            <use href="#c3A" fill="black"/>
                            <use href="#c3B" fill="black"/>
                            <use href="#c3C" fill="black"/>
                        </mask>
                    </defs>

                    <g id="regions-layer"></g>
                </svg>
            </div>

            <!-- Inspector Card -->
            <div class="inspector-card" id="region-inspector">
                <h4 id="inspector-title">
                    <span>Region Inspector</span>
                    <span class="region-tag" id="inspector-tag">Hover or Click Region</span>
                </h4>
                <p id="inspector-desc">Move your cursor or click on any isolated region above to view its set notation and element composition.</p>
            </div>

            <div class="results-grid">
                <div class="result-box">
                    <div class="result-title">Active Operation Result</div>
                    <div class="result-value" id="result-set">{ }</div>
                </div>

                <div class="result-box">
                    <div class="result-title">Cardinality |Result|</div>
                    <div class="result-value" id="result-cardinality">0</div>
                </div>
            </div>
        </div>
    </div>

    <script>
        let mode = 3;
        let currentOp = 'ABC_UNION';
        let currentRegions = {};
        let lockedRegionKey = null;

        const regionMetadata = {
            onlyA: { title: "Set A Only", notation: "A - B", desc: "Elements exclusive to Set A." },
            onlyB: { title: "Set B Only", notation: "B - A", desc: "Elements exclusive to Set B." },
            AB: { title: "Intersection A & B", notation: "A ∩ B", desc: "Elements common to A and B." },
            outside: { title: "Exterior Universe", notation: "(A ∪ B)'", desc: "Elements in U outside A and B." },
            
            onlyA3: { title: "Set A Only", notation: "A - (B ∪ C)", desc: "Top-left area exclusive to Circle A." },
            onlyB3: { title: "Set B Only", notation: "B - (A ∪ C)", desc: "Top-right area exclusive to Circle B." },
            onlyC3: { title: "Set C Only", notation: "C - (A ∪ B)", desc: "Bottom area exclusive to Circle C." },
            AB3: { title: "Intersection A & B Only", notation: "(A ∩ B) - C", desc: "Top-center overlap between A and B." },
            AC3: { title: "Intersection A & C Only", notation: "(A ∩ C) - B", desc: "Mid-left overlap between A and C." },
            BC3: { title: "Intersection B & C Only", notation: "(B ∩ C) - A", desc: "Mid-right overlap between B and C." },
            ABC3: { title: "Triple Intersection", notation: "A ∩ B ∩ C", desc: "Symmetric center region shared by A, B, and C." },
            outside3: { title: "Exterior Universe", notation: "(A ∪ B ∪ C)'", desc: "Elements in Universal set U outside all circles." }
        };

        function parseSet(inputId) {
            const raw = document.getElementById(inputId).value;
            if (!raw.trim()) return [];
            return Array.from(new Set(raw.split(',').map(s => s.trim()).filter(s => s.length > 0)));
        }

        function generateRandomSets() {
            document.getElementById('preset-select').value = 'custom';
            const uSize = Math.floor(Math.random() * 6) + 8;
            const universalPool = Array.from({length: uSize}, (_, i) => i + 1);

            const getRandomSubset = () => {
                const count = Math.floor(Math.random() * (uSize - 3)) + 3;
                const shuffled = [...universalPool].sort(() => 0.5 - Math.random());
                return shuffled.slice(0, count).sort((a, b) => a - b);
            };

            document.getElementById('input-U').value = universalPool.join(', ');
            document.getElementById('input-A').value = getRandomSubset().join(', ');
            document.getElementById('input-B').value = getRandomSubset().join(', ');
            if (mode === 3) {
                document.getElementById('input-C').value = getRandomSubset().join(', ');
            }
            updateSimulation();
        }

        function setSetCount(n) {
            mode = n;
            lockedRegionKey = null;
            document.getElementById('btn-2sets').classList.toggle('active', n === 2);
            document.getElementById('btn-3sets').classList.toggle('active', n === 3);
            document.getElementById('group-C').style.display = n === 3 ? 'block' : 'none';
            document.getElementById('op-buttons-2').style.display = n === 2 ? 'grid' : 'none';
            document.getElementById('op-buttons-3').style.display = n === 3 ? 'grid' : 'none';
            currentOp = n === 2 ? 'A_UNION_B' : 'ABC_UNION';
            updateSimulation();
            updateInspectorUI(null);
        }

        function setOperation(op) {
            currentOp = op;
            const container = mode === 2 ? 'op-buttons-2' : 'op-buttons-3';
            document.querySelectorAll(\`#\${container} button\`).forEach(btn => btn.classList.remove('active'));
            const activeBtn = document.getElementById(\`op-\${op}\`);
            if (activeBtn) activeBtn.classList.add('active');
            updateSimulation();
        }

        function handleRegionClick(key, event) {
            if (event) event.stopPropagation();
            lockedRegionKey = (lockedRegionKey === key) ? null : key;
            updateInspectorUI(key);
            renderSVG(currentRegions, getActiveHighlightMap());
        }

        function handleRegionHover(key) {
            if (lockedRegionKey) return;
            updateInspectorUI(key);
        }

        function updateInspectorUI(key) {
            const cardEl = document.getElementById('region-inspector');
            const titleEl = document.getElementById('inspector-title');
            const descEl = document.getElementById('inspector-desc');
            const tagEl = document.getElementById('inspector-tag');

            const activeKey = lockedRegionKey || key;

            if (!activeKey || !regionMetadata[activeKey]) {
                cardEl.classList.remove('locked-card');
                tagEl.innerText = "Hover or Click Region";
                titleEl.querySelector('span:first-child').innerText = "Region Inspector";
                descEl.innerText = "Move your cursor or click on any isolated region above to view its set notation and element composition.";
                return;
            }

            const info = regionMetadata[activeKey];
            const elements = currentRegions[activeKey] || [];
            const elText = elements.length > 0 ? \`{ \${elements.join(', ')} }\` : '∅ (Empty Set)';

            if (lockedRegionKey) {
                cardEl.classList.add('locked-card');
                tagEl.innerText = \`\${info.notation} [🔒 Locked]\`;
            } else {
                cardEl.classList.remove('locked-card');
                tagEl.innerText = info.notation;
            }

            titleEl.querySelector('span:first-child').innerText = info.title;
            descEl.innerHTML = \`\${info.desc}<br><br><strong style="opacity: 0.9;">Elements in Region:</strong> <span style="font-family: monospace; font-weight: bold;">\${elText}</span>\`;
        }

        function applyPreset(type) {
            if (type === 'custom') return;
            if (type === 'intersecting') {
                document.getElementById('input-U').value = "1, 2, 3, 4, 5, 6, 7, 8, 9, 10";
                document.getElementById('input-A').value = "1, 2, 3, 4, 5";
                document.getElementById('input-B').value = "4, 5, 6, 7";
                document.getElementById('input-C').value = "5, 6, 8, 9";
            } else if (type === 'disjoint') {
                document.getElementById('input-U').value = "1, 2, 3, 4, 5, 6, 7, 8";
                document.getElementById('input-A').value = "1, 2, 3";
                document.getElementById('input-B').value = "4, 5, 6";
                document.getElementById('input-C').value = "7, 8";
            } else if (type === 'subset') {
                document.getElementById('input-U').value = "1, 2, 3, 4, 5, 6, 7, 8";
                document.getElementById('input-A').value = "2, 3";
                document.getElementById('input-B').value = "1, 2, 3, 4, 5";
            }
            updateSimulation();
        }

        function getActiveHighlightMap() {
            let highlightMap = {};
            if (mode === 2) {
                switch (currentOp) {
                    case 'A_UNION_B': highlightMap = { onlyA: true, onlyB: true, AB: true }; break;
                    case 'A_INTER_B': highlightMap = { AB: true }; break;
                    case 'A_DIFF_B': highlightMap = { onlyA: true }; break;
                    case 'B_DIFF_A': highlightMap = { onlyB: true }; break;
                    case 'A_COMP': highlightMap = { onlyB: true, outside: true }; break;
                    case 'B_COMP': highlightMap = { onlyA: true, outside: true }; break;
                }
            } else {
                switch (currentOp) {
                    case 'ABC_UNION': highlightMap = { onlyA3: true, onlyB3: true, onlyC3: true, AB3: true, AC3: true, BC3: true, ABC3: true }; break;
                    case 'ABC_INTER': highlightMap = { ABC3: true }; break;
                    case 'A_ONLY': highlightMap = { onlyA3: true }; break;
                }
            }
            return highlightMap;
        }

        function updateSimulation() {
            const U = parseSet('input-U');
            const A = parseSet('input-A');
            const B = parseSet('input-B');
            const C = parseSet('input-C');

            if (mode === 2) {
                currentRegions = {
                    onlyA: A.filter(x => !B.includes(x) && U.includes(x)),
                    onlyB: B.filter(x => !A.includes(x) && U.includes(x)),
                    AB: A.filter(x => B.includes(x) && U.includes(x)),
                    outside: U.filter(x => !A.includes(x) && !B.includes(x))
                };
            } else {
                currentRegions = {
                    onlyA3: A.filter(x => !B.includes(x) && !C.includes(x) && U.includes(x)),
                    onlyB3: B.filter(x => !A.includes(x) && !C.includes(x) && U.includes(x)),
                    onlyC3: C.filter(x => !A.includes(x) && !B.includes(x) && U.includes(x)),
                    AB3: A.filter(x => B.includes(x) && !C.includes(x) && U.includes(x)),
                    AC3: A.filter(x => C.includes(x) && !B.includes(x) && U.includes(x)),
                    BC3: B.filter(x => C.includes(x) && !A.includes(x) && U.includes(x)),
                    ABC3: A.filter(x => B.includes(x) && C.includes(x) && U.includes(x)),
                    outside3: U.filter(x => !A.includes(x) && !B.includes(x) && !C.includes(x))
                };
            }

            const highlightMap = getActiveHighlightMap();
            let resultSet = [];
            
            Object.keys(highlightMap).forEach(key => {
                if (highlightMap[key] && currentRegions[key]) {
                    resultSet = resultSet.concat(currentRegions[key]);
                }
            });

            renderSVG(currentRegions, highlightMap);

            document.getElementById('result-set').innerText = resultSet.length > 0 ? \`{ \${resultSet.join(', ')} }\` : '∅ (Empty Set)';
            document.getElementById('result-cardinality').innerText = resultSet.length;

            if (lockedRegionKey) updateInspectorUI(lockedRegionKey);
        }

        function renderSVG(regions, highlight) {
            const container = document.getElementById('regions-layer');
            let html = '';

            if (mode === 2) {
                const dOnlyA = "M 300 112.68 A 120 120 0 1 0 300 307.32 A 120 120 0 0 1 300 112.68 Z";
                const dOnlyB = "M 300 112.68 A 120 120 0 0 1 300 307.32 A 120 120 0 1 0 300 112.68 Z";
                const dAB = "M 300 112.68 A 120 120 0 0 1 300 307.32 A 120 120 0 0 1 300 112.68 Z";

                html += \`<rect x="10" y="10" width="580" height="400" rx="14" class="atomic-region \${highlight.outside ? 'op-active' : ''} \${lockedRegionKey === 'outside' ? 'locked' : ''}" onclick="handleRegionClick('outside', event)" onmouseenter="handleRegionHover('outside')" onmouseleave="handleRegionHover(null)" />\`;
                html += \`<text x="25" y="38" class="circle-label" fill="#64748b">Universal Set (U)</text>\`;

                html += \`<path d="\${dOnlyA}" class="atomic-region \${highlight.onlyA ? 'op-active' : ''} \${lockedRegionKey === 'onlyA' ? 'locked' : ''}" onclick="handleRegionClick('onlyA', event)" onmouseenter="handleRegionHover('onlyA')" onmouseleave="handleRegionHover(null)" />\`;
                html += \`<path d="\${dOnlyB}" class="atomic-region \${highlight.onlyB ? 'op-active' : ''} \${lockedRegionKey === 'onlyB' ? 'locked' : ''}" onclick="handleRegionClick('onlyB', event)" onmouseenter="handleRegionHover('onlyB')" onmouseleave="handleRegionHover(null)" />\`;
                html += \`<path d="\${dAB}" class="atomic-region \${highlight.AB ? 'op-active' : ''} \${lockedRegionKey === 'AB' ? 'locked' : ''}" onclick="handleRegionClick('AB', event)" onmouseenter="handleRegionHover('AB')" onmouseleave="handleRegionHover(null)" />\`;

                html += \`<circle cx="230" cy="210" r="120" class="circle-stroke-a" />\`;
                html += \`<circle cx="370" cy="210" r="120" class="circle-stroke-b" />\`;

                html += \`<text x="140" y="110" class="circle-label" fill="var(--color-a)">Set A</text>\`;
                html += \`<text x="410" y="110" class="circle-label" fill="var(--color-b)">Set B</text>\`;
                html += \`<text x="180" y="215" class="element-text" text-anchor="middle">\${formatElements(regions.onlyA)}</text>\`;
                html += \`<text x="420" y="215" class="element-text" text-anchor="middle">\${formatElements(regions.onlyB)}</text>\`;
                html += \`<text x="300" y="215" class="element-text" text-anchor="middle">\${formatElements(regions.AB)}</text>\`;
                html += \`<text x="50" y="380" class="element-text">\${formatElements(regions.outside, 'Exterior U: ')}</text>\`;

            } else {
                const rClass = (key) => \`atomic-region \${highlight[key] ? 'op-active' : ''} \${lockedRegionKey === key ? 'locked' : ''}\`;
                const ev = (key) => \`onclick="handleRegionClick('\${key}', event)" onmouseenter="handleRegionHover('\${key}')" onmouseleave="handleRegionHover(null)"\`;

                // Outside Region
                html += \`<rect x="10" y="10" width="580" height="400" rx="14" mask="url(#maskNotABC)" class="\${rClass('outside3')}" \${ev('outside3')} />\`;
                html += \`<text x="25" y="38" class="circle-label" fill="#64748b">Universal Set (U)</text>\`;

                // Exclusive Regions
                html += \`<use href="#c3A" mask="url(#maskNotBC)" class="\${rClass('onlyA3')}" \${ev('onlyA3')} />\`;
                html += \`<use href="#c3B" mask="url(#maskNotAC)" class="\${rClass('onlyB3')}" \${ev('onlyB3')} />\`;
                html += \`<use href="#c3C" mask="url(#maskNotAB)" class="\${rClass('onlyC3')}" \${ev('onlyC3')} />\`;

                // Pairwise Intersections
                html += \`<g clip-path="url(#clipA)">\`;
                html += \`  <use href="#c3B" mask="url(#maskNotC)" class="\${rClass('AB3')}" \${ev('AB3')} />\`;
                html += \`  <use href="#c3C" mask="url(#maskNotB)" class="\${rClass('AC3')}" \${ev('AC3')} />\`;
                html += \`</g>\`;

                html += \`<g clip-path="url(#clipB)">\`;
                html += \`  <use href="#c3C" mask="url(#maskNotA)" class="\${rClass('BC3')}" \${ev('BC3')} />\`;
                html += \`</g>\`;

                // Triple Intersection
                html += \`<g clip-path="url(#clipA)">\`;
                html += \`  <g clip-path="url(#clipB)">\`;
                html += \`    <use href="#c3C" class="\${rClass('ABC3')}" \${ev('ABC3')} />\`;
                html += \`  </g>\`;
                html += \`</g>\`;

                // Colored Circle Outlines (Radius = 90)
                html += \`<circle cx="260" cy="180" r="90" class="circle-stroke-a" />\`;
                html += \`<circle cx="340" cy="180" r="90" class="circle-stroke-b" />\`;
                html += \`<circle cx="300" cy="240" r="90" class="circle-stroke-c" />\`;

                // Circle Labels
                html += \`<text x="200" y="120" class="circle-label" fill="var(--color-a)">Set A</text>\`;
                html += \`<text x="360" y="120" class="circle-label" fill="var(--color-b)">Set B</text>\`;
                html += \`<text x="300" y="355" class="circle-label" fill="var(--color-c)" text-anchor="middle">Set C</text>\`;

                // Region Element Labels
                html += \`<text x="220" y="160" class="element-text" text-anchor="middle">\${formatElements(regions.onlyA3)}</text>\`;
                html += \`<text x="380" y="160" class="element-text" text-anchor="middle">\${formatElements(regions.onlyB3)}</text>\`;
                html += \`<text x="300" y="295" class="element-text" text-anchor="middle">\${formatElements(regions.onlyC3)}</text>\`;
                html += \`<text x="300" y="150" class="element-text" text-anchor="middle">\${formatElements(regions.AB3)}</text>\`;
                html += \`<text x="250" y="225" class="element-text" text-anchor="middle">\${formatElements(regions.AC3)}</text>\`;
                html += \`<text x="350" y="225" class="element-text" text-anchor="middle">\${formatElements(regions.BC3)}</text>\`;
                html += \`<text x="300" y="200" class="element-text" text-anchor="middle">\${formatElements(regions.ABC3)}</text>\`;
                html += \`<text x="50" y="380" class="element-text">\${formatElements(regions.outside3, 'Exterior U: ')}</text>\`;
            }

            container.innerHTML = html;
        }

        function formatElements(arr, prefix = '') {
            if (!arr || arr.length === 0) return '∅';
            return prefix + '{ ' + arr.join(', ') + ' }';
        }

        updateSimulation();
    </script>
</body>
</html>`,
    isCustomImport: true,
    authorEmail: "ndunj123@gmail.com",
    authorName: "Axiom Creator",
    createdAt: "2026-08-17"
  },
  {
    id: "sim-hydraulic-press-lift",
    title: "Hydraulic Lift & Multi-Stroke Press Simulator",
    tagline: "Investigate Pascal's principle, fluid pressure transmission (P = F/A), force multiplication, and continuous multi-stroke load displacement",
    discipline: "physics",
    gradeLevel: ["Middle School (6-8)", "High School (9-12)", "AP / IB STEM"],
    standards: ["MS-PS1-4", "HS-PS2-1", "AP Physics 1", "NGSS SEP-5"],
    description: "An interactive high-displacement hydraulic lift and press simulation investigating Pascal's principle, fluid pressure transmission, cross-sectional area ratios (A1 vs A2), force multiplication, stroke distance conservation of energy, and load crushing dynamics with customizable hydraulic fluids and target weights.",
    learningObjectives: [
      "Demonstrate Pascal's Principle: pressure applied to an enclosed incompressible fluid is transmitted undiminished in all directions (P1 = P2 = P)",
      "Calculate force multiplication using piston surface area ratios: F2 = P × A2 = F1 × (A2 / A1)",
      "Analyze the conservation of work (F1 × d1 = F2 × d2) and understand why high force multiplication requires multi-stroke pumping displacement to lift heavy loads"
    ],
    thumbnailGradient: "from-sky-600 via-blue-700 to-slate-950",
    badgeColor: "bg-sky-500/10 text-sky-300 border-sky-500/20",
    iconName: "Gauge",
    rating: 4.9,
    reviewCount: 54,
    teacherCount: 195,
    licenseType: "Academic STEM Classroom & Institutional License",
    pricing: {
      singleTeacher: 19,
      schoolDepartment: 200,
      districtUnlimited: 400
    },
    features: [
      "Interactive Input Force (20 - 500 N) and Small/Large Piston Radii sliders",
      "Continuous Multi-Stroke Pumping Engine with check-valve fluid cycles",
      "Dynamic Math Readout: A1, A2, Pressure P (N/m²), Output Force F2, Stroke Ratio (d1/d2), and Lift Distance",
      "Target load selection (Car 25,000N, Steel Cube 8,000N, Wood 1,500N, Soda Can 200N) with roof compression & crushing physics",
      "Hydraulic fluid selection (Hydraulic Oil, Pure Water, DOT 4 Brake Fluid, Viscous Molasses) with fluid-specific viscosity speed"
    ],
    parameterDefaults: {
      inputForce: 150,
      r1: 3,
      r2: 8
    },
    parameterControls: [
      {
        key: "inputForce",
        label: "Input Force (F1)",
        min: 20,
        max: 500,
        step: 5,
        unit: "N",
        description: "Effort force applied to small piston"
      },
      {
        key: "r1",
        label: "Small Piston Radius (r1)",
        min: 1,
        max: 5,
        step: 0.1,
        unit: "cm",
        description: "Radius of input piston"
      },
      {
        key: "r2",
        label: "Large Piston Radius (r2)",
        min: 4,
        max: 15,
        step: 0.5,
        unit: "cm",
        description: "Radius of output piston"
      }
    ],
    sampleChallenges: [
      {
        id: "ch-hydraulic-1",
        title: "Lift the 25,000 N Small Car",
        instruction: "Adjust input force and piston radii until the generated output force F2 reaches or exceeds 25,000 N.",
        targetMetric: "Output Force F2",
        targetValue: 25000,
        tolerance: 1000,
        currentValueKey: "outputForce",
        rewardBadge: "Hydraulic Master"
      }
    ],
    previewFacts: [
      "Pascal's Principle states that pressure applied to an enclosed, incompressible fluid is transmitted undiminished in all directions.",
      "Because Work = Force × Distance is conserved, gaining a 10× force multiplication means the small piston must move 10× the distance of the large piston."
    ],
    isHtmlApp: true,
    htmlContent: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Hydraulic Press - Multi-Stroke Significant Lift Simulation</title>
    <style>
        :root {
            --bg-color: #0f172a;
            --panel-bg: #1e293b;
            --accent-color: #38bdf8;
            --accent-hover: #0284c7;
            --text-color: #f8fafc;
            --border-color: #334155;
        }

        * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }

        body {
            background-color: var(--bg-color);
            color: var(--text-color);
            display: flex;
            flex-direction: column;
            align-items: center;
            min-height: 100vh;
            padding: 20px;
        }

        h1 {
            margin-bottom: 20px;
            font-size: 1.8rem;
            color: var(--accent-color);
            text-align: center;
        }

        .container {
            display: flex;
            flex-direction: column;
            gap: 20px;
            width: 100%;
            max-width: 1180px;
        }

        @media (min-width: 850px) {
            .container {
                display: grid;
                grid-template-columns: 1fr 370px;
            }
        }

        .canvas-container {
            position: relative;
            background-color: #020617;
            border-radius: 12px;
            border: 1px solid var(--border-color);
            overflow: hidden;
            display: flex;
            justify-content: center;
            align-items: center;
            box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.5);
        }

        canvas {
            display: block;
            width: 100%;
            height: auto;
        }

        .controls-panel {
            background-color: var(--panel-bg);
            padding: 20px;
            border-radius: 12px;
            border: 1px solid var(--border-color);
            display: flex;
            flex-direction: column;
            gap: 12px;
            box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.3);
        }

        .control-group {
            display: flex;
            flex-direction: column;
            gap: 4px;
        }

        label {
            font-size: 0.85rem;
            font-weight: 600;
            display: flex;
            justify-content: space-between;
        }

        label span {
            color: var(--accent-color);
        }

        input[type="range"] {
            width: 100%;
            height: 6px;
            background: #475569;
            border-radius: 3px;
            outline: none;
            accent-color: var(--accent-color);
        }

        select {
            width: 100%;
            padding: 8px 10px;
            background-color: #0f172a;
            color: var(--text-color);
            border: 1px solid var(--border-color);
            border-radius: 6px;
            font-size: 0.88rem;
            outline: none;
            cursor: pointer;
        }

        .calc-panel {
            background-color: #020617;
            border-radius: 8px;
            padding: 12px;
            border: 1px solid var(--border-color);
            font-family: 'Courier New', Courier, monospace;
            font-size: 0.78rem;
            line-height: 1.45;
            color: #38bdf8;
            display: flex;
            flex-direction: column;
            gap: 3px;
        }

        .calc-title {
            font-weight: bold;
            color: #f8fafc;
            border-bottom: 1px solid var(--border-color);
            padding-bottom: 4px;
            margin-bottom: 4px;
        }

        .btn-group {
            display: flex;
            gap: 10px;
            margin-top: 5px;
        }

        button {
            flex: 1;
            padding: 10px;
            border: none;
            border-radius: 6px;
            font-weight: 600;
            cursor: pointer;
            transition: background 0.2s, transform 0.1s;
        }

        button:active {
            transform: scale(0.98);
        }

        .btn-primary {
            background-color: var(--accent-color);
            color: #0f172a;
        }

        .btn-primary:hover {
            background-color: var(--accent-hover);
            color: #ffffff;
        }

        .btn-secondary {
            background-color: #475569;
            color: white;
        }

        .btn-secondary:hover {
            background-color: #334155;
        }

        .status-box {
            padding: 8px;
            border-radius: 6px;
            background-color: #0f172a;
            border: 1px solid var(--border-color);
            text-align: center;
            font-weight: bold;
            font-size: 0.85rem;
        }

        /* Physics Explanation Card Styles */
        .physics-section {
            width: 100%;
            max-width: 1180px;
            margin-top: 25px;
            background-color: var(--panel-bg);
            border-radius: 12px;
            border: 1px solid var(--border-color);
            padding: 24px;
            box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.3);
        }

        .physics-title {
            font-size: 1.3rem;
            font-weight: 700;
            color: var(--accent-color);
            border-bottom: 1px solid var(--border-color);
            padding-bottom: 10px;
            margin-bottom: 16px;
        }

        .physics-grid {
            display: grid;
            grid-template-columns: 1fr;
            gap: 16px;
        }

        @media (min-width: 768px) {
            .physics-grid {
                grid-template-columns: repeat(3, 1fr);
            }
        }

        .physics-card {
            background-color: #020617;
            padding: 16px;
            border-radius: 8px;
            border: 1px solid var(--border-color);
        }

        .physics-card h3 {
            font-size: 1.05rem;
            color: #f8fafc;
            margin-bottom: 8px;
        }

        .physics-card p {
            font-size: 0.88rem;
            color: #94a3b8;
            line-height: 1.5;
        }

        .formula {
            display: block;
            margin: 8px 0;
            padding: 6px;
            background-color: #0f172a;
            border-radius: 4px;
            color: var(--accent-color);
            font-family: 'Courier New', Courier, monospace;
            font-weight: bold;
            text-align: center;
        }
    </style>
</head>
<body>

    <h1>Hydraulic Lift Simulation (High Displacement System)</h1>

    <div class="container">
        <div class="canvas-container">
            <canvas id="simCanvas" width="700" height="560"></canvas>
        </div>

        <div class="controls-panel">
            <div class="control-group">
                <label for="liquidSelect">Hydraulic Fluid</label>
                <select id="liquidSelect">
                    <option value="oil">Standard Hydraulic Oil</option>
                    <option value="water">Pure Water</option>
                    <option value="brake">Brake Fluid (DOT 4)</option>
                    <option value="molasses">Heavy Duty Viscous Fluid</option>
                </select>
            </div>

            <div class="control-group">
                <label for="objectSelect">Target Load / Object</label>
                <select id="objectSelect">
                    <option value="car">Small Car (Weight/Crush: 25,000 N)</option>
                    <option value="steel">Steel Cube (Crush: 8,000 N)</option>
                    <option value="wood">Wooden Block (Crush: 1,500 N)</option>
                    <option value="can">Soda Can (Crush: 200 N)</option>
                </select>
            </div>

            <div class="control-group">
                <label for="inputForce">Input Force (F1): <span id="valForce">150 N</span></label>
                <input type="range" id="inputForce" min="20" max="500" value="150" step="5">
            </div>

            <div class="control-group">
                <label for="r1">Small Piston Radius (r1): <span id="valR1">3.0 cm</span></label>
                <input type="range" id="r1" min="1" max="5" value="3" step="0.1">
            </div>

            <div class="control-group">
                <label for="r2">Large Piston Radius (r2): <span id="valR2">8.0 cm</span></label>
                <input type="range" id="r2" min="4" max="15" value="8" step="0.5">
            </div>

            <!-- Dynamic Mathematical Calculations -->
            <div class="calc-panel">
                <div class="calc-title">Dynamic Calculation Parameters</div>
                <div>A1 = π × (r1)² = <span id="calcA1">0.00283</span> m²</div>
                <div>A2 = π × (r2)² = <span id="calcA2">0.02011</span> m²</div>
                <div>Pressure P = F1 / A1 = <span id="calcP" style="color: #4ade80;">53,051.6</span> N/m²</div>
                <div>Output Force F2 = P × A2 = <span id="calcF2" style="color: #38bdf8;">1,066</span> N</div>
                <div>Stroke Ratio (d1 / d2) = <span id="calcSR">7.11</span></div>
                <div>Total Load Lifted Distance: <span id="calcLiftDist" style="color: #eab308;">0.00 cm</span></div>
            </div>

            <div class="status-box" id="statusText">Status: Ready</div>

            <div class="btn-group">
                <button id="btnPress" class="btn-primary">Continuous Lift</button>
                <button id="btnReset" class="btn-secondary">Reset</button>
            </div>
            
            <button id="btnNarrate" class="btn-secondary" style="background-color: #0284c7;">Explain Lift Physics</button>
        </div>
    </div>

    <!-- Physics Explanation Section -->
    <section class="physics-section">
        <h2 class="physics-title">Physics Principles of the Hydraulic Press</h2>
        <div class="physics-grid">
            <div class="physics-card">
                <h3>1. Pascal's Principle</h3>
                <p>
                    A hydraulic press relies on <strong>Pascal's Principle</strong>, which states that any change in pressure applied to an enclosed, incompressible fluid is transmitted undiminished throughout the entire fluid.
                </p>
                <span class="formula">P₁ = P₂ = P</span>
            </div>

            <div class="physics-card">
                <h3>2. Force Multiplication</h3>
                <p>
                    Because pressure is equal to force divided by cross-sectional area, a small force applied on a smaller piston (A₁) creates fluid pressure that produces a much larger output force on a larger piston (A₂).
                </p>
                <span class="formula">F₂ = P × A₂ = F₁ × (A₂ / A₁)</span>
            </div>

            <div class="physics-card">
                <h3>3. Conservation of Work & Energy</h3>
                <p>
                    Force is multiplied at the expense of distance. Work input equals work output (W = F × d). The input piston must move a much greater distance (d₁) than the output piston moves (d₂).
                </p>
                <span class="formula">F₁ × d₁ = F₂ × d₂</span>
            </div>
        </div>
    </section>

    <script>
        const canvas = document.getElementById('simCanvas');
        const ctx = canvas.getContext('2d');

        // Controls
        const inputForceElem = document.getElementById('inputForce');
        const r1Elem = document.getElementById('r1');
        const r2Elem = document.getElementById('r2');
        const objectSelect = document.getElementById('objectSelect');
        const liquidSelect = document.getElementById('liquidSelect');

        // Readout Displays
        const valForce = document.getElementById('valForce');
        const valR1 = document.getElementById('valR1');
        const valR2 = document.getElementById('valR2');
        const calcA1 = document.getElementById('calcA1');
        const calcA2 = document.getElementById('calcA2');
        const calcP = document.getElementById('calcP');
        const calcF2 = document.getElementById('calcF2');
        const calcSR = document.getElementById('calcSR');
        const calcLiftDist = document.getElementById('calcLiftDist');
        const statusText = document.getElementById('statusText');

        // Buttons
        const btnPress = document.getElementById('btnPress');
        const btnReset = document.getElementById('btnReset');
        const btnNarrate = document.getElementById('btnNarrate');

        // Fluids
        const liquids = {
            oil: { name: 'Standard Hydraulic Oil', color: '#eab308', opacity: 0.8, speedFactor: 1.0 },
            water: { name: 'Pure Water', color: '#0284c7', opacity: 0.75, speedFactor: 1.2 },
            brake: { name: 'Brake Fluid (DOT 4)', color: '#a855f7', opacity: 0.8, speedFactor: 1.1 },
            molasses: { name: 'Viscous Molasses', color: '#78350f', opacity: 0.95, speedFactor: 0.4 }
        };

        // Targets
        const objects = {
            car: { name: 'Small Car', threshold: 25000, color: '#0ea5e9', height: 45, width: 90 },
            steel: { name: 'Steel Cube', threshold: 8000, color: '#64748b', height: 45, width: 50 },
            wood: { name: 'Wooden Block', threshold: 1500, color: '#b45309', height: 45, width: 55 },
            can: { name: 'Soda Can', threshold: 200, color: '#ef4444', height: 45, width: 35 }
        };

        // Simulation State Variables
        let pressing = false;
        let p1StrokeOffset = 0;
        let totalP2LiftPixels = 0;
        let strokePhase = 'down';
        let crushProgress = 0;
        const maxLiftLimit = 220;

        function getParams() {
            const F1 = parseFloat(inputForceElem.value);
            const r1_cm = parseFloat(r1Elem.value);
            const r2_cm = parseFloat(r2Elem.value);
            
            const r1_m = r1_cm / 100;
            const r2_m = r2_cm / 100;

            const A1 = Math.PI * r1_m * r1_m;
            const A2 = Math.PI * r2_m * r2_m;
            const strokeRatio = A2 / A1;
            
            const Pressure_N_m2 = F1 / A1; 
            const F2 = Pressure_N_m2 * A2;

            const target = objects[objectSelect.value];
            const liquid = liquids[liquidSelect.value];

            return { F1, r1_cm, r2_cm, r1_m, r2_m, A1, A2, strokeRatio, F2, Pressure_N_m2, target, liquid };
        }

        function updateReadouts() {
            const p = getParams();
            valForce.textContent = \`\${p.F1} N\`;
            valR1.textContent = \`\${p.r1_cm.toFixed(1)} cm\`;
            valR2.textContent = \`\${p.r2_cm.toFixed(1)} cm\`;

            calcA1.textContent = p.A1.toFixed(5);
            calcA2.textContent = p.A2.toFixed(5);
            calcP.textContent = p.Pressure_N_m2.toLocaleString(undefined, { maximumFractionDigits: 1 });
            calcF2.textContent = Math.round(p.F2).toLocaleString();
            calcSR.textContent = p.strokeRatio.toFixed(2);
            
            const liftInCm = (totalP2LiftPixels / 10).toFixed(2);
            calcLiftDist.textContent = \`\${liftInCm} cm\`;

            if (!pressing) {
                const outputForce = Math.round(p.F2);
                if (p.F2 >= p.target.threshold) {
                    statusText.textContent = \`Status: Output Force = \${outputForce.toLocaleString()} N (Sufficient to lift load)\`;
                    statusText.style.color = '#4ade80';
                } else {
                    statusText.textContent = \`Status: Needs \${outputForce.toLocaleString()} N output force to lift load\`;
                    statusText.style.color = '#f87171';
                }
            }
        }

        function drawPressSystem() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            const p = getParams();
            
            const x1 = 170;
            const x2 = 490;
            const pipeBottomY = 480;
            const pipeTopY = 430;
            const initialBaseY = 400;

            const w1 = p.r1_cm * 20; 
            const w2 = p.r2_cm * 16; 

            const p1Y = initialBaseY + p1StrokeOffset;  
            const p2Y = initialBaseY - totalP2LiftPixels;

            const roofY = 80;

            // --- 1. HYDRAULIC FLUID ---
            ctx.fillStyle = p.liquid.color;
            ctx.globalAlpha = p.liquid.opacity;
            ctx.beginPath();

            ctx.rect(x1 - w1 / 2, p1Y, w1, pipeTopY - p1Y);
            ctx.rect(x1 - w1 / 2, pipeTopY, (x2 + w2 / 2) - (x1 - w1 / 2), pipeBottomY - pipeTopY);
            ctx.rect(x2 - w2 / 2, p2Y, w2, pipeTopY - p2Y);

            ctx.fill();
            ctx.globalAlpha = 1.0; 

            ctx.fillStyle = 'rgba(255, 255, 255, 0.2)';
            ctx.fillRect(x1 - w1 / 2, pipeTopY, (x2 + w2 / 2) - (x1 - w1 / 2), 8);

            // --- 2. PIPING & WALLS ---
            ctx.strokeStyle = '#94a3b8';
            ctx.lineWidth = 6;
            ctx.beginPath();
            ctx.moveTo(x1 - w1 / 2, 200);
            ctx.lineTo(x1 - w1 / 2, pipeBottomY);
            ctx.lineTo(x2 + w2 / 2, pipeBottomY);
            ctx.lineTo(x2 + w2 / 2, 120);

            ctx.moveTo(x1 + w1 / 2, 200);
            ctx.lineTo(x1 + w1 / 2, pipeTopY);
            ctx.lineTo(x2 - w2 / 2, pipeTopY);
            ctx.lineTo(x2 - w2 / 2, 120);
            ctx.stroke();

            // --- 3. INPUT PISTON & CHECK VALVES ---
            ctx.fillStyle = '#cbd5e1';
            ctx.fillRect(x1 - w1 / 2 + 2, p1Y - 15, w1 - 4, 15);
            ctx.fillRect(x1 - 5, p1Y - 160, 10, 145);

            ctx.fillStyle = strokePhase === 'down' ? '#22c55e' : '#f59e0b';
            ctx.beginPath();
            ctx.arc(x1 + w1 / 2 + 15, pipeTopY + 25, 7, 0, Math.PI * 2);
            ctx.fill();

            // --- 4. OUTPUT PISTON & PLATFORM (LOAD SIDE) ---
            ctx.fillStyle = '#cbd5e1';
            ctx.fillRect(x2 - w2 / 2 + 2, p2Y - 18, w2 - 4, 18);
            ctx.fillRect(x2 - 12, p2Y - 220, 24, 202);
            
            ctx.fillStyle = '#64748b';
            const platformY = p2Y - 225;
            ctx.fillRect(x2 - 75, platformY, 150, 14); 

            // --- 5. UPPER ANVIL FRAME ---
            ctx.fillStyle = '#334155';
            ctx.fillRect(x2 - 110, roofY - 20, 220, 20);
            ctx.fillRect(x2 - 20, roofY, 40, 15);

            // --- 6. LOAD OBJECT ---
            drawObjectOnPlatform(x2, platformY, roofY + 15, p.target);

            // --- 7. ON-CANVAS LABELS ---
            ctx.fillStyle = '#f8fafc';
            ctx.font = '12px sans-serif';

            ctx.fillText(\`Input Cylinder (A1)\`, x1 - 45, 190);
            ctx.fillText(\`Area = \${p.A1.toFixed(4)} m²\`, x1 - 45, 175);

            ctx.fillText(\`Lift Cylinder (A2)\`, x2 - 45, 110);
            ctx.fillText(\`Area = \${p.A2.toFixed(4)} m²\`, x2 - 45, 95);

            ctx.fillStyle = '#38bdf8';
            ctx.font = 'bold 12px sans-serif';
            ctx.fillText(\`Transmitted Pressure P = \${Math.round(p.Pressure_N_m2).toLocaleString()} N/m²\`, x1 + 25, pipeBottomY - 15);

            if (totalP2LiftPixels > 5) {
                ctx.strokeStyle = '#eab308';
                ctx.lineWidth = 2;
                ctx.setLineDash([4, 4]);
                ctx.beginPath();
                ctx.moveTo(x2 + 85, initialBaseY - 225);
                ctx.lineTo(x2 + 85, platformY);
                ctx.stroke();
                ctx.setLineDash([]);

                ctx.fillStyle = '#eab308';
                ctx.font = 'bold 12px sans-serif';
                ctx.fillText(\`Lift Distance = \${(totalP2LiftPixels / 10).toFixed(1)} cm\`, x2 + 95, (initialBaseY - 225 + platformY) / 2);
            }

            // --- 8. FORCE ARROWS ---
            if (pressing && strokePhase === 'down') {
                drawArrow(x1, p1Y - 180, x1, p1Y - 140, '#ef4444', 4);
                ctx.fillStyle = '#ef4444';
                ctx.font = 'bold 13px sans-serif';
                ctx.fillText(\`F1 = \${p.F1} N\`, x1 - 35, p1Y - 188);

                drawArrow(x2, p2Y + 15, x2, p2Y - 35, '#38bdf8', 5);
                ctx.fillStyle = '#38bdf8';
                ctx.fillText(\`F2 = \${Math.round(p.F2)} N\`, x2 + w2 / 2 + 10, p2Y - 5);
            }
        }

        function drawObjectOnPlatform(x, platformY, anvilY, target) {
            ctx.save();
            ctx.translate(x, platformY);

            const currentHeight = target.height * (1 - crushProgress * 0.65);
            const currentWidth = target.width * (1 + crushProgress * 0.35);

            ctx.fillStyle = target.color;

            if (objectSelect.value === 'car') {
                ctx.beginPath();
                ctx.fillRect(-currentWidth / 2, -currentHeight * 0.6, currentWidth, currentHeight * 0.6);
                ctx.fillRect(-currentWidth / 4, -currentHeight, currentWidth / 2, currentHeight * 0.4);
                ctx.fillStyle = '#020617';
                ctx.beginPath();
                ctx.arc(-currentWidth / 3, -5, 8, 0, Math.PI * 2);
                ctx.arc(currentWidth / 3, -5, 8, 0, Math.PI * 2);
                ctx.fill();
            } else {
                ctx.beginPath();
                if (crushProgress > 0.1) {
                    ctx.moveTo(-currentWidth / 2, 0);
                    ctx.lineTo(-currentWidth / 2 - 5, -currentHeight / 2);
                    ctx.lineTo(-currentWidth / 2, -currentHeight);
                    ctx.lineTo(currentWidth / 2, -currentHeight);
                    ctx.lineTo(currentWidth / 2 + 5, -currentHeight / 2);
                    ctx.lineTo(currentWidth / 2, 0);
                } else {
                    ctx.rect(-currentWidth / 2, -currentHeight, currentWidth, currentHeight);
                }
                ctx.fill();
            }

            ctx.restore();
        }

        function drawArrow(fromx, fromy, tox, toy, color, width) {
            const headlen = 9;
            const dx = tox - fromx;
            const dy = toy - fromy;
            const angle = Math.atan2(dy, dx);
            ctx.strokeStyle = color;
            ctx.fillStyle = color;
            ctx.lineWidth = width;
            ctx.beginPath();
            ctx.moveTo(fromx, fromy);
            ctx.lineTo(tox, toy);
            ctx.stroke();
            ctx.beginPath();
            ctx.moveTo(tox, toy);
            ctx.lineTo(tox - headlen * Math.cos(angle - Math.PI / 6), toy - headlen * Math.sin(angle - Math.PI / 6));
            ctx.lineTo(tox - headlen * Math.cos(angle + Math.PI / 6), toy - headlen * Math.sin(angle + Math.PI / 6));
            ctx.fill();
        }

        let animationFrame;
        function animateMultiStrokeLift() {
            const p = getParams();
            const canCrush = p.F2 >= p.target.threshold;
            const stepSpeed = 2.0 * p.liquid.speedFactor;
            const strokeMax = 50;

            if (totalP2LiftPixels < maxLiftLimit) {
                if (strokePhase === 'down') {
                    p1StrokeOffset += stepSpeed;
                    const deltaP2 = (stepSpeed / p.strokeRatio);
                    totalP2LiftPixels += deltaP2;

                    if (p1StrokeOffset >= strokeMax) {
                        strokePhase = 'up';
                    }
                } else {
                    p1StrokeOffset -= stepSpeed * 1.5;
                    if (p1StrokeOffset <= 0) {
                        p1StrokeOffset = 0;
                        strokePhase = 'down';
                    }
                }

                const currentPlatformY = (400 - totalP2LiftPixels) - 225;
                const anvilY = 95;

                if (currentPlatformY - p.target.height <= anvilY) {
                    if (canCrush) {
                        crushProgress = Math.min(1, crushProgress + 0.02 * p.liquid.speedFactor);
                        statusText.textContent = \`Status: Max Height Reached - Compressing Load!\`;
                        statusText.style.color = '#38bdf8';
                    } else {
                        statusText.textContent = \`Status: Blocked at Roof Frame! Insufficient Crush Force.\`;
                        statusText.style.color = '#f87171';
                        pressing = false;
                        updateReadouts();
                        drawPressSystem();
                        return;
                    }
                } else {
                    statusText.textContent = \`Status: Continuous Pumping - Lifting Load (Distance: \${(totalP2LiftPixels/10).toFixed(1)} cm)\`;
                    statusText.style.color = '#eab308';
                }

                updateReadouts();
                drawPressSystem();
                animationFrame = requestAnimationFrame(animateMultiStrokeLift);
            } else {
                pressing = false;
                statusText.textContent = \`Status: Maximum Lift Height Attained!\`;
                statusText.style.color = '#4ade80';
            }
        }

        btnPress.addEventListener('click', () => {
            if (pressing) return;
            pressing = true;
            strokePhase = 'down';
            animateMultiStrokeLift();
        });

        btnReset.addEventListener('click', () => {
            cancelAnimationFrame(animationFrame);
            pressing = false;
            p1StrokeOffset = 0;
            totalP2LiftPixels = 0;
            crushProgress = 0;
            strokePhase = 'down';
            updateReadouts();
            drawPressSystem();
        });

        // Speech Narration
        btnNarrate.addEventListener('click', () => {
            if ('speechSynthesis' in window) {
                window.speechSynthesis.cancel();
                const p = getParams();
                const text = \`According to Pascal's Principle, pressure applied to an enclosed fluid is transmitted equally in all directions. Here, an input force of \${p.F1} Newtons produces a pressure of \${Math.round(p.Pressure_N_m2)} Newtons per square meter. Transmitted over the larger area, it generates an output force F2 of \${Math.round(p.F2)} Newtons, calculated from F2 equals pressure times A2.\`;
                
                const utterance = new SpeechSynthesisUtterance(text);
                const voices = window.speechSynthesis.getVoices();
                const preferredVoice = voices.find(v => v.lang.includes('ng') || v.lang.includes('en-NG') || v.name.includes('Nigeria'));
                if (preferredVoice) utterance.voice = preferredVoice;

                window.speechSynthesis.speak(utterance);
            } else {
                alert('Speech Synthesis not supported in your browser.');
            }
        });

        // Controls Listeners
        [inputForceElem, r1Elem, r2Elem, objectSelect, liquidSelect].forEach(elem => {
            elem.addEventListener('input', () => {
                updateReadouts();
                drawPressSystem();
            });
        });

        // Initial Load
        updateReadouts();
        drawPressSystem();
    </script>
</body>
</html>`,
    isCustomImport: true,
    authorEmail: "ndunj123@gmail.com",
    authorName: "Axiom Creator",
    createdAt: "2026-08-21"
  },
  {
    id: "sim-geometric-transformations-rotation",
    title: "Geometric Transformations & 2D Rotation Virtual Lab",
    tagline: "Investigate rotations, reflections, translations, and dilations with algebraic mapping rules and dynamic multi-polygon coordinate tracking",
    discipline: "mathematics",
    gradeLevel: ["Middle School (6-8)", "High School (9-12)", "AP / IB STEM"],
    standards: ["CCSS.MATH.CONTENT.8.G.A.1", "CCSS.MATH.CONTENT.8.G.A.3", "HSG-CO.A.2", "HSG-CO.A.5"],
    description: "An interactive Cartesian coordinate virtual lab for exploring 2D rigid motions and non-rigid transformations: rotations around arbitrary pivot points, translations (Δx, Δy), reflections across standard axes, and dilations by scale factor k with animated mapping rules and coordinate matrices.",
    learningObjectives: [
      "Verify properties of rotations, reflections, and translations: lines are taken to lines, and line segments to line segments of the same length (isometries preserve congruence)",
      "Describe the effect of dilations, translations, rotations, and reflections on two-dimensional figures using coordinate algebraic rules like (x, y) → (-y, x)",
      "Determine coordinates of image vertices given a pre-image, center of rotation (x₀, y₀), scale factor k, or line of reflection"
    ],
    thumbnailGradient: "from-sky-500 via-indigo-600 to-rose-600",
    badgeColor: "bg-indigo-500/10 text-indigo-300 border-indigo-500/20",
    iconName: "Maximize2",
    rating: 4.9,
    reviewCount: 48,
    teacherCount: 172,
    licenseType: "Academic STEM Classroom & Institutional License",
    pricing: {
      singleTeacher: 19,
      schoolDepartment: 200,
      districtUnlimited: 400
    },
    features: [
      "Multi-Shape Geometry: Triangles, Rectangles, Parallelograms, Pentagons, Stars, and Custom Polygons",
      "4 Transformation Engines: Rotation (custom pivot & angles), Translation (Δx, Δy), Reflection (x-axis, y-axis, y=x, y=-x), and Dilation (scale factor k & center)",
      "Interactive Drag-and-Drop: Drag vertices on Cartesian coordinate grid and reposition rotation/dilation pivot centers",
      "Live Algebraic Mapping Rules and Pre-Image vs Image coordinate tables with easing animation playback",
      "Visual Ray & Arc Helpers illustrating transformation geometry paths"
    ],
    parameterDefaults: {
      angle: 90,
      dx: 3,
      dy: 2,
      scale: 2.0
    },
    parameterControls: [
      {
        key: "angle",
        label: "Rotation Angle (θ)",
        min: -360,
        max: 360,
        step: 5,
        unit: "°",
        description: "Angle of rotation about center point"
      },
      {
        key: "dx",
        label: "Horizontal Shift (Δx)",
        min: -10,
        max: 10,
        step: 1,
        unit: "units",
        description: "Translation along x-axis"
      },
      {
        key: "dy",
        label: "Vertical Shift (Δy)",
        min: -10,
        max: 10,
        step: 1,
        unit: "units",
        description: "Translation along y-axis"
      },
      {
        key: "scale",
        label: "Scale Factor (k)",
        min: 0.25,
        max: 3,
        step: 0.25,
        unit: "×",
        description: "Dilation scaling factor"
      }
    ],
    sampleChallenges: [
      {
        id: "ch-geom-1",
        title: "90° Counterclockwise Rotation About Origin",
        instruction: "Rotate the triangle 90° CCW about (0,0) and observe how coordinates map (x, y) → (-y, x).",
        targetMetric: "Rotation Angle",
        targetValue: 90,
        tolerance: 0,
        currentValueKey: "angle",
        rewardBadge: "Rotation Master"
      }
    ],
    previewFacts: [
      "Rigid transformations (rotations, reflections, and translations) preserve distance and angles, producing congruent shapes.",
      "Dilations preserve shape and angle measures but change side lengths by scale factor k, creating similar geometric figures."
    ],
    isHtmlApp: true,
    htmlContent: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Geometric Transformations & Rotation Virtual Lab</title>
  <style>
    :root {
      --bg-color: #0f172a;
      --card-bg: #1e293b;
      --accent-blue: #38bdf8;
      --accent-red: #f43f5e;
      --accent-green: #10b981;
      --accent-yellow: #f59e0b;
      --text-main: #f8fafc;
      --text-muted: #94a3b8;
      --border-color: #334155;
    }

    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
      font-family: 'Segoe UI', system-ui, -apple-system, sans-serif;
    }

    body {
      background-color: var(--bg-color);
      color: var(--text-main);
      min-height: 100vh;
      display: flex;
      flex-direction: column;
    }

    header {
      background-color: var(--card-bg);
      padding: 1rem 1.5rem;
      border-bottom: 1px solid var(--border-color);
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    header h1 {
      font-size: 1.25rem;
      color: var(--accent-blue);
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }

    header span {
      font-size: 0.85rem;
      color: var(--text-muted);
      background: #0f172a;
      padding: 0.2rem 0.6rem;
      border-radius: 4px;
      border: 1px solid var(--border-color);
    }

    .app-container {
      display: grid;
      grid-template-columns: 320px 1fr 320px;
      gap: 1rem;
      padding: 1rem;
      flex: 1;
      height: calc(100vh - 60px);
      overflow: hidden;
    }

    .panel {
      background-color: var(--card-bg);
      border-radius: 8px;
      border: 1px solid var(--border-color);
      padding: 1rem;
      display: flex;
      flex-direction: column;
      gap: 1rem;
      overflow-y: auto;
    }

    .panel-title {
      font-size: 0.9rem;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      color: var(--text-muted);
      border-bottom: 1px solid var(--border-color);
      padding-bottom: 0.4rem;
      font-weight: 600;
    }

    .control-group {
      display: flex;
      flex-direction: column;
      gap: 0.4rem;
    }

    .control-group label {
      font-size: 0.85rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    select, input[type="number"], button {
      background-color: var(--bg-color);
      color: var(--text-main);
      border: 1px solid var(--border-color);
      padding: 0.5rem;
      border-radius: 4px;
      font-size: 0.85rem;
      outline: none;
    }

    select:focus, input:focus, button:focus {
      border-color: var(--accent-blue);
    }

    input[type="range"] {
      width: 100%;
      accent-color: var(--accent-blue);
    }

    .btn {
      cursor: pointer;
      font-weight: 600;
      transition: background 0.2s, color 0.2s;
    }

    .btn-primary {
      background-color: var(--accent-blue);
      color: #0f172a;
      border: none;
    }

    .btn-primary:hover {
      background-color: #7dd3fc;
    }

    .btn-secondary {
      background-color: transparent;
      color: var(--accent-blue);
      border: 1px solid var(--accent-blue);
    }

    .btn-secondary:hover {
      background-color: rgba(56, 189, 248, 0.1);
    }

    .btn-danger {
      background-color: transparent;
      color: var(--accent-red);
      border: 1px solid var(--accent-red);
    }

    .btn-danger:hover {
      background-color: rgba(244, 63, 94, 0.1);
    }

    .preset-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 0.5rem;
    }

    .canvas-container {
      position: relative;
      background-color: #0b1120;
      border-radius: 8px;
      border: 1px solid var(--border-color);
      display: flex;
      justify-content: center;
      align-items: center;
      overflow: hidden;
    }

    canvas {
      cursor: crosshair;
    }

    .overlay-controls {
      position: absolute;
      top: 10px;
      right: 10px;
      background-color: rgba(30, 41, 59, 0.85);
      padding: 0.5rem 0.75rem;
      border-radius: 6px;
      border: 1px solid var(--border-color);
      display: flex;
      flex-direction: column;
      gap: 0.4rem;
      backdrop-filter: blur(4px);
    }

    .overlay-controls label {
      font-size: 0.8rem;
      display: flex;
      align-items: center;
      gap: 0.4rem;
      cursor: pointer;
    }

    .matrix-box {
      background-color: var(--bg-color);
      padding: 0.75rem;
      border-radius: 6px;
      border: 1px solid var(--border-color);
      font-family: 'Courier New', Courier, monospace;
      font-size: 0.85rem;
      color: var(--accent-blue);
      text-align: center;
    }

    .coord-table {
      width: 100%;
      border-collapse: collapse;
      font-size: 0.8rem;
    }

    .coord-table th, .coord-table td {
      border: 1px solid var(--border-color);
      padding: 0.4rem;
      text-align: center;
    }

    .coord-table th {
      background-color: var(--bg-color);
      color: var(--text-muted);
    }

    .tag-pre { color: var(--accent-blue); font-weight: bold; }
    .tag-post { color: var(--accent-red); font-weight: bold; }

    @media (max-width: 1024px) {
      .app-container {
        grid-template-columns: 1fr;
        height: auto;
        overflow: visible;
      }
      .canvas-container {
        height: 500px;
      }
    }
  </style>
</head>
<body>

  <header>
    <h1>📐 Geometric Transformations & Rotation Lab</h1>
    <span>Multi-Shape Support</span>
  </header>

  <div class="app-container">
    
    <!-- Left Control Panel -->
    <div class="panel">
      
      <!-- Shape Selector Section -->
      <div class="panel-title">1. Select / Edit Plane Shape</div>

      <div class="control-group">
        <label for="shapePreset">Preset Shapes</label>
        <select id="shapePreset">
          <option value="triangle">Triangle (3 Vertices)</option>
          <option value="rectangle">Rectangle (4 Vertices)</option>
          <option value="parallelogram">Parallelogram (4 Vertices)</option>
          <option value="pentagon">Regular Pentagon (5 Vertices)</option>
          <option value="star">5-Pointed Star (10 Vertices)</option>
          <option value="custom">Custom Polygon</option>
        </select>
      </div>

      <div class="preset-grid">
        <button class="btn btn-secondary" id="addVertexBtn">+ Add Vertex</button>
        <button class="btn btn-danger" id="removeVertexBtn">- Remove Vertex</button>
      </div>

      <!-- Transformation Type -->
      <div class="panel-title" style="margin-top:0.5rem;">2. Transformation Settings</div>

      <div class="control-group">
        <label for="transformMode">Transformation Type</label>
        <select id="transformMode">
          <option value="rotation">Rotation</option>
          <option value="translation">Translation</option>
          <option value="reflection">Reflection</option>
          <option value="dilation">Dilation</option>
        </select>
      </div>

      <!-- Controls: Rotation -->
      <div id="rotationControls" class="control-group">
        <label>Angle (θ): <span id="angleVal">90°</span></label>
        <input type="range" id="angleSlider" min="-360" max="360" value="90" step="5">
        <div class="preset-grid">
          <button class="btn btn-secondary" onclick="setAngle(90)">90° CCW</button>
          <button class="btn btn-secondary" onclick="setAngle(180)">180°</button>
          <button class="btn btn-secondary" onclick="setAngle(270)">270° CCW</button>
          <button class="btn btn-secondary" onclick="setAngle(-90)">-90° (90° CW)</button>
        </div>
        <label style="margin-top:0.5rem;">Center of Rotation (x₀, y₀)</label>
        <div style="display:flex; gap:0.5rem;">
          <input type="number" id="rotX" value="0" step="1">
          <input type="number" id="rotY" value="0" step="1">
        </div>
      </div>

      <!-- Controls: Translation -->
      <div id="translationControls" class="control-group" style="display:none;">
        <label>Horizontal Shift (Δx): <span id="dxVal">3</span></label>
        <input type="range" id="dxSlider" min="-10" max="10" value="3" step="1">
        
        <label>Vertical Shift (Δy): <span id="dyVal">2</span></label>
        <input type="range" id="dySlider" min="-10" max="10" value="2" step="1">
      </div>

      <!-- Controls: Reflection -->
      <div id="reflectionControls" class="control-group" style="display:none;">
        <label for="reflectAxis">Line of Reflection</label>
        <select id="reflectAxis">
          <option value="x">X-Axis (y = 0)</option>
          <option value="y">Y-Axis (x = 0)</option>
          <option value="yx">Line y = x</option>
          <option value="y-x">Line y = -x</option>
        </select>
      </div>

      <!-- Controls: Dilation -->
      <div id="dilationControls" class="control-group" style="display:none;">
        <label>Scale Factor (k): <span id="scaleVal">2.0</span></label>
        <input type="range" id="scaleSlider" min="0.25" max="3" value="2.0" step="0.25">
        
        <label>Center of Dilation (x₀, y₀)</label>
        <div style="display:flex; gap:0.5rem;">
          <input type="number" id="dilX" value="0" step="1">
          <input type="number" id="dilY" value="0" step="1">
        </div>
      </div>

      <div class="panel-title" style="margin-top:0.5rem;">Actions</div>
      <button class="btn btn-primary" id="animateBtn">▶ Animate Transformation</button>
      <button class="btn btn-secondary" id="resetShapeBtn">Reset Current Shape</button>

    </div>

    <!-- Center Interactive Canvas -->
    <div class="canvas-container" id="canvasContainer">
      <canvas id="gridCanvas"></canvas>
      
      <div class="overlay-controls">
        <label><input type="checkbox" id="showGrid" checked> Grid Lines</label>
        <label><input type="checkbox" id="showLabels" checked> Vertex Labels</label>
        <label><input type="checkbox" id="showArcs" checked> Helper Rays / Arcs</label>
      </div>
    </div>

    <!-- Right Data & Analysis Panel -->
    <div class="panel">
      <div class="panel-title">Algebraic Rule</div>

      <div class="matrix-box" id="mappingRule">
        (x, y) → (-y, x)
      </div>

      <div class="panel-title">Coordinate Table</div>

      <div style="max-height: 250px; overflow-y: auto; border: 1px solid var(--border-color); border-radius: 4px;">
        <table class="coord-table">
          <thead>
            <tr>
              <th>Point</th>
              <th>Pre-Image <span class="tag-pre">(Blue)</span></th>
              <th>Image <span class="tag-post">(Red)</span></th>
            </tr>
          </thead>
          <tbody id="coordTableBody">
            <!-- Populated dynamically -->
          </tbody>
        </table>
      </div>

      <div class="panel-title">Interactive Guide</div>
      <p style="font-size:0.8rem; color: var(--text-muted); line-height: 1.4;">
        • <strong>Select Shapes:</strong> Choose standard plane shapes (Triangle, Rectangle, Parallelogram, Pentagon, Star) or create custom polygons.<br><br>
        • <strong>Drag Vertices:</strong> Click and drag blue vertices on the canvas to deform shapes.<br><br>
        • <strong>Move Pivot:</strong> Drag the yellow center marker to dynamically alter rotation/dilation centers.
      </p>
    </div>

  </div>

  <script>
    const canvas = document.getElementById('gridCanvas');
    const ctx = canvas.getContext('2d');
    const container = document.getElementById('canvasContainer');

    // Canvas scaling parameters
    let width, height;
    const gridSize = 30; // pixels per unit
    let originX, originY;

    // Interactive State
    let mode = 'rotation';
    let animationProgress = 1; // 0 to 1
    let isAnimating = false;
    let draggedVertex = null;
    let draggedCenter = false;

    // Shape Presets Library
    const shapePresets = {
      triangle: [
        { id: 'A', x: 2, y: 2 },
        { id: 'B', x: 6, y: 2 },
        { id: 'C', x: 4, y: 6 }
      ],
      rectangle: [
        { id: 'A', x: 1, y: 1 },
        { id: 'B', x: 6, y: 1 },
        { id: 'C', x: 6, y: 4 },
        { id: 'D', x: 1, y: 4 }
      ],
      parallelogram: [
        { id: 'A', x: 1, y: 1 },
        { id: 'B', x: 5, y: 1 },
        { id: 'C', x: 7, y: 4 },
        { id: 'D', x: 3, y: 4 }
      ],
      pentagon: [
        { id: 'A', x: 3, y: 6 },
        { id: 'B', x: 6, y: 4 },
        { id: 'C', x: 5, y: 1 },
        { id: 'D', x: 1, y: 1 },
        { id: 'E', x: 0, y: 4 }
      ],
      star: [
        { id: 'A', x: 3, y: 7 }, { id: 'B', x: 4, y: 4 }, { id: 'C', x: 7, y: 4 },
        { id: 'D', x: 5, y: 2 }, { id: 'E', x: 6, y: -1 }, { id: 'F', x: 3, y: 1 },
        { id: 'G', x: 0, y: -1 }, { id: 'H', x: 1, y: 2 }, { id: 'I', x: -1, y: 4 },
        { id: 'J', x: 2, y: 4 }
      ]
    };

    // Current Shape Vertices
    let shape = JSON.parse(JSON.stringify(shapePresets.triangle));

    // Inputs & Elements
    const shapePresetSelect = document.getElementById('shapePreset');
    const transformMode = document.getElementById('transformMode');
    const angleSlider = document.getElementById('angleSlider');
    const angleVal = document.getElementById('angleVal');
    const rotX = document.getElementById('rotX');
    const rotY = document.getElementById('rotY');
    const dxSlider = document.getElementById('dxSlider');
    const dySlider = document.getElementById('dySlider');
    const dxVal = document.getElementById('dxVal');
    const dyVal = document.getElementById('dyVal');
    const reflectAxis = document.getElementById('reflectAxis');
    const scaleSlider = document.getElementById('scaleSlider');
    const scaleVal = document.getElementById('scaleVal');
    const dilX = document.getElementById('dilX');
    const dilY = document.getElementById('dilY');
    
    const showGrid = document.getElementById('showGrid');
    const showLabels = document.getElementById('showLabels');
    const showArcs = document.getElementById('showArcs');
    
    const mappingRule = document.getElementById('mappingRule');
    const coordTableBody = document.getElementById('coordTableBody');

    // Canvas Resize Handler
    function resizeCanvas() {
      width = container.clientWidth;
      height = container.clientHeight;
      canvas.width = width;
      canvas.height = height;
      originX = Math.floor(width / 2 / gridSize) * gridSize;
      originY = Math.floor(height / 2 / gridSize) * gridSize;
      draw();
    }

    window.addEventListener('resize', resizeCanvas);

    // Coordinate Conversion
    function toCanvasX(x) { return originX + x * gridSize; }
    function toCanvasY(y) { return originY - y * gridSize; }
    function toGridX(cx) { return Math.round((cx - originX) / gridSize); }
    function toGridY(cy) { return Math.round((originY - cy) / gridSize); }

    // Label Generator
    function getVertexLabel(index) {
      const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      if (index < 26) return alphabet[index];
      return "P" + (index + 1);
    }

    // Transformation Calculation
    function transformPoint(p, progress = 1) {
      let x = p.x;
      let y = p.y;

      if (mode === 'rotation') {
        let cx = parseFloat(rotX.value) || 0;
        let cy = parseFloat(rotY.value) || 0;
        let angleDeg = parseFloat(angleSlider.value) * progress;
        let rad = (angleDeg * Math.PI) / 180;
        
        let dx = x - cx;
        let dy = y - cy;

        let rx = dx * Math.cos(rad) - dy * Math.sin(rad);
        let ry = dx * Math.sin(rad) + dy * Math.cos(rad);

        return { x: cx + rx, y: cy + ry };
      } 
      else if (mode === 'translation') {
        let dx = parseFloat(dxSlider.value) * progress;
        let dy = parseFloat(dySlider.value) * progress;
        return { x: x + dx, y: y + dy };
      } 
      else if (mode === 'reflection') {
        let type = reflectAxis.value;
        let finalX = x, finalY = y;
        
        if (type === 'x') finalY = -y;
        else if (type === 'y') finalX = -x;
        else if (type === 'yx') { finalX = y; finalY = x; }
        else if (type === 'y-x') { finalX = -y; finalY = -x; }

        return {
          x: x + (finalX - x) * progress,
          y: y + (finalY - y) * progress
        };
      } 
      else if (mode === 'dilation') {
        let cx = parseFloat(dilX.value) || 0;
        let cy = parseFloat(dilY.value) || 0;
        let k = 1 + (parseFloat(scaleSlider.value) - 1) * progress;

        return {
          x: cx + (x - cx) * k,
          y: cy + (y - cy) * k
        };
      }

      return { x, y };
    }

    // Main Render Loop
    function draw() {
      ctx.clearRect(0, 0, width, height);

      // Grid Lines
      if (showGrid.checked) {
        ctx.strokeStyle = '#1e293b';
        ctx.lineWidth = 1;

        for (let x = 0; x < width; x += gridSize) {
          ctx.beginPath();
          ctx.moveTo(x, 0); ctx.lineTo(x, height);
          ctx.stroke();
        }
        for (let y = 0; y < height; y += gridSize) {
          ctx.beginPath();
          ctx.moveTo(0, y); ctx.lineTo(width, y);
          ctx.stroke();
        }
      }

      // Cartesian Axes
      ctx.strokeStyle = '#64748b';
      ctx.lineWidth = 2;
      ctx.beginPath(); ctx.moveTo(0, originY); ctx.lineTo(width, originY); ctx.stroke();
      ctx.beginPath(); ctx.moveTo(originX, 0); ctx.lineTo(originX, height); ctx.stroke();

      // Axis Numbers
      ctx.fillStyle = '#94a3b8';
      ctx.font = '10px sans-serif';
      for (let x = -20; x <= 20; x += 2) {
        if (x !== 0) ctx.fillText(x, toCanvasX(x) - 6, originY + 15);
      }
      for (let y = -20; y <= 20; y += 2) {
        if (y !== 0) ctx.fillText(y, originX - 18, toCanvasY(y) + 4);
      }

      // Line of Reflection
      if (mode === 'reflection') {
        ctx.strokeStyle = '#f59e0b';
        ctx.lineWidth = 2;
        ctx.setLineDash([5, 5]);
        ctx.beginPath();
        let type = reflectAxis.value;

        if (type === 'x') {
          ctx.moveTo(0, originY); ctx.lineTo(width, originY);
        } else if (type === 'y') {
          ctx.moveTo(originX, 0); ctx.lineTo(originX, height);
        } else if (type === 'yx') {
          ctx.moveTo(toCanvasX(-20), toCanvasY(-20)); ctx.lineTo(toCanvasX(20), toCanvasY(20));
        } else if (type === 'y-x') {
          ctx.moveTo(toCanvasX(-20), toCanvasY(20)); ctx.lineTo(toCanvasX(20), toCanvasY(-20));
        }
        ctx.stroke();
        ctx.setLineDash([]);
      }

      // Transformed Shape Points
      let transformedShape = shape.map(p => transformPoint(p, animationProgress));

      // Visual Helper Lines / Arcs
      if (showArcs.checked) {
        ctx.strokeStyle = '#334155';
        ctx.lineWidth = 1;
        ctx.setLineDash([3, 3]);

        if (mode === 'rotation') {
          let cx = parseFloat(rotX.value) || 0;
          let cy = parseFloat(rotY.value) || 0;
          let angleDeg = parseFloat(angleSlider.value) * animationProgress;

          shape.forEach((p, i) => {
            let tp = transformedShape[i];
            let r = Math.hypot(p.x - cx, p.y - cy);
            if (r > 0) {
              let startAngle = -Math.atan2(p.y - cy, p.x - cx);
              let endAngle = -Math.atan2(tp.y - cy, tp.x - cx);
              
              ctx.beginPath();
              ctx.arc(toCanvasX(cx), toCanvasY(cy), r * gridSize, startAngle, endAngle, angleDeg < 0);
              ctx.stroke();
            }
          });
        } else if (mode === 'dilation') {
          let cx = parseFloat(dilX.value) || 0;
          let cy = parseFloat(dilY.value) || 0;
          shape.forEach((p, i) => {
            let tp = transformedShape[i];
            ctx.beginPath();
            ctx.moveTo(toCanvasX(cx), toCanvasY(cy));
            ctx.lineTo(toCanvasX(tp.x), toCanvasY(tp.y));
            ctx.stroke();
          });
        }
        ctx.setLineDash([]);
      }

      // Draw Pre-Image & Transformed Image
      drawPolygon(shape, '#38bdf8', 'rgba(56, 189, 248, 0.2)', '');
      drawPolygon(transformedShape, '#f43f5e', 'rgba(244, 63, 94, 0.25)', "'");

      // Draw Pivot Marker
      if (mode === 'rotation' || mode === 'dilation') {
        let cx = mode === 'rotation' ? (parseFloat(rotX.value) || 0) : (parseFloat(dilX.value) || 0);
        let cy = mode === 'rotation' ? (parseFloat(rotY.value) || 0) : (parseFloat(dilY.value) || 0);
        
        ctx.fillStyle = '#f59e0b';
        ctx.beginPath();
        ctx.arc(toCanvasX(cx), toCanvasY(cy), 6, 0, Math.PI * 2);
        ctx.fill();
        ctx.strokeStyle = '#ffffff';
        ctx.lineWidth = 2;
        ctx.stroke();

        if (showLabels.checked) {
          ctx.fillStyle = '#f59e0b';
          ctx.font = 'bold 11px sans-serif';
          ctx.fillText('Center (' + cx + ', ' + cy + ')', toCanvasX(cx) + 10, toCanvasY(cy) - 10);
        }
      }

      updateDataPanel(transformedShape);
    }

    function drawPolygon(pts, strokeColor, fillColor, labelSuffix) {
      if (pts.length === 0) return;

      ctx.beginPath();
      ctx.moveTo(toCanvasX(pts[0].x), toCanvasY(pts[0].y));
      for (let i = 1; i < pts.length; i++) {
        ctx.lineTo(toCanvasX(pts[i].x), toCanvasY(pts[i].y));
      }
      ctx.closePath();

      ctx.fillStyle = fillColor;
      ctx.fill();
      ctx.strokeStyle = strokeColor;
      ctx.lineWidth = 2;
      ctx.stroke();

      // Render Vertices & Labels
      pts.forEach((p, i) => {
        let cx = toCanvasX(p.x);
        let cy = toCanvasY(p.y);

        ctx.fillStyle = strokeColor;
        ctx.beginPath();
        ctx.arc(cx, cy, 5, 0, Math.PI * 2);
        ctx.fill();

        if (showLabels.checked) {
          ctx.fillStyle = '#f8fafc';
          ctx.font = 'bold 11px sans-serif';
          let label = (shape[i].id || getVertexLabel(i)) + labelSuffix;
          ctx.fillText(label + ' (' + p.x.toFixed(1) + ', ' + p.y.toFixed(1) + ')', cx + 7, cy - 7);
        }
      });
    }

    // Side Panel Updates
    function updateDataPanel(transformedShape) {
      if (mode === 'rotation') {
        let a = angleSlider.value;
        let cx = rotX.value, cy = rotY.value;
        mappingRule.innerText = 'Rotation by ' + a + '° about (' + cx + ', ' + cy + ')';
      } else if (mode === 'translation') {
        mappingRule.innerText = '(x, y) \u2192 (x + ' + dxSlider.value + ', y + ' + dySlider.value + ')';
      } else if (mode === 'reflection') {
        let type = reflectAxis.value;
        if (type === 'x') mappingRule.innerText = '(x, y) \u2192 (x, -y)';
        else if (type === 'y') mappingRule.innerText = '(x, y) \u2192 (-x, y)';
        else if (type === 'yx') mappingRule.innerText = '(x, y) \u2192 (y, x)';
        else if (type === 'y-x') mappingRule.innerText = '(x, y) \u2192 (-y, -x)';
      } else if (mode === 'dilation') {
        mappingRule.innerText = '(x, y) \u2192 (' + scaleSlider.value + 'x, ' + scaleSlider.value + 'y) about (' + dilX.value + ', ' + dilY.value + ')';
      }

      coordTableBody.innerHTML = '';
      shape.forEach((p, i) => {
        let tp = transformedShape[i];
        let row = document.createElement('tr');
        row.innerHTML = '<td><strong>' + p.id + '</strong></td><td>(' + p.x + ', ' + p.y + ')</td><td>(' + tp.x.toFixed(1) + ', ' + tp.y.toFixed(1) + ')</td>';
        coordTableBody.appendChild(row);
      });
    }

    // Drag and Drop Logic
    canvas.addEventListener('mousedown', (e) => {
      const rect = canvas.getBoundingClientRect();
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;

      // Check pivot center drag
      if (mode === 'rotation' || mode === 'dilation') {
        let cx = mode === 'rotation' ? parseFloat(rotX.value) : parseFloat(dilX.value);
        let cy = mode === 'rotation' ? parseFloat(rotY.value) : parseFloat(dilY.value);
        let dist = Math.hypot(mouseX - toCanvasX(cx), mouseY - toCanvasY(cy));
        if (dist < 12) {
          draggedCenter = true;
          return;
        }
      }

      // Check vertex drag
      shape.forEach(p => {
        let dist = Math.hypot(mouseX - toCanvasX(p.x), mouseY - toCanvasY(p.y));
        if (dist < 10) {
          draggedVertex = p;
        }
      });
    });

    canvas.addEventListener('mousemove', (e) => {
      if (!draggedVertex && !draggedCenter) return;
      const rect = canvas.getBoundingClientRect();
      let gx = toGridX(e.clientX - rect.left);
      let gy = toGridY(e.clientY - rect.top);

      if (draggedVertex) {
        draggedVertex.x = gx;
        draggedVertex.y = gy;
      } else if (draggedCenter) {
        if (mode === 'rotation') {
          rotX.value = gx; rotY.value = gy;
        } else {
          dilX.value = gx; dilY.value = gy;
        }
      }
      draw();
    });

    window.addEventListener('mouseup', () => {
      draggedVertex = null;
      draggedCenter = false;
    });

    // Control Event Listeners
    shapePresetSelect.addEventListener('change', (e) => {
      let key = e.target.value;
      if (key !== 'custom' && shapePresets[key]) {
        shape = JSON.parse(JSON.stringify(shapePresets[key]));
        draw();
      }
    });

    document.getElementById('addVertexBtn').addEventListener('click', () => {
      let nextId = getVertexLabel(shape.length);
      // Place new vertex near last vertex
      let last = shape[shape.length - 1] || { x: 0, y: 0 };
      shape.push({ id: nextId, x: last.x + 2, y: last.y + 1 });
      shapePresetSelect.value = 'custom';
      draw();
    });

    document.getElementById('removeVertexBtn').addEventListener('click', () => {
      if (shape.length > 3) {
        shape.pop();
        shapePresetSelect.value = 'custom';
        draw();
      }
    });

    transformMode.addEventListener('change', (e) => {
      mode = e.target.value;
      document.getElementById('rotationControls').style.display = mode === 'rotation' ? 'flex' : 'none';
      document.getElementById('translationControls').style.display = mode === 'translation' ? 'flex' : 'none';
      document.getElementById('reflectionControls').style.display = mode === 'reflection' ? 'flex' : 'none';
      document.getElementById('dilationControls').style.display = mode === 'dilation' ? 'flex' : 'none';
      draw();
    });

    angleSlider.addEventListener('input', (e) => { angleVal.innerText = e.target.value + '°'; draw(); });
    dxSlider.addEventListener('input', (e) => { dxVal.innerText = e.target.value; draw(); });
    dySlider.addEventListener('input', (e) => { dyVal.innerText = e.target.value; draw(); });
    scaleSlider.addEventListener('input', (e) => { scaleVal.innerText = parseFloat(e.target.value).toFixed(2); draw(); });

    [rotX, rotY, dilX, dilY, reflectAxis, showGrid, showLabels, showArcs].forEach(elem => {
      elem.addEventListener('change', draw);
      elem.addEventListener('input', draw);
    });

    function setAngle(deg) {
      angleSlider.value = deg;
      angleVal.innerText = deg + '°';
      draw();
    }

    // Animation Handler
    document.getElementById('animateBtn').addEventListener('click', () => {
      if (isAnimating) return;
      isAnimating = true;
      animationProgress = 0;

      let startTime = null;
      const duration = 1200;

      function animateFrame(timestamp) {
        if (!startTime) startTime = timestamp;
        let elapsed = timestamp - startTime;
        animationProgress = Math.min(elapsed / duration, 1);
        
        animationProgress = animationProgress < 0.5 
          ? 2 * animationProgress * animationProgress 
          : -1 + (4 - 2 * animationProgress) * animationProgress;

        draw();

        if (elapsed < duration) {
          requestAnimationFrame(animateFrame);
        } else {
          animationProgress = 1;
          isAnimating = false;
          draw();
        }
      }

      requestAnimationFrame(animateFrame);
    });

    // Reset Current Shape
    document.getElementById('resetShapeBtn').addEventListener('click', () => {
      let key = shapePresetSelect.value;
      if (key !== 'custom' && shapePresets[key]) {
        shape = JSON.parse(JSON.stringify(shapePresets[key]));
      }
      rotX.value = 0; rotY.value = 0;
      dilX.value = 0; dilY.value = 0;
      angleSlider.value = 90; angleVal.innerText = '90°';
      dxSlider.value = 3; dxVal.innerText = '3';
      dySlider.value = 2; dyVal.innerText = '2';
      scaleSlider.value = 2.0; scaleVal.innerText = '2.0';
      draw();
    });

    // Initial Load
    resizeCanvas();
  </script>
</body>
</html>`,
    isCustomImport: true,
    authorEmail: "ndunj123@gmail.com",
    authorName: "Axiom Creator",
    createdAt: "2026-08-21"
  },
  {
    id: "sim-advanced-multi-step-geometric-transformation",
    title: "Advanced Multi-Step Geometric Transformations & Composite Lab",
    tagline: "Build, animate, and analyze multi-step transformation pipelines, glide reflections, and non-commutative composite operations",
    discipline: "mathematics",
    gradeLevel: ["Middle School (6-8)", "High School (9-12)", "AP / IB STEM"],
    standards: ["CCSS.MATH.CONTENT.8.G.A.1", "CCSS.MATH.CONTENT.8.G.A.3", "HSG-CO.A.2", "HSG-CO.A.5"],
    description: "An advanced Cartesian geometry laboratory for chaining multiple geometric transformations (rotations, translations, reflections, dilations) into an animated execution sequence. Explore intermediate stage shapes, non-commutative operations, glide reflections, and composite algebraic mapping rules.",
    learningObjectives: [
      "Analyze composite geometric transformations and determine if composite operations are commutative (e.g., T₁ ∘ T₂ vs T₂ ∘ T₁)",
      "Construct and animate multi-step transformation pipelines such as glide reflections (reflection + vector translation)",
      "Calculate intermediate and final image vertex coordinates for composite sequences using sequential algebraic rules"
    ],
    thumbnailGradient: "from-purple-600 via-indigo-600 to-pink-500",
    badgeColor: "bg-purple-500/10 text-purple-300 border-purple-500/20",
    iconName: "Layers",
    rating: 4.9,
    reviewCount: 56,
    teacherCount: 194,
    licenseType: "Academic STEM Classroom & Institutional License",
    pricing: {
      singleTeacher: 19,
      schoolDepartment: 200,
      districtUnlimited: 400
    },
    features: [
      "Dual Execution Engine: Single live transformation mode & Composite multi-step pipeline sequence queue",
      "Multi-Step Pipeline Builder: Chain arbitrary rotations, reflections, translations, and dilations with step-by-step animation",
      "Intermediate Stage Visualization: View phantom ghost outlines of intermediate polygons between transformation steps",
      "Preset Glide Reflection and custom composite sequences",
      "Interactive Polygon Vertex Manipulation & Center of Rotation/Dilation dragging"
    ],
    parameterDefaults: {
      angle: 90,
      dx: 3,
      dy: 2,
      scale: 2.0
    },
    parameterControls: [
      {
        key: "angle",
        label: "Rotation Angle (θ)",
        min: -360,
        max: 360,
        step: 5,
        unit: "°",
        description: "Angle of rotation in current tool"
      },
      {
        key: "dx",
        label: "Horizontal Shift (Δx)",
        min: -10,
        max: 10,
        step: 1,
        unit: "units",
        description: "Horizontal translation in current tool"
      },
      {
        key: "dy",
        label: "Vertical Shift (Δy)",
        min: -10,
        max: 10,
        step: 1,
        unit: "units",
        description: "Vertical translation in current tool"
      },
      {
        key: "scale",
        label: "Scale Factor (k)",
        min: 0.25,
        max: 3,
        step: 0.25,
        unit: "×",
        description: "Dilation factor in current tool"
      }
    ],
    sampleChallenges: [
      {
        id: "ch-adv-geom-1",
        title: "Construct a Glide Reflection",
        instruction: "Build a composite pipeline consisting of a reflection across the X-axis followed by a horizontal translation of Δx = +4.",
        targetMetric: "Composite Pipeline Steps",
        targetValue: 2,
        tolerance: 0,
        currentValueKey: "pipelineLength",
        rewardBadge: "Glide Reflection Specialist"
      }
    ],
    previewFacts: [
      "A glide reflection is the composition of a reflection over a line and a translation parallel to that line.",
      "Most geometric compositions are non-commutative: rotating then translating often yields a vastly different image than translating then rotating."
    ],
    isHtmlApp: true,
    htmlContent: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Geometric Transformations & Rotation Virtual Lab</title>
  <style>
    :root {
      --bg-color: #0f172a;
      --card-bg: #1e293b;
      --accent-blue: #38bdf8;
      --accent-red: #f43f5e;
      --accent-green: #10b981;
      --accent-yellow: #f59e0b;
      --accent-purple: #c084fc;
      --text-main: #f8fafc;
      --text-muted: #94a3b8;
      --border-color: #334155;
    }

    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
      font-family: 'Segoe UI', system-ui, -apple-system, sans-serif;
    }

    body {
      background-color: var(--bg-color);
      color: var(--text-main);
      min-height: 100vh;
      display: flex;
      flex-direction: column;
    }

    header {
      background-color: var(--card-bg);
      padding: 1rem 1.5rem;
      border-bottom: 1px solid var(--border-color);
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    header h1 {
      font-size: 1.25rem;
      color: var(--accent-blue);
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }

    header span {
      font-size: 0.85rem;
      color: var(--text-muted);
      background: #0f172a;
      padding: 0.2rem 0.6rem;
      border-radius: 4px;
      border: 1px solid var(--border-color);
    }

    .app-container {
      display: grid;
      grid-template-columns: 340px 1fr 320px;
      gap: 1rem;
      padding: 1rem;
      flex: 1;
      height: calc(100vh - 60px);
      overflow: hidden;
    }

    .panel {
      background-color: var(--card-bg);
      border-radius: 8px;
      border: 1px solid var(--border-color);
      padding: 1rem;
      display: flex;
      flex-direction: column;
      gap: 0.9rem;
      overflow-y: auto;
    }

    .panel-title {
      font-size: 0.85rem;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      color: var(--text-muted);
      border-bottom: 1px solid var(--border-color);
      padding-bottom: 0.4rem;
      font-weight: 600;
    }

    .control-group {
      display: flex;
      flex-direction: column;
      gap: 0.4rem;
    }

    .control-group label {
      font-size: 0.85rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    select, input[type="number"], button {
      background-color: var(--bg-color);
      color: var(--text-main);
      border: 1px solid var(--border-color);
      padding: 0.45rem;
      border-radius: 4px;
      font-size: 0.85rem;
      outline: none;
    }

    select:focus, input:focus, button:focus {
      border-color: var(--accent-blue);
    }

    input[type="range"] {
      width: 100%;
      accent-color: var(--accent-blue);
    }

    .btn {
      cursor: pointer;
      font-weight: 600;
      transition: background 0.2s, color 0.2s;
    }

    .btn-primary {
      background-color: var(--accent-blue);
      color: #0f172a;
      border: none;
    }

    .btn-primary:hover {
      background-color: #7dd3fc;
    }

    .btn-secondary {
      background-color: transparent;
      color: var(--accent-blue);
      border: 1px solid var(--accent-blue);
    }

    .btn-secondary:hover {
      background-color: rgba(56, 189, 248, 0.1);
    }

    .btn-danger {
      background-color: transparent;
      color: var(--accent-red);
      border: 1px solid var(--accent-red);
    }

    .btn-danger:hover {
      background-color: rgba(244, 63, 94, 0.1);
    }

    .preset-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 0.5rem;
    }

    .canvas-container {
      position: relative;
      background-color: #0b1120;
      border-radius: 8px;
      border: 1px solid var(--border-color);
      display: flex;
      justify-content: center;
      align-items: center;
      overflow: hidden;
    }

    canvas {
      cursor: crosshair;
    }

    .overlay-controls {
      position: absolute;
      top: 10px;
      right: 10px;
      background-color: rgba(30, 41, 59, 0.85);
      padding: 0.5rem 0.75rem;
      border-radius: 6px;
      border: 1px solid var(--border-color);
      display: flex;
      flex-direction: column;
      gap: 0.4rem;
      backdrop-filter: blur(4px);
    }

    .overlay-controls label {
      font-size: 0.8rem;
      display: flex;
      align-items: center;
      gap: 0.4rem;
      cursor: pointer;
    }

    /* Pipeline / Sequence Controls */
    .pipeline-list {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      max-height: 180px;
      overflow-y: auto;
    }

    .pipeline-item {
      background-color: var(--bg-color);
      border: 1px solid var(--border-color);
      border-radius: 4px;
      padding: 0.5rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size: 0.8rem;
    }

    .pipeline-item.active {
      border-color: var(--accent-blue);
      background-color: rgba(56, 189, 248, 0.05);
    }

    .pipeline-item-title {
      font-weight: bold;
      color: var(--accent-purple);
    }

    .matrix-box {
      background-color: var(--bg-color);
      padding: 0.6rem;
      border-radius: 6px;
      border: 1px solid var(--border-color);
      font-family: 'Courier New', Courier, monospace;
      font-size: 0.8rem;
      color: var(--accent-blue);
      text-align: center;
      line-height: 1.3;
    }

    .coord-table {
      width: 100%;
      border-collapse: collapse;
      font-size: 0.8rem;
    }

    .coord-table th, .coord-table td {
      border: 1px solid var(--border-color);
      padding: 0.35rem;
      text-align: center;
    }

    .coord-table th {
      background-color: var(--bg-color);
      color: var(--text-muted);
    }

    .tag-pre { color: var(--accent-blue); font-weight: bold; }
    .tag-inter { color: var(--accent-purple); font-weight: bold; }
    .tag-post { color: var(--accent-red); font-weight: bold; }

    @media (max-width: 1024px) {
      .app-container {
        grid-template-columns: 1fr;
        height: auto;
        overflow: visible;
      }
      .canvas-container {
        height: 500px;
      }
    }
  </style>
</head>
<body>

  <header>
    <h1>📐 Geometric Transformations & Composite Lab</h1>
    <span>Multi-Step Transformation Pipeline</span>
  </header>

  <div class="app-container">
    
    <!-- Left Control Panel -->
    <div class="panel">
      
      <!-- Shape Selector -->
      <div class="panel-title">1. Select Shape</div>
      <div class="control-group">
        <select id="shapePreset">
          <option value="triangle">Triangle (3 Vertices)</option>
          <option value="rectangle">Rectangle (4 Vertices)</option>
          <option value="parallelogram">Parallelogram (4 Vertices)</option>
          <option value="pentagon">Regular Pentagon (5 Vertices)</option>
          <option value="star">5-Pointed Star (10 Vertices)</option>
          <option value="custom">Custom Polygon</option>
        </select>
      </div>

      <div class="preset-grid">
        <button class="btn btn-secondary" id="addVertexBtn">+ Add Vertex</button>
        <button class="btn btn-danger" id="removeVertexBtn">- Remove Vertex</button>
      </div>

      <!-- Mode Selector -->
      <div class="panel-title" style="margin-top:0.3rem;">2. Mode & Single Tool</div>
      <div class="control-group">
        <select id="executionMode">
          <option value="single">Single Transformation</option>
          <option value="composite">Composite (Multi-Step Sequence)</option>
        </select>
      </div>

      <div class="control-group" id="singleTransformGroup">
        <label for="transformMode">Active Tool</label>
        <select id="transformMode">
          <option value="rotation">Rotation</option>
          <option value="translation">Translation</option>
          <option value="reflection">Reflection</option>
          <option value="dilation">Dilation</option>
        </select>
      </div>

      <!-- Controls: Rotation -->
      <div id="rotationControls" class="control-group">
        <label>Angle (θ): <span id="angleVal">90°</span></label>
        <input type="range" id="angleSlider" min="-360" max="360" value="90" step="5">
        <div class="preset-grid">
          <button class="btn btn-secondary" onclick="setAngle(90)">90° CCW</button>
          <button class="btn btn-secondary" onclick="setAngle(180)">180°</button>
          <button class="btn btn-secondary" onclick="setAngle(270)">270° CCW</button>
          <button class="btn btn-secondary" onclick="setAngle(-90)">-90° (90° CW)</button>
        </div>
        <label style="margin-top:0.4rem;">Center of Rotation (x₀, y₀)</label>
        <div style="display:flex; gap:0.5rem;">
          <input type="number" id="rotX" value="0" step="1">
          <input type="number" id="rotY" value="0" step="1">
        </div>
      </div>

      <!-- Controls: Translation -->
      <div id="translationControls" class="control-group" style="display:none;">
        <label>Horizontal Shift (Δx): <span id="dxVal">3</span></label>
        <input type="range" id="dxSlider" min="-10" max="10" value="3" step="1">
        
        <label>Vertical Shift (Δy): <span id="dyVal">2</span></label>
        <input type="range" id="dySlider" min="-10" max="10" value="2" step="1">
      </div>

      <!-- Controls: Reflection -->
      <div id="reflectionControls" class="control-group" style="display:none;">
        <label for="reflectAxis">Line of Reflection</label>
        <select id="reflectAxis">
          <option value="x">X-Axis (y = 0)</option>
          <option value="y">Y-Axis (x = 0)</option>
          <option value="yx">Line y = x</option>
          <option value="y-x">Line y = -x</option>
        </select>
      </div>

      <!-- Controls: Dilation -->
      <div id="dilationControls" class="control-group" style="display:none;">
        <label>Scale Factor (k): <span id="scaleVal">2.0</span></label>
        <input type="range" id="scaleSlider" min="0.25" max="3" value="2.0" step="0.25">
        
        <label>Center of Dilation (x₀, y₀)</label>
        <div style="display:flex; gap:0.5rem;">
          <input type="number" id="dilX" value="0" step="1">
          <input type="number" id="dilY" value="0" step="1">
        </div>
      </div>

      <!-- Add to Pipeline (Composite Mode) -->
      <button class="btn btn-secondary" id="addStepBtn" style="display:none; border-color: var(--accent-purple); color: var(--accent-purple);">
        + Add Current Tool to Sequence
      </button>

      <div class="panel-title" style="margin-top:0.3rem;">3. Actions</div>
      <button class="btn btn-primary" id="animateBtn">▶ Animate Sequence</button>
      <button class="btn btn-secondary" id="resetShapeBtn">Reset Current Shape</button>

    </div>

    <!-- Center Interactive Canvas -->
    <div class="canvas-container" id="canvasContainer">
      <canvas id="gridCanvas"></canvas>
      
      <div class="overlay-controls">
        <label><input type="checkbox" id="showGrid" checked> Grid Lines</label>
        <label><input type="checkbox" id="showLabels" checked> Vertex Labels</label>
        <label><input type="checkbox" id="showIntermediate" checked> Intermediate Shapes</label>
        <label><input type="checkbox" id="showArcs" checked> Helper Lines / Rays</label>
      </div>
    </div>

    <!-- Right Composite Pipeline & Data Panel -->
    <div class="panel">
      
      <!-- Composite Pipeline Queue -->
      <div id="compositeSection" style="display:none;" class="control-group">
        <div class="panel-title">Sequence Pipeline</div>
        <div class="pipeline-list" id="pipelineList">
          <!-- Dynamically populated -->
        </div>
        <div class="preset-grid" style="margin-top:0.4rem;">
          <button class="btn btn-danger" id="clearPipelineBtn">Clear Steps</button>
          <button class="btn btn-secondary" id="presetGlideBtn">Glide Reflection</button>
        </div>
      </div>

      <div class="panel-title">Composite Mapping Rule</div>
      <div class="matrix-box" id="mappingRule">
        (x, y) → (-y, x)
      </div>

      <div class="panel-title">Coordinate Table</div>
      <div style="max-height: 220px; overflow-y: auto; border: 1px solid var(--border-color); border-radius: 4px;">
        <table class="coord-table">
          <thead>
            <tr>
              <th>Point</th>
              <th>Original <span class="tag-pre">(Blue)</span></th>
              <th>Final <span class="tag-post">(Red)</span></th>
            </tr>
          </thead>
          <tbody id="coordTableBody">
            <!-- Populated dynamically -->
          </tbody>
        </table>
      </div>

      <div class="panel-title">Composite Guide</div>
      <p style="font-size:0.78rem; color: var(--text-muted); line-height: 1.35;">
        • <strong>Single Mode:</strong> Adjust sliders to apply one live transformation.<br><br>
        • <strong>Composite Mode:</strong> Build a multi-step sequence (e.g. Reflect across Y-axis, then Rotate 90° about origin).<br><br>
        • <strong>Order Matters:</strong> Toggle or reorder steps to prove that non-commutative operations produce different final outcomes.
      </p>
    </div>

  </div>

  <script>
    const canvas = document.getElementById('gridCanvas');
    const ctx = canvas.getContext('2d');
    const container = document.getElementById('canvasContainer');

    let width, height;
    const gridSize = 30; 
    let originX, originY;

    // Execution state
    let executionMode = 'single'; // 'single' or 'composite'
    let mode = 'rotation';
    let animationProgress = 1; 
    let isAnimating = false;
    let draggedVertex = null;
    let draggedCenter = false;

    // Transformation Sequence Array for Composite Mode
    let pipeline = [
      { id: 1, type: 'reflection', axis: 'y', label: 'Reflection over Y-Axis' },
      { id: 2, type: 'rotation', angle: 90, cx: 0, cy: 0, label: 'Rotation 90° about (0,0)' }
    ];

    // Presets
    const shapePresets = {
      triangle: [
        { id: 'A', x: 2, y: 2 },
        { id: 'B', x: 6, y: 2 },
        { id: 'C', x: 4, y: 6 }
      ],
      rectangle: [
        { id: 'A', x: 1, y: 1 },
        { id: 'B', x: 6, y: 1 },
        { id: 'C', x: 6, y: 4 },
        { id: 'D', x: 1, y: 4 }
      ],
      parallelogram: [
        { id: 'A', x: 1, y: 1 },
        { id: 'B', x: 5, y: 1 },
        { id: 'C', x: 7, y: 4 },
        { id: 'D', x: 3, y: 4 }
      ],
      pentagon: [
        { id: 'A', x: 3, y: 6 },
        { id: 'B', x: 6, y: 4 },
        { id: 'C', x: 5, y: 1 },
        { id: 'D', x: 1, y: 1 },
        { id: 'E', x: 0, y: 4 }
      ],
      star: [
        { id: 'A', x: 3, y: 7 }, { id: 'B', x: 4, y: 4 }, { id: 'C', x: 7, y: 4 },
        { id: 'D', x: 5, y: 2 }, { id: 'E', x: 6, y: -1 }, { id: 'F', x: 3, y: 1 },
        { id: 'G', x: 0, y: -1 }, { id: 'H', x: 1, y: 2 }, { id: 'I', x: -1, y: 4 },
        { id: 'J', x: 2, y: 4 }
      ]
    };

    let shape = JSON.parse(JSON.stringify(shapePresets.triangle));

    // Elements
    const executionModeSelect = document.getElementById('executionMode');
    const singleTransformGroup = document.getElementById('singleTransformGroup');
    const addStepBtn = document.getElementById('addStepBtn');
    const compositeSection = document.getElementById('compositeSection');
    const pipelineList = document.getElementById('pipelineList');

    const shapePresetSelect = document.getElementById('shapePreset');
    const transformMode = document.getElementById('transformMode');
    const angleSlider = document.getElementById('angleSlider');
    const angleVal = document.getElementById('angleVal');
    const rotX = document.getElementById('rotX');
    const rotY = document.getElementById('rotY');
    const dxSlider = document.getElementById('dxSlider');
    const dySlider = document.getElementById('dySlider');
    const dxVal = document.getElementById('dxVal');
    const dyVal = document.getElementById('dyVal');
    const reflectAxis = document.getElementById('reflectAxis');
    const scaleSlider = document.getElementById('scaleSlider');
    const scaleVal = document.getElementById('scaleVal');
    const dilX = document.getElementById('dilX');
    const dilY = document.getElementById('dilY');
    
    const showGrid = document.getElementById('showGrid');
    const showLabels = document.getElementById('showLabels');
    const showIntermediate = document.getElementById('showIntermediate');
    const showArcs = document.getElementById('showArcs');
    
    const mappingRule = document.getElementById('mappingRule');
    const coordTableBody = document.getElementById('coordTableBody');

    function resizeCanvas() {
      width = container.clientWidth;
      height = container.clientHeight;
      canvas.width = width;
      canvas.height = height;
      originX = Math.floor(width / 2 / gridSize) * gridSize;
      originY = Math.floor(height / 2 / gridSize) * gridSize;
      draw();
    }

    window.addEventListener('resize', resizeCanvas);

    function toCanvasX(x) { return originX + x * gridSize; }
    function toCanvasY(y) { return originY - y * gridSize; }
    function toGridX(cx) { return Math.round((cx - originX) / gridSize); }
    function toGridY(cy) { return Math.round((originY - cy) / gridSize); }

    function getVertexLabel(index) {
      const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      return index < 26 ? alphabet[index] : "P" + (index + 1);
    }

    // Single Step Transformer
    function applySingleTransform(p, step, factor = 1) {
      let x = p.x, y = p.y;

      if (step.type === 'rotation') {
        let cx = step.cx, cy = step.cy;
        let angleDeg = step.angle * factor;
        let rad = (angleDeg * Math.PI) / 180;
        let dx = x - cx, dy = y - cy;
        return {
          x: cx + (dx * Math.cos(rad) - dy * Math.sin(rad)),
          y: cy + (dx * Math.sin(rad) + dy * Math.cos(rad))
        };
      } else if (step.type === 'translation') {
        return {
          x: x + step.dx * factor,
          y: y + step.dy * factor
        };
      } else if (step.type === 'reflection') {
        let finalX = x, finalY = y;
        if (step.axis === 'x') finalY = -y;
        else if (step.axis === 'y') finalX = -x;
        else if (step.axis === 'yx') { finalX = y; finalY = x; }
        else if (step.axis === 'y-x') { finalX = -y; finalY = -x; }
        return {
          x: x + (finalX - x) * factor,
          y: y + (finalY - y) * factor
        };
      } else if (step.type === 'dilation') {
        let k = 1 + (step.k - 1) * factor;
        return {
          x: step.cx + (x - step.cx) * k,
          y: step.cy + (y - step.cy) * k
        };
      }
      return { x, y };
    }

    // Get Current Tool Settings Object
    function getCurrentToolStep() {
      if (mode === 'rotation') {
        return {
          type: 'rotation',
          angle: parseFloat(angleSlider.value),
          cx: parseFloat(rotX.value) || 0,
          cy: parseFloat(rotY.value) || 0,
          label: 'Rotation ' + angleSlider.value + '° about (' + rotX.value + ', ' + rotY.value + ')'
        };
      } else if (mode === 'translation') {
        return {
          type: 'translation',
          dx: parseFloat(dxSlider.value),
          dy: parseFloat(dySlider.value),
          label: 'Translation (' + dxSlider.value + ', ' + dySlider.value + ')'
        };
      } else if (mode === 'reflection') {
        return {
          type: 'reflection',
          axis: reflectAxis.value,
          label: 'Reflection over ' + reflectAxis.value.toUpperCase() + '-Axis'
        };
      } else if (mode === 'dilation') {
        return {
          type: 'dilation',
          k: parseFloat(scaleSlider.value),
          cx: parseFloat(dilX.value) || 0,
          cy: parseFloat(dilY.value) || 0,
          label: 'Dilation k=' + scaleSlider.value + ' about (' + dilX.value + ', ' + dilY.value + ')'
        };
      }
    }

    // Pipeline Execution Engine
    function computePipelineShapes() {
      let stages = [shape.map(p => ({ ...p }))]; // Stage 0 is original shape

      if (executionMode === 'single') {
        let currentStep = getCurrentToolStep();
        let transformed = stages[0].map(p => applySingleTransform(p, currentStep, animationProgress));
        stages.push(transformed);
      } else {
        // Composite Mode
        let currentPts = stages[0].map(p => ({ ...p }));
        let totalSteps = pipeline.length;

        if (totalSteps === 0) {
          stages.push(currentPts);
          return stages;
        }

        let scaledProgress = animationProgress * totalSteps;
        let currentStepIndex = Math.floor(scaledProgress);
        if (currentStepIndex >= totalSteps) currentStepIndex = totalSteps - 1;
        let stepFactor = scaledProgress - currentStepIndex;

        for (let i = 0; i < pipeline.length; i++) {
          let step = pipeline[i];
          if (i < currentStepIndex) {
            currentPts = currentPts.map(p => applySingleTransform(p, step, 1));
            stages.push(currentPts.map(p => ({ ...p })));
          } else if (i === currentStepIndex) {
            currentPts = currentPts.map(p => applySingleTransform(p, step, stepFactor));
            stages.push(currentPts.map(p => ({ ...p })));
          } else {
            // Unreached steps stay at current state
            stages.push(currentPts.map(p => ({ ...p })));
          }
        }
      }

      return stages;
    }

    // Render Canvas
    function draw() {
      ctx.clearRect(0, 0, width, height);

      // Grid
      if (showGrid.checked) {
        ctx.strokeStyle = '#1e293b';
        ctx.lineWidth = 1;
        for (let x = 0; x < width; x += gridSize) {
          ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, height); ctx.stroke();
        }
        for (let y = 0; y < height; y += gridSize) {
          ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(width, y); ctx.stroke();
        }
      }

      // Axes
      ctx.strokeStyle = '#64748b';
      ctx.lineWidth = 2;
      ctx.beginPath(); ctx.moveTo(0, originY); ctx.lineTo(width, originY); ctx.stroke();
      ctx.beginPath(); ctx.moveTo(originX, 0); ctx.lineTo(originX, height); ctx.stroke();

      // Axis Labels
      ctx.fillStyle = '#94a3b8';
      ctx.font = '10px sans-serif';
      for (let x = -20; x <= 20; x += 2) {
        if (x !== 0) ctx.fillText(x, toCanvasX(x) - 6, originY + 15);
      }
      for (let y = -20; y <= 20; y += 2) {
        if (y !== 0) ctx.fillText(y, originX - 18, toCanvasY(y) + 4);
      }

      // Compute all stages
      let stages = computePipelineShapes();
      let originalShape = stages[0];
      let finalShape = stages[stages.length - 1];

      // Draw Intermediate Shapes if enabled
      if (showIntermediate.checked && stages.length > 2) {
        for (let i = 1; i < stages.length - 1; i++) {
          drawPolygon(stages[i], '#c084fc', 'rgba(192, 132, 252, 0.1)', '⁽' + i + '⁾', true);
        }
      }

      // Draw Original Pre-Image
      drawPolygon(originalShape, '#38bdf8', 'rgba(56, 189, 248, 0.2)', '');

      // Draw Final Transformed Image
      drawPolygon(finalShape, '#f43f5e', 'rgba(244, 63, 94, 0.25)', "'");

      // Pivot Markers for single mode
      if (executionMode === 'single' && (mode === 'rotation' || mode === 'dilation')) {
        let cx = mode === 'rotation' ? (parseFloat(rotX.value) || 0) : (parseFloat(dilX.value) || 0);
        let cy = mode === 'rotation' ? (parseFloat(rotY.value) || 0) : (parseFloat(dilY.value) || 0);
        
        ctx.fillStyle = '#f59e0b';
        ctx.beginPath(); ctx.arc(toCanvasX(cx), toCanvasY(cy), 6, 0, Math.PI * 2); ctx.fill();
        ctx.strokeStyle = '#ffffff'; ctx.lineWidth = 2; ctx.stroke();

        if (showLabels.checked) {
          ctx.fillStyle = '#f59e0b';
          ctx.font = 'bold 11px sans-serif';
          ctx.fillText('Center (' + cx + ', ' + cy + ')', toCanvasX(cx) + 10, toCanvasY(cy) - 10);
        }
      }

      updateDataPanel(originalShape, finalShape);
    }

    function drawPolygon(pts, strokeColor, fillColor, labelSuffix, isDashed = false) {
      if (pts.length === 0) return;

      ctx.beginPath();
      ctx.moveTo(toCanvasX(pts[0].x), toCanvasY(pts[0].y));
      for (let i = 1; i < pts.length; i++) {
        ctx.lineTo(toCanvasX(pts[i].x), toCanvasY(pts[i].y));
      }
      ctx.closePath();

      ctx.fillStyle = fillColor;
      ctx.fill();
      ctx.strokeStyle = strokeColor;
      ctx.lineWidth = 2;
      if (isDashed) ctx.setLineDash([4, 4]);
      ctx.stroke();
      ctx.setLineDash([]);

      pts.forEach((p, i) => {
        let cx = toCanvasX(p.x);
        let cy = toCanvasY(p.y);

        ctx.fillStyle = strokeColor;
        ctx.beginPath();
        ctx.arc(cx, cy, 4, 0, Math.PI * 2);
        ctx.fill();

        if (showLabels.checked) {
          ctx.fillStyle = '#f8fafc';
          ctx.font = 'bold 11px sans-serif';
          let label = (shape[i].id || getVertexLabel(i)) + labelSuffix;
          ctx.fillText(label + ' (' + p.x.toFixed(1) + ', ' + p.y.toFixed(1) + ')', cx + 6, cy - 6);
        }
      });
    }

    // Render Side Panel Pipeline Controls
    function renderPipelineUI() {
      pipelineList.innerHTML = '';
      pipeline.forEach((step, index) => {
        let item = document.createElement('div');
        item.className = 'pipeline-item';
        item.innerHTML = '<div><span class="pipeline-item-title">Step ' + (index + 1) + ':</span> ' + step.label + '</div><button class="btn btn-danger" style="padding:0.2rem 0.4rem; font-size:0.75rem;" onclick="removePipelineStep(' + index + ')">✕</button>';
        pipelineList.appendChild(item);
      });
    }

    function removePipelineStep(index) {
      pipeline.splice(index, 1);
      renderPipelineUI();
      draw();
    }

    // Side Data Panel
    function updateDataPanel(originalShape, finalShape) {
      if (executionMode === 'single') {
        let step = getCurrentToolStep();
        mappingRule.innerText = step.label;
      } else {
        mappingRule.innerText = pipeline.length > 0 
          ? pipeline.map((s, i) => 'T' + (i + 1) + ': ' + s.type.toUpperCase()).join(' \u2192 ')
          : "No Steps in Sequence";
      }

      coordTableBody.innerHTML = '';
      originalShape.forEach((p, i) => {
        let fp = finalShape[i];
        let row = document.createElement('tr');
        row.innerHTML = '<td><strong>' + p.id + '</strong></td><td>(' + p.x + ', ' + p.y + ')</td><td>(' + fp.x.toFixed(1) + ', ' + fp.y.toFixed(1) + ')</td>';
        coordTableBody.appendChild(row);
      });
    }

    // Dragging Logic
    canvas.addEventListener('mousedown', (e) => {
      const rect = canvas.getBoundingClientRect();
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;

      if (executionMode === 'single' && (mode === 'rotation' || mode === 'dilation')) {
        let cx = mode === 'rotation' ? parseFloat(rotX.value) : parseFloat(dilX.value);
        let cy = mode === 'rotation' ? parseFloat(rotY.value) : parseFloat(dilY.value);
        let dist = Math.hypot(mouseX - toCanvasX(cx), mouseY - toCanvasY(cy));
        if (dist < 12) {
          draggedCenter = true;
          return;
        }
      }

      shape.forEach(p => {
        let dist = Math.hypot(mouseX - toCanvasX(p.x), mouseY - toCanvasY(p.y));
        if (dist < 10) draggedVertex = p;
      });
    });

    canvas.addEventListener('mousemove', (e) => {
      if (!draggedVertex && !draggedCenter) return;
      const rect = canvas.getBoundingClientRect();
      let gx = toGridX(e.clientX - rect.left);
      let gy = toGridY(e.clientY - rect.top);

      if (draggedVertex) {
        draggedVertex.x = gx;
        draggedVertex.y = gy;
      } else if (draggedCenter) {
        if (mode === 'rotation') {
          rotX.value = gx; rotY.value = gy;
        } else {
          dilX.value = gx; dilY.value = gy;
        }
      }
      draw();
    });

    window.addEventListener('mouseup', () => {
      draggedVertex = null;
      draggedCenter = false;
    });

    // Control Handlers
    executionModeSelect.addEventListener('change', (e) => {
      executionMode = e.target.value;
      if (executionMode === 'composite') {
        compositeSection.style.display = 'flex';
        addStepBtn.style.display = 'block';
        renderPipelineUI();
      } else {
        compositeSection.style.display = 'none';
        addStepBtn.style.display = 'none';
      }
      draw();
    });

    addStepBtn.addEventListener('click', () => {
      let step = getCurrentToolStep();
      pipeline.push(step);
      renderPipelineUI();
      draw();
    });

    document.getElementById('clearPipelineBtn').addEventListener('click', () => {
      pipeline = [];
      renderPipelineUI();
      draw();
    });

    document.getElementById('presetGlideBtn').addEventListener('click', () => {
      pipeline = [
        { type: 'reflection', axis: 'x', label: 'Reflection over X-Axis' },
        { type: 'translation', dx: 4, dy: 0, label: 'Translation (4, 0)' }
      ];
      renderPipelineUI();
      draw();
    });

    shapePresetSelect.addEventListener('change', (e) => {
      let key = e.target.value;
      if (key !== 'custom' && shapePresets[key]) {
        shape = JSON.parse(JSON.stringify(shapePresets[key]));
        draw();
      }
    });

    document.getElementById('addVertexBtn').addEventListener('click', () => {
      let nextId = getVertexLabel(shape.length);
      let last = shape[shape.length - 1] || { x: 0, y: 0 };
      shape.push({ id: nextId, x: last.x + 2, y: last.y + 1 });
      shapePresetSelect.value = 'custom';
      draw();
    });

    document.getElementById('removeVertexBtn').addEventListener('click', () => {
      if (shape.length > 3) {
        shape.pop();
        shapePresetSelect.value = 'custom';
        draw();
      }
    });

    transformMode.addEventListener('change', (e) => {
      mode = e.target.value;
      document.getElementById('rotationControls').style.display = mode === 'rotation' ? 'flex' : 'none';
      document.getElementById('translationControls').style.display = mode === 'translation' ? 'flex' : 'none';
      document.getElementById('reflectionControls').style.display = mode === 'reflection' ? 'flex' : 'none';
      document.getElementById('dilationControls').style.display = mode === 'dilation' ? 'flex' : 'none';
      draw();
    });

    angleSlider.addEventListener('input', (e) => { angleVal.innerText = e.target.value + '°'; draw(); });
    dxSlider.addEventListener('input', (e) => { dxVal.innerText = e.target.value; draw(); });
    dySlider.addEventListener('input', (e) => { dyVal.innerText = e.target.value; draw(); });
    scaleSlider.addEventListener('input', (e) => { scaleVal.innerText = parseFloat(e.target.value).toFixed(2); draw(); });

    [rotX, rotY, dilX, dilY, reflectAxis, showGrid, showLabels, showIntermediate, showArcs].forEach(elem => {
      elem.addEventListener('change', draw);
      elem.addEventListener('input', draw);
    });

    function setAngle(deg) {
      angleSlider.value = deg;
      angleVal.innerText = deg + '°';
      draw();
    }

    // Animation Engine
    document.getElementById('animateBtn').addEventListener('click', () => {
      if (isAnimating) return;
      isAnimating = true;
      animationProgress = 0;

      let startTime = null;
      const duration = executionMode === 'composite' ? Math.max(1500, pipeline.length * 1000) : 1200;

      function animateFrame(timestamp) {
        if (!startTime) startTime = timestamp;
        let elapsed = timestamp - startTime;
        animationProgress = Math.min(elapsed / duration, 1);
        
        draw();

        if (elapsed < duration) {
          requestAnimationFrame(animateFrame);
        } else {
          animationProgress = 1;
          isAnimating = false;
          draw();
        }
      }

      requestAnimationFrame(animateFrame);
    });

    document.getElementById('resetShapeBtn').addEventListener('click', () => {
      let key = shapePresetSelect.value;
      if (key !== 'custom' && shapePresets[key]) {
        shape = JSON.parse(JSON.stringify(shapePresets[key]));
      }
      rotX.value = 0; rotY.value = 0;
      dilX.value = 0; dilY.value = 0;
      angleSlider.value = 90; angleVal.innerText = '90°';
      dxSlider.value = 3; dxVal.innerText = '3';
      dySlider.value = 2; dyVal.innerText = '2';
      scaleSlider.value = 2.0; scaleVal.innerText = '2.0';
      draw();
    });

    resizeCanvas();
  </script>
</body>
</html>`,
    isCustomImport: true,
    authorEmail: "ndunj123@gmail.com",
    authorName: "Axiom Creator",
    createdAt: "2026-08-21"
  },
  {
    id: "sim-high-precision-acid-base-titration",
    title: "High-Precision Acid-Base Titration Lab",
    tagline: "Calibrated Volumetric Glassware, Dynamic CaVa = CbVb Calculations & Real-Time Indicators",
    discipline: "chemistry",
    gradeLevel: ["High School (9-12)", "AP / IB STEM", "Undergraduate"],
    standards: ["HS-PS1-2", "HS-PS1-7", "AP Chemistry (Unit 8)", "NGSS SEP-3"],
    description: "A calibrated volumetric acid-base titration laboratory simulation. Features precision buret stopcock valve controls with variable flow rates (dropwise to stream), animated pipetting, magnetic stirrer, real-time pH curve tracking, dynamic stoichiometric analysis (CaVa = CbVb), and colorimetric chemical indicator transitions (Phenolphthalein, Methyl Orange, Bromothymol Blue).",
    learningObjectives: [
      "Differentiate between the theoretical equivalence point (moles H+ = moles OH-) and the experimental endpoint (indicator color transition)",
      "Apply the stoichiometric equation CaVa = CbVb to calculate unknown analyte concentrations from standard titrant volumes",
      "Analyze titration curves for strong acid-strong base, weak acid-strong base, and strong acid-weak base reactions to understand salt hydrolysis",
      "Evaluate indicator selection based on color transition intervals and pH at the equivalence point"
    ],
    thumbnailGradient: "from-teal-600 via-emerald-700 to-slate-950",
    badgeColor: "bg-teal-500/10 text-teal-300 border-teal-500/20",
    iconName: "FlaskConical",
    rating: 4.9,
    reviewCount: 46,
    teacherCount: 198,
    licenseType: "Academic STEM Classroom & Institutional License",
    pricing: {
      singleTeacher: 19,
      schoolDepartment: 200,
      districtUnlimited: 400
    },
    features: [
      "Interactive volumetric glassware with animated pipetting and Erlenmeyer flask delivery",
      "Precision buret stopcock with flow rate slider (0.005 - 0.080 cm³/step) for dropwise titration",
      "Real-time pH titration curve monitor plotting pH vs. delivered titrant volume",
      "Dynamic stoichiometric analysis calculator solving Ca, Va, Cb, or Vb with step-by-step derivations",
      "Interactive student guess check and evaluation feedback engine",
      "Multiple chemical reaction systems (Strong and weak acids/bases) and realistic indicator transitions"
    ],
    parameterDefaults: {
      acidVol: 25.0,
      flowRate: 0.020
    },
    parameterControls: [
      {
        key: "acidVol",
        label: "Analyte Volume (Va)",
        min: 5.0,
        max: 50.0,
        step: 1.0,
        unit: "cm³",
        description: "Fixed acid sample volume in flask"
      },
      {
        key: "flowRate",
        label: "Buret Flow Rate",
        min: 0.005,
        max: 0.080,
        step: 0.005,
        unit: "cm³/step",
        description: "Stopcock valve opening rate"
      }
    ],
    sampleChallenges: [
      {
        id: "ch-titr-1",
        title: "Determine Unknown Acid Molarity (Ca)",
        instruction: "Pipette 25.0 cm³ of unknown acid sample with phenolphthalein, deliver 0.10M NaOH dropwise to the first permanent pink color, and calculate Ca using CaVa = CbVb.",
        targetMetric: "Calculated Ca",
        targetValue: 0.10,
        tolerance: 0.02,
        currentValueKey: "calculatedCa",
        rewardBadge: "Master Titrator"
      }
    ],
    previewFacts: [
      "The Equivalence Point is the stoichiometric point where moles H+ = moles OH-, whereas the Endpoint is the physical indicator color change.",
      "Phenolphthalein turns from colorless to pink between pH 8.2 and 10.0, making it ideal for strong base titrations."
    ],
    isHtmlApp: true,
    htmlContent: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>High-Precision Acid-Base Titration Simulator</title>
  <style>
    :root {
      --bg-dark: #090d16;
      --panel-dark: #131c2e;
      --card-dark: #1e293b;
      --accent-blue: #38bdf8;
      --accent-blue-glow: rgba(56, 189, 248, 0.35);
      --accent-green: #10b981;
      --accent-green-glow: rgba(16, 185, 129, 0.35);
      --accent-amber: #f59e0b;
      --accent-amber-glow: rgba(245, 158, 11, 0.35);
      --accent-red: #ef4444;
      --accent-red-glow: rgba(239, 68, 68, 0.35);
      --accent-purple: #a855f7;
      --accent-purple-glow: rgba(168, 85, 247, 0.35);
      --text-light: #f8fafc;
      --text-muted: #94a3b8;
    }

    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
    }

    body {
      background-color: var(--bg-dark);
      color: var(--text-light);
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      padding: 20px;
    }

    header {
      margin-bottom: 16px;
      text-align: center;
    }

    header h1 {
      font-size: 1.75rem;
      font-weight: 700;
      background: linear-gradient(135deg, #38bdf8 0%, #818cf8 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      margin-bottom: 4px;
    }

    header p {
      color: var(--text-muted);
      font-size: 0.85rem;
    }

    .app-layout {
      display: grid;
      grid-template-columns: 320px 1fr 380px;
      gap: 18px;
      max-width: 1650px;
      width: 100%;
      margin: 0 auto;
      flex: 1;
    }

    @media (max-width: 1200px) {
      .app-layout {
        grid-template-columns: 1fr;
      }
    }

    .panel {
      background-color: var(--panel-dark);
      border: 1px solid #1e293b;
      border-radius: 12px;
      padding: 16px;
      display: flex;
      flex-direction: column;
      gap: 12px;
      box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.5);
    }

    .panel-title {
      font-size: 0.95rem;
      font-weight: 600;
      color: var(--text-light);
      border-bottom: 1px solid #1e293b;
      padding-bottom: 8px;
      letter-spacing: 0.3px;
    }

    .control-item {
      display: flex;
      flex-direction: column;
      gap: 6px;
    }

    .control-item label {
      font-size: 0.8rem;
      color: var(--text-muted);
      font-weight: 500;
      display: flex;
      justify-content: space-between;
    }

    select, input[type="number"] {
      background-color: var(--bg-dark);
      border: 1px solid #334155;
      color: var(--text-light);
      padding: 9px 12px;
      border-radius: 8px;
      font-size: 0.85rem;
      outline: none;
      transition: all 0.2s;
    }

    select:focus, input[type="number"]:focus {
      border-color: var(--accent-blue);
      box-shadow: 0 0 0 2px var(--accent-blue-glow);
    }

    input[type="range"] {
      -webkit-appearance: none;
      width: 100%;
      height: 6px;
      background: #334155;
      border-radius: 4px;
      outline: none;
      margin: 6px 0;
    }

    input[type="range"]::-webkit-slider-thumb {
      -webkit-appearance: none;
      appearance: none;
      width: 16px;
      height: 16px;
      border-radius: 50%;
      background: var(--accent-blue);
      cursor: pointer;
      box-shadow: 0 0 8px var(--accent-blue-glow);
      transition: transform 0.1s;
    }

    input[type="range"]::-webkit-slider-thumb:hover {
      transform: scale(1.2);
    }

    .slider-labels {
      display: flex;
      justify-content: space-between;
      font-size: 0.7rem;
      color: var(--text-muted);
    }

    .vol-input-group {
      display: flex;
      gap: 8px;
      align-items: center;
    }

    .vol-input-group input {
      flex: 1;
    }

    .vol-unit-badge {
      background-color: var(--card-dark);
      border: 1px solid #334155;
      color: var(--accent-blue);
      font-weight: 600;
      font-size: 0.8rem;
      padding: 8px 10px;
      border-radius: 8px;
    }

    .quick-vol-pills {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 6px;
      margin-top: 4px;
    }

    .btn-pill {
      background-color: var(--card-dark);
      border: 1px solid #334155;
      color: var(--text-muted);
      font-size: 0.75rem;
      padding: 4px 6px;
      border-radius: 6px;
      cursor: pointer;
      text-align: center;
      transition: all 0.2s;
    }

    .btn-pill:hover {
      border-color: var(--accent-blue);
      color: var(--text-light);
    }

    .btn-pill.active {
      background-color: var(--accent-blue);
      color: #0f172a;
      border-color: var(--accent-blue);
      font-weight: 700;
    }

    .btn {
      background: linear-gradient(135deg, #1e293b 0%, #0f172a 100%);
      color: var(--text-light);
      font-weight: 600;
      border: 1px solid #334155;
      padding: 10px 14px;
      border-radius: 8px;
      cursor: pointer;
      transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
      font-size: 0.85rem;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 6px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    }

    .btn:hover:not(:disabled) {
      border-color: #475569;
      transform: translateY(-1px);
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
    }

    .btn:active:not(:disabled) {
      transform: translateY(0);
    }

    .btn:disabled {
      background: #1e293b;
      color: #475569;
      border-color: #1e293b;
      cursor: not-allowed;
      opacity: 0.6;
    }

    .btn-primary {
      background: linear-gradient(135deg, #38bdf8 0%, #0284c7 100%);
      color: #ffffff;
      border: none;
      text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
    }

    .btn-primary:hover:not(:disabled) {
      box-shadow: 0 0 12px var(--accent-blue-glow);
    }

    .btn-guide {
      background: linear-gradient(135deg, #a855f7 0%, #7e22ce 100%);
      color: #ffffff;
      border: none;
    }

    .btn-guide:hover:not(:disabled) {
      box-shadow: 0 0 12px var(--accent-purple-glow);
    }

    .btn-stop {
      background: linear-gradient(135deg, #ef4444 0%, #dc2626 100%);
      color: #ffffff;
      border: none;
    }

    .btn-stop:hover:not(:disabled) {
      box-shadow: 0 0 12px var(--accent-red-glow);
    }

    .btn-open {
      background: linear-gradient(135deg, #10b981 0%, #059669 100%);
      color: #ffffff;
      border: none;
    }

    .btn-open:hover:not(:disabled) {
      box-shadow: 0 0 12px var(--accent-green-glow);
    }

    .btn-grid-2 {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 8px;
    }

    .stage-container {
      background-color: #060911;
      border: 1px solid #1e293b;
      border-radius: 12px;
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      overflow: hidden;
      min-height: 640px;
      width: 100%;
    }

    #labCanvas {
      background: transparent;
      max-width: 100%;
      height: auto;
      aspect-ratio: 620 / 640;
      display: block;
    }

    .metric-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 10px;
    }

    .metric-card {
      background-color: var(--card-dark);
      border: 1px solid #334155;
      border-radius: 8px;
      padding: 10px;
      display: flex;
      flex-direction: column;
      gap: 2px;
    }

    .metric-label {
      font-size: 0.7rem;
      color: var(--text-muted);
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }

    .metric-value {
      font-size: 1.15rem;
      font-weight: 700;
      color: var(--accent-blue);
    }

    .calc-box {
      background-color: var(--card-dark);
      border: 1px solid #334155;
      border-radius: 8px;
      padding: 12px;
      display: flex;
      flex-direction: column;
      gap: 8px;
    }

    .calc-formula {
      font-family: Consolas, Monaco, monospace;
      font-size: 0.95rem;
      font-weight: bold;
      color: var(--accent-green);
      text-align: center;
      background: rgba(16, 185, 129, 0.1);
      padding: 8px;
      border-radius: 6px;
      border: 1px dashed var(--accent-green);
    }

    .calc-steps {
      font-size: 0.8rem;
      color: var(--text-light);
      line-height: 1.6;
    }

    .calc-steps .highlight {
      color: var(--accent-blue);
      font-weight: 600;
    }

    .calc-steps .result-highlight {
      color: var(--accent-green);
      font-weight: 700;
      font-size: 0.95rem;
    }

    .alert-banner {
      display: none;
      background: linear-gradient(135deg, rgba(245, 158, 11, 0.2) 0%, rgba(217, 119, 6, 0.2) 100%);
      border: 1px solid var(--accent-amber);
      border-radius: 8px;
      padding: 10px 12px;
      font-size: 0.8rem;
      color: #fef3c7;
      line-height: 1.4;
      animation: pulseAlert 1.5s infinite alternate;
    }

    .success-banner {
      display: none;
      background: linear-gradient(135deg, rgba(16, 185, 129, 0.2) 0%, rgba(5, 150, 105, 0.2) 100%);
      border: 1px solid var(--accent-green);
      border-radius: 8px;
      padding: 10px 12px;
      font-size: 0.8rem;
      color: #d1fae5;
      line-height: 1.4;
    }

    @keyframes pulseAlert {
      0% { box-shadow: 0 0 4px var(--accent-amber-glow); }
      100% { box-shadow: 0 0 14px var(--accent-amber-glow); }
    }

    .graph-wrapper {
      flex: 1;
      display: flex;
      flex-direction: column;
      min-height: 180px;
      background-color: var(--card-dark);
      border: 1px solid #334155;
      border-radius: 8px;
      padding: 10px;
    }

    #curveCanvas {
      width: 100%;
      height: 100%;
    }

    .status-box {
      font-size: 0.8rem;
      background-color: var(--card-dark);
      border-left: 3px solid var(--accent-blue);
      padding: 10px;
      color: var(--text-muted);
      border-radius: 0 8px 8px 0;
      line-height: 1.4;
    }

    .status-box strong {
      color: var(--text-light);
    }

    .status-success {
      color: var(--accent-green) !important;
    }

    /* Feedback System Styling */
    .student-feedback-card {
      margin-top: 6px;
      padding: 10px;
      border-radius: 8px;
      font-size: 0.8rem;
      line-height: 1.4;
      display: none;
    }

    .student-feedback-card.correct {
      background: rgba(16, 185, 129, 0.15);
      border: 1px solid var(--accent-green);
      color: #d1fae5;
    }

    .student-feedback-card.incorrect {
      background: rgba(239, 68, 68, 0.15);
      border: 1px solid var(--accent-red);
      color: #fecaca;
    }

    /* Modal Styling */
    .modal-overlay {
      display: none;
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(9, 13, 22, 0.85);
      backdrop-filter: blur(4px);
      z-index: 100;
      justify-content: center;
      align-items: center;
      padding: 20px;
    }

    .modal-content {
      background-color: var(--panel-dark);
      border: 1px solid #334155;
      border-radius: 14px;
      max-width: 720px;
      width: 100%;
      max-height: 85vh;
      overflow-y: auto;
      padding: 24px;
      box-shadow: 0 20px 40px rgba(0, 0, 0, 0.8);
      display: flex;
      flex-direction: column;
      gap: 16px;
    }

    .modal-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid #1e293b;
      padding-bottom: 12px;
    }

    .modal-header h2 {
      font-size: 1.3rem;
      color: var(--accent-purple);
    }

    .close-btn {
      background: transparent;
      border: none;
      color: var(--text-muted);
      font-size: 1.5rem;
      cursor: pointer;
    }

    .close-btn:hover {
      color: var(--text-light);
    }

    .guide-section {
      display: flex;
      flex-direction: column;
      gap: 8px;
    }

    .guide-section h3 {
      font-size: 1rem;
      color: var(--accent-blue);
    }

    .guide-section p {
      font-size: 0.85rem;
      line-height: 1.5;
      color: var(--text-muted);
    }

    .guide-table {
      width: 100%;
      border-collapse: collapse;
      margin-top: 6px;
      font-size: 0.8rem;
    }

    .guide-table th, .guide-table td {
      border: 1px solid #334155;
      padding: 8px 10px;
      text-align: left;
    }

    .guide-table th {
      background-color: var(--card-dark);
      color: var(--text-light);
    }

    .guide-table td {
      color: var(--text-muted);
    }

    .concept-card {
      background-color: var(--card-dark);
      border-left: 3px solid var(--accent-purple);
      padding: 12px;
      border-radius: 0 8px 8px 0;
      font-size: 0.85rem;
      line-height: 1.5;
    }
  </style>
</head>
<body>

  <header>
    <h1>High-Precision Acid-Base Titration Lab</h1>
    <p>Calibrated Volumetric Glassware • Dynamic CaVa = CbVb Calculations • Real-Time Indicators</p>
  </header>

  <div class="app-layout">
    
    <!-- LEFT PANEL: SETUP & CONTROLS -->
    <div class="panel">
      <div class="panel-title">1. Setup Flask & Analyte Volume</div>

      <div class="control-item">
        <label for="systemSelect">Reaction System</label>
        <select id="systemSelect">
          <option value="0">Unknown Molarity Acid Sample (Flask) + 0.10M Standard NaOH (Buret)</option>
          <option value="1">Unknown Molarity HCl Sample (Flask) + 0.10M Standard NaOH (Buret)</option>
          <option value="2">Unknown Molarity CH3COOH Sample (Flask) + 0.10M Standard NaOH (Buret)</option>
          <option value="3">Unknown Molarity NH3 Sample (Flask) + 0.12M Standard HCl (Buret)</option>
        </select>
      </div>

      <div class="control-item">
        <label for="indicatorSelect">Chemical Indicator</label>
        <select id="indicatorSelect">
          <option value="0">Phenolphthalein (Clear → Pink)</option>
          <option value="1">Methyl Orange (Red → Orange/Yellow)</option>
          <option value="2">Bromothymol Blue (Yellow → Blue)</option>
        </select>
      </div>

      <div class="control-item">
        <label for="acidVol">Fixed Analyte Volume in Flask (Va)</label>
        <div class="vol-input-group">
          <input type="number" id="acidVol" value="25.0" min="1.0" max="100.0" step="0.5">
          <span class="vol-unit-badge">cm³</span>
        </div>
        <div class="quick-vol-pills">
          <button class="btn-pill" onclick="setQuickVol(10.0)">10 cm³</button>
          <button class="btn-pill" onclick="setQuickVol(20.0)">20 cm³</button>
          <button class="btn-pill active" id="pill25" onclick="setQuickVol(25.0)">25 cm³</button>
          <button class="btn-pill" onclick="setQuickVol(50.0)">50 cm³</button>
        </div>
      </div>

      <button id="prepAction" class="btn btn-primary">
        <span>Pipette Analyte & Indicator Drop</span>
      </button>

      <!-- EDUCATIONAL GUIDE BUTTON -->
      <button id="openGuide" class="btn btn-guide">
        <span>📘 Educational Chemistry Guide</span>
      </button>

      <div class="panel-title" style="margin-top: 6px;">2. Valve & Flow Controls</div>

      <div class="control-item">
        <label>Magnetic Stirrer Speed</label>
        <button id="toggleStir" class="btn">Stirrer: OFF</button>
      </div>

      <!-- DYNAMIC FLOW RATE SLIDER -->
      <div class="control-item">
        <label for="flowSlider">
          <span>Valve Opening (Flow Rate)</span>
          <span id="flowDisplay" style="color: var(--accent-blue); font-weight: 600;">0.020 cm³/step</span>
        </label>
        <input type="range" id="flowSlider" min="0.005" max="0.080" step="0.005" value="0.020">
        <div class="slider-labels">
          <span>Dropwise (Slow)</span>
          <span>Moderate</span>
          <span>Fast Stream</span>
        </div>
      </div>

      <div class="control-item">
        <label>Buret Stopcock Valve</label>
        <div class="btn-grid-2">
          <button id="flowOpen" class="btn btn-open" disabled>Open Buret Valve</button>
          <button id="flowStop" class="btn btn-stop" disabled>Close Valve</button>
        </div>
      </div>

      <button id="resetLab" class="btn" style="margin-top: auto;">Reset Station</button>
    </div>

    <!-- CENTER VISUAL STAGE -->
    <div class="stage-container">
      <canvas id="labCanvas" width="620" height="640"></canvas>
    </div>

    <!-- RIGHT PANEL: METRICS & STOICHIOMETRIC CALCULATOR -->
    <div class="panel">
      <div class="panel-title">Real-Time Measurements</div>

      <div class="metric-grid">
        <div class="metric-card">
          <span class="metric-label">pH Level</span>
          <span class="metric-value" id="valPH">1.00</span>
        </div>
        <div class="metric-card">
          <span class="metric-label">Titrant Delivered (Vb)</span>
          <span class="metric-value" id="valDelivered">0.00 cm³</span>
        </div>
        <div class="metric-card">
          <span class="metric-label">Flask Volume (Va)</span>
          <span class="metric-value" id="valAnalyte">0.00 cm³</span>
        </div>
        <div class="metric-card">
          <span class="metric-label">Buret Level</span>
          <span class="metric-value" id="valBuretLeft">50.00 cm³</span>
        </div>
      </div>

      <!-- DYNAMIC Ca Va = Cb Vb CALCULATOR -->
      <div class="panel-title" style="margin-top: 4px;">Dynamic Stoichiometric Analysis</div>
      <div class="calc-box">
        <div class="control-item" style="margin-bottom: 4px;">
          <label for="calcMode">Target Parameter</label>
          <select id="calcMode">
            <option value="Ca">Concentration of Unknown Sample (Ca)</option>
            <option value="Va">Volume of Acid (Va)</option>
            <option value="Cb">Concentration of Base (Cb)</option>
            <option value="Vb">Volume of Base / Equivalence Vol (Vb)</option>
          </select>
        </div>

        <div class="calc-formula" id="formulaDisplay">
          Ca × Va = Cb × Vb
        </div>

        <div class="calc-steps" id="calcSteps">
          <em>Run titration to complete endpoint reaction and derive dynamic calculations.</em>
        </div>

        <!-- STUDENT FEEDBACK / EVALUATION SYSTEM -->
        <div class="control-item" style="margin-top: 8px; border-top: 1px dashed #334155; padding-top: 8px;">
          <label for="studentAnswerInput">
            <span>Student Experimental Guess / Result:</span>
          </label>
          <div class="vol-input-group">
            <input type="number" id="studentAnswerInput" placeholder="Enter calculated value" step="0.001">
            <button id="btnCheckAnswer" class="btn btn-primary" style="padding: 6px 12px;">Check</button>
          </div>
        </div>
        <div id="studentFeedbackCard" class="student-feedback-card"></div>
      </div>

      <div class="alert-banner" id="endpointAlert">
        ⚠️ <strong>ENDPOINT APPROACHING!</strong> Slow down to dropwise flow and watch for permanent color change!
      </div>

      <div class="success-banner" id="neutralAlert">
        ✅ <strong>NEUTRALIZATION REACTION COMPLETE!</strong> (Equivalence Point Reached). Moles H+ = Moles OH-. Close the buret valve now when the indicator color stabilizes.
      </div>

      <div class="status-box" id="statusDesc">
        <strong>Status:</strong> Station ready. Click 'Pipette Analyte & Indicator Drop' to prepare flask.
      </div>

      <div class="graph-wrapper">
        <span class="metric-label" style="margin-bottom: 8px;">Titration Curve (pH vs Buret Volume in cm³)</span>
        <canvas id="curveCanvas"></canvas>
      </div>
    </div>

  </div>

  <!-- EDUCATIONAL MODAL -->
  <div class="modal-overlay" id="guideModal">
    <div class="modal-content">
      <div class="modal-header">
        <h2>Chemistry Concept Guide</h2>
        <button class="close-btn" id="closeGuide">&times;</button>
      </div>

      <div class="concept-card">
        <strong>Endpoint vs. Equivalence Point:</strong><br>
        • <strong>Equivalence Point:</strong> The theoretical point where moles of hydrogen ions equal moles of hydroxide ions, marking 100% complete chemical neutralization.<br>
        • <strong>Endpoint:</strong> The physical observation point where the indicator visually changes color.<br>
        • <strong>Experimental Rule:</strong> Turn OFF the buret pipe at the <strong>ENDPOINT (first permanent color change)</strong>. In actual practice, you cannot see the equivalence point directly; you rely on the indicator's endpoint to signal that neutralization is complete.
      </div>

      <div class="guide-section">
        <h3>Expected pH at Complete Neutralization (Equivalence Point)</h3>
        <p>The pH at neutralization depends on the strengths of the reacting acid and base, as salt hydrolysis affects the final ion concentration:</p>
        
        <table class="guide-table">
          <thead>
            <tr>
              <th>System Type</th>
              <th>pH at Neutralization</th>
              <th>Reasoning</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Strong Acid + Strong Base</td>
              <td>pH = 7.00</td>
              <td>Salt ions do not undergo hydrolysis in water.</td>
            </tr>
            <tr>
              <td>Weak Acid + Strong Base</td>
              <td>pH > 7.00 (Basic)</td>
              <td>Conjugate base of weak acid reacts with water to produce excess OH- ions.</td>
            </tr>
            <tr>
              <td>Strong Acid + Weak Base</td>
              <td>pH < 7.00 (Acidic)</td>
              <td>Conjugate acid of weak base reacts with water to produce excess H+ ions.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="guide-section">
        <h3>Choosing the Right Indicator</h3>
        <p>An indicator is accurate only when its pH color transition range encompasses the equivalence point of the specific reaction system.</p>
      </div>
    </div>
  </div>

  <script>
    // --- Helper Function: Clamped pH ---
    function clampPH(ph) {
      if (isNaN(ph) || !isFinite(ph)) return 7.0;
      return Math.max(0.0, Math.min(14.0, ph));
    }

    // --- Helper Function: Linear Interpolation for Colors ---
    function lerpColor(c1, c2, t) {
      t = Math.max(0, Math.min(1, t));
      return {
        r: Math.round(c1.r + (c2.r - c1.r) * t),
        g: Math.round(c1.g + (c2.g - c1.g) * t),
        b: Math.round(c1.b + (c2.b - c1.b) * t),
        a: c1.a + (c2.a - c1.a) * t
      };
    }

    // --- Indicator Physics ---
    // Corrected Methyl Orange to remain distinctly RED at acidic pH <= 3.1
    const INDICATORS = [
      {
        name: "Phenolphthalein",
        shortCode: "PHENOL.",
        getColor: (ph) => {
          if (ph < 8.2) return { r: 245, g: 247, b: 250, a: 0.12 };
          if (ph >= 10.0) return { r: 236, g: 72, b: 153, a: 0.88 };
          let t = (ph - 8.2) / 1.8;
          return lerpColor({ r: 245, g: 247, b: 250, a: 0.12 }, { r: 236, g: 72, b: 153, a: 0.88 }, t);
        },
        getEndpointColor: () => ({ r: 236, g: 72, b: 153, a: 0.88 }),
        nearEndpoint: (ph) => ph >= 7.5 && ph < 8.5
      },
      {
        name: "Methyl Orange",
        shortCode: "M.ORANGE",
        getColor: (ph) => {
          if (ph <= 3.1) return { r: 220, g: 38, b: 38, a: 0.88 }; // Distinct Red in Acid
          if (ph >= 4.4) return { r: 251, g: 191, b: 36, a: 0.88 }; // Yellow/Orange in Base
          let t = (ph - 3.1) / 1.3;
          return lerpColor({ r: 220, g: 38, b: 38, a: 0.88 }, { r: 251, g: 191, b: 36, a: 0.88 }, t);
        },
        getEndpointColor: () => ({ r: 245, g: 158, b: 11, a: 0.88 }),
        nearEndpoint: (ph) => ph >= 2.8 && ph <= 4.8
      },
      {
        name: "Bromothymol Blue",
        shortCode: "B.BLUE",
        getColor: (ph) => {
          if (ph <= 6.0) return { r: 251, g: 191, b: 36, a: 0.85 };
          if (ph >= 7.6) return { r: 37, g: 99, b: 235, a: 0.85 };
          let t = (ph - 6.0) / 1.6;
          return lerpColor({ r: 251, g: 191, b: 36, a: 0.85 }, { r: 37, g: 99, b: 235, a: 0.85 }, t);
        },
        getEndpointColor: () => ({ r: 16, g: 185, b: 129, a: 0.9 }),
        nearEndpoint: (ph) => ph >= 5.8 && ph <= 7.8
      }
    ];

    // Randomized Unknown Concentrations for Unknown Samples
    let unknownAcidMolarity0 = 0.08 + Math.random() * 0.06; // ~0.08 - 0.14 M
    let unknownAcidMolarity1 = 0.07 + Math.random() * 0.06; // ~0.07 - 0.13 M
    let unknownAcidMolarity2 = 0.10 + Math.random() * 0.08; // ~0.10 - 0.18 M
    let unknownAcidMolarity3 = 0.06 + Math.random() * 0.06; // ~0.06 - 0.12 M

    // --- Calibrated Stoichiometric Systems with Unknown Samples ---
    const SYSTEMS = [
      {
        name: "Unknown Molarity Acid Sample + 0.10M Standard NaOH", acidFormula: "Unknown Acid", baseFormula: "NaOH", 
        getAcidC: () => unknownAcidMolarity0, baseC: 0.10,
        calcPH: (vA, cA, vB, cB) => {
          if (vA <= 0) return 7.0;
          let nA = (vA / 1000) * cA, nB = (vB / 1000) * cB, totalV = (vA + vB) / 1000;
          let diff = nB - nA;
          if (Math.abs(diff) < 1e-9) return 7.0;
          if (diff < 0) {
            let concH = Math.abs(diff) / totalV;
            return clampPH(-Math.log10(concH));
          } else {
            let concOH = diff / totalV;
            let pOH = -Math.log10(concOH);
            return clampPH(14.0 - pOH);
          }
        }
      },
      {
        name: "Unknown Molarity HCl Sample + 0.10M Standard NaOH", acidFormula: "Unk. HCl", baseFormula: "NaOH", 
        getAcidC: () => unknownAcidMolarity1, baseC: 0.10,
        calcPH: (vA, cA, vB, cB) => {
          if (vA <= 0) return 7.0;
          let nA = (vA / 1000) * cA, nB = (vB / 1000) * cB, totalV = (vA + vB) / 1000;
          let diff = nB - nA;
          if (Math.abs(diff) < 1e-9) return 7.0;
          if (diff < 0) {
            let concH = Math.abs(diff) / totalV;
            return clampPH(-Math.log10(concH));
          } else {
            let concOH = diff / totalV;
            let pOH = -Math.log10(concOH);
            return clampPH(14.0 - pOH);
          }
        }
      },
      {
        name: "Unknown Molarity CH3COOH Sample + 0.10M Standard NaOH", acidFormula: "Unk. CH3COOH", baseFormula: "NaOH", 
        getAcidC: () => unknownAcidMolarity2, baseC: 0.10,
        calcPH: (vA, cA, vB, cB) => {
          if (vA <= 0) return 7.0;
          let nA = (vA / 1000) * cA, nB = (vB / 1000) * cB, totalV = (vA + vB) / 1000, Ka = 1.74e-5;
          let pKa = -Math.log10(Ka);

          if (vB === 0) {
            let concH = Math.sqrt(Ka * cA);
            return clampPH(-Math.log10(concH));
          }
          if (nB < nA) {
            let conjBase = nB / totalV;
            let weakAcid = (nA - nB) / totalV;
            if (weakAcid <= 1e-9) return clampPH(pKa + 3);
            return clampPH(pKa + Math.log10(conjBase / weakAcid));
          }
          if (Math.abs(nB - nA) < 1e-9) {
            let concSalt = nA / totalV;
            let concOH = Math.sqrt((1e-14 / Ka) * concSalt);
            let pOH = -Math.log10(concOH);
            return clampPH(14.0 - pOH);
          }
          let excessOH = (nB - nA) / totalV;
          let pOH = -Math.log10(excessOH);
          return clampPH(14.0 - pOH);
        }
      },
      {
        name: "Unknown Molarity NH3 Sample + 0.12M Standard HCl", acidFormula: "Unk. NH3", baseFormula: "HCl", 
        getAcidC: () => unknownAcidMolarity3, baseC: 0.12,
        calcPH: (vA, cA, vB, cB) => {
          if (vA <= 0) return 7.0;
          let nA = (vA / 1000) * cA, nB = (vB / 1000) * cB, totalV = (vA + vB) / 1000, Kb = 1.8e-5;
          let pKb = -Math.log10(Kb);

          if (vB === 0) {
            let concOH = Math.sqrt(Kb * cA);
            let pOH = -Math.log10(concOH);
            return clampPH(14.0 - pOH);
          }
          if (nB < nA) {
            let conjAcid = nB / totalV;
            let weakBase = (nA - nB) / totalV;
            if (weakBase <= 1e-9) return clampPH(14.0 - (pKb + 3));
            let pOH = pKb + Math.log10(conjAcid / weakBase);
            return clampPH(14.0 - pOH);
          }
          if (Math.abs(nB - nA) < 1e-9) {
            let concSalt = nA / totalV;
            let concH = Math.sqrt((1e-14 / Kb) * concSalt);
            return clampPH(-Math.log10(concH));
          }
          let excessH = (nB - nA) / totalV;
          return clampPH(-Math.log10(excessH));
        }
      }
    ];

    // --- State Variables ---
    let sysIndex = 0;
    let indicatorIndex = 0;
    let volAcidTarget = 25.0; 
    let currentAnalyteVol = 0; 
    let volBase = 0;    
    let indicatorVolAdded = 0;
    let buretMax = 50.0; 
    
    // Animation Controls
    let prepState = 0; 
    let prepProgress = 0;
    const flaskInitX = 495;
    let flaskX = flaskInitX; 
    let flaskY = 510;
    const buretFlaskX = 295;
    const buretX = 295;
    let prepCompleted = false;

    let stirring = false;
    let stirAngle = 0;
    let isValveOpen = false; 
    let targetFlowRate = 0.020; 
    let currentPH = 7.0;
    let curveHistory = [];
    let swirlOffset = 0;

    let flashIntensity = 0;
    let dropProgressTimer = 0;

    // --- DOM Elements ---
    const systemSelect = document.getElementById('systemSelect');
    const indicatorSelect = document.getElementById('indicatorSelect');
    const acidVol = document.getElementById('acidVol');
    const prepAction = document.getElementById('prepAction');
    const toggleStir = document.getElementById('toggleStir');
    const flowStop = document.getElementById('flowStop');
    const flowOpen = document.getElementById('flowOpen');
    const flowSlider = document.getElementById('flowSlider');
    const flowDisplay = document.getElementById('flowDisplay');
    const resetLab = document.getElementById('resetLab');

    const calcModeSelect = document.getElementById('calcMode');
    const formulaDisplay = document.getElementById('formulaDisplay');
    const calcSteps = document.getElementById('calcSteps');
    const studentAnswerInput = document.getElementById('studentAnswerInput');
    const btnCheckAnswer = document.getElementById('btnCheckAnswer');
    const studentFeedbackCard = document.getElementById('studentFeedbackCard');

    const valPH = document.getElementById('valPH');
    const valDelivered = document.getElementById('valDelivered');
    const valAnalyte = document.getElementById('valAnalyte');
    const valBuretLeft = document.getElementById('valBuretLeft');
    const statusDesc = document.getElementById('statusDesc');
    const endpointAlert = document.getElementById('endpointAlert');
    const neutralAlert = document.getElementById('neutralAlert');

    const guideModal = document.getElementById('guideModal');
    const openGuide = document.getElementById('openGuide');
    const closeGuide = document.getElementById('closeGuide');

    const labCanvas = document.getElementById('labCanvas');
    const labCtx = labCanvas.getContext('2d');
    const curveCanvas = document.getElementById('curveCanvas');
    const curveCtx = curveCanvas.getContext('2d');

    // --- Handlers ---
    systemSelect.addEventListener('change', (e) => { 
      sysIndex = parseInt(e.target.value); 
      resetStation(); 
    });
    indicatorSelect.addEventListener('change', (e) => { indicatorIndex = parseInt(e.target.value); recalc(); });
    calcModeSelect.addEventListener('change', () => { updateStoichiometricCalc(); });

    acidVol.addEventListener('change', (e) => {
      let v = Math.max(1.0, Math.min(100.0, parseFloat(e.target.value) || 25.0));
      acidVol.value = v.toFixed(1);
      volAcidTarget = v;
      updatePillHighlight(v);
      recalc();
    });

    flowSlider.addEventListener('input', (e) => {
      targetFlowRate = parseFloat(e.target.value);
      flowDisplay.textContent = \`\${targetFlowRate.toFixed(3)} cm³/step\`;
    });

    openGuide.addEventListener('click', () => { guideModal.style.display = 'flex'; });
    closeGuide.addEventListener('click', () => { guideModal.style.display = 'none'; });
    guideModal.addEventListener('click', (e) => { if (e.target === guideModal) guideModal.style.display = 'none'; });

    function setQuickVol(v) {
      if (prepState !== 0 || prepCompleted) return;
      acidVol.value = v.toFixed(1);
      volAcidTarget = v;
      updatePillHighlight(v);
      recalc();
    }

    function updatePillHighlight(v) {
      document.querySelectorAll('.btn-pill').forEach(btn => btn.classList.remove('active'));
      if (v === 10) document.querySelectorAll('.btn-pill')[0].classList.add('active');
      else if (v === 20) document.querySelectorAll('.btn-pill')[1].classList.add('active');
      else if (v === 25) document.querySelectorAll('.btn-pill')[2].classList.add('active');
      else if (v === 50) document.querySelectorAll('.btn-pill')[3].classList.add('active');
    }

    prepAction.addEventListener('click', () => {
      if (prepCompleted || prepState !== 0) return;
      prepState = 1; 
      prepProgress = 0;
      prepAction.disabled = true;
      acidVol.disabled = true;
      systemSelect.disabled = true;
      indicatorSelect.disabled = true;
      document.querySelectorAll('.btn-pill').forEach(b => b.style.pointerEvents = 'none');
      statusDesc.innerHTML = "<strong>Status:</strong> Dispensing analyte volume into flask...";
    });

    toggleStir.addEventListener('click', () => {
      stirring = !stirring;
      toggleStir.textContent = \`Stirrer: \${stirring ? 'ON' : 'OFF'}\`;
      toggleStir.style.background = stirring ? 'linear-gradient(135deg, #10b981 0%, #059669 100%)' : 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)';
      toggleStir.style.color = '#ffffff';
    });

    flowStop.addEventListener('click', () => {
      isValveOpen = false;
      statusDesc.innerHTML = "<strong>Status:</strong> Buret valve closed manually.";
    });
    
    flowOpen.addEventListener('click', () => { 
      if (prepCompleted) {
        isValveOpen = true;
        statusDesc.innerHTML = "<strong>Status:</strong> Buret valve opened. Titrant dispensing into flask...";
      } 
    });

    resetLab.addEventListener('click', resetStation);

    btnCheckAnswer.addEventListener('click', checkStudentAnswer);

    function enableControls(enable) {
      flowStop.disabled = !enable;
      flowOpen.disabled = !enable;
    }

    function resetStation() {
      // Regenerate unknown molarities on station reset
      unknownAcidMolarity0 = 0.08 + Math.random() * 0.06;
      unknownAcidMolarity1 = 0.07 + Math.random() * 0.06;
      unknownAcidMolarity2 = 0.10 + Math.random() * 0.08;
      unknownAcidMolarity3 = 0.06 + Math.random() * 0.06;

      volBase = 0;
      isValveOpen = false;
      prepState = 0;
      prepProgress = 0;
      prepCompleted = false;
      currentAnalyteVol = 0;
      indicatorVolAdded = 0;
      flaskX = flaskInitX;
      flaskY = 510;
      curveHistory = [];
      dropProgressTimer = 0;
      flashIntensity = 0;

      prepAction.disabled = false;
      acidVol.disabled = false;
      systemSelect.disabled = false;
      indicatorSelect.disabled = false;
      document.querySelectorAll('.btn-pill').forEach(b => b.style.pointerEvents = 'auto');
      enableControls(false);

      endpointAlert.style.display = 'none';
      neutralAlert.style.display = 'none';
      studentFeedbackCard.style.display = 'none';
      studentAnswerInput.value = '';
      statusDesc.innerHTML = "<strong>Status:</strong> Station reset. Click 'Pipette Analyte & Indicator Drop' to begin.";
      valDelivered.textContent = '0.00 cm³';
      valAnalyte.textContent = '0.00 cm³';
      valBuretLeft.textContent = '50.00 cm³';

      recalc();
      drawGraph();
    }

    // Dynamic Ca Va = Cb Vb Computation Engine
    function updateStoichiometricCalc() {
      const sys = SYSTEMS[sysIndex];
      const mode = calcModeSelect.value;
      const Ca = sys.getAcidC();
      const Va = currentAnalyteVol;
      const Cb = sys.baseC;
      const Vb = volBase;

      if (mode === "Ca") {
        formulaDisplay.innerHTML = \`Ca = (Cb × Vb) / Va\`;
      } else if (mode === "Va") {
        formulaDisplay.innerHTML = \`Va = (Cb × Vb) / Ca\`;
      } else if (mode === "Cb") {
        formulaDisplay.innerHTML = \`Cb = (Ca × Va) / Vb\`;
      } else if (mode === "Vb") {
        formulaDisplay.innerHTML = \`Vb = (Ca × Va) / Cb\`;
      }

      if (Vb <= 0) {
        calcSteps.innerHTML = \`<em>Run titration to complete endpoint reaction and derive dynamic calculations.</em>\`;
        return;
      }

      let stepHTML = "";
      if (mode === "Ca") {
        let numerator = Cb * Vb;
        let calculatedCa = numerator / (Va || 1);
        stepHTML = \`
          <strong>1. Known Values:</strong><br>
          • Titrant Volume (Vb) = <span class="highlight">\${Vb.toFixed(2)} cm³</span><br>
          • Titrant Concentration (Cb) = <span class="highlight">\${Cb.toFixed(2)} M</span><br>
          • Analyte Volume (Va) = <span class="highlight">\${Va.toFixed(1)} cm³</span><br><br>
          <strong>2. Variable Plug-in:</strong><br>
          Ca = (\${Cb.toFixed(2)} M × \${Vb.toFixed(2)} cm³) / \${Va.toFixed(1)} cm³<br><br>
          <strong>3. Step-by-Step Calculation:</strong><br>
          • Numerator (Cb × Vb): \${Cb.toFixed(2)} × \${Vb.toFixed(2)} = <strong>\${numerator.toFixed(4)}</strong><br>
          • Division by Va: \${numerator.toFixed(4)} / \${Va.toFixed(1)}<br>
          • <strong>Calculated Sample Conc (Ca):</strong> <span class="result-highlight">\${calculatedCa.toFixed(4)} M</span>
        \`;
      } else if (mode === "Va") {
        let numerator = Cb * Vb;
        let calculatedVa = numerator / Ca;
        stepHTML = \`
          <strong>1. Known Values:</strong><br>
          • Titrant Volume (Vb) = <span class="highlight">\${Vb.toFixed(2)} cm³</span><br>
          • Titrant Concentration (Cb) = <span class="highlight">\${Cb.toFixed(2)} M</span><br>
          • Analyte Concentration (Ca) = <span class="highlight">\${Ca.toFixed(3)} M</span><br><br>
          <strong>2. Variable Plug-in:</strong><br>
          Va = (\${Cb.toFixed(2)} M × \${Vb.toFixed(2)} cm³) / \${Ca.toFixed(3)} M<br><br>
          <strong>3. Step-by-Step Calculation:</strong><br>
          • Numerator (Cb × Vb): \${Cb.toFixed(2)} × \${Vb.toFixed(2)} = <strong>\${numerator.toFixed(4)}</strong><br>
          • Division by Ca: \${numerator.toFixed(4)} / \${Ca.toFixed(3)}<br>
          • <strong>Resulting Volume (Va):</strong> <span class="result-highlight">\${calculatedVa.toFixed(2)} cm³</span>
        \`;
      } else if (mode === "Cb") {
        let numerator = Ca * Va;
        let calculatedCb = numerator / Vb;
        stepHTML = \`
          <strong>1. Known Values:</strong><br>
          • Titrant Volume (Vb) = <span class="highlight">\${Vb.toFixed(2)} cm³</span><br>
          • Sample Concentration (Ca) = <span class="highlight">\${Ca.toFixed(3)} M</span><br>
          • Sample Volume (Va) = <span class="highlight">\${Va.toFixed(1)} cm³</span><br><br>
          <strong>2. Variable Plug-in:</strong><br>
          Cb = (\${Ca.toFixed(3)} M × \${Va.toFixed(1)} cm³) / \${Vb.toFixed(2)} cm³<br><br>
          <strong>3. Step-by-Step Calculation:</strong><br>
          • Numerator (Ca × Va): \${Ca.toFixed(3)} × \${Va.toFixed(1)} = <strong>\${numerator.toFixed(4)}</strong><br>
          • Division by Vb: \${numerator.toFixed(4)} / \${Vb.toFixed(2)}<br>
          • <strong>Resulting Titrant Conc (Cb):</strong> <span class="result-highlight">\${calculatedCb.toFixed(4)} M</span>
        \`;
      } else if (mode === "Vb") {
        let numerator = Ca * Va;
        let calculatedVb = numerator / Cb;
        stepHTML = \`
          <strong>1. Known Values:</strong><br>
          • Sample Concentration (Ca) = <span class="highlight">\${Ca.toFixed(3)} M</span><br>
          • Sample Volume (Va) = <span class="highlight">\${Va.toFixed(1)} cm³</span><br>
          • Titrant Concentration (Cb) = <span class="highlight">\${Cb.toFixed(2)} M</span><br><br>
          <strong>2. Variable Plug-in:</strong><br>
          Vb = (\${Ca.toFixed(3)} M × \${Va.toFixed(1)} cm³) / \${Cb.toFixed(2)} M<br><br>
          <strong>3. Step-by-Step Calculation:</strong><br>
          • Numerator (Ca × Va): \${Ca.toFixed(3)} × \${Va.toFixed(1)} = <strong>\${numerator.toFixed(4)}</strong><br>
          • Division by Cb: \${numerator.toFixed(4)} / \${Cb.toFixed(2)}<br>
          • <strong>Theoretical Equivalence Vol (Vb):</strong> <span class="result-highlight">\${calculatedVb.toFixed(2)} cm³</span>
        \`;
      }

      calcSteps.innerHTML = stepHTML;
    }

    // Student Evaluation & Feedback Engine
    function checkStudentAnswer() {
      const sys = SYSTEMS[sysIndex];
      const actualCa = sys.getAcidC();
      const Va = currentAnalyteVol;
      const Cb = sys.baseC;
      const userVal = parseFloat(studentAnswerInput.value);

      if (isNaN(userVal)) {
        studentFeedbackCard.className = "student-feedback-card incorrect";
        studentFeedbackCard.style.display = "block";
        studentFeedbackCard.innerHTML = "⚠️ Please enter a valid numerical value before checking!";
        return;
      }

      if (volBase <= 0) {
        studentFeedbackCard.className = "student-feedback-card incorrect";
        studentFeedbackCard.style.display = "block";
        studentFeedbackCard.innerHTML = "⚠️ You haven't performed the titration yet! Open the buret valve to deliver titrant until endpoint is observed.";
        return;
      }

      const exactVbNeeded = (actualCa * Va) / Cb;
      const marginOfError = 0.05; // 5% tolerance

      if (calcModeSelect.value === "Ca") {
        let percentageDiff = ((userVal - actualCa) / actualCa) * 100;
        if (Math.abs(percentageDiff) <= 5) {
          studentFeedbackCard.className = "student-feedback-card correct";
          studentFeedbackCard.innerHTML = \`🎯 <strong>EXCELLENT WORK!</strong><br>Your determined concentration of <strong>\${userVal.toFixed(4)} M</strong> is accurate. Actual sample concentration: <strong>\${actualCa.toFixed(4)} M</strong>.\`;
        } else if (userVal < actualCa) {
          studentFeedbackCard.className = "student-feedback-card incorrect";
          studentFeedbackCard.innerHTML = \`❌ <strong>UNDER-TITRATED / UNDERESTIMATED</strong><br>Your answer (\${userVal.toFixed(4)} M) is too low. Actual: <strong>\${actualCa.toFixed(4)} M</strong>.<br><em>Adjustment:</em> Ensure you closed the valve only when permanent endpoint color change occurred (at ~\${exactVbNeeded.toFixed(2)} cm³ titrant).\`;
        } else {
          studentFeedbackCard.className = "student-feedback-card incorrect";
          studentFeedbackCard.innerHTML = \`❌ <strong>OVER-TITRATED / OVERESTIMATED</strong><br>Your answer (\${userVal.toFixed(4)} M) is too high. Actual: <strong>\${actualCa.toFixed(4)} M</strong>.<br><em>Adjustment:</em> You may have overshot the equivalence point! Use dropwise flow near the endpoint.\`;
        }
      } else {
        // General tolerance for other target parameters
        const expectedVb = exactVbNeeded;
        let diff = Math.abs(userVal - expectedVb);
        if (diff <= 0.5) {
          studentFeedbackCard.className = "student-feedback-card correct";
          studentFeedbackCard.innerHTML = \`🎯 <strong>ACCURATE!</strong> Your value is close to theoretical endpoint (\${expectedVb.toFixed(2)} cm³).\`;
        } else {
          studentFeedbackCard.className = "student-feedback-card incorrect";
          studentFeedbackCard.innerHTML = \`❌ <strong>INACCURATE</strong>. Theoretical expected value is ~\${expectedVb.toFixed(2)}. Double-check your stoichiometry formula Ca × Va = Cb × Vb.\`;
        }
      }
      studentFeedbackCard.style.display = "block";
    }

    // --- Main Loop ---
    let prevTime = performance.now();

    function loop(now) {
      let dt = (now - prevTime) / 1000;
      prevTime = now;

      // Preparation Pipeline
      if (prepState === 1) { 
        prepProgress += dt * 0.35;
        if (prepProgress >= 0.35 && prepProgress <= 0.80) {
          currentAnalyteVol = Math.min(volAcidTarget, ((prepProgress - 0.35) / 0.45) * volAcidTarget);
          valAnalyte.textContent = \`\${(currentAnalyteVol + indicatorVolAdded).toFixed(2)} cm³\`;
        }
        if (prepProgress >= 1) {
          currentAnalyteVol = volAcidTarget;
          prepState = 2; 
          prepProgress = 0;
          statusDesc.innerHTML = "<strong>Status:</strong> Administering exactly 1 drop (0.05 cm³) of indicator...";
        }
      } else if (prepState === 2) { 
        prepProgress += dt * 0.6;
        if (prepProgress >= 0.5) {
          indicatorVolAdded = 0.05; 
          valAnalyte.textContent = \`\${(currentAnalyteVol + indicatorVolAdded).toFixed(2)} cm³\`;
        }
        if (prepProgress >= 1) {
          prepState = 3; 
          prepProgress = 0;
          statusDesc.innerHTML = "<strong>Status:</strong> Indicator drop added! Moving flask under buret...";
        }
      } else if (prepState === 3) { 
        prepProgress += dt * 0.6;
        flaskX = flaskInitX - (flaskInitX - buretFlaskX) * Math.min(1, prepProgress);
        if (prepProgress >= 1) {
          flaskX = buretFlaskX;
          prepState = 4;
          prepCompleted = true;
          enableControls(true);
          statusDesc.innerHTML = "<strong>Status:</strong> Flask ready. Adjust valve opening and click 'Open Buret Valve'.";
        }
      }

      // Calculate Equivalence Volume
      const sys = SYSTEMS[sysIndex];
      const ind = INDICATORS[indicatorIndex];
      const eqVolume = (currentAnalyteVol * sys.getAcidC()) / sys.baseC;
      const effectiveFlow = isValveOpen ? targetFlowRate : 0;

      // Continuous Titrant Flow Calculation
      if (prepCompleted && effectiveFlow > 0) {
        if (volBase + effectiveFlow <= buretMax) {
          volBase += effectiveFlow;
          recalc();
          if (Math.abs(volBase - eqVolume) < effectiveFlow) {
            statusDesc.innerHTML = \`<strong>Status:</strong> <span class='status-success'>EQUIVALENCE REACHED at \${eqVolume.toFixed(2)} cm³! Turn off buret valve at the indicator color endpoint.</span>\`;
          }
        } else {
          volBase = buretMax;
          isValveOpen = false;
          enableControls(false);
          statusDesc.innerHTML = "<strong>Status:</strong> Buret fully emptied (50.00 cm³ delivered).";
        }
      }

      // Dynamic Flash near Endpoint
      if (prepCompleted && effectiveFlow > 0 && ind.nearEndpoint(currentPH)) {
        flashIntensity = Math.min(1.0, flashIntensity + dt * 3.5);
      } else {
        let decaySpeed = stirring ? 4.0 : 1.2;
        flashIntensity = Math.max(0, flashIntensity - dt * decaySpeed);
      }

      // Swirling Liquid Surface
      let isDispensingAnalyte = (prepState === 1) && (prepProgress >= 0.35 && prepProgress <= 0.8);
      if ((prepCompleted && effectiveFlow > 0) || isDispensingAnalyte) {
        swirlOffset = Math.sin(now * 0.012) * 3.5; 
      } else {
        swirlOffset = 0;
      }

      if (stirring) stirAngle += 12;

      renderScene(now, dt);
      requestAnimationFrame(loop);
    }

    function recalc() {
      const sys = SYSTEMS[sysIndex];
      const effectiveFlow = isValveOpen ? targetFlowRate : 0;
      const acidC = sys.getAcidC();
      currentPH = sys.calcPH(currentAnalyteVol, acidC, volBase, sys.baseC);

      valPH.textContent = currentPH.toFixed(2);
      valDelivered.textContent = \`\${volBase.toFixed(2)} cm³\`;
      valBuretLeft.textContent = \`\${(buretMax - volBase).toFixed(2)} cm³\`;
      valAnalyte.textContent = \`\${(currentAnalyteVol + indicatorVolAdded).toFixed(2)} cm³\`;

      updateStoichiometricCalc();

      const eqVolume = (currentAnalyteVol * acidC) / sys.baseC;
      const volDiff = eqVolume - volBase;

      // Neutralization complete notification (Equivalence point check)
      if (prepCompleted && Math.abs(volBase - eqVolume) <= 0.15) {
        neutralAlert.style.display = 'block';
        endpointAlert.style.display = 'none';
      } else if (prepCompleted && effectiveFlow > 0 && volDiff > 0) {
        let estimatedStepsLeft = volDiff / effectiveFlow;
        let estimatedSecondsLeft = estimatedStepsLeft * (1 / 60); 
        if (estimatedSecondsLeft <= 10) {
          endpointAlert.style.display = 'block';
          neutralAlert.style.display = 'none';
        } else {
          endpointAlert.style.display = 'none';
          neutralAlert.style.display = 'none';
        }
      } else {
        endpointAlert.style.display = 'none';
        if (prepCompleted && volBase > eqVolume + 0.15) {
          neutralAlert.style.display = 'none';
        }
      }

      if (prepCompleted && (curveHistory.length === 0 || volBase - curveHistory[curveHistory.length - 1].v >= 0.05)) {
        curveHistory.push({ v: volBase, ph: currentPH });
        drawGraph();
      }
    }

    // --- Rendering Stage ---
    function renderScene(now, dt) {
      labCtx.clearRect(0, 0, labCanvas.width, labCanvas.height);

      const sys = SYSTEMS[sysIndex];
      const ind = INDICATORS[indicatorIndex];
      const effectiveFlow = isValveOpen ? targetFlowRate : 0;

      // Support Stand
      labCtx.fillStyle = '#334155';
      labCtx.fillRect(195, 580, 200, 16);
      labCtx.fillRect(290, 30, 10, 550);
      
      labCtx.fillStyle = '#94a3b8';
      labCtx.font = '10px sans-serif';
      labCtx.fillText('SUPPORT STAND', 295, 570);

      // Buret Clamps
      labCtx.fillStyle = '#475569';
      labCtx.fillRect(290, 80, 45, 8);
      labCtx.fillRect(290, 290, 45, 8);

      // Stand for Reagents & Analyte Samples
      drawIndicatorStand(28, 450);
      drawAnalyteBottle(38, 365, "SAMPLE", sys.acidFormula, "rgba(56, 189, 248, 0.3)");
      drawIndicatorBottle(116, 375, "INDICATOR", ind.shortCode, "rgba(236, 72, 153, 0.4)");

      // Magnetic Stirrer Base
      labCtx.fillStyle = '#1e293b';
      labCtx.strokeStyle = '#334155';
      labCtx.lineWidth = 2;
      labCtx.beginPath();
      labCtx.roundRect(215, 510, 160, 70, 8);
      labCtx.fill();
      labCtx.stroke();

      labCtx.fillStyle = '#94a3b8';
      labCtx.font = '10px sans-serif';
      labCtx.fillText('MAGNETIC STIRRER', 248, 565);

      // Prep Stand
      labCtx.fillStyle = '#0f172a';
      labCtx.fillRect(435, 510, 120, 70);
      labCtx.strokeStyle = '#334155';
      labCtx.strokeRect(435, 510, 120, 70);
      labCtx.fillStyle = '#64748b';
      labCtx.font = '9px sans-serif';
      labCtx.fillText('PREPARATION STAGE', 446, 565);

      // Flask & Liquid Rendering
      drawErlenmeyer(flaskX, flaskY);
      drawFlaskLiquid(flaskX, flaskY, now);

      // Calibrated Buret
      drawCalibratedBuret(buretX, 30);

      // Drop/Stream Physics
      if (effectiveFlow > 0 && prepCompleted) {
        const topY = 380;
        let totalV = currentAnalyteVol + indicatorVolAdded + volBase;
        let fillH = Math.min(54, (totalV / 120) * 50);
        const bottomY = flaskY - fillH; 
        const totalHeight = Math.max(10, bottomY - topY);

        if (effectiveFlow <= 0.030) {
          let dropCycleDuration = 0.22 + (0.030 - effectiveFlow) * 30.0; 
          dropProgressTimer += dt / dropCycleDuration;

          let p = dropProgressTimer % 1.0;

          if (p < 0.4) {
            let growRadius = 1.0 + (p / 0.4) * 2.8;
            labCtx.fillStyle = 'rgba(56, 189, 248, 0.95)';
            labCtx.beginPath();
            labCtx.arc(buretX, topY + 2, growRadius, 0, Math.PI * 2);
            labCtx.fill();
          } else {
            let descentP = (p - 0.4) / 0.6;
            let currentDropY = topY + descentP * totalHeight;
            
            labCtx.fillStyle = 'rgba(56, 189, 248, 0.95)';
            labCtx.beginPath();
            labCtx.arc(buretX, currentDropY, 2.5, 0, Math.PI * 2);
            labCtx.fill();
          }
        } else {
          let lineWidth = 1.5 + ((effectiveFlow - 0.030) / (0.080 - 0.030)) * 3.5;

          labCtx.strokeStyle = 'rgba(56, 189, 248, 0.85)';
          labCtx.lineWidth = lineWidth;
          labCtx.beginPath();
          labCtx.moveTo(buretX, topY);
          labCtx.lineTo(buretX, bottomY);
          labCtx.stroke();
        }
      } else {
        dropProgressTimer = 0;
      }

      drawPipetteSystem();
    }

    function drawIndicatorStand(x, y) {
      // Reagent rack shelf
      labCtx.fillStyle = '#1e293b';
      labCtx.strokeStyle = '#475569';
      labCtx.lineWidth = 2;
      labCtx.beginPath();
      labCtx.roundRect(x, y, 155, 12, 3);
      labCtx.fill();
      labCtx.stroke();

      // Stand legs
      labCtx.fillStyle = '#334155';
      labCtx.fillRect(x + 10, y + 12, 10, 118);
      labCtx.fillRect(x + 135, y + 12, 10, 118);

      labCtx.fillStyle = '#64748b';
      labCtx.font = '9px sans-serif';
      labCtx.fillText('REAGENTS & SAMPLES', x + 25, y + 125);
    }

    // Analyte / Acid Reagent Bottle (completely visible, wide, and clear)
    function drawAnalyteBottle(x, y, title, formula, colorStr) {
      const w = 58, h = 75;

      // Stopper / Cap
      labCtx.fillStyle = '#475569';
      labCtx.strokeStyle = '#64748b';
      labCtx.lineWidth = 1;
      labCtx.beginPath();
      labCtx.roundRect(x + 19, y - 14, 20, 8, 2);
      labCtx.fill();
      labCtx.stroke();

      // Bottle Neck
      labCtx.fillStyle = '#334155';
      labCtx.fillRect(x + 22, y - 6, 14, 8);

      // Glass Bottle Body with rounded base
      labCtx.fillStyle = colorStr;
      labCtx.strokeStyle = '#94a3b8';
      labCtx.lineWidth = 1.5;
      labCtx.beginPath();
      labCtx.roundRect(x, y + 2, w, h - 2, 6);
      labCtx.fill();
      labCtx.stroke();

      // Glass highlight streak
      labCtx.fillStyle = 'rgba(255, 255, 255, 0.15)';
      labCtx.fillRect(x + 4, y + 6, 4, h - 14);

      // Lab Label Plaque (High-contrast, fully contained)
      labCtx.fillStyle = '#0f172a';
      labCtx.strokeStyle = '#38bdf8';
      labCtx.lineWidth = 1;
      labCtx.beginPath();
      labCtx.roundRect(x + 5, y + 16, w - 10, 42, 4);
      labCtx.fill();
      labCtx.stroke();

      // Label Header
      labCtx.fillStyle = '#38bdf8';
      labCtx.font = 'bold 8px sans-serif';
      labCtx.textAlign = 'center';
      labCtx.fillText(title, x + w / 2, y + 28);

      // Label Formula
      labCtx.fillStyle = '#f8fafc';
      labCtx.font = 'bold 9px sans-serif';
      labCtx.fillText(formula, x + w / 2, y + 46);
      labCtx.textAlign = 'left'; // reset
    }

    // Indicator Dropper Bottle
    function drawIndicatorBottle(x, y, title, indicatorCode, colorStr) {
      const w = 50, h = 65;

      // Rubber Dropper Bulb
      labCtx.fillStyle = '#ef4444';
      labCtx.beginPath();
      labCtx.arc(x + w / 2, y - 14, 7, 0, Math.PI * 2);
      labCtx.fill();

      // Dropper Cap Collar
      labCtx.fillStyle = '#475569';
      labCtx.fillRect(x + 17, y - 7, 16, 9);

      // Bottle Body
      labCtx.fillStyle = colorStr;
      labCtx.strokeStyle = '#ec4899';
      labCtx.lineWidth = 1.5;
      labCtx.beginPath();
      labCtx.roundRect(x, y + 2, w, h - 2, 6);
      labCtx.fill();
      labCtx.stroke();

      // Glass highlight streak
      labCtx.fillStyle = 'rgba(255, 255, 255, 0.15)';
      labCtx.fillRect(x + 4, y + 6, 3, h - 14);

      // Lab Label Plaque
      labCtx.fillStyle = '#0f172a';
      labCtx.strokeStyle = '#ec4899';
      labCtx.lineWidth = 1;
      labCtx.beginPath();
      labCtx.roundRect(x + 4, y + 14, w - 8, 38, 4);
      labCtx.fill();
      labCtx.stroke();

      // Label Header
      labCtx.fillStyle = '#f472b6';
      labCtx.font = 'bold 8px sans-serif';
      labCtx.textAlign = 'center';
      labCtx.fillText(title, x + w / 2, y + 26);

      // Indicator Code
      labCtx.fillStyle = '#fdf2f8';
      labCtx.font = 'bold 9px sans-serif';
      labCtx.fillText(indicatorCode, x + w / 2, y + 42);
      labCtx.textAlign = 'left'; // reset
    }

    function drawCalibratedBuret(x, y) {
      let columnH = 330;
      const sys = SYSTEMS[sysIndex];

      labCtx.fillStyle = '#38bdf8';
      labCtx.font = '10px sans-serif';
      labCtx.fillText(\`BURET (\${sys.baseFormula})\`, x - 35, y - 8);

      labCtx.strokeStyle = '#94a3b8';
      labCtx.lineWidth = 2;
      labCtx.strokeRect(x - 12, y + 12, 24, columnH);

      let fillRatio = (buretMax - volBase) / buretMax;
      let liquidH = (columnH - 10) * fillRatio;
      let liquidTopY = y + 17 + ((columnH - 10) - liquidH);

      labCtx.fillStyle = 'rgba(56, 189, 248, 0.35)';
      labCtx.fillRect(x - 10, liquidTopY, 20, liquidH);

      labCtx.fillStyle = '#94a3b8';
      labCtx.strokeStyle = '#64748b';
      labCtx.lineWidth = 1;

      for (let i = 0; i <= 50; i++) {
        let markY = y + 17 + (i / 50) * (columnH - 10);
        if (i % 5 === 0) {
          labCtx.beginPath();
          labCtx.moveTo(x + 12, markY);
          labCtx.lineTo(x + 3, markY);
          labCtx.stroke();
          if (i % 10 === 0) labCtx.fillText(i.toString(), x + 15, markY + 3);
        }
      }

      // Valve Handle
      labCtx.fillStyle = isValveOpen ? '#10b981' : '#ef4444';
      if (isValveOpen) {
        labCtx.fillRect(x - 3, y + columnH + 3, 6, 30);
      } else {
        labCtx.fillRect(x - 15, y + columnH + 15, 30, 6);
      }
    }

    function drawErlenmeyer(x, y) {
      labCtx.strokeStyle = '#94a3b8';
      labCtx.lineWidth = 2.5;
      labCtx.beginPath();
      labCtx.moveTo(x - 16, y - 100);
      labCtx.lineTo(x + 16, y - 100);
      labCtx.lineTo(x + 16, y - 55);
      labCtx.lineTo(x + 62, y);
      labCtx.lineTo(x - 62, y);
      labCtx.lineTo(x - 16, y - 55);
      labCtx.closePath();
      labCtx.stroke();

      labCtx.fillStyle = '#94a3b8';
      labCtx.font = '10px sans-serif';
      labCtx.fillText('ERLENMEYER FLASK', x - 48, y + 18);
    }

    function drawFlaskLiquid(x, y, now) {
      const ind = INDICATORS[indicatorIndex];
      const effectiveFlow = isValveOpen ? targetFlowRate : 0;

      let baseCol = indicatorVolAdded > 0 ? ind.getColor(currentPH) : { r: 56, g: 189, b: 248, a: 0.20 };
      let totalV = currentAnalyteVol + indicatorVolAdded + volBase;
      let fillH = Math.min(54, (totalV / 120) * 50);

      if (fillH <= 0) return;

      let bottomW = 60;
      let topW = bottomW - (fillH / 55) * (60 - 16);
      let liquidTopY = y - fillH;

      labCtx.fillStyle = \`rgba(\${baseCol.r}, \${baseCol.g}, \${baseCol.b}, \${baseCol.a})\`;
      labCtx.beginPath();
      labCtx.moveTo(x - bottomW, y - 2);
      labCtx.lineTo(x + bottomW, y - 2);
      labCtx.lineTo(x + topW, liquidTopY);

      let waveAmp = (effectiveFlow > 0 || stirring || (prepState === 1 && prepProgress >= 0.35 && prepProgress <= 0.8)) ? 2.5 : 0.8;
      
      for (let i = topW; i >= -topW; i -= 2) {
        let waveY = liquidTopY + Math.sin(now * 0.008 + i * 0.15 + swirlOffset) * waveAmp;
        labCtx.lineTo(x + i, waveY);
      }

      labCtx.closePath();
      labCtx.fill();

      labCtx.strokeStyle = \`rgba(\${baseCol.r}, \${baseCol.g}, \${baseCol.b}, \${Math.min(1, baseCol.a + 0.3)})\`;
      labCtx.lineWidth = 1.5;
      labCtx.beginPath();
      labCtx.ellipse(x + swirlOffset * 0.4, liquidTopY, topW, 3 + Math.abs(swirlOffset * 0.2), 0, 0, Math.PI * 2);
      labCtx.stroke();

      if (flashIntensity > 0 && indicatorVolAdded > 0) {
        let epCol = ind.getEndpointColor();
        let flashX = x + swirlOffset;
        let flashY = liquidTopY + 10;
        let flashRadius = 10 + flashIntensity * 18;

        let grad = labCtx.createRadialGradient(flashX, flashY, 2, flashX, flashY, flashRadius);
        grad.addColorStop(0, \`rgba(\${epCol.r}, \${epCol.g}, \${epCol.b}, \${0.85 * flashIntensity})\`);
        grad.addColorStop(1, \`rgba(\${epCol.r}, \${epCol.g}, \${epCol.b}, 0.0)\`);

        labCtx.fillStyle = grad;
        labCtx.beginPath();
        labCtx.arc(flashX, flashY, flashRadius, 0, Math.PI * 2);
        labCtx.fill();
      }

      if (prepCompleted) {
        labCtx.save();
        labCtx.translate(x + swirlOffset * 0.5, y - 6);
        labCtx.rotate((stirAngle * Math.PI) / 180);
        labCtx.fillStyle = '#ffffff';
        labCtx.beginPath();
        labCtx.roundRect(-10, -3, 20, 6, 3);
        labCtx.fill();
        labCtx.restore();
      }
    }

    function drawPipetteSystem() {
      // Default resting position elevated in rack above bottles
      let defaultX = 67, defaultY = 275;

      if (prepState === 0 || prepState === 4) {
        drawSinglePipette(defaultX, defaultY, 0, "rgba(56, 189, 248, 0.2)");
        return;
      }

      let startX, startY, destX, destY;
      let colorStr;

      if (prepState === 1) { 
        startX = 67; startY = 370;
        destX = flaskInitX; destY = 430;
        colorStr = "rgba(56, 189, 248, 0.7)";
      } else if (prepState === 2) { 
        startX = 141; startY = 380;
        destX = flaskInitX; destY = 430;
        colorStr = "rgba(220, 38, 38, 0.9)";
      } else {
        return;
      }

      let curX, curY;

      if (prepProgress < 0.20) {
        let t = prepProgress / 0.20;
        curX = startX;
        curY = startY - (startY - 240) * t;
      } else if (prepProgress < 0.35) {
        let t = (prepProgress - 0.20) / 0.15;
        curX = startX + (destX - startX) * t;
        curY = 240 + Math.sin(t * Math.PI) * -30;
      } else if (prepProgress < 0.80) {
        curX = destX;
        curY = destY;
      } else {
        let t = (prepProgress - 0.80) / 0.20;
        curX = destX + (startX - destX) * t;
        curY = destY - (destY - startY) * t;
      }

      let fluidRatio = (prepProgress >= 0.20 && prepProgress <= 0.80) ? 1.0 : 0;
      drawSinglePipette(curX, curY, fluidRatio, colorStr);

      if (prepState === 1 && prepProgress >= 0.35 && prepProgress <= 0.80) {
        let fillH = Math.min(54, (currentAnalyteVol / 120) * 50);
        let bottomY = flaskY - fillH;

        labCtx.strokeStyle = "rgba(56, 189, 248, 0.85)";
        labCtx.lineWidth = 3.5;
        labCtx.beginPath();
        labCtx.moveTo(destX, destY + 2);
        labCtx.lineTo(destX, bottomY);
        labCtx.stroke();
      } else if (prepState === 2 && prepProgress >= 0.45 && prepProgress <= 0.65) {
        let dropP = (prepProgress - 0.45) / 0.20;
        let fillH = Math.min(54, (currentAnalyteVol / 120) * 50);
        let bottomY = flaskY - fillH;
        let dropY = destY + 2 + dropP * (bottomY - destY - 2);

        labCtx.fillStyle = colorStr;
        labCtx.beginPath();
        labCtx.arc(destX, dropY, 2.5, 0, Math.PI * 2);
        labCtx.fill();
      }
    }

    function drawSinglePipette(x, y, fluidRatio, liquidColor) {
      labCtx.strokeStyle = '#cbd5e1';
      labCtx.lineWidth = 1.5;

      labCtx.fillStyle = '#cbd5e1';
      labCtx.font = '9px sans-serif';
      labCtx.fillText('PIPETTE', x - 18, y - 128);

      labCtx.beginPath();
      labCtx.moveTo(x - 4, y - 110);
      labCtx.lineTo(x + 4, y - 110);
      labCtx.lineTo(x + 2, y);
      labCtx.lineTo(x - 2, y);
      labCtx.closePath();

      if (fluidRatio > 0) {
        labCtx.fillStyle = liquidColor;
        labCtx.fill();
      }

      labCtx.stroke();

      labCtx.fillStyle = '#ef4444';
      labCtx.beginPath();
      labCtx.arc(x, y - 116, 8, 0, Math.PI * 2);
      labCtx.fill();
    }

    function drawGraph() {
      let w = curveCanvas.width = curveCanvas.clientWidth;
      let h = curveCanvas.height = curveCanvas.clientHeight;

      curveCtx.clearRect(0, 0, w, h);

      let p = 25;
      let gW = w - p * 2;
      let gH = h - p * 2;

      curveCtx.strokeStyle = '#475569';
      curveCtx.lineWidth = 1;
      curveCtx.beginPath();
      curveCtx.moveTo(p, p);
      curveCtx.lineTo(p, h - p);
      curveCtx.lineTo(w - p, h - p);
      curveCtx.stroke();

      curveCtx.fillStyle = '#94a3b8';
      curveCtx.font = '9px sans-serif';
      curveCtx.fillText('14', 8, p + 4);
      curveCtx.fillText('7', 12, p + gH / 2 + 3);
      curveCtx.fillText('0', 12, h - p);
      curveCtx.fillText('50cm³', w - p - 26, h - 8);

      if (curveHistory.length < 2) return;

      curveCtx.strokeStyle = '#38bdf8';
      curveCtx.lineWidth = 2;
      curveCtx.beginPath();

      for (let i = 0; i < curveHistory.length; i++) {
        let pt = curveHistory[i];
        let x = p + (pt.v / 50) * gW;
        let y = (h - p) - (pt.ph / 14) * gH;

        if (i === 0) curveCtx.moveTo(x, y);
        else curveCtx.lineTo(x, y);
      }
      curveCtx.stroke();
    }

    // Init Engine
    resetStation();
    requestAnimationFrame(loop);
    window.addEventListener('resize', drawGraph);
  </script>
</body>
</html>`,
    isCustomImport: true,
    authorEmail: "ndunj123@gmail.com",
    authorName: "Axiom Creator",
    createdAt: "2026-08-22"
  },
  {
    id: "sim-elastic-inelastic-collision",
    title: "Elastic & Inelastic Collision Lab",
    tagline: "Interactive physics demonstration of linear momentum conservation, coefficient of restitution, and kinetic energy transformations",
    discipline: "physics",
    gradeLevel: ["High School (9-12)", "AP / IB STEM", "Undergraduate"],
    standards: ["HS-PS2-1", "HS-PS2-2", "AP Physics 1 (Unit 4)", "NGSS SEP-5"],
    description: "An interactive 1D mechanics and collision dynamics simulator. Explore elastic, partially inelastic, and completely inelastic collisions between two bodies with adjustable masses and initial velocities. Real-time dynamic calculations derive total momentum conservation (m₁u₁ + m₂u₂ = m₁v₁ + m₂v₂), final velocities via restitution coefficients, and step-by-step kinetic energy loss.",
    learningObjectives: [
      "Analyze how total linear momentum is conserved in isolated systems across all collision types (elastic, inelastic, and sticking)",
      "Investigate how the coefficient of restitution (e) dictates velocity separation and kinetic energy dissipation into thermal/acoustic energy",
      "Calculate final velocities and kinetic energy changes step-by-step using conservation laws and algebraic derivations"
    ],
    thumbnailGradient: "from-rose-600 via-indigo-700 to-slate-950",
    badgeColor: "bg-rose-500/10 text-rose-300 border-rose-500/20",
    iconName: "Activity",
    rating: 4.9,
    reviewCount: 44,
    teacherCount: 185,
    licenseType: "Academic STEM Classroom & Institutional License",
    pricing: {
      singleTeacher: 19,
      schoolDepartment: 200,
      districtUnlimited: 400
    },
    features: [
      "Interactive track with real-time vector arrows indicating magnitude and direction of velocities",
      "Preset scenario quick-loaders (Opposite Elastic, Same Direction Chase, Completely Inelastic Stick, Heavy vs Light)",
      "Dynamic HUD overlay displaying live simulation state, total momentum (P), and kinetic energy (Ek)",
      "Step-by-step physics calculations panel live-evaluating momentum, elastic velocity formulas, and kinetic energy loss",
      "Adjustable mass sliders (0.5 to 10.0 kg), initial velocities (-8.0 to +8.0 m/s), and coefficient of restitution (e = 0.0 to 1.0)"
    ],
    parameterDefaults: {
      m1: 2.0,
      u1: 3.0,
      m2: 3.0,
      u2: -2.0,
      restitution: 1.0
    },
    parameterControls: [
      {
        key: "m1",
        label: "Body 1 Mass (m₁)",
        min: 0.5,
        max: 10.0,
        step: 0.5,
        unit: "kg",
        description: "Mass of the first colliding body"
      },
      {
        key: "u1",
        label: "Body 1 Velocity (u₁)",
        min: -8.0,
        max: 8.0,
        step: 0.5,
        unit: "m/s",
        description: "Initial velocity of body 1"
      },
      {
        key: "m2",
        label: "Body 2 Mass (m₂)",
        min: 0.5,
        max: 10.0,
        step: 0.5,
        unit: "kg",
        description: "Mass of the second colliding body"
      },
      {
        key: "u2",
        label: "Body 2 Velocity (u₂)",
        min: -8.0,
        max: 8.0,
        step: 0.5,
        unit: "m/s",
        description: "Initial velocity of body 2"
      }
    ],
    sampleChallenges: [
      {
        id: "ch-collision-1",
        title: "Zero Final Kinetic Energy Loss",
        instruction: "Configure an elastic collision between unequal masses and confirm kinetic energy is 100% conserved.",
        targetMetric: "Energy Loss",
        targetValue: 0,
        tolerance: 0.01,
        currentValueKey: "keLoss",
        rewardBadge: "Elastic Master"
      },
      {
        id: "ch-collision-2",
        title: "Completely Inelastic Sticking",
        instruction: "Set the coefficient of restitution to 0.0 and observe maximum kinetic energy dissipation as the two bodies couple together.",
        targetMetric: "Common Velocity",
        targetValue: 0.5,
        tolerance: 0.2,
        currentValueKey: "commonV",
        rewardBadge: "Momentum Conservationist"
      }
    ],
    previewFacts: [
      "In any isolated system with no external net force, total linear momentum is strictly conserved in all collision types (elastic, inelastic, or explosive).",
      "In an elastic collision (e = 1.0), kinetic energy is conserved. In an inelastic collision (e < 1.0), mechanical kinetic energy is transformed into thermal energy, deformation, and sound."
    ],
    isHtmlApp: true,
    htmlContent: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Interactive Collision Simulation</title>
    <style>
        :root {
            --bg-color: #0d1117;
            --panel-bg: #161b22;
            --border-color: #30363d;
            --text-main: #c9d1d9;
            --text-muted: #8b949e;
            --accent-blue: #58a6ff;
            --accent-green: #3fb950;
            --accent-purple: #bc8cff;
            --accent-orange: #f0883e;
            --body1-color: #ff7b72;
            --body2-color: #79c0ff;
        }

        * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
        }

        body {
            background-color: var(--bg-color);
            color: var(--text-main);
            display: flex;
            flex-direction: column;
            align-items: center;
            min-height: 100vh;
            padding: 20px;
        }

        header {
            margin-bottom: 20px;
            text-align: center;
        }

        header h1 {
            font-size: 1.8rem;
            color: var(--accent-blue);
            margin-bottom: 5px;
        }

        header p {
            color: var(--text-muted);
            font-size: 0.95rem;
        }

        .main-container {
            display: grid;
            grid-template-columns: 1fr 340px;
            gap: 20px;
            width: 100%;
            max-width: 1200px;
        }

        @media (max-width: 900px) {
            .main-container {
                grid-template-columns: 1fr;
            }
        }

        .sim-section {
            display: flex;
            flex-direction: column;
            gap: 15px;
        }

        .canvas-wrapper {
            background: var(--panel-bg);
            border: 1px solid var(--border-color);
            border-radius: 12px;
            overflow: hidden;
            box-shadow: 0 8px 24px rgba(0,0,0,0.4);
            position: relative;
        }

        canvas {
            display: block;
            background: radial-gradient(circle at center, #1b222d 0%, #0d1117 100%);
            width: 100%;
            height: 380px;
        }

        .hud-overlay {
            position: absolute;
            top: 15px;
            left: 15px;
            background: rgba(22, 27, 34, 0.85);
            backdrop-filter: blur(4px);
            border: 1px solid var(--border-color);
            padding: 10px 15px;
            border-radius: 8px;
            font-size: 0.85rem;
            pointer-events: none;
        }

        .hud-overlay div {
            margin-bottom: 3px;
        }

        .controls-panel {
            background: var(--panel-bg);
            border: 1px solid var(--border-color);
            border-radius: 12px;
            padding: 20px;
            display: flex;
            flex-direction: column;
            gap: 15px;
        }

        .panel-title {
            font-size: 1.1rem;
            color: var(--accent-purple);
            border-bottom: 1px solid var(--border-color);
            padding-bottom: 8px;
        }

        .control-group {
            display: flex;
            flex-direction: column;
            gap: 6px;
        }

        .control-group label {
            font-size: 0.85rem;
            color: var(--text-muted);
            display: flex;
            justify-content: space-between;
        }

        .control-group label span {
            color: var(--text-main);
            font-weight: 600;
        }

        select, input[type="range"] {
            width: 100%;
            background: #21262d;
            border: 1px solid var(--border-color);
            color: var(--text-main);
            padding: 8px;
            border-radius: 6px;
            outline: none;
        }

        input[type="range"] {
            accent-color: var(--accent-blue);
            cursor: pointer;
        }

        .btn-row {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 10px;
        }

        button {
            background: #21262d;
            border: 1px solid var(--border-color);
            color: var(--text-main);
            padding: 10px;
            border-radius: 6px;
            font-weight: 600;
            cursor: pointer;
            transition: background 0.2s, border-color 0.2s;
        }

        button:hover {
            background: #30363d;
            border-color: var(--text-muted);
        }

        button.primary {
            background: #238636;
            color: white;
            border-color: #2ea043;
        }

        button.primary:hover {
            background: #2ea043;
        }

        button.danger {
            background: #da3633;
            color: white;
            border-color: #f85149;
        }

        button.danger:hover {
            background: #f85149;
        }

        .theory-panel {
            background: var(--panel-bg);
            border: 1px solid var(--border-color);
            border-radius: 12px;
            padding: 20px;
            grid-column: 1 / -1;
        }

        .theory-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 20px;
            margin-top: 12px;
        }

        .theory-card {
            background: #21262d;
            border: 1px solid var(--border-color);
            padding: 15px;
            border-radius: 8px;
        }

        .theory-card h3 {
            font-size: 1rem;
            color: var(--accent-orange);
            margin-bottom: 8px;
        }

        .formula-box {
            background: #0d1117;
            border-left: 3px solid var(--accent-blue);
            padding: 8px 12px;
            margin: 8px 0;
            font-family: monospace;
            font-size: 0.9rem;
            color: var(--accent-blue);
        }

        .calc-steps {
            background: #0d1117;
            border-left: 3px solid var(--accent-green);
            padding: 8px 12px;
            margin-top: 8px;
            font-family: monospace;
            font-size: 0.8rem;
            color: var(--text-main);
            line-height: 1.5;
            white-space: pre-wrap;
        }

        .theory-card p {
            font-size: 0.85rem;
            color: var(--text-muted);
            line-height: 1.4;
        }
    </style>
</head>
<body>

    <header>
        <h1>Elastic & Inelastic Collision Lab</h1>
        <p>Interactive Physics Demonstration of Momentum and Energy Conservation</p>
    </header>

    <div class="main-container">
        <!-- Simulation & Controls Column -->
        <div class="sim-section">
            <div class="canvas-wrapper">
                <canvas id="simCanvas" width="800" height="380"></canvas>
                <div class="hud-overlay" id="hudOverlay">
                    <div><strong>State:</strong> <span id="hudState">Ready</span></div>
                    <div><strong>Momentum (P):</strong> <span id="hudMom">0.00</span> kg·m/s</div>
                    <div><strong>Kinetic Energy (E_k):</strong> <span id="hudEnergy">0.00</span> J</div>
                </div>
            </div>

            <!-- Theory Section -->
            <div class="theory-panel">
                <h2 class="panel-title">Governing Physics Equations & Dynamic Calculations</h2>
                <div class="theory-grid">
                    <div class="theory-card">
                        <h3>1. Conservation of Momentum</h3>
                        <p>Total momentum is conserved in all isolated collisions regardless of elasticity.</p>
                        <div class="formula-box">m₁u₁ + m₂u₂ = m₁v₁ + m₂v₂</div>
                        <div class="calc-steps" id="calcMomentum">--</div>
                    </div>
                    <div class="theory-card">
                        <h3>2. Elastic Collision (e = 1)</h3>
                        <p>Both momentum and kinetic energy are fully conserved. Objects bounce apart with separate final velocities.</p>
                        <div class="formula-box">v₁ = ((m₁-m₂)u₁ + 2m₂u₂) / (m₁+m₂)<br>v₂ = ((m₂-m₁)u₂ + 2m₁u₁) / (m₁+m₂)</div>
                        <div class="calc-steps" id="calcElastic">--</div>
                    </div>
                    <div class="theory-card">
                        <h3>3. Completely Inelastic (e = 0)</h3>
                        <p>Kinetic energy loss is maximized. The colliding bodies stick together and move at a common velocity v.</p>
                        <div class="formula-box">v = (m₁u₁ + m₂u₂) / (m₁ + m₂)</div>
                        <div class="calc-steps" id="calcInelastic">--</div>
                    </div>
                    <div class="theory-card" style="grid-column: 1 / -1;">
                        <h3>4. Dynamic Kinetic Energy Calculations</h3>
                        <p>Kinetic energy before and after collision calculated by plugging variables into E_k = ½m₁v₁² + ½m₂v₂².</p>
                        <div class="calc-steps" id="calcKE">--</div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Control Panel Column -->
        <div class="controls-panel">
            <h2 class="panel-title">Simulation Controls</h2>

            <div class="control-group">
                <label>Preset Scenarios</label>
                <select id="presetSelect">
                    <option value="opp_elastic">Opposite Directions (Elastic)</option>
                    <option value="same_elastic">Same Direction (Elastic Chase)</option>
                    <option value="inelastic_stick">Opposite Directions (Inelastic / Stick)</option>
                    <option value="heavy_light">Heavy Mass vs Light Mass</option>
                </select>
            </div>

            <div class="control-group">
                <label>Collision Type</label>
                <select id="collisionType">
                    <option value="1.0">Elastic (e = 1.0)</option>
                    <option value="0.5">Partially Inelastic (e = 0.5)</option>
                    <option value="0.0">Completely Inelastic (e = 0.0)</option>
                </select>
            </div>

            <hr style="border:0; border-top:1px solid var(--border-color);">

            <div class="control-group">
                <label>Body 1 Mass (m₁): <span id="m1Val">2.0</span> kg</label>
                <input type="range" id="m1Range" min="0.5" max="10" step="0.5" value="2.0">
            </div>

            <div class="control-group">
                <label>Body 1 Velocity (u₁): <span id="u1Val">3.0</span> m/s</label>
                <input type="range" id="u1Range" min="-8" max="8" step="0.5" value="3.0">
            </div>

            <hr style="border:0; border-top:1px solid var(--border-color);">

            <div class="control-group">
                <label>Body 2 Mass (m₂): <span id="m2Val">3.0</span> kg</label>
                <input type="range" id="m2Range" min="0.5" max="10" step="0.5" value="3.0">
            </div>

            <div class="control-group">
                <label>Body 2 Velocity (u₂): <span id="u2Val">-2.0</span> m/s</label>
                <input type="range" id="u2Range" min="-8" max="8" step="0.5" value="-2.0">
            </div>

            <div class="btn-row" style="margin-top: 10px;">
                <button class="primary" id="btnStart">Start / Pause</button>
                <button class="danger" id="btnReset">Reset</button>
            </div>
        </div>
    </div>

    <script>
        const canvas = document.getElementById('simCanvas');
        const ctx = canvas.getContext('2d');

        // UI elements
        const presetSelect = document.getElementById('presetSelect');
        const collisionTypeSelect = document.getElementById('collisionType');
        const m1Range = document.getElementById('m1Range');
        const m2Range = document.getElementById('m2Range');
        const u1Range = document.getElementById('u1Range');
        const u2Range = document.getElementById('u2Range');
        const m1Val = document.getElementById('m1Val');
        const m2Val = document.getElementById('m2Val');
        const u1Val = document.getElementById('u1Val');
        const u2Val = document.getElementById('u2Val');
        const btnStart = document.getElementById('btnStart');
        const btnReset = document.getElementById('btnReset');
        const hudState = document.getElementById('hudState');
        const hudMom = document.getElementById('hudMom');
        const hudEnergy = document.getElementById('hudEnergy');

        const calcMomentum = document.getElementById('calcMomentum');
        const calcElastic = document.getElementById('calcElastic');
        const calcInelastic = document.getElementById('calcInelastic');
        const calcKE = document.getElementById('calcKE');

        // Physics & Render State
        let isRunning = false;
        const scale = 35; // pixels per meter
        const trackY = 220;

        let body1 = {
            x: 200,
            mass: 2.0,
            velocity: 3.0,
            radius: 28,
            color: '#ff7b72' // Vibrant Coral Red
        };

        let body2 = {
            x: 600,
            mass: 3.0,
            velocity: -2.0,
            radius: 34,
            color: '#79c0ff' // Bright Electric Blue
        };

        let stateMessage = "Ready to Collide";
        let hasCollided = false;

        // Sync radius proportional to cube root of mass for visual scaling
        function updateRadii() {
            body1.radius = Math.max(20, Math.min(45, 20 * Math.pow(body1.mass, 1/3)));
            body2.radius = Math.max(20, Math.min(45, 20 * Math.pow(body2.mass, 1/3)));
        }

        function loadPreset(preset) {
            isRunning = false;
            hasCollided = false;
            btnStart.textContent = "Start Simulation";

            if (preset === 'opp_elastic') {
                collisionTypeSelect.value = "1.0";
                m1Range.value = 2.0; u1Range.value = 4.0;
                m2Range.value = 3.0; u2Range.value = -3.0;
            } else if (preset === 'same_elastic') {
                collisionTypeSelect.value = "1.0";
                m1Range.value = 3.0; u1Range.value = 5.0;
                m2Range.value = 2.0; u2Range.value = 1.0;
            } else if (preset === 'inelastic_stick') {
                collisionTypeSelect.value = "0.0";
                m1Range.value = 3.0; u1Range.value = 4.0;
                m2Range.value = 3.0; u2Range.value = -2.0;
            } else if (preset === 'heavy_light') {
                collisionTypeSelect.value = "1.0";
                m1Range.value = 6.0; u1Range.value = 3.0;
                m2Range.value = 1.5; u2Range.value = -3.0;
            }
            readInputs();
            resetPositions();
        }

        function updateTheoryCalculations() {
            const m1 = parseFloat(m1Range.value);
            const u1 = parseFloat(u1Range.value);
            const m2 = parseFloat(m2Range.value);
            const u2 = parseFloat(u2Range.value);
            const e = parseFloat(collisionTypeSelect.value);

            // 1. Momentum Calculation
            const pInitial = (m1 * u1 + m2 * u2).toFixed(2);
            calcMomentum.textContent = \`P = (\${m1} × \${u1}) + (\${m2} × \${u2})\n  = \${pInitial} kg·m/s\`;

            // 2. Elastic Velocities Calculation (e = 1)
            const v1_elastic = (((m1 - m2) * u1 + 2 * m2 * u2) / (m1 + m2)).toFixed(2);
            const v2_elastic = (((m2 - m1) * u2 + 2 * m1 * u1) / (m1 + m2)).toFixed(2);
            calcElastic.textContent = \`v₁ = (((\${m1} - \${m2}) × \${u1}) + 2(\${m2})(\${u2})) / (\${m1} + \${m2})\n   = \${v1_elastic} m/s\n\` +
                                     \`v₂ = (((\${m2} - \${m1}) × \${u2}) + 2(\${m1})(\${u1})) / (\${m1} + \${m2})\n   = \${v2_elastic} m/s\`;

            // 3. Inelastic Common Velocity Calculation (e = 0)
            const v_inelastic = ((m1 * u1 + m2 * u2) / (m1 + m2)).toFixed(2);
            calcInelastic.textContent = \`v = (\${m1}×\${u1} + \${m2}×\${u2}) / (\${m1} + \${m2})\n  = \${v_inelastic} m/s\`;

            // 4. Kinetic Energy Calculations with plugged variables
            const ke_initial_1 = (0.5 * m1 * u1 * u1).toFixed(2);
            const ke_initial_2 = (0.5 * m2 * u2 * u2).toFixed(2);
            const ke_initial_total = (parseFloat(ke_initial_1) + parseFloat(ke_initial_2)).toFixed(2);

            // Calculate current final velocities based on selected e
            const v1_curr = (((m1 - e * m2) * u1 + (1 + e) * m2 * u2) / (m1 + m2));
            const v2_curr = (((m2 - e * m1) * u2 + (1 + e) * m1 * u1) / (m1 + m2));
            
            const ke_final_1 = (0.5 * m1 * v1_curr * v1_curr).toFixed(2);
            const ke_final_2 = (0.5 * m2 * v2_curr * v2_curr).toFixed(2);
            const ke_final_total = (parseFloat(ke_final_1) + parseFloat(ke_final_2)).toFixed(2);

            calcKE.textContent = 
                \`Initial E_k:\n\` +
                \`  Body 1: ½(\${m1})(\${u1})² = \${ke_initial_1} J\n\` +
                \`  Body 2: ½(\${m2})(\${u2})² = \${ke_initial_2} J\n\` +
                \`  Total Initial E_k = \${ke_initial_total} J\n\n\` +
                \`Final E_k (Current e = \${e}):\n\` +
                \`  Body 1: ½(\${m1})(\${v1_curr.toFixed(2)})² = \${ke_final_1} J\n\` +
                \`  Body 2: ½(\${m2})(\${v2_curr.toFixed(2)})² = \${ke_final_2} J\n\` +
                \`  Total Final E_k = \${ke_final_total} J (Loss: \${(ke_initial_total - ke_final_total).toFixed(2)} J)\`;
        }

        function readInputs() {
            body1.mass = parseFloat(m1Range.value);
            body1.velocity = parseFloat(u1Range.value);
            body2.mass = parseFloat(m2Range.value);
            body2.velocity = parseFloat(u2Range.value);

            m1Val.textContent = body1.mass.toFixed(1);
            m2Val.textContent = body2.mass.toFixed(1);
            u1Val.textContent = body1.velocity.toFixed(1);
            u2Val.textContent = body2.velocity.toFixed(1);

            updateRadii();
            updateTheoryCalculations();
        }

        function resetPositions() {
            hasCollided = false;
            body1.x = canvas.width / 2 - 180;
            body2.x = canvas.width / 2 + 180;
            stateMessage = "Ready";
            hudState.textContent = stateMessage;
        }

        // Event Listeners
        presetSelect.addEventListener('change', (e) => loadPreset(e.target.value));
        collisionTypeSelect.addEventListener('change', () => {
            updateTheoryCalculations();
            if (!isRunning && !hasCollided) {
                readInputs();
            }
        });
        [m1Range, m2Range, u1Range, u2Range].forEach(input => {
            input.addEventListener('input', () => {
                if (!isRunning && !hasCollided) {
                    readInputs();
                }
            });
        });

        btnStart.addEventListener('click', () => {
            isRunning = !isRunning;
            btnStart.textContent = isRunning ? "Pause" : "Resume";
        });

        btnReset.addEventListener('click', () => {
            isRunning = false;
            btnStart.textContent = "Start Simulation";
            readInputs();
            resetPositions();
        });

        function updatePhysics(dt) {
            if (!isRunning) return;

            // Move bodies based on velocity (scaled for smooth animation)
            body1.x += body1.velocity * scale * dt;
            body2.x += body2.velocity * scale * dt;

            // Check for collision distance threshold
            const minDist = body1.radius + body2.radius;
            const currentDist = body2.x - body1.x;

            if (!hasCollided && currentDist <= minDist) {
                hasCollided = true;
                const e = parseFloat(collisionTypeSelect.value);

                const u1 = body1.velocity;
                const u2 = body2.velocity;
                const m1 = body1.mass;
                const m2 = body2.mass;

                if (e === 0.0) {
                    // Completely Inelastic (Stick together)
                    const commonV = (m1 * u1 + m2 * u2) / (m1 + m2);
                    body1.velocity = commonV;
                    body2.velocity = commonV;
                    stateMessage = \`Inelastic Collision: Joined at v = \${commonV.toFixed(2)} m/s\`;
                } else {
                    // General Elastic / Partially Inelastic collision formula
                    const v1 = ((m1 - e * m2) * u1 + (1 + e) * m2 * u2) / (m1 + m2);
                    const v2 = ((m2 - e * m1) * u2 + (1 + e) * m1 * u1) / (m1 + m2);
                    body1.velocity = v1;
                    body2.velocity = v2;
                    stateMessage = e === 1.0 ? "Elastic Collision (e = 1.0)" : \`Partially Inelastic (e = \${e})\`;
                }
                hudState.textContent = stateMessage;

                // Prevent sticking overlap jitter
                body2.x = body1.x + minDist;
            }
        }

        function drawScene() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Draw track grid / baseline
            ctx.strokeStyle = '#30363d';
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.moveTo(20, trackY + 35);
            ctx.lineTo(canvas.width - 20, trackY + 35);
            ctx.stroke();

            // Draw ruler markers along track
            ctx.fillStyle = '#8b949e';
            ctx.font = '10px sans-serif';
            for (let x = 50; x < canvas.width; x += 50) {
                ctx.fillRect(x, trackY + 35, 1, 6);
            }

            // Draw Body 1
            drawBall(body1, "m₁", "u₁");

            // Draw Body 2
            drawBall(body2, "m₂", "u₂");

            // Update HUD values live
            const mom = (body1.mass * body1.velocity + body2.mass * body2.velocity).toFixed(2);
            const ke = (0.5 * body1.mass * body1.velocity * body1.velocity + 0.5 * body2.mass * body2.velocity * body2.velocity).toFixed(2);
            hudMom.textContent = mom;
            hudEnergy.textContent = ke;
        }

        function drawBall(body, massLabel, velLabel) {
            ctx.save();
            ctx.translate(body.x, trackY);

            // Ball shadow/glow
            ctx.shadowColor = body.color;
            ctx.shadowBlur = 15;

            // Ball body gradient
            const grad = ctx.createRadialGradient(-8, -8, 2, 0, 0, body.radius);
            grad.addColorStop(0, '#ffffff');
            grad.addColorStop(0.3, body.color);
            grad.addColorStop(1, '#0d1117');

            ctx.beginPath();
            ctx.arc(0, 0, body.radius, 0, Math.PI * 2);
            ctx.fillStyle = grad;
            ctx.fill();
            ctx.lineWidth = 2;
            ctx.strokeStyle = '#ffffff';
            ctx.stroke();

            // Labels inside/above ball
            ctx.shadowBlur = 0;
            ctx.fillStyle = '#ffffff';
            ctx.font = 'bold 12px sans-serif';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillText(\`\${massLabel}=\${body.mass}kg\`, 0, -4);

            ctx.font = '11px sans-serif';
            ctx.fillStyle = '#c9d1d9';
            ctx.fillText(\`\${body.velocity.toFixed(1)}m/s\`, 0, 14);

            // Velocity Vector Arrow
            if (Math.abs(body.velocity) > 0.05) {
                drawArrow(0, -body.radius - 12, body.velocity * 12, 0, body.color);
            }

            ctx.restore();
        }

        function drawArrow(x, y, dx, dy, color) {
            ctx.strokeStyle = color;
            ctx.fillStyle = color;
            ctx.lineWidth = 3;
            ctx.beginPath();
            ctx.moveTo(x, y);
            ctx.lineTo(x + dx, y + dy);
            ctx.stroke();

            // Arrowhead
            const angle = Math.atan2(dy, dx);
            ctx.beginPath();
            ctx.moveTo(x + dx, y + dy);
            ctx.lineTo(x + dx - 8 * Math.cos(angle - Math.PI / 6), y + dy - 8 * Math.sin(angle - Math.PI / 6));
            ctx.lineTo(x + dx - 8 * Math.cos(angle + Math.PI / 6), y + dy - 8 * Math.sin(angle + Math.PI / 6));
            ctx.fill();
        }

        // Main Animation Loop
        let lastTime = performance.now();
        function loop(now) {
            const dt = (now - lastTime) / 1000;
            lastTime = now;

            updatePhysics(Math.min(dt, 0.1));
            drawScene();

            requestAnimationFrame(loop);
        }

        // Initialize
        readInputs();
        resetPositions();
        requestAnimationFrame(loop);
    </script>
</body>
</html>`,
    isCustomImport: true,
    authorEmail: "ndunj123@gmail.com",
    authorName: "Axiom Creator",
    createdAt: "2026-08-22"
  },
  {
    id: "sim-double-pendulum-chaos",
    title: "Double Pendulum Dynamics & Deterministic Chaos",
    tagline: "Interactive simulation of deterministic chaos, non-linear coupling, Runge-Kutta 4th order (RK4) integration, and trajectory phase trails",
    discipline: "physics",
    gradeLevel: ["AP / IB STEM", "Undergraduate"],
    standards: ["AP Physics C (Mechanics)", "AP Physics 1 (Unit 6)", "HS-PS2-1"],
    description: "An interactive physics simulation demonstrating deterministic chaos, non-linear kinetic/potential energy exchange, and the Butterfly Effect in a coupled double pendulum. Driven by real-time Runge-Kutta 4th Order (RK4) numerical integration of Lagrangian equations of motion with adjustable gravity, rod lengths, bob masses, and high-resolution rainbow trajectory phase trails.",
    learningObjectives: [
      "Investigate how non-linear coupling between upper and lower pendulum bobs produces deterministic chaos and sensitive dependence on initial conditions (Butterfly Effect)",
      "Observe continuous gravitational potential energy to rotational kinetic energy exchange and high-velocity whipping loops",
      "Analyze how numerical methods like Runge-Kutta 4th Order (RK4) accurately solve non-linear differential equations of motion in classical Lagrangian mechanics"
    ],
    thumbnailGradient: "from-emerald-600 via-teal-700 to-slate-950",
    badgeColor: "bg-emerald-500/10 text-emerald-300 border-emerald-500/20",
    iconName: "RotateCw",
    rating: 4.95,
    reviewCount: 38,
    teacherCount: 142,
    licenseType: "Academic STEM Classroom & Institutional License",
    pricing: {
      singleTeacher: 19,
      schoolDepartment: 200,
      districtUnlimited: 400
    },
    features: [
      "Real-time 4th Order Runge-Kutta (RK4) numerical integration solving coupled Lagrangian angular acceleration equations",
      "Rainbow chromatic trajectory trail rendering path sweeps and strange attractors",
      "Real-time interactive perturbation tool ('Kick') illustrating sensitive phase divergence",
      "Granular parameter tuning for Gravity (g = 0 to 25 m/s²), upper/lower rod lengths (50 to 200 px), bob masses (1 to 50 kg), and trail lengths (10 to 2000 pts)",
      "Comprehensive educational physics guide explaining non-linear coupling, whipping energy concentration, and phase space divergence"
    ],
    parameterDefaults: {
      g: 9.81,
      m1: 10,
      m2: 10,
      l1: 140,
      l2: 140,
      trail: 500
    },
    parameterControls: [
      {
        key: "g",
        label: "Gravity (g)",
        min: 0,
        max: 25,
        step: 0.1,
        unit: "m/s²",
        description: "Downward gravitational acceleration restoring force"
      },
      {
        key: "m1",
        label: "Upper Mass (m₁)",
        min: 1,
        max: 50,
        step: 1,
        unit: "kg",
        description: "Mass of the primary pivot bob"
      },
      {
        key: "m2",
        label: "Lower Mass (m₂)",
        min: 1,
        max: 50,
        step: 1,
        unit: "kg",
        description: "Mass of the secondary outer bob"
      },
      {
        key: "l1",
        label: "Upper Length (l₁)",
        min: 50,
        max: 200,
        step: 5,
        unit: "px",
        description: "Length of the primary pendulum rod"
      },
      {
        key: "l2",
        label: "Lower Length (l₂)",
        min: 50,
        max: 200,
        step: 5,
        unit: "px",
        description: "Length of the secondary pendulum rod"
      }
    ],
    sampleChallenges: [
      {
        id: "ch-pendulum-1",
        title: "Zero Gravity Linear Drift",
        instruction: "Set gravity to 0 m/s² and observe the pendulum drift with constant angular momentum around its pivot.",
        targetMetric: "Gravity",
        targetValue: 0,
        tolerance: 0.05,
        currentValueKey: "g",
        rewardBadge: "Orbital Navigator"
      },
      {
        id: "ch-pendulum-2",
        title: "Chaotic Whipping Regime",
        instruction: "Configure heavy upper mass (m₁ = 40 kg) and light lower mass (m₂ = 2 kg) to observe dramatic chaotic whipping loops.",
        targetMetric: "Upper Mass",
        targetValue: 40,
        tolerance: 1,
        currentValueKey: "m1",
        rewardBadge: "Chaos Explorer"
      }
    ],
    previewFacts: [
      "A double pendulum is completely deterministic (governed strictly by Newton's and Lagrange's laws with no random variables), yet its motion is unpredictable over long periods due to deterministic chaos.",
      "The system possesses a positive Lyapunov exponent, meaning that an angular difference as small as 0.0001° between two pendulums will compound exponentially into totally disparate trajectories in just seconds."
    ],
    isHtmlApp: true,
    htmlContent: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Double Pendulum Physics & Simulation</title>
    <style>
        :root {
            --bg-color: #121212;
            --panel-bg: #1e1e1e;
            --accent-color: #00e676;
            --accent-hover: #00c853;
            --text-main: #e0e0e0;
            --text-muted: #a0a0a0;
            --border-color: #333333;
        }

        body {
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
            background-color: var(--bg-color);
            color: var(--text-main);
            margin: 0;
            padding: 20px;
            display: flex;
            justify-content: center;
        }

        .container {
            max-width: 1200px;
            width: 100%;
            display: flex;
            flex-direction: column;
            gap: 25px;
        }

        header {
            text-align: center;
            border-bottom: 1px solid var(--border-color);
            padding-bottom: 15px;
        }

        header h1 {
            margin: 0;
            font-size: 2.2rem;
            color: #fff;
        }

        header p {
            margin: 5px 0 0;
            color: var(--text-muted);
        }

        .app-layout {
            display: grid;
            grid-template-columns: 1fr 340px;
            gap: 20px;
            align-items: start;
        }

        @media (max-width: 900px) {
            .app-layout {
                grid-template-columns: 1fr;
            }
        }

        .sim-view {
            background-color: var(--panel-bg);
            border-radius: 8px;
            padding: 15px;
            border: 1px solid var(--border-color);
            display: flex;
            flex-direction: column;
            align-items: center;
        }

        canvas {
            background-color: #000;
            border-radius: 4px;
            border: 1px solid var(--border-color);
            max-width: 100%;
            height: auto;
        }

        .controls-panel {
            background-color: var(--panel-bg);
            border-radius: 8px;
            padding: 20px;
            border: 1px solid var(--border-color);
            display: flex;
            flex-direction: column;
            gap: 15px;
        }

        .controls-panel h2 {
            margin-top: 0;
            font-size: 1.3rem;
            border-bottom: 1px solid var(--border-color);
            padding-bottom: 8px;
        }

        .control-group {
            display: flex;
            flex-direction: column;
            gap: 5px;
        }

        .control-group label {
            font-size: 0.9rem;
            font-weight: bold;
            display: flex;
            justify-content: space-between;
        }

        .control-group label span {
            color: var(--accent-color);
        }

        input[type=range] {
            width: 100%;
            accent-color: var(--accent-color);
        }

        .btn-group {
            display: flex;
            gap: 10px;
            margin-top: 10px;
        }

        button {
            flex: 1;
            padding: 10px;
            border: none;
            border-radius: 4px;
            font-weight: bold;
            cursor: pointer;
            transition: background 0.2s;
        }

        .btn-primary {
            background-color: var(--accent-color);
            color: #000;
        }

        .btn-primary:hover {
            background-color: var(--accent-hover);
        }

        .btn-secondary {
            background-color: #333;
            color: #fff;
        }

        .btn-secondary:hover {
            background-color: #444;
        }

        .info-section {
            background-color: var(--panel-bg);
            border-radius: 8px;
            padding: 25px;
            border: 1px solid var(--border-color);
            line-height: 1.6;
        }

        .info-section h2 {
            color: var(--accent-color);
            margin-top: 0;
            border-bottom: 1px solid var(--border-color);
            padding-bottom: 8px;
        }

        .info-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 20px;
            margin-top: 15px;
        }

        .info-card {
            background: rgba(255, 255, 255, 0.03);
            border: 1px solid var(--border-color);
            border-radius: 6px;
            padding: 15px;
        }

        .info-card h3 {
            margin-top: 0;
            font-size: 1.1rem;
            color: #fff;
        }

        ul {
            padding-left: 20px;
            margin: 0;
        }

        li {
            margin-bottom: 8px;
        }

        .code-block {
            background-color: #0d0d0d;
            padding: 8px;
            border-radius: 4px;
            font-family: monospace;
            font-size: 0.85rem;
        }
    </style>
</head>
<body>

<div class="container">
    <header>
        <h1>Double Pendulum Dynamics</h1>
        <p>Interactive simulation of deterministic chaos and coupled non-linear oscillations</p>
    </header>

    <div class="app-layout">
        <!-- Canvas Simulation Area -->
        <div class="sim-view">
            <canvas id="simCanvas" width="600" height="600"></canvas>
        </div>

        <!-- Interactive Controls Panel -->
        <div class="controls-panel">
            <h2>Simulation Controls</h2>

            <div class="control-group">
                <label for="gSlider">Gravity (g): <span id="gVal">9.81 m/s²</span></label>
                <input type="range" id="gSlider" min="0" max="25" step="0.1" value="9.81">
            </div>

            <div class="control-group">
                <label for="m1Slider">Upper Mass (m1): <span id="m1Val">10 kg</span></label>
                <input type="range" id="m1Slider" min="1" max="50" step="1" value="10">
            </div>

            <div class="control-group">
                <label for="m2Slider">Lower Mass (m2): <span id="m2Val">10 kg</span></label>
                <input type="range" id="m2Slider" min="1" max="50" step="1" value="10">
            </div>

            <div class="control-group">
                <label for="l1Slider">Upper Length (l1): <span id="l1Val">140 px</span></label>
                <input type="range" id="l1Slider" min="50" max="200" step="5" value="140">
            </div>

            <div class="control-group">
                <label for="l2Slider">Lower Length (l2): <span id="l2Val">140 px</span></label>
                <input type="range" id="l2Slider" min="50" max="200" step="5" value="140">
            </div>

            <div class="control-group">
                <label for="trailSlider">Trail Length: <span id="trailVal">500 pts</span></label>
                <input type="range" id="trailSlider" min="10" max="2000" step="10" value="500">
            </div>

            <div class="btn-group">
                <button id="pauseBtn" class="btn-primary">Pause</button>
                <button id="resetBtn" class="btn-secondary">Clear Trail</button>
            </div>
            
            <button id="kickBtn" class="btn-secondary" style="margin-top: 5px;">Perturb System (Kick)</button>
        </div>
    </div>

    <!-- Educational & Explanatory Documentation -->
    <div class="info-section">
        <h2>How the Double Pendulum Works</h2>
        <p>
            A double pendulum consists of a primary physical pendulum with a secondary pendulum attached to its bob. 
            Despite being governed by fully deterministic classical mechanics (Newton's laws), its physical motion is famous for displaying extreme 
            <strong>deterministic chaos</strong>.
        </p>

        <div class="info-grid">
            <div class="info-card">
                <h3>1. Non-Linear Coupling</h3>
                <p>
                    Unlike a simple pendulum whose motion depends only on its own restoring force, the upper bob (m1) serves as a moving pivot for the lower bob (m2). 
                    The acceleration of m1 creates fictitious inertial forces on m2, while the swinging of m2 exerts dynamic forces back onto m1.
                </p>
            </div>

            <div class="info-card">
                <h3>2. Energy Exchange & Whipping</h3>
                <p>
                    Potential energy continually transforms into kinetic energy and back again. When energy concentrates into the outer rod (l2), it executes rapid "whipping" movements or flips full 360° loops over the central pivot.
                </p>
            </div>

            <div class="info-card">
                <h3>3. Sensitive Initial Conditions</h3>
                <p>
                    The system exhibits the <em>Butterfly Effect</em>. Releasing the top rod from an angle difference as tiny as 0.0001° yields wildly different trajectory paths within just a few swings, making long-term predictions impossible without continuous ultra-high-precision integration.
                </p>
            </div>
        </div>

        <h2 style="margin-top: 25px;">Guide to Interactive Controls</h2>
        <div class="info-grid">
            <div class="info-card">
                <h3>Gravity (g)</h3>
                <p>
                    <strong>Effect:</strong> Controls the downward acceleration restoring force.<br>
                    • <strong>High Gravity:</strong> Accelerates motion, increases kinetic energy transfers, and causes rapid whipping.<br>
                    • <strong>Zero Gravity (0 m/s²):</strong> Pendulum drifts linearly across its pivot due to conservation of angular momentum without gravitational pull.
                </p>
            </div>

            <div class="info-card">
                <h3>Mass Parameters (m1 vs m2)</h3>
                <p>
                    <strong>Effect:</strong> Alters the inertia ratio and cross-coupling momentum.<br>
                    • <strong>Heavy m1, Light m2:</strong> The top arm acts as a dominant driver; the bottom arm behaves like a chaotic tail.<br>
                    • <strong>Light m1, Heavy m2:</strong> The bottom mass heavily destabilizes and jerks the primary pivot arm.
                </p>
            </div>

            <div class="info-card">
                <h3>Arm Lengths (l1 vs l2)</h3>
                <p>
                    <strong>Effect:</strong> Changes torque leverage and moment of inertia.<br>
                    • Longer arms increase spatial sweeps and visual canvas radius.<br>
                    • Shortening an arm decreases its moment of inertia, forcing it to rotate faster to conserve energy.
                </p>
            </div>

            <div class="info-card">
                <h3>Trail Length & System Kick</h3>
                <p>
                    • <strong>Trail Length:</strong> Sets how many previous coordinate points of the outer bob (m2) are retained to render the visual trajectory path.<br>
                    • <strong>Perturb System (Kick):</strong> Imparts a sudden velocity nudge to the upper joint, demonstrating how small force inputs drastically transform chaotic paths.
                </p>
            </div>
        </div>
    </div>
</div>

<script>
    const canvas = document.getElementById('simCanvas');
    const ctx = canvas.getContext('2d');
    const width = canvas.width;
    const height = canvas.height;
    const originX = width / 2;
    const originY = height / 3;

    // --- State Variables ---
    let params = {
        g: 9.81,
        l1: 140,
        l2: 140,
        m1: 10,
        m2: 10,
        a1: Math.PI / 2, // 90 degrees
        a2: Math.PI / 2, // 90 degrees
        a1_v: 0,
        a2_v: 0
    };

    let trail = [];
    let trailLimit = 500;
    let isPaused = false;

    // --- DOM Control Handles ---
    const gSlider = document.getElementById('gSlider');
    const m1Slider = document.getElementById('m1Slider');
    const m2Slider = document.getElementById('m2Slider');
    const l1Slider = document.getElementById('l1Slider');
    const l2Slider = document.getElementById('l2Slider');
    const trailSlider = document.getElementById('trailSlider');

    const gVal = document.getElementById('gVal');
    const m1Val = document.getElementById('m1Val');
    const m2Val = document.getElementById('m2Val');
    const l1Val = document.getElementById('l1Val');
    const l2Val = document.getElementById('l2Val');
    const trailVal = document.getElementById('trailVal');

    const pauseBtn = document.getElementById('pauseBtn');
    const resetBtn = document.getElementById('resetBtn');
    const kickBtn = document.getElementById('kickBtn');

    // --- Control Event Binding ---
    gSlider.addEventListener('input', (e) => {
        params.g = parseFloat(e.target.value);
        gVal.textContent = \`\${params.g.toFixed(2)} m/s²\`;
    });

    m1Slider.addEventListener('input', (e) => {
        params.m1 = parseFloat(e.target.value);
        m1Val.textContent = \`\${params.m1} kg\`;
    });

    m2Slider.addEventListener('input', (e) => {
        params.m2 = parseFloat(e.target.value);
        m2Val.textContent = \`\${params.m2} kg\`;
    });

    l1Slider.addEventListener('input', (e) => {
        params.l1 = parseFloat(e.target.value);
        l1Val.textContent = \`\${params.l1} px\`;
    });

    l2Slider.addEventListener('input', (e) => {
        params.l2 = parseFloat(e.target.value);
        l2Val.textContent = \`\${params.l2} px\`;
    });

    trailSlider.addEventListener('input', (e) => {
        trailLimit = parseInt(e.target.value);
        trailVal.textContent = \`\${trailLimit} pts\`;
    });

    pauseBtn.addEventListener('click', () => {
        isPaused = !isPaused;
        pauseBtn.textContent = isPaused ? "Play" : "Pause";
    });

    resetBtn.addEventListener('click', () => {
        trail = [];
    });

    kickBtn.addEventListener('click', () => {
        params.a1_v += (Math.random() - 0.5) * 0.2;
        params.a2_v += (Math.random() - 0.5) * 0.5;
    });

    // --- Physics Derivatives via Runge-Kutta 4th Order (RK4) ---
    function getDerivatives(a1, a2, v1, v2) {
        const { g, l1, l2, m1, m2 } = params;

        const delta = a1 - a2;

        // Angular acceleration 1 formula
        const num1 = -g * (2 * m1 + m2) * Math.sin(a1) - m2 * g * Math.sin(a1 - 2 * a2);
        const num2 = -2 * Math.sin(delta) * m2 * (v2 * v2 * l2 + v1 * v1 * l1 * Math.cos(delta));
        const den1 = l1 * (2 * m1 + m2 - m2 * Math.cos(2 * delta));
        const acc1 = (num1 + num2) / den1;

        // Angular acceleration 2 formula
        const num3 = 2 * Math.sin(delta) * (v1 * v1 * l1 * (m1 + m2) + g * (m1 + m2) * Math.cos(a1) + v2 * v2 * l2 * m2 * Math.cos(delta));
        const den2 = l2 * (2 * m1 + m2 - m2 * Math.cos(2 * delta));
        const acc2 = num3 / den2;

        return [v1, acc1, v2, acc2];
    }

    function rk4Step(dt) {
        let { a1, a2, a1_v, a2_v } = params;

        const [k1_v1, k1_a1, k1_v2, k1_a2] = getDerivatives(a1, a2, a1_v, a2_v);

        const [k2_v1, k2_a1, k2_v2, k2_a2] = getDerivatives(
            a1 + 0.5 * dt * k1_v1,
            a2 + 0.5 * dt * k1_v2,
            a1_v + 0.5 * dt * k1_a1,
            a2_v + 0.5 * dt * k1_a2
        );

        const [k3_v1, k3_a1, k3_v2, k3_a2] = getDerivatives(
            a1 + 0.5 * dt * k2_v1,
            a2 + 0.5 * dt * k2_v2,
            a1_v + 0.5 * dt * k2_a1,
            a2_v + 0.5 * dt * k2_a2
        );

        const [k4_v1, k4_a1, k4_v2, k4_a2] = getDerivatives(
            a1 + dt * k3_v1,
            a2 + dt * k3_v2,
            a1_v + dt * k3_a1,
            a2_v + dt * k3_a2
        );

        params.a1 += (dt / 6) * (k1_v1 + 2 * k2_v1 + 2 * k3_v1 + k4_v1);
        params.a1_v += (dt / 6) * (k1_a1 + 2 * k2_a1 + 2 * k3_a1 + k4_a1);

        params.a2 += (dt / 6) * (k1_v2 + 2 * k2_v2 + 2 * k3_v2 + k4_v2);
        params.a2_v += (dt / 6) * (k1_a2 + 2 * k2_a2 + 2 * k3_a2 + k4_a2);
    }

    // --- Render Loop ---
    function animate() {
        if (!isPaused) {
            // Run sub-steps for numerical stability
            const subSteps = 4;
            const dt = 0.2 / subSteps;
            for (let i = 0; i < subSteps; i++) {
                rk4Step(dt);
            }
        }

        // Forward Kinematics
        const x1 = originX + params.l1 * Math.sin(params.a1);
        const y1 = originY + params.l1 * Math.cos(params.a1);

        const x2 = x1 + params.l2 * Math.sin(params.a2);
        const y2 = y1 + params.l2 * Math.cos(params.a2);

        // Append trail position
        if (!isPaused) {
            trail.push({ x: x2, y: y2 });
            while (trail.length > trailLimit) {
                trail.shift();
            }
        }

        // Draw Frame
        ctx.clearRect(0, 0, width, height);

        // 1. Render Trajectory Trail
        if (trail.length > 1) {
            for (let i = 0; i < trail.length - 1; i++) {
                ctx.beginPath();
                ctx.moveTo(trail[i].x, trail[i].y);
                ctx.lineTo(trail[i + 1].x, trail[i + 1].y);
                const progress = i / trail.length;
                ctx.strokeStyle = \`hsla(\${progress * 280 + 100}, 100%, 50%, \${progress})\`;
                ctx.lineWidth = 2;
                ctx.stroke();
            }
        }

        // 2. Render Pendulum Structure
        ctx.strokeStyle = '#ffffff';
        ctx.lineWidth = 4;
        ctx.lineCap = 'round';

        // Arm 1
        ctx.beginPath();
        ctx.moveTo(originX, originY);
        ctx.lineTo(x1, y1);
        ctx.stroke();

        // Arm 2
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.stroke();

        // Pivot Base
        ctx.fillStyle = '#888';
        ctx.beginPath();
        ctx.arc(originX, originY, 6, 0, Math.PI * 2);
        ctx.fill();

        // Bob 1
        ctx.fillStyle = '#00e676';
        ctx.beginPath();
        ctx.arc(x1, y1, Math.max(6, params.m1 * 0.8), 0, Math.PI * 2);
        ctx.fill();
        ctx.strokeStyle = '#fff';
        ctx.lineWidth = 1;
        ctx.stroke();

        // Bob 2
        ctx.fillStyle = '#ff3d00';
        ctx.beginPath();
        ctx.arc(x2, y2, Math.max(6, params.m2 * 0.8), 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();

        requestAnimationFrame(animate);
    }

    animate();
</script>
</body>
</html>`,
    isCustomImport: true,
    authorEmail: "ndunj123@gmail.com",
    authorName: "Axiom Creator",
    createdAt: "2026-08-23"
  },
  {
    id: "sim-galvanic-cell-nernst",
    title: "Galvanic Cell & Nernst Equation Visualizer",
    tagline: "Spontaneous electrochemical redox reactions, standard vs non-standard cell potentials (E°cell vs Ecell), and Nernst equation calculations",
    discipline: "chemistry",
    gradeLevel: ["High School (9-12)", "AP / IB STEM", "Undergraduate"],
    standards: ["AP Chemistry (Unit 9)", "HS-PS1-4", "HS-PS1-7", "NGSS SEP-5"],
    description: "An interactive electrochemical simulation modeling spontaneous galvanic cells and concentration cells. Select from 8 metal redox couples (Mg, Al, Zn, Fe, Ni, Pb, Cu, Ag), adjust electrolyte ion concentrations (0.001 to 2.00 M) and temperature (273 to 373 K). Real-time animation models external electron flow, curved salt bridge ion migration (K⁺/NO₃⁻), live voltmeter readings, reaction quotients (Q), and step-by-step Nernst equation calculations (Ecell = E°cell - (RT/nF)lnQ).",
    learningObjectives: [
      "Determine spontaneous anode (oxidation) and cathode (reduction) half-reactions using standard reduction potentials (E°)",
      "Investigate why standard cell potential (E°cell) is constant under standard conditions (1.0 M) while non-standard potential (Ecell) varies dynamically with concentration",
      "Calculate reaction quotient Q, moles of electrons transferred n, and non-standard cell potential using the Nernst Equation",
      "Analyze the role of salt bridge counter-ions (K⁺ and NO₃⁻) in maintaining electrical neutrality and sustaining continuous current flow"
    ],
    thumbnailGradient: "from-cyan-600 via-sky-700 to-slate-950",
    badgeColor: "bg-cyan-500/10 text-cyan-300 border-cyan-500/20",
    iconName: "BatteryCharging",
    rating: 4.96,
    reviewCount: 52,
    teacherCount: 198,
    licenseType: "Academic STEM Classroom & Institutional License",
    pricing: {
      singleTeacher: 19,
      schoolDepartment: 200,
      districtUnlimited: 400
    },
    features: [
      "Interactive two-beaker galvanic cell with live external circuit electron drift and voltmeter",
      "Curved KNO₃ salt bridge with dynamic counter-ion migration (NO₃⁻ to anode, K⁺ to cathode)",
      "8 metal/ion redox couples (Mg²⁺/Mg, Al³⁺/Al, Zn²⁺/Zn, Fe²⁺/Fe, Ni²⁺/Ni, Pb²⁺/Pb, Cu²⁺/Cu, Ag⁺/Ag)",
      "Real-time Nernst equation calculation with temperature (273–373 K) and variable concentrations (0.001–2.00 M)",
      "Balanced redox net ionic equation generator and reaction quotient (Q) calculator",
      "Concentration cell mode demonstrating entropy-driven voltage from identical electrodes"
    ],
    parameterDefaults: {
      coupleLeft: "Zn",
      coupleRight: "Cu",
      concLeft: 1.0,
      concRight: 1.0,
      temp: 298
    },
    parameterControls: [
      {
        key: "concLeft",
        label: "Left Ion Concentration",
        min: 0.001,
        max: 2.0,
        step: 0.001,
        unit: "M",
        description: "Molar concentration of dissolved ions in the left half-cell"
      },
      {
        key: "concRight",
        label: "Right Ion Concentration",
        min: 0.001,
        max: 2.0,
        step: 0.001,
        unit: "M",
        description: "Molar concentration of dissolved ions in the right half-cell"
      },
      {
        key: "temp",
        label: "Temperature (T)",
        min: 273,
        max: 373,
        step: 1,
        unit: "K",
        description: "Absolute thermodynamic cell temperature in Kelvin"
      }
    ],
    sampleChallenges: [
      {
        id: "ch-galvanic-1",
        title: "Standard Daniell Cell (+1.10 V)",
        instruction: "Configure standard Zinc-Copper cell at 1.00 M each and 298 K to verify standard cell potential E°cell = +1.10 V.",
        targetMetric: "Standard Potential",
        targetValue: 1.10,
        tolerance: 0.02,
        currentValueKey: "concLeft",
        rewardBadge: "Electrochemist"
      },
      {
        id: "ch-galvanic-2",
        title: "Copper Concentration Cell",
        instruction: "Select Copper for both electrodes with 0.001 M on one side and 2.00 M on the other to generate voltage from a concentration gradient.",
        targetMetric: "Concentration Ratio",
        targetValue: 0.001,
        tolerance: 0.001,
        currentValueKey: "concLeft",
        rewardBadge: "Gradient Pioneer"
      }
    ],
    previewFacts: [
      "Standard cell potential E°cell is a thermodynamic constant defined at 1.0 M concentration and 298.15 K; it does not change when solution concentrations vary.",
      "The Nernst equation connects thermodynamics (ΔG = -nFE) with chemical equilibrium, explaining why batteries gradually lose voltage as chemical reactants are consumed."
    ],
    isHtmlApp: true,
    htmlContent: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Galvanic Cell & Nernst Equation Simulation</title>
  <style>
    :root {
      --bg-dark: #0f172a;
      --card-bg: #1e293b;
      --text-main: #f8fafc;
      --text-muted: #94a3b8;
      --accent-blue: #38bdf8;
      --accent-green: #4ade80;
      --accent-orange: #fb923c;
      --border-color: #334155;
    }

    * { box-sizing: border-box; margin: 0; padding: 0; }

    body {
      font-family: system-ui, -apple-system, sans-serif;
      background-color: var(--bg-dark);
      color: var(--text-main);
      line-height: 1.5;
      padding: 16px;
    }

    .container {
      max-width: 1200px;
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      gap: 20px;
    }

    header { text-align: center; }
    header h1 { color: var(--accent-blue); font-size: 2rem; }
    header p { color: var(--text-muted); }

    .app-layout {
      display: grid;
      grid-template-columns: 1fr 340px;
      gap: 16px;
    }

    @media (max-width: 900px) {
      .app-layout { grid-template-columns: 1fr; }
    }

    .viewport-card {
      background-color: var(--card-bg);
      border: 1px solid var(--border-color);
      border-radius: 10px;
      position: relative;
      height: 540px;
      width: 100%;
      overflow: hidden;
      display: flex;
      flex-direction: column;
    }

    canvas {
      width: 100%;
      height: 100%;
      display: block;
    }

    .controls-panel {
      background-color: var(--card-bg);
      border: 1px solid var(--border-color);
      border-radius: 10px;
      padding: 18px;
      display: flex;
      flex-direction: column;
      gap: 14px;
    }

    .control-group {
      display: flex;
      flex-direction: column;
      gap: 6px;
    }

    label {
      font-size: 0.82rem;
      font-weight: 700;
      color: var(--text-muted);
      text-transform: uppercase;
      letter-spacing: 0.05em;
    }

    select, input[type="number"] {
      background-color: #0f172a;
      color: var(--text-main);
      border: 1px solid var(--border-color);
      padding: 8px 10px;
      border-radius: 6px;
      font-size: 0.95rem;
      cursor: pointer;
    }

    .slider-container {
      display: flex;
      align-items: center;
      gap: 10px;
    }

    input[type="range"] {
      flex: 1;
      accent-color: var(--accent-blue);
    }

    .range-val {
      font-weight: 600;
      color: var(--accent-blue);
      min-width: 55px;
      text-align: right;
      font-size: 0.9rem;
    }

    .info-card {
      background-color: #0f172a;
      border-radius: 6px;
      padding: 12px;
      border: 1px solid var(--border-color);
    }

    .info-row {
      display: flex;
      justify-content: space-between;
      font-size: 0.85rem;
      padding: 4px 0;
      border-bottom: 1px solid #1e293b;
    }

    .info-row:last-child { border-bottom: none; }
    .info-label { color: var(--text-muted); }
    .info-value { font-weight: 600; color: var(--accent-green); text-align: right; }

    .reaction-box {
      background: #0f172a;
      border: 1px solid var(--border-color);
      border-radius: 6px;
      padding: 10px;
      text-align: center;
      font-family: monospace;
      font-size: 0.9rem;
      color: var(--accent-orange);
    }

    .theory-section {
      background-color: var(--card-bg);
      border: 1px solid var(--border-color);
      border-radius: 10px;
      padding: 24px;
    }

    .theory-section h2 { color: var(--accent-blue); margin-bottom: 12px; }
    .theory-section h3 { color: var(--accent-green); margin: 16px 0 8px 0; }
    .theory-section p { margin-bottom: 8px; }
    .theory-section ul { margin-left: 20px; margin-bottom: 12px; }

    table {
      width: 100%;
      border-collapse: collapse;
      margin-top: 12px;
      font-size: 0.88rem;
    }

    th, td {
      padding: 8px 12px;
      border: 1px solid var(--border-color);
      text-align: left;
    }

    th { background-color: #0f172a; color: var(--accent-blue); }
  </style>
</head>
<body>

  <div class="container">
    <header>
      <h1>Galvanic Cell & Nernst Equation Visualizer</h1>
      <p>Spontaneous Electrochemical Reaction Simulation & Potential Calculator</p>
    </header>

    <div class="app-layout">
      <div class="viewport-card">
        <canvas id="cellCanvas"></canvas>
      </div>

      <div class="controls-panel">
        <div class="control-group">
          <label for="couple-left">Left Couple (Couple 1)</label>
          <select id="couple-left">
            <option value="Mg">Mg²⁺ / Mg (E° = -2.37 V)</option>
            <option value="Al">Al³⁺ / Al (E° = -1.66 V)</option>
            <option value="Zn" selected>Zn²⁺ / Zn (E° = -0.76 V)</option>
            <option value="Fe">Fe²⁺ / Fe (E° = -0.44 V)</option>
            <option value="Ni">Ni²⁺ / Ni (E° = -0.25 V)</option>
            <option value="Pb">Pb²⁺ / Pb (E° = -0.13 V)</option>
            <option value="Cu">Cu²⁺ / Cu (E° = +0.34 V)</option>
            <option value="Ag">Ag⁺ / Ag (E° = +0.80 V)</option>
          </select>
        </div>

        <div class="control-group">
          <label for="couple-right">Right Couple (Couple 2)</label>
          <select id="couple-right">
            <option value="Mg">Mg²⁺ / Mg (E° = -2.37 V)</option>
            <option value="Al">Al³⁺ / Al (E° = -1.66 V)</option>
            <option value="Zn">Zn²⁺ / Zn (E° = -0.76 V)</option>
            <option value="Fe">Fe²⁺ / Fe (E° = -0.44 V)</option>
            <option value="Ni">Ni²⁺ / Ni (E° = -0.25 V)</option>
            <option value="Pb">Pb²⁺ / Pb (E° = -0.13 V)</option>
            <option value="Cu" selected>Cu²⁺ / Cu (E° = +0.34 V)</option>
            <option value="Ag">Ag⁺ / Ag (E° = +0.80 V)</option>
          </select>
        </div>

        <div class="control-group">
          <label for="conc-left">Left Concentration [M¹⁺/²⁺/³⁺]</label>
          <div class="slider-container">
            <input type="range" id="conc-left" min="0.001" max="2.0" step="0.001" value="1.00">
            <span class="range-val" id="conc-left-val">1.00 M</span>
          </div>
        </div>

        <div class="control-group">
          <label for="conc-right">Right Concentration [M¹⁺/²⁺/³⁺]</label>
          <div class="slider-container">
            <input type="range" id="conc-right" min="0.001" max="2.0" step="0.001" value="1.00">
            <span class="range-val" id="conc-right-val">1.00 M</span>
          </div>
        </div>

        <div class="control-group">
          <label for="temp-slider">Temperature (T)</label>
          <div class="slider-container">
            <input type="range" id="temp-slider" min="273" max="373" step="1" value="298">
            <span class="range-val" id="temp-val">298 K</span>
          </div>
        </div>

        <div class="reaction-box" id="rxn-display">
          Zn(s) + Cu²⁺(aq) → Zn²⁺(aq) + Cu(s)
        </div>

        <div class="info-card">
          <div class="info-row">
            <span class="info-label">Standard Cell Potential (E°cell)</span>
            <span class="info-value" id="info-e0">+1.10 V</span>
          </div>
          <div class="info-row">
            <span class="info-label">Electrons Transferred (n)</span>
            <span class="info-value" id="info-n">2</span>
          </div>
          <div class="info-row">
            <span class="info-label">Reaction Quotient (Q)</span>
            <span class="info-value" id="info-q">1.00</span>
          </div>
          <div class="info-row">
            <span class="info-label">Cell Potential (Ecell)</span>
            <span class="info-value" style="color: var(--accent-blue);" id="info-ecell">+1.10 V</span>
          </div>
        </div>
      </div>
    </div>

    <div class="theory-section">
      <h2>Electrochemical Principles & The Nernst Equation</h2>
      <p>
        A galvanic cell converts chemical energy into electrical potential using a spontaneous redox reaction. Electrons flow through the external circuit from the <strong>Anode</strong> (oxidation, lower E°) to the <strong>Cathode</strong> (reduction, higher E°).
      </p>

      <h3>Does Standard Cell Potential (E°cell) Depend on Concentration?</h3>
      <p>
        <strong>No, E°cell does NOT depend on electrolyte concentrations.</strong> By definition, standard potential is measured strictly under standard conditions where all solute concentrations are fixed at 1.0 M, gas pressures are 1 atm, and temperature is 25°C (298.15 K). Because standard conditions explicitly fix concentrations at 1.0 M, E°cell remains a constant baseline value.
      </p>

      <h3>Standard Potential vs. Non-Standard Cell Potential</h3>
      <ul>
        <li><strong>Standard Cell Potential (E°cell):</strong> A fixed constant for a specific pair of metals at a given temperature. It does not change when concentration changes.</li>
        <li><strong>Non-Standard Cell Potential (Ecell):</strong> The actual operating voltage of the battery. It dynamically changes as electrolyte concentrations change, governed by the Nernst Equation.</li>
      </ul>

      <h3>The Nernst Equation Formulation</h3>
      <div class="reaction-box" style="margin: 10px 0;">
        Ecell = E°cell - (R · T / n · F) · ln(Q)
      </div>

      <table>
        <thead>
          <tr>
            <th>Symbol</th>
            <th>Description</th>
            <th>Value / Unit</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>E°cell</td><td>Standard Cell Potential</td><td>E°(Cathode) - E°(Anode) [V]</td></tr>
          <tr><td>Ecell</td><td>Non-Standard Cell Potential</td><td>Real-time operating voltage [V]</td></tr>
          <tr><td>R</td><td>Universal Gas Constant</td><td>8.314 J / (mol·K)</td></tr>
          <tr><td>T</td><td>Absolute Temperature</td><td>Kelvin [K]</td></tr>
          <tr><td>n</td><td>Moles of Electrons Transferred</td><td>Integer</td></tr>
          <tr><td>F</td><td>Faraday Constant</td><td>96,485 C / mol e⁻</td></tr>
          <tr><td>Q</td><td>Reaction Quotient</td><td>[Anode Ions] / [Cathode Ions]</td></tr>
        </tbody>
      </table>
    </div>
  </div>

  <script>
    const COUPLES = {
      Mg: { symbol: "Mg", name: "Magnesium", ion: "Mg²⁺", n: 2, e0: -2.37, color: "#94a3b8", textColor: "#0f172a" },
      Al: { symbol: "Al", name: "Aluminum", ion: "Al³⁺", n: 3, e0: -1.66, color: "#cbd5e1", textColor: "#0f172a" },
      Zn: { symbol: "Zn", name: "Zinc", ion: "Zn²⁺", n: 2, e0: -0.76, color: "#a1a1aa", textColor: "#0f172a" },
      Fe: { symbol: "Fe", name: "Iron", ion: "Fe²⁺", n: 2, e0: -0.44, color: "#78716c", textColor: "#ffffff" },
      Ni: { symbol: "Ni", name: "Nickel", ion: "Ni²⁺", n: 2, e0: -0.25, color: "#64748b", textColor: "#ffffff" },
      Pb: { symbol: "Pb", name: "Lead", ion: "Pb²⁺", n: 1, e0: -0.13, color: "#475569", textColor: "#ffffff" },
      Cu: { symbol: "Cu", name: "Copper", ion: "Cu²⁺", n: 2, e0: 0.34, color: "#b45309", textColor: "#ffffff" },
      Ag: { symbol: "Ag", name: "Silver", ion: "Ag⁺", n: 1, e0: 0.80, color: "#e2e8f0", textColor: "#0f172a" }
    };

    const R = 8.314;
    const F = 96485;

    // DOM Elements
    const coupleLeftSelect = document.getElementById('couple-left');
    const coupleRightSelect = document.getElementById('couple-right');
    const concLeftInput = document.getElementById('conc-left');
    const concRightInput = document.getElementById('conc-right');
    const tempInput = document.getElementById('temp-slider');

    const concLeftVal = document.getElementById('conc-left-val');
    const concRightVal = document.getElementById('conc-right-val');
    const tempVal = document.getElementById('temp-val');

    const rxnDisplay = document.getElementById('rxn-display');
    const infoE0 = document.getElementById('info-e0');
    const infoN = document.getElementById('info-n');
    const infoQ = document.getElementById('info-q');
    const infoEcell = document.getElementById('info-ecell');

    const canvas = document.getElementById('cellCanvas');
    const ctx = canvas.getContext('2d');

    let electronOffset = 0;
    let anionProgress = 0;
    let cationProgress = 0;

    function gcd(a, b) { return b === 0 ? a : gcd(b, a % b); }

    function calculateCell() {
      const cLeft = COUPLES[coupleLeftSelect.value];
      const cRight = COUPLES[coupleRightSelect.value];
      const concL = parseFloat(concLeftInput.value);
      const concR = parseFloat(concRightInput.value);
      const T = parseFloat(tempInput.value);

      let anode, cathode, concA, concC, isLeftAnode;

      if (cLeft.e0 < cRight.e0) {
        anode = cLeft; cathode = cRight;
        concA = concL; concC = concR;
        isLeftAnode = true;
      } else if (cRight.e0 < cLeft.e0) {
        anode = cRight; cathode = cLeft;
        concA = concR; concC = concL;
        isLeftAnode = false;
      } else {
        if (concL <= concR) {
          anode = cLeft; cathode = cRight;
          concA = concL; concC = concR;
          isLeftAnode = true;
        } else {
          anode = cRight; cathode = cLeft;
          concA = concR; concC = concL;
          isLeftAnode = false;
        }
      }

      const e0Cell = cathode.e0 - anode.e0;

      const nA = anode.n;
      const nC = cathode.n;
      const lcm = (nA * nC) / gcd(nA, nC);
      const coeffA = lcm / nA;
      const coeffC = lcm / nC;
      const n = lcm;

      const Q = Math.pow(concA, coeffA) / Math.pow(concC, coeffC);
      const eCell = e0Cell - ((R * T) / (n * F)) * Math.log(Q);

      const strA_solid = coeffA === 1 ? anode.symbol : \`\${coeffA}\${anode.symbol}\`;
      const strC_ion = coeffC === 1 ? cathode.ion : \`\${coeffC}\${cathode.ion}\`;
      const strA_ion = coeffA === 1 ? anode.ion : \`\${coeffA}\${anode.ion}\`;
      const strC_solid = coeffC === 1 ? cathode.symbol : \`\${coeffC}\${cathode.symbol}\`;
      const rxnStr = \`\${strA_solid}(s) + \${strC_ion}(aq) → \${strA_ion}(aq) + \${strC_solid}(s)\`;

      return {
        anode, cathode, concA, concC, isLeftAnode,
        e0Cell, eCell, n, Q, T, rxnStr,
        cLeft, cRight, concL, concR
      };
    }

    function updateUI() {
      concLeftVal.textContent = parseFloat(concLeftInput.value).toFixed(2) + " M";
      concRightVal.textContent = parseFloat(concRightInput.value).toFixed(2) + " M";
      tempVal.textContent = tempInput.value + " K";

      const data = calculateCell();

      rxnDisplay.textContent = data.rxnStr;
      infoE0.textContent = (data.e0Cell >= 0 ? "+" : "") + data.e0Cell.toFixed(2) + " V";
      infoN.textContent = data.n;
      infoQ.textContent = data.Q < 0.001 || data.Q > 1000 ? data.Q.toExponential(2) : data.Q.toFixed(3);
      infoEcell.textContent = (data.eCell >= 0 ? "+" : "") + data.eCell.toFixed(3) + " V";
    }

    function resizeCanvas() {
      canvas.width = canvas.parentElement.clientWidth;
      canvas.height = canvas.parentElement.clientHeight;
    }

    function drawElectrode(x, y, w, h, couple, isAnode) {
      ctx.fillStyle = couple.color;
      ctx.fillRect(x, y, w, h);
      ctx.strokeStyle = isAnode ? "#fb923c" : "#4ade80";
      ctx.lineWidth = 3;
      ctx.strokeRect(x, y, w, h);

      ctx.fillStyle = couple.textColor;
      ctx.font = "bold 22px system-ui";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText(couple.symbol, x + w / 2, y + h * 0.4);

      ctx.font = "bold 11px system-ui";
      ctx.fillText(isAnode ? "(Anode)" : "(Cathode)", x + w / 2, y + h * 0.65);
    }

    function drawCurvedSaltBridge(leftCenterX, rightCenterX, startY, archHeight, thickness) {
      const midX = (leftCenterX + rightCenterX) / 2;
      const topY = startY - archHeight;

      ctx.save();
      
      // Opaque salt bridge body
      ctx.fillStyle = "#334155";
      ctx.strokeStyle = "#94a3b8";
      ctx.lineWidth = 3;

      ctx.beginPath();
      ctx.moveTo(leftCenterX - thickness / 2, startY);
      ctx.quadraticCurveTo(leftCenterX - thickness / 2, topY, midX, topY);
      ctx.quadraticCurveTo(rightCenterX + thickness / 2, topY, rightCenterX + thickness / 2, startY);
      ctx.lineTo(rightCenterX - thickness / 2, startY);
      ctx.quadraticCurveTo(rightCenterX - thickness / 2, topY + thickness, midX, topY + thickness);
      ctx.quadraticCurveTo(leftCenterX + thickness / 2, topY + thickness, leftCenterX + thickness / 2, startY);
      ctx.closePath();

      ctx.fill();
      ctx.stroke();

      // Label
      ctx.fillStyle = "#f8fafc";
      ctx.font = "bold 12px system-ui";
      ctx.textAlign = "center";
      ctx.fillText("Salt Bridge (KNO₃)", midX, topY - 8);

      ctx.restore();
    }

    function getQuadraticPoint(p0, p1, p2, t) {
      const oneMinusT = 1 - t;
      return {
        x: oneMinusT * oneMinusT * p0.x + 2 * oneMinusT * t * p1.x + t * t * p2.x,
        y: oneMinusT * oneMinusT * p0.y + 2 * oneMinusT * t * p1.y + t * t * p2.y
      };
    }

    function getQuadraticAngle(p0, p1, p2, t) {
      const dx = 2 * (1 - t) * (p1.x - p0.x) + 2 * t * (p2.x - p1.x);
      const dy = 2 * (1 - t) * (p1.y - p0.y) + 2 * t * (p2.y - p1.y);
      return Math.atan2(dy, dx);
    }

    function drawFlowingIon(p0, p1, p2, t, label, color) {
      const pos = getQuadraticPoint(p0, p1, p2, t);
      const angle = getQuadraticAngle(p0, p1, p2, t);

      ctx.save();
      ctx.translate(pos.x, pos.y);
      ctx.rotate(angle);

      // Arrow path
      ctx.fillStyle = color;
      ctx.beginPath();
      ctx.moveTo(-12, -4);
      ctx.lineTo(2, -4);
      ctx.lineTo(2, -8);
      ctx.lineTo(12, 0);
      ctx.lineTo(2, 8);
      ctx.lineTo(2, 4);
      ctx.lineTo(-12, 4);
      ctx.closePath();
      ctx.fill();

      // Ion Text
      ctx.rotate(-angle); // Keep text upright
      ctx.font = "bold 11px system-ui";
      ctx.fillStyle = "#ffffff";
      ctx.textAlign = "center";
      ctx.textBaseline = "bottom";
      ctx.fillText(label, 0, -10);

      ctx.restore();
    }

    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const data = calculateCell();

      const w = canvas.width;
      const h = canvas.height;

      const beakerW = w * 0.32;
      const beakerH = h * 0.45;
      const beakerY = h * 0.45;
      const beakerLeftX = w * 0.12;
      const beakerRightX = w * 0.56;

      ctx.fillStyle = "rgba(56, 189, 248, 0.1)";
      ctx.strokeStyle = "#475569";
      ctx.lineWidth = 3;

      ctx.fillRect(beakerLeftX, beakerY, beakerW, beakerH);
      ctx.strokeRect(beakerLeftX, beakerY, beakerW, beakerH);

      ctx.fillRect(beakerRightX, beakerY, beakerW, beakerH);
      ctx.strokeRect(beakerRightX, beakerY, beakerW, beakerH);

      ctx.fillStyle = "rgba(56, 189, 248, 0.22)";
      ctx.fillRect(beakerLeftX + 2, beakerY + 30, beakerW - 4, beakerH - 32);
      ctx.fillRect(beakerRightX + 2, beakerY + 30, beakerW - 4, beakerH - 32);

      const elecW = 44;
      const elecH = beakerH * 0.8;
      const elecLeftX = beakerLeftX + beakerW / 2 - elecW / 2;
      const elecRightX = beakerRightX + beakerW / 2 - elecW / 2;
      const elecY = beakerY - 15;

      drawElectrode(elecLeftX, elecY, elecW, elecH, data.cLeft, data.isLeftAnode);
      drawElectrode(elecRightX, elecY, elecW, elecH, data.cRight, !data.isLeftAnode);

      // Curved Salt Bridge Drawing
      const sbLeftX = beakerLeftX + beakerW * 0.78;
      const sbRightX = beakerRightX + beakerW * 0.22;
      const sbStartY = beakerY + 45;
      const archH = 75;
      const thickness = 28;

      drawCurvedSaltBridge(sbLeftX, sbRightX, sbStartY, archH, thickness);

      const wireY = h * 0.12;
      const vmX = w * 0.5;
      const vmR = 26;

      const anodeX = data.isLeftAnode ? elecLeftX + elecW / 2 : elecRightX + elecW / 2;
      const cathodeX = data.isLeftAnode ? elecRightX + elecW / 2 : elecLeftX + elecW / 2;
      const anodeBodyY = elecY + elecH * 0.4;
      const cathodeBodyY = elecY + elecH * 0.4;

      ctx.strokeStyle = "#f59e0b";
      ctx.lineWidth = 3;

      ctx.beginPath();
      ctx.moveTo(elecLeftX + elecW / 2, elecY + elecH * 0.4);
      ctx.lineTo(elecLeftX + elecW / 2, wireY);
      ctx.lineTo(vmX - vmR, wireY);
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(vmX + vmR, wireY);
      ctx.lineTo(elecRightX + elecW / 2, wireY);
      ctx.lineTo(elecRightX + elecW / 2, elecY + elecH * 0.4);
      ctx.stroke();

      ctx.fillStyle = "#1e293b";
      ctx.strokeStyle = "#38bdf8";
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.arc(vmX, wireY, vmR, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();

      ctx.fillStyle = "#4ade80";
      ctx.font = "bold 11px monospace";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText((data.eCell >= 0 ? "+" : "") + data.eCell.toFixed(2) + "V", vmX, wireY);

      ctx.font = "bold 13px system-ui";
      ctx.fillStyle = data.isLeftAnode ? "#fb923c" : "#4ade80";
      ctx.fillText(data.isLeftAnode ? "ANODE (Oxidation)" : "CATHODE (Reduction)", beakerLeftX + beakerW / 2, beakerY + beakerH + 20);

      ctx.fillStyle = !data.isLeftAnode ? "#fb923c" : "#4ade80";
      ctx.fillText(!data.isLeftAnode ? "ANODE (Oxidation)" : "CATHODE (Reduction)", beakerRightX + beakerW / 2, beakerY + beakerH + 20);

      ctx.font = "12px system-ui";
      ctx.fillStyle = "#f8fafc";
      ctx.fillText(\`\${data.cLeft.ion}: \${data.concL.toFixed(2)} M\`, beakerLeftX + beakerW / 2, beakerY + beakerH - 12);
      ctx.fillText(\`\${data.cRight.ion}: \${data.concR.toFixed(2)} M\`, beakerRightX + beakerW / 2, beakerY + beakerH - 12);

      if (Math.abs(data.eCell) > 0.001) {
        // External Circuit Electrons
        const speed = Math.max(0.6, Math.min(Math.abs(data.eCell) * 2.5, 4.5));
        electronOffset = (electronOffset + speed);

        const path = [
          { x: anodeX, y: anodeBodyY },
          { x: anodeX, y: wireY },
          { x: vmX - vmR, y: wireY },
          { x: vmX + vmR, y: wireY },
          { x: cathodeX, y: wireY },
          { x: cathodeX, y: cathodeBodyY }
        ];

        let totalLen = 0;
        const segments = [];
        for (let i = 0; i < path.length - 1; i++) {
          const dx = path[i+1].x - path[i].x;
          const dy = path[i+1].y - path[i].y;
          const len = Math.sqrt(dx * dx + dy * dy);
          segments.push({ start: path[i], end: path[i+1], len });
          totalLen += len;
        }

        const dotSpacing = 22;
        ctx.fillStyle = "#38bdf8";

        for (let d = (electronOffset % dotSpacing); d < totalLen; d += dotSpacing) {
          let accumulated = 0;
          for (let seg of segments) {
            if (d >= accumulated && d <= accumulated + seg.len) {
              const segT = (d - accumulated) / seg.len;
              const px = seg.start.x + segT * (seg.end.x - seg.start.x);
              const py = seg.start.y + segT * (seg.end.y - seg.start.y);

              ctx.beginPath();
              ctx.arc(px, py, 4, 0, Math.PI * 2);
              ctx.fill();

              ctx.fillStyle = "#0f172a";
              ctx.font = "bold 7px system-ui";
              ctx.fillText("e⁻", px, py);
              ctx.fillStyle = "#38bdf8";
              break;
            }
            accumulated += seg.len;
          }
        }

        // Salt Bridge Continuous Ion Migration (Anion -> Anode, Cation -> Cathode)
        anionProgress = (anionProgress + 0.006) % 1;
        cationProgress = (cationProgress + 0.006) % 1;

        const midX = (sbLeftX + sbRightX) / 2;
        const topY = sbStartY - archH + thickness / 2;

        const anodeSbX = data.isLeftAnode ? sbLeftX : sbRightX;
        const cathodeSbX = data.isLeftAnode ? sbRightX : sbLeftX;

        // Anion Path (Start at Bridge Apex -> Move Down to Anode Beaker)
        const anionP0 = { x: midX, y: topY };
        const anionP1 = { x: anodeSbX, y: topY };
        const anionP2 = { x: anodeSbX, y: sbStartY };

        // Cation Path (Start at Bridge Apex -> Move Down to Cathode Beaker)
        const cationP0 = { x: midX, y: topY };
        const cationP1 = { x: cathodeSbX, y: topY };
        const cationP2 = { x: cathodeSbX, y: sbStartY };

        // Draw flowing arrows
        drawFlowingIon(anionP0, anionP1, anionP2, anionProgress, "NO3⁻", "#fb923c");
        drawFlowingIon(cationP0, cationP1, cationP2, cationProgress, "K⁺", "#4ade80");
      }

      requestAnimationFrame(draw);
    }

    coupleLeftSelect.addEventListener('change', updateUI);
    coupleRightSelect.addEventListener('change', updateUI);
    concLeftInput.addEventListener('input', updateUI);
    concRightInput.addEventListener('input', updateUI);
    tempInput.addEventListener('input', updateUI);

    window.addEventListener('resize', resizeCanvas);

    resizeCanvas();
    updateUI();
    draw();
  </script>
</body>
</html>`,
    isCustomImport: true,
    authorEmail: "ndunj123@gmail.com",
    authorName: "Axiom Creator",
    createdAt: "2026-08-23"
  },
  {
    id: "sim-le-chatelier-haber",
    title: "Le Châtelier's Principle: Haber Process",
    tagline: "Dynamic chemical equilibrium, reaction quotients (Qc vs Kc), temperature & volume perturbations in the Haber synthesis of ammonia",
    discipline: "chemistry",
    gradeLevel: ["High School (9-12)", "AP / IB STEM", "Undergraduate"],
    standards: ["AP Chemistry (Unit 7)", "HS-PS1-6", "HS-PS1-4", "NGSS SEP-5"],
    description: "An interactive gas-phase chemical equilibrium simulation modeling the industrial Haber-Bosch synthesis of ammonia: N₂(g) + 3H₂(g) ⇌ 2NH₃(g) + Heat (ΔH < 0). Investigate dynamic equilibrium shifts in response to temperature changes (300 to 700 K), container volume adjustments (1.0 to 5.0 L), species injections, and product condensations with real-time particle visualization, mole composition bar charts, molar concentrations, and instantaneous Qc vs Kc calculations.",
    learningObjectives: [
      "Explain how changes in temperature, container volume (pressure), and species concentrations displace a chemical system from equilibrium",
      "Compare the instantaneous reaction quotient (Qc) to the temperature-dependent equilibrium constant (Kc(T)) to predict shift directions",
      "Analyze the thermodynamic basis of Le Châtelier's principle and the van 't Hoff temperature dependence for exothermic reactions (ΔH < 0)",
      "Evaluate industrial chemical engineering strategies used in the Haber-Bosch process to maximize ammonia yield while maintaining practical kinetic rates"
    ],
    thumbnailGradient: "from-sky-600 via-indigo-700 to-slate-950",
    badgeColor: "bg-sky-500/10 text-sky-300 border-sky-500/20",
    iconName: "Flame",
    rating: 4.97,
    reviewCount: 46,
    teacherCount: 174,
    licenseType: "Academic STEM Classroom & Institutional License",
    pricing: {
      singleTeacher: 19,
      schoolDepartment: 200,
      districtUnlimited: 400
    },
    features: [
      "Dynamic piston chamber with volume controls (1.0 to 5.0 L) and kinetic gas particle collisions for N₂, H₂, and NH₃",
      "Maxwell-Boltzmann kinetic scaling where particle velocity and wall collision rate scale with √T and 1/V",
      "Live wall bombardment tracking with dynamic boundary impact sparks, shockwaves, and container pressure vibration",
      "Thermodynamic temperature regulation (300 to 700 K) updating van 't Hoff equilibrium constant Kc(T)",
      "Interactive disturbance buttons for instantaneous N₂/H₂ injection, NH₃ removal/injection, quick compression, and expansion",
      "Real-time HUD displaying Total Pressure (atm), Wall Impact Frequency, Kc(T), instantaneous Qc, and equilibrium shift indicators",
      "Real-time animated mole composition bar meters and molar concentration readouts ([M])"
    ],
    parameterDefaults: {
      temp: 450,
      vol: 2.5,
      nN2: 2.0,
      nH2: 4.0,
      nNH3: 2.0
    },
    parameterControls: [
      {
        key: "temp",
        label: "Temperature (T)",
        min: 300,
        max: 700,
        step: 5,
        unit: "K",
        description: "Gas vessel temperature in Kelvin driving particle kinetic velocities and altering thermodynamic Kc"
      },
      {
        key: "vol",
        label: "Container Volume (V)",
        min: 1.0,
        max: 5.0,
        step: 0.1,
        unit: "L",
        description: "Vessel volume in Liters controlling gas concentration, wall bombardment frequency, and total pressure"
      }
    ],
    sampleChallenges: [
      {
        id: "ch-haber-1",
        title: "Maximize Ammonia Yield via Compression",
        instruction: "Compress the vessel to 1.0 L to increase total pressure and wall bombardment, decreasing Qc and shifting equilibrium forward.",
        targetMetric: "Volume",
        targetValue: 1.0,
        tolerance: 0.1,
        currentValueKey: "vol",
        rewardBadge: "Pressure Engineer"
      },
      {
        id: "ch-haber-2",
        title: "Thermal Shift to Reactants",
        instruction: "Increase temperature to 650 K to observe intense kinetic particle bombardment and the endothermic reverse shift as excess heat is absorbed.",
        targetMetric: "Temperature",
        targetValue: 650,
        tolerance: 10,
        currentValueKey: "temp",
        rewardBadge: "Thermodynamicist"
      }
    ],
    previewFacts: [
      "Because the forward synthesis of ammonia produces fewer gas moles (4 moles of reactant → 2 moles of product), compressing the gas vessel always favors ammonia production.",
      "The Haber-Bosch process synthesizes over 150 million tons of ammonia every year and is credited with enabling food production for roughly half of humanity."
    ],
    isHtmlApp: true,
    htmlContent: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Le Châtelier's Principle Simulation: Haber Process</title>
  <style>
    :root {
      --bg-dark: #0f172a;
      --card-bg: #1e293b;
      --text-main: #f8fafc;
      --text-muted: #94a3b8;
      --accent-blue: #38bdf8;   /* N2 */
      --accent-green: #4ade80;  /* H2 */
      --accent-purple: #c084fc; /* NH3 */
      --accent-orange: #fb923c;
      --accent-red: #f43f5e;
      --border-color: #334155;
    }

    * { box-sizing: border-box; margin: 0; padding: 0; }

    body {
      font-family: system-ui, -apple-system, sans-serif;
      background-color: var(--bg-dark);
      color: var(--text-main);
      line-height: 1.5;
      padding: 16px;
    }

    .container {
      max-width: 1200px;
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      gap: 20px;
    }

    header { text-align: center; }
    header h1 { color: var(--accent-blue); font-size: 2rem; }
    header p { color: var(--text-muted); }

    .app-layout {
      display: grid;
      grid-template-columns: 1fr 360px;
      gap: 16px;
    }

    @media (max-width: 900px) {
      .app-layout { grid-template-columns: 1fr; }
    }

    .viewport-card {
      background-color: var(--card-bg);
      border: 1px solid var(--border-color);
      border-radius: 10px;
      position: relative;
      height: 560px;
      width: 100%;
      overflow: hidden;
      display: flex;
      flex-direction: column;
    }

    canvas {
      width: 100%;
      height: 100%;
      display: block;
    }

    .controls-panel {
      background-color: var(--card-bg);
      border: 1px solid var(--border-color);
      border-radius: 10px;
      padding: 18px;
      display: flex;
      flex-direction: column;
      gap: 14px;
    }

    .control-group {
      display: flex;
      flex-direction: column;
      gap: 6px;
    }

    label {
      font-size: 0.82rem;
      font-weight: 700;
      color: var(--text-muted);
      text-transform: uppercase;
      letter-spacing: 0.05em;
    }

    .slider-container {
      display: flex;
      align-items: center;
      gap: 10px;
    }

    input[type="range"] {
      flex: 1;
      accent-color: var(--accent-blue);
    }

    .range-val {
      font-weight: 600;
      color: var(--accent-blue);
      min-width: 65px;
      text-align: right;
      font-size: 0.9rem;
    }

    .btn-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 8px;
    }

    button {
      background-color: #0f172a;
      color: var(--text-main);
      border: 1px solid var(--border-color);
      padding: 8px 10px;
      border-radius: 6px;
      font-size: 0.85rem;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.2s ease;
    }

    button:hover {
      border-color: var(--accent-blue);
      color: var(--accent-blue);
      background-color: #1e293b;
    }

    .info-card {
      background-color: #0f172a;
      border-radius: 6px;
      padding: 12px;
      border: 1px solid var(--border-color);
    }

    .info-row {
      display: flex;
      justify-content: space-between;
      font-size: 0.85rem;
      padding: 4px 0;
      border-bottom: 1px solid #1e293b;
    }

    .info-row:last-child { border-bottom: none; }
    .info-label { color: var(--text-muted); }
    .info-value { font-weight: 600; color: var(--accent-green); text-align: right; }

    .reaction-box {
      background: #0f172a;
      border: 1px solid var(--border-color);
      border-radius: 6px;
      padding: 10px;
      text-align: center;
      font-family: monospace;
      font-size: 0.95rem;
      color: var(--accent-orange);
    }

    .theory-section {
      background-color: var(--card-bg);
      border: 1px solid var(--border-color);
      border-radius: 10px;
      padding: 24px;
    }

    .theory-section h2 { color: var(--accent-blue); margin-bottom: 12px; }
    .theory-section h3 { color: var(--accent-green); margin: 16px 0 8px 0; }
    .theory-section p { margin-bottom: 8px; }
    .theory-section ul { margin-left: 20px; margin-bottom: 12px; }

    table {
      width: 100%;
      border-collapse: collapse;
      margin-top: 12px;
      font-size: 0.88rem;
    }

    th, td {
      padding: 8px 12px;
      border: 1px solid var(--border-color);
      text-align: left;
    }

    th { background-color: #0f172a; color: var(--accent-blue); }
  </style>
</head>
<body>

  <div class="container">
    <header>
      <h1>Le Châtelier's Principle Visualizer</h1>
      <p>Dynamic Equilibrium in the Haber Process: N₂(g) + 3H₂(g) ⇌ 2NH₃(g) + Heat</p>
    </header>

    <div class="app-layout">
      <div class="viewport-card">
        <canvas id="simCanvas"></canvas>
      </div>

      <div class="controls-panel">
        <div class="reaction-box">
          N₂(g) + 3H₂(g) ⇌ 2NH₃(g) &nbsp;&nbsp; (ΔH < 0)
        </div>

        <div class="control-group">
          <label for="temp-slider">Temperature (T) & Kinetic Velocity</label>
          <div class="slider-container">
            <input type="range" id="temp-slider" min="300" max="700" step="5" value="450">
            <span class="range-val" id="temp-val">450 K</span>
          </div>
        </div>

        <div class="control-group">
          <label for="vol-slider">Container Volume (V) & Pressure</label>
          <div class="slider-container">
            <input type="range" id="vol-slider" min="1.0" max="5.0" step="0.1" value="2.5">
            <span class="range-val" id="vol-val">2.5 L</span>
          </div>
        </div>

        <div class="control-group">
          <label>Disturbances & Injections</label>
          <div class="btn-grid">
            <button id="btn-add-n2">+ Inject N₂</button>
            <button id="btn-add-h2">+ Inject H₂</button>
            <button id="btn-rem-nh3">- Remove NH₃</button>
            <button id="btn-add-nh3">+ Inject NH₃</button>
            <button id="btn-compress">Quick Compress</button>
            <button id="btn-expand">Quick Expand</button>
          </div>
        </div>

        <div class="info-card">
          <div class="info-row">
            <span class="info-label">Total Gas Pressure (P)</span>
            <span class="info-value" id="info-p" style="color: var(--accent-orange);">118.2 atm</span>
          </div>
          <div class="info-row">
            <span class="info-label">Wall Bombardment Rate</span>
            <span class="info-value" id="info-impacts" style="color: var(--accent-red);">320 impacts/s</span>
          </div>
          <div class="info-row">
            <span class="info-label">Equilibrium Constant K_c(T)</span>
            <span class="info-value" id="info-kc">0.500</span>
          </div>
          <div class="info-row">
            <span class="info-label">Reaction Quotient Q_c</span>
            <span class="info-value" id="info-qc" style="color: var(--accent-blue);">0.500</span>
          </div>
          <div class="info-row">
            <span class="info-label">Shift Status</span>
            <span class="info-value" id="info-status" style="color: var(--accent-orange);">At Equilibrium</span>
          </div>
        </div>
      </div>
    </div>

    <div class="theory-section">
      <h2>Equilibrium Principles & Le Châtelier's Law</h2>
      <p>
        Le Châtelier's principle states that if a dynamic equilibrium system is subjected to a change in temperature, pressure, or species concentrations, the system shifts its position to partially counteract the disturbance.
      </p>

      <h3>Kinetic Molecular Theory & Container Pressure</h3>
      <p>
        Gas pressure is the macroscopic result of microscopic gas molecules bombarding the container walls:
      </p>
      <ul>
        <li><strong>Temperature Effect:</strong> Increasing temperature ($T$) elevates the mean kinetic energy ($\langle KE \rangle = \frac{3}{2} k_B T$) and root-mean-square speed ($v_{rms} \propto \sqrt{T}$) of all gas molecules. Faster molecules bombard walls with higher momentum and higher frequency, causing pressure to rise.</li>
        <li><strong>Volume Reduction (Compression):</strong> Compressing the cylinder ($V \downarrow$) drastically shortens the mean free path between walls. Molecules collide with the walls much more frequently per unit surface area, dramatically increasing wall bombardment rate and total pressure ($P = \frac{n R T}{V}$).</li>
      </ul>

      <h3>Reaction Quotient ($Q_c$) vs Equilibrium Constant ($K_c$)</h3>
      <p>For the gas-phase Haber process, the concentration reaction quotient is calculated as:</p>
      <div class="reaction-box" style="margin: 10px 0;">
        Q_c = [NH₃]² / ([N₂] · [H₂]³) = (n_NH₃² · V²) / (n_N₂ · n_H₂³)
      </div>
      <ul>
        <li><strong>Q_c < K_c:</strong> The forward reaction is favored to convert reactants into products (shift right).</li>
        <li><strong>Q_c > K_c:</strong> The reverse reaction is favored to consume excess product (shift left).</li>
        <li><strong>Q_c = K_c:</strong> The system is at dynamic equilibrium (no net change in concentrations).</li>
      </ul>

      <h3>Thermodynamics & Pressure Responses</h3>
      <table>
        <thead>
          <tr>
            <th>Disturbance</th>
            <th>Immediate Direct Effect</th>
            <th>Le Châtelier Counter-Shift</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>Increase Temperature</td><td>Increases thermal velocity & wall bombardment</td><td>Shifts <strong>Left</strong> (endothermic direction to absorb heat; K_c decreases)</td></tr>
          <tr><td>Decrease Volume (Compress)</td><td>Increases wall impact frequency & pressure</td><td>Shifts <strong>Right</strong> (toward fewer gas moles: 4 moles → 2 moles)</td></tr>
          <tr><td>Inject Reactant (N₂ or H₂)</td><td>Raises reactant concentrations ($Q_c < K_c$)</td><td>Shifts <strong>Right</strong> (consumes added reactants)</td></tr>
          <tr><td>Remove Product (NH₃)</td><td>Lowers product concentration ($Q_c < K_c$)</td><td>Shifts <strong>Right</strong> (replenishes missing ammonia)</td></tr>
        </tbody>
      </table>
    </div>
  </div>

  <script>
    // State variables
    let T = 450;  // Temperature (K)
    let V = 2.5;  // Volume (L)

    // Mole amounts (n_N2, n_H2, n_NH3)
    let n_N2 = 2.0;
    let n_H2 = 4.0;
    let n_NH3 = 2.0;

    // Ideal gas constant in L·atm / (mol·K)
    const R_GAS = 0.08206;

    // Van't Hoff parameters for schematic K_c(T)
    const T_ref = 450;
    const K_ref = 0.5;
    const deltaH_R = -4500; // Schematic exothermic constant (dH / R)

    function getKc(temp) {
      return K_ref * Math.exp(-deltaH_R * (1 / temp - 1 / T_ref));
    }

    function getQc(n1, n2, n3, vol) {
      const concN2 = Math.max(0.01, n1 / vol);
      const concH2 = Math.max(0.01, n2 / vol);
      const concNH3 = Math.max(0.0, n3 / vol);
      return (concNH3 * concNH3) / (concN2 * Math.pow(concH2, 3));
    }

    // Solve equilibrium extent (xi) for current moles, V, and target K_c
    function solveEquilibriumExtent(n1, n2, n3, vol, Kc) {
      let minXi = -n3 / 2; // Maximum possible reverse shift
      let maxXi = Math.min(n1, n2 / 3); // Maximum possible forward shift

      for (let iter = 0; iter < 40; iter++) {
        let mid = (minXi + maxXi) / 2;
        let testN1 = n1 - mid;
        let testN2 = n2 - 3 * mid;
        let testN3 = n3 + 2 * mid;

        let q = getQc(testN1, testN2, testN3, vol);

        if (q < Kc) {
          minXi = mid;
        } else {
          maxXi = mid;
        }
      }
      return (minXi + maxXi) / 2;
    }

    // DOM Elements
    const tempSlider = document.getElementById('temp-slider');
    const volSlider = document.getElementById('vol-slider');
    const tempVal = document.getElementById('temp-val');
    const volVal = document.getElementById('vol-val');

    const infoP = document.getElementById('info-p');
    const infoImpacts = document.getElementById('info-impacts');
    const infoKc = document.getElementById('info-kc');
    const infoQc = document.getElementById('info-qc');
    const infoStatus = document.getElementById('info-status');

    const canvas = document.getElementById('simCanvas');
    const ctx = canvas.getContext('2d');

    // Wall collision sparks & rate tracking
    let wallImpacts = [];
    let recentCollisionCount = 0;
    let lastTime = performance.now();
    let displayCollisionRate = 320;

    // Molecular weights for realistic relative velocities (v ~ sqrt(T/M))
    const MOL_MASS = {
      H2: 2.0,
      N2: 28.0,
      NH3: 17.0
    };

    // Particle rendering system
    let particles = [];

    function initParticles() {
      particles = [];
      const total = 85;
      for (let i = 0; i < total; i++) {
        let type = i < 24 ? 'N2' : (i < 62 ? 'H2' : 'NH3');
        // Initial random direction unit vector
        const angle = Math.random() * Math.PI * 2;
        particles.push({
          type: type,
          x: 0.05 + Math.random() * 0.90,
          y: 0.05 + Math.random() * 0.90,
          dirX: Math.cos(angle),
          dirY: Math.sin(angle),
          trail: []
        });
      }
    }

    function resizeCanvas() {
      canvas.width = canvas.parentElement.clientWidth;
      canvas.height = canvas.parentElement.clientHeight;
    }

    // Event Listeners
    tempSlider.addEventListener('input', (e) => {
      T = parseFloat(e.target.value);
      tempVal.textContent = T + " K";
    });

    volSlider.addEventListener('input', (e) => {
      V = parseFloat(e.target.value);
      volVal.textContent = V.toFixed(1) + " L";
    });

    document.getElementById('btn-add-n2').addEventListener('click', () => { n_N2 += 1.5; });
    document.getElementById('btn-add-h2').addEventListener('click', () => { n_H2 += 3.0; });
    document.getElementById('btn-rem-nh3').addEventListener('click', () => { n_NH3 = Math.max(0.1, n_NH3 - 1.5); });
    document.getElementById('btn-add-nh3').addEventListener('click', () => { n_NH3 += 1.5; });
    
    document.getElementById('btn-compress').addEventListener('click', () => {
      V = Math.max(1.0, V - 1.0);
      volSlider.value = V;
      volVal.textContent = V.toFixed(1) + " L";
    });

    document.getElementById('btn-expand').addEventListener('click', () => {
      V = Math.min(5.0, V + 1.0);
      volSlider.value = V;
      volVal.textContent = V.toFixed(1) + " L";
    });

    // Helper for adding boundary collision visual sparks
    function addWallImpact(px, py, color, intensity) {
      wallImpacts.push({
        x: px,
        y: py,
        color: color,
        radius: 3 + intensity * 6,
        alpha: 1.0,
        maxRadius: 10 + intensity * 14
      });
      recentCollisionCount++;
    }

    // Main Simulation Loop
    function updateAndDraw(now) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const dt = (now - lastTime) / 1000;
      if (dt > 0.4) {
        displayCollisionRate = Math.round((recentCollisionCount / dt) * 4.5);
        recentCollisionCount = 0;
        lastTime = now;
      }

      const Kc = getKc(T);
      const xiTarget = solveEquilibriumExtent(n_N2, n_H2, n_NH3, V, Kc);

      // Smooth first-order relaxation toward equilibrium composition
      const blendRate = 0.025;
      const dXi = xiTarget * blendRate;

      n_N2 -= dXi;
      n_H2 -= 3 * dXi;
      n_NH3 += 2 * dXi;

      // Prevent non-physical negative values
      n_N2 = Math.max(0.01, n_N2);
      n_H2 = Math.max(0.01, n_H2);
      n_NH3 = Math.max(0.00, n_NH3);

      const totalMoles = n_N2 + n_H2 + n_NH3;
      const Qc = getQc(n_N2, n_H2, n_NH3, V);

      // Calculate Total Pressure P = (n_total * R * T) / V
      const totalP = (totalMoles * R_GAS * T) / V;

      // UI Text updates
      infoP.textContent = totalP.toFixed(1) + " atm";
      infoImpacts.textContent = displayCollisionRate + " impacts/s";
      infoKc.textContent = Kc < 0.01 || Kc > 100 ? Kc.toExponential(2) : Kc.toFixed(3);
      infoQc.textContent = Qc < 0.01 || Qc > 100 ? Qc.toExponential(2) : Qc.toFixed(3);

      const diff = Qc - Kc;
      if (Math.abs(diff) / Kc < 0.03) {
        infoStatus.textContent = "At Equilibrium";
        infoStatus.style.color = "var(--accent-green)";
      } else if (diff < 0) {
        infoStatus.textContent = "Shifting Right (Forward →)";
        infoStatus.style.color = "var(--accent-blue)";
      } else {
        infoStatus.textContent = "Shifting Left (← Reverse)";
        infoStatus.style.color = "var(--accent-orange)";
      }

      // Render Visual Container
      const w = canvas.width;
      const h = canvas.height;

      // Piston Box dimensions based on Volume V (V ranges from 1.0 to 5.0)
      const containerW = w * 0.45;
      const minH = h * 0.22;
      const maxH = h * 0.72;
      const containerH = minH + ((V - 1.0) / 4.0) * (maxH - minH);
      const containerX = w * 0.05;
      const containerY = h * 0.82 - containerH;

      // Draw Container Background & Gas
      ctx.fillStyle = "rgba(15, 23, 42, 0.85)";
      ctx.fillRect(containerX, containerY, containerW, containerH);

      // Heat glow dependent on T (Orange/Red radiance)
      const tempRatio = (T - 300) / 400; // 0 to 1
      const heatGrad = ctx.createLinearGradient(containerX, containerY + containerH, containerX, containerY);
      heatGrad.addColorStop(0, \`rgba(251, 146, 60, \${0.08 + tempRatio * 0.22})\`);
      heatGrad.addColorStop(1, \`rgba(244, 63, 94, \${0.04 + tempRatio * 0.16})\`);
      ctx.fillStyle = heatGrad;
      ctx.fillRect(containerX, containerY, containerW, containerH);

      // Pressure Boundary Glow
      const pressureRatio = Math.min(1.0, totalP / 250);
      ctx.strokeStyle = pressureRatio > 0.6 ? \`rgba(244, 63, 94, \${0.5 + pressureRatio * 0.5})\` : "#475569";
      ctx.lineWidth = 4 + pressureRatio * 2;
      ctx.strokeRect(containerX, containerY, containerW, containerH);

      // Draw Top Piston Handle & Pressure Gauge
      ctx.fillStyle = "#334155";
      ctx.fillRect(containerX - 10, containerY - 12, containerW + 20, 12);
      ctx.fillStyle = "#94a3b8";
      ctx.fillRect(containerX + containerW / 2 - 8, containerY - 35, 16, 23);

      // Mini Pressure Dial Gauge on Piston
      const gaugeX = containerX + containerW * 0.82;
      const gaugeY = containerY - 22;
      const gaugeR = 16;
      ctx.fillStyle = "#0f172a";
      ctx.strokeStyle = "#38bdf8";
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.arc(gaugeX, gaugeY, gaugeR, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();

      // Gauge needle indicating pressure
      const needleAngle = -Math.PI * 0.75 + pressureRatio * (Math.PI * 1.5);
      ctx.strokeStyle = pressureRatio > 0.7 ? "#f43f5e" : "#fb923c";
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(gaugeX, gaugeY);
      ctx.lineTo(gaugeX + Math.cos(needleAngle) * (gaugeR - 3), gaugeY + Math.sin(needleAngle) * (gaugeR - 3));
      ctx.stroke();

      ctx.fillStyle = "#f8fafc";
      ctx.font = "bold 8px system-ui";
      ctx.textAlign = "center";
      ctx.fillText("P", gaugeX, gaugeY + 10);

      // Base RMS Velocity Scaling according to Maxwell-Boltzmann: v ~ sqrt(T / M)
      // Highly visible speed scaling: slow & gentle at 300K, fast & frantic at 700K
      const speedScale = (0.007 + (T / 700) * 0.024);

      // Particle type proportioning
      const fracN2 = n_N2 / totalMoles;
      const fracH2 = (n_N2 + n_H2) / totalMoles;

      particles.forEach((p, idx) => {
        const r = idx / particles.length;
        let type = 'N2';
        let color = "#38bdf8"; // N2
        let size = 5;
        let mass = MOL_MASS.N2;

        if (r > fracN2 && r <= fracH2) {
          type = 'H2';
          color = "#4ade80"; // H2
          size = 3;
          mass = MOL_MASS.H2;
        } else if (r > fracH2) {
          type = 'NH3';
          color = "#c084fc"; // NH3
          size = 6;
          mass = MOL_MASS.NH3;
        }

        // Relative velocity inversely proportional to square root of mass
        const relativeMassSpeed = Math.sqrt(28.0 / mass);
        const actualSpeed = speedScale * relativeMassSpeed;

        // Update position
        p.x += p.dirX * actualSpeed;
        p.y += p.dirY * actualSpeed;

        let hitWall = false;
        let hitX = 0;
        let hitY = 0;

        // Container boundary reflection with collision spark generation
        if (p.x <= 0.03) {
          p.x = 0.03;
          p.dirX = Math.abs(p.dirX);
          hitWall = true;
          hitX = containerX;
          hitY = containerY + p.y * containerH;
        } else if (p.x >= 0.97) {
          p.x = 0.97;
          p.dirX = -Math.abs(p.dirX);
          hitWall = true;
          hitX = containerX + containerW;
          hitY = containerY + p.y * containerH;
        }

        if (p.y <= 0.03) {
          p.y = 0.03;
          p.dirY = Math.abs(p.dirY);
          hitWall = true;
          hitX = containerX + p.x * containerW;
          hitY = containerY;
        } else if (p.y >= 0.97) {
          p.y = 0.97;
          p.dirY = -Math.abs(p.dirY);
          hitWall = true;
          hitX = containerX + p.x * containerW;
          hitY = containerY + containerH;
        }

        if (hitWall) {
          addWallImpact(hitX, hitY, color, tempRatio);
        }

        const px = containerX + p.x * containerW;
        const py = containerY + p.y * containerH;

        // Draw Motion Trails when Temperature is High (Fast particle agitation)
        if (T > 380) {
          p.trail.push({ x: px, y: py, alpha: 0.6 });
          if (p.trail.length > (T > 550 ? 5 : 3)) p.trail.shift();

          ctx.strokeStyle = color;
          ctx.lineWidth = size * 0.6;
          for (let tIdx = 0; tIdx < p.trail.length - 1; tIdx++) {
            const t1 = p.trail[tIdx];
            const t2 = p.trail[tIdx + 1];
            ctx.globalAlpha = (tIdx + 1) / p.trail.length * 0.45;
            ctx.beginPath();
            ctx.moveTo(t1.x, t1.y);
            ctx.lineTo(t2.x, t2.y);
            ctx.stroke();
          }
          ctx.globalAlpha = 1.0;
        } else {
          p.trail = [];
        }

        // Particle Core
        ctx.fillStyle = color;
        ctx.beginPath();
        ctx.arc(px, py, size, 0, Math.PI * 2);
        ctx.fill();

        // High Temp Thermal Glow
        if (T > 500) {
          ctx.fillStyle = color;
          ctx.globalAlpha = 0.3;
          ctx.beginPath();
          ctx.arc(px, py, size + 2 + tempRatio * 3, 0, Math.PI * 2);
          ctx.fill();
          ctx.globalAlpha = 1.0;
        }
      });

      // Render Dynamic Wall Collision Shockwaves & Sparks
      for (let i = wallImpacts.length - 1; i >= 0; i--) {
        const imp = wallImpacts[i];
        imp.radius += 0.7 + tempRatio * 0.9;
        imp.alpha -= 0.06;

        if (imp.alpha <= 0 || imp.radius >= imp.maxRadius) {
          wallImpacts.splice(i, 1);
          continue;
        }

        ctx.strokeStyle = imp.color;
        ctx.lineWidth = 2;
        ctx.globalAlpha = imp.alpha;
        ctx.beginPath();
        ctx.arc(imp.x, imp.y, imp.radius, 0, Math.PI * 2);
        ctx.stroke();
      }
      ctx.globalAlpha = 1.0;

      // Label Container & Thermodynamic State
      ctx.fillStyle = "#94a3b8";
      ctx.font = "bold 12px system-ui";
      ctx.textAlign = "center";
      ctx.fillText(\`Gas Chamber (V = \${V.toFixed(1)} L, T = \${T} K, P = \${totalP.toFixed(1)} atm)\`, containerX + containerW / 2, containerY + containerH + 20);

      // Render Horizontal Bars for Mole Composition
      const barBoxX = w * 0.55;
      const barBoxY = h * 0.10;
      const barBoxW = w * 0.40;
      const maxBarW = barBoxW - 90;

      ctx.fillStyle = "#f8fafc";
      ctx.font = "bold 14px system-ui";
      ctx.textAlign = "left";
      ctx.fillText("Mole Composition (n)", barBoxX, barBoxY);

      const species = [
        { label: "N₂", moles: n_N2, color: "#38bdf8" },
        { label: "H₂", moles: n_H2, color: "#4ade80" },
        { label: "NH₃", moles: n_NH3, color: "#c084fc" }
      ];

      const maxScaleMoles = 10.0;

      species.forEach((s, idx) => {
        const rowY = barBoxY + 30 + idx * 42;

        // Species Label
        ctx.fillStyle = s.color;
        ctx.font = "bold 13px system-ui";
        ctx.fillText(s.label, barBoxX, rowY + 14);

        // Bar Track Background
        ctx.fillStyle = "#0f172a";
        ctx.fillRect(barBoxX + 45, rowY, maxBarW, 20);

        // Active Bar Fill
        const currentBarW = Math.min(maxBarW, (s.moles / maxScaleMoles) * maxBarW);
        ctx.fillStyle = s.color;
        ctx.fillRect(barBoxX + 45, rowY, currentBarW, 20);

        // Value text
        ctx.fillStyle = "#f8fafc";
        ctx.font = "bold 12px monospace";
        ctx.fillText(\`\${s.moles.toFixed(2)} mol\`, barBoxX + 55 + maxBarW, rowY + 14);
      });

      // Concentrations & Pressure Display Box
      const concBoxY = barBoxY + 175;
      ctx.fillStyle = "#0f172a";
      ctx.strokeStyle = "#334155";
      ctx.lineWidth = 1;
      ctx.fillRect(barBoxX, concBoxY, barBoxW, 130);
      ctx.strokeRect(barBoxX, concBoxY, barBoxW, 130);

      ctx.fillStyle = "#94a3b8";
      ctx.font = "bold 12px system-ui";
      ctx.fillText("Molar Concentrations & Partial Pressures", barBoxX + 12, concBoxY + 22);

      ctx.font = "12px monospace";
      ctx.fillStyle = "#38bdf8";
      ctx.fillText(\`[N₂]  = \${(n_N2 / V).toFixed(3)} M  (P_N₂ = \${((n_N2 * R_GAS * T)/V).toFixed(1)} atm)\`, barBoxX + 12, concBoxY + 48);
      ctx.fillStyle = "#4ade80";
      ctx.fillText(\`[H₂]  = \${(n_H2 / V).toFixed(3)} M  (P_H₂ = \${((n_H2 * R_GAS * T)/V).toFixed(1)} atm)\`, barBoxX + 12, concBoxY + 70);
      ctx.fillStyle = "#c084fc";
      ctx.fillText(\`[NH₃] = \${(n_NH3 / V).toFixed(3)} M  (P_NH₃ = \${((n_NH3 * R_GAS * T)/V).toFixed(1)} atm)\`, barBoxX + 12, concBoxY + 92);

      // Kinetic Agitation Status
      ctx.fillStyle = tempRatio > 0.6 ? "#fb923c" : "#4ade80";
      ctx.font = "bold 11px system-ui";
      ctx.fillText(\`Mean Speed: \${(speedScale * 350).toFixed(0)} m/s | Bombardment: \${displayCollisionRate} /s\`, barBoxX + 12, concBoxY + 116);

      requestAnimationFrame(updateAndDraw);
    }

    window.addEventListener('resize', resizeCanvas);

    resizeCanvas();
    initParticles();
    requestAnimationFrame(updateAndDraw);
  </script>
</body>
</html>`,
    isCustomImport: true,
    authorEmail: "ndunj123@gmail.com",
    authorName: "Axiom Creator",
    createdAt: "2026-08-23"
  },
  {
    id: "sim-unit-circle-trigonometry",
    title: "Unit Circle & Trigonometric Functions Interactive Explorer",
    tagline: "Precision angle selection, (cos, sin, tan) vector projections, radian conversions, harmonic wave plots, and EM phasors",
    discipline: "mathematics",
    gradeLevel: ["High School (9-12)", "AP / IB STEM", "Undergraduate"],
    standards: ["CCSS.MATH.HSF.TF.A.1", "CCSS.MATH.HSF.TF.A.2", "AP Precalculus (Unit 1)", "HS-PS4-1"],
    description: "An interactive trigonometric unit circle and harmonic wave explorer. Features precision angle rotation from 0° to 360° with 1.0° and 0.1° step modes, real-time radian and π fraction readouts, dynamic Cartesian component vectors (cos θ, sin θ, tan θ), quadrant highlighting, synchronized continuous sine wave generation, and real-axis electromagnetic phasor projections (E(t) = E₀ cos(θ)).",
    learningObjectives: [
      "Relate points on the unit circle (R = 1) to the geometric definitions of cosine, sine, and tangent functions",
      "Convert between degree measures (0° to 360°) and radian measures (0 to 2π radians) with π fraction notations",
      "Demonstrate how rotating around the unit circle generates continuous simple harmonic sine waves",
      "Analyze real-axis projections of rotating phasors in AC electronics and electromagnetic wave physics"
    ],
    thumbnailGradient: "from-amber-600 via-rose-700 to-slate-950",
    badgeColor: "bg-amber-500/10 text-amber-300 border-amber-500/20",
    iconName: "RotateCcw",
    rating: 4.96,
    reviewCount: 41,
    teacherCount: 165,
    licenseType: "Academic STEM Classroom & Institutional License",
    pricing: {
      singleTeacher: 19,
      schoolDepartment: 200,
      districtUnlimited: 400
    },
    features: [
      "Precision angle slider (0° to 360°) with toggleable 1.0° standard and 0.1° fine-tuning steps",
      "Instant reference jump buttons for 0°, 90°, 180°, and 270° quadrant boundaries",
      "Toggleable component vectors for Cosine (red), Sine (blue), and Tangent (green dash)",
      "Synchronized side-by-side Continuous Wave Plot linking circular motion to simple harmonic oscillation",
      "EM Phasor View Mode showing real-axis electric field projection E(t) = E₀ cos(θ)",
      "Live readout card computing radians, π fractions, 4-decimal trig values, and quadrant tracking"
    ],
    parameterDefaults: {
      angle: 45.0
    },
    parameterControls: [
      {
        key: "angle",
        label: "Angle (θ)",
        min: 0,
        max: 360,
        step: 1,
        unit: "°",
        description: "Angle swept counterclockwise from positive X-axis"
      }
    ],
    sampleChallenges: [
      {
        id: "ch-uc-1",
        title: "Verify Exact Values at 45° (π/4)",
        instruction: "Set angle to 45° and observe the equality of cosine and sine values (√2/2 ≈ 0.7071) with tan θ = 1.0000.",
        targetMetric: "Angle",
        targetValue: 45.0,
        tolerance: 0.1,
        currentValueKey: "angle",
        rewardBadge: "Trig Pioneer"
      },
      {
        id: "ch-uc-2",
        title: "Find Undefined Tangent at 90°",
        instruction: "Jump to 90° and observe why the vertical cosine projection becomes 0 and tangent approaches Infinity.",
        targetMetric: "Angle",
        targetValue: 90.0,
        tolerance: 0.1,
        currentValueKey: "angle",
        rewardBadge: "Asymptote Navigator"
      },
      {
        id: "ch-uc-3",
        title: "Explore Quadrant II Negative Cosine",
        instruction: "Set angle to 135° (3π/4) and verify that sine is positive (+0.7071) while cosine is negative (-0.7071).",
        targetMetric: "Angle",
        targetValue: 135.0,
        tolerance: 0.5,
        currentValueKey: "angle",
        rewardBadge: "Quadrant Master"
      }
    ],
    previewFacts: [
      "On a unit circle with radius R = 1, any point on the perimeter has coordinates (x, y) = (cos θ, sin θ).",
      "One full revolution (360°) corresponds to 2π radians (≈ 6.28318 rad), making 1 radian ≈ 57.2958°.",
      "The tangent function tan(θ) = sin(θ) / cos(θ) is undefined at 90° (π/2) and 270° (3π/2) where cos(θ) = 0.",
      "Rotating around the unit circle unwraps sinusoidal waves in simple harmonic motion and projects electric field phasors."
    ],
    isHtmlApp: true,
    htmlContent: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Unit Circle Trigonometry Explorer</title>
  <style>
    :root {
      --bg-dark: #0f172a;
      --card-bg: #1e293b;
      --text-main: #f8fafc;
      --text-muted: #94a3b8;
      --accent-cos: #ef4444;
      --accent-sin: #3b82f6;
      --accent-tan: #10b981;
      --accent-vec: #f59e0b;
      --border-color: #334155;
    }

    * { box-sizing: border-box; margin: 0; padding: 0; }

    body {
      font-family: system-ui, -apple-system, sans-serif;
      background-color: var(--bg-dark);
      color: var(--text-main);
      line-height: 1.5;
      padding: 16px;
    }

    .container {
      max-width: 1250px;
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      gap: 20px;
    }

    header { text-align: center; }
    header h1 { color: var(--text-main); font-size: 1.8rem; }
    header p { color: var(--text-muted); font-size: 0.95rem; }

    .app-layout {
      display: grid;
      grid-template-columns: 1fr 340px;
      gap: 16px;
    }

    @media (max-width: 960px) {
      .app-layout { grid-template-columns: 1fr; }
    }

    .viewport-card {
      background-color: var(--card-bg);
      border: 1px solid var(--border-color);
      border-radius: 10px;
      height: 600px;
      position: relative;
      overflow: hidden;
    }

    canvas {
      width: 100%;
      height: 100%;
      display: block;
    }

    .controls-panel {
      background-color: var(--card-bg);
      border: 1px solid var(--border-color);
      border-radius: 10px;
      padding: 18px;
      display: flex;
      flex-direction: column;
      gap: 14px;
    }

    .control-group {
      display: flex;
      flex-direction: column;
      gap: 6px;
    }

    label {
      font-size: 0.8rem;
      font-weight: 700;
      color: var(--text-muted);
      text-transform: uppercase;
      letter-spacing: 0.05em;
    }

    .slider-container {
      display: flex;
      align-items: center;
      gap: 10px;
    }

    input[type="range"] {
      flex: 1;
      accent-color: var(--accent-sin);
      cursor: pointer;
    }

    .range-val {
      font-weight: 700;
      color: var(--accent-vec);
      min-width: 75px;
      text-align: right;
      font-size: 1.05rem;
    }

    .btn-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 6px;
    }

    .btn-grid-2 {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 8px;
    }

    button {
      background-color: #0f172a;
      color: var(--text-main);
      border: 1px solid var(--border-color);
      padding: 8px 6px;
      border-radius: 6px;
      font-size: 0.82rem;
      font-weight: 600;
      cursor: pointer;
    }

    button:hover {
      border-color: var(--accent-sin);
      color: var(--accent-sin);
    }

    .step-selector {
      display: flex;
      background: #0f172a;
      border-radius: 6px;
      padding: 3px;
      border: 1px solid var(--border-color);
    }

    .step-btn {
      flex: 1;
      border: none;
      background: transparent;
      padding: 6px;
      color: var(--text-muted);
      border-radius: 4px;
    }

    .step-btn.active {
      background: var(--accent-sin);
      color: #ffffff;
    }

    .checkbox-group {
      display: flex;
      flex-direction: column;
      gap: 8px;
      background: #0f172a;
      padding: 10px;
      border-radius: 6px;
      border: 1px solid var(--border-color);
    }

    .checkbox-item {
      display: flex;
      align-items: center;
      gap: 8px;
      font-size: 0.85rem;
      cursor: pointer;
    }

    .checkbox-item input {
      cursor: pointer;
    }

    .readout-card {
      background-color: #0f172a;
      border-radius: 6px;
      padding: 12px;
      border: 1px solid var(--border-color);
    }

    .readout-row {
      display: flex;
      justify-content: space-between;
      font-size: 0.88rem;
      padding: 4px 0;
      border-bottom: 1px solid #1e293b;
    }

    .readout-row:last-child { border-bottom: none; }
    .val-cos { color: var(--accent-cos); font-weight: 700; }
    .val-sin { color: var(--accent-sin); font-weight: 700; }
    .val-tan { color: var(--accent-tan); font-weight: 700; }

    .theory-section {
      background-color: var(--card-bg);
      border: 1px solid var(--border-color);
      border-radius: 10px;
      padding: 20px;
    }

    .theory-section h2 { color: var(--accent-sin); font-size: 1.2rem; margin-bottom: 8px; }
    .theory-section p { font-size: 0.9rem; margin-bottom: 8px; color: var(--text-muted); }
  </style>
</head>
<body>

  <div class="container">
    <header>
      <h1>Unit Circle & Trigonometric Functions Interactive Explorer</h1>
      <p>Precision Angle Selection & Wave/Phasor Mapping ($0^\circ \rightarrow 360^\circ$)</p>
    </header>

    <div class="app-layout">
      <div class="viewport-card">
        <canvas id="simCanvas"></canvas>
      </div>

      <div class="controls-panel">
        <div class="control-group">
          <label for="angle-slider">Angle Adjustment (θ)</label>
          <div class="slider-container">
            <input type="range" id="angle-slider" min="0" max="360" step="1" value="45.0">
            <span class="range-val" id="angle-val">45.0°</span>
          </div>
        </div>

        <div class="control-group">
          <label>Slider Precision Step</label>
          <div class="step-selector">
            <button class="step-btn active" id="btn-step-1">1.0° Step</button>
            <button class="step-btn" id="btn-step-01">0.1° Step</button>
          </div>
        </div>

        <div class="control-group">
          <label>Nudge Angle</label>
          <div class="btn-grid-2">
            <button id="btn-dec-step">- Step</button>
            <button id="btn-inc-step">+ Step</button>
          </div>
        </div>

        <div class="control-group">
          <label>Quick Reference Points</label>
          <div class="btn-grid">
            <button id="btn-zero">0°</button>
            <button id="btn-90">90°</button>
            <button id="btn-180">180°</button>
            <button id="btn-270">270°</button>
          </div>
        </div>

        <div class="control-group">
          <label>Display View Mode</label>
          <div class="btn-grid-2">
            <button id="mode-wave" style="border-color: var(--accent-sin);">Wave Plot</button>
            <button id="mode-phasor">EM Phasor</button>
          </div>
        </div>

        <div class="checkbox-group">
          <label>Visible Component Vectors</label>
          <label class="checkbox-item" style="color: var(--accent-cos);">
            <input type="checkbox" id="chk-cos" checked> Cosine (x = cos θ)
          </label>
          <label class="checkbox-item" style="color: var(--accent-sin);">
            <input type="checkbox" id="chk-sin" checked> Sine (y = sin θ)
          </label>
          <label class="checkbox-item" style="color: var(--accent-tan);">
            <input type="checkbox" id="chk-tan" checked> Tangent (tan θ)
          </label>
        </div>

        <div class="readout-card">
          <div class="readout-row">
            <span>Angle in Radians</span>
            <span id="read-rad" style="color: var(--text-main); font-weight:700;">0.79 rad (0.25π)</span>
          </div>
          <div class="readout-row">
            <span>Cosine (x-coord)</span>
            <span id="read-cos" class="val-cos">0.7071</span>
          </div>
          <div class="readout-row">
            <span>Sine (y-coord)</span>
            <span id="read-sin" class="val-sin">0.7071</span>
          </div>
          <div class="readout-row">
            <span>Tangent (y/x)</span>
            <span id="read-tan" class="val-tan">1.0000</span>
          </div>
        </div>
      </div>
    </div>

    <div class="theory-section">
      <h2>Mathematical & Physical Principles</h2>
      <p>
        <strong>Unit Circle Coordinates:</strong> A point on the unit circle (radius $R = 1$) centered at $(0,0)$ has coordinates $(x, y) = (\cos\theta, \sin\theta)$. Quadrant I ranges from $0^\circ$ to $90^\circ$, Quadrant II from $90^\circ$ to $180^\circ$, Quadrant III from $180^\circ$ to $270^\circ$, and Quadrant IV from $270^\circ$ to $360^\circ$.
      </p>
      <p>
        <strong>Simple Harmonic Motion & Waves:</strong> Manually advancing the angle $\theta$ maps the vertical sine height onto the continuous wave display on the right, directly illustrating wave amplitude oscillation.
      </p>
      <p>
        <strong>Phasor Vectors in Electromagnetism:</strong> In AC circuit analysis and physics optics, time-varying signals are modeled as rotating phasors. The physical measurable quantity corresponds to the real-axis horizontal cosine projection $\mathbf{E}(t) = E_0 \cos(\theta)$.
      </p>
    </div>
  </div>

  <script>
    const canvas = document.getElementById('simCanvas');
    const ctx = canvas.getContext('2d');

    let degAngle = 45.0; 
    let stepSize = 1.0; 
    let viewMode = 'wave'; 

    let showCos = true;
    let showSin = true;
    let showTan = true;

    // UI Elements
    const angleSlider = document.getElementById('angle-slider');
    const angleVal = document.getElementById('angle-val');

    const btnStep1 = document.getElementById('btn-step-1');
    const btnStep01 = document.getElementById('btn-step-01');

    const btnIncStep = document.getElementById('btn-inc-step');
    const btnDecStep = document.getElementById('btn-dec-step');

    const btnZero = document.getElementById('btn-zero');
    const btn90 = document.getElementById('btn-90');
    const btn180 = document.getElementById('btn-180');
    const btn270 = document.getElementById('btn-270');

    const btnModeWave = document.getElementById('mode-wave');
    const btnModePhasor = document.getElementById('mode-phasor');

    const chkCos = document.getElementById('chk-cos');
    const chkSin = document.getElementById('chk-sin');
    const chkTan = document.getElementById('chk-tan');

    const readRad = document.getElementById('read-rad');
    const readCos = document.getElementById('read-cos');
    const readSin = document.getElementById('read-sin');
    const readTan = document.getElementById('read-tan');

    function resizeCanvas() {
      canvas.width = canvas.parentElement.clientWidth;
      canvas.height = canvas.parentElement.clientHeight;
      draw();
    }

    function formatRad(rad) {
      const piFrac = rad / Math.PI;
      return \`\${rad.toFixed(3)} rad (\${piFrac.toFixed(2)}π)\`;
    }

    function updateReadouts() {
      // Clamp angle between 0 and 360
      degAngle = Math.max(0, Math.min(360, Math.round(degAngle / stepSize) * stepSize));
      
      const rad = (degAngle * Math.PI) / 180;
      const cosVal = Math.cos(rad);
      const sinVal = Math.sin(rad);
      const tanVal = Math.abs(cosVal) < 1e-4 ? Infinity : Math.tan(rad);

      angleSlider.value = degAngle;
      angleVal.textContent = stepSize === 0.1 ? \`\${degAngle.toFixed(1)}°\` : \`\${Math.round(degAngle)}°\`;

      readRad.textContent = formatRad(rad);
      readCos.textContent = cosVal.toFixed(4);
      readSin.textContent = sinVal.toFixed(4);
      readTan.textContent = tanVal === Infinity ? "Undefined" : tanVal.toFixed(4);
    }

    // Set Step Precision
    function setStepSize(size) {
      stepSize = size;
      angleSlider.step = size;
      if (size === 1.0) {
        btnStep1.classList.add('active');
        btnStep01.classList.remove('active');
        btnIncStep.textContent = "+1.0°";
        btnDecStep.textContent = "-1.0°";
      } else {
        btnStep01.classList.add('active');
        btnStep1.classList.remove('active');
        btnIncStep.textContent = "+0.1°";
        btnDecStep.textContent = "-0.1°";
      }
      updateReadouts();
      draw();
    }

    btnStep1.addEventListener('click', () => setStepSize(1.0));
    btnStep01.addEventListener('click', () => setStepSize(0.1));

    // Slider Event Listener
    angleSlider.addEventListener('input', (e) => {
      degAngle = parseFloat(e.target.value);
      updateReadouts();
      draw();
    });

    // Step Increments
    btnIncStep.addEventListener('click', () => {
      degAngle = Math.min(360, degAngle + stepSize);
      updateReadouts();
      draw();
    });

    btnDecStep.addEventListener('click', () => {
      degAngle = Math.max(0, degAngle - stepSize);
      updateReadouts();
      draw();
    });

    // Reference Point Buttons
    btnZero.addEventListener('click', () => { degAngle = 0; updateReadouts(); draw(); });
    btn90.addEventListener('click', () => { degAngle = 90; updateReadouts(); draw(); });
    btn180.addEventListener('click', () => { degAngle = 180; updateReadouts(); draw(); });
    btn270.addEventListener('click', () => { degAngle = 270; updateReadouts(); draw(); });

    // Mode Buttons
    btnModeWave.addEventListener('click', () => {
      viewMode = 'wave';
      btnModeWave.style.borderColor = "var(--accent-sin)";
      btnModePhasor.style.borderColor = "var(--border-color)";
      draw();
    });

    btnModePhasor.addEventListener('click', () => {
      viewMode = 'phasor';
      btnModePhasor.style.borderColor = "var(--accent-sin)";
      btnModeWave.style.borderColor = "var(--border-color)";
      draw();
    });

    chkCos.addEventListener('change', (e) => { showCos = e.target.checked; draw(); });
    chkSin.addEventListener('change', (e) => { showSin = e.target.checked; draw(); });
    chkTan.addEventListener('change', (e) => { showTan = e.target.checked; draw(); });

    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const w = canvas.width;
      const h = canvas.height;

      const radius = Math.min(w, h) * 0.22;
      const centerX = viewMode === 'wave' ? w * 0.28 : w * 0.35;
      const centerY = h * 0.5;

      const rad = (degAngle * Math.PI) / 180;
      const cosVal = Math.cos(rad);
      const sinVal = Math.sin(rad);

      const px = centerX + radius * cosVal;
      const py = centerY - radius * sinVal; // Canvas y is inverted

      // 1. Axes for Unit Circle
      ctx.strokeStyle = "#334155";
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.moveTo(centerX - radius * 1.35, centerY);
      ctx.lineTo(centerX + radius * 1.5, centerY);
      ctx.moveTo(centerX, centerY - radius * 1.35);
      ctx.lineTo(centerX, centerY + radius * 1.35);
      ctx.stroke();

      // Axis Degree Markers
      ctx.fillStyle = "#94a3b8";
      ctx.font = "bold 12px system-ui";
      ctx.textAlign = "left";
      ctx.fillText("0° / 360°", centerX + radius + 10, centerY + 4);
      ctx.textAlign = "center";
      ctx.fillText("90°", centerX, centerY - radius - 12);
      ctx.textAlign = "right";
      ctx.fillText("180°", centerX - radius - 10, centerY + 4);
      ctx.textAlign = "center";
      ctx.fillText("270°", centerX, centerY + radius + 22);

      // Quadrant Identifiers
      ctx.fillStyle = "rgba(148, 163, 184, 0.25)";
      ctx.font = "bold 14px system-ui";
      ctx.fillText("QI", centerX + radius * 0.5, centerY - radius * 0.5);
      ctx.fillText("QII", centerX - radius * 0.5, centerY - radius * 0.5);
      ctx.fillText("QIII", centerX - radius * 0.5, centerY + radius * 0.5);
      ctx.fillText("QIV", centerX + radius * 0.5, centerY + radius * 0.5);

      // 2. Unit Circle Perimeter
      ctx.strokeStyle = "#475569";
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
      ctx.stroke();

      // 3. Counterclockwise Arc Fill
      ctx.fillStyle = "rgba(245, 158, 11, 0.15)";
      ctx.beginPath();
      ctx.moveTo(centerX, centerY);
      ctx.arc(centerX, centerY, radius * 0.3, 0, -rad, true);
      ctx.closePath();
      ctx.fill();

      // Degree label rendered inside arc
      if (degAngle > 0) {
        const labelAngle = -rad / 2;
        const labelX = centerX + radius * 0.45 * Math.cos(labelAngle);
        const labelY = centerY + radius * 0.45 * Math.sin(labelAngle);
        ctx.fillStyle = "#f59e0b";
        ctx.font = "bold 12px system-ui";
        ctx.textAlign = "center";
        ctx.fillText(\`\${stepSize === 0.1 ? degAngle.toFixed(1) : Math.round(degAngle)}°\`, labelX, labelY);
      }

      // 4. Trigonometric Components
      if (showCos) {
        ctx.strokeStyle = "#ef4444";
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.moveTo(centerX, centerY);
        ctx.lineTo(px, centerY);
        ctx.stroke();
      }

      if (showSin) {
        ctx.strokeStyle = "#3b82f6";
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.moveTo(px, centerY);
        ctx.lineTo(px, py);
        ctx.stroke();
      }

      if (showTan && Math.abs(cosVal) > 0.05) {
        const tanX = centerX + radius;
        const tanY = centerY - radius * Math.tan(rad);

        ctx.strokeStyle = "#10b981";
        ctx.lineWidth = 2;
        ctx.setLineDash([4, 4]);
        ctx.beginPath();
        ctx.moveTo(centerX, centerY);
        ctx.lineTo(tanX, tanY);
        ctx.moveTo(tanX, centerY);
        ctx.lineTo(tanX, tanY);
        ctx.stroke();
        ctx.setLineDash([]);
      }

      // Radius Vector / Phasor
      ctx.strokeStyle = "#f59e0b";
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.moveTo(centerX, centerY);
      ctx.lineTo(px, py);
      ctx.stroke();

      // Terminal Point
      ctx.fillStyle = "#f8fafc";
      ctx.beginPath();
      ctx.arc(px, py, 6, 0, Math.PI * 2);
      ctx.fill();

      // Modes
      if (viewMode === 'wave') {
        const waveStartX = centerX + radius * 1.6;
        const waveWidth = w - waveStartX - 30;

        // Axis
        ctx.strokeStyle = "#334155";
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.moveTo(waveStartX, centerY);
        ctx.lineTo(waveStartX + waveWidth, centerY);
        ctx.stroke();

        // Sync Tracker Line
        ctx.strokeStyle = "rgba(59, 130, 246, 0.4)";
        ctx.setLineDash([3, 3]);
        ctx.beginPath();
        ctx.moveTo(px, py);
        ctx.lineTo(waveStartX, py);
        ctx.stroke();
        ctx.setLineDash([]);

        // Reference Wave Curve
        ctx.strokeStyle = "#3b82f6";
        ctx.lineWidth = 2.5;
        ctx.beginPath();

        const samples = 180;
        for (let i = 0; i <= samples; i++) {
          const dx = (i / samples) * waveWidth;
          const sampleRad = (i / samples) * (2 * Math.PI);
          const dy = centerY - radius * Math.sin(sampleRad);

          if (i === 0) ctx.moveTo(waveStartX + dx, dy);
          else ctx.lineTo(waveStartX + dx, dy);
        }
        ctx.stroke();

        // Active Marker Dot
        const activeX = waveStartX + (rad / (2 * Math.PI)) * waveWidth;
        if (activeX <= waveStartX + waveWidth) {
          ctx.fillStyle = "#f59e0b";
          ctx.beginPath();
          ctx.arc(activeX, py, 6, 0, Math.PI * 2);
          ctx.fill();

          ctx.strokeStyle = "#f8fafc";
          ctx.lineWidth = 2;
          ctx.stroke();
        }

      } else if (viewMode === 'phasor') {
        const projY = centerY + radius * 1.6;

        ctx.strokeStyle = "rgba(239, 68, 68, 0.4)";
        ctx.setLineDash([3, 3]);
        ctx.beginPath();
        ctx.moveTo(px, py);
        ctx.lineTo(px, projY);
        ctx.stroke();
        ctx.setLineDash([]);

        ctx.strokeStyle = "#475569";
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(centerX - radius * 1.35, projY);
        ctx.lineTo(centerX + radius * 1.35, projY);
        ctx.stroke();

        ctx.strokeStyle = "#ef4444";
        ctx.lineWidth = 4;
        ctx.beginPath();
        ctx.moveTo(centerX, projY);
        ctx.lineTo(px, projY);
        ctx.stroke();

        ctx.fillStyle = "#ef4444";
        ctx.beginPath();
        ctx.arc(px, projY, 6, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = "#f8fafc";
        ctx.font = "bold 12px system-ui";
        ctx.textAlign = "center";
        ctx.fillText("Real Axis Projection: E(t) = E₀ cos(θ)", centerX, projY + 25);
      }
    }

    window.addEventListener('resize', resizeCanvas);

    setStepSize(1.0);
    resizeCanvas();
  </script>
</body>
</html>`,
    isCustomImport: true,
    authorEmail: "ndunj123@gmail.com",
    authorName: "Axiom Creator",
    createdAt: "2026-08-23"
  },
  {
    id: "sim-vsepr-3d-geometry",
    title: "VSEPR 3D Simulation & Interactive Molecular Geometry Guide",
    tagline: "Interactive 3D exploration of Valence Shell Electron Pair Repulsion geometry, electron domains, and bond angles",
    discipline: "chemistry",
    gradeLevel: ["High School (9-12)", "AP / IB STEM", "Undergraduate"],
    standards: ["AP Chemistry (Unit 2)", "HS-PS1-1", "HS-PS1-3", "NGSS SEP-2"],
    description: "An interactive 3D WebGL molecular geometry visualizer modeling Valence Shell Electron Pair Repulsion (VSEPR) theory. Explore steric numbers 2 through 6 across 9 key molecules (CO₂, CH₄, NH₃, H₂O, PCl₅, SF₄, XeF₂, SF₆, XeF₄). Features real-time Three.js orbit rotation and zoom, element-labeled atomic spheres, dynamic bond cylinders, translucent lone pair electron clouds, geometric dashed polyhedral frames, curvature bond angle arcs with live angle labels, and comprehensive hybridization readouts (sp, sp², sp³, sp³d, sp³d²).",
    learningObjectives: [
      "Determine the steric number (SN) and electron domain geometry for steric numbers 2 through 6",
      "Differentiate between electron domain geometry and molecular shape caused by non-bonding lone pairs",
      "Explain why lone pair-lone pair and lone pair-bonding pair repulsions compress bond angles (e.g., CH₄ 109.5° → NH₃ 107° → H₂O 104.5°)",
      "Predict lone pair equatorial vs. axial site preferences in trigonal bipyramidal (SF₄, XeF₂) and octahedral (XeF₄) geometries"
    ],
    thumbnailGradient: "from-cyan-600 via-blue-700 to-slate-950",
    badgeColor: "bg-cyan-500/10 text-cyan-300 border-cyan-500/20",
    iconName: "Atom",
    rating: 4.98,
    reviewCount: 54,
    teacherCount: 189,
    licenseType: "Academic STEM Classroom & Institutional License",
    pricing: {
      singleTeacher: 19,
      schoolDepartment: 200,
      districtUnlimited: 400
    },
    features: [
      "Interactive 3D WebGL molecular viewer with free orbit rotation, damping, and pinch/wheel zooming",
      "Preset library of 9 cornerstone molecules spanning Linear, Tetrahedral, Trigonal Pyramidal, Bent, Trigonal Bipyramidal, See-saw, Linear, Octahedral, and Square Planar shapes",
      "Dynamic toggleable translucent lone pair electron clouds showing expanded spatial volume and repulsion",
      "Geometry frame wireframes connecting outer domain vertices to highlight polyhedral geometry",
      "Real-time bond angle curvature arcs and crisp 3D angle readouts (180°, 120°, 109.5°, 107°, 104.5°, 90°, 173°)",
      "Live property inspection card displaying Steric Number, Bonding/Lone Pairs, Electron Geometry, Molecular Geometry, Hybridization, and Bond Angles"
    ],
    parameterDefaults: {
      molecule: "CH4"
    },
    parameterControls: [
      {
        key: "molecule",
        label: "Molecule Preset",
        min: 0,
        max: 8,
        step: 1,
        unit: "",
        description: "Select from 9 VSEPR reference molecules"
      }
    ],
    sampleChallenges: [
      {
        id: "ch-vsepr-1",
        title: "Analyze Lone Pair Angle Compression",
        instruction: "Compare Methane (CH₄, 0 lone pairs), Ammonia (NH₃, 1 lone pair), and Water (H₂O, 2 lone pairs) and observe how lone pair repulsion compresses bond angles from 109.5° down to 107° and 104.5°.",
        targetMetric: "Steric",
        targetValue: 4,
        tolerance: 0.1,
        currentValueKey: "molecule",
        rewardBadge: "VSEPR Master"
      },
      {
        id: "ch-vsepr-2",
        title: "Equatorial Lone Pair Preference in SF₄",
        instruction: "Select Sulfur Tetrafluoride (SF₄) and toggle Lone Pair Clouds to observe why lone pairs occupy the equatorial plane (See-saw molecular geometry).",
        targetMetric: "Steric",
        targetValue: 5,
        tolerance: 0.1,
        currentValueKey: "molecule",
        rewardBadge: "Stereochemistry Expert"
      },
      {
        id: "ch-vsepr-3",
        title: "Square Planar Symmetry in XeF₄",
        instruction: "Select Xenon Tetrafluoride (XeF₄) and observe how 2 lone pairs position opposite at 180° in an octahedral frame to produce a flat Square Planar geometry.",
        targetMetric: "Steric",
        targetValue: 6,
        tolerance: 0.1,
        currentValueKey: "molecule",
        rewardBadge: "Octahedral Specialist"
      }
    ],
    previewFacts: [
      "VSEPR theory states that valence electron pairs surrounding a central atom repel each other and adopt geometry that minimizes repulsion.",
      "Lone pairs spread out more in space than bonding pairs, exerting greater repulsive forces and compressing adjacent bond angles.",
      "In 5-coordinate trigonal bipyramidal systems, lone pairs always occupy equatorial positions with 120° angles to minimize severe 90° repulsions.",
      "Steric numbers directly correlate to orbital hybridization: SN 2 (sp), SN 3 (sp²), SN 4 (sp³), SN 5 (sp³d), SN 6 (sp³d²)."
    ],
    isHtmlApp: true,
    htmlContent: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>VSEPR 3D Simulation & Interactive Guide</title>
  <style>
    :root {
      --bg-dark: #0f172a;
      --card-bg: #1e293b;
      --text-main: #f8fafc;
      --text-muted: #94a3b8;
      --accent-blue: #38bdf8;
      --accent-green: #4ade80;
      --border-color: #334155;
    }

    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

    body {
      font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
      background-color: var(--bg-dark);
      color: var(--text-main);
      line-height: 1.6;
      padding: 20px;
    }

    .container {
      max-width: 1200px;
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      gap: 24px;
    }

    header {
      text-align: center;
      padding: 10px 0;
    }

    header h1 {
      font-size: 2.2rem;
      color: var(--accent-blue);
      margin-bottom: 8px;
    }

    header p {
      color: var(--text-muted);
      font-size: 1.1rem;
    }

    /* App Layout */
    .app-layout {
      display: grid;
      grid-template-columns: 1fr 340px;
      gap: 20px;
    }

    @media (max-width: 900px) {
      .app-layout {
        grid-template-columns: 1fr;
      }
    }

    /* Simulation Viewport */
    .viewport-card {
      background-color: var(--card-bg);
      border: 1px solid var(--border-color);
      border-radius: 12px;
      position: relative;
      overflow: hidden;
      height: 600px;
      box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.5);
    }

    #webgl-canvas {
      width: 100%;
      height: 100%;
      display: block;
    }

    /* Controls Overlay */
    .controls-panel {
      background-color: var(--card-bg);
      border: 1px solid var(--border-color);
      border-radius: 12px;
      padding: 20px;
      display: flex;
      flex-direction: column;
      gap: 18px;
      box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.5);
    }

    .control-group {
      display: flex;
      flex-direction: column;
      gap: 8px;
    }

    label {
      font-size: 0.9rem;
      font-weight: 600;
      color: var(--text-muted);
      text-transform: uppercase;
      letter-spacing: 0.05em;
    }

    select {
      background-color: #0f172a;
      color: var(--text-main);
      border: 1px solid var(--border-color);
      padding: 10px 14px;
      border-radius: 6px;
      font-size: 1rem;
      cursor: pointer;
      outline: none;
    }

    select:focus {
      border-color: var(--accent-blue);
    }

    .toggle-group {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 6px 0;
    }

    .toggle-group span {
      font-size: 0.95rem;
    }

    /* Switch styling */
    .switch {
      position: relative;
      display: inline-block;
      width: 44px;
      height: 24px;
    }

    .switch input {
      opacity: 0;
      width: 0;
      height: 0;
    }

    .slider {
      position: absolute;
      cursor: pointer;
      top: 0; left: 0; right: 0; bottom: 0;
      background-color: #334155;
      transition: .3s;
      border-radius: 24px;
    }

    .slider:before {
      position: absolute;
      content: "";
      height: 18px;
      width: 18px;
      left: 3px;
      bottom: 3px;
      background-color: white;
      transition: .3s;
      border-radius: 50%;
    }

    input:checked + .slider {
      background-color: var(--accent-blue);
    }

    input:checked + .slider:before {
      transform: translateX(20px);
    }

    /* Info Badge Table */
    .info-card {
      background-color: #0f172a;
      border-radius: 8px;
      padding: 14px;
      margin-top: 10px;
      border: 1px solid var(--border-color);
    }

    .info-row {
      display: flex;
      justify-content: space-between;
      font-size: 0.88rem;
      padding: 6px 0;
      border-bottom: 1px solid #1e293b;
    }

    .info-row:last-child {
      border-bottom: none;
    }

    .info-label {
      color: var(--text-muted);
    }

    .info-value {
      font-weight: 600;
      color: var(--accent-green);
      text-align: right;
    }

    /* Theory Section */
    .theory-section {
      background-color: var(--card-bg);
      border: 1px solid var(--border-color);
      border-radius: 12px;
      padding: 28px;
      margin-top: 10px;
    }

    .theory-section h2 {
      color: var(--accent-blue);
      margin-bottom: 16px;
      border-bottom: 1px solid var(--border-color);
      padding-bottom: 8px;
    }

    .theory-section h3 {
      color: var(--accent-green);
      margin: 18px 0 10px 0;
    }

    .theory-section p {
      margin-bottom: 12px;
      color: #cbd5e1;
    }

    .table-container {
      overflow-x: auto;
      margin: 20px 0;
    }

    table {
      width: 100%;
      border-collapse: collapse;
      text-align: left;
      font-size: 0.95rem;
    }

    th, td {
      padding: 12px 16px;
      border: 1px solid var(--border-color);
    }

    th {
      background-color: #0f172a;
      color: var(--accent-blue);
    }

    tr:nth-child(even) {
      background-color: rgba(255, 255, 255, 0.02);
    }

    .instruction-overlay {
      position: absolute;
      bottom: 12px;
      left: 12px;
      background-color: rgba(15, 23, 42, 0.75);
      padding: 6px 12px;
      border-radius: 6px;
      font-size: 0.8rem;
      color: var(--text-muted);
      pointer-events: none;
    }
  </style>

  <!-- Include Three.js and OrbitControls -->
  <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/three@0.128.0/examples/js/controls/OrbitControls.js"></script>
</head>
<body>

  <div class="container">
    <header>
      <h1>VSEPR 3D Simulation & Visualizer</h1>
      <p>Interactive exploration of Valence Shell Electron Pair Repulsion geometry</p>
    </header>

    <div class="app-layout">
      <!-- 3D Canvas Container -->
      <div class="viewport-card">
        <canvas id="webgl-canvas"></canvas>
        <div class="instruction-overlay">Drag to rotate | Scroll to zoom</div>
      </div>

      <!-- Interactive Controls Panel -->
      <div class="controls-panel">
        <div class="control-group">
          <label for="molecule-select">Select Molecule</label>
          <select id="molecule-select">
            <option value="CO2">Carbon Dioxide (CO₂)</option>
            <option value="CH4" selected>Methane (CH₄)</option>
            <option value="NH3">Ammonia (NH₃)</option>
            <option value="H2O">Water (H₂O)</option>
            <option value="PCl5">Phosphorus Pentachloride (PCl₅)</option>
            <option value="SF4">Sulfur Tetrafluoride (SF₄)</option>
            <option value="XeF2">Xenon Difluoride (XeF₂)</option>
            <option value="SF6">Sulfur Hexafluoride (SF₆)</option>
            <option value="XeF4">Xenon Tetrafluoride (XeF₄)</option>
          </select>
        </div>

        <div class="control-group">
          <label>Visual Toggles</label>
          
          <div class="toggle-group">
            <span>Show Lone Pair Clouds</span>
            <label class="switch">
              <input type="checkbox" id="toggle-lone-pairs" checked>
              <span class="slider"></span>
            </label>
          </div>

          <div class="toggle-group">
            <span>Show Geometry Frame</span>
            <label class="switch">
              <input type="checkbox" id="toggle-frame" checked>
              <span class="slider"></span>
            </label>
          </div>

          <div class="toggle-group">
            <span>Show Bond Angles</span>
            <label class="switch">
              <input type="checkbox" id="toggle-angles" checked>
              <span class="slider"></span>
            </label>
          </div>
        </div>

        <!-- Molecular Property Badges -->
        <div class="info-card">
          <div class="info-row">
            <span class="info-label">Steric Number</span>
            <span class="info-value" id="info-steric">-</span>
          </div>
          <div class="info-row">
            <span class="info-label">Bonding / Lone Pairs</span>
            <span class="info-value" id="info-pairs">-</span>
          </div>
          <div class="info-row">
            <span class="info-label">Electron Geometry</span>
            <span class="info-value" id="info-electron-geom">-</span>
          </div>
          <div class="info-row">
            <span class="info-label">Molecular Geometry</span>
            <span class="info-value" id="info-molecular-geom">-</span>
          </div>
          <div class="info-row">
            <span class="info-label">Hybridization</span>
            <span class="info-value" id="info-hybrid">-</span>
          </div>
          <div class="info-row">
            <span class="info-label">Actual Bond Angle(s)</span>
            <span class="info-value" id="info-angles">-</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Accompanying Theory & Explanation Section -->
    <div class="theory-section">
      <h2>VSEPR Theory & Principles</h2>
      <p>
        <strong>Valence Shell Electron Pair Repulsion (VSEPR)</strong> theory predicts three-dimensional arrangements of electron domains (bonding pairs and non-bonding lone pairs) around a central atom by assuming electron clouds experience mutual electrostatic repulsion and position themselves as far apart as possible.
      </p>

      <h3>1. Steric Number & Electron Geometry</h3>
      <p>
        The total count of bonding domains plus lone pairs attached to a central atom determines its <strong>Steric Number (SN)</strong>. The steric number defines the ideal arrangement of electron density (Electron Geometry):
      </p>
      <ul>
        <li><strong>SN = 2:</strong> Linear (180°)</li>
        <li><strong>SN = 3:</strong> Trigonal Planar (120°)</li>
        <li><strong>SN = 4:</strong> Tetrahedral (109.5°)</li>
        <li><strong>SN = 5:</strong> Trigonal Bipyramidal (90° axial-equatorial, 120° equatorial-equatorial)</li>
        <li><strong>SN = 6:</strong> Octahedral (90°)</li>
      </ul>

      <h3>2. Lone Pair Repulsion & Position Preference</h3>
      <p>
        Non-bonding lone pairs are attracted by only one central nucleus, causing their electron density to spread out over a wider spatial volume compared to localized bonding pairs. Consequently:
      </p>
      <p>Lone Pair - Lone Pair Repulsion &gt; Lone Pair - Bonding Pair Repulsion &gt; Bonding Pair - Bonding Pair Repulsion</p>
      <p>
        In 5-coordinate trigonal bipyramidal systems (e.g., SF₄, XeF₂), lone pairs preferentially occupy <strong>equatorial positions</strong> (120° separation) to minimize severe 90° interactions. In 6-coordinate octahedral systems with two lone pairs (XeF₄), the lone pairs align opposite to each other at 180° to minimize repulsion, producing a <strong>Square Planar</strong> molecular shape.
      </p>

      <h3>Summary Table of Examples</h3>
      <div class="table-container">
        <table>
          <thead>
            <tr>
              <th>Molecule</th>
              <th>Steric No.</th>
              <th>Bonding Pairs</th>
              <th>Lone Pairs</th>
              <th>Electron Geometry</th>
              <th>Molecular Geometry</th>
              <th>Bond Angle(s)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>CO₂</td>
              <td>2</td>
              <td>2</td>
              <td>0</td>
              <td>Linear</td>
              <td>Linear</td>
              <td>180°</td>
            </tr>
            <tr>
              <td>CH₄</td>
              <td>4</td>
              <td>4</td>
              <td>0</td>
              <td>Tetrahedral</td>
              <td>Tetrahedral</td>
              <td>109.5°</td>
            </tr>
            <tr>
              <td>NH₃</td>
              <td>4</td>
              <td>3</td>
              <td>1</td>
              <td>Tetrahedral</td>
              <td>Trigonal Pyramidal</td>
              <td>107°</td>
            </tr>
            <tr>
              <td>H₂O</td>
              <td>4</td>
              <td>2</td>
              <td>2</td>
              <td>Tetrahedral</td>
              <td>Bent</td>
              <td>104.5°</td>
            </tr>
            <tr>
              <td>PCl₅</td>
              <td>5</td>
              <td>5</td>
              <td>0</td>
              <td>Trigonal Bipyramidal</td>
              <td>Trigonal Bipyramidal</td>
              <td>90°, 120°</td>
            </tr>
            <tr>
              <td>SF₄</td>
              <td>5</td>
              <td>4</td>
              <td>1</td>
              <td>Trigonal Bipyramidal</td>
              <td>See-saw</td>
              <td>102°, 173°</td>
            </tr>
            <tr>
              <td>XeF₂</td>
              <td>5</td>
              <td>2</td>
              <td>3</td>
              <td>Trigonal Bipyramidal</td>
              <td>Linear</td>
              <td>180°</td>
            </tr>
            <tr>
              <td>SF₆</td>
              <td>6</td>
              <td>6</td>
              <td>0</td>
              <td>Octahedral</td>
              <td>Octahedral</td>
              <td>90°</td>
            </tr>
            <tr>
              <td>XeF₄</td>
              <td>6</td>
              <td>4</td>
              <td>2</td>
              <td>Octahedral</td>
              <td>Square Planar</td>
              <td>90°</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>

  <script>
    // --- Data Store for VSEPR Preset Molecules ---
    const MOLECULES = {
      CO2: {
        name: "Carbon Dioxide",
        central: { symbol: "C", color: 0x444444, textColor: "#ffffff", radius: 0.6 },
        outer: [
          { symbol: "O", color: 0xef4444, textColor: "#ffffff", dir: new THREE.Vector3(1, 0, 0), radius: 0.5 },
          { symbol: "O", color: 0xef4444, textColor: "#ffffff", dir: new THREE.Vector3(-1, 0, 0), radius: 0.5 }
        ],
        lonePairs: [],
        steric: 2, bonding: 2, lone: 0,
        electronGeom: "Linear",
        molecularGeom: "Linear",
        hybridization: "sp",
        angles: "180°"
      },
      CH4: {
        name: "Methane",
        central: { symbol: "C", color: 0x444444, textColor: "#ffffff", radius: 0.6 },
        outer: getTetrahedralVectors().map(v => ({ symbol: "H", color: 0xe2e8f0, textColor: "#0f172a", dir: v, radius: 0.35 })),
        lonePairs: [],
        steric: 4, bonding: 4, lone: 0,
        electronGeom: "Tetrahedral",
        molecularGeom: "Tetrahedral",
        hybridization: "sp³",
        angles: "109.5°"
      },
      NH3: {
        name: "Ammonia",
        central: { symbol: "N", color: 0x3b82f6, textColor: "#ffffff", radius: 0.55 },
        outer: [
          { symbol: "H", color: 0xe2e8f0, textColor: "#0f172a", dir: new THREE.Vector3(0, -0.4, 0.916), radius: 0.35 },
          { symbol: "H", color: 0xe2e8f0, textColor: "#0f172a", dir: new THREE.Vector3(0.793, -0.4, -0.458), radius: 0.35 },
          { symbol: "H", color: 0xe2e8f0, textColor: "#0f172a", dir: new THREE.Vector3(-0.793, -0.4, -0.458), radius: 0.35 }
        ],
        lonePairs: [new THREE.Vector3(0, 1, 0)],
        steric: 4, bonding: 3, lone: 1,
        electronGeom: "Tetrahedral",
        molecularGeom: "Trigonal Pyramidal",
        hybridization: "sp³",
        angles: "107°"
      },
      H2O: {
        name: "Water",
        central: { symbol: "O", color: 0xef4444, textColor: "#ffffff", radius: 0.55 },
        outer: [
          { symbol: "H", color: 0xe2e8f0, textColor: "#0f172a", dir: new THREE.Vector3(0, 0.61, 0.79), radius: 0.35 },
          { symbol: "H", color: 0xe2e8f0, textColor: "#0f172a", dir: new THREE.Vector3(0, 0.61, -0.79), radius: 0.35 }
        ],
        lonePairs: [
          new THREE.Vector3(0.81, -0.58, 0),
          new THREE.Vector3(-0.81, -0.58, 0)
        ],
        steric: 4, bonding: 2, lone: 2,
        electronGeom: "Tetrahedral",
        molecularGeom: "Bent",
        hybridization: "sp³",
        angles: "104.5°"
      },
      PCl5: {
        name: "Phosphorus Pentachloride",
        central: { symbol: "P", color: 0xf97316, textColor: "#ffffff", radius: 0.65 },
        outer: getTrigonalBipyramidalVectors().map(v => ({ symbol: "Cl", color: 0x22c55e, textColor: "#ffffff", dir: v, radius: 0.45 })),
        lonePairs: [],
        steric: 5, bonding: 5, lone: 0,
        electronGeom: "Trigonal Bipyramidal",
        molecularGeom: "Trigonal Bipyramidal",
        hybridization: "sp³d",
        angles: "90°, 120°"
      },
      SF4: {
        name: "Sulfur Tetrafluoride",
        central: { symbol: "S", color: 0xeab308, textColor: "#0f172a", radius: 0.6 },
        outer: [
          { symbol: "F", color: 0x4ade80, textColor: "#0f172a", dir: new THREE.Vector3(0, 1, 0), radius: 0.4 },
          { symbol: "F", color: 0x4ade80, textColor: "#0f172a", dir: new THREE.Vector3(0, -1, 0), radius: 0.4 },
          { symbol: "F", color: 0x4ade80, textColor: "#0f172a", dir: new THREE.Vector3(0.95, 0, -0.3), radius: 0.4 },
          { symbol: "F", color: 0x4ade80, textColor: "#0f172a", dir: new THREE.Vector3(-0.95, 0, -0.3), radius: 0.4 }
        ],
        lonePairs: [new THREE.Vector3(0, 0, 1)],
        steric: 5, bonding: 4, lone: 1,
        electronGeom: "Trigonal Bipyramidal",
        molecularGeom: "See-saw",
        hybridization: "sp³d",
        angles: "102°, 173°"
      },
      XeF2: {
        name: "Xenon Difluoride",
        central: { symbol: "Xe", color: 0xa855f7, textColor: "#ffffff", radius: 0.7 },
        outer: [
          { symbol: "F", color: 0x4ade80, textColor: "#0f172a", dir: new THREE.Vector3(0, 1, 0), radius: 0.4 },
          { symbol: "F", color: 0x4ade80, textColor: "#0f172a", dir: new THREE.Vector3(0, -1, 0), radius: 0.4 }
        ],
        lonePairs: [
          new THREE.Vector3(1, 0, 0),
          new THREE.Vector3(-0.5, 0, 0.866),
          new THREE.Vector3(-0.5, 0, -0.866)
        ],
        steric: 5, bonding: 2, lone: 3,
        electronGeom: "Trigonal Bipyramidal",
        molecularGeom: "Linear",
        hybridization: "sp³d",
        angles: "180°"
      },
      SF6: {
        name: "Sulfur Hexafluoride",
        central: { symbol: "S", color: 0xeab308, textColor: "#0f172a", radius: 0.6 },
        outer: getOctahedralVectors().map(v => ({ symbol: "F", color: 0x4ade80, textColor: "#0f172a", dir: v, radius: 0.4 })),
        lonePairs: [],
        steric: 6, bonding: 6, lone: 0,
        electronGeom: "Octahedral",
        molecularGeom: "Octahedral",
        hybridization: "sp³d²",
        angles: "90°"
      },
      XeF4: {
        name: "Xenon Tetrafluoride",
        central: { symbol: "Xe", color: 0xa855f7, textColor: "#ffffff", radius: 0.7 },
        outer: [
          { symbol: "F", color: 0x4ade80, textColor: "#0f172a", dir: new THREE.Vector3(1, 0, 0), radius: 0.4 },
          { symbol: "F", color: 0x4ade80, textColor: "#0f172a", dir: new THREE.Vector3(-1, 0, 0), radius: 0.4 },
          { symbol: "F", color: 0x4ade80, textColor: "#0f172a", dir: new THREE.Vector3(0, 0, 1), radius: 0.4 },
          { symbol: "F", color: 0x4ade80, textColor: "#0f172a", dir: new THREE.Vector3(0, 0, -1), radius: 0.4 }
        ],
        lonePairs: [
          new THREE.Vector3(0, 1, 0),
          new THREE.Vector3(0, -1, 0)
        ],
        steric: 6, bonding: 4, lone: 2,
        electronGeom: "Octahedral",
        molecularGeom: "Square Planar",
        hybridization: "sp³d²",
        angles: "90°"
      }
    };

    // --- Vector Utility Generators ---
    function getTetrahedralVectors() {
      return [
        new THREE.Vector3(0, 1, 0),
        new THREE.Vector3(0.943, -0.333, 0),
        new THREE.Vector3(-0.471, -0.333, 0.816),
        new THREE.Vector3(-0.471, -0.333, -0.816)
      ];
    }

    function getTrigonalBipyramidalVectors() {
      return [
        new THREE.Vector3(0, 1, 0),
        new THREE.Vector3(0, -1, 0),
        new THREE.Vector3(1, 0, 0),
        new THREE.Vector3(-0.5, 0, 0.866),
        new THREE.Vector3(-0.5, 0, -0.866)
      ];
    }

    function getOctahedralVectors() {
      return [
        new THREE.Vector3(1, 0, 0),
        new THREE.Vector3(-1, 0, 0),
        new THREE.Vector3(0, 1, 0),
        new THREE.Vector3(0, -1, 0),
        new THREE.Vector3(0, 0, 1),
        new THREE.Vector3(0, 0, -1)
      ];
    }

    // Helper to generate a dynamic Canvas texture with the element symbol printed on top
    function createAtomTexture(symbol, bgColorHex, textColor = '#ffffff') {
      const canvas = document.createElement('canvas');
      canvas.width = 512;
      canvas.height = 256;
      const ctx = canvas.getContext('2d');

      const cssColor = '#' + bgColorHex.toString(16).padStart(6, '0');

      ctx.fillStyle = cssColor;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.font = 'Bold 110px system-ui, -apple-system, sans-serif';
      ctx.fillStyle = textColor;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';

      ctx.fillText(symbol, canvas.width * 0.25, canvas.height * 0.5);
      ctx.fillText(symbol, canvas.width * 0.75, canvas.height * 0.5);

      const texture = new THREE.CanvasTexture(canvas);
      texture.needUpdate = true;
      return texture;
    }

    // Bare text sprite without circular platform background
    function createBareTextSprite(text, textColor = '#38bdf8', fontSize = 52) {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      canvas.width = 256;
      canvas.height = 128;

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.font = \`Bold \${fontSize}px system-ui, -apple-system, sans-serif\`;
      ctx.fillStyle = textColor;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      
      // Crisp outline for readability over dark background
      ctx.strokeStyle = 'rgba(15, 23, 42, 0.9)';
      ctx.lineWidth = 6;
      ctx.strokeText(text, 128, 64);
      ctx.fillText(text, 128, 64);

      const texture = new THREE.CanvasTexture(canvas);
      const spriteMaterial = new THREE.SpriteMaterial({ map: texture, depthTest: false, depthWrite: false });
      const sprite = new THREE.Sprite(spriteMaterial);
      sprite.scale.set(0.9, 0.45, 1);
      return sprite;
    }

    // Creates dynamic curved line arc between two bond vectors
    function createAngleArcMesh(vecA, vecB, radius = 0.9, color = 0x38bdf8) {
      const angleRad = vecA.angleTo(vecB);
      const points = [];
      const segments = 32;

      const normA = vecA.clone().normalize();
      const normB = vecB.clone().normalize();

      for (let i = 0; i <= segments; i++) {
        const t = i / segments;
        const currentVec = new THREE.Vector3().addScaledVector(normA, Math.sin((1 - t) * angleRad) / Math.sin(angleRad))
                                              .addScaledVector(normB, Math.sin(t * angleRad) / Math.sin(angleRad));
        currentVec.multiplyScalar(radius);
        points.push(currentVec);
      }

      const geometry = new THREE.BufferGeometry().setFromPoints(points);
      const material = new THREE.LineBasicMaterial({ color: color, linewidth: 2, transparent: true, opacity: 0.85 });
      return new THREE.Line(geometry, material);
    }

    // --- Three.js Application State ---
    let scene, camera, renderer, controls;
    let moleculeGroup, frameGroup, lonePairsGroup, anglesGroup;
    const BOND_LENGTH = 2.2;

    function init() {
      const container = document.querySelector('.viewport-card');
      const canvas = document.getElementById('webgl-canvas');

      scene = new THREE.Scene();
      scene.background = new THREE.Color(0x0f172a);

      camera = new THREE.PerspectiveCamera(45, container.clientWidth / container.clientHeight, 0.1, 100);
      camera.position.set(0, 2, 6);

      renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: true });
      renderer.setSize(container.clientWidth, container.clientHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

      controls = new THREE.OrbitControls(camera, renderer.domElement);
      controls.enableDamping = true;
      controls.dampingFactor = 0.05;

      // Lights
      const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
      scene.add(ambientLight);

      const dirLight1 = new THREE.DirectionalLight(0xffffff, 0.8);
      dirLight1.position.set(5, 10, 7);
      scene.add(dirLight1);

      const dirLight2 = new THREE.DirectionalLight(0x38bdf8, 0.3);
      dirLight2.position.set(-5, -5, -5);
      scene.add(dirLight2);

      // Parent Groups
      moleculeGroup = new THREE.Group();
      frameGroup = new THREE.Group();
      lonePairsGroup = new THREE.Group();
      anglesGroup = new THREE.Group();
      
      scene.add(moleculeGroup);
      scene.add(frameGroup);
      scene.add(lonePairsGroup);
      scene.add(anglesGroup);

      // Event Listeners
      document.getElementById('molecule-select').addEventListener('change', (e) => loadMolecule(e.target.value));
      document.getElementById('toggle-lone-pairs').addEventListener('change', (e) => {
        lonePairsGroup.visible = e.target.checked;
      });
      document.getElementById('toggle-frame').addEventListener('change', (e) => {
        frameGroup.visible = e.target.checked;
      });
      document.getElementById('toggle-angles').addEventListener('change', (e) => {
        anglesGroup.visible = e.target.checked;
      });

      window.addEventListener('resize', onWindowResize);

      // Initial Load
      loadMolecule('CH4');
      animate();
    }

    function loadMolecule(key) {
      const data = MOLECULES[key];
      if (!data) return;

      // Clear existing meshes
      while (moleculeGroup.children.length > 0) moleculeGroup.remove(moleculeGroup.children[0]);
      while (frameGroup.children.length > 0) frameGroup.remove(frameGroup.children[0]);
      while (lonePairsGroup.children.length > 0) lonePairsGroup.remove(lonePairsGroup.children[0]);
      while (anglesGroup.children.length > 0) anglesGroup.remove(anglesGroup.children[0]);

      const domainEndpoints = [];

      // 1. Render Central Atom
      const centralGeo = new THREE.SphereGeometry(data.central.radius, 32, 32);
      const centralTexture = createAtomTexture(data.central.symbol, data.central.color, data.central.textColor);
      const centralMat = new THREE.MeshStandardMaterial({ map: centralTexture, roughness: 0.3, metalness: 0.1 });
      const centralMesh = new THREE.Mesh(centralGeo, centralMat);
      moleculeGroup.add(centralMesh);

      // 2. Render Outer Bonded Atoms & Bonds
      const outerPositions = [];
      data.outer.forEach(atom => {
        const targetPos = atom.dir.clone().normalize().multiplyScalar(BOND_LENGTH);
        domainEndpoints.push(targetPos);
        outerPositions.push(targetPos);

        const atomGeo = new THREE.SphereGeometry(atom.radius, 32, 32);
        const atomTexture = createAtomTexture(atom.symbol, atom.color, atom.textColor || '#ffffff');
        const atomMat = new THREE.MeshStandardMaterial({ map: atomTexture, roughness: 0.4 });
        const atomMesh = new THREE.Mesh(atomGeo, atomMat);
        atomMesh.position.copy(targetPos);
        atomMesh.lookAt(targetPos.clone().multiplyScalar(2));
        moleculeGroup.add(atomMesh);

        const bondVector = targetPos.clone();
        const bondLength = bondVector.length();
        const bondGeo = new THREE.CylinderGeometry(0.08, 0.08, bondLength, 16);
        const bondMat = new THREE.MeshStandardMaterial({ color: 0x94a3b8, roughness: 0.5 });
        const bondMesh = new THREE.Mesh(bondGeo, bondMat);

        bondMesh.position.copy(bondVector.clone().multiplyScalar(0.5));
        bondMesh.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), bondVector.clone().normalize());
        moleculeGroup.add(bondMesh);
      });

      // 3. Render Bare Bond Angle Text & Curvature Arc
      if (outerPositions.length >= 2) {
        const angleValues = data.angles.split(',').map(a => a.trim());
        let angleIdx = 0;

        for (let i = 0; i < outerPositions.length; i++) {
          for (let j = i + 1; j < outerPositions.length; j++) {
            const vecA = outerPositions[i].clone().normalize();
            const vecB = outerPositions[j].clone().normalize();
            const angleRad = vecA.angleTo(vecB);
            const angleDeg = Math.round((angleRad * 180) / Math.PI);

            if (outerPositions.length > 2 && angleDeg < 50) continue; 

            // Render curvature arc line at arc radius 0.95
            const ARC_RADIUS = 0.95;
            const arcMesh = createAngleArcMesh(vecA, vecB, ARC_RADIUS, 0x38bdf8);
            anglesGroup.add(arcMesh);

            // Position bare angle text right outside arc curvature (radius 1.25)
            const midVec = vecA.clone().add(vecB).normalize().multiplyScalar(1.25);
            const angleText = angleValues[angleIdx % angleValues.length] || \`\${angleDeg}°\`;
            const angleSprite = createBareTextSprite(angleText, '#38bdf8', 52);
            angleSprite.position.copy(midVec);
            anglesGroup.add(angleSprite);

            angleIdx++;
            if (outerPositions.length > 3 && angleIdx >= 2) break;
          }
          if (outerPositions.length > 3 && anglesGroup.children.length >= 4) break;
        }
      }

      // 4. Render Lone Pair Electron Density Clouds
      data.lonePairs.forEach(dir => {
        const targetPos = dir.clone().normalize().multiplyScalar(BOND_LENGTH);
        domainEndpoints.push(targetPos);

        const lobeGroup = new THREE.Group();
        const lobeGeo = new THREE.SphereGeometry(0.55, 32, 32);
        lobeGeo.scale(0.8, 1.4, 0.8);

        const lobeMat = new THREE.MeshStandardMaterial({
          color: 0x38bdf8,
          transparent: true,
          opacity: 0.45,
          roughness: 0.1,
          wireframe: false
        });

        const lobeMesh = new THREE.Mesh(lobeGeo, lobeMat);
        lobeMesh.position.set(0, 0.7, 0);
        lobeGroup.add(lobeMesh);

        lobeGroup.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), dir.clone().normalize());
        lonePairsGroup.add(lobeGroup);
      });

      // 5. Render Geometry Frame Lines
      for (let i = 0; i < domainEndpoints.length; i++) {
        for (let j = i + 1; j < domainEndpoints.length; j++) {
          const points = [domainEndpoints[i], domainEndpoints[j]];
          const lineGeo = new THREE.BufferGeometry().setFromPoints(points);
          const lineMat = new THREE.LineDashedMaterial({
            color: 0x38bdf8,
            dashSize: 0.15,
            gapSize: 0.1,
            opacity: 0.5,
            transparent: true
          });
          const line = new THREE.Line(lineGeo, lineMat);
          line.computeLineDistances();
          frameGroup.add(line);
        }
      }

      // Update HUD Info Text
      document.getElementById('info-steric').textContent = data.steric;
      document.getElementById('info-pairs').textContent = \`\${data.bonding} / \${data.lone}\`;
      document.getElementById('info-electron-geom').textContent = data.electronGeom;
      document.getElementById('info-molecular-geom').textContent = data.molecularGeom;
      document.getElementById('info-hybrid').textContent = data.hybridization;
      document.getElementById('info-angles').textContent = data.angles;

      // Sync visibility checkboxes
      lonePairsGroup.visible = document.getElementById('toggle-lone-pairs').checked;
      frameGroup.visible = document.getElementById('toggle-frame').checked;
      const angleToggle = document.getElementById('toggle-angles');
      if (angleToggle) anglesGroup.visible = angleToggle.checked;
    }

    function onWindowResize() {
      const container = document.querySelector('.viewport-card');
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    }

    function animate() {
      requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);
    }

    window.onload = init;
  </script>
</body>
</html>`,
    isCustomImport: true,
    authorEmail: "ndunj123@gmail.com",
    authorName: "Axiom Creator",
    createdAt: "2026-08-23"
  },
  {
    id: "sim-lissajous-curves",
    title: "Lissajous Curve & Harmonic Motion Simulator",
    tagline: "Parametric visualization of orthogonal simple harmonic oscillations, phase shifts, and frequency ratios",
    discipline: "physics",
    secondaryDisciplines: ["mathematics"],
    gradeLevel: ["High School (9-12)", "AP / IB STEM", "Undergraduate"],
    standards: ["HS-PS4-1", "CCSS.MATH.HSF.TF.B.5", "AP Physics 1 (Unit 6)", "AP Precalculus (Unit 1)"],
    description: "An interactive parametric Lissajous curve simulator exploring orthogonal simple harmonic oscillations. Adjust horizontal (a) and vertical (b) frequency ratios, phase difference (δ from 0° to 360°), and individual amplitudes (A, B) to trace animated parametric trajectories x(t) = A sin(a·t + δ) and y(t) = B sin(b·t). Features real-time CRT oscilloscope tracer particle, preset figures (1:1 line/circle, 1:2 parabola/figure-8, 3:2 knot, 3:4 complex), and pause/reset controls.",
    learningObjectives: [
      "Analyze the parametric superposition of two perpendicular simple harmonic oscillations x(t) and y(t)",
      "Explain how frequency ratios (a:b) determine the number of horizontal and vertical lobes/intersections",
      "Demonstrate how changing phase difference (δ) transitions a 1:1 frequency ratio from a linear diagonal (0°) to an ellipse and a circle (90°)",
      "Connect Lissajous figures to practical engineering applications in oscilloscope XY mode, signal synchronization, and audio acoustics"
    ],
    thumbnailGradient: "from-sky-600 via-indigo-700 to-slate-950",
    badgeColor: "bg-sky-500/10 text-sky-300 border-sky-500/20",
    iconName: "Activity",
    rating: 4.97,
    reviewCount: 38,
    teacherCount: 142,
    licenseType: "Academic STEM Classroom & Institutional License",
    pricing: {
      singleTeacher: 19,
      schoolDepartment: 200,
      districtUnlimited: 400
    },
    features: [
      "Interactive 2D Canvas rendering the complete parametric curve and an active glowing tracer particle",
      "Independent frequency ratio sliders for X-axis (a: 1-10) and Y-axis (b: 1-10)",
      "Full 360° phase shift slider (δ: 0° to 360°) with real-time geometric deformation",
      "Independent amplitude controls for X and Y axes (0.2 to 1.0) and variable animation playback speed",
      "One-click preset patterns: 1:1 Line (0°), 1:1 Circle (90°), 1:2 Parabola / Figure-8, 3:2 Knot, and 3:4 Complex",
      "Responsive oscilloscope dark-mode theme with pause and time-reset controls"
    ],
    parameterDefaults: {
      freqA: 1,
      freqB: 1,
      phaseDelta: 90,
      ampA: 1.0,
      ampB: 1.0,
      speed: 1.0
    },
    parameterControls: [
      {
        key: "freqA",
        label: "Frequency a (X-axis)",
        min: 1,
        max: 10,
        step: 1,
        unit: "Hz",
        description: "Oscillation frequency along the horizontal axis"
      },
      {
        key: "freqB",
        label: "Frequency b (Y-axis)",
        min: 1,
        max: 10,
        step: 1,
        unit: "Hz",
        description: "Oscillation frequency along the vertical axis"
      },
      {
        key: "phaseDelta",
        label: "Phase Difference (δ)",
        min: 0,
        max: 360,
        step: 5,
        unit: "°",
        description: "Phase shift angle between X and Y oscillations"
      }
    ],
    sampleChallenges: [
      {
        id: "ch-liss-1",
        title: "Create a Perfect 1:1 Circle",
        instruction: "Set frequency a = 1, frequency b = 1, and phase shift δ = 90° with equal amplitudes to form a circular Lissajous trajectory.",
        targetMetric: "Phase Shift",
        targetValue: 90,
        tolerance: 0.5,
        currentValueKey: "phaseDelta",
        rewardBadge: "Circle Master"
      },
      {
        id: "ch-liss-2",
        title: "Generate a Figure-8 / Parabola (1:2 Ratio)",
        instruction: "Select or set frequency a = 1 and frequency b = 2 to observe a double-loop figure-8 pattern.",
        targetMetric: "Frequency Ratio",
        targetValue: 2,
        tolerance: 0.1,
        currentValueKey: "freqB",
        rewardBadge: "Harmonic Specialist"
      },
      {
        id: "ch-liss-3",
        title: "Synthesize 3:2 Knot Geometry",
        instruction: "Configure frequency a = 3 and frequency b = 2 with δ = 90° to construct a 3-lobed harmonic weave.",
        targetMetric: "Frequency a",
        targetValue: 3,
        tolerance: 0.1,
        currentValueKey: "freqA",
        rewardBadge: "Knot Explorer"
      }
    ],
    previewFacts: [
      "Lissajous curves model the 2D path of a point experiencing simultaneous harmonic oscillations along two perpendicular axes.",
      "When the frequency ratio a:b is rational (integer ratio), the curve forms a smooth, stationary, closed loop.",
      "An oscilloscope in XY mode displays Lissajous figures to determine the unknown frequency and phase difference of an input electrical signal.",
      "Jules Antoine Lissajous first visualized these optical figures in 1857 using mirrors mounted onto vibrating tuning forks."
    ],
    isHtmlApp: true,
    htmlContent: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Lissajous Curve Simulator</title>
  <style>
    :root {
      --bg-color: #0f172a;
      --card-bg: #1e293b;
      --accent-color: #38bdf8;
      --text-color: #f8fafc;
      --text-muted: #94a3b8;
      --border-color: #334155;
    }

    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
      font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
    }

    body {
      background-color: var(--bg-color);
      color: var(--text-color);
      padding: 20px;
      display: flex;
      flex-direction: column;
      align-items: center;
      min-height: 100vh;
    }

    header {
      text-align: center;
      margin-bottom: 20px;
      max-width: 900px;
    }

    h1 {
      font-size: 2rem;
      margin-bottom: 8px;
      color: var(--accent-color);
    }

    p.subtitle {
      color: var(--text-muted);
      font-size: 0.95rem;
    }

    .container {
      display: flex;
      flex-direction: column;
      gap: 20px;
      width: 100%;
      max-width: 1100px;
    }

    @media (min-width: 850px) {
      .container {
        display: grid;
        grid-template-columns: 1fr 340px;
      }
    }

    .canvas-container {
      background-color: var(--card-bg);
      border-radius: 12px;
      padding: 16px;
      border: 1px solid var(--border-color);
      display: flex;
      flex-direction: column;
      gap: 12px;
      align-items: center;
    }

    canvas {
      background-color: #020617;
      border-radius: 8px;
      width: 100%;
      max-width: 600px;
      height: auto;
      aspect-ratio: 1 / 1;
      display: block;
    }

    .controls-panel {
      background-color: var(--card-bg);
      border-radius: 12px;
      padding: 20px;
      border: 1px solid var(--border-color);
      display: flex;
      flex-direction: column;
      gap: 16px;
    }

    .control-group {
      display: flex;
      flex-direction: column;
      gap: 6px;
    }

    .control-label {
      display: flex;
      justify-content: space-between;
      font-size: 0.85rem;
      font-weight: 600;
      color: var(--text-color);
    }

    .control-value {
      color: var(--accent-color);
    }

    input[type="range"] {
      width: 100%;
      accent-color: var(--accent-color);
    }

    select, button {
      background-color: #020617;
      color: var(--text-color);
      border: 1px solid var(--border-color);
      padding: 10px 14px;
      border-radius: 6px;
      font-size: 0.9rem;
      cursor: pointer;
      transition: background-color 0.2s, border-color 0.2s;
    }

    select:hover, button:hover {
      border-color: var(--accent-color);
    }

    .btn-group {
      display: flex;
      gap: 10px;
    }

    .btn-group button {
      flex: 1;
    }

    button.primary {
      background-color: #0284c7;
      border-color: #0284c7;
    }

    button.primary:hover {
      background-color: #0369a1;
    }

    .info-panel {
      margin-top: 20px;
      background-color: var(--card-bg);
      border-radius: 12px;
      padding: 20px;
      border: 1px solid var(--border-color);
      max-width: 1100px;
      width: 100%;
      line-height: 1.6;
    }

    .info-panel h2 {
      color: var(--accent-color);
      font-size: 1.25rem;
      margin-bottom: 10px;
    }

    .info-panel p {
      margin-bottom: 12px;
      color: var(--text-muted);
      font-size: 0.95rem;
    }

    .math-expr {
      color: var(--text-color);
      font-family: monospace;
      background-color: #020617;
      padding: 2px 6px;
      border-radius: 4px;
    }
  </style>
</head>
<body>

  <header>
    <h1>Lissajous Curve Simulator</h1>
    <p class="subtitle">Parametric visualization of orthogonal harmonic oscillations</p>
  </header>

  <div class="container">
    <div class="canvas-container">
      <canvas id="lissajousCanvas" width="600" height="600"></canvas>
    </div>

    <div class="controls-panel">
      <div class="control-group">
        <label class="control-label">Preset Patterns</label>
        <select id="presetSelect">
          <option value="custom">Custom Configuration</option>
          <option value="1:1_0">1:1 Line (δ = 0°)</option>
          <option value="1:1_90" selected>1:1 Circle (δ = 90°)</option>
          <option value="1:2_90">1:2 Parabola / Figure-8 (a:b = 1:2)</option>
          <option value="3:2_90">3:2 Knot Pattern (a:b = 3:2)</option>
          <option value="3:4_90">3:4 Complex Pattern (a:b = 3:4)</option>
        </select>
      </div>

      <div class="control-group">
        <div class="control-label">Frequency a (X-axis): <span id="valA" class="control-value">1</span></div>
        <input type="range" id="freqA" min="1" max="10" step="1" value="1">
      </div>

      <div class="control-group">
        <div class="control-label">Frequency b (Y-axis): <span id="valB" class="control-value">1</span></div>
        <input type="range" id="freqB" min="1" max="10" step="1" value="1">
      </div>

      <div class="control-group">
        <div class="control-label">Phase Shift δ: <span id="valDelta" class="control-value">90°</span></div>
        <input type="range" id="phaseDelta" min="0" max="360" step="5" value="90">
      </div>

      <div class="control-group">
        <div class="control-label">Amplitude A (X): <span id="valAmpA" class="control-value">1.0</span></div>
        <input type="range" id="ampA" min="0.2" max="1.0" step="0.1" value="1.0">
      </div>

      <div class="control-group">
        <div class="control-label">Amplitude B (Y): <span id="valAmpB" class="control-value">1.0</span></div>
        <input type="range" id="ampB" min="0.2" max="1.0" step="0.1" value="1.0">
      </div>

      <div class="control-group">
        <div class="control-label">Animation Speed: <span id="valSpeed" class="control-value">1.0x</span></div>
        <input type="range" id="speed" min="0.1" max="3.0" step="0.1" value="1.0">
      </div>

      <div class="btn-group">
        <button id="toggleBtn" class="primary">Pause</button>
        <button id="resetBtn">Reset Time</button>
      </div>
    </div>
  </div>

  <div class="info-panel">
    <h2>How Lissajous Curves Work</h2>
    <p>
      A Lissajous curve is generated by plotting two simple harmonic motions moving at right angles to one another. The motion along the horizontal axis is governed by <span class="math-expr">x(t) = A sin(a·t + δ)</span>, while the vertical axis follows <span class="math-expr">y(t) = B sin(b·t)</span>.
    </p>
    <p>
      The geometric shape depends on three factors:
    </p>
    <ul>
      <li><strong>Frequency Ratio (a:b):</strong> Determines the number of lobes or intersections in the pattern. A rational ratio yields a stable, closed loop.</li>
      <li><strong>Phase Difference (δ):</strong> Controls the rotation and symmetry of the figure. Changing δ transitions a 1:1 ratio continuously from a diagonal line to an ellipse and a circle.</li>
      <li><strong>Amplitudes (A, B):</strong> Scale the width and height of the bounding rectangle enclosing the curve.</li>
    </ul>
  </div>

  <script>
    const canvas = document.getElementById('lissajousCanvas');
    const ctx = canvas.getContext('2d');

    // Controls
    const freqAInput = document.getElementById('freqA');
    const freqBInput = document.getElementById('freqB');
    const phaseDeltaInput = document.getElementById('phaseDelta');
    const ampAInput = document.getElementById('ampA');
    const ampBInput = document.getElementById('ampB');
    const speedInput = document.getElementById('speed');
    const presetSelect = document.getElementById('presetSelect');
    const toggleBtn = document.getElementById('toggleBtn');
    const resetBtn = document.getElementById('resetBtn');

    // Display Values
    const valA = document.getElementById('valA');
    const valB = document.getElementById('valB');
    const valDelta = document.getElementById('valDelta');
    const valAmpA = document.getElementById('valAmpA');
    const valAmpB = document.getElementById('valAmpB');
    const valSpeed = document.getElementById('valSpeed');

    let t = 0;
    let isRunning = true;
    let animationFrameId;

    function getParams() {
      return {
        a: parseFloat(freqAInput.value),
        b: parseFloat(freqBInput.value),
        delta: (parseFloat(phaseDeltaInput.value) * Math.PI) / 180,
        ampA: parseFloat(ampAInput.value),
        ampB: parseFloat(ampBInput.value),
        speed: parseFloat(speedInput.value)
      };
    }

    function updateLabels() {
      valA.textContent = freqAInput.value;
      valB.textContent = freqBInput.value;
      valDelta.textContent = phaseDeltaInput.value + '°';
      valAmpA.textContent = ampAInput.value;
      valAmpB.textContent = ampBInput.value;
      valSpeed.textContent = speedInput.value + 'x';
    }

    function draw() {
      const width = canvas.width;
      const height = canvas.height;
      const centerX = width / 2;
      const centerY = height / 2;
      const scale = Math.min(width, height) * 0.4;

      const { a, b, delta, ampA, ampB, speed } = getParams();

      ctx.clearRect(0, 0, width, height);

      // Draw Grid Axes
      ctx.strokeStyle = '#1e293b';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(centerX, 0); ctx.lineTo(centerX, height);
      ctx.moveTo(0, centerY); ctx.lineTo(width, centerY);
      ctx.stroke();

      // Draw Complete Lissajous Pattern Path
      ctx.strokeStyle = '#38bdf8';
      ctx.lineWidth = 2;
      ctx.beginPath();

      const step = 0.005;
      const maxT = 2 * Math.PI; // Full period evaluation for integer ratios

      for (let tau = 0; tau <= maxT; tau += step) {
        const x = centerX + ampA * scale * Math.sin(a * tau + delta);
        const y = centerY - ampB * scale * Math.sin(b * tau);

        if (tau === 0) {
          ctx.moveTo(x, y);
        } else {
          ctx.lineTo(x, y);
        }
      }
      ctx.stroke();

      // Draw Current Tracer Head Position
      const currentX = centerX + ampA * scale * Math.sin(a * t + delta);
      const currentY = centerY - ampB * scale * Math.sin(b * t);

      ctx.fillStyle = '#f43f5e';
      ctx.beginPath();
      ctx.arc(currentX, currentY, 7, 0, 2 * Math.PI);
      ctx.fill();

      // Update Time
      if (isRunning) {
        t += 0.015 * speed;
      }

      animationFrameId = requestAnimationFrame(draw);
    }

    // Event Listeners
    function onControlChange() {
      presetSelect.value = 'custom';
      updateLabels();
    }

    [freqAInput, freqBInput, phaseDeltaInput, ampAInput, ampBInput, speedInput].forEach(input => {
      input.addEventListener('input', () => {
        updateLabels();
        if (input !== speedInput) presetSelect.value = 'custom';
      });
    });

    presetSelect.addEventListener('change', (e) => {
      const val = e.target.value;
      if (val === '1:1_0') {
        freqAInput.value = 1; freqBInput.value = 1; phaseDeltaInput.value = 0;
      } else if (val === '1:1_90') {
        freqAInput.value = 1; freqBInput.value = 1; phaseDeltaInput.value = 90;
      } else if (val === '1:2_90') {
        freqAInput.value = 1; freqBInput.value = 2; phaseDeltaInput.value = 90;
      } else if (val === '3:2_90') {
        freqAInput.value = 3; freqBInput.value = 2; phaseDeltaInput.value = 90;
      } else if (val === '3:4_90') {
        freqAInput.value = 3; freqBInput.value = 4; phaseDeltaInput.value = 90;
      }
      updateLabels();
    });

    toggleBtn.addEventListener('click', () => {
      isRunning = !isRunning;
      toggleBtn.textContent = isRunning ? 'Pause' : 'Play';
      toggleBtn.classList.toggle('primary', isRunning);
    });

    resetBtn.addEventListener('click', () => {
      t = 0;
    });

    // Initialize
    updateLabels();
    draw();
  </script>
</body>
</html>`,
    isCustomImport: true,
    authorEmail: "ndunj123@gmail.com",
    authorName: "Axiom Creator",
    createdAt: "2026-08-23"
  },
  {
    id: "sim-statistical-data-lab",
    title: "Statistical Data Lab with Dynamic Formulas",
    tagline: "Interactive analysis of central tendency, variance, dynamic formula substitutions, and multi-chart distributions",
    discipline: "mathematics",
    gradeLevel: ["Middle School (6-8)", "High School (9-12)", "AP / IB STEM", "Undergraduate"],
    standards: ["HSS-ID.A.1", "HSS-ID.A.2", "AP Statistics (Unit 1)", "CCSS.MATH.HSS.ID.A.3"],
    description: "An interactive statistical laboratory connecting empirical datasets with step-by-step dynamic mathematical formulas and multi-chart graphical representations. Generate custom discrete or continuous samples across adjustable sample sizes (n = 7 to 30) and ranges, or edit raw comma-separated values directly. Features real-time arithmetic substitution displays for Mean (μ), Median, Mode, Population Variance (σ²), Standard Deviation (σ), and Range, synchronized across 5 live Chart.js visualizations: Bar Graph, Binned Histogram, Frequency Polygon, Pie Chart, and Raw Line Graph.",
    learningObjectives: [
      "Calculate and contrast measures of central tendency (Mean, Median, Mode) and dispersion (Range, Variance, Standard Deviation)",
      "Interpret live formula substitutions to understand how each individual data point affects sum of squares Σ(x_i - μ)² and sample spread",
      "Analyze the differences between discrete and continuous distributions across binned Histograms and Frequency Polygons",
      "Evaluate the impact of outliers on resistant (Median, IQR) versus non-resistant (Mean, Standard Deviation) statistical metrics"
    ],
    thumbnailGradient: "from-sky-500 via-purple-600 to-slate-950",
    badgeColor: "bg-purple-500/10 text-purple-300 border-purple-500/20",
    iconName: "BarChart3",
    rating: 4.98,
    reviewCount: 46,
    teacherCount: 178,
    licenseType: "Academic STEM Classroom & Institutional License",
    pricing: {
      singleTeacher: 19,
      schoolDepartment: 200,
      districtUnlimited: 400
    },
    features: [
      "Live Dynamic Formula Cards showing exact mathematical formulas and real-time numeric value substitutions for Mean, Median, Mode, Variance, Std Dev, and Range",
      "Five synchronized Chart.js visualizers: Categorical Bar Chart, Binned Histogram, Frequency Polygon, Relative Frequency Pie Chart, and Line Plot",
      "Discrete and Continuous data modes with sample size controls (n = 7 to 30) and min/max value bounds",
      "Editable raw data input textarea for typing or pasting custom real-world datasets directly",
      "Random data generator with instant statistical recalculation and responsive dark-mode analytics dashboard"
    ],
    parameterDefaults: {
      sampleSize: 8,
      minValue: 1,
      maxValue: 20,
      dataType: "discrete"
    },
    parameterControls: [
      {
        key: "sampleSize",
        label: "Sample Size (n)",
        min: 7,
        max: 30,
        step: 1,
        unit: "items",
        description: "Number of data points in the sample distribution"
      },
      {
        key: "minValue",
        label: "Min Value",
        min: 0,
        max: 50,
        step: 1,
        unit: "",
        description: "Lower bound of the generated random sample"
      },
      {
        key: "maxValue",
        label: "Max Value",
        min: 10,
        max: 100,
        step: 1,
        unit: "",
        description: "Upper bound of the generated random sample"
      }
    ],
    sampleChallenges: [
      {
        id: "ch-stat-1",
        title: "Observe Outlier Sensitivity on Mean vs. Median",
        instruction: "Generate a discrete dataset, then edit the textarea to replace one value with a large outlier (e.g. 100). Observe how the Mean shifts significantly while the Median remains stable.",
        targetMetric: "Outlier Analysis",
        targetValue: 100,
        tolerance: 5,
        currentValueKey: "maxValue",
        rewardBadge: "Outlier Detective"
      },
      {
        id: "ch-stat-2",
        title: "Create a Zero-Variance Dataset",
        instruction: "Edit the dataset so all numbers are identical (e.g., 10, 10, 10, 10, 10). Verify that Variance (σ²) and Standard Deviation (σ) drop to exactly 0.",
        targetMetric: "Zero Variance",
        targetValue: 0,
        tolerance: 0.01,
        currentValueKey: "minValue",
        rewardBadge: "Variance Virtuoso"
      },
      {
        id: "ch-stat-3",
        title: "Synthesize a Multi-Modal Distribution",
        instruction: "Input a dataset with two distinct repeating values (e.g., 5, 5, 5, 15, 15, 15) and inspect the Mode calculation and Bar Graph peaks.",
        targetMetric: "Bimodal Distribution",
        targetValue: 2,
        tolerance: 0.5,
        currentValueKey: "sampleSize",
        rewardBadge: "Distribution Master"
      }
    ],
    previewFacts: [
      "The sample mean is non-resistant to extreme values, whereas the median is a resistant measure of central tendency.",
      "Standard deviation is in the same units of measurement as the original data, while variance is expressed in squared units.",
      "A frequency polygon connects the midpoints of histogram bin tops, helping compare continuous probability density functions.",
      "In a symmetric, unimodal normal distribution, the Mean, Median, and Mode are identical."
    ],
    isHtmlApp: true,
    htmlContent: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Statistical Data Lab with Dynamic Formulas</title>
  <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
  <style>
    :root {
      --bg: #0f172a;
      --card-bg: #1e293b;
      --card-border: #334155;
      --accent-cyan: #38bdf8;
      --accent-pink: #f43f5e;
      --accent-purple: #a855f7;
      --accent-green: #34d399;
      --accent-orange: #fb923c;
      --text-main: #f8fafc;
      --text-muted: #94a3b8;
    }

    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
      font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
    }

    body {
      background-color: var(--bg);
      color: var(--text-main);
      padding: 8px 12px;
      min-height: 100vh;
      box-sizing: border-box;
    }

    header {
      margin-bottom: 6px;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    header h1 {
      font-size: 1.15rem;
      font-weight: 700;
      color: var(--accent-cyan);
    }

    .dashboard-grid {
      display: grid;
      grid-template-columns: 1fr;
      gap: 8px;
    }

    @media (min-width: 1024px) {
      .dashboard-grid {
        grid-template-columns: 250px 1fr;
      }
    }

    .card {
      background: var(--card-bg);
      border: 1px solid var(--card-border);
      border-radius: 8px;
      padding: 8px 10px;
    }

    .controls-card {
      display: flex;
      flex-direction: column;
      gap: 6px;
    }

    .controls-card h2 {
      font-size: 0.95rem;
      color: var(--accent-pink);
      border-bottom: 1px solid var(--card-border);
      padding-bottom: 4px;
      margin-bottom: 2px;
    }

    .control-group {
      display: flex;
      flex-direction: column;
      gap: 2px;
    }

    .control-label {
      display: flex;
      justify-content: space-between;
      font-size: 0.76rem;
      font-weight: 600;
      color: var(--text-muted);
    }

    .control-label span.val {
      color: var(--accent-cyan);
      font-family: monospace;
      font-weight: 700;
    }

    .radio-group {
      display: flex;
      gap: 12px;
      font-size: 0.78rem;
    }

    .radio-group label {
      cursor: pointer;
      display: flex;
      align-items: center;
      gap: 4px;
    }

    input[type="range"] {
      width: 100%;
      accent-color: var(--accent-cyan);
      height: 4px;
      margin: 2px 0;
    }

    button {
      background: linear-gradient(135deg, var(--accent-purple), #7c3aed);
      color: white;
      border: none;
      padding: 6px 12px;
      border-radius: 6px;
      font-size: 0.78rem;
      font-weight: 600;
      cursor: pointer;
      transition: transform 0.1s, opacity 0.2s;
      margin-top: 2px;
    }

    button:hover { opacity: 0.9; }
    button:active { transform: scale(0.98); }

    textarea {
      background: #020617;
      border: 1px solid var(--card-border);
      color: var(--accent-cyan);
      border-radius: 6px;
      padding: 5px 7px;
      font-family: monospace;
      font-size: 0.72rem;
      resize: vertical;
      min-height: 42px;
      max-height: 54px;
    }

    .main-content {
      display: flex;
      flex-direction: column;
      gap: 8px;
    }

    /* Formulas Section */
    .formulas-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 6px;
    }

    @media (min-width: 640px) {
      .formulas-grid {
        grid-template-columns: repeat(3, 1fr);
      }
    }

    @media (min-width: 1100px) {
      .formulas-grid {
        grid-template-columns: repeat(6, 1fr);
      }
    }

    .formula-card {
      background: #020617;
      border: 1px solid var(--card-border);
      border-radius: 8px;
      padding: 7px 9px;
      display: flex;
      flex-direction: column;
      gap: 3px;
    }

    .formula-title {
      font-size: 0.72rem;
      text-transform: uppercase;
      color: var(--accent-green);
      font-weight: 700;
      letter-spacing: 0.4px;
    }

    .formula-expr {
      font-family: 'Courier New', Courier, monospace;
      font-size: 0.70rem;
      color: var(--accent-cyan);
      background: rgba(56, 189, 248, 0.05);
      padding: 2px 5px;
      border-radius: 4px;
      border: 1px dashed var(--card-border);
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .formula-substitution {
      font-family: 'Courier New', Courier, monospace;
      font-size: 0.68rem;
      color: var(--text-muted);
      word-break: break-all;
      max-height: 26px;
      overflow-y: auto;
      line-height: 1.2;
    }

    .formula-result {
      font-size: 0.96rem;
      font-weight: 700;
      color: var(--accent-pink);
      font-family: monospace;
      margin-top: auto;
    }

    /* Charts Section */
    .charts-grid {
      display: grid;
      grid-template-columns: 1fr;
      gap: 10px;
    }

    @media (min-width: 640px) {
      .charts-grid {
        grid-template-columns: repeat(2, 1fr);
      }
    }

    @media (min-width: 1100px) {
      .charts-grid {
        grid-template-columns: repeat(3, 1fr);
      }
      .chart-card.span-2 {
        grid-column: span 2;
      }
    }

    .chart-card {
      height: 215px;
      min-height: 200px;
      display: flex;
      flex-direction: column;
      padding: 10px 12px;
      border-radius: 10px;
    }

    .chart-title {
      font-size: 0.84rem;
      font-weight: 600;
      color: var(--text-main);
      margin-bottom: 6px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .canvas-holder {
      position: relative;
      flex-grow: 1;
      width: 100%;
      height: 165px;
    }
  </style>
</head>
<body>

  <header>
    <h1>📊 Statistical Data Lab (Dynamic Formulas)</h1>
  </header>

  <div class="dashboard-grid">
    <!-- Controls Panel -->
    <div class="card controls-card">
      <h2>Data Controls</h2>

      <div class="control-group">
        <div class="control-label">Data Type</div>
        <div class="radio-group">
          <label><input type="radio" name="dataType" value="discrete" checked> Discrete</label>
          <label><input type="radio" name="dataType" value="continuous"> Continuous</label>
        </div>
      </div>

      <div class="control-group">
        <div class="control-label">Sample Size (n): <span id="lblCount" class="val">8</span></div>
        <input type="range" id="paramCount" min="7" max="30" value="8">
      </div>

      <div class="control-group">
        <div class="control-label">Min Value: <span id="lblMin" class="val">1</span></div>
        <input type="range" id="paramMin" min="0" max="50" value="1">
      </div>

      <div class="control-group">
        <div class="control-label">Max Value: <span id="lblMax" class="val">20</span></div>
        <input type="range" id="paramMax" min="10" max="100" value="20">
      </div>

      <button id="btnGenerate">🎲 Generate Random Data</button>

      <div class="control-group">
        <div class="control-label">Edit Dataset (Comma Separated)</div>
        <textarea id="dataDisplay"></textarea>
      </div>
    </div>

    <!-- Main Content Panel -->
    <div class="main-content">
      <!-- Live Dynamic Formulas Panel -->
      <div class="formulas-grid">
        <!-- Mean -->
        <div class="formula-card">
          <div class="formula-title">Mean (μ)</div>
          <div class="formula-expr">μ = (Σ x_i) / n</div>
          <div id="subMean" class="formula-substitution">...</div>
          <div id="resMean" class="formula-result">= 0</div>
        </div>

        <!-- Median -->
        <div class="formula-card">
          <div class="formula-title">Median</div>
          <div class="formula-expr">Sorted Middle Position</div>
          <div id="subMedian" class="formula-substitution">...</div>
          <div id="resMedian" class="formula-result">= 0</div>
        </div>

        <!-- Mode -->
        <div class="formula-card">
          <div class="formula-title">Mode</div>
          <div class="formula-expr">Most Frequent Value(s)</div>
          <div id="subMode" class="formula-substitution">...</div>
          <div id="resMode" class="formula-result">= 0</div>
        </div>

        <!-- Variance -->
        <div class="formula-card">
          <div class="formula-title">Variance (σ²)</div>
          <div class="formula-expr">σ² = Σ(x_i - μ)² / n</div>
          <div id="subVariance" class="formula-substitution">...</div>
          <div id="resVariance" class="formula-result">= 0</div>
        </div>

        <!-- Standard Deviation -->
        <div class="formula-card">
          <div class="formula-title">Standard Deviation (σ)</div>
          <div class="formula-expr">σ = √(σ²)</div>
          <div id="subStdDev" class="formula-substitution">...</div>
          <div id="resStdDev" class="formula-result">= 0</div>
        </div>

        <!-- Range -->
        <div class="formula-card">
          <div class="formula-title">Range</div>
          <div class="formula-expr">Range = Max - Min</div>
          <div id="subRange" class="formula-substitution">...</div>
          <div id="resRange" class="formula-result">= 0</div>
        </div>
      </div>

      <!-- Charts Layout -->
      <div class="charts-grid">
        <div class="card chart-card">
          <div class="chart-title">Bar Graph (Categorical Frequencies)</div>
          <div class="canvas-holder"><canvas id="barChart"></canvas></div>
        </div>

        <div class="card chart-card">
          <div class="chart-title">Histogram (Binned Distribution)</div>
          <div class="canvas-holder"><canvas id="histogramChart"></canvas></div>
        </div>

        <div class="card chart-card">
          <div class="chart-title">Frequency Polygon</div>
          <div class="canvas-holder"><canvas id="polygonChart"></canvas></div>
        </div>

        <div class="card chart-card">
          <div class="chart-title">Pie Chart (Relative Frequencies)</div>
          <div class="canvas-holder"><canvas id="pieChart"></canvas></div>
        </div>

        <div class="card chart-card span-2">
          <div class="chart-title">Line Graph (Raw Data Points)</div>
          <div class="canvas-holder"><canvas id="lineChart"></canvas></div>
        </div>
      </div>
    </div>
  </div>

  <script>
    let dataPoints = [];
    let chartInstances = {};

    const paramCount = document.getElementById('paramCount');
    const paramMin = document.getElementById('paramMin');
    const paramMax = document.getElementById('paramMax');
    const btnGenerate = document.getElementById('btnGenerate');
    const dataDisplay = document.getElementById('dataDisplay');

    const lblCount = document.getElementById('lblCount');
    const lblMin = document.getElementById('lblMin');
    const lblMax = document.getElementById('lblMax');

    const palette = [
      '#38bdf8', '#f43f5e', '#a855f7', '#34d399', '#fb923c',
      '#eab308', '#ec4899', '#6366f1', '#14b8a6', '#f97316'
    ];

    function getSelectedDataType() {
      return document.querySelector('input[name="dataType"]:checked').value;
    }

    function generateData() {
      const n = parseInt(paramCount.value);
      const min = parseFloat(paramMin.value);
      const max = Math.max(min + 1, parseFloat(paramMax.value));
      const type = getSelectedDataType();

      dataPoints = [];
      for (let i = 0; i < n; i++) {
        let val = Math.random() * (max - min) + min;
        val = type === 'discrete' ? Math.round(val) : parseFloat(val.toFixed(2));
        dataPoints.push(val);
      }

      dataDisplay.value = dataPoints.join(', ');
      updateDashboard();
    }

    function parseInputData() {
      const raw = dataDisplay.value;
      const parsed = raw.split(',')
        .map(v => parseFloat(v.trim()))
        .filter(v => !isNaN(v));

      if (parsed.length >= 2) {
        dataPoints = parsed;
        updateDashboard();
      }
    }

    function calculateDynamicFormulas() {
      const n = dataPoints.length;
      if (n === 0) return;

      const sorted = [...dataPoints].sort((a, b) => a - b);
      
      // 1. Mean
      const sum = dataPoints.reduce((acc, v) => acc + v, 0);
      const mean = sum / n;
      document.getElementById('subMean').textContent = \`(\${dataPoints.join(' + ')}) / \${n}\`;
      document.getElementById('resMean').textContent = \`= \${mean.toFixed(2)}\`;

      // 2. Median
      let median;
      if (n % 2 !== 0) {
        const midIdx = Math.floor(n / 2);
        median = sorted[midIdx];
        document.getElementById('subMedian').textContent = \`Sorted: [\${sorted.join(', ')}]\\nMiddle: index \${midIdx + 1}\`;
      } else {
        const midIdx2 = n / 2;
        const midIdx1 = midIdx2 - 1;
        median = (sorted[midIdx1] + sorted[midIdx2]) / 2;
        document.getElementById('subMedian').textContent = \`Avg index \${midIdx1 + 1} (\${sorted[midIdx1]}) & \${midIdx2 + 1} (\${sorted[midIdx2]})\`;
      }
      document.getElementById('resMedian').textContent = \`= \${median.toFixed(2)}\`;

      // 3. Mode
      const counts = {};
      let maxFreq = 0;
      dataPoints.forEach(v => {
        counts[v] = (counts[v] || 0) + 1;
        if (counts[v] > maxFreq) maxFreq = counts[v];
      });

      let modes = [];
      if (maxFreq > 1) {
        modes = Object.keys(counts).filter(k => counts[k] === maxFreq).map(Number);
      }
      const freqText = Object.entries(counts).map(([k, v]) => \`\${k}:\${v}x\`).join(', ');
      document.getElementById('subMode').textContent = \`{ \${freqText} }\`;
      document.getElementById('resMode').textContent = modes.length > 0 ? \`= \${modes.join(', ')} (freq: \${maxFreq})\` : '= No Mode (unique)';

      // 4. Variance
      const sqDiffs = dataPoints.map(v => Math.pow(v - mean, 2));
      const variance = sqDiffs.reduce((acc, v) => acc + v, 0) / n;
      const sqDiffsFormatted = sqDiffs.map(v => v.toFixed(1)).join(' + ');
      document.getElementById('subVariance').textContent = \`[ \${sqDiffsFormatted} ] / \${n}\`;
      document.getElementById('resVariance').textContent = \`= \${variance.toFixed(2)}\`;

      // 5. Standard Deviation
      const stdDev = Math.sqrt(variance);
      document.getElementById('subStdDev').textContent = \`√(\${variance.toFixed(2)})\`;
      document.getElementById('resStdDev').textContent = \`= \${stdDev.toFixed(2)}\`;

      // 6. Range
      const minVal = sorted[0];
      const maxVal = sorted[n - 1];
      const range = maxVal - minVal;
      document.getElementById('subRange').textContent = \`\${maxVal} - \${minVal}\`;
      document.getElementById('resRange').textContent = \`= \${range.toFixed(2)}\`;
    }

    function buildFrequencies() {
      const counts = {};
      dataPoints.forEach(v => counts[v] = (counts[v] || 0) + 1);
      const labels = Object.keys(counts).sort((a, b) => Number(a) - Number(b));
      const values = labels.map(k => counts[k]);
      return { labels, values };
    }

    function buildHistogramBins(binCount = 5) {
      const min = Math.min(...dataPoints);
      const max = Math.max(...dataPoints);
      const step = (max - min) / binCount || 1;

      const bins = Array(binCount).fill(0);
      const labels = [];

      for (let i = 0; i < binCount; i++) {
        const bMin = min + i * step;
        const bMax = min + (i + 1) * step;
        labels.push(\`\${bMin.toFixed(1)}-\${bMax.toFixed(1)}\`);
      }

      dataPoints.forEach(v => {
        let idx = Math.floor((v - min) / step);
        if (idx >= binCount) idx = binCount - 1;
        bins[idx]++;
      });

      return { labels, bins };
    }

    function renderCharts() {
      const freq = buildFrequencies();
      const hist = buildHistogramBins(5);

      const commonOptions = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false },
          tooltip: { padding: 6, bodyFont: { size: 11 }, titleFont: { size: 11 } }
        },
        scales: {
          x: { ticks: { color: '#94a3b8', font: { size: 10 }, maxRotation: 0 }, grid: { color: '#1e293b' } },
          y: { ticks: { color: '#94a3b8', font: { size: 10 }, precision: 0 }, grid: { color: '#1e293b' } }
        }
      };

      // 1. Bar Chart
      if (chartInstances.bar) chartInstances.bar.destroy();
      chartInstances.bar = new Chart(document.getElementById('barChart'), {
        type: 'bar',
        data: {
          labels: freq.labels,
          datasets: [{ data: freq.values, backgroundColor: palette, borderRadius: 5 }]
        },
        options: commonOptions
      });

      // 2. Histogram
      if (chartInstances.histogram) chartInstances.histogram.destroy();
      chartInstances.histogram = new Chart(document.getElementById('histogramChart'), {
        type: 'bar',
        data: {
          labels: hist.labels,
          datasets: [{
            data: hist.bins,
            backgroundColor: '#a855f7',
            barPercentage: 1.0,
            categoryPercentage: 1.0,
            borderWidth: 1,
            borderColor: '#0f172a'
          }]
        },
        options: commonOptions
      });

      // 3. Frequency Polygon
      if (chartInstances.polygon) chartInstances.polygon.destroy();
      chartInstances.polygon = new Chart(document.getElementById('polygonChart'), {
        type: 'line',
        data: {
          labels: ['Start', ...hist.labels, 'End'],
          datasets: [{
            data: [0, ...hist.bins, 0],
            borderColor: '#34d399',
            backgroundColor: 'rgba(52, 211, 153, 0.2)',
            fill: true,
            tension: 0.2,
            pointRadius: 4
          }]
        },
        options: commonOptions
      });

      // 4. Pie Chart
      if (chartInstances.pie) chartInstances.pie.destroy();
      chartInstances.pie = new Chart(document.getElementById('pieChart'), {
        type: 'pie',
        data: {
          labels: freq.labels,
          datasets: [{ data: freq.values, backgroundColor: palette }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              position: 'right',
              labels: { color: '#f8fafc', boxWidth: 10, font: { size: 10 }, padding: 4 }
            }
          }
        }
      });

      // 5. Line Chart
      if (chartInstances.line) chartInstances.line.destroy();
      chartInstances.line = new Chart(document.getElementById('lineChart'), {
        type: 'line',
        data: {
          labels: dataPoints.map((_, i) => \`#\${i + 1}\`),
          datasets: [{
            data: dataPoints,
            borderColor: '#38bdf8',
            backgroundColor: 'rgba(56, 189, 248, 0.1)',
            fill: true,
            tension: 0.3,
            pointRadius: 4
          }]
        },
        options: commonOptions
      });
    }

    function updateDashboard() {
      calculateDynamicFormulas();
      renderCharts();
    }

    // Event Listeners
    [paramCount, paramMin, paramMax].forEach(elem => {
      elem.addEventListener('input', () => {
        lblCount.textContent = paramCount.value;
        lblMin.textContent = paramMin.value;
        lblMax.textContent = paramMax.value;
        generateData();
      });
    });

    document.querySelectorAll('input[name="dataType"]').forEach(elem => {
      elem.addEventListener('change', generateData);
    });

    btnGenerate.addEventListener('click', generateData);
    dataDisplay.addEventListener('input', parseInputData);

    // Initial Run
    generateData();
  </script>
</body>
</html>`,
    isCustomImport: true,
    authorEmail: "ndunj123@gmail.com",
    authorName: "Axiom Creator",
    createdAt: "2026-08-23"
  },
  {
    id: "sim-quadrilateral-ptolemy-lab",
    title: "Dynamic Quadrilateral Explorer & Ptolemy Lab",
    tagline: "Interactive geometric quadrilateral classification, angle sums, area proofs, and cyclic Ptolemy's Theorem verification",
    discipline: "mathematics",
    gradeLevel: ["Middle School (6-8)", "High School (9-12)", "AP / IB STEM", "Undergraduate"],
    standards: ["CCSS.MATH.HSG.CO.C.11", "CCSS.MATH.HSG.C.A.3", "CCSS.MATH.HSG.GPE.B.7", "AP / IB Geometry"],
    description: "An interactive computational geometry and cyclic polygon laboratory. Explore squares, rectangles, rhombi, parallelograms, kites, trapezoids, and general or concave quadrilaterals with live angle arcs, diagonals, and dynamic area computations (Shoelace formula and geometric bases). Switch to the Cyclic Quadrilaterals & Ptolemy tab to drag vertices along a circumcircle, proving Ptolemy's Theorem ((AB × CD) + (BC × AD) = AC × BD), supplementary opposite angle theorems (∠A + ∠C = 180°), and Brahmagupta's cyclic quadrilateral area formula.",
    learningObjectives: [
      "Classify quadrilaterals based on side lengths, parallelism, perpendicularity, and interior angle measurements",
      "Investigate area formulas using base-height methods, diagonal products, and coordinate Shoelace polygon algorithms",
      "Verify Ptolemy's Theorem dynamically for cyclic quadrilaterals inscribed in a circumcircle",
      "Confirm that opposite angles in cyclic quadrilaterals are supplementary (sum to 180°)",
      "Calculate the area of cyclic quadrilaterals using Brahmagupta's semi-perimeter formula"
    ],
    thumbnailGradient: "from-cyan-500 via-blue-600 to-indigo-950",
    badgeColor: "bg-cyan-500/10 text-cyan-300 border-cyan-500/20",
    iconName: "Shapes",
    rating: 4.99,
    reviewCount: 52,
    teacherCount: 214,
    licenseType: "Academic STEM Classroom & Institutional License",
    pricing: {
      singleTeacher: 19,
      schoolDepartment: 200,
      districtUnlimited: 400
    },
    features: [
      "Interactive Draggable Vertices (A, B, C, D) with real-time automatic shape classification badge (Square, Rectangle, Rhombus, Parallelogram, Kite, Trapezoid, Triangle, Bowtie/Concave)",
      "Real-time geometric property overlays: angle arcs, side lengths, diagonal lengths, perimeter, and area",
      "Live formula plug-in card showing step-by-step numerical substitutions for area formulas and the Shoelace algorithm",
      "Dedicated Cyclic Quadrilateral & Ptolemy's Theorem laboratory tab with draggable circumcircle vertices",
      "Live mathematical verification of Ptolemy's diagonal-side product identity ((AB × CD) + (BC × AD) = AC × BD)",
      "Brahmagupta's formula solver for cyclic quadrilaterals with semi-perimeter calculation"
    ],
    parameterDefaults: {
      presetShape: "rectangle",
      showAngles: true,
      showDiagonals: true,
      showSides: true,
      showFormula: true
    },
    parameterControls: [
      {
        key: "presetShape",
        label: "Shape Preset",
        min: 0,
        max: 6,
        step: 1,
        unit: "",
        description: "Choose preset geometric shape (Square, Rectangle, Rhombus, Parallelogram, Kite, Trapezoid, General)"
      }
    ],
    sampleChallenges: [
      {
        id: "ch-quad-1",
        title: "Verify Ptolemy's Theorem on a Cyclic Quadrilateral",
        instruction: "Switch to the Cyclic Quadrilateral tab and drag vertex A around the circle. Confirm that (AB × CD) + (BC × AD) remains exactly equal to AC × BD.",
        targetMetric: "Ptolemy Difference",
        targetValue: 0,
        tolerance: 0.01,
        currentValueKey: "presetShape",
        rewardBadge: "Ptolemy Master"
      },
      {
        id: "ch-quad-2",
        title: "Construct a Degenerate Triangle",
        instruction: "In the Explorer tab, drag vertex C so that vertices B, C, and D become collinear (angle ∠C = 180°). Observe the badge classify it as a Triangle.",
        targetMetric: "Collinear Angle",
        targetValue: 180,
        tolerance: 1,
        currentValueKey: "presetShape",
        rewardBadge: "Geometry Sleuth"
      },
      {
        id: "ch-quad-3",
        title: "Prove Opposite Angles Sum to 180°",
        instruction: "In the Cyclic Quadrilateral tab, drag vertices B and D to various positions and observe that ∠A + ∠C = 180° and ∠B + ∠D = 180° always holds.",
        targetMetric: "Supplementary Sum",
        targetValue: 180,
        tolerance: 0.5,
        currentValueKey: "presetShape",
        rewardBadge: "Cyclic Scholar"
      }
    ],
    previewFacts: [
      "A quadrilateral is cyclic if and only if its opposite angles are supplementary (sum to 180°).",
      "Ptolemy's Theorem states that for any cyclic quadrilateral, the product of the diagonals equals the sum of the products of opposite sides.",
      "Brahmagupta's Formula generalizes Heron's formula to find the exact area of any cyclic quadrilateral from its four side lengths.",
      "The Shoelace Formula calculates polygon area in Cartesian coordinates by evaluating cross products of consecutive vertex pairs."
    ],
    isHtmlApp: true,
    htmlContent: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Dynamic Quadrilateral Explorer & Ptolemy Lab</title>
  <style>
    :root {
      --bg-color: #0f172a;
      --card-bg: #1e293b;
      --accent: #38bdf8;
      --accent-hover: #0284c7;
      --text-main: #f8fafc;
      --text-muted: #94a3b8;
      --border-color: #334155;
      --panel-bg: #0f172a;
    }

    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
    }

    body {
      background-color: var(--bg-color);
      color: var(--text-main);
      padding: 20px;
      line-height: 1.5;
    }

    .container {
      max-width: 1100px;
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      gap: 20px;
    }

    header {
      text-align: center;
      padding: 10px 0;
      border-bottom: 1px solid var(--border-color);
    }

    header h1 {
      font-size: 1.8rem;
      color: var(--accent);
    }

    .tabs {
      display: flex;
      gap: 10px;
      justify-content: center;
      margin-bottom: 10px;
    }

    .tab-btn {
      background-color: var(--card-bg);
      color: var(--text-main);
      border: 1px solid var(--border-color);
      padding: 10px 20px;
      border-radius: 6px;
      cursor: pointer;
      font-weight: 600;
      transition: all 0.2s ease;
    }

    .tab-btn.active, .tab-btn:hover {
      background-color: var(--accent);
      color: #000;
      border-color: var(--accent);
    }

    .tab-content {
      display: none;
    }

    .tab-content.active {
      display: flex;
      flex-direction: column;
      gap: 20px;
    }

    .app-layout {
      display: grid;
      grid-template-columns: 1fr 340px;
      gap: 20px;
    }

    @media (max-width: 850px) {
      .app-layout {
        grid-template-columns: 1fr;
      }
    }

    .canvas-card {
      background-color: var(--card-bg);
      border: 1px solid var(--border-color);
      border-radius: 8px;
      padding: 15px;
      display: flex;
      flex-direction: column;
      align-items: center;
      position: relative;
    }

    canvas {
      background-color: var(--panel-bg);
      border-radius: 6px;
      border: 1px solid var(--border-color);
      cursor: crosshair;
      touch-action: none;
    }

    .controls-panel {
      background-color: var(--card-bg);
      border: 1px solid var(--border-color);
      border-radius: 8px;
      padding: 15px;
      display: flex;
      flex-direction: column;
      gap: 15px;
      max-height: 650px;
      overflow-y: auto;
    }

    .control-group {
      display: flex;
      flex-direction: column;
      gap: 5px;
    }

    .control-group label {
      font-size: 0.85rem;
      color: var(--text-muted);
      display: flex;
      justify-content: space-between;
    }

    select {
      width: 100%;
      accent-color: var(--accent);
      background-color: var(--panel-bg);
      color: var(--text-main);
      border: 1px solid var(--border-color);
      padding: 8px;
      border-radius: 4px;
    }

    .checkbox-group {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 8px;
    }

    .checkbox-item {
      display: flex;
      align-items: center;
      gap: 6px;
      font-size: 0.85rem;
    }

    .metrics-card {
      background-color: var(--panel-bg);
      border: 1px solid var(--border-color);
      border-radius: 6px;
      padding: 10px;
      font-family: monospace;
      font-size: 0.85rem;
      display: flex;
      flex-direction: column;
      gap: 6px;
    }

    .metrics-title {
      font-weight: bold;
      color: var(--accent);
      border-bottom: 1px solid var(--border-color);
      padding-bottom: 4px;
    }

    .shape-badge {
      font-size: 1.1rem;
      font-weight: bold;
      color: #38bdf8;
      background: rgba(56, 189, 248, 0.1);
      border: 1px solid rgba(56, 189, 248, 0.3);
      padding: 8px 10px;
      border-radius: 4px;
      text-align: center;
    }

    .theory-card {
      background-color: var(--card-bg);
      border: 1px solid var(--border-color);
      border-radius: 8px;
      padding: 20px;
    }

    .theory-card h2 {
      color: var(--accent);
      margin-bottom: 10px;
    }

    .theory-card h3 {
      margin-top: 15px;
      margin-bottom: 5px;
      font-size: 1.1rem;
    }

    .theory-card p, .theory-card ul {
      font-size: 0.95rem;
      color: var(--text-muted);
      margin-bottom: 10px;
    }

    .theory-card ul {
      padding-left: 20px;
    }

    .formula-box {
      background-color: var(--panel-bg);
      border-left: 3px solid var(--accent);
      padding: 10px;
      margin: 10px 0;
      font-family: monospace;
    }
  </style>
</head>
<body>

<div class="container">
  <header>
    <h1>Dynamic Quadrilateral Explorer</h1>
  </header>

  <div class="tabs">
    <button class="tab-btn active" onclick="switchTab('explorer')">Quadrilateral Explorer</button>
    <button class="tab-btn" onclick="switchTab('cyclic')">Cyclic Quadrilaterals & Ptolemy</button>
  </div>

  <!-- TAB 1: QUADRILATERAL EXPLORER -->
  <div id="tab-explorer" class="tab-content active">
    <div class="app-layout">
      <div class="canvas-card">
        <canvas id="quadCanvas" width="600" height="500"></canvas>
      </div>

      <div class="controls-panel">
        <div class="control-group">
          <label for="shapeSelect">Shape Preset Base</label>
          <select id="shapeSelect" onchange="onShapeChange()">
            <option value="square">Square</option>
            <option value="rectangle" selected>Rectangle</option>
            <option value="rhombus">Rhombus</option>
            <option value="parallelogram">Parallelogram</option>
            <option value="kite">Kite</option>
            <option value="trapezoid">Trapezoid</option>
            <option value="general">General Quadrilateral</option>
          </select>
        </div>

        <div class="shape-badge" id="detectedShapeBadge">
          Rectangle
        </div>

        <div class="checkbox-group">
          <div class="checkbox-item">
            <input type="checkbox" id="chkAngles" checked onchange="drawQuad()">
            <label for="chkAngles">Angles Arcs</label>
          </div>
          <div class="checkbox-item">
            <input type="checkbox" id="chkDiagonals" checked onchange="drawQuad()">
            <label for="chkDiagonals">Diagonals</label>
          </div>
          <div class="checkbox-item">
            <input type="checkbox" id="chkSides" checked onchange="drawQuad()">
            <label for="chkSides">Side Lengths</label>
          </div>
          <div class="checkbox-item">
            <input type="checkbox" id="chkFormula" checked onchange="drawQuad()">
            <label for="chkFormula">Formulas</label>
          </div>
        </div>

        <div class="metrics-card">
          <div class="metrics-title">Geometric Properties</div>
          <div id="metricPerimeter">Perimeter: -</div>
          <div id="metricArea">Area: -</div>
          <div id="metricDiagonals">Diagonals: -</div>
          <div id="metricAngles">Angles: -</div>
        </div>

        <div class="metrics-card">
          <div class="metrics-title">Live Formula Plug-in</div>
          <div id="formulaSubstitution" style="white-space: pre-wrap;">-</div>
        </div>
      </div>
    </div>
  </div>

  <!-- TAB 2: CYCLIC QUADRILATERALS -->
  <div id="tab-cyclic" class="tab-content">
    <div class="app-layout">
      <div class="canvas-card">
        <canvas id="cyclicCanvas" width="600" height="500"></canvas>
      </div>

      <div class="controls-panel">
        <div class="control-group">
          <label>Drag Vertices A, B, C, or D along the circle boundary to inspect Ptolemy's Theorem and angles.</label>
        </div>

        <div class="metrics-card">
          <div class="metrics-title">Ptolemy's Verification</div>
          <div id="ptolemyLeft">(AB × CD) + (BC × AD): -</div>
          <div id="ptolemyRight">AC × BD: -</div>
          <div id="ptolemyDiff">Difference: 0.00</div>
        </div>

        <div class="metrics-card">
          <div class="metrics-title">Opposite Angle Verification</div>
          <div id="angleSum1">∠A + ∠C = 180°</div>
          <div id="angleSum2">∠B + ∠D = 180°</div>
        </div>

        <div class="metrics-card">
          <div class="metrics-title">Brahmagupta's Area</div>
          <div id="brahmaguptaArea">Area: -</div>
        </div>
      </div>
    </div>

    <div class="theory-card">
      <h2>Cyclic Quadrilaterals & Ptolemy's Theorem</h2>
      <p>A quadrilateral is <strong>cyclic</strong> if all four of its vertices lie on a single circumcircle.</p>
      
      <h3>Key Properties</h3>
      <ul>
        <li><strong>Supplementary Opposite Angles:</strong> ∠A + ∠C = 180° and ∠B + ∠D = 180°.</li>
        <li><strong>Ptolemy's Theorem:</strong> Product of diagonals equals the sum of products of opposite sides:
          <div class="formula-box">(AB × CD) + (BC × AD) = AC × BD</div>
        </li>
        <li><strong>Brahmagupta's Formula:</strong> For semi-perimeter s = (a + b + c + d) / 2:
          <div class="formula-box">Area = √((s - a)(s - b)(s - c)(s - d))</div>
        </li>
      </ul>
    </div>
  </div>
</div>

<script>
// --- TAB NAVIGATION ---
function switchTab(tabId) {
  document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
  document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));
  
  if(tabId === 'explorer') {
    document.querySelectorAll('.tab-btn')[0].classList.add('active');
    document.getElementById('tab-explorer').classList.add('active');
    drawQuad();
  } else {
    document.querySelectorAll('.tab-btn')[1].classList.add('active');
    document.getElementById('tab-cyclic').classList.add('active');
    drawCyclic();
  }
}

// --- QUADRILATERAL EXPLORER ---
const canvas = document.getElementById('quadCanvas');
const ctx = canvas.getContext('2d');

let vertices = {
  A: {x: 180, y: 160},
  B: {x: 420, y: 160},
  C: {x: 420, y: 340},
  D: {x: 180, y: 340}
};

let activeVertex = null;

function setPreset(type) {
  const cx = 300, cy = 250;
  if(type === 'square') {
    const s = 90;
    vertices = { A:{x:cx-s, y:cy-s}, B:{x:cx+s, y:cy-s}, C:{x:cx+s, y:cy+s}, D:{x:cx-s, y:cy+s} };
  } else if(type === 'rectangle') {
    const w = 130, h = 80;
    vertices = { A:{x:cx-w, y:cy-h}, B:{x:cx+w, y:cy-h}, C:{x:cx+w, y:cy+h}, D:{x:cx-w, y:cy+h} };
  } else if(type === 'rhombus') {
    const dx = 120, dy = 80;
    vertices = { A:{x:cx, y:cy-dy}, B:{x:cx+dx, y:cy}, C:{x:cx, y:cy+dy}, D:{x:cx-dx, y:cy} };
  } else if(type === 'parallelogram') {
    vertices = { A:{x:cx-110, y:cy-70}, B:{x:cx+70, y:cy-70}, C:{x:cx+110, y:cy+70}, D:{x:cx-70, y:cy+70} };
  } else if(type === 'kite') {
    vertices = { A:{x:cx, y:cy-120}, B:{x:cx+90, y:cy-20}, C:{x:cx, y:cy+110}, D:{x:cx-90, y:cy-20} };
  } else if(type === 'trapezoid') {
    vertices = { A:{x:cx-60, y:cy-70}, B:{x:cx+60, y:cy-70}, C:{x:cx+130, y:cy+70}, D:{x:cx-130, y:cy+70} };
  } else if(type === 'general') {
    vertices = { A:{x:cx-90, y:cy-90}, B:{x:cx+110, y:cy-60}, C:{x:cx+80, y:cy+90}, D:{x:cx-110, y:cy+50} };
  }
}

function dist(p1, p2) {
  return Math.hypot(p2.x - p1.x, p2.y - p1.y);
}

function getAngle(P1, P2, P3) {
  const a = dist(P2, P3);
  const c = dist(P2, P1);
  const b = dist(P1, P3);
  if(a === 0 || c === 0) return 0;
  const val = (a*a + c*c - b*b) / (2 * a * c);
  return Math.acos(Math.max(-1, Math.min(1, val))) * (180 / Math.PI);
}

function isParallel(p1, p2, p3, p4, tol=0.08) {
  const dx1 = p2.x - p1.x, dy1 = p2.y - p1.y;
  const dx2 = p4.x - p3.x, dy2 = p4.y - p3.y;
  const cross = Math.abs(dx1 * dy2 - dy1 * dx2);
  const len1 = Math.hypot(dx1, dy1);
  const len2 = Math.hypot(dx2, dy2);
  if(len1 === 0 || len2 === 0) return false;
  return (cross / (len1 * len2)) < tol;
}

function lineIntersect(p1, p2, p3, p4) {
  const ccw = (A, B, C) => (C.y - A.y) * (B.x - A.x) > (B.y - A.y) * (C.x - A.x);
  return (ccw(p1, p3, p4) !== ccw(p2, p3, p4)) && (ccw(p1, p2, p3) !== ccw(p1, p2, p4));
}

function crossProduct(p1, p2, p3) {
  return (p2.x - p1.x) * (p3.y - p1.y) - (p2.y - p1.y) * (p3.x - p1.x);
}

function classifyShape() {
  const {A, B, C, D} = vertices;
  const angA = getAngle(D, A, B), angB = getAngle(A, B, C);
  const angC = getAngle(B, C, D), angD = getAngle(C, D, A);

  // STRICT REQUIREMENT: Detect Triangle if any angle is exactly 180 degrees
  const isExactly180 = (a) => Math.round(a) === 180;
  if (isExactly180(angA) || isExactly180(angB) || isExactly180(angC) || isExactly180(angD)) {
    return "Triangle";
  }

  // Check for Self-Intersecting / Bowtie
  if (lineIntersect(A, B, C, D) || lineIntersect(B, C, D, A)) {
    return "Complex / Self-Intersecting Quadrilateral (Bowtie)";
  }

  // Check for Concave Quadrilateral using cross product winding direction
  const cp1 = crossProduct(D, A, B);
  const cp2 = crossProduct(A, B, C);
  const cp3 = crossProduct(B, C, D);
  const cp4 = crossProduct(C, D, A);
  const hasPos = (cp1 > 0 || cp2 > 0 || cp3 > 0 || cp4 > 0);
  const hasNeg = (cp1 < 0 || cp2 < 0 || cp3 < 0 || cp4 < 0);
  if (hasPos && hasNeg) {
    return "Concave Quadrilateral";
  }

  const ab = dist(A, B), bc = dist(B, C), cd = dist(C, D), da = dist(D, A);
  const sidesEqual = (s1, s2, tol=6) => Math.abs(s1 - s2) < tol;
  const isRight = (a, tol=5) => Math.abs(a - 90) < tol;

  const ab_cd_par = isParallel(A, B, D, C);
  const ad_bc_par = isParallel(A, D, B, C);

  const allSidesEqual = sidesEqual(ab, bc) && sidesEqual(bc, cd) && sidesEqual(cd, da);
  const allRight = isRight(angA) && isRight(angB) && isRight(angC) && isRight(angD);

  if (ab_cd_par && ad_bc_par) {
    if (allSidesEqual && allRight) return "Square";
    if (allRight) return "Rectangle";
    if (allSidesEqual) return "Rhombus";
    return "Parallelogram";
  }

  if (ab_cd_par || ad_bc_par) {
    const isIso = ab_cd_par ? sidesEqual(da, bc) : sidesEqual(ab, cd);
    return isIso ? "Isosceles Trapezoid" : "Trapezoid";
  }

  const isKite = (sidesEqual(ab, bc) && sidesEqual(cd, da)) || (sidesEqual(ab, da) && sidesEqual(bc, cd));
  if (isKite) return "Kite";

  return "General Quadrilateral";
}

function calculateAreaShoelace() {
  const {A, B, C, D} = vertices;
  return 0.5 * Math.abs(
    (A.x*B.y + B.x*C.y + C.x*D.y + D.x*A.y) - 
    (B.x*A.y + C.x*B.y + D.x*C.y + A.x*D.y)
  ) / 100;
}

function drawAngleArc(P1, P2, P3, angleVal) {
  if (isNaN(angleVal) || angleVal < 1 || Math.abs(angleVal - 180) < 1) return;
  const startAng = Math.atan2(P1.y - P2.y, P1.x - P2.x);
  let endAng = Math.atan2(P3.y - P2.y, P3.x - P2.x);
  
  let diff = endAng - startAng;
  while (diff < 0) diff += Math.PI * 2;
  while (diff > Math.PI * 2) diff -= Math.PI * 2;

  let counterClockwise = diff > Math.PI;

  const r = 22;
  ctx.strokeStyle = '#f59e0b';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.arc(P2.x, P2.y, r, startAng, endAng, counterClockwise);
  ctx.stroke();

  let midAng = startAng + (counterClockwise ? (diff - Math.PI * 2) : diff) / 2;
  const textDist = 38;
  const tx = P2.x + Math.cos(midAng) * textDist;
  const ty = P2.y + Math.sin(midAng) * textDist;

  ctx.fillStyle = '#f59e0b';
  ctx.font = 'bold 12px sans-serif';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(\`\${angleVal.toFixed(0)}°\`, tx, ty);
}

function drawQuad() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  
  const {A, B, C, D} = vertices;
  const detectedType = classifyShape();
  document.getElementById('detectedShapeBadge').innerText = detectedType;

  // Grid
  ctx.strokeStyle = '#1e293b';
  ctx.lineWidth = 1;
  for(let x=0; x<canvas.width; x+=30) { ctx.beginPath(); ctx.moveTo(x,0); ctx.lineTo(x,canvas.height); ctx.stroke(); }
  for(let y=0; y<canvas.height; y+=30) { ctx.beginPath(); ctx.moveTo(0,y); ctx.lineTo(canvas.width,y); ctx.stroke(); }

  // Diagonals (hide if degenerate triangle)
  if(document.getElementById('chkDiagonals').checked && detectedType !== "Triangle") {
    ctx.strokeStyle = '#64748b';
    ctx.setLineDash([5, 5]);
    ctx.beginPath(); ctx.moveTo(A.x, A.y); ctx.lineTo(C.x, C.y); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(B.x, B.y); ctx.lineTo(D.x, D.y); ctx.stroke();
    ctx.setLineDash([]);
  }

  // Polygon
  ctx.strokeStyle = '#38bdf8';
  ctx.fillStyle = 'rgba(56, 189, 248, 0.12)';
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(A.x, A.y);
  ctx.lineTo(B.x, B.y);
  ctx.lineTo(C.x, C.y);
  ctx.lineTo(D.x, D.y);
  ctx.closePath();
  ctx.fill('evenodd');
  ctx.stroke();

  // Metrics
  const ab = dist(A,B)/10, bc = dist(B,C)/10, cd = dist(C,D)/10, da = dist(D,A)/10;
  const d1 = dist(A,C)/10, d2 = dist(B,D)/10;
  const angA = getAngle(D, A, B), angB = getAngle(A, B, C);
  const angC = getAngle(B, C, D), angD = getAngle(C, D, A);
  const area = calculateAreaShoelace();
  const perimeter = ab + bc + cd + da;

  // Draw Angle Arcs
  if(document.getElementById('chkAngles').checked) {
    drawAngleArc(D, A, B, angA);
    drawAngleArc(A, B, C, angB);
    drawAngleArc(B, C, D, angC);
    drawAngleArc(C, D, A, angD);
  }

  // Side Labels
  if(document.getElementById('chkSides').checked) {
    const drawSideLabel = (p1, p2, val) => {
      if (val < 0.5) return;
      const mx = (p1.x + p2.x) / 2;
      const my = (p1.y + p2.y) / 2;
      ctx.fillStyle = '#94a3b8';
      ctx.font = '12px monospace';
      ctx.textAlign = 'center';
      ctx.fillText(\`\${val.toFixed(1)}\`, mx, my - 6);
    };
    drawSideLabel(A, B, ab);
    drawSideLabel(B, C, bc);
    drawSideLabel(C, D, cd);
    drawSideLabel(D, A, da);
  }

  // Vertices
  const pts = {A, B, C, D};
  for(let key in pts) {
    ctx.fillStyle = '#f8fafc';
    ctx.beginPath();
    ctx.arc(pts[key].x, pts[key].y, 6, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#38bdf8';
    ctx.font = 'bold 14px sans-serif';
    ctx.textAlign = 'left';
    ctx.fillText(key, pts[key].x - 12, pts[key].y - 12);
  }

  // Update Data Cards
  document.getElementById('metricPerimeter').innerText = \`Perimeter: \${perimeter.toFixed(1)} unit\`;
  document.getElementById('metricArea').innerText = \`Area: \${area.toFixed(1)} sq unit\`;
  document.getElementById('metricDiagonals').innerText = detectedType === "Triangle" 
    ? \`Diagonals: N/A (Degenerate Triangle)\`
    : \`d1 (AC): \${d1.toFixed(1)}, d2 (BD): \${d2.toFixed(1)}\`;
  document.getElementById('metricAngles').innerText = \`∠A: \${angA.toFixed(0)}°, ∠B: \${angB.toFixed(0)}°, ∠C: \${angC.toFixed(0)}°, ∠D: \${angD.toFixed(0)}°\`;

  let fText = "";
  if(detectedType === "Square" || detectedType === "Rectangle") {
    fText = \`Area = base × height\\n     = \${ab.toFixed(1)} × \${bc.toFixed(1)}\\n     = \${area.toFixed(1)}\`;
  } else if(detectedType === "Rhombus" || detectedType === "Kite") {
    fText = \`Area = 0.5 × d1 × d2\\n     = 0.5 × \${d1.toFixed(1)} × \${d2.toFixed(1)}\\n     = \${area.toFixed(1)}\`;
  } else if(detectedType.includes("Trapezoid")) {
    fText = \`Area = 0.5 × (a + b) × h\\n     = 0.5 × (\${ab.toFixed(1)} + \${cd.toFixed(1)}) × h\\n     = \${area.toFixed(1)}\`;
  } else if(detectedType === "Triangle") {
    fText = \`Triangle Area (3 Non-collinear Vertices):\\nArea = \${area.toFixed(1)}\`;
  } else {
    fText = \`Shoelace Formula (\${detectedType}):\\nArea = \${area.toFixed(1)}\`;
  }
  document.getElementById('formulaSubstitution').innerText = fText;
}

function onShapeChange() {
  const type = document.getElementById('shapeSelect').value;
  setPreset(type);
  drawQuad();
}

canvas.addEventListener('mousedown', (e) => {
  const rect = canvas.getBoundingClientRect();
  const mx = e.clientX - rect.left;
  const my = e.clientY - rect.top;

  for(let key in vertices) {
    if(Math.hypot(vertices[key].x - mx, vertices[key].y - my) < 16) {
      activeVertex = key;
      break;
    }
  }
});

canvas.addEventListener('mousemove', (e) => {
  if(activeVertex) {
    const rect = canvas.getBoundingClientRect();
    vertices[activeVertex].x = Math.max(20, Math.min(canvas.width - 20, e.clientX - rect.left));
    vertices[activeVertex].y = Math.max(20, Math.min(canvas.height - 20, e.clientY - rect.top));
    drawQuad();
  }
});

window.addEventListener('mouseup', () => activeVertex = null);

// --- CYCLIC QUADRILATERAL JS ---
const cCanvas = document.getElementById('cyclicCanvas');
const cCtx = cCanvas.getContext('2d');
const center = {x: 300, y: 250}, radius = 170;

let angles = { A: 200, B: 290, C: 20, D: 110 };
let activeCyclicVertex = null;

function getCyclicCoords() {
  let pts = {};
  for(let k in angles) {
    let rad = angles[k] * Math.PI / 180;
    pts[k] = { x: center.x + radius * Math.cos(rad), y: center.y + radius * Math.sin(rad) };
  }
  return pts;
}

function drawCyclicAngleArc(P1, P2, P3, angleVal) {
  if (isNaN(angleVal) || angleVal < 1 || Math.abs(angleVal - 180) < 1) return;
  const startAng = Math.atan2(P1.y - P2.y, P1.x - P2.x);
  let endAng = Math.atan2(P3.y - P2.y, P3.x - P2.x);
  
  let diff = endAng - startAng;
  while (diff < 0) diff += Math.PI * 2;
  while (diff > Math.PI * 2) diff -= Math.PI * 2;

  let counterClockwise = diff > Math.PI;

  const r = 22;
  cCtx.strokeStyle = '#f59e0b';
  cCtx.lineWidth = 2;
  cCtx.beginPath();
  cCtx.arc(P2.x, P2.y, r, startAng, endAng, counterClockwise);
  cCtx.stroke();

  let midAng = startAng + (counterClockwise ? (diff - Math.PI * 2) : diff) / 2;
  const textDist = 38;
  const tx = P2.x + Math.cos(midAng) * textDist;
  const ty = P2.y + Math.sin(midAng) * textDist;

  cCtx.fillStyle = '#f59e0b';
  cCtx.font = 'bold 12px sans-serif';
  cCtx.textAlign = 'center';
  cCtx.textBaseline = 'middle';
  cCtx.fillText(\`\${angleVal.toFixed(0)}°\`, tx, ty);
}

function drawCyclic() {
  cCtx.clearRect(0, 0, cCanvas.width, cCanvas.height);
  const pts = getCyclicCoords();

  // Circle
  cCtx.strokeStyle = '#475569';
  cCtx.lineWidth = 2;
  cCtx.beginPath();
  cCtx.arc(center.x, center.y, radius, 0, Math.PI * 2);
  cCtx.stroke();

  // Diagonals
  cCtx.strokeStyle = '#64748b';
  cCtx.setLineDash([4, 4]);
  cCtx.beginPath(); cCtx.moveTo(pts.A.x, pts.A.y); cCtx.lineTo(pts.C.x, pts.C.y); cCtx.stroke();
  cCtx.beginPath(); cCtx.moveTo(pts.B.x, pts.B.y); cCtx.lineTo(pts.D.x, pts.D.y); cCtx.stroke();
  cCtx.setLineDash([]);

  // Polygon
  cCtx.strokeStyle = '#38bdf8';
  cCtx.fillStyle = 'rgba(56, 189, 248, 0.15)';
  cCtx.lineWidth = 3;
  cCtx.beginPath();
  cCtx.moveTo(pts.A.x, pts.A.y);
  cCtx.lineTo(pts.B.x, pts.B.y);
  cCtx.lineTo(pts.C.x, pts.C.y);
  cCtx.lineTo(pts.D.x, pts.D.y);
  cCtx.closePath();
  cCtx.fill();
  cCtx.stroke();

  // Angles
  const angA = getAngle(pts.D, pts.A, pts.B);
  const angB = getAngle(pts.A, pts.B, pts.C);
  const angC = getAngle(pts.B, pts.C, pts.D);
  const angD = getAngle(pts.C, pts.D, pts.A);

  drawCyclicAngleArc(pts.D, pts.A, pts.B, angA);
  drawCyclicAngleArc(pts.A, pts.B, pts.C, angB);
  drawCyclicAngleArc(pts.B, pts.C, pts.D, angC);
  drawCyclicAngleArc(pts.C, pts.D, pts.A, angD);

  // Vertices
  for(let k in pts) {
    cCtx.fillStyle = '#f8fafc';
    cCtx.beginPath();
    cCtx.arc(pts[k].x, pts[k].y, 7, 0, Math.PI * 2);
    cCtx.fill();
    cCtx.fillStyle = '#38bdf8';
    cCtx.font = 'bold 14px sans-serif';
    cCtx.textAlign = 'left';
    cCtx.fillText(k, pts[k].x + (pts[k].x > center.x ? 12 : -22), pts[k].y + (pts[k].y > center.y ? 15 : -10));
  }

  // Ptolemy Values
  const ab = dist(pts.A, pts.B)/10, bc = dist(pts.B, pts.C)/10;
  const cd = dist(pts.C, pts.D)/10, da = dist(pts.D, pts.A)/10;
  const ac = dist(pts.A, pts.C)/10, bd = dist(pts.B, pts.D)/10;

  const leftSide = (ab * cd) + (bc * da);
  const rightSide = ac * bd;

  document.getElementById('ptolemyLeft').innerText = \`(AB × CD) + (BC × AD) = \${leftSide.toFixed(2)}\`;
  document.getElementById('ptolemyRight').innerText = \`AC × BD = \${rightSide.toFixed(2)}\`;
  document.getElementById('ptolemyDiff').innerText = \`Difference: \${Math.abs(leftSide - rightSide).toFixed(4)}\`;

  document.getElementById('angleSum1').innerText = \`∠A (\${angA.toFixed(0)}°) + ∠C (\${angC.toFixed(0)}°) = \${(angA + angC).toFixed(0)}°\`;
  document.getElementById('angleSum2').innerText = \`∠B (\${angB.toFixed(0)}°) + ∠D (\${angD.toFixed(0)}°) = \${(angB + angD).toFixed(0)}°\`;

  const s = (ab + bc + cd + da) / 2;
  const areaB = Math.sqrt(Math.max(0, (s-ab)*(s-bc)*(s-cd)*(s-da)));
  document.getElementById('brahmaguptaArea').innerText = \`Area = \${areaB.toFixed(2)} sq units\`;
}

cCanvas.addEventListener('mousedown', (e) => {
  const rect = cCanvas.getBoundingClientRect();
  const mx = e.clientX - rect.left;
  const my = e.clientY - rect.top;
  const pts = getCyclicCoords();

  for(let k in pts) {
    if(Math.hypot(pts[k].x - mx, pts[k].y - my) < 16) {
      activeCyclicVertex = k;
      break;
    }
  }
});

cCanvas.addEventListener('mousemove', (e) => {
  if(activeCyclicVertex) {
    const rect = cCanvas.getBoundingClientRect();
    const mx = e.clientX - rect.left - center.x;
    const my = e.clientY - rect.top - center.y;
    let deg = Math.atan2(my, mx) * (180 / Math.PI);
    if(deg < 0) deg += 360;
    angles[activeCyclicVertex] = deg;
    drawCyclic();
  }
});

window.addEventListener('mouseup', () => activeCyclicVertex = null);

// Initial Execution
window.onload = () => {
  setPreset('rectangle');
  drawQuad();
};
</script>
</body>
</html>`,
    isCustomImport: true,
    authorEmail: "ndunj123@gmail.com",
    authorName: "Axiom Creator",
    createdAt: "2026-08-23"
  }
];

export const curriculumSimulations: SimulationItem[] = STEM_SIMULATIONS;

// Default standards repository with curriculum alignments for all 19 simulations
export const DEFAULT_STANDARDS: CurriculumStandard[] = [
  {
    id: "std-ccss-math-hsg-co-c11",
    code: "CCSS.MATH.HSG.CO.C.11",
    title: "Theorems about Parallelograms & Quadrilaterals",
    category: "Common Core",
    discipline: "mathematics",
    gradeLevel: "High School (9-12)",
    description: "Prove and apply theorems about parallelograms: opposite sides are congruent, opposite angles are congruent, the diagonals of a parallelogram bisect each other, and rectangles are parallelograms with congruent diagonals.",
    createdAt: "2026-08-23"
  },
  {
    id: "std-ccss-math-hsg-c-a3",
    code: "CCSS.MATH.HSG.C.A.3",
    title: "Inscribed and Cyclic Quadrilaterals",
    category: "Common Core",
    discipline: "mathematics",
    gradeLevel: "High School (9-12)",
    description: "Construct the inscribed and circumscribed circles of a triangle, and prove properties of angles for a quadrilateral inscribed in a circle (cyclic quadrilaterals and supplementary opposite angles).",
    createdAt: "2026-08-23"
  },
  {
    id: "std-ccss-math-hsg-gpe-b7",
    code: "CCSS.MATH.HSG.GPE.B.7",
    title: "Coordinate Perimeter and Area Calculations (Shoelace Formula)",
    category: "Common Core",
    discipline: "mathematics",
    gradeLevel: "High School (9-12)",
    description: "Use coordinates to compute perimeters of polygons and areas of triangles and quadrilaterals using the distance formula and polygon coordinate decomposition.",
    createdAt: "2026-08-23"
  },
  {
    id: "std-ap-chem-u7",
    code: "AP Chemistry (Unit 7)",
    title: "Chemical Equilibrium & Le Châtelier's Principle",
    category: "AP",
    discipline: "chemistry",
    gradeLevel: "AP / IB STEM",
    description: "Calculate equilibrium constants (Kc, Kp), compare reaction quotients (Q) to K to determine shift directions, and apply Le Châtelier's principle to temperature, pressure, and concentration stresses.",
    createdAt: "2026-08-23"
  },
  {
    id: "std-ngss-hs-ps1-6",
    code: "HS-PS1-6",
    title: "Refining Chemical Reaction Equilibrium & Yield",
    category: "NGSS",
    discipline: "chemistry",
    gradeLevel: "High School (9-12)",
    description: "Refine the design of a chemical system by specifying a change in conditions that would alter the amount of products at equilibrium using Le Châtelier's principle.",
    createdAt: "2026-08-23"
  },
  {
    id: "std-ap-chem-u9",
    code: "AP Chemistry (Unit 9)",
    title: "Thermodynamics and Electrochemistry",
    category: "AP",
    discipline: "chemistry",
    gradeLevel: "AP / IB STEM",
    description: "Analyze galvanic and electrolytic cells, calculate cell potentials using standard reduction potentials, and apply the Nernst equation (Ecell = E°cell - (RT/nF)lnQ) under non-standard conditions.",
    createdAt: "2026-08-23"
  },
  {
    id: "std-ngss-hs-ps1-4",
    code: "HS-PS1-4",
    title: "Energy in Chemical Processes & Bond Breaking/Forming",
    category: "NGSS",
    discipline: "chemistry",
    gradeLevel: "High School (9-12)",
    description: "Develop a model based on evidence to illustrate that the release or absorption of energy from a chemical reaction system depends upon the changes in total bond energy.",
    createdAt: "2026-08-23"
  },
  {
    id: "std-ap-phys-1-u4",
    code: "AP Physics 1 (Unit 4)",
    title: "Linear Momentum, Impulse & Collisions",
    category: "AP",
    discipline: "physics",
    gradeLevel: "AP / IB STEM",
    description: "Calculate changes in linear momentum, impulse delivered by forces, and conservation of momentum in elastic and inelastic collisions.",
    createdAt: "2026-08-22"
  },
  {
    id: "std-ngss-hs-ps2-2",
    code: "HS-PS2-2",
    title: "Conservation of Linear Momentum",
    category: "NGSS",
    discipline: "physics",
    gradeLevel: "High School (9-12)",
    description: "Use mathematical representations to support the claim that the total momentum of a system of objects is conserved when there is no net force on the system.",
    createdAt: "2026-08-22"
  },
  {
    id: "std-ngss-hs-ps4-1",
    code: "HS-PS4-1",
    title: "Wave Properties & Mathematical Models",
    category: "NGSS",
    discipline: "physics",
    gradeLevel: "High School (9-12)",
    description: "Use mathematical representations to support a claim regarding relationships among the frequency, wavelength, and speed of waves traveling in various media.",
    createdAt: "2026-08-15"
  },
  {
    id: "std-ap-phys-1-u6",
    code: "AP Physics 1 (Unit 6)",
    title: "Simple Harmonic Motion & Oscillations",
    category: "AP",
    discipline: "physics",
    gradeLevel: "AP / IB STEM",
    description: "Analyze restorative forces, energy conservation in spring-mass and pendulum oscillators, and periodicity.",
    createdAt: "2026-08-15"
  },
  {
    id: "std-ap-phys-1-u1",
    code: "AP Physics 1 (Unit 1)",
    title: "Kinematics & Two-Dimensional Motion",
    category: "AP",
    discipline: "physics",
    gradeLevel: "AP / IB STEM",
    description: "Analyze position, velocity, and acceleration vectors in 1D and 2D projectile motion.",
    createdAt: "2026-08-15"
  },
  {
    id: "std-ap-phys-2-u9",
    code: "AP Physics 2 (Unit 9)",
    title: "Electric Circuits & Oscilloscopes",
    category: "AP",
    discipline: "physics",
    gradeLevel: "AP / IB STEM",
    description: "Analyze DC circuits, Kirchhoff's rules, RC circuits, and AC waveform signal analysis.",
    createdAt: "2026-08-15"
  },
  {
    id: "std-ngss-hs-ps4-3",
    code: "HS-PS4-3",
    title: "Quantum Wave-Particle Duality & Atomic Transitions",
    category: "NGSS",
    discipline: "chemistry",
    gradeLevel: "High School (9-12)",
    description: "Evaluate the claims, evidence, and reasoning behind the idea that electromagnetic radiation can be described either by a wave model or a particle model.",
    createdAt: "2026-08-15"
  },
  {
    id: "std-ngss-hs-ls1-5",
    code: "HS-LS1-5",
    title: "Photosynthesis & Cellular Energy Transformations",
    category: "NGSS",
    discipline: "biology",
    gradeLevel: "High School (9-12)",
    description: "Use a model to illustrate how photosynthesis transforms light energy into stored chemical energy.",
    createdAt: "2026-08-15"
  },
  {
    id: "std-ccss-math-hsg-c",
    code: "CCSS.MATH.HSG.C.A.2",
    title: "Circle Theorems & Inscribed Angles",
    category: "Common Core",
    discipline: "mathematics",
    gradeLevel: "High School (9-12)",
    description: "Identify and describe relationships among inscribed angles, radii, and chords.",
    createdAt: "2026-08-15"
  },
  {
    id: "std-ccss-math-hsg-srt",
    code: "CCSS.MATH.HSG.SRT.C.8",
    title: "Trigonometric Applications & Bearings",
    category: "Common Core",
    discipline: "mathematics",
    gradeLevel: "High School (9-12)",
    description: "Use trigonometric ratios and the Pythagorean Theorem to solve right triangles in applied problems including bearings and angles of elevation.",
    createdAt: "2026-08-15"
  },
  {
    id: "std-ngss-hs-ps1-1",
    code: "HS-PS1-1",
    title: "Valence Electrons, Chemical Bonding & Molecular Structure",
    category: "NGSS",
    discipline: "chemistry",
    gradeLevel: "High School (9-12)",
    description: "Use the periodic table as a model to predict the relative properties of elements based on the patterns of electrons in the outermost energy level of atoms and covalent bonding patterns.",
    createdAt: "2026-08-16"
  },
  {
    id: "std-ap-chem-u2",
    code: "AP Chemistry (Unit 2)",
    title: "Molecular and Ionic Compound Structure and Properties",
    category: "AP",
    discipline: "chemistry",
    gradeLevel: "AP / IB STEM",
    description: "Investigate chemical bonding, Lewis diagrams, resonance, formal charge, VSEPR and bond hybridization, and organic IUPAC systematic nomenclature.",
    createdAt: "2026-08-16"
  },
  {
    id: "std-ap-calc-u8",
    code: "AP Calculus (Unit 8)",
    title: "Applications of Integration (Volumes of Revolution)",
    category: "AP",
    discipline: "mathematics",
    gradeLevel: "AP / IB STEM",
    description: "Calculate areas in the plane and volumes of solids of revolution using disk, washer, and cross-sectional Riemann slice definite integration methods.",
    createdAt: "2026-08-16"
  },
  {
    id: "std-ngss-ms-ess2-6",
    code: "MS-ESS2-6",
    title: "Atmospheric and Oceanic Convection Circulation",
    category: "NGSS",
    discipline: "physics",
    gradeLevel: "Middle School (6-8)",
    description: "Develop and use a model to describe how unequal heating and rotation of the Earth cause patterns of atmospheric and oceanic circulation that determine regional climates.",
    createdAt: "2026-08-16"
  },
  {
    id: "std-ngss-hs-ess2-4",
    code: "HS-ESS2-4",
    title: "Thermal Energy Flow & Climate Dynamics",
    category: "NGSS",
    discipline: "physics",
    gradeLevel: "High School (9-12)",
    description: "Use a model to describe how variations in the flow of energy into and out of Earth's systems result in changes in climate and atmospheric convection loops.",
    createdAt: "2026-08-16"
  },
  {
    id: "std-ccss-math-hss-cp-a1",
    code: "CCSS.MATH.HSS.CP.A.1",
    title: "Set Theory, Venn Diagrams & Sample Spaces",
    category: "Common Core",
    discipline: "mathematics",
    gradeLevel: "High School (9-12)",
    description: "Describe events as subsets of a sample space (the set of outcomes) using characteristics (or categories) of the outcomes, or as unions, intersections, or complements of other events ('or,' 'and,' 'not').",
    createdAt: "2026-08-17"
  },
  {
    id: "std-ccss-math-hsf-tf-a1",
    code: "CCSS.MATH.HSF.TF.A.1",
    title: "Radian Measure & Unit Circle Arc Subtensions",
    category: "Common Core",
    discipline: "mathematics",
    gradeLevel: "High School (9-12)",
    description: "Understand radian measure of an angle as the length of the arc on the unit circle subtended by the angle, converting flexibly between degrees and radians.",
    createdAt: "2026-08-23"
  },
  {
    id: "std-ccss-math-hsf-tf-a2",
    code: "CCSS.MATH.HSF.TF.A.2",
    title: "Unit Circle Coordinate Extension of Trigonometric Functions",
    category: "Common Core",
    discipline: "mathematics",
    gradeLevel: "High School (9-12)",
    description: "Explain how the unit circle in the coordinate plane enables the extension of trigonometric functions (cos θ, sin θ, tan θ) to all real numbers, interpreted as radian measures of angles traversed counterclockwise.",
    createdAt: "2026-08-23"
  },
  {
    id: "std-ap-precalc-u1",
    code: "AP Precalculus (Unit 1)",
    title: "Trigonometric and Periodic Functions",
    category: "AP",
    discipline: "mathematics",
    gradeLevel: "AP / IB STEM",
    description: "Model periodic phenomena using unit circle trigonometry, harmonic sinusoidal waves, amplitude and phase relationships, and rotating phasors.",
    createdAt: "2026-08-23"
  }
];

export interface EducatorTestimonial {
  name: string;
  role: string;
  school: string;
  quote: string;
  avatar: string;
  verifiedBadge: string;
}

export const educatorTestimonials: EducatorTestimonial[] = [
  {
    name: "Dr. Elena Vance",
    role: "AP Physics Dept Lead",
    school: "Lincoln Science Academy",
    quote: "Being able to run standalone HTML5 simulation models with zero installation friction has completely elevated our laboratory investigations. The embedded controls give students instant intuition.",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=150",
    verifiedBadge: "Verified AP Educator"
  },
  {
    name: "Marcus Thorne",
    role: "STEM Curriculum Director",
    school: "Metro Unified District",
    quote: "The alignment to NGSS, AP, and Common Core standards makes purchasing with school purchase orders a breeze. The simulation sandbox is flawless on student Chromebooks.",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150",
    verifiedBadge: "District Admin"
  },
  {
    name: "Sarah Chen, M.Ed.",
    role: "Honors Chemistry Teacher",
    school: "Westlake High School",
    quote: "The automated AI lesson plans saved me hours every week. My students can test hypotheses rapidly without consumable lab costs.",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=150",
    verifiedBadge: "Verified Chemistry Teacher"
  }
];
