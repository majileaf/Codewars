/*
Given an integer as input, can you round it to the 
next (meaning, "higher") multiple of 5?

Examples:
input:    output:
0    ->   0
2    ->   5
3    ->   5
12   ->   15
21   ->   25
30   ->   30
-2   ->   0
-5   ->   -5
etc.

Input may be any positive or negative integer (including 0).

You can assume that all inputs are valid integers.
*/

// initial solution:
// const roundToNext5 = n => 
//     n % 5 === 0 ? 
//         n : 
//         n - n % 5 + (n > 0 ? 5 : 0);

const roundToNext5 = n => Math.ceil((n / 5)) * 5;

console.log(roundToNext5(0)); // 0
console.log(roundToNext5(2)); // 5
console.log(roundToNext5(3)); // 5
console.log(roundToNext5(12)); // 15
console.log(roundToNext5(21)); // 25
console.log(roundToNext5(30)); // 30
console.log(roundToNext5(-2)); // 0
console.log(roundToNext5(-5)); // -5