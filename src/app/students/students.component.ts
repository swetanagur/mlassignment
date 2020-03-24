import { Component, OnInit } from '@angular/core';
import {Student} from "../student";
import {StudentService} from "../student.service";
import {ActivatedRoute} from "@angular/router";
import {Singlestudent} from "../singlestudent";

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  showForm : boolean = false;

  students: Student[];

  data: Student;


  createForm(){
    this.showForm = true;
  }


  constructor(private studentService: StudentService) { this.data = new Student(); }

  ngOnInit() {

    this.getStudents();

  }

   getStudents() {

    this.studentService.getStudents()
      .subscribe((students) => this.students = students)

  }



  addStudent():void {
    this.studentService.addStudent(this.data)
      .subscribe(student => {
        this.students.push(student);
      });

    this.showForm = false;
  }

  deleteStudent(id){
    this.studentService.deleteStudent(id).subscribe(response =>{console.log(response);    this.getStudents();})
  }


}
