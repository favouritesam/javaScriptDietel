// function buyVehicle(month){
//     return `this car month is ${month} has ${this.wheels}wheels`
// }

//     let vehicle = {wheels:2 ,buyVehicle}
//     let vehicle2 = {wheels:4,buyVehicle}
//     console.log(vehicle.buyVehicle('may'));
//     console.log(vehicle2.buyVehicle('April'));



//     let rabbit = {};
// rabbit.speak = function(line){
//     console.log(`the rabbit says '${line}'`);
// }
// rabbit.speak("I'm alive.")


// function speak(line){
//     console.log(`The & ${this.type} rabbit says ${this.line}`)
// }
// let whiteRabbit = {type:"white",speak}
// let hungryRabbit = {type:"hungry",speak}
// console.log(whiteRabbit.speak)
// console.log(hungryRabbit.speak)

// speak.call(whiteRabbit,"to day is really beautiful ")
// speak.call(hungryRabbit,"which i can have a carrot right now ")

// let vehicle = {
//     wheels : 4
// };
// let car ={
//     seats:5,
//     __proto__:vehicle,
// };
// console.log(car)
// car.__proto__.wheels = 7;
// console.log(car,car.__proto__);
// console.log(vehicle,vehicle.__proto__)
// console.log(car.wheels);
// console.log(vehicle_proto == Object.prototype.isPrototypeOf(vehicle));

function Person(_name,_age,_gender){
    this.name = _name;
    this.age = _age;
    this.gender = _gender;

    this.setAge = (newAge)=>{
        console.log(`Age changed from ${this.age} to ${newAge}`);
        this.age = newAge;
    };
}
let favour = new person("fav",10,"female")
let inem = new person("inem",20,"female")
person.prototype.occupation = "Programmer";
Person.prototype.occupation = "Doctor";
favour.__proto__ = {girlfriend:true}
console.log(favour.girlfriend)
console.log(fav.name);
console.log(inem.name);


    
