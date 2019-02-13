function countCode(string) {
var count = 0;
for (var i = 0; i < string.length; i++){
    if (string[i] + string[i +1] + string[i + 3] === 'coe'){
        count++
    }
}
return count;
}

//or

function countCode(string) {
    var result = string.match(/co.e/g).length
}

//Output:
// countCode("aaacodebbb") returns 1
// countCode("codexxcode") returns 2
// countCode("cozexxcope") returns 2