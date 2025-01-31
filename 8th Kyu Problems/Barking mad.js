/*
Teach snoopy and scooby doo how to bark using object methods. 
Currently only snoopy can bark and not scooby doo.

snoopy.bark(); // return "Woof"
scoobydoo.bark(); // undefined
Use method prototypes to enable all Dogs to bark.
*/

/*
function Dog(breed) {
  this.breed = breed;
}

var snoopy = new Dog('Beagle');

snoopy.bark = function () {
  return 'Woof';
};

var scoobydoo = new Dog('Great Dane');

function Dog(breed) {
  this.breed = breed;
}
*/

// initial solution:
// function Dog(breed) {
//   this.breed = breed;
// }

// Dog.prototype.bark = function () {
//   return 'Woof';
// };

class Dog {
  constructor(breed) {
    this.breed = breed;
  }

  bark() {
    return 'Woof';
  }
}

let snoopy = new Dog('Beagle');
let scoobydoo = new Dog('Great Dane');

console.log(snoopy.bark()) // "Woof"
console.log(scoobydoo.bark()) // "Woof"