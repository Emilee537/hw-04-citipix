$(function() {
    console.log( "ready!" );

    let city;

    $("#submit-btn").click(changeBackground);


    function changeBackground () {
      console.log("clicked");
      let city = $("#city-type").val();
      console.log(city);
    }

});
