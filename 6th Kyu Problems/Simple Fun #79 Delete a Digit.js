/* Simple Fun #79: Delete a Digit
Task
Given an integer n, find the maximal number you can obtain by deleting exactly one digit of the given number.

Example
For n = 152, the output should be 52;

For n = 1001, the output should be 101.

Input/Output
    [input] integer n
    Constraints: 10 ≤ n ≤ 1000000.
    [output] an integer
*/

const deleteDigit = n => {
    n = [...String(n)];
    let max = 0;

    for (let i = 0; i < n.length; i++) {
        let m = n.slice();
        m[i] = '';
        m = +m.join('');
        if (max < m) max = m;
    }
    return max;
}

console.log(deleteDigit(152)) // 52
console.log(deleteDigit(1001)) // 101
console.log(deleteDigit(10)) // 1