const calculator = require("./calculator.js");
console.log(calculator);
const add = calculator.add
let val = add(1,2)
console.log(`1+2=${val}`);
let sub = calculator.subtract(5,2);
console.log(sub)