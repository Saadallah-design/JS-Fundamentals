// # Task 3 Value of my argument
// the objective of this exercise is to print the value of my argument
// if no argument is passed to the script I should print "No argument"
// if an argument is passed to the script I should print its value

// to get the arguments passed to the script I will use process.argv
// process.argv is an array that contains the command line arguments
// the first two elements are the path to the node executable and the path to the script
// so I will slice the array from index 2 to get only the arguments

// The task specifies to not use .length property
// at first i used if(argument === 0) but the test failed
// because argument is an array and it is never equal to 0
// #########
// so I will check if the first element of the array is truthy
// to do that I will use the not operator !
// if it is true I will print "No argument"
// if anything else I will print the value of the argument

const args = process.argv.slice(2);
const argument = args;

if (!argument[0]) {
  console.log("No argument");
} else {
  console.log(`${argument}`);
} 