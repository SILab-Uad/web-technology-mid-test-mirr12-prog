// TODO: Implement the password generation logic based on user input

const generatePassword = (length, options) => {
    // Character sets for password generation
    const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercase = "abcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";
    const specialChars = "!@#$%^&*()";

    // TODO: Create a variable for the character set based on selected options
    let availableChars = "";
    if(options.includeUppercase) availableChars += uppercase;
    if(options.includeLowercase) availableChars += lowercase;
    if(options.includeNumber) availableChars += numbers;
    if(options.includeSpecialChars) availableChars += specialChars;

    if (availableChars === "") {
        return "Pilih Salah Satu";
    }

    // TODO: Generate the password based on the selected criteria
    let password = "";
    for (let i=0; i < length; i++){
        const randomindex = Math.floor(Math.random() * availableChars.length);
        password += availableChars[randomindex]
    }

    return password;
};

// TODO: Add event listener to the button to call generatePassword and display the output
document.getElementById('generateBtn').addEventListener('click',() => {
    const lenght = parseInt(document.getElementById('length').value);
    const includeUppercase = document.getElementById('includeUppercase').checked;
    const includeLowercase = document.getElementById('includeLowercase').checked;
    const includeNumber = document.getElementById('includeNumbers').checked;
    const includeSpecialChars = document.getElementById('includeSpecialChars').checked;
// Create an options object
const options ={
    includeUppercase,
    includeLowercase,
    includeNumber,
    includeSpecialChars,
};

//Generate password
const password = generatePassword(lenght, options);
document.getElementById('passwordOutput').innerText = password;
});
// BONUS: Implement the copy to clipboard functionality
document.getElementById('copyBtn').addEventListener('click',() => {
    const passwordOutput = document.getElementById('passwordOutput').innerText;

    if (passwordOutput){
        //Create a temporary input element to copy text
        const tempInput = document.createElement('input');
        tempInput.value = passwordOutput;
        document.body.removeChild(tempInput);
        tempInput.select();
        document.body.removeChild(tempInput);

        alert('Password copied to clipboard!');
    } else {
        alert('Please generate a password first!');
    }
});