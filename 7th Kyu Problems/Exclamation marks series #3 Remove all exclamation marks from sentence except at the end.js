/* Exclamation marks series #3: Remove all exclamation marks from sentence except at the end
Description:
Remove all exclamation marks from sentence except at the end.

Examples
"Hi!"     ---> "Hi!"
"Hi!!!"   ---> "Hi!!!"
"!Hi"     ---> "Hi"
"!Hi!"    ---> "Hi!"
"Hi! Hi!" ---> "Hi Hi!"
"Hi"      ---> "Hi"
*/

const remove = string => {
  const removed = string.split('!');
  const n = removed.length - removed.findLastIndex(e => e !== '') - 1;
  return removed.join('') + '!'.repeat(n);
}

// alternatively in regex:
// const remove = s => s.replace(/!+(?!!*$)/g, ``);

console.log(remove("Hi!")) // "Hi!"
console.log(remove("Hi!!!")) // "Hi!!!"
console.log(remove("!Hi")) // "Hi"
console.log(remove("!Hi!")) // "Hi!"
console.log(remove("Hi! Hi!")) // "Hi Hi!"
console.log(remove("Hi")) // "Hi"