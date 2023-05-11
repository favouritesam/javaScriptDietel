function Person (name,age){
    this.name = name;
    this.age = age;
    this.arms = 2;
    this.legs = 2;

}

function Student(name,age,collage,matricNumber){
    Person.call(this,name,age);
    this.collage = collage;
    this.matricNumber = matricNumber;


}
let Student1 = new Student("Inem",32,"COJS","15JS022028");
console.log(Student1.arms);







// Person.shoeSize = 40;
// let chima = new Person ("chima","23");
// let kene = new Person ("kene","26");
// chima.shoeSize = 39;
// console.log(chima.name);
// console.log(kene.name);

// classes expression in creating a constructor
// let name = new (class{
//  sayHello(name){
//     return `Hello ${name}`;

//  }
// })();
// console.log(name.sayHello("sherrif"));


