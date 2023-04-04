//////////////////////// Singleton design pattern ///////////////////////////////////////////////////
class DBConnection {
    constructor(uri) {
        if (DBConnection.Running)   return DBConnection.instance;
        this.uri= uri;
        DBConnection.instance=this;
        DBConnection.Running=true;
        return this;
    }

    connect() {
        console.log(`DB ${this.uri} has been connected!`);
    }
    disconnect() {
        console.log("DB disconnected");
    }
}

const MyConnection = new DBConnection("mongodb://...");
MyConnection.connect();
MyConnection.disconnect();
console.log("\n \n   \n \n");
///////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////// Factory design pattern ///////////////////////////////////////////////////
class book1{
    constructor(owner){
        this.owner=owner;
        this.isbn="AB123";
        this.title="Harry Potter";
        this.author="JK Rowling";
    }
}

class book2{
    constructor(owner){
        this.owner=owner;
        this.isbn="CD456";
        this.title="The Great Gatsby";
        this.author="F. Scott Fitzgerald";
    }
}

class book3{
    constructor(owner){
        this.owner=owner;
        this.isbn="EF789";
        this.title="Moby-Dick";
        this.author="Herman Melville";
    }
}

class book4{
    constructor(owner){
        this.owner=owner;
        this.isbn="AZ123";
        this.title="Tales Of Two Cities";
        this.author="Shakespeer";
    }
}

class book5{
    constructor(owner){
        this.owner=owner;
        this.isbn="MN123";
        this.title="David Coperfield";
        this.author="Charles Dickens";
    }
}


// 1  isbn: "AB123", >>  title: "Harry Potter",         author: "JK Rowling",
// 2  isbn: "CD456", >>  title: "The Great Gatsby",     author: "F. Scott Fitzgerald",
// 3  isbn: "EF789", >>  title: "Moby-Dick",            author: "Herman Melville",
// 4  isbn: "AZ123", >>  title: "Tales Of Two Cities",  author: "Shakespeer",
// 5  isbn: "MN123", >>  title: "David Coperfield",     author: "Charles Dickens",


class BookFactory{
    constructor(){
        this.create = (owner,ISBN) => {
            if (ISBN=="AB123") return new book1("Abdo");
            if (ISBN=="CD456") return new book2("Omar");
            if (ISBN=="EF789") return new book3("Sayed");
            if (ISBN=="AZ123") return new book4("Ahmed");
            if (ISBN=="MN123") return new book5("Gamal");
        }
    }
}

function View(){
    console.log(`This is ${this.title} Book, and read by ${this.owner}`);
}

    const bookFactory = new BookFactory();
    const Library = [];
    console.log(`Library before createing books >> ${Library}`);
    console.log(`-----`);


    Library.push(bookFactory.create("Abdo","AB123"))
    Library.push(bookFactory.create("Omar","CD456"))
    Library.push(bookFactory.create("Sayed","EF789"))
    Library.push(bookFactory.create("Ahmed","AZ123"))
    Library.push(bookFactory.create("Gamal","MN123"))

    console.log("Library AFTER createing books >> \n");
    console.log(Library);

    Library.forEach( book =>{
        View.call(book)
    })