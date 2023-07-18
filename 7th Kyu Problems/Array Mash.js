/* Array Mash
Mash 2 arrays together so that the returning array has alternating elements of the 2 arrays . 
Both arrays will always be the same length.

eg. [1,2,3] + ['a','b','c'] = [1, 'a', 2, 'b', 3, 'c']
*/

const arrayMash = (array1, array2) => array1.reduce((sum, n, i) => [...sum, n, array2[i]], []);

console.log(arrayMash([1, 2, 3], ['a', 'b', 'c'])) // [1, 'a', 2, 'b', 3, 'c']
console.log(arrayMash([1, 2, 3, 4, 5], ['a', 'b', 'c', 'd', 'e'])) // [1, 'a', 2, 'b', 3, 'c', 4, 'd', 5, 'e']
console.log(arrayMash([1, 1, 1, 1], [2, 2, 2, 2])) // [1, 2, 1, 2, 1, 2, 1, 2]
console.log(arrayMash([1, 8, 'hello', 'dog'], ['fish', '2', 9, 10])) // [1, "fish", 8, "2", "hello", 9, "dog", 10]
console.log(arrayMash([null, null, 4], [NaN, null, 'hello'])) // [null, NaN, null, null, 4, "hello"]
console.log(arrayMash([1], [2])) // [1, 2]
console.log(arrayMash(['h', 'l', 'o', 'o', 'l'], ['e', 'l', 'w', 'r', 'd'])) // ["h", "e", "l", "l", "o", "w", "o", "r", "l", "d"]