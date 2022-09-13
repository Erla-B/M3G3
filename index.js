// Variables assignment + Math
let num1 = 2;
const num2 = 3;

console.log(num1); // Output is 2

console.log(num1 = num2 + 1); // Output is 4

console.log(num1 = num1 * num2); // Output is 12


// String concatenation
const string = 'Hello' + ' ' + 'World';

console.log(string) // Output is 'Hello World'


// If statement
if (10 > 2) {
    console.log(true);
  }


// Arrays
let fruits = ['apple', 'orange', 'banana']; // Array with two elements
fruits.push('kiwi'); // Adds 'kiwi' to the array
console.log(fruits[2]); // Targets specific element, output is 'banana'
let total = fruits.length;
console.log(total); // Output is 4


// An object containing variables/values for a person
let person = {
    firstName: 'Erla',
    lastName: 'Baldursdóttir',
    age: 31,
}

console.log(person); // Outputs full name and age

person.eyeColor = 'Blue'; // Adding new property

console.log(person); // Outputs full name, age and eye color

delete person.eyeColor; // Removing property

console.log(person); // Outputs full name and age

console.log(person.age); // Outputs age

// Date and time
var today = new Date();
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
var dateTime = date+' '+time;

console.log(today); // Output is current time