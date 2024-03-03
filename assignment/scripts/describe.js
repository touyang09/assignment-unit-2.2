// WHAT IS THIS EVEN DOING?

// For questions 1-3, each code block is syntactically and logically correct. Your job is to describe what is happening. 
// They are in isolation -- variables in one question do not affect other questions.
// Describe the code as it would be run, and make sure you give us the console.log's value at the end.
// (Don't just say 'we console log the variable' -- instead say something like 'we console log 'yes'')


// 0. WRITE YOUR DESCRIPTION HERE
// //EXAMPLE. We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 2 is equal to 2, so
// we console.log 'yes'.

//CODE
/*
let number = 1;

number++;

if (number >= 2) {
  console.log('yes');
}

*/


// 1. WRITE YOUR DESCRIPTION HERE
// We make a variable called name and set it to Dane as a string.
// We then create a if-else conditional statement.
// If the variable 'name' equals the value and type for string 'Mary', then we console.log "Hi, Mary!"
// Else if this is false, the variable 'name' does not equal string "Mary", then we console.log "How do you do?"
// In summary, the variable 'name" does not equal to "Mary", so it will output "How do you do?"

//CODE
/*
let name = 'Dane';

if (name === 'Mary') {
  console.log('Hi, Mary!');
} else {
  console.log('How do you do?');
}


*/

// 2. WRITE YOUR DESCRIPTION HERE
// We make a variable called secret and it is not assigned a value yet. It's undefined.
// We make a varaible called code and set it to 123 as a number
// This line checks if the value of 'code' is equal to '123' in value and type. This condition is true.
// Variable secret is now assigned the string value 'super' since the if statement above was true. 
// 'code' is multipled by 2, so code is now assigned a value of 246 after the operation. 
// The second if condition checks if updated value of 'code' which is now 246 is greater than 250. This is false.
// We then console.log 'super'

//CODE
/*
let secret;

let code = 123;

if(code === 123) {
  secret = 'super';
  code = code * 2;
}

if (code > 250) {
  secret = 'duper'
}

console.log(secret)

*/

// 3. WRITE YOUR DESCRIPTION HERE
// Declare a variable called isStudent and assign it the value of true.
// Declare a variable called age and assign it the value of a number 34.
// Declare a variable called zip and assign it the value of a number 55407.
// The code checks all the conditions of if, else if and else. 
// It would then console.log "Welcome to Prime!" since this condition of isStudent is true, while all the above were false.  

//CODE
/*
let isStudent = true;
let age = 34;
let zip = 55407;

if (isStudent === true && zip > 80000 ) {
  console.log(`You're a student on the West Coast!`);
} else if (isStudent === false || age < 30) {
  console.log('What are your hobbies?');
} else if (isStudent === true) {
  console.log('Welcome to Prime!');
} else {
  console.log('How about the weather?')
}

*/




// REVERSE
// Now, for questions 4-6, we'll give you a description and some code. 
// Some of the code will NOT match the description.
// Comment above the problem code, and describe a potential solution.
// Look closely -- things are logically incorrect or missing and wrong in the code!

// EXAMPLE
// 0. (DESCRIPTION OF CORRECT BEHAVIOR)
// We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 
// -- it is, so we console.log 'yes'

//CODE
/*
let number = 1;

// FIX - number-- decrements number, but the instructions ask to increment. 
// Should be number++.
number--; 

if (number >= 2) {
  console.log('yes');
}

*/



//4. We start with three variables -- colorOne is set to 'blue' and 
// colorTwo is set to 'red', and mix is set to true. We check if mix is true 
// -- it is, so we set colorOne and colorTwo to 'purple'

/*
// FIX - colorOne is set to red, but the instruction ask it to be 'blue'
// Should be blue
let colorOne = 'red';

// FIX - colorTwo is set to blue, but the instruction ask it to be 'red'
// Shoule be red
let colorTwo = 'blue';
let mix = true;

if (mix === true) {
  colorOne = 'purple';
  colorTwo = 'purple';
}
*/

//5. We start with two variables -- temp is set to 40 and time is set to 4.
// We check if temp is higher than 39 and if time is greater or equal to  4 
// -- they are so we console.log 'throw away the food!'

/*
let temp = 40;
const time = 4;

// FIX - The operator is incorrect and set to OR ||
// Should be a AND operator &&. Replace the OR || operator with AND &&
if (temp > 39 || time >= 4) {
  console.log('throw away the food!');
}
*/

//6. We start with two variables -- age is set to 21 and minAge is set to 21.
// We check if age is greater than or equal to minAge 
// -- it is, so we console.log 'enter'.

/*
let age = 21;
const minAge = 21;

// FIX - if statement is setup as minAge less than or equal to age, but instruction said age is greater than or equal to minAge
// Should be age >= minAge 
// Then reverse the console.log 'enter' to be the if statement and 'no entry' to be in the else statement. It's correct logic.  
if(minAge <= age) {
  console.log('no entry');
} else {
  console.log('enter');
}
*/

