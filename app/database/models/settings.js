const mongoose = require("mongoose");
const settingSchema = new mongoose.Schema({
  websiteName: {
    type: String,
  },
  websiteLogo: {
    type: String,
  },
  websiteFavicon: {
    type: String,
  },
  websiteUrl: {
    type: String,
  },
  websiteLogoText: {
    type: String,
  },
  websiteEmail: {
    type: String,
  },
  userCanRegister: {
    type: Boolean,
    default: true,
  },
});

const settingModel = mongoose.model("settings", settingSchema);
module.exports = settingModel;
