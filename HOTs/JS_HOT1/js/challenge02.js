// This is the JavaScript file of challenge 02 of JavaScript HOT1.


//Decleration of Constants.

const LEGAL_AGE     = 21;   // legal age 
const MIN_AGE       = 1;      // minimum age that can be input
const MAX_AGE       = 125;    // maximum age that can be input
const AGE_OOR_MSG   = "Age Out Of Range!"; // a message if input int is out of range
const WELCOME_MSG   = "Welcome to the venue!"; // welcome message

const ILLEGAL_MSG     = "You're Not Old Enough!";   // illegal message 

//Decleration of variable/s
let age = 0;

//Asks the user's age.

age = prompt("Please Enter Your Age!");

//This while loop Verifies the age
while(isNaN(age))
{  
    age = prompt("Please Enter Your Age!");
}


// Checking the age if it is legal
if(age >= LEGAL_AGE && age <= MAX_AGE)
{
    alert(WELCOME_MSG);
}

//Checking the under ages 
if(age < LEGAL_AGE && age >= MIN_AGE)
{
    alert(ILLEGAL_MSG);
}


//checking the out of range ages 
if(age > MAX_AGE || MIN_AGE > age ) 
{
    alert(AGE_OOR_MSG);
}

