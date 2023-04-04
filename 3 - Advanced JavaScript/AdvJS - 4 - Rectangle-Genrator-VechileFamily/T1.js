function Shape(width, height){
    Object.defineProperty(this, "width",{value: width,  writable:true, configurable:true,  enumerable:true})
    Object.defineProperty(this, "height",{value:height, writable:true, configurable:true,  enumerable:true})
    }

Shape.prototype.CalcArea=function(){
    if (this.width!=undefined && this.height!=undefined && this.width>0 && this.height>0){
        var area = this.width*this.height;
        return area;
        }
        else console.log(" No data... \n Redeclare the object with width & height values")
}
Shape.prototype.CalcPerimeter=function(){
    if (this.width!=undefined && this.height!=undefined && this.width>0 && this.height>0){
        var prmtr = (this.width + this.height)*2;
        return prmtr;
    }
    else console.log(" No data... \n Redeclare the object with width & height values");
}
Shape.prototype.valueOf=function(){
    return (this.width*this.height)
}
Shape.prototype.toString=function(){
    console.log(" Height >> " + this.height);
    console.log(" Width >> " + this.width);
    console.log(" Area >> "  + this.CalcArea());
    console.log(" Perimeter >> " + this.CalcPerimeter());
}

///////////////////////// Rectangle ////////////////////////////////////////////////////////
function Rectangle(width, height){ 
    if(Rectangle.prototype.counter == undefined) Rectangle.prototype.counter=1;
    else throw(" Only one Rectangle can be created")
    Shape.call(this, width, height);
}
Rectangle.prototype=Object.create(Shape.prototype);
Rectangle.prototype.constructor=Rectangle;

///////////////////////// Square //////////////////////////////////////////////////////////
function Square(length){ //  length >> width & height in Shape constructor  
    if(Square.prototype.counter==0)Square.prototype.counter++;
    else throw("Only one Square can be created")
    Shape.call(this, length, length);            
}
Square.prototype=Object.create(Rectangle.prototype);
Square.prototype.constructor=Square;
Square.prototype.counter=0;
    






// function Rectangle(width,height){
//     this.width = width;
//     this.height = height;
    
//     this.CalcArea = function () {
//         if (this.width!=undefined && this.height!=undefined && this.width>0 && this.height>0){
//         var area = width*height;
//         return ("Rectangle's Area = " + area);
//         }
//         else console.log("The rectangle has no data... \n Redeclare the object with width & height values");
//     }

//     this.CalcPerimeter = function(){
//         if (this.width!=undefined && this.height!=undefined && this.width>0 && this.height>0){
//             var prmtr = (width+height)*2;
//             return ("Rectangle's Perimeter = " + prmtr);
//         }
//         else console.log("The rectangle has no data... \n Redeclare the object with width & height values");
//     }

//     this.displayInfo = function(){
//         if (this.width!=undefined && this.height!=undefined && this.width>0 && this.height>0){
//         console.log(
//             "\nRectangle's Width = " + this.width +
//             "\nRectangle's  Heigth = " + this.height )
//         console.log(this.CalcPerimeter() + "\n" +  this.CalcArea() );
//         }
//         else console.log("The rectangle has no data... \n Redeclare the object with width & height values");
//     }
// }