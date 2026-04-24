// --- Internationalization (i18n) ---
const translations = {
    en: {
        nav_about: "About",
        nav_projects: "Projects",
        nav_contact: "Contact",
        hero_status: "Available for new opportunities",
        hero_title: "Data Architect<br>& Engineer",
        hero_desc: "Transforming raw data streams into high-performance, scalable intelligence. I build the pipelines that empower decision-making.",
        hero_cta: "Initiate Connection",
        about_title: "System Overview",
        about_desc: "Bridging the gap between chaotic data sources and pristine analytics. My stack is built on modern data engineering principles.",
        bento_1_title: "Data Processed",
        bento_1_desc: "Average monthly volume handled by pipelines.",
        bento_2_title: "Architecture",
        bento_2_desc: "Designing resilient data warehouses, real-time streaming architectures, and strict governance models.",
        bento_3_title: "Stack",
        bento_3_desc: "Python, SQL, Spark, dbt, Snowflake, Airflow.",
        bento_4_title: "Experience",
        bento_4_desc: "Years of transforming data ecosystems.",
        projects_title: "Deployed Solutions",
        projects_desc: "A selection of data engineering initiatives, focusing on scalability, cost-optimization, and real-time intelligence.",
        proj_1_title: "Real-Time Logistics Engine",
        proj_1_desc: "Kafka & Spark streaming pipeline reducing latency by 94%.",
        proj_2_title: "Warehouse Cost Optimization",
        proj_2_desc: "Restructured dbt models and Snowflake warehouses to cut costs by 40%.",
        proj_3_title: "MLOps Feature Store",
        proj_3_desc: "Centralized feature engineering framework serving 20+ models.",
        proj_4_title: "Automated Data Governance",
        proj_4_desc: "Metadata-driven access control and PII masking via Python microservices.",
        contact_title: "Initialize Connection",
        contact_desc: "Ready to optimize your data infrastructure? Send a message and let's discuss your architecture.",
        contact_name: "Identity String",
        contact_email: "Return Address",
        contact_msg: "Payload",
        contact_btn: "Transmit Request",
        footer_text: "Engineered for precision."
    },
    pt: {
        nav_about: "Sobre",
        nav_projects: "Projetos",
        nav_contact: "Contato",
        hero_status: "Disponível para novas oportunidades",
        hero_title: "Arquiteto &<br>Engenheiro de Dados",
        hero_desc: "Transformando fluxos de dados brutos em inteligência escalável e de alta performance. Eu construo pipelines que capacitam a tomada de decisão.",
        hero_cta: "Iniciar Conexão",
        about_title: "Visão do Sistema",
        about_desc: "Preenchendo a lacuna entre fontes de dados caóticas e análises puras. Minha stack é baseada em princípios modernos de engenharia de dados.",
        bento_1_title: "Dados Processados",

        bento_1_desc: "Volume médio mensal processado pelos pipelines.",
        bento_2_title: "Arquitetura",
        bento_2_desc: "Projetando data warehouses resilientes, arquiteturas de streaming em tempo real e modelos estritos de governança.",
        bento_3_title: "Stack",
        bento_3_desc: "Python, SQL, Spark, dbt, Snowflake, Airflow.",
        bento_4_title: "Experiência",
        bento_4_desc: "Anos transformando ecossistemas de dados.",
        projects_title: "Soluções Implementadas",
        projects_desc: "Uma seleção de iniciativas de engenharia de dados, com foco em escalabilidade, otimização de custos e inteligência em tempo real.",
        proj_1_title: "Motor Logístico em Tempo Real",
        proj_1_desc: "Pipeline de streaming com Kafka e Spark reduzindo latência em 94%.",
        proj_2_title: "Otimização de Custos de Warehouse",
        proj_2_desc: "Reestruturação de modelos dbt e warehouses no Snowflake para cortar custos em 40%.",
        proj_3_title: "Feature Store para MLOps",
        proj_3_desc: "Framework centralizado de engenharia de features servindo mais de 20 modelos.",
        proj_4_title: "Governança de Dados Automatizada",
        proj_4_desc: "Controle de acesso por metadados e mascaramento de PII via microsserviços em Python.",
        contact_title: "Iniciar Conexão",
        contact_desc: "Pronto para otimizar sua infraestrutura de dados? Envie uma mensagem e vamos discutir sua arquitetura.",
        contact_name: "Sua Identidade",
        contact_email: "Endereço de Retorno",
        contact_msg: "Mensagem (Payload)",
        contact_btn: "Transmitir Solicitação",
        footer_text: "Projetado com precisão."
    }
};

let currentLang = 'en';

const langToggleBtn = document.getElementById('lang-toggle');
const langLabel = document.getElementById('lang-label');

langToggleBtn.addEventListener('click', () => {
    currentLang = currentLang === 'en' ? 'pt' : 'en';
    langLabel.textContent = currentLang.toUpperCase();

    document.documentElement.lang = currentLang;

    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[currentLang][key]) {
            el.innerHTML = translations[currentLang][key];
        }
    });
});

// --- Theme Toggle ---
const themeToggleBtn = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');
const htmlEl = document.documentElement;

themeToggleBtn.addEventListener('click', () => {
    const currentTheme = htmlEl.getAttribute('data-theme');
    if (currentTheme === 'dark') {
        htmlEl.setAttribute('data-theme', 'light');
        themeIcon.classList.remove('ph-moon');
        themeIcon.classList.add('ph-sun');
    } else {
        htmlEl.setAttribute('data-theme', 'dark');
        themeIcon.classList.remove('ph-sun');
        themeIcon.classList.add('ph-moon');
    }
});

// --- Scroll Animations ---
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            observer.unobserve(entry.target); // only animate once
        }
    });
}, observerOptions);

document.querySelectorAll('.reveal').forEach(el => {
    observer.observe(el);
});

// --- Smooth Scrolling for Anchor Links ---
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// --- 3D Scene & GSAP ScrollTrigger ---
const canvas = document.querySelector('#webgl-canvas');
const loaderScreen = document.querySelector('#loader-screen');
const progressBar = document.querySelector('#progress-bar');
const progressText = document.querySelector('#progress-text');
const portfolioContent = document.querySelector('#portfolio-content');
const scrollSpacer = document.querySelector('#scroll-spacer');

// Force initial styles via JS to prevent CSS caching issues or transition conflicts
canvas.style.opacity = 0;
loaderScreen.style.backgroundColor = '#000000';

// Ensure scroll is at top on load
window.scrollTo(0, 0);
document.body.classList.add('locked'); // Prevent weird scrollbars during loading

const scene = new THREE.Scene();

// Camera setup
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
};
const camera = new THREE.PerspectiveCamera(45, sizes.width / sizes.height, 0.1, 1000);
// Initial camera position (zoomed out looking at the room)
camera.position.set(15, 8, 15);
scene.add(camera);

// Renderer setup
const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    alpha: true,
    antialias: true
});
renderer.setSize(sizes.width, sizes.height);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
// renderer.outputEncoding = THREE.sRGBEncoding;

// Lighting
const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xffffff, 1.5);
directionalLight.position.set(5, 10, 5);
scene.add(directionalLight);

// Target for the camera to look at initially
const initialTarget = new THREE.Vector3(0, 0, 0);
// Target for the camera when zoomed into the monitor (Approximation)
const monitorTarget = new THREE.Vector3(0, -1.5, -0.5);
const monitorCameraPos = new THREE.Vector3(0, -1.5, 0.2); // Get much closer

camera.lookAt(initialTarget);

// GLTF Loader
const gltfLoader = new THREE.GLTFLoader();
const loadingManager = new THREE.LoadingManager(
    // Loaded
    () => {
        // Fade out loader
        gsap.to(loaderScreen, {
            opacity: 0,
            duration: 1,
            delay: 0.5,
            onComplete: () => {
                loaderScreen.style.display = 'none';
                document.body.classList.remove('locked');

                // Fade in the 3D scene after the loading screen is gone
                gsap.to(canvas, { opacity: 1, duration: 1 });

                initScrollAnimation();
            }
        });
    },
    // Progress
    (itemUrl, itemsLoaded, itemsTotal) => {
        const progressRatio = itemsLoaded / itemsTotal;
        const progressPercent = Math.round(progressRatio * 100);
        progressBar.style.width = `${progressPercent}%`;
        progressText.textContent = `${progressPercent}%`;
    }
);

// We need to pass the loadingManager to the loader
gltfLoader.manager = loadingManager;

let roomModel = null;

gltfLoader.load(
    '3d/surveillance_room.glb',
    (gltf) => {
        roomModel = gltf.scene;
        // Center the model roughly
        const box = new THREE.Box3().setFromObject(roomModel);
        const center = box.getCenter(new THREE.Vector3());
        roomModel.position.x += (roomModel.position.x - center.x);
        roomModel.position.y += (roomModel.position.y - center.y);
        roomModel.position.z += (roomModel.position.z - center.z);

        scene.add(roomModel);
    },
    undefined,
    (error) => {
        console.error('Error loading model:', error);
        // Fallback in case of error
        loaderScreen.style.display = 'none';
        document.body.classList.remove('locked');
        scrollSpacer.style.display = 'none';
        canvas.style.display = 'none';
        portfolioContent.classList.add('visible');
    }
);

// Animation Loop
const clock = new THREE.Clock();
const tick = () => {
    // Render
    renderer.render(scene, camera);
    window.requestAnimationFrame(tick);
};
tick();

// Resize Event
window.addEventListener('resize', () => {
    sizes.width = window.innerWidth;
    sizes.height = window.innerHeight;
    camera.aspect = sizes.width / sizes.height;
    camera.updateProjectionMatrix();
    renderer.setSize(sizes.width, sizes.height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
});

// GSAP ScrollTrigger Setup
gsap.registerPlugin(ScrollTrigger);

// Custom object to hold the lookAt vector to tween it smoothly
const cameraTarget = { x: initialTarget.x, y: initialTarget.y, z: initialTarget.z };

function initScrollAnimation() {
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: scrollSpacer,
            start: "top top",
            end: "bottom bottom",
            scrub: 1.5, // Smooth scrubbing
            onLeave: (self) => {
                // Transition to Website
                gsap.to(canvas, { opacity: 0, duration: 1 });
                portfolioContent.classList.add('visible');
                // Hide spacer so normal scroll takes over
                setTimeout(() => {
                    self.kill(); // Remove the scroll trigger safely before resetting scroll
                    scrollSpacer.style.display = 'none';
                    canvas.style.display = 'none';
                    // Scroll to top of the real content smoothly
                    window.scrollTo(0, 0);
                }, 1000);
            }
        }
    });

    // 1. Move camera closer and rotate to face the monitor
    tl.to(camera.position, {
        x: monitorCameraPos.x,
        y: monitorCameraPos.y,
        z: monitorCameraPos.z,
        ease: "power2.inOut"
    }, 0);

    // 2. Animate the point the camera is looking at
    tl.to(cameraTarget, {
        x: monitorTarget.x,
        y: monitorTarget.y,
        z: monitorTarget.z,
        ease: "power2.inOut",
        onUpdate: () => {
            camera.lookAt(cameraTarget.x, cameraTarget.y, cameraTarget.z);
        }
    }, 0);
}
