// In these lines of code I will try to implement a count arguments counter
// first I will start by declaring a function that takes no arguments
// then inside it I will declare a variable that equals arguments length

function argumentsPassed () {
	
	let argumentCount = arguments.length;

	// Let's do an if condition
	if (argumentCount === 0) {
	console.log("No argument");

	} else if (argumentCount === 1){
	console.log("Argument found");
	} else {
	console.log("Arguments found")
	}
}

// now let's display these using console.log
// using the console.log will display 'undefined' 
// we can use only the function without console.log to print only message
// the task i think only specifies using console inside the function so I deleted it from below

argumentsPassed(1,2,3);
