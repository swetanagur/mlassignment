import { Component, OnInit } from '@angular/core';
import {Course} from "../course";
import {CourseService} from "../course.service";


@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  courses : Course[];

  data: Course;

  showForm : boolean = false;

  constructor(private courseService : CourseService) { this.data = new Course();}

  ngOnInit() {

    this.getCourses();
  }

  createForm(){
    this.showForm = true;
  }

   getCourses() {
    this.courseService.getCourses()
      .subscribe((courses) => this.courses = courses)
  }

  addCourse():void {
    this.courseService.addCourse(this.data)
      .subscribe(course => {
        this.courses.push(course);
      });

    this.showForm = false;
  }

  deleteCourse(id){
    this.courseService.deleteCourse(id).subscribe(response =>{console.log(response);    this.getCourses();})
  }
}
