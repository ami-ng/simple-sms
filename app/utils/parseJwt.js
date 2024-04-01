const jwt = require("jsonwebtoken");

const checkToken = (token) => {
  return jwt.verify(token, process.env.JWT_SECRET);
};

const parseJwt = (req, res, next) => {
  const authorizationHeader = req.headers.authorization;
  const token =
    authorizationHeader && authorizationHeader.replace("Bearer ", "");
  try {
    const jwtData = checkToken(token);
    if (jwtData && jwtData.user) {
      req.user = jwtData.user;
      next();
    } else {
      res.status(401).json({ error: "Unauthorized" });
    }
  } catch (err) {
    res.status(401).json({ error: "Unauthorized: " + err.message });
  }
};

module.exports = { parseJwt };
