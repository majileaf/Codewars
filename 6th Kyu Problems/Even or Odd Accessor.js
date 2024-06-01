/* Even or Odd Accessor
Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers. 
The function should also return "Even" or "Odd" when accessing a value at an integer index.

For example:
evenOrOdd(2); //'Even'
evenOrOdd[2]; //'Even'
evenOrOdd(7); //'Odd'
evenOrOdd[7]; //'Odd'
*/

const target = n => n % 2 ? 'Odd' : 'Even';

const handler = {
    get(target, prop) {
        return target(prop);
    }
}

const evenOrOdd = new Proxy(target, handler);


console.log(evenOrOdd[4]) // "Even"
console.log(evenOrOdd(2)) // "Even"
console.log(evenOrOdd[11]) // "Odd"
console.log(evenOrOdd(7)) // "Odd"
console.log(evenOrOdd[-44]) // "Even"
console.log(evenOrOdd(-42)) // "Even"
console.log(evenOrOdd[-9]) // "Odd"
console.log(evenOrOdd(-7)) // "Odd"
console.log(evenOrOdd[0]) // "Even"
console.log(evenOrOdd(0)) // "Even"