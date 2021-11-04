///////////////////////////////
// Dependencies
///////////////////////////////
// import express
const express = require("express")
// import middleware
const cors = require("cors"); // cors headers
const morgan = require("morgan") // logging

///////////////////////////////
// Routers
///////////////////////////////
const CheeseRouter = require("../controllers/cheese")
const HomeRouter = require("../controllers/home")

//////////////////////
// Middleware Function
//////////////////////
const middleware = (app)=>{
    app.use(cors());
    app.use(morgan("dev"));
    app.use(express.json());
    app.use('/cheese', CheeseRouter)
    app.use('/', HomeRouter);
}

module.exports = middleware;