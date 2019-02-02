// 1.
let str = "Hello World"
// Output: "dlroW olleH"

let reverseStr = function(str) {
    return str.split('').reverse().join('');
}
console.log(reverseStr(str))

//2.
let num = "3"
Output: true

let word = "three"
Output: false
let isNum = function(str) {
    if (isNaN(str)){
        return false
    } else {
        return true
    }
}
console.log(isNum(num))
console.log(isNum(word))

// 3.
let even = 4
Output: true

let odd = 3
Output: false
let isEven = function(num) {
    if(num % 2 === 0){
        return true;
    } else {
        return false
    }
}
console.log(isEven(odd))

// 4.
let avgArr1 = [1, 2, 3]
Output: 2

let avgArr2 = [5, -10, 10, 20]
Output: 6.25

let averageArray = function(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++){
        sum = sum + arr[i]
    }
    return sum / arr.length
}
console.log(averageArray(avgArr2))

// 5.
let arr1 = ["a", "b", "c"]
let arr2 = [1, 2, 3]
// Output: ["a", 1, "b", 2, "c", 3]
let combineArrays = function(arr1, arr2) {
    let result = []
    for (let i = 0; i < arr1.length; i++){
        result.push(arr1[i])
        result.push(arr2[i])
    }
    return result
}
console.log(combineArrays(arr1,arr2))