const CoursesModel = require("../Models/CoursesModel");
// const Valid = require("../Utils/CoursesValidation");

var GetAllCourses = async (req,res)=>{
    var allCourses = await CoursesModel.find();
    res.status(200).json(allCourses);
}


var GetCoursebyID = async (req,res)=>{
    var Course_ID = req.params.id;
    var FoundCourse = await CoursesModel.findById(Course_ID);
    res.status(200).json(Course_ID);
}

var AddnewCourse = async (req,res)=>{
    var Course_ID = req.params.id;
    var NewCourse=req.body;
    var FountCourse = await CoursesModel.findById(Course_ID);
        if(FountCourse) res.status(400).send("This Course is already existed")
        if(Valid){
            var AddingCourse= new CoursesModel(NewCourse);
            await AddingCourse.save();
            res.status(200).send("Course Added Successfully...")
        }
        else await res.status(400).send("Course data not Valid");
}

var UpdateCourse = async (req,res)=>{
    var DatatoUpdate = req.body;
    var Course_ID = req.params.id;
    await CoursesModel.findOneAndUpdate(Course_ID,DatatoUpdate);
    res.status(200).json(CoursesModel.findById(Course_ID));
}

var DeleteCoursebyID = async (req,res)=>{
    var Course_ID = req.params.id;
    var FoundCourse = await CoursesModel.findByIdAndRemove(Course_ID);
    res.status(200).json(CoursesModel.find());
}


module.exports = {
    GetAllCourses,
    GetCoursebyID,
    AddnewCourse,
    UpdateCourse,
    DeleteCoursebyID
};