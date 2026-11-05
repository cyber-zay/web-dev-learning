//Functions - Functions are reusable pieces of code that perform tasks, process data, and possibly return values

//------------------------------------------------------------

//One way to create a function is with a function declaration

function /*function key word*/ greeting() /*function name*/ {
    console.log("Hello, world!");
} 
    //A function decleration consists of the function keyword, a name, parentheses, and a block of code
    //A function decleration does not run the code, it must be called to be used

//One way to call a function is by using its name followed by parentheses

greeting() //This executes the function body (e.g, the code within the curly braces)


//------------------------------------------------------------

//Parameters and arguments
    //When declaring a function, we can specify its parameters. Parameters allow functions to accept input(s) and perform a task using the input(s).
    //We use parameters as placeholders for information that will be passed to the function when it is called. 
    
function calculateArea(width/* parameter */, height/* parameter */) {
    console.log(width * height) //treated like variables in a function
}

//Calling a function with parameters
calculateArea(5 /*argument*/, 10/*argument*/) //Specify values in the parentheses that the function name
    //Arguments can be passed as values or variables


//------------------------------------------------------------

//Default parameters
    //Default parameters allow parameters to have a predetermined value in case no argument is passed into the function or if the argument is undefined when called.

function greetUser(name = "Guest"){
    console.log(`Hello, ${name}!`)
}

greetUser() // Uses the default value "Guest"
greetUser("Alice") // Uses the provided argument "Alice"

//------------------------------------------------------------

//Return
    //When a function is called the computer will run functions code and evaluate the results.
    //By default the resulting value is undefined.

function rectangleArea(width1, height1) {
    let area = width1 * height1
}
console.log(rectangleArea(5,7)) //Prints undefined

//To pass back information from a function call we use a return statement

function rectangleArea1(width2, height2) {
    let area = width2 * height2
    return area //To create a return statement, we use the return keyword followed by the value that we wish to return.
}
console.log(rectangleArea1(5,7)) //Prints 35

//------------------------------------------------------------

//Helper Functions - functions being called within other functions
    //We can also use the return value of a function inside another function.

//Function that converts Celsius to Fahrenheit
function multiplyByNineFifths(number) {
    return number * 9/5;
}

function getFahrenheit(celsius) {
    return multiplyByNineFifths(celsius) + 32;
}

getFahrenheit(15); //Returns 59