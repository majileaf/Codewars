/* Extending JavaScript Objects: Get First & Last Array Element
Your task is to extend the JavaScript Array object with methods .first() and .last(), 
so you can get the first respectively the last element of the array.

var a = [2, 5, 7, 3 ,4];

a.first();  // 2
a.last();   // 4

Notes
    in case of empty array, methods should return undefined.
    methods should not mutate their input.
*/

Array.prototype.first = function() {
    return this[0];
}

Array.prototype.last = function() {
    return this[this.length - 1];
}

console.log([2,5,7,3,4].first()) // 2
console.log([2,5,7,3,4].last()) // 4
console.log([].first()) // undefined
console.log([].last()) // undefined