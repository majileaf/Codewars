/* Primes in numbers
Given a positive number n > 1 find the prime factor decomposition of n. 
The result will be a string with the following form :
 "(p1**n1)(p2**n2)...(pk**nk)"

with the p(i) in increasing order and n(i) empty if n(i) is 1.

Example: n = 86240 should return "(2**5)(5)(7**2)(11)"
*/

const getPrimeFactors = n => {
    const arr = [];
    let j = 0;

    if (n % 2 === 0) {
        while (n % 2 === 0) {
            n /= 2;
            j++;
        }
        arr.push([2, j]);
    }

    for (let i = 3; i * i <= n; i += 2) {
        j = 0;
        if (n % i === 0) {
            while (n % i === 0) {
                n /= i;
                j++;
            }
            arr.push([i, j]);
        }
    }

    if (n > 1) arr.push([n, 1]);
    return arr;
}

const primeFactors = n => getPrimeFactors(n).map(([prime, count]) => `(${prime + (count < 2 ? '' : '**' + count)})`).join('');

console.log(primeFactors(7775460)) // "(2**2)(3**3)(5)(7)(11**2)(17)"
console.log(primeFactors(86240)) // "(2**5)(5)(7**2)(11)"