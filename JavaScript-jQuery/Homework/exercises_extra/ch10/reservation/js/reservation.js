"use strict";

$(document).ready( () => 
{
	const emailErr = "Must be valid E-mail"
	const MBN = 'Must Be Numeric'
	const tfir = "This Field Is Required"
	$("arrival_date").focus()


	const emailPattern = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}\b/;

	//SUBMIT HANDLER
	$("#reservation_form").submit(event =>
		{
			

		$("#arrival_date").focus()

		
		let inputValid = true

		//validate arrival Date
		const arrival_ddate = $("#arrival_date").val().trim();
		if(arrival_ddate ==='')
		{
			$("#arrival_date").next().text(tfir)
			inputValid = false
		}else
		
		{
			$("#arrival_date").next().text(``)
		}
		$("#arrival_date").val(arrival_ddate)
		
		//check nights
		const nightD = $('#nights').val().trim()
		if(nightD == '')
		{
			
			$("#nights").next().text(tfir)
			inputValid = false
		}else{
			$("#nights").next().text('')
		}

		//	validates name
		const name =	$("#name").val().trim()
		if(name === '') 
		{
			$("#name").next().text(tfir)
		}else{
			$("#name").val(``)
		}
		$("#name").val(name)

		//validates the email address
		const email = $("#email").val().trim()
		if (email === '')
		{
			$("#email").next().text(tfir)
			inputValid = false
		}else if (!emailPattern.test(emailErr))
		{
			$("#email").next().text(emailErr)
			inputValid = false

		}else{

			$("#email").next().text(``)
		}
		$("#email").val(email)

		//validate phone
		const phne = $("#phone").val().trim()
		if(phne === '')
		{
			$("#phone").next().text(tfir)
		}else{
			$("#phone").next().text(``)
		}
		$("#phone").val(phne)





		if(!inputValid)
		{
			event.preventDefault()
		}
		
	})


}); // end ready
