const path = require("path");
const Users = require(path.join(
  global.appRoot,
  "app",
  "database",
  "models",
  "users"
));
const {catchAsync} = require(path.join(
  global.appRoot,
  "app",
  "utils",
  "catchAsync"
));

exports.fetchUserDetails = catchAsync(async (req, res, next) => {
  
  if (req.isAdmin) {
    const userId = req.query.userId;
    const user = await Users.findOne({ _id: userId });
    return res.json(user);
  }
  const userId = req.user._id;
  const user = await Users.findById(userId).select("-password");

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }
  return res.json(user);
});

exports.updateUserDetails = catchAsync(async (req, res, next) => {
  if (req.isAdmin) {
    const userId = req.query.userId;
    const user = await Users.findOne({ _id: userId });
    user.name = req.body.name;
    user.email = req.body.email;
    user.picture = req.body.picture;
    user.save();
    return res.json(user);
  }

  let picture = null;
  if (req.file) {
    picture = path.basename(req.file.path);
  }
  const userId = req.user._id;
  const user = await Users.findById(userId);

  if (user) {
    user.name = req.body.name || user.name;
    user.email = req.body.email || user.email;
    if (picture !== null) {
      user.picture = picture;
    }
    await user.save();
    return res
      .status(200)
      .json({ message: "User details updated successfully" });
  } else {
    return res.status(404).json({ message: "User not found" });
  }
});

exports.fetchAllUsers = catchAsync(async (req, res, next) => {
  if (!req.isAdmin) {
    return res.status(401).json({ error: "Unauthorized" });
  }
  const users = await Users.find();
  return res.json(users);
});

exports.deleteUser = catchAsync(async (req, res, next) => {
  if (req.isAdmin) {
    const userId = req.query.userId;
    const user = await Users.findOne({ _id: userId });
    user.remove();
    return res.json({ message: "User deleted" });
  }
  const userId = req.user._id;
  const user = await Users.findOne({ _id: userId });
  user.remove();
  return res.json({ message: "Your Account is deleted" });
});
