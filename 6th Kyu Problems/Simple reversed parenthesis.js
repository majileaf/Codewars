/* Simple reversed parenthesis
Given a string, return the minimum number of parenthesis reversals needed to make the parentheses balanced.

For example:
solve(")(") = 2 // Reverse ")" to "(" and "(" to ")". These are 2 reversals.
solve("(((())") = 1 // Reverse one "(" to ")" to make the string balanced.
solve("(((") = -1 // It is not possible to form balanced parentheses, so return -1.

Each character will be either ( or ).

More examples in the test cases.

Good luck.
*/

const solve = s => {
    if (s.length % 2 !== 0) return -1;

    while (s.match(/\(\)/g) !== null) {
        s = s.replace(/\(\)/g, '');
    }

    let count = 0;
    for (let i = 0; i < s.length; i += 2) {
        (s.slice(i, i + 2) === ')(') ? count += 2 : count++;
    }

    return count;
}

console.log(solve(")()(")) // 2
console.log(solve("((()")) // 1
console.log(solve("(((")) // -1
console.log(solve("())(((")) // 3
console.log(solve("())()))))()()(")) // 4