const express = require('express');

const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());



const server = app.listen("3000", async () => {
  console.log("Server is running on port 3000");
});