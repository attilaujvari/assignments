var ask = require('readline-sync')

//////////////////////
// Global variables //
var player = {
    name: '',
    health: 100,
    inventory: ["Letter opener","PCP"]
};


/////////////////
// GAME INTRO  //

    player.name = ask.question("What is your name? ");
    console.log("Welcome " + player.name + " to Narnia-knockoff. ")

    var options = ["Walk", "Look at your inventory"]


///////////////
// GAME LOOP //
while (player.health > 0) {
    let userChoice = ask.keyInSelect(options, "What would you like to do? ");
    if (userChoice === 0) {
        walk()
    } else if (userChoice === 1) {
        console.log(player.inventory + " and " + player.health + " health.")
    } else {
        console.log("We're sorry to see you go. Please come again!");
        break
    }


////////////////////
// Game Functions //
    function walk() {
        // random number between 1 - 4
        var chance = Math.floor(Math.random() * 4);
        // if number is 1 === attack
        if (chance === 1) {
            console.log("Uh-oh! An enemy found you first.");
            var fightOptions = ["Try to run away", "Fight"];
            let userChoice = ask.keyInSelect(fightOptions, "What would you like to do? ");
            if (userChoice === 0) {
                var runChance = Math.floor(Math.random() * 2);
                if (runChance === 0) {
                    run()
                } else {
                    console.log("You fail even at running away.");
                    fight()
                }
            } else if (userChoice === 1) {
                fight()
            } else if (userChoice === 2){
                console.log("Took a few steps. Probably stepped in unicorn doo-doo.")
            }
        }
    }

    function run(){
        var runChance = Math.floor(Math.random() * 2);
        if (runChance === 0) {
            console.log("You successfully evaded the beast.");
            walk()
        } else {
            console.log("You fail even at running away.");
            fight()
        }
    }

    function fight(){
        var enemy = enemyCreation()
        console.log("You're being attacked by a " + enemy.name + "!\n" +
            "They have " + enemy.health + " health, and " + enemy.attackPower + " attack power.")
        var fightOptions = ["Try to run away", "Fight"];
        let userChoice = ask.keyInSelect(fightOptions, "What would you like to do? ");
        if (userChoice === 0){
            run()
        } else {
            enemyAttack(enemy)
        }
        while (enemy.health > 0 && player.health > 0){
            attackEnemy(enemy);
            enemyAttack(enemy);

        if(enemy.health <= 0){

            player.inventory.push("some cool item");
            enemyDie()
        }
        if (player.health <= 0){
            die()
        }
        }
    }

    function attackEnemy(enemy){
        let playerDamage = player.health * 0.2 + (5 - Math.floor(Math.random() * 10));
        console.log("You attack the beast for " + playerDamage)
        enemy.health = enemy.health = playerDamage;
        console.log("You have " + player.health + " health remaining. The beast has " + enemy.health)
    }

    function enemyAttack(enemy){
        let enemyDamage = enemy.attackPower + (5 - Math.floor(Math.random() * 10));
        console.log("The beast attacks you for " + enemyDamage);
        player.health = player.health - enemyDamage;
        console.log("You have " + player.health + " health remaining. The beast has " + enemy.health)
    }

    function die(){
        console.log("Sadly, you died of your wounds.");
    }

    function enemyDie(){
        player.health += 35;
        console.log("You won!");
        console.log("You now have " + player.health + " health.")
    }

    function enemyCreation(){
        var chance = Math.floor(Math.random() * 3);
        switch (chance) {
            case 0:
                return unicorn = {
                    name: "Unicorn",
                    health: 75,
                    attackPower: 8
                };
            case 1:
                return mermaid = {
                    name: "Mermaid",
                    health: 50,
                    attackPower: 4
                };
            case 2:
                return gryphon = {
                    name: "Gryphon",
                    health: 100,
                    attackPower: 13
                };
            default:
                console.log("Enemy creation default failure")
        }
    }
}