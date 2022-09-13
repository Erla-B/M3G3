// This is my first JavaScript code!
console.log('Hello World!');

// Learning about variables
let Name = 'Erla';


// Variables can not be reserved keywords and should be meaningful. They can't start with a number or contain space or a hyphen.

// Naming convention - Case sensitive
let firstName = 'Erla';
let lastName = 'Baldursdóttir';

// Declare each variable in a single line

// Learning about constants
const interestRate = 0.3;

// You can't reassign constants

// Primitive Types
let name = 'Erla'; // String Literal
let age = 31; // Number Literal
let isApproved = true; // Boolean Literal
let middleName // Undefined
let selectedColor = null; // To clear the value of a variable

// Reference Types
let person = {      // Person object
    name: 'Erla',
    age: 31
};

// Dot Notation
person.name = 'John';

// Bracket Notation
person['name'] = 'Mary';

// Arrays
let selectedColors = ['red', 'blue']; // Array with two elements
selectedColors[2] = 1; // Adding to the array. Can be different type of element
console.log(selectedColors[0]); // Targeting specific element
// Array is a data structure that we use to represent a list of items

// Functions. A set of statements that performs a task or calculates a value
function greet(name) {      // Performing a task
    console.log('Hello ' + name + ' ' + lastName)
}

function square(number) {   // Calculating a value
    return number * number;
}

square(2);
console.log(square(2));   