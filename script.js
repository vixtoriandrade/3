// JavaScript code
const generateBtn = document.querySelector("#generate");
const passwordInput = document.querySelector("#password");

// Defining my character sets for the password generator
const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numericChars = "0123456789";
const specialChars = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~";

// Function to randomly generate a password
function generatePassword() {
  let password = "";
  const passwordLength = 12; // I can change this to adjust the password length

  const charPool = [
    lowercaseChars,
    uppercaseChars,
    numericChars,
    specialChars,
  ];

  // Generate the password one character at a time
  for (let i = 0; i < passwordLength; i++) {
    // Randomly choose a pool of characters
    const poolIndex = Math.floor(Math.random() * charPool.length);
    const poolChars = charPool[poolIndex];

    // Randomly choose a character from the pool
    const charIndex = Math.floor(Math.random() * poolChars.length);
    const randomChar = poolChars.charAt(charIndex);

    // Add the random character to the password
    password += randomChar;
  }

  return password;
}

// Function to set the generated password in the textarea
function setGeneratedPassword() {
  console.log("HOLIS")
  const password = generatePassword();
  console.log(password)
  passwordInput.innerHTML = password;
  // passwordInput.value = password;  
  console.log(document)
  
}

// Add a click event listener to the Generate Password button
generateBtn.addEventListener("click", setGeneratedPassword);