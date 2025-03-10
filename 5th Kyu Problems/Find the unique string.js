/* Find the unique string
There is an array of strings. All strings contains similar letters except one. Try to find it!

findUniq([ 'Aa', 'aaa', 'aaaaa', 'BbBb', 'Aaaa', 'AaAaAa', 'a' ]) === 'BbBb'
findUniq([ 'abc', 'acb', 'bac', 'foo', 'bca', 'cab', 'cba' ]) === 'foo'

Strings may contain spaces. Spaces are not significant, only non-spaces symbols matters. 
E.g. string that contains only spaces is like empty string.

It’s guaranteed that array contains more than 2 strings.
*/

const sortStr = str => [...new Set(str.toLowerCase())].sort((a, b) => a.localeCompare(b)).join('');
const findUniq = arr => {
    const [a, b, c] = arr.slice(0, 3).map(e => sortStr(e));
    if (a !== b && a !== c) return arr[0];

    for (let i = 0; i < arr.length - 1; i++) {
        if (sortStr(arr[i]) !== sortStr(arr[i + 1])) return arr[i + 1];
    }
}

console.log(findUniq([ 'Aa', 'aaa', 'aaaaa', 'BbBb', 'Aaaa', 'AaAaAa', 'a' ])) // 'BbBb'
console.log(findUniq([ 'abc', 'acb', 'bac', 'foo', 'bca', 'cab', 'cba' ])) // 'foo'
console.log(findUniq([ 'silvia', 'vasili', 'victor' ])) // 'victor'
console.log(findUniq([ 'Tom Marvolo Riddle', 'I am Lord Voldemort', 'Harry Potter' ])) // 'Harry Potter'
console.log(findUniq([ '    ', 'a', ' ' ])) // 'a'