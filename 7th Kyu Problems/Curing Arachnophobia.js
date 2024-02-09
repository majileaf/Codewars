/* Curing Arachnophobia
There is no single treatment that works for every phobia, but some people cure it by being gradually 
exposed to the phobic situation or object. In this kata we will try curing arachnophobia by drawing 
primitive spiders.

Our spiders will have legs, body, eyes and a mouth. Here are some examples:
/\((OOwOO))/\
/╲(((0000w0000)))╱\
^(oWo)^

You will be given four values:
leg size where each value stands for its own leg type: 
1 for "^ ^", 2 for "/\ /\", 3 for "/╲ ╱\", 4 for "╱╲ ╱╲"

body size where each value stands for its own body type: 
1 for "( )", 2 for "(( ))", 3 for "((( )))"

mouth representing the spider's mouth
eye representing the spider's eye

Note: the eyes are symmetric, and their total amount is 2 to the power of body size.
You will also be given only valid data. That's it for the instructions, you can start coding!
*/

const drawSpider = (legSize, bodySize, mouth, eye) => {
  const legs = ['^ ^', '/\\ /\\', '/╲ ╱\\', '╱╲ ╱╲'][legSize - 1];
  const [legsLeft, legsRight] = legs.split(' ');
  const [bodyLeft, bodyRight] = ['('.repeat(bodySize), ')'.repeat(bodySize)];
  const eyes = eye.repeat(2 ** (bodySize - 1));
  
  return legsLeft + bodyLeft + eyes + mouth + eyes + bodyRight + legsRight;
}

console.log(drawSpider(1, 1, "W", "o")) // "^(oWo)^")   
console.log(drawSpider(2, 2, "w", "O")) // "/\\((OOwOO))/\\"
console.log(drawSpider(3, 3, "w", "0")) // "/╲(((0000w0000)))╱\\"