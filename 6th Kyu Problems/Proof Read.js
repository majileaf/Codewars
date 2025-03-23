/* Proof Read
You've just finished writing the last chapter for your novel when a virus suddenly infects your document. 
It has swapped the 'i's and 'e's in 'ei' words and capitalised random letters.

Write a function which will:
    Remove the spelling errors in 'ei' words. (Examples of 'ei' words: their, caffeine, deceive, weight)
    Only capitalise the first letter of each sentence. Make sure the rest of the sentence is in lower case. 
     Each sentence is separated by a full stop.

Example:
He haD iEght ShOTs of CAffIEne. --> He had eight shots of caffeine.
*/

const proofread = str => str.toLowerCase().replace(/ie/g, 'ei').replace(/(^|\. )./g, char => char.toUpperCase());

console.log(proofread("SHe wEnt CaNoIenG.")) // "She went canoeing."
console.log(proofread("He haD iEght ShOTs of CAffIEne")) // "He had eight shots of caffeine"
console.log(proofread("THe neIghBour's ceiLing FEll on His Head. The WiEght of It crusHed him To thE gROuNd.")) // "The neighbour's ceiling fell on his head. The weight of it crushed him to the ground.")
console.log(proofread("ThE kiDs enJoYEd the SLiegh RidE.")) // "The kids enjoyed the sleigh ride.")
console.log(proofread("SHE did NOT diegn to GUESS her NIEGHBOUR'S wieght.")) // "She did not deign to guess her neighbour's weight.")
console.log(proofread("They had to fIEgn thIEr appreciation for her bIEge tights.")) // "They had to feign their appreciation for her beige tights.")
console.log(proofread("Niether of the fencers wanted to forfiet the match. They both expected to sieze victory.")) // "Neither of the fencers wanted to forfeit the match. They both expected to seize victory.")
console.log(proofread("Protien intAkE miGHt afFect aNy pOteNtIaL wieght LOSs.")) // "Protein intake might affect any potential weight loss." )
console.log(proofread("MargArEt cAn’t eVen concIEve of foRegOing the pARty to finisH her paPEr.")) // "Margaret can’t even conceive of foregoing the party to finish her paper." )
console.log(proofread("IN the wINter, it’s NICE to gO for a sliegh rIDe")) // "In the winter, it’s nice to go for a sleigh ride")
console.log(proofread("The mAN’s ONly pURpose in lIFe is to decIEve his wIFe.")) // "The man’s only purpose in life is to deceive his wife.")
console.log(proofread("She LifTeD heR ViEL. The ShIeK LooKeD aT hER ExPeCtAnTlY")) // "She lifted her veil. The sheik looked at her expectantly")
console.log(proofread("PetEr Was Not Sure of WHAt he WAs sEIEng. HE had To RIEn in HIs SHock.")) // "Peter was not sure of what he was seeing. He had to rein in his shock." )
console.log(proofread("That is OnE lonG frieghT traiN thAt’s Blocking The Railway Crossing.")) // "That is one long freight train that’s blocking the railway crossing."