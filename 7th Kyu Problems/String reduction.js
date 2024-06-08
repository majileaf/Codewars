/* String reduction
In this Kata, we are going to see how a Hash (or Map or dict) can be used to keep track of characters in a string.

Consider two strings "aabcdefg" and "fbd". How many characters do we have to remove from the first string to get 
the second string? Although not the only way to solve this, we could create a Hash of counts for each string and 
see which character counts are different. That should get us close to the answer. I will leave the rest to you.

For this example, solve("aabcdefg","fbd") = 5. Also, solve("xyz","yxxz") = 0, because we cannot get second string 
from the first since the second string is longer.
*/

const hashCount = str => [...str].reduce((sum, n) => (sum[n] = (sum[n] || 0) + 1, sum), {});
const solve = (a, b) => {
    const countA = hashCount(a);
    const countB = hashCount(b);

    return Object.keys(countB).every(e => countA[e] >= countB[e]) 
        ? Object.keys(countA).reduce((sum, n) => sum + countA[n] - (countB[n] || 0), 0) 
        : 0;
}

console.log(solve("xyz","yxz")) // 0
console.log(solve("abcxyz","ayxz")) // 2
console.log(solve("abcdexyz","yxz")) // 5
console.log(solve("axyyz","yxxz")) // 0
console.log(solve("abdegfg","ffdb")) // 0
console.log(solve("aabcdefg","fbd")) // 5
console.log(solve("aabcdefg","fdb")) // 5