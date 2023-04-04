import { Course } from "src/Endpoints/courses/entities/course.model";


export class Student{
    constructor(public id:number, public name:string, public year:number, public age:number, public courses:any[]){}
}