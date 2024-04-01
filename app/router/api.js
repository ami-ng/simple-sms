const {Router} = require("express");
const ApiRouter = Router();

ApiRouter.all("/login", (req, res) => {
    let username = req.body.username || req.query.username;
    let password = req.body.password || req.query.password;


    res.send({username, password});
});

module.exports = ApiRouter