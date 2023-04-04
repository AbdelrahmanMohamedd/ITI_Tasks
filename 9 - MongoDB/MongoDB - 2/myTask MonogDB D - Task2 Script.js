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


db.Instructors.find({firstName:"mona"},{lastName:"ahmed"},{firstName:1,lastName:1})   /* e 1 */ 
/* find() takes the fisrt couple objects and ignores the rest , as the 1st one is condition and the 2nd is for projection */ 

db.Instructors.find({courses:"mvc"},{firstName:1,courses:1})   /* e 2 */ 
/*    courses is an array not field with value   */ 

//////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////// LAB 2 ////////////////////////////////////////////////
db.Instructors.find()   /* a */
db.Instructors.find({salary:{$gt:4000}},{firstName:1,salary:1})     /* b */
db.Instructors.find({age:{$lte:25}})   /* c */
db.Instructors.find({'address.city':"mansoura",$or:[{'address.street':10,'address.street':14}]},{firstName:1,address:1,salary:1})  /* d */
db.Instructors.find({courses:{$in:["js","jquery"]}}) /* e */  
db.Instructors.find({$and:[{courses:"js"},{courses:"jquery"}]})   /* e "both" */
db.Instructors.find({courses:{$all:["js","jquery"]}})  /* e "both"  using all */
db.Instructors.find({courses:{$exists:1}}).forEach(Instr=>{       /* f */
    print(`${Instr.firstName} , courses: ${Instr.courses.length}`)});    
db.Instructors.aggregate({$sort:{firstName:1,lastName:-1}}).forEach(Instr=>{       /* g */
    print(`FullName: ${Instr.firstName} ${Instr.lastName} , Age: ${Instr.age}`)
});     // al undefiend hwa al rec al fade ale fo2 ale mfhosh Fname wla Lname

db.createCollection("InstructorsData");   /* Bounas */
db.Instructors.find({firstName:{$exists:1},lastName:{$exists:1}}).forEach(Instr=>{       
    db.InstructorsData.insert({FullName:`${Instr.firstName} ${Instr.lastName}`, InstructorAge:`${Instr.age}`})
});    
db.InstructorsData.find();
db.InstructorsData.remove({})


db.Instructors.find()
db.Instructors.find({$or:[{firstName:"mohammed"},{lastName:"mohammed"}]},{firstName:1,lastName:1})        /* h */
db.Instructors.remove({firstName:"ebtesam",courses:{$size:5}})            /* i */
db.Instructors.updateMany({},{$set:{active:1}})        /* j */
db.Instructors.updateMany({firstName:"mazen",lastName:"mohammed",courses:"EF"},{$set:{'courses.2':"jquery"}},{upsert:1})     /* k */
db.Instructors.updateMany({firstName:"noha",lastName:"hesham"},{$push:{courses:"jquery"}})   /* l */
db.Instructors.updateMany({firstName:"mona",lastName:"ahmed"},{$unset:{courses:""}})    /* m */
db.Instructors.updateMany({courses:{$size:4}},{$inc:{salary:-500}})    /* n */
db.Instructors.updateMany({},{$rename:{address:"fullAddress"}})   /* o */
db.Instructors.updateMany({firstName:"noha",lastName:"hesham"},{$set:{'fullAddress.street':20}})  /* p */





        





      