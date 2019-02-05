var readline = require("readline-sync")

var fNum =  readline.questionInt("Please enter your first number: ")
var sNum = readline.questionInt("Please enter your second number: ")
var ops = ['add', 'sub', 'mul', 'div']
var operation = readline.keyInSelect(ops, "Please enter the operation to perform: ")

let result = 0;


switch (ops[operation]) {

    case 'add':
        result = fNum + sNum;
        break;
    case 'sub':
        result = fNum - sNum;
        break;
    case 'mul':
        result = fNum * sNum;
        break;
    case 'div':
        result = fNum / sNum;
        break;
}

console.log(result)