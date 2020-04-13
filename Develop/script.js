// Assignment Code
// [ ] Array of special characters to be included in password
const specialCh = ["~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")","<", ">"]

// [ ] Array of numeric characters to be included in password
const numericCh = ["1","2","3","4","5","6","7","8","9","0"]

// [ ] Array of lowercase characters to be included in password

const lowercaseCh = ["a", "b", "c" ,"d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
// [ ] Array of uppercase characters to be included in password

const uppercaseCh = ["A", "B", "C" ,"D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

// [ ] Function to prompt user for password options

function getPasswordOptions() {
	
	var passwordLength = parseInt(prompt("How many characters would you like in your password, please use a min of 8"));
	if (isNaN(passwordLength)) {
		alert("you need to enter a number!");
		return false;
	}
	
	if (passwordLength < 8 || passwordLength > 128) {
		alert("you need to enter a number between 8 and 128!");
		return false;
	}
	
	var lowercase = prompt("Would you like to require lowercase letters? y or n");
	if (lowercase == "y") {
		lowercase = true;
	} else {
		lowercase = false;
	}
	
	var uppercase = prompt("Would you like to require uppercase letters? y or n")
	if (uppercase == "y") {
		uppercase = true;
	} else {
		uppercase = false;
	}
	
	var special = prompt("Would you like to require special characters? y or n")
	if (special == "y") {
		special = true;
	} else {
		special = false;
	}
	
	var numbers = prompt("Would you like to require numbers? y or n")
	if (numbers == "y") {
		numbers = true;
	} else {
		numbers = false;
	}

	// [] Conditional statement to check if user does not include any types of characters. Password generator ends if all four variables evaluate to false
	if (!lowercase && !uppercase && !special && !numbers) {
		return false 
	}
	
	return { passwordLength, numbers, special, uppercase, lowercase }
}

function generatePassword() {
	debugger;
	var userInput = getPasswordOptions();
	if (!userInput) { // ! is inversion
		// if userInput is invalid, don't try to generate a password
		return ""; 
	}
	
	var result = [];
	var guaranteedCharacters = [];
	var possibleCharacters = [];
	
	if (userInput.numbers) {
		for (let i = 0; i < numericCh.length; i++) {
			possibleCharacters.push(numericCh[i]);
		}
		guaranteedCharacters.push(randomEl(numericCh));
	}
	
	if (userInput.special) {
		for (let i = 0; i < specialCh.length; i++) {
			possibleCharacters.push(numericCh[i]);
			}
		guaranteedCharacters.push(randomEl(specialCh));
	}
	if (userInput.uppercase) {
		for (let i = 0; i < uppercaseCh.length; i++) {
			possibleCharacters.push(numericCh[i]);
		}
		guaranteedCharacters.push(randomEl(uppercaseCh));
	}
	
	if (userInput.lowercase) {
		for (let i = 0; i < lowercaseCh.length; i++) {
			possibleCharacters.push(numericCh[i]);
		}
		guaranteedCharacters.push(randomEl(lowercaseCh));
	}
  
  for (let i = 0; i < userInput.passwordLength; i++) {
		if (i < guaranteedCharacters.length) {
			result[i] = guaranteedCharacters[i];
		} else {
			result[i] = randomEl(possibleCharacters);
		}
	}
	return result.join("");
}
var generateBtn = document.querySelector("#generate");
function writePassword() {

	
	var password = generatePassword();
	var passwordText = document.querySelector("#password");

	passwordText.value = password;

}

function randomEl(arr) { 
	var rv = arr[Math.floor(Math.random()*arr.length)];
	return rv;
}

generateBtn.addEventListener("click", writePassword);
