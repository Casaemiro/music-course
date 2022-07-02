const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const path = require("path");

const app = express();

const PORT = process.env.PORT || 4000;

app.use(morgan("tiny"));

app.get("/app", (res, req) => {
  const data = {
    name: "cedrick",
    age: 23,
  };
});

app.listen(PORT, console.log(`started at port ${PORT}`));
