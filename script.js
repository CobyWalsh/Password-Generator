
var generateBtn = document.querySelector("#generate");

// Set the function to writePassword to call the function in the password generator. The main function that generates the password
function writePassword() {
  // First criteria for asking for password criteria, responsible to asking teh user to input the desired length of the password and what characters to include in the generated password
  var passwordLength = parseInt(prompt("Choose between 8 and 128 characters for you password. How many characters?"));
  // Sets a loop that will continue to prompt the user for input until they provide a valid number for the password length
  while (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
    passwordLength = parseInt(prompt("Password length must be between 8 and 128 characters. How many characters would you like your password to contain?"));
  }
  // Prompts the user the user to select which types of characters to include in the generated password. The confirm function creates a pop-up window with a message asking the user to confirm whether or not to include a specific type of character.
  var includeLowercase = confirm("Click OK to confirm including lowercase characters. Click cancel if you don't want lowercase characters");
  var includeUppercase = confirm("Click OK to confirm including uppercase characters. Click cancel if you don't want uppercase characters");
  var includeNumbers = confirm("Click OK to confirm including numeric characters. Click cancel if you don't want numbers characters");
  var includeSpecial = confirm("Click OK to confirm including special characters. Click cancel if you don't want special characters");
  // Ensures that the user has selected at least one type of character to include in the password.
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
  // This section of code using the if statement tells the program which character to use based on what the user chooses and adds them to the corresponding character types in the passwordChars string 
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
  // The for loop generates teh password based on the user's choices. Inside the loop, it randomly selects characters from the passwordChars string and adds them to the password string until it reaches the character length that was chosen
  for (var i = 0; i < passwordLength; i++) {
    password += passwordChars.charAt(Math.floor(Math.random() * passwordChars.length));
  }

  // Displays password in the text box
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

// Add event listener to generate button. When teh user clicks the button, it calls the writePassword() function to generate the password
generateBtn.addEventListener("click", writePassword);
