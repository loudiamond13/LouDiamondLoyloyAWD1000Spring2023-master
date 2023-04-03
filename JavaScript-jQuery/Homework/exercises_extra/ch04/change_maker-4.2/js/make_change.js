

"use strict";

const $ = selector => document.querySelector(selector);



//declaring and initializing const and variables
const MAX_AMT = 99; //max amount that is acceptable
const MIN_AMT = 0; //min amount that is acceptable


//initialzing variable 
let quarters  = 0;
let dimes     = 0;
let nickels   = 0;
let pennies   = 0;


//perform the program
const performCentsCalculation = () => {
  let validInputs = true;

  //taking the input value
  let cents = parseInt($("#cents").value)

  //check the input if it is valid
  validInputs = processEntry(cents)

  if (validInputs) {
    makeChange(cents)
    return
  }
}


//validating the input function
const processEntry = (cents) => {
  //cents = parseInt($("#cents").value) 

  /* if input is less than/equal to 0, or more than 99, input is not valid*/
  if ((isNaN(cents)) || (cents <= MIN_AMT) || (cents > MAX_AMT)) {

    alert(`PLEASE ENTER A VALID AMOUNT!  (${MIN_AMT} -  ${MAX_AMT})`)

  } else {
    return true
  }

}


// input calculation function with cents passed on
const makeChange = (cents) => {
  // initializing change values
  const quarterVALUE  = 25 // initializing		
  const dimeVALUE     = 10
  const nickelVALUE   = 5
  const penniesVALUE  = 1


  let remainder       = 0 // modulo remainder, it hold the remaining value
  
  // calculate the coint per value of each coin

   //calculate if how many quarters could take part from input value
   //25 
  quarters      = parseInt( cents / quarterVALUE )   
  remainder     = parseInt( cents % quarterVALUE )    //takes the remainder

  //calculate if how many dimes could take part from input value
  //10
  dimes         = parseInt( remainder / dimeVALUE )     
  remainder     = parseInt( remainder % dimeVALUE )

  //calculate if how many nickels could take part from input value
  //5
  nickels         = parseInt( remainder / nickelVALUE )   
  remainder       = parseInt( remainder % nickelVALUE )


  //calculate if how many nickels could take part from input value
  //1
  pennies         = parseInt( remainder / penniesVALUE )   
 // remainder       = parseInt( remainder % penniesVALUE )

  // show the result/count per coin
  $("#quarters").value  = quarters	
  $("#dimes").value     = dimes	
  $("#nickels").value   = nickels
  $("#pennies").value   = pennies
}






//when loaded, perform the following
document.addEventListener("DOMContentLoaded", () => {

  // event handlers
  $("#calculate").addEventListener("click", performCentsCalculation)


})
