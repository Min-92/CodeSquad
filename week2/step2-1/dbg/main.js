const sum = require("./util").sum;

function runProgram(arr) {
    const result = sum(arr);
    return `result is ${result}`;
}

const result = runProgram([undefined, 1,2,3,4,5,-1,"3"]);
console.log(result); //result is 14