/*
Oh no! Timmy's evalObject function doesn't work. He uses Switch/Cases 
to evaluate the given properties of an object, can you fix timmy's function?
*/

/*
function evalObject(value){
  var result = 0;
  switch(value.operation){
    case'+': result = value.a + value.b;
    case'-': result = value.a - value.b;
    case'/': result = value.a / value.b;
    case'*': result = value.a * value.b;
    case'%': result = value.a % value.b;
    case'^': result = Math.pow(value.a, value.b);
  }
  return result;
}
*/

const evalObject = value => {
  let result = 0;
  switch(value.operation){
    case'+': result = value.a + value.b; break;
    case'-': result = value.a - value.b; break;
    case'/': result = value.a / value.b; break;
    case'*': result = value.a * value.b; break;
    case'%': result = value.a % value.b; break;
    case'^': result = Math.pow(value.a, value.b); break;
  }
  return result;
}

console.log(evalObject({a:1,b:1,operation:'+'})) // 2
console.log(evalObject({a:1,b:1,operation:'-'})) // 0
console.log(evalObject({a:1,b:1,operation:'/'})) // 1
console.log(evalObject({a:1,b:1,operation:'*'})) // 1
console.log(evalObject({a:1,b:1,operation:'%'})) // 0
console.log(evalObject({a:1,b:1,operation:'^'})) // 1