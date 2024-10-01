/* Character Concatenation
Given a string, you progressively need to concatenate the first character from the left and 
the first character from the right and "1", then the second character from the left and 
the second character from the right and "2", and so on.

If the string's length is odd drop the central element.

For example:
charConcat("abcdef")    == 'af1be2cd3'
charConcat("abc!def")   == 'af1be2cd3' // same result
*/

// initial solution:
// const charConcat = string => {
//     let str = '';
//     for (let i = 0; i < Math.floor(string.length / 2); i++) {
//         str += `${string[i]}${string[string.length - 1 - i]}${i + 1}`;
//     }
//     return str;
// }

const charConcat = string => {
  let str = '';
  for (let i = 0, j = string.length - 1; i < Math.floor(string.length / 2); i++, j--) {
      str += string[i] + string[j] + (i + 1);
  }
  return str;
}

console.log(charConcat("abc def")) // 'af1be2cd3'
console.log(charConcat("CodeWars")) // 'Cs1or2da3eW4'