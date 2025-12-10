/**
 * deleteListItems.js
 * 
 * sends information of deleteClothingItem to the deleteItem.ejs file
 * http://localhost:3000/deleteClothingItem
 * 
 */

//import or require all of the desired frameworks/libraries/resources
const express = require('express');
const router = express.Router();
const Clothing = require('../models/Clothing');

//delete item found by _id in mongoDB atlas

router.get("/:clothingId", async (req, res) => {
    //extract the clothingId value from the URL
    const myId = req.params.clothingId;

    //using that ID to delete a document from the collection
    const deletedClothing = await Clothing.findByIdAndDelete(myId);

    //check to see if deletion worked
    if(deletedClothing) {
        //success
        res.redirect("/clothingList");
    }
    else {
        res.status(404).send("Sorry, we couldn't find that clothing piece :(");
    }
});


module.exports = router;