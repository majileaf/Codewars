/*
Given an array of 4 integers
[a,b,c,d] representing two points (a, b) and (c, d), return a string 
representation of the slope of the line joining these two points.

For an undefined slope (division by 0), return undefined . Note that the 
"undefined" is case-sensitive.

a:x1
b:y1
c:x2
d:y2

Assume that [a,b,c,d] and the answer are all integers (no floating numbers!). 
Slope: https://en.wikipedia.org/wiki/Slope
*/

const slope = ([x1, y1, x2, y2]) => (x2 - x1 === 0) 
    ? 'undefined' 
    : String((y2 - y1) / (x2 - x1));

console.log(slope([19,3,20,3])) // "0" 
console.log(slope([2,7,4,-7])) // "-7" 
console.log(slope([10,50,30,150])) // "5" 
console.log(slope([15,45,12,60])) // "-5" 
console.log(slope([10,20,20,80])) // "6" 
console.log(slope([-10,6,-10,3])) // "undefined" 