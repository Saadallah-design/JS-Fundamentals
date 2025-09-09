// In these lines of code I will try to implement a count arguments counter
// first I will start by declaring a function that takes no arguments
// then inside it I will declare a variable that equals arguments length
// the test says that arguments should be passed to the script

const args = process.argv.slice(2);
const argumentCount = args.length;

if(argumentCount === 0) {
console.log("No argument");
} else if(argumentCount === 1){
console.log("Argument found");
} else {
console.log("Arguments found");
}
