/* More than one way to call a function, or skin a cat. 
Write a single function that can be invoked by either

```javascript

sum(2,3); //5 //or sum(2)(3); //5```

clojure (sum 2 3) ;; 5 ;;or ((sum 2) 3) ;; 5

Both of these examples should return the sum of the 2 numbers. 
*/

const curry = fn => curried = (...args) => args.length === 2
    ? fn(...args) 
    : args2 => curried(args, args2);
const add = (a, b) => +a + b;
const sum = curry(add);

console.log(sum(2,3)) // 5
console.log(sum(2)(3)) // 5