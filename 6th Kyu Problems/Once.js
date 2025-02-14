/* Once
You'll implement once, a function that takes another function as an argument, 
and returns a new version of that function that can only be called once.

Subsequent calls to the resulting function should have no effect (and should return undefined).

For example:
logOnce = once(console.log)
logOnce("foo") // -> "foo"
logOnce("bar") // -> no effect
*/

function once(fn) {
  let isTrue = true;
  return function logging(...value) {
      if (isTrue) {
          isTrue = false;
          return fn(...value);
      } 
  }
}

const id = x => { return x; } 
logOnce = once(id) 
console.log(logOnce("foo")) // -> "foo" 
console.log(logOnce("bar")) // -> undefined

const sqr = once((x) => { return x * x}) 
console.log(sqr(3)) // 9
console.log(sqr(5)) // undefined

const add = once((a,b) => { return a + b }) 
console.log(add(1,2)) // 3
console.log(add(5,9)) // undefined