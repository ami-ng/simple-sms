const path = require("path");
const bcrypt = require("bcrypt");
const Users = require(path.join(
  global.appRoot,
  "app",
  "database",
  "models",
  "users"
));
const { signJwt } = require(path.join(
  global.appRoot,
  "app",
  "utils",
  "signJwt"
));
const { catchAsync } = require(path.join(
  global.appRoot,
  "app",
  "utils",
  "catchAsync"
));

exports.LoginController = catchAsync(async (req, res, next) => {
  const body = req.body;
  body.userName = body.userName.toLowerCase();
  const user = await Users.findOne({ userName: body.userName });
  if (!user) {
    return res.status(400).json({ message: "User Not Found" });
  }

  const isMatch = await bcrypt.compare(body.password, user.password);
  if (!isMatch) {
    return res.status(400).json({ message: "Invalid Credentials" });
  }

  const token = signJwt(user);
  return res.status(201).json({ user, token });
});

exports.registerController = catchAsync(async (req, res, next) => {
  const body = req.body;
  body.userName = body.userName.toLowerCase();
  const user = await Users.findOne({ userName: body.userName });
  if (user) {
    return res.status(400).json({ message: "User Already Exists" });
  } else {
    const hashedPassword = await bcrypt.hash(body.password, 10);
    const newUser = new Users({
      userName: body.userName,
      password: hashedPassword,
      name: body.name,
    });

    await newUser.save();

    const token = signJwt(newUser);
    return res.status(201).json({
      message: "User Registered",
      user: {
        userName: newUser.userName,
        name: newUser.name,
      },
      token,
    });
  }
});
