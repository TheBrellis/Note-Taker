const note_data = require("../db/note_data");
//const router = require("express").Router();
// exporting html paths
module.exports = function(app) {

    app.get("/api/notes/", function(req,res) {
        res.json(note_data);
    });
    
    app.post("/api/notes/", function(req,res) {
        note_data.push(req.body);
        res.json(true);
    })

    app.delete("/api/notes/", function(req,res) {
        note_data.length = 0;

        res.json({ok: true});
    })

};