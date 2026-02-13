/* Is Undefined?
The function is supposed to check if the input is undefined, but it is not working correctly. Can you fix the code ?
*/

function isUndefined(value) {
    return value === undefined;
}

console.log(isUndefined(undefined)) // true
console.log(isUndefined(0)) // false
console.log(isUndefined(null)) // false
console.log(isUndefined(NaN)) // false
console.log(isUndefined('undefined')) // false
console.log(isUndefined('')) // false
console.log(isUndefined({})) // false
console.log(isUndefined([])) // false
console.log(isUndefined({valueOf() {return undefined;}})) // false