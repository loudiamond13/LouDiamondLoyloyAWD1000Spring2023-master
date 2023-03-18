"use strict";

// declare constants / variables
let fahrenheit = 0;
let celcius = 0;

// GETTING THE VALUE/FAHRENHEIT TO BE CONVERTED
do{

    fahrenheit = parseFloat(
        prompt("Please Enter The Fahrenheit Temperature To Be Converted: ", 0));
    
}while( isNaN(fahrenheit));

//CONVERTING FAHRENHEIT TO CELCIUS
/*
To convert temperatures in degrees Fahrenheit to Celsius, subtract 32 and multiply by .5556 (or 5/9)
*/

celcius = ((fahrenheit - 32) * .5556);



document.write(`<p>${fahrenheit.toFixed(1)} F = ${celcius.toFixed(1)} C</p>`);
