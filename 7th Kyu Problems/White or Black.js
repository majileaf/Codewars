/* White or Black?
Complete the function that returns the color of the given square on a normal, 8x8 chess board:

chessboard

Examples
"a", 8  ==>  "white"
"b", 2  ==>  "black"
"f", 5  ==>  "white"
*/

const mineColor = (file, rank) => ({a: 1, b: 2, c: 3, d: 4, e: 5, f: 6, g: 7, h: 8}[file] + rank) % 2 ? 'white' : 'black';

console.log(mineColor("a", 8)) // "white"
console.log(mineColor("b", 2)) // "black"
console.log(mineColor("f", 5)) // "white"