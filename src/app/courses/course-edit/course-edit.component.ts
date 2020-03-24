import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {CourseService} from "../../course.service";

@Component({
  selector: 'app-course-edit',
  templateUrl: './course-edit.component.html',
  styleUrls: ['./course-edit.component.css']
})
export class CourseEditComponent implements OnInit {

  @Input() course;

  constructor(private router:Router, private route:ActivatedRoute, private courseService : CourseService) { }

  ngOnInit() {

    this.getCourse()
  }


  goback(){
    this.router.navigate(['/courses'])
  }



  getCourse(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.courseService.getCourse(id)
      .subscribe(response => {console.log('response'+response);

        this.course = response;
        console.log(this.course);

      });
  }

  save(): void{

    this.courseService.updateCourse(this.course).subscribe(() => {this.goback()});
  }


}
