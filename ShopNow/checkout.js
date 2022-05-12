var form = document.querySelector("#form");
form.addEventListener("submit", collectData);

function collectData() {
  event.preventDefault();
  window.location.href = "payment.html";
}
