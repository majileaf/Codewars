/* Noonerize Me
Spoonerize... with numbers... numberize?... numboonerize?... noonerize? ...anyway! 
If you don't yet know what a spoonerism is and haven't yet tried my spoonerism kata, please do check it out first.

You will create a function which takes an array of two positive integers, spoonerizes them, and returns 
the positive difference between them as a single number or 0 if the numbers are equal:

[123, 456] = 423 - 156 = 267

Your code must test that all array items are numbers and return "invalid array" if it finds that either item is not a number. 
The provided array will always contain 2 elements.

When the inputs are valid, they will always be integers, no floats will be passed. However, you must take into account 
that the numbers will be of varying magnitude, between and within test cases.
*/

const noonerize = numbers => {
    if (numbers.some(e => !/\d/.test(e))) return 'invalid array';
    const [first, second] = [numbers[0], numbers[1]].map(e => String(e));
    return Math.abs((second[0] + first.slice(1)) - (first[0] + second.slice(1)));
}

console.log(noonerize([0, 0])) // 0
console.log(noonerize(['asd', 34])) // 'invalid array'
console.log(noonerize([34, 12])) // 18

console.log(noonerize([12, 34])) // 18
console.log(noonerize([55, 63])) // 12
console.log(noonerize([357, 579])) // 178
console.log(noonerize([1000000, 9999999])) // 7000001