/* Calculator: Coin Combination
The function takes cents value (int) and needs to return the minimum number of coins combination of the same value.

The function should return an array where
coins[0] = pennies ==> $00.01
coins[1] = nickels ==> $00.05
coins[2] = dimes ==> $00.10
coins[3] = quarters ==> $00.25

So for example:
coinCombo(6) --> [1, 1, 0, 0]
*/

const coinCombo = cents => {
    const [pennies, nickels, dimes, quarters] = [1, 5, 10, 25];
    return [cents % quarters % dimes % nickels / pennies, Math.floor(cents % quarters % dimes / nickels), Math.floor(cents % quarters / dimes), Math.floor(cents / quarters)];
}

console.log(cents(1)) // [1, 0, 0, 0]
console.log(cents(2)) // [2, 0, 0, 0]
console.log(cents(5)) // [0, 1, 0, 0]
console.log(cents(6)) // [1, 1, 0, 0]
console.log(cents(10)) // [0, 0, 1, 0]
console.log(cents(11)) // [1, 0, 1, 0]
console.log(cents(15)) // [0, 1, 1, 0]
console.log(cents(17)) // [2, 1, 1, 0]
console.log(cents(25)) // [0, 0, 0, 1]
console.log(cents(30)) // [0, 1, 0, 1]
console.log(cents(36)) // [1, 0, 1, 1]
console.log(cents(43)) // [3, 1, 1, 1]