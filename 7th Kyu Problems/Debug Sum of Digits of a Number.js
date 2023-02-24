/* Debug Sum of Digits of a Number
Debug   function getSumOfDigits that takes positive integer to calculate sum of its digits. 
Assume that argument is an integer.

Example
123  => 6
223  => 7
1337 => 14
*/

/*
function getSumOfDigits(integer) {
  var sum = null;
  var digits =  Math.floor(integer).toString();
  for(var ix = 1; ix < digits.length; ix = sum + 1) {
    sum =+ digits[ix + 1]);
  }
  return sum;
}
*/

function getSumOfDigits(integer) {
  let sum = 0;
  const digits = integer.toString();
  for(let ix = 0; ix < digits.length; ix++) {
    sum += +digits[ix];
  }
  return sum;
}

console.log(getSumOfDigits(123)) // 6
console.log(getSumOfDigits(223)) // 7
console.log(getSumOfDigits(0)) // 0