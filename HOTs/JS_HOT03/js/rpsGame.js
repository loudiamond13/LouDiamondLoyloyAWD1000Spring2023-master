

"use strict";
const $ = selector => document.querySelector(selector)


document.addEventListener("DOMContentLoaded", () => {
    
  //  Declare and initialize program constants/variables
  const MAXROUND = 5;             // Max round of the game (best of five)
  const YW = 'YOU WIN!'; 
  const YL = 'YOU LOSE!';

  
  
  const GC = 'Good Choice!';
  const INVALIDchoice= "Your Choice Is Not Valid!";

  let rpsChoices = [ "Rock", "Scissor", "Paper" ] ; // the choices array/storage
  let clientChoice = 0;           // client choice storege

  let clientScore= 0;             //array storage for the guests score 
  let computerScore = [0];        //array storage for the computer score 
  let draw= 0;                    //draw score variable
  
  let roundNum = 0;               // round number 
  let randomN = 0;                // random number storage


  
let rockwins =23
  /*
  function doSomething(id) {
      var value = document.getElementById(id).value;
      dola ata bb.log(value);
  
  }*/
  // add evt listener to the button
  $("#myBtn").addEventListener("click", evt => {
      playNow()
    })

  
  const playNow = () =>
  {
    if (randomN === 0) 
    {
    //  Generate a random number between 1 - 2
    randomN = Math.floor(Math.random() * 3);
    }

    // get the clients choice 
    // if client picked rock, store the clients choice to clientChoice Variable
    if ( $('#clientChoiceNum1').checked )
    {
      clientChoice = $("#clientChoiceNum1").value;
    }

    // if client picked scissor, store the clients choice to clientChoice Variable
    else if ( $('#clientChoiceNum2').checked )
    {
      clientChoice = $("#clientChoiceNum2").value;
    }

    // if client picked paper, store the clients choice to clientChoice Variable
    else if ( $('#clientChoiceNum3').checked )
    {
      clientChoice = $("#clientChoiceNum3").value;
    }
  

  $('#computerGuess').value = rpsChoices[randomN];// show the computers choice
   
    
    // show the clients choice 
  $('#yourChoice').value = rpsChoices[clientChoice];
    

    checkTheWinnerRPS(); // run the game
}

const checkTheWinnerRPS = () => {

    
// if the computer and client picked the same it will be draw
 if (rpsChoices[clientChoice] === rpsChoices[randomN] )
    {

        //clear the result screen and reset the randomN to zero to generate a new random Num
        randomN = 0
        $('#yourChoice').value =  rpsChoices[clientChoice];
  
        roundNum++;
        $("#roundN").value = roundNum;
        
        $("#clientScore").value = clientScore;
        $('#computerScore').value = computerScore;
        $('#roundWinner').value = 'DRAW';
        draw++
      
        //winnerImage();
    } 
    //if client pick paper and computer picked rock, client win
    else if ((clientChoice == 2) && (randomN == 0))
    {          
        clientScore++
        roundNum++ 
        $('#msg').value = GC;
        $('#roundWinner').value = YW;
        
        $("#roundN").value = roundNum;
        $("#clientScore").value = clientScore;
        $('#computerScore').value = computerScore;
        randomN = 0;

       // winnerImage();
    }
              //if client pick scissor and computer picked paper , client win

    else if ((clientChoice == 1 ) && (randomN == 2))
    {
        clientScore++
        roundNum++ 
        $('#msg').value = GC;
        $('#roundWinner').value = YW;
        randomN = 0
        $("#roundN").value = roundNum;
        $("#clientScore").value = clientScore;
        $('#computerScore').value = computerScore;
        
       // winnerImage();
    }

  //if client pick rock and computer picked scissor, client win
    else if ((clientChoice == 0 ) && (randomN == 1))
    {
        clientScore++
        roundNum++ 
        $('#msg').value = GC;
        $('#roundWinner').value = YW;
        randomN = 0
        $("#roundN").value = roundNum;
        $("#clientScore").value = clientScore;
        $('#computerScore').value = computerScore;
        
      
    }

// else the computer wins
    else 
    {
        computerScore++ //iterate computer score 
        roundNum++ 
        $('#msg').value = "Choose Wiser!";
        $('#roundWinner').value = YL;
        randomN = 0
        $("#roundN").value = roundNum;
        $("#clientScore").value = clientScore;
        $('#computerScore').value = computerScore;
      
       // winnerImage();
    }

  // if round number is 5 the game will be over
   

    winnerImages();
    setTimeout(clear5secs, 5000)

    if(roundNum === MAXROUND)
    {
      $("#winnerImage").textContent = ""
        roundFiveResult()
        //setTimeout(clearEverything, 5000)
    }

  
}

//round five result function
const roundFiveResult = () => 
{
        //if client score is less than the computer score
        //computer wins
        if(clientScore < computerScore)
        {
            $('#msg').value = "GAME OVER!";
           
            roundNum = 0 // reset the round number 
            randomN = 0 // reset the random numbre / computer pick
            document.getElementById('result').style.color = "black";
            document.getElementById('result').style.backgroundColor = "red";
              // edit some text inside the html to show who is the winner and show the score
            document.getElementById('result').innerHTML = "YOU LOST! THE SCORE WAS " + computerScore + " - " + clientScore +" IN FAVOR OF OPPONENT!<br> WITH " +draw+ " DRAW."

           
        }

        // else if both score are tie, the game is tie/draw
        else if(clientScore === computerScore)
        {
            $('#msg').value = "GAME OVER!";
           
            roundNum = 0
            randomN = 0
           
         
            document.getElementById('result').style.backgroundColor = "green";

            // edit some text inside the html to show who is the winner and show the score
            document.getElementById('result').innerHTML = "IT IS A TIE GAME! THE SCORE WAS " + computerScore + " - " + clientScore +" AND " +draw+ " DRAW. <br> YOU CAN GO AHEAD AND RESTART THE GAME."

         
        }

        //else the client win
        else
        {
            $('#msg').value = "GAME OVER!";
            
           // document.getElementById('result').style.color = "black";
            document.getElementById('result').style.backgroundColor = "green";
            // edit some text inside the html to show who is the winner and show the score
            document.getElementById('result').innerHTML = "CONGRATIOLATIONS! YOU WIN! <br> THE SCORE WAS " + computerScore + " - " + clientScore +" IN FAVOR OF YOU! WITH " +draw+ " DRAW."
      
          
        }
    
        clientScore = 0;
        computerScore = 0;
        draw = 0;
        
        document.getElementById("myBtn").disabled = true;

}

/////////////////////////////////////////////////////////////////////////////////
//display image based on who won
const winnerImages = () => 
{
  
  $("#winnerImage").textContent = "" // clear the content of winner image div

  let imagess = '';
  imagess = document.createElement("img")

  /////////////////////////////////////////////////////////////////
  // if rock wins
  if ( ($('#yourChoice').value === "Rock") && 
        ($('#computerGuess').value ===  "Scissor"))
    {
      
      imagess.setAttribute("src", "images/rock.jpeg")
      document.getElementById("winnerImage").innerHTML = "<h4>ROCK WINS!</h4>"
    }

 else if ( ($('#computerGuess').value ===  "Rock") && 
           ($('#yourChoice').value === "Scissor"))
  {
    document.getElementById("winnerImage").innerHTML = "<h4>ROCK WINS!</h4>"
    imagess.setAttribute("src", "images/rock.jpeg")
  }

/////////////////////////////////////////////////////////////////////
//Scissor wins
 else if ( ($('#computerGuess').value ===  "Paper") && 
            ($('#yourChoice').value === "Scissor"))
  {
      document.getElementById("winnerImage").innerHTML = "<h4>SCISSOR WINS!</h4>"
      imagess.setAttribute("src", "images/scissor.jpeg")
  }
else if ( ($('#computerGuess').value ===  "Scissor") && 
            ($('#yourChoice').value === "Paper"))
  {
      document.getElementById("winnerImage").innerHTML = "<h4>SCISSOR WINS!</h4>"
      imagess.setAttribute("src", "images/scissor.jpeg")
  }

////////////////////////////////////////////////////////////////////////
//Paper wins
   else if ( ($('#computerGuess').value ===  "Paper") && 
                ($('#yourChoice').value === "Rock"))
    {
      document.getElementById("winnerImage").innerHTML = "<h4>PAPER WINS!</h4>"
      imagess.setAttribute("src", "images/paper.jpeg")
    }
    else if ( ($('#computerGuess').value ===  "Rock") && 
               ($('#yourChoice').value === "Paper"))
    {
      document.getElementById("winnerImage").innerHTML = "<h4>PAPER WINS!</h4>"
      imagess.setAttribute("src", "images/paper.jpeg")
    }

///////////////////////////////////////////////////////////////
//else draw
    else {
      imagess.setAttribute("src", "images/draw.jpeg")
    }

    document.getElementById("winnerImage").appendChild(imagess) // show the image 
}
//////////////////////////////////////////////////////////


//////////////////////////////////////////////////////////////////////////////////////
  // new game button 
  $("#newGame").addEventListener("click", evt => {
      newGame()
  })

/////////////////////////////////////////
// if now game is clicked reset all and notify the client that new game has been started
  const newGame = () =>
  {
    document.getElementById('result').innerHTML = "NEW GAME STARTED! ";
    document.getElementById('result').style.backgroundColor = "";
    document.getElementById('result').style.color = "white";

    $('#msg').value = "NEW GAME !";
    $('#computerGuess').value = '';
    $('#yourChoice').value = ''
    $('#roundWinner').value = ''
    $('#roundN').value = ''
   
    $('#yourChoice').value = ''
    $('#computerScore').value = ''
    $('#clientScore').value =  ''
    clientScore = 0;
    computerScore = 0;
    draw = 0;
    roundNum = 0;
    
    $("#winnerImage").textContent = ""
    document.getElementById("myBtn").disabled = false;
    
  }

/////////////////////////////////////////////////////////////////////
  const clear5secs =()=>
  {
    $('#yourChoice').value = ''
    $('#computerGuess').value = '';
    $("#winnerImage").textContent = ""
  }





})







/*
  const clearEverything = () =>
  {
    document.getElementById('result').innerHTML = "Select Your Choice!";
    document.getElementById('result').style.backgroundColor = "";
    document.getElementById('result').style.color = "white";

    $('#msg').value = "";
    $('#computerGuess').value = '';
    $('#yourChoice').value = ''
    $('#roundWinner').value = ''
    $('#roundN').value = ''
   
    $('#yourChoice').value = ''
    $('#computerScore').value = ''
    $('#clientScore').value =  ''
    clientScore = 0;
    computerScore = 0;
    draw = 0;
    roundNum = 0;
    
    $("#winnerImage").textContent = ""
    document.getElementById("myBtn").disabled = false;
    
  }

*/


