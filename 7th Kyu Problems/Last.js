/* Last
Find the last element of the given argument(s).

Examples
last([1, 2, 3, 4] ) // =>  4
last("xyz")         // => "z"
last(1, 2, 3, 4)    // =>  4

In javascript and CoffeeScript a list will be an array, 
a string or the list of arguments.
*/

// initial solution:
// const last2 = (...list) => (list.length === 1 && list[0].length > 0) 
//     ? list[0][list[0].length - 1] 
//     : list.pop();

const last2 = (...list) => {
    let last = list.pop();
    return last[last.length - 1] || last;
}

console.log(last([1,2,3,4,5])) // 5   //-- array
console.log(last("abcde")) // "e"     //-- string
console.log(last(1,"b",3,"d",5)) // 5 //-- arguments