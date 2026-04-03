/* How Many Lonely Letters?
Task

Write a function countLonelyLetters(text) that counts how many letters in a string are lonely.

A letter is lonely when:
    It appears exactly once in the whole string.
    Its alphabetical neighbors are both absent from the string.

For example:
    d is not lonely if c or e also appears somewhere in the text.
    m is lonely if l, m, and n are handled like this:
        m appears once
        l does not appear
        n does not appear

Rules
    Ignore letter case.
    Ignore all non-letter characters.
    Work only with English letters a-z.

Examples
countLonelyLetters("ad") // 2
countLonelyLetters("abc") // 0
countLonelyLetters("Hello, World!") // 3
countLonelyLetters("A-dA") // 1
countLonelyLetters("zz") // 0
*/

const countLonelyLetters = text => {
    text = text.toLowerCase();
    const count = [...text].reduce((sum, n) => (sum[n] = (sum[n] || 0) + 1, sum), {});

    return [...text].reduce((sum, _, i) => sum + (
                /[a-z]/.test(text[i]) && 
                count[text[i]] === 1 && 
                !count[String.fromCharCode(text[i].charCodeAt() + 1)] && 
                !count[String.fromCharCode(text[i].charCodeAt() - 1)]
            ), 0);
}

// should handle basic examples
console.log(countLonelyLetters("ad")) // 2
console.log(countLonelyLetters("abc")) // 0
console.log(countLonelyLetters("Hello, World!")) // 3
console.log(countLonelyLetters("A-dA")) // 1
console.log(countLonelyLetters("zz")) // 0

// should handle edge cases
console.log(countLonelyLetters("")) // 0
console.log(countLonelyLetters("123 !!!")) // 0
console.log(countLonelyLetters("bdfhj")) // 5
console.log(countLonelyLetters("a")) // 1
console.log(countLonelyLetters("z")) // 1

// should ignore case and non-letters
console.log(countLonelyLetters("Aa")) // 0
console.log(countLonelyLetters("B!d")) // 2
console.log(countLonelyLetters("C-c?e")) // 1