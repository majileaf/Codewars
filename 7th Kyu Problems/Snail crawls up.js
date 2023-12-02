/* Snail crawls up
The snail crawls up the column. During the day it crawls up some distance. 
During the night she sleeps, so she slides down for some distance 
(less than crawls up during the day).

Your function takes three arguments:
The height of the column (meters)
The distance that the snail crawls during the day (meters)
The distance that the snail slides down during the night (meters)

Calculate number of day when the snail will reach the top of the column.
*/

const snail = (column, day, night) => {
  let height = day;
  let i = 1;

  while (height < column) {
      height += day - night;
      i++;
  }
  return i;
}

// math solution:
// const snail = (column, day, night) => Math.ceil((column - day) / (day - night) + 1);

console.log(snail(3,2,1)) // 2
console.log(snail(10,3,1)) // 5
console.log(snail(10,3,2)) // 8
console.log(snail(100,20,5)) // 7
console.log(snail(5,10,3)) // 1