/* Non-even substrings
Given a string of integers, return the number of odd-numbered substrings that can be formed.

For example, in the case of "1341", they are 1, 1, 3, 13, 41, 341, 1341, a total of 7 numbers.

solve("1341") = 7. See test cases for more examples.

Good luck!
*/

const solve = s => {
    const arr = [];
    for (let i = 0; i < s.length; i++) {
        for (let j = i; j < s.length; j++) {
            const subStr = s.slice(i, j + 1);
            if (subStr.slice(-1) % 2 !== 0) arr.push(+subStr);
        }
    }
    return arr.length;
}

console.log(solve("1341")) // 7
console.log(solve("1357")) // 10
console.log(solve("13471")) // 12
console.log(solve("134721")) // 13
console.log(solve("1347231")) // 20
console.log(solve("13472315")) // 28