// Navegación móvil
const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');
const navLinks = document.querySelectorAll('.nav-links li');

// Toggle del menú de navegación
burger.addEventListener('click', () => {
    // Toggle Nav
    nav.classList.toggle('active');
    
    // Animar los enlaces
    navLinks.forEach((link, index) => {
        if (link.style.animation) {
            link.style.animation = '';
        } else {
            link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
        }
    });
    
    // Animación del botón de hamburguesa
    burger.classList.toggle('toggle');
});

// Cerrar el menú al hacer clic en un enlace
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.remove('active');
        burger.classList.remove('toggle');
        navLinks.forEach(link => {
            link.style.animation = '';
        });
    });
});

// Animación de desplazamiento suave para los enlaces del menú
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80, // Ajuste para el header fijo
                behavior: 'smooth'
            });
        }
    });
});

// Animación al hacer scroll
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.menu-item, .promo-card, .info, .mapa');
    
    elements.forEach((element, index) => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        
        if (elementPosition < screenPosition) {
            element.classList.add('animate');
            if (index % 2 === 0) {
                element.classList.add('delay-1');
            } else if (index % 3 === 0) {
                element.classList.add('delay-2');
            } else {
                element.classList.add('delay-3');
            }
        }
    });
};

// Ejecutar la animación al cargar la página
window.addEventListener('load', () => {
    // Asegurarse de que el menú esté cerrado al cargar
    nav.classList.remove('active');
    burger.classList.remove('toggle');
    
    // Ejecutar animación inicial
    animateOnScroll();
});

// Ejecutar la animación al hacer scroll
window.addEventListener('scroll', animateOnScroll);

// Actualizar el año en el footer
const year = new Date().getFullYear();
document.querySelector('footer p').innerHTML = `&copy; ${year} Sergio Burger. Todos los derechos reservados.`;