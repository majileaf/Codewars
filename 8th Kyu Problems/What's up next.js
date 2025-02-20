/* What's up next?
Given a sequence of items and a specific item in that sequence, return the item immediately following the item specified. 
If the item occurs more than once in a sequence, return the item after the first occurence. 
This should work for a sequence of any type.

When the item isn't present or nothing follows it, the function should return nil in Clojure and Elixir, 
Nothing in Haskell, undefined in JavaScript, None in Python.

nextItem([1, 2, 3, 4, 5, 6, 7], 3) # 4
nextItem("testing", "t") # "e"
*/

const nextItem = (xs, item) => {
  if (typeof xs === 'string' && xs.indexOf(item) !== -1) return xs[xs.indexOf(item) + 1];
  for (const n of xs) {
      if (n > item) return n;
  }
}

// alternatively:
// const nextItem = (xs, item) => {
//   const iterator = xs[Symbol.iterator]();
//   for (const n of iterator) {
//       if (n === item) return iterator.next().value;
//   }
// }

console.log(nextItem([1, 2, 3, 4, 5, 6, 7, 8], 5)) // 6
console.log(nextItem(['a', 'b', 'c'], 'd')) // undefined
console.log(nextItem(['a', 'b', 'c'], 'c')) // undefined
console.log(nextItem("testing", "t")) // "e"
function* countFrom(n) { for (let i = n; ; ++i) yield i; }
console.log(nextItem(countFrom(1), 12)) // 13