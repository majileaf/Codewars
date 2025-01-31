/* Count consonants
Complete the function that takes a string of English-language text and 
returns the number of consonants in the string.

Consonants are all letters used to write English excluding the 
vowels a, e, i, o, u.
*/

const consonantCount = str => {
  str = str.toLowerCase();
  const vowels = ['a', 'e', 'i', 'o', 'u'];

  return [...str].reduce((sum, n) => sum + (n >= 'a' && n <= 'z' && !vowels.includes(n)), 0);
}

console.log(consonantCount('')) // 0
console.log(consonantCount('aaaaa')) // 0
console.log(consonantCount('XaeiouX')) // 2
console.log(consonantCount('Bbbbb')) // 5
console.log(consonantCount('helLo world')) // 7
console.log(consonantCount('h^$&^#$&^elLo world')) // 7
console.log(consonantCount('0123456789')) // 0
console.log(consonantCount('012345_Cb')) // 2