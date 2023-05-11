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
        
    Student.prototype = Object.create(Person.prototype);
    Student.prototype.constructor = Student;
    
    Person.prototype.brain = 1
    Student.prototype.sense = 1


let Student1 = new Student("Inem",32,"COJS","15JS022028");
console.log(Student1.arms);
console.log(Student1.brain)
console.log(Student1.sense)



  