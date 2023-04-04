const Ajv = require("ajv");
var ajv = new Ajv();
const CourseSchema = {
    type:"object",
    properties:{
        id:{
            type:Number,
            required:true
        },
        CourseName:{
            type:String,
            required:true,
            minLength:3
        },
        CourseCode:{
            type:Number,
            required:true,
            min:100,
            max:999
        },
        CourseHours:{
            type:Number,
            required:true,
            min:3,
            max:7
        },
        CourseDept:{
            type:Number,
            required:true,
            minLength:2
        },
        Instructor:{
            type:String,
            required:true
        }
    }
}
var Validation = ajv.compile(CourseSchema);
module.exports = Validation;

