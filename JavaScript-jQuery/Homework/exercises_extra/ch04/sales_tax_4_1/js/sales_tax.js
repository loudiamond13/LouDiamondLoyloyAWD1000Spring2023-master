"use strict";
 
const $ = selector => document.querySelector(selector);
document.getElementById("subtotal").focus()


//declaring and initializing constants and variables
const MAX_SUB_TOTAL = 10000;            //MAX VALUE FOR SUB TOTAL
const MIN_SUB_TOTAL = 0;                // MINIMUM SUB TOTAL
const MAX_TAX_RATE  = 12;                //MAX TAX RATE
const MIN_TAX_RATE  = 0;                // MINIMUM SUB TOTAL

let i               = 0;                       //iteration variable
let subTotal        = 0;                       
let taxRate         = 0;
let salesTax        = 0;
let total           = 0;
let validInputs     = true;     

const performSalesTaxCalc = () =>
{
    subTotal    = parseFloat($("#subtotal").value);
    taxRate     = parseFloat($("#tax_rate").value);
    total       = parseFloat($("#total").value);
    salesTax    = parseFloat($("#sales_tax").value);

    // check sub total if valid
    validInputs = checkSubTotal();

    
    /************************************************* */

    // sub total is valid input, check tax rate input
    if ( validInputs )
    {

        validInputs = checkTaxRate();
    }else{
        return
    }

    /************************************************* */

    //if tax rate and sub total are valid
    if ( validInputs )
    {
        calculateSalesTax() // call and run the calculation function
        return
    }else{return}
}


const checkSubTotal =()=>
{
    subTotal = document.getElementById("subtotal").value;
   
    //checks the sub total input, if over 10,000 
    //and less than 1, display error
    if ( (subTotal > MAX_SUB_TOTAL) || (subTotal <= MIN_SUB_TOTAL) || (isNaN(subTotal)) )
    {
        alert( `Subtotal must be > ${MIN_SUB_TOTAL} and < ${MAX_SUB_TOTAL}` );

        return false;
    }else{
        return true;
    }
}


const checkTaxRate =()=>
{
    taxRate  = document.getElementById( "tax_rate" ).value;//get the tax rate value

    //checks the tax rate input, if over 12 
    //and less than 1, display error
    if ( (taxRate > MAX_TAX_RATE) || (taxRate <= MIN_TAX_RATE) || (isNaN(taxRate)) )
    {
        alert( `Tax Rate must be > ${ MIN_TAX_RATE } and < ${MAX_TAX_RATE}` );

        return false;
    }else{
        return true;
    }
}

//calculate if inputs are valid 
const calculateSalesTax = () =>
{
    //get/point the input values
    taxRate     = parseFloat(document.getElementById("tax_rate").value);
    subTotal    = parseFloat(document.getElementById("subtotal").value);
    total       = parseFloat(document.getElementById("total").value);
    salesTax    = parseFloat(document.getElementById("sales_tax").value);
    
    const hold_tax_rate = taxRate;             //hold the original form of tax rate

    taxRate     = ( taxRate / 100 );           // convert percentage to decimal 
    
    salesTax    =  ( subTotal * taxRate );        //sales tax calculator
   
    total       = ( (subTotal + salesTax).toFixed(2) ); // show 2 decimals only
 

    $("#tax_rate").value    = hold_tax_rate;

    $("#subtotal").value    = subTotal;
    
    $("#sales_tax").value   = ( salesTax.toFixed(2) );
    $("#total").value       = total;

    !validInputs 
    return
    
}



const clearInputs=()=>
{
   
    $("#tax_rate").value    = '';
    $("#subtotal").value    = '';
    $("#sales_tax").value   = '';
    $("#total").value       = '';
}






document.addEventListener("DOMContentLoaded", () => 
{
    // EVENT HANDLERS
    $("#calculate").addEventListener("click", () => {
    
    //evt listener to focus on sub total textbox
    document.getElementById("subtotal").focus()
    performSalesTaxCalc(); // perform sales tax calculation
    })



    // clear button evt listener 
    $("#clear").addEventListener("click", ()=>{
        clearInputs()
        document.getElementById("subtotal").focus()
    })



    //clear all when subtotal is clicked
    $("#subtotal").addEventListener("click", clearInputs)
    
    
})