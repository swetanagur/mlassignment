import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentsComponent } from './students/students.component';
import { CoursesComponent } from './courses/courses.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {StudentService} from "./student.service";
import {HttpClientModule} from "@angular/common/http";
import {CourseService} from "./course.service";
import {FormsModule} from "@angular/forms";
import { StudentDetailComponent } from './students/student-detail/student-detail.component';
import { StudentEditComponent } from './students/student-edit/student-edit.component';
import { CourseDetailComponent } from './courses/course-detail/course-detail.component';
import { CourseEditComponent } from './courses/course-edit/course-edit.component';


@NgModule({
  declarations: [
    AppComponent,
    StudentsComponent,
    CoursesComponent,
    DashboardComponent,
    StudentDetailComponent,
    StudentEditComponent,
    CourseDetailComponent,
    CourseEditComponent




  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [StudentService,CourseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
