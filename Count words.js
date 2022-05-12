/*
Can you implement a function that will return number of words in a string?

You have to ensure that spaces in string is a whitespace for real.

Let's take a look on some examples:
countWords("Hello"); // returns 1 as int
countWords("Hello, World!") // returns 2
countWords("No results for search term `s`") // returns 6
countWords(" Hello") // returns 1
// ... and so on

What kind of tests we made for your code:
1. Function have to count words and not spaces. You have to be sure that you doing it right
2. Empty string has no words.
3. String with spaces around should be trimmed.
4. Non-whitespace (ex. breakspace, unicode chars) should be treated as a delimiter
5. Doublecheck that words with chars like -, ', ` are counted right.
*/

const allowedChars = str => {
    const n = str.charCodeAt();
    return n > 96 && n < 123 || 
            n === 39 || 
            n === 45 || 
            n === 96 || 
            n > 47 && n < 58;
}

const countWords = str => {
    if (str === '') return 0;
    const strLC = str.toLowerCase();
    let count = 0;
    let currentWord = false;

    for (let i = 0; i < strLC.length; i++) {
        if (allowedChars(strLC[i]) && currentWord === false) {
            count += 1;
            currentWord = true;
        } else if (!allowedChars(strLC[i])) {
            currentWord = false;
        }
    }
    return count;
}

console.log(countWords("Hello")) // 1
console.log(countWords("Hello, World!")) // 2
console.log(countWords("Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.")) // 19
console.log(countWords("")) // 0
console.log(countWords("With! Symbol@ #Around! (Every) %Word$")) // 5
console.log(countWords("Dear   Victoria, I love  to press   space button.")) // 8
console.log(countWords(" Arthur ")) // 1
console.log(countWords(" David")) // 1
console.log(countWords("Nelson ")) // 1
console.log(countWords("  Hello Gomer  ")) // 2
console.log(countWords("  Hello     Bart  ")) // 2
console.log(countWords("﻿Hello﻿World ")) // 2
console.log(countWords("Hello﻿World")) // 2
console.log(countWords("I'm")) // 1
console.log(countWords("I'm asd-asd")) // 2
console.log(countWords("`asd` `dsa`")) // 2
console.log(countWords("@a")) // 1
console.log(countWords("5imja aypdu 00rj8 8h4bk        d37b8    m1vc7                hrj4p                            mcxaa            xjjg                     9gac                           p0xzm        4ggyr                 9mq6b           ev063                      olt45        c2e8r                  k7hb                             ouzi          fwftp     4fslc         n746            cxgte          ujzjaj         p8brs                             9ek3o            l5bg                         ts84n             3dz6o          51v1u                     slleo                f8m68       9jzod                             sm6fs      n4dd4                  g1vl                            zb5w                  e2dij    a63bl                        b1hc                  ghgvi                 9nuni                      vtkbc                   9py6t  3h74")); // 44