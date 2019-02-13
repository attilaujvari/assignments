// var wizards = ["Edwin Odesseiron", "Harry Potter", "Ronny the Bear", "Gandalf the Grey"]
// wizards.forEach(function (wizard) {
//     console.log(wizard)
// })

var wizards = [
    {
        name: "Edwin Odesseiron",
        age: 37,
        alignment: "lawful evil"
    },
    {
        name: "Harry Potter",
        age: 21,
        alignment: "neutral good"
    },
    {
        name: "Hermony Granger",
        age: 21,
        alignment: "lawful good"
    },
    {
        name: "Ronny the Bear",
        age: 21,
        alignment: "neutral good"
    },
    {
        name: "Gandalf",
        age: 100,
        alignment: "neutral good"
    }
];

wizards.forEach(function (wizard) {
    console.log(wizard.name)
});

wizards.forEach(function (wizard) {
    wizard.isAlive = true
});

wizards.find(function (wizard) {
    if(wizard.alignment === 'neutral good'){
        console.log(wizard.name)
    }
});

console.log(wizards.findIndex(function (wizard) {
        return wizard.alignment === 'lawful good'
    })
);

console.log(wizards.every(function (wizard) {
    if (wizard.isAlive === true){
        return wizard
    }
}));

console.log(wizards.some(function (wizard) {
    if (wizard.alignment === 'neutral good'){
        return wizard
    }
}));

wizards.forEach(function (wizard) {
    if (wizard.alignment === 'neutral good'){
        wizard.isAlive = false
    }
});

console.log(wizards.every(function (wizard) {
    if (wizard.isAlive === true){
        return wizard
    }
}));

console.log(wizards.some(function (wizard) {
    if (wizard.isAlive === true){
        return wizard
    }
}));