/* Indexed capitalization
Given a string and an array of integers representing indices, 
capitalize all letters at the given indices.

For example:
capitalize("abcdef",[1,2,5]) = "aBCdeF"
capitalize("abcdef",[1,2,5,100]) = "aBCdeF". There is no index 100.
The input will be a lowercase string with no spaces and an array of digits.
*/

// initial 
// const capitalize = (s, arr) => {
//     s = [...s];
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] < s.length) s[arr[i]] = s[arr[i]].toUpperCase();
//     }
//     return s.join('');
// }

const capitalize = (s, arr) => arr
    .reduce((sum, n) => (n < sum.length 
            ? sum[n] = sum[n].toUpperCase() 
            : sum
        , sum), [...s])
    .join('');

console.log(capitalize("abcdef",[1,2,5])) // 'aBCdeF'
console.log(capitalize("abcdef",[1,2,5,100])) // 'aBCdeF'
console.log(capitalize("codewars",[1,3,5,50])) // 'cOdEwArs'
console.log(capitalize("abracadabra",[2,6,9,10])) // 'abRacaDabRA'
console.log(capitalize("codewarriors",[5])) // 'codewArriors'
console.log(capitalize("indexinglessons",[0])) // 'Indexinglessons'