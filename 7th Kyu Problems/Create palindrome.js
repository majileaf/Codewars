/* Create palindrome
Consider the string "adfa" and the following rules:

a) each character MUST be changed either to the one before or the one after in alphabet. 
b) "a" can only be changed to "b" and "z" to "y". 

From our string, we get:

"adfa" -> ["begb","beeb","bcgb","bceb"]

Here is another example: 
"bd" -> ["ae","ac","ce","cc"]

--We see that in each example, one of the outcomes is a palindrome. That is, "beeb" and "cc".

You will be given a lowercase string and your task is to return True if at least one of the outcomes 
is a palindrome or False otherwise.

More examples in test cases. Good luck!
*/

const nextLetter = 'bcdefghijklmnopqrstuvwxyzy';
const prevLetter = 'babcdefghijklmnopqrstuvwxy';
const getIdx = str => str.charCodeAt() - 97;

const solve = s => {
    for (let i = 0; i <= s.length / 2 - 1; i++) {
        if (nextLetter[getIdx(s[i])] !== nextLetter[getIdx(s[s.length - 1 - i])] &&
            nextLetter[getIdx(s[i])] !== prevLetter[getIdx(s[s.length - 1 - i])] &&
            prevLetter[getIdx(s[i])] !== nextLetter[getIdx(s[s.length - 1 - i])] &&
            prevLetter[getIdx(s[i])] !== prevLetter[getIdx(s[s.length - 1 - i])]) return false;
    }
    return true;
}

console.log(solve("abba")) // true
console.log(solve("abaazaba")) // false
console.log(solve("abccba")) // true
console.log(solve("adfa")) // true
console.log(solve("ae")) // false
console.log(solve("abzy")) // false
console.log(solve("ababbaba")) // true
console.log(solve("sq")) // true
console.log(solve("kxbkwgyydkcbtjcosgikfdyhuuprubpwthgflucpyylbofvqxkkvqthmdnywpaunfihvupbwpruwfybdmgeuocltdaidyyewmbzm")) // true