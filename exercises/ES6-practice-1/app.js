const name = "John"
let age = 101
const pets = ["cat", "dog"]
const petObjects = []

function runForLoop() {
    for (let i = 0; i < pets.length; i++) {
        let pet = { type: pets[i] }
        if (pets[i] === "cat") {
            let name = "fluffy"
        } else {
            let name = "spot"
        }
        pet.name = name
        petObjects.push(pet)
    }
    return name
}

console.log(runForLoop())

//      Task 1      //
const carrots = ["bright orange", "ripe", "rotten"]

const mapVegetables = (arr) => arr.map((carrot) => ({ type: "carrot", name: carrot }))

console.log(mapVegetables(carrots))


//      Task 2      //
const people = [
    {
        name: "Princess Peach",
        friendly: false
    },
    {
        name: "Luigi",
        friendly: true
    },
    {
        name: "Mario",
        friendly: true
    },
    {
        name: "Bowser",
        friendly: false
    }
];

const filterForFriendly = (arr) => arr.filter((person) => !!person.friendly);
console.log(filterForFriendly(people));


//      Task 3      //
var doMathSum= (a, b) => a + b;

var produceProduct = (a, b) => a * b;

//      Task 4      //
const printString = (firstName = "Jane", lastName = "Doe", age = 100) => `Hi ${firstName}${lastName}, how does it feel to be ${age}?`;
console.log(printString());

//      Task 5      //
const animals = [
    {
        type: "dog",
        name: "theodore"
    },
    {
        type: "cat",
        name: "whiskers"
    },
    {
        type: "pig",
        name: "piglette"
    },
    {
        type: "dog",
        name: "sparky"
    }
];

const filterForDogs = (arr) => arr.filter(animal => animal.type === "dog" && true)
console.log(filterForDogs(animals))
