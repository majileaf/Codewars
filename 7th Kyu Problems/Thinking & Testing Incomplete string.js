/* Thinking & Testing : Incomplete string
No Story

No Description

Only by Thinking and Testing

Look at result of testcase, guess the code!
*/

const testit = s => (s
    .match(/.{1,2}/g) || [])
    .map(e => e.length > 1 
            ? String.fromCharCode((Math.abs(e.charCodeAt(0) + e.charCodeAt(1)) / 2)) 
            : e)
    .join('');

//return s ?
console.log(testit("")) // ""
console.log(testit("a")) // "a"
console.log(testit("b")) // "b"
//return s.substr(0,1) ?
console.log(testit("aa")) // "a"
console.log(testit("ab")) // "a"
console.log(testit("bc")) // "b"
//return s.substr(0,s.length/2) ?
console.log(testit("aaaa")) // "aa"
console.log(testit("aaaaaa")) // "aaa"

console.log(testit('abab')) // "aa"
console.log(testit('acac')) // "bb"
console.log(testit('hheelllloo')) // "hello"
console.log(testit('hheellllo')) // "hello"

console.log(testit('brgxcd')) // "joc"
console.log(testit('djlpdr')) // "gnk"
console.log(testit('xrovtpsv')) // "urrt"