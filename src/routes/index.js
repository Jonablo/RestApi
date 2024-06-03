const { Router } = require("express");
const router = Router();

router.get("/", (req, res) => {
  res.render("index", { title: "Hello World", data: [] });
});

router.get("/test", (req, res) => {
  const data = {
    name: "Pablo",
    semestre: "Octavo",
  };
  res.render("index", { title: "Test Data", data });
});

const adress = require("../sample.json");

router.get("/RyM", async (req, res) => {
  const response = await fetch("https://rickandmortyapi.com/api/character");
  const data = await response.json();
  res.render("index", {
    title: "Rick and Morty",
    data: data.results.map((character) => ({
      id: character.id,
      name: character.name,
      species: character.species,
      image: character.image,
    })),
  });
});

router.get("/address", (req, res) => {
  const formattedAdress = adress.map((entry) => ({
    name: entry.name,
    address: entry.address,
  }));
  res.render("index", { title: "Dataset-Servidor", data: formattedAdress });
});

module.exports = router;
