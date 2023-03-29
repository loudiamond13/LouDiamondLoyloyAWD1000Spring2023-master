"use strict";


/*declaring and initializing const and variables */ 
const region1 = [1540, 1130, 1580, 1105];
const region2 = [2010, 1168, 2305, 4102];
const region3 = [2450, 1847, 2710, 2391];
const region4 = [1845, 1491, 1284, 1575];
const region5 = [2120, 1767, 1599, 3888];


/* displaying and adding all values per quarter */
document.write(`<h2>Sales by Quarter</h2>` )
document.write(`<p>Q1: $${region1[0] + region2[0] + region3[0] + region4[0] + region5[0]}` )
document.write(`<br>Q2: $${region1[1] + region2[1] + region3[1] + region4[1] + region5[1]}` )
document.write(`<br>Q3: $${region1[2] + region2[2] + region3[2] + region4[2] + region5[2]}` )
document.write(`<br>Q4: $${region1[3] + region2[3] + region3[3] + region4[3] + region5[3]}</p>` )

 /**Displating and adding all values per region */
document.write(`<h2>Sales by Region</h2>` )
document.write(`<p>Region 1: $${region1[0] + region1[1] + region1[2] + region1[3]}` )
document.write(`<br>Region 2: $${region2[0] + region2[1] + region2[2] + region2[3]}` )
document.write(`<br>Region 3: $${region3[0] + region3[1] + region3[2] + region3[3]}` )
document.write(`<br>Region 4: $${region4[0] + region4[1] + region4[2] + region4[3]}` )
document.write(`<br>Region 5: $${region5[0] + region5[1] + region5[2] + region5[3]}</p>` )


/**Displaying and adding all values for total */
document.write(`<h2>Total Sales </h2>` )

document.write(`<p>$${region1[0] + region1[1] + region1[2] + region1[3] + region2[0] + region2[1] + region2[2] + region2[3]+ region3[0] + region3[1] + region3[2] + region3[3]+ region4[0] + region4[1] + region4[2] + region4[3] + region5[0] + region5[1] + region5[2] + region5[3]}</p>` )