/* Prime Numbers
Preface

A prime number (or a prime) is a natural number greater than 1 that has no positive divisors other than 1 and itself.

A more detailed description of prime numbers can be found at: http://en.wikipedia.org/wiki/Prime_number
The Problem

You will need to create logic for the following two functions: isPrime(number) and getPrimes(start, finish)
isPrime(number)

Should return boolean true if prime, otherwise false
getPrimes(start, finish)

Should return a unique, sorted array of all primes in the range [start, finish] (i.e. both numbers inclusive). 
Note that this range can go both ways - e.g. getPrimes(10, 1) should return all primes from 1 to 10 both inclusive.

Sample Input:
isPrime(number):
isPrime(0); // === false
isPrime(1); // === false
isPrime(2); // === true
isPrime(3); // === true
isPrime(4); // === false
isPrime(5); // === true 

getPrimes(start, finish):
getPrimes(0, 0); // === []
getPrimes(0, 30); // === [2, 3, 5, 7, 11, 13, 17, 19, 23, 29]
getPrimes(30, 0); // === [2, 3, 5, 7, 11, 13, 17, 19, 23, 29]
*/

const isPrime = number => {
    if (number === 2) return true;
    else if (number < 2 || number % 2 === 0) return false;

    for (let i = 3; i <= Math.sqrt(number); i+= 2) {
        if (number % i === 0) return false;
    }
    return true;
}

const getPrimes = (start, finish) => {
    const arr = [];
    for (let i = Math.min(start, finish); i <= Math.max(start, finish); i++) {
        if (isPrime(i)) arr.push(i);
    }
    return arr;
}

console.log(isPrime(0)) // false
console.log(isPrime(1)) // false
console.log(isPrime(2)) // true
console.log(isPrime(3)) // true
console.log(isPrime(4)) // false
console.log(isPrime(5)) // true

console.log(getPrimes(0, 0)) // []
console.log(getPrimes(0, 30)) // [2,3,5,7,11,13,17,19,23,29]
console.log(getPrimes(30, 0)) // [2,3,5,7,11,13,17,19,23,29]