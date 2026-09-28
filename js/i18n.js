function readStoredLanguage() {
  try {
    return localStorage.getItem('lang');
  } catch (_) {
    return null;
  }
}

function setLanguage(language) {
  const lang = translations[language] ? language : 'es';
  const dictionary = translations[lang];

  document.documentElement.lang = lang;
  document.title = dictionary['meta.title'];

  const description = document.querySelector('meta[name="description"]');
  description?.setAttribute('content', dictionary['meta.description']);

  document.querySelectorAll('[data-i18n]').forEach((element) => {
    const translation = dictionary[element.dataset.i18n];
    if (translation) element.textContent = translation;
  });

  document.querySelectorAll('[data-i18n-aria]').forEach((element) => {
    const translation = dictionary[element.dataset.i18nAria];
    if (translation) element.setAttribute('aria-label', translation);
  });

  document.querySelectorAll('[data-i18n-alt]').forEach((element) => {
    const translation = dictionary[element.dataset.i18nAlt];
    if (translation) element.setAttribute('alt', translation);
  });

  document.querySelectorAll('[data-lang-btn]').forEach((button) => {
    const isActive = button.dataset.langBtn === lang;
    button.classList.toggle('active', isActive);
    button.setAttribute('aria-pressed', String(isActive));
  });

  try {
    localStorage.setItem('lang', lang);
  } catch (_) {
    // El cambio sigue activo durante la sesión aunque no haya almacenamiento.
  }
}

document.querySelectorAll('[data-lang-btn]').forEach((button) => {
  button.addEventListener('click', () => setLanguage(button.dataset.langBtn));
});

const browserLanguage = navigator.language?.toLowerCase().startsWith('en') ? 'en' : 'es';
setLanguage(readStoredLanguage() || browserLanguage);
