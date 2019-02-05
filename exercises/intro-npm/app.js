var readline = require("readline-sync")

var name = readline.question("What is your first name? ")
var age = readline.questionInt("How old are you? ")
var email = readline.questionEMail("What's your email address? ")
var position = readline.question("Favorite sex position? Be descriptive. ")

name.toUpperCase()
console.log('\n' + "There are " + email.length + " characters in the email field." + '\n')
console.log("The person's name is: " + name + " and they are " + age + " young. ;)"  + '\n')
console.log("The second half of your message is: " + position.slice(position.length/2,position.length)  + '\n')

var readFrom = readline.questionInt("From which character on would you like ro re-read your message? "  + '\n')

console.log(position.slice(readFrom))