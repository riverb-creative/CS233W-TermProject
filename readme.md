# CS 233W - Term Project
## Author: River
### Date: 12/09/2025

**Description:** CS 233W Term Project | 

Dependencies: 
>    - express.js
>    - sanitize-html
>    - ejs
>    - express-validator
>    - dotenv
>    - mongoose

How To Install Dependencies:
>    - npm install express
>    - npm install sanitize-html
>    - npm install ejs
>    - npm install express-validator
>    - npm install dotenv
>    - npm install mongoose

> [!IMPORTANT]
> Instructions to run server with URLs to test routes:
> 1. Create clone of TermProject repository from GitHub
> 2. Initialize node.js with _npm init_
> 3. Install dependencies in node_modules folder with _npm install_
> 4. Install Express with _npm install express_
> 5. Install sanitize html with _npm install sanitize-html_
> 6. Install ejs with _npm install ejs_
> 7. Install ejs with _npm install express-validator_
> 8. Install dotenv with _npm install dotenv_
> 9. Install mongoose with _npm install mongoose_
> 10. To run the server and test it type _run node server.js_ or _npm start_
> 11. Open your browser and type _http://localhost:3000_ into the URL to get to the root route
> 12. Click _View Clothing List_ to view the full clothing list 
> 13. Once done viewing any of the pages you can click the 'the Clothing list' logo to go back to the homepage
> 14. Click _Add Clothing Item_ to add a clothing item to the clothing list
> 15. Fill out the form to add item, _the category and name field are required if they are not entered you will recieve an error to fill out the form again_. Once the form is submitted you will be redirected to the clothing list table to view the newly added item
> 17. From here you may edit a clothing item by clicking the _Edit Clothing Item_ this will take you to a form that is similar to the adding a clothing item, _again the category and name field are required to process your edit_. Once the form is submitted you will be redirected to the clothing list table to view the edited item.
> 18. You can also delete an item by clicking the _Delete Clothing Item_. After clicking to delete an item you will be redirected to the clothing list table to see that the item you deleted is not on the list anymore. _If this is clicked the item will be deleted from the clothing list table and you will have to re-add it so be careful!_

> [!NOTE]
> The fields that have specific validation requirements:
   > 1. One of the categories must be selected
   > 2. Name of the item is required, ex: t-shirt, shorts, jeans

> [!IMPORTANT]
> example of adding/editing an item that will work:
   > - for Category select _Tops_
   > - for the Name enter _t-shirt_
   > - Click the _Submit_ button

> [!IMPORTANT]
> example of adding/editing an item that will display error messages:
   > - for Category select _Tops_
   > - for the Name leave empty
   > - Click the _Submit_ button
   > - Click _Please Try Again_ link to be taken back to the form to fix the errors

> [!IMPORTANT]
> example of how to find the quantities between 1 and 100:
   > - Go to _localhost:3000/clothingList/qty?min=theQtyYouWant_
   > - - EXAMPLE: _http://localhost:3000/clothingList/qty/7_
   > - This will take you to find all items that have the quantity of 7

> [!IMPORTANT]
> example of how to find the items with the category of _tops_:
   > - Go to _localhost:3000/clothingList/category?category=tops_
   > - This will take you to find all items that have the category of _tops_

   > [!IMPORTANT]
> to connect to mongodb atlas to access collection:
   > - create .env file to store the MONGO_URI from your database changing the username and password. Also add the collections name
   > - MONGO SCHEMA USED:
   > - category: {type: String, enum: ["tops", "bottoms", "full outfit", "underwear", "footwear", "accessories"], required: true},
   > - name: {type: String},
   > - brand: {type: String},
   > - size: {type: String},
   > - material: {type: String},
   > - qty: {type: Number}