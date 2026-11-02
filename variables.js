//Variables 

/*
var is short for variable. It is used to declare a variable in JavaScript. A variable is a container that holds data values. 
The standarding nameing convention for variables in JavaScript is camelCase, where the first word is lowercase and subsequent words are capitalized. For example, myVariableName.
*/

//----

//Declaring a variable using var
var myName = 'John Doe'; // Declares a variable named myName and assigns it the value 'John Doe'

//----

//Declaring a variable using let - the let keyword signals that the variable can be reassigned later in the code.
let meal = 'Tacos'; 
console.log(meal); // Outputs "Tacos"
meal = 'Burritos';
console.log(meal); // Outputs "Burritos"

//We can also declare variable using let without assigning a value. This is called declaring a variable without initialization.
let favoriteColor; // Output: undefined
favoriteColor = 'Blue';
console.log(favoriteColor); // Outputs "Blue"

//----

//Declaring a variable using const - the const keyword signals that the variable is constant and cannot be reassigned later or we will get an error.
// Must be assigned a value when declared.
const birthYear = 1990; 
console.log(birthYear); // Outputs "1990"

//Mathmatical Assignment Operators

//These operators are used to perform mathematical operations on variables and assign the result back to the variable.

let x = 10;
x += 5; // Equivalent to x = x + 5
console.log(x); // Outputs "15"

//Simply put, the += operator adds the value on the right to the variable on the left and assigns the result back to the variable on the left.

let y = 20;
y -= 5; // Equivalent to y = y - 5
console.log(y); // Outputs "15"

//The -= operator subtracts the value on the right from the variable on the left and assigns the result back to the variable on the left.

//Increment and Decrement Operators

//The increment operator (++) increases the value of a variable by 1.
let z = 5;
z++; // Equivalent to z = z + 1
console.log(z); // Outputs "6"

//The decrement operator (--) decreases the value of a variable by 1.
let a = 10;
a--; // Equivalent to a = a - 1
console.log(a); // Outputs "9"

//----

//String Interpolation - This is a way to embed variables and expressions inside a string using template literals. Template literals are enclosed by backticks (`) instead of single or double quotes.
let firstName = 'Isaiah';
let lastName = 'Virgil';
console.log(`My name is ${firstName} ${lastName}.`); // Outputs "My name is Isaiah Virgil."

//Typeof Operator - This operator is used to determine the data type of a variable or value. It returns a string indicating the type of the operand.
let unknown1 = 'Hello';
console.log(typeof unknown1); // Outputs "string"

let unknown2 = 42;
console.log(typeof unknown2); // Outputs "number"

let unknown3 = true;
console.log(typeof unknown3); // Outputs "boolean"  





