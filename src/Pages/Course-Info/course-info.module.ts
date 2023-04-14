import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseInfoComponent } from './course-info.component';
import { AboveNavModule } from 'src/Components/AboveNav/above-nav.module';
import { NavbarModule } from 'src/Components/Navbar/navbar.module';
import { CoursesDataModule } from 'src/Components/courses-data/courses-data.module';
import { FooterModule } from 'src/Components/footer/footer.module';


@NgModule({
  declarations: [
    CourseInfoComponent
  ],
  imports: [
    CommonModule,
    AboveNavModule,
    NavbarModule,
    CoursesDataModule,
    FooterModule
  ],
  exports:[CourseInfoComponent]
})
export class CourseInfoModule { }
