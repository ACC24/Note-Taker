const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));


require("./routes/apiRoutes.js")(app);
require("./routes/htmlRoutes.js")(app);

app.listen(PORT, function() {
  console.log("Server listening on: http://localhost:" + PORT);

});
