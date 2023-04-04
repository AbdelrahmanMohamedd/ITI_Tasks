import { Component } from '@angular/core';
import { ActivatedRoute ,Router } from '@angular/router';
import { DemoService } from 'src/app/Services/demo.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  ID:any;
  student_toDelete:any;
  constructor(activeRoute:ActivatedRoute ,private myRouter:Router,public myService:DemoService){
    this.ID=activeRoute.snapshot.params["id"]
  }

    students:any;

  ngOnInit(): void {
    this.myService.GetAllStudents().subscribe({
      next:(res)=>{
        this.students=res;
      },
      error:(err)=>{}
    })
  }

  DeleteStudent(id:any){
    this.myService.DeleteStudentByID(id).subscribe({
      next:(res)=>{ 
        this.myRouter.navigate(['/students']);
        alert("Done, Deleted Successfully")   
      },
      error:(err)=>{}
    });
    
  }
  
}
