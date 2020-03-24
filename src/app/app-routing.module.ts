import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DashboardComponent} from "./dashboard/dashboard.component";
import {StudentsComponent} from "./students/students.component";
import {CoursesComponent} from "./courses/courses.component";
import {StudentDetailComponent} from "./students/student-detail/student-detail.component";
import {StudentEditComponent} from "./students/student-edit/student-edit.component";
import {CourseDetailComponent} from "./courses/course-detail/course-detail.component";
import {CourseEditComponent} from "./courses/course-edit/course-edit.component";

const routes: Routes = [  { path: '', component: DashboardComponent },
  { path: 'students', component: StudentsComponent },
  { path: 'studentdetail/:id', component: StudentDetailComponent },
  { path: 'editStudent/:id', component: StudentEditComponent },
  { path: 'courses', component: CoursesComponent },
  { path: 'coursedetail/:id', component: CourseDetailComponent },
  { path: 'editCourse/:id', component: CourseEditComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
