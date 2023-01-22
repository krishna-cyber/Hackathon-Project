const express = require("express");

//importing controllers
const {
  registerhUser,
  loginhUser,
} = require("../controllers/hospitalController");

//creating router object
const router = express.Router();

//user registration route
router.get("/", (req, res) => {
  res.send("hospitals");
});
router.post("/register", registerhUser);
router.post("/login", loginhUser);

module.exports = router;
