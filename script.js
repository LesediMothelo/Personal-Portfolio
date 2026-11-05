function filterProjects(category) {
  const projectCards = document.querySelectorAll(".project-card");
  let visibleCount = 0;

  projectCards.forEach((card) => {
    const matches = category === "all" || card.dataset.category === category;
    card.hidden = !matches;

    if (matches) {
      visibleCount += 1;
    }
  });

  document.querySelectorAll(".filter-button").forEach((button) => {
    const isActive = button.dataset.filter === category;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });

  const status = document.querySelector(".filter-status");
  if (status) {
    status.textContent = `Showing ${visibleCount} ${category === "all" ? "" : `${category} `}project${visibleCount === 1 ? "" : "s"}.`;
  }
}

document.querySelectorAll(".filter-button").forEach((button) => {
  button.addEventListener("click", () => filterProjects(button.dataset.filter));
});