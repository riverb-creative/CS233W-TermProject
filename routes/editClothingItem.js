/**
 * editClothingItem.js
 * 
 * sends information of deleteClothingItem to the deleteItem.ejs file
 * http://localhost:3000/editClothingItem
 * 
 */

//import or require all of the desired frameworks/libraries/resources
const express = require('express');
const router = express.Router();
const Clothing = require('../models/Clothing');

const { body, validationResult } = require('express-validator');

const cleanData = require('../middleware/sanitize');

//get the edited item from the editCLothingItem 
// form if no errors go to clothingList view else show errors
router.post("/:clothingId", 
    [
    body("clothingCat").notEmpty().isIn
    ([
        "tops", "bottoms", "full outfit", "underwear", "footwear", "accessories"
    ]).withMessage("The category is required!"),
    body("clothingName").notEmpty().withMessage("The name is required!")
    ], cleanData, async (req, res) => {
    //results of the validation
        const theResult = validationResult(req);
        const theError = theResult.array();
    //URL of the form the user is accessing
        const theURL = req.originalUrl;

    const theCat = req.params.clothingId;
    
    
    if(theResult.isEmpty()) {
        let theCategory = req.body.clothingCat;
        let theName = req.body.clothingName;
        let theBrand = req.body.clothingBrand;
        let theSize = req.body.clothingSize;
        let theMaterial = req.body.clothingMaterial;
        let theQty = req.body.clothingQty;


        let updateClothingItem = {
            category: theCategory,
            name: theName,
            brand: theBrand,
            size: theSize,
            material: theMaterial,
            qty: theQty
        }

        

        try {
            await Clothing.findByIdAndUpdate(theCat, updateClothingItem);
            
            res.redirect("/clothingList");
        }

        catch (error) {
            res.status(500).send("Item not added: " + error);
        }

       
    }
    else {
        res.status(400).render("errors", { title: "Fix Your Errors!", appName: "Try Again", errors: theError, urlPath: theURL})
    }
});

//access the editClothingItem form

router.get("/:clothingId", async (req, res) => {
    //get the id from the URL
    const myId = req.params.clothingId;

    //use that id to get all the rest of the data associated with this movie
    const myClothing = await Clothing.findById(myId);

    //call a view that contains a form for updating the title, plot, year info
    res.render("editClothingItem", {title: "Update movie info",
                                    appName: "Edit Item",
                                  clothing: myClothing });
})

 module.exports = router;