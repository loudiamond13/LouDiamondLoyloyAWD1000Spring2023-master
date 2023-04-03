"use strict";
const $ = selector => document.querySelector(selector);


// initializing and declaring the constants and variables
let names 	= ["Ben", "Joel", "Judy", "Anne"];
let scores 	= [88, 98, 77, 88];

const MAX_SCORE = 100 // max score that is acceptable
const MIN_SCORE = 0	// the least score that can be accepted



const createElemText =(tagName, text) =>
{
	const elem 	   = document.createElement(tagName)
	const textNode = document.createTextNode(text)
	elem.appendChild(textNode)
	return elem
	
}

//add score
const addScore =()=>
{
	let  name  = $("#name")			// 
	let  score = $("#score")
	
	//takes the inputs
	let nameInput  = name.value
	let scoreInput = parseInt(score.value)
	let validInput = true
	
	// if name is blank or number, send an error
	if( (nameInput === "") || (!isNaN(nameInput)))
	{
		name.nextElementSibling.textContent = "Please enter a valid Name"
		$("#name").select()
		validInput = false
	}
	else{
		name.nextElementSibling.textContent = ""
		
	}
	
	
	// if score input is not a number, send an error
	//if score input is blank, send an error
	//if score input is over 100 or less than 0, send an error
	if ( (scoreInput === "") || 
		(isNaN(scoreInput)) || 
		(scoreInput < MIN_SCORE) || 
		(scoreInput > MAX_SCORE))
	{
		score.nextElementSibling.textContent = 
		"Please enter a valid score. " + MIN_SCORE + " - " + MAX_SCORE;

		$("#score").select()
		validInput = false	
	}else{
		score.nextElementSibling.textContent = ""
	}
	
	if(validInput)
	{
		names[names.length++] 	=  nameInput;
		scores[scores.length++] = scoreInput
		

	name.value	= "" 
	score.value	= ""

	//console.log(names)
	//console.log(scores)

	$("#name").select()
	}

}

const displayResults =()=>
{
	let totalScore 		= 0			// total/sum of the scores
	let averageScore 	= 0			// the average score
	let highScore 		= 0			//the highest score
	let nameHighScore 	= ""		// name of the highes score
	
	for ( let i in scores) 
	{
		totalScore += scores[i] // add all the score
		
		// 
		if ( scores[i] > highScore )
		{
			highScore 		= scores[i] // get the high score
			nameHighScore 	= names[i]	// name of the high score
		}
		//calculates average score
		averageScore = (totalScore / scores.length).toFixed()
	}
	
	//calculates average score
	//averageScore += (totalScore / scores.length).toFixed
	
	// fill up DOM
	const headerText 		= createElemText
					("h2", "Results")
					
	const avgScoreText 		= createElemText
					( "p", "Average score = " + averageScore)
					
	const highestScoreText 	= createElemText
					( "p", "High Score = "+ nameHighScore+ " with a score of " + highScore)
					
	const div = $("#results")
	
	
	//if there is no h2 in result, make one and display the rest
	if ( (div.querySelector("h2") == undefined) )
	{
		div.appendChild(headerText)
		div.appendChild(avgScoreText) 	// display avgscore
		div.appendChild(highestScoreText)//  display highscore
		
		
		//replace w
	}else{	
		div.replaceChild(headerText, 	  div.firstChild)
		div.replaceChild(avgScoreText, 	  div.firstChild.nextElementSibling)
		div.replaceChild(highestScoreText, div.lastChild)
	}
	
	//console.log(scores)
	$('#name').select()
}


// display the scores function
const displayScores = () =>
{
	let div = $("#scores") 
	
	div.textContent 		= ""
	
	div.appendChild(createElemText
					("h2", "Scores"))
					

	
	
	for ( let i in scores )
	{
		div.appendChild(createElemText("label", names[i]))
		div.appendChild(createElemText("label", scores[i]))
		div.appendChild(document.createElement('br'))
	}
	
	$('#name').select()
}


document.addEventListener("DOMContentLoaded", () => {
	// add event handlers
	$("#add").addEventListener("click", addScore);
	$("#display_results").addEventListener("click", displayResults);
	$("#display_scores").addEventListener("click", displayScores);
	$("#name").select()
});

