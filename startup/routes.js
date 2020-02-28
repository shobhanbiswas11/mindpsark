const express = require("express");
const donors = require("../routes/donors");

module.exports = function(app) {
  app.use(express.json());
  app.use("/api/donors", donors);
};
