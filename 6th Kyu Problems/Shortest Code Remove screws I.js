/* Shortest Code : Remove screws I
(Code length limit: 65 chars)
Task
John is a worker, His job is to un-screw screws from an assembly line.

The parameter screws will be given as a string, e.g.: "---+++". "-" and "+" are two type of screws.

John has two screwdrivers: slotted screwdriver and cross screwdriver. slotted screwdriver can remove screw "-", 
cross screwdriver can remove screw "+".

When John begins working, he starts at the leftmost screw, with a screwdriver in his hand. John is always initially 
holding a screwdriver that can unscrew the first screw. He has the other screwdriver in his toolkit.

He works from left to right, moving along the assembly line and unscrewing the screws. He switches screwdrivers when 
he encounters a screw of the type opposite to the screwdriver he is currently holding.

Here is a table of how long it takes him to perform each action:

remove one screw :               1 second
move to adjacent screw position: 1 second
switch screwdriver:              5 seconds

Return the number of seconds it will take him to finish his work.

Examples
In order to be more clear, we use letters ABCDEF... to represent the screws from left to right.

screws="---+++" 
the number in brackets is the time(seconds)
remove A(1) + move to B and remove B(2) + 
move to C and remove C(2)+ move to D(1) +
replace screwdriver(5)+remove D(1)+
move to E and remove E(2)+move to F and remove F(2)
total times=16 seconds

so, sc("---+++")=16

screws="-+-+-+"  (ABCDEF)
remove A(1)+
move to B(1)+replace screwdriver(5)+remove B(1)+
move to C(1)+replace screwdriver(5)+remove C(1)+
move to D(1)+replace screwdriver(5)+remove D(1)+
move to E(1)+replace screwdriver(5)+remove E(1)+
move to F(1)+replace screwdriver(5)+remove F(1)
total times=36 seconds
so, sc("-+-+-+")=36

screws="-+-+-----------"
total times=1+(1+5+1)+(1+5+1)+(1+5+1)+(1+5+1)
            +2+2+2+2+2+2+2+2+2+2=49 seconds
so, sc("-+-+-----------")=49

screws="-+-+-++++++++++"
total times=1+(1+5+1)+(1+5+1)+(1+5+1)+(1+5+1)+(1+5+1)
            +2+2+2+2+2+2+2+2+2=54 seconds
so, sc("-+-+-++++++++++")=54
*/

const sc=s=>s.replace(/(.)(?=\1)/g,'').length*5+s.length*2-6;

console.log(sc("---+++")) // 16
console.log(sc("-+-+-+")) // 36
console.log(sc("-+-+-----------")) // 49
console.log(sc("-+-+-++++++++++")) // 54