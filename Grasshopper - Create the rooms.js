/*
Escape the room
You are creating an "Escape the room" game. The first step is to create a hash table 
called rooms that contains all of the rooms of the game. There should be at least 3 
rooms inside it, each being a hash table with at least three properties (e.g. name, 
description, completed).
*/

const rooms = {
    room1: {'name': 'A', 'description': 'DA', 'completed': true},
    room2: {'name': 'B', 'description': 'DB', 'completed': false},
    room3: {'name': 'C', 'description': 'DC', 'completed': true}
}

const keys = Object.keys(rooms)
// should have at least three rooms
console.log((keys.length >= 3)) // true
  
// each room should be an object
keys.forEach(name => console.log(typeof(rooms[name]) === 'object')) // `${name} should be an object`

// should contain at least three properties per room
keys.forEach(name => {
let numKeys = Object.keys(rooms[name]).length
console.log(numKeys >= 3)
}) // true