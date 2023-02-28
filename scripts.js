"use strict";

// const details = document.querySelectorAll(".details");
// details.forEach((el) => {
//   el.addEventListener("change", function () {
//     details.style.display = "block";
//   });
// });

const detailsLabel = document.querySelector(".details");
const detailsInput = document.getElementById("details");
const clearForm = document.querySelector(".clearForm");
const referredBySelect = document.querySelector("#referredby");

referredBySelect.addEventListener("change", function () {
  if (referredBySelect.value === "magic") {
    detailsInput.style.display = "block";
    detailsLabel.style.display = "block";
  }
});

clearForm.addEventListener("click", function () {
  detailsInput.style.display = "none";
  detailsLabel.style.display = "none";
});
