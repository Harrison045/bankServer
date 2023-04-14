//import express, body-parser

const express = require("express");
const bodyParser = require("body-parser");
const {
  listBanksController,
  updateBanksController,
  createBanksController,
  deleteBanksController,
} = require("./controllers");

//create express server
const server = express();

//middle wares
server.use(bodyParser.json());

//routes

//view banks - get method
server.get("/bank", listBanksController);
//create bank - post method
server.post("/bank", createBanksController);
// update bant - put method
server.put("/bank", updateBanksController);
//delete bank - delete method
server.delete("/bank", deleteBanksController);

//start server

server.listen(3000, () => console.log("server has started"));
