const {Router} = require("express");
const FrontendRouter = require("./frontend");
const ApiRouter = require("./api");

const MainRouter = Router();

MainRouter.use("/", FrontendRouter);
MainRouter.use("/api", ApiRouter);



module.exports = MainRouter;