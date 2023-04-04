var express = require("express");
var app = express(); 

var validator = require("validator");
var mongoose = require('mongoose');

var DB_URL="mongodb://localhost:27017/Courses";
mongoose.connect(DB_URL,{useNewUrlParser:true});

var DBSchema =  mongoose.Schema;
var CoursesSchema = new DBSchema({
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
});

var Courses = mongoose.model("Courses",CoursesSchema);

var db =mongoose.connection;
    db.on("error",()=>{console.log("its Error")});
    db.once("open",()=>{console.log("its Connected ")});

module.exports = Courses; 