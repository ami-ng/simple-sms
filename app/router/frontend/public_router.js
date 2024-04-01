const path = require("path");
const { Router } = require("express");
const { config } = require("dotenv");

config();

const PublicRouter = Router();

PublicRouter.get("/", (req, res, next) => {
  res.render("pages/index", {
    title: "Home",
    layout: "layouts/layout-public",
    active: "home",
  });
});

PublicRouter.use("/", (req, res, next) => {
  res.render("pages/404", {
    title: "404 Error",
    layout: "layouts/layout-blank",
  });
});

module.exports = PublicRouter;
