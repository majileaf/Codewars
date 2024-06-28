/* esrever esreveR!
In this kata you must take an input string, reverse the order of the words, and reverse the order of the letters within the words.
But, as a bonus, every test input will end with a punctuation mark (! ? .) and the output should be returned with the mark at the end.

A few examples should help clarify:
esrever("hello world.") == "dlrow olleh."
esrever("Much l33t?") == "t33l hcuM?"
esrever("tacocat!") == "tacocat!"

Quick Note: A string will always be passed in (though it may be empty) so no need for error-checking other types.
*/

const esrever = str => {
  if (!str.length) return '';
  const arr = str.split('');
  const puncMark = arr.pop();
  return arr.reverse().join('').concat(puncMark);
}

// alternatively:
// const esrever = str => str.slice(0, -1).split('').reverse().join('') + str.slice(-1);

console.log(esrever('an Easy one?')) // 'eno ysaE na?'
console.log(esrever('a small lOan OF 1,000,000 $!')) // '$ 000,000,1 FO naOl llams a!'
console.log(esrever('<?> &!.".')) // '".!& >?<.'
console.log(esrever('b3tTer p4ss thIS 0ne.')) // 'en0 SIht ss4p reTt3b.'
console.log(esrever('')) // ''