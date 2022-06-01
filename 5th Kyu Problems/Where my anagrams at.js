/*
What is an anagram? Well, two words are anagrams of each other if they both 
contain the same letters. 

For example:
'abba' & 'baab' == true
'abba' & 'bbaa' == true
'abba' & 'abbba' == false
'abba' & 'abca' == false

Write a function that will find all the anagrams of a word from a list. 
You will be given two inputs a word and an array with words. 

You should return an array of all the anagrams or an empty array if there are none. 

For example:
anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']) => ['aabb', 'bbaa']
anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']) => ['carer', 'racer']
anagrams('laser', ['lazing', 'lazy',  'lacer']) => []

Note for Go
For Go: Empty string slice is expected when there are no anagrams found.
*/

// initial solution:
// const sorted = str => str.split('').sort().join('');

// const anagrams = (word, words) => {
//     const sortedWord = sorted(word);
//     return words.filter(e => sorted(e) === sortedWord);
// }

const count = str => str.split('').reduce((sum, n) => (sum[n] ? sum[n]++ : sum[n] = 1, sum), {});

const anagrams = (word, words) => {
    const countWord = count(word);

    return words.filter(e => {
        const letter = count(e)
        return Object.keys(letter).every(e => letter[e] === countWord[e]); 
    });
}

console.log(anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada'])) // ['aabb', 'bbaa']
console.log(anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer'])) // ['carer', 'racer']
console.log(anagrams('laser', ['lazing', 'lazy',  'lacer'])) // []