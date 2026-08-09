/* I guess this is a 7kyu kata #6: Fruit Ninja I
Description

You are a Fruit Ninja, your skill is cutting fruit. All the fruit will be cut in half by your knife. For example:

[  "apple",     "pear",     "banana"  ]  --> ["app", "le", "pe", "ar", "ban", "ana"]

As you see, all fruits are cut in half. You should pay attention to "apple": if you cannot cut a fruit into equal parts, 
then the first part will has a extra character.

You should only cut the fruit, other things should not be cut, such as the "bomb":

[  "apple",     "pear",     "banana",   "bomb"]  -->
["app", "le", "pe", "ar", "ban", "ana", "bomb"]

The valid fruit names are preloaded for you as:
fruitsName

Task
Complete function cutFruits that accepts argument fruits. Returns the result in accordance with the rules above.
*/

const fruitsName = ['apple', 'pear', 'banana', 'watermelon', 'grape', 'plum', 'blueberry', 'persimmon', 'pomegranate', 'pineapple', 'orange', 'mangosteen', 'durian', 'lemon', 'pitaya', 'carambola', 'tomato', 'apricot', 'cherry', 'coconut', 'peach', 'fig', 'litchi', 'ginkgo', 'cantaloupe', 'hawthorn', 'mango', 'jujube'];

const cutFruits = fruits => [].concat(...fruits.map(e => fruitsName.includes(e) ? [e.slice(0, Math.ceil(e.length / 2)), e.slice(Math.ceil(e.length / 2))] : e));

console.log(cutFruits(["apple","pear","banana"])) // ["app","le","pe","ar","ban","ana"]
console.log(cutFruits(["apple","pear","banana","bomb"])) // ["app","le","pe","ar","ban","ana","bomb"]