!function(){!function(){var e={openMenuBtn:document.querySelector("[data-menu-open]"),closeMenuBtn:document.querySelector("[data-menu-close]"),menu:document.querySelector("[data-menu]")};function t(){e.menu.classList.toggle("is-open")}e.openMenuBtn.addEventListener("click",t),e.closeMenuBtn.addEventListener("click",t)}(),function(){var e={openModalBtn:document.querySelector("[data-modal-open]"),closeModalBtn:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal]"),openAboutModalBtn:document.querySelector("[data-about-modal-open]"),closeAboutModalBtn:document.querySelector("[data-about-modal-close]"),aboutModal:document.querySelector("[data-about-modal]")};function t(){e.modal.classList.toggle("is-hidden")}function o(){e.aboutModal.classList.toggle("is-hidden")}e.openModalBtn.addEventListener("click",t),e.closeModalBtn.addEventListener("click",t),e.openAboutModalBtn.addEventListener("click",o),e.closeAboutModalBtn.addEventListener("click",o)}();var e=document.querySelectorAll("[data-target]"),t=document.querySelectorAll(".close-modal");e.forEach((function(e){e.addEventListener("click",(function(){document.querySelector(e.dataset.target).classList.add("active")}))})),t.forEach((function(e){e.addEventListener("click",(function(){e.closest(".modal-contact").classList.remove("active")}))}));var o=document.querySelector(".gallery__item");setInterval((function(){var e=document.querySelector(".gallery .active");console.log(e.nextElementSibling),console.log(o);var t=e.nextElementSibling?e.nextElementSibling:o;e.classList.remove("active"),t.classList.add("active")}),5e3)}();
//# sourceMappingURL=index.fba154a2.js.map
