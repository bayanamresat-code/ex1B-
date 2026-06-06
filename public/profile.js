/*
Name:  ביאן מריסאת +רואיה סעיד 
Date: 2026-06-06
Description: Client-side JavaScript for loading JSON data
from the server and rendering profile sections dynamically.
*/

async function fetchJsonData(url) {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Failed to fetch data from ${url}`);
  }

  return response.json();
}

function renderAnimals(animals) {
  const animalsContainer = document.getElementById("animalsContainer");
  animalsContainer.innerHTML = "";

  animals.forEach((animal) => {
    const animalCard = document.createElement("article");
    animalCard.className = "animal-card";

    animalCard.innerHTML = `
      <img src="${animal.image}" alt="${animal.name}">
      <h3>${animal.name}</h3>
      <p><strong>Role:</strong> ${animal.role}</p>
      <p>${animal.description}</p>
    `;

    animalsContainer.appendChild(animalCard);
  });
}

function renderReviews(reviews) {
  const reviewsContainer = document.getElementById("reviewsContainer");
  reviewsContainer.innerHTML = "";

  reviews.forEach((review) => {
    const reviewCard = document.createElement("article");
    reviewCard.className = "review-card";

    reviewCard.innerHTML = `
      <p>"${review.text}"</p>
      <p><strong>${review.author}</strong></p>
      <p>${review.role}</p>
    `;

    reviewsContainer.appendChild(reviewCard);
  });
}

async function loadPageData() {
  try {
    const animals = await fetchJsonData("/api/animals");
    const reviews = await fetchJsonData("/api/reviews");

    renderAnimals(animals);
    renderReviews(reviews);
  } catch (error) {
    console.error(error);
  }
}

document.addEventListener("DOMContentLoaded", loadPageData);