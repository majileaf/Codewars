/*
Task Overview
Given a non-negative integer n, write a function to_binary/ToBinary 
which returns that number in a binary format.

to_binary(1)  //  1 
to_binary(5)  //  101 
to_binary(11) //  1011 
Example:

toBinary(1)  //  1 
toBinary(5)  //  101 
toBinary(11) //  1011 
*/

const toBinary = n => +n.toString(2);

console.log(toBinary(1)) //  1
console.log(toBinary(2)) //  10
console.log(toBinary(3)) //  11
console.log(toBinary(5)) //  101