// Day 3: Control Structures

// Activity 1: If-Else statements
// Task 1: Write a program that checks if a number is positive, negative or zero and logs the result to the console
let num = 0;
if (num > 0) {
  console.log(`num ${num} is positive`);
} else if (num < 0) {
  console.log(`num ${num} is negative`);
} else {
  console.log(`num ${num} is zero`);
}

// Task 2: Write a program to check if a person is eligible to vote (age > =18) and log the result to the console
const person = {
  name: "John",
  age: 32,
};

if (person.age >= 18) {
  console.log(`Person ${person.name} is eligible to vote`);
} else {
  console.log(`Person ${person.name} is not eligible to vote`);
}

// Activity 2: Nested if-else statements
// Task 3: Write a program to find the largest of three numbers and log the result to the console
let num1 = 10;
let num2 = 20;
let num3 = 5;
if (num1 > num2 && num1 > num3) {
  console.log(`num1 ${num1} is the largest number`);
} else if (num2 > num1 && num2 > num3) {
  console.log(`num2 ${num2} is the largest number`);
} else {
  console.log(`num3 ${num3} is the largest number`);
}

// Activity 3: Switch statements
// Task 4: Write a program that uses a swith case to determine the day of the week based on a number (1-7) and log the result to the console
let day = 3;
switch (day) {
  case 1:
    console.log("Sunday");
    break;
  case 2:
    console.log("Monday");
    break;
  case 3:
    console.log("Tuesday");
    break;
  case 4:
    console.log("Wednesday");
    break;
  case 5:
    console.log("Thursday");
    break;
  case 6:
    console.log("Friday");
    break;
  case 7:
    console.log("Saturday");
    break;
  default:
    console.log("Invalid day");
}

// Task 5: Write a program that uses a swith case to determine the grade of a student based on their marks (0-100) and log the result to the console
let marks = 90;
switch (true) {
  case marks >= 90 && marks <= 100:
    console.log("A");
    break;
  case marks >= 80 && marks < 90:
    console.log("B");
    break;
  case marks >= 70 && marks < 80:
    console.log("C");
    break;
  case marks >= 60 && marks < 70:
    console.log("D");
    break;
  case marks >= 40 && marks < 60:
    console.log("E");
    break;
  case marks <= 40 && marks >= 0:
    console.log("F");
    break;
  default:
    console.log("Invalid marks");
}

// Activity 4: Conditional (Ternary) operator
// Task 6: Write a program that uses a ternary operator to check if a number is even or odd and log the result to the console
let num4 = 5;
num4 % 2 === 0
  ? console.log(`num4 ${num4} is even`)
  : console.log(`num4 ${num4} is odd`);

// Activity 5: Combining Conditions
// Task 7: Write a program to check if a year using multiple conditions(divisible by 4 but not 100 unless also divisible by 400) and log the result to the console
let year = 2024;
if (year % 4 == 0 || (year % 100 != 0 && year % 400 == 0)) {
  console.log(`year ${year} is a leap year`);
} else {
  console.log(`year ${year} is not a leap year`);
}
