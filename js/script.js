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

// Form submission
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Gracias por su mensaje. Nos pondremos en contacto con usted pronto.');
    this.reset();
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
};

// Initialize animations when page loads
window.addEventListener('load', animateOnScroll);