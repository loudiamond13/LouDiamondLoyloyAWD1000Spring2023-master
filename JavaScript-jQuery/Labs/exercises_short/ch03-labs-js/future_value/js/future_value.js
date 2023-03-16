"use strict";



//declaring variables / constants
//yearly variable/s
let investment = 0;
let years = 0;
let yFutureValue = 0;
let rate = 0;

// monthly variable/s
let mFutureValue = 0;


// get investment amount - loop until user enters a number
//let investment = 0;
do {
    investment = parseFloat(
        prompt("Enter investment amount as xxxxx.xx", 10000));
}
while ( isNaN(investment) );

// get interest rate - loop until user enters a number
//let rate = 0;
do {
    rate = parseFloat(prompt("Enter interest rate as xx.x", 7.5));
}
while ( isNaN(rate) );

// get number of years - loop until user enters a number
//let years = 0;
do {
    years = parseInt(prompt("Enter number of years", 10));
}
while ( isNaN(years) );

// calulate future value
yFutureValue = investment;
mFutureValue = investment;

rate = rate / 100;   // converts the anual % rate to decimal.

// calulates future value yearly
for (let i = 1; i <= years; i++ ) 
{
    yFutureValue += yFutureValue * rate;
   
}
 
// calulates future value monthly 
for (let j = 1; j <= (years * 12); j++ )
{
    mFutureValue += mFutureValue * rate/12;
}
   


// display results for yearly interest
document.write(`<p><h3>Future Value with Yearly Interest</h3></p>`);
document.write(`<p><label>Investment amount:</label> ${investment.toFixed(2)}</p>`);
document.write(`<p><label>Interest rate:</label> ${rate * 100}</p>`);
document.write(`<p><label>Years:</label> ${years}</p>`);
document.write(`<p><label>Future Value:</label> ${yFutureValue.toFixed(2)}</p>`);

// display results for monthly interest
document.write(`<p><h3>Future Value with Monthly Interest</h3></p>`);
document.write(`<p><label>Investment amount:</label> ${investment.toFixed(2)}</p>`);
document.write(`<p><label>Interest rate:</label> ${rate * 100}</p>`);
document.write(`<p><label>Years:</label> ${years}</p>`);
document.write(`<p><label>Future Value:</label> ${mFutureValue.toFixed(2)}</p>`);