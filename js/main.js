const menuButton = document.getElementById('menu-btn');
const navLinks = document.getElementById('nav-links');

function closeMenu() {
  navLinks?.classList.remove('open');
  menuButton?.setAttribute('aria-expanded', 'false');
}

menuButton?.addEventListener('click', () => {
  const isOpen = navLinks?.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(Boolean(isOpen)));
});

navLinks?.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeMenu));

document.addEventListener('click', (event) => {
  if (navLinks?.classList.contains('open') && !navLinks.contains(event.target) && !menuButton?.contains(event.target)) {
    closeMenu();
  }
});

const revealItems = document.querySelectorAll('.reveal');

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  revealItems.forEach((item) => observer.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add('visible'));
}

document.querySelectorAll('[data-year]').forEach((item) => {
  item.textContent = new Date().getFullYear();
});
