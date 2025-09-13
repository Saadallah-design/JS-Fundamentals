const args = process.argv.slice(2);
const argument = args;

if(argument) {
    console.log(`${argument} is ${argument}`)
} else if (argument === undefined){
    console.log(`${argument} is Undefined`)
}