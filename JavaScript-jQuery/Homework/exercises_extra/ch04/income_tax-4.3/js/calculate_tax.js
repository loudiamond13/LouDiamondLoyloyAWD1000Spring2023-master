"use strict";
const $ = selector => document.querySelector(selector);





const processEntry=()=>{
	//let taxOwed = 0.00
	let validInput 	= true;

	validInput 		= validateInput() //validates input
	//alert(validInput)


	if (validInput)
	{
		
		
		 calculateTax()
	}
}


//validates input
const validateInput=()=>{
	//declaring constants and variables
	
	const MIN_INPUT = 0;	//holds min acceptable amount

	let income = parseFloat($("#income").value);

	//if input is invalid, send an error message
	if( (income <= MIN_INPUT) || (isNaN(income)))
	{
		alert(`Please Enter A Valid Income Value. ( > 0 )`)
	}else{
		return true;
	}

}


//calculates Tax income
const calculateTax=()=>{
	let income = (parseFloat($("#income").value));
	//declaring constants and variables
	let taxOwed = "";
	
	const tax1 	= 987.50	// tax owed for 9875 - 40124 
	const tax2 	= 4617.50	// tax owed for 40125 - 85524 
	const tax3 	= 14605.50	//tax owed for 58525 - 163300 

	// if income < 9875
	if (income < 9875)
	{
		taxOwed = 0.00
	}

	// if income > 9874 or income < 40125
	 if( (income > 9874) )
	 {
		
		taxOwed = tax1
		
	}

	 if ( (income > 40124) )//if  (income > 40124) )
	{
		 taxOwed= tax2
		
	}

	if ( (income > 85524) )//if  (income > 40124) )
	{
		 taxOwed= tax3
		
	}

	//display result
	$("#tax").value = taxOwed.toFixed(2)
	//alert(taxOwed)
	return 
}












document.addEventListener("DOMContentLoaded", () => {
	// add event handlers
	$("#calculate").addEventListener("click", processEntry);

});