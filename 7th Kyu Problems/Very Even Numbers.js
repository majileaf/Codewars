/* "Very Even" Numbers.
Task
Write a function that returns true if the number is a "Very Even" number.
If a number is a single digit, then it is simply "Very Even" if it itself is even.
If it has 2 or more digits, it is "Very Even" if the sum of its digits is "Very Even".

Examples
number = 88 => returns false -> 8 + 8 = 16 -> 1 + 6 = 7 => 7 is odd 
number = 222 => returns true -> 2 + 2 + 2 = 6 => 6 is even
number = 5 => returns false
number = 841 => returns true -> 8 + 4 + 1 = 13 -> 1 + 3 => 4 is even

Note: The numbers will always be 0 or positive integers!
*/

const isVeryEvenNumber = n => n < 10 
    ? n % 2 === 0 
    : isVeryEvenNumber([...String(n)].reduce((sum, n) => sum + Number(n), 0));

console.log(isVeryEvenNumber(0)) // true
console.log(isVeryEvenNumber(4)) // true
console.log(isVeryEvenNumber(12)) // false
console.log(isVeryEvenNumber(222)) // true
console.log(isVeryEvenNumber(5)) // false
console.log(isVeryEvenNumber(45)) // false
console.log(isVeryEvenNumber(4554)) // false
console.log(isVeryEvenNumber(1234)) // false
console.log(isVeryEvenNumber(88)) // false
console.log(isVeryEvenNumber(24)) // true
console.log(isVeryEvenNumber(400000220)) // true