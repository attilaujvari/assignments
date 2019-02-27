function findMissingNo(arr) {
    let newArr = arr.sort(function (a, b){return a-b})
    for (let i = 0; i < newArr.length; i++){
        if (arr[i] === arr[i+1]) {
            i++
        } else{
            if (arr[i] + 1 !== arr[i+1]) return arr[i]+1
        }
    }
}


console.log(findMissingNo([3,5,4,8,1,2,7]))
//Output: 6
console.log(findMissingNo([2,1,3,5]))
//Output: 4
console.log(findMissingNo([12,10, 9]))
//Output: 11
console.log(findMissingNo([-3,0,-2,3,2,-1]))
//Output: 1