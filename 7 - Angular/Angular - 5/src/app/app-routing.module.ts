import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { StudentDetailsComponent } from './Components/student-details/student-details.component';
import { StudentUpdateComponent } from './Components/student-update/student-update.component';
import { StudentsComponent } from './Components/students/students.component';

const routes: Routes = [
                    {path:'',component:HomeComponent},
                    {path:'students',component:StudentsComponent},
                    {path:'students/:id',component:StudentDetailsComponent},
                    {path:'students/update/:id',component:StudentUpdateComponent}
                ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
