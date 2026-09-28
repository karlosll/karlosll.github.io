const topButton = document.getElementById('back-to-top');

function syncTopButton() {
  if (topButton) topButton.hidden = window.scrollY < 400;
}

window.addEventListener('scroll', syncTopButton, { passive: true });
topButton?.addEventListener('click', () => {
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  window.scrollTo({ top: 0, behavior: reduceMotion ? 'auto' : 'smooth' });
});
syncTopButton();

const revealElements = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  revealElements.forEach((element) => observer.observe(element));
} else {
  revealElements.forEach((element) => element.classList.add('is-visible'));
}

document.querySelectorAll('[data-year]').forEach((element) => {
  element.textContent = new Intl.NumberFormat(document.documentElement.lang, { useGrouping: false }).format(new Date().getFullYear());
});

document.addEventListener('languagechange', () => {
  document.querySelectorAll('[data-year]').forEach((element) => {
    element.textContent = new Intl.NumberFormat(document.documentElement.lang, { useGrouping: false }).format(new Date().getFullYear());
  });
});

document.querySelectorAll('[data-token-value]').forEach((element) => {
  const readToken = () => {
    element.textContent = getComputedStyle(document.documentElement).getPropertyValue(element.dataset.tokenValue).trim();
  };
  readToken();
  new MutationObserver(readToken).observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });
});
