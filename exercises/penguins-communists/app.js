class Party {
    constructor(name) {
        this.name = name;
        this.pop = 1000000;
    }
}

function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}

const penguins = new Party("Penguins")
const communists = new Party("Communists")

const start = randomInt(0,1) === 0 ? penguins : communists

function sendNuke(party, onHit, onMiss) {

}

function onHit(party) {

}

function onMiss(party) {

}