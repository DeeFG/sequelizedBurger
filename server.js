var express = require("express");
var path=require("path");
var db = require("./models");
var PORT = process.env.PORT || 8080;
var exphbs = require("express-handlebars");
var app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// Parse application body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var routes = require("./controllers/api-routes.js");
app.use(routes);
app.engine('hbs', expressHandlebars({
  extname: 'hbs', 
  defaultLayout: 'main', 
  layoutsDir: './views/backend'
}));

db.sequelize.sync({force:true}).then(function () {
  app.listen(PORT, function () {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
  });
})
