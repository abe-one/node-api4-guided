console.log("index here");

const express = require("express");
const server = express();

const PORT = process.env.PORT || 4000;

server.use(express.json());

server.get(`/api/*`, (_req, res) => {
  res.status(200).json("Cool");
});

server.listen(PORT, () => {
  console.log(`listening on ${PORT}`);
});
