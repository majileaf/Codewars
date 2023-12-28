/* Simple letter removal
In this Kata, you will be given a lower case string and your task will be 
to remove k characters from that string using the following rule:

- first remove all letter 'a', followed by letter 'b', then 'c', etc...
- remove the leftmost character first.

For example: 
solve('abracadabra', 1) = 'bracadabra' # remove the leftmost 'a'.
solve('abracadabra', 2) = 'brcadabra'  # remove 2 'a' from the left.
solve('abracadabra', 6) = 'rcdbr'      # remove 5 'a', remove 1 'b' 
solve('abracadabra', 8) = 'rdr'
solve('abracadabra',50) = ''
*/

const solve5 = (s, k) => {
    if (k >= s.length) return '';

    const count = [...s]
        .sort()
        .slice(0, k)
        .reduce((sum, n) => (sum[n] = (sum[n] || 0) + 1, sum), {});

    return [...s].map(e => count[e] && count[e] > 0 ? (count[e] -= 1, '') : e).join('');
}

// alternatively:
// const solve5 = (s, k) => [...s].sort().slice(0, k).reduce((sum, n) => sum.replace(n, ''), s);

console.log(solve('abracadabra', 1)) //'bracadabra'
console.log(solve('abracadabra', 2)) //'brcadabra'
console.log(solve('abracadabra', 6)) //'rcdbr'
console.log(solve('abracadabra', 8)) //'rdr'
console.log(solve('abracadabra', 50)) // ''