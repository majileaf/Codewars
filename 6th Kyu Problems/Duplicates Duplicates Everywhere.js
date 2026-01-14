/* Duplicates. Duplicates Everywhere.
You are given a table, in which every key is a stringified number, and each corresponding value is an array of characters, e.g.

{
  "1": ["A", "B", "C"],
  "2": ["A", "B", "D", "A"],
}

Create a function that returns a table with the same keys, but each character should appear only once among the value-arrays, e.g.

{
  "1": ["C"],
  "2": ["A", "B", "D"],
}

Rules
    Whenever two keys share the same character, they should be compared numerically, and the larger key will keep that character. That's why in the example above the array under the key "2" contains "A" and "B", as 2 > 1.
    If duplicate characters are found in the same array, the first occurance should be kept.

Example 1
input = {
  "1": ["C", "F", "G"],
  "2": ["A", "B", "C"],
  "3": ["A", "B", "D"],
}

output = {
  "1": ["F", "G"],
  "2": ["C"],
  "3": ["A", "B", "D"],
}

Example 2
input = {
  "1": ["A"],
  "2": ["A"],
  "3": ["A"],
}

output = {
  "1": [],
  "2": [],
  "3": ["A"],
}

Example 3
input = {
  "432": ["A", "A", "B", "D"],
  "53": ["L", "G", "B", "C"],
  "236": ["L", "A", "X", "G", "H", "X"],
  "11": ["P", "R", "S", "D"],
}

output = {
  "11": ["P", "R", "S"],
  "53": ["C"],
  "236": ["L", "X", "G", "H"],
  "432": ["A", "B", "D"],
}
*/

const difference = (a, b) => new Set([...a].filter(x => !b.has(x)));
const removeDuplicateIds = obj => {
    const count = new Set();
    const res = {};
    const arr = Object.keys(obj).sort((a, b) => b - a);

    for (let i = 0; i < arr.length; i++) {
        res[arr[i]] = [...difference(obj[arr[i]], count)];
        for (let j = 0; j < obj[arr[i]].length; j++) {
            count.add(obj[arr[i]][j]);
        }
    }
    return res;
};

const obj = {
  "1": ["A", "B", "C"],
  "2": ["A", "B", "D", "A"],
};

const obj1 = {
  "1": ["C", "F", "G"],
  "2": ["A", "B", "C"],
  "3": ["A", "B", "D"],
};

const obj2 = {
  "1": ["A"],
  "2": ["A"],
  "3": ["A"],
};
        
const obj3 = {
  "432": ["A", "A", "B", "D"],
  "53": ["L", "G", "B", "C"],
  "236": ["L", "A", "X", "G", "H", "X"],
  "11": ["P", "R", "S", "D"],
};

console.log(removeDuplicateIds(obj)) // { "1": ["C"], "2": ["A", "B", "D"] });
console.log(removeDuplicateIds(obj1)) // { "1": ["F", "G"], "2": ["C"], "3": ["A", "B", "D"] });
console.log(removeDuplicateIds(obj2)) // { "1": [], "2": [], "3": ["A"] });
console.log(removeDuplicateIds(obj3)) 
// {
//   "11": ["P", "R", "S"],
//   "53": ["C"],
//   "236": ["L", "X", "G", "H"],
//   "432": ["A", "B", "D"],
// }