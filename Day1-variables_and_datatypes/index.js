// Activity 1: Variable declaration
// task 1: declare a variable using var, assign it a number and log the value to the console
var num = 45;
console.log(num);
// task 2: declare a variable using let, assign it a string and log the value to the console
let str = "hello";
console.log(str);

// Activity 2: Constant declaration
// task 3: declare a constant using const, assign it a boolean and log the value to the console
const boo = true;
console.log(boo);

// Activity 3: Data types
// task 4: create variables of different data types(number, string, boolean, array, object) and log each variable's type using typeof operator
let num1 = 45;
let str1 = "hello";
let boo1 = true;
let arr = Array(1, 2, 3, 4, 5);
let arr1 = [1, 2, 3, 4, 5];
let obj = { name: "John", age: 30 };
console.log(typeof num1);
console.log(typeof str1);
console.log(typeof boo1);
console.log(typeof arr);
console.log(typeof arr1);
console.log(typeof obj);

// Activity 4: Reassigining variables
// task 5: declare a variable using let, assign it an initial value, reassign a new value and log both values to the console
let num3 = 34;
console.log(num3);
num3 = 89;
console.log(num3);

// Activity 5: understanding const
// task 6: try reassigning a variable declared with const and observe the error
const check = 54;
console.log(check);
check = 45;
console.log(check);
// TypeError: Assignment to constant variable.
