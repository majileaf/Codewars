/* By 3, or not by 3? That is the question . . .
A trick I learned in elementary school to determine whether or 
not a number was divisible by three is to add all of the integers 
in the number together and to divide the resulting sum by three. 

If there is no remainder from dividing the sum by three, then the 
original number is divisible by three as well.

Given a series of digits as a string, determine if the number 
represented by the string is divisible by three.

Example:
"123"      -> true
"8409"     -> true
"100853"   -> false
"33333333" -> true
"7"        -> false

Try to avoid using the % (modulo) operator.
*/

// initial solution:
// const divisibleByThree = str => str.split('').reduce((sum, n) => sum + Number(n), 0) % 3 === 0;

// alternatively:
// const divisibleByThree = str => {
//     let sum = str.split('').reduce((sum, n) => sum + Number(n), 0);
//     sum /= 3;
//     return (Math.floor(sum) === sum);
// }

const divisibleByThree = str => {
    let sum = str.split('').reduce((sum, n) => sum + Number(n), 0);
    return (Number.isInteger(sum / 3));
}

console.log(divisibleByThree('123')) // true
console.log(divisibleByThree('19254')) // true
console.log(divisibleByThree('88')) // false
console.log(divisibleByThree('1')) // false