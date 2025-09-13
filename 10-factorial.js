// working with factorial numbers
// The first argument is integer (argument can be cast as integer) 
// used for computing the factorial

const args = process.argv.slice(2);
// using Number(arg[0]) worked but when provided with a float it doesn't
// so using parseInt(args[0], 10) converts str to number. 10 is called radix 
//It tells JavaScript what number system to use when parsing the string.
// 10 means decimal. Always use it for normal numbers to avoid unexpected behavior.
const firstInt = parseInt(args[0], 10);

function factorial(n) {
    if (isNaN(n) || n === 0) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}
console.log(factorial(firstInt));