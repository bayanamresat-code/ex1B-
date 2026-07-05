/*
  Names: ביאן מריסאת + רואיה סעיד
  Date: 2026-06-06
  Description:
  This file creates an Express server for the profile website.
  The server serves static files from the public folder and provides
  API routes that return JSON data from files stored in the private folder.

  Imports:
  - express: used to create the web server and routes.
  - fs/promises: used to read JSON files asynchronously.
  - path: used to create safe file paths.
*/
const express = require("express");
const fs = require("fs").promises;
const path = require("path");

const app = express();
const port = process.env.PORT || 3000;

// Serve static files (HTML, CSS, JS, images) from the public folder
app.use(express.static(path.join(__dirname, "public")));

// Reads a JSON file from the private folder asynchronously
async function readJsonFile(fileName) {
  const filePath = path.join(__dirname, "private", fileName);
  const fileContent = await fs.readFile(filePath, "utf8");
  return JSON.parse(fileContent);
}

// Returns the list of animals as JSON
app.get("/api/animals", async (request, response) => {
  try {
    const animals = await readJsonFile("animals.json");
    response.json(animals);
  } catch (error) {
    console.error("Error reading animals.json:", error);
    response.status(500).json({ error: "Failed to load animals data" });
  }
});

// Returns the list of animal traits as JSON
app.get("/api/animaltraits", async (request, response) => {
  try {
    const animalTraits = await readJsonFile("animaltraits.json");
    response.json(animalTraits);
  } catch (error) {
    console.error("Error reading animaltraits.json:", error);
    response.status(500).json({ error: "Failed to load traits data" });
  }
});

// Returns the list of reviews as JSON
app.get("/api/reviews", async (request, response) => {
  try {
    const reviews = await readJsonFile("reviews.json");
    response.json(reviews);
  } catch (error) {
    console.error("Error reading reviews.json:", error);
    response.status(500).json({ error: "Failed to load reviews data" });
  }
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
