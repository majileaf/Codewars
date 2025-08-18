/* isAN(value)
isNaN doesn't work very well. We want it to tell us whether the value or object we're dealing with is a number or not. 
Instead, it tells us if the value is equal to the NaN value it has on-record.

So let's make a proper function, called isAN, for is A Number. 
If you pass it a value, it will return true if a value is a valid primitive number or Number object, and false if not.
*/

const isAN = value => {
    return parseFloat(value) === value || value instanceof Number && typeof value === 'object' && value.constructor === Number;
}

console.log(isAN('123')) // false
console.log(isAN(Infinity)) // true
console.log(isAN(new Number(123))) // true
console.log(isAN(123)) // true
console.log(isAN(NaN)) // false
console.log(isAN(true)) // false
console.log(isAN(undefined)) // false
console.log(isAN(null)) // false
console.log(isAN(Math.PI)) // true
console.log(isAN({valueOf(){return 123;}})) // false
console.log(isAN(123n)) // false