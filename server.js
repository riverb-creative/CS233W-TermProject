/**
 * server.js
 * 
 * main server file - working this week with CRUD operations with our
 *                    MongoDB Atlas databases
 * 
 * River
 * 
 */

//import frameworks, modules,  libraries, and external data
    const express = require('express');
    const app = express();
    require("./config/db");
    const Clothing = require("./models/Clothing");

//application level middleware
    app.use(express.json());
    app.use(express.static("public"));
    app.use(express.urlencoded({ extended: true }));

    //const theIndex = require('./routes/index');
    const clothingList = require('./routes/clothingList');
    const addClothingItem = require('./routes/addClothingItem');
    const editClothingItem = require('./routes/editClothingItem');
    const deleteClothingItem = require('./routes/deleteClothingItem');

//server settings
    const PORT = 3000;
    app.set("view engine", "ejs");
    app.set("views", "./views");

//mount each of the routing files, associating it with its starter path
    //app.use('/index', theIndex);
    app.use('/clothingList', clothingList);
    app.use('/addClothingItem', addClothingItem);
    app.use('/editClothingItem', editClothingItem);
    app.use('/deleteClothingItem', deleteClothingItem);

//display server homepage route

app.get("/", async (req, res) => {
   //Query the clothing collection
   //const myClothing = await Clothing.find();
   //associate the index.ejs view with this route
   res.render("index", { title: "Clothing List",
                            appName: "About This Application:", 
                              msg: "Clothing Saved so Far:" });
});
    
//start the server
    app.listen(PORT, () => {
        console.log("server started");
    });