const {Router} = require("express");

const MainRouter = Router();

MainRouter.get("/", (req, res) => {
    res.render("index");
});

module.exports = MainRouter;