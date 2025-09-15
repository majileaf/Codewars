/* Vowel Shifting
You get a text and have to shift the vowels by n positions to the right. (Negative value for n should shift to the left.)

Position means the vowel's position if taken as one item in a list of all vowels within the string.

A shift by 1 would mean, that every vowel shifts to the place of the next vowel.

Shifting over the edges of the text should continue at the other edge.

Vowels are "aeiou" / "AEIOU".

If text is null or empty, then simply return back the original text.

Example:
text = "This is a test!"
n = 1
output = "Thes is i tast!"

text = "This is a test!"
n = 3
output = "This as e tist!"
*/

// const vowelShift = (text, n) => {
//     if (!n || !text || text === null) return text;
//     const vowels = text.match(/[aeiou]/gi);
//     text = [...text];

//     for (let i = 0, j = 0; i < text.length; i++) {
//         if (/[aeiou]/i.test(text[i])) {
//             text[i] = vowels[(vowels.length + (j - n % vowels.length)) % vowels.length];
//             j++;
//         }
//     }
//     return text.join('');
// }

// using below
// const vowelShift = (text, n) => {
//     if (!text) return text;
//     const vowels = text.match(/[aeiou]/gi);
//     text = [...text];

//     for (let i = 0, j = 0; i < text.length; i++) {
//         if (/[aeiou]/i.test(text[i])) {
//             text[i] = vowels[(vowels.length + (j - n % vowels.length)) % vowels.length];
//             j++;
//         }
//     }
//     return text.join('');
// }

// #important: using .replace to iterate through vowels, arr.shift to get element from array, also text === null not needed
// 0lexa
// const vowelShift = (text, n) => {
//   if (!text) return text;
//   let arr = text.match(/[aeiou]/gi) || [];
//   arr = arr.slice(-n % arr.length).concat(arr.slice(0, -n % arr.length));
//   return text.replace(/[aeuio]/gi, _ => arr.shift());
// };

// Olegeant
// const vowelShift = (text, n) => {
//   if (!text) return text;
  
//   const vowels = text.match(/[aeiou]/gi) || [];
//   const vLen = vowels.length;
  
//   let index = -n % vLen + vLen;
//   return text.replace(/[aeiou]/gi, () => vowels[index++ % vLen]);
// }

// using above
const vowelShift = (text, n) => {
    if (!text) return text;
    const vowels = text.match(/[aeiou]/gi);
    let j = 0;

    return text.replace(/[aeiou]/gi, vowel => vowels[(vowels.length + (j++ - n % vowels.length)) % vowels.length]);
}

console.log(vowelShift(null, 0)) // null
console.log(vowelShift("", 0), ) // ""
console.log(vowelShift("This is a test!", 0)) // "This is a test!"
console.log(vowelShift("This is a test!", 1)) // "Thes is i tast!"
console.log(vowelShift("This is a test!", 3)) // "This as e tist!"
console.log(vowelShift("This is a test!", 4)) // "This is a test!"
console.log(vowelShift("This is a test!", -1)) // "This as e tist!"
console.log(vowelShift("This is a test!", -5)) // "This as e tist!"