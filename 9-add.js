const args = process.argv.slice(2);
const firstInteg = Number(args[0]);
const secondInteg = Number(args[1]);


function addition (a, b) {
    let sum = a + b;
    return sum;

}
console.log(addition(firstInteg, secondInteg));


