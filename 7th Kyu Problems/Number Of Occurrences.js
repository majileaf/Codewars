/* Number Of Occurrences
Write a function that returns the number of occurrences 
of an element in an array.

Examples
var arr = [0, 1, 2, 2, 3];
arr.numberOfOccurrences(0) === 1;
arr.numberOfOccurrences(4) === 0;
arr.numberOfOccurrences(2) === 2;
arr.numberOfOccurrences("a") === 0;
*/

Array.prototype.numberOfOccurrences = function(n) {
    return this.reduce((sum, n) => (sum[n] = (sum[n] || 0) + 1, sum), {})[n] || 0;
}

const arr = [4, 0, 4];
console.log(arr.numberOfOccurrences(4)) // 2

const arr2 = [0, 1, 2, 2, 3];
console.log(arr2.numberOfOccurrences(0)) // 1
console.log(arr2.numberOfOccurrences(4)) // 0
console.log(arr2.numberOfOccurrences(2)) // 2
console.log(arr2.numberOfOccurrences("a")) // 0