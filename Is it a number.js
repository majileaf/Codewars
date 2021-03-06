/*
Given a string s, write a method (function) that will return true 
if its a valid single integer or floating number or false if its not.

Valid examples, should return true:
isDigit("3")
isDigit("  3  ")
isDigit("-3.23")

should return false:
isDigit("3-4")
isDigit("  3   5")
isDigit("3 5")
isDigit("zero")
*/

const isDigit = s => s == parseFloat(s);

console.log(isDigit("s2324")) // false
console.log(isDigit("-234.4")) // true

// Valid examples, should return true:
console.log(isDigit("3"))
console.log(isDigit("  3  "))
console.log(isDigit("-3.23"))

// should return false:
console.log(isDigit("3-4"))
console.log(isDigit("  3   5"))
console.log(isDigit("3 5"))
console.log(isDigit("zero"))