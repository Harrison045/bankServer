//import express, body-parser

const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose"); 
const {
  listBanksController,
  updateBanksController,
  createBanksController,
  // deleteBanksController,
} = require("./controllers");

//create express server
const server = express();

//middle wares
server.use(bodyParser.json());

//routes

//view banks - get method
server.get("/bank/:id?", listBanksController);
//create bank - post method
server.post("/bank", createBanksController);
// update bant - put method
server.put("/bank", updateBanksController);
// //delete bank - delete method
// server.delete("/bank", deleteBanksController);

//connecting DataBase start server

mongoose.connect(
    "mongodb+srv://codetrain-user:3TVJkkXTzpNZq5Ej@cluster0.wadnheh.mongodb.net/codetrain?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then((result) => {
    server.listen(3000, () => console.log("server has started"));
  }).catch((err) => console.log(err));
