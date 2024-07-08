const express = require("express");
const app = express();

app.get("/api/GetCombo", (req, res) => {
  const comboData = {
    combo: ["security_team", "top10_global", "sports_integration_0807"],
  };
  res.json(comboData);
});

module.exports = app;
