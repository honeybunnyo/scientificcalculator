let displayValue = '';
var ansValue = ''; // Global variable to store the result
let lastButtonEqual = false;

// Function to update the display
function updateDisplay(value) {
  document.getElementById('display').value = value;
}

// Function to append characters to the display

function appendToDisplay(value) {
  if (lastButtonEqual == true) {
    if (value !== "+" || value !== "-" || value !== "÷" || value !== "×") {
      clearDisplay();
    }
  }
  lastButtonEqual = false;

  if (value === 'Ans') {
    useAns(); // If 'Ans' is clicked, append the ansValue to the display
  } 
  else {
    displayValue += value; 
    updateDisplay(displayValue);
  }
}
// Function to clear the entire display
function clearDisplay() {
  displayValue = '';
  updateDisplay('');
}

// Function to clear the last entry
function clearLastEntry() {
  displayValue = displayValue.slice(0, -1);
  updateDisplay(displayValue);
}

// Function to calculate the expression
function calculate() {
  try {
    displayValue = displayValue.replace(/sin/g, 'Math.sin');
    displayValue = displayValue.replace(/cos/g, 'Math.cos');
    displayValue = displayValue.replace(/tan/g, 'Math.tan');
    displayValue = displayValue.replace(/ln/g, 'Math.log');
    ansValue = eval(displayValue); 
    updateDisplay(ansValue); // Update the display with the result
    
    // Update Display value to be new answer for next time
    displayValue = ansValue;
    lastButtonEqual = true;
  } catch (error) {
    updateDisplay('Error');
  }
}

function useAns() {
  displayValue += ansValue; // Append the ansValue to the display
  updateDisplay(displayValue); // Update the display with the new value
}
