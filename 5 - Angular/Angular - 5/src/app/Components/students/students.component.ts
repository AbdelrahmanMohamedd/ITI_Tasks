import { Component } from '@angular/core';
import { DemoService } from 'src/app/Services/demo.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent {

  constructor(public myService:DemoService){}

  AddStud(id:any,name:any,email:any,city:any){
    this.myService.AddNewStudentByID({id,name,email,city}).subscribe();
    alert("Done,Back to Home and Check the end of studends Table")
  }
  
}
