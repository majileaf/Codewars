/* The Span Function
The span function is a good one to know. It accepts a sequence and a predicate function and returns two sequences. 
The first sequence contains all the elements of the argument sequence up to the item that caused the first failure of 
the predicate. The second returned sequence contains the rest of the original sequence. The original sequence is not modified.

For example,

function isEven (x) {
  return Math.abs(x) % 2 === 0;
}

var arr = [2,4,6,1,8,10];

// This is true
span(arr, isEven) === [[2,4,6],[1,8,10]]

Your task is to...wait for it... write your own span function !!!

Hint/Challenge: If you have completed the takeWhile function and the dropWhile function, 
then you can solve this problem in one line!
*/

const span = (arr, predicate) => {
    const idx = arr.findIndex(e => !predicate(e));
    return idx !== -1 ? [arr.slice(0, idx), arr.slice(idx)] : [arr, []];
}

// Functions for use in tests
function isEven(x) {
  return Math.abs(x) % 2 === 0;
}

function isOdd(x) {
  return Math.abs(x) % 2 !== 0;
}

function tr() { return true; }

// should be defined
console.log(span([], tr)) // [[], []]

// should work when testing for even numbers
console.log(span([2,4,6,1,4,8], isEven)) // [[2,4,6], [1,4,8]]

// should work when the first element results in false
console.log(span([1,4,5,7,6], isEven)) // [[], [1,4,5,7,6]]

// should work when no element results in false
console.log(span([13,17,19,11,21], isOdd)) // [[13,17,19,11,21], []]