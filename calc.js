//write a function called calc that takes 3 arguments the first 2 are numbers and the third is an arithmetic operator, 
// so it is either + , -, *, /
// and it executes the appropriate operation according to the provided arithmetic operator.
// make sure you test your function with all 4 arithmetic operations

// in case the third arguments is  / or * and the second argument is not provided, the second argument should default to one.
// in case the third arguments is +  or  - and the second argument is not provided, the second argument should default to zero.

//Example:
function calc(num1, num2, operator) {
    if (operator === undefined) {
        operator = num2;
        if (operator === '/' || operator === '*') {
            num2 = 1;
        } else if (operator === '+' || operator === '-') {
            num2 = 0;
        }
    }
    switch (operator) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            return num1 / num2;
        default:
            console.log('Invalid operator');
    }
}


console.log(calc(10,5,'+')) //15
console.log(calc(10,"/"))  //10
console.log(calc (30,"*"))  //30
console.log(calc (2,"+"))  //2
console.log(calc (3,"-"))  //3
