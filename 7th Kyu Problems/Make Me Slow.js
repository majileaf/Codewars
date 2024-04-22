/* Make Me Slow
Make me slow! Calling makeMeSlow() should take at least 7 seconds.
*/

const makeMeSlow = _ =>  {
  const arr = [];
  for (let i = 0; i < 234567890; i++) { 
    arr.push(i);
    arr.shift();
    arr.unshift(i);
    arr.pop();
  }
}

const start = new Date().getTime();
makeMeSlow();
const duration = new Date().getTime() - start;
console.log(duration);