/* 2 Arrays 1 Sort
Imagine two arrays/lists where elements are linked by their positions in the array. For example:

HowMany = [ 1   ,   6  ,  5  ,   0  ];
Type = ['house', 'car','pen','jeans'];

Means I have 1 house, 6 cars,5 pens and 0 jeans.

Now if we sort one array we lose the connectivity. The goal is to create a sorting function that keeps the position link 
linkedSort(arrayToSort,linkedArray,compareFunction). So for every element that moves in arrayToSort(HowMany in the example), 
the corresponding element in linkedArray(Type in the example) needs to move similarly.

For example in Javascript:
//INPUT
HowMany = [ 1   ,   6  ,  5  ,   0  ];
Type = ['house', 'car','pen','jeans'];

//SORT
res = linkedSort(HowMany,Type,function(a,b){return a-b;})

//OUTPUT
HowMany === res === [ 0   ,   1   ,  5  ,  6  ];
Type       ===     ['jeans','house','pen','car'];

linkedSort(...) return the "arrayToSort" sorted only.

If no compare function is provided you should handle like an alphabetical sorting would do, e.g:

[-71,-6,35,0].sort() ===  [-6,-71,0,35] != [-71,-6,0,35]

Note: it is assumed that array are same length.
*/

const linkedSort = (aToSort, aLinked, compare) => {
    if (typeof compare !== 'function') compare = function(a, b){return String(a).localeCompare(String(b))};
    const mapped = aLinked.map((_, i) => ({i, value: aToSort[i]})).sort((a, b) => compare(a.value, b.value)).map(e => aLinked[e.i]);
    for (let i = 0; i < aLinked.length; i++) {
        aLinked[i] = mapped[i];
    }
    return aToSort.sort(compare);
}

console.log(linkedSort([1,6,5,0], ['house', 'car','pen','jeans'], function(a,b){return a-b;})) // ['jeans','house','pen','car']
console.log(linkedSort([ 'D', 'R', 'W', 'F' ], [ 'Green', 'Blue', 'Red', 'Yellow' ], function(a,b){return a.charCodeAt(0)-b.charCodeAt(0);})) 
// '["D","F","R","W"]'
console.log(linkedSort([ -71, -6, 35, 0 ], [ 0, 'Hello', 32, true ], undefined)) // [ -6, -71, 0, 35 ]