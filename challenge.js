// Create a new variable called user, set the value to: tom

let user = "Tom";

console.log(user);

// Write an if statement: if the user's name is tom, say 'Hello Tom'
// Add an else condition: say 'Hello someone other than Tom'

if (user === "Tom") {
  console.log("Hello Tom!");
} else {
  console.log(`Hello ${user}!`);
}

// Add a new variable called age, set the value to: 18

// let age = 18;

// If the user is 18, say 'welcome to the casino!'
// Research 'prompt'. Use it in your code to ask the user for their age.
// If the user is less than 18 years old, use the alert method to deny entry.

let age = prompt("How old are you?");

if (age >= 18) {
  console.log("Welcome to the casino!");
} else {
  alert("You are too young. Entry denied!");
}