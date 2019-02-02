let str = "Loops help you reduce your wrinkles."

function strToArr(str) {
return str.split("")
}
console.log(strToArr(str))

function positioner(str, char) {
    if (str.indexOf(char) === -1){
        console.log("Character not found!")
    }
    console.log(str.indexOf(char))
    return str.indexOf(char)
}
(positioner(str,'u'))

let arrNumbers = []
for (let i = 0; i < 41; i++){
    arrNumbers[i] = i;
}

function omg42(arr) {
    for (i = 0; i < arr.length; i++){
        if (arr[i] === 42){
            return "Found 42!"
        }
    }
    return "42 not found!"
}
console.log(omg42(arrNumbers))

let ran = [7134, 8763, 32346, 2361, 8966, 3825, 2051, 847, 2382]
function min(ran) {
    let mi = ran[0];
    for (let i = 0; i < ran.length; i++){
        if (ran[i] < mi){
            mi = ran[i]
        }
    }
    console.log(mi)
}
min(ran)