//your JS code here. If required.
// Get references to DOM elements
const inputElement = document.getElementById('ip');
const outputElement = document.getElementById('output');
const buttonElement = document.getElementById('btn');

// Function to simulate an asynchronous operation with a delay
function delay(time, value) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(value);
    }, time);
  });
}

// Event listener for the button click
buttonElement.addEventListener('click', () => {
  // Get the value from the input and parse it as an integer
  let number = parseInt(inputElement.value);

  if (isNaN(number)) {
    outputElement.textContent = "Please enter a valid number!";
    return;
  }

  // Step 1: Create a promise that resolves with the number after 2 seconds
  delay(2000, number)
    .then((num) => {
      // Print the result in the output div
      outputElement.textContent = `Result: ${num}`;

      // Step 2: Chain the next promise to multiply the number by 2 after 1 second
      return delay(1000, num * 2);
    })
    .then((num) => {
      // Print the result in the output div
      outputElement.textContent = `Result: ${num}`;

      // Step 3: Chain the next promise to subtract 3 from the number after 1 second
      return delay(1000, num - 3);
    })
    .then((num) => {
      // Print the result in the output div
      outputElement.textContent = `Result: ${num}`;

      // Step 4: Chain the next promise to divide the number by 2 after 1 second
      return delay(1000, num / 2);
    })
    .then((num) => {
      // Print the result in the output div
      outputElement.textContent = `Result: ${num}`;

      // Step 5: Chain the final promise to add 10 to the number after 1 second
      return delay(1000, num + 10);
    })
    .then((finalResult) => {
      // Print the final result in the output div
      outputElement.textContent = `Final Result: ${finalResult}`;
    })
    .catch((error) => {
      // Catch any errors that occur during the promise chain
      outputElement.textContent = `Error: ${error.message}`;
    });
});
