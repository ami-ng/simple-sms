const path = require("path");
const express = require("express");
global.appRoot = path.resolve(__dirname);
const initiateMongoServer = require("./app/database/index");
const app = express();
const bodyParser = require("body-parser");
const MainRouter = require("./app/routers/index");
const layouts = require("express-ejs-layouts");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.set("view engine", "ejs");
app.use(layouts);
app.set("layout", "layouts/public");

app.use("/p", express.static(path.resolve("static")));
app.use("/p/*", (req, res) => res.status(404).send("Media Not Found"));

app.use(MainRouter);

const server = app.listen("3000", async () => {
  initiateMongoServer;
  console.log("Server is running on port 3000");
});