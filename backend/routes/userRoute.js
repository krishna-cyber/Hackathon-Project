const express = require("express");

//importing controllers
const {
  registerUser,
  loginUser,
  logoutUser,
} = require("../Controllers/userController");

//creating router object
const router = express.Router();

//creating routes
router.post("/register", registerUser); //register user
router.post("/login", loginUser);
router.get("/logout", logoutUser);

//exporting routes
module.exports = router; // exporting router object
