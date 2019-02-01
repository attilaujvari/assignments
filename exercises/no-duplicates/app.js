var input = "bookkeeper larry";
// Output: "bokepr lay"
//remove any duplicate letters
function noDups(str) {
    res = '';
    for (i = 0; i < str.length; i++){
        if (res.indexOf(str[i]) < 0){
            res += str[i]
        }
    }
    return res;
}
console.log(noDups(input));
//randomly removes a letter
function randRemove(str) {
    arr = str.split('');
    arr.splice(Math.floor(Math.random() * str.length),1);
    newStr = arr.join("");
    return newStr;
}
console.log(randRemove(input))
//scrambles the original string
function scramble(str){
    for (i = 0; i < str.length; i++){
        scrambled[i] = str
    }
}