// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  //var password = "xyz" - test password creation.   Works

   var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
// GIVEN I need a new, secure password
// WHEN I click the button to generate a password
generateBtn.addEventListener("click", writePassword);


function generatePassword () {
// THEN I am presented with a series of prompts for password criteria
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
  var characterLength = prompt("How many characters? (8-128 characters)");
    console.log(characterLength);
// WHEN prompted for character types to include in the password
// THEN I choose lowercase, uppercase, numeric, and/or special characters

  var criteria = ["lowercase letters", "uppercase letters", "numbers", "special characters"]  
  var criteriaLength = criteria.length;
  var lowercaseCharacters = "abcdefghijklmnopqrstuvwxyz".split("");
  var uppercaseCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  var numericCharacters = "0123456789".split("");
  var specialCharacters = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~".split("");
  var criteriaRequirements = [lowercaseCharacters, uppercaseCharacters, numericCharacters, specialCharacters];

//Ask each criteria question.  
  for (var i = 0; i < criteriaLength; i++) {
  var myCriteria = prompt("Would you like to include " + criteria[i] + "? (y/n)");
  myCriteria = myCriteria.toLowerCase();
  console.log(myCriteria);
  
  //Include those with "y" answers. 
    if (myCriteria === "y" || myCriteria === "yes") {
      var includedCriteria = prompt("Please choose " + criteria[i].slice(0, -1) + " to include")
    // THEN my input should be validated and at least one character type should be selected
        do {
          if (criteriaRequirements[i].includes(includedCriteria)) {
          console.log (includedCriteria);
          }
        } while (criteriaRequirements[i].includes(includedCriteria) == false)
    }
  }


// WHEN I answer each prompt  

// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page



}
