"use strict";
// Arrays of region
function analyseData() {
const region1 = [1540, 1130, 1580, 1105];
const region2 = [2010, 1168, 2305, 4102];
const region3 = [2450, 1847, 2710, 2391];
const region4 = [1845, 1491, 1284, 1575];
const region5 = [2120, 1767, 1599, 3888];

//calculating quarterly sales
const q1 = region1[0] + region2 [0]+ region3 [0] + region4 [0] + region5 [0]; 
const q2 = region1[1] + region2 [1]+ region3 [1] + region4 [1] + region5 [1]; 
const q3 = region1[2] + region2 [2]+ region3 [2] + region4 [2] + region5 [2]; 
const q4 = region1[3] + region2 [3]+ region3 [3] + region4 [3] + region5 [3]; 

//calculating region wise sales

const reg1Sale=getSale(region1);
const reg2Sale=getSale(region2);
const reg3Sale=getSale(region3);
const reg4Sale=getSale(region4);
const reg5Sale=getSale(region5);
document.write(output);

//calculating total sales
const toatlSales= q1 + q2 + q3 + q4;

// Outputing 
const output = "Sales by Quarter/n";
output = output + `Q1: `+q1+ `\nQ2: ` +q2+ `\nQ2: ` +q3+ `\nQ2: ` +q4;
document.write(output);


//Outputting Sales By Region's
output = "Sales by Region \n";
output = output+ `Region 1: ` +reg1Sale+ `\nRegion 2: ` +reg2Sale+ `\nRegion 3: ` +reg3Sale+ `\nRegion 4: ` +reg4Sale+ `\nRegion 5: ` +reg5Sale;
document.write(output);

output ="Total Sales: "
output = output+toatlSales;
document.write(output);
}

//Functions to get the sum of array elements 
function getSale(array) {
    sum = 0;
    for (index = 0; index <array.length; index++) {
        sum = sum+array[index];
    }
    return sum; 
}
