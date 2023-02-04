/* Sentences with Functions
Implement all required functions in order to create the following sentences by calling those functions:

Adam(has(a(dog()))); // must return "Adam has a dog."
The(name(of(the(dog(is(also(Adam()))))))); // must return "The name of the dog is also Adam."
*/

function Adam() {}
function has() {}
function a() {}
function dog() {}
function The() {}
function name() {}
function of() {}
function the() {}
function is() {}
function also() {}

console.log(Adam(has(a(dog())))) // "Adam has a dog."
console.log(The(name(of(the(dog(is(also(Adam())))))))) // "The name of the dog is also Adam."