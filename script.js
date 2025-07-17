document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      alert('Thank you for reaching out! I will get back to you soon.');
      form.reset();
    });
  }
});

// Theme toggle logic
const themeToggle = document.getElementById('theme-toggle');
const root = document.documentElement;

function setTheme(theme) {
  if (theme === 'dark') {
    root.style.setProperty('--primary-bg', 'var(--dark)');
    root.style.setProperty('--primary-text', 'var(--light)');
    document.body.classList.add('dark-theme');
  } else {
    root.style.setProperty('--primary-bg', '#f7f9fa');
    root.style.setProperty('--primary-text', '#222');
    document.body.classList.remove('dark-theme');
  }
}

// Load theme from localStorage
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
  themeToggle.checked = true;
  setTheme('dark');
} else {
  setTheme('light');
}

themeToggle.addEventListener('change', function() {
  if (this.checked) {
    setTheme('dark');
    localStorage.setItem('theme', 'dark');
  } else {
    setTheme('light');
    localStorage.setItem('theme', 'light');
  }
});

// Animated role text
const roles = [
  'Problem Solver',
  'Tech Enthusiast',
  'Innovation Advocate',
  'React.js Developer',
  'Full Stack Engineer',
  'Data Visualization Expert',
  'Data Analyst',
  'Machine Learning Engineer'
];
const roleText = document.getElementById('role-text');
let roleIndex = 0;
setInterval(() => {
  roleIndex = (roleIndex + 1) % roles.length;
  roleText.textContent = roles[roleIndex];
}, 2000);

// About section tab switching
const aboutTabs = document.querySelectorAll('.about-tab');
const aboutOverview = document.querySelector('.about-overview');
const educationTimeline = document.querySelector('.education-timeline');
// Placeholder for future content
let aboutPassion = document.querySelector('.about-passion');
let aboutFunFacts = document.querySelector('.about-funfacts');

function showTab(tab) {
  // Remove active from all tabs
  aboutTabs.forEach(t => t.classList.remove('active'));
  tab.classList.add('active');
  // Hide all content
  if (aboutOverview) aboutOverview.style.display = 'none';
  if (educationTimeline) educationTimeline.style.display = 'none';
  if (aboutPassion) aboutPassion.style.display = 'none';
  if (aboutFunFacts) aboutFunFacts.style.display = 'none';
  // Show selected
  if (tab.id === 'tab-overview' && aboutOverview) aboutOverview.style.display = '';
  if (tab.id === 'tab-education' && educationTimeline) educationTimeline.style.display = '';
  if (tab.id === 'tab-passion' && aboutPassion) aboutPassion.style.display = '';
  if (tab.id === 'tab-funfacts' && aboutFunFacts) aboutFunFacts.style.display = '';
}

aboutTabs.forEach(tab => {
  tab.addEventListener('click', () => showTab(tab));
});
// Show overview by default
showTab(document.getElementById('tab-overview'));

// Project tabs logic (show one section at a time)
document.addEventListener('DOMContentLoaded', function() {
  const projectTabBtns = document.querySelectorAll('.project-tab-btn');
  const projectTabSections = document.querySelectorAll('.project-section');

  function showProjectTab(tab) {
    projectTabBtns.forEach(btn => btn.classList.remove('active'));
    document.querySelector(`.project-tab-btn[data-tab="${tab}"]`).classList.add('active');
    projectTabSections.forEach(section => {
      section.style.display = section.getAttribute('data-section') === tab ? '' : 'none';
    });
  }

  projectTabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      showProjectTab(btn.getAttribute('data-tab'));
    });
  });
  // Show Data Visualization tab by default
  showProjectTab('dataviz');
});

// Smooth scroll for Experience navbar link
const navbarLinks = document.querySelectorAll('nav ul li a');
navbarLinks.forEach(link => {
  link.addEventListener('click', function(e) {
    const href = this.getAttribute('href');
    if (href && href.startsWith('#')) {
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        const yOffset = -80; // Offset for fixed navbar
        const y = target.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    }
  });
});

// Image carousel for Pune City Analysis
const insightImages = [
  "Projects/Data Visualisation/Pune City Analysis/Screenshot 2025-07-03 162430.png",
  "Projects/Data Visualisation/Pune City Analysis/Screenshot 2025-07-03 162449.png",
  "Projects/Data Visualisation/Pune City Analysis/Screenshot 2025-07-03 162514.png",
  "Projects/Data Visualisation/Pune City Analysis/Screenshot 2025-07-03 162521.png",
  "Projects/Data Visualisation/Pune City Analysis/Screenshot 2025-07-03 162529.png"
];
document.addEventListener('DOMContentLoaded', function () {
  const imgEl = document.getElementById('carousel-image');
  if (!imgEl) return;
  let current = 0;
  setInterval(() => {
    current = (current + 1) % insightImages.length;
    imgEl.src = insightImages[current];
  }, 2000);
});

// Image carousel for Make in India (Imports)
const makeInIndiaImages = [
  "Projects/Data Visualisation/Make in India (imports)/Screenshot 2025-07-04 161340.png",
  "Projects/Data Visualisation/Make in India (imports)/Screenshot 2025-07-04 161406.png",
  "Projects/Data Visualisation/Make in India (imports)/Screenshot 2025-07-04 161420.png",
  "Projects/Data Visualisation/Make in India (imports)/Screenshot 2025-07-04 161433.png",
  "Projects/Data Visualisation/Make in India (imports)/Screenshot 2025-07-04 161444.png",
  "Projects/Data Visualisation/Make in India (imports)/Screenshot 2025-07-04 161506.png",
  "Projects/Data Visualisation/Make in India (imports)/Screenshot 2025-07-04 161521.png",
  "Projects/Data Visualisation/Make in India (imports)/Screenshot 2025-07-04 161533.png",
  "Projects/Data Visualisation/Make in India (imports)/Screenshot 2025-07-04 161550.png",
  "Projects/Data Visualisation/Make in India (imports)/Screenshot 2025-07-04 161607.png",
  "Projects/Data Visualisation/Make in India (imports)/Screenshot 2025-07-04 161621.png",
  "Projects/Data Visualisation/Make in India (imports)/Screenshot 2025-07-04 161637.png"
];
document.addEventListener('DOMContentLoaded', function () {
  const imgEl = document.getElementById('carousel-image-makeinindia');
  if (!imgEl) return;
  let current = 0;
  setInterval(() => {
    current = (current + 1) % makeInIndiaImages.length;
    imgEl.src = makeInIndiaImages[current];
  }, 2000);
});

// Hamburger menu toggle for mobile navbar
const hamburger = document.getElementById('mobile-menu-toggle');
const navLinks = document.querySelector('ul.nav-links');
const overlay = document.getElementById('mobile-menu-overlay');

function closeMobileMenu() {
  navLinks.classList.remove('open');
  hamburger.classList.remove('active');
  overlay.classList.remove('open');
  hamburger.setAttribute('aria-expanded', 'false');
}

if (hamburger && navLinks && overlay) {
  hamburger.addEventListener('click', function () {
    const isOpen = navLinks.classList.toggle('open');
    hamburger.classList.toggle('active');
    overlay.classList.toggle('open', isOpen);
    hamburger.setAttribute('aria-expanded', isOpen);
  });
  overlay.addEventListener('click', closeMobileMenu);
}

// Project card carousel logic (supports multiple carousels, auto-slide, and user interaction)
function initProjectCardCarousels() {
  const carousels = document.querySelectorAll('.pro-card-carousel');
  carousels.forEach((carousel, carouselIdx) => {
    const images = carousel.querySelectorAll('.carousel-img');
    const leftArrow = carousel.querySelector('.carousel-arrow.left');
    const rightArrow = carousel.querySelector('.carousel-arrow.right');
    const indicators = carousel.parentElement.querySelectorAll('.carousel-indicators .carousel-dot');
    let current = 0;
    let timer;

    function showImage(idx) {
      images.forEach((img, i) => img.classList.toggle('active', i === idx));
      indicators.forEach((dot, i) => dot.classList.toggle('active', i === idx));
      current = idx;
    }
    function nextImage() {
      showImage((current + 1) % images.length);
    }
    function prevImage() {
      showImage((current - 1 + images.length) % images.length);
    }
    function startAutoSlide() {
      clearInterval(timer);
      timer = setInterval(nextImage, 2500);
    }
    // Arrow events
    leftArrow.addEventListener('click', () => { prevImage(); startAutoSlide(); });
    rightArrow.addEventListener('click', () => { nextImage(); startAutoSlide(); });
    // Dot events
    indicators.forEach((dot, i) => {
      dot.addEventListener('click', () => { showImage(i); startAutoSlide(); });
    });
    // Start auto-slide
    startAutoSlide();
  });
}
document.addEventListener('DOMContentLoaded', initProjectCardCarousels);

// === Custom Mobile Menu Logic ===
function handleCustomMobileMenuDisplay() {
  const trigger = document.getElementById('customMobileMenuTrigger');
  const menu = document.getElementById('customMobileMenu');
  const overlay = document.getElementById('customMobileMenuOverlay');
  const nav = document.querySelector('nav');
  const hamburger = document.getElementById('mobile-menu-toggle');
  const navLinks = document.querySelector('ul.nav-links');

  function isMobile() {
    return window.innerWidth <= 700;
  }

  function showCustomMenu() {
    menu.classList.add('open');
    overlay.classList.add('open');
    menu.style.display = 'flex';
    overlay.style.display = 'block';
    // Hide default hamburger/nav-links
    if (hamburger) hamburger.style.display = 'none';
    if (navLinks) navLinks.style.display = 'none';
  }
  function hideCustomMenu() {
    menu.classList.remove('open');
    overlay.classList.remove('open');
    setTimeout(() => {
      menu.style.display = 'none';
      overlay.style.display = 'none';
    }, 400);
    if (hamburger) hamburger.style.display = '';
    if (navLinks) navLinks.style.display = '';
  }
  function updateVisibility() {
    if (isMobile()) {
      trigger.style.display = 'flex';
      hideCustomMenu();
    } else {
      trigger.style.display = 'none';
      hideCustomMenu();
    }
  }
  if (trigger && menu && overlay) {
    trigger.addEventListener('click', showCustomMenu);
    overlay.addEventListener('click', hideCustomMenu);
    // Close menu on nav link click
    menu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', hideCustomMenu);
    });
    window.addEventListener('resize', updateVisibility);
    updateVisibility();
  }
}

document.addEventListener('DOMContentLoaded', handleCustomMobileMenuDisplay); 