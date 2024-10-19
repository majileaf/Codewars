/* Simple Fun #260: Permutation Shift
Task
Define the permutation element shift as the difference between the element's value and its index. 
For example, for permutation [1, 0, 2, 3] of array [0, 1, 2, 3] shifts for the respective elements are [1, -1, 0, 0].

Define the permutation shift as the difference between the maximal and the minimal element shifts among 
all of the permutation elements.

Given a permutation of integers from 0 to n - 1 for some integer n, find its shift.

Input/Output
[input] integer array permutation
Array of integers containing each integer from 0 to n - 1, inclusive, exactly once (where n is the array length).
1 ≤ permutation.length ≤ 100
[output] an integer

Example
For permutation = [1, 0, 2, 3], the output should be 2.

Its maximal and the minimal element shifts are 1 and -1, so the output is 1 - -1 = 2.
*/

const permutationShift = permutation => {
    const arr = permutation.map((e, i) => e - i).sort((a, b) => a - b);
    const [min, max] = [arr[0], arr[arr.length - 1]];
    return max - min;
}

Test.assertEquals(permutationShift([1, 0, 2, 3]),2)
Test.assertEquals(permutationShift([0, 1, 2, 3, 5, 4]),2)
Test.assertEquals(permutationShift([5, 4, 3, 2, 1, 0]),10)
Test.assertEquals(permutationShift([0, 1, 2, 3, 4]),0)