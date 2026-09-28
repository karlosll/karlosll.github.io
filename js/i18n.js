function readStoredLanguage() {
  try {
    return localStorage.getItem('lang');
  } catch (_) {
    return null;
  }
}

function t(key) {
  const lang = document.documentElement.lang || 'es';
  return translations[lang]?.[key] || translations.es[key] || key;
}

function setLanguage(language) {
  const lang = translations[language] ? language : 'es';
  const dictionary = translations[lang];

  document.documentElement.lang = lang;
  const titleKey = document.body.dataset.titleKey || 'meta.title.home';
  document.title = dictionary[titleKey] || dictionary['meta.title.home'];

  const description = document.querySelector('meta[name="description"]');
  const descriptionKey = document.body.dataset.descriptionKey || 'meta.description';
  description?.setAttribute('content', dictionary[descriptionKey] || dictionary['meta.description']);

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

  document.querySelectorAll('[data-i18n-placeholder]').forEach((element) => {
    const translation = dictionary[element.dataset.i18nPlaceholder];
    if (translation) element.setAttribute('placeholder', translation);
  });

  document.querySelectorAll('[data-lang-btn]').forEach((button) => {
    const isActive = button.dataset.langBtn === lang;
    button.classList.toggle('is-active', isActive);
    button.setAttribute('aria-pressed', String(isActive));
  });

  try {
    localStorage.setItem('lang', lang);
  } catch (_) {
    // El cambio sigue activo durante la sesión aunque no haya almacenamiento.
  }

  document.dispatchEvent(new CustomEvent('languagechange', { detail: { lang } }));
}

document.querySelectorAll('[data-lang-btn]').forEach((button) => {
  button.addEventListener('click', () => setLanguage(button.dataset.langBtn));
});

const browserLanguage = navigator.language?.toLowerCase().startsWith('en') ? 'en' : 'es';
setLanguage(readStoredLanguage() || browserLanguage);
