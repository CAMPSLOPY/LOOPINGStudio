const burger = document.querySelecto('burger')
const togglebtn = document.getElementById("toggle");
const modal = document.getElementById("modal-body");

burger.addEventListener("click", () => {
  modal.style.display = "flex";
});

togglebtn.addEventListener("click", () => {
  modal.style.display = "none";
});
