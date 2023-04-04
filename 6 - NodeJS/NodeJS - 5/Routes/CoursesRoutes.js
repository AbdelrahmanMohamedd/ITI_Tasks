var express = require("express");
var Router = new express.Router();
const CoursesController = require("../Controllers/CoursesController");

Router.get("/",CoursesController.GetAllCourses);

Router.get("/:id",CoursesController.GetCoursebyID);

Router.post("/add",CoursesController.AddnewCourse);

Router.put("/update/:id",CoursesController.UpdateCourse);

Router.delete("/delte/:id",CoursesController.DeleteCoursebyID);


module.exports = Router;