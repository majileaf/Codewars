/* Find the mystery line
Brush up on your Algebra while brushing up on your coding!

You receive a mystery function f(x) that accepts a single real number [1] and returns a single real number. 
For this kata, the mystery function will always be linear [2].

Your goal is to reverse-engineer the equation inside the mystery function. Return values will be of the form [m, b] [2].

const exampleEquation = (x) => (2 * x) + 5; // y = 2x + 5
findMysteryEquation(exampleEquation); // returns [2, 5];

[1] Real number: Any positive, negative, or zero number; includes all types of decimals and fractions. 
For the purposes of this kata, use your language's version of a floating-point number.

[2] Linear: When graphed, the x and y coordinates will produce a straight line. 
This is usually represented as y = mx + b, where m is the slope and b is the y-intercept.
*/

const findMysteryEquation = func => {
    const m = (func(2) - func(1)) / (2 - 1);
    const b = func(1) - m * 1;
    return [m, b];
}

const delta = Math.pow(10, -7);
// 'Returns [2, 5] for y = 2x + 5'
let f = (x) => (2 * x) + 5;
console.log(findMysteryEquation(f));

// 'Returns [1, 1] for y = x + 1'
f = (x) => x + 1;
console.log(findMysteryEquation(f));

// 'Returns [-1, 0] for y = -x'
f = (x) => -1 * x;
console.log(findMysteryEquation(f));