/* Inverting a Hash
Summary
Given a Hash made up of keys and values, invert the hash by swapping them.

Examples
Given:
  { a: '1',
    b: '2',
    c: '3' }

Return:
  { 1: 'a',
    2: 'b',
    3: 'c' }

Given:
  { foo:   'bar',
    hello: 'world' }

Return:
  { bar:   'foo',
    world: 'hello' }

Notes
Keys and values may be of any type appropriate for use as a key.
All hashes provided as input will have unique values, so the inversion is involutive. 
In other words, do not worry about identical values stored under different keys.
*/

const invertHash = hash => Object.keys(hash).reduce((sum, n) => (sum[hash[n]] = n, sum), {});

// alternatively:
// const invertHash = hash => Object.entries(hash).reduce((sum, [key, value]) => (sum[value] = key, sum), {});

console.log(invertHash({ a: '1' })) // { 1: 'a' }) 
console.log(invertHash({ a: '1', b: '2', c: '3' })) // { 1: 'a', 2: 'b', 3: 'c' }
console.log(invertHash({ 1: '3' })) // { 3: '1' })
console.log(invertHash({ hello: 'world', foo: 'bar' })) // { world: 'hello', bar: 'foo' }