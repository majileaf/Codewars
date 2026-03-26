/* Make every letter after X into caps. 
Imagine a book author has hired us to create a function that takes his book as a string as input and finds all instances of a letter that we will call 'x' (case-sensitive) and turns all the letters after 'x' into a capital letter.

For example.

makeEveryLetterAfterXCaps('and larry walked into the park late to chase a squirrel', 'l')

Should return:

"and lArry walKed into the park lAte to chase a squirrel"

If the letter after x is already in caps it should stay in caps.

Note that the swapping occurs considering the modified string, so makeEveryLetterAfterXCaps('aaaa', 'a') will result into "aAaA"
*/

const makeEveryLetterAfterXCaps = (str, letter) => {
    str = str.split('')
    for (let i = 1; i < str.length; i++) {
        if (str[i - 1] === letter) str[i] = str[i].toUpperCase();
    }
    return str.join('');
}

console.log(makeEveryLetterAfterXCaps('bac', 'a')) // 'baC'
console.log(makeEveryLetterAfterXCaps('and the cow jumped over the moon', 'n')) // 'anD the cow jumped over the moon'
console.log(makeEveryLetterAfterXCaps('where are they now', ' ')) // 'where Are They Now'
console.log(makeEveryLetterAfterXCaps('aaaa', 'a')) // "aAaA"