/*
In this Kata we are passing a number (n) into a function.
Your code will determine if the number passed is even (or not).

The function needs to return either a true or false.
Numbers may be positive or negative, integers or floats.
Floats with decimal part non equal to zero are considered UNeven 
for this kata.
*/

// initial testing for integer:
// const testEven = n => !(n % 1 || n % 2);

// was not needed therefore: 
const testEven = n => !(n % 2);