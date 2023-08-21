/* 2 DNAs sequences, coding for same protein?
In genetics 2 differents DNAs sequences can code for the same protein.

This is due to the redundancy of the genetic code, in fact 2 different tri-nucleotide can code for 
the same amino-acid. For example the tri-nucleotide 'TTT' and the tri-nucleotide 'TTC' both code 
for the amino-acid 'F'. For more information you can take a look here.

Your goal in this kata is to define if two differents DNAs sequences code for exactly the same protein. 
Your function take the 2 sequences you should compare. For some kind of simplicity here the sequences 
will respect the following rules:

It is a full protein sequence beginning with a Start codon and finishing by an Stop codon
It will only contain valid tri-nucleotide.
The translation hash is available for you under a translation hash $codons [Ruby] or codons 
[Python and JavaScript].
*/

var codons = {TTC: 'F', TTT: 'F', TTA: 'L', TTG: 'L', CTT: 'L', CTC: 'L', CTA: 'L', CTG: 'L', ATT: 'I', ATC: 'I', ATA: 'I', ATG: 'M', GTT: 'V', GTC: 'V', GTA: 'V', GTG: 'V', TCT: 'S', TCC: 'S', TCA: 'S', TCG: 'S', AGT: 'S', AGC: 'S', CCT: 'P', CCC: 'P', CCA: 'P', CCG: 'P', ACT: 'T', ACC: 'T', ACA: 'T', ACG: 'T', GCT: 'A', GCC: 'A', GCA: 'A', GCG: 'A', TAT: 'Y', TAC: 'Y', CAT: 'H', CAC: 'H', CAA: 'Q', CAG: 'Q', AAT: 'N', AAC: 'N', AAA: 'K', AAG: 'K', GAT: 'D', GAC: 'D', GAA: 'E', GAG: 'E', TGT: 'C', TGC: 'C', TGG: 'W', CGT: 'R', CGC: 'R', CGA: 'R', CGG: 'R', AGA: 'R', AGG: 'R', GGT: 'G', GGC: 'G', GGA: 'G', GGG: 'G', TAA: '*', TGA: '*', TAG: '*'};

// initial solution:
const codeForSameProtein = (seq1, seq2) => translateFrame(getFrame(seq1)) === translateFrame(getFrame(seq2));
const getFrame = dna => dna.match(/[AGTC]{3}/g) || [];
const translateFrame = arr => [...arr].map(e => codons[e]).join('');

// alternatively #1:
// const codeForSameProtein = (seq1, seq2) => checkSeq(seq1) === checkSeq(seq2);
// const checkSeq = dna => dna.replace(/.{3}/g, char => codons[char]);

// alternatively #2:
// const codeForSameProtein = (seq1, seq2) => {
//   const frame1 = getFrame(seq1);
//   const frame2 = getFrame(seq2);

//   if (frame1.length !== frame2.length) return false;

//   for (let i = 0; i < frame1.length; i++) {
//       if (codons[frame1[i]] !== codons[frame2[i]]) return false;
//   }
//   return true;
// }
// const getFrame = dna => dna.match(/.{3}/g);

console.log(codeForSameProtein("ATGTCGTCAATTTAA","ATGTCGTCAATTTAA")) // true
console.log(codeForSameProtein("ATGTTTTAA","ATGTTCTAA")) // true
console.log(codeForSameProtein("ATGTTTTAA","ATGATATAA")) // false
console.log(codeForSameProtein("ATGTTTTAA","ATGATATAA")) // false
console.log(codeForSameProtein("ATGTTTGGGAATAATTAAGGGTAA","ATGTTCGGGAATAATGGGAGGTAA")) // false