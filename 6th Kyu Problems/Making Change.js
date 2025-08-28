/* Making Change

Complete the method that will determine the minimum number of coins needed to make change for a given amount in 
American currency.

Coins used will be half-dollars, quarters, dimes, nickels, and pennies, worth 50¢, 25¢, 10¢, 5¢ and 1¢, respectively. 
They'll be represented by the symbols/strings H, Q, D, N and P.

The argument passed in will be an integer representing the value in cents. 
The return value should be a hash/dictionary/object with the symbols as keys, and the numbers of coins as values. 
Coins that are not used should not be included in the hash. If the argument passed in is 0, then the method should 
return an empty hash.

Examples
input = 0  => output = {}
input = 1  => output = {'P': 1}
input = 43 => output = {'Q': 1, 'D': 1, 'N': 1, 'P': 3}
input = 91 => output = {'H': 1, 'Q': 1, 'D': 1, 'N': 1, 'P': 1}
*/

const makeChange = (amount) => {
    const hash = {H: ~~(amount / 50), 
                  Q: ~~(amount % 50 / 25), 
                  D: ~~(amount % 50 % 25 / 10), 
                  N: ~~(amount % 50 % 25 % 10 / 5), 
                  P: ~~(amount % 50 % 25 % 10 % 5 / 1)};
    return Object.keys(hash).reduce((sum, n) => (hash[n] ? sum[n] = hash[n] : sum, sum), {});
};

console.log(makeChange(0 )) // {}
console.log(makeChange(1 )) // {'P': 1}
console.log(makeChange(43)) // {'Q': 1, 'D': 1, 'N': 1, 'P': 3}
console.log(makeChange(91)) // {'H': 1, 'Q': 1, 'D': 1, 'N': 1, 'P': 1}