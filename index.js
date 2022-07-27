require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT;
const userRoute = require('./user.route');

app.listen(port, (req, res)=>{
    console.log(`Server is running on http://localhost:${port}`)
});
app.use(userRoute);
app.use(express.static("html/externals"));