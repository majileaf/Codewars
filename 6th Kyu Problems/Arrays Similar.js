/* Arrays Similar
Write a function that determines whether the passed in sequences are similar. 
Similar means they contain the same elements, and the same number of occurrences of elements.

var arr1 = [1, 2, 2, 3, 4],
    arr2 = [2, 1, 2, 4, 3],
    arr3 = [1, 2, 3, 4],
    arr4 = [1, 2, 3, "4"]

arraysSimilar(arr1, arr2); // Should equal true
arraysSimilar(arr2, arr3); // Should equal false
arraysSimilar(arr3, arr4); // Should equal false
*/

const arr1 = [1, 2, 2, 3, 4],
      arr2 = [2, 1, 2, 4, 3],
      arr3 = [1, 2, 3, 4],
      arr4 = [1, 2, 3, "4"]

const arraysSimilar = (arr1, arr2) => {
    const sorted1 = arr1.slice().sort();
    const sorted2 = arr2.slice().sort();
    return arr1.length === arr2.length && sorted1.every((_, i) => sorted1[i] === sorted2[i]);
}

console.log(arraysSimilar(arr1, arr2)) // true
console.log(arraysSimilar(arr2, arr3)) // false
console.log(arraysSimilar(arr3, arr4)) // false

console.log(arraysSimilar([ 1, 1, 2 ], [ 4, 3, 2, 1, 1 ])) // false