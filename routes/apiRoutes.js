const db = require("../db/db.json");
const fs = require("fs");
const { v4: uuidv4 } = require('uuid');

module.exports = function (app) {

  app.get("/api/notes", function (req, res) {
    res.json(db);
  });

  app.post("/api/notes", function (req, res) {
    fs.readFileSync("./db/db.json", db);
    let id = { id: uuidv4() };
    const newNote = Object.assign(req.body, id);
    db.push(newNote);
    fs.writeFileSync("./db/db.json", db, "utf-8");
    res.json(db);
  });

  app.delete("/api/notes/:id", function (req, res) {
    const noteID = req.params.id;
    for (let i = 0; i < db.length; i++) {
      let obj = db[i];
      if (noteID.indexOf(obj.id) !== -1) {
        db.splice(i, 1);
        i--;
      }
    }
    return res.json(db);
  });
};

  // fs.readFileSync("./db/db.json", db);
  // fs.writeFileSync("./db/db.json", db, "utf-8");