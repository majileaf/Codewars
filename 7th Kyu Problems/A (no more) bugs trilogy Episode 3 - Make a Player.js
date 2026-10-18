/* A (no more) bugs trilogy: Episode 3 - Make a Player
Pac successfully passed the first & second test.
He just received the last message from the Academy,
    This is your last test, if you pass, your application will be accepted. You have 45 minutes.
    Good Luck

Pac has to create a Football Player object with the following attributes :
name      -> (string)
position  -> (string)
age       -> (int)
dribbling -> (int)
pass      -> (int)
shoot     -> (int)

Example
myPlayer = new Player("Dumbo", "Kata Coder", 1,2,3,4);

myPlayer.name => "Dumbo"
myPlayer.position => "Kata Coder"
myPlayer.age => 1
myPlayer.dribbling => 2
myPlayer.pass => 3
myPlayer.shoot => 4
*/

class Player {
    constructor (name, position, age, dribbling, pass, shoot) {
        this.name = name;
        this.position = position;
        this.age = age;
        this.dribbling = dribbling;
        this.pass = pass;
        this.shoot = shoot;
    }
}

let myPlayer = new Player('Player', 'Right Winger', 25, 75, 90, 65)

console.log(myPlayer.name) // 'Player'
console.log(myPlayer.position) // 'Right Winger'
console.log(myPlayer.age) // 25
console.log(myPlayer.dribbling) // 75
console.log(myPlayer.pass) // 90
console.log(myPlayer.shoot) // 65