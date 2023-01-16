/* Exclamation marks series #13: Count the number of exclamation marks and question marks, return the product
Description:
Count the number of exclamation marks and question marks, return the product.

Examples
Product("") == 0
product("!") == 0
Product("!ab? ?") == 2
Product("!!") == 0
Product("!??") == 2
Product("!???") == 3
Product("!!!??") == 6
Product("!!!???") == 9
Product("!???!!") == 9
Product("!????!!!?") == 20
*/

// initial #1:
// const product = string => {
//     return [...string].filter(e => e === '!').length * [...string].filter(e => e === '?').length;
// }

// initial #2:
// const product = string => {
//     const [eMark, qMark] = [...string].reduce(([eMark, qMark], n) => (
//         n === '!' ? [eMark++, qMark] : 
//         n === '?' ? [eMark, qMark++] : 
//         [eMark, qMark], [eMark, qMark]), [0, 0]);
//     return eMark * qMark;
// }

const product = string => {
  let eMark = qMark = 0;
  for (let i = 0; i < string.length; i++) {
      if (string[i] === '!') eMark++
      else if (string[i] === '?') qMark++
  }
  return eMark * qMark;
}

console.log(product("")) // 0
console.log(product("!")) // 0
console.log(product("!!")) // 0
console.log(product("!??")) // 2
console.log(product("!???")) // 3
console.log(product("!!!??")) // 6
console.log(product("!!!???")) // 9
console.log(product("!???!!")) // 9
console.log(product("!ab? ?")) // 2
console.log(product("!????!!!?")) // 20