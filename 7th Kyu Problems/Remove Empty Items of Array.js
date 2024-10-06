/* Remove Empty Items of Array
In this Kata, you will learn how to remove all empty items in an Array.
In JavaScript, empty items in arrays can be declared by [1, 2,,,3, 4] (Multiple commas without a value in that index)
The values that are not given a value are empty items, and usually add up with others to form <# empty items>; In the example, <2 empty items>
[1, 2, <2 empty items>, 3, 4] should be cleared such that it should be [1, 2, 3, 4]

Example:
Before: [1, 2, 3, <5 empty items>, 4, <1 empty item>, null, undefined];
After: [1, 2, 3, 4, null, undefined];
*/

const clean = arr => arr.filter(e => e || !e);

// alternatively:
// const clean = arr => arr.filter(e => true);

console.log(clean([])) // [], 'Empty Array'
console.log(clean(Array(500000))) // [], '5000000 empty items'
console.log(clean([1, 2])) // [1, 2], 'No empty items here'
console.log(clean([1, 2, , , 3, 4,])) // [1, 2, 3, 4], 'Two Empty Items'
console.log(clean([1, 2, [],, 3])) // [1, 2, [], 3], 'Sub-Arrays'
console.log(clean([undefined, null, NaN, false, '', 0])) // [undefined, null, NaN, false, '', 0], 'Falsey Values'
console.log(clean([undefined,,,, null,, NaN,, false, '', 4, 3, 2, 1, 0])) // [undefined, null, NaN, false, '', 4, 3, 2, 1, 0], 'Falsey, Empty, Truthy'