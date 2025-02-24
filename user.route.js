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
route.post("/login", (req, res)=>{
const firebaseConfig = {
  apiKey: "AIzaSyDNfWaATywyb0NER_QjajFiX8kDAh-Xrr0",
  authDomain: "boighor-web.firebaseapp.com",
  projectId: "boighor-web",
  storageBucket: "boighor-web.firebasestorage.app",
  messagingSenderId: "597728101742",
  appId: "1:597728101742:web:491373e7f5819442bbad7f",
  measurementId: "G-FY7MZWVQ7C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
    
    res.status = 200;
    console.log("Hi")
});

route.get("/books", (req, res)=>{
    res.status = 200;
    res.sendFile(__dirname + "/html/books.html");
});

module.exports = route;