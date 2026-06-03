const tabLinks = document.querySelectorAll('.tab-link');
const pageSections = document.querySelectorAll('.page-section');
const heroButton = document.querySelector('.hero-btn');

function activateSection(targetId) {
    tabLinks.forEach((tab) => {
        tab.classList.toggle('active', tab.dataset.target === targetId);
    });

    pageSections.forEach((section) => {
        section.classList.toggle('active', section.id === targetId);
    });

    window.scrollTo({ top: 0, behavior: 'smooth' });
}

tabLinks.forEach((tab) => {
    tab.addEventListener('click', () => {
        activateSection(tab.dataset.target);
    });
});

heroButton?.addEventListener('click', () => {
    activateSection('about');
});

// Initialize default section
activateSection('about');
