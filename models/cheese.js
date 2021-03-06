//////////////////////////////////////////////
// Import Dependencies
//////////////////////////////////////////////
const mongoose = require("./connection")

////////////////////////////////////////////////
// Define Model
////////////////////////////////////////////////
// pull schema and model from mongoose
const { Schema, model } = mongoose;

const CheeseSchema = new Schema({
    name: String,
    countryOfOrigin: String,
    image: String
}, {timestamps: true})

const Cheese = model("Cheese", CheeseSchema)

///////////////////////////////////////////////////
// Export Model
///////////////////////////////////////////////////
module.exports = Cheese