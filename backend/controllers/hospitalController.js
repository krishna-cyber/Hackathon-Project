//importing async handler
const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken"); // import the Library.
const bcrypt = require("bcrypt"); // import the Library.

//importing hospital model
const Hospital = require("../models/hospitalSchema");
//generate token function
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
};
//controllers
//user registration controller
const registerhUser = asyncHandler(async (req, res, next) => {
  const { name, email, password, contact, treatnments } = req.body;
  console.log(req.body);

  //validation
  if (!name || !email || !password) {
    res.status(400);
    throw new Error("Please fill all required fields");
  }

  //check the length of the password
  if (password.length < 6) {
    res.status(400);
    throw new Error("Password must be at least 6 characters long");
  }

  //check if the user already exists
  const hospital = await Hospital.findOne({ email });
  if (hospital) {
    console.log(hospital);
    res.status(400);
    throw new Error("Hospital already exists");
  }

  //create new hospital
  const newHospital = await Hospital.create({
    name,
    email,
    password,
    contact,
    treatnments,
  });

  //Generating token
  const token = generateToken(newHospital._id); //Token will expire in 1 day and generated for the newUser._id
  //set cookie
  res.cookie("token", token, {
    path: "/",
    httpOnly: true,
    expires: new Date(Date.now() + 24 * 60 * 60 * 1000), //cookie will expire in 1 day
    sameSite: "none", //for secure cookie
    secure: true, //for secure cookie
  });

  //send response
  if (newHospital) {
    const { _id, name, email, password, contact, treatnments } = newHospital;
    res.status(201).json({
      _id,
      name,
      email,
      contact,
      treatnments,
    });
  } else {
    res.status(400);
    throw new Error("Invalid Hospital data");
  }
});

//hospital login controller
const loginhUser = asyncHandler(async (req, res, next) => {
  const { email, password } = req.body;
  //validation
  if (!email || !password) {
    res.status(400);
    throw new Error("Please fill all required fields");
  }
  //check if the user exists
  const hospital = await Hospital.findOne({
    email,
  });
  if (!hospital) {
    res.status(400);
    throw new Error("hospital does not exist! Please Sign up first💖");
  }
  //check if the password is correct
  const isPasswordCorrect = await bcrypt.compare(password, hospital.password);
  //sending response to client after password correct and user found
  if (isPasswordCorrect && hospital) {
    const { _id, name, email, contact, treatnments } = hospital;

    //generate token for the user
    const token = generateToken(_id); //Token will expire in 1 day and generated for the user._id
    //set cookie
    res.cookie("token", token, {
      path: "/",
      httpOnly: true,
      expires: new Date(Date.now() + 24 * 60 * 60 * 1000), //cookie will expire in 1 day
      sameSite: "none", //for different sites
      secure: true, //for secure cookie
    });

    //send response
    res.status(200).json({
      _id,
      name,
      email,
      contact,
      treatnments,
      token,
    });
  } else {
    res.status(400);
    throw new Error("Invalid email or password!!");
  }
});

//logout controller
const logouthUser = asyncHandler(async (req, res, next) => {
  //clear cookie from the browser
  res.clearCookie("token");
  //sending response message
  res.status(200).json({
    message: "Logged out successfully",
  });
});

// exporting controllers
module.exports = {
  registerhUser,
  loginhUser,
  logouthUser,
};
