"use strict";

const $ = selector => document.querySelector(selector);

const getErrorMsg = lbl => `${lbl} must be a valid number greater than zero.`;

const focusAndSelect = selector => {
    const elem = $(selector);
    elem.focus();
    elem.select();
};

const calculateMPG = (miles, gallons) => (miles / gallons).toFixed(1);

const processEntries = () => {
    let validEnties = true

    const miles = parseFloat($("#miles").value);
    const gallons = parseFloat($("#gallons").value);

    if (isNaN(miles) || miles <= 0) {
        $("#miles").nextElementSibling.textContent = `Miles driven must be a valid number > 0`
        //focusAndSelect("#miles");
        validEnties = false
    } else {
        $("#miles").nextElementSibling.textContent = ``
        validEnties = true
    }
    
    
    
    
    if (isNaN(gallons) || gallons <= 0) {
        $("#gallons").nextElementSibling.textContent = "Gallons of gas used must be a valid number > 0."
        //focusAndSelect("#gallons");
        validEnties = false
    } else {
        $("#gallons").nextElementSibling.textContent = ""

        validEnties = true
    }

    if(validEnties){
        $("#mpg").value = calculateMPG(miles, gallons);
    }
};

const clearEntries = () => {
    $("#miles").value = "";
    $("#gallons").value = "";
    $("#mpg").value = "";

    $("#gallons").nextElementSibling.textContent = "*"
    $("#miles").nextElementSibling.textContent = `*`
}

document.addEventListener("DOMContentLoaded", () => {
    $("#calculate").addEventListener("click", processEntries);
    $("#clear").addEventListener("click", clearEntries);
    $("#miles").focus();
});