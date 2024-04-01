const path = require("path");
const Users = require(path.join(
  global.appRoot,
  "app",
  "database",
  "models",
  "users"
));

exports.isUserAdmin = async (req, res, next) => {
  const userID = req.user._id;
  if (!userID) {
    return res.status(401).json({ error: "Unauthorized" });
  }
  const checkAdmin = Users.findOne({ _id: userID, role: "admin" });
  if (!checkAdmin) {
    return res.status(401).json({ error: "Unauthorized" });
  }
  req.isAdmin = true;
  next();
};
