var db = require("../db/db.json");

module.exports = function(app) {
  
  app.get("/api/notes", function(req, res) {
    res.json(db);
  });

  app.post("/api/notes", function(req, res) {
   
    if (.length < 5) {
      db.push(req.body);
      res.json(true);
    }
    else {
      db.push(req.body);
      res.json(false);
    }
  });

  app.post("/api/notes/:id", function(req, res) {
    db.length = 0;
    res.json({ ok: true });
  });
};
