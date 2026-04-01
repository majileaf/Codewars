/* Regex Series: Match All Except X
Regex is a powerful tool. You can easily match any word with /\w+/. But what if you want to exclude certain words?

Task
Write a regex pattern that will match any word except code and war, but still match words that are formed with them 
(e.g., codewars, barcode, beware, warfare, warm). This also means you can match codecode or warwar. 
Matches and non-matches should be case-insensitive.

For the purpose of this kata, a word is a combination of one or more word characters ([A-Za-z0-9_]). 
Which means, if a word contains non-word characters (e.g., t#!ree), your pattern should match them separately (e.g., ["t", "ree"]).

Your pattern will be tested as:

"some strings".match(/yourpattern/gi)

Input
Your pattern will only be tested against strings, which:
    have at least one character
    consist of word and/or non-word characters
    may contain "code" and "war"
    may contain word that is formed with "code" and/or "war"

Example
const regex = /yourpattern/gi

let sample1 = "Codewars is a great place to find a great code"
sample1.match(regex) // ["Codewars", "is", "a", "great", "place", "to", "find", "a", great"] 

let sample2 = "There are no sym!bols bet@ween us!"
sample2.match(regex) // ["There", "are", "no", "sym", "bols", "bet", "ween", "us"]

let sample3 = "Beware, a war impostor is among us"
sample3.match(regex) // ["Beware", "a", "impostor", "is", "among", "us"]

let sample4 = "A good coder shouldn't hide their code"
sample4.match(regex) // ["A", "good", "coder", "shouldn", "t", "hide", "their"]

Rules
You're only allowed to write a regex literal (eg., /somepattern/). 
Don't write any function, class, object, or modify any built-in ones. 
*/

const regex = /\b(?!code\b)(?!war\b)\w+/gi

console.log("Regex is my favorite tool".match(regex)) // ["Regex", "is", "my", "favorite", "tool"]
console.log("In JavaScript, You can write 1000 as 1_000, 10_00, 100_0, or 1_0_0_0".match(regex)) // ["In", "JavaScript", "You", "can", "write", "1000", "as", "1_000", "10_00", "100_0", "or", "1_0_0_0"]

// Should exclude non-word characters
console.log("There are no sym!bols bet@ween us!".match(regex)) // ["There", "are", "no", "sym", "bols", "bet", "ween", "us"]
console.log("What *(@$!) a *)(@:<) go|od {}}  d#ay }{:<!} to ))(@) practice".match(regex)) // ["What", "a", "go", "od", "d", "ay", "to", "practice" ]

// Should exclude 'code' and 'war'
console.log("Codewars is a great place to find a great code".match(regex)) // ["Codewars", "is", "a", "great", "place", "to", "find", "a", "great"]
console.log("Beware, a war impostor is hidden among us".match(regex)) // ["Beware", "a", "impostor", "is", "hidden", "among", "us"]
console.log("A good coder shouldn't hide their code".match(regex)) // ["A", "good", "coder", "shouldn", "t", "hide", "their"]
console.log("We can barely hold for another war".match(regex)) // ["We", "can", "barely", "hold", "for", "another"]

// Should match words that formed with 'code' or 'war'
console.log("Codewars is a great place to find a great code".match(regex)) // ["Codewars", "is", "a", "great", "place", "to", "find", "a", "great"]
console.log("Beware, a war impostor is hidden among us".match(regex)) // ["Beware", "a", "impostor", "is", "hidden", "among", "us"]
console.log("If you want to be a good coder, you should practice on Codewars".match(regex)) // ["If", "you", "want", "to", "be", "a", "good", "coder", "you", "should", "practice", "on", "Codewars"]