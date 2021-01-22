$(document).ready(function () {
    //display time function and keep it running every second
    function writeTime() {
      $(".current-time").text(moment().format("MMMM Do YYYY, h:mm:ss a"));
      setInterval(writeTime, 1000);
    }
    writeTime();

      //current date and time variables
  var m = moment();
  var currentTime = m.format("MMMM Do YYYY, h:mm:ss a");
  var currentDate = m.format("MMM Do YYYY");
  var currentHour = moment().hours();
  console.log("current hour: ", currentHour);
  console.log(currentTime);
  
});