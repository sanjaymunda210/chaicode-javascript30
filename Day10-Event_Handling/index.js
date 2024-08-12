// Event Handling

// Activity 1: Basic Event Handling
// task 1: Add a click event listener to a button that changes the text content of a paragraph
const task1 = document.querySelector("#task1");
const para1 = document.querySelector("#para1");
task1.addEventListener("click", () => {
  para1.textContent = "Changed Lorem text with new text";
});

// Task 2: Add a double click event listener to an image that toggle its visibility
const task2 = document.querySelector("#task2");
const img2 = document.querySelector("#img2");
task2.addEventListener("dblclick", () => {
  if (img2.style.visibility === "visible") {
    img2.style.visibility = "hidden";
  } else {
    img2.style.visibility = "visible";
  }
});

// Activity 2: Mouse Events
// Task 3: Add a mouseover event listener to an element that changes its background color
const task3 = document.querySelector("#task3");
task3.addEventListener("mouseover", () => {
  task3.style.backgroundColor = "#eb410e";
});

// Task 4: Add a mouseout event listener to an element that resets its background color
task3.addEventListener("mouseout", () => {
  task3.style.backgroundColor = "#06f038";
});

// Activity 3: Keyboard Events
// Task 5: Add a keydown event listener to an input field that logs the key pressed to the console
const task5 = document.querySelector("#task5");
task5.addEventListener("keydown", (event) => {
  console.log(event.key);
});

// Task 6: Add a keyup event listener to an input field that displays the current value in a paragraph
const task6 = document.querySelector("#task6");
const task6Display = document.querySelector("#task6Display");
task6.addEventListener("keyup", (event) => {
  task6Display.textContent = event.target.value;
});

// Activity 4: Form Events
// Task 7: Add a submit event listener to a form that prevents the default form submission and logs the form data to the console
const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  // console.log(e);
  console.log(e.target.username.value);
  console.log(e.target.password.value);
});

// Task 8: Add a change event listener to a select dropdown that displays the selected value in a paragraph
const task8 = document.querySelector("#task8");
const task8Display = document.querySelector("#task8Display");
task8.addEventListener("change", (event) => {
  task8Display.textContent = event.target.value;
});

// Activity 5: Event Delegation
// task 9: Add a click event listener to a list that logs the text content of the clicked list item using event delegation
// Event delegation is a technique where you attach a single event listener to a parent element and handle events from its children. This is efficient, especially when dealing with dynamically added elements.
const task9 = document.querySelector("#task9");
task9.addEventListener("click", function (e) {
  console.log(e);

  if (e.target && e.target.nodeName === "LI") {
    console.log(e.target.textContent);
  }
});

// task 10: Add an event listener to a parent element that listens for events from dynamically added child elements
const task10 = document.querySelector("#task10");
task10.addEventListener("click", (event) => {
  console.log(event);

  console.log(event.target.textContent);
});

const newButton = document.querySelector("#newButton");
newButton.addEventListener("click", () => {
  const btnText = document.querySelector("#buttonName");
  // console.log(btnText.value);

  if (btnText.value === "") {
    const btnErrHandler = document.querySelector("#btnErrHandler");
    btnErrHandler.textContent = "Please enter button Name";
  } else {
    const button = document.createElement("button");
    button.textContent = btnText.value;
    task10.appendChild(button);
    btnText.value = "";
    btnErrHandler.textContent = "";
  }
});
