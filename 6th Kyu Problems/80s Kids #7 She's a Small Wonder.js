/* 80's Kids #7: She's a Small Wonder
Description:

Vicky is quite the small wonder. Most people don't even realize she's not a real girl, but a robot living amongst us. 
Sure, if you stick around her home for a while you might see her creator open up her back and make a few tweaks and 
even see her recharge in the closet instead of sleeping in a bed.

In this kata, we're going to help Vicky keep track of the words she's learning.

Write a function, learnWord(word) ( LearnWord(word) in C# ) which is a method of the Robot object. 
The function should report back whether the word is now stored, or if she already knew the word.

Example:
var vicky = new Robot();
vicky.learnWord('hello') -> 'Thank you for teaching me hello'
vicky.learnWord('abc') -> 'Thank you for teaching me abc'
vicky.learnWord('hello') -> 'I already know the word hello'
vicky.learnWord('wow!') -> 'I do not understand the input'

Case shouldn't matter. Only alpha characters are valid. There's also a little trick here. Enjoy!
*/

class Robot {
    constructor() {
        this.map = {'i': true,
                    'already': true,
                    'know': true,
                    'the': true,
                    'word': true,
                    'thank': true,
                    'you': true,
                    'for': true,
                    'teaching': true,
                    'me': true,
                    'do': true,
                    'not': true,
                    'understand': true,
                    'input': true
                    };
    }
    learnWord(word) {
        if (!(/^[a-z]+$/i.test(word))) return 'I do not understand the input';
        if (this.map[word.toLowerCase()]) return `I already know the word ${word}`;
        else {
            this.map[word.toLowerCase()] = true;
            return `Thank you for teaching me ${word}`;
        }
    }
}

let vicky = new Robot()
console.log(vicky.learnWord('hello')) // 'Thank you for teaching me hello'
console.log(vicky.learnWord('world')) // 'Thank you for teaching me world'
console.log(vicky.learnWord('goodbye')) // 'Thank you for teaching me goodbye'
console.log(vicky.learnWord('world')) // 'I already know the word world'
console.log(vicky.learnWord('World')) // 'I already know the word World'

console.log(vicky.learnWord('a whole bunch of words')) // 'I do not understand the input'
console.log(vicky.learnWord(' ')) // 'I do not understand the input'
console.log(vicky.learnWord('')) // 'I do not understand the input'
console.log(vicky.learnWord('wow!')) // 'I do not understand the input'
console.log(vicky.learnWord('thank')) // 'I already know the word thank'