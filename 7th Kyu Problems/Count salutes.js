/* Count salutes
Description
There is a narrow hallway in which people can go right and left only. 
When two people meet in the hallway, by tradition they must salute each other. 
People move at the same speed left and right.

Your task is to write a function that, given a string representation of people moving in the hallway, 
will count the number of salutes that will occur.
Note: 2 salutes occur when people meet, one to the other and vice versa.

Input
People moving right will be represented by >; people moving left will be represented by <. 
An example input would be >--<--->->. The - character represents empty space, which you need 
not worry about.

Examples
Input: >----->-----<--<
Output: 8

Explanation: Both guys moving right will meet both guys moving left.
Hence a total of 4 meetings will occur and 8 salutes will occur.

Input: <---<--->----<
Output: 2

Explanation: Only one meeting occurs.
*/

const countSalutes = hallway => {
    let salutes = 0;

    for (let i = 0, right = 0; i < hallway.length; i++) {
        if (hallway[i] === '>') right++;
        else if (hallway[i] === '<') salutes += right * 2;
    }
    return salutes;
}

console.log(countSalutes('<---->---<---<-->')) // 4
console.log(countSalutes('------')) // 0
console.log(countSalutes('>>>>>>>>>>>>>>>>>>>>>----<->')) // 42
console.log(countSalutes('<<----<>---<')) // 2
console.log(countSalutes('>')) // 0