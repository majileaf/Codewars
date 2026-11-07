/* UniDecoder
Decode the strings.

In Javascript each character has its own unique unicode number, for example:
a = 97
A = 65
1 = 49

Your function accepts unicode numbers, you need to create a function that decodes these numbers and 
returns the correct string.

If the input includes elements that are not numbers your code needs to ingnore those elements and 
move onto the next value.

If the input includes no valid numbers your function should return "not a valid character code".
*/

const uniDecoder = (...arr) => {
    const res = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= 0 && arr[i] <= 65535) res.push(arr[i]);
    }
    return res.length ? String.fromCharCode(...res) : 'not a valid character code';
}

console.log(uniDecoder(84, 101, 115, 116, 105, 110, 103, 33)) // "Testing!"
console.log(uniDecoder(121, 111, 117, 114, 32, 99, 111, 100, 101)) // "your code"
console.log(uniDecoder("not a code")) // "not a valid character code"
console.log(uniDecoder("not a code", 84, 104, 105, 115, 32, 116, 101, "not a code", 115, 116, 32, 116, 111, 111)) // "This test too"