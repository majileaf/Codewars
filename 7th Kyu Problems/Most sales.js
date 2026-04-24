/* Most sales
You work in the best consumer electronics corporation, and your boss wants to find out which three products generate 
the most revenue. Given 3 lists of the same length like these:

    products: ["Computer", "Cell Phones", "Vacuum Cleaner"]
    amounts: [3, 24, 8]
    prices: [199, 299, 399]

Return the three product names with the highest revenues (amount * price), in descending order (highest to lowest revenue).

Note: if multiple products have the same revenue, order them according to their original positions in the input list.
*/

const top3 = (products, amounts, prices) => {
    const count = products.reduce((sum, n, i) => (sum[n] = amounts[i] * prices[i], sum), {});
    return Object.keys(count).sort((a, b) => count[b] - count[a]).slice(0, 3);
}

console.log(top3(["Computer", "Cell Phones", "Vacuum Cleaner"], [3, 24, 8], [199, 299, 399])) // ["Cell Phones", "Vacuum Cleaner", "Computer"]
console.log(top3(["Cell Phones", "Vacuum Cleaner", "Computer", "Autos", "Gold", "Fishing Rods", "Lego", " Speakers"], [5, 25, 2, 7, 10, 3, 2, 24], [51, 225, 22, 47, 510, 83, 82, 124])) // ['Vacuum Cleaner', 'Gold', ' Speakers']
console.log(top3(["Cell Phones", "Vacuum Cleaner", "Computer", "Autos", "Gold", "Fishing Rods", "Lego", " Speakers"], [0, 12, 24, 17, 19, 23, 120, 8], [9, 24, 29, 31, 51, 8, 120, 14])) // ['Lego', 'Gold', 'Computer']