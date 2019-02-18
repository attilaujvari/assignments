class Player {
    name = "";
    totalCoins = 0;
    status = ""; //options missing
    hasStar = false;

    setName(namePicked){
        if (namePicked === Mario || namePicked === Luigi){
            Player.name = namePicked
        } else{
            console.log("Spell either Mario or Luigi correctly.")
        }
    }

    gotHit(){
        const hitOptions = ["Powered Up","Big","Small","Dead"];
    }


    gotPowerup(){
        const powerOptions = ["Small","Big","Powered Up"];
        //Player.status =
    }

    gameActive = true;

    addCoin(){
        this.totalCoins ++
    }

    print (){
        console.log(this.name + "\n" + this.totalCoins + "\n" + this.status + "\n" + this.hasStar)
    }

    getRandomInt(min, max) {
        min = Math.ceil(0);
        max = Math.floor(3);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

}