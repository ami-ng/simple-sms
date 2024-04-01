const {Router} = require("express");

const FrontendRouter = Router();

FrontendRouter.get("/", (req, res) => {
    res.render("pages/index");
});

FrontendRouter.get("/login", (req, res) => {
    res.render("pages/login");
});

module.exports = FrontendRouter;