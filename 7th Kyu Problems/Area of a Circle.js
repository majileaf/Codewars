/* Area of a Circle
Complete the function which will return the area of a circle with the given radius.

Returned value is expected to be accurate up to tolerance of 0.01.

If the radius is not positive, throw Error.

Example:
circleArea(43.2673);     // returns 5881.248  (± 0.01)
circleArea(68);          // returns 14526.724 (± 0.01)
circleArea(0);           // throws Error
circleArea(-1);          // throws Error
*/

const circleArea = radius => {
    if (radius < 1) throw new Error();
    return +(Math.PI * radius ** 2).toFixed(2);
}

// Test positive
console.log(circleArea(1)) // 3.14
// Test examples
console.log(circleArea(43.2673)) //  5881.24
console.log(circleArea(68     )) // 14526.72
// Test zero
console.log(circleArea(0)) // Error
// Test negative
console.log(circleArea(-1)) // Error