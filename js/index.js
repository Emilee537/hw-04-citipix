$(function() {
    console.log( "ready!" );

    let city;

    $("#submit-btn").click(changeBackground);


    function changeBackground () {
      console.log("clicked");
      let city = $("#city-type").val();
      console.log(city);

      if (city === "new york city" || "new york" || "nyc") {
        $("body").attr('class', 'nyc');
      } else if (city === "San Francisco" || "SF" || "Bay Area") {
        $("body").attr('class', 'sf');
      } else if (city === "Los Angeles" || "LA" || "LAX") {
        $("body").attr('class', 'la');
      } else if (city === "Austin" || "ATX") {
        $("body").attr('class', 'austin');
      } else if (city === "Sydney" || "SYD") {
        $("body").attr('class', 'sydney');
      } else {

      }


    }

});
