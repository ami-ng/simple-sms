const path = require("path");
const crypto = require("crypto");
const updateEnv = require(path.join(global.appRoot, "./app/utils/updateEnv"));

const secret = crypto.randomBytes(32).toString("hex");

const setupServer = () => {
updateEnv("PORT", "3000");
updateEnv("JWT_SECRET", secret);
};

module.exports = setupServer;