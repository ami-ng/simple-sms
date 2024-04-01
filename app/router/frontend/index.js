const { Router } = require("express");
const path = require("path");
const Frontend = Router();
const {
  getSettingsMiddleWare,
} = require("../../controllers/admin/website_controller");

const AdminRouter = require("./admin_router");
const UserRouter = require("./user_router");
const PublicRouter = require("./public_router");
const ExtendFrontendRouter = require(path.join(global.appRoot, "extend", "routers", "frontend", "index"));



Frontend.use(getSettingsMiddleWare);
Frontend.use(ExtendFrontendRouter);
Frontend.use("/admin", AdminRouter);
Frontend.use("/user", UserRouter);
Frontend.use(PublicRouter);

module.exports = Frontend;
