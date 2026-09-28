const menuButton = document.getElementById('menu-btn');
const navigation = document.getElementById('nav-links');

function closeMenu() {
  navigation?.classList.remove('is-open');
  menuButton?.setAttribute('aria-expanded', 'false');
}

menuButton?.addEventListener('click', () => {
  const isOpen = navigation?.classList.toggle('is-open');
  menuButton.setAttribute('aria-expanded', String(Boolean(isOpen)));
});

navigation?.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') closeMenu();
});
document.addEventListener('click', (event) => {
  if (navigation?.classList.contains('is-open') && !navigation.contains(event.target) && !menuButton?.contains(event.target)) closeMenu();
});
window.matchMedia('(min-width: 1024px)').addEventListener('change', closeMenu);
