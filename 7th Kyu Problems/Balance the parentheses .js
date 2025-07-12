/* Balance the parentheses 
Your job is to fix the parentheses so that all opening and closing parentheses (brackets) have matching counterparts. 
You will do this by appending parenthesis to the beginning or end of the string. The result should be of minimum length. 
Don't add unnecessary parenthesis.

The input will be a string of varying length, only containing '(' and/or ')'.

For example:
Input: ")("
Output: "()()"

Input: "))))(()("
Output: "(((())))(()())"

Enjoy!
*/

const fixParentheses = str => {
    let string = str;
    while (string.includes('()')) {
        string = string.replace(/\(\)/g, '');
    }

    const [left, right] = [...string].reduce(([l, r], n) => (n === '(' ? r++ : l++, [l, r]), [0, 0]);

    return '('.repeat(left) + str + ')'.repeat(right);
}

console.log(fixParentheses('')) // ''
console.log(fixParentheses(')()))()())')) // '(((()()))()())'
console.log(fixParentheses(')))()(())')) // '((()))()(())'
console.log(fixParentheses('(()')) // '(())'
console.log(fixParentheses('()))()))(')) // '((((()))()))()'
console.log(fixParentheses(')(()(')) // '()(()())'
console.log(fixParentheses(')(()')) // '()(())'
console.log(fixParentheses(')(()))))())(((())')) // '((((()(()))))())(((())))'
console.log(fixParentheses(')))')) // '((()))'
console.log(fixParentheses(')(())(()()((())')) // '()(())(()()((())))'
console.log(fixParentheses(')(()((()))')) // '()(()((())))'
console.log(fixParentheses('()((())')) // '()((()))'
console.log(fixParentheses('(()')) // '(())'
console.log(fixParentheses('))()()((((()(())))')) // '(())()()((((()(())))))'
console.log(fixParentheses('))(())')) // '(())(())'