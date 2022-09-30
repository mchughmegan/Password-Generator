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

var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
var specialchar = ["!", "@", "#", "$", "%", "&"];

  //function that gathers the user inputs and returns selected options 
  //store selections in an object
  //return object

  function getoptions() {
    var length = parseInt(
      prompt("How many characters would you like your password to contain?")
    );
    if (Number.isNaN(length)) {
      alert("Password length must be provided as a number");
      return null;
    }
    if (length < 8) {
      alert("Password length must be at least eight characters");
      return null;
    }
    if (length > 128) {
      alert("Password length can be no greater than 128 characters");
      return null;
    }

    var hasuppercase = confirm(
      "Click OK if you would like uppercase letters"
    );

    var haslowercase = confirm(
      "Click OK if you would like lowercase letters"
    );

    var hasnumbers = confirm(
      "Click OK if you would like numbers"
    );

    var hasspecialcharacters = confirm(
      "Click Ok if you would like special characters"
    );

    //confirm chooses at least one okay

    if (!hasuppercase && !haslowercase && !hasnumbers && !hasspecialcharacters) {
      alert ("Password must have at least one of uppercase letters, lowercase letters, numbers, or special characters");
      return null;
    }



  };

//create a function that picks elements from an array at random based on user inputs
function generatePassword() {
  //conditions on which elements to use
  //get random elements from the above arrays
  if hasuppercase (math.floor(math.random(uppercase)*arr.length));
  if haslowercase (math.floor(math.random(lowercase)*arr.length));
  if hasnumbers (math.floor(math.random(numbers)*arr.length));
  if hasspecialcharacters (math.floor(math.random(specialcharacters).arr.length));

  //push it to a new array with just their password

};






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
