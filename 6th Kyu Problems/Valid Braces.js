/*
Write a function that takes a string of braces, and determines if the order of the 
braces is valid. It should return true if the string is valid, and false if it's 
invalid.

This Kata is similar to the Valid Parentheses Kata (https://www.codewars.com/kata/valid-parentheses),
but introduces new characters: brackets [], and curly braces {}. Thanks to @arnedag for the idea!

All input strings will be nonempty, and will only consist of parentheses, brackets and 
curly braces: ()[]{}.

What is considered Valid?
A string of braces is considered valid if all braces are matched with the correct brace.

Examples
"(){}[]"   =>  True
"([{}])"   =>  True
"(}"       =>  False
"[(])"     =>  False
"[({})](]" =>  False
*/

// initial solution:
// const validBraces = braces => {
//     const opposite = {
//         ')': '(', '(': false,
//         ']': '[', '[': false,
//         '}': '{', '{': false
//     };

//     return braces
//         .split('')
//         .reduce((sum, n) => ((sum[sum.length - 1] === opposite[n]) 
//             ? sum.pop() 
//             : sum.push(n), sum), [])
//         .length === 0;
// }

const validBraces = braces => {
    const opposite = {
        '(': ')',
        '[': ']',
        '{': '}'
    };

    return braces
        .split('')
        .reduce((sum, n) => ((n === opposite[sum[sum.length - 1]]) 
            ? sum.pop() 
            : sum.push(n), sum), [])
        .length === 0;
}

console.log(validBraces("()))")) // false
console.log(validBraces("()")) // true
console.log(validBraces("[]")) // true
console.log(validBraces("{}")) // true
console.log(validBraces("(){}[]")) // true
console.log(validBraces("([{}])")) // true
console.log(validBraces("(}")) // false
console.log(validBraces("[(])")) // false
console.log(validBraces("({})[({})]")) // true
console.log(validBraces("(})")) // false
console.log(validBraces("(({{[[]]}}))")) // true
console.log(validBraces("{}({})[]")) // true
console.log(validBraces(")(}{][")) // false
console.log(validBraces("())({}}{()][][")) // false
console.log(validBraces("(((({{")) // false
console.log(validBraces("}}]]))}])")) // false