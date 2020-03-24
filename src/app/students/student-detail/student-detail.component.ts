import {Component, Input, OnInit} from '@angular/core';
import {StudentService} from "../../student.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Student} from "../../student";
import {CourseService} from "../../course.service";
import {Course} from "../../course";

@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.css']
})
export class StudentDetailComponent implements OnInit {

  @Input() selectedStudent: Student;

  @Input()student: Student;

   @Input() courses : Course[];




  constructor(private studentService: StudentService,private route: ActivatedRoute, private router :Router, private courseService:CourseService) { }

  ngOnInit() {
    this.getStudent();
    this.getcourse();
  }

  goback(){
    this.router.navigate(['/students'])
  }


  getcourse(){
    this.courseService.getCourses().subscribe(data => {this.courses = data});
  }


  getStudent(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.studentService.getStudent(id)
      .subscribe(response => {console.log('response'+response);
        console.log(this.courses);
      this.selectedStudent = response;
      console.log(this.selectedStudent);

      });


  }







  
}
