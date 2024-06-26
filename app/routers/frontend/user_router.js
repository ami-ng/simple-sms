const { Router } = require("express");
const UserRouter = Router();

UserRouter.get("/login", async (req, res) => {
  res.render("pages/auth/login", {
    title: "Login",
    layout: "layouts/simple",
  });
});

UserRouter.get("/logout", (req, res, next) => {
  res.render("pages/auth/logout", {
    title: "Logout",
    layout: "layouts/simple",
  });
});

UserRouter.get("/register", (req, res, next) => {
  res.render("pages/auth/register", {
    title: "register",
    layout: "layouts/simple",
  });
});

UserRouter.get("/reset-password", (req, res, next) => {
  res.render("pages/auth/reset-password", {
    title: "Reset Password",
    layout: "layouts/blank",
  });
});

UserRouter.get("/", (req, res, next) => {
  res.redirect("/user/dashboard");
});

UserRouter.get("/edit-profile", (req, res) => {
  res.render("pages/user/edit-profile", {
    title: "Edit Profile",
    layout: "layouts/user",
  });
});

UserRouter.get("/dashboard", (req, res, next) => {
  res.render("pages/user/dashboard", {
    title: "Dashboard",
    layout: "layouts/user",
  });
});

module.exports = UserRouter;