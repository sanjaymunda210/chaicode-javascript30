// Day 6: Arrays

// Activity 1: Arrays Creation and Access
// task 1: create an array of numbers from 1 to 5 and log the array to the console
let arr = [1, 2, 3, 4, 5];
console.log(arr);
let arr1 = new Array(1, 2, 3, 4, 5);
console.log(arr1);

// task 2: Access the first and last element of the array and log them to the console
console.log(arr[0]);
console.log(arr[arr.length - 1]);
console.log(arr.at(0));
console.log(arr1.at(-1));
console.log(arr[-1]); // does not support negative indexing

// Activity 2: Array Methods(Basic)
// task 3: use the push() method to add an element to the end of the array and log the updated array to the console
arr.push(6);
console.log(arr);

// task 4: use the pop() method to remove an element from the end of the array and log the updated array to the console
arr.pop();
console.log(arr);

// task 5: use the unshift() method to add an element to the beginning of the array and log the updated array to the console
arr.unshift(0);
console.log(arr);

// task 6: use the shift() method to remove an element from the beginning of the array and log the updated array to the console
arr.shift();
console.log(arr);

// Activity 3: Array Methods(Intermediate)
// task 7: use the map method to create a new array where each number is doubled and log the new array
let arr2 = arr.map((num) => num * 2);
console.log(arr2);

// task 8: use the filter method to create a new array with only the even numbers and log the new array
let arr3 = arr.filter((num) => num % 2 === 0);
console.log(arr3);

// task 9: use the reduce method to calculate the sum of all the numbers in the array and log the result
let arr4 = arr.reduce((acc, num) => acc + num, 0);
console.log(arr4);

// Activity 4: Array Iteration
// task 10: use a for loop to iterate through the array and log each element to the console
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

// task 11: use the foreach method to iterate through the array and log each element to the console
arr.forEach((num) => console.log(num));

// Activity 5: Multi-dimensional Arrays
// task 12: create a two dimensional array (matrix) and log the entire array to the console
let arr5 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
console.log(arr5);
console.log("\n", arr5[0], "\n", arr5[1], "\n", arr5[2]);

// task 13: Access and log a specific element from the two dimensional array
console.log(arr5[1][1]); // middle element
