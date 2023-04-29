// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  //var password = generatePassword();
  //var passwordText = document.querySelector("#password");
  const password = Math.random().toString(36).slice(-8);
  const passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
//const generateBtn = document.querySelector('#generate-btn');
generateBtn.addEventListener("click", writePassword); {
  //const password = Math.random().toString(36).slice(-8);
  //const passwordDisplay = document.querySelector('#password');
  //passwordDisplay.textContent = password;
}

