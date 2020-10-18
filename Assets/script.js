// Dom Selection

var resultsEl = document.getElementById('result');
var generateEl = document.getElementById('generate');

// Random Functions Object 
var randomFunc = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbol: getRandomSymbol
};

// Button onclick - Generate Event
generate.addEventListener('click', function () {

    // Password Length Prompt
    var length = prompt("How many characters in your password?");
    // Limit
    for (var i = 0; i != 1;) {
        switch (length >= 8 && length <= 128) {
            case true:
                i = 1;
                break;
            case false:
                alert("Choose Password Length between 8 - 128 characters")
                length = prompt("How many characters in your password?");
                i = 0;
                continue;
        }
    };

    for (var i = 0; i != 1;) {
        // Prompt for character type variables
        var hasLower = confirm("Do you want lowercase characters in the password");
        var hasUpper = confirm("Do you want uppercase characters in the password");
        var hasNumber = confirm("Do you want number characters in the password");
        var hasSymbol = confirm("Do you want symbol characters in the password");

        //Check if atleast 1 character type is selected
        if (hasLower == true || hasUpper == true || hasNumber == true || hasSymbol == true) {
            i = 1;
        }
        else {
            alert("Must use atleast 1 character type!")
        }
    }

    // Display Password
    resultsEl.innerText = generatePassword(
        hasLower,
        hasUpper,
        hasNumber,
        hasSymbol,
        length
    );
});

// Generate password function

function generatePassword(lower, upper, number, symbol, length) {

    // Password Array
    var password = [];

    // Loop cycles == user selection of password length
    for (var i = 0; i < length;) {

        // Switch cases for user selection and character generator
        switch (lower) {

            case true:
                password.push(randomFunc.lower());
                i++;
                break

            case false:
                break

        }

        switch (upper) {

            case true:
                password.push(randomFunc.upper());
                i++;
                break

            case false:
                break

        }


        switch (number) {

            case true:
                password.push(randomFunc.number());
                i++;
                break

            case false:
                break

        }

        switch (symbol) {

            case true:
                password.push(randomFunc.symbol());
                i++;
                break

            case false:
                break

        }
    };
    return password.join("");
};

//PASSWORD GENERATOR-functions

// Generate Random Lowercase Letter
function getRandomLower() {
    //97 - Charcode "a"   26 - letters in alphabet 
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
};

// Generate Random Uppercase Letter
function getRandomUpper() {
    //65 - Charcode "A"   26 - letters in alphabet 
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
};

// Generate Random Number
function getRandomNumber() {
    //97 - Charcode "0"   26 - letters in alphabet 
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
};

// Generate Random Symbol
function getRandomSymbol() {
    var symbols = "!\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
    // Random * symbols string length
    return symbols[Math.floor(Math.random() * symbols.length)];
};

