/* Extra Perfect Numbers (Special Numbers Series #7)
Definition
An extra perfect number is a positive integer whose first and last bits in binary representation are set (i.e., both are 1).

Task
Given a positive integer N, return all the extra perfect numbers in the range from 1 to N, inclusive.

Notes
    The input is always a positive integer.
    The returned list/array should contain the extra perfect numbers in ascending order, from lowest to highest.
    Extra perfect numbers correspond to binary representations that start and end with 1.

Input >> Output Examples

extraPerfect(3)  ==>  return {1, 3}

Explanation:
    1 in binary is 1 → first and last bits are set.
    3 in binary is 11 → first and last bits are set.

extraPerfect(7)  ==>  return {1, 3, 5, 7}

Explanation:
    5 in binary is 101 → first and last bits are set.
    7 in binary is 111 → first and last bits are set.
*/

const extraPerfect = n => {
    const arr = [];
    for (let i = 1; i <= n; i += 2) {
        arr.push(i);
    }
    return arr;
}

console.log(extraPerfect(3)) // [1,3]
console.log(extraPerfect(5)) // [1,3,5]
console.log(extraPerfect(7)) // [1,3,5,7]
console.log(extraPerfect(28)) // [1,3,5,7,9,11,13,15,17,19,21,23,25,27]
console.log(extraPerfect(39)) // [1,3,5,7,9,11,13,15,17,19,21,23,25,27,29,31,33,35,37,39]