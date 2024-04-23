/* Print count and numbers
Given a string of integers, count how many times that integer repeats itself, 
then return a string showing the count and the integer.

Example: countMe('1123') (count_me in Ruby)
Here 1 comes twice so <count><integer> will be "21"
then 2 comes once so <count><integer> will be "12"
then 3 comes once so <count><integer> will be "13"
hence output string will be "211213".

Similarly countMe('211213') will return '1221121113' (1 time 2, 2 times 1, 1 time 2, 1 time 1, 1 time 3)

Return "" for empty, nil or non numeric strings
*/

const countMe = data => {
  if (!data.length) return '';
  let [count, n] = [0, data[0]];
  let str = '';

  for (let i = 0; i < data.length; i++) {
      if (/[^\d]/.test(data[i])) return '';
      if (n !== data[i]) {
          str += `${count + n}`;
          n = data[i];
          count = 1;
      } else {
          count++;
      }
  }
  str += `${count + n}`;
  return str;
}

// alternatively:
// const countMe = data => {
//   if (/[^\d]/.test(data)) return '';
//   let count = 1;
//   let str = '';

//   for (let i = 1; i <= data.length; i++) {
//       if (data[i] !== data[i - 1]) {
//           str += count + data[i - 1];
//           count = 1;
//       } else {
//           count++;
//       }
//   }
//   return str;
// }

console.log(countMe('1123')) // '211213'
console.log(countMe('1')) // '11'
console.log(countMe('11')) // '21'
console.log(countMe('a')) // ''
console.log(countMe('a123')) // ''
console.log(countMe('21')) // '1211'
console.log(countMe('1211')) // '111221'
console.log(countMe('12322212223443')) // '111213321132132413'
console.log(countMe('')) // ''
console.log(countMe('123a')) // ''