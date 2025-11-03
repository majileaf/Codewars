/* Swap two elements
Return an array that contains exactly the same elements as the input array, but with elements a and b swapped.
    If the array has multiple copies of a, swap only the first one that appears in the array.
    If the array has multiple copies of b, swap only the last one that appears in the array.

For example:
([1, 2, 3, 4], 2, 4) -> [1, 4, 3, 2]
([1, 2, 3, 4, 1, 2, 3, 4], 2, 4) -> [1, 4, 3, 4, 1, 2, 3, 2]
*/

// const swapTwo = (array, a, b) => {
//     const arr = array.slice();
//     const [idxA, idxB] = [arr.indexOf(a), arr.lastIndexOf(b)];
//     [arr[idxA], arr[idxB]] = [arr[idxB], arr[idxA]];
//     return arr;
// }

// alternatively:
const swapTwo = (array, a, b) => {
    const arr = array.slice();
    [arr[array.indexOf(a)], arr[array.lastIndexOf(b)]] = [b, a];
    return arr;
}

console.log(swapTwo([1, 2, 3, 4], 2, 4)) // [1, 4, 3, 2]
console.log(swapTwo([1, 2, 3, 4, 1, 2, 3, 4], 2, 4)) // [1, 4, 3, 4, 1, 2, 3, 2]
console.log(swapTwo([9, 3, 1, 2, 3, 4, 1, 3, 3, 4, 8, 3, 7, 1, 7], 1, 3)) // [9, 3, 3, 2, 3, 4, 1, 3, 3, 4, 8, 1, 7, 1, 7]
console.log(swapTwo([9, 3, 1, 2, 3, 4, 1, 3, 3, 4, 8, 3, 7, 1, 7], 3, 1)) // [9, 1, 1, 2, 3, 4, 1, 3, 3, 4, 8, 3, 7, 3, 7]