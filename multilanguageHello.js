// write a function which takes two argument: name and the language and it
// returns a personalized greeting in the selected language 
// If no language is provided it defaults to English. 
const greetings = {
    english: 'Welcome',
    czech: 'Vitejte',
    danish: 'Velkomst',
    dutch: 'Welkom',
    estonian: 'Tere tulemast',
    finnish: 'Tervetuloa',
    flemish: 'Welgekomen',
    french: 'Bienvenue',
    german: 'Willkommen',
    irish: 'Failte',
    italian: 'Benvenuto',
    latvian: 'Gaidits',
    lithuanian: 'Laukiamas',
    polish: 'Witamy',
    spanish: 'Bienvenido',
    swedish: 'Valkommen',
    welsh: 'Croeso'
}
// example:
//greeting("bob", "spanish") 
// returns 
//'Bienvenido, bob'

function greeting(name, language = 'english') {
    return greetings[language] + ', ' + name;
}

console.log(greeting("bob", "spanish")); // 'Bienvenido, bob'
console.log(greeting("alice", "french")); // 'Bienvenue, alice'
console.log(greeting("john")); // 'Welcome, john'
console.log(greeting("maria", "german")); // 'Willkommen, maria'