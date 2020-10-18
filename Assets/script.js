
// DOM SELECTION
var resultsEl = document.getElementById('result');
var generateEl = document.getElementById('generate');

//
//PASSWORD Character GENERATOR-Functions

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


//
// Random Functions Object 
var randomFunc = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbol: getRandomSymbol
};

//
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
        // Prompt And Declare Character Type Variables
        var hasLower = confirm("Do you want lowercase characters in the password");
        var hasUpper = confirm("Do you want uppercase characters in the password");
        var hasNumber = confirm("Do you want number characters in the password");
        var hasSymbol = confirm("Do you want symbol characters in the password");

        //Check If Atleast 1 Character Type Is Selected
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

// Generate Password Function

function generatePassword(lower, upper, number, symbol, length) {

    // Password Array
    var password = [];



    // Loop Cycles == User Selection Of Password Length

    for (var i = 0; i < length;) {

        // Switch Cases For Character Type Selection

        //Lowercase Check and Push
        if (lower == true && i < length) {
            password.push(randomFunc.lower());
            i++;
        }

        //Uppercase Check and Push
        if (upper == true && i < length) {
            password.push(randomFunc.upper());
            i++;
        }

        //Number Check and Push
        if (number == true && i < length) {
            password.push(randomFunc.number());
            i++;
        }

        //Symbol Check and Push
        if (symbol == true && i < length) {
            password.push(randomFunc.symbol());
            i++;
        }
    };


    // Fisher-Yates Shuffle. Going Backwards
    //Swap Each Rlement In Password Array With A Random One Before It.

    function shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    // Shuffle Function Called
    shuffle(password);
    // Remove Comma Seperator in Array Replaced By Nothing 
    return password.join("");
};
