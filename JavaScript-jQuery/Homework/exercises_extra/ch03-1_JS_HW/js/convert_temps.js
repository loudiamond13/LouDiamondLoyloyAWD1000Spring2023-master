"use strict";

// declaring and initializing  constants / variables
const LOWESTfahr = -100; // LOWEST FAHRENHEIT THAT CAN BE ENTERED/CONVERTED
const HIGHESTfahr= 212; //HIGHEST FAHRENHEIT THAT CAN BE ENTERED/CONVERTED
const EXIT = 999; // EXIT CODE


let fahrenheit = [0]; // ARRAY FOR FAHRENHEIT
let celcius = [0]; // ARRAY LIST FOR CELCIUS
let temp = 0; // TEMPORARY HOLDER FOR USERS input
let i = 0;          // ITERATION  VAR
let j = 0;      // ITERATION VAR

// GETTING THE VALUE/FAHRENHEIT TO BE CONVERTED

do{
    temp = parseFloat(
        prompt('Please Enter The Fahrenheit Temperature To Be Converted\n(ENTER "999" TO EXIT): ', 999));        /*//asks the user for the fahrenheit value to be converted*/



         //EXIT CODE '999' (ENDS  THE PROGRAM AND PRINTS THE RESULTS WHEN "999" IS ENTERED)
    if(temp === EXIT)     
        {
            for ( j; j <= fahrenheit.length; j++ )
            {                  /*DISPAYS THE CONVERTED TEMPERATURE THAT ARE STORED IN THEIR ARRAY*/ 
            document.write(`<p>${fahrenheit[j].toFixed(1)} F = ${celcius[j].toFixed(1)} C</p>`);
            }


            break; // ends the program if input is === 999
        }


    /*// VALIDATES THE USER'S INPUT  AND ALERTS THE USER IF INPUT VALUE IS LESS THAN -100F OR OVER 212F*/
    else if ( temp < LOWESTfahr || temp > HIGHESTfahr) 
        {
        alert(
            'You Entered ' + temp + 
            '. \nEntry must range from ' 
            + LOWESTfahr + ' to +' + HIGHESTfahr + '.' );
        }

    // ALERTS THE USER THAT THE INPUT IS NOT A NUMBER
    else if (isNaN(temp))
    {
        alert(
            'You Entered a None Numeric\nEntry must range from ' 
        + LOWESTfahr + ' to +' + HIGHESTfahr + '.' );
    }


    /* IF THE USER'S INPUT IS VALID, IT WILL CONVERT FAHRENHEIT TO CELCIUS */ 
    else 
        {
        celcius[i] = ((temp - 32) * .5556);//CALCULATE //celcius = fahrenheit -  * .5556

        fahrenheit[i] = temp;  // STORES THE USER'S INPUT IN AN ARRAY
        i++;
        }


 
/* VALIDATE THE  USER'S INPUT */
//THIS WILL MAKE THE PROGRAM RUNNING UNTIL 999 IS ENTERED 
}while( isNaN(temp) || temp < LOWESTfahr || temp > HIGHESTfahr || temp != EXIT); 





