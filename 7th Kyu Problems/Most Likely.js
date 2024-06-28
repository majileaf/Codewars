/* Most Likely
Create a function which compares two probabilities, returning true if the first one is most likely otherwise false.
For this exercise probability is expressed as two numbers separated by a colon e.g. a probability of 1 in 3 will be 1:3.

So:
Input: ('1:3','1:2') - returns false as 1 in 3 is less likely than 1 in 2.
*/

const mostLikely = (prob1, prob2) => {
  const [p1x, p1y] = prob1.split(':');
  const [p2x, p2y] = prob2.split(':');
  return p1x / p1y > p2x / p2y;
}

// alternatively:
// const getN = str => str.split(':').reduce((sum, n) => sum / n);
// const mostLikely = (prob1, prob2) => getN(prob1) > getN(prob2);

// alternatively #2:
// const getProb = (a, b) => a / b;
// const mostLikely = (prob1, prob2) => getProb(...prob1.split(':')) > getProb(...prob2.split(':'));

console.log(mostLikely('1:3','1:2')) // false