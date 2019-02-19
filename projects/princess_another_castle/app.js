class Player {

    constructor(){
        this.name = "";
        this.totalCoins = 0;
        this.status = "Small";
        this.hasStar = false;
    }
    setName(namePicked){
        if (namePicked === "Mario" || namePicked === "Luigi"){
            this.name = namePicked
        } else{
            console.log("Spell either Mario or Luigi correctly.")
        }
    }
    gotHit(currentStatus){
        console.log("           Got hit")
        if (currentStatus === "Powered Up"){
            this.status = "Big"
        } else if (currentStatus === "Big"){
            this.status = "Small"
        } else if (currentStatus === "Small" && this.hasStar === false){
            console.log("          Now you ded fo realz yo.    #sadFace #YOLO")
            this.status = "Dead";
            gameActive = false
        } else if (currentStatus === "Small" && this.hasStar === true){
            console.log("                   but your star has protected you!")
            this.hasStar = false
        }
    }

    gotPowerUp(currentStatus){
        console.log("           Powered up")
         if (currentStatus === "Small"){
            this.status = "Big"
        } else if (currentStatus === "Big"){
            this.status = "Powered Up"
        } else  if (currentStatus === "Powered Up"){
            this.hasStar = true
        }
    }

    addCoin(){
        console.log("           Got coin")
        this.totalCoins ++
    }
    print (){
        console.log(
            "Name: " + this.name + "\n",
            "Coins: " + this.totalCoins + "\n",
            "Status: " + this.status + "\n",
            "Star: " + this.hasStar
        )
    }
    getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
}

let gameActive = true;
let player = new Player()
player.setName("Luigi")

function setInterval() {
    while (gameActive === true){
        let rand = player.getRandomInt(0,2)
        if (rand === 0){
            player.gotHit(player.status)
        } else if (rand === 1){
            player.gotPowerUp(player.status)
        } else if (rand === 2){
            player.addCoin()
        }
        player.print()
    }
}

setInterval()