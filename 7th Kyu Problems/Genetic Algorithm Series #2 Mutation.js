/* Genetic Algorithm Series - #2 Mutation
Mutation is a genetic operator used to maintain genetic diversity from one generation of a population of 
genetic algorithm chromosomes to the next.

Mutation

A mutation here may happen on zero or more positions in a chromosome. It is going to check every position and 
by a given probability it will decide if a mutation will occur.

A mutation is the change from 0 to 1 or from 1 to 0.

Note: Some tests are random. If you think your algorithm is correct but the result fails, trying again should work.
*/

const mutate = (chromosome, p) => [...chromosome].map(e => Math.random() < p ? +!+e : e).join('');

// 100% mutate
console.log(mutate('000000000', 1)) // '111111111'
console.log(mutate('111111111', 1)) // '000000000'

// 0% mutate
console.log(mutate('000000000', 0)) // '000000000'
console.log(mutate('111111111', 0)) // '111111111'

// 50% mutate
console.log(Array.from(mutate('000000000', 0.5)).some(x => x == '1')) // true
console.log(Array.from(mutate('111111111', 0.5)).some(x => x == '1')) // true