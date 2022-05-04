/*
You live in the city of Cartesia where all roads are laid out 
in a perfect grid. You arrived ten minutes too early to an 
appointment, so you decided to take the opportunity to go for 
a short walk. The city provides its citizens with a 
Walk Generating App on their phones -- everytime you press 
the button it sends you an array of one-letter strings representing 
directions to walk (eg. ['n', 's', 'w', 'e']). 

You always walk only a single block for each letter (direction) 
and you know it takes you one minute to traverse one city block, 
so create a function that will return true if the walk the app 
gives you will take you exactly ten minutes (you don't want to 
be early or late!) and will, of course, return you to your starting 
point. Return false otherwise.

Note: you will always receive a valid array (string in COBOL) 
containing a random assortment of direction letters 
('n', 's', 'e', or 'w' only). 

It will never give you an empty array (that's not a walk, 
that's standing still!).
*/

// initital solution:
// const isValidWalk = walk => {
//     if (walk.length !== 10) return false;
//     const WE = {'w': 1, 'e': -1};
//     const NS = {'n': 1, 's': -1};
//     let x = 0; 
//     let y = 0;

//     for (let i = 0; i < 10; i++) {
//         if (WE[walk[i]]) x += WE[walk[i]];
//         if (NS[walk[i]]) y += NS[walk[i]];
//     }
//     return !(x && y);
// }

const isValidWalk = walk => {
    if (walk.length !== 10) return false;
    let x = 0; 
    let y = 0;

    for (let i = 0; i < 10; i++) {
        switch(walk[i]) {
            case ('n'): y += 1; break;
            case ('s'): y -= 1; break;
            case ('w'): x += 1; break;
            case ('e'): x -= 1; break;
        }
    }
    return x === 0 && y === 0;
}

console.log(['n','s','n','s','n','s','n','s','n','s']) // 'should return true'
console.log(['w','e','w','e','w','e','w','e','w','e','w','e']) // 'should return false'
console.log(['w']) // 'should return false'
console.log(['n','n','n','s','n','s','n','s','n','s']) // 'should return false'