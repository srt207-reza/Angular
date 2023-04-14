import { Component, OnInit } from '@angular/core';
import { CourseService } from 'src/Service/course.service';
import Course from 'src/model/Course';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css']
})
export class MainContentComponent implements OnInit {
  CourseItem:Course[] = [];

  constructor(private items:CourseService){}
  
  
   ngOnInit(): void {
    this.items.getCourse().subscribe(data => {
      // this.CourseItem = data
      let temp = Object.entries(data)
      let tempData = [];
      for(let i = 0 ; i < temp.length ; i++)
        tempData.push(temp[i][1])
      
      this.CourseItem = tempData
      // console.log(this.CourseItem);
    })
  }


}
