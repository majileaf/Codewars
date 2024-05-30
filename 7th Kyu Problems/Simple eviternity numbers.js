/* Simple eviternity numbers
An eviternity number is a number which:

contains only digits 8, 5 and 3, and
the count of the digit 8 >= count of digit 5 >= count of digit 3.
The first few eviternity numbers are as follows.

[8, 58, 85, 88, 358, 385, 538, 583, 588, 835, 853, 858, 885, 888]
You will be given two integers, a and b, and your task is to return the number of 
eviternity numbers in the range >= a and < b.

For example:
solve(0,1000) = 14, because they are [8, 58, 85, 88, 358, 385, 538, 583, 588, 835, 853, 858, 885, 888]
The upper bound will not exceed 500,000.
*/

const eviternityNum = n => /^[853]+$/g.test(n) && numLen(n, 8) >= numLen(n, 5) && numLen(n, 5) >= numLen(n, 3);
const numLen = (num, digit) => (String(num).match(new RegExp(`${digit}`, 'g')) || []).length;
const solve = (a, b) => {
    const arr = [];
    for (let i = a; i <= b; i++) {
        if (eviternityNum(i)) arr.push(i);
    }
    return arr.length;
}

console.log(solve(0,100)) // 4
console.log(solve(0,1000)) // 14
console.log(solve(0,10000)) // 37
console.log(solve(0,100000)) // 103
console.log(solve(0,500000)) // 148