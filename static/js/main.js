const translations = {
    es: {
        'nav.inicio': 'Inicio',
        'nav.nosotros': 'Nosotros',
        'nav.mision': 'Misión',
        'nav.vision': 'Visión',
        'nav.servicio': 'Servicio',
        'nav.contacto': 'Contacto',
        'aria.theme': 'Cambiar entre modo claro y oscuro',
        'title.theme': 'Cambiar tema',
        'aria.menu': 'Abrir menú de navegación móvil',
        'hero.title': 'La Gerencia de la Incertidumbre en <span class="text-highlight">Gestión de Activos</span>',
        'hero.subtitle': '<strong>RELIATECH GLOBAL, C.A.</strong> transforma datos dispersos en decisiones estratégicas de alta precisión. Aplicamos <strong>ingeniería estocástica avanzada</strong> e instrumentos científicos de vanguardia para cuantificar lo invisible y maximizar la rentabilidad de su infraestructura.',
        'hero.btn_primary': 'Solicitar Consultoría Experta',
        'hero.btn_secondary': 'Folleto Corporativo',
        'carousel.1': 'Inspección basada en riesgo',
        'carousel.2': 'Inspección externa de tanques de crudo y productos',
        'carousel.3': 'Caracterización de espesores por placas y anillos de tanques',
        'carousel.4': 'Inspección de equipos rotativos',
        'carousel.5': 'Caracterización de TPPF y TPFS para el RAM',
        'carousel.6': 'Simulación RAM',
        'carousel.7': 'Instalación de sensores de vibración motor-bomba',
        'carousel.8': 'Análisis de esfuerzos en impulsor',
        'carousel.9': 'Inspección en monoboya',
        'carousel.10': 'Inspección de junta de expansión',
        'carousel.prev': 'Imagen anterior',
        'carousel.next': 'Siguiente imagen',
        'nosotros.title': 'Quiénes <span class="highlight-word">Somos</span>',
        'nosotros.body': '<strong>RELIATECH GLOBAL, C.A.</strong> es una empresa de Ingeniería de Confiabilidad y Gestión de Activos que acompaña a la industria en su tránsito de la operación reactiva hacia la excelencia operacional. Integramos ingeniería especializada, tecnología propia y un equipo multidisciplinario certificado en confiabilidad, mantenimiento, automatización, instrumentación e integridad mecánica.',
        'mision.title': 'Nuestra <span class="highlight-word">Misión</span>',
        'mision.body': 'Nuestra misión es maximizar el valor de los activos industriales de nuestros clientes mediante ingeniería de confiabilidad, mantenimiento especializado y soluciones tecnológicas, transformando datos de desempeño en decisiones que incrementan la rentabilidad, la seguridad y la sostenibilidad del negocio.',
        'vision.title': 'Nuestra <span class="highlight-word">Visión</span>',
        'vision.body': 'Ser la autoridad de referencia en América Latina en la transformación de operaciones reactivas en ecosistemas de Clase Mundial, reconocidos por el equilibrio óptimo entre costo, riesgo y desempeño.',
        'cost.body': 'Al equilibrar <strong> el Costo, el Riesgo y el Rendimiento</strong>, ubicamos sus activos en el punto óptimo de menor costo total. Evitamos que el exceso de mantenimiento tradicional destruya el OPEX, y que la falta del mismo dispare riesgos. La confiabilidad industrial científica es su mayor ventaja competitiva.',
        'servicio.section_title': 'Portafolio de Confiabilidad Integral',
        'servicio.card1.title': 'Mapeo Fundacional e Integridad del Dato',
        'servicio.card1.body': 'Establecemos las bases del conocimiento técnico e identificación taxonómica de activos, estructurando la criticidad integral de activos y la planificación y programación sistemática del mantenimiento.',
        'servicio.card2.title': 'Confiabilidad Avanzada y Proactiva',
        'servicio.card2.body': 'Eliminación sistemática de fallas y optimización de la disponibilidad mediante la aplicación técnica de metodologías <a href="https://es.wikipedia.org/wiki/Mantenimiento_centrado_en_la_confiabilidad" target="_blank" rel="noopener noreferrer" style="color: inherit; text-decoration: underline;">RCM</a> (Mantenimiento Centrado en Confiabilidad), RCA (Análisis de Causa Raíz), FMEA y TPM.',
        'servicio.card3.title': 'Ingeniería RAM e Integración ISO 55000',
        'servicio.card3.body': 'Estudios RAM (Confiabilidad, Disponibilidad y Mantenibilidad) mediante modelado estocástico, análisis de Costo de Ciclo de Vida (<a href="https://www.iso.org/standard/55088.html" target="_blank" rel="noopener noreferrer" style="color: inherit; text-decoration: underline;">LCC</a>), Inspección Basada en Riesgo (RBI) e integración organizacional bajo estándares ISO 55000.',
        'quehacemos.section_title': '¿Qué hacemos?',
        'quehacemos.card1.title': 'Ingeniería de Confiabilidad',
        'quehacemos.card1.body': 'Desarrollo de estudios especializados en confiabilidad, implementación de monitoreo, análisis predictivo y definición de estrategias de mantenimiento.',
        'quehacemos.card2.title': 'Ingeniería Multidisciplinaria',
        'quehacemos.card2.body': 'Ingeniería conceptual, básica y de detalle, que ofrecen soluciones integrales en todas las etapas de maduración de un proyecto.',
        'quehacemos.card3.title': 'Automatización de Procesos',
        'quehacemos.card3.body': 'Diseño e implementación de soluciones de automatización e instrumentación de procesos.',
        'quehacemos.card4.title': 'Soluciones Tecnológicas',
        'quehacemos.card4.body': 'Desarrollo de Plataformas propias para la optimización de procesos, administración de datos de desempeño, implementación de gemelos digitales, KPI´s y herramientas para el procesamiento y análisis de data.',
        'quehacemos.card5.title': 'Mantenimiento Especializado',
        'quehacemos.card5.body': 'Inspección, reparación y mantenimiento de equipos estáticos, dinámicos, eléctricos e instrumentación en campo.',
        'quehacemos.card6.title': 'Procuras y Suministros',
        'quehacemos.card6.body': 'Adquisición y abastecimiento de equipos, repuestos y materiales críticos para la operación.',
        'sectores.section_title': 'Sectores Industriales que Potenciamos',
        'sectores.section_subtitle': 'Nuestras soluciones de ingeniería y optimización se adaptan a las exigencias críticas de operaciones de alta complejidad.',
        'sectores.card1.title': 'Petróleo y Gas',
        'sectores.card1.body': 'Reduce paradas no programadas en operaciones de extracción, refinación y transporte, donde el riesgo de fallas catastróficas y el impacto ambiental son especialmente altos.',
        'sectores.card2.title': 'Generación y Energía',
        'sectores.card2.body': 'En plantas de generación, Reliatech Global implementa RCM y TPM para extender el MTBF de turbinas, generadores y equipos auxiliares, reduciendo el MTTR cuando ocurre una intervención.',
        'sectores.card3.title': 'Industria y Procesos',
        'sectores.card3.body': 'Reliatech Global aplica su Pirámide GIA para estabilizar líneas de producción, reducir cuellos de botella y aumentar la capacidad de planta. El Análisis Causa Raíz (RCA) y la gestión con EAM permiten romper el ciclo reactivo de recortes-paradas-fallas.',
        'stats.label1': 'Activos en Taxonomía',
        'stats.label2': 'Disponibilidad RAM',
        'stats.label3': 'Defensa Estocástica',
        'stats.label4': 'Cuartil de Desempeño',
        'stats.suffix4': 'er',
        'contacto.title': '¡Potencie su Confiabilidad Industrial!',
        'contacto.subtitle': 'Contacte a nuestros expertos para elevar sus estándares de gestión de activos. Respuesta garantizada en menos de 24 horas.',
        'contacto.label_contact': 'Contacto:',
        'contacto.address': 'Barcelona, Edo. Anzoátegui, Venezuela',
        'contacto.address2': 'Zona Industrial Los Montones, II Etapa.',
        'contacto.download_brochure': 'Descargar Folleto Corporativo',
        'contacto.share_text': 'Comparta nuestra propuesta:',
        'contacto.share_linkedin': 'Compartir en LinkedIn',
        'contacto.share_twitter': 'Compartir en Twitter',
        'contacto.share_whatsapp': 'Compartir en WhatsApp',
        'form.name': 'Nombre completo',
        'form.email': 'Email corporativo',
        'form.service': 'Servicio de interés',
        'form.option_confiabilidad': 'Ingeniería de Confiabilidad',
        'form.option_taxonomia': 'Taxonomía de Datos',
        'form.option_digital': 'Transformación Digital',
        'form.message': 'Mensaje',
        'form.message_placeholder': 'Cuéntenos sobre su proyecto...',
        'form.submit': 'Enviar Mensaje',
        'form.subject_prefix': 'Consulta de',
        'form.service_label': 'Servicio de Interés',
        'form.name_label': 'Nombre',
        'form.email_label': 'Email',
        'form.message_label': 'Mensaje',
        'form.success_alert': '¡Gracias! Se abrirá tu cliente de email para completar el envío.',
        'footer.tagline': 'Expertos en ingeniería estocástica de confiabilidad y gestión de activos industriales.',
        'footer.nav_title': 'Navegación',
        'footer.services': 'Servicios',
        'footer.legal_title': 'Legal',
        'footer.privacy': 'Privacidad',
        'footer.terms': 'Términos',
        'footer.cookies': 'Cookies',
        'footer.copyright': '&copy; 2026 RELIATECH GLOBAL, C.A. Todos los derechos reservados.'
    },
    en: {
        'nav.inicio': 'Home',
        'nav.nosotros': 'About Us',
        'nav.mision': 'Mission',
        'nav.vision': 'Vision',
        'nav.servicio': 'Services',
        'nav.contacto': 'Contact',
        'aria.theme': 'Toggle between light and dark mode',
        'title.theme': 'Change theme',
        'aria.menu': 'Open mobile navigation menu',
        'hero.title': 'Managing Uncertainty in <span class="text-highlight">Asset Management</span>',
        'hero.subtitle': '<strong>RELIATECH GLOBAL, C.A.</strong> transforms scattered data into high-precision strategic decisions. We apply <strong>advanced stochastic engineering</strong> and cutting-edge scientific instruments to quantify the invisible and maximize the profitability of your infrastructure.',
        'hero.btn_primary': 'Request Expert Consulting',
        'hero.btn_secondary': 'Corporate Brochure',
        'carousel.1': 'Risk-based inspection',
        'carousel.2': 'External inspection of crude oil and product tanks',
        'carousel.3': 'Thickness characterization of tank plates and rings',
        'carousel.4': 'Inspection of rotating equipment',
        'carousel.5': 'TPPF and TPFS characterization for RAM',
        'carousel.6': 'RAM Simulation',
        'carousel.7': 'Installation of motor-pump vibration sensors',
        'carousel.8': 'Impeller stress analysis',
        'carousel.9': 'Single point mooring (SPM) inspection',
        'carousel.10': 'Expansion joint inspection',
        'carousel.prev': 'Previous image',
        'carousel.next': 'Next image',
        'nosotros.title': 'Who <span class="highlight-word">We Are</span>',
        'nosotros.body': '<strong>RELIATECH GLOBAL, C.A.</strong> is a Reliability Engineering and Asset Management company that guides industry through its transition from reactive operation to operational excellence. We integrate specialized engineering, proprietary technology, and a multidisciplinary team certified in reliability, maintenance, automation, instrumentation, and mechanical integrity.',
        'mision.title': 'Our <span class="highlight-word">Mission</span>',
        'mision.body': "Our mission is to maximize the value of our clients' industrial assets through reliability engineering, specialized maintenance, and technological solutions, transforming performance data into decisions that increase profitability, safety, and business sustainability.",
        'vision.title': 'Our <span class="highlight-word">Vision</span>',
        'vision.body': 'To be the leading authority in Latin America in transforming reactive operations into World Class ecosystems, recognized for the optimal balance between cost, risk, and performance.',
        'cost.body': 'By balancing <strong> Cost, Risk, and Performance</strong>, we position your assets at the optimal point of lowest total cost. We prevent excessive traditional maintenance from destroying OPEX, and the lack thereof from triggering risks. Scientific industrial reliability is your greatest competitive advantage.',
        'servicio.section_title': 'Comprehensive Reliability Portfolio',
        'servicio.card1.title': 'Foundational Mapping and Data Integrity',
        'servicio.card1.body': 'We establish the foundations of technical knowledge and asset taxonomic identification, structuring comprehensive asset criticality and systematic maintenance planning and scheduling.',
        'servicio.card2.title': 'Advanced and Proactive Reliability',
        'servicio.card2.body': 'Systematic elimination of failures and availability optimization through the technical application of <a href="https://es.wikipedia.org/wiki/Mantenimiento_centrado_en_la_confiabilidad" target="_blank" rel="noopener noreferrer" style="color: inherit; text-decoration: underline;">RCM</a> (Reliability Centered Maintenance), RCA (Root Cause Analysis), FMEA, and TPM methodologies.',
        'servicio.card3.title': 'RAM Engineering and ISO 55000 Integration',
        'servicio.card3.body': 'RAM Studies (Reliability, Availability, and Maintainability) through stochastic modeling, Life Cycle Cost analysis (<a href="https://www.iso.org/standard/55088.html" target="_blank" rel="noopener noreferrer" style="color: inherit; text-decoration: underline;">LCC</a>), Risk-Based Inspection (RBI), and organizational integration under ISO 55000 standards.',
        'quehacemos.section_title': 'What We Do',
        'quehacemos.card1.title': 'Reliability Engineering',
        'quehacemos.card1.body': 'Development of specialized reliability studies, monitoring implementation, predictive analysis, and definition of maintenance strategies.',
        'quehacemos.card2.title': 'Multidisciplinary Engineering',
        'quehacemos.card2.body': 'Conceptual, basic, and detailed engineering, offering comprehensive solutions at every stage of project maturity.',
        'quehacemos.card3.title': 'Process Automation',
        'quehacemos.card3.body': 'Design and implementation of process automation and instrumentation solutions.',
        'quehacemos.card4.title': 'Technology Solutions',
        'quehacemos.card4.body': 'Development of proprietary platforms for process optimization, performance data management, digital twin implementation, KPIs, and data processing and analysis tools.',
        'quehacemos.card5.title': 'Specialized Maintenance',
        'quehacemos.card5.body': 'Inspection, repair, and maintenance of static, dynamic, and electrical equipment, and field instrumentation.',
        'quehacemos.card6.title': 'Procurement and Supplies',
        'quehacemos.card6.body': 'Procurement and supply of critical equipment, spare parts, and materials for operations.',
        'sectores.section_title': 'Industries We Empower',
        'sectores.section_subtitle': 'Our engineering and optimization solutions adapt to the critical demands of highly complex operations.',
        'sectores.card1.title': 'Oil and Gas',
        'sectores.card1.body': 'Reduces unplanned shutdowns in extraction, refining, and transportation operations, where the risk of catastrophic failures and environmental impact is especially high.',
        'sectores.card2.title': 'Power Generation and Energy',
        'sectores.card2.body': 'In generation plants, Reliatech Global implements RCM and TPM to extend the MTBF of turbines, generators, and auxiliary equipment, reducing MTTR when an intervention occurs.',
        'sectores.card3.title': 'Industry and Processes',
        'sectores.card3.body': 'Reliatech Global applies its GIA Pyramid to stabilize production lines, reduce bottlenecks, and increase plant capacity. Root Cause Analysis (RCA) and EAM management break the reactive cycle of cutbacks-shutdowns-failures.',
        'stats.label1': 'Assets in Taxonomy',
        'stats.label2': 'RAM Availability',
        'stats.label3': 'Stochastic Defense',
        'stats.label4': 'Performance Quartile',
        'stats.suffix4': 'st',
        'contacto.title': 'Empower Your Industrial Reliability!',
        'contacto.subtitle': 'Contact our experts to elevate your asset management standards. Guaranteed response within 24 hours.',
        'contacto.label_contact': 'Contact:',
        'contacto.address': 'Barcelona, Anzoátegui State, Venezuela',
        'contacto.address2': 'Los Montones Industrial Zone, Phase II.',
        'contacto.download_brochure': 'Download Corporate Brochure',
        'contacto.share_text': 'Share our proposal:',
        'contacto.share_linkedin': 'Share on LinkedIn',
        'contacto.share_twitter': 'Share on Twitter',
        'contacto.share_whatsapp': 'Share on WhatsApp',
        'form.name': 'Full name',
        'form.email': 'Corporate email',
        'form.service': 'Service of interest',
        'form.option_confiabilidad': 'Reliability Engineering',
        'form.option_taxonomia': 'Data Taxonomy',
        'form.option_digital': 'Digital Transformation',
        'form.message': 'Message',
        'form.message_placeholder': 'Tell us about your project...',
        'form.submit': 'Send Message',
        'form.subject_prefix': 'Inquiry from',
        'form.service_label': 'Service of Interest',
        'form.name_label': 'Name',
        'form.email_label': 'Email',
        'form.message_label': 'Message',
        'form.success_alert': 'Thank you! Your email client will open to complete the submission.',
        'footer.tagline': 'Experts in stochastic reliability engineering and industrial asset management.',
        'footer.nav_title': 'Navigation',
        'footer.services': 'Services',
        'footer.legal_title': 'Legal',
        'footer.privacy': 'Privacy',
        'footer.terms': 'Terms',
        'footer.cookies': 'Cookies',
        'footer.copyright': '&copy; 2026 RELIATECH GLOBAL, C.A. All rights reserved.'
    }
};

let currentLang = 'es';

function applyLanguage(lang) {
    currentLang = translations[lang] ? lang : 'es';
    document.documentElement.setAttribute('lang', currentLang);

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const value = translations[currentLang][el.getAttribute('data-i18n')];
        if (value !== undefined) el.textContent = value;
    });
    document.querySelectorAll('[data-i18n-html]').forEach(el => {
        const value = translations[currentLang][el.getAttribute('data-i18n-html')];
        if (value !== undefined) el.innerHTML = value;
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const value = translations[currentLang][el.getAttribute('data-i18n-placeholder')];
        if (value !== undefined) el.setAttribute('placeholder', value);
    });
    document.querySelectorAll('[data-i18n-aria]').forEach(el => {
        const value = translations[currentLang][el.getAttribute('data-i18n-aria')];
        if (value !== undefined) el.setAttribute('aria-label', value);
    });
    document.querySelectorAll('[data-i18n-title]').forEach(el => {
        const value = translations[currentLang][el.getAttribute('data-i18n-title')];
        if (value !== undefined) el.setAttribute('title', value);
    });

    const langToggleText = document.getElementById('lang-toggle-text');
    if (langToggleText) {
        langToggleText.textContent = currentLang === 'es' ? 'EN' : 'ES';
    }

    localStorage.setItem('lang', currentLang);
}

document.addEventListener('DOMContentLoaded', () => {
    // --- Selector de Idioma ---
    const savedLang = localStorage.getItem('lang');
    const browserLang = navigator.language && navigator.language.toLowerCase().startsWith('en') ? 'en' : 'es';
    applyLanguage(savedLang || browserLang);

    const langToggle = document.getElementById('lang-toggle');
    if (langToggle) {
        langToggle.addEventListener('click', () => {
            applyLanguage(currentLang === 'es' ? 'en' : 'es');
        });
    }

    // --- Scroll Reveal ---
    // --- Barra de Progreso de Lectura ---
    const progressBar = document.getElementById('progress-bar');
    window.addEventListener('scroll', () => {
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;
        if (progressBar) {
            progressBar.style.width = scrolled + "%";
        }
    });

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            } else {
                // Remove class to animate out when not visible
                entry.target.classList.remove('active');
            }
        });
    }, observerOptions);

    const revealElements = document.querySelectorAll('.reveal, .reveal-img, .scroll-highlighter');
    revealElements.forEach(el => observer.observe(el));

    // --- Carrusel Hero ---
    const carousel = document.getElementById('hero-carousel');
    if (carousel) {
        const slides = carousel.querySelectorAll('.carousel-slide');
        const indicators = carousel.querySelectorAll('.carousel-indicator');
        const prevBtn = carousel.querySelector('.carousel-arrow-left');
        const nextBtn = carousel.querySelector('.carousel-arrow-right');
        let currentIndex = 0;
        let autoplayTimer = null;
        
        // NUEVOS GUARDIAS
        let isHovered = false; // Detecta si el mouse está encima
        let isMoving = false;  // Evita el spam de clics rápidos

        const goToSlide = (index) => {
            // Si el carrusel está cambiando de diapositiva, ignoramos nuevos clics por un instante
            if (isMoving) return; 
            isMoving = true;

            slides[currentIndex].classList.remove('active');
            indicators[currentIndex].classList.remove('active');
            
            currentIndex = (index + slides.length) % slides.length;
            
            slides[currentIndex].classList.add('active');
            indicators[currentIndex].classList.add('active');

            // Desbloqueamos los clics tras un breve retraso (ej. 400ms). 
            // Ajústalo al tiempo que dure tu animación CSS.
            setTimeout(() => {
                isMoving = false;
            }, 400); 

            resetAutoplay();
        };

        const nextSlide = () => {
            goToSlide(currentIndex + 1);
        };
        const prevSlide = () => {
            goToSlide(currentIndex - 1);
        };

        const startAutoplay = () => {
            // Doble seguridad: limpiamos cualquier timer previo antes de crear uno nuevo
            stopAutoplay();
            autoplayTimer = setInterval(nextSlide, 5000);
        };

        const stopAutoplay = () => {
            if (autoplayTimer) {
                clearInterval(autoplayTimer);
                autoplayTimer = null;
            }
        };

        const resetAutoplay = () => {
            stopAutoplay();
            // SÓLO reactivamos el autoplay si el usuario NO tiene el mouse encima
            if (!isHovered) {
                startAutoplay();
            }
        };

        nextBtn.addEventListener('click', () => {
            nextSlide();
        });

        prevBtn.addEventListener('click', () => {
            prevSlide();
        });

        indicators.forEach((indicator, index) => {
            indicator.addEventListener('click', () => {
                goToSlide(index);
            });
        });

        // Controlamos el estado del mouse de manera precisa
        carousel.addEventListener('mouseenter', () => {
            isHovered = true;
            stopAutoplay();
        });

        carousel.addEventListener('mouseleave', () => {
            isHovered = false;
            startAutoplay();
        });

        startAutoplay();
    }

    // --- Botón Magnético ---
    const magneticBtns = document.querySelectorAll('.btn-magnetic');
    
    magneticBtns.forEach(btn => {
        btn.addEventListener('mousemove', (e) => {
            const position = btn.getBoundingClientRect();
            const x = e.pageX - position.left - position.width / 2;
            const y = e.pageY - position.top - position.height / 2;
            
            // Mover el botón un máximo de 15px en cualquier dirección
            btn.style.transform = `translate(${x * 0.3}px, ${y * 0.5}px)`;
        });

        btn.addEventListener('mouseleave', () => {
            btn.style.transform = 'translate(0px, 0px)';
        });
    });

    // --- Menú Móvil ---
    const menuToggle = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('.nav-links');
    
    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            // Cambiar icono entre menu y x
            const icon = menuToggle.querySelector('i');
            const isMenu = icon.getAttribute('data-lucide') === 'menu';
            icon.setAttribute('data-lucide', isMenu ? 'x' : 'menu');
            lucide.createIcons();
        });
    }

    // Cerrar menú al hacer click en un enlace
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            const icon = menuToggle.querySelector('i');
            icon.setAttribute('data-lucide', 'menu');
            lucide.createIcons();
        });
    });

    // --- Manejo de Formulario de Contacto ---
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const nombre = document.getElementById('nombre').value;
            const email = document.getElementById('email').value;
            const servicio = document.getElementById('servicio-interes').value;
            const mensaje = document.getElementById('mensaje').value;

            const emailTo = 'contacto@reliatechglobal.com';
            const t = translations[currentLang];
            const subject = `${t['form.subject_prefix']} ${nombre} - ${t['form.service_label']}: ${servicio}`;
            const body = `${t['form.name_label']}: ${nombre}\n${t['form.email_label']}: ${email}\n${t['form.service_label']}: ${servicio}\n\n${t['form.message_label']}:\n${mensaje}`;

            window.location.href = `mailto:${emailTo}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

            // Show success message
            alert(t['form.success_alert']);
            contactForm.reset();
        });
    }

    // --- Animación de Contadores (Stats) ---
    const statsSection = document.getElementById('stats');
    const counters = document.querySelectorAll('.stat-number');
    let animated = false;

    const animateCounters = () => {
        counters.forEach(counter => {
            const target = +counter.getAttribute('data-target');
            const duration = 2000; // 2 segundos
            const increment = target / (duration / 16); // 60fps aprox
            
            let current = 0;
            const updateCount = () => {
                if (current < target) {
                    current += increment;
                    counter.innerText = Math.ceil(current);
                    setTimeout(updateCount, 16);
                } else {
                    counter.innerText = target;
                }
            };
            updateCount();
        });
    };

    if (statsSection) {
        const statsObserver = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting && !animated) {
                animateCounters();
                animated = true; // Solo animar una vez
            }
        }, { threshold: 0.5 });
        statsObserver.observe(statsSection);
    }

    // --- Gestión de Modo Oscuro ---
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.documentElement; // Usamos documentElement para [data-theme]
    
    // Cargar tema guardado o preferencia del sistema
    const savedTheme = localStorage.getItem('theme');
    const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    const currentTheme = savedTheme || systemTheme;
    
    body.setAttribute('data-theme', currentTheme);
    updateThemeIcon(currentTheme);

    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            const newTheme = body.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
            body.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
            updateThemeIcon(newTheme);
        });
    }

    function updateThemeIcon(theme) {
        const icon = themeToggle.querySelector('i');
        if (icon) {
            icon.setAttribute('data-lucide', theme === 'dark' ? 'sun' : 'moon');
            lucide.createIcons();
        }
    }

    // Inicializar iconos de Lucide
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
});
