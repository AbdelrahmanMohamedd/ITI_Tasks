// ///////////////////////////////////////////////////////Prob1///////////////////////////////////////////////////
// function Book(id,name,writerName,pagesNum){
//         this.id=id;
//         this.name=name;
//         this.writerName;
//         this.pagesNum;
// }

// function Box(w,h,BookArr){
//         this.width=w;
//         this.height=h;
//         this.books=BookArr;

//         this.CalcNumAllBooksPages = function(){
//                 var TotalPageNum=0;
//                 for (let i=0 ; i<this.books.length ; i++){
//                         TotalPageNum+=this.books[i].pagesNum;
//                 }
//                 return TotalPageNum;
//         }

//         this.area =function(x,y){
//                 this.hei=x;
//                 this.wid=y;
//                 return x*y;
//         }
// }

// var book1 = new Book(10,"Physics","Adyson",210);
// var book2 = new Book(20,"Chemistry","Zweil",220);
// var book3 = new Book(30,"Facebook","Zuckerberg",230);
// var book4 = new Book(40,"Novel1","Deckins",240);
// var book5 = new Book(50,"Novel2","Shakesper",250);

// var BooksBOX =new Box(20,30,[book1,book2,book3,book4,book5]);

//         BooksBOX.CalcNumAllBooksPages();


////////////////////////////////////////////////////Prob2///////////////////////////////////////////////////
function Point3D(x,y,z){
        if(x=="" || y=="" || z==""){
                this.x=0;
                this.y=0;
                this.z=0;
                console.log("You missed one or more value ");
        }
        else {
                this.x=x;
                this.y=y;
                this.z=z;  
                console.log("Point Coordinates accepted "+ x + " " + y + " " + z );
        }


        this.Printer=function (){
                console.log("3DPoint: " + "X= "+ x + ",Y= " + y + ",Z= " + z);
        }
        this.calculateDistance=function(){
                this.x2=a;
                this.y2=b;
                this.z2=c;

                var xDist=(x2-x1)^2;
                var yDist=(y2-y1)^2;
                var zDist=(z2-z1)^2;
                return Math.sqrt(xDist+yDist+zDist);
        }
}

var P1=new Point3D(4,7,9);
var P2=new Point3D(3,6,2);
        console.log(P1.calculateDistance(P2));   