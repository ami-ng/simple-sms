const { Router } = require("express");
const path = require("path");
const { isUserAdmin } = require("../../controllers/admin/admin_contoller");
const WebsiteRouter = require("./website_router");
const {
  fetchUserDetails,
  updateUserDetails,
  fetchAllUsers,
  deleteUser,
} = require(path.join(
  global.appRoot,
  "app",
  "controllers",
  "user",
  "user_controller"
));

const AdminRouter = Router();

AdminRouter.use(isUserAdmin);

AdminRouter.use(WebsiteRouter);
AdminRouter.all("/get-users", fetchAllUsers);
AdminRouter.all("/get-user-details/", fetchUserDetails);
AdminRouter.all("/update-user/", updateUserDetails);
AdminRouter.all("/delete-user/", deleteUser);

module.exports = AdminRouter;
