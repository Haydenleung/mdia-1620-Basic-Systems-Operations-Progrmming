// Declare
// Declare a variable called electronics devices
// camdel case
var eletronicDevices;

// pascal case
var ElectronicDevices;

// snake case
var Electronic_Devices;

// Intialise the variable age to the value to 14.
// Use camelCase.

var age = 14;
console.log(age);

// String
var name = "Monika"

// Boolean
// Initialise the variable called proceed to the value true.
var proceed = true;
var i = 0;

while(proceed){
    i++;
    proceed = false;
}
console.log(i)

// Objects
/**
 * 6-4-1 Create a variable called grannySmith and add the
 * following values (use camelCase)
 * color of the apple is green
 * origin location is australia
 * origin date is 1868
 * Then console log out the colour from the object
 */

var grannySmith = {
    color: "green",
    originLocation: "australia",
    originDate: 1868
};
console.log(grannySmith)
console.log(grannySmith.color)

// 6-5-1 Initialise the variable x to a function called 
// myFunction with the values 1 and 3, Multiply the
// two numbers. Consol log the variable x afterwards

var x = myFunction(1,3)

function myFunction(numOne, numTwo){
    return numOne * numTwo;
}

console.log(x)