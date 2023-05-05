const express = require("express");
const app = express();
const port = 5000;
const cors = require("cors");
const chefs = require("./data/chefs.json");
const recipe = require("./data/recipe.json");
const blogs = require("./data/blog.json");

app.use(cors());

app.get("/", (req, res) => {
  res.send(
    "Welcome to Home Cook Backend. go to /chef and /recipe to see api data"
  );
});

app.get("/chef", (req, res) => {
  res.send(chefs);
});

app.get("/chef/:id", (req, res) => {
  const id = req.params.id;
  const selectedChef = chefs.find((n) => n.id === id);
  res.send(selectedChef);
});

app.get("/recipe/:chef_id", (req, res) => {
  const id = req.params.chef_id;
  const recipeByChef = recipe.filter((x) => x.chef_id === id);
  res.send(recipeByChef);
});

app.get("/blog", (req, res) => {
  res.send(blogs);
});

app.listen(port);
