




"use strict";

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
