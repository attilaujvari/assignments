let baseArray = []
for (let i = 0; i <= 100; i++){
    baseArray.push(i)
}

for (let j = 0; j < baseArray.length; j++){
    if (j % 3 === 0 && j % 5 === 0){
        baseArray[j] = "FizzBuzz"
    } else if (j % 3 === 0){
        baseArray[j] = "fizz"
    } else if (j % 5 === 0){
        baseArray[j] = "Buzz"
    }
    console.log(baseArray)
}