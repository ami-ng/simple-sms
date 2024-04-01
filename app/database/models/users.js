const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  userName: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: false,
  },
  email: {
    type: String,
    required: false,
  },
  picture: {
    type: String,
    default: "default.jpg",
    required: false,
  },
  accessToken: {
    type: String,
    required: false,
  },
  refreshToken: {
    type: String,
    required: false,
  },
  tokenExpiry: {
    type: Date,
    required: false,
  },
  userFund: {
    type: Number,
    require: false,
  },
  role: {
    type: String,
    default: "user",
  },
});
const userModel = mongoose.model("users", userSchema);
module.exports = userModel;
