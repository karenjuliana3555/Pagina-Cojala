// ==== MOSTRAR TARJETAS CUANDO SE HACE CLIC EN LA FLECHA ====
document.addEventListener("DOMContentLoaded", () => {
  const arrow = document.querySelector(".arrow");
  const cards = document.querySelector(".cards-container");

  if (arrow && cards) {
    arrow.addEventListener("click", () => {
      cards.style.display = "flex";
      cards.scrollIntoView({ behavior: "smooth" });
    });
  }
});
