import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {CourseService} from "../../course.service";
import {Student} from "../../student";
import {Course} from "../../course";

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.css']
})
export class CourseDetailComponent implements OnInit {

  @Input() selectedCourse: Course;

  constructor(private router:Router, private courseService : CourseService,private route: ActivatedRoute) { }

  ngOnInit() {

    this.getCourse();
  }


  goback(){
    this.router.navigate(['/courses'])
  }


  getCourse(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.courseService.getCourse(id)
      .subscribe(response => {console.log('response'+response);

        this.selectedCourse = response;
        console.log(this.selectedCourse);

      });


  }

}
