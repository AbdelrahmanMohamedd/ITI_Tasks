const express = require ("express");
const app = new express();

const Ajv = require ("Ajv")
const ajv = new Ajv()
const bodyParser = require ("body-parser")
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())
const PORT = process.env.PORT || 7005;



var CourseRoutes = require("./Routes/CoursesRoutes");
app.use("/api/Courses",CourseRoutes)


app.listen(PORT,()=>{console.log("http://localhost:"+PORT)})