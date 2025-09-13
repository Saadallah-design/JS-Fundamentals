const args = process.argv.slice(2);
let firstArg = args[0];

let isNumber = Number(firstArg);

if (isNaN(isNumber)) {
    console.log("Missing size");
}  else if (isNumber <= 0 ) {
    process.exit();
}else {
    for (let i = 0; i < isNumber; i++) {
    let block = "";
    for (let j = 0; j < isNumber; j++) {
    block += "X";
    }
    console.log(block);
} 
}