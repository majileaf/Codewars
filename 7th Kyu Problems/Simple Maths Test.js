/* Simple Maths Test
Create a function which checks a number for three different properties.
is the number prime?
is the number even?
is the number a multiple of 10?

Each should return either true or false, which should be given as an array. 
Remark: The Haskell variant uses data Property.

Examples
numberProperty(7)  // ==> [true,  false, false] 
numberProperty(10) // ==> [false, true,  true] 

The number will always be an integer, either positive or negative. 
Note that negative numbers cannot be primes, but they can be multiples of 10:

numberProperty(-7)  // ==> [false, false, false] 
numberProperty(-10) // ==> [false, true,  true] 
*/

const checkPrime = n => {
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
    }
    return n > 1;
}

const numberProperty = n => [checkPrime(n), !(n % 2), !(n % 10)];

console.log(numberProperty(  0)) // [false,  true,  true]
console.log(numberProperty(  1)) // [false, false, false]
console.log(numberProperty(  2)) // [ true,  true, false]
console.log(numberProperty( -2)) // [false,  true, false]
console.log(numberProperty(  4)) // [false,  true, false]
console.log(numberProperty(  5)) // [ true, false, false]
console.log(numberProperty( 10)) // [false,  true,  true]
console.log(numberProperty(-10)) // [false,  true,  true]
console.log(numberProperty( 25)) // [false, false, false]
console.log(numberProperty(131)) // [ true, false, false]
console.log(numberProperty(341)) // [false, false, false]