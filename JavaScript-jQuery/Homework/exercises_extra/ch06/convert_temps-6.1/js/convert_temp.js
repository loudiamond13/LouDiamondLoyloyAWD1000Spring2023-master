"use strict";
const $ = selector => document.querySelector(selector);

/*********************
*  helper functions  *
**********************/
const calculateCelsius = temp 	 => (temp-32) * 5/9;
const calculateFahrenheit = temp => temp * 9/5 + 32;

const toggleDisplay = (label1Text, label2Text) => 
{
	$("#degree_label_1").textContent = label1Text
	$("#degree_label_2").textContent = label2Text
	
	$("#degrees_computed").value = ""
	$("#degrees_entered").select()
}

/****************************
*  event handler functions  *
*****************************/
const convertTemp = () => {

		
	let temp = parseInt( $("#degrees_entered").value  )
	
	// if fahrenheit is selected, convert the value from celsius to celsius
	if ( $("#to_celsius").checked )
	{
		$("#degrees_computed").value = calculateCelsius(temp).toFixed()
	}else{// else celsius to fahrenheit
		$("#degrees_computed").value = calculateFahrenheit(temp).toFixed()
	}

	// input is invalid, send an error message
	if ( ((isNaN(temp)) || (temp === ``) ))
	{
		$('#message').textContent = 
		"You Must Enter A Valid Number For Degrees."

		$("#degrees_computed").value = ``
			
	}
	$("#degrees_entered").focus()
}

const toCelsius = () 	=> toggleDisplay
			("Enter F degrees:", "Degrees Celsius:");
const toFahrenheit = () => toggleDisplay
			("Enter C degrees:", "Degrees Fahrenheit:");

document.addEventListener("DOMContentLoaded", () => {
	// add event handlers
	$("#convert").addEventListener("click", convertTemp);
    $("#to_celsius").addEventListener("click", toCelsius);
    $("#to_fahrenheit").addEventListener("click", toFahrenheit);
	
	// move focus
	$("#degrees_entered").focus();
});

