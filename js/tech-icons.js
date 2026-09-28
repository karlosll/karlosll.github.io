const technologyIcons = {
  python: 'python',
  django: 'django',
  'django rest': 'django',
  postgresql: 'postgresql',
  flutter: 'flutter',
  ia: 'googlegemini',
  ai: 'googlegemini',
  gemini: 'googlegemini',
  'api rest': 'openapiinitiative',
  'whatsapp business api': 'whatsapp',
  supabase: 'supabase',
  sqlite: 'sqlite',
  opencv: 'opencv',
  digitalocean: 'digitalocean',
  vercel: 'vercel',
  jira: 'jira',
  scrum: 'scrumalliance'
};

function addTechnologyIcons() {
  const labels = document.querySelectorAll('.tag, .skill-row__name, .chip[data-filter]:not([data-filter="all"])');

  labels.forEach((label) => {
    if (label.querySelector('.tech-icon')) return;

    const name = (label.dataset.techIcon || label.dataset.filter || label.textContent).trim().toLowerCase();
    const slug = technologyIcons[name];
    if (!slug) return;

    const icon = document.createElement('img');
    icon.className = `tech-icon tech-icon--${slug}`;
    icon.src = `https://cdn.simpleicons.org/${slug}`;
    icon.width = 16;
    icon.height = 16;
    icon.alt = '';
    icon.loading = 'lazy';
    icon.decoding = 'async';
    icon.setAttribute('aria-hidden', 'true');
    icon.addEventListener('error', () => icon.remove(), { once: true });

    label.classList.add('tech-label', `tech-label--${slug}`);
    label.prepend(icon);
  });
}

addTechnologyIcons();
document.addEventListener('languagechange', () => requestAnimationFrame(addTechnologyIcons));
