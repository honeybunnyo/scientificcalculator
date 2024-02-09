let displayValue = '';

// Function to update the display
function updateDisplay(value) {
  document.getElementById('display').value = value;
}

// Function to append characters to the display
function appendToDisplay(value) {
  displayValue += value;
  updateDisplay(displayValue);
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
    const result = eval(displayValue); 
    updateDisplay(result);
    displayValue = result.toString(); 
  } catch (error) {
    updateDisplay('Error');
  }
}
