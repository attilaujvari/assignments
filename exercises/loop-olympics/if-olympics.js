// Write an if statement that prints "is greater than" if 5 is greater than 3
if (5 > 3){
    console.log("is greater than")
}

// Write an if statement that prints "is the length" if the length of "cat" is 3
var x = "cat"
if (x.length === 3) {
    console.log("is the length")
}

// Write an if/else statement that checks if "cat" is equal to "dog" and prints, "not the same" when they are not equal.
if ("cat" !== "dog") {
    console.log("not the same")
}
         //or
if ("cat" === "dog"){
    true
} else {
    console.log("not the same")
}
/////////////////////////////////////// Bronze
var person = {
    name: "Bobby",
    age: 12
}

if (person.age >= 18){
    console.log(person.name + "is allowed to go to the movie")
} else {
    console.log(person.name + "is not allowed to go to the movie")
}

if (person.name[0] === 'B'){
    console.log(person.name + "is allowed to go to the movie")
} else {
    console.log(person.name + "is not allowed to go to the movie")
}

if (person.age >= 18 && person.name[0] === 'B'){
    console.log(person.name + "is allowed to go to the movie")
} else {
    console.log(person.name + "is not allowed to go to the movie")
}
/////////////////////////////////////// Silver
if (1 === "1"){
    console.log("1")
} else if (1 == "1"){
    console.log('loose')
} else {
    console.log('not equal at all')
}

if ((1 <= 2 && 2 === 4) || ((3*4 > 10) && (5+10 > 10))){
    console.log('yes')
}
/////////////////////////////////////// Gold
// Write an if statement that checks to see if "dog" is a string
if (typeof "dog" === "string"){
    console.log("dog is a string")
} else {
    console.log("dog is not a string")
}
// Write an if statement that checks to see if "true" is a boolean
if (typeof "true" === "boolean"){
    console.log("yah, it's a boolean")
} else {
    console.log("not a boolean")
}
// Write an if statement that checks to see if a variable has been defined or not
if (typeof variable === "undefined"){
    console.log("variable is undefined")
} 
// Write an if statement comparing letters to numbers using < and >. Try to figure out what letters are going to be "greater than" other numbers or letters. For example: is "s" greater than 12?
if ("s" > 12){}
/*JS does not coerces conversion of number or other characters to Unicode values. Therefore, it cannot compare (or, result in 'false') numbers to letters. However, it does compare letters with A starting at 0.*/

//     Write a ternary statement that console.logs whether a number is odd or even. For example:
    var myNum = 10;
    myNum % 2 >0
    ? console.log("The number is odd")
    : console.log("The number is even")
// // Write your ternary here to log if `myNum` is odd or even.
// (It should continue to work correctly even if myNum changes to a different number).