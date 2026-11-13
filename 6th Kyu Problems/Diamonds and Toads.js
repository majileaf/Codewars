/* Diamonds and Toads
Base on the fairy tale Diamonds and Toads by Charles Perrault. 
In this kata you will have to write a function that takes 2 arguments:

    A string that corresponds to what the daugther says.
    A string that tells you wich fairy the girl has met, it can be either 'good' or 'evil'.

The function should return the following counts as a hash / object / dictionary:
    If the girl has met the good fairy:
        count 1 ruby every time you see a r and 2 every time you see a R
        count 1 crystal every time you see a c and 2 every time you see a C
    If the girl has met the evil fairy:
        count 1 python every time you see a p and 2 every time you see a P
        count 1 squirrel every time you see a s and 2 every time you see a S

Note: For this kata I decided to replace the normal Diamonds and Toads with some programming languages. 
And just discovered that Squirrel is a programming language. 
*/

const diamondsAndToads = (sentence, fairy) => fairy === 'good' 
    ? [...sentence].reduce((sum, n) => (
          n === 'r' ? sum['ruby']++ 
        : n === 'R' ? sum['ruby'] += 2 
        : n === 'c' ? sum['crystal']++ 
        : n === 'C' ? sum['crystal'] += 2 
      : null, sum), {ruby: 0, crystal: 0}) 
    : [...sentence].reduce((sum, n) => (
          n === 'p' ? sum['python']++ 
        : n === 'P' ? sum['python'] += 2 
        : n === 's' ? sum['squirrel']++ 
        : n === 'S' ? sum['squirrel'] += 2 
      : null, sum), {python: 0, squirrel: 0});

console.log(diamondsAndToads("Ruby and Crystal", "good")) // { ruby: 3, crystal: 2 }
console.log(diamondsAndToads("This string contain some Ruby and some Crystal in it", "good")) // { ruby: 4, crystal: 3 }
console.log(diamondsAndToads("Python and Squirrel", "evil")) // { python: 2, squirrel: 2 }
console.log(diamondsAndToads("This string contain some Python and some Squirrel in it", "evil")) // { squirrel: 6, python: 2 }