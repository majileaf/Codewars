/* Suitcase packing
Mr. Square is going on a holiday. He wants to bring 2 of his favorite squares with him, so he put them in his rectangle suitcase.

Write a function that, given the lengths of the squares and the dimensions of the suitcase, return whether the squares can fit inside the suitcase.
    The first two parameters are the lengths of the squares. They are not passed in order, i.e. the bigger square, if any, could be passed in first or in second.
    The following two parameters are the dimensions (length and width) of the rectangle suitcase. They are not passed in order either, i.e. the third parameter could be either the length or the width.
    Mr. Square's suitcase is flat: the squares must be placed side-by-side, NOT on top of each other.

Examples
1,2, 3,2 --> true
1,2, 2,1 --> false
3,2, 3,2 --> false
1,2, 1,2 --> false
*/

const fit_in = (a, b, m, n) => a + b <= Math.max(m, n) && Math.max(a, b) <= Math.min(m, n);

console.log(fit(1,2,3,2)) // true
console.log(fit(1,2,2,1)) // false
console.log(fit(3,2,3,2)) // false
console.log(fit(1,2,1,2)) // false
console.log(fit(6,5,8,7)) // false