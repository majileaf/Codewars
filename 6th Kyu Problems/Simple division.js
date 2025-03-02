/* Simple division
In this Kata, you will be given two numbers, a and b, and your task is to determine if the first number a 
is divisible by all the prime factors of the second number b. 

For example: solve(15,12) = False because 15 is not divisible by all the prime factors of 12 (which include2).
*/

const getPrimeFactors = n => {
    const arr = [];
    if (n % 2 === 0) {
        arr.push(2);
        while (n % 2 === 0) n /= 2;
    }

    for (let i = 3; i * i <= n; i += 2) {
        if (n % i === 0) {
            arr.push(i);
            while (n % i === 0) n /= i;
        }
    }

    if (n > 1) arr.push(n);
    return arr;
}

const solve = (a, b) => getPrimeFactors(b).every(primeFactor => a % primeFactor === 0);

console.log(solve(2,256)) // true
console.log(solve(2,253)) // false
console.log(solve(9,243)) // true
console.log(solve(15,12)) // false
console.log(solve(21,2893401)) // true
console.log(solve(21,2893406)) // false
console.log(solve(54,2834352)) // true
console.log(solve(54,2834359)) // false
console.log(solve(1000013,7187761)) // true
console.log(solve(1000013,7187762)) // false