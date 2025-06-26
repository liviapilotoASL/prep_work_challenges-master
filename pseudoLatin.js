// Pseudo Latin

// Create a function which takes a string as an argument and 
// moves the first letter of each word to the end of it, then adds "ay"
// to the end of the word. Leave punctuation marks untouched.

makeLatin("I speak latin")
// should return:
"Iay peaksay atinlay"

function makeLatin(str) {
    let words = str.split(' ');
    for (let i = 0; i < words.length; i++) {
        if (words[i].length > 0) {
            let firstLetter = words[i][0];
            let restOfWord = words[i].slice(1);
            words[i] = restOfWord + firstLetter + "ay";
        }
    }
    return words.join(' ');
}

console.log(makeLatin("I speak latin")); // "Iay peaksay atinlay"
console.log(makeLatin("Hello, world!")); // "elloHay, orldway!"
console.log(makeLatin("This is a test.")); // "hisTay siay a