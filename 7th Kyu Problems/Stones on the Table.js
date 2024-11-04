/* Stones on the Table
There are some stones on Bob's table in a row, and each of them can be red, green or blue, 
indicated by the characters R, G, and B.

Help Bob find the minimum number of stones he needs to remove from the table so that the stones 
in each pair of adjacent stones have different colors.

Examples:
"RGBRGBRGGB"   => 1
"RGGRGBBRGRR"  => 3
"RRRRGGGGBBBB" => 9
*/

const solve = stones => [...stones].reduce((sum, _, i) => sum + (stones[i] === stones[i - 1]), 0);

console.log(solve("")) // 0
console.log(solve("RRGGBB")) // 3
console.log(solve("RGBRGB")) // 0
console.log(solve("BGRBBGGBRRR")) // 4
console.log(solve("GBBBGGRRGRB")) // 4
console.log(solve("GBRGGRBBBBRRGGGB")) // 7