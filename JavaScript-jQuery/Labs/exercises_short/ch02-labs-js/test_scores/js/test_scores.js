"use strict";

// get 3 scores from user and add them together
const score1 = parseInt(prompt("Enter test score"));

const score2 = parseInt(prompt("Enter test score"));

const score3 = parseInt(prompt("Enter test score"));

const score4 = parseInt(prompt("Enter test score"));

const total = score1 + score2 + score3 + score4;

// calculate the average
const average = (total / 4);
//alert(average);


// display in alert box
alert(`Score 1 = ${score1}
      \nScore 2 = ${score2} 
      \nScore 3 = ${score3}
      \nScore 4 = ${score4}
      \nAverage Score = ${average}
      `);
       
      

      // display in browser page
const html = 
      `<p>Score 1 = ${score1}</p>
      <p>Score 2 = ${score2}</p>
      <p>Score 3 = ${score3}</p>
      <p>Score 4 = ${score4}</p>
      <p>Average score = ${average}</p>`;
      document.write(html);
      

