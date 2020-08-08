require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const port = process.env.PORT || 5000;
const path = require("path");
const router = require("express").Router();

const app = express();

app.use(cors());
app.use(express.json());



// Routes

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/client/build")));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

// Listen
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});