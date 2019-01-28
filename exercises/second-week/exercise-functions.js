function add(a, b) {
    return a + b
}
console.log(add(4,3));

function largest(a, b, c) {
    return Math.max(a,b,c)
}
console.log(largest(4,14,7));

function evenOdd(a) {
    if (a % 2 === 0){
        console.log('Even')
    } else{
        console.log('Odd')
    }
}
evenOdd(4);

function stringShit(a) {
    if (a.length <= 20){
        return a + a
    } else {
        return a.slice(0, a.length/2)
    }
}
console.log(stringShit('aiwunfiuayfuytjhgkjnkbhu'));
//////////////////////////////
function fibonacciRec(n) {
    if (n <= 1){
        return 1;
    } else{
        return fibonacciRec(n-1) + fibonacciRec(n - 2)
    }
}
console.log(fibonacciRec(19))
/////
function fibonacci(num){
    var a = 1, b = 0, temp;
    var sum = 0;
    while (num >= 0){
        temp = a;
        a = a + b;
        b = temp;
        num--;
        console.log(temp)
        sum = sum + temp;
    }
    console.log('sum of fib: ' + sum)
    return b;
}
fibonacci(19)