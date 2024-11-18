/* I'm everywhere!
Overview
Many people know that Apple uses the letter "i" in almost all of its devices to emphasize its personality.

And so John, a programmer at Apple, was given the task of making a program that would add that letter to every word. 
Let's help him do it, too.

Task:
Your task is to make a function that takes the value of word and returns it with an "i" at the beginning of the word. 
For example we get the word "Phone", so we must return "iPhone". 

But we have a few rules:
The word should not begin with the letter "I", for example Inspire.
The number of vowels should not be greater than or equal to the number of consonants, for example East or Peace. ("y" is considered a consonant)
The first letter should not be lowercase, for example road.
If the word does not meet the rules, we return "Invalid word".
*/

const i = word => {
  const count = [...word].reduce((sum, n) => sum + (/[aeiou]/i.test(n) ? 1 : -1), 0);
  return word[0] !== 'I' && count < 0 && word[0] !== word[0].toLowerCase() ? 'i' + word : 'Invalid word';
}

console.log(i('Phone'))      // 'iPhone'
console.log(i('World'))      // 'iWorld'
console.log(i('Human'))      // 'iHuman'
console.log(i('Programmer')) // 'iProgrammer'
console.log(i(''))           // 'Invalid word'
console.log(i('Inspire'))    // 'Invalid word'
console.log(i('East'))       // 'Invalid word'
console.log(i('Peace'))      // 'Invalid word'
console.log(i('road'))       // 'Invalid word'