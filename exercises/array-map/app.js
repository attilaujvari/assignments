// 1) Make an array of numbers that are doubles of the first array
function doubleNumbers(arr){
    return arr.map(x => x*2)
}

console.log(doubleNumbers([2, 5, 100])); // [4, 10, 200]

///////////////////                    ///////////////////
// 2) Take an array of numbers and make them strings
function stringItUp(arr){
    return arr.map(x => x.toString())
}

console.log(stringItUp([2, 5, 100])); // ["2", "5", "100"]

///////////////////                    ///////////////////
// 3) Capitalize each of an array of names
function capitalizeNames(arr){
    return arr.map(x => x.toUpperCase())
}

console.log(capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"])); // ["John", "Jacob", "Jingleheimer", "Schmidt"]

///////////////////                    ///////////////////
// 4) Make an array of strings of the names
function namesOnly(arr){
    var names = arr.map(function (name) {
        return name.name
    })
    return names
}

console.log(namesOnly([
    {
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
]));
// ["Angelina Jolie", "Eric Jones", "Paris Hilton", "Kayne West", "Bob Ziroll"]

///////////////////                    ///////////////////
// 5) Make an array of strings of the names saying whether or not they dom go to The Matrix
function makeStrings(arr){
    var domGo = arr.map(function (dom) {
        if (dom.age >= 18){
            return dom.name + " dom go to The Matrix."
        } else {
            return dom.name + " is under age!"
        }
    })
    return domGo
}

console.log(makeStrings([
    {
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
]));
// ["Angelina Jolie dom go to The Matrix",
// "Eric Jones is under age!!",
// "Paris Hilton is under age!!",
// "Kayne West is under age!!",
// "Bob Ziroll dom go to The Matrix"]

///////////////////                    ///////////////////
// 6) Make an array of the names in h1s, and the ages in h2s
function readyToPutInTheDOM(arr){
    // var domed = arr.map(function (dom) {
    //     document.createElement("h1")
    //     document.createElement("h2")
    //     return document.createTextNode(dom.name)
    //     return dom.name + " is under age!"
    // })
    // return domed
}
console.log(readyToPutInTheDOM([
    {
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
]));
// ["<h1>Angelina Jolie</h1><h2>80</h2>",
// "<h1>Eric Jones</h1><h2>2</h2>",
// "<h1>Paris Hilton</h1><h2>5</h2>",
// "<h1>Kayne West</h1><h2>16</h2>",
// "<h1>Bob Ziroll</h1><h2>100</h2>"]