/* Longest alphabetical substring
Find the longest substring in alphabetical order.

Example: the longest alphabetical substring in "asdfaaaabbbbcttavvfffffdf" is "aaaabbbbctt".

There are tests with strings up to 10 000 characters long so your code will need to be efficient.

The input will only consist of lowercase characters and will be at least one letter long.

If there are multiple solutions, return the one that appears first.

Good luck :)
*/

const longest = str => {
    const res = [];
    let arr = [str[0]];

    for (let i = 1; i < str.length; i++) {
        if (str[i] >= str[i - 1]) arr.push(str[i]);
        else {
            res.push(arr.join(''));
            arr = [str[i]];
        }
    }
    res.push(arr.join(''));
    return res.sort((a, b) => b.length - a.length)[0];
}

console.log(longest('asd')) // 'as'
console.log(longest('nab')) // 'ab'
console.log(longest('abcdeapbcdef')) // 'abcde'
console.log(longest('asdfaaaabbbbcttavvfffffdf')) // 'aaaabbbbctt'
console.log(longest('asdfbyfgiklag')) // 'fgikl'
console.log(longest('z')) //, 'z'
console.log(longest('zyba')) // 'z'