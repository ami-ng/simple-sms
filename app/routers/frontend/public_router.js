const path = require("path");
const { Router } = require("express");
const { config } = require("dotenv");

config();

const PublicRouter = Router();

PublicRouter.get("/", (req, res, next) => {
  res.render("pages/public/index", {
    title: "Home",
    layout: "layouts/public",
    active: "home",
  });
});

PublicRouter.use("/404", (req, res, next) => {
  res.render("pages/public/404", {
    title: "404 Error",
    layout: "layouts/simple",
  });
});

module.exports = PublicRouter;
