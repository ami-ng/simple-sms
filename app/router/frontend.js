const {Router} = require("express");

const FrontendRouter = Router();

FrontendRouter.get("/", (req, res) => {
    res.render(
        "pages/index",
        {
           layout: "layouts/frontend",
        }
    );
});

FrontendRouter.get("/login", (req, res) => {
    res.render("pages/login"),
    {
        layout: "layouts/frontend",
    }
});
FrontendRouter.get("/register", (req, res) => {
    res.render("pages/register"),
    {
        layout: "layouts/frontend",
    }
});

module.exports = FrontendRouter;