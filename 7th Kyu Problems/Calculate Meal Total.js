/* Calculate Meal Total
Create a function that returns the total of a meal including tip and tax. You should not tip on the tax.

You will be given the subtotal, the tax as a percentage and the tip as a percentage. 
Please round your result to two decimal places.
*/

const calculate_total = (subtotal, tax, tip) => +subtotal * (1 + (tax + tip) / 100).toFixed(2);

// alternatively:
// const calculate_total = (subtotal, tax, tip) => Math.round(subtotal * (100 + tax + tip)) / 100;

console.log(calculate_total(5, 5, 10)) // 5.75
console.log(calculate_total(36.97, 7, 15)) // 45.10
console.log(calculate_total(0.00, 6, 18)) // 0.00
console.log(calculate_total(80.94, 0, 20)) // 97.13
console.log(calculate_total(54.96, 8, 0)) // 59.36