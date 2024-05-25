/* Only Duplicates
Given a string, remove any characters that are unique from the string.

Example:
input: "abccdefee"
output: "cceee"
*/

// initial solution:
// const onlyDuplicates = str => {
//     const count = [...str].reduce((sum, n) => (sum[n] = (sum[n] || 0) + 1, sum), {});
//     return [...str].map(e => count[e] > 1 ? e : '').join('');
// }

const onlyDuplicates = str => {
  const count = [...str].reduce((sum, n) => (sum[n] = (sum[n] || 0) + 1, sum), {});
  return [...str].filter(e => count[e] > 1).join('');
}

console.log(onlyDuplicates('abccdefee')) // 'cceee'
console.log(onlyDuplicates('hello')) // 'll'
console.log(onlyDuplicates('colloquial')) // 'ollol'
console.log(onlyDuplicates('foundersandcoders')) // 'ondersndoders'