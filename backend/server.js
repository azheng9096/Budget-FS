require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");

const budgetRoutes = require("./routes/budgetRoutes");

// express app
const app = express();

// middleware
app.use(express.json());
app.use("/api/budget", budgetRoutes);

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