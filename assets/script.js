//GIVEN I need a new, secure password
// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
// WHEN asked for character types to include in the password
// THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page

//create variables with arrays for each criteria or type

var uppercase = ["A", "B"];
var lowercase = 
var numbers = 
var specialchar =

//function that gathers the user inputs and returns selected options 
  //store selections in an object
  //return object

function getoptions () {
  var length = parseInt (
    prompt ("How many characters would you like your password to contain?")
  );
  if (Number.isNaN(length)) {
    alert ("Password length must be provided as a number");
    return null;
  }
  if (length < 8) {
    alert ("Password length must be at least eight characters");
    return null;
  }
  if (length > 128) {
    alert ("Password length can be no greater than 128 characters");
    return null;
  }

  var hasuppercase = confirm (
    "Click OK if you would like uppercase letters"
  );
//confirm chooses at least one okay
};

//create a function that picks elements from an array at random based on user inputs

//generate password






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
