const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

//hospital schema for health care system

const hospitalSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please add a name"],
    },

    email: {
      type: String,
      required: [true, "Please add an email"],
      unique: [true, "Email already exists"],
      trim: true,
      match: [
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        "Please add a valid email",
      ],
    },
    password: {
      type: String,
      required: [true, "Please add a password"],
      minlength: [6, "Password must be at least 6 characters long"],
    },
    contact: [
      {
        type: String,
        required: [true, "Please add a contact number"],
      },
    ],
    treatnments: [
      {
        type: String,
        required: [true, "Please add a treatment"],
      },
    ],
    location: {
      longitude: {
        type: String,
        required: [true, "Please add a appropriate location"],
      },
      latitude: {
        type: String,
        required: [true, "Please add a appropriate location"],
      },
    },
  },
  {
    timestamps: true,
    updatedAt: true,
  }
);

// Encrypt password using bcrypt
hospitalSchema.pre("save", async function (next) {
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

//exporting the model
module.exports = mongoose.model("Hospital", hospitalSchema);
