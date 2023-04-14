import { Component, OnInit } from '@angular/core';
import { CourseService } from 'src/Service/course.service';
import {ActivatedRoute} from '@angular/router'
import CoursesData from 'src/model/CourseData';

@Component({
  selector: 'app-courses-data',
  templateUrl: './courses-data.component.html',
  styleUrls: ['./courses-data.component.css']
})
export class CoursesDataComponent implements OnInit {
  allData:any;
  CourseId:number = 0;
  
  constructor(private items:CourseService , private route:ActivatedRoute){}
  
  ngOnInit(): void {
    this.CourseId = this.route.snapshot.params['id'];
    const num = 22222222226
    console.log(num.toLocaleString('ar-EG'));
    this.items.getCourseData().subscribe(data => {

      let temp = Object.entries(data)

      for(let i = 0 ; i < temp.length ; i++)
        if(temp[i][1].InfoId == this.CourseId)
          this.allData = temp[i][1];

        console.log(this.allData);
    })
  }
}
