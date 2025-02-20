let open = document.getElementById("open");
let close = document.getElementById("close");
let modalContainer = document.getElementById("modal-container");

open.addEventListener("click", () => {
  modalContainer.classList.add("show");
});

close.addEventListener("click", () => {
  modalContainer.classList.remove("show");
});
