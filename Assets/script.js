
// Dom Selection

var resultsEl = document.getElementById('result');
var lengthEl = document.getElementById('length');
var uppercaseEl = document.getElementById('uppercase');
var lowercaseEl = document.getElementById('lowercase');
var numbersEl = document.getElementById('numbers');
var symbolsEl = document.getElementById('symbols');
var generateEl = document.getElementById('generate');

// Button onclick - Generate Event
generate.addEventListener('click', function(){
  // + = unitary operator to turn string => number
  var length = +lengthEl.value;
  var hasLower = lowercaseEl.checked;
  var hasUpper = uppercaseEl.checked;
  var hasNumber = numbersEl.checked;
  var hasSymbol = symbolsEl.checked;

// Display Password
  resultsEl.innerText = generatePassword(
      hasLower,
      hasUpper, 
      hasNumber, 
      hasSymbol,
      length
  );
});