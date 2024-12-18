// Commenting Made Easy: A Beginner's Task
// Preface: Why Comments Matter
// As a beginner programmer, it's essential to understand how to manipulate strings and work with different formatting styles. 
// This challenge will help you practice these skills by creating a function that wraps text in various programming comment styles.

// Being able to wrap text in comments is a valuable skill in programming. Comments are crucial for documenting code, explaining complex logic, 
// and providing context for future developers (or yourself) who may work on the code later. They help improve code readability and maintainability, 
// making it easier to understand the purpose and functionality of different sections of code. Furthermore, different programming languages have their 
// own conventions for comments, so knowing how to format them correctly is an important aspect of writing clean and professional code.

// This challenge teaches the basics of comment formatting across various languages. However, for a full understanding of each language's commenting 
// conventions and capabilities, it is essential to consult the official documentation of that language.

// Specification
// For Bash style comments, use # at the beginning of each line.
// For Bash Multiline style comments, use : " at the beginning and " at the end, each on their own line.
// For JavaDoc style comments, use /** at the beginning and */ at the end, each on their own line, with each line of the original text prefixed by *.
// For Python style comments, use # at the beginning of each line.
// For Python Multiline style comments, use """ at the beginning and end of the text, each on their own line.
// For JavaScript style comments, use // at the beginning of each line.
// For JavaScript Multiline style comments, use /* at the beginning and */ at the end, each on their own line.
// For SGML (HTML) style comments, use <!-- at the beginning and --> at the end, with each line wrapped individually.
// For SQL style comments, use -- at the beginning of each line.
// Focus points
// Make sure to add a space between the comment symbols and the text where applicable.
// Use '\n' as line separator when wrapping text.
// The text to wrap will never contain special characters that need to be escaped.
// The text to wrap can consist of one or multiple lines, using '\n' as line separator.
// Task Description
// Your task is to create a function that takes two parameters:

// text: A string containing the text to be wrapped in comments.
// style: A string indicating the style of comments to use. It can be one of the following:
// "Bash"
// "Bash Multiline"
// "JavaDoc"
// "Python"
// "Python Multiline"
// "Javascript"
// "Javascript Multiline"
// "SGML"
// "SQL"
// The function should wrap the given text in the appropriate comment style and return the result.

// Examples
// Input:

// text = "Hello World!"
// style = "Bash"
// Output:

// # Hello World!
// Input:

// text = "Hello World!"
// style = "JavaDoc"
// Output:

// /**
//  * Hello World!
//  */
// Input:

// text = "Hello\nWorld!"
// style = "SGML"
// Output:

// <!-- Hello -->
// <!-- World! -->
// Testing
// You can test your function using a set of predefined test cases that cover both single-line and multi-line inputs for each comment style.

// Good luck, and happy commenting!

const comment = (text, style) => {
    switch (style) {
        case 'Bash':
        case 'Python':               return text.split('\n').map(e => '# ' + e).join('\n');
        case 'Bash Multiline':       return ': "\n' + text + '\n"';
        case 'JavaDoc':              return '/**\n' + text.split('\n').map(e => '* ' + e).join('\n') + '\n*/';
        case 'Python Multiline':     return '"""\n' + text + '\n"""';
        case 'Javascript':           return text.split('\n').map(e => '// ' + e).join('\n');
        case 'Javascript Multiline': return '/*\n' + text + '\n*/';
        case 'SGML':                 return text.split('\n').map(e => '<!-- ' + e + ' -->').join('\n');
        case 'SQL':                  return text.split('\n').map(e => '-- ' + e).join('\n');
    }
}

console.log(comment("Hello World!", "Bash")) // "# Hello World!"
console.log(comment("Hello World!", "Bash Multiline")) // ': "\nHello World!\n"'
console.log(comment("Hello World!", "JavaDoc")) // "/**\n* Hello World!\n*/"
console.log(comment("Hello World!", "Python")) // "# Hello World!"
console.log(comment("Hello World!", "Python Multiline")) // '"""\nHello World!\n"""'
console.log(comment("Hello World!", "Javascript")) // "// Hello World!"
console.log(comment("Hello World!", "Javascript Multiline")) // "/*\nHello World!\n*/"
console.log(comment("Hello World!", "SGML")) // "<!-- Hello World! -->"
console.log(comment("Hello World!", "SQL")) // "-- Hello World!"

console.log(comment("Hello\nWorld!", "Bash")) // "# Hello\n# World!"
console.log(comment("Hello\nWorld!", "Bash Multiline")) // ': "\nHello\nWorld!\n"'
console.log(comment("Hello\nWorld!", "JavaDoc")) // "/**\n* Hello\n* World!\n*/"
console.log(comment("Hello\nWorld!", "Python")) // "# Hello\n# World!"
console.log(comment("Hello\nWorld!", "Python Multiline")) // '"""\nHello\nWorld!\n"""'
console.log(comment("Hello\nWorld!", "Javascript")) // "// Hello\n// World!"
console.log(comment("Hello\nWorld!", "Javascript Multiline")) // "/*\nHello\nWorld!\n*/"
console.log(comment("Hello\nWorld!", "SGML")) // "<!-- Hello -->\n<!-- World! -->"
console.log(comment("Hello\nWorld!", "SQL")) // "-- Hello\n-- World!"