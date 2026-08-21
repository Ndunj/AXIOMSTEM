import { SimulationItem, CurriculumStandard } from "../types";

// The 19 creator-authored STEM Simulation Apps
export const STEM_SIMULATIONS: SimulationItem[] = [
  {
    id: "sim-solar-eclipse-orbital-dynamics",
    title: "3D Solar Eclipse & Orbital Dynamics Simulator",
    tagline: "Explore Sun-Earth-Moon orbital geometry, shadow umbra/penumbra cones, and celestial solar eclipse alignments in interactive WebGL 3D",
    discipline: "physics",
    gradeLevel: ["Middle School (6-8)", "High School (9-12)", "AP / IB STEM"],
    standards: ["MS-ESS1-1", "HS-ESS1-4", "HS-PS2-4", "NGSS SEP-2"],
    description: "An interactive real-time 3D celestial mechanics simulation demonstrating solar eclipses, orbital periods, and lighting geometry. Features procedural planetary textures, continuous solar corona and glowing light rays, orbital path visualization, adjustable orbital speed controls, and dynamic 3D screen-space celestial callout tracking.",
    learningObjectives: [
      "Understand the geometric alignment of the Sun, Moon, and Earth required to produce total and partial solar eclipses",
      "Investigate how orbital radii and angular velocities determine the frequency and visual positioning of lunar shadow casting",
      "Analyze planetary axial tilt (Earth 23.5°) and orbital dynamics in a three-dimensional reference frame"
    ],
    thumbnailGradient: "from-amber-600 via-orange-600 to-indigo-950",
    badgeColor: "bg-amber-500/10 text-amber-300 border-amber-500/20",
    iconName: "Sun",
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
      "Full 3D WebGL space canvas powered by Three.js with free-look OrbitControls",
      "Procedural Earth surface texture, cratered Moon texture, and glowing Sun corona shaders",
      "Interactive orbital speed rate slider with pause/resume and instant eclipse alignment controls",
      "Dynamic screen-space 3D tracking callout labels for Sun, Earth, and Moon"
    ],
    parameterDefaults: {
      speed: 0.002,
      paused: false
    },
    parameterControls: [
      {
        key: "speed",
        label: "Orbit Speed",
        min: 0,
        max: 0.01,
        step: 0.0005,
        unit: "rad/frame",
        description: "Celestial orbital angular velocity multiplier"
      }
    ],
    sampleChallenges: [
      {
        id: "ch-eclipse-1",
        title: "Achieve Perfect Eclipse Syzygy",
        instruction: "Use the Align Eclipse control to position the Moon directly between the Earth and the Sun along the orbital line of nodes.",
        targetMetric: "Alignment",
        targetValue: 100,
        tolerance: 5,
        currentValueKey: "alignment",
        rewardBadge: "Eclipse Master"
      }
    ],
    previewFacts: [
      "A total solar eclipse occurs only during a new moon when the Moon crosses the ecliptic plane (syzygy).",
      "Because the Moon's orbit is tilted about 5.14° relative to Earth's orbital plane, eclipses do not occur every single month."
    ],
    isHtmlApp: true,
    htmlContent: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>3D Solar Eclipse & Orbital Mechanics Simulation</title>
    <style>
        body {
            margin: 0;
            overflow: hidden;
            background-color: #000;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            color: #fff;
        }
        #canvas-container {
            width: 100vw;
            height: 100vh;
        }

        /* Centralized Professional Main Title */
        #main-title {
            position: absolute;
            top: 25px;
            left: 50%;
            transform: translateX(-50%);
            text-align: center;
            pointer-events: none;
            z-index: 100;
        }
        #main-title h1 {
            font-size: 22px;
            margin: 0;
            color: #ffd700;
            text-transform: uppercase;
            letter-spacing: 4px;
            font-weight: 700;
            text-shadow: 0 0 10px rgba(255, 215, 0, 0.5), 0 0 20px rgba(0, 0, 0, 0.9);
        }
        #main-title p {
            font-size: 10px;
            margin: 4px 0 0 0;
            color: #cccccc;
            text-transform: uppercase;
            letter-spacing: 2px;
            text-shadow: 0 0 6px rgba(0, 0, 0, 0.9);
        }

        #ui {
            position: absolute;
            top: 20px;
            left: 20px;
            background: rgba(0, 0, 0, 0.85);
            padding: 15px 20px;
            border-radius: 8px;
            border: 1px solid rgba(255, 215, 0, 0.4);
            pointer-events: auto;
            z-index: 100;
        }
        #ui h2 {
            font-size: 14px;
            margin: 0 0 10px 0;
            color: #ffd700;
            text-transform: uppercase;
            letter-spacing: 1px;
        }
        .control-group {
            margin-bottom: 10px;
        }
        label {
            display: inline-block;
            width: 90px;
            font-size: 12px;
        }
        button {
            background: #ffd700;
            border: none;
            color: #000;
            padding: 6px 12px;
            font-weight: bold;
            font-size: 11px;
            border-radius: 4px;
            cursor: pointer;
            margin-right: 5px;
        }
        button:hover {
            background: #fff;
        }

        /* Clean Borderless White Labels */
        .callout-label {
            position: absolute;
            pointer-events: none;
            z-index: 10;
            transform: translate(-50%, -100%);
            transition: opacity 0.2s ease-out;
        }
        .callout-text {
            color: #ffffff;
            font-weight: 600;
            font-size: 7px;
            letter-spacing: 1.5px;
            text-transform: uppercase;
            background: transparent;
            border: none;
            box-shadow: none;
            text-shadow: 0 0 4px rgba(0, 0, 0, 0.9), 0 0 8px rgba(0, 0, 0, 0.7);
            white-space: nowrap;
        }
    </style>
    <!-- Three.js Library & OrbitControls -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/three@0.128.0/examples/js/controls/OrbitControls.js"></script>
</head>
<body>

    <div id="canvas-container"></div>

    <!-- Centralized Main Title Header -->
    <div id="main-title">
        <h1>Solar Eclipse & Orbital Dynamics</h1>
        <p>3D Interactive Astronomical Simulation</p>
    </div>

    <div id="ui">
        <h2>Simulation Controls</h2>
        <div class="control-group">
            <label for="speed">Orbit Speed:</label>
            <input type="range" id="speed" min="0" max="0.01" step="0.0005" value="0.002">
        </div>
        <div class="control-group">
            <button id="toggle-orbit">Pause / Resume</button>
            <button id="align-eclipse">Align Eclipse</button>
        </div>
    </div>

    <!-- Borderless Floating Labels -->
    <div id="label-sun" class="callout-label">
        <div class="callout-text">SUN</div>
    </div>
    
    <div id="label-earth" class="callout-label">
        <div class="callout-text">EARTH</div>
    </div>
    
    <div id="label-moon" class="callout-label">
        <div class="callout-text">MOON</div>
    </div>

    <script>
        // --- Procedural Textures ---
        function createEarthTexture() {
            const canvas = document.createElement('canvas');
            canvas.width = 2048;
            canvas.height = 1024;
            const ctx = canvas.getContext('2d');
            
            ctx.fillStyle = '#0a2342';
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            
            ctx.fillStyle = '#1e5e3a';
            for (let i = 0; i < 2800; i++) {
                const x = Math.random() * canvas.width;
                const y = Math.random() * canvas.height * 0.8 + canvas.height * 0.1;
                const r = Math.random() * 65 + 20;
                ctx.beginPath();
                ctx.arc(x, y, r, 0, Math.PI * 2);
                ctx.fill();
            }

            ctx.fillStyle = '#2d7a4b';
            for (let i = 0; i < 1000; i++) {
                const x = Math.random() * canvas.width;
                const y = Math.random() * canvas.height * 0.7 + canvas.height * 0.15;
                const r = Math.random() * 45 + 10;
                ctx.beginPath();
                ctx.arc(x, y, r, 0, Math.PI * 2);
                ctx.fill();
            }

            ctx.fillStyle = '#ffffff';
            ctx.fillRect(0, 0, canvas.width, 110);
            ctx.fillRect(0, canvas.height - 110, canvas.width, 110);

            return new THREE.CanvasTexture(canvas);
        }

        function createMoonTexture() {
            const canvas = document.createElement('canvas');
            canvas.width = 1024;
            canvas.height = 512;
            const ctx = canvas.getContext('2d');
            
            ctx.fillStyle = '#777777';
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            
            ctx.fillStyle = '#444444';
            for (let i = 0; i < 800; i++) {
                const x = Math.random() * canvas.width;
                const y = Math.random() * canvas.height;
                const r = Math.random() * 15 + 3;
                ctx.beginPath();
                ctx.arc(x, y, r, 0, Math.PI * 2);
                ctx.fill();
            }
            return new THREE.CanvasTexture(canvas);
        }

        function createGlowTexture() {
            const canvas = document.createElement('canvas');
            canvas.width = 512;
            canvas.height = 512;
            const ctx = canvas.getContext('2d');

            const gradient = ctx.createRadialGradient(256, 256, 100, 256, 256, 256);
            gradient.addColorStop(0.0, 'rgba(255, 220, 100, 1.0)');
            gradient.addColorStop(0.3, 'rgba(255, 180, 40, 0.6)');
            gradient.addColorStop(0.7, 'rgba(255, 140, 0, 0.15)');
            gradient.addColorStop(1.0, 'rgba(0, 0, 0, 0.0)');

            ctx.fillStyle = gradient;
            ctx.fillRect(0, 0, 512, 512);

            return new THREE.CanvasTexture(canvas);
        }

        // --- Setup Scene ---
        const container = document.getElementById('canvas-container');
        const scene = new THREE.Scene();
        
        const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 25000);
        camera.position.set(0, 1500, 5000);

        const renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.shadowMap.enabled = true;
        renderer.shadowMap.type = THREE.PCFSoftShadowMap;
        container.appendChild(renderer.domElement);

        const controls = new THREE.OrbitControls(camera, renderer.domElement);
        controls.enableDamping = true;

        // Starfield Background
        const starsGeometry = new THREE.BufferGeometry();
        const starsCount = 7000;
        const starPositions = new Float32Array(starsCount * 3);
        for(let i = 0; i < starsCount * 3; i++) {
            starPositions[i] = (Math.random() - 0.5) * 15000;
        }
        starsGeometry.setAttribute('position', new THREE.BufferAttribute(starPositions, 3));
        const starsMaterial = new THREE.PointsMaterial({ color: 0xffffff, size: 2.5 });
        const starField = new THREE.Points(starsGeometry, starsMaterial);
        scene.add(starField);

        const customUniforms = { uTime: { value: 0 } };

        // --- SUN ---
        const sunRadius = 450;
        const sunGeometry = new THREE.SphereGeometry(sunRadius, 128, 128);
        const sunMaterial = new THREE.MeshBasicMaterial({ color: 0xffea70 });
        const sun = new THREE.Mesh(sunGeometry, sunMaterial);
        sun.position.set(0, 0, 0);
        scene.add(sun);

        // Continuous Corona
        const spriteMaterial = new THREE.SpriteMaterial({
            map: createGlowTexture(),
            blending: THREE.AdditiveBlending,
            transparent: true
        });
        const sunCorona = new THREE.Sprite(spriteMaterial);
        sunCorona.scale.set(sunRadius * 4.2, sunRadius * 4.2, 1.0);
        sun.add(sunCorona);

        // --- EARTH ORBITAL PATH VISUALIZATION ---
        const earthSunOrbitRadius = 2600;
        const orbitPathGeo = new THREE.RingGeometry(earthSunOrbitRadius - 3.5, earthSunOrbitRadius + 3.5, 256);
        const orbitPathMat = new THREE.MeshBasicMaterial({ color: 0xffd700, side: THREE.DoubleSide, transparent: true, opacity: 0.35 });
        const orbitPathMesh = new THREE.Mesh(orbitPathGeo, orbitPathMat);
        orbitPathMesh.rotation.x = Math.PI / 2;
        scene.add(orbitPathMesh);

        // --- DIRECT LIGHT SOURCE FROM SUN ---
        const sunLight = new THREE.DirectionalLight(0xffdf80, 2.5);
        sunLight.castShadow = true;
        
        sunLight.shadow.mapSize.width = 4096;
        sunLight.shadow.mapSize.height = 4096;
        sunLight.shadow.camera.near = 10;
        sunLight.shadow.camera.far = 5000;
        
        const d = 500;
        sunLight.shadow.camera.left = -d;
        sunLight.shadow.camera.right = d;
        sunLight.shadow.camera.top = d;
        sunLight.shadow.camera.bottom = -d;
        sunLight.shadow.bias = -0.0001;

        scene.add(sunLight);
        scene.add(sunLight.target);

        const ambientLight = new THREE.AmbientLight(0x152030);
        scene.add(ambientLight);

        // --- EARTH ---
        const earthRadius = 180;
        const earthGeometry = new THREE.SphereGeometry(earthRadius, 128, 128);
        const earthMaterial = new THREE.MeshStandardMaterial({
            map: createEarthTexture(),
            roughness: 0.6,
            metalness: 0.1
        });
        
        const earthPivot = new THREE.Group();
        earthPivot.rotation.z = THREE.MathUtils.degToRad(23.5);
        scene.add(earthPivot);

        const earth = new THREE.Mesh(earthGeometry, earthMaterial);
        earth.receiveShadow = true;
        earth.castShadow = true;
        earthPivot.add(earth);

        // --- MOON ---
        const moonRadius = 48.6;
        const moonGeometry = new THREE.SphereGeometry(moonRadius, 64, 64);
        const moonMaterial = new THREE.MeshStandardMaterial({
            map: createMoonTexture(),
            roughness: 0.9
        });
        const moon = new THREE.Mesh(moonGeometry, moonMaterial);
        moon.castShadow = true;
        moon.receiveShadow = true;
        scene.add(moon);

        // --- EXTENDED LIGHT RAYS REACHING EARTH & MOON ---
        const parallelRays = new THREE.Group();
        const rayCount = 32;
        const rayLength = 2100;

        const rayShaderMaterial = new THREE.ShaderMaterial({
            uniforms: customUniforms,
            transparent: true,
            blending: THREE.AdditiveBlending,
            depthWrite: false,
            vertexShader: \`
                varying vec2 vUv;
                void main() {
                    vUv = uv;
                    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
                }
            \`,
            fragmentShader: \`
                uniform float uTime;
                varying vec2 vUv;
                void main() {
                    float rayPulse = sin(vUv.y * 25.0 - uTime * 4.0) * 0.2 + 0.8;
                    float fadeEdges = sin(vUv.y * 3.14159);
                    vec3 goldenRayColor = vec3(1.0, 0.8, 0.2);
                    float alpha = fadeEdges * rayPulse * 0.35;
                    gl_FragColor = vec4(goldenRayColor, alpha);
                }
            \`
        });

        for (let i = 0; i < rayCount; i++) {
            const rayGeo = new THREE.CylinderGeometry(2.5, 2.5, rayLength, 8);
            const ray = new THREE.Mesh(rayGeo, rayShaderMaterial);
            
            ray.rotation.x = Math.PI / 2;
            
            const angle = (i / rayCount) * Math.PI * 2;
            const r = 30 + Math.random() * 240;
            const offsetX = Math.sin(angle) * r;
            const offsetY = Math.cos(angle) * r;
            
            ray.position.set(offsetX, offsetY, 0);
            parallelRays.add(ray);
        }
        scene.add(parallelRays);

        // --- Simulation Variables ---
        let earthSunOrbitAngle = Math.PI;
        let moonOrbitAngle = Math.PI;
        let moonOrbitRadius = 430;
        let isPaused = false;
        let speed = parseFloat(document.getElementById('speed').value);

        document.getElementById('speed').addEventListener('input', (e) => {
            speed = parseFloat(e.target.value);
        });

        document.getElementById('toggle-orbit').addEventListener('click', () => {
            isPaused = !isPaused;
        });

        document.getElementById('align-eclipse').addEventListener('click', () => {
            moonOrbitAngle = Math.PI;
            updatePositions();
        });

        function updatePositions() {
            earthPivot.position.x = sun.position.x + Math.cos(earthSunOrbitAngle) * earthSunOrbitRadius;
            earthPivot.position.z = sun.position.z + Math.sin(earthSunOrbitAngle) * earthSunOrbitRadius;

            moon.position.x = earthPivot.position.x + Math.cos(moonOrbitAngle) * moonOrbitRadius;
            moon.position.z = earthPivot.position.z + Math.sin(moonOrbitAngle) * moonOrbitRadius;

            sunLight.position.copy(sun.position);
            sunLight.target.position.copy(earthPivot.position);

            const midPoint = new THREE.Vector3().addVectors(sun.position, earthPivot.position).multiplyScalar(0.5);
            parallelRays.position.copy(midPoint);
            parallelRays.lookAt(earthPivot.position);
        }

        // --- Precise 3D Label Tracking ---
        const sunLabel = document.getElementById('label-sun');
        const earthLabel = document.getElementById('label-earth');
        const moonLabel = document.getElementById('label-moon');

        function updateLabelPosition(object, labelElement, yOffset = 0) {
            const tempV = new THREE.Vector3();
            object.getWorldPosition(tempV);
            tempV.y += yOffset;
            
            tempV.project(camera);

            if (tempV.z > 1) {
                labelElement.style.opacity = '0';
                return;
            } else {
                labelElement.style.opacity = '1';
            }

            const x = (tempV.x *  .5 + .5) * window.innerWidth;
            const y = (tempV.y * -.5 + .5) * window.innerHeight;

            labelElement.style.left = \`\${x}px\`;
            labelElement.style.top = \`\${y}px\`;
        }

        // --- Animation Loop ---
        const clock = new THREE.Clock();

        function animate() {
            requestAnimationFrame(animate);

            const elapsedTime = clock.getElapsedTime();
            customUniforms.uTime.value = elapsedTime;

            if (!isPaused) {
                earthSunOrbitAngle += speed * 0.2;
                moonOrbitAngle += speed;
                updatePositions();
            }

            earth.rotation.y += 0.003;
            moon.rotation.y += 0.001;

            controls.update();

            // Dynamic Label updates
            updateLabelPosition(sun, sunLabel, sunRadius + 40);
            updateLabelPosition(earth, earthLabel, earthRadius + 25);
            updateLabelPosition(moon, moonLabel, moonRadius + 20);

            renderer.render(scene, camera);
        }

        window.addEventListener('resize', () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        });

        updatePositions();
        animate();
    </script>
</body>
</html>`,
    authorName: "Dr. Elena Rostova & Axiom STEM Faculty",
    lemonSqueezyStoreId: "store_stem_faculty_101",
    lemonSqueezyStoreName: "Dr. Elena Rostova & Axiom STEM Faculty",
    createdAt: "2026-08-21T03:45:00.000Z",
    updatedAt: "2026-08-21T03:45:00.000Z",
    lastModified: "2026-08-21T03:45:00.000Z"
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
  }
];

export const curriculumSimulations: SimulationItem[] = STEM_SIMULATIONS;

// Default standards repository with curriculum alignments for all 19 simulations
export const DEFAULT_STANDARDS: CurriculumStandard[] = [
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
