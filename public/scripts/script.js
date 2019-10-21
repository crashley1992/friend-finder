// Using the jquery Chosen
const config = {
    ".chosen-select": {},
    ".chosen-select-deselect": {
      allow_single_deselect: true
    },
    ".chosen-select-no-single": {
      disable_search_threshold: 10
    },
    ".chosen-select-no-results": {
      no_results_text: "No results"
    },
    ".chosen-select-width": {
      width: "95%"
    }
  };
  for (let selector in config) {
    $(selector).chosen(config[selector]);
  }
  // takes for imput
  $("#submit").on("click", function (event) {
    // Prevents page from reloading
    event.preventDefault();
    //validates form so all info has to be input first
    function validateForm() {
      let isValid = true;
      $(".form-control").each(function () {
        if ($(this).val() === "") {
          isValid = false;
        }
      });
      $(".chosen-select").each(function () {
        if ($(this).val() === "") {
          isValid = false;
        }
      });
      return isValid;
    }
    //if statement once form is fully filled out
    if (validateForm()) {
      // object creation for character
      let userInput = {
        name: $("#name").val(),
        photo: $("#photo").val(),
        scores: [
          $("#q1").val(),
          $("#q2").val(),
          $("#q3").val(),
          $("#q4").val(),
          $("#q5").val(),
          $("#q6").val(),
          $("#q7").val(),
          $("#q8").val(),
          $("#q9").val(),
          $("#q10").val()
        ]
      };
      // Post for friends API
      //this line is addig a api/infront of /data
      $.post("/data/friends", userInput, function (data) {
          //takes best matched photo and displays it
        $("#match-name").text(data.name);
        $("#match-img").attr("src", data.photo);
        // display for best match
        $("#results-modal").modal("toggle");
      });
    } else {
      alert("Please fill out all fields before submitting!");
    }
  });