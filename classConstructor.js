
// class Student{
//     constructor(matricNumber,collage){
//         this._matricNumber = matricNumber;
//         this.collage = collage;

//         this.setMatricNumber = (matricNumber)=>{
//             this.matricNumber = matricNumber;
//         }
    
//     }
// } 
// let Student1 = new Student("16CH021506","CST");
// console.log(Student1.getMatricNumber());


class Student{
constructor(matricNumber, collage){
    this._matricNumber = matricNumber;
    this.collage = collage;

    this.getMatricNumber = ()=>{
        return_matricNumber;
        
    }
}
sayHello(){
    return `Hello from ${this.collage}`;
}
static sayCollage(){
    return `Student with matric number - ${this.matricNumber} is `
}
}
class Native extends Student{
    constructor(matricNumber,collage,cohort){
        super(matricNumber,collage);
        this.cohort = cohort;
    }
}

 let Student1 = new Student("16CH021506","CST");
 console.log(Student1.matricNumber);
 JSON.parse()
 JSON.stringify
export default Student;