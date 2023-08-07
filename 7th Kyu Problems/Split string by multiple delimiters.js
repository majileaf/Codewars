/* Split string by multiple delimiters
Your task is to write function which takes string and list of delimiters as an input and 
returns list of strings/characters after splitting given string.

Example:
multipleSplit('Hi, how are you?', [' ']) => ['Hi,', 'how', 'are', 'you?']
multipleSplit('1+2-3', ['+', '-']) => ['1', '2', '3']

List of delimiters is optional and can be empty, so take that into account.
Important note: Result cannot contain empty string.
*/

// initial solution:
// const multipleSplit = (string, delimiters) => {
//   if (delimiters === undefined && string === '') return [];
//   else if (delimiters === undefined) return [string];
//   else if (delimiters.length === 0) return [];

//   let arr = [];
//   let str = '';

//   for (let i = 0; i < string.length; i++) {
//       if (string[i] !== undefined && !delimiters.includes(string[i])) {
//           str += string[i];
//       } else {
//           if (str !== '') arr.push(str);
//           str = '';
//       }
//   }
//   if (str !== '') arr.push(str);

//   return arr;
// }

const multipleSplit = (string, delimiters = []) => {
  const arr = [];
  let str = '';

  for (let i = 0; i < string.length; i++) {
      if (!delimiters.includes(string[i])) {
          str += string[i];
      } else {
          str && arr.push(str);
          str = '';
      }
  }
  str && arr.push(str);

  return arr;
}

console.log(multipleSplit('Hi everybody!', [' ', '!'])) // ['Hi', 'everybody']
console.log(multipleSplit('(1+2)*6-3^9', ['+', '-', '(', ')', '^', '*'])) // ['1', '2', '6', '3', '9']
console.log(multipleSplit('Solve_this|kata-very\\quickly!', ['!', '|', '\\', '_', '-'])) // ['Solve', 'this', 'kata', 'very', 'quickly']