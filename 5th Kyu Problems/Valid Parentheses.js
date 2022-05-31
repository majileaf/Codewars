/*
Write a function that takes a string of parentheses, 
and determines if the order of the parentheses is valid. 

The function should return true if the string is valid, 
and false if it's invalid.

Examples
"()"              =>  true
")(()))"          =>  false
"("               =>  false
"(())((()())())"  =>  true

Constraints
0 <= input.length <= 100
*/

// initial solution:
// const opposite = {')': '('};

// const validParentheses = parens => {
//     let arr = parens.split('');
//     let i = 0;

//     while (i < arr.length && arr.length !== 0) {
//         console.log('0', arr, i);
//         (arr[i] === opposite[arr[i + 1]]) ? (arr.splice(i, 2), i <= 0 ? i = 0 : i--) : i++;
//     }
//     return arr.length === 0;
// }

const validParentheses = parens => {
    const opposite = {')': '(', '(': false};
    return parens
        .split('')
        .reduce((sum, n) => ((sum[sum.length - 1] === opposite[n]) ? sum.pop() : sum.push(n), sum), [])
        .length === 0;
}

console.log(validParentheses( "(" )) // false
console.log(validParentheses( ")" )) // false
console.log(validParentheses( "" )) // true
console.log(validParentheses( "()" )) // true
console.log(validParentheses( "())" )) // false