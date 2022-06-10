/*
Pete likes to bake some cakes. He has some recipes and ingredients. 
Unfortunately he is not good in maths. Can you help him to find out, 
how many cakes he could bake considering his recipes?

Write a function cakes(), which takes the recipe (object) and the 
available ingredients (also an object) and returns the maximum number 
of cakes Pete can bake (integer). For simplicity there are no units 
for the amounts (e.g. 1 lb of flour or 200 g of sugar are simply 1 or 200). 
Ingredients that are not present in the objects, can be considered as 0.

Examples:
// must return 2
cakes({flour: 500, sugar: 200, eggs: 1}, {flour: 1200, sugar: 1200, eggs: 5, milk: 200});

// must return 0
cakes({apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100}, {sugar: 500, flour: 2000, milk: 2000});
*/

// initial solution:
// const cakes = (recipe, available) => Math.min(...Object.keys(recipe)
//     .map(e => Math.floor(available[e] / recipe[e]))) || 0;

// alternatively:
// const cakes = (recipe, available) => Math.floor(Math.min(...Object.keys(recipe)
//     .map(e => available[e] / recipe[e])) || 0);

const cakes = (recipe, available) => Math.floor(Object.keys(recipe)
    .reduce((sum, n) => Math.min(available[n] / recipe[n] || 0, sum), Infinity));

let recipe = {flour: 500, sugar: 200, eggs: 1};
let available = {flour: 1200, sugar: 1200, eggs: 5, milk: 200};
console.log(cakes(recipe, available)) // 2

recipe = {apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100};
available = {sugar: 500, flour: 2000, milk: 2000};
console.log(cakes(recipe, available)) // 0

recipe = { cream: 200, flour: 300, sugar: 150, milk: 100, oil: 100 };
available = { sugar: 1700, flour: 20000, milk: 20000, oil: 30000, cream: 5000 };
console.log(cakes(recipe, available)) // 11