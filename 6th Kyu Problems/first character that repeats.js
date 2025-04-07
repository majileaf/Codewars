/* first character that repeats
Find the first character that repeats in a String and return that character.

firstDup('tweet') => 't'
firstDup('like') => undefined

This is not the same as finding the character that repeats first. In that case, an input of 'tweet' would yield 'e'.

Another example:

In 'translator' you should return 't', not 'a'.

v      v  
translator
  ^   ^

While second 'a' appears before second 't', the first 't' is before the first 'a'.
*/

const firstDup = s => {
  const count = {};
  let lowest = Infinity;

  for (let i = 0; i < s.length; i++) {
      if (count[s[i]] !== undefined && count[s[i]] < lowest) lowest = count[s[i]];
      count[s[i]] = i;
  }
  return s[lowest];
}

console.log(firstDup('tweet')) // 't'
console.log(firstDup('Ode to Joy')) // ' '
console.log(firstDup('ode to joy')) // 'o'
console.log(firstDup('bar')) // undefined
console.log(firstDup('123123')) // '1'
console.log(firstDup('!@#$!@#$')) // '!'