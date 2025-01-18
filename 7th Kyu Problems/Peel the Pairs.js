/* Peel the Pairs
Given a string of numbers and a number n, peel away the pairs of digits that add up to n (starting from index 0). 
The numbers in the pair don't have to be adjacent to each other, but they should be paired with the closest digit 
to the right of them that sums to n.

Return the new string with those pairs removed.

peelPairs('14642', 3) => '464'
peelPairs('732374', 6) => '77' 
peelPairs('245638363', 10) => '53363'
*/

const peelPairs = (str, n) => {
    str = str.split('').map(Number);
    for (let i = 0; i <= str.length; i++) {
        for (let j = i + 1; j < str.length; j++) {
            if (str[i] + str[j] === n) {
                str[i] = '';
                str[j] = '';
            }
        }
    }
    return str.join('');
}

// alternatively:
// const peelPairs = (str, n) => {
//     str = str.split('').map(Number);
//     for (let i = 0; i <= str.length; i++) {
//         for (let j = i + 1; j < str.length; j++) {
//             if (str[i] + str[j] === n) {
//                 str.splice(j, 1);
//                 str.splice(i, 1);
//                 i--;
//             }
//         }
//     }
//     return str.join('');
// }

console.log(peelPairs('14642', 3)) // '464'
console.log(peelPairs('732374', 6)) // '77'
console.log(peelPairs('245638363', 10)) // '53363'