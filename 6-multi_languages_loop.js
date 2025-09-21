// in this i will use for loop and an array with the lines to be printed
const lines = ["C is fun", "Python is cool", "JavaScript is amazing"]
let output = "";
for (let i = 0; i < lines.length; i++) {
    output += lines[i] + "\n";
}
    // We must remove this trailing newline to match the expected output.
    // We can use the substring() method for this.
output = output.substring(0, output.length - 1);

// Print the final, single string
console.log(output);