function Box(height, width, length, material) {

this.content=[];

    this.getContent=function(){
        return this.content;
    }

    Object.defineProperty(this, "length",{value: length,     writable:false, configurable:false, enumerable: false})
    Object.defineProperty(this, "width",{value: width,       writable:false, configurable:false, enumerable: false})
    Object.defineProperty(this, "height",{value: height,     writable:false, configurable:false, enumerable: false});
    Object.defineProperty(this, "material",{value: material, writable:false, configurable:false, enumerable: false});

    this.toString=function(){ 
        console.log("Width >> " + this.width + " Height >> " + this.height + " Content >> "  + this.content);
    }

    this.valueOf=function() {return this.content.length;}
    this.add=function(value){this.content.push(value)}
    this.count=function()   {this.content.length;}

    this.delete=function(author){
        for (let i = 0; i < this.content.length; i++) {
            if(this.content[i].author==author){
                this.content.splice(i--, 1);
            }   
        }
    }
}

var boxs=new Box();
Book.prototype.count=0

function Book(bookAuthor, bookTitle, numOfChapters, numOfPages, bookPublisher, numOfCopies){
    this.bookAuthor=bookAuthor;
    this.bookTitle=bookTitle;
    this.numOfChapters=numOfChapters;
    this.numOfPages=numOfPages;
    this.bookPublisher=bookPublisher;
    this.numOfCopies=numOfCopies;
    Book.prototype.count++;

    this.booknumber=function(){
        return this.count
    }
}


///////////////////(bookAuthor, bookTitle, numOfChapters, numOfPages, bookPublisher, numOfCopies)
var book1 =new Book("StevCovey","ThePowerofHabits", 17  ,456, "X_Publisher", 94 );
var book2 =new Book("Shakesper","Talesof2Cities",   20  ,231, "Y_Publisher", 314);
var book3 =new Book("Dickens","Oliver",             47  ,456, "Z_Publisher", 45 );
var book4 =new Book("Dickens","Davidcuperfield",    37  ,456, "B_Publisher", 78 );
var book5 =new Book("Scott","The Great Gatsby",     55  ,456, "A_Publisher", 87 );

boxs.add(book1);
boxs.add(book2);
boxs.add(book3);
boxs.add(book4);
boxs.add(book5);

var boxes = new Box();
boxes.add(book1);
boxes.add(book2);
boxes.add(book3);
boxes.add(book4);
boxes.add(book5);

console.log(boxs.content);