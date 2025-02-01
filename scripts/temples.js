document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menuToggle");
  const navigation = document.getElementById("navigation");

  let temples = null;

  async function loadTemples() {
    try {
      const response = await fetch("../data/temples.json");
      if (!response.ok) {
        throw new Error(`Error ${response.status}`);
      }

      temples = await response.json();
      renderTempleCards();
    } catch (error) {
      console.error("Error with JSON file:", error);
    }
  }

  loadTemples();

  menuToggle.addEventListener("click", () => {
    navigation.classList.toggle("active");
  });

  const yearSpan = document.getElementById("currentYear");
  const currentYear = new Date().getFullYear();
  if (yearSpan) {
    yearSpan.textContent = currentYear;
  }

  const lastModifiedSpan = document.getElementById("lastModified");
  if (lastModifiedSpan) {
    lastModifiedSpan.textContent = `Last Modified: ${document.lastModified}`;
  }

  const templeContainer = document.getElementById("templeCards");
  const showAll = document.getElementById("all");
  const showOld = document.getElementById("old");
  const showNew = document.getElementById("new");
  const showLarge = document.getElementById("large");
  const showSmall = document.getElementById("small");
  const title = document.getElementById("title");

  function renderTempleCards(filter = "all") {
    if (!temples) {
      return;
    }
    templeContainer.innerHTML = "";
    const filteredTemples = temples.filter((temple) => {
      if (filter === "all") return true;
      if (filter === "old") return temple.year < 1900;
      if (filter === "new") return temple.year >= 2000;
      if (filter === "large") return temple.totalFloorArea >= 90000;
      if (filter === "small") return temple.totalFloorArea < 10000;
    });

    filteredTemples.forEach((temple) => {
      const templeCard = document.createElement("div");
      templeCard.className = "templeCard";
      templeCard.innerHTML = `
                <img src="${temple.image}" alt="${temple.alt}" class="templeImage" loading="lazy">
                <div>
                <h3>${temple.name}</h3>
                <p>Location: ${temple.location}</p>
                <p>Dedicated: ${temple.dedicated}</p>
                <p>Total Floor Area: ${temple.totalFloorArea} sq ft</p>
                </div>
            `;
      templeContainer.appendChild(templeCard);
    });
    if (filter === "all") {
      title.textContent = `All Temples (${filteredTemples.length})`;
    } else if (filter === "old") {
      title.textContent = `Old Temples (${filteredTemples.length})`;
    } else if (filter === "new") {
      title.textContent = `New Temples (${filteredTemples.length})`;
    } else if (filter === "large") {
      title.textContent = `Large Temples (${filteredTemples.length})`;
    } else if (filter === "small") {
      title.textContent = `Small Temples (${filteredTemples.length})`;
    }
  }
  showAll.addEventListener("click", () => renderTempleCards("all"));
  showOld.addEventListener("click", () => renderTempleCards("old"));
  showNew.addEventListener("click", () => renderTempleCards("new"));
  showLarge.addEventListener("click", () => renderTempleCards("large"));
  showSmall.addEventListener("click", () => renderTempleCards("small"));

  renderTempleCards();
});
