// The code in add.js handles what happens when the user clicks the "Add a book" button.
var db = require("../models");
// When user clicks add-btn
$("#orderBurger").on("click", function(event) {
    event.preventDefault();
  
    // Make a newBurger object
    var newBurger = {
      burger: $("#burger").val().trim(),

    };
  
    // Send an AJAX POST-request with jQuery
    $.post("/api/new", newBurger)
      // On success, run the following code
      .then(function(data) {
        // Log the data we found
        console.log(data);
      });
  
    // Empty each input box by replacing the value with an empty string
    $("#burger").val("");

  
  });
  