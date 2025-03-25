/* What's a Perfect Power anyway?
A perfect power (https://en.wikipedia.org/wiki/Perfect_power) is a classification of positive integers:

    In mathematics, a perfect power is a positive integer that can be expressed as an integer power of another positive integer. 
    More formally, n is a perfect power if there exist natural numbers m > 1, and k > 1 such that mk = n.

Your task is to check wheter a given integer is a perfect power. If it is a perfect power, return a pair m and k with mk = n as a proof. 
Otherwise return Nothing, Nil, null, NULL, None or your language's equivalent.

Note: For a perfect power, there might be several pairs. For example 81 = 3^4 = 9^2, so (3,4) and (9,2) are valid solutions.
However, the tests take care of this, so if a number is a perfect power, return any pair that proves it.

Examples
describe("perfect powers", function(){
  it("should work for some examples",function(){
    assert.deepEqual(isPP(4), [2,2], "4 = 2^2");
    assert.deepEqual(isPP(9), [3,2], "9 = 3^2");
    assert.strictEqual(isPP(5), null, "5 isn't a perfect number");
  });
});
*/

const getDivisors = n => {
  const arr = [];
  for (let i = 2; i * i <= n; i++) {
      if (n % i === 0) {
          arr.push(i);
      }
  }
  return arr;
}

const isPP = n => {
  const divisors = getDivisors(n);
  for (let i = 0; i < divisors.length; i++) {
      let j = 2;
      while (divisors[i] ** j < n) {
          j++;
      }
      if (divisors[i] ** j === n) return [divisors[i], j];
  }
  return null;
}

// pp true
// [4, 8, 9, 16, 25, 27, 32, 36, 49, 64, 81, 100, 121, 125, 128, 144, 169, 196, 216, 225, 243, 256, 289, 324, 343, 361, 400, 441, 484];

// pp false
// [3, 7, 11, 18, 24, 28, 35, 39, 48, 63, 87, 109, 122, 129, 133, 156, 187, 199, 213, 235, 248];

console.log(isPP(4))   // [2 , 2]
console.log(isPP(8))   // [2 , 3]
console.log(isPP(9))   // [3 , 2]
console.log(isPP(16))  // [2 , 4]
console.log(isPP(25))  // [5 , 2]
console.log(isPP(27))  // [3 , 3]
console.log(isPP(32))  // [2 , 5]
console.log(isPP(36))  // [6 , 2]
console.log(isPP(324)) // [18 , 2]
console.log(isPP(3))   // null
console.log(isPP(7))   // null
console.log(isPP(11))  // null
console.log(isPP(18))  // null