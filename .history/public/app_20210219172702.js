const burger = document.getElementById("burger");
const togglebtn = document.getElementById("toggle");
const modal = document.getElementById("modal-body");
const text = document.querySelectorAll(".text-3xl");

burger.addEventListener("click", () => {
  modal.style.display = "flex";
});

togglebtn.addEventListener("click", () => {
  modal.style.display = "none";
});
text.forEach((btn) => {
    btn.addEventListener('click', ())
});

