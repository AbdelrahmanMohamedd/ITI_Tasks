import { Injectable } from '@nestjs/common';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { Student } from './entities/student.model';

@Injectable()
export class StudentsService {
  private Students:Student[] =[{
                                  id:111,
                                  name:"Abdo",
                                  year:1,
                                  age:18,
                                  courses:["Stat","Geo","","Math"]
                                },
                                {
                                  id:222,
                                  name:"Omar",
                                  year:2,
                                  age:19,
                                  courses:["MIS","Eng","Eco"]
                                },
                                {
                                  id:333,
                                  name:"Mehriz",
                                  year:3,
                                  age:20,
                                  courses:["JS","CPP","FIS"]
                                },
                                {
                                  id:444,
                                  name:"Ahmed",
                                  year:4,
                                  age:21,
                                  courses:["CS","IS","DS"]
                                }]
  
  
  create(student: CreateStudentDto) {
    this.Students.push(student);
    return student;
  }

  findAll() {
    return this.Students;
  }

  findOne(id: number) {
    return  this.Students.find((student)=> {return +student.id === +id}) || {}
  }

  update(id: number, updateStudentDto: UpdateStudentDto) {
    var studIndx = this.Students.findIndex((student)=>{return +student.id === +id});
    if(studIndx!==-1) {
      this.Students[studIndx]={...this.Students[studIndx],...updateStudentDto}
      return this.Students[studIndx]
    }
    else return undefined;
  }

  remove(id: number) {
    var studIndx = this.Students.findIndex((student)=>{return +student.id === +id});
    if(studIndx!==-1) {
      this.Students.splice(studIndx,1)
      return id
      return this.Students[studIndx]
    }
    else return undefined;
  }
}
