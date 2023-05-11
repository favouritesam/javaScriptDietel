class Person{
    constructor(name,age,gender){
         this.name = name;
        this.age = age;
        // this.gender = gender;
    }
    get userAge(){
        return this.age;
    }
     set userAge(newAge){
        this.age = newAge;
     }
        greetUser(){
            console.log(`hello${this.name}`)

        
     }
     static printAge(){
        console.log(`${this.name} is ${this.age} years old`)
     }
}
