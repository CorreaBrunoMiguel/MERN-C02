"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var app = express();
app.get('/', function (req, res) {
    res.send('Hello, Express!');
});
app.listen(3000, function () {
    console.log('Server is running on http://localhost:3000');
});
