///////////////////////////////////// Task 1 ////////////////////////////////////////////////
use FacultySystemV2         
db.createCollection("Students",{         ////  Students Schema
    validator:{
        $jsonSchema:{
            bsonType:"object",
            required:["FirstName","LastName","IsFired","FacultyID","CoursesGrades"],
            properties:{
                FirstName:{
                    bsonType:"string",
                    description:"FirstName should be string and Required"
                },
                LastName:{
                    bsonType:"string",
                    description:"LastName should be string and Required"
                },
                IsFired:{
                    bsonType:"bool",
                    description:"IsFired is Boolean Typed and Required"
                },
                FacultyID:{
                    bsonType:"string",
                    description:"FacultyID is a string and Required"
                },
                CoursesGrades:{
                    bsonType:"array",
                    description:"CoursesGrades is array of objects and Required",
                    items:{
                        bsonType:"object",
                        required:["CourseID","grade"],
                        properties:{
                            CourseID:{
                                bsonType:"number",
                                description:"CourseID is a string and Required"
                            },
                            grade:{
                                bsonType:"number",
                                minimum:0,
                                maximum:100,
                                description:"grade is a number between 0 to 100 and Required "
                            }
                        }
                    }
                }
            }
        }
    }  
});

db.createCollection("Faculty",{      ////  Faculty Schema
    validator:{
        $jsonSchema:{
            bsonType:"object",
            required:["FacultyName", "Address"],
            properties:{
                FacultyName:{
                    bsonType:"string",
                    description:"FacultyName is String and required"
                },
                Address:{
                    bsonType:"string",
                    description:"Address is String and required"
                }
            }
        }
    }
})

db.createCollection("Course",{        ////  Course Schema
    validator:{
        $jsonSchema:{
            bsonType:"object",
            required:["CourseName","FinalMark"],
            properties:{
                CourseName:{
                    bsonType:"string",
                    description:"CourseName is String and required"         
                },
                FinalMark:{
                    bsonType:"int",
                    maximum:100,
                    description:"FinalMark is number not greater than 100, and required" 
                }
            }
        }
    }
})
//
//db.counter.insertOne({key1:1000});      ////  ID Genrator Function for Student
//function autoIncStudID(){
//    let id=db.counter.findOne().key1;
//    db.counter.updateOne({},{$inc:{key1:1}})
//    return id;
//} 

                                   
db.Students.insertMany([{                /// inserting data into Students
    _id:1,
    FirstName:"Abdelrahman",
    LastName:"Mohamed",
    IsFired:false,
    FacultyID:"FCICU",
    CoursesGrades:[{CourseID:2,grade:90},{CourseID:4,grade:93},{CourseID:1,grade:85}]
},{
    _id:2,
    FirstName:"Saleh",
    LastName:"Ahmed",
    IsFired:false,
    FacultyID:"FCIH",
    CoursesGrades:[{CourseID:1,grade:70},{CourseID:3,grade:56},{CourseID:5,grade:65}]
},{
    _id:3,
    FirstName:"Omar",
    LastName:"Mahmoud",
    IsFired:false,
    FacultyID:"FECU",
    CoursesGrades:[{CourseID:2,grade:77},{CourseID:4,grade:89},{CourseID:3,grade:90}]
},{
    _id:4,
    FirstName:"Nabil",
    LastName:"Samir",
    IsFired:false,
    FacultyID:"BIS",
    CoursesGrades:[{CourseID:1,grade:77},{CourseID:4,grade:89},{CourseID:5,grade:90}]
},{
    _id:5,
    FirstName:"Hossam",
    LastName:"Wagdy",
    IsFired:false,
    FacultyID:"MTI",
    CoursesGrades:[{CourseID:5,grade:77},{CourseID:3,grade:89},{CourseID:4,grade:90}]
}]);
db.Students.find();


db.Faculty.insertMany([                     /// inserting data into Faculty         
{_id:1 ,FacultyName:"FECU"    ,Address:"Giza"},
{_id:2 ,FacultyName:"BIS"     ,Address:"Zamalek"},
{_id:3 ,FacultyName:"Arts"    ,Address:"Dokki"},
{_id:4 ,FacultyName:"Medicine",Address:"SayedaZainab"},
{_id:5 ,FacultyName:"AUC"    ,Address:"Tagamo3"}
])
db.Faculty.find();


db.Course.insertMany([                          /// inserting data into Course          
{_id:1, CourseName:"DataBase Fundamentals",FinalMark:50},
{_id:2, CourseName:"Network Fundamentals",FinalMark:60},
{_id:3, CourseName:"Operating Sytems ",FinalMark:70},
{_id:4, CourseName:"Signals",FinalMark:80},
{_id:5, CourseName:"Object Oriented Programming",FinalMark:100}
])
db.Course.find();
////////////// Task 2 //////  Display the sum of final mark for all courses in Course collection
db.Course.aggregate([
{$group:{_id:'marks',TotalFinalMarks:{$sum:'$FinalMark'}}}
])
////////////// Task 3 //////  1:M relation(Student & Course), by adding array of Courses IDs in student 
db.Students.aggregate([
{
    $match:{FirstName:"Abdelrahman"}
},
{
   $lookup:{
       from:"Course",
       localField:"CoursesGrades.CourseID", 
       foreignField:"_id",
       as:"StudCourses"       } }
,
{
   $project:{'StudCourses.CourseName':1}}])
db.Students.find()
////////////// Task 4 //////  student & faculty relation by adding faculty in student using id Relation using $Lookup.
db.Students.aggregate([
{
        $match:{FirstName:"Abdelrahman"}
    },
    {    
        $lookup:{
            from:"Faculty",
            localField:"_id",
            foreignField:"_id",
            as:"sdtFaculty"
        }
    },
    {
       $project:{FirstName:1,sdtFaculty:1}
    }  ])
    
   
