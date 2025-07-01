/* Message Validator
In this kata, you have an input string and you should check whether it is a valid message. 
To decide that, you need to split the string by the numbers, and then compare the numbers 
with the number of characters in the following substring.

For example "3hey5hello2hi" should be split into 3, hey, 5, hello, 2, hi and the function 
should return true, because "hey" is 3 characters, "hello" is 5, and "hi" is 2; as the numbers 
and the character counts match, the result is true.

Notes:
    Messages are composed of only letters and digits
    Numbers may have multiple digits: e.g. "4code13hellocodewars" is a valid message
    Every number must match the number of character in the following substring, 
    otherwise the message is invalid: e.g. "hello5" and "2hi2" are invalid
    If the message is an empty string, you should return true
*/

const isAValidMessage = message => {
    if (!message.length) return true;
    const arr = message.match(/\d+|[a-z]+/gi);
    if (arr.length % 2 !== 0) return false;

    for (let i = 0; i < arr.length - 1; i += 2) {
        if (+arr[i] !== arr[i + 1].length) return false;
    }
    return true;
}

console.log(isAValidMessage("3hey5hello2hi")) // true
console.log(isAValidMessage("4code13hellocodewars")) // true
console.log(isAValidMessage("3hey5hello2hi5")) // false
console.log(isAValidMessage("code4hello5")) // false
console.log(isAValidMessage("1a2bb3ccc4dddd5eeeee")) // true
console.log(isAValidMessage("")) // true