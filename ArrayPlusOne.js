// plusOne = [9,9,9];
// let x = [];
// let number = 1;
// for (let index = plusOne.length-1; index >= 0; index--) {
//     let sum = plusOne [index] + number;
//     number = sum > 9 ? 1 : 0;
//     x.unshift(sum %10)
    
//     }
// if(number ){
//     x. unshift(number);
    
// }
// console.log(x);

function plusOne(array){
    let arr = "";
    for (let index = 0; index < array.length; index++) { 
        arr += array[index]
    }
           let newNum = Number(arr)+1
           let arrs = newNum.toString()
           let newArray = [arrs.length];
           for (let i = 0; i < arrs.length; i++) {
            newArray[i] = Number(arrs.charAt(i))
           } 
           return newArray 
        }
        let arrays =[9,9,9]
        console.log(plusOne(arrays))


        
    
    
    
    
    


    
    
