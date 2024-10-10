/* Makes the Sentence
You are to write a function that is passed 2 arguments and should return a boolean true or false.
The first argument is an array of characters, where each index will contain either a lowercase character from a-z, 
an uppercase characters from A-Z, or one of the charcters '.', '?', or '!'.

An example array is: ['D', 'u', 'c', 'k', 's', 'q', 'u', 'a', 'c', 'k', '.']
The second argument passed to your function is a string that is a grammatically correct complete English sentence composed of 
only the charcters a-z, A-Z, '.', '?', '!', and white spaces.

An example string is: "Ducks quack."
Your function should return true if the sentence string can be constructed using only the characters in the array passed in 
(each character can only be used once) and any amout of needed white spaces, otherwise it should return false.

Since each character can only be used once, the count of each character in the passed in character array should match the count of 
each character in the passed in sentence string so:

makesTheSentence(['S', 'h', 'e', 'a', 'd', 's', '.'], "She adds.");
Should return false because there is only 1 'd' in the passed in array and there are 2 'd's in the passed in string.
*/

// intital solution:
// const makesTheSentence = (characterArray, sentenceString) => characterArray.sort().join('') === [...sentenceString.replace(/\s/g, '')].sort().join('');

const makesTheSentence = (characterArray, sentenceString) => {
    const dic = characterArray.reduce((sum, n) => (sum[n] = (sum[n] || 0) + 1, sum), {});
    for (let i = 0; i < sentenceString.length; i++) {
        if (dic[sentenceString[i]]) {
            dic[sentenceString[i]]--;
        } else if (sentenceString[i] === ' ') {
            continue;
        } else {
            return false;
        }
    }
    return Object.values(dic).every(e => e === 0);
}

console.log(makesTheSentence(['D', 'u', 'c', 'k', 's', 'q', 'u', 'a', 'c', 'k', '.'], "Ducks quack.")) // true
console.log(makesTheSentence(['S', 'h', 'e', 'a', 'd', 's', '.'], "She adds.")) // false
console.log(makesTheSentence(['a', 'a'], 'a')) // false