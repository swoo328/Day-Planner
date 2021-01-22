# Day-Planner
Create a simple calendar application that allows a user to save events for each hour of the day by modifying starter code. This app will run in the browser and feature dynamically updated HTML and CSS powered by jQuery.

You'll need to use a library like [Moment.js](https://momentjs.com/) to work with dates and times. `Moment.js` has historically been the most popular date/time library but is no longer supported by its developers. However, you can still use it for this project, or you can look into one of the following alternatives:

  * [Luxon](https://moment.github.io/luxon/)

  * [Day.js](https://day.js.org/)

  * [date-fns](https://date-fns.org/)

  * [js-Joda](https://js-joda.github.io/js-joda/)

Whichever library you choose, be sure to read the documentation carefully!

# Instructor's Hints

## Date Object API

I highly recommend that you guys use the date object as it is relatively easy
to use and will be on more interviews than MomentJS will be. It is mainly
because it is part of the native JS engine functionality.

```
var mons = ["Jan", "Feb", "Mar"];
mons[(new Date()).getMonth()]

"Jan"

var days = ["Sunday", "Monday", "Tuesday"];
days[(new Date()).getDay()]

"Tuesday"

if(i === 12){
    chosenTag.css(["background-color", "red"]);
    chosenTag.addClass("red-class");
}
if((new Date()).getHours() === i){ // uses military time 0-23 for hours
    chosenTag.addClass("red-class");
}
```

## List of things needed

* jQuery
* Momentjs is allowed but not required
* Date object usage is preferred
* css classes/rules will need to be applied


## User Story

```
AS AN employee with a busy schedule
I WANT to add important events to a daily planner
SO THAT I can manage my time effectively
```


## Acceptance Criteria

```
GIVEN I am using a daily planner to create a schedule
WHEN I open the planner
THEN the current day is displayed at the top of the calendar
WHEN I scroll down
THEN I am presented with time blocks for standard business hours
WHEN I view the time blocks for that day
THEN each time block is color-coded to indicate whether it is in the past, present, or future
WHEN I click into a time block
THEN I can enter an event
WHEN I click the save button for that time block
THEN the text for that event is saved in local storage
WHEN I refresh the page
THEN the saved events persist
```