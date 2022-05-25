/*
You will be given a number and you will need to return it as a string in Expanded Form. For example:

expandedForm(12); // Should return '10 + 2'
expandedForm(42); // Should return '40 + 2'
expandedForm(70304); // Should return '70000 + 300 + 4'
NOTE: All numbers will be whole numbers greater than 0.
*/

const expandedForm = num => [...String(num)]
    .reduce((sum, n, i, arr) => (n != 0 && sum.push(n * 10 ** (arr.length - i - 1)), sum), [])
    .join(' + ');

console.log(expandedForm(12)) // '10 + 2'
console.log(expandedForm(42)) // '40 + 2'
console.log(expandedForm(70304)) // '70000 + 300 + 4'