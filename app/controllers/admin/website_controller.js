const Users = require("../../database/models/users");
const Settings = require("../../database/models/settings");

exports.saveOrUpdateSettings = async (req, res) => {
  console.log("files", req.files);
  console.log("body", req.body);
  let websiteLogo = null;
  if (req.files.websiteLogo) {
    websiteLogo = req.files.websiteLogo ? req.files.websiteLogo[0] : undefined;
    websiteLogo = websiteLogo.filename;
  }

  let websiteFavicon = null;
  if (req.files.websiteFavicon) {
    websiteFavicon = req.files.websiteFavicon
      ? req.files.websiteFavicon[0]
      : undefined;
    websiteFavicon = websiteFavicon.filename;
  }

  let {
    websiteName,
    websiteUrl,
    websiteLogoText,
    websiteEmail,
    userCanRegister,
  } = req.body;

  if (userCanRegister === "1" || userCanRegister === "true") {
    userCanRegister = true;
  } else if (userCanRegister === "0" || userCanRegister === "false") {
    userCanRegister = false;
  }
  const settings = await Settings.findOne();
  if (!settings) {
    const newSettings = new Settings({
      websiteName,
      websiteLogo,
      websiteFavicon,
      websiteUrl,
      websiteLogoText,
      websiteEmail,
      userCanRegister,
    });
    newSettings.save();
    return res.json({ message: "Settings saved successfully" });
  }
  settings.websiteName = websiteName;
  settings.websiteLogo = websiteLogo;
  settings.websiteFavicon = websiteFavicon;
  settings.websiteUrl = websiteUrl;
  settings.websiteLogoText = websiteLogoText;
  settings.websiteEmail = websiteEmail;
  settings.userCanRegister = userCanRegister;
  settings.save();
  return res.json({ message: "Settings updated successfully" });
};

exports.getSettings = async (req, res) => {
  const settings = await Settings.findOne();
  return res.json(settings);
};

exports.getSettingsMiddleWare = async (req, res, next) => {
  try {
    let settings = await Settings.findOne();
    if (!settings) {
      settings = new Settings({
        websiteName: "Express Courier",
        websiteLogoText: "Express",
      });
      await settings.save();
    }

    if (!settings.websiteFavicon || settings.websiteFavicon.trim() === "") {
      settings.websiteFavicon = "/p/images/favicon.svg";
    } else {
      settings.websiteFavicon = `/p/uploads/images/${settings.websiteFavicon}`;
    }

    if (!settings.websiteLogo || settings.websiteLogo.trim() === "") {
      settings.websiteLogo = "/p/images/logo.svg";
    } else {
      settings.websiteLogo = `/p/uploads/images/${settings.websiteLogo}`;
    }

    res.locals.websiteData = settings;
    next();
  } catch (error) {
    next(error);
  }
};
