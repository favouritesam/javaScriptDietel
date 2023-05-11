// let names = ['joy','key','fav','chi','smarty','doc'];
// reversedName = 0;
// for(reversedName in  names.length);
// console.log(names);

let array_of_strings = ['key','joy','fav','chi','sav'];
console.log("The length of the array is ==> "+array_of_strings.length)
let counter = 0;
for (let i = array_of_strings.length - 1; i >= 0; i--) {
    let cup1 = array_of_strings[i];
    array_of_strings[i] = array_of_strings[counter]
    array_of_strings[counter] = cup1;
    if (i == 2) break;
    counter++;
}
console.log(array_of_strings)
