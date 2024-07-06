/* Sort with a sorting array
Sort an array according to the indices in another array.
It is guaranteed that the two arrays have the same size, 
and that the sorting array has all the required indices.

sort(['x', 'y', 'z'], [1, 2, 0]) => ['z', 'x', 'y']
sort(['z', 'x', 'y'], [0, 2, 1]) => ['z', 'y', 'x']
*/

const sort = (initialArray, sortingArray) => {
    const arr = [...Array(initialArray.length)];
    for (let i = 0; i < arr.length; i++) {
        arr[sortingArray[i]] = initialArray[i];
    }
    return arr;
}

// alternatively:
// const sort = (initialArray, sortingArray) => initialArray.reduce((sum, _, i) => (sum[sortingArray[i]] = initialArray[i], sum), []);

console.log(sort(['x', 'y', 'z'], [1, 2, 0])) // ["z", "x", "y"]
console.log(sort(['x', 'y', 'z'], [0, 1, 2])) // ['x', 'y', 'z']
console.log(sort([1, 2, 3, 4, 5], [0, 1, 2, 3, 4])) // [1, 2, 3, 4, 5]
console.log(sort([1, 2, 3, 4, 5], [0, 2, 1, 4, 3])) // [1, 3, 2, 5, 4]