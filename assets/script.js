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
function getelements() {
  //conditions on which elements to use
  //get random elements from the above arrays
if (getoptions.hasuppercase) {var uppercase = const passuppercase};
if (getoptions.haslowercase) {var lowercase = const passlowercase};
if (getoptions.hasnumbers) {var numbers = const passnumbers};
if (getoptions.hasspecialcharacters) {var specialcharacters = const passspecialcharacters};

const elements = passuppercase.concat(passlowercase, passuppercase, passnumbers, passspecialcharacters);

console.log(elements);

//  if hasuppercase (math.floor(math.random(uppercase)*arr.length));
//  if haslowercase (math.floor(math.random(lowercase)*arr.length));
//  if hasnumbers (math.floor(math.random(numbers)*arr.length));
//  if hasspecialcharacters (math.floor(math.random(specialcharacters).arr.length));

  //push it to a new array with just their password

};

//gather elements into password

function generatePassword() {
  Math.floor(Math.random(elements)*Array.length);
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
