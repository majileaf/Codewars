/* I need more speed!
Write a function that will take in any array and reverse it.

Sounds simple doesn't it?

NOTES:
    Array should be reversed in place! (no need to return it)
    Usual builtins have been deactivated. Don't count on them.
    You'll have to do it fast enough, so think about performances
*/

const reverse = arr => {
    let a = null;
    for (let i = 0; i < arr.length / 2; i++) {
        a = arr[i];
        arr[i] = arr[arr.length - 1 - i];
        arr[arr.length - 1 - i] = a;
    }
    return arr;
}

console.log(reverse([3, 2, 6, 2, 1, 3])) // [3, 1, 2, 6, 2, 3]
console.log(reverse([3, 2, 6, 2, 1])) // [1, 2, 6, 2, 3]