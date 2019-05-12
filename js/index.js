$(function() {
    console.log( "ready!" );
    // document ready function is working //

    // declaring my variable of city, which will change when the user inputs a new value //
    let city;

    // event listener: when the submit button is clicked, run the changeBackground function //

    $("#submit-btn").click(changeBackground);


    // defining the changeBackground function //

    function changeBackground () {
      console.log("clicked");

      // value in city-type input becomes the city variable //
      let city = $("#city-type").val();
      console.log(city);


      // if the city is equal to any of these, then chance the css class of body to
      if (city == "New York City" || "NYC")  {
        $("body").attr("class", "nyc");
      } else if (city == "San Francisco" || "SF" || "Bay Area") {
        $("body").attr("class", "sf");
      } else if (city == "Los Angeles" || "LA" || "LAX") {
        $("body").attr("class", "la");
      } else if (city == "Austin" || "ATX") {
        $("body").attr("class", "austin");
      } else if (city == "Sydney" || "SYD") {
        $("body").attr("class", "sydney");
      } else {
      }


    }

});
