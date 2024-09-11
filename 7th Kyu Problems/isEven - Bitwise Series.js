/* isEven? - Bitwise Series
Is the number even?
If the numbers is even return true. If it's odd, return false.

Oh yeah... the following symbols/commands have been disabled!

use of %
use of .even? in Ruby
use of mod in Python
*/

const isEven = n => !(n & 1);

console.log(isEven(2)) // true
console.log(isEven(3)) // false
console.log(isEven(14)) // true
console.log(isEven(15)) // false
console.log(isEven(26)) // true
console.log(isEven(27)) // false