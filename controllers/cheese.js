////////////////////////////////////////
// Import Dependencies
////////////////////////////////////////
const express = require("express");
const Cheese = require("../models/cheese");

/////////////////////////////////////////
// Create Route
/////////////////////////////////////////
const router = express.Router();

///////////////////////////////////////
// router middleware
///////////////////////////////////////
router.use(express.json())

/////////////////////////////////////////
// Routes
/////////////////////////////////////////
// Index Route - get request to /cheese
// get us all the cheeses
router.get("/", async (req, res) => {
    try {
        // send all the cheeses
        res.json(await Cheese.find({}))
    } catch (error) {
        // send error
        res.status(400).json({error})
    }
})
// destroy route - delete request to /cheese/:id
// delete a specific cheese
router.delete("/:id", async (req, res) => {
    try {
      res.json(await Cheese.findByIdAndRemove(req.params.id));
    } catch (error) {
      res.status(400).json({ error });
    }
  });
// update route - put request to /cheese/:id
// update a specified person
router.put("/:id", async (req, res) => {
    try {
        res.json(
            await Cheese.findByIdAndUpdate(req.params.id, req.body, {new: true})
        )
    } catch (error){
        res.status(400).json({error})
    }
})
// Create Route - post request to /cheese
// create a person from JSON body
router.post("/", async (req, res) => {
    try {
        // create a new cheese
        res.json(await Cheese.create(req.body))
    } catch (error){
        //send error
        res.status(400).json({error})
    }
})
// Show Route - return a single toad
// get request to /toads/:id
router.get("/:id", async (req, res) => {
    // get the id
    const id = req.params.id
    // get the toad from database
    const cheese = await Cheese.findById(id)
    // return the toad
    res.json(cheese)
})
//////////////////////////////////////////
// Export the Router
//////////////////////////////////////////
module.exports = router;