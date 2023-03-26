


const $ = selector => document.querySelector(selector)


document.addEventListener("DOMContentLoaded", () => {
    
    //  Declare and initialize program constants/variables
    const MAXROUND = 5; // Max round of the game (best of five)
    const YW = 'YOU WIN!'; 
    const YL = 'YOU LOSE!';
  
   
   
    const GC = 'Good Choice!';
    const INVALIDchoice= "Your Choice Is Not Valid!";

    let rpsChoices = [ "Rock", "Scissor", "Paper" ] ;
    let clientChoice = 0; // client choice storege

    let clientScore= 0;            //array storage for the guests score 
    let computerScore = [0];        //array storage for the computer score 
    let draw= 0;            //draw score variable
    
    let roundNum = 0;    
    let randomN = 0;                // random number storage




    /*
    function doSomething(id) {
        var value = document.getElementById(id).value;
        dola ata bb.log(value);
    
    }*/
// add evt listener to the button
    $("#myBtn").addEventListener("click", evt => {
        playNow()
      })

    
    function playNow()
    {
        if (randomN === 0) 
        {
        //  Generate a random number between 1 - 3
        randomN = Math.floor(Math.random() * 3);
        }
    
     // get the clients choice 
    clientChoice = $("#clientChoiceNum").value;

   // clientChoicestr = rpsChoices[randomN]

    $('#computerGuess').value = rpsChoices[randomN];// show the computers choice
   // console.log(`this` + randomN)
    //$('#computerGuess').value = rpsChoices[randomN];
    
    // show the clients choice 
   $('#yourChoice').value = rpsChoices[clientChoice];
    


    /* if input is not between 0-2. notify the client that choice is not valid*/
    if (clientChoice < 0 || clientChoice > 2 || clientChoice == '')
    {
        $('#msg').value = INVALIDchoice;
        $('#computerGuess').value = '';
        $('#yourChoice').value = ''
        $('#roundWinner').value = ''
        $('#roundN').value = ''
        $('#roundN').value = ''
        $('#yourChoice').value = ''
        $('#computerScore').value = ''
        $('#clientScore').value = ''
        
        randomN = 0
      return;

    }
    playRPS(); // run the game criteria
}

function playRPS(){

    
// if the computer and client picked the same it will be draw
 if (rpsChoices[clientChoice] === rpsChoices[randomN] )
    {

        //clear the result screen and reset the randomN to zero to generate a new random Num
        randomN = 0
        $('#yourChoice').value =  rpsChoices[clientChoice];
        $('#msg').value = 'DRAW';
        roundNum++;
        $("#roundN").value = roundNum;
        
        $("#clientScore").value = clientScore;
        $('#computerScore').value = computerScore;
        $('#roundWinner').value = '';
        draw++
      
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
    }
  // if round number is 5 the game will be over
    if(roundNum === MAXROUND)
    {
        //if client score is less than the computer score
        //computer wins
        if(clientScore < computerScore)
        {
                $('#msg').value = "GAME OVER!";
            $('#computerGuess').value = '';
            $('#yourChoice').value = ''
            $('#roundWinner').value = ''
            $('#roundN').value = ''
            $('#roundN').value = ''
            $('#yourChoice').value = ''
            $('#computerScore').value = ''
            $('#clientScore').value = ''
            roundNum = 0 // reset the round number 
            randomN = 0 // reset the random numbre / computer pick
            document.getElementById('result').style.color = "black";
            document.getElementById('result').style.backgroundColor = "red";
              // edit some text inside the html to show who is the winner and show the score
            document.getElementById('result').innerHTML = "YOU LOST! THE SCORE WAS " + computerScore + " - " + clientScore +" IN FAVOR OF OPPONENT!<br> WITH " +draw+ " DRAW."
        }
        // else if both score are tie, the game is tie/draw
        else if(clientScore == clientScore)
        {
            $('#msg').value = "GAME OVER!";
            $('#computerGuess').value = '';
            $('#yourChoice').value = ''
            $('#roundWinner').value = ''
            $('#roundN').value = ''
            $('#roundN').value = ''
            $('#yourChoice').value = ''
            $('#computerScore').value = ''
            $('#clientScore').value = ''
            roundNum = 0
            randomN = 0
           // document.getElementById('result').style.color = "black";
            document.getElementById('result').style.backgroundColor = "green";
              // edit some text inside the html to show who is the winner and show the score
            document.getElementById('result').innerHTML = "IT IS A TIE GAME! THE SCORE WAS " + computerScore + " - " + clientScore +" AND " +draw+ " DRAW. <br> YOU CAN GO AHEAD AND RESTART THE GAME."

        }

        //else the client win
        else
        {
            $('#msg').value = "GAME OVER!";
            $('#computerGuess').value = '';
            $('#yourChoice').value = ''
            $('#roundWinner').value = ''
            $('#roundN').value = ''
            $('#roundN').value = ''
            $('#yourChoice').value = ''
            $('#computerScore').value = ''
            $('#clientScore').value = ''
            
           // document.getElementById('result').style.color = "black";
            document.getElementById('result').style.backgroundColor = "green";
            // edit some text inside the html to show who is the winner and show the score
            document.getElementById('result').innerHTML = "CONGRATIOLATIONS! YOU WIN! <br> THE SCORE WAS " + computerScore + " - " + clientScore +" IN FAVOR OF YOU! WITH " +draw+ " DRAW."
      
        }
    
        clientScore = 0;
        computerScore = 0;
        draw = 0;
       

       
    }

 
}



    /*clientChoicestr = rpsChoices[clientChoice];
alert($('#yourChoice').value)
    $('#yourChoice').value = clientChoicestr;

    $('#computerGuess').value = rpsChoices[randomN];  

    if (clientChoice === "")
    {
     $("#msg").value = MSG;
     return;
    }
*/


// new game button 
$("#newGame").addEventListener("click", evt => {
    newGame()
})


// if now game is clicked reset all and notify the client that new game has been started
  function newGame ()
  {
    document.getElementById('result').innerHTML = "NEW GAME STARTED! ";


    $('#msg').value = "New Game!";
    $('#computerGuess').value = '';
    $('#yourChoice').value = ''
    $('#roundWinner').value = ''
    $('#roundN').value = ''
   
    $('#yourChoice').value = ''
    $('#computerScore').value = computerScore
    $('#clientScore').value =  clientScore
    clientScore = 0;
    computerScore = 0;
    draw = 0;
    

    
  }

})

