import { Component } from '@angular/core';
import { FormControl,FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent{
  StudentFormValidation = new FormGroup({
    name: new FormControl("",[Validators.required,Validators.minLength(5),Validators.maxLength(100)]),
    age: new FormControl("",[Validators.required,Validators.min(20),Validators.max(40)]),
    Email: new FormControl("",[Validators.required,Validators.email,Validators.minLength(10),Validators.maxLength(100)])
  })

  get validName(){
    return this.StudentFormValidation.controls.name.valid;
  }
  get validAge(){
    return this.StudentFormValidation.controls.age.valid;
  }
  get validEmail(){
    return this.StudentFormValidation.controls.Email.valid;
  }


  Submit(){
    if(this.StudentFormValidation.valid)  alert(" Okkkk, >> ITs VALID,,,");
    else alert("XxXxXxXxX  > ItsNot Valid <   XxXxXxXxX")
  }


}
