// Day 8: Es6 + Features

// Activity 1: Template Literals
// task 1: Use template literals to create a string that includes variables for a person's name and age, and log the string to the console
const person = {
  name: "John",
  age: 32,
};
const greeting = `Hello ${person.name}, you are ${person.age}`;
console.log(greeting);

// task 2: Create a multi-line string using template literals and log it to the console
const multiline = `This is a
multiline
string`;
console.log(multiline);

// Activity 2: Destructuring
// task 3: use array destructuring to extract the first and second elements from an array of numbers and log them to console
const arr = [1, 2, 3, 4, 5];
const [first, second] = arr;
console.log(first, second);

// task 4: use object destructuring to extract the titlt and author from a book object and log them to console.
const book = {
  title: "The Great Gatsby",
  author: "F. Scott Fitzgerald",
};
const { title, author } = book;
console.log(title, author);

// Activity 3: Spread and Rest Operator
// task 5: use the spread operator to create a new array that includes all elements of an existing array plus additional elements, and log the new array to the console
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = [...arr1, ...arr2, 7, 8, 9];
console.log(arr3);

// task 6: use the rest operator in a function to accept an arbitrary number of arguments, sum them and return the result
function sum(...args) {
  return args.reduce((acc, num) => acc + num, 0);
}
console.log(sum(1, 2, 3, 4, 5));

// Activity 4: Default Parameters
// task 7: write a function that takes two parameters and return their product, with the second parameter having a default value of 1, log the result calling this function with and without the second parameter
function product(num1, num2 = 1) {
  return num1 * num2;
}
console.log(product(5));
console.log(product(5, 2));

// Activity 5: Enhanced Object Literals
// task 8: use enhanced object literals to create an object with methods and properties, and log the object to the console
const obj = {
  title: "The Great Gatsby",
  author: "F. Scott Fitzgerald",
  year: 1925,
  description: function () {
    return `${this.title} was written by ${this.author} in ${this.year}`;
  },
};
console.log(obj);
console.log(obj.description());

// task 9: create an object with computed property names based on variables and log the object to the console
const prop1 = "title";
const prop2 = "author";
const prop3 = "year";
const obj2 = {
  [prop1]: "The Great Gatsby",
  [prop2]: "F. Scott Fitzgerald",
  [prop3]: 1925,
};
console.log(obj2);
console.log(obj2.title, obj2.author, obj2.year);
console.log(obj2.prop1, obj2.prop2, obj2.prop3); // undefined
