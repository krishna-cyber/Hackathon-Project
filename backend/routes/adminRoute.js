const express = require("express");
const router = express.Router();
const {
  adminLogin,
  adminLogout,
  adminRegistration,
} = require("../controllers/adminController");

//creating routes
router.post("/login", adminLogin);
router.get("/logout", adminLogout);
router.post("/register", adminRegistration);

//exporting routes
module.exports = router; // exporting router object
