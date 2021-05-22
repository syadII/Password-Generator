// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowercase = ["a","b","c","d","e","f","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var uppercaseSTR = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
var uppercase = uppercaseSTR.split("")
var number = [0,1,2,3,4,5,6,7,8,9];
var special=["!","@","#","$","%","&","*"];
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
function generatePassword(){
  var lowercase= window.prompt(message,string);
  return

}
// Add event listener to generate button
generatePassword.addEventListener("clck",)
generateBtn.addEventListener("click", writePassword)
