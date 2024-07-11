const express = require("express");
const mongoose = require("mongoose");

// express app
const app = express();

// middleware
app.use(express.json());

// connect to db
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    // listen for requests
    app.listen(process.env.PORT, () => {
      console.log(`Connected to DB & Listening on port ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });