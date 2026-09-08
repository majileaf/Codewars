/* Simple Fun #263: Even Numbers Before Fixed
Task
Given array of integers sequence and some integer fixedElement, output the number of even values in sequence 
before the first occurrence of fixedElement or -1 if and only if fixedElement is not contained in sequence.

Input/Output
[input] integer array sequence
A non-empty array of positive integers.
4 ≤ sequence.length ≤ 100
1 ≤ sequence[i] ≤ 9
[input] integer fixedElement
An positive integer
1 ≤ fixedElement ≤ 9
[output] an integer

Example
For sequence = [1, 4, 2, 6, 3, 1] and fixedElement = 6, the output should be 2.
There are 2 even numbers before 6: 4 and 2
For sequence = [2, 2, 2, 1] and fixedElement = 3, the output should be -1.
There is no 3 appears in sequence. So returns -1.
For sequence = [1, 3, 4, 3] and fixedElement = 3, the output should be 0.
3 appears in sequence, but there is no even number before 3.
*/

const evenNumbersBeforeFixed = (sequence, fixedElement) => {
    let even = 0;

    for (let i = 0; i < sequence.length; i++) {
        if (sequence[i] === fixedElement) return even;
        if (sequence[i] % 2 === 0) even++;
    }
    return -1;
}

console.log(evenNumbersBeforeFixed([1, 4, 2, 6, 3, 1],6)) // 2
console.log(evenNumbersBeforeFixed([2, 2, 2, 1],3)) // -1
console.log(evenNumbersBeforeFixed([2, 3, 4, 3],3)) // 1
console.log(evenNumbersBeforeFixed([1, 3, 4, 3],3)) // 0