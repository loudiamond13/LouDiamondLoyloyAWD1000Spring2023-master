"use strict";

const $ = selector => document.querySelector(selector);

const getErrorMsg = lbl => `${lbl} must be a valid number greater than zero.`; //error message

const focusAndSelect = selector => {
    const elem = $(selector);
    elem.focus();
    elem.select(); 
};


// calculates entries
function processEntries() {
    const miles = parseFloat($("#miles").value);
    const gallons = parseFloat($("#gallons").value);

    if (isNaN(miles) || miles <= 0) {
        alert(getErrorMsg("Miles driven"));
        focusAndSelect("#miles");
    } else if (isNaN(gallons) || gallons <= 0) {
        alert(getErrorMsg("Gallons of gas used"));
        focusAndSelect("#gallons");
    } else {
        $("#mpg").value = (miles / gallons).toFixed(2);
    }
 
};


// clear entries when miles per gallon text box is double clicked 
document.getElementById("mpg").ondblclick = function() {clearEntries()};
// clear miles driver text box when focused
document.getElementById("miles").onfocus = function() {clearMilesDriven()};
// clear gallons used text box when focused
document.getElementById("gallons").onfocus = function() {clearGallonsUsed()};
// after entering the gallons used text box and clicked outside the text box it automatically calculate
document.getElementById("gallons").addEventListener("focusout", processEntries); 

function clearMilesDriven() // funtion to clear the miles driver text box
{
    $("#miles").value = "";
}

function clearGallonsUsed() // funtion to clear the miles driver text box
{
    $("#gallons").value = "";
}

// clears the entries
function clearEntries ()  
{
    $("#miles").value = "";
    $("#gallons").value = "";
    $('#mpg').value = "";
};



document.addEventListener("DOMContentLoaded", () => {
    $("#calculate").addEventListener("click", processEntries);
    $("#miles").focus();
});