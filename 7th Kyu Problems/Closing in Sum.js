/* Closing in Sum
Create a function that returns the sum of the digits formed from the first and last digits, 
all the way to the center of the number.

Worked Example
2520 ➞ 72

# The first and last digits are 2 and 0.
# 2 and 0 form 20.
# The second digit is 5 and the second to last digit is 2.
# 5 and 2 form 52.

# 20 + 52 = 72

Examples
121 ➞ 13
# 11 + 2

1039 ➞ 22
# 19 + 3

22225555 ➞ 100
# 25 + 25 + 25 + 25

Notes
If the number has an odd number of digits, simply add on the single-digit number 
in the center (see example #1).
Any number which is zero-padded counts as a single digit (see example #2).
*/

const closingInSum = n => {
    n = [...String(n)];
    let sum = 0;
    if (n.length % 2 !== 0) n.splice(Math.floor(n.length / 2), 0, '0');
    
    for (let i = 0; i < (n.length / 2); i++) {
        sum += Number(n[i] + n[n.length - 1 - i]);
    }
    return sum;
}

console.log(closingInSum(121n)) // 13
console.log(closingInSum(1039n)) // 22
console.log(closingInSum(22225555n)) // 100
console.log(closingInSum(2520n)) // 72
console.log(closingInSum(5332824166496569n)) // 331
console.log(closingInSum(1979672314137318116n)) // 485
console.log(closingInSum(1795459644013947776n)) // 548
console.log(closingInSum(2801980378842185820n)) // 426
console.log(closingInSum(3440584288422776554n)) // 430
console.log(closingInSum(1985124000275401986n)) // 342