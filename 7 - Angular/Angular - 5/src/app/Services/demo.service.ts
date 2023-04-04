import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DemoService {

  constructor(private myClient:HttpClient) {}

    private Base_URL=" http://localhost:3000/users";

  GetAllStudents(){
    return this.myClient.get(this.Base_URL);
  }


  GetStudentByID(id:any){
    return this.myClient.get(`${this.Base_URL}/${id}`);
  }

  
  AddNewStudentByID(student:any){
    return this.myClient.post(this.Base_URL,student);
  }

  UpdateStudentByID(id:any,updatedstudent:any){ 
    return this.myClient.put(`${this.Base_URL}/${id}`,updatedstudent); 
  }
  
  DeleteStudentByID(id:any){
    return this.myClient.delete(`${this.Base_URL}/${id}`);
  }


}
