const projectsGrid = document.getElementById('projects-grid');
const filterButtons = document.querySelectorAll('[data-filter]');
const filterEmpty = document.getElementById('filter-empty');

function applyProjectFilter(technology) {
  let visibleProjects = 0;

  projectsGrid?.querySelectorAll('.project-card').forEach((card) => {
    const technologies = card.dataset.tech.split(' ');
    const isVisible = technology === 'all' || technologies.includes(technology);
    card.hidden = !isVisible;
    if (isVisible) visibleProjects += 1;
  });

  filterButtons.forEach((button) => {
    const isActive = button.dataset.filter === technology;
    button.classList.toggle('is-active', isActive);
    button.setAttribute('aria-pressed', String(isActive));
  });

  if (filterEmpty) filterEmpty.hidden = visibleProjects > 0;
}

filterButtons.forEach((button) => {
  button.addEventListener('click', () => applyProjectFilter(button.dataset.filter));
});

const projectModal = document.getElementById('project-modal');
const modalTitle = document.getElementById('modal-title');
const modalBody = document.getElementById('modal-body');
const modalClose = document.getElementById('modal-close');
let lastModalTrigger = null;

document.querySelectorAll('[data-modal-open]').forEach((button) => {
  button.addEventListener('click', () => {
    const card = button.closest('.project-card');
    if (!card || !projectModal || !modalTitle || !modalBody) return;

    lastModalTrigger = button;
    modalTitle.textContent = card.querySelector('.project-card__title').textContent;
    const selectors = ['.project-card__desc', '.project-card__problem', '.project-card__contribution', '.project-card__achievement', '.tags'];
    const details = selectors.map((selector) => card.querySelector(selector)).filter(Boolean).map((element) => element.cloneNode(true));
    modalBody.replaceChildren(...details);
    projectModal.showModal();
  });
});

modalClose?.addEventListener('click', () => projectModal?.close());
projectModal?.addEventListener('click', (event) => {
  if (event.target === projectModal) projectModal.close();
});
projectModal?.addEventListener('close', () => lastModalTrigger?.focus());
