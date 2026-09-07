// "use strict";

// //Take element button close cv
// const btnCloseModal = document.querySelector(".close-modal");
// //Take element button open cv
// const btnsOpenModal = document.querySelectorAll(".show-modal");
// // Take element overlay
// const overlay = document.querySelector(".overlay");
// // Take element content of cv
// const modal = document.querySelector(".modal");
// //Function opening cv
// const openModal = function () {
//   console.log("Button clicked");
//   modal.classList.remove("hidden");
//   overlay.classList.remove("hidden");
// };
// //Function closing cv
// const closeModal = function () {
//   modal.classList.add("hidden");
//   overlay.classList.add("hidden");
// };
// //Click See Cv button to open cv & overlay
// for (let i = 0; i < btnsOpenModal.length; i++) {
//   btnsOpenModal[i].addEventListener("click", openModal);
// }
// //Click Close button to close cv & overlay
// btnCloseModal.addEventListener("click", closeModal);
// //Click on overlay to close cv & overlay
// overlay.addEventListener("click", closeModal);
// //Click ESC to close cv & overlay
// document.addEventListener("keydown", function (e) {
//   if (e.key === "Escape") {
//     closeModal();
//   }
// });
