/* Changing letters
When provided with a String, capitalize all vowels

For example:
Input : "Hello World!"
Output : "HEllO WOrld!"

Note: Y is not a vowel in this kata.
*/

// initial solution:
// const swap = string => {
//     const vowels = ['a', 'e', 'i', 'o', 'u'];
//     return [...string].map(e => vowels.includes(e) ? e.toUpperCase() : e).join('');
// }

const swap = string => {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  return [...string].map(e => e === e.toLowerCase() && vowels.includes(e) ? e.toUpperCase() : e).join('');
}

console.log(swap("")) // ""
console.log(swap("   @@@")) // "   @@@"
console.log(swap("HelloWorld!")) // "HEllOWOrld!"
console.log(swap("Sunday")) // "SUndAy"
console.log(swap("Codewars")) // "COdEwArs"
console.log(swap("Monday")) // "MOndAy"
console.log(swap("Friday")) // "FrIdAy"
console.log(swap("abracadabra")) // "AbrAcAdAbrA"
console.log(swap("AbrAcAdAbrA")) // "AbrAcAdAbrA"
console.log(swap("ABRACADABRA")) // "ABRACADABRA"
console.log(swap("aBRaCaDaBRa")) // "ABRACADABRA"