/* Loose Change!
You've been collecting change all day, and it's starting to pile up in your pocket, 
but you're too lazy to see how much you've found.

Good thing you can code!

Complete the function to return a dollar amount of how much change you have!

Valid types of change include:
penny: 0.01
nickel: 0.05
dime: 0.10
quarter: 0.25
dollar: 1.00

These amounts are already preloaded as floats into the CHANGE object for you to use!

You should return the total in the format $x.xx.

Examples:
"nickel penny dime dollar" --> "$1.16"
"dollar dollar quarter dime dime" --> "$2.45"
"penny" --> "$0.01"
"dime" --> "$0.10"

Warning, some change may amount to over $10.00!
*/

const CHANGE = { penny: 0.01, nickel: 0.05, dime: 0.1, quarter: 0.25, dollar: 1 };

// Remember you have a CHANGE dictionary to work with ;)
const changeCount = change => '$' + change.split(' ').reduce((sum, n) => sum + CHANGE[n], 0).toFixed(2);

console.log(changeCount('dime penny dollar')) // '$1.11'
console.log(changeCount('dime penny nickel')) // '$0.16'
console.log(changeCount('quarter quarter')) // '$0.50'
console.log(changeCount('dollar penny dollar')) // '$2.01'
console.log(changeCount('dollar dollar dollar dollar dollar dollar dollar dollar dollar dollar penny')) // '$10.01'