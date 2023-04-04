cls
show dbs
show collections
use ITI   
db.createCollection("Instructors");
show collections
/* 6.a   */
db.Instructors.insert([
{_id:111,firstName:"Abdelrahman", lastName:"Mohamed", age:23},
{_id:222,firstName:"Ibrahem", lastName:"salah", age:26},
{_id:333,firstName:"Sayed", lastName:"Ahmed", age:27}
])
db.Instructors.find()
db.Instructors.insert({_id:444, age:23})   /* 6.b   no error just empty fields */

/* 6.c     */
let instructorsArray = [{_id:6,firstName:"noha",lastName:"hesham",
                age:21,salary:3500,
                address:{city:"cairo",street:10,building:8},
                courses:["js","mvc","signalR","expressjs"]},
                
                {_id:7,firstName:"mona",lastName:"ahmed",
                age:21,salary:3600,
                address:{city:"cairo",street:20,building:8},
                courses:["es6","mvc","signalR","expressjs"]},
                
                {_id:8,firstName:"mazen",lastName:"mohammed",
                age:21,salary:7040,
                address:{city:"Ismailia",street:10,building:8},
                courses:["asp.net","mvc","EF"]},
                
                {_id:9,firstName:"ebtesam",lastName:"hesham",
                age:21,salary:7500,
                address:{city:"mansoura",street:14,building:3},
                courses:["js","html5","signalR","expressjs","bootstrap"]}
                ];
db.Instructors.insert(instructorsArray);  
db.Instructors.find()

/*   7  */
db.Instructors.find()    /* a */
db.Instructors.find({},{firstName:1,lastName:1,address:1})             /* b */
db.Instructors.find({age:21},{firstName:1,address:{city:1} })          /* c */
db.Instructors.find( {'address.city':"mansoura"} , {firstName:1,age:1})   /* d */      
db.Instructors.find( {address:{city:"mansoura"}} , {firstName:1,age:1})   /* why not working????????? */ 


db.instructors.find({firstName:"mona"},{lastName:"ahmed"},{firstName:1,lastName:1})   /* e 1 */ 
/* find() takes the fisrt couple objects and ignores the rest , as the 1st one is condition and the 2nd is for projection */ 

db.instructors.find({courses:"mvc"},{firstName:1,courses:1})   /* e 2 */ 
/*    courses is an array not field with value   */ 



      