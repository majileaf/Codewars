/* Sentences with Functions
Implement all required functions in order to create the following sentences by calling those functions:

Adam(has(a(dog()))); // must return "Adam has a dog."
The(name(of(the(dog(is(also(Adam()))))))); // must return "The name of the dog is also Adam."
*/

function fn(a) {return a ? ' ' + a : '.'}
function Adam(a) {return 'Adam' + fn(a)}
function has(a) {return 'has' + fn(a)}
function a(a) {return 'a' + fn(a)}
function dog(a) {return 'dog' + fn(a)}
function The(a) {return 'The' + fn(a)}
function name(a) {return 'name' + fn(a)}
function of(a) {return 'of' + fn(a)}
function the(a) {return 'the' + fn(a)}
function is(a) {return 'is' + fn(a)}
function also(a) {return 'also' + fn(a)}

console.log(Adam(has(a(dog())))) // "Adam has a dog."
console.log(The(name(of(the(dog(is(also(Adam())))))))) // "The name of the dog is also Adam."