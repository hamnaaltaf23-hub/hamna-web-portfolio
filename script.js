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

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) target.scrollIntoView({ behavior: 'smooth' });
    if (dropdown) dropdown.classList.remove('open');
  });
});

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

const backBtn = document.getElementById('backToTop');
window.addEventListener('scroll', () => {
  if (window.scrollY > 300) backBtn.classList.add('show');
  else backBtn.classList.remove('show');
});
backBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

const editableSpans = document.querySelectorAll('.editable');
editableSpans.forEach(span => {
  const key = span.getAttribute('data-key');
  const saved = localStorage.getItem(`contact_${key}`);
  if (saved) span.innerText = saved;
  span.addEventListener('blur', () => localStorage.setItem(`contact_${key}`, span.innerText));
});