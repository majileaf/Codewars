/* Valid Parentheses
Write a function that takes a string of parentheses, and determines if the order of the parentheses is valid. 
The function should return true if the string is valid, and false if it's invalid.
Examples

"()"              =>  true
")(()))"          =>  false
"("               =>  false
"(())((()())())"  =>  true

Constraints

0 <= length of input <= 100
    All inputs will be strings, consisting only of characters ( and ).
    Empty strings are considered balanced (and therefore valid), and will be tested.
    For languages with mutable strings, the inputs should not be mutated.


Protip: If you are trying to figure out why a string of parentheses is invalid, paste the parentheses into the code editor, 
and let the code highlighting show you!
*/

const validParentheses = parens => {
    let sum = 0;
    for (let i = 0; i < parens.length; i++) {
        if (parens[i] === '(') sum += 1;
        else if (parens[i] === ')') sum -= 1;
        if (sum < 0) return false;
    }
    return sum === 0;
}

// Should return true for valid parentheses
console.log(validParentheses("()")) // true
console.log(validParentheses("((()))")) // true
console.log(validParentheses("()()()")) // true
console.log(validParentheses("(()())()")) // true
console.log(validParentheses("()(())((()))(())()")) // true

// Should return false for invalid parentheses
console.log(validParentheses(")(")) // false
console.log(validParentheses("()()(")) // false
console.log(validParentheses("((())")) // false
console.log(validParentheses("())(()")) // false
console.log(validParentheses(")()")) // false
console.log(validParentheses(")")) // false

// Should return true for empty strings
console.log(validParentheses("")) // true