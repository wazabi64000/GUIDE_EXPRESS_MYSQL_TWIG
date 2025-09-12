document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".card");
  cards.forEach(card => {
    card.addEventListener("mouseenter", () => {
      card.style.transform = "scale(1.03)";
    });
    card.addEventListener("mouseleave", () => {
      card.style.transform = "scale(1)";
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  // Ajouter effet léger sur les sections au survol
  const sections = document.querySelectorAll("section");
  sections.forEach(sec => {
    sec.addEventListener("mouseenter", () => sec.style.transform = "translateY(-2px)");
    sec.addEventListener("mouseleave", () => sec.style.transform = "translateY(0)");
  });
});
