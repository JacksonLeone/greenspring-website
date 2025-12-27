// GreenSpring Website JavaScript
document.addEventListener('DOMContentLoaded', function() {
    
    // Mobile Navigation Toggle
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (navToggle) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            navToggle.classList.toggle('active');
        });
    }
    
    // Smooth Scrolling for Navigation Links
    const navLinks = document.querySelectorAll('.nav-link[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                const offsetTop = targetElement.offsetTop - 80; // Account for fixed navbar
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                navMenu.classList.remove('active');
                navToggle.classList.remove('active');
                
                // Update active link
                navLinks.forEach(l => l.classList.remove('active'));
                this.classList.add('active');
            }
        });
    });
    
    // Navbar Background on Scroll
    const navbar = document.querySelector('.navbar');
    let lastScrollTop = 0;
    
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > 100) {
            navbar.style.background = 'rgba(10, 10, 10, 0.98)';
        } else {
            navbar.style.background = 'rgba(10, 10, 10, 0.95)';
        }
        
        lastScrollTop = scrollTop;
    });
    
    // Intersection Observer for Animation on Scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    const animateElements = document.querySelectorAll('.service-card, .result-stat');
    animateElements.forEach(el => observer.observe(el));
    
    // Counter Animation for Stats
    function animateCounter(element, target, duration = 2000) {
        const start = 0;
        const increment = target / (duration / 16);
        let current = start;
        
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                current = target;
                clearInterval(timer);
            }
            
            // Format number based on content
            let displayValue = Math.floor(current);
            if (element.textContent.includes('%')) {
                displayValue = Math.floor(current) + '%';
            } else if (element.textContent.includes('Months')) {
                displayValue = Math.floor(current) + ' Months';
            } else if (element.textContent.includes('150%')) {
                displayValue = Math.floor(current) + '%';
            }
            
            element.textContent = displayValue;
        }, 16);
    }
    
    // Trigger counter animations when stats come into view
    const statsObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const statNumber = entry.target.querySelector('.stat-number');
                if (statNumber && !statNumber.classList.contains('animated')) {
                    statNumber.classList.add('animated');
                    
                    // Extract number from text content
                    const text = statNumber.textContent;
                    let targetNumber = parseInt(text);
                    
                    if (text.includes('150%')) targetNumber = 150;
                    else if (text.includes('6 Months')) targetNumber = 6;
                    else if (text.includes('95%')) targetNumber = 95;
                    
                    animateCounter(statNumber, targetNumber);
                }
            }
        });
    }, { threshold: 0.5 });
    
    const resultStats = document.querySelectorAll('.result-stat');
    resultStats.forEach(stat => statsObserver.observe(stat));
    
    // Form Handling (placeholder for contact forms)
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            // Add form submission logic here
            console.log('Form submitted');
            alert('Thank you for your message. We will get back to you soon!');
        });
    });
    
    // Button Click Handlers
    const consultationBtns = document.querySelectorAll('.btn-primary');
    consultationBtns.forEach(btn => {
        if (btn.textContent.includes('Schedule') || btn.textContent.includes('Consultation')) {
            btn.addEventListener('click', function(e) {
                e.preventDefault();
                // Redirect to contact page or open calendar booking
                window.location.href = 'contact.html';
            });
        }
    });
    
    // Parallax Effect for Hero Section (subtle)
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const heroVisual = document.querySelector('.hero-visual');
        
        if (heroVisual) {
            const rate = scrolled * -0.1;
            heroVisual.style.transform = `translateY(${rate}px)`;
        }
    });
    
    // Add CSS classes for animations
    const style = document.createElement('style');
    style.textContent = `
        .animate-in {
            opacity: 1 !important;
            transform: translateY(0) !important;
            transition: all 0.6s ease;
        }
        
        .service-card:not(.animate-in),
        .result-stat:not(.animate-in) {
            opacity: 0;
            transform: translateY(30px);
            transition: all 0.6s ease;
        }
        
        .testimonial-card {
            opacity: 1;
            transform: translateY(0);
            transition: all 0.6s ease;
        }
        
        .nav-menu.active {
            display: flex;
            flex-direction: column;
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            background: rgba(10, 10, 10, 0.98);
            padding: 1rem 2rem;
            border-top: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        .nav-toggle.active span:nth-child(1) {
            transform: rotate(45deg) translate(5px, 5px);
        }
        
        .nav-toggle.active span:nth-child(2) {
            opacity: 0;
        }
        
        .nav-toggle.active span:nth-child(3) {
            transform: rotate(-45deg) translate(7px, -6px);
        }
        
        @media (max-width: 768px) {
            .nav-menu {
                display: none;
            }
        }
    `;
    document.head.appendChild(style);
});

// Utility Functions
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Performance optimization for scroll events
const handleScroll = debounce(function() {
    // Additional scroll handling can go here
}, 10);