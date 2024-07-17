// Day 5: Functions

// Activity 1: Function declaration
// task 1: write a function to check if a number is even or odd and log the result to the console
function isEven(num) {
  if (num % 2 === 0) {
    console.log(`${num} is even`);
  } else {
    console.log(`${num} is odd`);
  }
}
isEven(5);
isEven(6);

// task 2: write a function to calculate the square of a number and return the result
function square(num) {
  return num * num;
}
num = 7;
console.log(`Square of ${num} is `, square(num));

// Activity 2: Function expression
// task 3: write a function expression to find the maximum of two numbers and log the result to the console
let maxNumber = function (num1, num2) {
  return num1 > num2 ? num1 : num2;
};
console.log(maxNumber(10, 5), " is the maximum number");

// task 4: write a function expression to concatenate two strings and return the result
let concatenate = function (str1, str2) {
  return str1 + " " + str2;
};
console.log(concatenate("Hello", "World"));

// Activity 3: Arrow functions
// task 5: write an arrow function to calculate the sum of two numbers and return the result
let sum = (num1, num2) => num1 + num2;
console.log(sum(10, 5));

// task 6: write an arrow funcion to check if a string contains a specific charater and return a boolean value
let containsChar = (str, char) => str.includes(char);
console.log(containsChar("hello", "h"));
console.log(containsChar("hello", "a"));

// Activity 4: function parameters and default values
// task 7: write a function that takes two parameters and return their product. provide a default value for the second parameter
function product(num1, num2 = 1) {
  return num1 * num2;
}
console.log(product(10, 5));
console.log(product(10));

// task 8: write a function that takes a person's name and age and returns a greeting message. provide a default value for the age
function greeting(name, age = 18) {
  return `Hello ${name}, you are ${age}`;
}
console.log(greeting("John"));
console.log(greeting("shawn", 25));

// Activity 5: higher order functions
// task 9 : write a higher order funtion that takes a function and a number, and call the function that many times
function repeat(func, num) {
  for (let i = 0; i < num; i++) {
    func();
  }
}
repeat(() => console.log("hello"), 5);

function repeat2(func, num) {
  if (num === 0) return;
  func();
  return repeat2(func, num - 1);
}
repeat2(() => console.log("trial recursion "), 5);
// The iterative approach is more memory efficient with O(1) space complexity compared to the recursive approach’s O(n) which is linear. The recursive version requires additional memory to keep track of each call in the call stack, which can be problematic for large num values and result in a stack overflow error.

// task 10: write a higher order function that takes two functions and a value, applies the first function to the value and then appilies the second function to the result
function applyTwoFunc(func1, func2, value) {
  let result = func1(value);
  return func2(result);
}
const func1 = (num) => Math.sqrt(num);
const func2 = (num) => Math.pow(num, 2);
console.log(applyTwoFunc(func1, func2, 16));
