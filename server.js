var express = require("express");
var path = require("path");

// Launch server
var app = express();

app.get("*", (req, res) => {
  res.sendFile(path.resolve("index.html"));
});

app.listen(4000, err => {
  if (err) {
    console.log(err);
    return;
  }

  console.log("Starting the development server...");
  console.log();
});