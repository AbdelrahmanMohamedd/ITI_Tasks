import { PartialType } from '@nestjs/mapped-types';
import { CreateStudentDto } from './create-student.dto';
import { IsNotEmpty,IsUUID,IsString,Length,IsNumber, Min, Max  } from "class-validator";
import { isString, MIN, min } from "class-validator/types/decorator/decorators";



export class UpdateStudentDto extends PartialType(CreateStudentDto) { 
    
    @IsNotEmpty()
    @IsNumber()
    id:number;   

    @Length(3,100)
    @IsString()
    @IsNotEmpty()
    name:string; 

    @IsNotEmpty()
    year:number; 
    
    @Max(60 , {message: "must be younger than 60 years "})
    @Min(18 , {message: "must be older than 18 years old"})
    age:number; 

    courses:[];

}
