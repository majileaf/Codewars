/* DNA GC-content
The four bases found in DNA are adenine (A), cytosine (C), guanine (G) and thymine (T).

In genetics, GC-content is the percentage of Guanine (G) and Cytosine (C) bases on a DNA molecule that 
are either guanine or cytosine.

Given a DNA sequence (a string) return the GC-content in percent.

For more information about GC-content you can take a look to wikipedia GC-content.

For example: the GC-content of the following DNA sequence is 50%: "AAATTTCCCGGG".

Note: You can take a look to my others bio-info kata here
*/

const gcContent = dna => [...dna].filter(e => e === 'G' || e === 'C').length / dna.length * 100 || 0;

console.log(gcContent("G")) // 100
console.log(gcContent("C")) // 100
console.log(gcContent("A")) // 0
console.log(gcContent("T")) // 0
console.log(gcContent("AAA")) // 0.0
console.log(gcContent("AAACCCGGGTTT")) // 50
console.log(gcContent("")) // 0.0