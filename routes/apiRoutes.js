const note_data = require("../db/note_data");

// exporting html paths
module.exports = function(app) {
    
    
    app.get("/api/notes", function(req,res) {
        console.log("hello");
        res.json(note_data);
    });

    app.post("/api/notes", function(req,res) {
        note_data.push(req.body);
        res.json(true);
    })

    app.post("/api/clear", function(req,res) {
        note_data.length = 0;

        res.json({ ok:true});
    })

};