/* All Star Code Challenge #3
Create a function that takes a string argument and returns that same string 
with all vowels removed (vowels are "a", "e", "i", "o", "u").

Example (Input --> Output)
"drake" --> "drk"
"aeiou" --> ""

remove_vowels("drake") // => "drk"
remove_vowels("aeiou") // => ""
*/

const removeVowels = str => str.replace(/[aeiou]/g, '');

console.log(removeVowels("drake")) // "drk"
console.log(removeVowels("aeiou")) // ""