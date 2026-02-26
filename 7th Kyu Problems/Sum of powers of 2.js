/* Sum of powers of 2
Description
Given a number n, you should find a set of numbers for which the sum equals n. 
This set must consist exclusively of values that are a power of 2 (eg: 2^0 => 1, 2^1 => 2, 2^2 => 4, ...).

The function powers takes a single parameter, the number n, and should return an array of unique numbers.
Criteria

The function will always receive a valid input: any positive integer between 1 and the max integer value for your language 
(eg: for JavaScript this would be 9007199254740991 otherwise known as Number.MAX_SAFE_INTEGER).

The function should return an array of numbers that are a power of 2 (2^x = y).

Each member of the returned array should be unique. (eg: the valid answer for powers(2) is [2], not [1, 1])

Members should be sorted in ascending order (small -> large). (eg: the valid answer for powers(6) is [2, 4], not [4, 2])
*/

// return an array of numbers (that are a power of 2)
// for which the input "n" is the sum
const powers = n => {
    const arr = [];
    let i = 0;

    while (n > 0) {
        while (2 ** (i + 1) <= n) {
            i++;
        }
        arr.push(2 ** i)
        n = n - 2 ** i;
        i = 0;
    }
    return arr.sort((a, b) => a - b);
};

console.log(powers(1)) // [1]
console.log(powers(2)) // [2]
console.log(powers(6)) // [2, 4]

console.log(powers(14)) // [ 2, 4, 8 ]
console.log(powers(688)) // [ 16, 32, 128, 512 ]
console.log(powers(8197)) // [ 1, 4, 8192 ]
console.log(powers(1966)) // [ 2, 4, 8, 32, 128, 256, 512, 1024 ]
console.log(powers(9007199254740991)) // [ 1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048, 4096, 8192, 16384, 32768, 65536, 131072, 262144, 524288, 1048576, 2097152, 4194304, 8388608, 16777216, 33554432, 67108864, 134217728, 268435456, 536870912, 1073741824, 2147483648, 4294967296, 8589934592, 17179869184, 34359738368, 68719476736, 137438953472, 274877906944, 549755813888, 1099511627776, 2199023255552, 4398046511104, 8796093022208, 17592186044416, 35184372088832, 70368744177664, 140737488355328, 281474976710656, 562949953421312, 1125899906842624, 2251799813685248, 4503599627370496 ]