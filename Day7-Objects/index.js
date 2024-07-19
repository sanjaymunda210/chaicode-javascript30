// Day 7: Objects

// Activity 1: Object Creation and Access
// task 1: create an object representing a book with properties like title, author, and year and log it to the console
const book = {
  title: "The Great Gatsby",
  author: "F. Scott Fitzgerald",
  year: 1925,
};
console.log(book);

// task 2: Access and log the title and author properties of the book object
console.log(book.title);
console.log(book.author);

// Activity 2: Object Methods
// task 3: Add a method to the book object that returns with the book's title and author and log the result of calling this method
book.getTitleAndAuthor = function () {
  return `The book ${this.title} is written by ${this.author}`;
};
console.log(book.getTitleAndAuthor());

// task 4: Add a method to book object that takes a parameter (year) and update the book's year property, then log the updated object
book.updateYear = function (year) {
  this.year = year;
};
book.updateYear(2020);
console.log(book);

// Activity 3: Nested Objects
// task 5: create a nested object representing a library with properties like name and books (an array of book objects) and log the library object to the console
const library = {
  name: "The Great Library",
  books: [
    {
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      year: 1925,
    },
    {
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      year: 1960,
    },
  ],
};
console.log(library);

// task 6: Access and log the name of the library and the titles of all the books int the library
console.log(library.name);
library.books.forEach((book, index) =>
  console.log(`Book ${index + 1}: ${book.title}`)
);

// Activity 4: the this keyword
// task 7: add a method to the book object that uses the this keyword to return a string with the book's title and year and log the result of calling this method
book.getTitleAndYear = function () {
  return `The book ${this.title} was written in ${this.year}`;
};
console.log(book.getTitleAndYear());

// Activity 5: Object Iteration
// task 8: use a for in loop to iterate through the book object and log each property to the console
for (const property in book) {
  console.log(property);
}

// task 9: use Object.keys and Object.values methods to log all the keys and values of the book object
console.log(Object.keys(book));
console.log(Object.values(book));
