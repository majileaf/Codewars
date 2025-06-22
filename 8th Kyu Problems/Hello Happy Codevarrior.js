/* Hello Happy Codevarrior!
VVhat ?!?

None of zese codevarriors seemz to remember hiz ovvn name !

Kould you help ?

var albert = new Warrior("Al")
var boris  = new Warrior("Boris")

albert.toString() --> "Hi! my name's Boris" <-- ohoh..
*/
/*
function Warrior(n){
  name = n;  
  this.name = function(n){
    if( n ) name=n;
    return name;
  }
}
  
Warrior.prototype.toString = function(){
    return "Hi! my name's "+this.name();
}
*/

function Warrior(n){
  let name = n;  
  this.name = function(n){
    if( n ) name=n;
    return name;
  }
}
  
Warrior.prototype.toString = function(){
    return "Hi! my name's "+this.name();
}

var albert = new Warrior("Albert")
var boris  = new Warrior("Boris")

console.log(albert.toString()) // "Hi! my name's Albert"
console.log(albert.name()) // "Albert"
console.log(boris.name()) // "Boris"

boris.name("Bobo")
console.log(boris.name()) // "Bobo"