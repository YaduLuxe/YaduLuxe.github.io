// Typing Animation
document.addEventListener('DOMContentLoaded', function() {
    const typedTextSpan = document.querySelector('.typed-text');
    const cursorSpan = document.querySelector('.cursor');
    const textArray = [
        'iOS Developer',
        'AI & ML Enthusiast',
        'Full Stack Developer',
        'Tech Innovator'
    ];
    let textArrayIndex = 0;
    let charIndex = 0;

    function type() {
        if (charIndex < textArray[textArrayIndex].length) {
            if (!cursorSpan.classList.contains('typing')) {
                cursorSpan.classList.add('typing');
            }
            typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
            charIndex++;
            setTimeout(type, 100);
        } else {
            cursorSpan.classList.remove('typing');
            setTimeout(erase, 2000);
        }
    }

    function erase() {
        if (charIndex > 0) {
            if (!cursorSpan.classList.contains('typing')) {
                cursorSpan.classList.add('typing');
            }
            typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
            charIndex--;
            setTimeout(erase, 50);
        } else {
            cursorSpan.classList.remove('typing');
            textArrayIndex++;
            if (textArrayIndex >= textArray.length) textArrayIndex = 0;
            setTimeout(type, 1000);
        }
    }

    if (textArray.length) setTimeout(type, 1000);
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
    mobileMenuBtn.classList.toggle('active');
    navLinks.classList.toggle('active');
    document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : '';
});

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (!e.target.closest('.nav-content') && !e.target.closest('.nav-links')) {
        mobileMenuBtn.classList.remove('active');
        navLinks.classList.remove('active');
        document.body.style.overflow = '';
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

// Scroll Down Click Handler
const scrollDown = document.querySelector('.scroll-down');
scrollDown.addEventListener('click', () => {
    const aboutSection = document.querySelector('#about');
    aboutSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
});

// Hide scroll down icon when scrolling past hero section
const heroSection = document.querySelector('.hero');
window.addEventListener('scroll', () => {
    const heroHeight = heroSection.offsetHeight;
    const scrollPosition = window.scrollY;
    
    if (scrollPosition > heroHeight * 0.5) {
        scrollDown.style.opacity = '0';
        scrollDown.style.pointerEvents = 'none';
    } else {
        scrollDown.style.opacity = '1';
        scrollDown.style.pointerEvents = 'all';
    }
});

// Contact Form Animations
const contactForm = document.getElementById('contactForm');
const formInputs = document.querySelectorAll('.input-wrapper input, .input-wrapper textarea');

formInputs.forEach(input => {
    // Add focus class on input focus
    input.addEventListener('focus', () => {
        input.parentElement.classList.add('focused');
    });

    // Remove focus class on input blur
    input.addEventListener('blur', () => {
        if (input.value === '') {
            input.parentElement.classList.remove('focused');
        }
    });

    // Check initial state (for browser autofill)
    if (input.value !== '') {
        input.parentElement.classList.add('focused');
    }
});

// Form submission animation
contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const submitBtn = contactForm.querySelector('.submit-btn');
    const btnText = submitBtn.querySelector('.btn-text');
    const btnIcon = submitBtn.querySelector('.btn-icon');

    // Add loading state
    submitBtn.disabled = true;
    btnText.textContent = 'Sending...';
    btnIcon.innerHTML = '<i class="fas fa-spinner fa-spin"></i>';

    // Simulate form submission (replace with actual form submission)
    try {
        await new Promise(resolve => setTimeout(resolve, 2000));
        
        // Success state
        btnText.textContent = 'Sent Successfully!';
        btnIcon.innerHTML = '<i class="fas fa-check"></i>';
        
        // Reset form
        setTimeout(() => {
            contactForm.reset();
            btnText.textContent = 'Send Message';
            btnIcon.innerHTML = '<i class="fas fa-paper-plane"></i>';
            submitBtn.disabled = false;
            formInputs.forEach(input => {
                input.parentElement.classList.remove('focused');
            });
        }, 2000);
    } catch (error) {
        // Error state
        btnText.textContent = 'Error!';
        btnIcon.innerHTML = '<i class="fas fa-times"></i>';
        
        setTimeout(() => {
            btnText.textContent = 'Send Message';
            btnIcon.innerHTML = '<i class="fas fa-paper-plane"></i>';
            submitBtn.disabled = false;
        }, 2000);
    }
});

// Add hover effect to contact items
const contactItems = document.querySelectorAll('.contact-item');
contactItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
        item.style.transform = 'translateY(-5px)';
    });
    
    item.addEventListener('mouseleave', () => {
        item.style.transform = 'translateY(0)';
    });
});

// Animate social icons on hover
const socialIcons = document.querySelectorAll('.social-icon-contact');
socialIcons.forEach(icon => {
    icon.addEventListener('mouseenter', () => {
        icon.style.transform = 'translateY(-3px) rotate(8deg)';
    });
    
    icon.addEventListener('mouseleave', () => {
        icon.style.transform = 'translateY(0) rotate(0)';
    });
});

// Add Chart.js to the page
const script = document.createElement('script');
script.src = 'https://cdn.jsdelivr.net/npm/chart.js';
document.head.appendChild(script);

script.onload = () => {
    // Initialize Radar Chart
    const ctx = document.getElementById('skillsRadar').getContext('2d');
    const skillsChart = new Chart(ctx, {
        type: 'radar',
        data: {
            labels: ['iOS Development', 'AI/ML', 'Frontend Development', 'Backend Development', 'Web Design', 'UI/UX'],
            datasets: [{
                label: 'Skills Proficiency',
                data: [90, 85, 88, 82, 85, 80],
                backgroundColor: 'rgba(0, 0, 0, 0.2)',
                borderColor: '#000',
                pointBackgroundColor: '#000',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: '#000'
            }]
        },
        options: {
            scales: {
                r: {
                    angleLines: {
                        color: 'rgba(0, 0, 0, 0.1)'
                    },
                    grid: {
                        color: 'rgba(0, 0, 0, 0.1)'
                    },
                    pointLabels: {
                        font: {
                            size: 12,
                            family: "'Inter', sans-serif"
                        }
                    },
                    ticks: {
                        backdropColor: 'transparent',
                        color: '#666'
                    }
                }
            },
            plugins: {
                legend: {
                    display: false
                }
            }
        }
    });
};

// Certificate Card Animations
const certificateCards = document.querySelectorAll('.certificate-card');
certificateCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'scale(1.02)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'scale(1)';
    });
});

// Animate skill bars on scroll
const skillBars = document.querySelectorAll('.skill-progress');
const skillObserverOptions = {
    threshold: 0.5
};

const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.transform = `scaleX(${entry.target.parentElement.dataset.progress})`;
            skillObserver.unobserve(entry.target);
        }
    });
}, skillObserverOptions);

skillBars.forEach(bar => {
    skillObserver.observe(bar);
});

// Download CV Animation
const downloadBtn = document.querySelector('.download-cv');
downloadBtn.addEventListener('click', (e) => {
    const icon = downloadBtn.querySelector('.download-icon');
    icon.innerHTML = '<i class="fas fa-spinner fa-spin"></i>';
    
    setTimeout(() => {
        icon.innerHTML = '<i class="fas fa-check"></i>';
        setTimeout(() => {
            icon.innerHTML = '<i class="fas fa-download"></i>';
        }, 2000);
    }, 1500);
});

// GitHub Contributions Graph Animation
const contributionGraph = document.querySelector('.contribution-graph');
contributionGraph.style.opacity = '0';
contributionGraph.style.transform = 'translateY(20px)';

const graphObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            entry.target.style.transition = 'all 0.6s ease-out';
            graphObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

graphObserver.observe(contributionGraph);

// Enhanced Skill Category Interactions
const skillCategories = document.querySelectorAll('.skill-category');

skillCategories.forEach(category => {
    // Add tilt effect
    category.addEventListener('mousemove', (e) => {
        const rect = category.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 20;
        const rotateY = (centerX - x) / 20;
        
        category.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-5px) scale(1.02)`;
    });
    
    // Reset transform on mouse leave
    category.addEventListener('mouseleave', () => {
        category.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0) scale(1)';
    });
    
    // Add click interaction
    category.addEventListener('click', () => {
        const progress = category.dataset.level;
        const skillName = category.dataset.skill;
        
        // Animate progress bar
        const progressBar = category.querySelector('.skill-progress');
        progressBar.style.transform = 'scaleX(0)';
        setTimeout(() => {
            progressBar.style.transform = `scaleX(${progress})`;
        }, 50);
        
        // Animate skill tags
        const tags = category.querySelectorAll('.skill-tags span');
        tags.forEach((tag, index) => {
            tag.style.transform = 'translateY(20px) scale(0.8)';
            tag.style.opacity = '0';
            setTimeout(() => {
                tag.style.transform = 'translateY(0) scale(1)';
                tag.style.opacity = '1';
            }, index * 100);
        });
    });
});

// Add intersection observer for skill categories
const skillCategoryObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const category = entry.target;
            const progress = category.dataset.level;
            const progressBar = category.querySelector('.skill-progress');
            const tags = category.querySelectorAll('.skill-tags span');
            
            // Animate progress bar
            setTimeout(() => {
                progressBar.style.transform = `scaleX(${progress})`;
            }, 200);
            
            // Animate tags
            tags.forEach((tag, index) => {
                tag.style.transform = 'translateY(20px)';
                tag.style.opacity = '0';
                setTimeout(() => {
                    tag.style.transform = 'translateY(0)';
                    tag.style.opacity = '1';
                }, 200 + index * 100);
            });
            
            skillCategoryObserver.unobserve(category);
        }
    });
}, {
    threshold: 0.2
});

skillCategories.forEach(category => {
    skillCategoryObserver.observe(category);
});

// Initialize skill progress bars with initial animation
document.addEventListener('DOMContentLoaded', () => {
    skillCategories.forEach(category => {
        const progressBar = category.querySelector('.skill-progress');
        const progress = category.dataset.level;
        
        progressBar.style.transform = 'scaleX(0)';
        setTimeout(() => {
            progressBar.style.transform = `scaleX(${progress})`;
        }, 500);
    });
});

// Enhanced Navigation Handling
document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Toggle with Animation
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    const navItems = document.querySelectorAll('.nav-item');
    
    mobileMenuBtn.addEventListener('click', () => {
        mobileMenuBtn.classList.toggle('active');
        navLinks.classList.toggle('active');
        document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : '';
    });

    // Dropdown Toggle for Mobile
    navItems.forEach(item => {
        const link = item.querySelector('a');
        const dropdown = item.querySelector('.dropdown');
        
        if (dropdown) {
            link.addEventListener('click', (e) => {
                if (window.innerWidth <= 768) {
                    e.preventDefault();
                    item.classList.toggle('active');
                    
                    // Animate height
                    if (item.classList.contains('active')) {
                        dropdown.style.height = `${dropdown.scrollHeight}px`;
                    } else {
                        dropdown.style.height = '0';
                    }
                }
            });
        }
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.nav-content') && !e.target.closest('.nav-links')) {
            mobileMenuBtn.classList.remove('active');
            navLinks.classList.remove('active');
            document.body.style.overflow = '';
        }
    });

    // Enhanced Hover Effects
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('mouseover', () => {
            link.style.transform = 'translateY(-2px)';
            link.style.transition = 'transform 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55)';
        });

        link.addEventListener('mouseout', () => {
            link.style.transform = 'translateY(0)';
        });
    });

    // Magnetic Effect for Navigation Items
    navItems.forEach(item => {
        item.addEventListener('mousemove', (e) => {
            const rect = item.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const deltaX = (x - centerX) / 8;
            const deltaY = (y - centerY) / 8;
            
            item.style.transform = `translate(${deltaX}px, ${deltaY}px)`;
        });

        item.addEventListener('mouseleave', () => {
            item.style.transform = 'translate(0, 0)';
            item.style.transition = 'transform 0.3s ease';
        });
    });

    // Ripple Effect for Navigation Links
    function createRipple(e) {
        const link = e.currentTarget;
        const ripple = document.createElement('span');
        const rect = link.getBoundingClientRect();
        
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        ripple.style.left = `${x}px`;
        ripple.style.top = `${y}px`;
        ripple.classList.add('ripple');
        
        link.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
    }

    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', createRipple);
    });

    // Scroll-triggered Navigation Animations
    const header = document.querySelector('.navbar');
    let lastScroll = 0;
    
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll <= 0) {
            header.classList.remove('scroll-up');
            return;
        }
        
        if (currentScroll > lastScroll && !header.classList.contains('scroll-down')) {
            header.classList.remove('scroll-up');
            header.classList.add('scroll-down');
        } else if (currentScroll < lastScroll && header.classList.contains('scroll-down')) {
            header.classList.remove('scroll-down');
            header.classList.add('scroll-up');
        }
        
        lastScroll = currentScroll;
    });

    // Dropdown Menu Animations
    const dropdowns = document.querySelectorAll('.dropdown');
    dropdowns.forEach(dropdown => {
        const items = dropdown.querySelectorAll('.dropdown-item');
        
        items.forEach((item, index) => {
            item.style.opacity = '0';
            item.style.transform = 'translateY(10px)';
            item.style.transition = 'all 0.3s ease';
            item.style.transitionDelay = `${index * 0.05}s`;
        });
        
        dropdown.parentElement.addEventListener('mouseenter', () => {
            items.forEach(item => {
                item.style.opacity = '1';
                item.style.transform = 'translateY(0)';
            });
        });
        
        dropdown.parentElement.addEventListener('mouseleave', () => {
            items.forEach(item => {
                item.style.opacity = '0';
                item.style.transform = 'translateY(10px)';
            });
        });
    });

    // Active Link Indicator
    function updateActiveLink() {
        const sections = document.querySelectorAll('section[id]');
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                document.querySelectorAll('.nav-links a').forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }

    window.addEventListener('scroll', updateActiveLink);
    window.addEventListener('load', updateActiveLink);
});

// Initialize navigation features
document.addEventListener('DOMContentLoaded', initializeNavigation);

// About Section Interactions

// Typing Effect
function initTypeWriter() {
    const phrases = [
        "Full Stack Developer",
        "AI/ML Enthusiast",
        "Problem Solver",
        "Tech Innovator"
    ];
    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    const typingSpeed = 100;
    const deletingSpeed = 50;
    const pauseEnd = 2000;
    
    const element = document.querySelector('.dynamic-text');
    if (!element) return;

    function type() {
        const currentPhrase = phrases[phraseIndex];
        
        if (isDeleting) {
            element.textContent = currentPhrase.substring(0, charIndex - 1);
            charIndex--;
        } else {
            element.textContent = currentPhrase.substring(0, charIndex + 1);
            charIndex++;
        }

        if (!isDeleting && charIndex === currentPhrase.length) {
            isDeleting = true;
            setTimeout(type, pauseEnd);
            return;
        }

        if (isDeleting && charIndex === 0) {
            isDeleting = false;
            phraseIndex = (phraseIndex + 1) % phrases.length;
        }

        setTimeout(type, isDeleting ? deletingSpeed : typingSpeed);
    }

    type();
}

// Floating Icons Animation
function initFloatingIcons() {
    const icons = document.querySelectorAll('.floating-icons i');
    
    icons.forEach(icon => {
        icon.addEventListener('mousemove', (e) => {
            const rect = icon.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const deltaX = (x - centerX) / centerX;
            const deltaY = (y - centerY) / centerY;
            
            icon.style.transform = `translate(${deltaX * 10}px, ${deltaY * 10}px)`;
        });
        
        icon.addEventListener('mouseleave', () => {
            icon.style.transform = 'translate(0, 0)';
        });
    });
}

// Strength Cards Animation
function initStrengthCards() {
    const cards = document.querySelectorAll('.strength-card');
    
    cards.forEach(card => {
        const statNumber = card.querySelector('.stat-number');
        if (!statNumber) return;
        
        const target = parseInt(statNumber.getAttribute('data-target'));
        let current = 0;
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && current === 0) {
                    const interval = setInterval(() => {
                        if (current >= target) {
                            clearInterval(interval);
                            return;
                        }
                        current += Math.ceil(target / 50);
                        if (current > target) current = target;
                        statNumber.textContent = current;
                    }, 30);
                }
            });
        }, { threshold: 0.5 });
        
        observer.observe(card);
    });
}

// Journey Timeline Animation
function initJourneyTimeline() {
    const timelineItems = document.querySelectorAll('.journey-item');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.5 });
    
    timelineItems.forEach(item => {
        observer.observe(item);
    });
}

// Values Cards Animation
function initValueCards() {
    const cards = document.querySelectorAll('.value-card');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.5 });
    
    cards.forEach(card => {
        observer.observe(card);
    });
}

// Initialize all animations when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    initTypeWriter();
    initFloatingIcons();
    initStrengthCards();
    initJourneyTimeline();
    initValueCards();
}); 