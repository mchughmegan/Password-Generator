var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var specialchar = ["!", "@", "#", "$", "%", "&"];

  //function that gathers the user inputs and returns selected options 
  //store selections in an object
  //return object

  function generatePassword() {
    var elements = [];
    var temppassword = "";

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

    if (hasuppercase) {elements = elements.concat(uppercase);}
    if (haslowercase) {elements = elements.concat(lowercase);}
    if (hasnumbers) {elements = elements.concat(numbers);}
    if (hasspecialcharacters) {elements = elements.concat(specialchar);}

    console.log(elements);

    //picks elements from an array at random based on user inputs

    for (i = 0; i < length; i++) {
      temppassword = temppassword.concat(elements[Math.floor(Math.random()*elements.length)])}

//gather elements into password
    return temppassword



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
