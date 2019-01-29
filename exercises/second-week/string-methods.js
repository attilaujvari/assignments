capitalizeAndLowercase("Hello") // => "HELLOhello"
function capitalizeAndLowercase(a) {
    console.log(a.toUpperCase()+a.toLowerCase())
}

findMiddleIndex("Hello") // => 2
findMiddleIndex("Hello World") // => 5
function findMiddleIndex(a) {
    console.log(Math.floor(a.length/2))
}

returnFirstHalf("Hello") // => "He"
returnFirstHalf("Hello World") // => "Hello"
function returnFirstHalf(a) {
    console.log(a.slice(0, a.length/2))
}

capilizeAndLowercase("Hello") // => "HEllo"
capilizeAndLowercase("Hello World") // => "HELLO world"
function capilizeAndLowercase(a) {
    console.log(a.slice(0, a.length/2).toUpperCase() + a.slice(a.length/2, a.length).toLowerCase())
}

capitalize("hey friends! practice practice practice!")
// -> "Hey Friends! Practice Practice Practice!"
function capitalize(a) {
var words = a.split(' ');
    for (i = 0; i < words.length; i++){
        words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1)
        // or      words[i][0].toUppercase()   //////////////////////////////
        words2 = words.join(' ')
    }
    console.log(words2)
}