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
// Password Prompts


// Choose a length of at least 8 characters and no more than 128 characters
  var characterLength = prompt("How many characters? (8-128 characters)");

    while (characterLength < 8 || characterLength >128) {
      characterLength = prompt("How many characters? (8-128 characters)");
    }

  var criteria = ["lowercase letters", "uppercase letters", "numbers", "special characters"]  
  var criteriaLength = criteria.length;
  var lowercaseCharacters = "abcdefghijklmnopqrstuvwxyz";
  var uppercaseCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numericCharacters = "0123456789";
  var specialCharacters = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
  var selectedArrays = "";
  var selectedCharacters = "";
  var criteriaRequirements = [lowercaseCharacters, uppercaseCharacters, numericCharacters, specialCharacters];

// Choose lowercase, uppercase, numeric, and/or special characters
//Ask each criteria question.  
  for (var i = 0; i < criteriaLength; i++) {
  var myCriteria = prompt("Would you like to include " + criteria[i] + "? (y/n)");
  myCriteria = myCriteria.toLowerCase();

  
  //Include those with "y" answers. 
    if (myCriteria === "y" || myCriteria === "yes") {
      var includedCriteria = prompt("Please choose " + criteria[i].slice(0, -1) + " to include")
    // THEN my input should be validated and at least one character type should be selected
        while (criteriaRequirements[i].includes(includedCriteria) == false) {
          includedCriteria = prompt("Please choose " + criteria[i].slice(0, -1) + " to include");
        }
        //append the array to choose from
        selectedArrays = selectedArrays.concat(criteriaRequirements[i]);
 
        //append the selected characters
        selectedCharacters = selectedCharacters.concat(includedCriteria);

    }
  }
 
//Generate Password with criteria 
var result = ""; 
for (var j = 0; j < characterLength - selectedCharacters.length; j++) {
  result += selectedArrays.charAt(Math.floor(Math.random() * selectedArrays.length));

} 
// add in selectedCharacters (I couldn't figure out how to get them in there in random spots.)
result = result + selectedCharacters
return result
}
