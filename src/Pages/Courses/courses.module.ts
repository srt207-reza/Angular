import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesComponent } from './courses.component';
import { HeaderModule } from 'src/Components/Header/header.module';
import { MainContentModule } from 'src/Components/main-content/main-content.module';
import { FooterModule } from 'src/Components/footer/footer.module';

@NgModule({
  declarations: [
    CoursesComponent
  ],
  imports: [
    CommonModule,
    HeaderModule,
    MainContentModule,
    FooterModule
  ],
  exports:[CoursesComponent]
})
export class CoursesModule { }
