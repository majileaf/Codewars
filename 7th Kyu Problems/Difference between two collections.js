/* Difference between two collections
Find the difference between two collections. The difference means that either the character is present 
in one collection or it is present in other, but not in both. Return a sorted list with the difference.

The collections can contain any character and can contain duplicates.

Example
A = [a, a, t, e, f, i, j]

B = [t, g, g, i, k, f]

difference = [a, e, g, j, k]
*/

const diff = (a, b) => [...new Set([...a, ...b].filter(e => !a.includes(e) || !b.includes(e)))].sort();

// alternatively XOR:
// const diff = (a, b) => [...new Set([...a, ...b].filter(e => a.includes(e) ^ b.includes(e)))].sort();

// alternatively #2:
// const diff = (a, b) => {
//   const arr = [...new Set([...a, ...b])];
//   a = a.reduce((sum, n) => ((sum[n] = true), sum), {});
//   b = b.reduce((sum, n) => ((sum[n] = true), sum), {});

//   return arr.filter(e => a[e] !== b[e]).sort();
// }

// should return empty for the same content
console.log(diff(["a","b"], ["a","b"])) // []

// should return A if B is empty
console.log(diff(["a","b"], [])) // ["a","b"]

// should return B if A is empty
console.log(diff([], ["a","b"])) // ["a","b"]

// should return empty for the empty content
console.log(diff([], [])) // []

// should return the last character
console.log(diff(["a","b","z"], ["a","b"])) // ["z"]

// should return the sorted characteres
console.log(diff(["a","b","z","d","e","d"], ["a","b", "j","j"])) // ["d","e","j","z"]