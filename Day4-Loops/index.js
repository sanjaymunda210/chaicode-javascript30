// Day 4: Loops

// Activity 1: For loops
// Task 1: Write a program that prints out the numbers from 1 to 10
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// Task 2: write a program to print the multiplication table of 5 using for loop
for (let i = 1; i <= 10; i++) {
  console.log("5 X ", i, " = ", 5 * i);
}

// Activity 2: While loops
// Task 3: write a program to calculate the sum of numbers from 1 to 10 using while loop
let sum = 0;
let i = 1;
while (i <= 10) {
  sum += i;
  i++;
}
console.log(sum);

// task 4: write a program to print numbers from 10 to 1 using while loop
let j = 10;
while (j >= 1) {
  console.log(j);
  j--;
}

// Activity 3: Do-While loops
// Task 5: write a program to print numbers from 1 to 5 using do-while loop
let k = 1;
do {
  console.log(k);
  k++;
} while (k <= 5);

// Task 6: write a program to calculate the factorial of a number using do-while loop
let n = 5;
let fact = 1;
do {
  fact *= n;
  n--;
} while (n > 1);
console.log(fact);

// Activity 4: nested loops
// task 7: write a program to print a pattern using nested for loops
for (let i = 1; i <= 5; i++) {
  let s = "";
  for (let j = 1; j <= i; j++) {
    s += "*";
  }
  console.log(s);
}

// Activity 5: Loop Control Statements
// task 8: write a program to print numbers from 1 to 10 but skip the number 5 using the continue statement
for (let i = 1; i <= 10; i++) {
  if (i === 5) {
    continue;
  }
  console.log(i);
}

// Task 9: write a program to print numbers from 1 to 10 but stop the loop when the number 7 is reached using the break statement
for (let i = 1; i <= 10; i++) {
  if (i === 7) {
    break;
  }
  console.log(i);
}
