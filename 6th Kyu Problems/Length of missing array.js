/* Length of missing array
You get an array of arrays.
If you sort the arrays by their length, you will see, that their length-values are consecutive.
But one array is missing!


You have to write a method, that return the length of the missing array.

Example:
[[1, 2], [4, 5, 1, 1], [1], [5, 6, 7, 8, 9]] --> 3


If the array of arrays is null/nil or empty, the method should return 0.

When an array in the array is null or empty, the method should return 0 too!
There will always be a missing element and its length will be always between the given arrays. 
*/

const getLengthOfMissingArray = arrayOfArrays => {
    if (arrayOfArrays === null || arrayOfArrays.some(e => !e || !e.length) || !arrayOfArrays.length) return 0;
    const sorted = arrayOfArrays.map(e => e.length).sort((a, b) => b - a);
    return sorted.find((_, i) => sorted[i] - sorted[i + 1] !== 1) - 1;
}

console.log(getLengthOfMissingArray([ [ 1, 2 ], [ 4, 5, 1, 1 ], [ 1 ], [ 5, 6, 7, 8, 9 ]] )) // 3
console.log(getLengthOfMissingArray([ [ 5, 2, 9 ], [ 4, 5, 1, 1 ], [ 1 ], [ 5, 6, 7, 8, 9 ]] )) // 2
console.log(getLengthOfMissingArray([ [ null ], [ null, null, null ] ] )) // 2
console.log(getLengthOfMissingArray([ [ 'a', 'a', 'a' ], [ 'a', 'a' ], [ 'a', 'a', 'a', 'a' ], [ 'a' ], [ 'a', 'a', 'a', 'a', 'a', 'a' ]] )) // 5
console.log(getLengthOfMissingArray([ ])) // 0

console.log(getLengthOfMissingArray([ [], [ 4, 5, 1, 1 ], [ 1 ], [ 5, 6, 7, 8, 9 ]] )) // 0
console.log(getLengthOfMissingArray(null)) // 0