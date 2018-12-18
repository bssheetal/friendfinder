var express = require("express");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;


// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require("./app/routing/apiroute")(app);
require("./app/routing/htmlroute")(app);

app.listen(PORT, function(){
    console.log(`App is on on ${PORT}`);
});