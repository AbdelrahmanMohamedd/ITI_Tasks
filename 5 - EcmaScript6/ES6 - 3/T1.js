////////////////////////////////  Prob 1 ////////////////////////////////////////////////
class Shape{
    constructor(length){
        if(this.constructor==Shape) {throw 'This is Abstract Class';}
        this.length=length;
    }
    area(){}
    parameter(){}
}



class Rectangle extends Shape{
    constructor(length,width){
        super(length);
        this.width=width;
    }
    area(){
        let area = this.length*this.width;
        return area;
    }
    parameter(){
        let Parmtr = (this.length+this.width)*2;
        return Parmtr;
    }
}
Rectangle.prototype.toString=function(){
    console.log(`Rectangle's Area >> ${this.area()} `)
    console.log(`Rectangle's Parameter >> ${this.parameter()} `)
}


class Square extends Shape{
    constructor(side){
        super(side);
    }
    area(){
        let area=this.length*this.length;
        return area;
    }
    parameter(){
        let prmtr=this.length*4;
        return prmtr;
    }
}
Square.prototype.toString=function(){
    console.log(`Square's Area >> ${this.area()} `)
    console.log(`Square's Parameter >> ${this.parameter()} `)
}

class Circle extends Shape{
    constructor(radius){
        super(radius);
        const PI=3.14;
        this.pi=PI;
    }
    area(){
        let area=this.pi*this.length*this.length;
        return area;
    }
    parameter(){
        let circumf= 2*this.pi*this.length;
        return circumf;
    }
}
Circle.prototype.toString=function(){
    console.log(`Circle's Area >> ${this.area()} `)
    console.log(`Circle's Parameter >> ${this.parameter()} `)
}

class Triangle extends Shape{
    constructor(side1,side2,base,h){
        super(side1);
        this.side2=side2;
        this.base=base;
        this.h=h;
    }
    area(){
        let area = 0.5 * this.base * this.h;
        return area;
    }
    parameter(){
        let prmtr= this.length + this.side2 + this.base;
        return prmtr;
    }
}
Triangle.prototype.toString=function(){
    console.log(`Triangle's Area >> ${this.area()} `)
    console.log(`Triangle's Parameter >> ${this.parameter()} `)
}









var s = new Square(1)
s.toString();

var c = new Circle(4)

c.toString();

var r = new Rectangle(3,4)
r.toString();

var t = new Triangle(3,4,5,4)
t.toString();























