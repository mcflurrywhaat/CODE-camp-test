const express = require("express");
const path = require("path");
const app = express();
const port = 3000;

app.use(express.static("."));

app.get("/world", (req, res) => {
  res.send("Hello World!");
});

app.get("/bananaSplit", (req, res) => {
  res.send("i really really like banana and ice cream!");
});

app.get("/potato", (req, res) => {
  res.send("this is not it vro get yo stuff together NOW!!");
});

app.get("/Home", (req, res) => {
  res.send("Mr Pigs bacon restaaruant!");
});


app.get("/about", (req, res) => {
  res.sendFile(path.join(__dirname, "about.html"));
});

app.get("/contact", (req, res) => {
  res.sendFile(path.join(__dirname, "contact.html"));
});

app.use(express.static(__dirname));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/home1.html");
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "home1.html"));
});

app.get("/review", (req, res) => {
  res.sendFile(path.join(__dirname, "review.html"));
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
