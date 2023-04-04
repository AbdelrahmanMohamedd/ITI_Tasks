import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/Routing/header/header.component';
import { HomeComponent } from './Components/Routing/home/home.component';
import { StudentsComponent } from './Components/Routing/students/students.component';
import { StudentDetailsComponent } from './Components/Routing/student-details/student-details.component';
import { ErrorComponent } from './Components/Routing/error/error.component';
import { RouterModule, Routes } from '@angular/router';

var myRoutes:Routes =[
                      {path:'',component:HomeComponent},
                      {path:'students',component:StudentsComponent},
                      {path:'students/:id',component:StudentDetailsComponent},
                      {path:'**',component:ErrorComponent}
                    ]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent, 
    StudentsComponent,
    StudentDetailsComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(myRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
