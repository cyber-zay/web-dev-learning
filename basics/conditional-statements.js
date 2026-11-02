/*
If statements 

If statements are used to make decisions in code based on certain conditions. 
They allow the program to execute different blocks of code depending on whether a specified condition evaluates to true or false.
*/

// Example of an if statement

if (true) /* Inside the parentheses a condition is provided that evaluates to true or false */ {
    console.log("This condition is true!");
    //Prints: "This condition is true!"
    //If the condition evaluates to true, the code inside the curly braces will execute. If it evaluates to false, the code inside the curly braces will be skipped.
}

//-------------------------------------------


/*
If else statements

If else statements are used to execute one block of code if a condition is true, and another block of code if the condition is false. 
This allows for more complex decision-making in the code.
*/

// Example of an if else statement

if (false) {
    console.log("The code inside this block will not execute because the condition is false.");
} else {
    console.log("But the code inside this block will execute because the condition is false.");
    //Prints: "But the code inside this block will execute because the condition is false."
    //If the condition evaluates to true, the code inside the first block will execute. If it evaluates to false, the code inside the else block will execute.
}
    //An else statement must be paired with an if statement. It cannot be used on its own.
    //Allow us to automate decisions to yes or no questions in our code, also known as binary decisions.


//-------------------------------------------


/*
Comparison operators

Comparison operators are used to compare two values and return a boolean value (true or false) based on the comparison.
*/

// Example of comparison operators

lessThan = 5 < 10; // true
greaterThan = 10 > 5; // true
equalTo = 5 === 5; // true
notEqualTo = 5 !== 10; // true
lessThanOrEqualTo = 5 <= 5; // true
greaterThanOrEqualTo = 10 >= 5; // true

//Comparison operators compare the code values on the left and right side of the operator.
//Comparison operators can also be used on other data types, such as strings. 
 
'apples' === 'oranges'; // false

//-------------------------------------------

/*
Logical operators

Logical operators are used to combine multiple conditions and return a boolean value (true or false) based on the combined conditions.
These can be used to create more complex decision-making in the code.
*/

// Example of logical operators

// The AND operator (&&) returns true if both conditions are true, and false otherwise.
let stoplight = 'green';
let pedestrian = 'no';
if (stoplight === 'green' && pedestrian === 'no') {
    console.log("You can go!");
    //Prints: "You can go!"
} else {
    console.log("You must stop!");
    //Prints: "You must stop!"
}  


// The OR operator (||) returns true if at least one of the conditions is true, and false if both conditions are false.
let day = 'Saturday';
if (day === 'Saturday' || day === 'Sunday') {
    console.log("It's the weekend!");
    //Prints: "It's the weekend!"
} else {
    console.log("It's a weekday.");
    //Prints: "It's a weekday."
}

//If the first condition is true, the second condition will not be evaluated. This is known as short-circuit evaluation.
//Only if the first condition is false will the second condition be evaluated. This can be useful for optimizing code performance.
//The code in else will only execute if both conditions are false.

    
//The NOT operator (!) returns true if the condition is false, and false if the condition is true.

let excited = true;
console.log(!excited); // false

let sleepy = false;
console.log(!sleepy); // true


//-------------------------------------------


/*
Truthy and Falsy

Truthy and falsy are used to check if a value is considered true or false in a boolean context but not necessarily equal to true or false.

Truthy values are values that are considered true in a boolean context. 
Examples of truthy values include non-empty strings, non-zero numbers, and objects.

Falsy values are values that are considered false in a boolean context. 
Examples of falsy values include false, 0, "", null, undefined, and NaN.
*/

// Example of truthy and falsy values

let myVariable = 'I exist!';
if (myVariable) {
    console.log(myVariable); //prints: "I exist!"
} else {
    console.log('The variable does not exist.'); //This code will not execute because myVariable is truthy or non-falsy and contains a value that is considered true in a boolean context.
}

/*
Examples of falsy values:
- 0
- ""
- null
- undefined
- NaN
*/

let numberOfApples = 0;
if (numberOfApples) {
    console.log("You have apples!");
} else {
    console.log("You have no apples."); //prints: "You have no apples."
    //This code will execute because numberOfApples is falsy or contains a value that is considered false in a boolean context.
}

//-------------------------------------------

/* 
Truthy and falsy assignments

You can use truthy and falsy values to assign default values to variables. 
*/

//Example that assigns a default name if a user does not provide one (falsy value)

let userName = ''; // An empty string is a falsy value
let defaultName;

if (userName) {
    defaultName = userName;
} else  {
    defaultName = 'Friend';
}

console.log(defaultName); //prints: "Friend"


//This can be further simplified using the logical OR operator (||) to assign a default value if the first value is falsy.

let userName2 = ''; // An empty string is a falsy value
let defaultName2 = userName2 || 'Friend';

console.log(defaultName2); //prints: "Friend"

    //This is referred to as short-circuit evaluation, where the second value is only evaluated if the first value is falsy. This can be useful for assigning default values in a concise manner.

//-------------------------------------------

/*
Ternary operator

A ternary operator is a shorthand way of writing an if else statement. 
*/

//An example of an if else statement that we can convert to a ternary operator

let isNightTime = true;
if (isNightTime) {
    console.log("Turn on the lights!");
} else {
    console.log("Turn off the lights!");
}

//This can be converted to a ternary operator as follows:

let isNightTime2 = true;
isNightTime2 ? console.log("Turn on the lights!") : console.log("Turn off the lights!");

//The syntax for a ternary operator is: condition ? expressionIfTrue : expressionIfFalse
//Can be used for conditions that evaluate to true or false, and can be used to assign values to variables based on a condition.
//The ternary operator can be useful for writing concise code, but it can also make code less readable if overused or used in complex situations.

//-------------------------------------------

/* 
Else if statements

We can add additional conditions to an if else statement using else if statements. 
The else if statement allows for more than two possible outcomes based on different conditions.
You can add as many else if statements as needed to handle different conditions, but only one block of code will execute based on the first condition that evaluates to true.
*/

//The else statement always comes after the if statement and before the else statement. 

//Example of an if else if statement using a traffic light scenario

let stopLight = 'yellow';

if (stopLight === 'red') {
    console.log("Stop!");
} else if (stopLight === 'yellow') {
    console.log("Slow down!");
} else if (stopLight === 'green') {
    console.log("Go!");
} else {
    console.log('Caution, unknown!');
}

//if, else if, and else statements are read top to bottom. So the first condition that evaluates to true from top to bottom will execute and the rest will be skipped.

//-------------------------------------------

/*
Switch statements

Else if statements are great if we have to check multiple conditions. In programming we often have to check multiple values and handle them differently.

Imagine we have to check 100 different values. Using if else statements would be cumbersome and inefficient. 

Instead, we can use a switch statement to handle multiple conditions more efficiently.
*/

//Example of a switch statement using a grocery item.

let groceryItem = 'papaya';

switch (groceryItem) {
    case 'tomato':
        console.log('Tomatoes are $0.49');
        break;
    case 'papaya':
        console.log('Papayas are $1.29');
        break;
    case 'banana':
        console.log('Bananas are $0.79');
        break;
    default:
        console.log('Invalid item');
        break;
}