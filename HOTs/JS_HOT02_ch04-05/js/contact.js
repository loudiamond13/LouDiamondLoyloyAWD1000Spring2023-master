
/*I STILL NEED TO FINISH THIS, I AM SORRY, THIS IS NOT REALLY DONE YET*/

const $ = selector => document.querySelector(selector)

document.addEventListener("DOMContentLoaded", () => {
    
    /*DECLARING CONST AND VAR*/ 
    
   // const re = /^(?:\d{3}|\(\d{3}\))([-/.])\d{3}\1\d{4}$/;
    let zip = 0; //initializing zip code var
    let lastName = ''  //initializing last name
    let firstName = '' //initializing first Name
    let city = '' // initializing city var
    $('#contacts').addEventListener("click", evt => {
        validateNow()

    })

    function validateNow ()
    {
        firstName = $('#fName').value
        lastName = $('#lName').value

        //first name validation if firstname has number/emtpy show error
        if (firstName == '')
        {
            document.getElementById('fnameErr').innerHTML = "First Name is Empty";
            document.getElementById('fnameErr').style.color = "red";
        }
        else if(isNaN(firstName) === false)
        {
            document.getElementById('fnameErr').innerHTML = "Please Enter A Proper First Name";
           document.getElementById('fnameErr').style.color = "red";
           
     
        }
        
        else 
        {
            document.getElementById('fnameErr').innerHTML = "";
        }
        

        //last name validation if firstname has number how error
        validateLname()
      
    }
    
    function validateLname()
    {
        if (lastName == '')
        {
            document.getElementById('lnameErr').innerHTML = "Last Name is Empty";
            document.getElementById('lnameErr').style.color = "red";
        }
        else if  (isNaN(lastName) === false)
       {
            document.getElementById('lnameErr').innerHTML = "Please Enter A Proper Last Name";
            document.getElementById('lnameErr').style.color = "red";
        }

        else 
        {
            document.getElementById('lnameErr').innerHTML = "";
        }

        validateZip()
    }

    function validateZip()
    {

        zip = $('#inputZip').value // getting the input zip code value
        if(zip.length != 5) // zip code validator, must be 5 digits
        {
            document.getElementById('zipCode').innerHTML = "ZIP CODE MUST BE 5 NUMBERS";
            document.getElementById('zipCode').style.color = "red";
        }

        
        else 
        {
            document.getElementById('zipCode').innerHTML = "";
        }

      validateCity()
    }

    function validateCity()
    {
     
        city = $('#inputCity').value // getting the input zip code value

        if(!isNaN(city))
        {
            document.getElementById('cityErr').innerHTML = "Please Enter A valid City";
            document.getElementById('cityErr').style.color = "red";
        }
        else {
            document.getElementById('cityErr').innerHTML = "";
        }
    }
  //  document.getElementById('zipCode').innerHTML = "ZIP CODE MUST BE 5 NUMBERS";
}) 