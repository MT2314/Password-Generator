
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

//PASSWORD GENERATOR-functions

// Generate Random Lowercase Letter
function getRandomLower(){
  //97 - Charcode "a"   26 - letters in alphabet 
 return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
};

// Generate Random Uppercase Letter
function getRandomUpper(){
  //65 - Charcode "A"   26 - letters in alphabet 
 return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
};

// Generate Random Number
function getRandomNumber(){
  //97 - Charcode "0"   26 - letters in alphabet 
 return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
};

// Generate Random Symbol
function getRandomSymbol(){
  var symbols = "!”#$%&’()*+";
  // Random * symbols string length
  return symbols[Math.floor(Math.random() * symbols.length)];
};