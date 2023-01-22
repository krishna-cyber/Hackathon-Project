const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken"); // import the Library.
const bcrypt = require("bcrypt");

//importing user model
const Admin = require("../models/adminSchema");

//generate token function
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
};

//adminregistration controller
const adminRegistration = asyncHandler(async (req, res, next) => {
  const { email, password, phone, name } = req.body;

  //save admin
  const newAdmin = await Admin.create({
    email,
    password,
    phone,
    name,
  });
  if (newAdmin) {
    const { _id, email, phone, name } = newAdmin;
    res.status(201).json({
      _id,
      name,
      email,
      phone,
    });
  }
});
//adminLogin controller
const adminLogin = asyncHandler(async (req, res, next) => {
  const { email, password } = req.body;
  //validation
  if (!email || !password) {
    res.status(400);
    throw new Error("Please fill all required fields");
  }

  //check if the user already exists
  const admin = await Admin.findOne({
    email,
  });

  if (admin && (await bcrypt.compare(password, admin.password))) {
    const { _id, email, phone, name } = admin;
    //Generating token
    const token = generateToken(_id);
    //set cookie to browser
    res.cookie("token", token, {
      path: "/",
      httpOnly: true,
      expires: new Date(Date.now() + 24 * 60 * 60 * 1000), //cookie will expire in 1 day
      sameSite: "none", //for secure cookie
      secure: true, //for secure cookie
    });

    res.status(200).json({
      _id,
      message: "Login successfull",
      name,
      email,
      phone,
      token,
    });
  } else {
    res.status(401).json({
      message: "Invalid email or password",
    });
  }

  //generate token for admin login
});

//adminLogout controller
const adminLogout = asyncHandler(async (req, res, next) => {
  res.clearCookie("token");
  //send response
  res.status(200).json({
    message: "Logged out successfully",
  });
});

//exporting controllers
module.exports = {
  adminLogin,
  adminLogout,
  adminRegistration,
};
