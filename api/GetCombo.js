const express = require("express");
const app = express();

app.get("/api/GetCombo", (req, res) => {
  const comboData = {
    combo: [
      "security_team",
      "top_10_global_ranking",
      "sports_integration_0807",
    ],
  };
  res.json(comboData);
});

module.exports = app;
