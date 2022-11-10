(() => {
    const refs = {
      openModalBtn: document.querySelector("[data-modal-open]"),
      closeModalBtn: document.querySelector("[data-modal-close]"),
      modal: document.querySelector("[data-modal]"),
    };
    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);
    function toggleModal() {
      refs.modal.classList.toggle("is-hidden");
    }
})();
  
const btns = document.querySelectorAll("[data-target]");
const closeModals = document.querySelectorAll(".close-modal");
// const overlay = document.getElementById("overlay");

btns.forEach((btnc) => {
  btnc.addEventListener("click", () => {
    document.querySelector(btnc.dataset.target).classList.add("active");
    // overlay.classList.add("active");
  });
});

closeModals.forEach((btnc) => {
  btnc.addEventListener("click", () => {
    const modal = btnc.closest(".modal-contact");
    modal.classList.remove("active");
    // overlay.classList.remove("active");
  });
});