/* All Inclusive?
Input:
a string strng
an array of strings arr

Output of function contain_all_rots(strng, arr) (or containAllRots or contain-all-rots):
a boolean true if all rotations of strng are included in arr
false otherwise

Examples:
contain_all_rots(
  "bsjq", ["bsjq", "qbsj", "sjqb", "twZNsslC", "jqbs"]) -> true

contain_all_rots(
  "Ajylvpy", ["Ajylvpy", "ylvpyAj", "jylvpyA", "lvpyAjy", "pyAjylv", "vpyAjyl", "ipywee"]) -> false)

Note:
Though not correct in a mathematical sense
we will consider that there are no rotations of strng == ""
and for any array arr: contain_all_rots("", arr) --> true

Ref: https://en.wikipedia.org/wiki/String_(computer_science)#Rotations
*/

// initial solution:
// const containAllRots = (strng, arr) => strng ? createRot(strng).every(e => arr.includes(e)) : true;
// const createRot = str => {
//     let arr = [str];
//     str = [...str];

//     for (let i = 0; i < str.length - 1; i++) {
//         str.push(str.shift());
//         arr.push(str.join(''));
//     }
//     return arr;
// }

const containAllRots = (strng, arr) => [...strng].map((_, i) => strng.slice(i) + strng.slice(0, i)).every(e => arr.includes(e));

console.log(containAllRots("", [])) // true
console.log(containAllRots("", ["bsjq", "qbsj"])) // true
console.log(containAllRots("bsjq", ["bsjq", "qbsj", "sjqb", "twZNsslC", "jqbs"])) // true
console.log(containAllRots("XjYABhR", ["TzYxlgfnhf", "yqVAuoLjMLy", "BhRXjYA", "YABhRXj", "hRXjYAB", "jYABhRX", "XjYABhR", "ABhRXjY"])) // false