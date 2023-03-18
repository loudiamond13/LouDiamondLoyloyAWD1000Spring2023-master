"use strict";


// DECLARING AND INITIALIZING constants and variables
const lowestGrade = 0;          // (0) LOWEST GRADE THAT CAN BE CONVERTED TO LETTER GRADE
const LOW_A = 88;               // (88)LOWEST GRADE/NUMBER THAT CAN BE CONVERTED AS LETTER GRADE A
const LOW_B = 80;               // (80) LOWEST GRADE/NUMBER THAT CAN BE CONVERTED AS LETTER GRADE B
const LOW_C = 68;               // (68)LOWEST GRADE/NUMBER THAT CAN BE CONVERTED AS LETTER GRADE C
const LOW_D = 60;               // (60) LOWEST GRADE/NUMBER THAT CAN BE CONVERTED AS LETTER GRADE D
/////                           // <60 WILL BE CONVERTED AS LETTER GRADE F OR FAIL 

const HIGH_A = 100;              // (100) HIGHEST GRADE/NUMBER THAT CAN BE CONVERTED AS LETTER GRADE A
const HIGH_B = 87;               // (87) HIGHEST GRADE/NUMBER THAT CAN BE CONVERTED AS LETTER GRADE B
const HIGH_C = 79;               // (79) HIGHEST GRADE/NUMBER THAT CAN BE CONVERTED AS LETTER GRADE C
const HIGH_D = 67;               // (67) HIGHEST GRADE/NUMBER THAT CAN BE CONVERTED AS LETTER GRADE D

//const FAIL = 60; // <60 = FAIL      

let input = 0;                // INITIALIZING USER'S INPUT

let inputGrade = [];            // ARRAY/STORAGE FOR NUMERAL GRADE (USER'S INPUT) 
let letterGrade = [];            // ARRAY/STORAGE FOR LETTER GRADE (CONVERTED GRADE) 
let i = 0;                    // INITIALIZING ITERATION VARIABLE
let j = 0;                    // INITIALIZING ITERATION VARIABLE

/*A 88-100
   B 80-87
   C 68-79
   D 60-67
   F < 60
   
*/

do {

    // ASKS THE USER FOR A GRADE TO BE CONVERTED 
    input = parseInt(prompt(`Enter number grade from ${lowestGrade} through ${HIGH_A} 
    \n Or enter 999 to end entries`, 999));

    // CHECKS IF USER'S INPUT IS <0 OR >100
    if ( input > HIGH_A || input < lowestGrade ) {
       // CHECKS IF THE USER WANTS TO END THE ENTRIES AND PRINTS THE RESULTS
        if ( input === 999 ) {
            for ( i; i < inputGrade.length; i++ ) {
                // PRINTS THE RESULTS
                document.write( `<p>Grade ${inputGrade[i]} = ${letterGrade[i]}</p>` );
            }
            break;
        }
// if USER'S INPUT IS <0 OR >100 AND NOT  999 SKIP THE REST STATEMENTS 
        else { continue; }


        
    }


    // 
    // CHECKS USER'S INPUT. IF USER'S INPUT IS <= 100 AND >= 88, USER'S INPUT WILL BE CONVERTED TO A-GRADE
    else if ( input <= HIGH_A && input >= LOW_A ) {
        inputGrade[j] = input;
        letterGrade[j] = 'A';
    }

    // CHECKS USER'S INPUT. IF USER'S INPUT IS <= 80 AND >= 87, USER'S INPUT WILL BE CONVERTED TO B-GRADE
    else if ( input <= HIGH_B && input >= LOW_B ) {
        inputGrade[j] = input;
        letterGrade[j] = 'B';
    }

    // CHECKS USER'S INPUT. IF USER'S INPUT IS <= 79 AND >= 68, USER'S INPUT WILL BE CONVERTED TO C-GRADE
    else if ( input <= HIGH_C && input >= LOW_C ) {
        inputGrade[j] = input;
        letterGrade[j] = 'C';
    }

    // CHECKS USER'S INPUT. IF USER'S INPUT IS <= 67 AND >= 60, USER'S INPUT WILL BE CONVERTED TO D-GRADE
    else if ( input <= HIGH_D && input >= LOW_D ) {
        inputGrade[j] = input;
        letterGrade[j] = 'D';
    }
    // CHECKS USER'S INPUT. IF USER'S INPUT IS <60, USER'S INPUT WILL BE CONVERTED TO F-GRADE
    else if ( input < LOW_D && input >= lowestGrade ) {
        inputGrade[j] = input;
        letterGrade[j] = 'F';
    }

    else{continue;} ///  IGNORE THE REST



    j++ //ITERATES THE ARRAY INDEX
    //  IF THE USER'S INPUT  is not a number keep going
} while (isNaN(input) || input <= HIGH_A || input >= lowestGrade);