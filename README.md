# Day-Planner
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