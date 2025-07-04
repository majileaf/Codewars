/* Sliding windows
Task
Given a length, an offset, and a list, slide a window of that length, moving by that offset every step, over the list, 
returning a list of lists.

The windows may overlap each other, or skip certain elements. All windows should be of the given length; 
if insufficient elements remain after a certain offset, end the list of lists. 

It is possible to take 0 elements from an empty list, so take care to handle window(0,offset,list) correctly.

The length will always be non-negative; the offset will always be strictly positive.

Examples
for 2, 1, [0,1,2,3,4] return [ [0,1], [1,2], [2,3], [3,4] ]
for 2, 2, [0,1,2,3,4] return [ [0,1], [2,3] ]
for 2, 3, [0,1,2,3,4] return [ [0,1], [3,4] ]
*/

const window2 = (length, offset, list) => {
    if (!length) return Array(Math.floor(list.length / offset) + 1).fill([]);
    const arr = [];
    for (let i = 0; i < list.length; i+= offset) {
        let subArr = [];
        for (let j = 0; j < length; j++) {
            if (list[i + j] === undefined) return arr;
            subArr.push(list[i + j]);
        }
        arr.push(subArr);
    }
    return arr;
}

console.log(window(2,1,[0,1,2,3,4])) // [[0,1], [1,2], [2,3], [3,4] ]
console.log(window(2,2,[0,1,2,3,4])) // [[0,1], [2,3] ]
console.log(window(2,3,[0,1,2,3,4])) // [[0,1], [3,4] ]
console.log(window(3,1,[0,1,2])) // [[0,1,2] ]
console.log(window(2,1,[0,1,2])) // [[0,1], [1,2] ]
console.log(window(1,1,[0,1,2])) // [[0], [1], [2] ]
console.log(window(0,1,[0,1,2])) // [[], [], [], [] ]