/* Find the Combination
Your objective is to count how many times a certain word or combination of letters or symbols appears inside a string. 
The key is case insensitive and can occur as many or as few times in the string. 
The function declaration is provided for you and there should be two arguments with one return variable that returns the count. 
Overlapping words should not be counted more than once! An empty string cannot be a key. 
The function should also be able to count the number of integers and characters. Think hard!

Example:
countCombinations('my name is billy and billy is awesome', 'billy'); // 2
countCombinations('abcdefghijklmonopolymonorailqrstuv', 'mono'); // 2
countCombinations('GrEggreGGREGgREG', 'greg'); // 4
countCombinations('@#$##@@@','@'); // 4
countCombinations('wow nothing', 'yeah'); // 0
countCombinations('lololololol', 'lol'); // 3
countCombinations('93049', '\\d'); // 5
countCombinations('Five ', '\.'); // 5
*/

const countCombinations = (string, key) => (string.match(new RegExp(key, 'gi')) || []).length;

console.log(countCombinations('hellohellohello', 'hello')) // 3
console.log(countCombinations('jfdkeyoeld', 'key')) // 1
console.log(countCombinations('my name is hEctOrhector HECToR hectoRRRR', 'hector')) // 4
console.log(countCombinations('wowowowowow', 'wow')) // 3
console.log(countCombinations('     ', ' ')) // 5
console.log(countCombinations('!@$#*$@@#$!', '!')) // 2
console.log(countCombinations('This is a really long string with no intention of being short and a run on sentence is a run on sentence any way you look at it, split it, cut it, paste it, melt it, and beat it.', 'it')) // 8
console.log(countCombinations('Words are inside words that are on the outside of walls to the side of the bedside.', 'side')) // 4
console.log(countCombinations('Does this work krow?', 'work')) // 1

console.log(countCombinations('03948', '\\d')) // 5
console.log(countCombinations('Count t h e spaces ', '\\s')) // 5
console.log(countCombinations('How many characters?', '\.')) // 20

console.log(countCombinations('hi', 'bye')) // 0
console.log(countCombinations('', 'no')) // 0
console.log(countCombinations('', 'n')) // 0