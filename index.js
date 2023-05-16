//import express, body-parser

const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
//import Routes
const accountRoutes = require("./routes/account")
const bankRoutes = require("./routes/bank")
//create express server
const server = express();

//middle wares
server.use(bodyParser.json());

//routes
server.use(accountRoutes)
server.use(bankRoutes)




//connecting DataBase start server

mongoose.connect(
    "mongodb+srv://codetrain-user:3TVJkkXTzpNZq5Ej@cluster0.wadnheh.mongodb.net/codetrain?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then((result) => {
    server.listen(3000, () => console.log("server has started"));
  }).catch((err) => console.log(err));
