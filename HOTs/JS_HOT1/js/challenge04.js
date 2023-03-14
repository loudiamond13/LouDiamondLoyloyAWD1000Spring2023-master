// This is the JavaScript file of challenge 04 of JavaScript HOT1.

// declaring the constants and initializing

let MAXNUM = 100; //max number allowed/ can be use


// declaring variable
let oddnum = [];    //array for odd numbers
let minNum = 1;     // lowest, MIN number allowed

while (minNum <= MAXNUM) // while loop to increment up to 100
{
    
    if(minNum % 2 == 1)     //modulo formula to strain odd numbers
    {
        oddnum += minNum + " ";
    }


    minNum++;
    
}



//display/print
alert(oddnum);
