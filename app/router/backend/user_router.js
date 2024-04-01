const { Router } = require("express");
const path = require("path");
const { uploadFilesWithStorageName } = require(path.join(
  global.appRoot,
  "app",
  "services",
  "uploadFiles"
));
const { fetchUserDetails, updateUserDetails } = require(path.join(
  global.appRoot,
  "app",
  "controllers",
  "user",
  "user_controller"
));
const UserRouter = Router();


UserRouter.all("/get-user-details", fetchUserDetails);
UserRouter.post("/update-user-details", updateUserDetails);

module.exports = UserRouter;
