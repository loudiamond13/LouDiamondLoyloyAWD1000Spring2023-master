// This is the JavaScript file of challenge 05 of JavaScript HOT1.

//declaring constants and initializing

const MAXNUM = 100;

//declaring variables and initializing
let minNum = 1;
let array = []; // array for the needed numbers


//for loops that increment by 15
for (minNum; minNum <= MAXNUM; minNum++)
{
    if(minNum % 15 == 0)            // modulo 
    {
        array += minNum + " ";  
    }

   
}

//printing / display to output
alert(array);