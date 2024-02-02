/* Build a square
I will give you an integer. Give me back a shape that is as long and wide as the integer. 
The integer will be a whole number between 1 and 50.

Example
n = 3, so I expect a 3x3 square back just like below as a string:
+++
+++
+++
*/

const generateShape = integer => [...Array(integer)].fill('+'.repeat(integer)).join('\n');

// alternatively:
// const generateShape = n => ("+".repeat(n) + "\n").repeat(n).trim();

console.log(generateShape(8)) // '++++++++\n++++++++\n++++++++\n++++++++\n++++++++\n++++++++\n++++++++\n++++++++'