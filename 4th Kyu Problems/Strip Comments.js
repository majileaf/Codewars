/* Strip Comments
Complete the solution so that it strips all text that follows any of a set of comment markers passed in. 
Any whitespace at the end of the line should also be stripped out.

Example:
Given an input string of:
apples, pears # and bananas
grapes
bananas !apples

The output expected would be:
apples, pears
grapes
bananas

The code would be called like so:
var result = solution("apples, pears # and bananas\ngrapes\nbananas !apples", ["#", "!"])
// result should == "apples, pears\ngrapes\nbananas"
*/

const solution = (text, markers) => text
    .split('\n')
    .map(e => {
        let str = e;
        markers.forEach(mark => str = str.slice(0, str.indexOf(mark) !== -1 ? str.indexOf(mark) : undefined));
        return str.trimEnd();
    })
    .join('\n');

console.log(solution('aa bb cc', [])) // 'aa bb cc'
console.log(solution('aa bb cc  ', [])) // 'aa bb cc'
console.log(solution('  aa bb cc', [])) // '  aa bb cc'
console.log(solution('  aa # bb # cc  ', [])) // '  aa # bb # cc'

console.log(solution('aa bb cc', ['#'])) // 'aa bb cc'
console.log(solution('aa bb # cc', ['#'])) // 'aa bb'
console.log(solution('aa# bb cc', ['#'])) // 'aa'
console.log(solution('aa #bb cc', ['#'])) // 'aa'
console.log(solution('aa # bb # cc', ['#'])) // 'aa'
console.log(solution('#aa bb cc', ['#'])) // ''

console.log(solution('#aa bb\ncc dd', ['#'])) // '\ncc dd'
console.log(solution('aa # bb\ncc dd', ['#'])) // 'aa\ncc dd'
console.log(solution('aa bb\n#cc dd', ['#'])) // 'aa bb\n'
console.log(solution('aa bb\ncc # dd', ['#'])) // 'aa bb\ncc'
console.log(solution('aa bb\ncc dd#', ['#'])) // 'aa bb\ncc dd'

console.log(solution('aa bb\ncc dd', ['#', '!'])) // 'aa bb\ncc dd'
console.log(solution('aa # bb\ncc dd', ['#', '!'])) // 'aa\ncc dd'
console.log(solution('aa bb\ncc ! dd', ['#', '!'])) // 'aa bb\ncc'
console.log(solution('#aa bb\n!cc dd', ['#', '!'])) // '\n'
console.log(solution('aa ! bb\ncc # dd', ['#', '!'])) // 'aa\ncc'
console.log(solution('aa bb#\ncc dd!', ['#', '!'])) // 'aa bb\ncc dd'

console.log(solution('aa + bb\ncc - dd\nee * ff', ['+', '-', '*'])) // 'aa\ncc\nee'
console.log(solution('aa / bb\ncc ^ dd\nee $ ff', ['/', '^', '$'])) // 'aa\ncc\nee'