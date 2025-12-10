/**
 * sanitize.js
 * 
 * middleware that executes a for in loop to loop over request.params
 * and imports HTML Sanitizer library to not allow <script> tags
 * 
 * Author: River
 * Date:   10/24/2025
 */

// import HTML Sanitizer library
    const sanitizeHtml = require('sanitize-html');
/**
 * loops over request.body from lists.js and uses sanitizeHtml to remove <script> tags
 * @param {*} request 
 * @param {*} response 
 * @param {*} next 
 */
const cleanData = (request, response, next) => {
    const params = request.body;
    //console.log("cleanData");
    if(params) {
        for (const key in params) {
            const cleanHtml = sanitizeHtml(params[key]);
            //console.log(cleanHtml);
            params[key] = cleanHtml;
        }
    } 
    
    next();
}


module.exports = cleanData;