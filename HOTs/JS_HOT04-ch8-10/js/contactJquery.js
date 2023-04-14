


//contact jQuery

"use strict";


$(document).ready(()=>{
   
    // validation patterns
    const validatesEmail      = /^([a-zA-Z0-9_\.\+\-])+\@(([a-zA-z0-9\-])+\.)+([a-zA-Z0-9]{2,4})$/
    const validatesZipcode  = /^\d{5}([\-]\d{4})?$/
    const validatesPhoneNum = /^\d{3}[\-]\d{3}[\-]\d{4}$/    
    const IIR                =   "Input Is Required."


    //the event handler of form when submit is clicked 
    $("#contactForm").submit( event =>
    {
        let inputValid = true

        //first name validator
        const fstName = $("#fName").val().trim()
        if( fstName === `` || !(isNaN(fstName)))
        {
            $('#fName').prev().text(``)
            $('#fName').next().text('Valid First Name ' + IIR)
            inputValid = false

        }else{
            $('#fName').next().text(``)
            $('#fName').prev().text(``)
        }
        $('#fName').val(fstName)

        //last name validator
        const lastName = $("#lName").val().trim()
        if( lastName === `` || !(isNaN(lastName)))
        {
            $('#lName').prev().text(``)
            $('#lName').next().text('Valid Last Name ' + IIR)
            inputValid = false

        }else{
            $('#lName').next().text(``)
            $('#lName').prev().text(``)
        }
        $('#lName').val(lastName)


        //email validator
        const email = $("#inputEmail").val().trim()
        if( email == `` )
        {
            inputValid = false
            $('#inputEmail').next().text(`Valid E-mail ` + IIR)
            $('#inputEmail').prev().text(``)
            
        
        }else if( !validatesEmail.test(email) )
        {
            inputValid = false
            $('#inputEmail').prev().text(``)
            $('#inputEmail').next().text(`Valid E-mail ` + IIR)
        }else{
            $('#inputEmail').next().text(``)
            $('#inputEmail').prev().text(``)
        }
        $('#inputEmail').val(email)


        //address validator
        const address = $("#inputAddress").val().trim()
        if( address == `` )
        {
            inputValid = false
            $('#inputAddress').next().text(`Valid Address ` + IIR)
            $('#inputAddress').prev().text(``)
        }else{

            $('#inputAddress').prev().text(``)
            $('#inputAddress').next().text(``)
        }
        $('#inputAddress').val(address)



        //city input validator
        const city  = $("#inputCity").val().trim()
        if( city === `` )
        {
            inputValid = false
            $("#inputCity").next().text(`Valid City ` + IIR)
            $("#inputCity").prev().text(``)
        }else{

            $("#inputCity").prev().text(``)
            $("#inputCity").next().text(``)
        }
        $("#inputCity").val(city)


        // zip code validator
        const zipCode  = $("#inputZip").val().trim()
        if(  zipCode === `` )
        {
            inputValid = false
            $("#inputZip").prev().text(``)
            $("#inputZip").next().text(`Valid Zip Code ` + IIR)
        }else if( !validatesZipcode.test(zipCode) ){

            inputValid = false
            $("#inputZip").next().text(`Valid Zip Code ` + IIR)
            $("#inputZip").prev().text(``)

        }else{

            $("#inputZip").prev().text(``)
            $("#inputZip").next().text(``)
        }
        $("#inputZip").val(zipCode)

        // phone num validator
        const phoneNum  = $("#inputPhoneNum").val().trim()
        if( phoneNum === `` )
        {
            inputValid = false
            $("#inputPhoneNum").next().text(`Valid Phone Number ` + IIR)
            $("#inputPhoneNum").prev().text(``)

        }else if( !validatesPhoneNum.test(phoneNum) ){

            inputValid = false
            $("#inputPhoneNum").prev().text(``)
            $("#inputPhoneNum").next().text(`Valid Phone Number ` + IIR)

        }else{

            $("#inputPhoneNum").prev().text(``)
            $("#inputPhoneNum").next().text(``)
        }
        $("#inputPhoneNum").val(phoneNum)

                   
        if( !inputValid )
        {
            event.preventDefault() //prevent default
        }else{

            setTimeout("submitForm()", 5000)
        }   
        
        

    })
    $("#no").click(function(){
        $("#ckbox input").fadeOut(3000);
        $('#ckEmail').attr('disabled', true);
        $('#ckText').attr('disabled', true);
        $('#ckVM').attr('disabled', true);
        $('#ckErr').fadeOut(3000)
      });

    $("#yes").click(function(){
        $("#ckbox input").slideDown(1000);
        $('#ckEmail').attr('disabled', false);
        $('#ckText').attr('disabled', false);
        $('#ckVM').attr('disabled', false);
        $('#ckErr').fadeIn(500)
    });


    $("#reset").click(  event=>{
        $('#fName').next().text(``)
        $('#fName').prev().text(`*`)

        $('#lName').prev().text(`*`)
        $('#lName').next().text('')

        $('#inputEmail').next().text(``)
        $('#inputEmail').prev().text(`*`)
        
        $('#inputAddress').prev().text(`*`)
        $('#inputAddress').next().text(``)
    
        $("#inputCity").prev().text(`*`)
        $("#inputCity").next().text(``)
 
        $("#inputZip").prev().text(`*`)
        $("#inputZip").next().text(``)


        $("#inputPhoneNum").prev().text(`*`)
        $("#inputPhoneNum").next().text(``)

        $("#yes").select()

        $("#inputState").val('MO')

        event.preventDefault()

    })
    
    $("#fName").focus()
})

















/*
const $ = selector => document.querySelector(selector)


const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;




document.addEventListener("DOMContentLoaded", () => {

    $('#submitBtn').addEventListener("click", evt => {
        
        validateNow()

        
    })

 



    const validateNow = () =>{
   
    
        let errorMSG = []; // error messages storage/array

        // if first name contains nothing or numbers, send an error message
        if(( $("#fName").value == '') || ( !isNaN($("#fName").value)))
        {
            errorMSG.push( "Please Enter Your First Name (Alphapet Only)*")
        }
       
        // if last name contains nothing or numbers, send an error message
        if(( ($("#lName").value) === '' ) || ( !isNaN($("#lName").value)))
        {
            errorMSG.push( "Please Enter Your Last Name (Alphapet Only)*")
        }

        // if email input is not valid / empty, send an error message
        if( !(($("#inputEmail").value).match(validRegex) ) )
        {
           errorMSG.push( "Please Enter A Valid E-Mail.*")
        }

        // if address is empty, send an error message
        if(( ($("#inputAddress").value) === '' ))
        {
            errorMSG.push( "Please Enter Your Valid Address.*")
        }
        // if address2 is empty, send an error message / input "N/A" if not applicable
        if(( ($("#inputAddress2").value) === '' ))
        {
            errorMSG.push( "Please Enter Your Address-2. ('N/A' if not applicable.)*")
        }
        // if city has a number or empty, send an error message 
        if(( ($("#inputCity").value) === '' ) || ( !isNaN($("#inputCity").value)))
        {
            errorMSG.push( "Please Enter Your City Address*")
        }
        // if state is not selected, send an error message
        if(( ($("#inputState").value) === '' ))
        {
            errorMSG.push( "Please Select Your State Address*")
        }
        // if zip code input is not 5 digits, send an error message
         if( (($("#inputZip").value).length) != 5 )
        {
            errorMSG.push( "Please Enter Your Zip Code (5-digits)*")
        }
        





      
        displayErr(errorMSG)
       // displayTnx()
       //displayTnx()
        //e.preventDefault();
        
        //showImage()
    }
     

    ////////////////////////////////////////////////////////
    const displayErr = (err) => 
    {
        
        let errorList = document.getElementById("errorMessage")
        // show nothing if there is no error
       
        // display the errors
        errorList.classList.add('errorMessage')
        var messageString = "<ul>"; // open a UL/ unordered list
        for (let i =0; i < err.length; i++){
            messageString += "<li>" + err[i] + "</li>"; // store the errors to list items
        }
        messageString += "</ul>"; // close the UL
        // display the errors
        errorList.innerHTML = messageString;

        if (!err.length) {
            errorList.innerHTML = "";
            errorList.classList.remove('errorMessage')
            
            displayTnx()
            //return false;

        }
        
    }
  
    // display picture after submit
    // this will show on top because in my opinion, it would look ugly if I put it on the bottom
    const displayTnx = () =>
    {
      
        let thanksImage = document.createElement("img")
        thanksImage.setAttribute("src", "images/tnx.jpeg")
        
        //document.getElementById("contactText").innerHTML = "SUBMITTED!"

        document.getElementById("errorMessage").appendChild(thanksImage)
       
      //  document.getElementById("errorMessage") 
    }

    //clear button/reset
    $("#reset").addEventListener("click",  evt => {
        resets()
    })
   
    //clear all function
    const resets = () =>
    {
        let errorList = document.getElementById("errorMessage")
        errorList.innerHTML = "";
        errorList.classList.remove('errorMessage')

        document.getElementById("fName").value = ""
        document.getElementById("lName").value = ''
        document.getElementById("inputEmail").value = ''
        document.getElementById("inputAddress").value = ''
        document.getElementById("inputAddress2").value = ''
        document.getElementById("inputCity").value = ''
        document.getElementById("inputState").value = ''
        document.getElementById("inputZip").value = ''
        document.getElementById("fName").focus() // focus to the first text box/ input / first name

    }
    
})
*/