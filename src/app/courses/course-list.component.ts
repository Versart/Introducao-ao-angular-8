import { Component, OnInit } from "@angular/core";
import { Course } from "./course";
import { CourseService } from "./course.service";

@Component({

  templateUrl: './course-list.component.html'
})
export class CourseListComponent implements OnInit {

  _filteredCourses: Course[] = [];
  _courses: Course[] = [];

  _filterBy:string = '';

  constructor(private courseService: CourseService) {
  }
  ngOnInit(): void {
    this.retrieveAll();
  }

  retrieveAll():void {
    this.courseService.retrieveAll().subscribe({
      next: courses => {this._courses = courses;
        this._filteredCourses = this._courses;},
      error: error => {console.log(error);}
    });

  }

  set filter(value:string) {
    this._filterBy = value;
    this._filteredCourses = this._courses.filter((course : Course) => course.name.toLocaleLowerCase()
    .indexOf(this._filterBy.toLocaleLowerCase()) > -1)
  }

  get filterBy(){
    return this._filterBy;
  }

}
