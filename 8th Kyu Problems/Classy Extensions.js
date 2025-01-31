/*
Classy Extensions, this kata is mainly aimed at the new JS ES6 Update introducing 
extends keyword. You will be preloaded with the Animal class, so you should only 
edit the Cat class.

Task
Your task is to complete the Cat class which Extends Animal and replace the speak 
method to return the cats name + meows. e.g. 'Mr Whiskers meows.'
The name attribute is passed with this.name (JS), @name (Ruby) or self.name (Python).

Reference: JS, Ruby, Python.
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes
http://rubylearning.com/satishtalim/ruby_inheritance.html
https://docs.python.org/2/tutorial/classes.html#inheritance
*/

// class Animal {
//     constructor(name) {
//         this.name = name;
//     }

//     speak() {
//         return `${this.name} does animal sound.`;
//     }
// }

// initial solution:
// class Cat extends Animal {
//     constructor(name) {
//         super(name);
//     }
//     speak() {
//         super.speak();
//         return `${this.name} meows.`;
//   }
// }

class Cat extends Animal {
    speak() {
        return `${this.name} meows.`;
  }
}

var cat = new Cat('Mr Whiskers');
console.log(cat.speak()) // 'Mr Whiskers meows.'

cat = new Cat('Lamp');
console.log(cat.speak()) // 'Lamp meows.'

cat = new Cat('$$Money Bags$$');
console.log(cat.speak()) // '$$Money Bags$$ meows.'