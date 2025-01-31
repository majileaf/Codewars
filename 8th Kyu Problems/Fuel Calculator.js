/*
In this kata you will have to write a function that takes litres and 
pricePerLitre (in dollar) as arguments.

Purchases of 2 or more litres get a discount of 5 cents per litre, 
purchases of 4 or more litres get a discount of 10 cents per litre, 
and so on every two litres, up to a maximum discount of 25 cents 
per litre. But total discount per litre cannot be more than 25 cents.
Return the total cost rounded to 2 decimal places. Also you can guess 
that there will not be negative or non-numeric inputs.
*/

// initial solution:
// const fuelPrice = (litres, pricePerLitre) => {
//     switch (true) {
//         case (litres < 2): discount = 0; break;
//         case (litres < 4): discount = 0.05; break;
//         case (litres < 6): discount = 0.1; break;
//         case (litres < 8): discount = 0.15; break;
//         case (litres < 10): discount = 0.2; break;
//         case (litres >= 10): discount = 0.25;
//     }
//     return Number((litres * (pricePerLitre - discount)).toFixed(2));
// }

const fuelPrice = (litres, pricePerLitre) => {
  const discount = Math.min(Math.floor(litres / 2) * 0.05, 0.25);
  return Number((litres * (pricePerLitre - discount)).toFixed(2));
}

console.log(fuelPrice(5, 1.23)) // 5.65
console.log(fuelPrice(8, 2.5)) // 18.40
console.log(fuelPrice(5, 5.6)) // 27.50