// ===== GSAP + ScrollTrigger =====
gsap.registerPlugin(ScrollTrigger);

// Hero text animation (vector style with Anime.js) – will be triggered after load
document.addEventListener('DOMContentLoaded', function() {
  // Typing animation (already existing) – keep as is

  // === Anime.js: Vector-style animation for hero text ===
  anime({
    targets: '.highlight',
    translateX: [30, 0],
    opacity: [0, 1],
    easing: 'easeOutQuad',
    duration: 1000,
    delay: 300
  });

  anime({
    targets: '.tagline',
    translateY: [20, 0],
    opacity: [0, 1],
    easing: 'easeInOutQuad',
    duration: 900,
    delay: 400
  });

  anime({
    targets: '.intro-text',
    translateY: [20, 0],
    opacity: [0, 1],
    easing: 'easeOutQuad',
    duration: 1000,
    delay: 500
  });

  anime({
    targets: '.btn-primary',
    scale: [0.8, 1],
    opacity: [0, 1],
    easing: 'easeOutBack',
    duration: 1000,
    delay: 700
  });

  // === GSAP: Scroll-based animations ===
  // Profile image fade and scale on scroll
  gsap.from('.profile-img', {
    scrollTrigger: {
      trigger: '.profile-image-section',
      start: 'top 80%',
      toggleActions: 'play none none reset'
    },
    opacity: 0,
    scale: 0.8,
    duration: 1,
    ease: 'power2.out'
  });

  // About section text
  gsap.from('.about-text p', {
    scrollTrigger: {
      trigger: '#about',
      start: 'top 75%',
      toggleActions: 'play none none reset'
    },
    opacity: 0,
    x: -50,
    duration: 1,
    stagger: 0.2,
    ease: 'power2.out'
  });

  // Stats cards
  gsap.from('.stat-card', {
    scrollTrigger: {
      trigger: '#about',
      start: 'top 75%',
      toggleActions: 'play none none reset'
    },
    opacity: 0,
    y: 30,
    duration: 0.8,
    stagger: 0.2,
    ease: 'back.out(1.7)'
  });

  // Education cards
  gsap.from('.edu-card', {
    scrollTrigger: {
      trigger: '#educational',
      start: 'top 80%',
      toggleActions: 'play none none reset'
    },
    opacity: 0,
    y: 40,
    duration: 0.8,
    stagger: 0.2,
    ease: 'power2.out'
  });

  // Project cards
  gsap.from('.project-card', {
    scrollTrigger: {
      trigger: '#projects',
      start: 'top 80%',
      toggleActions: 'play none none reset'
    },
    opacity: 0,
    y: 50,
    duration: 0.8,
    stagger: 0.15,
    ease: 'power2.out'
  });

  // Skill items (progress bars)
  gsap.from('.skill-item', {
    scrollTrigger: {
      trigger: '#tech-skills',
      start: 'top 80%',
      toggleActions: 'play none none reset'
    },
    opacity: 0,
    x: -30,
    duration: 0.7,
    stagger: 0.1,
    ease: 'power2.out'
  });

  // Soft skills
  gsap.from('.soft-skill-card', {
    scrollTrigger: {
      trigger: '#soft-skills',
      start: 'top 80%',
      toggleActions: 'play none none reset'
    },
    opacity: 0,
    scale: 0.8,
    duration: 0.8,
    stagger: 0.15,
    ease: 'back.out(1.7)'
  });

  // Timeline items
  gsap.from('.timeline-item', {
    scrollTrigger: {
      trigger: '#experience',
      start: 'top 80%',
      toggleActions: 'play none none reset'
    },
    opacity: 0,
    x: -40,
    duration: 0.8,
    stagger: 0.2,
    ease: 'power2.out'
  });

  // Achievements
  gsap.from('.achievements-list li', {
    scrollTrigger: {
      trigger: '#achievements',
      start: 'top 80%',
      toggleActions: 'play none none reset'
    },
    opacity: 0,
    x: -30,
    duration: 0.6,
    stagger: 0.1,
    ease: 'power2.out'
  });

  // Testimonials
  gsap.from('.testimonial-card', {
    scrollTrigger: {
      trigger: '#testimonials',
      start: 'top 80%',
      toggleActions: 'play none none reset'
    },
    opacity: 0,
    scale: 0.9,
    duration: 1,
    ease: 'power2.out'
  });

  // Blog links
  gsap.from('.blog-links li', {
    scrollTrigger: {
      trigger: '#blog',
      start: 'top 80%',
      toggleActions: 'play none none reset'
    },
    opacity: 0,
    y: 20,
    duration: 0.6,
    stagger: 0.1,
    ease: 'power2.out'
  });

  // Contact section
  gsap.from('.contact-info, .contact-form', {
    scrollTrigger: {
      trigger: '#contact',
      start: 'top 80%',
      toggleActions: 'play none none reset'
    },
    opacity: 0,
    y: 40,
    duration: 0.8,
    stagger: 0.2,
    ease: 'power2.out'
  });

  // === Motion.dev: Block-based animations ===
  // Animate the hero background glow
  const heroBg = document.querySelector('.hero');
  if (heroBg) {
    const { animate } = window.Motion;
    animate(heroBg, {
      background: [
        'linear-gradient(135deg, #FFFFFF 0%, #E8F0FE 100%)',
        'linear-gradient(135deg, #E8F0FE 0%, #D6E4FF 100%)'
      ],
      duration: 4,
      repeat: Infinity,
      direction: 'alternate',
      easing: 'ease-in-out'
    });
  }

  // Animate profile image glow
  const profileImg = document.querySelector('.profile-img');
  if (profileImg) {
    const { animate } = window.Motion;
    animate(profileImg, {
      boxShadow: [
        '0 10px 25px rgba(0,0,0,0.1)',
        '0 0 40px rgba(59, 130, 246, 0.5)'
      ],
      duration: 3,
      repeat: Infinity,
      direction: 'alternate',
      easing: 'ease-in-out'
    });
  }

  // Back to top button animation
  const backBtn = document.getElementById('backToTop');
  if (backBtn) {
    const { animate } = window.Motion;
    backBtn.addEventListener('mouseenter', () => {
      animate(backBtn, {
        scale: 1.1,
        duration: 0.3,
        easing: 'ease-out'
      });
    });
    backBtn.addEventListener('mouseleave', () => {
      animate(backBtn, {
        scale: 1,
        duration: 0.3,
        easing: 'ease-out'
      });
    });
  }
});

// ===== Existing scripts (typing, filters, testimonials, form, etc.) =====

// Typing effect
const typedTextSpan = document.querySelector('.typed-text');
if (typedTextSpan) {
  const textArray = ['Full Stack Developer', 'Web Developer', 'Problem Solver', 'CS Student'];
  let textIndex = 0, charIndex = 0;
  function type() {
    if (charIndex < textArray[textIndex].length) {
      typedTextSpan.textContent += textArray[textIndex].charAt(charIndex);
      charIndex++;
      setTimeout(type, 100);
    } else setTimeout(erase, 2000);
  }
  function erase() {
    if (charIndex > 0) {
      typedTextSpan.textContent = textArray[textIndex].substring(0, charIndex-1);
      charIndex--;
      setTimeout(erase, 50);
    } else {
      textIndex = (textIndex+1) % textArray.length;
      setTimeout(type, 100);
    }
  }
  type();
}

// Stats counter
const statNumbers = document.querySelectorAll('.stat-number');
let statsAnimated = false;
function animateStats() {
  if (statsAnimated) return;
  statNumbers.forEach(stat => {
    const target = stat.getAttribute('data-target');
    const isFloat = target.includes('.');
    const targetNum = parseFloat(target);
    let current = 0;
    const increment = targetNum / 50;
    const update = () => {
      if (isFloat) {
        current = parseFloat((current + increment).toFixed(2));
        if (current >= targetNum) { stat.textContent = target; return; }
      } else {
        current = Math.ceil(current + increment);
        if (current >= targetNum) { stat.textContent = target; return; }
      }
      stat.textContent = current;
      setTimeout(update, 20);
    };
    update();
  });
  statsAnimated = true;
}

function animateSkills() {
  document.querySelectorAll('.progress').forEach(bar => {
    const width = bar.style.width;
    bar.style.width = '0';
    setTimeout(() => { bar.style.width = width; }, 100);
  });
}

// Scroll reveal (fallback for non-GSAP browsers) – will be overridden by GSAP but keep for safety
const sections = document.querySelectorAll('.section');
function revealCheck() {
  sections.forEach(section => {
    if (section.getBoundingClientRect().top < window.innerHeight - 100) section.classList.add('reveal');
  });
  const aboutSec = document.getElementById('about');
  if (aboutSec && aboutSec.classList.contains('reveal')) animateStats();
  const techSec = document.getElementById('tech-skills');
  if (techSec && techSec.classList.contains('reveal')) animateSkills();
}
window.addEventListener('scroll', revealCheck);
window.addEventListener('load', revealCheck);

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) target.scrollIntoView({ behavior: 'smooth' });
    if (dropdown) dropdown.classList.remove('open');
  });
});

// Project filters
const filterBtns = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');
filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const filter = btn.dataset.filter;
    projectCards.forEach(card => {
      if (filter === 'all' || card.dataset.category === filter) card.classList.remove('hide');
      else card.classList.add('hide');
    });
  });
});

// Testimonials slider
const testimonialCards = document.querySelectorAll('.testimonial-card');
const dots = document.querySelectorAll('.dot');
let currentIndex = 0;
function showTestimonial(idx) {
  testimonialCards.forEach((c,i) => c.classList.toggle('active', i===idx));
  dots.forEach((d,i) => d.classList.toggle('active', i===idx));
  currentIndex = idx;
}
dots.forEach((dot, i) => dot.addEventListener('click', () => showTestimonial(i)));
setInterval(() => { let next = (currentIndex+1) % testimonialCards.length; showTestimonial(next); }, 5000);

// Contact form
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const statusDiv = contactForm.querySelector('.form-status');
    statusDiv.textContent = 'Message sent successfully! (Demo)';
    statusDiv.style.color = '#1E3A5F';
    contactForm.reset();
    setTimeout(() => statusDiv.textContent = '', 3000);
  });
}

// Back to top button (existing)
const backBtn = document.getElementById('backToTop');
if (backBtn) {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) backBtn.classList.add('show');
    else backBtn.classList.remove('show');
  });
  backBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

// Three-dots menu
const dotsBtn = document.getElementById('threeDotsBtn');
const dropdown = document.getElementById('dropdownNav');
if (dotsBtn) {
  dotsBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    dropdown.classList.toggle('open');
  });
  document.addEventListener('click', (e) => {
    if (!dotsBtn.contains(e.target) && !dropdown.contains(e.target)) dropdown.classList.remove('open');
  });
}