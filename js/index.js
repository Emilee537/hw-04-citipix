$(function() {

  let city = $("#cityType").val();
  let backgroundImage;

  $("#submitBtn").click(displayPic);

  function displayPic() {
    if (city === "New York City" || "NYC" || "New York") {
      $("body").attr('class', 'nyc');

    } else if (city === "San Francisco" || "SF" || "Bay Area") {

  };



});
