
// Write a script that prints My number: <first argument converted in integer> 
// if the first argument can be converted to an integer:
// If the argument can’t be converted to an integer, print “Not a number”
// You must use console.log(...) to print all output
// You are not allowed to use var
// You are not allowed to use try/catch

const args = process.argv.slice(2);
let userInput = args[0];

// using a variable called number to store user input if it is a number 
const number = Number(userInput);

if(isNaN(number) || userInput === undefined)  {
    console.log("Not a number")
}   else if (!Number.isInteger(number) || userInput == number) {
    let intNumber = Math.trunc(number);
    userInput = intNumber;
    console.log("My number: " + userInput)
}   

