/*
  Names:  ביאן מריסאת + רואיה סעיד
  Date: 2026-06-06
  Description: Client-side JavaScript for loading JSON data
  from the server and rendering profile sections dynamically.
*/

// Fetches JSON data from the given URL and returns the parsed result
async function fetchJsonData(url) {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Failed to fetch data from ${url}`);
  }
  return response.json();
}

// Renders the animals (debugging squad) section
function renderAnimals(animals) {
  const container = document.getElementById("animalsContainer");
  if (!container) return;
  container.innerHTML = "";

  animals.forEach((animal) => {
    const card = document.createElement("article");
    card.className = "animal-card";
    card.innerHTML = `
      <img src="${animal.image}" alt="${animal.name}">
      <h3>${animal.name}</h3>
      <p><strong>Role:</strong> ${animal.role}</p>
      <p>${animal.description}</p>
    `;
    container.appendChild(card);
  });
}

// Renders the traits section
function renderTraits(traits) {
  const container = document.getElementById("traitsContainer");
  if (!container) return;
  container.innerHTML = "";

  traits.forEach((trait) => {
    const card = document.createElement("article");
    card.className = "trait-card";
    card.innerHTML = `
      <h3>${trait.title}</h3>
      <p>${trait.description}</p>
    `;
    container.appendChild(card);
  });
}

// Renders the reviews (endorsements) section
function renderReviews(reviews) {
  const container = document.getElementById("reviewsContainer");
  if (!container) return;
  container.innerHTML = "";

  reviews.forEach((review) => {
    const card = document.createElement("article");
    card.className = "review-card";
    card.innerHTML = `
      <p>"${review.text}"</p>
      <p><strong>${review.author}</strong></p>
      <p>${review.role}</p>
    `;
    container.appendChild(card);
  });
}

// Shows an error message in the main content area
function showError(message) {
  const main = document.querySelector("main");
  if (main) {
    main.innerHTML = `<p class="error-message">${message}</p>`;
  }
}

// Loads all page data in parallel from the server APIs
async function loadPageData() {
  try {
    const [animals, traits, reviews] = await Promise.all([
      fetchJsonData("/api/animals"),
      fetchJsonData("/api/animaltraits"),
      fetchJsonData("/api/reviews"),
    ]);

    renderAnimals(animals);
    renderTraits(traits);
    renderReviews(reviews);
  } catch (error) {
    console.error("Error loading page data:", error);
    showError("Failed to load page content. Please try again later.");
  }
}

document.addEventListener("DOMContentLoaded", loadPageData);
