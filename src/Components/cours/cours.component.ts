import { Component, Input, OnInit } from '@angular/core';
import Course from 'src/model/Course';

@Component({
  selector: 'app-cours',
  templateUrl: './cours.component.html',
  styleUrls: ['./cours.component.css']
})

export class CoursComponent implements OnInit{
  @Input() courseItems:any;
  
  ngOnInit(): void {
    // console.log(this.courseItems);
  }

}
