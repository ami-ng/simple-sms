const mongoose = require("mongoose");
const initiateMongoServer = async () => {
  try {
    await mongoose.connect(process.env.DB_URL + process.env.DATABASE_NAME);
    console.info("Connected to DB");
  } catch (err) {
    throw new Error(err);
  }
};
module.exports = initiateMongoServer;
