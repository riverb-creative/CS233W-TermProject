/**
 * clothingList.js
 * 
 * sends information of entire shopping list to the list.ejs file
 * http://localhost:3000/clothingList
 * 
 */

//import or require all of the desired frameworks/libraries/resources
const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const Clothing = require('../models/Clothing');

//view the clothingList view of all clothes that have been added, edited or deleted
router.get('/', async (req, res) => {
    try{
        const myClothing = await Clothing.find();
     res.render("clothingList", { title: "Clothing List", 
                                appName: "Clothing List", myClothing });
    } 
    catch (error) {
        res.status(500).send("Apologies, there was a problem with displaying all the clothing" +
                                error);
    }
});

//go to localhost:3000/clothingList/qty?min=theQtyYouWant  
//min requirement is 1 and max requirement is 100
router.get('/qty', async (req, res) => {
        const minQty = req.query.min || 1
        const maxQty = req.query.max || 100
        const myQty = await Clothing.find({qty: {$gte: minQty, $lte: maxQty}});

        res.render("clothingList", {title: "Clothes with the Quantity of " + minQty + " to " + maxQty,
                                    appName: "Clothing List", msg: "Clothes with the Quantity of " 
                                                + minQty + " to " + maxQty,
                                   myClothing: myQty
        });
});

//go to localhost:3000/clothingList/category?category=tops

router.get('/category', async (req, res) => {
        const myCat = await Clothing.find({category: 'tops'});

        res.render("clothingList", {title: "Clothes with the Category of Tops ",
                                    appName: "Clothing List",
                                   msg: "Clothes with the Category of Tops ",
                                   myClothing: myCat
        });
})

module.exports = router;