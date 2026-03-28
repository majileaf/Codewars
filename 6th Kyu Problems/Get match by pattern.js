/* Get match by pattern
You are given a string with three lowercase letters ( pattern ).

Your Task

Implement a function find_matched_by_pattern(pattern) that returns a predicate function, testing a string input and 
returning true if the string is matching the pattern, false otherwise.

A word is considered a match for a given pattern if the first occurrence of each letter of the pattern is found in 
the same order in the word. If a character in the pattern is duplicated, the same logic applies further.

The pattern will always be a string of size 3.

Example of use:
predicate = find_matched_by_pattern('acs')
predicate('access') # True
predicate('sacrifice') # False 

Examples of inputs/outputs:
Pattern:  Word:     Match:
acs       access    true
          ascces    false
          scares    false
vvl       veturvel  true
          velivel   false
bmb       bomb      true
          babyboom  false
*/

const findMatchedByPattern = pattern => word => {
    const filtered = word.match(new RegExp(`[${pattern}]`, 'g')) || [];
    const arr = [];

    for (let i = 0; i < pattern.length; i++ ) {
        let idx = filtered.indexOf(pattern[i]);
        if (idx !== -1) {
            arr.push(idx);
            filtered[idx] = null;
        }
    }
    return arr.length === pattern.length && arr.slice(1).every((_, i) => arr[i] < arr[i + 1]);
}

console.log(findMatchedByPattern("acs")("access")) // true
console.log(findMatchedByPattern("acs")("ascces")) // false
console.log(findMatchedByPattern("acs")("scares")) // false
console.log(findMatchedByPattern("acs")("sacrifice")) // false
console.log(findMatchedByPattern("vvl")("veturvel")) // true
console.log(findMatchedByPattern("vvl")("velivel")) // false
console.log(findMatchedByPattern("bmb")("bomb")) // true
console.log(findMatchedByPattern("bmb")("babyboom")) // false
console.log(findMatchedByPattern("vvl")("vvvvveturvel")) // true
console.log(findMatchedByPattern("rtr")("reverter")) // false
console.log(findMatchedByPattern("eae")("freehandedly")) // false
console.log(findMatchedByPattern("tut")("triturates")) // false
console.log(findMatchedByPattern("ans")("allemandes")) // true
console.log(findMatchedByPattern("asn")("audaciousness")) // true
console.log(findMatchedByPattern("noq")("inconsequence")) // true
console.log(findMatchedByPattern("nwn")("unknowns")) // false
console.log(findMatchedByPattern("psy")("blunge")) // false
console.log(findMatchedByPattern("psy")("blungep")) // false