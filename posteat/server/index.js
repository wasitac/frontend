const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const { mongoURI } = require("./config/dev");

const connect = mongoose
  .connect(mongoURI)
  .then(() => console.log("db connected"))
  .catch(() => console.log("db error"));

router.get("/", (req, res) => {
  // res.render("index");
  res.send("hello...");
});

module.exports = router;
