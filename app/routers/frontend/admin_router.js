const path = require("path");
const { Router } = require("express");

const DashboardRouter = Router();

DashboardRouter.get("/", (req, res, next) => {
  res.redirect("/admin/dashboard");
});

DashboardRouter.get("/dashboard", (req, res, next) => {
  res.render("pages/admin/dashboard", {
    title: "Admin Dashboard",
    layout: "layouts/admin",
  });
});

DashboardRouter.get("/manage-user", (req, res, next) => {
  res.render("pages/admin/manage-user", {
    title: "Admin Dashboard",
    layout: "layouts/admin",
  });
});

DashboardRouter.get("/edit-profile/*", (req, res) => {
  res.render("pages/admin/edit-profile", {
    title: "Admin Dashboard",
    layout: "layouts/admin",
  });
});

DashboardRouter.get("/website-settings", (req, res, next) => {
  res.render("pages/admin/website-settings", {
    title: "Admin Dashboard",
    layout: "layouts/admin",
  });
});

module.exports = DashboardRouter;
