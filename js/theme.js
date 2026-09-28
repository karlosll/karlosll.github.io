const themeButton = document.getElementById('theme-toggle');
const themeColorMeta = document.querySelector('meta[name="theme-color"]');

function getTheme() {
  return document.documentElement.getAttribute('data-theme') || 'dark';
}

function syncThemeButton() {
  const isDark = getTheme() === 'dark';
  themeButton?.setAttribute('aria-pressed', String(isDark));
  const background = getComputedStyle(document.documentElement).getPropertyValue('--color-background').trim();
  if (background) themeColorMeta?.setAttribute('content', background);
}

themeButton?.addEventListener('click', () => {
  const nextTheme = getTheme() === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', nextTheme);
  try {
    localStorage.setItem('theme', nextTheme);
  } catch (_) {
    // El tema sigue funcionando aunque el almacenamiento esté bloqueado.
  }
  syncThemeButton();
});

syncThemeButton();
