//import n run express
const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

//middleware
app.use(cors());
//to pass data
app.use(express.json());


//Routes ---------------
//create todo

//get all



app.listen(5000, () => {
    console.log("server has started on port 5000");
});