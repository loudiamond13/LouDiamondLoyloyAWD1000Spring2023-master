"use strict";
const $ = selector => document.querySelector(selector);

const padSingleDigit = num => num.toString().padStart(2, "0");

const displayCurrentTime = () => {
    //declaring variables and constants\

    const today  = new Date() 
    let hoursNow = today.getHours()
    let  ampm    = "AM"

    if (hoursNow > 12)
    {
        hoursNow -= 12
        ampm      = "PM"

    }else{
        
        switch( hoursNow )
        {
            case 12:
                ampm = "PM"
                break
            
            case 0:
                ampm     = "AM"
                hoursNow = 12

        }
    }

    $("#ampm").textContent      = ampm
    $("#hours").textContent     = hoursNow
    $("#minutes").textContent   = padSingleDigit(today.getMinutes())
    $("#seconds").textContent   = padSingleDigit(today.getSeconds())
};


document.addEventListener("DOMContentLoaded", () => {
	// set initial clock display and then set interval timer to display
    // new time every second. Don't store timer object because it 
    // won't be needed - clock will just run.

    displayCurrentTime()
    setInterval(displayCurrentTime, 1000)
});