import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DemoService } from 'src/app/Services/demo.service';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit{
  ID:any;
  student_catched:any;
  constructor(activeRoute:ActivatedRoute , private myService:DemoService){
    this.ID=activeRoute.snapshot.params["id"];
  }
  ngOnInit(): void {
    this.myService.GetStudentByID(this.ID).subscribe({
      next:(res)=>{
        this.student_catched=res;
      },
      error:(err)=>{}
    })
  }

}
