// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Assigning names to variables which are needed
var symbols = " !#$%&'()*+,-./:;<=>?@[]^_`{|}~";
var numbers = "1234567890";
var lettersLower = "abcdefghijklmnopqrstuvwxyz";
var letterUpper = lettersLower.toUpperCase();
var passwordLength

//Assigning variables to arrays where needed
letterLArray = lettersLower.split(""); //lowercase
letterUArray = letterUpper.split(""); //uppercase
letterSArrary = symbols.split(""); //symbols
numberArray = numbers.split(""); //numbers

//Password Generator
var generatePassword = function () {
  var passwordOptions = []; //empty array for all password arrays to get added to
  var finalPassword = []; //empty array for randomized password to get added to
  passwordLengthCheck();
  var lowerCaseYorN = window.confirm(
    "Should the password include lowercase letters? Ok or Cancel."
  );
  if(lowerCaseYorN === true) {
    passwordOptions = passwordOptions.concat(letterLArray);
  };
  var upperCaseYorN = window.confirm(
    "Should the password include uppercase letters? Ok or Cancel."
  );
  if (upperCaseYorN === true) {
    passwordOptions = passwordOptions.concat(letterUArray);
  };
  var symbolYorN = window.confirm("Should the password include symbols? Ok or Cancel.");
  if (symbolYorN === true) {
    passwordOptions = passwordOptions.concat(letterSArrary);
  };
  var numYorN = window.confirm("Should the password include numbers? Ok or Cancel.");
  if (numYorN === true) {
    passwordOptions = passwordOptions.concat(numberArray);
  };
  //if no passwored criteria is created
  if (lowerCaseYorN === false && upperCaseYorN === false && symbolYorN === false && numYorN === false) {
    window.alert("Please choose at least one password critera.");
    return;
  }
  //loops through the passwordOptions array and pushs the individual values to finalPassword one at a time
  for (let i = 0; i < passwordLength; i++) {
    finalPassword.push(passwordOptions[Math.floor(Math.random() * passwordOptions.length)]);
    
  }
  //convets finalPassword from an array to a string and passes it to the password variable
  return finalPassword.join("");
};


// ask for and retrieve password length
var passwordLengthCheck = function () {
  passwordLength = window.prompt(
    "Please enter requested password length up to 128 characters?"
  );
  passwordLength = parseInt(passwordLength, 10);
  if (!passwordLength) {
    window.alert("Please enter a password length");
    passwordLengthCheck();
  } else if (
    passwordLength > 128 ||
    passwordLength < 1 ||
    isNaN(passwordLength)
  ) {
    passwordLengthCheck();
  }
};

