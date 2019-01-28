/////////////////////// Preliminaries //////////////////////
// Write a for loop that prints to the console the numbers 0 through 9.
for (i = 0; i < 10; i++){
    console.log(i)
}
console.log('\n');
// Write a for loop that prints to the console 9 through 0.
for (i = 9; i >= 0; i--){
    console.log(i)
}
console.log('\n');
// Write a for loop that prints these fruits to the console.
    var fruit = ["banana", "orange", "apple", "kiwi"];
for (i = 0; i < fruit.length; i++){
    console.log(fruit[i])
}
/////////////////////// Bronze Medal //////////////////////
console.log('\n' + '/////     Bronze Medal below     /////');
// Write a for loop that will push the numbers 0 through 9 to an array.
var arrB = [null];
for (i = 0; i < 10; i++){
    arrB[i] = i;
}
console.log(arrB + '\n');
//     Write a for loop that prints to the console only even numbers 0 through 100.
for (i = 0; i <=100; i++){
    if (i%2===0){
        console.log(i)
    }
}
// Write a for loop that will push every other fruit to an array.
var fruit2 = ["banana", "orange", "apple", "kiwi", "pear", "peach"];
var arrC = [];
for (i = 0; i < fruit2.length; i++){
    arrC.push(fruit2[i]);
    i++
}
console.log('\n'+arrC);

/////////////////////// Silver Medal //////////////////////
console.log('\n' + '/////     Silver Medal below     /////');
var peopleArray = [
    {
        name: "Harrison Ford",
        occupation: "Actor"
    },
    {
        name: "Justin Bieber",
        occupation: "Singer"
    },
    {
        name: "Vladimir Putin",
        occupation: "Politician"
    },
    {
        name: "Oprah",
        occupation: "Entertainer"
    }
];
// Write a loop that will print out all the names of the people of the people array
for (i = 0; i<peopleArray.length; i++){
    console.log(peopleArray[i].name)
}
console.log('\n');
// Write a loop that pushes the names into a names array, and the occupations into an occupations array.
var name = [];
var occupation = [];
for (i = 0; i < peopleArray.length; i++){
    name.push(peopleArray[i].name);
    occupation.push(peopleArray[i].occupation);
}
console.log(name);
console.log(occupation + '\n');
//     Write a loop that pushes every other name to an array starting with "Harrison Ford", and every other occupation to another array starting with "Singer".
var name2 = [];
var occupation2 = [];
for (i = 0; i < peopleArray.length; i++){
    name2.push(peopleArray[i].name);
    occupation2.push(peopleArray[i+1].occupation);
    i++
}
console.log(name2);
console.log(occupation2 + '\n');

/////////////////////// Gold Medal //////////////////////
console.log('\n' + '/////     Gold Medal below     /////');
var depth = 3;
var newArr = [];
// // Create an array that mimics a grid like the following using for loops:
//     [[0, 0, 0]
//      [0, 0, 0]
//      [0, 0, 0]]
for (i = 0; i < depth; i++){
    newArr[i] = [];
    for (j = 0; j < depth; j++){
        newArr[i].push(0);
    }
}
console.log(newArr);
// // 2.Create an array that mimics a grid like the following using for loops:
//
//     [[0, 0, 0]
//      [1, 1, 1]
//      [2, 2, 2]]
for (i = 0; i < depth; i++){
    newArr[i] = [];
    for (j = 0; j < depth; j++){
        newArr[i].push(i);
    }
}
console.log(newArr);
// // 3.Create an array that mimics a grid like the following using for loops:
//
//     [[0, 1, 2]
//      [0, 1, 2]
//      [0, 1, 2]]
for (i = 0; i < depth; i++){
    newArr[i] = [];
    for (j = 0; j < depth; j++){
        newArr[i].push(j);
    }
}
console.log(newArr);
// Given a grid like the previous ones, write a for loop that would change every number to an x.
var grid = [[0, 1, 2],
            [0, 0, 0],
            [0, 5, 1]];

//for (i = 0; i < grid.length; i++){
    for (j = 0; j < grid.length; j++){
        grid[j].fill('x');
    //}
}
console.log(grid);