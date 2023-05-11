let array_of_strings = ["girl","good","a","is","favourite"];
console.log("show in reversed order:" + Array.toString(array_of_strings));
for (let i = 0; i < array_of_strings.length -1; i++) {
    let temp = array_of_strings[i];
    array_of_strings[i] = array_of_strings[array_of_strings.length -i - 1 ];
    array_of_strings[array_of_strings.length] = temp;
}
console.log(array_of_strings);