import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Course } from "./course";
import { CourseService } from "./course.service";

@Component({
  templateUrl: './course-info.component.html'
})
export class CourseInfoComponent implements OnInit{

  course:Course = {
    code: '',
    description: '',
    duration: 0,
    id: 0,
    imageUrl:'',
    name:'',
    price: 0,
    rating:0,
    releaseDate:''
  };
  constructor(private activatedRoute: ActivatedRoute,private courseService: CourseService){

  }
  ngOnInit(): void {
    let idUrl = this.activatedRoute.snapshot.paramMap.get('id');
    if(idUrl){
      this.courseService.retrieveById(+ idUrl).subscribe({
        next: foundCourse => {
          this.course = foundCourse;
        },
        error: erro => console.log(erro)
      })
    }
  }

  save():void {
    this.courseService.save(this.course).subscribe({
      next: course => console.log(course,course),
      error: erro => console.log(erro)
    });
  }

}
