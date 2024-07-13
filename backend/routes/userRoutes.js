const express = require("express");
const { loginUser, registerUser } = require("../controllers/userController");

const router = express.Router();

// POST login user
router.post("/login", loginUser);

// POST register user
router.post("/register", registerUser);

module.exports = router;
