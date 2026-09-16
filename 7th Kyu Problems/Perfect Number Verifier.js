/* Perfect Number Verifier
A perfect number is a number in which the sum of its divisors (excluding itself) are equal to itself.

Write a function that can verify if the given integer n is a perfect number, and return True if it is, 
or return False if not.

Examples
n = 28 has the following divisors: 1, 2, 4, 7, 14, 28
1 + 2 + 4 + 7 + 14 = 28 therefore 28 is a perfect number, so you should return True

Another example:
n = 25 has the following divisors: 1, 5, 25
1 + 5 = 6 therefore 25 is not a perfect number, so you should return False
*/

const getDivisors = n => {
    const arr = [];
    for (let i = 1; i * i < n; i++) {
        if (n % i === 0) {
            arr.push(i);
            if (n / i !== i && n / i !== n) arr.push(n / i);
        }
    }
    return arr;
}

const isPerfect = n => getDivisors(n).reduce((sum, n) => sum + n, 0) === n;

console.log(isPerfect(6)) // true
console.log(isPerfect(1)) // false
console.log(isPerfect(28)) // true
console.log(isPerfect(4986)) // false
console.log(isPerfect(10)) // false
console.log(isPerfect(496)) // true
console.log(isPerfect(8128)) // true
console.log(isPerfect(23459879034)) // false
console.log(isPerfect(1098)) // false
console.log(isPerfect(33550336)) // true