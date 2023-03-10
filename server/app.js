const express = require("express");
const path = require("path");
const cors = require("cors");

const app = express();
app.use("/api", require("./api")); // include our routes!
// static middleware
app.use(express.static(path.join(__dirname, "..", "public")));

app.use(cors());

app.use("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

module.exports = app;
