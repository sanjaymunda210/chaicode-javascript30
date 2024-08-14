// Activity 1: Understanding Promises
// Task 1: Create  a promise that resolves with a message after a 2 second timeout and log the message to the console
const task1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Task 1 resolved");
  }, 2000);
});

task1
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.log(error);
  });

// task 2: Create a promise that rejects with an error message after a 2 second timeout and handle the error using .catch()
const task2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    // reject("Task 2 rejected");
    reject(new Error("Task 2 rejected"));
  }, 2000);
});

task2.catch((error) => {
  console.error("Caught an error:", error.message);
});

// Activity 2: Chaining Promises
// task 3: Create a sequence of promises that simulate fetching data from a server, chain the promises to log messages in specific order

function fetchDataFromServer(data, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Fetched: ${data}`);
    }, delay);
  });
}

fetchDataFromServer("Task3- data1", 2000)
  .then((data1) => {
    console.log(data1);
    return fetchDataFromServer("Task3- data2", 2000);
  })
  .then((data2) => {
    console.log(data2);
    return fetchDataFromServer("Task3- data3", 2000);
  })
  .then((data3) => {
    console.log(data3);
    console.log("Task3- All data fetched");
  })
  .catch((error) => {
    console.error("Caught an error:", error.message);
  });

// Activity 3: Using Async/Await
// task 4: write an async function that waits for a promise to resolve and log the result to the console
function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("task4: Data fetched");
      //   reject("task4Error fetching data"); // to check error message
    }, 7000);
  });
}
// async function that waits for the promise to resolve
async function logData() {
  try {
    const result = await fetchData();
    console.log(result);
  } catch (error) {
    console.log("error: ", error);
  }
}
logData();

// task 5: write an async function that handles a rrejected promise using try-catch and log the error to the console
function rejectData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("task5 Data rejected");
    }, 8000);
  });
}

async function logRejectData() {
  try {
    const result = await rejectData();
    console.log(result);
  } catch (error) {
    console.log("error: ", error);
  }
}
logRejectData();

// Activity 4: Fetching Data from Api
// task 6: use the fetch api to get data from a public api and log the response data to the console using promises
// https://dummyjson.com/comments
setTimeout(() => {
  fetch("https://dummyjson.com/comments")
    .then((response) => {
      // Check if the response is successful
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json(); // Parse the JSON from the response
    })
    .then((data) => {
      console.log("task 6:", data);
    })
    .catch((error) => {
      console.error("task 6 Caught an error:", error.message);
    });
}, 8000); // delay added for proper line execution of results

// task 7: use the fetch api to get data from a public api and log the response data to the console using async/await
// Function to create a delay
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
async function fetchDataFromApi() {
  try {
    await delay(10000);
    const response = await fetch("https://dummyjson.com/comments");
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    console.log("task 7:", data);
  } catch (error) {
    console.error("task 7 Caught an error:", error.message);
  }
}
// fetchDataFromApi();

// Activity 5: Concurrent Promises
// task 8: use Promises.all to wait for multiple promises to resolve and then log the result to the console
function fetchData1(data, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Fetched: ${data}`);
    }, delay);
  });
}
// creating multiple promises
const promise1 = fetchData1("data1", 11000);
const promise2 = fetchData1("data2", 12000);
const promise3 = fetchData1("data3", 11500);

Promise.all([promise1, promise2, promise3])
  .then((data) => {
    console.log("task 8:", data);
  })
  .catch((error) => {
    console.error("task 8 Caught an error:", error.message);
  });

// task 9: use promise.race to log the value of the first promise that resolves among multiple promises
// reusing task 8 code
const promise4 = fetchData1("data4", 13000);
const promise5 = fetchData1("data5", 12000);
const promise6 = fetchData1("data6", 12500);

Promise.race([promise4, promise5, promise6])
  .then((data) => {
    console.log("task 9:", data);
  })
  .catch((error) => {
    console.error("task 9 Caught an error:", error.message);
  });
