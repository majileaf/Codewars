/* Every possible sum of two digits
Given a long number, return all the possible sum of two digits of it.

For example, 12345: all possible sum of two digits from that number are:

[ 1 + 2, 1 + 3, 1 + 4, 1 + 5, 2 + 3, 2 + 4, 2 + 5, 3 + 4, 3 + 5, 4 + 5 ]
Therefore the result must be:

[ 3, 4, 5, 6, 5, 6, 7, 7, 8, 9 ]
*/

const digits = num => {
    let arr = [];
    num = String(num);

    for (let i = 0; i < num.length; i++) {
        for (let j = i + 1; j < num.length; j++) {
            arr.push(+num[i] + +num[j]);
        }
    }

    return arr;
}

console.log(digits(156)) // [ 6, 7, 11 ]
console.log(digits(81596)) // [ 9, 13, 17, 14, 6, 10, 7, 14, 11, 15 ]
console.log(digits(3852)) // [ 11, 8, 5, 13, 10, 7 ]
console.log(digits(3264128)) // [ 5, 9, 7, 4, 5, 11, 8, 6, 3, 4, 10, 10, 7, 8, 14, 5, 6, 12, 3, 9, 10 ]
console.log(digits(999999)) // [ 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18 ]