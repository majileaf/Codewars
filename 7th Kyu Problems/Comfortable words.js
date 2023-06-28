/* Comfortable words
A comfortable word is a word which you can type always alternating the hand you type with 
(assuming you type using a QWERTY keyboard and use fingers as shown in the image below).

That being said, complete the function which receives a word and returns true if it's a 
comfortable word and false otherwise.

The word will always be a string consisting of only ascii letters from a to z.

To avoid problems with image availability, here's the lists of letters for each hand:

Left: q, w, e, r, t, a, s, d, f, g, z, x, c, v, b
Right: y, u, i, o, p, h, j, k, l, n, m
Examples
"yams"  -->  true
"test"  -->  false
*/

const comfortableWord = word => {
  let left = 'qwertasdfgzxcvb';
  let right = 'yuiophjklnm';

  return (left.includes(word[0])) 
      ? [...word].every((_, i) => i % 2 ? right.includes(word[i]) : left.includes(word[i]))
      : [...word].every((_, i) => i % 2 ? left.includes(word[i]) : right.includes(word[i]))
};

console.log(comfortableWord('yams')) // true
console.log(comfortableWord('test')) // false