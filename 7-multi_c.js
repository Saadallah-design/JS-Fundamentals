const args = process.argv.slice(2);
const userInput = args[0];
const number = Number(userInput);
const message = "C is fun"


if (userInput != number) {
    console.log("Missing number of occurences")
} else if (number <= 0) {
    return 0;
}
    else {
    for (let i = 0; i < number; i++) {
        console.log(message);
    }
}