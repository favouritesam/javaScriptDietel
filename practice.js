let numbers = [1,2,3,4,5,6,7,8,9];
for(let i =0;i<numbers.length;i++){
    for(let first =1;first<numbers.length-i;first++){
        let second = first -1
        cup = numbers[first]
        numbers[first] = numbers[second]
        numbers[second] = cup
    }
}
console.log(numbers)




