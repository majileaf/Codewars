/* The takeWhile Function
Here's another staple for the functional programmer. You have a sequence of values and some predicate for those values. 
You want to get the longest prefix of elements such that the predicate is true for each element. 
We'll call this the takeWhile function. It accepts two arguments. The first is the sequence of values, 
and the second is the predicate function. The function does not change the value of the original sequence.

Example:
sequence : [2,4,6,8,1,2,5,4,3,2]
predicate: is an even number
result   : [2,4,6,8]

Your task is to implement the takeWhile function.

If you've got a span function lying around, this is a one-liner! Also, if you liked this problem, 
you'll surely love the dropWhile function.
*/

const takeWhile = (arr, pred) => {
    const idx = arr.findIndex(e => !pred(e));
    return idx !== -1 ? arr.slice(0, idx) : arr;
}

function isEven(num) {
  return num % 2 === 0;
}

function isOdd(num) {
  return num % 2 !== 0;
}

console.log(takeWhile([], isEven)) // []

console.log(takeWhile([2,6,4,10,1,5,4,3], isEven)) // [2,6,4,10]
console.log(takeWhile([2,100,1000,10000,5,3,4,6], isEven)) // [2,100,1000,10000]
console.log(takeWhile([998,996,12,-1000,200,0,1,1,1], isEven)) // [998,996,12,-1000,200,0]
console.log(takeWhile([1,4,2,3,5,4,5,6,7], isEven)) // []
console.log(takeWhile([2,4,10,100,64,78,92], isEven)) // [2,4,10,100,64,78,92]

console.log(takeWhile([1,5,111,1111,2,4,6,4,5], isOdd)) // [1,5,111,1111]
console.log(takeWhile([-1,-5,127,86,902,2,1], isOdd)) // [-1,-5,127]
console.log(takeWhile([2,1,2,4,3,5,4,6,7,8,9,0], isOdd)) // []
console.log(takeWhile([1,3,5,7,9,111], isOdd)) // [1,3,5,7,9,111]