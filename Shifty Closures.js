/* Shifty Closures
Functional closures can get overly attached. Set them straight!

Why doesn't greet_abe() actually greet Abe?
*/

/*
var name = 'Abe';
var greet_abe = function() {
  return "Hello, " + name + '!';
};
name = 'Ben';
var greet_ben = function() {
  return "Hello, " + name + '!';
};
*/

var name = 'Abe';
var greet_abe = function() {
  return "Hello, " + name + '!';
};

var greet_ben = function() {
  name = 'Ben';
  return "Hello, " + name + '!';
};

console.log(greet_abe()) // 'Hello, Abe!'
console.log(greet_ben()) // 'Hello, Ben!'