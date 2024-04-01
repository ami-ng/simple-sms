const express = require('express');

const app = express();

const server = app.listen("3000", async () => {
  await initiateMongoServer();
});