/* Shuffle an Array
Write a function to shuffle an array.

Ex.:

Input: [1,2,3,4]
Output: [3,1,4,2]

Assume input is array.

Hint: Math.random()

http://devdocs.io/javascript/global_objects/math/random
*/

const shuffle = arr => {
    arr = arr.slice();
    for (let i = arr.length - 1; i >= 1; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

console.log(shuffle([1,2,3,4]))