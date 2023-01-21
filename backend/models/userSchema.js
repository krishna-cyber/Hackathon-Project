const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  emergency_contact: {
    name: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    relation: {
      type: String,
      required: true,
    },
  },
  medical_history: [
    {
      condition: {
        type: String,
        required: true,
      },
      notes: {
        type: String,
      },
      date: {
        type: Date,
        default: Date.now,
      },
    },
  ],
  insurance: {
    provider: {
      type: String,
    },
    policy_number: {
      type: String,
    },
  },
  role: {
    type: String,
    default: "user",
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
  updated_at: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("User", userSchema);
