const {Router} = require("express");

const MainRouter = Router();

MainRouter.get("/", (req, res) => {
    res.render("pages/index");
});

module.exports = MainRouter;