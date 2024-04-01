const path = require("path");
const express = require("express");
const { LoginController, registerController } = require(path.join(
  global.appRoot,
  "app",
  "controllers",
  "user",
  "authenticator_controller"
));

const AuthenticatorRouter = express.Router();

AuthenticatorRouter.post("/login-user", LoginController);
AuthenticatorRouter.post("/register-user", registerController);

module.exports = AuthenticatorRouter;
