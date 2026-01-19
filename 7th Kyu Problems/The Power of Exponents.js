/* The Power of Exponents
This kata is based on: Exponent Method

Create a method called power that takes two integers and returns the value of the first argument raised to the power of the second.
Unlike the Exponent Method, you should also take in account negative exponents.
Your solution won't be tested against special cases leading to undefined values (0**-2 for example)
Note: The ** operator (JS: Math.pow) has been disabled.

Examples:
power(2, 3)   // 8
power(4, -2)  // 0.0625
*/

const power = (base, exponent) =>{
    let product = 1;
    for (let i = 0; i < Math.abs(exponent); i++) {
        product *= base;
    }
    return exponent < 0 ? 1 / product : product;
}

console.log(power(2, 3)) // 8
console.log(power(4, -2)) // 0.0625