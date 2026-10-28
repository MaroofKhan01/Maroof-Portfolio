// Mobile navigation
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

if (menuToggle && navLinks) {
  menuToggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
    menuToggle.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
  });

  navLinks.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      menuToggle.setAttribute('aria-expanded', 'false');
      menuToggle.setAttribute('aria-label', 'Open navigation');
    });
  });
}

// Show initials if images/profile.jpg has not been added yet.
const profilePhoto = document.getElementById('profilePhoto');
const photoPlaceholder = document.getElementById('photoPlaceholder');

function showPhotoPlaceholder() {
  if (profilePhoto) profilePhoto.style.display = 'none';
  if (photoPlaceholder) photoPlaceholder.style.display = 'flex';
}

if (profilePhoto) {
  profilePhoto.addEventListener('error', showPhotoPlaceholder);
  if (profilePhoto.complete && profilePhoto.naturalWidth === 0) showPhotoPlaceholder();
}

// Reveal sections as they enter the viewport.
const revealItems = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries, currentObserver) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        currentObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  revealItems.forEach((item) => observer.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add('visible'));
}

// Current year in the footer.
const yearElement = document.getElementById('currentYear');
if (yearElement) yearElement.textContent = new Date().getFullYear();
