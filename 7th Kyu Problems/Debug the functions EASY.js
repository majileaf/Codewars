/* Debug the functions EASY
Debug the functions

Should be easy, begin by looking at the code. Debug the code and the functions should work.

There are three functions: Multiplication (x) Addition (+) and Reverse (!esreveR)
*/

function multi(arr) {
  return arr.reduce((sum, n) => sum * n, 1);
}
function add(arr) {
  return arr.reduce((sum, n) => sum + n, 0);
}
function reverse(str) {
  return [...str].reverse().join('');
}

console.log(multi([8,2,5])) // 80
console.log(add([1,15,3])) // 19
console.log(add([7,8,6,5,4,9])) // 39
console.log(reverse("Hello Word")) // "droW olleH"