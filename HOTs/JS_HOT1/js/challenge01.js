// This is the JavaScript file of challenge 01 of JavaScript HOT1.


// Declaration of variables

let movieList = ["Joker", "Transformers", "Avatar"]; // Primary array for the movie list with existing items. 

let newMovieName = ""; // a storage variable for the new movie name.

////////////////////////////////////////////////////////////////////////
//Asks the user for a title of his/her favorite Movie.
newMovieName = prompt("What is your favorite movie?");

//This while loop Validates the input
while(newMovieName.trim() == "")
{
    newMovieName = prompt("What is your favorite movie?");

}

movieList[movieList.length++] = newMovieName; // adds the valid user's input into the array


//Displays/prints the items of the  array (movieList).
for (let i = 0; i < movieList.length; i++)
{

    document.write(movieList[i] + "<br><br>");
    //document.write(movieList[i]+ "<br> <br>");
}



