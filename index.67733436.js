(()=>{const e={openMenuBtn:document.querySelector("[data-menu-open]"),closeMenuBtn:document.querySelector("[data-menu-close]"),menu:document.querySelector("[data-menu]")};function t(){e.menu.classList.toggle("is-open")}e.openMenuBtn.addEventListener("click",t),e.closeMenuBtn.addEventListener("click",t)})(),(()=>{const e={openModalBtns:document.querySelectorAll("[data-modal-open]"),closeModalBtn:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal]"),openProdModalBtns:document.querySelectorAll("[prod-modal-open]"),closeProdModalBtn:document.querySelector("[prod-modal-close]"),prodModal:document.querySelector("[prod-modal]"),openAboutModalBtn:document.querySelector("[data-about-modal-open]"),closeAboutModalBtn:document.querySelector("[data-about-modal-close]"),aboutModal:document.querySelector("[data-about-modal]")};function t(){e.modal.classList.toggle("is-hidden")}function o(){e.aboutModal.classList.toggle("is-hidden")}function l(){e.prodModal.classList.toggle("is-hidden")}e.openModalBtns.forEach((e=>{e.addEventListener("click",t)})),e.closeModalBtn.addEventListener("click",t),e.openProdModalBtns.forEach((e=>{e.addEventListener("click",l)})),e.closeProdModalBtn.addEventListener("click",l),e.openAboutModalBtn.addEventListener("click",o),e.closeAboutModalBtn.addEventListener("click",o)})();const e=document.querySelectorAll("[data-target]"),t=document.querySelectorAll(".close-modal");e.forEach((e=>{e.addEventListener("click",(()=>{document.querySelector(e.dataset.target).classList.add("active")}))})),t.forEach((e=>{e.addEventListener("click",(()=>{e.closest(".modal-contact").classList.remove("active")}))}));const o=document.querySelector(".gallery__item");setInterval((()=>{const e=document.querySelector(".gallery .active"),t=e.nextElementSibling?e.nextElementSibling:o;e.classList.remove("active"),t.classList.add("active")}),5e3);
//# sourceMappingURL=index.67733436.js.map
