/* Min Factor Distance
Write a function that returns the smallest distance between two factors of a number. 
The input will always be a number greater than one.

Example:
13013 has factors: [ 1, 7, 11, 13, 77, 91, 143, 169, 1001, 1183, 1859, 13013]

Hence the answer will be 2 (=13-11)
*/

const getDivisors = n => {
  const arr = [];
  for (let i = 1; i * i <= n; i++) {
      if (n % i === 0) {
          arr.push(i);
          if (i !== n / i) arr.push(n / i);
      }
  }
  return arr.sort((a, b) => a - b);
}

const minDistance = n => {
  const div = getDivisors(n);
  return Math.min(...div.slice(1).map((_, i) => div[i + 1] - div[i]));
}

console.log(minDistance(8)) // 1
console.log(minDistance(25)) // 4
console.log(minDistance(13013)) // 2
console.log(minDistance(218683)) // 198