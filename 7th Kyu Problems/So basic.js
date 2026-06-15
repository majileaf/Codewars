/* So basic
Summary: In this kata we want to communiate with a Mayan accountant.

Scenario: You work for the IRS and have been sent the 1040 form for a local Mayan retailer. 
The Mayan apparently speaks perfect English but has accidentally filled out his Adjusted Gross Income (AGI) in Mayan.

Task: Generate a javascript method that converts a base-20 value into its decimal equivalent. 
If it cannot be done, return -1.
*/

const convertBase20ToDecimal = init => {
    const n = parseInt(init, 20)
    return Number.isNaN(n) ? -1 : n;
}

console.log(convertBase20ToDecimal( "1" )) // 1
console.log(convertBase20ToDecimal( "A" )) // 10
console.log(convertBase20ToDecimal( "K" )) // -1
console.log(convertBase20ToDecimal( "50" )) // 100
console.log(convertBase20ToDecimal( "JJ" )) // 399
console.log(convertBase20ToDecimal( "0" )) // 0