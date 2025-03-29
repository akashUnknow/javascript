// Hex to ASCII Conversion
function convertHexToAscii() {
  const inputField = document.getElementById('inputField').value.trim();
  const outputField = document.getElementById('outputField');

  // Validates and converts Hex to ASCII
  if (!inputField) {
    outputField.textContent = "Please enter a value.";
    return;
  }

  if (!/^([0-9A-Fa-f]{2})+$/.test(inputField)) {
    outputField.textContent = "Invalid Hex format.";
    return;
  }

  let asciiString = '';
  for (let i = 0; i < inputField.length; i += 2) {
    asciiString += String.fromCharCode(parseInt(inputField.substr(i, 2), 16));
  }
  outputField.textContent = "ASCII: " + asciiString;
}

// ASCII to Hex Conversion
function convertAsciiToHex() {
  const inputField = document.getElementById('inputField').value.trim();
  const outputField = document.getElementById('outputField');

  // Validates and converts ASCII to Hex
  if (!inputField) {
    outputField.textContent = "Please enter a value.";
    return;
  }

  let hexString = '';
  for (let i = 0; i < inputField.length; i++) {
    hexString += inputField.charCodeAt(i).toString(16).padStart(2, '0');
  }
  outputField.textContent = "Hex: " + hexString.toUpperCase();
}

// Nibble Swap Logic (123456 => 214365)
function nibbleSwap() {
  const inputField = document.getElementById('inputField').value.trim();
  const outputField = document.getElementById('outputField');

  if (!inputField) {
    outputField.textContent = "Please enter a value.";
    return;
  }

  // Ensure the length is even for valid nibble swap
  if (inputField.length % 2 !== 0) {
    outputField.textContent = "Please enter an even-length number.";
    return;
  }

  let swappedValue = '';
  for (let i = 0; i < inputField.length; i += 2) {
    swappedValue += inputField.charAt(i + 1) + inputField.charAt(i);
  }

  outputField.textContent = "Swapped: " + swappedValue;
}
