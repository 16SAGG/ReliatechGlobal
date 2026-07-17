document.addEventListener('DOMContentLoaded', () => {
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
            const subject = `Consulta de ${nombre} - Servicio: ${servicio}`;
            const body = `Nombre: ${nombre}\nEmail: ${email}\nServicio de Interés: ${servicio}\n\nMensaje:\n${mensaje}`;

            window.location.href = `mailto:${emailTo}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

            // Show success message
            alert('¡Gracias! Se abrirá tu cliente de email para completar el envío.');
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
