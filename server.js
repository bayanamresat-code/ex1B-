/*
Name:  ביאן מריסאת + רואיה סעיד
Date: 2026-06-06
Description: Express server for ex1B. Serves static files from public
and JSON data from private through API routes.
*/

const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, "public")));

function readJsonFile(fileName) {
  const filePath = path.join(__dirname, "private", fileName);
  const fileContent = fs.readFileSync(filePath, "utf8");
  return JSON.parse(fileContent);
}

app.get("/api/animals", (request, response) => {
  const animals = readJsonFile("animals.json");
  response.json(animals);
});

app.get("/api/animaltraits", (request, response) => {
  const animalTraits = readJsonFile("animaltraits.json");
  response.json(animalTraits);
});

app.get("/api/reviews", (request, response) => {
  const reviews = readJsonFile("reviews.json");
  response.json(reviews);
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});