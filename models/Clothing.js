/**
 * Clothing.js
 * 
 * Mongoose schema definition for a clothing object
 * used to query, edit, add, and delete items from the 
 * clothes collection in MongoDB Atlas cluster
 * 
 * 
 */

//require access to Mongoose library
const mongoose = require("mongoose");

//create a schema definition
const clothingSchema = new mongoose.Schema({

    category:   
        {type: String, 
            enum: [
                "tops", "bottoms", "full outfit",
                "underwear", "footwear", "accessories"
            ],
            required: true
        },
    name:
        {type: String},

    brand:     
        {type: String},

    size:     
        {type: String},

    material:    
        {type: String},
    
    qty:    
        {type: Number}
});

module.exports = mongoose.model("Clothing", clothingSchema);