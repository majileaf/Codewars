/* Remove consecutive duplicate words
Your task is to remove all consecutive duplicate words from a string, leaving only 
first words entries. 

For example:
"alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta"
--> "alpha beta gamma delta alpha beta gamma delta"
*/

const removeConsecutiveDuplicates = s => s
    .split(' ')
    .reduce((sum, n) => (n === sum[sum.length - 1] ? sum : sum.push(n), sum), [])
    .join(' ')

console.log(removeConsecutiveDuplicates('alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta')) // 'alpha beta gamma delta alpha beta gamma delta'