/* Format to the 2nd
Given some positive integers, I wish to print the integers such that all take up the same width by adding a minimum number of leading zeroes. 
No leading zeroes shall be added to the largest integer.

For example, given 1, 23, 2, 17, 102, I wish to print out these numbers as follows:
001
023
002
017
102

Write a function that takes a variable number of integers and returns the string to be printed out.
*/

const printNums = (...args) => {
    const max = Math.max(...args.map(e => String(e).length), 0);
    return args.map(e => String(e).padStart(max, 0)).join('\n');
}

console.log(printNums()) // ''
console.log(printNums(2)) // '2'
console.log(printNums(1, 12, 34)) // '01\n12\n34'
console.log(printNums(1009, 2)) // '1009\n0002'
console.log(printNums(1, 23, 2, 17, 102)) // '001\n023\n002\n017\n102'