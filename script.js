// Typing Animation
const typedTextSpan = document.querySelector('.typed-text');
const textArray = [
    'iOS Developer',
    'AI & ML Enthusiast',
    'App Innovator',
    'Swift Expert'
];
let textArrayIndex = 0;
let charIndex = 0;

function type() {
    if (charIndex < textArray[textArrayIndex].length) {
        typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, 100);
    } else {
        setTimeout(erase, 2000);
    }
}

function erase() {
    if (charIndex > 0) {
        typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, 50);
    } else {
        textArrayIndex++;
        if (textArrayIndex >= textArray.length) textArrayIndex = 0;
        setTimeout(type, 1000);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    setTimeout(type, 1000);
});

// Scroll Progress Bar
const scrollProgress = document.querySelector('.scroll-progress');
window.addEventListener('scroll', () => {
    const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (window.scrollY / windowHeight) * 100;
    scrollProgress.style.width = `${scrolled}%`;
});

// Back to Top Button
const backToTopButton = document.getElementById('back-to-top');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopButton.classList.add('visible');
    } else {
        backToTopButton.classList.remove('visible');
    }
});

backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Mobile Menu Toggle
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');

mobileMenuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
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

// Navbar background change on scroll
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = 'none';
    }
});

// Add fade-in animation to sections when they come into view
const sections = document.querySelectorAll('.section');
const observerOptions = {
    root: null,
    threshold: 0.1,
    rootMargin: '0px'
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

sections.forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    observer.observe(section);
});

// Particles.js Configuration
particlesJS('particles-js', {
    particles: {
        number: { value: 80, density: { enable: true, value_area: 800 } },
        color: { value: '#000000' },
        shape: { type: 'circle' },
        opacity: { value: 0.5, random: false },
        size: { value: 3, random: true },
        line_linked: {
            enable: true,
            distance: 150,
            color: '#000000',
            opacity: 0.4,
            width: 1
        },
        move: {
            enable: true,
            speed: 3,
            direction: 'none',
            random: false,
            straight: false,
            out_mode: 'out',
            bounce: false
        }
    },
    interactivity: {
        detect_on: 'canvas',
        events: {
            onhover: { enable: true, mode: 'repulse' },
            onclick: { enable: true, mode: 'push' },
            resize: true
        }
    },
    retina_detect: true
});

// Custom Cursor
const cursorDot = document.querySelector('.cursor-dot');
const cursorOutline = document.querySelector('.cursor-outline');

window.addEventListener('mousemove', (e) => {
    const posX = e.clientX;
    const posY = e.clientY;

    cursorDot.style.left = `${posX}px`;
    cursorDot.style.top = `${posY}px`;

    cursorOutline.style.left = `${posX}px`;
    cursorOutline.style.top = `${posY}px`;
});

// Cursor hover effect
document.querySelectorAll('a, button, .project-card, .skill-category').forEach(el => {
    el.addEventListener('mouseenter', () => {
        cursorOutline.style.transform = 'translate(-50%, -50%) scale(1.5)';
        cursorOutline.style.opacity = '0.5';
    });

    el.addEventListener('mouseleave', () => {
        cursorOutline.style.transform = 'translate(-50%, -50%) scale(1)';
        cursorOutline.style.opacity = '1';
    });
});

// Skills Progress Bars
document.querySelectorAll('.skill-bar').forEach(bar => {
    const progress = bar.getAttribute('data-progress');
    bar.style.setProperty('--progress', progress);
});

// Page Transitions
const pageTransition = document.createElement('div');
pageTransition.classList.add('page-transition');
document.body.appendChild(pageTransition);

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.querySelector(anchor.getAttribute('href'));

        pageTransition.classList.add('active');
        setTimeout(() => {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            pageTransition.classList.remove('active');
        }, 500);
    });
});

// Project Image Modal
const imageModal = document.createElement('div');
imageModal.classList.add('image-modal');
imageModal.innerHTML = `
    <span class="modal-close">&times;</span>
    <img class="modal-image" src="" alt="Project Preview">
`;
document.body.appendChild(imageModal);

document.querySelectorAll('.project-image').forEach(img => {
    img.addEventListener('click', () => {
        const modalImg = imageModal.querySelector('.modal-image');
        modalImg.src = img.src;
        imageModal.classList.add('active');
    });
});

imageModal.querySelector('.modal-close').addEventListener('click', () => {
    imageModal.classList.remove('active');
}); 