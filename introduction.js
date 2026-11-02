console.log('Hello, World!'); // This line prints "Hello, World!" to the console. This is a single line comment.

/* This is a multi-line comment.
 It can span multiple lines and is often used for longer explanations or documentation.
*/

console.log(/*IGNORE COMMENT*/ 'This is another message to the console.');


// Below are the different Data Types in JavaScript:

// 1. String: Represents textual data enclosed in single or double quotes. Single quotes are more common.
let name = 'John Doe'; // String

// 2. Number: Represents numeric values, both integers and floating-point numbers. (e.g, -2, 0, 3.14)
let age = 30; // Number

// 3. Boolean: Represents a logical entity that can have two values: true or false.
let isStudent = true; // Boolean

// 4. Undefined: A variable that has been declared but not assigned a value.
let address; // Undefined

// 5. Null: Represents the intentional absence of any object value.
let city = null; // Null

// 6. Object: A collection of properties, where each property is a key-value pair.
let person = {
    firstName: "Jane",
    lastName: "Doe",
    age: 25
}; // Object

// 7. Symbol: A unique and immutable primitive value that can be used as a key for object properties.
let uniqueId = Symbol("id"); // Symbol

// 8. BigInt: Represents whole numbers larger than 2^53 - 1, which is the largest number JavaScript can reliably represent with the Number primitive.
let bigNumber = 1234567890123456789012345678901234567890n; // BigInt

//Arithmetic Operators

console.log(5 + 3); // Addition: Outputs 8
console.log(5 - 3); // Subtraction: Outputs 2
console.log(5 * 3); // Multiplication: Outputs 15
console.log(5 / 3); // Division: Outputs 1.6666666666666667
console.log(5 % 3); // Modulus: Outputs 2 (remainder of division). Returns the number that remains after the right-hand number divides into the left-hand number as many times as it evenly can
console.log(5 ** 3); // Exponentiation: Outputs 125 (5 raised to the power of 3)

//Comparison Operators

console.log(5 === 5); // Equality: Outputs true
console.log(5 !== 3); // Inequality: Outputs true
console.log(5 > 3); // Greater than: Outputs true
console.log(5 < 3); // Less than: Outputs false
console.log(5 >= 3); // Greater than or equal to: Outputs true
console.log(5 <= 3); // Less than or equal to: Outputs false

//String concatenation - You can combine strings using the + operator. This is called string concatenation.
console.log('John, ' + 'Doe!'); // Outputs "Hello, World!"
console.log('My name is ' + person.firstName + ' and I am ' + person.age + ' years old.'); // Outputs "My name is John Doe and I am 30 years old."

//Properties - All data types have access to specific properties that are passed down to each instance.
console.log('Hello'.length); // Outputs 5, which is the length of the string "Hello"

//Methods - These are actions we can perform on data types. For example, strings have methods like toUpperCase() and toLowerCase().

/* 
We call methods using the dot notation, which is a period (.) followed by the method name and parentheses.
When we use console.log(), we’re calling the .log() method on the console object.
*/

console.log('hello'.toUpperCase()); // Outputs "HELLO"
console.log('WORLD'.toLowerCase()); // Outputs "world"
console.log('Hey'.startsWith('H')); // Prints true
