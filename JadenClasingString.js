function toJadenCase(words){
    let letters = words.split("")
    for (let i = 0; i < letters.length ; i++) {
        letters[0] = letters[0].toUpperCase();
        if (letters [i] === " "){
            letters[i+1] = letters[i+1].toUpperCase();
        }
    }
    return letters.toString().split(',').join("")
}
const word = "How can mirrors be real if our eyes aren't real";
let result = toJadenCase(word);
console.log(result);