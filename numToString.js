// write a function which takes one argument which is a number
// and returns the same value as a string

numberToString(10) 
// returns
"10" 

function numberToString(num) {
    return num.toString();
}

console.log(numberToString(10)); // "10"
console.log(numberToString(0)); // "0"
console.log(numberToString(-5)); // "-5"