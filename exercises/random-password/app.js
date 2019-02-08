var form = document.pwdInput;
var seedBox = document.getElementById('seedBox');
var pwdLen, charInclude = "";
var seedX = [];
var seedY = [];
var seedXString, seedYString = '';
var seedUpper, seedLower, seedNumber, seedSpecial = '';
var timeStamp = 0;
var charSelected = 0;

//  set user input before seeding ;-) starts
seedBox.addEventListener('mouseenter', function (event) {
    event.preventDefault();
    pwdLen = form.elements['pwdLenForm'].value;
    charInclude = form.elements['charInclForm'].value;
});
//  get user to generate seed by moving the mouse, limit to 50
seedBox.addEventListener('mousemove', function (event) {
    if (seedX.length <= 50 && seedY.length <= 50){
    seedX.push(event.clientX);
    seedY.push(event.clientY);
    }
});
//  generate seed base data once user stops input
seedBox.addEventListener('mouseleave',function () {
    //  time-based variable value <1 to incrementally lower integer
    timeStamp = Number('0.' + Date.now());
    //  join array to string and half each to seed respective output
    seedXString = seedX.join('');
    seedYString = seedY.join('');
    seedSpecial = seedXString.slice(0,seedXString.length/2);
    seedNumber = seedXString.slice(seedXString.length/2,seedXString.length);
    seedUpper = seedYString.slice(0,seedXString.length/2);
    seedLower = seedYString.slice(seedXString.length/2,seedXString.length);
    // console.log(seedUpper, seedLower, seedNumber, seedSpecial);
    randomPasswordGenerator(timeStamp,seedUpper, seedLower, seedNumber, seedSpecial)
});
console.log(seedUpper, seedLower, seedNumber, seedSpecial);

function randomPasswordGenerator(time, upper, lower, number, special) {

    recurLower(upper)

    function recurLower (seed) {
        if (seed > 90){
            console.log('working on:' + seed)
            return recurLower(timeStamp, seed)
        }
        console.log("final" + seed)
        return seed;
    }
    


}