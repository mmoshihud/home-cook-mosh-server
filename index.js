const express = require("express");
const app = express();
const port = 5000;

const chefs = require("./data/chefs.json");

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/chef", (req, res) => {
  res.send(chefs);
});

app.get("/chef/:id", (req, res) => {
  const id = req.params.id;
  const selectedChef = chefs.find((n) => n.id === id);
  res.send(selectedChef);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
