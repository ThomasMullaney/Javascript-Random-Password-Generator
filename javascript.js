var generateBtn = document.querySelector("#generate");


var lower = "abcdefghijklmnopqrstuvwxyz".split("");
var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
var number = "0123456789".split("");
var special = "!@#$%^&*()".split("");



var characterLength = prompt('How long would you like your password to be? 8 to 100 characters');
var hasLower = confirm('Do you want to use lowercase?');
var hasUpper = confirm('Do you want to use uppercase?');
var hasNumber = confirm('Do you want to use numbers?');
var hasSpecial = confirm('Do you want to use special characters?');

function generatePassword(up, low, spec, numb, char) {
    console.log(up, low, numb, spec);

    var genpass = [];
    var result = [];
    if (characterLength >= 8 && characterLength <= 128) {
        if (up === true) {
            for (var i = 0; i < upper.length; i++) {
                genpass.push(upper[i])
            }
        }
        if (low === true) {
            for (var i = 0; i < lower.length; i++) {
                genpass.push(lower[i])
            }
        }
        if (numb === true) {
            for (var i = 0; i < number.length; i++) {
                genpass.push(number[i])
            }
        }
        if (spec === true) {
            for (var i = 0; i < special.length; i++) {
                genpass.push(special[i])
            }
        }

        for (var i = 0; i < char; i++) {
            var randomPick = Math.floor(Math.random() * genpass.length)
            result.push(genpass[randomPick])
        }

        var finalAnswer = result.join("")
        return finalAnswer
    }
    else {
        alert("Must be between 8 and 128 characters.")
        return location.reload()
    }
}



// Write password to the #password input
function writePassword() {
    var password = generatePassword(hasUpper, hasLower, hasSpecial, hasNumber, characterLength);

    var passwordText = document.querySelector("#password");

    passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);










// original js script provided


