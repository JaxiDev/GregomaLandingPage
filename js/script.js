// Mobile Menu Toggle
document.querySelector('.mobile-menu').addEventListener('click', function() {
    document.querySelector('nav').classList.toggle('active');
    this.querySelector('i').classList.toggle('fa-times');
    this.querySelector('i').classList.toggle('fa-bars');
});

// Close mobile menu when clicking a link
document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', function() {
        document.querySelector('nav').classList.remove('active');
        document.querySelector('.mobile-menu i').classList.remove('fa-times');
        document.querySelector('.mobile-menu i').classList.add('fa-bars');
    });
});

// FAQ Toggle
document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', function() {
        const item = this.parentNode;
        item.classList.toggle('active');
        
        // Close other open items
        document.querySelectorAll('.faq-item').forEach(otherItem => {
            if (otherItem !== item && otherItem.classList.contains('active')) {
                otherItem.classList.remove('active');
            }
        });
    });
});


// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 70,
                behavior: 'smooth'
            });
        }
    });
});

// Header scroll effect
window.addEventListener('scroll', function() {
    const header = document.getElementById('main-header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Intersection Observer for scroll animations
const animateOnScroll = function() {
    // Hero section animation (trigger immediately)
    const hero = document.querySelector('.hero');
    hero.classList.add('animated');
    
    // Set up Intersection Observer for other elements
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observe all elements with animation classes
    const sectionsToAnimate = [
        '.section-title',
        '.about-content',
        '.services-grid',
        '.experience',
        '.faq-container',
        '.contact-grid',
        '.footer-grid',
        'footer'
    ];
    
    sectionsToAnimate.forEach(selector => {
        const elements = document.querySelectorAll(selector);
        elements.forEach(element => {
            observer.observe(element);
        });
    });

    // Observador para sección de ubicaciones
    const ubicacionesSection = document.querySelector('.ubicaciones-container');
    const observerUbicaciones = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
    if(entry.isIntersecting) {
      entry.target.classList.add('animated');
      
      // Animación escalonada para items de la lista
      document.querySelectorAll('.ubicaciones-list li').forEach((item, index) => {
        setTimeout(() => {
          item.style.opacity = '1';
          item.style.transform = 'translateY(0)';
        }, index * 150);
      });
      
      // Animación para el SVG
      document.querySelector('.mapa-svg').style.opacity = '1';
      document.querySelector('.mapa-svg').style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.3 });

if(ubicacionesSection) {
  observerUbicaciones.observe(ubicacionesSection);
}
};


// Initialize animations when page loads
window.addEventListener('load', animateOnScroll);

// Validación de formulario
document.getElementById('contactForm').addEventListener('submit', function(event) {
  if (!this.checkValidity()) {
    event.preventDefault();
    event.stopPropagation();
  }
  this.classList.add('was-validated');
}, false);
