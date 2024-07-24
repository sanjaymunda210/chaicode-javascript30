// Day 9: Dom manipulation

// Activity 1: Selecting and manipulating elements
// Task 1: Select a Html element by id and change its text content
const greeting = document.getElementById("greeting");
greeting.textContent = "Hello Javascript";

// Task 2: Select an Html element by its class and change its background color
const bgDate = document.querySelector(".bg-date");
bgDate.style.backgroundColor = "#eb410e";

// Activity 2: Creating and appending elements
// task 3: create q new div element with some text content and append it to the body
const div = document.createElement("div");
div.className = "paragraph";
div.classList.add("temp-bg");
const addText = document.createTextNode(
  "This is a created div, paragraph and text from js file, Interestingly its a nice way to do it, i am liking it and looking forward in future to use it and right now i am getting a good practice"
);
const p = document.createElement("p");
p.appendChild(addText);
p.style.paddingTop = "1rem";
div.appendChild(p);
document.body.appendChild(div);

// task 4: create a new li element and add it to an existing ul list
const languageList = document.getElementById("languageList");
const languages = [
  "HTML",
  "CSS",
  "JAVASCRIPT",
  "PHP",
  "LARVEL",
  "EXPRESS",
  "NODE",
  "MONGODB",
  "NEXT",
  "REACT",
  "VUE",
];
languages.forEach((language) => {
  const li = document.createElement("li");
  const addText = document.createTextNode(language);
  li.appendChild(addText);
  languageList.appendChild(li);
});

// Activity 3: Removing elements
// task 5: select a html element and remove it from dom
document.getElementById("toBeDeleted").remove();

//task 6: remove the last child of a specific HTML element
document.getElementById("languageList").lastElementChild.remove();

// Activity 4: Modifying Attributes and Classes
// task 7: select a html element and change one of its attributes
const img = document.querySelector("img");
img.src = "https://picsum.photos/200";

//  Task 8: Add and remove a css class to/from an html element
const paragraph = document.querySelector(".paragraph");
paragraph.classList.add("text-center");
paragraph.classList.remove("temp-bg");

// Activity 5 Event Handling
// tASK 9: Add a click event listener to a button that changes the text xontent of a paragraph
const button = document.querySelector("button");
const newPara = document.querySelector(".newPara");
button.addEventListener("click", () => {
  newPara.textContent = "Changed Lorem text with new text";
  button.style.display = "none";
});

// task 10: Add a mouseover event listener to an element that changes its border color
newPara.onmouseover = () => {
  newPara.style.border = "2px solid red";
  newPara.style.backgroundColor = "#eb410e";
};
newPara.onmouseout = () => {
  newPara.style.border = "none";
  newPara.style.backgroundColor = "#212121";
};
