"use strict";


// declaring and initializing variables and const

const MAXN = 100;           // max number that is acceptable
const MINNUM = 1;           //minimum number

let numArr = [];        //number array storage
let i = 0;              // iteration var
let total = 0;          // total sum storage
let userOrigInput = 0;  // user original input storage
let user_input = 0;     // user input 

let das = "";           //prompt(`Do another Sum?`)
let firstLetter = '';   
let runAgain = true;

while(runAgain)
{
    // asks the user input
    user_input = parseInt(prompt(`Enter any top number to sum \nfrom 1 through 100`));

    do{
        // asks the user to input a valid input 
        if((user_input < MINNUM) || (user_input > MAXN) || (isNaN(user_input)))
        {
            user_input = parseInt(prompt(`Please Enter A Number Between ${MINNUM} and ${MAXN}`))
        }

        // if the users input is below the minimum number allowed and over the minimum allower, keep 
        //asking
    }while((user_input < MINNUM) || (user_input > MAXN) || isNaN(user_input));


    userOrigInput = user_input;     //keep the user original input value
    user_input = (user_input - 1);  /* subtract 1 from the user input since the itaration of 
                                    the array starts at 0*/

    for (i; i <= user_input; i++)
    {
        numArr[i] = i + 1; /* store and itarate value from 1 to the desire top number of 
                                    the users input*/ 

        total += numArr[i] // adds all the value in the array
    
    }
          
           
    document.write(`<p>The sum of the numbers from 1 through ${userOrigInput} is ${total}</p>`);
   

    das         = prompt(`Do another Sum?`, 'Y');
    das         = das.toLocaleUpperCase();
    firstLetter = das.charAt(0);

    if (firstLetter != "Y")
    {

        runAgain = false;
    }

}