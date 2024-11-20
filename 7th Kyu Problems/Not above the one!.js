/* Not above the one!
Task
Implement a function which finds the numbers less than 2, and the indices of numbers greater than 1 in the given sequence, 
and returns them as a pair of sequences.

Return a nested array or a tuple depending on the language:
The first sequence being only the 1s and 0s from the original sequence.
The second sequence being the indexes of the elements greater than 1 in the original sequence.

Examples
[ 0, 1, 2, 1, 5, 6, 2, 1, 1, 0 ] => [ [ 0, 1, 1, 1, 1, 0 ], [ 2, 4, 5, 6 ] ]
*/

const binaryCleaner = arr => arr.reduce(([first, second], n, i) => (n < 2 ? first.push(n) : second.push(i), [first, second]), [[], []]);

console.log(binaryCleaner([0,1,2,1,0,2,1,1,1,0,4,5,6,2,1,1,0])) // [ [ 0, 1, 1, 0, 1, 1, 1, 0, 1, 1, 0 ], [ 2, 5, 10, 11, 12, 13 ] ]
console.log(binaryCleaner([0,1,1,2,0])) // [ [ 0, 1, 1, 0 ], [ 3 ] ]
console.log(binaryCleaner([2,2,0])) // [ [ 0 ], [ 0, 1 ] ]
console.log(binaryCleaner([0,1,2,1,0,2,1,1])) // [ [ 0, 1, 1, 0, 1, 1 ], [ 2, 5 ] ]
console.log(binaryCleaner([1])) // [ [ 1 ], [] ]