import {Component, Input, OnInit} from '@angular/core';
import {StudentService} from "../../student.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Student} from "../../student";

@Component({
  selector: 'app-student-edit',
  templateUrl: './student-edit.component.html',
  styleUrls: ['./student-edit.component.css']
})
export class StudentEditComponent implements OnInit {

  @Input() student;

  constructor(private studentService:StudentService, private router:Router, private route:ActivatedRoute) { }

  ngOnInit() {

  this.getStudent()
  }

  goback(){
    this.router.navigate(['/students'])
  }

  getStudent(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.studentService.getStudent(id)
      .subscribe(data => {console.log(data);
        this.student = data ;}
     );
  }

  save(): void{

    this.studentService.updateStudent(this.student).subscribe(() => {this.goback()});
  }




}
