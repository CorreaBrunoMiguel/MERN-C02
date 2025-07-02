"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var bodyParser = require("body-parser");
var user_1 = require("./users/user");
var app = express();
app.use(bodyParser.json());
app.get('/api/users', function (req, res) {
    res.json(user_1.users);
});
app.listen(3000, function () {
    console.log('Server is running on port 3000');
});
