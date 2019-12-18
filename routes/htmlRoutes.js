const path = require("path");
//const router = require("express").Router();
// exporting html paths
module.exports = function(app) {
    
    
    app.get("/notes", function(req,res) {
        res.sendFile(path.join(__dirname, "../public/notes.html"));
    });

   // set index.html as default page
   
   app.get("*", function(req,res) {
       res.sendFile(path.join(__dirname, "../public/index.html"));
     });

};