/* search in multidimensional array
Write a function that gets a sequence and value and returns true/false depending on whether the variable exists 
in a multidimentional sequence.

Example:
['a','b',['c','d',['e']]] , 'e' --> true
['a','b',['c','d',['e']]] , 'a' --> true
['a','b',['c','d',['e']]] , 'f' --> false
*/

function locate(arr, value) {
    return false;
}

console.log(locate(['two','six',['five','seven'],'three,nine'], 'six')) // true
console.log(locate(['two','six',['five','seven'],'three,nine'], 'three')) // false
console.log(locate(['two','six',['five','seven'],'three,nine'], 'three,nine')) // true
console.log(locate(['two','six',['five','seven'],'three,nine'], 'five,seven')) // false

console.log(locate(['a','b',['c','d',['[e632784632478&^*&^&*]']]],'[e632784632478&^*&^&*]')) // true  
console.log(locate(['a','b',['c','d',['e']]],'ffdfsdfd')) // false

console.log(locate(['a','b',['c','d',['e']]],'a')) // true 
console.log(locate(['a','b',['c','d',['e']]],'d')) // true  
console.log(locate(['a','b',['c','d',['e']]],'e')) // true  
console.log(locate(['a','b',['c','d',['e',['a','b',['c','d',['e4']]]]]],'e4')) // true  
console.log(locate(['a','b',['c','d',['e',['a','b',['c','d',['e',['a','b',['c','d',['e4',['a','b',['c','d',['e',['a','b',['c','d',['e',['a','b',['c','d',['e14']]]]]],]]]]]]]]],]]],'e')) // true  
console.log(locate(['a','b',['c','d',['e']]],'f')) // false 