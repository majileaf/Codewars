/* Array2Binary addition
Given an array containing only integers, add all the elements and return the binary equivalent of that sum.

If the array contains any non-integer element (e.g. an object, a float, a string and so on), return false.

Note: The sum of an empty array is zero.
[1, 2]      --> "11"
[1, "a", 2] --> false / False (depending on the language)
*/

const arr2bin = arr => {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (!Number.isInteger(arr[i])) return false;
        sum += arr[i];
    }
    return sum.toString(2);
}

console.log(arr2bin([1,2])) // "11"
console.log(arr2bin([1,2,3,4,5])) // "1111"
console.log(arr2bin([1,10,100,1000])) // "10001010111"
console.log(arr2bin([1,'a',2])) // false
console.log(arr2bin([1.5,2,2.5])) // false
console.log(arr2bin([])) // "0"