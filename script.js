// script.js

// Mobile Menu Toggle
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Smooth Scroll + Close mobile menu on link click
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth'
            });
        }
        
        // Close mobile menu by removing .active class (no inline styles!)
        navLinks.classList.remove('active');
    });
});

// Scroll Animations (unchanged)
const sections = document.querySelectorAll('.section');

const revealSection = () => {
    const windowHeight = window.innerHeight;
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop < windowHeight - 100) {
            section.classList.add('visible');
        }
    });
};

window.addEventListener('scroll', revealSection);
revealSection();

// Animate Progress Bars on Scroll (unchanged)
const progressBars = document.querySelectorAll('.progress');
const skillsSection = document.getElementById('skills');

const animateProgress = () => {
    if (skillsSection.classList.contains('visible')) {
        progressBars.forEach(bar => {
            const width = bar.style.width || bar.parentElement.nextElementSibling?.textContent || '0%'; // fallback
            bar.style.width = '0';
            setTimeout(() => {
                bar.style.width = width;
            }, 200);
        });
        window.removeEventListener('scroll', animateProgress);
    }
};

window.addEventListener('scroll', animateProgress);