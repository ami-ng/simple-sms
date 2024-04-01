const { Router } = require("express");
const Backend = Router();
const path = require("path");
const AuthenticatorRouter = require("./authenticator_router");

const { parseJwt } = require(path.join(
  global.appRoot,
  "app",
  "utils",
  "parseJwt"
));
const { uploadFilesWithStorageName } = require(path.join(
  global.appRoot,
  "app",
  "services",
  "uploadFiles"
));
const AdminRouter = require(path.join(
  global.appRoot,
  "app",
  "routers",
  "backend",
  "admin_router"
));

const UserRouter = require(path.join(
  global.appRoot,
  "app",
  "routers",
  "backend",
  "user_router"
));

const ExtendBackendRouter = require(path.join(global.appRoot, "extend", "routers", "backend", "index"));
Backend.use(ExtendBackendRouter);
Backend.use(AuthenticatorRouter);
Backend.use(uploadFilesWithStorageName("images/users").any());


Backend.use(parseJwt);
Backend.use("/admin", AdminRouter);
Backend.use(UserRouter);

module.exports = Backend;
