/* List of Presents
Task:
Leo's girlfriend asked him to buy a gift list during his next trip, now he wants to know how many of them 
will he be able to buy.

Write a function to help Leo out. The first parameter of the function is Leo's budget; 
the second one is an array containing the price of each gift. 

You should return an integer representing the maximum amount of gifts Leo can buy.

Example:
Maximum budget: 20
Gift List: [13, 2, 4, 6, 1]
Should return 4.

_ NOTE: All numbers will be integers >= 0, and the array will never be empty. _
*/

const howManyGifts = (maxBudget, gifts) => {
  const gift = gifts.slice().sort((a, b) => a - b);
  let presents = 0;
  for (let i = 0; i < gift.length; i++) {
      if (maxBudget - gift[i] < 0) continue;
      maxBudget -= gift[i];
      presents++
  }
  return presents;
}

// alternatively:
// const howManyGifts = (maxBudget, gifts) => {
//   const gift = gifts.slice().sort((a, b) => a - b);
//   let presents = 0;
//   for (let i = 0; maxBudget - gift[i] >= 0; i++) {
//       maxBudget -= gift[i];
//       presents++;
//   }
//   return presents;
// }

console.log(howManyGifts(20, [13, 2, 4, 6, 1])) // 4
console.log(howManyGifts(0, [1])) // 0