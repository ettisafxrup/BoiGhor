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
route.get("/blogs", (req, res)=>{
    res.status = 200;
    res.sendFile(__dirname + "/html/blogs.html");
});

module.exports = route;