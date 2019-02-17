function collectAnimals(...arr) {
    return arr
}

console.log(collectAnimals("dog", "cat", "mouse", "jackolope", "platypus"));
// ["dog", "cat", "mouse", "jackolope", "platypus"]
//////     /////     /////    /////     //////
//////     /////     /////    /////     //////
function combineFruit(fruit, sweets, vegetables){
    return {
        fruit,sweets,vegetables
    }
}

combineFruit(["apple", "pear"],
    ["cake", "pie"],
    ["carrit"])
//////     /////     /////    /////     //////
//////     /////     /////    /////     //////
const vacation = {
    location: "Burly Idaho",
    duration: "2 weeks"
};
const {location, duration} = vacation
function parseSentence(){
    return `We're going to have a good time in ${location} for ${duration}`
}
console.log(parseSentence())
//////     /////     /////    /////     //////
//////     /////     /////    /////     //////
function returnFirst(items){
    const [firstItem] = items; /*change this line to be es6*/
    return firstItem
}
const animalus = ["dog", "cat", "mouse", "jackolope", "platypus"]
console.log(returnFirst(animalus));
//////     /////     /////    /////     //////
//////     /////     /////    /////     //////
const favoriteActivities = ["magnets", "snowboarding", "philanthropy", "janitor work", "eating"];

function returnFavorites(arr){
    const [firstFav, secondFav, thirdFav] = favoriteActivities
    return `My top three favorite activities are ${firstFav}, ${secondFav}, and ${thirdFav}`;
}
console.log(returnFavorites(favoriteActivities))
//////     /////     /////    /////     //////
//////     /////     /////    /////     //////
function combineAnimals(...arr) {
    return [].concat(...arr)
}

const realAnimals = ["dog", "cat", "mouse"];
const magicalAnimals = ["jackolope"];
const mysteriousAnimals = ["platypus"];

console.log(combineAnimals(realAnimals, magicalAnimals, mysteriousAnimals));

// ["dog", "cat", "mouse", "jackolope", "platypus"]
//////     /////     /////    /////     //////
//////     /////     /////    /////     //////
function product(a, b, c, d, e) {
    var numbers = [a,b,c,d,e];

    return numbers.reduce((acc, number) => acc * number, 1)
}
console.log(product(1,2,3,4,5))
//////     /////     /////    /////     //////
//////     /////     /////    /////     //////
// function unshift(...arr) {
//     return [].concat(...arr);
//     return
// }

function unshift(array, ...a) {
    return [...a,array]
}

console.log(unshift(realAnimals,magicalAnimals,mysteriousAnimals,favoriteActivities,animalus));
//////     /////     /////    /////     //////
//////     /////     /////    /////     //////
function populatePeople(names){
    return names.map(function(name){
        name = name.split(" ");
        const [firstName, lastName] = name
        return {
            firstName,
            lastName
        }
    })}
   console.log( populatePeople(["Frank Peterson", "Suzy Degual", "Liza Jones"]))
//[
//  {firstName: "Frank", lastName: "Peterson"},
//  {firstName: "Suzy", lastName: "Degual"},
//  {firstName: "Liza", lastName: "Jones"},
//]