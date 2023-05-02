
var generateBtn = document.querySelector("#generate");

// Set the function to writePassword to call the function in the password generator
function writePassword() {
  // First criteria for asking for password criteria
  var passwordLength = parseInt(prompt("Choose between 8 and 128 characters for you password. How many characters?"));

  while (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
    passwordLength = parseInt(prompt("Password length must be between 8 and 128 characters. How many characters would you like your password to contain?"));
  }

  var includeLowercase = confirm("Click OK to confirm including lowercase characters. Click cancel if you don't want lowercase characters");
  var includeUppercase = confirm("Click OK to confirm including uppercase characters. Click cancel if you don't want uppercase characters");
  var includeNumbers = confirm("Click OK to confirm including numeric characters. Click cancel if you don't want numbers characters");
  var includeSpecial = confirm("Click OK to confirm including special characters. Click cancel if you don't want special characters");
  
  while (!(includeLowercase || includeUppercase || includeNumbers || includeSpecial)) {
    alert("You must select at least one character type.");
    includeLowercase = confirm("Click OK to confirm including lowercase characters.");
    includeUppercase = confirm("Click OK to confirm including uppercase characters.");
    includeNumbers = confirm("Click OK to confirm including numeric characters.");
    includeSpecial = confirm("Click OK to confirm including special characters.");
  }

  // Generate password based on criteria
  var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numberChars = "0123456789";
  var specialChars = "!@#$%^&*()_+~`|}{[]:;?><,./-=";
  var passwordChars = "";
  var password = "";
  // This section of code using the if statement tells the program which character to use based on what the user chooses
  if (includeLowercase) {
    passwordChars += lowercaseChars;
  }
  if (includeUppercase) {
    passwordChars += uppercaseChars;
  }
  if (includeNumbers) {
    passwordChars += numberChars;
  }
  if (includeSpecial) {
    passwordChars += specialChars;
  }

  for (var i = 0; i < passwordLength; i++) {
    password += passwordChars.charAt(Math.floor(Math.random() * passwordChars.length));
  }

  // Displays password in the text box
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
