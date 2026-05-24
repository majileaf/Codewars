/* Calculate Hypotenuse of Right-angled Triangle
To solve this Kata, complete the function which will return the length of the hyptenuse for a right angled triangle 
with the other two sides having a length equal to the inputs. 

More details:
    The returned value should be a number rounded to three decimal places
    An error (ArgumentException in C#) should be thrown if an invalid input is provided 
    (inputs should both be numbers that are above zero)

calculateHypotenuse(1,1); // returns 1.414
calculateHypotenuse(3,4); // returns 5
calculateHypotenuse(-2,1); // throws error
calculateHypotenuse("one", "two"); // throws error

For more information on the hypotenuse, visit: http://en.wikipedia.org/wiki/Hypotenuse
*/

const isValidNum = (x, y) => x > 0 && y > 0 && x === parseFloat(x) && y === parseFloat(y);
const calculateHypotenuse = (a, b) => {
    if (!isValidNum(a, b)) throw new Error();
    return +Math.hypot(a, b).toFixed(3);
}

// valid inputs
console.log(calculateHypotenuse(1,1)) // 1.414
console.log(calculateHypotenuse(3,4)) // 5.000
console.log(calculateHypotenuse(9,9)) // 12.728

// invalid inputs
console.log(calculateHypotenuse(-2,1)) // undefined
console.log(calculateHypotenuse(2,-3)) // undefined
console.log(calculateHypotenuse(9,0)) // undefined
console.log(calculateHypotenuse("one",1)) // undefined
console.log(calculateHypotenuse(3,"two")) // undefined
console.log(calculateHypotenuse(3)) // undefined
console.log(calculateHypotenuse()) // undefined
console.log(calculateHypotenuse(true,4)) // undefined
console.log(calculateHypotenuse(2,false)) // undefined
console.log(calculateHypotenuse(NaN,5)) // undefined
console.log(calculateHypotenuse(6,NaN)) // undefined