/* Wordsearch
Create a function wordSearch(word,text) that searches to see whether a word word is present in the given text variable.

Note it has to be a full word which means it is surround by a word boundary 
(spaces, end/start of string, various punctuation, ... ).

Example:
Text - "what makes the desert beautiful, said the little prince is that somewhere it hides a well";

wordSearch("prince",text)--> true
wordSearch("beautiful",text)--> true
wordSearch("clown",text)--> false
wordSearch("yellow",text)--> false
wordSearch("akes the",text)--> false
*/

const wordSearch = (word, text) => {
    const searched = new RegExp(`\\b${word}\\b`);
    return searched.test(text);
}

const myText = "what makes the desert beautiful, said the little prince is that somewhere it hides a well";

console.log(wordSearch("desert",myText)) // true
console.log(wordSearch("blue",myText)) // false
console.log(wordSearch("well",myText)) // true
console.log(wordSearch("house",myText)) // false
console.log(wordSearch("beautiful",myText)) // true
console.log(wordSearch("prince",myText)) // true
console.log(wordSearch("le prince",myText)) // false