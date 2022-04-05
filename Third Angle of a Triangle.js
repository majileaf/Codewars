/*
You are given two interior angles (in degrees) of a triangle.
Write a function to return the 3rd.

Note: only positive integers will be tested.
https://en.wikipedia.org/wiki/Triangle
*/

const otherAngle = (a, b) => (a + b > 0) ? 180 - (a + b) : 0;

console.log(otherAngle(30, 60)) //  90)
console.log(otherAngle(60, 60)) //  60)
console.log(otherAngle(43, 78)) //  59)
console.log(otherAngle(10, 20)) //  150)