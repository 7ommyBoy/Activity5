"use strict";
// Activity 5 HW JavaScript
// Tommy Works Jr. 
// 10/03/2022 


// The date for the sales 
const region1 = [1540, 1130, 1580, 1105];
const region2 = [2010, 1168, 2305, 4102];
const region3 = [2450, 1847, 2710, 2391];
const region4 = [1845, 1491, 1284, 1575];
const region5 = [2120, 1767, 1599, 3888];

// The calculation of the totals quarter 
const quarterTotals = [0, 0, 0, 0];
// Iterating through the array +1
for (let i = 0; i <quarterTotals.length; i++) {
    quarterTotals[i] = region1[i] + region2[i] + region3[i] + region4[i] + region5[i];
}
// This will display the totals in the quarter
document.write("<h2> Sales by the Quarter</h2>");
// Iterating through the array +1
for (let i = 0; i< quarterTotals.length; i++) {
    document.write(`Q${i + 1} : $${quarterTotals[i]}<br>`);
}
// This will caculate the total's region
const regionTotals = [0, 0, 0, 0, 0];
// Iterating through the array +1 
for (let i = 0; i <quarterTotals.length; i++) {
    regionTotals[0] += region1[i];
    regionTotals[1] += region2[i];
    regionTotals[2] += region3[i];
    regionTotals[3] += region4[i];
    regionTotals[4] += region5[i];
}
// this will display the totals by quarter
document.write ("<h2> Sales by Region </h2>");
// Iterating through the array +1 
for ( let i = 0; i <regionTotals.length; i++) {
    document.write(`Region ${i + 1}: $${regionTotals[i]}<br>`);
}

// This will caculate the Total Sales 
let totalSales = 0;
for ( let i = 0; i < quarterTotals.length; i++) {
    totalSales += quarterTotals[i];
}

// This will output the Total sales
document.write("<h2> Total Sales </h2>");
document.write(`$${totalSales}`);
// End