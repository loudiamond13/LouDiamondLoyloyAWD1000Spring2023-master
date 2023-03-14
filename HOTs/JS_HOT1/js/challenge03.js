// This is the JavaScript file of challenge 03 of JavaScript HOT1.

//Declaring Const

const SONG_ONE = "One is the loneliest number that you'll ever do"; // choice 1

const SONG_TWO = "Two can be as bad as one, It's the loneliest number since the number one";  // choice 2

const SONG_THREE = "There is no Three";  // choice 3

//declaring variable and initializing 
let run = true; 
let again ="";
let choice = 0;
//let choice = prompt("Please choose a number from 1 - 3:");



//checking the input if it is an int or valid
/*



*/


while(run)
{
    //asking the user's input
    
    choice = prompt("Please choose a number from 1 - 3:")

    //checking if the int entered is valid
    if(choice  > 3 || choice < 1)
    {
    alert("You didn't enter a valid number");
    choice = prompt("Please choose a number from 1 - 3:");
    }

    //checking the user's input if it is a word or a number
    while(isNaN(choice))
    {
    alert("Please enter a number, not a word/letter.");
    choice = prompt("Please choose a number from 1 - 3:");
    }

    //it shows what the users select
    if(choice == 1 )
    {
        alert(SONG_ONE); // choices 1
    }
    if(choice == 2 )
    {
        alert(SONG_TWO); //choices 2
    }
    if(choice == 3 )
    {
        alert(SONG_THREE); // choices 3
    }
    

 


   
    again = prompt("Would You like to run the program again? (Y/N)", "Y");
    again = again.toUpperCase();
    again = again.charAt(0);
    if (again !== "Y")
    {
        run = false;
        //choice = prompt("Please choose a number from 1 - 3:")
        
    }
 
    
   
}

   

