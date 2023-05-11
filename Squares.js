// var square = function(n)
// {
// var a = 5;
// let b = 6;
// const c = 7;
// var total = 0;
// var sum = function(arg1,arg2){
//     let b = 7
//     if(c === 7){
//         b = b + a;
//         total = arg1 + arg2;
//         return total;
//     }
// }
// if(total ===13){
//     let loopsum = 0;
//     let a = 6;
//     for(var i = 0;i < n;i++)
//     loopsum = total;
//     if(a === 6 && b === 7){
//         sum(loopsum,n);


//     }
// }

// }
// return n;


// let theNumber = Number (int)(prompt("Pick a number"));
// console.log("Your number is the square root of " +
// theNumber * theNumber);
// let prompt = require('prompt-sync')()

let num = Number(prompt("Pick a number"));
if (num < 10) {
console.log("Small");
} else if (num < 100) {
console.log("Medium");
} else {
console.log("Large");
}