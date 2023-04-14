import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import Course from 'src/model/Course';
import CoursesData from 'src/model/CourseData';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  readonly apiCourseUrl = "https://sabzlearn-52e7d-default-rtdb.firebaseio.com/Courses.json"
  readonly apiCourseDataUrl = "https://sabzlearn-52e7d-default-rtdb.firebaseio.com/Tutorial.json"

  constructor(private httpCourse:HttpClient,private httpCoursData:HttpClient) { }

  getCourseData():Observable<CoursesData[]>{
    return this.httpCoursData.get<CoursesData[]>(this.apiCourseDataUrl)
  }

  getCourse():Observable<Course[]>{
    return this.httpCourse.get<Course[]>(this.apiCourseUrl)
  }
}
