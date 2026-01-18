/* Only one
Task: Write a function which returns True if ONLY ONE of the boolean flag is True, otherwise return False. 
If there are no boolean flag, return False

Input 	Expected Output
[] 	False
[True, False, False] 	True
[True, False, False, True] 	False
[False, False, False, False] 	False
*/

const onlyOne = (...arr) => arr.filter(Boolean).length === 1;

console.log(onlyOne()) // false
console.log(onlyOne(true, false)) // true
console.log(onlyOne(false, false, false)) // false
console.log(onlyOne(true, false, false, true)) // false