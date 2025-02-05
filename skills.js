// Tab Switching
const tabBtns = document.querySelectorAll('.tab-btn');
const skillDetails = document.querySelectorAll('.skill-detail');

tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Remove active class from all buttons and details
        tabBtns.forEach(b => b.classList.remove('active'));
        skillDetails.forEach(detail => detail.classList.remove('active'));
        
        // Add active class to clicked button and corresponding detail
        btn.classList.add('active');
        const category = btn.dataset.category;
        document.getElementById(category).classList.add('active');
        
        // Trigger progress bar animations
        const progressBars = document.querySelectorAll(`#${category} .progress`);
        progressBars.forEach(bar => {
            bar.style.animation = 'none';
            bar.offsetHeight; // Trigger reflow
            bar.style.animation = 'progressAnimation 1s ease-out forwards';
        });
    });
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.2,
    rootMargin: '50px'
};

// Animate progress bars on scroll
const progressBars = document.querySelectorAll('.progress');
const progressObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'progressAnimation 1s ease-out forwards';
            progressObserver.unobserve(entry.target);
        }
    });
}, observerOptions);

progressBars.forEach(bar => {
    progressObserver.observe(bar);
});

// Animate timeline items on scroll
const timelineItems = document.querySelectorAll('.timeline-item');
const timelineObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateX(0)';
            timelineObserver.unobserve(entry.target);
        }
    });
}, observerOptions);

timelineItems.forEach(item => {
    item.style.opacity = '0';
    item.style.transform = 'translateX(-20px)';
    item.style.transition = 'all 0.5s ease-out';
    timelineObserver.observe(item);
});

// Animate certification cards on scroll
const certCards = document.querySelectorAll('.cert-card');
const certObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            certObserver.unobserve(entry.target);
        }
    });
}, observerOptions);

certCards.forEach((card, index) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'all 0.5s ease-out';
    card.style.transitionDelay = `${index * 0.1}s`;
    certObserver.observe(card);
});

// Project card hover effects
const projectCards = document.querySelectorAll('.project-card');
projectCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-10px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0) scale(1)';
    });
});

// Mobile menu toggle
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');

mobileMenuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (!e.target.closest('.nav-content')) {
        navLinks.classList.remove('active');
    }
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add parallax effect to hero section
const skillsHero = document.querySelector('.skills-hero');
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    skillsHero.style.backgroundPositionY = `${scrolled * 0.5}px`;
});

// Initialize animations on page load
document.addEventListener('DOMContentLoaded', () => {
    // Show initial tab content
    document.querySelector('.tab-btn.active').click();
    
    // Animate hero section
    const hero = document.querySelector('.skills-hero');
    hero.style.opacity = '0';
    hero.style.transform = 'translateY(20px)';
    
    setTimeout(() => {
        hero.style.opacity = '1';
        hero.style.transform = 'translateY(0)';
        hero.style.transition = 'all 0.8s ease-out';
    }, 100);
}); 