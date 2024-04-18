/* Mobile Display Keystrokes
Do you remember the old mobile display keyboards? Do you also remember how inconvenient it was to write on it?
Well, here you have to calculate how many keystrokes you have to do for a specific word.

This is the layout:
https://raw.githubusercontent.com/zruF/CodewarsData/master/Mobile_phone_keyboard.svg.png

Given a string, return the number of keystrokes necessary to type it. You can assume that the input will entirely 
consist of characters included in the mobile layout (lowercase letters, digits, and the symbols * and #).

Examples
"*#"       =>  2 (1 + 1)
"123"      =>  3 (1 + 1 + 1)
"abc"      =>  9 (2 + 3 + 4)
"codewars" => 26 (4 + 4 + 2 + 3 + 2 + 2 + 4 + 5)
*/

const mobileKeyboard = str => {
  const keystrokes = ['123456789*0#', 'adgjmptw', 'behknqux', 'cfilorvy', 'sz'];
  const dict = keystrokes.reduce((sum, n, i) => ([...n].reduce((_, letter) => sum[letter] = i + 1, {}) , sum), {});
  return [...str].reduce((sum, n) => sum + dict[n], 0);
}

// alternatively:
// const mobileKeyboard = str => {
//   const dict = new Map([
//       ...[...'123456789*0#'].map(char => [char, 1]), 
//       ...[...'adgjmptw'].map(char => [char, 2]),
//       ...[...'behknqux'].map(char => [char, 3]),
//       ...[...'cfilorvy'].map(char => [char, 4]),
//       ...[...'sz'].map(char => [char, 5])
//   ])
//   return [...str].reduce((sum, n) => sum + dict.get(n), 0);
// }

console.log(mobileKeyboard("")) // 0
console.log(mobileKeyboard("123")) // 3
console.log(mobileKeyboard("codewars")) // 26
console.log(mobileKeyboard("zruf")) //16
console.log(mobileKeyboard("thisisasms")) // 37
console.log(mobileKeyboard("longwordwhichdontreallymakessense")) //107