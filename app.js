const path = require("path");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const MainRouter = require("./app/router/index");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.set("view engine", "ejs");

app.use("/p", express.static(path.resolve("static")));
app.use("/p/*", (req, res) => res.status(404).send("Media Not Found"));

app.use(MainRouter);

const server = app.listen("3000", async () => {
  console.log("Server is running on port 3000");
});
