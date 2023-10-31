// import mongoose from "mongoose";
const mongoose = require("mongoose");
const { mongoURI } = require("./config/dev");

const connect = mongoose
  .connect(mongoURI)
  .then(() => console.log("[MongoDB] connected..."))
  .catch(() => console.log("errrrror"));

console.log("server 실행 중...");
