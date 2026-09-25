/* Check your arguments
Bob has written a function to detect the type of an object. It receives any primitive values or objects, 
and returns its object type as a string. But it seems to be working incorrectly. 
Can you figure out why, and fix the code for him?
*/

const objectType = (...obj) => {
    if (obj.length === 0) return '[object Null]';
    return Object.prototype.toString.call(obj[0]);
}

console.log(objectType(42)) //'[object Number]'
console.log(objectType(false)) //'[object Boolean]'
console.log(objectType(function(){return this;})) //'[object Function]'
console.log(objectType('Hello World!')) //'[object String]'

console.log(objectType({foo:'bar'})) //'[object Object]'
console.log(objectType([1,4,6,4,1])) //'[object Array]'
console.log(objectType(new Date(2012,11,21))) //'[object Date]'
console.log(objectType(new RegExp(/^_^/g))) //'[object RegExp]'
console.log(objectType(Math)) //'[object Math]'
console.log(objectType(new Error('this kata is too awesome'))) //'[object Error]'
console.log(objectType(Symbol('[native code]'))) //'[object Symbol]'

console.log(objectType(NaN)) //'[object Number]'
console.log(objectType(null)) //'[object Null]'
console.log(objectType(undefined)) //'[object Undefined]'
console.log(objectType()) //'[object Null]'