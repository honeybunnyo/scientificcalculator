let displayValue = '';
var ansValue = '';
let lastButtonEqual = false;

// Function to update the display
function updateDisplay(value) {
  document.getElementById('display').value = value;
}

// Function to append characters to the display
function appendToDisplay(value) {
  if (lastButtonEqual == true) {
    if (value !== "+" && value !== "-" && value !== "÷" && value !== "×") {
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
    displayValue = displayValue.replace(/(\d+)!/g, function(match, p1) {
      return factorial(parseInt(p1));
    });    
    displayValue = displayValue.replace(/π/g, '3.141592653589793238462643383279502884197');
    displayValue = displayValue.replace(/e/g, '2.71828182845904523536028747135266249');
    displayValue = displayValue.replace(/E/g, '10**');
    displayValue = displayValue.replace(/%/g, '*0.01');
    displayValue = displayValue.replace(/√/g, 'Math.sqrt');




    ansValue = eval(displayValue); 
    updateDisplay(ansValue); 
    
    // Update Display value to be new answer for next time
    displayValue = ansValue;
    lastButtonEqual = true;
  } catch (error) {
    updateDisplay('Error');
    lastButtonEqual = true;
  }
}

function factorial(n) {
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}

function useAns() {
  displayValue += ansValue; // Append the ansValue to the display
  updateDisplay(displayValue); // Update the display with the new value
}
