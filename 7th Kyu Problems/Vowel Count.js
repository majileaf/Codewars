/*
Return the number (count) of vowels in the given string.
We will consider a, e, i, o, u as vowels for this Kata (but not y).
The input string will only consist of lower case letters and/or spaces.
*/

// initial solution:
// const getCount = str => str.split('').reduce((sum, n) => sum + ((n === 'a' || n === 'e' || n === 'i' || n === 'o' || n === 'u') ? 1 : 0), 0);

// improved:
const getCount = str => {
    const vowels = ['a','e','i','o','u'];
    return str.split('').reduce((sum, n) => sum + (vowels.includes(n) ? 1 : 0), 0);
}