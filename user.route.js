const express = require('express');
const route = express.Router();
const bodyParser = require('body-parser')
const { initializeApp } = require("firebase/app");
const { getAnalytics } = require("firebase/analytics");

express().use(bodyParser.urlencoded({ extended: true })); // Parse form data
express().use(bodyParser.json()); // Parse JSON data

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