/* Array.isArray
JavaScript 1.8.5 helpfully added the Array.isArray function, which can tell you whether its argument is an Array or not. 
Without it, checking whether something is an Array is rather tricky. How would you do it if you had to?
*/

const isArray = arr => Object.prototype.toString.call(arr) === '[object Array]';

console.log(isArray([])) // true
console.log(isArray({})) // false
console.log(isArray(null)) // false
console.log(isArray(undefined)) // false
console.log(isArray({length : 0})) // false
console.log(isArray('Array')) // false
console.log(isArray('[]')) // false
console.log(isArray('[1, 2]')) // false
console.log(isArray(Array)) // false
console.log(isArray(Array())) // true
console.log(isArray(Array.prototype)) // true
console.log(isArray(Object.defineProperty([], 'prop', {value : 'value'}))) // true