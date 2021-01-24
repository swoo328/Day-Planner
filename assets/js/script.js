$(document).ready(function () {
    //display time function using the moment api
    function writeTime() {
      $("#currentDay").text(moment().format("MMMM Do YYYY, h:mm:ss a"));
      setInterval(writeTime, 1000);
    }
    writeTime();

    $(".btn").click(function () {
        //local storage
        //testing to see if the button is working
        console.log(this);
        //holds the information for the time
        var key = $(this).parent().attr("id");
        //holds the information for textarea
        var value = $(this).siblings("textarea").val();
        console.log(key);
        console.log(value); 
        //stores the key and value information in the local storage
        localStorage.setItem(key, value);

    })
});
//displays the values from the local storage
var hour = ["hour9", "hour10", "hour11", "hour12", "hour13", "hour14", "hour15", "hour16", "hour17"]
for(var i = 0; i <= hour.length; i++){
    console.log(hour[i]);
    $(`${hour[i]} .description`).val(localStorage.getItem(hour[i]));
}


//