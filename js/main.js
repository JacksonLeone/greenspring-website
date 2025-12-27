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
    
    // Professional Contact Form Handler
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(this);
            const name = formData.get('name') || 'Not provided';
            const email = formData.get('email') || 'Not provided';
            const company = formData.get('company') || 'Not provided';
            const phone = formData.get('phone') || 'Not provided';
            const industry = formData.get('industry') || 'Not provided';
            const companySize = formData.get('company-size') || 'Not provided';
            const interest = formData.get('interest') || 'Not provided';
            const message = formData.get('message') || 'Not provided';
            const timeline = formData.get('timeline') || 'Not provided';
            
            // Create professional email subject
            const subject = `New Business Inquiry from ${company}`;
            
            // Create professional email body
            const emailBody = `Hello,

I am interested in discussing business consulting services with GreenSpring.

CONTACT INFORMATION:
• Name: ${name}
• Company: ${company}
• Email: ${email}
• Phone: ${phone}
• Industry: ${industry}

PROJECT DETAILS:
• Primary Interest: ${interest}
• Company Size: ${companySize}
• Preferred Timeline: ${timeline}

MESSAGE:
${message}

---
This inquiry was submitted through the GreenSpring website contact form.

Best regards,
${name}
${company}`;
            
            // Create mailto URL with proper encoding
            const mailtoUrl = `mailto:greenspringjohn@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(emailBody)}`;
            
            // Open email client
            window.location.href = mailtoUrl;
            
            console.log('Professional email template generated');
        });
    }
    
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