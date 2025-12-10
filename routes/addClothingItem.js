/**
 * addClothingItem.js
 * 
 * sends information of addListItem to the addItem.ejs file
 * http://localhost:3000/addClothingItem
 * 
 */

//import or require all of the desired frameworks/libraries/resources

const express = require('express');
const router = express.Router();
const Clothing = require('../models/Clothing');
const { body, validationResult } = require('express-validator');



router.post("/", 
[
    //requirements for form
    body("clothingCat").notEmpty().isIn
    ([
        "tops", "bottoms", "full outfit", "underwear", "footwear", "accessories"
    ]).withMessage("The category is required"),
    body("clothingName").notEmpty().withMessage("The name is required")
],
async (req, res) => {
    //results of the validation
    const theResult = validationResult(req);
    const theError = theResult.array();
    //URL of the form the user is accessing
    const theURL = req.originalUrl;

// create new item and redirect to clothingList view if no errors else show errors

    if(theResult.isEmpty()) {
        let theCategory = req.body.clothingCat;
        let theName = req.body.clothingName;
        let theBrand = req.body.clothingBrand;
        let theSize = req.body.clothingSize;
        let theMaterial = req.body.clothingMaterial;
        let theQty = req.body.clothingQty;


        let theNewClothingItem = {
            category: theCategory,
            name: theName,
            brand: theBrand,
            size: theSize,
            material: theMaterial,
            qty: theQty
        }
   
        try {
            await Clothing.create(theNewClothingItem);
            res.redirect("/clothingList");
        }
        catch (error) {
            res.status(500).send("Clothing Item not added: " + error);
        }

       
    }
    else {
        res.status(400).render("errors", { title: "Fix Your Errors!", appName: "Try Again", errors: theError, urlPath: theURL})
    }

    });

// access to the addClothingItem form

    router.get('/', (req, res) => {
        // res.json(listItems);
         res.render("addClothingItem", { title: "Add Clothing Item Form", appName: "Add a clothing item!", Clothing });
    });
    

 module.exports = router;