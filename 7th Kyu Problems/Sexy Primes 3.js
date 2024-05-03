/* Sexy Primes <3
Sexy primes are pairs of two primes that are 6 apart. In this kata, your job is to complete 
the function which returns true if x & y are sexy, false otherwise.

Examples
5, 11   -->  true
61, 67  -->  true
7, 13   -->  true
5, 7    -->  false
1, 7    -->  false  (1 is not a prime)

Note: x & y are always positive integers, but they are not always in order of precendence... 
For example you can be given either (5, 11) or (11, 5) - both are valid.
*/

const isPrime = n => {
    for(let i = 2; i <= Math.sqrt(n); i++) {
        if(n % i === 0) return false;
    }
    return n > 1;
}

const sexyPrime = (x, y) => Math.abs(x - y) === 6 && isPrime(x) && isPrime(y);

console.log(sexyPrime(5, 11)) // true
console.log(sexyPrime(61, 67)) // rue
console.log(sexyPrime(7, 13)) // true
console.log(sexyPrime(5, 7)) // false
console.log(sexyPrime(1, 7)) // false  (1 is not a prime)
console.log(sexyPrime(11, 5)) // true