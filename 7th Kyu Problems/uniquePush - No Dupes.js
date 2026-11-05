/* uniquePush - No Dupes!
Write a function that will take an array and a person object as parameters. 
The function will only push a "person" object onto the end of an array if someone with that phone number 
doesn't already exist in that array.

-A "person" is a javascript object with a name and a phoneNumber : {name:'SomeName', phoneNumber:1234567890}
-A duplicate person object is an object with the same phoneNumber as someone else

If the person object is unique, push them onto the end of the array, and return true.
If the person object is NOT unique, don't push them to the array and return false;
If the person doesn't have a phoneNumber, don't add them to the array and return false.
*/

//only push obj onto arr if it has a unique phoneNumber
const uniquePush = (arr, obj) =>  !!(!arr.filter(e => e.phoneNumber === obj.phoneNumber).length && obj.phoneNumber && arr.push(obj));

const arr = [];
const bob = {name:'bob', phoneNumber:1234}
const joe = {name:'joe', phoneNumber:12345};

// Test adding unique items
console.log(uniquePush(arr, {...bob})) // true
// arr = [bob]

console.log(uniquePush(arr, {...joe})) // true
// arr = [bob, joe]

// Test adding duplicated items
console.log(uniquePush(arr, {...bob})) // false
// arr = [bob, joe]

console.log(uniquePush(arr, {...joe})) // false
// arr = [bob, joe]

const dupeJoe = {name:'I am duped', phoneNumber:12345};
console.log(uniquePush(arr, {...dupeJoe})) // false
console.log(uniquePush(arr, {...dupeJoe})) // false
// arr = [bob, joe]

// Test adding an invalid object'
const bad = {name:'bad'};
console.log(uniquePush(arr, {...bad})) // false
// arr = [bob, joe]