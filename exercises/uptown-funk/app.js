var lyrics = ["This", "hit", "that", "ice", "cold",
    "Michelle", "Pfeiffer", "that", "white",
    "gold", "This", "one", "for", "them",
    "hood", "girls", "Them", "good", "girls",
    "straight", "masterpieces", "Stylin'",
    "whilen'", "livin'", "it", "up", "in",
    "the", "city", "Got", "Chucks", "on",
    "with", "Saint", "Laurent", "Gotta", "kiss",
    "myself", "I'm", "so", "pretty"];

function stringer(arr) {
    console.log(arr.join(" "))
}
stringer(lyrics)

function reverse(arr){
    console.log(arr.reverse().join(" "))
}
reverse(lyrics)

function everyOther(arr) {
    var result = []
    for (var i = 0; i < arr.length; i++){
        result.push(arr[i])
        i++
    }
    return result.join(" ")
}
console.log(everyOther(lyrics))
////////////////
console.log("\nextra challenge:")
// function swap(arr) {
//     var res = []
//     for (i = 0; i < arr.length; i++){
//         if (i % 2 === 0){
//             res[i] = arr[i+1]
//             res[i+1] = arr[i]
//         }
//         i++
//     }
//     console.log(res)
// }
// swap(lyrics)