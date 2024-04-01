const { Router } = require("express");
const path = require("path");
const { saveOrUpdateSettings, getSettings } = require(path.join(
  global.appRoot,
  "app",
  "controllers",
  "admin",
  "website_controller"
));

const { uploadFilesWithStorageName } = require(path.join(
  global.appRoot,
  "app",
  "services",
  "uploadFiles"
));

const WebsiteRouter = Router();

WebsiteRouter.use(uploadFilesWithStorageName("uploads/images").any());

WebsiteRouter.post("/save-settings", saveOrUpdateSettings);

WebsiteRouter.get("/get-settings", getSettings);

module.exports = WebsiteRouter;
