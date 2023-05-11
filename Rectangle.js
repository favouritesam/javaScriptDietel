class Shape{
    constructor(name){
    let _name = name;
}
get getName(){
   return _name
}
}



class Rectangle extends Shape{
    constructor(name,sideOne,sideTwo){
    super(name);
    this.sideOne = sideOne;
    this.sideTwo = sideTwo;
    }
    getArea(){
      return  this.sideOne * this.sideTwo
      
      
    }
    IsSquare(){
        return this.sideOne === this.sideTwo
    }
}
let rectangle = new Rectangle("rectangle",4,2);
let shape = new Shape("shape",2,2)
console.log(rectangle.IsSquare());
 console.log(rectangle.getArea());     
    
