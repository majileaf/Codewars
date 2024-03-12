/* Perfect squares, perfect fun
Given an integer, if the length of it's digits is a perfect square, 
return a square block of sqroot(length) * sqroot(length). 
If not, simply return "Not a perfect square!".

Examples:
1212 returns:
"12
12"
Note: 4 digits so 2 squared (2x2 perfect square). 2 digits on each line.

123123123 returns:
"123
123
123"
Note: 9 digits so 3 squared (3x3 perfect square). 3 digits on each line.
*/

const squareIt = int => {
    int = String(int);
    const squareLength = Math.sqrt(int.length);

    return Number.isInteger(squareLength) 
        ? [...Array(squareLength)].map((_, i) => int.slice(i * squareLength, (i + 1) * squareLength)).join('\n') 
        : 'Not a perfect square!';
}

console.log(squareIt(1)) // "1"
console.log(squareIt(222)) // "Not a perfect square!"
console.log(squareIt(234562342342)) // "Not a perfect square!"
console.log(squareIt(88989)) // "Not a perfect square!"
console.log(squareIt(112141568)) // "112\n141\n568"