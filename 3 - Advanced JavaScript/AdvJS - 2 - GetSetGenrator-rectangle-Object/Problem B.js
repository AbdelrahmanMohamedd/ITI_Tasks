function rectangle(width,height) {
    this.width = width;
    this.height = height;
    
    this.CalcArea = function () {
        if (this.width!=undefined && this.height!=undefined && this.width>0 && this.height>0){
        var area = width*height;
        return ("Rectangle's Area = " + area);
        }
        else console.log("The rectangle has no data... \n Redeclare the object with width & height values");
    }

    this.CalcPerimeter = function(){
        if (this.width!=undefined && this.height!=undefined && this.width>0 && this.height>0){
            var prmtr = (width+height)*2;
        return ("Rectangle's Perimeter = " + prmtr);
        }
        else console.log("The rectangle has no data... \n Redeclare the object with width & height values");
    }

    this.displayInfo = function(){
        if (this.width!=undefined && this.height!=undefined && this.width>0 && this.height>0){
        console.log(
            "\nRectangle's Width = " + this.width +
            "\nRectangle's  Heigth = " + this.height )
        console.log(this.CalcPerimeter() + "\n" +  this.CalcArea() );
        }
        else console.log("The rectangle has no data... \n Redeclare the object with width & height values");
    }

}

//////////////////////// DONE 
