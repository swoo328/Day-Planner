$(document).ready(function () {
    //display time function and keep it running every second
    function writeTime() {
      $(".current-time").text(moment().format("MMMM Do YYYY, h:mm:ss a"));
      setInterval(writeTime, 1000);
    }
    writeTime();
});