let arr = [];
let num = 0;

function multiTable (n){
    for (let i = 0; i < n; i++){
        arr.push([]);
        for (let j = num; j < n; j++){
            arr[i].push(j*i)
        }
    }
    return arr
}

console.log(multiTable(10))