const express = require('express');
const route = express.Router();

route.get("/", (req, res)=>{
    res.status = 200;
    res.sendFile(__dirname + "/html/index.html");
});

route.get("/login", (req, res)=>{
    res.status = 200;
    res.sendFile(__dirname + "/html/login.html");
});

route.get("/books", (req, res)=>{
    res.status = 200;
    res.sendFile(__dirname + "/html/books.html");
});

module.exports = route;