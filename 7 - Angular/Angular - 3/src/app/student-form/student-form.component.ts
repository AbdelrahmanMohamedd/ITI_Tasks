import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css']
})
export class StudentFormComponent {

  name="";
  age:any;
  studentsForms:{name:string, age:number}[] = [];

  get ageTrue (){
    return this.age>=20 && this.age<=30 ;
  }
  
  @Output() gotoParentEvent = new EventEmitter();

  Fire_Add(){
      let student = {name:this.name, age:this.age};
      if(student.age>=20 && student.age<=30 )   this.studentsForms.push(student);
      this.gotoParentEvent.emit(this.studentsForms)
      // console.log(this.studentsForms);
  } 
}
