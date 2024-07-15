// Day-2 : Operators

// Activity 1: Arithmetic operators
// task 1: write a program to add two numbers and log the result to the console
let num1 = 10;
const num2 = 20;
const num3 = 3;
const num4 = String(num2);
let sum = num1 + num2;
console.log(sum);

// task 2: write a program to subtract two numbers and log the result to the console
let sub = num2 - num1;
console.log(sub);

// task 3: write a program to multiply two numbers and log the result to the console
let mul = num1 * num2;
console.log(mul);

// task 4: write a program to divide two numbers and log the result to the console
let div = num2 / num1;
console.log(div);

// task 5: write a program to calculate the remainder of two numbers and log the result to the console
let rem = num2 % num3;
console.log(rem);

// Activity 2: Assignment operators
// task 6: Use the += operator to add a number to a variable and log the result to the console
num1 += 10;
console.log(num1);

// task 7: Use the -= operator to subtract a number from a variable and log the result to the console
num1 -= 5;
console.log(num1);

// Activity 3: Comparison operators
// task 8: Write a program to compare two numbers using > and < and log the result to the console
if (num1 > num2) {
  console.log("num1 is greater than num2");
} else if (num1 < num2) {
  console.log("num1 is less than num2");
}

// task 9: Write a program to compare two numbers using >= and <= and log the result to the console
if (num1 >= num2) {
  console.log("num1 is greater than or equal to num2");
} else if (num1 <= num2) {
  console.log("num1 is less than or equal to num2");
}

// task 10: Write a program to compare two strings using == and === and log the result to the console
if (num2 == num4) {
  console.log(`num2 ${num2} is equal to num4 ${num4}`);
} else {
  console.log(`num2 ${num2} is not equal to num4 ${num4}`);
}
if (num2 === num4) {
  console.log(`num2 ${num2} is equal to num4 ${num4}`);
} else {
  console.log(`num2 ${num2} is not equal to num4 ${num4}`);
}

// Activity 4: Logical operators
// task 11: Write a program that uses the && operator to combine two conditions and log the result to the console
if (num2 > num1 && num2 > num3) {
  console.log(`num2 ${num2} is greater than num1 ${num1} and num3 ${num3}`);
} else {
  console.log(`num2 ${num2} is not greater than num1 ${num1} and num3 ${num3}`);
}

// task 12: Write a program that uses the || operator to combine two conditions and log the result to the console
if (num1 > num2 || num1 > num3) {
  console.log(`num1 ${num1} is greater than num2 ${num2} or num3 ${num3}`);
} else {
  console.log(`num1 ${num1} is not greater than num2 ${num2} or num3 ${num3}`);
}

// task 13: Write a program that uses the ! operator to negate a condition and log the result to the console
const num5 = !num1;
console.log(num5);
if (!num1 > num2) {
  console.log(`num1 ${num1} is not greater than num2 ${num2}`);
} else {
  console.log(`num1 ${num1} is greater than num2 ${num2}`);
}

// Activity 5: Ternary operator
// task 14: Write a program that uses the ternary operator to check if a number is positive or negative and log the result to the console.
num1 > 0
  ? console.log(`num1 ${num1} is positive`)
  : console.log(`num1 ${num1} is negative`);
