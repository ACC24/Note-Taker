var db = require("../db/db.json");
var fs = require("fs");

module.exports = function(app) {
  
  app.get("/api/notes", function(req, res) {
    res.json(db);
  });

  app.post("/api/notes", function(req, res) {
    const newNote = req.body;
    db.push(newNote);
    res.json(newNote);
  });

  app.delete("/api/notes/:id", function(req, res) {
    const noteID = req.params.id;
    console.log(noteID);

    for (let i = 0; i < db.length; i++) {
      if (noteID === db[i].title) {
        return res.json(db[i]);
      //   res.readFileSync(path.join(__dirname, "../db/db.json"));
      
      // }
    }
    return res.json(false);
  });
    
};
