const jwt = require("jsonwebtoken");

const signJwt = (user) => {
  const token = jwt.sign(
    {
      user: {
        _id: user._id,
        userName: user.name,
      },
    },
    process.env.JWT_SECRET,
    { expiresIn: process.env.JWT_EXPIRY }
  );
  return token;
};

module.exports = { signJwt };