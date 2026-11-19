/* Identify the array's ordering
Write a function that takes a single array as an argument (containing multiple strings and/or positive numbers and/or arrays), 
and returns one of four possible string values, depending on the ordering of the lengths of the elements in the input array:

Your function should return...
    “Increasing” - if the lengths of the elements increase from left to right (although it is possible that some neighbouring elements may also be equal in length)
    “Decreasing” - if the lengths of the elements decrease from left to right (although it is possible that some neighbouring elements may also be equal in length)
    “Unsorted” - if the lengths of the elements fluctuate from left to right
    “Constant” - if all element's lengths are the same.

Numbers and Strings should be evaluated based on the number of characters or digits used to write them.

Arrays should be evaluated based on the number of elements counted directly in the parent array 
(but not the number of elements contained in any sub-arrays).

Happy coding! :)
*/

const getLength = element => typeof element === 'number' ? String(element).length : element.length;
const orderType = arr => {
    const arrLen = arr.map(e => getLength(e));
    arr = arrLen.slice(1);

    if (arr.every((_, i) => arrLen[i] === arrLen[i + 1])) return 'Constant'
    else if (arr.every((_, i) => arrLen[i] <= arrLen[i + 1])) return 'Increasing';
    else if (arr.every((_, i) => arrLen[i] >= arrLen[i + 1])) return 'Decreasing';
    return 'Unsorted';
}

console.log('---')
console.log(orderType(["a", "b", "c"])) // "Constant"
console.log(orderType(["abcde", "abcd", "abc"])) // "Decreasing"
console.log(orderType([["yz"],["uv", "wx"],["ab","cdef", "g"],["hi","jk","lmnopq"]])) // "Increasing"
console.log(orderType(["abc", "abcde", "c"])) // "Unsorted"
console.log(orderType([1, "b", ["p"], 2])) // "Constant"
console.log(orderType([123, 1234, 12345, 123456])) // "Increasing"
console.log(orderType(["a", "abc", "abcde", "ab"])) // "Unsorted"
console.log(orderType([[1, 2, 3, 4], [5, 6, 7], [8, 9]])) // "Decreasing"
console.log(orderType([1, 2, 3, 4, 56])) // "Increasing"
console.log(orderType([["ab","cdef", "g"],["hi","jk","lmnopq"],["rst", "uv", "wx"],["yz"]])) // "Decreasing"
console.log(orderType([[1, 23, 456, 78910], ["abcdef", "ghijklmno", "pqrstuvwxy"], [[1, 23, 456, 78910, ["abcdef", "ghijklmno", "pqrstuvwxy"]], 1234]])) // "Decreasing"

console.log(orderType([ 32,
  25,
  70,
  740,
  3480,
  2160,
  15640,
  22500,
  2442000,
  2516000,
  1.4823529411764707,
  0.8222222222222222,
  1.5714285714285714,
  0.12371134020618557 ])) // "Increasing"