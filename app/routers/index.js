const { Router } = require("express");
const Backend = require("./backend/index");
const Frontend = require("./frontend/index");
const { errorHandler } = require("../utils/errorHandler");

const MainRouter = Router();

MainRouter.use("/api", Backend);
MainRouter.use(Frontend);
MainRouter.use(errorHandler);

module.exports = MainRouter;
