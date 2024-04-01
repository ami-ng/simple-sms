const {Router} = require("express");
const FrontendRouter = require("./frontend");
const ApiRouter = require("./api");

const MainRouter = Router();

MainRouter.use("/api", ApiRouter);
MainRouter.use(FrontendRouter);

module.exports = MainRouter;