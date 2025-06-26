// Jenny has written a function that returns a greeting for a user. However, she's in love with Johnny, and would like to greet him slightly different. She added a special case to her function, but she made a mistake.

// Can you help her and fix this function?

function greet(name){
  greeting = "";
  if(name === "Johnny") {
    return "Hello, my love!";
  }
  greeting =  "Hello, " + name + "!";
  return greeting;
}

console.log(greet("John")); // returns "Hello, John!"
console.log(greet("Johnny")); // returns "Hello, my love!"
