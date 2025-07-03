const express = require("express");
const path = require("path");
const app = express();
const port = 3000;

app.use(express.static("."));

app.get("/about", (req, res) => {
  res.sendFile(path.join(__dirname, "about.html"));
});

app.get("/contact", (req, res) => {
  res.sendFile(path.join(__dirname, "contact.html"));
});

app.use(express.static(__dirname));

app.get("/CODE-camp-test", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.get("/CODE-camp-test", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/review", (req, res) => {
  res.sendFile(path.join(__dirname, "review.html"));
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
