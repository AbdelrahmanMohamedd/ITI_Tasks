import { Component , OnInit} from '@angular/core';
import { DemoService } from 'src/app/Services/demo.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-student-update',
  templateUrl: './student-update.component.html',
  styleUrls: ['./student-update.component.css']
})
export class StudentUpdateComponent implements OnInit{
  ID:any;
  student_toUpdate:any;
  constructor(activeRoute:ActivatedRoute ,public myService:DemoService){
    this.ID=activeRoute.snapshot.params["id"]
  }
  ngOnInit(): void {
    this.myService.GetStudentByID(this.ID).subscribe({
      next:(res)=>{
        this.student_toUpdate=res;
      },
      error:(err)=>{}
    })
  }

  UpdateStud(name:any,email:any,city:any){
    console.log(name,email,city); 
    var updated=this.student_toUpdate;
    updated.name=name;
    updated.email=email;
    updated.city=city;
    console.log(updated); 
    this.myService.UpdateStudentByID(this.ID,updated).subscribe();
    alert("Done,Check The Update there in HOME")
  }

}
