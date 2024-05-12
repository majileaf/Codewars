/* Odd March Bits 8 bits
Odd bits are getting ready for Bits Battles.

Therefore the n bits march from right to left along an 8 bits path. 
Once the most-significant bit reaches the left their march is done. 
Each step will be saved as an array of 8 integers.

Return an array of all the steps.

1 <= n <= 8

NOTE: n != 0, because n represents the number of 1s.

Examples
This resembles a simple 8 LED chaser:

n = 3
00000111
00001110
00011100
00111000
01110000
11100000

n = 7
01111111
11111110
*/

const bitMarch = n => [...Array(9 - n)].map((_, i) => Array(8).fill(0).fill(1, 0 + i, n + i).reverse());

// alternatively:
// const bitMarch = n => [...Array(9 - n)].map((_, i) => Array(8).fill(0).fill(1, 8 - n - i, 8 - i));

console.log(bitMarch(1)) 
// [
//     [ 0, 0, 0, 0, 0, 0, 0, 1 ],
//     [ 0, 0, 0, 0, 0, 0, 1, 0 ], 
//     [ 0, 0, 0, 0, 0, 1, 0, 0 ],
//     [ 0, 0, 0, 0, 1, 0, 0, 0 ],
//     [ 0, 0, 0, 1, 0, 0, 0, 0 ], 
//     [ 0, 0, 1, 0, 0, 0, 0, 0 ],
//     [ 0, 1, 0, 0, 0, 0, 0, 0 ],
//     [ 1, 0, 0, 0, 0, 0, 0, 0 ],
// ]

console.log(bitMarch(2)) 
// [
//     [ 0, 0, 0, 0, 0, 0, 1, 1 ],
//     [ 0, 0, 0, 0, 0, 1, 1, 0 ], 
//     [ 0, 0, 0, 0, 1, 1, 0, 0 ],
//     [ 0, 0, 0, 1, 1, 0, 0, 0 ],
//     [ 0, 0, 1, 1, 0, 0, 0, 0 ], 
//     [ 0, 1, 1, 0, 0, 0, 0, 0 ],
//     [ 1, 1, 0, 0, 0, 0, 0, 0 ],
// ]

console.log(bitMarch(3)) 
// [
//     [0, 0, 0, 0, 0, 1, 1, 1, ],
//     [0, 0, 0, 0, 1, 1, 1, 0, ],
//     [0, 0, 0, 1, 1, 1, 0, 0, ],
//     [0, 0, 1, 1, 1, 0, 0, 0, ],
//     [0, 1, 1, 1, 0, 0, 0, 0, ],
//     [1, 1, 1, 0, 0, 0, 0, 0, ],
// ]