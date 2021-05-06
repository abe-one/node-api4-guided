require("dotenv").config();
const path = require("path");

const express = require("express");
const server = express();

const PORT = process.env.PORT || 5000;

server.use(express.static(path.join(__dirname, "client/build")));

server.use(express.json());

server.get(`/api/*`, (_req, res) => {
  res.status(200).json("Cool");
});

server.use("*", (_req, res) => {
  res.sendFile(path.join(__dirname, "client/build", "index.html"));
});

server.listen(PORT, () => {
  console.log(`listening on ${PORT}`);
});
