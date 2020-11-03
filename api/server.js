const express = require("express");

const db = require("../data/dbConfig.js");

const AccountRouter = require('../data/seeds/account-router')
const server = express();

server.use(express.json());
server.use("/api/acc", AccountRouter);

server.get("/", (req, res) => {
  res.status(200).json({ api: "up" });
});



module.exports = server;
