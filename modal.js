const openModalBtn = document.querySelector(".solutions-button");
const closeModalBtn = document.querySelector(".modal-close-btn");
const backdrop = document.querySelector(".backdrop");

if (openModalBtn && closeModalBtn && backdrop) {
  openModalBtn.addEventListener("click", () => {
    backdrop.classList.add("is-open");
    document.addEventListener("keydown", onEscPress);
  });

  closeModalBtn.addEventListener("click", closeModal);

  backdrop.addEventListener("click", (event) => {
    if (event.target === backdrop) {
      closeModal();
    }
  });

  function onEscPress(event) {
    if (event.key === "Escape") {
      closeModal();
    }
  }

  function closeModal() {
    backdrop.classList.remove("is-open");
    document.removeEventListener("keydown", onEscPress);
  }
}

const openMobMenuBtn = document.querySelector('.header-button');
const closeMobMenuBtn = document.querySelector('.mob-menu-modal-close-btn');
const mobMenu = document.querySelector('.mob-menu');

if (openMobMenuBtn && closeMobMenuBtn && mobMenu) {
  openMobMenuBtn.addEventListener('click', () => {
    mobMenu.classList.add('is-open');
  });

  closeMobMenuBtn.addEventListener('click', () => {
    mobMenu.classList.remove('is-open');
  });
}