/* ReOrdering
There is a sentence which has a mistake in its ordering.
The part with a capital letter should be the first word.
Please build a function for re-ordering

Examples
>>> re_ordering('ming Yao')
'Yao ming'

>>> re_ordering('Mano donowana')
'Mano donowana'

>>> re_ordering('wario LoBan hello')
'LoBan wario hello'

>>> re_ordering('bull color pig Patrick')
'Patrick bull color pig'
*/

const reOrdering = text => {
  let upper = '';
  text = text.split(' ');

  for (let i = 0; i < text.length; i++) {
      if (text[i][0] === text[i][0].toUpperCase()) {
          upper = text[i];
          text.splice(i, 1);
      }
  }
  return [upper, ...text].join(' ');
}

console.log(reOrdering('ming Yao')) // 'Yao ming'
console.log(reOrdering('Mano donowana')) // 'Mano donowana'
console.log(reOrdering('wario LoBan hello')) // 'LoBan wario hello'
console.log(reOrdering('bull color pig Patrick')) // 'Patrick bull color pig'
console.log(reOrdering('jojo ddjajdiojdwo ana G nnibiial')) // 'G jojo ddjajdiojdwo ana nnibiial'
console.log(reOrdering('is one of those rare names that s both exotic and simple Adira')) //'Adira is one of those rare names that s both exotic and simple'
console.log(reOrdering('is an older name than annabel Amabel and a lot more distinctive')) //'Amabel is an older name than annabel and a lot more distinctive'
console.log(reOrdering('JoJo')) // 'JoJo'
console.log(reOrdering('a b c d e f g h i j k l m n o p q r s t u v w x y Z')) // 'Z a b c d e f g h i j k l m n o p q r s t u v w x y'
console.log(reOrdering('a b c d e f g h i j k l m N o p q r s t u v w x y z')) // 'N a b c d e f g h i j k l m o p q r s t u v w x y z'