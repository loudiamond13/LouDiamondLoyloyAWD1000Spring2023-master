

"use strict";
/*const $ = selector => document.querySelector(selector)*/

$(document).ready( () =>{

  //preload images
  //let scissorIMG = new Image()
  // = "images/scissor.jpeg"


  //  Declare and initialize program constants/variables
  const MAXROUND = 5;             // Max round of the game (best of five)
  const YW = 'YOU WIN!'; 
  const YL = 'YOU LOSE!';

  
  
  const GC = 'Good Choice!';
  const INVALIDchoice= "Your Choice Is Not Valid!";

// the choices array/storage
  const rpsChoices    = [ "Rock",            "Scissor",             "Paper" ]; 

  //image sources address
  const choicesIMGsrc = ["images/rock.jpeg", "images/scissor.jpeg", "images/paper.jpeg"]

  let clientChoice = 0;           // client choice storege

  let clientScore= 0;             //array storage for the guests score 
  let computerScore = [0];        //array storage for the computer score 
  let draw= 0;                    //draw score variable
  
  let roundNum = 0;               // round number 
  let randomN = 0;                // random number storage


  

  /*
  function doSomething(id) {
      var value = document.getElementById(id).value;
      dola ata bb.log(value);
  
  }*/
  // add evt listener to the button
  $("#myBtn").click( () => {
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
      clientChoice = $("#clientChoiceNum1").val();
    }

    // if client picked scissor, store the clients choice to clientChoice Variable
    else if ( $('#clientChoiceNum2').checked )
    {
      clientChoice = $("#clientChoiceNum2").val();
    }

    // if client picked paper, store the clients choice to clientChoice Variable
    else if ( $('#clientChoiceNum3').checked )
    {
      clientChoice = $("#clientChoiceNum3").val();
    }
  

  $('#computerGuess').val(rpsChoices[randomN])  // show the computers choice
   
    
    // show the clients choice 
  $('#yourChoice').val(rpsChoices[clientChoice]);
    

    checkTheWinnerRPS(); // run the game
}

const checkTheWinnerRPS = () => {

    
// if the computer and client picked the same it will be draw
 if (rpsChoices[clientChoice] === rpsChoices[randomN] )
    {

        //clear the result screen and reset the randomN to zero to generate a new random Num
        randomN = 0
        $('#yourChoice').val(rpsChoices[clientChoice])
  
        roundNum++;
        $("#roundN").val(roundNum)
        
        $("#clientScore").val(clientScore)
        $('#computerScore').val(computerScore)
        $('#roundWinner').val('DRAW')
        draw++
      
        //winnerImage();
    } 
    //if client pick paper and computer picked rock, client win
    else if ((clientChoice == 2) && (randomN == 0))
    {          
        clientScore++
        roundNum++ 
        $('#msg').val(GC)
        $('#roundWinner').val(YW)
        
        $("#roundN").val(roundNum)
        $("#clientScore").val(clientScore)
        $('#computerScore').val(computerScore)
        randomN = 0;

       // winnerImage();
    }
              //if client pick scissor and computer picked paper , client win

    else if ((clientChoice == 1 ) && (randomN == 2))
    {
        clientScore++
        roundNum++ 
        $('#msg').val(DC)
        $('#roundWinner').val(YW)
        randomN = 0
        $("#roundN").val(roundNum)
        $("#clientScore").val(clientScore)
        $('#computerScore').val(computerScore)
        
       // winnerImage();
    }

  //if client pick rock and computer picked scissor, client win
    else if ((clientChoice == 0 ) && (randomN == 1))
    {
        clientScore++
        roundNum++ 
        $('#msg').val( GC)
        $('#roundWinner').val(YW)
        randomN = 0
        $("#roundN").val(roundNum)
        $("#clientScore").val(clientScore)
        $('#computerScore').val(computerScore)
        
      
    }

// else the computer wins
    else 
    {    randomN = 0
        computerScore++ //iterate computer score 
        roundNum++ 
        $('#msg').val( "Choose Wiser!")
        $('#roundWinner').val(YL)
        
        $("#roundN").val(roundNum)
        $("#clientScore").val(clientScore)
        $('#computerScore').val(computerScore)
       // winnerImage();
    }

  // if round number is 5 the game will be over
   
    
    
    winnerImages();
    
    $("#imageNtext").fadeOut(3500, clear5secs)
    

    if(roundNum === MAXROUND)
    {
      $("#winnerImage").text("")
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
            $('#msg').val("GAME OVER!")
           
            roundNum = 0 // reset the round number 
            randomN = 0 // reset the random numbre / computer pick
            $('#result').css("color", "black")
            $('#result').css("background-color", "red");
              // edit some text inside the html to show who is the winner and show the score
            $('#result').text( "YOU LOST! THE SCORE WAS " + computerScore + " - " + clientScore +" IN FAVOR OF OPPONENT!<br> WITH " + draw + " DRAW.")

           
        }

        // else if both score are tie, the game is tie/draw
        else if(clientScore === computerScore)
        {
            $('#msg').val("GAME OVER!")
           
            roundNum = 0
            randomN = 0
           
         
            $('#result').css("background-color", "green");

            // edit some text inside the html to show who is the winner and show the score
            $('#result').text("IT IS A TIE GAME! THE SCORE WAS " + computerScore  
            + " - " + clientScore +" AND " +draw+ " DRAW. <br> YOU CAN GO AHEAD AND RESTART THE GAME.")

         
        }

        //else the client win
        else
        {
            $('#msg').val("GAME OVER!")
            
           // document.getElementById('result').style.color = "black";
           $('#result').css("background-color", "green");
            // edit some text inside the html to show who is the winner and show the score
            $('#result').text("CONGRATIOLATIONS! YOU WIN! <br> THE SCORE WAS " + computerScore + " - " + clientScore +" IN FAVOR OF YOU! WITH " +draw+ " DRAW.")
      
          
        }
    
        clientScore = 0;
        computerScore = 0;
        draw = 0;
        
        $("#myBtn").attr("disabled",true);

}

/////////////////////////////////////////////////////////////////////////////////
//display image based on who won
const winnerImages = () => 
{
  
  //$("#winnerImage").text("")// clear the content of winner image div

  

 let imagess = new Image()

  /////////////////////////////////////////////////////////////////
  // if rock wins
  if ( ($('#yourChoice').val() === "Rock") && 
        ($('#computerGuess').val() ===  "Scissor"))
    {
      
      $(imagess).attr("src", choicesIMGsrc[0])
      $("#winnerText").text("ROCK WINS!")
    }

 else if ( ($('#computerGuess').val() ===  "Rock") && 
           ($('#yourChoice').val() === "Scissor"))
  {
    $("#winnerText").text("ROCK WINS!")
    $(imagess).attr("src", choicesIMGsrc[0])
  }

/////////////////////////////////////////////////////////////////////
//Scissor wins
 else if ( ($('#computerGuess').val() ===  "Paper") && 
            ($('#yourChoice').val()   === "Scissor"))
  {
      $("#winnerText").text("SCISSOR WINS!")
      $(imagess).attr("src", choicesIMGsrc[1])
  }
else if ( ($('#computerGuess').val() ===  "Scissor") && 
            ($('#yourChoice').val() === "Paper"))
  {
      $("#winnerText").text("SCISSOR WINS!")
      $(imagess).attr("src", choicesIMGsrc[1])
  }

////////////////////////////////////////////////////////////////////////
//Paper wins
   else if ( ($('#computerGuess').val() ===  "Paper") && 
                ($('#yourChoice').val() === "Rock"))
    {
      $("#winnerText").text("PAPER WINS!")
      $(imagess).attr("src", choicesIMGsrc[2])
    }
    else if ( ($('#computerGuess').value ===  "Rock") && 
               ($('#yourChoice').value === "Paper"))
    {
      $("#winnerText").text("PAPER WINS!")
      $(imagess).attr("src", choicesIMGsrc[2])
    }

///////////////////////////////////////////////////////////////
//else draw
    else {
      $("#winnerImage").attr("src", "images/draw.jpeg")
    }

    //$(imagess).appendTo($("#winnerImage")) // show the image
    
    $("#winnerImage").attr('src', imagess.src)
   
    
    $("#imageNtext").show()
}
//////////////////////////////////////////////////////////


//////////////////////////////////////////////////////////////////////////////////////
  // new game button 
  $("#newGame").click( evt => {
      evt.preventDefault()
      newGame()
  })

/////////////////////////////////////////
// if now game is clicked reset all and notify the client that new game has been started
  const newGame = () =>
  {
    $('#result').text("NEW GAME STARTED! ");
    $('#result').removeAttr("style");
    $('#result').removeAttr("style")

    $('#msg').val("NEW GAME !");
    $('#computerGuess').val(``)
    $('#yourChoice').val(``)
    $('#roundWinner').val(``)
    $('#roundN').val(``)
   
    $('#yourChoice').val(``)
    $('#computerScore').val(``)
    $('#clientScore').val(``)
    clientScore = 0;
    computerScore = 0;
    draw = 0;
    roundNum = 0;
    
    $("#winnerImage").text('')
    $("#myBtn").attr("disabled", false  );

    
  }

/////////////////////////////////////////////////////////////////////
  const clear5secs =()=>
  {
    $('#yourChoice').val(``)
    $('#computerGuess').val(``)
    $("#winnerImage").removeAttr('src')
    $("#winnerText").text('')
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


