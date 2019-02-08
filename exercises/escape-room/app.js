var ask = require('readline-sync');

var name = ask.question("What is your name? ");

console.log("Standard greeting phase " + name);

var gameOver = false
var options = ['Find the key','Open door','Put hand in hole']

//game loop
while (!gameOver) {
    console.log("Hello, " + name + ". You wake up in total darkness, not remembering where you are, what time it is, or even who you were just before this moment. As you reach around for literally anything familiar, you cut your finger on what feels like a shear made out of a bone. Warm blood is gushing all over your hand and you can smell the hint of iron from your blood cells.")
    var userChoice = ask.keyInSelect(options, "What would you like to do? ")
    if (userChoice === 2) { //end of game
        console.log("You reach around in the hole but there's nothing in there. Nothing's happening. You're about to pull it out when you feel the gentle touch of something, as if a breeze kissed your knuckles. You grab in its direction and feel a cloud of fuzz envelop your hand. It feels strangely warm. Then the heat gushes through your arm and you realize that a poison is spreading through your veins. This is the end of you, but it is better than the alternative...")
        gameOver = true
    } else if (userChoice === 0) { //   lvl 1 finding key
        console.log("You dig through a rotting caracas and feel a solid, cold object in its bowels. Despite the stomach acid burning your skin, you reach deeper and take it out. It is a key.")
        userChoice = ask.keyInSelect(options, "What would you like to do? ")
        if (userChoice === 1) { //   lvl 2 key -> door
            console.log("You open the door and find yourself in a crypt. The walls are covered in coagulated blood, and the stench of decaying human flesh permeates the room. You will die here." )
            userChoice = ask.keyInSelect(options, "What would you like to do? ")
            if (userChoice === 0){ // lvl 3 key -> door -> key
                console.log("What key? You already found your one hope, why can't that be enough? Fuckin' millenials...")
                userChoice = ask.keyInSelect(options, "What would you like to do? ")
                if (userChoice === 0){ //  lvl 4 key -> door -> key -> key    END
                    console.log("Fuck. You.")
                    gameOver = true
                }   else if (userChoice === 1){ //  lvl 4 key -> door -> key -> door    END
                    console.log("There is no other door. In your desperation, you reach around in the hole but there's nothing in there. Nothing's happening. You're about to pull it out when you feel the gentle touch of something, as if a breeze kissed your knuckles. You grab in its direction and feel a cloud of fuzz envelop your hand. It feels strangely warm. Then the heat gushes through your arm and you realize that a poison is spreading through your veins. This is the end of you, but it is better than the alternative... ")
                    gameOver = true
                } else { // lvl 4 key -> door -> key -> hole    END
                    console.log("You reach around in the hole but there's nothing in there. Nothing's happening. You're about to pull it out when you feel the gentle touch of something, as if a breeze kissed your knuckles. You grab in its direction and feel a cloud of fuzz envelop your hand. It feels strangely warm. Then the heat gushes through your arm and you realize that a poison is spreading through your veins. This is the end of you, but it is better than the alternative...")
                    gameOver = true
                }
            } else if (userChoice === 1) { //  lvl 3 key -> door -> door    END
                console.log("There is no other door. In your desperation, you reach around in the hole but there's nothing in there. Nothing's happening. You're about to pull it out when you feel the gentle touch of something, as if a breeze kissed your knuckles. You grab in its direction and feel a cloud of fuzz envelop your hand. It feels strangely warm. Then the heat gushes through your arm and you realize that a poison is spreading through your veins. This is the end of you, but it is better than the alternative... ")
                gameOver = true
            } else { // lvl 3 key -> door -> hole    END
                console.log("You reach around in the hole but there's nothing in there. Nothing's happening. You're about to pull it out when you feel the gentle touch of something, as if a breeze kissed your knuckles. You grab in its direction and feel a cloud of fuzz envelop your hand. It feels strangely warm. Then the heat gushes through your arm and you realize that a poison is spreading through your veins. This is the end of you, but it is better than the alternative...")
                gameOver = true
            }
        } else if (userChoice === 0){ // lvl 3 key -> door -> key
            console.log("What key? You already found your one hope, why can't that be enough? Fuckin' millenials...")
            gameOver = true
    } else {  //   lvl 1 door
    console.log("The noise you made echoes through the walls. The door is locked and doesn't budge. Dozens and dozens of growls and howls can be heard from other side... they are approaching...")
        userChoice = ask.keyInSelect(options, "What would you like to do? ")
    }
}
}


