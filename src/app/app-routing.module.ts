import { NgModule } from '@angular/core';
import { Routes , RouterModule } from '@angular/router';
import { CoursesComponent } from 'src/Pages/Courses/courses.component';
import { CourseInfoComponent } from 'src/Pages/Course-Info/course-info.component'

const routes: Routes = [
  {path:'' , component:CoursesComponent},
  {path:'course/:id' , component:CourseInfoComponent}
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
