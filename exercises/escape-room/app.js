var ask = require('readline-sync');

var name = ask.question("What is your name? ");

console.log("Standard greeting phase " + name);

var gameOver = false
var options = ['Find the key','Open door','Put hand in hole']

//game loop
while (!gameOver) {
    var userChoice = ask.keyInSelect(options,"What would you like to do? ")
    if (userChoice === 0){
        console.log("Buh-bye!")
        gameOver = true
    }
}