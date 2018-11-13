// Assign an empty array to a students variable.
let students = [];

// Use the push method to add a student called Sarah

// students.push("Sarah");

// console.log(students);

// Use prompt to ask the user for their name, add it to the array.

// let name = prompt("What is your name?");

// students.push(name);

// console.log(students);

// Use a loop to ask the user for 3 names, add them all to the array.
// Loop through the array and use the alert method to read each user back to the user.

for (let i = 0; i <=2; i += 1) {
  let name = prompt("What is your name?");
  students.push(name);
}

for (let i = 0; i <=2; i += 1) {
  alert(students[i])
}

console.log(students)