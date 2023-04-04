import { Injectable } from '@nestjs/common';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
import { Course } from './entities/course.model';

@Injectable()
export class CoursesService {
  private Courses:Course[] =[{
                              id:1111,
                              name:"CS",
                              instructor:"Mustafa",
                            },
                            {
                              id:2222,
                              name:"JS",
                              instructor:"Nasser",
                            },
                            {
                              id:3333,
                              name:"CS",
                              instructor:"Emad",
                            },
                            {
                              id:4444,
                              name:"JS",
                              instructor:"Abdelluah",
                            },
                            {
                              id:5555,
                              name:"CS",
                              instructor:"Mohamed",
                            },
                            {
                              id:6666,
                              name:"JS",
                              instructor:"Shaker",
                            }]

  create(createCourseDto: CreateCourseDto) {
    return 'This action adds a new course';
  }

  findAll() {
    return `This action returns all courses`;
  }

  findOne(id: number) {
    return `This action returns a #${id} course`;
  }

  update(id: number, updateCourseDto: UpdateCourseDto) {
    return `This action updates a #${id} course`;
  }

  remove(id: number) {
    return `This action removes a #${id} course`;
  }
}
