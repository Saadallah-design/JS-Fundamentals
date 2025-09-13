const args = process.argv.slice(2);
const argument = args;


if(!argument[0] === undefined){
    console.log("undefined is undefined")
} else if(argument[1] === undefined) {
    console.log(`${argument} is Undefined`)
} else {
    console.log(argument[0] + " is " + argument[1])
}