/*
Your task is to add up letters to one letter.

The function will be given a variable amount of arguments, 
each one being a letter to add.

Notes:
Letters will always be lowercase.
Letters can overflow (see second to last example of the description)
If no letters are given, the function should return 'z'

Examples:
addLetters('a', 'b', 'c') = 'f'
addLetters('a', 'b') = 'c'
addLetters('z') = 'z'
addLetters('z', 'a') = 'a'
addLetters('y', 'c', 'b') = 'd' // notice the letters overflowing
addLetters() = 'z'

Confused? Roll your mouse/tap over here
"Start by converting the letters to numbers, a => 1, b => 2, etc. 
Add them up. Think about the overflow yourself. Once that's done, 
convert it back to a letter."
*/

const addLetters = (...letters) => String
    .fromCharCode((letters.reduce((sum, n) => sum + (n.charCodeAt() - 96), 0) % 26 || 26) + 96);

console.log(addLetters(['a', 'b', 'c'])) // 'f'
console.log(addLetters(['z'])) // 'z'
console.log(addLetters(['a', 'b'])) // 'c'
console.log(addLetters(['c'])) // 'c'
console.log(addLetters(['z', 'a'])) // 'a'
console.log(addLetters(['y', 'c', 'b'])) // 'd'
console.log(addLetters([])) // 'z'